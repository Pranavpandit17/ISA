package com.portal.controller;

import com.portal.dto.LoginResponse;
import com.portal.dto.MembershipFeePlanDTO;
import com.portal.dto.SelectPlanRequest;
import com.portal.entity.MembershipFeePlan;
import com.portal.entity.User;
import com.portal.repository.MembershipFeePlanRepository;
import com.portal.repository.UserRepository;
import com.portal.service.AuthService;
import com.portal.service.PaymentPlanService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.time.LocalDate;

@RestController
@RequestMapping("/api/plans")
@CrossOrigin(origins = "http://localhost:4200")
public class PlanController {

    private final PaymentPlanService paymentPlanService;
    private final UserRepository userRepository;
    private final MembershipFeePlanRepository planRepository;
    private final AuthService authService;

    public PlanController(
            PaymentPlanService paymentPlanService,
            UserRepository userRepository,
            MembershipFeePlanRepository planRepository,
            AuthService authService
    ) {
        this.paymentPlanService = paymentPlanService;
        this.userRepository = userRepository;
        this.planRepository = planRepository;
        this.authService = authService;
    }

    @GetMapping
    public ResponseEntity<List<MembershipFeePlanDTO>> getPublicPlans() {
        return ResponseEntity.ok(paymentPlanService.getActivePlans());
    }

    @PostMapping("/select-plan")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<?> selectPlan(
            @Valid @RequestBody SelectPlanRequest request,
            Authentication authentication
    ) {
        try {
            String email = authentication != null ? authentication.getName() : null;
            if (email == null || email.isBlank()) {
                return ResponseEntity.status(org.springframework.http.HttpStatus.UNAUTHORIZED).build();
            }

            User user = userRepository.findByEmailIgnoreCase(email)
                    .orElseThrow(() -> new RuntimeException("User not found: " + email));

            MembershipFeePlan selected = planRepository.findById(request.getPlanId())
                    .orElseThrow(() -> new RuntimeException("Plan not found: " + request.getPlanId()));

            int selectedLevel = resolvePlanLevel(selected);
            MembershipFeePlan currentPlan = user.getSelectedPlan();
            boolean hasActivePlan = user.getPlanStatus() == User.PlanStatus.SELECTED
                    && currentPlan != null
                    && (user.getPlanExpiryDate() == null || !user.getPlanExpiryDate().isBefore(LocalDate.now()));

            if (hasActivePlan) {
                int currentLevel = resolvePlanLevel(currentPlan);
                if (currentPlan.getId() != null && currentPlan.getId().equals(selected.getId())) {
                    throw new RuntimeException("You are already on this plan. Duplicate purchase is not allowed.");
                }
                if (selectedLevel <= currentLevel) {
                    throw new RuntimeException("Only upgrades are allowed. Downgrade or same-level selection is not permitted.");
                }
            } else if (currentPlan != null && currentPlan.getId() != null && currentPlan.getId().equals(selected.getId())) {
                // Expired same plan is allowed as re-selection per business requirement.
            }

            LocalDate startDate = LocalDate.now();
            Integer durationMonths = selected.getDurationMonths() != null && selected.getDurationMonths() > 0
                    ? selected.getDurationMonths()
                    : null;

            user.setSelectedPlan(selected);
            user.setPlanStatus(User.PlanStatus.SELECTED);
            user.setPlanStartDate(startDate);
            user.setPlanExpiryDate(durationMonths != null ? startDate.plusMonths(durationMonths).minusDays(1) : null);
            userRepository.save(user);

            return ResponseEntity.ok(authService.getCurrentProfile(email));
        } catch (RuntimeException ex) {
            return ResponseEntity.status(org.springframework.http.HttpStatus.BAD_REQUEST)
                    .body(java.util.Map.of("error", ex.getMessage() != null ? ex.getMessage() : "Invalid plan selection"));
        }
    }

    private int resolvePlanLevel(MembershipFeePlan plan) {
        if (plan.getLevel() != null && plan.getLevel() > 0) {
            return plan.getLevel();
        }
        java.math.BigDecimal price = plan.getPrice() != null ? plan.getPrice() : java.math.BigDecimal.ZERO;
        if (price.compareTo(java.math.BigDecimal.ZERO) <= 0) {
            return 1;
        }
        if (price.compareTo(new java.math.BigDecimal("3500")) <= 0) {
            return 2;
        }
        if (price.compareTo(new java.math.BigDecimal("7000")) <= 0) {
            return 3;
        }
        return 4;
    }
}
