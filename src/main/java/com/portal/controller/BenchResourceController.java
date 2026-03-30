package com.portal.controller;

import com.portal.dto.BenchResourceDTO;
import com.portal.dto.ResourceInterestDTO;
import com.portal.service.AuthService;
import com.portal.service.BenchResourceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;

/**
 * REST Controller for Bench Resource management
 * Handles CRUD operations for bench resources
 */
@RestController
@RequestMapping("/api/bench-resources")
@CrossOrigin(origins = "http://localhost:4200")
public class BenchResourceController {

    private static final Logger logger = LoggerFactory.getLogger(BenchResourceController.class);

    @Autowired
    private BenchResourceService benchResourceService;

    @Autowired
    private AuthService authService;

    /**
     * Get all active bench resources
     * GET /api/bench-resources
     */
    @GetMapping
    public ResponseEntity<List<BenchResourceDTO>> getAllResources() {
        try {
            List<BenchResourceDTO> resources = benchResourceService.getAllResources();
            logger.info("Retrieved {} bench resources", resources.size());
            return ResponseEntity.ok(resources);
        } catch (Exception e) {
            logger.error("Error retrieving bench resources", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Get resources posted by the current logged-in user
     * GET /api/bench-resources/my-resources
     */
    @GetMapping("/my-resources")
    public ResponseEntity<List<BenchResourceDTO>> getMyResources(Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to get my resources");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            List<BenchResourceDTO> resources = benchResourceService.getResourcesByUserId(userId);
            logger.info("Retrieved {} resources for user {}", resources.size(), userId);
            return ResponseEntity.ok(resources);
        } catch (Exception e) {
            logger.error("Error retrieving my resources", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Submit interest in a bench resource
     * POST /api/bench-resources/interests/{resourceId}
     */
    @PostMapping(value = "/interests/{resourceId}", consumes = "application/json")
    public ResponseEntity<ResourceInterestDTO> submitInterest(
            @PathVariable("resourceId") Long resourceId,
            @RequestBody Map<String, String> interestData,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to submit interest for resource {}", resourceId);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String message = interestData.get("message");
            String contactEmail = interestData.get("contactEmail");
            String contactPhone = interestData.get("contactPhone");

            if (message == null || message.trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }

            ResourceInterestDTO interest = benchResourceService.submitInterest(resourceId, userId, message, contactEmail, contactPhone);
            logger.info("User {} submitted interest for resource {}", userId, resourceId);
            return ResponseEntity.status(HttpStatus.CREATED).body(interest);
        } catch (RuntimeException e) {
            logger.error("Error submitting interest: {}", e.getMessage());
            if (e.getMessage().contains("already shown interest")) {
                return ResponseEntity.status(HttpStatus.CONFLICT).build();
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        } catch (Exception e) {
            logger.error("Error submitting interest for resource {}", resourceId, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Get all interests for a bench resource (only for resource owner)
     * GET /api/bench-resources/interests/{resourceId}
     */
    @GetMapping("/interests/{resourceId}")
    public ResponseEntity<List<ResourceInterestDTO>> getResourceInterests(
            @PathVariable("resourceId") Long resourceId,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to get interests for resource {}", resourceId);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Verify user owns the resource
            BenchResourceDTO resource = benchResourceService.getResourceById(resourceId);
            if (resource == null) {
                logger.warn("Resource {} not found when getting interests", resourceId);
                return ResponseEntity.notFound().build();
            }

            Long resourceOwnerId = resource.getPostedBy();
            if (resourceOwnerId == null) {
                logger.error("Resource {} has null postedBy field", resourceId);
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }

            if (!resourceOwnerId.equals(userId)) {
                logger.warn("User {} (email: {}) attempted to get interests for resource {} owned by user {}", 
                    userId, userEmail, resourceId, resourceOwnerId);
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }

            List<ResourceInterestDTO> interests = benchResourceService.getResourceInterests(resourceId);
            logger.info("Retrieved {} interests for resource {} owned by user {}", interests.size(), resourceId, userId);
            return ResponseEntity.ok(interests);
        } catch (Exception e) {
            logger.error("Error retrieving interests for resource {}", resourceId, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Get a specific bench resource by ID
     * GET /api/bench-resources/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<BenchResourceDTO> getResourceById(@PathVariable("id") Long id) {
        try {
            BenchResourceDTO resource = benchResourceService.getResourceById(id);
            if (resource == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(resource);
        } catch (Exception e) {
            logger.error("Error retrieving resource {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Create a new bench resource
     * POST /api/bench-resources
     */
    @PostMapping
    public ResponseEntity<BenchResourceDTO> createResource(
            @Valid @RequestBody BenchResourceDTO resourceDTO,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to create resource");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Validate required fields
            if (resourceDTO.getRole() == null || resourceDTO.getRole().trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
            if (resourceDTO.getStack() == null || resourceDTO.getStack().trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
            if (resourceDTO.getExperience() == null || resourceDTO.getExperience().trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
            if (resourceDTO.getAvailability() == null || resourceDTO.getAvailability().trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }

            BenchResourceDTO createdResource = benchResourceService.createResource(resourceDTO, userId);
            logger.info("Created bench resource {} by user {}", createdResource.getId(), userId);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdResource);
        } catch (Exception e) {
            logger.error("Error creating bench resource", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Update an existing bench resource
     * PUT /api/bench-resources/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<BenchResourceDTO> updateResource(
            @PathVariable("id") Long id,
            @Valid @RequestBody BenchResourceDTO resourceDTO,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to update resource {}", id);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Check if resource exists
            BenchResourceDTO existingResource = benchResourceService.getResourceById(id);
            if (existingResource == null) {
                logger.warn("Resource {} not found", id);
                return ResponseEntity.notFound().build();
            }

            if (!existingResource.getPostedBy().equals(userId)) {
                logger.warn("User {} attempted to update resource {} owned by {}", userId, id, existingResource.getPostedBy());
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }

            resourceDTO.setId(id);
            BenchResourceDTO updatedResource = benchResourceService.updateResource(resourceDTO, userId);
            logger.info("Updated resource {} by user {}", id, userId);
            return ResponseEntity.ok(updatedResource);
        } catch (RuntimeException e) {
            logger.error("Error updating resource {}: {}", id, e.getMessage());
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        } catch (Exception e) {
            logger.error("Error updating resource {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Delete a bench resource
     * DELETE /api/bench-resources/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResource(
            @PathVariable("id") Long id,
            Authentication authentication) {
        try {
            logger.info("Delete request for resource {} by user {}", id, 
                authentication != null ? authentication.getName() : "anonymous");
            
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to delete resource {}", id);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Check if user owns this resource
            BenchResourceDTO existingResource = benchResourceService.getResourceById(id);
            if (existingResource == null) {
                logger.warn("Resource {} not found for deletion", id);
                return ResponseEntity.notFound().build();
            }

            Long resourceOwnerId = existingResource.getPostedBy();
            if (resourceOwnerId == null) {
                logger.error("Resource {} has null postedBy field", id);
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }

            if (!resourceOwnerId.equals(userId)) {
                logger.warn("User {} attempted to delete resource {} owned by user {}", userId, id, resourceOwnerId);
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }

            // Attempt to delete the resource
            try {
                benchResourceService.deleteResource(id, userId);
                logger.info("Successfully deleted resource {} by user {}", id, userId);
                return ResponseEntity.ok().build();
            } catch (RuntimeException e) {
                logger.error("RuntimeException while deleting resource {}: {}", id, e.getMessage(), e);
                String errorMsg = e.getMessage() != null ? e.getMessage().toLowerCase() : "";
                if (errorMsg.contains("not found")) {
                    return ResponseEntity.notFound().build();
                } else if (errorMsg.contains("does not own") || errorMsg.contains("own")) {
                    return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
                } else if (errorMsg.contains("constraint") || errorMsg.contains("foreign key")) {
                    logger.error("Database constraint violation when deleting resource {}: {}", id, e.getMessage());
                    return ResponseEntity.status(HttpStatus.CONFLICT).build();
                }
                // For other runtime exceptions, return 500 instead of 400
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        } catch (Exception e) {
            logger.error("Unexpected error deleting resource {}: {}", id, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Archive a bench resource
     * PUT /api/bench-resources/{id}/archive
     */
    @PutMapping("/{id}/archive")
    public ResponseEntity<BenchResourceDTO> archiveResource(
            @PathVariable("id") Long id,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to archive resource {}", id);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            BenchResourceDTO archivedResource = benchResourceService.archiveResource(id, userId);
            
            if (archivedResource == null) {
                return ResponseEntity.notFound().build();
            }
            
            logger.info("Archived resource {} by user {}", id, userId);
            return ResponseEntity.ok(archivedResource);
        } catch (RuntimeException e) {
            logger.error("Error archiving resource {}: {}", id, e.getMessage());
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        } catch (Exception e) {
            logger.error("Error archiving resource {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Unarchive a bench resource (restore to ACTIVE status)
     * PUT /api/bench-resources/{id}/unarchive
     */
    @PutMapping("/{id}/unarchive")
    public ResponseEntity<BenchResourceDTO> unarchiveResource(
            @PathVariable("id") Long id,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to unarchive resource {}", id);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            BenchResourceDTO unarchivedResource = benchResourceService.unarchiveResource(id, userId);
            logger.info("Unarchived resource {} by user {}", id, userId);
            return ResponseEntity.ok(unarchivedResource);
        } catch (RuntimeException e) {
            logger.error("Error unarchiving resource {}: {}", id, e.getMessage());
            String errorMsg = e.getMessage() != null ? e.getMessage().toLowerCase() : "";
            if (errorMsg.contains("not found")) {
                return ResponseEntity.notFound().build();
            } else if (errorMsg.contains("does not own") || errorMsg.contains("own")) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            } else if (errorMsg.contains("not archived")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        } catch (Exception e) {
            logger.error("Error unarchiving resource {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}



