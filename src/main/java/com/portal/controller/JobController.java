package com.portal.controller;

import com.portal.dto.JobApplicationDTO;
import com.portal.dto.JobPostingDTO;
import com.portal.service.AuthService;
import com.portal.service.JobService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * REST Controller for Job Posting and Job Application management
 * Handles CRUD operations for jobs and applications
 */
@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private static final Logger logger = LoggerFactory.getLogger(JobController.class);

    @Autowired
    private JobService jobService;

    @Autowired
    private AuthService authService;

    /**
     * Get all job postings (for admin view)
     * GET /api/jobs
     */
    @GetMapping
    public ResponseEntity<List<JobPostingDTO>> getAllJobs() {
        try {
            List<JobPostingDTO> jobs = jobService.getAllJobs();
            logger.info("Retrieved {} jobs", jobs.size());
            return ResponseEntity.ok(jobs);
        } catch (Exception e) {
            logger.error("Error retrieving all jobs", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Get jobs posted by the current logged-in user
     * GET /api/jobs/my-jobs
     */
    @GetMapping("/my-jobs")
    public ResponseEntity<List<JobPostingDTO>> getMyJobs(Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to get my jobs");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            List<JobPostingDTO> myJobs = jobService.getJobsByPosterId(userId);
            logger.info("Retrieved {} jobs for user {}", myJobs.size(), userId);
            return ResponseEntity.ok(myJobs);
        } catch (Exception e) {
            logger.error("Error retrieving my jobs", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Get jobs posted by other users (excluding current user's jobs)
     * GET /api/jobs/other-jobs
     */
    @GetMapping("/other-jobs")
    public ResponseEntity<List<JobPostingDTO>> getOtherJobs(Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to get other jobs");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            List<JobPostingDTO> otherJobs = jobService.getJobsByOtherUsers(userId);
            logger.info("Retrieved {} other jobs for user {}", otherJobs.size(), userId);
            return ResponseEntity.ok(otherJobs);
        } catch (Exception e) {
            logger.error("Error retrieving other jobs", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Get approved jobs (for member portal)
     * GET /api/jobs/approved
     */
    @GetMapping("/approved")
    public ResponseEntity<List<JobPostingDTO>> getApprovedJobs() {
        try {
            List<JobPostingDTO> jobs = jobService.getApprovedJobs();
            logger.info("Retrieved {} approved jobs", jobs.size());
            return ResponseEntity.ok(jobs);
        } catch (Exception e) {
            logger.error("Error retrieving approved jobs", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Get rejected jobs
     * GET /api/jobs/rejected
     */
    @GetMapping("/rejected")
    public ResponseEntity<List<JobPostingDTO>> getRejectedJobs() {
        try {
            List<JobPostingDTO> jobs = jobService.getRejectedJobs();
            logger.info("Retrieved {} rejected jobs", jobs.size());
            return ResponseEntity.ok(jobs);
        } catch (Exception e) {
            logger.error("Error retrieving rejected jobs", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Get a specific job posting by ID
     * GET /api/jobs/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<JobPostingDTO> getJobById(@PathVariable("id") Long id) {
        try {
            JobPostingDTO job = jobService.getJobById(id);
            if (job == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(job);
        } catch (Exception e) {
            logger.error("Error retrieving job {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Create a new job posting
     * POST /api/jobs
     */
    @PostMapping
    public ResponseEntity<JobPostingDTO> createJob(
            @Valid @RequestBody JobPostingDTO jobDTO,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to create job");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Validate required fields
            if (jobDTO.getTitle() == null || jobDTO.getTitle().trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
            if (jobDTO.getDescription() == null || jobDTO.getDescription().trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }

            JobPostingDTO createdJob = jobService.createJob(jobDTO, userId);
            logger.info("Created job {} by user {}", createdJob.getId(), userId);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdJob);
        } catch (Exception e) {
            logger.error("Error creating job", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Update an existing job posting
     * PUT /api/jobs/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<JobPostingDTO> updateJob(
            @PathVariable("id") Long id,
            @Valid @RequestBody JobPostingDTO jobDTO,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to update job {}", id);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Check if job exists
            JobPostingDTO existingJob = jobService.getJobById(id);
            if (existingJob == null) {
                logger.warn("Job {} not found", id);
                return ResponseEntity.notFound().build();
            }

            if (!existingJob.getPostedBy().equals(userId)) {
                logger.warn("User {} attempted to update job {} owned by {}", userId, id, existingJob.getPostedBy());
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }

            jobDTO.setId(id);
            JobPostingDTO updatedJob = jobService.updateJob(jobDTO, userId);
            logger.info("Updated job {} by user {}", id, userId);
            return ResponseEntity.ok(updatedJob);
        } catch (RuntimeException e) {
            logger.error("Error updating job {}: {}", id, e.getMessage());
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        } catch (Exception e) {
            logger.error("Error updating job {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Publish a job posting (members can publish their own jobs, admins can publish any job)
     * PUT /api/jobs/{id}/publish
     */
    @PutMapping("/{id}/publish")
    @PreAuthorize("hasAnyRole('ADMIN','MEMBER')")
    public ResponseEntity<JobPostingDTO> publishJob(
            @PathVariable("id") Long id,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to publish job {}", id);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                logger.warn("User not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Check if job exists and verify ownership (unless admin)
            JobPostingDTO existingJob = jobService.getJobById(id);
            if (existingJob == null) {
                logger.warn("Job {} not found", id);
                return ResponseEntity.notFound().build();
            }

            // Check if user is admin or owns the job
            boolean isAdmin = authentication.getAuthorities().stream()
                    .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));
            
            if (!isAdmin && !existingJob.getPostedBy().equals(userId)) {
                logger.warn("User {} attempted to publish job {} owned by {}", userId, id, existingJob.getPostedBy());
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }

            JobPostingDTO updatedJob = jobService.publishJob(id, userId);
            
            if (updatedJob == null) {
                return ResponseEntity.notFound().build();
            }
            
            logger.info("Published job {} by user {}", id, userId);
            return ResponseEntity.ok(updatedJob);
        } catch (RuntimeException e) {
            logger.error("Error publishing job {}: {}", id, e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (Exception e) {
            logger.error("Error publishing job {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<JobPostingDTO> approveJob(
            @PathVariable("id") Long id,
            @RequestBody(required = false) Map<String, String> requestBody,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to approve job {}", id);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long reviewerId = authService.getUserIdByEmail(userEmail);
            
            if (reviewerId == null) {
                logger.warn("Reviewer not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String reviewNotes = requestBody != null ? requestBody.get("reviewNotes") : null;
            JobPostingDTO updatedJob = jobService.approveJob(id, reviewerId, reviewNotes);
            
            if (updatedJob == null) {
                return ResponseEntity.notFound().build();
            }
            
            logger.info("Approved job {} by reviewer {}", id, reviewerId);
            return ResponseEntity.ok(updatedJob);
        } catch (Exception e) {
            logger.error("Error approving job {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Reject a job posting
     * PUT /api/jobs/{id}/reject
     */
    @PutMapping("/{id}/reject")
    public ResponseEntity<JobPostingDTO> rejectJob(
            @PathVariable("id") Long id,
            @RequestBody(required = false) Map<String, String> requestBody,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to reject job {}", id);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long reviewerId = authService.getUserIdByEmail(userEmail);
            
            if (reviewerId == null) {
                logger.warn("Reviewer not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String reviewNotes = requestBody != null ? requestBody.get("reviewNotes") : null;
            JobPostingDTO updatedJob = jobService.rejectJob(id, reviewerId, reviewNotes);
            
            if (updatedJob == null) {
                return ResponseEntity.notFound().build();
            }
            
            logger.info("Rejected job {} by reviewer {}", id, reviewerId);
            return ResponseEntity.ok(updatedJob);
        } catch (Exception e) {
            logger.error("Error rejecting job {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Delete a job posting
     * DELETE /api/jobs/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(
            @PathVariable("id") Long id,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Check if user owns this job
            JobPostingDTO existingJob = jobService.getJobById(id);
            if (existingJob == null) {
                return ResponseEntity.notFound().build();
            }

            if (!existingJob.getPostedBy().equals(userId)) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }

            jobService.deleteJob(id);
            logger.info("Deleted job {} by user {}", id, userId);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            logger.error("Error deleting job {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Submit a job application
     * POST /api/jobs/{jobId}/applications
     */
    @PostMapping("/{jobId}/applications")
    public ResponseEntity<JobApplicationDTO> createApplication(
            @PathVariable("jobId") Long jobId,
            @Valid @RequestBody JobApplicationDTO applicationDTO,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to submit application for job {}", jobId);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long applicantId = authService.getUserIdByEmail(userEmail);
            
            if (applicantId == null) {
                logger.warn("Applicant not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Check if job exists
            JobPostingDTO job = jobService.getJobById(jobId);
            if (job == null) {
                logger.warn("Job {} not found for application submission", jobId);
                return ResponseEntity.notFound().build();
            }

            // Check if job is still open (accept both PUBLISHED and OPEN status)
            String jobStatus = job.getStatus();
            if (!"PUBLISHED".equals(jobStatus) && !"OPEN".equals(jobStatus)) {
                logger.warn("Attempted to apply to non-published/non-open job {} with status {}", jobId, jobStatus);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }

            // Check if user is trying to apply to their own job
            if (job.getPostedBy().equals(applicantId)) {
                logger.warn("User {} attempted to apply to their own job {}", applicantId, jobId);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }

            // Check if already applied
            if (jobService.hasUserApplied(jobId, applicantId)) {
                logger.warn("User {} already applied to job {}", applicantId, jobId);
                return ResponseEntity.status(HttpStatus.CONFLICT).build();
            }

            // Validate required fields
            if (applicationDTO.getCoverMessage() == null || applicationDTO.getCoverMessage().trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }

            JobApplicationDTO createdApplication = jobService.createApplication(applicationDTO, jobId, applicantId);
            logger.info("Created application {} for job {} by user {}", createdApplication.getId(), jobId, applicantId);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdApplication);
        } catch (RuntimeException e) {
            logger.error("Error creating application: {}", e.getMessage());
            if (e.getMessage().contains("already applied")) {
                return ResponseEntity.status(HttpStatus.CONFLICT).build();
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        } catch (Exception e) {
            logger.error("Error submitting application for job {}", jobId, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Get all applications for a job posting
     * GET /api/jobs/{jobId}/applications
     */
    @GetMapping("/{jobId}/applications")
    public ResponseEntity<List<JobApplicationDTO>> getJobApplications(
            @PathVariable("jobId") Long jobId,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Check if job exists
            JobPostingDTO job = jobService.getJobById(jobId);
            if (job == null) {
                return ResponseEntity.notFound().build();
            }

            // Only job poster can see applications
            if (!job.getPostedBy().equals(userId)) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }

            List<JobApplicationDTO> applications = jobService.getJobApplications(jobId);
            return ResponseEntity.ok(applications);
        } catch (Exception e) {
            logger.error("Error retrieving applications for job {}", jobId, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Check if the current user has applied to a job
     * GET /api/jobs/{jobId}/applications/status
     */
    @GetMapping("/{jobId}/applications/status")
    public ResponseEntity<Map<String, Boolean>> checkApplicationStatus(
            @PathVariable("jobId") Long jobId,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long userId = authService.getUserIdByEmail(userEmail);
            
            if (userId == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            boolean hasApplied = jobService.hasUserApplied(jobId, userId);
            Map<String, Boolean> response = new HashMap<>();
            response.put("hasApplied", hasApplied);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("Error checking application status for job {}", jobId, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Accept a job application
     * PUT /api/jobs/applications/{applicationId}/accept
     */
    @PutMapping("/applications/{applicationId}/accept")
    public ResponseEntity<JobApplicationDTO> acceptApplication(
            @PathVariable("applicationId") Long applicationId,
            @RequestBody(required = false) Map<String, String> requestBody,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to accept application {}", applicationId);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long reviewerId = authService.getUserIdByEmail(userEmail);
            
            if (reviewerId == null) {
                logger.warn("Reviewer not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Verify the reviewer owns the job
            JobApplicationDTO application = jobService.getApplicationById(applicationId);
            
            // Check if user owns the job posting
            JobPostingDTO job = jobService.getJobById(application.getPostingId());
            if (job == null || !job.getPostedBy().equals(reviewerId)) {
                logger.warn("User {} attempted to accept application {} for job they don't own", reviewerId, applicationId);
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }

            String reviewNotes = requestBody != null ? requestBody.get("reviewNotes") : null;
            JobApplicationDTO updatedApplication = jobService.acceptApplication(applicationId, reviewerId, reviewNotes);
            
            logger.info("Accepted application {} by reviewer {}", applicationId, reviewerId);
            return ResponseEntity.ok(updatedApplication);
        } catch (Exception e) {
            logger.error("Error accepting application {}", applicationId, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    /**
     * Reject a job application
     * PUT /api/jobs/applications/{applicationId}/reject
     */
    @PutMapping("/applications/{applicationId}/reject")
    public ResponseEntity<JobApplicationDTO> rejectApplication(
            @PathVariable("applicationId") Long applicationId,
            @RequestBody(required = false) Map<String, String> requestBody,
            Authentication authentication) {
        try {
            if (authentication == null || authentication.getName() == null) {
                logger.warn("Unauthorized access attempt to reject application {}", applicationId);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            String userEmail = authentication.getName();
            Long reviewerId = authService.getUserIdByEmail(userEmail);
            
            if (reviewerId == null) {
                logger.warn("Reviewer not found for email: {}", userEmail);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }

            // Verify the reviewer owns the job
            JobApplicationDTO application = jobService.getApplicationById(applicationId);
            
            // Check if user owns the job posting
            JobPostingDTO job = jobService.getJobById(application.getPostingId());
            if (job == null || !job.getPostedBy().equals(reviewerId)) {
                logger.warn("User {} attempted to reject application {} for job they don't own", reviewerId, applicationId);
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }

            String rejectionReason = requestBody != null ? requestBody.get("rejectionReason") : null;
            if (rejectionReason == null || rejectionReason.trim().isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }

            JobApplicationDTO updatedApplication = jobService.rejectApplication(applicationId, reviewerId, rejectionReason);
            
            logger.info("Rejected application {} by reviewer {}", applicationId, reviewerId);
            return ResponseEntity.ok(updatedApplication);
        } catch (Exception e) {
            logger.error("Error rejecting application {}", applicationId, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
