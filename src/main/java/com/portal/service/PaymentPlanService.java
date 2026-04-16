package com.portal.service;

import com.portal.dto.MembershipFeePlanDTO;
import com.portal.dto.PlanFeatureDTO;
import com.portal.entity.MembershipFeePlan;
import com.portal.entity.PlanFeature;
import com.portal.entity.Notification;
import com.portal.repository.MembershipFeePlanRepository;
import com.portal.repository.MembershipPaymentRepository;
import com.portal.repository.PlanFeatureRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.portal.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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

    @Autowired
    private PlanFeatureRepository planFeatureRepository;

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
                plan.setFeatures(objectMapper.writeValueAsString(extractFeatureNames(dto.getFeatures())));
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
        dto.setLevel(resolvePlanLevel(plan));
        dto.setIsActive(plan.getIsActive() != null ? plan.getIsActive() : Boolean.FALSE);
        dto.setCreatedAt(plan.getCreatedAt());

        List<Object> resolvedFeatures = new ArrayList<>();

        // Prefer assigned plan features from plan_feature_assignments table.
        List<PlanFeature> assignedFeatures = planFeatureRepository.findByPlans_IdAndIsActiveTrue(plan.getId());
        if (assignedFeatures != null && !assignedFeatures.isEmpty()) {
            resolvedFeatures.addAll(
                    assignedFeatures.stream()
                            .filter(f -> f != null)
                            .map(this::convertPlanFeatureToDto)
                            .collect(Collectors.toList())
            );
        }

        // Fallback to legacy JSON field if no assignments are present.
        if (resolvedFeatures.isEmpty() && plan.getFeatures() != null && !plan.getFeatures().isEmpty()) {
            try {
                List<String> legacyFeatures = objectMapper.readValue(plan.getFeatures(), new TypeReference<List<String>>() {});
                resolvedFeatures.addAll(
                        legacyFeatures.stream()
                                .filter(name -> name != null && !name.isBlank())
                                .map(name -> {
                                    PlanFeatureDTO featureDto = new PlanFeatureDTO();
                                    featureDto.setName(name);
                                    featureDto.setCode(name.toUpperCase().replaceAll("[^A-Z0-9]+", "_"));
                                    featureDto.setDescription(name);
                                    featureDto.setCategory("GENERAL");
                                    featureDto.setIsActive(true);
                                    featureDto.setPlanIds(List.of(plan.getId()));
                                    return featureDto;
                                })
                                .collect(Collectors.toList())
                );
            } catch (Exception e) {
                // ignore and keep empty
            }
        }
        dto.setFeatures(resolvedFeatures);

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
        plan.setLevel(dto.getLevel() != null ? dto.getLevel() : inferLevelFromPrice(dto.getPrice()));
        if (dto.getFeatures() != null) {
            try {
                plan.setFeatures(objectMapper.writeValueAsString(extractFeatureNames(dto.getFeatures())));
            } catch (Exception e) {
                throw new RuntimeException("Error converting features to JSON", e);
            }
        }
        plan.setIsActive(dto.getIsActive() != null ? dto.getIsActive() : true);
        return plan;
    }

    private Integer resolvePlanLevel(MembershipFeePlan plan) {
        if (plan.getLevel() != null && plan.getLevel() > 0) {
            return plan.getLevel();
        }
        return inferLevelFromPrice(plan.getPrice());
    }

    private Integer inferLevelFromPrice(java.math.BigDecimal price) {
        java.math.BigDecimal normalized = price != null ? price : java.math.BigDecimal.ZERO;
        if (normalized.compareTo(java.math.BigDecimal.ZERO) <= 0) {
            return 1;
        }
        if (normalized.compareTo(new java.math.BigDecimal("3500")) <= 0) {
            return 2;
        }
        if (normalized.compareTo(new java.math.BigDecimal("7000")) <= 0) {
            return 3;
        }
        return 4;
    }

    private PlanFeatureDTO convertPlanFeatureToDto(PlanFeature feature) {
        PlanFeatureDTO dto = new PlanFeatureDTO();
        dto.setId(feature.getId());
        dto.setCode(feature.getCode());
        dto.setName(feature.getName());
        dto.setDescription(feature.getDescription());
        dto.setCategory(feature.getCategory() != null ? feature.getCategory().name() : "GENERAL");
        dto.setIsActive(feature.getIsActive());
        dto.setCreatedAt(feature.getCreatedAt());
        dto.setUpdatedAt(feature.getUpdatedAt());
        dto.setPlanIds(
                feature.getPlans().stream()
                        .map(MembershipFeePlan::getId)
                        .collect(Collectors.toList())
        );
        return dto;
    }

    private List<String> extractFeatureNames(List<Object> rawFeatures) {
        if (rawFeatures == null) {
            return List.of();
        }
        List<String> names = new ArrayList<>();
        for (Object item : rawFeatures) {
            if (item == null) {
                continue;
            }
            if (item instanceof String s) {
                String trimmed = s.trim();
                if (!trimmed.isEmpty()) {
                    names.add(trimmed);
                }
                continue;
            }
            if (item instanceof java.util.Map<?, ?> map) {
                Object nameObj = map.get("name");
                if (nameObj != null) {
                    String trimmed = String.valueOf(nameObj).trim();
                    if (!trimmed.isEmpty()) {
                        names.add(trimmed);
                    }
                }
                continue;
            }
            String asText = String.valueOf(item).trim();
            if (!asText.isEmpty()) {
                names.add(asText);
            }
        }
        return names;
    }
}




