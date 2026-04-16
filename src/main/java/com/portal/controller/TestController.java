package com.portal.controller;

import com.portal.entity.User;
import com.portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Temporary test controller for debugging authentication issues.
 * Remove this in production!
 */
@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/check-user/{username}")
    public ResponseEntity<Map<String, Object>> checkUser(@PathVariable String username) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            User user = userRepository.findByUsername(username)
                    .orElse(null);
            
            if (user == null) {
                response.put("exists", false);
                response.put("message", "User not found");
            } else {
                response.put("exists", true);
                response.put("id", user.getId());
                response.put("username", user.getUsername());
                response.put("email", user.getEmail());
                response.put("role", user.getRole().name());
                response.put("isActive", user.getIsActive());
                response.put("hasPasswordHash", user.getPasswordHash() != null && !user.getPasswordHash().isEmpty());
                response.put("passwordHashLength", user.getPasswordHash() != null ? user.getPasswordHash().length() : 0);
                response.put("passwordHashPrefix", user.getPasswordHash() != null && user.getPasswordHash().length() > 7 
                    ? user.getPasswordHash().substring(0, 7) : "N/A");
            }
        } catch (Exception e) {
            response.put("error", e.getMessage());
        }
        
        return ResponseEntity.ok(response);
    }

    @PostMapping("/verify-password")
    public ResponseEntity<Map<String, Object>> verifyPassword(@RequestBody Map<String, String> request) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            String username = request.get("username");
            String password = request.get("password");
            
            User user = userRepository.findByUsername(username)
                    .orElse(null);
            
            if (user == null) {
                response.put("exists", false);
                response.put("message", "User not found");
            } else {
                boolean matches = passwordEncoder.matches(password, user.getPasswordHash());
                response.put("exists", true);
                response.put("passwordMatches", matches);
                response.put("message", matches ? "Password is correct" : "Password does not match");
                
                if (!matches) {
                    // Generate a new hash for the password
                    String newHash = passwordEncoder.encode(password);
                    response.put("newHash", newHash);
                    response.put("suggestion", "Update password_hash in database with the newHash value");
                }
            }
        } catch (Exception e) {
            response.put("error", e.getMessage());
        }
        
        return ResponseEntity.ok(response);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<Map<String, Object>> resetPassword(@RequestBody Map<String, String> request) {
        Map<String, Object> response = new HashMap<>();

        try {
            String username = request.get("username");
            String newPassword = request.get("newPassword");

            if (username == null || username.isBlank() || newPassword == null || newPassword.isBlank()) {
                response.put("success", false);
                response.put("message", "username and newPassword are required");
                return ResponseEntity.badRequest().body(response);
            }

            User user = userRepository.findByUsername(username)
                    .orElseGet(() -> userRepository.findByEmailIgnoreCase(username).orElse(null));

            if (user == null) {
                response.put("success", false);
                response.put("message", "User not found");
                return ResponseEntity.ok(response);
            }

            user.setPasswordHash(passwordEncoder.encode(newPassword));
            userRepository.save(user);

            response.put("success", true);
            response.put("message", "Password reset successfully");
            response.put("username", user.getUsername());
            response.put("email", user.getEmail());
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", e.getMessage());
        }

        return ResponseEntity.ok(response);
    }

    @PostMapping("/create-test-admin")
    public ResponseEntity<Map<String, Object>> createTestAdmin() {
        Map<String, Object> response = new HashMap<>();
        
        try {
            // Check if admin exists
            User existingAdmin = userRepository.findByUsername("admin").orElse(null);
            
            if (existingAdmin != null) {
                response.put("exists", true);
                response.put("message", "Admin user already exists");
                response.put("id", existingAdmin.getId());
            } else {
                // Create new admin user
                User admin = new User();
                admin.setUsername("admin@example.com");
                admin.setEmail("admin@example.com");
                admin.setPasswordHash(passwordEncoder.encode("password"));
                admin.setRole(User.Role.ADMIN);
                admin.setName("Admin User");
                admin.setIsActive(true);
                
                User saved = userRepository.save(admin);
                response.put("created", true);
                response.put("id", saved.getId());
                response.put("message", "Admin user created successfully");
            }
        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("stackTrace", e.getStackTrace());
        }
        
        return ResponseEntity.ok(response);
    }
    
    
    @PostMapping("/create-test-member")
    public ResponseEntity<Map<String, Object>> createTestMember() {
        Map<String, Object> response = new HashMap<>();
        
        try {
            // Check if admin exists
            User existingAdmin = userRepository.findByUsername("member").orElse(null);
            
            if (existingAdmin != null) {
                response.put("exists", true);
                response.put("message", "member user already exists");
                response.put("id", existingAdmin.getId());
            } else {
                // Create new admin user
                User admin = new User();
                admin.setUsername("member");
                admin.setEmail("member@example.com");
                admin.setPasswordHash(passwordEncoder.encode("password"));
                admin.setRole(User.Role.MEMBER);
                admin.setName("member User");
                admin.setIsActive(true);
                
                User saved = userRepository.save(admin);
                response.put("created", true);
                response.put("id", saved.getId());
                response.put("message", "Admin user created successfully");
            }
        } catch (Exception e) {
            response.put("error", e.getMessage());
            response.put("stackTrace", e.getStackTrace());
        }
        
        return ResponseEntity.ok(response);
    }
}

