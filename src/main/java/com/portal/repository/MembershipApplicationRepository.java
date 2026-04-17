package com.portal.repository;

import com.portal.entity.MembershipApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MembershipApplicationRepository extends JpaRepository<MembershipApplication, Long> {
    List<MembershipApplication> findByStatus(MembershipApplication.ApplicationStatus status);
    List<MembershipApplication> findByMembershipType(MembershipApplication.MembershipType type);
    List<MembershipApplication> findAllByEmailIgnoreCase(String email);
}

