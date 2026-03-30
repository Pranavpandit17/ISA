package com.portal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Value("${spring.mail.username:}")
    private String fromEmail;

    private final JavaMailSender mailSender;

    @Autowired(required = false)
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail(String to, String subject, String body) {
        try {
            // Check if mail sender is available and email is configured
            if (mailSender == null) {
                System.err.println("Email service not configured - mailSender is null");
                return;
            }
            
            if (to == null || to.isEmpty()) {
                System.err.println("Cannot send email - recipient email is null or empty");
                return;
            }
            
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail != null && !fromEmail.isEmpty() ? fromEmail : "noreply@portal.com");
            message.setTo(to);
            message.setSubject(subject);
            message.setText(body);
            mailSender.send(message);
        } catch (Exception e) {
            // Log error but don't throw - email failures shouldn't break the application
            System.err.println("Error sending email to " + to + ": " + e.getMessage());
            e.printStackTrace();
        }
    }

    public void sendRegistrationConfirmation(String to, String name, String eventName) {
        String subject = "Event Registration Confirmed";
        String body = String.format(
            "Dear %s,\n\n" +
            "Your registration for '%s' has been confirmed.\n\n" +
            "Thank you for your registration!\n\n" +
            "Best regards,\nPortal Team",
            name, eventName
        );
        sendEmail(to, subject, body);
    }

    public void sendMembershipApproval(String to, String name) {
        String subject = "Membership Application Approved";
        String body = String.format(
            "Dear %s,\n\n" +
            "Congratulations! Your membership application has been approved.\n\n" +
            "You can now log in and access all member benefits.\n\n" +
            "Best regards,\nPortal Team",
            name != null ? name : "Member"
        );
        sendEmail(to, subject, body);
    }

    public void sendMembershipRejection(String to, String name, String reason) {
        String subject = "Membership Application Status";
        String body = String.format(
            "Dear %s,\n\n" +
            "Thank you for your interest in joining our portal.\n\n" +
            "Unfortunately, your membership application could not be approved at this time.%s\n\n" +
            "If you have any questions, please feel free to contact us.\n\n" +
            "Best regards,\nPortal Team",
            name != null ? name : "Applicant",
            reason != null && !reason.isEmpty() ? "\n\nReason: " + reason : ""
        );
        sendEmail(to, subject, body);
    }

    public void sendEventRegistrationConfirmation(String to, String name, String eventName, String eventDate, String venue, Integer quantity) {
        String subject = "Event Registration Confirmed - " + eventName;
        String body = String.format(
            "Dear %s,\n\n" +
            "Your registration for '%s' has been confirmed.\n\n" +
            "Event Details:\n" +
            "- Event: %s\n" +
            "- Date: %s\n" +
            "- Venue: %s\n" +
            "- Tickets: %d\n\n" +
            "We look forward to seeing you at the event!\n\n" +
            "Best regards,\nPortal Team",
            name != null ? name : "Member",
            eventName,
            eventName,
            eventDate != null ? eventDate : "TBA",
            venue != null ? venue : "TBA",
            quantity != null ? quantity : 1
        );
        sendEmail(to, subject, body);
    }

    public void sendEventPaymentConfirmation(String to, String name, String eventName, String amount, String currency, String transactionId) {
        String subject = "Payment Confirmed - Event Registration";
        String body = String.format(
            "Dear %s,\n\n" +
            "Your payment for event registration has been confirmed.\n\n" +
            "Payment Details:\n" +
            "- Event: %s\n" +
            "- Amount: %s %s\n" +
            "- Transaction ID: %s\n\n" +
            "Your registration is now confirmed. We look forward to seeing you at the event!\n\n" +
            "Best regards,\nPortal Team",
            name != null ? name : "Member",
            eventName,
            currency != null ? currency : "INR",
            amount,
            transactionId
        );
        sendEmail(to, subject, body);
    }

    public void sendMembershipPaymentConfirmation(String to, String name, String planName, String amount, String currency, String transactionId) {
        String subject = "Membership Payment Confirmed";
        String body = String.format(
            "Dear %s,\n\n" +
            "Your membership payment has been confirmed.\n\n" +
            "Payment Details:\n" +
            "- Plan: %s\n" +
            "- Amount: %s %s\n" +
            "- Transaction ID: %s\n\n" +
            "Thank you for your payment. Your membership is now active!\n\n" +
            "Best regards,\nPortal Team",
            name != null ? name : "Member",
            planName,
            currency != null ? currency : "INR",
            amount,
            transactionId
        );
        sendEmail(to, subject, body);
    }

    public void sendJobApplicationNotification(String to, String name, String jobTitle, String applicantName, String applicantEmail) {
        String subject = "New Application for Your Job Posting";
        String body = String.format(
            "Dear %s,\n\n" +
            "You have received a new application for your job posting '%s'.\n\n" +
            "Applicant Details:\n" +
            "- Name: %s\n" +
            "- Email: %s\n\n" +
            "Please log in to your dashboard to review the application.\n\n" +
            "Best regards,\nPortal Team",
            name != null ? name : "Job Owner",
            jobTitle,
            applicantName,
            applicantEmail
        );
        sendEmail(to, subject, body);
    }

    public void sendJobApplicationStatus(String to, String name, String jobTitle, String status, String notes) {
        String subject = String.format("Application Update - %s", jobTitle);
        String body = String.format(
            "Dear %s,\n\n" +
            "Your application for '%s' has been %s.\n%s\n\n" +
            "Best regards,\nPortal Team",
            name != null ? name : "Applicant",
            jobTitle,
            status.toLowerCase(),
            notes != null && !notes.isEmpty() ? "\n\nNotes: " + notes : ""
        );
        sendEmail(to, subject, body);
    }

    public void sendPaymentConfirmation(String to, String name, String amount, String description) {
        String subject = "Payment Confirmed";
        String body = String.format(
            "Dear %s,\n\n" +
            "Your payment of %s for %s has been confirmed.\n\n" +
            "Thank you!\n\n" +
            "Best regards,\nPortal Team",
            name, amount, description
        );
        sendEmail(to, subject, body);
    }
}




