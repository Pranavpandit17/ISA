package com.portal.service;

import com.portal.dto.LoginRequest;
import com.portal.dto.LoginResponse;
import com.portal.entity.Member;
import com.portal.entity.MembershipPayment;
import com.portal.entity.User;
import com.portal.entity.MembershipApplication;
import com.portal.repository.MemberRepository;
import com.portal.repository.MembershipPaymentRepository;
import com.portal.repository.UserRepository;
import com.portal.repository.MembershipApplicationRepository;
import com.portal.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private MembershipApplicationRepository applicationRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private MembershipPaymentRepository membershipPaymentRepository;

    public LoginResponse login(LoginRequest loginRequest) {
        try {
            // Normalize email (trim and lowercase)
            String email = loginRequest.getUsername() != null ? loginRequest.getUsername().trim().toLowerCase() : null;
            if (email == null || email.isEmpty()) {
                throw new RuntimeException("Email is required");
            }
            
            // Check if there's a rejected application for this email
            Optional<MembershipApplication> rejectedApp = applicationRepository.findAllByEmailIgnoreCase(email).stream().findFirst();
            if (rejectedApp.isPresent() && rejectedApp.get().getStatus() == MembershipApplication.ApplicationStatus.REJECTED) {
                throw new RuntimeException("Rejected member cant login. only approved member can log in to website");
            }
            
            // Find user by email (case-insensitive)
            User user = userRepository.findByEmailIgnoreCase(email)
                    .orElse(userRepository.findByEmail(email)
                            .orElse(userRepository.findByEmail(loginRequest.getUsername().trim())
                                    .orElseThrow(() -> new RuntimeException("User not found: " + email))));

            // Validate role matches
         /*   if (!user.getRole().name().equalsIgnoreCase(loginRequest.getRole())) {
                throw new RuntimeException("Invalid role. Expected: " + user.getRole().name() + ", Got: " + loginRequest.getRole());
            }*/

            // Check if user is active
            if (!user.getIsActive()) {
                throw new RuntimeException("User account is disabled");
            }

            // Authenticate - use normalized email as username for Spring Security
            // UserDetailsServiceImpl will use email as the username in UserDetails
            // Use the email from the found user (which matches database) for authentication
            String authEmail = user.getEmail(); // Use the actual email from database
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authEmail, // Use email so authentication.getName() returns email
                            loginRequest.getPassword()
                    )
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = tokenProvider.generateToken(authentication);

            // Update last login
            user.setLastLogin(LocalDateTime.now());
            userRepository.save(user);

            LoginResponse response = new LoginResponse();
            response.setToken(jwt);
            response.setType("Bearer");
            response.setId(user.getId());
            response.setUsername(user.getUsername());
            response.setEmail(user.getEmail());
            response.setName(user.getName());
            response.setRole(user.getRole().name());
            populateMembershipProfile(user, response);
            return response;
        } catch (org.springframework.security.core.AuthenticationException e) {
            throw new RuntimeException("Authentication failed: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new RuntimeException("Login failed: " + e.getMessage(), e);
        }
    }

    private void populateMembershipProfile(User user, LoginResponse response) {
        if (user.getRole() == User.Role.ADMIN) {
            response.setUserType("ADMIN");
            response.setMembershipStatus("ACTIVE");
            return;
        }

        response.setUserType("REGULAR");
        response.setMembershipStatus("INACTIVE");

        Optional<Member> memberOpt = memberRepository.findById(user.getId());
        if (memberOpt.isEmpty()) {
            return;
        }
        Member member = memberOpt.get();

        // Auto-mark expired subscriptions to keep state consistent.
        if (member.getMembershipStatus() == Member.MembershipStatus.ACTIVE
                && member.getSubscriptionEndDate() != null
                && member.getSubscriptionEndDate().isBefore(LocalDate.now())) {
            member.setMembershipStatus(Member.MembershipStatus.EXPIRED);
            memberRepository.save(member);
        }

        response.setMembershipStatus(member.getMembershipStatus() != null
                ? member.getMembershipStatus().name()
                : "INACTIVE");

        if (member.getMembershipStatus() != Member.MembershipStatus.ACTIVE) {
            return;
        }

        Optional<MembershipPayment> latestPaid = membershipPaymentRepository
                .findTopByMemberIdAndStatusOrderByCreatedAtDesc(
                        member.getId(),
                        MembershipPayment.PaymentStatus.PAID
                );

        if (latestPaid.isPresent() && latestPaid.get().getPlan() != null) {
            response.setUserType("PREMIUM");
            response.setCurrentPlanId(latestPaid.get().getPlan().getId());
            response.setCurrentPlanName(latestPaid.get().getPlan().getName());
        }
    }

    /**
     * Get user ID by email
     * @param email User email
     * @return User ID or null if not found
     */
    public Long getUserIdByEmail(String email) {
        return userRepository.findByEmail(email)
                .map(User::getId)
                .orElse(null);
    }

    /**
     * Build current user profile payload (without issuing a new token).
     */
    public LoginResponse getCurrentProfile(String email) {
        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new RuntimeException("User not found: " + email));

        LoginResponse response = new LoginResponse();
        response.setId(user.getId());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setName(user.getName());
        response.setRole(user.getRole().name());
        response.setType("Bearer");
        populateMembershipProfile(user, response);
        return response;
    }
}

