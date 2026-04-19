package com.portal.repository;

import com.portal.entity.MembershipFeePlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MembershipFeePlanRepository extends JpaRepository<MembershipFeePlan, Long> {
    List<MembershipFeePlan> findByIsActiveTrue();

    @Modifying
    @Query(value = "DELETE FROM plan_feature_assignments WHERE plan_id = :planId", nativeQuery = true)
    void deletePlanFeatureAssignments(@Param("planId") Long planId);
}




