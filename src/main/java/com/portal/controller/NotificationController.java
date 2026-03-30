package com.portal.controller;

import com.portal.dto.NotificationDTO;
import com.portal.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin(origins = "http://localhost:4200")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<List<NotificationDTO>> getUserNotifications(Authentication authentication) {
        String email = authentication.getName(); // authentication.getName() now returns email
        return ResponseEntity.ok(notificationService.getUserNotifications(email));
    }

    @GetMapping("/unread-count")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<Long> getUnreadCount(Authentication authentication) {
        String email = authentication.getName(); // authentication.getName() now returns email
        return ResponseEntity.ok(notificationService.getUnreadCount(email));
    }

    @PutMapping("/{id}/read")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<Void> markAsRead(@PathVariable("id") Long id, Authentication authentication) {
        String email = authentication.getName();
        boolean isAdmin = authentication.getAuthorities().stream()
                .anyMatch(a -> "ROLE_ADMIN".equals(a.getAuthority()));
        notificationService.markAsRead(id, email, isAdmin);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/mark-all-read")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<Void> markAllAsRead(Authentication authentication) {
        String email = authentication.getName(); // authentication.getName() now returns email
        notificationService.markAllAsRead(email);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/clear-all")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<Void> clearAll(Authentication authentication) {
        String email = authentication.getName(); // authentication.getName() now returns email
        notificationService.clearAllForUser(email);
        return ResponseEntity.ok().build();
    }
}

