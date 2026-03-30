package com.portal.repository;

import com.portal.entity.MembershipFeePlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MembershipFeePlanRepository extends JpaRepository<MembershipFeePlan, Long> {
    List<MembershipFeePlan> findByIsActiveTrue();
}




