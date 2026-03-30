package com.portal.controller;

import com.portal.dto.EventRegistrationDTO;
import com.portal.entity.Payment;
import com.portal.entity.User;
import com.portal.repository.UserRepository;
import com.portal.service.EventRegistrationService;
import com.portal.entity.Notification;
import com.portal.service.NotificationService;
import com.portal.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/event-registrations")
@CrossOrigin(origins = "http://localhost:4200")
public class EventRegistrationController {

    @Autowired
    private EventRegistrationService registrationService;

    @Autowired
    private PaymentService paymentService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private NotificationService notificationService;

    @PostMapping
    public ResponseEntity<EventRegistrationDTO> registerForEvent(
            @RequestBody Map<String, Object> request,
            Authentication authentication) {
        Long eventId = Long.valueOf(request.get("eventId").toString());
        Long ticketTypeId = request.get("ticketTypeId") != null ? 
                Long.valueOf(request.get("ticketTypeId").toString()) : null;
        Integer quantity = Integer.valueOf(request.get("quantity").toString());
        Long paymentId = request.get("paymentId") != null ? 
                Long.valueOf(request.get("paymentId").toString()) : null;
        
        // Get user ID from authentication (authentication.getName() now returns email)
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        EventRegistrationDTO registration = registrationService.registerForEvent(eventId, user.getId(), ticketTypeId, quantity, paymentId);

        // Create notification (don't block registration)
        try {
            notificationService.createNotificationForEmail(
                    user.getEmail(),
                    "Event registration confirmed",
                    "You successfully registered for an event. Registration ID: " + (registration != null ? registration.getRegistrationId() : ""),
                    Notification.NotificationType.SUCCESS,
                    Notification.NotificationCategory.EVENT,
                    "/dashboard"
            );
        } catch (Exception ignored) { /* ignore */ }

        // Notify admins that a member registered
        try {
            String eventName = registration != null && registration.getEventName() != null ? registration.getEventName() : ("Event #" + eventId);
            String memberName = user.getName() != null ? user.getName() : user.getEmail();
            Integer qty = registration != null ? registration.getQuantity() : quantity;
            String regId = registration != null ? registration.getRegistrationId() : "";

            notificationService.broadcastToAdmins(
                    "New event registration",
                    memberName + " (" + user.getEmail() + ") registered for '" + eventName + "'" +
                            (qty != null ? (" • Qty: " + qty) : "") +
                            (regId != null && !regId.isBlank() ? (" • Reg: " + regId) : ""),
                    Notification.NotificationType.INFO,
                    Notification.NotificationCategory.EVENT,
                    "/admin-dashboard"
            );
        } catch (Exception ignored) { /* ignore */ }
        return ResponseEntity.ok(registration);
    }

    @PostMapping("/{registrationId}/payment")
    public ResponseEntity<EventRegistrationDTO> processPayment(
            @PathVariable("registrationId") Long registrationId,
            @RequestBody Map<String, Object> paymentData,
            Authentication authentication) {
        
        String email = authentication.getName(); // authentication.getName() now returns email
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        // Create payment record
        Payment payment = paymentService.createPayment(
                user.getId(),
                paymentData.get("paymentMethod").toString(),
                java.math.BigDecimal.valueOf(Double.parseDouble(paymentData.get("amount").toString())),
                paymentData.get("transactionId") != null ? paymentData.get("transactionId").toString() : UUID.randomUUID().toString()
        );

        // Confirm registration with payment
        EventRegistrationDTO registration = registrationService.confirmPayment(registrationId, payment);
        return ResponseEntity.ok(registration);
    }

    @GetMapping("/my-registrations")
    public ResponseEntity<List<EventRegistrationDTO>> getMyRegistrations(Authentication authentication) {
        String email = authentication.getName(); // authentication.getName() now returns email
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        List<EventRegistrationDTO> registrations = registrationService.getUserRegistrations(user.getId());
        return ResponseEntity.ok(registrations);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventRegistrationDTO> getRegistrationById(@PathVariable("id") Long id) {
        EventRegistrationDTO registration = registrationService.getRegistrationById(id);
        return ResponseEntity.ok(registration);
    }

    @GetMapping("/by-registration-id/{registrationId}")
    public ResponseEntity<EventRegistrationDTO> getRegistrationByRegistrationId(@PathVariable String registrationId) {
        EventRegistrationDTO registration = registrationService.getRegistrationByRegistrationId(registrationId);
        return ResponseEntity.ok(registration);
    }

    @GetMapping("/event/{eventId}")
    public ResponseEntity<List<EventRegistrationDTO>> getEventRegistrations(@PathVariable("eventId") Long eventId) {
        List<EventRegistrationDTO> registrations = registrationService.getEventRegistrations(eventId);
        return ResponseEntity.ok(registrations);
    }

    /**
     * Dummy payment API for event registration that bypasses Razorpay and stores payment in database
     * POST /api/event-registrations/dummy-payment
     */
    @PostMapping("/dummy-payment")
    @org.springframework.security.access.prepost.PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<?> processDummyEventPayment(
            @RequestBody Map<String, Object> paymentData,
            Authentication authentication) {
        try {
            String userEmail = authentication != null ? authentication.getName() : null;
            if (userEmail == null) {
                return ResponseEntity.status(org.springframework.http.HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "User not authenticated"));
            }

            if (paymentData == null || paymentData.get("eventId") == null) {
                return ResponseEntity.status(org.springframework.http.HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "eventId is required"));
            }

            Long eventId = Long.parseLong(paymentData.get("eventId").toString());
            java.math.BigDecimal amount = new java.math.BigDecimal(paymentData.get("amount").toString());
            String currency = paymentData.get("currency") != null ? paymentData.get("currency").toString() : "INR";
            String paymentMethod = paymentData.get("paymentMethod") != null ? paymentData.get("paymentMethod").toString() : "CREDIT_CARD";
            String transactionId = paymentData.get("transactionId") != null ? paymentData.get("transactionId").toString() : null;
            String description = paymentData.get("description") != null ? paymentData.get("description").toString() : "Event Registration Payment";

            com.portal.entity.Payment payment = paymentService.createEventPayment(
                userEmail, eventId, amount, currency, paymentMethod, transactionId, description);

            // Create notification (don't block payment)
            try {
                notificationService.createNotificationForEmail(
                        userEmail,
                        "Event payment successful",
                        "Your event payment was recorded successfully. Transaction: " + payment.getTransactionId(),
                        Notification.NotificationType.SUCCESS,
                        Notification.NotificationCategory.PAYMENT,
                        "/dashboard"
                );
            } catch (Exception ignored) { /* ignore */ }

            // Return success response
            Map<String, Object> response = new java.util.HashMap<>();
            response.put("success", true);
            response.put("message", "Dummy payment processed successfully");
            response.put("paymentId", payment.getId());
            response.put("transactionId", payment.getTransactionId());
            response.put("amount", payment.getAmount());
            response.put("currency", payment.getCurrency());
            response.put("status", payment.getStatus().name());
            response.put("paymentMethod", payment.getPaymentMethod().name());
            response.put("completedAt", payment.getCompletedAt());

            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            e.printStackTrace();
            return ResponseEntity.status(org.springframework.http.HttpStatus.BAD_REQUEST)
                .body(Map.of("error", e.getMessage() != null ? e.getMessage() : "Bad request"));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", e.getMessage() != null ? e.getMessage() : "Internal server error"));
        }
    }
}

