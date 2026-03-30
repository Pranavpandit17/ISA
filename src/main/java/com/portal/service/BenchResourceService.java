package com.portal.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.portal.dto.BenchResourceDTO;
import com.portal.dto.ResourceInterestDTO;
import com.portal.entity.BenchResource;
import com.portal.entity.Notification;
import com.portal.entity.ResourceInterest;
import com.portal.entity.User;
import com.portal.repository.BenchResourceRepository;
import com.portal.repository.ResourceInterestRepository;
import com.portal.repository.UserRepository;
import com.portal.service.NotificationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service layer for Bench Resource business logic
 */
@Service
@Transactional
public class BenchResourceService {

    private static final Logger logger = LoggerFactory.getLogger(BenchResourceService.class);

    @Autowired
    private BenchResourceRepository benchResourceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ResourceInterestRepository resourceInterestRepository;

    @Autowired
    private NotificationService notificationService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * Get all active bench resources
     */
    public List<BenchResourceDTO> getAllResources() {
        List<BenchResource> resources = benchResourceRepository.findActiveResources(BenchResource.ResourceStatus.ACTIVE);
        return resources.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get resources posted by a specific user
     */
    public List<BenchResourceDTO> getResourcesByUserId(Long userId) {
        List<BenchResource> resources = benchResourceRepository.findByPostedById(userId);
        return resources.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get a resource by ID
     */
    public BenchResourceDTO getResourceById(Long id) {
        Optional<BenchResource> resource = benchResourceRepository.findById(id);
        return resource.map(this::convertToDTO).orElse(null);
    }

    /**
     * Create a new bench resource
     */
    public BenchResourceDTO createResource(BenchResourceDTO resourceDTO, Long userId) {
        BenchResource resource = convertToEntity(resourceDTO);
        
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));
        resource.setPostedBy(user);
        
        // Set default values
        if (resource.getStatus() == null) {
            resource.setStatus(BenchResource.ResourceStatus.ACTIVE);
        }
        if (resource.getCurrency() == null) {
            resource.setCurrency("USD");
        }
        if (resource.getIsRemote() == null) {
            resource.setIsRemote(false);
        }
        
        BenchResource saved = benchResourceRepository.save(resource);
        logger.debug("Created bench resource with ID: {}", saved.getId());

        // Broadcast to all active members + admins, excluding the creator
        try {
            Long creatorId = saved.getPostedBy() != null ? saved.getPostedBy().getId() : null;
            String msg = "A new bench resource for role '" + saved.getRole() + "' has been posted.";

            notificationService.broadcastToActiveMembersExcludingUserId(
                    creatorId,
                    "New bench resource posted",
                    msg,
                    Notification.NotificationType.INFO,
                    Notification.NotificationCategory.RESOURCES,
                    "/dashboard?view=BENCH"
            );
            notificationService.broadcastToAdminsExcludingUserId(
                    creatorId,
                    "New bench resource posted",
                    msg,
                    Notification.NotificationType.INFO,
                    Notification.NotificationCategory.RESOURCES,
                    "/admin-dashboard"
            );
        } catch (Exception ignored) { /* ignore */ }

        return convertToDTO(saved);
    }

    /**
     * Update an existing bench resource
     */
    public BenchResourceDTO updateResource(BenchResourceDTO resourceDTO, Long userId) {
        Optional<BenchResource> existingResourceOpt = benchResourceRepository.findById(resourceDTO.getId());
        if (existingResourceOpt.isEmpty()) {
            return null;
        }
        
        BenchResource existingResource = existingResourceOpt.get();
        
        // Check ownership
        if (!existingResource.getPostedBy().getId().equals(userId)) {
            throw new RuntimeException("User does not own this resource");
        }
        
        // Update fields
        BenchResource resource = convertToEntity(resourceDTO);
        resource.setId(existingResource.getId());
        resource.setPostedBy(existingResource.getPostedBy());
        resource.setCreatedAt(existingResource.getCreatedAt());
        
        BenchResource updated = benchResourceRepository.save(resource);
        return convertToDTO(updated);
    }

    /**
     * Delete a bench resource
     */
    @Transactional
    public void deleteResource(Long id, Long userId) {
        logger.info("Attempting to delete resource {} by user {}", id, userId);
        
        Optional<BenchResource> resourceOpt = benchResourceRepository.findById(id);
        if (resourceOpt.isEmpty()) {
            logger.warn("Resource {} not found for deletion", id);
            throw new RuntimeException("Resource not found");
        }
        
        BenchResource resource = resourceOpt.get();
        
        // Check if postedBy is null
        if (resource.getPostedBy() == null) {
            logger.error("Resource {} has null postedBy field", id);
            throw new RuntimeException("Resource has invalid ownership data");
        }
        
        // Check ownership
        Long resourceOwnerId = resource.getPostedBy().getId();
        if (resourceOwnerId == null || !resourceOwnerId.equals(userId)) {
            logger.warn("User {} does not own resource {} (owner: {})", userId, id, resourceOwnerId);
            throw new RuntimeException("User does not own this resource");
        }
        
        try {
            // Delete all related interests first using native query to avoid foreign key constraint violations
            // This ensures the deletion happens at the database level immediately
            logger.info("Deleting interests for resource {}", id);
            resourceInterestRepository.deleteByResourceId(id);
            // Force flush to ensure interests are deleted from database before resource deletion
            resourceInterestRepository.flush();
            logger.info("Successfully deleted interests for resource {}", id);
            
            // Now delete the resource - this should work now that interests are deleted
            benchResourceRepository.deleteById(id);
            // Force flush to ensure resource deletion is committed
            benchResourceRepository.flush();
            logger.info("Successfully deleted resource {}", id);
        } catch (org.springframework.dao.DataIntegrityViolationException e) {
            logger.error("Data integrity violation when deleting resource {}: {}", id, e.getMessage(), e);
            throw new RuntimeException("Cannot delete resource due to database constraints: " + e.getMessage(), e);
        } catch (Exception e) {
            logger.error("Error during deletion of resource {}: {}", id, e.getMessage(), e);
            throw new RuntimeException("Failed to delete resource: " + e.getMessage(), e);
        }
    }

    /**
     * Archive a bench resource
     */
    public BenchResourceDTO archiveResource(Long id, Long userId) {
        Optional<BenchResource> resourceOpt = benchResourceRepository.findById(id);
        if (resourceOpt.isEmpty()) {
            return null;
        }
        
        BenchResource resource = resourceOpt.get();
        
        // Check ownership
        if (!resource.getPostedBy().getId().equals(userId)) {
            throw new RuntimeException("User does not own this resource");
        }
        
        resource.setStatus(BenchResource.ResourceStatus.ARCHIVED);
        BenchResource updated = benchResourceRepository.save(resource);
        return convertToDTO(updated);
    }

    /**
     * Unarchive a bench resource (restore to ACTIVE status)
     */
    @Transactional
    public BenchResourceDTO unarchiveResource(Long id, Long userId) {
        Optional<BenchResource> resourceOpt = benchResourceRepository.findById(id);
        if (resourceOpt.isEmpty()) {
            throw new RuntimeException("Resource not found");
        }
        
        BenchResource resource = resourceOpt.get();
        
        // Check ownership
        if (!resource.getPostedBy().getId().equals(userId)) {
            throw new RuntimeException("User does not own this resource");
        }
        
        // Check if resource is actually archived
        if (resource.getStatus() != BenchResource.ResourceStatus.ARCHIVED) {
            throw new RuntimeException("Resource is not archived");
        }
        
        resource.setStatus(BenchResource.ResourceStatus.ACTIVE);
        BenchResource updated = benchResourceRepository.save(resource);
        logger.info("Unarchived resource {} by user {}", id, userId);
        return convertToDTO(updated);
    }

    /**
     * Convert BenchResource entity to DTO
     */
    private BenchResourceDTO convertToDTO(BenchResource resource) {
        BenchResourceDTO dto = new BenchResourceDTO();
        dto.setId(resource.getId());
        dto.setRole(resource.getRole());
        dto.setStack(resource.getStack());
        dto.setExperience(resource.getExperience());
        dto.setAvailability(resource.getAvailability());
        dto.setDescription(resource.getDescription());
        dto.setHourlyRate(resource.getHourlyRate());
        dto.setCurrency(resource.getCurrency());
        dto.setExpiryDate(resource.getExpiryDate());
        dto.setStatus(resource.getStatus() != null ? resource.getStatus().name() : null);
        
        if (resource.getPostedBy() != null) {
            dto.setPostedBy(resource.getPostedBy().getId());
            dto.setPostedByName(resource.getPostedBy().getName());
            dto.setPostedByEmail(resource.getPostedBy().getEmail());
        }
        
        dto.setContactEmail(resource.getContactEmail());
        dto.setContactPhone(resource.getContactPhone());
        dto.setLocation(resource.getLocation());
        dto.setIsRemote(resource.getIsRemote());
        
        // Parse skills from JSON string to List<String>
        if (resource.getSkills() != null && !resource.getSkills().isEmpty()) {
            try {
                dto.setSkills(objectMapper.readValue(resource.getSkills(), new TypeReference<List<String>>() {}));
            } catch (Exception e) {
                logger.warn("Error parsing skills JSON for resource {}: {}", resource.getId(), e.getMessage());
                dto.setSkills(Collections.emptyList());
            }
        } else {
            dto.setSkills(Collections.emptyList());
        }
        
        dto.setCertifications(resource.getCertifications());
        dto.setPreviousProjects(resource.getPreviousProjects());
        dto.setCreatedAt(resource.getCreatedAt());
        dto.setUpdatedAt(resource.getUpdatedAt());
        
        return dto;
    }

    /**
     * Convert BenchResourceDTO to entity
     */
    private BenchResource convertToEntity(BenchResourceDTO dto) {
        BenchResource resource = new BenchResource();
        
        if (dto.getId() != null) {
            resource.setId(dto.getId());
        }
        
        resource.setRole(dto.getRole());
        resource.setStack(dto.getStack());
        resource.setExperience(dto.getExperience());
        resource.setAvailability(dto.getAvailability());
        resource.setDescription(dto.getDescription());
        resource.setHourlyRate(dto.getHourlyRate());
        resource.setCurrency(dto.getCurrency() != null ? dto.getCurrency() : "USD");
        resource.setExpiryDate(dto.getExpiryDate());
        
        if (dto.getStatus() != null) {
            resource.setStatus(BenchResource.ResourceStatus.valueOf(dto.getStatus()));
        }
        
        resource.setContactEmail(dto.getContactEmail());
        resource.setContactPhone(dto.getContactPhone());
        resource.setLocation(dto.getLocation());
        resource.setIsRemote(dto.getIsRemote() != null ? dto.getIsRemote() : false);
        
        // Convert skills List<String> to JSON string
        if (dto.getSkills() != null && !dto.getSkills().isEmpty()) {
            try {
                resource.setSkills(objectMapper.writeValueAsString(dto.getSkills()));
            } catch (Exception e) {
                logger.warn("Error serializing skills to JSON: {}", e.getMessage());
                resource.setSkills("[]");
            }
        } else {
            resource.setSkills("[]");
        }
        
        resource.setCertifications(dto.getCertifications());
        resource.setPreviousProjects(dto.getPreviousProjects());
        
        return resource;
    }

    /**
     * Submit interest in a bench resource
     */
    public ResourceInterestDTO submitInterest(Long resourceId, Long userId, String message, String contactEmail, String contactPhone) {
        Optional<BenchResource> resourceOpt = benchResourceRepository.findById(resourceId);
        if (resourceOpt.isEmpty()) {
            throw new RuntimeException("Resource not found: " + resourceId);
        }

        BenchResource resource = resourceOpt.get();

        // Check if user already showed interest
        Optional<ResourceInterest> existingInterest = resourceInterestRepository.findByResourceIdAndInterestedUserId(resourceId, userId);
        if (existingInterest.isPresent()) {
            throw new RuntimeException("User has already shown interest in this resource");
        }

        // Check if user is trying to show interest in their own resource
        if (resource.getPostedBy().getId().equals(userId)) {
            throw new RuntimeException("Cannot show interest in your own resource");
        }

        User interestedUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));

        ResourceInterest interest = new ResourceInterest();
        interest.setResource(resource);
        interest.setInterestedUser(interestedUser);
        interest.setMessage(message);
        interest.setContactEmail(contactEmail);
        interest.setContactPhone(contactPhone);

        ResourceInterest saved = resourceInterestRepository.save(interest);
        logger.info("Created interest {} for resource {} by user {}", saved.getId(), resourceId, userId);

        // Notify resource owner
        try {
            String ownerEmail = resource.getPostedBy() != null ? resource.getPostedBy().getEmail() : null;
            if (ownerEmail != null && !ownerEmail.isBlank()) {
                String interestedName = interestedUser.getName() != null ? interestedUser.getName() : interestedUser.getEmail();
                String role = resource.getRole() != null ? resource.getRole() : "Bench Resource";
                String stack = resource.getStack() != null ? resource.getStack() : "";
                String msg = interestedName + " (" + interestedUser.getEmail() + ") is interested in your bench resource: " +
                        role + (stack.isBlank() ? "" : (" • " + stack));
                notificationService.createNotificationForEmail(
                        ownerEmail,
                        "New interest on your bench resource",
                        msg,
                        Notification.NotificationType.INFO,
                        Notification.NotificationCategory.RESOURCES,
                        "/dashboard?view=BENCH"
                );
            }
        } catch (Exception ignored) { /* ignore */ }

        return convertInterestToDTO(saved);
    }

    /**
     * Get all interests for a specific resource
     */
    public List<ResourceInterestDTO> getResourceInterests(Long resourceId) {
        List<ResourceInterest> interests = resourceInterestRepository.findByResourceId(resourceId);
        return interests.stream()
                .map(this::convertInterestToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Convert ResourceInterest entity to DTO
     */
    private ResourceInterestDTO convertInterestToDTO(ResourceInterest interest) {
        ResourceInterestDTO dto = new ResourceInterestDTO();
        dto.setId(interest.getId());
        
        if (interest.getResource() != null) {
            dto.setResourceId(interest.getResource().getId());
            dto.setResourceRole(interest.getResource().getRole());
        }
        
        if (interest.getInterestedUser() != null) {
            dto.setInterestedUserId(interest.getInterestedUser().getId());
            dto.setInterestedUserName(interest.getInterestedUser().getName());
            dto.setInterestedUserEmail(interest.getInterestedUser().getEmail());
        }
        
        dto.setMessage(interest.getMessage());
        dto.setContactEmail(interest.getContactEmail());
        dto.setContactPhone(interest.getContactPhone());
        dto.setCreatedAt(interest.getCreatedAt());
        dto.setUpdatedAt(interest.getUpdatedAt());
        
        return dto;
    }
}



