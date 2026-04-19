package com.portal.repository;

import com.portal.entity.MembershipPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MembershipPaymentRepository extends JpaRepository<MembershipPayment, Long> {
    List<MembershipPayment> findByMemberId(Long memberId);

    @Modifying
    @Query("UPDATE MembershipPayment mp SET mp.plan = null WHERE mp.plan.id = :planId")
    void clearPlanForPlan(@Param("planId") Long planId);

    Optional<MembershipPayment> findTopByMemberIdAndStatusOrderByCreatedAtDesc(
            Long memberId,
            MembershipPayment.PaymentStatus status
    );
    
    // Count distinct members who have paid for a specific plan
    @Query("SELECT COUNT(DISTINCT mp.member.id) FROM MembershipPayment mp WHERE mp.plan.id = :planId")
    long countDistinctMembersByPlanId(@Param("planId") Long planId);
    
    // Count distinct ACTIVE members who have paid for a specific plan
    @Query("SELECT COUNT(DISTINCT mp.member.id) FROM MembershipPayment mp WHERE mp.plan.id = :planId AND mp.member.membershipStatus = 'ACTIVE'")
    long countDistinctActiveMembersByPlanId(@Param("planId") Long planId);
    
    // Count ACTIVE members whose LATEST PAID payment is for a specific plan (current plan)
    // This ensures that when a member switches plans, they're only counted in their current plan
    @Query("SELECT COUNT(DISTINCT mp.member.id) " +
           "FROM MembershipPayment mp " +
           "WHERE mp.member.membershipStatus = 'ACTIVE' " +
           "AND mp.plan.id = :planId " +
           "AND mp.status = 'PAID' " +
           "AND mp.createdAt = (SELECT MAX(mp2.createdAt) FROM MembershipPayment mp2 " +
           "                     WHERE mp2.member.id = mp.member.id " +
           "                     AND mp2.status = 'PAID')")
    long countActiveMembersWithLatestPaymentForPlan(@Param("planId") Long planId);
}




