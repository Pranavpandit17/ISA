package com.portal.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class SmsService {

    @Value("${sms.api.url:}")
    private String smsApiUrl;

    @Value("${sms.api.key:}")
    private String smsApiKey;

    @Value("${sms.api.sender:PORTAL}")
    private String smsSender;

    private final RestTemplate restTemplate;

    public SmsService() {
        this.restTemplate = new RestTemplate();
    }

    public void sendSms(String phoneNumber, String message) {
        if (smsApiUrl == null || smsApiUrl.isEmpty()) {
            System.out.println("SMS API not configured. Would send SMS to " + phoneNumber + ": " + message);
            return;
        }

        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            if (smsApiKey != null && !smsApiKey.isEmpty()) {
                headers.set("Authorization", "Bearer " + smsApiKey);
            }

            Map<String, String> requestBody = new HashMap<>();
            requestBody.put("to", phoneNumber);
            requestBody.put("message", message);
            requestBody.put("sender", smsSender);

            HttpEntity<Map<String, String>> request = new HttpEntity<>(requestBody, headers);
            ResponseEntity<String> response = restTemplate.postForEntity(smsApiUrl, request, String.class);

            if (response.getStatusCode().is2xxSuccessful()) {
                System.out.println("SMS sent successfully to " + phoneNumber);
            } else {
                System.err.println("Failed to send SMS. Status: " + response.getStatusCode());
            }
        } catch (Exception e) {
            System.err.println("Error sending SMS: " + e.getMessage());
        }
    }

    public void sendRegistrationSms(String phoneNumber, String eventName) {
        String message = String.format(
            "Your registration for '%s' has been confirmed. Thank you! - Portal",
            eventName
        );
        sendSms(phoneNumber, message);
    }

    public void sendPaymentSms(String phoneNumber, String amount) {
        String message = String.format(
            "Payment of %s confirmed. Thank you for your payment! - Portal",
            amount
        );
        sendSms(phoneNumber, message);
    }
}




