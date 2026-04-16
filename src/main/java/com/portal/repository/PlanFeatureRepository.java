package com.portal.repository;

import com.portal.entity.PlanFeature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlanFeatureRepository extends JpaRepository<PlanFeature, Long> {
    Optional<PlanFeature> findByCode(String code);
    List<PlanFeature> findByIsActiveTrue();
    List<PlanFeature> findByCategory(PlanFeature.FeatureCategory category);
    List<PlanFeature> findByCategoryAndIsActiveTrue(PlanFeature.FeatureCategory category);
    List<PlanFeature> findByPlans_IdAndIsActiveTrue(Long planId);
}
