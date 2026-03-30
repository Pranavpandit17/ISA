package com.portal.service;

import com.portal.dto.PlanFeatureDTO;
import com.portal.entity.PlanFeature;
import com.portal.entity.MembershipFeePlan;
import com.portal.repository.PlanFeatureRepository;
import com.portal.repository.MembershipFeePlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Set;

@Service
public class PlanFeatureService {
    
    @Autowired
    private PlanFeatureRepository featureRepository;
    
    @Autowired
    private MembershipFeePlanRepository planRepository;
    
    public List<PlanFeatureDTO> getAllFeatures() {
        return featureRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public List<PlanFeatureDTO> getActiveFeatures() {
        return featureRepository.findByIsActiveTrue().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public List<PlanFeatureDTO> getFeaturesByCategory(String category) {
        try {
            PlanFeature.FeatureCategory enumCategory = PlanFeature.FeatureCategory.valueOf(category.toUpperCase());
            return featureRepository.findByCategoryAndIsActiveTrue(enumCategory).stream()
                    .map(this::convertToDTO)
                    .collect(Collectors.toList());
        } catch (IllegalArgumentException e) {
            return getActiveFeatures();
        }
    }
    
    public PlanFeatureDTO getFeatureById(Long id) {
        PlanFeature feature = featureRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Feature not found: " + id));
        return convertToDTO(feature);
    }
    
    public PlanFeatureDTO getFeatureByCode(String code) {
        PlanFeature feature = featureRepository.findByCode(code)
                .orElseThrow(() -> new RuntimeException("Feature not found: " + code));
        return convertToDTO(feature);
    }
    
    @Transactional
    public PlanFeatureDTO createFeature(PlanFeatureDTO dto) {
        // Check if code already exists
        if (featureRepository.findByCode(dto.getCode()).isPresent()) {
            throw new RuntimeException("Feature with code '" + dto.getCode() + "' already exists");
        }
        
        PlanFeature feature = new PlanFeature();
        feature.setCode(dto.getCode().toUpperCase());
        feature.setName(dto.getName());
        feature.setDescription(dto.getDescription());
        
        if (dto.getCategory() != null) {
            try {
                feature.setCategory(PlanFeature.FeatureCategory.valueOf(dto.getCategory().toUpperCase()));
            } catch (IllegalArgumentException e) {
                feature.setCategory(PlanFeature.FeatureCategory.GENERAL);
            }
        } else {
            feature.setCategory(PlanFeature.FeatureCategory.GENERAL);
        }
        
        feature.setIsActive(dto.getIsActive() != null ? dto.getIsActive() : true);
        
        PlanFeature saved = featureRepository.save(feature);
        return convertToDTO(saved);
    }
    
    @Transactional
    public PlanFeatureDTO updateFeature(Long id, PlanFeatureDTO dto) {
        PlanFeature feature = featureRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Feature not found: " + id));
        
        // Check if code is being changed and if new code already exists
        if (!feature.getCode().equals(dto.getCode().toUpperCase())) {
            if (featureRepository.findByCode(dto.getCode().toUpperCase()).isPresent()) {
                throw new RuntimeException("Feature with code '" + dto.getCode() + "' already exists");
            }
            feature.setCode(dto.getCode().toUpperCase());
        }
        
        feature.setName(dto.getName());
        feature.setDescription(dto.getDescription());
        
        if (dto.getCategory() != null) {
            try {
                feature.setCategory(PlanFeature.FeatureCategory.valueOf(dto.getCategory().toUpperCase()));
            } catch (IllegalArgumentException e) {
                // Keep existing category
            }
        }
        
        if (dto.getIsActive() != null) {
            feature.setIsActive(dto.getIsActive());
        }
        
        PlanFeature updated = featureRepository.save(feature);
        return convertToDTO(updated);
    }
    
    @Transactional
    public void deleteFeature(Long id) {
        PlanFeature feature = featureRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Feature not found: " + id));
        
        // Remove feature from all plans
        Set<MembershipFeePlan> plans = feature.getPlans();
        for (MembershipFeePlan plan : plans) {
            plan.getPlanFeatures().remove(feature);
        }
        planRepository.saveAll(plans);
        
        featureRepository.delete(feature);
    }
    
    @Transactional
    public void assignFeatureToPlan(Long featureId, Long planId) {
        PlanFeature feature = featureRepository.findById(featureId)
                .orElseThrow(() -> new RuntimeException("Feature not found: " + featureId));
        MembershipFeePlan plan = planRepository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found: " + planId));
        
        plan.getPlanFeatures().add(feature);
        planRepository.save(plan);
    }
    
    @Transactional
    public void removeFeatureFromPlan(Long featureId, Long planId) {
        PlanFeature feature = featureRepository.findById(featureId)
                .orElseThrow(() -> new RuntimeException("Feature not found: " + featureId));
        MembershipFeePlan plan = planRepository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found: " + planId));
        
        plan.getPlanFeatures().remove(feature);
        planRepository.save(plan);
    }
    
    @Transactional
    public void assignFeaturesToPlan(Long planId, List<Long> featureIds) {
        MembershipFeePlan plan = planRepository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found: " + planId));
        
        Set<PlanFeature> features = featureIds.stream()
                .map(id -> featureRepository.findById(id)
                        .orElseThrow(() -> new RuntimeException("Feature not found: " + id)))
                .collect(Collectors.toSet());
        
        plan.setPlanFeatures(features);
        planRepository.save(plan);
    }
    
    public List<PlanFeatureDTO> getFeaturesByPlan(Long planId) {
        MembershipFeePlan plan = planRepository.findById(planId)
                .orElseThrow(() -> new RuntimeException("Plan not found: " + planId));
        
        return plan.getPlanFeatures().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    private PlanFeatureDTO convertToDTO(PlanFeature feature) {
        PlanFeatureDTO dto = new PlanFeatureDTO();
        dto.setId(feature.getId());
        dto.setCode(feature.getCode());
        dto.setName(feature.getName());
        dto.setDescription(feature.getDescription());
        dto.setCategory(feature.getCategory().name());
        dto.setIsActive(feature.getIsActive());
        dto.setCreatedAt(feature.getCreatedAt());
        dto.setUpdatedAt(feature.getUpdatedAt());
        
        // Get plan IDs that have this feature
        List<Long> planIds = feature.getPlans().stream()
                .map(MembershipFeePlan::getId)
                .collect(Collectors.toList());
        dto.setPlanIds(planIds);
        
        return dto;
    }
}
