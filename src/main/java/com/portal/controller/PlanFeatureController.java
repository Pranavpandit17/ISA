package com.portal.controller;

import com.portal.dto.PlanFeatureDTO;
import com.portal.service.PlanFeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plan-features")
@CrossOrigin(origins = "http://localhost:4200")
public class PlanFeatureController {
    
    @Autowired
    private PlanFeatureService service;
    
    @GetMapping
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<List<PlanFeatureDTO>> getAllFeatures() {
        return ResponseEntity.ok(service.getAllFeatures());
    }
    
    @GetMapping("/active")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<List<PlanFeatureDTO>> getActiveFeatures() {
        return ResponseEntity.ok(service.getActiveFeatures());
    }
    
    @GetMapping("/category/{category}")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<List<PlanFeatureDTO>> getFeaturesByCategory(@PathVariable("category") String category) {
        return ResponseEntity.ok(service.getFeaturesByCategory(category));
    }
    
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<PlanFeatureDTO> getFeatureById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.getFeatureById(id));
    }
    
    @GetMapping("/code/{code}")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<PlanFeatureDTO> getFeatureByCode(@PathVariable("code") String code) {
        return ResponseEntity.ok(service.getFeatureByCode(code));
    }
    
    @GetMapping("/plan/{planId}")
    @PreAuthorize("hasAnyRole('MEMBER', 'ADMIN')")
    public ResponseEntity<List<PlanFeatureDTO>> getFeaturesByPlan(@PathVariable("planId") Long planId) {
        return ResponseEntity.ok(service.getFeaturesByPlan(planId));
    }
    
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PlanFeatureDTO> createFeature(@RequestBody PlanFeatureDTO dto) {
        return ResponseEntity.ok(service.createFeature(dto));
    }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PlanFeatureDTO> updateFeature(
            @PathVariable("id") Long id,
            @RequestBody PlanFeatureDTO dto) {
        return ResponseEntity.ok(service.updateFeature(id, dto));
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteFeature(@PathVariable("id") Long id) {
        service.deleteFeature(id);
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/assign")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> assignFeatureToPlan(
            @RequestParam("featureId") Long featureId,
            @RequestParam("planId") Long planId) {
        service.assignFeatureToPlan(featureId, planId);
        return ResponseEntity.ok().build();
    }
    
    @DeleteMapping("/assign")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> removeFeatureFromPlan(
            @RequestParam("featureId") Long featureId,
            @RequestParam("planId") Long planId) {
        service.removeFeatureFromPlan(featureId, planId);
        return ResponseEntity.ok().build();
    }
    
    @PutMapping("/plan/{planId}/assign")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> assignFeaturesToPlan(
            @PathVariable("planId") Long planId,
            @RequestBody List<Long> featureIds) {
        service.assignFeaturesToPlan(planId, featureIds);
        return ResponseEntity.ok().build();
    }
}
