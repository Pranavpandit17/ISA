package com.portal.repository;

import com.portal.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByStatus(Event.EventStatus status);
    List<Event> findByVisibility(Event.EventVisibility visibility);
    List<Event> findByStartDateAfter(LocalDate date);
    List<Event> findByType(Event.EventType type);
    
    @Query("SELECT e FROM Event e WHERE e.status = :status AND e.visibility = :visibility")
    List<Event> findPublishedEvents(@Param("status") Event.EventStatus status, 
                                    @Param("visibility") Event.EventVisibility visibility);
}

