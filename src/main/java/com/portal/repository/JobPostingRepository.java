package com.portal.repository;

import com.portal.entity.JobPosting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobPostingRepository extends JpaRepository<JobPosting, Long> {
    
    /**
     * Find all jobs posted by a specific user
     */
    @Query("SELECT j FROM JobPosting j WHERE j.postedBy.id = :userId")
    List<JobPosting> findByPostedById(@Param("userId") Long userId);
    
    /**
     * Find all jobs posted by users other than the specified user
     */
    @Query("SELECT j FROM JobPosting j WHERE j.postedBy.id != :userId")
    List<JobPosting> findByPostedByIdNot(@Param("userId") Long userId);
    
    /**
     * Find jobs by status
     */
    List<JobPosting> findByStatus(JobPosting.PostingStatus status);
	
    /**
     * Find jobs by type
     */
    List<JobPosting> findByType(JobPosting.PostingType type);
    
    /**
     * Find jobs by admin review status
     */
    List<JobPosting> findByAdminReviewStatus(JobPosting.AdminReviewStatus adminReviewStatus);
}

