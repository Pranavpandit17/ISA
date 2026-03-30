package com.portal.service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class RazorpayService {

    @Value("${razorpay.key.id:}")
    private String razorpayKeyId;

    @Value("${razorpay.key.secret:}")
    private String razorpayKeySecret;

    private RazorpayClient razorpayClient;

    public String getRazorpayKeyId() {
        return razorpayKeyId;
    }

    public RazorpayService(@Value("${razorpay.key.id:}") String keyId,
                          @Value("${razorpay.key.secret:}") String keySecret) {
        this.razorpayKeyId = keyId;
        this.razorpayKeySecret = keySecret;
        try {
            if (keyId != null && !keyId.isEmpty() && keySecret != null && !keySecret.isEmpty()) {
                this.razorpayClient = new RazorpayClient(keyId, keySecret);
            }
        } catch (RazorpayException e) {
            System.err.println("Error initializing Razorpay client: " + e.getMessage());
        }
    }

    public JSONObject createOrder(BigDecimal amount, String currency, String receipt) throws RazorpayException {
        if (razorpayClient == null) {
            throw new RuntimeException("Razorpay is not configured. Please set razorpay.key.id and razorpay.key.secret");
        }

        JSONObject orderRequest = new JSONObject();
        // Convert to paise (multiply by 100 for INR)
        long amountInPaise = amount.multiply(new BigDecimal("100")).longValue();
        orderRequest.put("amount", amountInPaise);
        orderRequest.put("currency", currency != null ? currency : "INR");
        orderRequest.put("receipt", receipt);
        orderRequest.put("payment_capture", 1);

        Order order = razorpayClient.orders.create(orderRequest);
        return order.toJson();
    }

    public boolean verifyPayment(String orderId, String paymentId, String signature) {
        if (razorpayClient == null) {
            return false;
        }

        try {
            String generatedSignature = generateSignature(orderId + "|" + paymentId);
            return generatedSignature.equals(signature);
        } catch (Exception e) {
            System.err.println("Error verifying payment: " + e.getMessage());
            return false;
        }
    }

    private String generateSignature(String data) {
        // In a real implementation, you would use HMAC SHA256
        // This is a placeholder - use proper crypto library
        try {
            javax.crypto.Mac mac = javax.crypto.Mac.getInstance("HmacSHA256");
            javax.crypto.spec.SecretKeySpec secretKeySpec = new javax.crypto.spec.SecretKeySpec(
                razorpayKeySecret.getBytes(), "HmacSHA256");
            mac.init(secretKeySpec);
            byte[] hash = mac.doFinal(data.getBytes());
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (Exception e) {
            throw new RuntimeException("Error generating signature", e);
        }
    }
}

