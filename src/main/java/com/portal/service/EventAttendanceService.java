package com.portal.service;

import com.portal.dto.EventRegistrationDTO;
import com.portal.entity.EventRegistration;
import com.portal.repository.EventRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventAttendanceService {

    @Autowired
    private EventRegistrationRepository registrationRepository;

    public List<EventRegistrationDTO> getEventAttendees(Long eventId) {
        return registrationRepository.findByEventId(eventId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public EventRegistrationDTO markAttendance(Long registrationId) {
        EventRegistration registration = registrationRepository.findById(registrationId)
                .orElseThrow(() -> new RuntimeException("Registration not found"));

        if (registration.getCheckedIn()) {
            throw new RuntimeException("Attendee already checked in");
        }

        registration.setCheckedIn(true);
        registration.setCheckedInAt(LocalDateTime.now());
        registration.setStatus(EventRegistration.RegistrationStatus.ATTENDED);

        EventRegistration updated = registrationRepository.save(registration);
        return convertToDTO(updated);
    }

    @Transactional
    public EventRegistrationDTO markAttendanceByRegistrationId(String registrationId) {
        EventRegistration registration = registrationRepository.findByRegistrationId(registrationId)
                .orElseThrow(() -> new RuntimeException("Registration not found"));

        if (registration.getCheckedIn()) {
            throw new RuntimeException("Attendee already checked in");
        }

        registration.setCheckedIn(true);
        registration.setCheckedInAt(LocalDateTime.now());
        registration.setStatus(EventRegistration.RegistrationStatus.ATTENDED);

        EventRegistration updated = registrationRepository.save(registration);
        return convertToDTO(updated);
    }

    private EventRegistrationDTO convertToDTO(EventRegistration registration) {
        EventRegistrationDTO dto = new EventRegistrationDTO();
        dto.setId(registration.getId());
        dto.setEventId(registration.getEvent().getId());
        dto.setEventName(registration.getEvent().getName());
        dto.setUserId(registration.getUser().getId());
        dto.setUserName(registration.getUser().getName());
        dto.setUserEmail(registration.getUser().getEmail());
        dto.setTicketTypeId(registration.getTicketType().getId());
        dto.setTicketTypeName(registration.getTicketType().getName());
        dto.setQuantity(registration.getQuantity());
        dto.setTotalAmount(registration.getTotalAmount());
        dto.setStatus(registration.getStatus().name());
        dto.setRegistrationId(registration.getRegistrationId());
        dto.setPaymentStatus(registration.getPaymentStatus().name());
        dto.setCheckedIn(registration.getCheckedIn());
        dto.setCheckedInAt(registration.getCheckedInAt());
        dto.setRegisteredAt(registration.getRegisteredAt());
        return dto;
    }
}




