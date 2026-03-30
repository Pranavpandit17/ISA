package com.portal.repository;

import com.portal.entity.BenchResource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BenchResourceRepository extends JpaRepository<BenchResource, Long> {
    
    /**
     * Find all resources posted by a specific user
     */
    @Query("SELECT r FROM BenchResource r WHERE r.postedBy.id = :userId")
    List<BenchResource> findByPostedById(@Param("userId") Long userId);
    
    /**
     * Find all active resources
     */
    List<BenchResource> findByStatus(BenchResource.ResourceStatus status);
    
    /**
     * Find active resources excluding expired ones
     */
    @Query("SELECT r FROM BenchResource r WHERE r.status = :status AND (r.expiryDate IS NULL OR r.expiryDate >= CURRENT_DATE)")
    List<BenchResource> findActiveResources(@Param("status") BenchResource.ResourceStatus status);
}



