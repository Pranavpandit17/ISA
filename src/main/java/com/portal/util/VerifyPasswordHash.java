package com.portal.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * Utility to verify if a password hash matches a password.
 * Useful for debugging authentication issues.
 */
public class VerifyPasswordHash {

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        
        // The hash from the SQL insert
        String storedHash = "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy";
        String password = "password";
        
        System.out.println("=== Password Hash Verification ===");
        System.out.println("Stored Hash: " + storedHash);
        System.out.println("Password to check: " + password);
        System.out.println();
        
        // Check if password matches
        boolean matches = encoder.matches(password, storedHash);
        System.out.println("Password matches: " + matches);
        
        if (!matches) {
            System.out.println("\n⚠️ WARNING: Password hash does NOT match!");
            System.out.println("Generating a new hash for 'password':");
            String newHash = encoder.encode(password);
            System.out.println("New Hash: " + newHash);
            System.out.println("\nUpdate your SQL with this hash:");
            System.out.println("UPDATE users SET password_hash = '" + newHash + "' WHERE username = 'admin';");
        } else {
            System.out.println("\n✅ Password hash is correct!");
        }
        
        // Also check the old hash format
        String oldHash = "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi";
        System.out.println("\n=== Checking old hash format ===");
        System.out.println("Old Hash: " + oldHash);
        boolean oldMatches = encoder.matches(password, oldHash);
        System.out.println("Old hash matches: " + oldMatches);
    }
}

