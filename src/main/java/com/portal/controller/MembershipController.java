package com.portal.controller;

import com.portal.dto.MemberDTO;
import com.portal.dto.MembershipApplicationDTO;
import com.portal.dto.MembershipFeePlanDTO;
import com.portal.dto.MembershipPaymentDTO;
import com.portal.entity.MembershipPayment;
import com.portal.repository.MembershipPaymentRepository;
import com.portal.repository.UserRepository;
import com.portal.service.InvoiceService;
import com.portal.service.MembershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/membership")
@CrossOrigin(origins = "http://localhost:4200")
public class MembershipController {

    @Autowired
    private MembershipService membershipService;

    @Autowired
    private MembershipPaymentRepository membershipPaymentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private InvoiceService invoiceService;

    @GetMapping("/applications")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<MembershipApplicationDTO>> getApplications() {
        return ResponseEntity.ok(membershipService.getAllApplications());
    }

    @GetMapping("/applications/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MembershipApplicationDTO> getApplicationById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(membershipService.getApplicationById(id));
    }

    @PostMapping("/applications")
    public ResponseEntity<MembershipApplicationDTO> createApplication(@RequestBody MembershipApplicationDTO dto) {
        // Public endpoint - anyone can apply for membership
        return ResponseEntity.ok(membershipService.createApplication(dto));
    }

    @PutMapping("/applications/{id}/approve")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> approveApplication(@PathVariable("id") Long id, org.springframework.security.core.Authentication authentication) {
        String reviewerEmail = authentication != null ? authentication.getName() : null; // authentication.getName() now returns email
        membershipService.approveApplication(id, reviewerEmail);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/applications/{id}/reject")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> rejectApplication(@PathVariable("id") Long id, @RequestBody Map<String, String> requestBody) {
        String reason = requestBody != null ? requestBody.get("reason") : null;
        if (reason == null || reason.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        membershipService.rejectApplication(id, reason);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/members")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<MemberDTO>> getApprovedMembers() {
        return ResponseEntity.ok(membershipService.getApprovedMembers());
    }

    @GetMapping("/fee-plans")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<MembershipFeePlanDTO>> getFeePlans() {
        return ResponseEntity.ok(membershipService.getFeePlans());
    }

    @GetMapping("/payments")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<MembershipPaymentDTO>> getAllPayments() {
        return ResponseEntity.ok(membershipService.getAllPayments());
    }

    @PostMapping("/payments")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<?> createMembershipPayment(
            @RequestBody Map<String, Object> paymentData,
            Authentication authentication) {
        try {
            String userEmail = authentication != null ? authentication.getName() : null;
            if (userEmail == null) {
                return ResponseEntity.status(org.springframework.http.HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "User not authenticated"));
            }

            if (paymentData == null || paymentData.get("planId") == null) {
                return ResponseEntity.status(org.springframework.http.HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "planId is required"));
            }

            Long planId = Long.parseLong(paymentData.get("planId").toString());
            String paymentMethod = paymentData.get("paymentMethod") != null ? paymentData.get("paymentMethod").toString() : "CREDIT_CARD";
            String transactionId = paymentData.get("transactionId") != null ? paymentData.get("transactionId").toString() : null;

            MembershipPaymentDTO payment = membershipService.createMembershipPayment(userEmail, planId, paymentMethod, transactionId);
            return ResponseEntity.ok(payment);
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

    /**
     * Get payment history for the current logged-in member
     * GET /api/membership/payments/my-history
     */
    @GetMapping("/payments/my-history")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<List<MembershipPaymentDTO>> getMyPaymentHistory(Authentication authentication) {
        try {
            String userEmail = authentication != null ? authentication.getName() : null;
            if (userEmail == null) {
                return ResponseEntity.status(org.springframework.http.HttpStatus.UNAUTHORIZED).build();
            }
            List<MembershipPaymentDTO> payments = membershipService.getCurrentMemberPaymentHistory(userEmail);
            return ResponseEntity.ok(payments);
        } catch (RuntimeException e) {
            // Don't crash the UI; return empty list for known bad-request cases
            return ResponseEntity.status(org.springframework.http.HttpStatus.BAD_REQUEST)
                    .body(java.util.Collections.emptyList());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(java.util.Collections.emptyList());
        }
    }

    /**
     * Get payment history for a specific member (Admin only)
     * GET /api/membership/payments/member/{memberId}
     */
    @GetMapping("/payments/member/{memberId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<MembershipPaymentDTO>> getMemberPaymentHistory(@PathVariable("memberId") Long memberId) {
        try {
            List<MembershipPaymentDTO> payments = membershipService.getMemberPaymentHistory(memberId);
            return ResponseEntity.ok(payments);
        } catch (RuntimeException e) {
            return ResponseEntity.status(org.springframework.http.HttpStatus.BAD_REQUEST).build();
        }
    }

    /**
     * Download invoice PDF for a membership payment.
     * Members can only download their own invoices; admins can download any.
     * GET /api/membership/payments/{paymentId}/invoice
     */
    @GetMapping("/payments/{paymentId}/invoice")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<byte[]> downloadInvoice(
            @PathVariable("paymentId") Long paymentId,
            Authentication authentication) {
        try {
            String userEmail = authentication != null ? authentication.getName() : null;
            if (userEmail == null) {
                return ResponseEntity.status(org.springframework.http.HttpStatus.UNAUTHORIZED).build();
            }

            boolean isAdmin = authentication.getAuthorities().stream()
                    .anyMatch(a -> "ROLE_ADMIN".equals(a.getAuthority()));

            MembershipPayment payment = membershipPaymentRepository.findById(paymentId)
                    .orElseThrow(() -> new RuntimeException("Payment not found: " + paymentId));

            // If member, ensure they own this payment
            if (!isAdmin) {
                String ownerEmail = payment.getMember() != null && payment.getMember().getUser() != null
                        ? payment.getMember().getUser().getEmail()
                        : null;
                if (ownerEmail == null || !ownerEmail.equalsIgnoreCase(userEmail)) {
                    return ResponseEntity.status(org.springframework.http.HttpStatus.FORBIDDEN).build();
                }
            }

            // Ensure invoice number exists (older/legacy rows safety)
            if (payment.getInvoiceNumber() == null || payment.getInvoiceNumber().isBlank()) {
                String invoiceNo = "INV-" + java.time.LocalDate.now().getYear() + "-" +
                        String.format("%06d", membershipPaymentRepository.count() + 1);
                payment.setInvoiceNumber(invoiceNo);
                membershipPaymentRepository.save(payment);
            }

            byte[] pdf = invoiceService.generateMembershipInvoicePdf(payment);
            String filename = (payment.getInvoiceNumber() != null ? payment.getInvoiceNumber() : ("invoice-" + paymentId)) + ".pdf";

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"")
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(pdf);
        } catch (RuntimeException e) {
            e.printStackTrace();
            return ResponseEntity.status(org.springframework.http.HttpStatus.BAD_REQUEST).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}

