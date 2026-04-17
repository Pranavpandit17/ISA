package com.portal.controller;

import com.portal.dto.EventDTO;
import com.portal.dto.SpeakerDTO;
import com.portal.service.EventService;
import com.portal.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "http://localhost:4200")
public class EventController {

    @Autowired
    private EventService eventService;

    @Autowired
    private FileStorageService fileStorageService;

    @GetMapping
    public ResponseEntity<List<EventDTO>> getAllEvents() {
        return ResponseEntity.ok(eventService.getAllEvents());
    }

    @GetMapping("/published")
    public ResponseEntity<List<EventDTO>> getPublishedEvents() {
        return ResponseEntity.ok(eventService.getPublishedEvents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventDTO> getEventById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(eventService.getEventById(id));
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<EventDTO> createEvent(@RequestBody EventDTO eventDTO, Authentication authentication) {
        String email = authentication.getName(); // authentication.getName() now returns email
        return ResponseEntity.ok(eventService.createEvent(eventDTO, email));
    }

    /**
     * Create event with multipart form: part {@code event} (application/json) plus optional
     * {@code coverImage} and optional {@code speakerAvatar} files (with {@code speakerAvatarIndexes}).
     */
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<EventDTO> createEventMultipart(
            @RequestPart("event") EventDTO eventDTO,
            @RequestPart(value = "coverImage", required = false) MultipartFile coverImage,
            @RequestParam(value = "speakerAvatar", required = false) List<MultipartFile> speakerAvatars,
            @RequestParam(value = "speakerAvatarIndexes", required = false) String speakerAvatarIndexes,
            Authentication authentication) throws java.io.IOException {
        if (coverImage != null && !coverImage.isEmpty()) {
            eventDTO.setImageUrl(fileStorageService.storePublicImage(coverImage, "events"));
        }
        applySpeakerAvatarUploads(eventDTO, speakerAvatars, speakerAvatarIndexes);
        String email = authentication.getName();
        return ResponseEntity.ok(eventService.createEvent(eventDTO, email));
    }

    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<EventDTO> updateEvent(@PathVariable("id") Long id, @RequestBody EventDTO eventDTO) {
        return ResponseEntity.ok(eventService.updateEvent(id, eventDTO));
    }

    /**
     * Update scalar event fields from JSON part {@code event}; optional new {@code coverImage} replaces {@code imageUrl}.
     */
    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<EventDTO> updateEventMultipart(
            @PathVariable("id") Long id,
            @RequestPart("event") EventDTO eventDTO,
            @RequestPart(value = "coverImage", required = false) MultipartFile coverImage) throws java.io.IOException {
        if (coverImage != null && !coverImage.isEmpty()) {
            eventDTO.setImageUrl(fileStorageService.storePublicImage(coverImage, "events"));
        }
        return ResponseEntity.ok(eventService.updateEvent(id, eventDTO));
    }

    @PutMapping("/{id}/publish")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<EventDTO> publishEvent(@PathVariable("id") Long id, Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity.ok(eventService.publishEvent(id, email));
    }

    private void applySpeakerAvatarUploads(
            EventDTO eventDTO,
            List<MultipartFile> speakerAvatars,
            String speakerAvatarIndexes) throws java.io.IOException {
        if (speakerAvatars == null || speakerAvatars.isEmpty()) {
            return;
        }
        List<SpeakerDTO> speakers = eventDTO.getSpeakers();
        if (speakers == null || speakers.isEmpty()) {
            return;
        }
        if (speakerAvatarIndexes == null || speakerAvatarIndexes.isBlank()) {
            if (speakerAvatars.size() != speakers.size()) {
                throw new IllegalArgumentException(
                        "speakerAvatarIndexes is required when the number of avatar files does not match speakers");
            }
            for (int i = 0; i < speakerAvatars.size(); i++) {
                MultipartFile f = speakerAvatars.get(i);
                if (f != null && !f.isEmpty()) {
                    speakers.get(i).setAvatarUrl(fileStorageService.storePublicImage(f, "speakers"));
                }
            }
            return;
        }
        String[] parts = speakerAvatarIndexes.split(",");
        if (parts.length != speakerAvatars.size()) {
            throw new IllegalArgumentException("speakerAvatarIndexes must list one index per uploaded speaker avatar file");
        }
        for (int i = 0; i < speakerAvatars.size(); i++) {
            int idx = Integer.parseInt(parts[i].trim());
            if (idx < 0 || idx >= speakers.size()) {
                throw new IllegalArgumentException("Invalid speaker index: " + idx);
            }
            MultipartFile f = speakerAvatars.get(i);
            if (f != null && !f.isEmpty()) {
                speakers.get(idx).setAvatarUrl(fileStorageService.storePublicImage(f, "speakers"));
            }
        }
    }
}

