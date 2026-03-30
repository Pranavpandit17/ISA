package com.portal.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * Utility class to generate BCrypt password hashes.
 * 
 * Usage:
 * Run this class as a Java application to generate password hashes.
 * 
 * Example:
 * java -cp target/classes com.portal.util.PasswordHashGenerator password
 */
public class PasswordHashGenerator {

    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        
        if (args.length > 0) {
            String password = args[0];
            String hash = encoder.encode(password);
            System.out.println("Password: " + password);
            System.out.println("BCrypt Hash: " + hash);
            System.out.println("\nSQL INSERT statement:");
            System.out.println("INSERT INTO `users` (`username`, `email`, `password_hash`, `role`, `name`, `is_active`) VALUES");
            System.out.println("('admin', 'admin@example.com', '" + hash + "', 'admin', 'Admin User', TRUE);");
        } else {
            // Default: generate hash for "password"
            String password = "password";
            String hash = encoder.encode(password);
            System.out.println("=== Password Hash Generator ===");
            System.out.println("Password: " + password);
            System.out.println("BCrypt Hash: " + hash);
            System.out.println("\n=== SQL INSERT Statement ===");
            System.out.println("INSERT INTO `users` (");
            System.out.println("    `username`, ");
            System.out.println("    `email`, ");
            System.out.println("    `password_hash`, ");
            System.out.println("    `role`, ");
            System.out.println("    `name`, ");
            System.out.println("    `is_active`");
            System.out.println(") VALUES (");
            System.out.println("    'admin',");
            System.out.println("    'admin@example.com',");
            System.out.println("    '" + hash + "',");
            System.out.println("    'admin',");
            System.out.println("    'Admin User',");
            System.out.println("    TRUE");
            System.out.println(");");
            System.out.println("\nNote: Each time you run this, a new hash will be generated.");
            System.out.println("All hashes are valid for the same password.");
        }
    }
}

