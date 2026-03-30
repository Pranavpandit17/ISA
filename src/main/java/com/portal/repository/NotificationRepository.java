package com.portal.repository;

import com.portal.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    @Query("SELECT n FROM Notification n WHERE n.user.id = :userId ORDER BY COALESCE(n.createdAt, n.id) DESC")
    List<Notification> findByUserIdOrderByCreatedAtDesc(@Param("userId") Long userId);
    
    @Query("SELECT n FROM Notification n WHERE n.user.id = :userId AND n.read = false ORDER BY COALESCE(n.createdAt, n.id) DESC")
    List<Notification> findByUserIdAndReadFalseOrderByCreatedAtDesc(@Param("userId") Long userId);
    
    Long countByUserIdAndReadFalse(Long userId);
    void deleteByUserId(Long userId);
}

