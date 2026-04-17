package com.portal.controller;

import com.portal.dto.MembershipFeePlanDTO;
import com.portal.service.PaymentPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment-plans")
@CrossOrigin(origins = "http://localhost:4200")
public class PaymentPlanController {

    @Autowired
    private PaymentPlanService planService;

    @GetMapping
    public ResponseEntity<List<MembershipFeePlanDTO>> getAllPlans() {
        return ResponseEntity.ok(planService.getActivePlans());
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<MembershipFeePlanDTO>> getAllPlansAdmin() {
        return ResponseEntity.ok(planService.getAllPlans());
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<MembershipFeePlanDTO> getPlanById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(planService.getPlanById(id));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MembershipFeePlanDTO> createPlan(@RequestBody MembershipFeePlanDTO dto) {
        return ResponseEntity.ok(planService.createPlan(dto));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MembershipFeePlanDTO> updatePlan(@PathVariable("id") Long id, @RequestBody MembershipFeePlanDTO dto) {
        return ResponseEntity.ok(planService.updatePlan(id, dto));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deletePlan(@PathVariable("id") Long id) {
        planService.deletePlan(id);
        return ResponseEntity.ok().build();
    }
}




