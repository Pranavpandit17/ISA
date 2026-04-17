package com.portal.service;

import com.portal.dto.LoginRequest;
import com.portal.dto.LoginResponse;
import com.portal.entity.User;
import com.portal.entity.MembershipApplication;
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

    public LoginResponse login(LoginRequest loginRequest) {
        try {
            // Normalize email (trim and lowercase)
            String email = loginRequest.getUsername() != null ? loginRequest.getUsername().trim().toLowerCase() : null;
            if (email == null || email.isEmpty()) {
                throw new RuntimeException("Email is required");
            }
            
            // Check if there's a rejected application for this email
            Optional<MembershipApplication> rejectedApp = applicationRepository.findByEmailIgnoreCase(email);
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

            return new LoginResponse(
                    jwt,
                    "Bearer",
                    user.getId(),
                    user.getUsername(),
                    user.getEmail(),
                    user.getName(),
                    user.getRole().name()
            );
        } catch (org.springframework.security.core.AuthenticationException e) {
            throw new RuntimeException("Authentication failed: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new RuntimeException("Login failed: " + e.getMessage(), e);
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
}

