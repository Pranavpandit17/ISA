package com.portal.service;

import com.portal.dto.LoginRequest;
import com.portal.dto.LoginResponse;
import com.portal.entity.Member;
import com.portal.entity.MembershipPayment;
import com.portal.entity.MembershipFeePlan;
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

import java.math.BigDecimal;
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
        // Expire plan status automatically when plan has crossed expiry date.
        if (user.getPlanStatus() == User.PlanStatus.SELECTED
                && user.getPlanExpiryDate() != null
                && user.getPlanExpiryDate().isBefore(LocalDate.now())) {
            user.setPlanStatus(User.PlanStatus.NOT_SELECTED);
            userRepository.save(user);
        }

        if (user.getSelectedPlan() != null) {
            response.setCurrentPlanId(user.getSelectedPlan().getId());
            response.setCurrentPlanName(user.getSelectedPlan().getName());
            response.setCurrentPlanLevel(user.getSelectedPlan().getLevel());
        }
        response.setPlanStatus(user.getPlanStatus() != null ? user.getPlanStatus().name() : User.PlanStatus.NOT_SELECTED.name());
        response.setPlanStartDate(user.getPlanStartDate());
        response.setPlanExpiryDate(user.getPlanExpiryDate());
        response.setHasPlan(
                response.getCurrentPlanId() != null
                        && user.getPlanStatus() == User.PlanStatus.SELECTED
                        && (user.getPlanExpiryDate() == null || !user.getPlanExpiryDate().isBefore(LocalDate.now()))
        );

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
            MembershipFeePlan latestPlan = latestPaid.get().getPlan();

            if (response.getCurrentPlanId() == null) {
                response.setCurrentPlanId(latestPlan.getId());
                response.setCurrentPlanName(latestPlan.getName());
            }
            if (response.getCurrentPlanLevel() == null) {
                response.setCurrentPlanLevel(resolvePlanLevel(latestPlan));
            }

            // Legacy fallback: if selectedPlan fields aren't populated in DB,
            // treat active membership payment as the currently active plan for UI gating.
            if (response.getPlanStartDate() == null) {
                response.setPlanStartDate(member.getSubscriptionStartDate());
            }
            if (response.getPlanExpiryDate() == null) {
                response.setPlanExpiryDate(member.getSubscriptionEndDate());
            }

            response.setPlanStatus(User.PlanStatus.SELECTED.name());
            response.setHasPlan(
                    response.getPlanExpiryDate() == null || !response.getPlanExpiryDate().isBefore(LocalDate.now())
            );
        }
    }

    private int resolvePlanLevel(MembershipFeePlan plan) {
        if (plan == null) {
            return 0;
        }
        Integer level = plan.getLevel();
        if (level != null && level > 0) {
            return level;
        }

        BigDecimal price = plan.getPrice() != null ? plan.getPrice() : BigDecimal.ZERO;
        if (price.compareTo(BigDecimal.ZERO) <= 0) return 1;
        if (price.compareTo(new BigDecimal("3500")) <= 0) return 2;
        if (price.compareTo(new BigDecimal("7000")) <= 0) return 3;
        return 4;
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

