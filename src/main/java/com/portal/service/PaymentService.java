package com.portal.service;

import com.portal.entity.Payment;
import com.portal.entity.User;
import com.portal.repository.PaymentRepository;
import com.portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired(required = false)
    private EmailService emailService;

    @Transactional
    public Payment createPayment(Long userId, String paymentMethod, BigDecimal amount, String transactionId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Payment payment = new Payment();
        payment.setUser(user);
        payment.setType(Payment.PaymentType.EVENT_REGISTRATION);
        payment.setAmount(amount);
        payment.setCurrency("USD");
        payment.setStatus(Payment.PaymentStatus.COMPLETED);
        
        // Map payment method string to enum
        Payment.PaymentMethod method;
        switch (paymentMethod.toLowerCase()) {
            case "card":
                method = Payment.PaymentMethod.CREDIT_CARD;
                break;
            case "upi":
                method = Payment.PaymentMethod.UPI;
                break;
            case "netbanking":
                method = Payment.PaymentMethod.NET_BANKING;
                break;
            default:
                try {
                    method = Payment.PaymentMethod.valueOf(paymentMethod.toUpperCase());
                } catch (IllegalArgumentException e) {
                    method = Payment.PaymentMethod.CREDIT_CARD; // Default
                }
        }
        payment.setPaymentMethod(method);
        
        payment.setTransactionId(transactionId);
        payment.setDescription("Event Registration Payment");
        payment.setCompletedAt(java.time.LocalDateTime.now());

        return paymentRepository.save(payment);
    }

    /**
     * Create a dummy payment for event registration
     * This bypasses Razorpay and stores payment data directly in the database
     */
    @Transactional
    public Payment createEventPayment(String userEmail, Long eventId, BigDecimal amount, String currency, 
                                       String paymentMethod, String transactionId, String description) {
        // Find user by email
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found for email: " + userEmail));

        // Generate transaction ID if not provided
        if (transactionId == null || transactionId.isEmpty()) {
            transactionId = "DUMMY-EVENT-" + UUID.randomUUID().toString().substring(0, 12).toUpperCase();
        }

        // Create payment entity
        Payment payment = new Payment();
        payment.setUser(user);
        payment.setType(Payment.PaymentType.EVENT_REGISTRATION);
        payment.setAmount(amount);
        payment.setCurrency(currency != null && !currency.isEmpty() ? currency : "INR");
        payment.setStatus(Payment.PaymentStatus.COMPLETED);
        payment.setCompletedAt(LocalDateTime.now());
        
        // Set payment method
        if (paymentMethod != null && !paymentMethod.isEmpty()) {
            try {
                payment.setPaymentMethod(Payment.PaymentMethod.valueOf(paymentMethod.toUpperCase()));
            } catch (IllegalArgumentException e) {
                payment.setPaymentMethod(Payment.PaymentMethod.CREDIT_CARD); // Default
            }
        } else {
            payment.setPaymentMethod(Payment.PaymentMethod.CREDIT_CARD); // Default for dummy
        }
        
        payment.setTransactionId(transactionId);
        payment.setPaymentGateway(Payment.PaymentGateway.RAZORPAY);
        payment.setGatewayTransactionId(transactionId);
        payment.setDescription(description != null && !description.isEmpty() ? description : "Event Registration Payment");
        
        // Set related event ID
        if (eventId != null) {
            payment.setRelatedId(eventId);
            payment.setRelatedType(Payment.RelatedType.EVENT);
        }

        Payment savedPayment = paymentRepository.save(payment);
        
        // Send payment confirmation email
        try {
            if (emailService != null && user.getEmail() != null) {
                String userName = user.getName() != null ? user.getName() : user.getEmail();
                emailService.sendEventPaymentConfirmation(
                    user.getEmail(),
                    userName,
                    description != null && !description.isEmpty() ? description : "Event Registration",
                    amount.toString(),
                    currency != null && !currency.isEmpty() ? currency : "INR",
                    transactionId
                );
            }
        } catch (Exception e) {
            // Log but don't fail payment
            System.err.println("Error sending payment confirmation email: " + e.getMessage());
        }
        
        return savedPayment;
    }
}

