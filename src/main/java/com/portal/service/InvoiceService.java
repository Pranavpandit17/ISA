package com.portal.service;

import com.portal.entity.MembershipPayment;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class InvoiceService {

    public byte[] generateMembershipInvoicePdf(MembershipPayment payment) {
        if (payment == null) {
            throw new IllegalArgumentException("Payment is required");
        }

        String invoiceNo = safe(payment.getInvoiceNumber());
        String memberName = payment.getMember() != null && payment.getMember().getUser() != null
                ? safe(payment.getMember().getUser().getName())
                : "Member";
        String memberEmail = payment.getMember() != null && payment.getMember().getUser() != null
                ? safe(payment.getMember().getUser().getEmail())
                : "";
        String planName = payment.getPlan() != null ? safe(payment.getPlan().getName()) : "Membership Plan";
        String currency = payment.getCurrency() != null ? payment.getCurrency() : "INR";
        BigDecimal amount = payment.getAmount() != null ? payment.getAmount() : BigDecimal.ZERO;
        String status = payment.getStatus() != null ? payment.getStatus().name() : "";
        String txnId = safe(payment.getTransactionId());
        LocalDateTime paidAt = payment.getPaidDate() != null ? payment.getPaidDate() : payment.getCreatedAt();

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd MMM yyyy, HH:mm");
        String paidAtStr = paidAt != null ? paidAt.format(dtf) : "";

        try (PDDocument doc = new PDDocument(); ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            PDPage page = new PDPage(PDRectangle.A4);
            doc.addPage(page);

            try (PDPageContentStream cs = new PDPageContentStream(doc, page)) {
                float margin = 50;
                float y = page.getMediaBox().getHeight() - margin;
                float leading = 16;

                // Title
                cs.beginText();
                cs.setFont(PDType1Font.HELVETICA_BOLD, 20);
                cs.newLineAtOffset(margin, y);
                cs.showText("INVOICE");
                cs.endText();

                y -= (leading + 10);

                // Invoice meta
                y = writeLine(cs, margin, y, leading, PDType1Font.HELVETICA_BOLD, 12, "Invoice No: ", invoiceNo);
                y = writeLine(cs, margin, y, leading, PDType1Font.HELVETICA, 12, "Date: ", paidAtStr);
                y = writeLine(cs, margin, y, leading, PDType1Font.HELVETICA, 12, "Status: ", status);
                y = writeLine(cs, margin, y, leading, PDType1Font.HELVETICA, 12, "Transaction ID: ", txnId);

                y -= 10;

                // Billed to
                cs.beginText();
                cs.setFont(PDType1Font.HELVETICA_BOLD, 12);
                cs.newLineAtOffset(margin, y);
                cs.showText("Billed To");
                cs.endText();
                y -= leading;
                y = writeText(cs, margin, y, leading, PDType1Font.HELVETICA, 12, memberName);
                if (!memberEmail.isBlank()) {
                    y = writeText(cs, margin, y, leading, PDType1Font.HELVETICA, 12, memberEmail);
                }

                y -= 15;

                // Item
                cs.beginText();
                cs.setFont(PDType1Font.HELVETICA_BOLD, 12);
                cs.newLineAtOffset(margin, y);
                cs.showText("Description");
                cs.endText();

                cs.beginText();
                cs.setFont(PDType1Font.HELVETICA_BOLD, 12);
                cs.newLineAtOffset(page.getMediaBox().getWidth() - margin - 150, y);
                cs.showText("Amount");
                cs.endText();

                y -= leading;

                cs.beginText();
                cs.setFont(PDType1Font.HELVETICA, 12);
                cs.newLineAtOffset(margin, y);
                cs.showText(planName);
                cs.endText();

                cs.beginText();
                cs.setFont(PDType1Font.HELVETICA, 12);
                cs.newLineAtOffset(page.getMediaBox().getWidth() - margin - 150, y);
                cs.showText(currency + " " + amount.toPlainString());
                cs.endText();

                y -= (leading + 10);

                // Total
                cs.beginText();
                cs.setFont(PDType1Font.HELVETICA_BOLD, 12);
                cs.newLineAtOffset(page.getMediaBox().getWidth() - margin - 150, y);
                cs.showText("Total: " + currency + " " + amount.toPlainString());
                cs.endText();

                // Footer
                float footerY = margin;
                cs.beginText();
                cs.setFont(PDType1Font.HELVETICA_OBLIQUE, 10);
                cs.newLineAtOffset(margin, footerY);
                cs.showText("This is a system-generated invoice.");
                cs.endText();
            }

            doc.save(baos);
            return baos.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Failed to generate invoice PDF: " + e.getMessage(), e);
        }
    }

    private static String safe(String s) {
        return s == null ? "" : s;
    }

    private static float writeLine(PDPageContentStream cs, float x, float y, float leading,
                                   org.apache.pdfbox.pdmodel.font.PDFont font, float fontSize,
                                   String label, String value) throws Exception {
        cs.beginText();
        cs.setFont(font, fontSize);
        cs.newLineAtOffset(x, y);
        cs.showText(label + (value != null ? value : ""));
        cs.endText();
        return y - leading;
    }

    private static float writeText(PDPageContentStream cs, float x, float y, float leading,
                                   org.apache.pdfbox.pdmodel.font.PDFont font, float fontSize,
                                   String text) throws Exception {
        cs.beginText();
        cs.setFont(font, fontSize);
        cs.newLineAtOffset(x, y);
        cs.showText(text != null ? text : "");
        cs.endText();
        return y - leading;
    }
}

