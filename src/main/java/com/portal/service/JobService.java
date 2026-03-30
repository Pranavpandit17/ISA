package com.portal.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.portal.dto.JobApplicationDTO;
import com.portal.dto.JobPostingDTO;
import com.portal.entity.JobApplication;
import com.portal.entity.JobPosting;
import com.portal.entity.Notification;
import com.portal.entity.User;
import com.portal.repository.JobApplicationRepository;
import com.portal.repository.JobPostingRepository;
import com.portal.repository.UserRepository;
import com.portal.service.NotificationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service layer for Job Posting and Job Application business logic
 */
@Service
@Transactional
public class JobService {

    private static final Logger logger = LoggerFactory.getLogger(JobService.class);

    @Autowired
    private JobPostingRepository jobPostingRepository;

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private NotificationService notificationService;

    @Autowired(required = false)
    private EmailService emailService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * Get all job postings
     */
    public List<JobPostingDTO> getAllJobs() {
        List<JobPosting> jobs = jobPostingRepository.findAll();
        return jobs.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get jobs posted by a specific user
     */
    public List<JobPostingDTO> getJobsByPosterId(Long userId) {
        List<JobPosting> jobs = jobPostingRepository.findByPostedById(userId);
        return jobs.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get jobs posted by other users (excluding the specified user)
     */
    public List<JobPostingDTO> getJobsByOtherUsers(Long userId) {
        List<JobPosting> jobs = jobPostingRepository.findByPostedByIdNot(userId);
        return jobs.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get approved jobs (for member portal)
     */
    public List<JobPostingDTO> getApprovedJobs() {
        List<JobPosting> jobs = jobPostingRepository.findByAdminReviewStatus(JobPosting.AdminReviewStatus.APPROVED);
        return jobs.stream()
                .filter(job -> job.getStatus() == JobPosting.PostingStatus.PUBLISHED)
                .filter(job -> job.getVisibility() == JobPosting.PostingVisibility.VISIBLE)
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get rejected jobs
     */
    public List<JobPostingDTO> getRejectedJobs() {
        List<JobPosting> jobs = jobPostingRepository.findByAdminReviewStatus(JobPosting.AdminReviewStatus.REJECTED);
        return jobs.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get a job posting by ID
     */
    public JobPostingDTO getJobById(Long id) {
        Optional<JobPosting> job = jobPostingRepository.findById(id);
        return job.map(this::convertToDTO).orElse(null);
    }

    /**
     * Create a new job posting
     */
    public JobPostingDTO createJob(JobPostingDTO jobDTO, Long userId) {
        JobPosting job = convertToEntity(jobDTO);
        
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));
        job.setPostedBy(user);
        
        // Set default values if not provided
        if (job.getStatus() == null) {
            job.setStatus(JobPosting.PostingStatus.DRAFT);
        }
        if (job.getVisibility() == null) {
            job.setVisibility(JobPosting.PostingVisibility.HIDDEN);
        }
        if (job.getAdminReviewStatus() == null) {
            job.setAdminReviewStatus(JobPosting.AdminReviewStatus.PENDING);
        }
        if (job.getApplicationCount() == null) {
            job.setApplicationCount(0);
        }
        
        JobPosting saved = jobPostingRepository.save(job);
        logger.debug("Created job posting with ID: {}", saved.getId());

        // Notify admins when a job is created (exclude creator)
        try {
            notificationService.broadcastToAdminsExcludingUserId(
                    userId,
                    "New job created",
                    "A new job '" + (saved.getTitle() != null ? saved.getTitle() : "Job") + "' was created by " +
                            (user.getName() != null ? user.getName() : user.getEmail()) +
                            " (" + user.getEmail() + ").",
                    Notification.NotificationType.INFO,
                    Notification.NotificationCategory.JOB,
                    "/admin-dashboard?view=POST_MANAGEMENT"
            );
        } catch (Exception ignored) { /* ignore */ }

        return convertToDTO(saved);
    }

    /**
     * Update an existing job posting
     */
    public JobPostingDTO updateJob(JobPostingDTO jobDTO, Long userId) {
        Optional<JobPosting> existingJobOpt = jobPostingRepository.findById(jobDTO.getId());
        if (existingJobOpt.isEmpty()) {
            return null;
        }
        
        JobPosting existingJob = existingJobOpt.get();
        
        // Check ownership
        if (!existingJob.getPostedBy().getId().equals(userId)) {
            throw new RuntimeException("User does not own this job posting");
        }
        
        // Update fields
        JobPosting job = convertToEntity(jobDTO);
        job.setId(existingJob.getId());
        job.setPostedBy(existingJob.getPostedBy());
        job.setCreatedAt(existingJob.getCreatedAt());
        job.setApplicationCount(existingJob.getApplicationCount());
        
        JobPosting updated = jobPostingRepository.save(job);
        return convertToDTO(updated);
    }

    /**
     * Approve a job posting
     */
    public JobPostingDTO approveJob(Long jobId, Long reviewerId, String reviewNotes) {
        Optional<JobPosting> jobOpt = jobPostingRepository.findById(jobId);
        if (jobOpt.isEmpty()) {
            return null;
        }
        
        JobPosting job = jobOpt.get();
        job.setAdminReviewStatus(JobPosting.AdminReviewStatus.APPROVED);
        job.setReviewedAt(LocalDateTime.now());
        job.setAdminReviewNotes(reviewNotes);
        
        User reviewer = userRepository.findById(reviewerId)
                .orElseThrow(() -> new RuntimeException("Reviewer not found: " + reviewerId));
        job.setReviewedBy(reviewer);
        
        // Auto-publish if approved
        if (job.getStatus() == JobPosting.PostingStatus.DRAFT) {
            job.setStatus(JobPosting.PostingStatus.PUBLISHED);
            job.setPublishedAt(LocalDateTime.now());
        }
        
        JobPosting updated = jobPostingRepository.save(job);

        // If it is published, notify all active members
        try {
            if (updated.getStatus() == JobPosting.PostingStatus.PUBLISHED) {
                notificationService.broadcastToActiveMembers(
                        "New job posted",
                        "A new job '" + (updated.getTitle() != null ? updated.getTitle() : "Job") + "' is now available.",
                        Notification.NotificationType.INFO,
                        Notification.NotificationCategory.JOB,
                        "/dashboard?view=JOBS_PROJECTS"
                );
            }
        } catch (Exception ignored) { /* ignore */ }

        return convertToDTO(updated);
    }

    /**
     * Publish a job posting
     */
    public JobPostingDTO publishJob(Long jobId, Long userId) {
        Optional<JobPosting> jobOpt = jobPostingRepository.findById(jobId);
        if (jobOpt.isEmpty()) {
            return null;
        }
        
        JobPosting job = jobOpt.get();
        
        // Check if already published
        if (job.getStatus() == JobPosting.PostingStatus.PUBLISHED) {
            throw new RuntimeException("Job is already published");
        }
        
        // Set status to published
        job.setStatus(JobPosting.PostingStatus.PUBLISHED);
        job.setPublishedAt(LocalDateTime.now());
        
        // If not yet approved, auto-approve when publishing
        if (job.getAdminReviewStatus() == JobPosting.AdminReviewStatus.PENDING) {
            job.setAdminReviewStatus(JobPosting.AdminReviewStatus.APPROVED);
            job.setReviewedAt(LocalDateTime.now());
            
            User reviewer = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found: " + userId));
            job.setReviewedBy(reviewer);
        }
        
        JobPosting updated = jobPostingRepository.save(job);

        // Notify all active members
        try {
            notificationService.broadcastToActiveMembers(
                    "New job posted",
                    "A new job '" + (updated.getTitle() != null ? updated.getTitle() : "Job") + "' is now available.",
                    Notification.NotificationType.INFO,
                    Notification.NotificationCategory.JOB,
                    "/dashboard?view=JOBS_PROJECTS"
            );
        } catch (Exception ignored) { /* ignore */ }

        return convertToDTO(updated);
    }

    /**
     * Reject a job posting
     */
    public JobPostingDTO rejectJob(Long jobId, Long reviewerId, String reviewNotes) {
        Optional<JobPosting> jobOpt = jobPostingRepository.findById(jobId);
        if (jobOpt.isEmpty()) {
            return null;
        }
        
        JobPosting job = jobOpt.get();
        job.setAdminReviewStatus(JobPosting.AdminReviewStatus.REJECTED);
        job.setReviewedAt(LocalDateTime.now());
        job.setAdminReviewNotes(reviewNotes);
        
        User reviewer = userRepository.findById(reviewerId)
                .orElseThrow(() -> new RuntimeException("Reviewer not found: " + reviewerId));
        job.setReviewedBy(reviewer);
        
        JobPosting updated = jobPostingRepository.save(job);
        return convertToDTO(updated);
    }

    /**
     * Delete a job posting
     */
    public void deleteJob(Long id) {
        // Also delete associated applications
        List<JobApplication> applications = jobApplicationRepository.findByPostingId(id);
        jobApplicationRepository.deleteAll(applications);
        jobPostingRepository.deleteById(id);
    }

    /**
     * Create a job application
     */
    public JobApplicationDTO createApplication(JobApplicationDTO applicationDTO, Long jobId, Long applicantId) {
        Optional<JobPosting> jobOpt = jobPostingRepository.findById(jobId);
        if (jobOpt.isEmpty()) {
            throw new RuntimeException("Job posting not found: " + jobId);
        }
        
        JobPosting job = jobOpt.get();
        
        // Check if already applied
        Optional<JobApplication> existingApp = jobApplicationRepository.findByPostingIdAndApplicantId(jobId, applicantId);
        if (existingApp.isPresent()) {
            throw new RuntimeException("User has already applied to this job");
        }
        
        User applicant = userRepository.findById(applicantId)
                .orElseThrow(() -> new RuntimeException("Applicant not found: " + applicantId));
        
        JobApplication application = new JobApplication();
        application.setPosting(job);
        application.setApplicant(applicant);
        application.setCoverMessage(applicationDTO.getCoverMessage());
        application.setResumeUrl(applicationDTO.getResumeUrl());
        application.setResumeFileName(applicationDTO.getResumeFileName());
        application.setStatus(JobApplication.ApplicationStatus.PENDING);
        
        JobApplication saved = jobApplicationRepository.save(application);
        
        // Update application count
        job.setApplicationCount(job.getApplicationCount() + 1);
        jobPostingRepository.save(job);
        
        // Send notification to job owner
        try {
            User jobOwner = job.getPostedBy();
            if (jobOwner != null && jobOwner.getEmail() != null) {
                String applicantName = applicant.getName() != null ? applicant.getName() : applicant.getEmail();
                String jobTitle = job.getTitle() != null ? job.getTitle() : "Job";
                String message = String.format("Member %s (%s) has applied for your job posting '%s'.", 
                        applicantName, applicant.getEmail(), jobTitle);
                
                notificationService.createNotificationForEmail(
                        jobOwner.getEmail(),
                        "New job application received",
                        message,
                        Notification.NotificationType.INFO,
                        Notification.NotificationCategory.JOB,
                        "/dashboard?view=JOBS_PROJECTS" // Link to member's jobs section
                );
                
                // Send email notification to job owner
                if (emailService != null) {
                    String ownerName = jobOwner.getName() != null ? jobOwner.getName() : jobOwner.getEmail();
                    emailService.sendJobApplicationNotification(
                        jobOwner.getEmail(),
                        ownerName,
                        jobTitle,
                        applicantName,
                        applicant.getEmail()
                    );
                }
            }
        } catch (Exception e) {
            // Log but don't fail the application creation
            logger.warn("Failed to send notification to job owner for application {}: {}", saved.getId(), e.getMessage());
        }
        
        logger.debug("Created job application with ID: {} for job {}", saved.getId(), jobId);
        return convertApplicationToDTO(saved);
    }

    /**
     * Get all applications for a specific job
     */
    public List<JobApplicationDTO> getJobApplications(Long jobId) {
        List<JobApplication> applications = jobApplicationRepository.findByPostingId(jobId);
        return applications.stream()
                .map(this::convertApplicationToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get a job application by ID
     */
    public JobApplicationDTO getApplicationById(Long applicationId) {
        Optional<JobApplication> applicationOpt = jobApplicationRepository.findById(applicationId);
        if (applicationOpt.isEmpty()) {
            throw new RuntimeException("Job application not found: " + applicationId);
        }
        return convertApplicationToDTO(applicationOpt.get());
    }

    /**
     * Check if a user has already applied to a job
     */
    public boolean hasUserApplied(Long jobId, Long userId) {
        return jobApplicationRepository.findByPostingIdAndApplicantId(jobId, userId).isPresent();
    }

    /**
     * Accept a job application
     */
    public JobApplicationDTO acceptApplication(Long applicationId, Long reviewerId, String reviewNotes) {
        Optional<JobApplication> applicationOpt = jobApplicationRepository.findById(applicationId);
        if (applicationOpt.isEmpty()) {
            throw new RuntimeException("Job application not found: " + applicationId);
        }
        
        JobApplication application = applicationOpt.get();
        application.setStatus(JobApplication.ApplicationStatus.ACCEPTED);
        application.setReviewedAt(LocalDateTime.now());
        application.setReviewNotes(reviewNotes);
        
        User reviewer = userRepository.findById(reviewerId)
                .orElseThrow(() -> new RuntimeException("Reviewer not found: " + reviewerId));
        application.setReviewedBy(reviewer);
        
        JobApplication saved = jobApplicationRepository.save(application);
        
        // Send notification to applicant
        try {
            User applicant = saved.getApplicant();
            JobPosting job = saved.getPosting();
            if (applicant != null && applicant.getEmail() != null && job != null) {
                String jobTitle = job.getTitle() != null ? job.getTitle() : "Job";
                String message = String.format("Your application for '%s' has been accepted!", jobTitle);
                if (reviewNotes != null && !reviewNotes.trim().isEmpty()) {
                    message += " Notes: " + reviewNotes;
                }
                
                notificationService.createNotificationForEmail(
                        applicant.getEmail(),
                        "Job application accepted",
                        message,
                        Notification.NotificationType.SUCCESS,
                        Notification.NotificationCategory.JOB,
                        "/dashboard?view=JOBS_PROJECTS" // Link to member's jobs section
                );
                
                // Send email notification to applicant
                if (emailService != null) {
                    String applicantName = applicant.getName() != null ? applicant.getName() : applicant.getEmail();
                    emailService.sendJobApplicationStatus(
                        applicant.getEmail(),
                        applicantName,
                        jobTitle,
                        "accepted",
                        reviewNotes
                    );
                }
            }
        } catch (Exception e) {
            // Log but don't fail the acceptance
            logger.warn("Failed to send notification to applicant for accepted application {}: {}", applicationId, e.getMessage());
        }
        
        logger.info("Accepted job application {} by reviewer {}", applicationId, reviewerId);
        return convertApplicationToDTO(saved);
    }

    /**
     * Reject a job application
     */
    public JobApplicationDTO rejectApplication(Long applicationId, Long reviewerId, String rejectionReason) {
        Optional<JobApplication> applicationOpt = jobApplicationRepository.findById(applicationId);
        if (applicationOpt.isEmpty()) {
            throw new RuntimeException("Job application not found: " + applicationId);
        }
        
        JobApplication application = applicationOpt.get();
        application.setStatus(JobApplication.ApplicationStatus.REJECTED);
        application.setReviewedAt(LocalDateTime.now());
        application.setRejectionReason(rejectionReason);
        
        User reviewer = userRepository.findById(reviewerId)
                .orElseThrow(() -> new RuntimeException("Reviewer not found: " + reviewerId));
        application.setReviewedBy(reviewer);
        
        JobApplication saved = jobApplicationRepository.save(application);
        
        // Send notification to applicant
        try {
            User applicant = saved.getApplicant();
            JobPosting job = saved.getPosting();
            if (applicant != null && applicant.getEmail() != null && job != null) {
                String jobTitle = job.getTitle() != null ? job.getTitle() : "Job";
                String message = String.format("Your application for '%s' has been rejected.", jobTitle);
                if (rejectionReason != null && !rejectionReason.trim().isEmpty()) {
                    message += " Reason: " + rejectionReason;
                }
                
                notificationService.createNotificationForEmail(
                        applicant.getEmail(),
                        "Job application rejected",
                        message,
                        Notification.NotificationType.WARNING,
                        Notification.NotificationCategory.JOB,
                        "/dashboard?view=JOBS_PROJECTS" // Link to member's jobs section
                );
                
                // Send email notification to applicant
                if (emailService != null) {
                    String applicantName = applicant.getName() != null ? applicant.getName() : applicant.getEmail();
                    emailService.sendJobApplicationStatus(
                        applicant.getEmail(),
                        applicantName,
                        jobTitle,
                        "rejected",
                        rejectionReason
                    );
                }
            }
        } catch (Exception e) {
            // Log but don't fail the rejection
            logger.warn("Failed to send notification to applicant for rejected application {}: {}", applicationId, e.getMessage());
        }
        
        logger.info("Rejected job application {} by reviewer {}", applicationId, reviewerId);
        return convertApplicationToDTO(saved);
    }

    /**
     * Convert JobPosting entity to DTO
     */
    private JobPostingDTO convertToDTO(JobPosting job) {
        JobPostingDTO dto = new JobPostingDTO();
        dto.setId(job.getId());
        dto.setTitle(job.getTitle());
        dto.setType(job.getType() != null ? job.getType().name() : null);
        dto.setDescription(job.getDescription());
        dto.setFullDescription(job.getFullDescription());
        dto.setCategory(job.getCategory());
        dto.setBudget(job.getBudget());
        dto.setDuration(job.getDuration());

        
        // Parse requirements from JSON string to List<String>
        if (job.getRequirements() != null && !job.getRequirements().isEmpty()) {
            try {
                dto.setRequirements(objectMapper.readValue(job.getRequirements(), new TypeReference<List<String>>() {}));
            } catch (Exception e) {
                logger.warn("Error parsing requirements JSON for job {}: {}", job.getId(), e.getMessage());
                dto.setRequirements(Collections.emptyList());
            }
        } else {
            dto.setRequirements(Collections.emptyList());
        }
        
        if (job.getTechStack() != null && !job.getTechStack().isEmpty()) {
            try {
                dto.setTechStack(objectMapper.readValue(job.getTechStack(), new TypeReference<List<String>>() {}));
            } catch (Exception e) {
                logger.warn("Error parsing techStack JSON for job {}: {}", job.getId(), e.getMessage());
                dto.setTechStack(Collections.emptyList());
            }
        } else {
            dto.setTechStack(Collections.emptyList());
        }
        
        dto.setLocation(job.getLocation());
        dto.setIsRemote(job.getIsRemote());
        dto.setEmploymentType(job.getEmploymentType() != null ? job.getEmploymentType().name() : null);
        dto.setSalaryMin(job.getSalaryMin());
        dto.setSalaryMax(job.getSalaryMax());
        dto.setSalaryCurrency(job.getSalaryCurrency());
        
        if (job.getPostedBy() != null) {
            dto.setPostedBy(job.getPostedBy().getId());
            dto.setPostedByName(job.getPostedBy().getName());
            dto.setPostedByEmail(job.getPostedBy().getEmail());
        }
        
        dto.setClosingDate(job.getClosingDate());
        dto.setStatus(job.getStatus() != null ? job.getStatus().name() : null);
        dto.setVisibility(job.getVisibility() != null ? job.getVisibility().name() : null);
        dto.setAdminReviewStatus(job.getAdminReviewStatus() != null ? job.getAdminReviewStatus().name() : null);
        dto.setAdminReviewNotes(job.getAdminReviewNotes());
        dto.setReviewedAt(job.getReviewedAt());
        
        // Parse tags from JSON string to List<String>
        if (job.getTags() != null && !job.getTags().isEmpty()) {
            try {
                dto.setTags(objectMapper.readValue(job.getTags(), new TypeReference<List<String>>() {}));
            } catch (Exception e) {
                logger.warn("Error parsing tags JSON for job {}: {}", job.getId(), e.getMessage());
                dto.setTags(Collections.emptyList());
            }
        } else {
            dto.setTags(Collections.emptyList());
        }
        
        dto.setApplicationCount(job.getApplicationCount());
        dto.setPublishedAt(job.getPublishedAt());
        dto.setCreatedAt(job.getCreatedAt());
        
        return dto;
    }

    /**
     * Convert JobPostingDTO to entity
     */
    private JobPosting convertToEntity(JobPostingDTO dto) {
        JobPosting job = new JobPosting();
        
        if (dto.getId() != null) {
            job.setId(dto.getId());
        }
        
        job.setTitle(dto.getTitle());
        job.setCategory(dto.getCategory());
        job.setBudget(dto.getBudget());
        job.setDuration(dto.getDuration());

        if (dto.getType() != null) {
            job.setType(JobPosting.PostingType.valueOf(dto.getType()));
        }
        job.setDescription(dto.getDescription());
        job.setFullDescription(dto.getFullDescription());
        
        // Convert requirements List<String> to JSON string
        if (dto.getRequirements() != null && !dto.getRequirements().isEmpty()) {
            try {
                job.setRequirements(objectMapper.writeValueAsString(dto.getRequirements()));
            } catch (Exception e) {
                logger.warn("Error serializing requirements to JSON: {}", e.getMessage());
                job.setRequirements("[]");
            }
        } else {
            job.setRequirements("[]");
        }
        
        
     // Convert techStack List<String> to JSON string
        if (dto.getTechStack() != null && !dto.getTechStack().isEmpty()) {
            try {
                job.setTechStack(objectMapper.writeValueAsString(dto.getTechStack()));
            } catch (Exception e) {
                logger.warn("Error serializing techStack to JSON: {}", e.getMessage());
                job.setTechStack("[]");
            }
        } else {
            job.setTechStack("[]");
        }

        
        job.setLocation(dto.getLocation());
        job.setIsRemote(dto.getIsRemote() != null ? dto.getIsRemote() : false);
        if (dto.getEmploymentType() != null) {
            job.setEmploymentType(JobPosting.EmploymentType.valueOf(dto.getEmploymentType()));
        }
        job.setSalaryMin(dto.getSalaryMin());
        job.setSalaryMax(dto.getSalaryMax());
        job.setSalaryCurrency(dto.getSalaryCurrency() != null ? dto.getSalaryCurrency() : "USD");
        job.setClosingDate(dto.getClosingDate());
        
        if (dto.getStatus() != null) {
            job.setStatus(JobPosting.PostingStatus.valueOf(dto.getStatus()));
        }
        if (dto.getVisibility() != null) {
            job.setVisibility(JobPosting.PostingVisibility.valueOf(dto.getVisibility()));
        }
        if (dto.getAdminReviewStatus() != null) {
            job.setAdminReviewStatus(JobPosting.AdminReviewStatus.valueOf(dto.getAdminReviewStatus()));
        }
        job.setAdminReviewNotes(dto.getAdminReviewNotes());
        
        
        
        // Convert tags List<String> to JSON string
        if (dto.getTags() != null && !dto.getTags().isEmpty()) {
            try {
                job.setTags(objectMapper.writeValueAsString(dto.getTags()));
            } catch (Exception e) {
                logger.warn("Error serializing tags to JSON: {}", e.getMessage());
                job.setTags("[]");
            }
        } else {
            job.setTags("[]");
        }
        
        return job;
    }

    /**
     * Convert JobApplication entity to DTO
     */
    private JobApplicationDTO convertApplicationToDTO(JobApplication application) {
        JobApplicationDTO dto = new JobApplicationDTO();
        dto.setId(application.getId());
        
        if (application.getPosting() != null) {
            dto.setPostingId(application.getPosting().getId());
            dto.setPostingTitle(application.getPosting().getTitle());
        }
        
        if (application.getApplicant() != null) {
            dto.setApplicantId(application.getApplicant().getId());
            dto.setApplicantName(application.getApplicant().getName());
            dto.setApplicantEmail(application.getApplicant().getEmail());
        }
        
        dto.setCoverMessage(application.getCoverMessage());
        dto.setResumeUrl(application.getResumeUrl());
        dto.setResumeFileName(application.getResumeFileName());
        dto.setStatus(application.getStatus() != null ? application.getStatus().name() : null);
        dto.setReviewedAt(application.getReviewedAt());
        
        if (application.getReviewedBy() != null) {
            dto.setReviewedById(application.getReviewedBy().getId());
            dto.setReviewedByName(application.getReviewedBy().getName());
        }
        
        dto.setReviewNotes(application.getReviewNotes());
        dto.setRejectionReason(application.getRejectionReason());
        dto.setAppliedAt(application.getAppliedAt());
        dto.setUpdatedAt(application.getUpdatedAt());
        
        return dto;
    }
}
