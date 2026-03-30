package com.portal.repository;

import com.portal.entity.ResourceInterest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ResourceInterestRepository extends JpaRepository<ResourceInterest, Long> {
    
    /**
     * Find all interests for a specific resource
     */
    @Query("SELECT ri FROM ResourceInterest ri WHERE ri.resource.id = :resourceId ORDER BY ri.createdAt DESC")
    List<ResourceInterest> findByResourceId(@Param("resourceId") Long resourceId);
    
    /**
     * Find all interests by a specific user
     */
    @Query("SELECT ri FROM ResourceInterest ri WHERE ri.interestedUser.id = :userId ORDER BY ri.createdAt DESC")
    List<ResourceInterest> findByInterestedUserId(@Param("userId") Long userId);
    
    /**
     * Check if a user has already shown interest in a resource
     */
    @Query("SELECT ri FROM ResourceInterest ri WHERE ri.resource.id = :resourceId AND ri.interestedUser.id = :userId")
    Optional<ResourceInterest> findByResourceIdAndInterestedUserId(@Param("resourceId") Long resourceId, @Param("userId") Long userId);
    
    /**
     * Delete all interests for a specific resource using native query
     */
    @org.springframework.data.jpa.repository.Modifying
    @org.springframework.data.jpa.repository.Query("DELETE FROM ResourceInterest ri WHERE ri.resource.id = :resourceId")
    void deleteByResourceId(@Param("resourceId") Long resourceId);
}
