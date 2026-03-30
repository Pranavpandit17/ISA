package com.portal.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.portal.dto.MemberDTO;
import com.portal.dto.MembershipApplicationDTO;
import com.portal.dto.MembershipFeePlanDTO;
import com.portal.dto.MembershipPaymentDTO;
import com.portal.entity.ApplicationAddress;
import com.portal.entity.Member;
import com.portal.entity.MembershipApplication;
import com.portal.entity.MembershipFeePlan;
import com.portal.entity.MembershipPayment;
import com.portal.entity.Notification;
import com.portal.entity.User;
import com.portal.repository.MemberRepository;
import com.portal.repository.MemberCompanyRepository;
import com.portal.repository.MembershipApplicationRepository;
import com.portal.repository.MembershipFeePlanRepository;
import com.portal.repository.MembershipPaymentRepository;
import com.portal.repository.UserRepository;
import com.portal.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class MembershipService {

    @Autowired
    private MembershipApplicationRepository applicationRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private MemberCompanyRepository memberCompanyRepository;

    @Autowired
    private MembershipFeePlanRepository feePlanRepository;

    @Autowired
    private MembershipPaymentRepository paymentRepository;

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EmailService emailService;
    @Autowired
    private org.springframework.security.crypto.password.PasswordEncoder passwordEncoder;

    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<MembershipApplicationDTO> getAllApplications() {
        return applicationRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public MembershipApplicationDTO getApplicationById(Long id) {
        MembershipApplication application = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));
        return convertToDTO(application);
    }

    @Transactional
    public void approveApplication(Long id, String reviewerEmail) { // Parameter is now email, not username
        MembershipApplication application = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));

        // Check if already approved
        if (application.getStatus() == MembershipApplication.ApplicationStatus.APPROVED) {
            throw new RuntimeException("Application is already approved");
        }

        // Find the user associated with this application
        User user = userRepository.findByEmail(application.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found for this application"));

        boolean isNewMember = false;
        String membershipNumberForNotification = null;

        // Check if member record already exists
        if (memberRepository.existsById(user.getId())) {
            // Update existing member status
            Member existingMember = memberRepository.findById(user.getId())
                    .orElseThrow(() -> new RuntimeException("Member record not found"));
            existingMember.setMembershipStatus(Member.MembershipStatus.ACTIVE);
            Member savedMember = memberRepository.save(existingMember);
            membershipNumberForNotification = savedMember.getMembershipNumber();
        } else {
            // Create new Member record
            isNewMember = true;
            Member newMember = new Member();
            newMember.setUser(user);
            newMember.setMembershipType(Member.MembershipType.valueOf(application.getMembershipType().name()));
            newMember.setMembershipStatus(Member.MembershipStatus.ACTIVE);

            // Generate membership number
            String membershipNumber = "MEM-" + java.time.LocalDate.now().getYear() + "-" +
                    String.format("%03d", memberRepository.count() + 1);
            newMember.setMembershipNumber(membershipNumber);
            membershipNumberForNotification = membershipNumber;

            // Set subscription dates (default to 1 year from now)
            java.time.LocalDate startDate = java.time.LocalDate.now();
            java.time.LocalDate endDate = startDate.plusYears(1);
            newMember.setSubscriptionStartDate(startDate);
            newMember.setSubscriptionEndDate(endDate);

            memberRepository.save(newMember);
        }

        // Update application status
        application.setStatus(MembershipApplication.ApplicationStatus.APPROVED);
        application.setReviewedAt(LocalDateTime.now());

        // Set reviewer if provided (reviewerUsername is now email)
   /*     if (reviewerUsername != null && !reviewerUsername.isEmpty()) {
            User reviewer = userRepository.findByEmail(reviewerUsername)
                    .orElse(null);
            if (reviewer != null) {
                application.setReviewedBy(reviewer);
            }
        }*/

        applicationRepository.save(application);

        // Notify admins that a member has joined (on approval)
        try {
            String title = isNewMember ? "New member joined ISA" : "Member activated";
            String msg = "Member " +
                    (user.getName() != null ? user.getName() : user.getEmail()) +
                    " (" + user.getEmail() + ")" +
                    (membershipNumberForNotification != null && !membershipNumberForNotification.isBlank()
                            ? (" • Membership No: " + membershipNumberForNotification)
                            : "") +
                    " has been approved and is now ACTIVE.";

            notificationService.broadcastToAdmins(
                    title,
                    msg,
                    Notification.NotificationType.INFO,
                    Notification.NotificationCategory.MEMBERSHIP,
                    "/admin-dashboard?view=MEMBER_MANAGEMENT"
            );
        } catch (Exception ignored) { /* ignore */ }

        // Send approval email
        try {
            if (emailService != null) {
                emailService.sendMembershipApproval(user.getEmail(), user.getName());
            }
        } catch (Exception e) {
            // Log error but don't fail the approval
            System.err.println("Error sending approval email: " + e.getMessage());
        }
    }

    @Transactional
    public void rejectApplication(Long id, String reason) {
        MembershipApplication application = applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));
        application.setStatus(MembershipApplication.ApplicationStatus.REJECTED);
        application.setRejectionReason(reason);
        application.setReviewedAt(LocalDateTime.now());
        applicationRepository.save(application);
        
        // Send rejection email
        try {
            if (emailService != null && application.getEmail() != null) {
                String applicantName = application.getApplicantName() != null ? application.getApplicantName() : application.getEmail();
                emailService.sendMembershipRejection(
                    application.getEmail(),
                    applicantName,
                    reason
                );
            }
        } catch (Exception e) {
            // Log but don't fail rejection
            System.err.println("Error sending rejection email: " + e.getMessage());
        }
    }

    public List<MemberDTO> getApprovedMembers() {
        return memberRepository.findAll().stream()
                .filter(m -> m.getMembershipStatus() == Member.MembershipStatus.ACTIVE)
                .map(this::convertMemberToDTO)
                .collect(Collectors.toList());
    }

    public List<MembershipFeePlanDTO> getFeePlans() {
        return feePlanRepository.findByIsActiveTrue().stream()
                .map(this::convertFeePlanToDTO)
                .collect(Collectors.toList());
    }

    public List<MembershipPaymentDTO> getAllPayments() {
        return paymentRepository.findAll().stream()
                .map(this::convertPaymentToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get payment history for a specific member by member ID
     */
    public List<MembershipPaymentDTO> getMemberPaymentHistory(Long memberId) {
        return paymentRepository.findByMemberId(memberId).stream()
                .map(this::convertPaymentToDTO)
                .sorted((p1, p2) -> {
                    // Sort by created date descending (most recent first)
                    if (p1.getCreatedAt() == null && p2.getCreatedAt() == null) return 0;
                    if (p1.getCreatedAt() == null) return 1;
                    if (p2.getCreatedAt() == null) return -1;
                    return p2.getCreatedAt().compareTo(p1.getCreatedAt());
                })
                .collect(Collectors.toList());
    }

    /**
     * Get payment history for the current logged-in member by email
     */
    public List<MembershipPaymentDTO> getCurrentMemberPaymentHistory(String userEmail) {
        // Be tolerant of email case differences
        User user = userRepository.findByEmailIgnoreCase(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found for email: " + userEmail));

        // Some accounts (e.g., admin or unapproved applicants) may not have a Member row.
        // In that case, return empty history instead of failing with a 500.
        return memberRepository.findById(user.getId())
                .map(m -> getMemberPaymentHistory(m.getId()))
                .orElseGet(java.util.Collections::emptyList);
    }

    @Transactional
    public MembershipPaymentDTO createMembershipPayment(String userEmail, Long planId, String paymentMethod, String transactionId) {
        // Find user by email
        User user = userRepository.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found for email: " + userEmail));

        // Find member by user ID
        Member member = memberRepository.findById(user.getId())
                .orElseThrow(() -> new RuntimeException("Member not found for user: " + userEmail));

        // Determine previous PAID plan (for switch notification)
        Long previousPlanId = null;
        String previousPlanName = null;
        try {
            java.util.Optional<MembershipPayment> prevOpt =
                    paymentRepository.findTopByMemberIdAndStatusOrderByCreatedAtDesc(
                            member.getId(),
                            MembershipPayment.PaymentStatus.PAID
                    );
            if (prevOpt.isPresent() && prevOpt.get().getPlan() != null) {
                previousPlanId = prevOpt.get().getPlan().getId();
                previousPlanName = prevOpt.get().getPlan().getName();
            }
        } catch (Exception ignored) { /* ignore */ }

        // Find plan by ID
        MembershipFeePlan plan = feePlanRepository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found: " + planId));

        // Create membership payment
        MembershipPayment payment = new MembershipPayment();
        payment.setMember(member);
        payment.setPlan(plan);
        payment.setAmount(plan.getPrice());
        payment.setCurrency(plan.getCurrency() != null ? plan.getCurrency() : "INR");
        payment.setStatus(MembershipPayment.PaymentStatus.PAID); // For dummy payment, mark as PAID
        payment.setDueDate(LocalDate.now());
        payment.setPaidDate(LocalDateTime.now());
        
        // Set payment method
        if (paymentMethod != null && !paymentMethod.isEmpty()) {
            try {
                payment.setPaymentMethod(MembershipPayment.PaymentMethod.valueOf(paymentMethod.toUpperCase()));
            } catch (IllegalArgumentException e) {
                payment.setPaymentMethod(MembershipPayment.PaymentMethod.CREDIT_CARD); // Default
            }
        } else {
            payment.setPaymentMethod(MembershipPayment.PaymentMethod.CREDIT_CARD); // Default for dummy
        }
        
        // Generate transaction ID if not provided
        if (transactionId == null || transactionId.isEmpty()) {
            transactionId = "DUMMY-" + UUID.randomUUID().toString().substring(0, 12).toUpperCase();
        }
        payment.setTransactionId(transactionId);
        
        // Generate unique invoice number
        String invoiceNumber = "INV-" + LocalDate.now().getYear() + "-" + 
                String.format("%06d", paymentRepository.count() + 1);
        payment.setInvoiceNumber(invoiceNumber);

        MembershipPayment saved = paymentRepository.save(payment);

        // Notify admins when a member switches plan (previous PAID plan differs from new plan)
        try {
            if (previousPlanId != null && planId != null && !previousPlanId.equals(planId)) {
                String memberName = user.getName() != null ? user.getName() : user.getEmail();
                String oldPlan = previousPlanName != null ? previousPlanName : ("Plan ID " + previousPlanId);
                String newPlan = plan.getName() != null ? plan.getName() : ("Plan ID " + planId);

                notificationService.broadcastToAdmins(
                        "Membership plan changed",
                        "Member " + memberName + " (" + user.getEmail() + ") switched membership plan from '" +
                                oldPlan + "' to '" + newPlan + "'.",
                        Notification.NotificationType.INFO,
                        Notification.NotificationCategory.MEMBERSHIP,
                        "/admin-dashboard?view=PLAN_MANAGEMENT"
                );
            }
        } catch (Exception ignored) { /* ignore */ }

        // Create notification (don't block payment if this fails)
        try {
            notificationService.createNotificationForEmail(
                    user.getEmail(),
                    "Membership payment successful",
                    "Your payment for plan '" + plan.getName() + "' was recorded successfully. Invoice: " + saved.getInvoiceNumber(),
                    Notification.NotificationType.SUCCESS,
                    Notification.NotificationCategory.PAYMENT,
                    "/dashboard"
            );
        } catch (Exception ignored) { /* ignore */ }

        // Send payment confirmation email
        try {
            if (emailService != null && user.getEmail() != null) {
                String userName = user.getName() != null ? user.getName() : user.getEmail();
                String planName = plan.getName() != null ? plan.getName() : "Membership Plan";
                emailService.sendMembershipPaymentConfirmation(
                    user.getEmail(),
                    userName,
                    planName,
                    saved.getAmount().toString(),
                    saved.getCurrency() != null ? saved.getCurrency() : "INR",
                    saved.getTransactionId()
                );
            }
        } catch (Exception e) {
            // Log but don't fail payment
            System.err.println("Error sending membership payment confirmation email: " + e.getMessage());
        }

        return convertPaymentToDTO(saved);
    }

    @Transactional
    public MembershipApplicationDTO createApplication(MembershipApplicationDTO dto) {

        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("A user with this email already exists");
        }

//        String username = dto.getEmail().split("@")[0];
//        int counter = 1;
//        String baseUsername = username;
//        while (userRepository.existsByUsername(username)) {
//            username = baseUsername + counter++;
//        }

        // 🔐 Use password from request (not hardcoded)
        User newUser = new User();
        newUser.setUsername(dto.getEmail());
        newUser.setEmail(dto.getEmail());
        newUser.setPasswordHash(passwordEncoder.encode(dto.getPassword()));
        newUser.setRole(User.Role.MEMBER);
        newUser.setName(dto.getApplicantName());
        newUser.setPhone(dto.getPhone());
        newUser.setCompany(dto.getCompany());
        newUser.setIsActive(true);

        userRepository.save(newUser);

        // Membership Application
        MembershipApplication application = new MembershipApplication();
        application.setApplicantName(dto.getApplicantName());
        //application.setDirectorNames(dto.getDirectorNames());
        application.setEmail(dto.getEmail());
        application.setPhone(dto.getPhone());
        application.setCompany(dto.getCompany());
        application.setWebsite(dto.getWebsite());
        application.setTeamSize(dto.getTeamSize());
        application.setIndustry(dto.getIndustry());
        application.setTechStack(dto.getTechStack());
        ApplicationAddress address = new ApplicationAddress();
        address.setStreet(dto.getAddress());
        address.setApplication(application);
        application.setAddress(address);

        application.setMembershipType(
            MembershipApplication.MembershipType.valueOf(dto.getMembershipType())
        );
        application.setStatus(MembershipApplication.ApplicationStatus.PENDING);

        MembershipApplication saved = applicationRepository.save(application);

        // Notify admins that a new membership application is pending approval/rejection
        try {
            String applicantName = dto.getApplicantName() != null ? dto.getApplicantName() : dto.getEmail();
            String msg = "New membership application received from " +
                    applicantName +
                    " (" + dto.getEmail() + ")" +
                    (dto.getCompany() != null && !dto.getCompany().isBlank() ? (" • " + dto.getCompany()) : "") +
                    ". Status: PENDING.";

            notificationService.broadcastToAdmins(
                    "New member application pending",
                    msg,
                    Notification.NotificationType.INFO,
                    Notification.NotificationCategory.MEMBERSHIP,
                    "/admin-dashboard?view=MEMBER_MANAGEMENT"
            );
        } catch (Exception ignored) { /* ignore */ }

        return convertToDTO(saved);
    }


    private MembershipApplicationDTO convertToDTO(MembershipApplication application) {
        MembershipApplicationDTO dto = new MembershipApplicationDTO();
        dto.setId(application.getId());
        dto.setApplicantName(application.getApplicantName());
        dto.setEmail(application.getEmail());
        dto.setPhone(application.getPhone());
        dto.setCompany(application.getCompany());
        dto.setWebsite(application.getWebsite());
        dto.setTeamSize(application.getTeamSize());
        dto.setIndustry(application.getIndustry());
        dto.setTechStack(application.getTechStack());
        if(application.getAddress()!=null)
        {
        	 dto.setAddress(application.getAddress().getStreet());
        }
       
        dto.setMembershipType(application.getMembershipType() != null ? application.getMembershipType().name() : null);
        dto.setStatus(application.getStatus() != null ? application.getStatus().name() : null);
        dto.setSubmittedAt(application.getSubmittedAt());
        dto.setReviewedAt(application.getReviewedAt());

        // ✅ Extract only the reason text
        if (application.getRejectionReason() != null) {
            try {
                ObjectMapper mapper = new ObjectMapper();
                JsonNode node = mapper.readTree(application.getRejectionReason());
                dto.setRejectionReason(node.get("reason").asText());
            } catch (Exception e) {
                // fallback: send raw value if parsing fails
                dto.setRejectionReason(application.getRejectionReason());
            }
        }
        dto.setNotes(application.getNotes());
        return dto;
    }

    private MemberDTO convertMemberToDTO(Member member) {
        MemberDTO dto = new MemberDTO();
        dto.setId(member.getId());
        
        // Check if user is null to prevent NullPointerException
        if (member.getUser() == null) {
            throw new RuntimeException("Member with ID " + member.getId() + " has no associated User");
        }
        
        dto.setName(member.getUser().getName());
        // For consistency with application view, also populate applicantName
        dto.setApplicantName(member.getUser().getName());
        dto.setEmail(member.getUser().getEmail());
        dto.setPhone(member.getUser().getPhone());
        dto.setCompany(member.getUser().getCompany());
        dto.setMembershipType(member.getMembershipType() != null ? member.getMembershipType().name() : null);
        dto.setMembershipStatus(member.getMembershipStatus() != null ? member.getMembershipStatus().name() : null);
        dto.setMembershipNumber(member.getMembershipNumber());
        dto.setSubscriptionStartDate(member.getSubscriptionStartDate());
        dto.setSubscriptionEndDate(member.getSubscriptionEndDate());
        dto.setCreatedAt(member.getCreatedAt());

        // Populate industry field
        String industry = null;

        // Try to populate industry from primary MemberCompany, or any company if no primary
        try {
            List<com.portal.entity.MemberCompany> companies = memberCompanyRepository.findByMemberId(member.getId());
            if (companies != null && !companies.isEmpty()) {
                com.portal.entity.MemberCompany primary = companies.stream()
                        .filter(c -> Boolean.TRUE.equals(c.getIsPrimary()))
                        .findFirst()
                        .orElse(companies.get(0));
                industry = primary.getIndustry();
            }
        } catch (Exception ignored) {
            // leave industry null if anything goes wrong
        }

        // Fallback to membership application's industry if company industry is null or blank
        if (industry == null || industry.isBlank()) {
            String email = member.getUser().getEmail();
            if (email != null) {
                applicationRepository.findByEmailIgnoreCase(email.trim().toLowerCase())
                    .ifPresent(app -> {
                        if (app.getIndustry() != null && !app.getIndustry().isBlank()) {
                            dto.setIndustry(app.getIndustry());
                        }
                    });
            }
        } else {
            dto.setIndustry(industry);
        }

        // Populate teamSize and registered office address fields
        String teamSize = null;
        String address = null;

        // Try to get from primary MemberCompany (or any company if no primary)
        try {
            List<com.portal.entity.MemberCompany> companies = memberCompanyRepository.findByMemberId(member.getId());
            if (companies != null && !companies.isEmpty()) {
                com.portal.entity.MemberCompany primary = companies.stream()
                        .filter(c -> Boolean.TRUE.equals(c.getIsPrimary()))
                        .findFirst()
                        .orElse(companies.get(0));
                teamSize = primary.getCompanySize();

                // Build a simple registered office address from MemberCompany fields
                StringBuilder sb = new StringBuilder();
                if (primary.getAddress() != null && !primary.getAddress().isBlank()) {
                    sb.append(primary.getAddress());
                }
                if (primary.getCity() != null && !primary.getCity().isBlank()) {
                    if (!sb.isEmpty()) sb.append(", ");
                    sb.append(primary.getCity());
                }
                if (primary.getState() != null && !primary.getState().isBlank()) {
                    if (!sb.isEmpty()) sb.append(", ");
                    sb.append(primary.getState());
                }
                if (primary.getZipCode() != null && !primary.getZipCode().isBlank()) {
                    if (!sb.isEmpty()) sb.append(" - ");
                    sb.append(primary.getZipCode());
                }
                if (primary.getCountry() != null && !primary.getCountry().isBlank()) {
                    if (!sb.isEmpty()) sb.append(", ");
                    sb.append(primary.getCountry());
                }
                if (!sb.isEmpty()) {
                    address = sb.toString();
                }
            }
        } catch (Exception ignored) {
            // leave teamSize/address null if anything goes wrong
        }

        String email = member.getUser().getEmail();

        // Fallback to membership application's teamSize/address if company data is null or blank
        if (email != null) {
            String normalizedEmail = email.trim().toLowerCase();
            java.util.Optional<MembershipApplication> optApp =
                    applicationRepository.findByEmailIgnoreCase(normalizedEmail);

            if (optApp.isPresent()) {
                MembershipApplication app = optApp.get();

                // teamSize: prefer companySize; if missing, fall back to application.teamSize
                if (teamSize == null || teamSize.isBlank()) {
                    if (app.getTeamSize() != null && !app.getTeamSize().isBlank()) {
                        dto.setTeamSize(app.getTeamSize());
                    }
                } else {
                    dto.setTeamSize(teamSize);
                }

                // address: prefer MemberCompany-composed address; if missing, fall back to application.address.street
                if (address == null || address.isBlank()) {
                    if (app.getAddress() != null &&
                        app.getAddress().getStreet() != null &&
                        !app.getAddress().getStreet().isBlank()) {
                        dto.setAddress(app.getAddress().getStreet());
                    }
                } else {
                    dto.setAddress(address);
                }
            } else {
                // No application found; still set values if we got them from company
                if (teamSize != null && !teamSize.isBlank()) {
                    dto.setTeamSize(teamSize);
                }
                if (address != null && !address.isBlank()) {
                    dto.setAddress(address);
                }
            }
        } else {
            // No email / application fallback; still set values if we got them from company
            if (teamSize != null && !teamSize.isBlank()) {
                dto.setTeamSize(teamSize);
            }
            if (address != null && !address.isBlank()) {
                dto.setAddress(address);
            }
        }

        return dto;
    }

    private MembershipFeePlanDTO convertFeePlanToDTO(MembershipFeePlan plan) {
        MembershipFeePlanDTO dto = new MembershipFeePlanDTO();
        dto.setId(plan.getId());
        dto.setName(plan.getName());
        dto.setType(plan.getType().name());
        dto.setPrice(plan.getPrice());
        dto.setCurrency(plan.getCurrency());
        dto.setDurationMonths(plan.getDurationMonths());
        dto.setIsActive(plan.getIsActive());
        dto.setCreatedAt(plan.getCreatedAt());

        // Parse features JSON
        if (plan.getFeatures() != null && !plan.getFeatures().isEmpty()) {
            try {
                List<String> features = objectMapper.readValue(plan.getFeatures(),
                    new TypeReference<List<String>>() {});
                dto.setFeatures(features);
            } catch (Exception e) {
                dto.setFeatures(new ArrayList<>());
            }
        } else {
            dto.setFeatures(new ArrayList<>());
        }

        return dto;
    }

    private MembershipPaymentDTO convertPaymentToDTO(MembershipPayment payment) {
        MembershipPaymentDTO dto = new MembershipPaymentDTO();
        if (payment == null) {
            return dto;
        }

        dto.setId(payment.getId());

        if (payment.getMember() != null) {
            dto.setMemberId(payment.getMember().getId());
            if (payment.getMember().getUser() != null) {
                dto.setMemberName(payment.getMember().getUser().getName());
            }
        }

        if (payment.getPlan() != null) {
            dto.setPlanId(payment.getPlan().getId());
            dto.setPlanName(payment.getPlan().getName());
        }

        dto.setAmount(payment.getAmount());
        dto.setCurrency(payment.getCurrency());
        dto.setStatus(payment.getStatus() != null ? payment.getStatus().name() : null);
        dto.setDueDate(payment.getDueDate());
        dto.setPaidDate(payment.getPaidDate());

        if (payment.getPaymentMethod() != null) {
            dto.setPaymentMethod(payment.getPaymentMethod().name());
        }

        dto.setTransactionId(payment.getTransactionId());
        dto.setInvoiceNumber(payment.getInvoiceNumber());
        dto.setCreatedAt(payment.getCreatedAt());
        return dto;
    }
}

