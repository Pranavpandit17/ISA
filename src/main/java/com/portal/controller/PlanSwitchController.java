package com.portal.controller;

import com.portal.service.PlanSwitchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/plan-switch")
@CrossOrigin(origins = "http://localhost:4200")
public class PlanSwitchController {

    @Autowired
    private PlanSwitchService planSwitchService;

    @Autowired
    private com.portal.repository.UserRepository userRepository;

    @PostMapping("/request")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<Map<String, String>> requestPlanSwitch(@RequestBody Map<String, Long> request, Authentication authentication) {
        String email = authentication.getName(); // authentication.getName() now returns email
        com.portal.entity.User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Long newPlanId = request.get("planId");
        planSwitchService.switchPlan(user.getId(), newPlanId);

        return ResponseEntity.ok(Map.of("message", "Plan switch requested. Please complete payment to activate new plan."));
    }

    @PostMapping("/confirm/{paymentId}")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<Map<String, String>> confirmPlanSwitch(@PathVariable("paymentId") Long paymentId) {
        planSwitchService.confirmPlanSwitch(paymentId);
        return ResponseEntity.ok(Map.of("message", "Plan switched successfully"));
    }
}


