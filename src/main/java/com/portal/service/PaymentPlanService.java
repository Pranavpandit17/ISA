package com.portal.service;

import com.portal.dto.MembershipFeePlanDTO;
import com.portal.entity.MembershipFeePlan;
import com.portal.entity.Notification;
import com.portal.repository.MembershipFeePlanRepository;
import com.portal.repository.MembershipPaymentRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.portal.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PaymentPlanService {

    @Autowired
    private MembershipFeePlanRepository feePlanRepository;

    @Autowired
    private MembershipPaymentRepository paymentRepository;

    @Autowired
    private NotificationService notificationService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<MembershipFeePlanDTO> getAllPlans() {
        return feePlanRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<MembershipFeePlanDTO> getActivePlans() {
        return feePlanRepository.findByIsActiveTrue().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public MembershipFeePlanDTO getPlanById(Long id) {
        MembershipFeePlan plan = feePlanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Plan not found"));
        return convertToDTO(plan);
    }

    @Transactional
    public MembershipFeePlanDTO createPlan(MembershipFeePlanDTO dto) {
        MembershipFeePlan plan = convertToEntity(dto);
        MembershipFeePlan saved = feePlanRepository.save(plan);

        // Broadcast only if the plan is active (avoid notifying members about inactive plans)
        try {
            if (Boolean.TRUE.equals(saved.getIsActive())) {
                notificationService.broadcastToActiveMembers(
                        "New membership plan available",
                        "A new membership plan '" + (saved.getName() != null ? saved.getName() : "Plan") + "' has been created.",
                        Notification.NotificationType.INFO,
                        Notification.NotificationCategory.MEMBERSHIP,
                        "/dashboard"
                );
            }
        } catch (Exception ignored) { /* ignore */ }

        return convertToDTO(saved);
    }

    @Transactional
    public MembershipFeePlanDTO updatePlan(Long id, MembershipFeePlanDTO dto) {
        MembershipFeePlan plan = feePlanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Plan not found"));

        plan.setName(dto.getName());
        plan.setType(MembershipFeePlan.MembershipType.valueOf(dto.getType()));
        plan.setPrice(dto.getPrice());
        plan.setCurrency(dto.getCurrency());
        plan.setDurationMonths(dto.getDurationMonths());
        if (dto.getFeatures() != null) {
            try {
                plan.setFeatures(objectMapper.writeValueAsString(dto.getFeatures()));
            } catch (Exception e) {
                throw new RuntimeException("Error converting features to JSON", e);
            }
        }
        if (dto.getIsActive() != null) {
            plan.setIsActive(dto.getIsActive());
        }

        MembershipFeePlan updated = feePlanRepository.save(plan);
        return convertToDTO(updated);
    }

    @Transactional
    public void deletePlan(Long id) {
        feePlanRepository.deleteById(id);
    }

    private MembershipFeePlanDTO convertToDTO(MembershipFeePlan plan) {
        MembershipFeePlanDTO dto = new MembershipFeePlanDTO();
        if (plan == null) {
            dto.setFeatures(List.of());
            dto.setMemberCount(0L);
            return dto;
        }

        dto.setId(plan.getId());
        dto.setName(plan.getName());
        dto.setType(plan.getType() != null ? plan.getType().name() : null);
        dto.setPrice(plan.getPrice() != null ? plan.getPrice() : java.math.BigDecimal.ZERO);
        dto.setCurrency(plan.getCurrency() != null ? plan.getCurrency() : "INR");
        dto.setDurationMonths(plan.getDurationMonths() != null ? plan.getDurationMonths() : 0);
        dto.setIsActive(plan.getIsActive() != null ? plan.getIsActive() : Boolean.FALSE);
        dto.setCreatedAt(plan.getCreatedAt());

        if (plan.getFeatures() != null && !plan.getFeatures().isEmpty()) {
            try {
                dto.setFeatures(objectMapper.readValue(plan.getFeatures(), new TypeReference<List<String>>() {}));
            } catch (Exception e) {
                dto.setFeatures(List.of());
            }
        } else {
            dto.setFeatures(List.of());
        }

        // Count ACTIVE members whose LATEST payment is for this plan (current plan)
        // This ensures that when a member switches plans, they're only counted in their current plan
        try {
            long memberCount = paymentRepository.countActiveMembersWithLatestPaymentForPlan(plan.getId());
            dto.setMemberCount(memberCount);
        } catch (Exception e) {
            dto.setMemberCount(0L);
        }

        return dto;
    }

    private MembershipFeePlan convertToEntity(MembershipFeePlanDTO dto) {
        MembershipFeePlan plan = new MembershipFeePlan();
        plan.setName(dto.getName());
        try {
            plan.setType(dto.getType() != null ? MembershipFeePlan.MembershipType.valueOf(dto.getType()) : MembershipFeePlan.MembershipType.INDIVIDUAL);
        } catch (IllegalArgumentException e) {
            plan.setType(MembershipFeePlan.MembershipType.INDIVIDUAL);
        }
        plan.setPrice(dto.getPrice() != null ? dto.getPrice() : java.math.BigDecimal.ZERO);
        plan.setCurrency(dto.getCurrency() != null ? dto.getCurrency() : "USD");
        plan.setDurationMonths(dto.getDurationMonths() != null ? dto.getDurationMonths() : 12);
        if (dto.getFeatures() != null) {
            try {
                plan.setFeatures(objectMapper.writeValueAsString(dto.getFeatures()));
            } catch (Exception e) {
                throw new RuntimeException("Error converting features to JSON", e);
            }
        }
        plan.setIsActive(dto.getIsActive() != null ? dto.getIsActive() : true);
        return plan;
    }
}




