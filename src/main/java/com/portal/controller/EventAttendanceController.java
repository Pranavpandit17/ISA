package com.portal.controller;

import com.portal.dto.EventRegistrationDTO;
import com.portal.service.EventAttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/event-attendance")
@CrossOrigin(origins = "http://localhost:4200")
public class EventAttendanceController {

    @Autowired
    private EventAttendanceService attendanceService;

    @GetMapping("/event/{eventId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<EventRegistrationDTO>> getEventAttendees(@PathVariable("eventId") Long eventId) {
        return ResponseEntity.ok(attendanceService.getEventAttendees(eventId));
    }

    @PostMapping("/mark/{registrationId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<EventRegistrationDTO> markAttendance(@PathVariable("registrationId") Long registrationId) {
        return ResponseEntity.ok(attendanceService.markAttendance(registrationId));
    }

    @PostMapping("/mark-by-id/{registrationId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'MEMBER')")
    public ResponseEntity<EventRegistrationDTO> markAttendanceByRegistrationId(@PathVariable String registrationId) {
        return ResponseEntity.ok(attendanceService.markAttendanceByRegistrationId(registrationId));
    }
}




