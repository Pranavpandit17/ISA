package com.portal.controller;

import com.portal.entity.Payment;
import com.portal.entity.User;
import com.portal.repository.PaymentRepository;
import com.portal.repository.UserRepository;
import com.portal.service.RazorpayService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/razorpay")
@CrossOrigin(origins = "http://localhost:4200")
public class RazorpayController {

    @Autowired
    private RazorpayService razorpayService;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create-order")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<Map<String, Object>> createOrder(@RequestBody Map<String, Object> request) {
        try {
            BigDecimal amount = new BigDecimal(request.get("amount").toString());
            String currency = request.get("currency") != null ? request.get("currency").toString() : "INR";
            String receipt = request.get("receipt") != null ? request.get("receipt").toString() : 
                            "RECEIPT-" + UUID.randomUUID().toString().substring(0, 9).toUpperCase();

            // Check if dummy mode is requested
            Boolean useDummy = request.get("useDummy") != null ? Boolean.parseBoolean(request.get("useDummy").toString()) : false;
            
            if (useDummy || razorpayService.getRazorpayKeyId() == null || razorpayService.getRazorpayKeyId().isEmpty()) {
                // Return dummy order without calling Razorpay
                String dummyOrderId = "order_dummy_" + UUID.randomUUID().toString().substring(0, 12).toUpperCase();
                long amountInPaise = amount.multiply(new BigDecimal("100")).longValue();
                
                Map<String, Object> response = new HashMap<>();
                response.put("orderId", dummyOrderId);
                response.put("amount", amountInPaise);
                response.put("currency", currency);
                response.put("receipt", receipt);
                response.put("status", "created");
                response.put("keyId", "dummy_key_id");
                response.put("dummy", true);
                
                return ResponseEntity.ok(response);
            }

            JSONObject order = razorpayService.createOrder(amount, currency, receipt);
            
            Map<String, Object> response = new HashMap<>();
            response.put("orderId", order.getString("id"));
            response.put("amount", order.getLong("amount"));
            response.put("currency", order.getString("currency"));
            response.put("receipt", order.getString("receipt"));
            response.put("status", order.getString("status"));
            
            response.put("keyId", razorpayService.getRazorpayKeyId());
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }

    @PostMapping("/verify-payment")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<Map<String, Object>> verifyPayment(@RequestBody Map<String, Object> request) {
        String orderId = request.get("orderId") != null ? request.get("orderId").toString() : null;
        String paymentId = request.get("paymentId") != null ? request.get("paymentId").toString() : null;
        String signature = request.get("signature") != null ? request.get("signature").toString() : null;

        // Check if dummy mode (orderId starts with "order_dummy_" or no signature provided)
        boolean isDummy = (orderId != null && orderId.startsWith("order_dummy_")) || 
                         (signature == null || signature.isEmpty());

        boolean isValid;
        if (isDummy) {
            // For dummy payments, always return valid
            isValid = true;
        } else {
            isValid = razorpayService.verifyPayment(orderId, paymentId, signature);
        }

        Map<String, Object> response = new HashMap<>();
        response.put("valid", isValid);
        if (isValid) {
            response.put("message", "Payment verified successfully");
        } else {
            response.put("message", "Payment verification failed");
        }
        if (isDummy) {
            response.put("dummy", true);
        }

        return ResponseEntity.ok(response);
    }

    /**
     * Dummy payment API that bypasses Razorpay and stores payment data in database
     * POST /api/razorpay/dummy-payment
     */
    @PostMapping("/dummy-payment")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<Map<String, Object>> processDummyPayment(
            @RequestBody Map<String, Object> paymentData,
            Authentication authentication) {
        try {
            String userEmail = authentication != null ? authentication.getName() : null;
            if (userEmail == null) {
                Map<String, Object> error = new HashMap<>();
                error.put("error", "User not authenticated");
                return ResponseEntity.status(org.springframework.http.HttpStatus.UNAUTHORIZED).body(error);
            }

            User user = userRepository.findByEmail(userEmail)
                    .orElseThrow(() -> new RuntimeException("User not found: " + userEmail));

            // Extract payment data
            BigDecimal amount = new BigDecimal(paymentData.get("amount").toString());
            String currency = paymentData.get("currency") != null ? paymentData.get("currency").toString() : "INR";
            String paymentMethod = paymentData.get("paymentMethod") != null ? paymentData.get("paymentMethod").toString() : "CREDIT_CARD";
            String paymentType = paymentData.get("paymentType") != null ? paymentData.get("paymentType").toString() : "OTHER";
            Long relatedId = paymentData.get("relatedId") != null ? Long.parseLong(paymentData.get("relatedId").toString()) : null;
            String relatedType = paymentData.get("relatedType") != null ? paymentData.get("relatedType").toString() : null;
            String description = paymentData.get("description") != null ? paymentData.get("description").toString() : "Dummy Payment";
            String orderId = paymentData.get("orderId") != null ? paymentData.get("orderId").toString() : null;
            String paymentId = paymentData.get("paymentId") != null ? paymentData.get("paymentId").toString() : null;

            // Generate transaction ID if not provided
            String transactionId = paymentId != null ? paymentId : ("DUMMY-" + UUID.randomUUID().toString().substring(0, 12).toUpperCase());

            // Create payment entity
            Payment payment = new Payment();
            payment.setUser(user);
            
            // Set payment type
            try {
                payment.setType(Payment.PaymentType.valueOf(paymentType));
            } catch (IllegalArgumentException e) {
                payment.setType(Payment.PaymentType.OTHER);
            }
            
            payment.setAmount(amount);
            payment.setCurrency(currency);
            payment.setStatus(Payment.PaymentStatus.COMPLETED);
            payment.setCompletedAt(LocalDateTime.now());
            
            // Set payment method
            try {
                payment.setPaymentMethod(Payment.PaymentMethod.valueOf(paymentMethod.toUpperCase()));
            } catch (IllegalArgumentException e) {
                payment.setPaymentMethod(Payment.PaymentMethod.CREDIT_CARD);
            }
            
            payment.setTransactionId(transactionId);
            payment.setPaymentGateway(Payment.PaymentGateway.RAZORPAY);
            payment.setGatewayTransactionId(orderId != null ? orderId : transactionId);
            payment.setDescription(description);
            
            // Set related ID and type if provided
            if (relatedId != null) {
                payment.setRelatedId(relatedId);
                if (relatedType != null) {
                    try {
                        payment.setRelatedType(Payment.RelatedType.valueOf(relatedType.toUpperCase()));
                    } catch (IllegalArgumentException e) {
                        // Leave as null if invalid
                    }
                }
            }

            // Save payment to database
            Payment savedPayment = paymentRepository.save(payment);

            // Return success response
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Dummy payment processed successfully");
            response.put("paymentId", savedPayment.getId());
            response.put("transactionId", savedPayment.getTransactionId());
            response.put("orderId", orderId);
            response.put("amount", savedPayment.getAmount());
            response.put("currency", savedPayment.getCurrency());
            response.put("status", savedPayment.getStatus().name());
            response.put("paymentMethod", savedPayment.getPaymentMethod().name());
            response.put("completedAt", savedPayment.getCompletedAt());

            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("error", e.getMessage());
            return ResponseEntity.status(org.springframework.http.HttpStatus.BAD_REQUEST).body(error);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("error", "Error processing dummy payment: " + e.getMessage());
            return ResponseEntity.status(org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }
}

