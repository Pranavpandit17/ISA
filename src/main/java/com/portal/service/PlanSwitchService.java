package com.portal.service;

import com.portal.entity.Member;
import com.portal.entity.MembershipFeePlan;
import com.portal.entity.MembershipPayment;
import com.portal.entity.User;
import com.portal.repository.MemberRepository;
import com.portal.repository.MembershipFeePlanRepository;
import com.portal.repository.MembershipPaymentRepository;
import com.portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class PlanSwitchService {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private MembershipFeePlanRepository feePlanRepository;

    @Autowired
    private MembershipPaymentRepository paymentRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void switchPlan(Long memberId, Long newPlanId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new RuntimeException("Member not found"));

        MembershipFeePlan newPlan = feePlanRepository.findById(newPlanId)
                .orElseThrow(() -> new RuntimeException("Plan not found"));

        if (!newPlan.getIsActive()) {
            throw new RuntimeException("Selected plan is not active");
        }

        // Create a new payment record for the plan switch
        MembershipPayment payment = new MembershipPayment();
        payment.setMember(member);
        payment.setPlan(newPlan);
        payment.setAmount(newPlan.getPrice());
        payment.setCurrency(newPlan.getCurrency());
        payment.setStatus(MembershipPayment.PaymentStatus.PENDING);
        payment.setDueDate(LocalDate.now().plusDays(7)); // 7 days to pay
        payment.setInvoiceNumber("INV-" + UUID.randomUUID().toString().substring(0, 9).toUpperCase());

        paymentRepository.save(payment);

        // Note: Actual plan switch happens after payment is confirmed
        // This creates a pending payment that needs to be paid
    }

    @Transactional
    public void confirmPlanSwitch(Long paymentId) {
        MembershipPayment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new RuntimeException("Payment not found"));

        if (payment.getStatus() != MembershipPayment.PaymentStatus.PAID) {
            throw new RuntimeException("Payment must be completed before switching plan");
        }

        Member member = payment.getMember();
        MembershipFeePlan newPlan = payment.getPlan();

        // Update member's plan
        member.setMembershipType(Member.MembershipType.valueOf(newPlan.getType().name()));
        LocalDate now = LocalDate.now();
        member.setSubscriptionStartDate(now);
        member.setSubscriptionEndDate(now.plusMonths(newPlan.getDurationMonths()));

        memberRepository.save(member);
    }
}




