package com.portal.controller;

import com.portal.dto.CreateUserRequest;
import com.portal.dto.UserResponse;
import com.portal.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // CREATE ADMIN / MEMBER
    @PostMapping
    public ResponseEntity<UserResponse> createUser(
        @Valid @RequestBody CreateUserRequest request) {

        return ResponseEntity.ok(userService.createUser(request));
    }

    // CHECK USER
    @GetMapping("/{username}")
    public ResponseEntity<UserResponse> getUser(@PathVariable String username) {
        return ResponseEntity.ok(userService.getUserByUsername(username));
    }

    // VERIFY PASSWORD
    @PostMapping("/verify-password")
    public ResponseEntity<Map<String, Object>> verifyPassword(
        @RequestBody Map<String, String> request) {

        boolean matches = userService.verifyPassword(
            request.get("username"),
            request.get("password")
        );

        return ResponseEntity.ok(Map.of(
            "username", request.get("username"),
            "passwordMatches", matches
        ));
    }

    @GetMapping("/members")
    public List<UserResponse> getAllMembers() {
        return userService.getAllMembers();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

}
