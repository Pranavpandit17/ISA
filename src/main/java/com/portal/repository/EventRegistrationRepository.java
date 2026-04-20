package com.portal.repository;

import com.portal.entity.EventRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventRegistrationRepository extends JpaRepository<EventRegistration, Long> {
    List<EventRegistration> findByUserId(Long userId);
    List<EventRegistration> findByEventId(Long eventId);
    Optional<EventRegistration> findByRegistrationId(String registrationId);
    Boolean existsByEventIdAndUserId(Long eventId, Long userId);

    long countByTicketTypeId(Long ticketTypeId);
}

