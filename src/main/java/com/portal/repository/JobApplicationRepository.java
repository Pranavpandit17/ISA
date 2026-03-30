package com.portal.repository;

import com.portal.entity.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    List<JobApplication> findByPostingId(Long postingId);
    List<JobApplication> findByApplicantId(Long applicantId);
    Optional<JobApplication> findByPostingIdAndApplicantId(Long postingId, Long applicantId);
}

