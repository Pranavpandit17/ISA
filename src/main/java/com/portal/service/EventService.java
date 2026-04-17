package com.portal.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.portal.dto.EventDTO;
import com.portal.dto.EventScheduleDTO;
import com.portal.dto.SpeakerDTO;
import com.portal.dto.TicketTypeDTO;
import com.portal.entity.Event;
import com.portal.entity.EventSchedule;
import com.portal.entity.Notification;
import com.portal.entity.Speaker;
import com.portal.entity.TicketType;
import com.portal.entity.User;
import com.portal.repository.EventRegistrationRepository;
import com.portal.repository.EventRepository;
import com.portal.repository.TicketTypeRepository;
import com.portal.repository.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.portal.service.NotificationService;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TicketTypeRepository ticketTypeRepository;

    @Autowired
    private EventRegistrationRepository registrationRepository;

    @Autowired
    private NotificationService notificationService;

    @PersistenceContext
    private EntityManager entityManager;

    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<EventDTO> getAllEvents() {
        return eventRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<EventDTO> getPublishedEvents() {
        return eventRepository.findPublishedEvents(
                Event.EventStatus.PUBLISHED,
                Event.EventVisibility.PUBLIC
        ).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public EventDTO getEventById(Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        return convertToDTO(event);
    }

    @Transactional
    public EventDTO createEvent(EventDTO eventDTO, String email) { // Parameter is now email, not username
        Event event = convertToEntity(eventDTO);
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        if (eventDTO.getStatus() != null && eventDTO.getStatus().equals("PUBLISHED")) {
            event.setPublishedAt(LocalDateTime.now());
            event.setPublishedBy(user);
        }
        
        // Save event first to get the ID
        Event savedEvent = eventRepository.save(event);
        
        // Create and save speakers first (so they have IDs for schedules)
        List<Speaker> speakers = new ArrayList<>();
        if (eventDTO.getSpeakers() != null && !eventDTO.getSpeakers().isEmpty()) {
            for (SpeakerDTO speakerDTO : eventDTO.getSpeakers()) {
                Speaker speaker = convertSpeakerToEntity(speakerDTO, savedEvent);
                speakers.add(speaker);
            }
            savedEvent.setSpeakers(speakers);
            // Save event with speakers to persist them and get IDs
            savedEvent = eventRepository.save(savedEvent);
            // Flush to ensure speakers get IDs assigned
            entityManager.flush();
        }
        
        // Create schedules and link to speakers by index (speakerId in DTO is the index)
        List<EventSchedule> schedules = new ArrayList<>();
        if (eventDTO.getSchedules() != null && !eventDTO.getSchedules().isEmpty()) {
            for (int i = 0; i < eventDTO.getSchedules().size(); i++) {
                EventScheduleDTO scheduleDTO = eventDTO.getSchedules().get(i);
                EventSchedule schedule = convertEventScheduleToEntity(scheduleDTO, savedEvent);
                
                // If speakerId is provided, it's the index in the speakers list
                // After flush, speakers should have IDs, but we'll use the index to find the speaker
                if (scheduleDTO.getSpeakerId() != null && speakers.size() > scheduleDTO.getSpeakerId().intValue()) {
                    Speaker speaker = speakers.get(scheduleDTO.getSpeakerId().intValue());
                    schedule.setSpeaker(speaker);
                }
                
                schedules.add(schedule);
            }
            savedEvent.setSchedules(schedules);
        }
        
        // Create ticket types based on pricing
        List<TicketType> ticketTypes = new ArrayList<>();
        if (eventDTO.getTicketTypes() != null && !eventDTO.getTicketTypes().isEmpty()) {
            // Use provided ticket types
            for (TicketTypeDTO ticketDTO : eventDTO.getTicketTypes()) {
                TicketType ticketType = convertTicketTypeToEntity(ticketDTO, savedEvent);
                ticketTypes.add(ticketType);
            }
        } else {
            // Create default ticket types based on event pricing
            if (eventDTO.getMemberPrice() != null && eventDTO.getMemberPrice().compareTo(BigDecimal.ZERO) > 0) {
                TicketType memberTicket = new TicketType();
                memberTicket.setEvent(savedEvent);
                memberTicket.setName("Member Ticket");
                memberTicket.setType(TicketType.TicketTypeEnum.MEMBER);
                memberTicket.setPrice(eventDTO.getMemberPrice());
                memberTicket.setAvailableQuantity(event.getCapacity());
                ticketTypes.add(memberTicket);
            }
            if (eventDTO.getNonMemberPrice() != null && eventDTO.getNonMemberPrice().compareTo(BigDecimal.ZERO) > 0) {
                TicketType nonMemberTicket = new TicketType();
                nonMemberTicket.setEvent(savedEvent);
                nonMemberTicket.setName("Non-Member Ticket");
                nonMemberTicket.setType(TicketType.TicketTypeEnum.NON_MEMBER);
                nonMemberTicket.setPrice(eventDTO.getNonMemberPrice());
                nonMemberTicket.setAvailableQuantity(event.getCapacity());
                ticketTypes.add(nonMemberTicket);
            }
            if (eventDTO.getPricingType() != null && eventDTO.getPricingType().equals("FREE")) {
                TicketType freeTicket = new TicketType();
                freeTicket.setEvent(savedEvent);
                freeTicket.setName("Free Ticket");
                freeTicket.setType(TicketType.TicketTypeEnum.MEMBER);
                freeTicket.setPrice(BigDecimal.ZERO);
                freeTicket.setAvailableQuantity(event.getCapacity());
                ticketTypes.add(freeTicket);
            }
        }
        
        if (!ticketTypes.isEmpty()) {
            savedEvent.setTicketTypes(ticketTypes);
        }
        
        // Save again with schedules and ticket types
        savedEvent = eventRepository.save(savedEvent);

        // Notify all members only when event is published (avoid draft spam)
        try {
            if (savedEvent.getStatus() == Event.EventStatus.PUBLISHED) {
                notificationService.broadcastToActiveMembers(
                        "New event published",
                        "A new event '" + savedEvent.getName() + "' is now available.",
                        Notification.NotificationType.INFO,
                        Notification.NotificationCategory.EVENT,
                        "/dashboard?view=EVENTS"
                );
            }
        } catch (Exception ignored) { /* ignore */ }
        
        return convertToDTO(savedEvent);
    }

    @Transactional
    public EventDTO updateEvent(Long id, EventDTO eventDTO) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        
        // Update all fields from DTO
        if (eventDTO.getName() != null) event.setName(eventDTO.getName());
        if (eventDTO.getType() != null) event.setType(Event.EventType.valueOf(eventDTO.getType()));
        if (eventDTO.getDescription() != null) event.setDescription(eventDTO.getDescription());
        if (eventDTO.getFullDescription() != null) event.setFullDescription(eventDTO.getFullDescription());
        if (eventDTO.getStartDate() != null) event.setStartDate(eventDTO.getStartDate());
        if (eventDTO.getEndDate() != null) event.setEndDate(eventDTO.getEndDate());
        if (eventDTO.getStartTime() != null) event.setStartTime(eventDTO.getStartTime());
        if (eventDTO.getEndTime() != null) event.setEndTime(eventDTO.getEndTime());
        if (eventDTO.getLocation() != null) event.setLocation(eventDTO.getLocation());
        if (eventDTO.getLocationType() != null) event.setLocationType(Event.LocationType.valueOf(eventDTO.getLocationType()));
        if (eventDTO.getOnlineLink() != null) event.setOnlineLink(eventDTO.getOnlineLink());
        if (eventDTO.getOrganizerName() != null) event.setOrganizerName(eventDTO.getOrganizerName());
        if (eventDTO.getOrganizerEmail() != null) event.setOrganizerEmail(eventDTO.getOrganizerEmail());
        if (eventDTO.getOrganizerPhone() != null) event.setOrganizerPhone(eventDTO.getOrganizerPhone());
        if (eventDTO.getFormat() != null) event.setFormat(Event.EventFormat.valueOf(eventDTO.getFormat()));
        if (eventDTO.getCapacity() != null) event.setCapacity(eventDTO.getCapacity());
        if (eventDTO.getVisibility() != null) event.setVisibility(Event.EventVisibility.valueOf(eventDTO.getVisibility()));
        if (eventDTO.getStatus() != null) event.setStatus(Event.EventStatus.valueOf(eventDTO.getStatus()));
        if (eventDTO.getPricingType() != null) event.setPricingType(Event.PricingType.valueOf(eventDTO.getPricingType()));
        if (eventDTO.getMemberPrice() != null) event.setMemberPrice(eventDTO.getMemberPrice());
        if (eventDTO.getNonMemberPrice() != null) event.setNonMemberPrice(eventDTO.getNonMemberPrice());
        if (eventDTO.getEarlyBirdPrice() != null) event.setEarlyBirdPrice(eventDTO.getEarlyBirdPrice());
        if (eventDTO.getEarlyBirdEndDate() != null) event.setEarlyBirdEndDate(eventDTO.getEarlyBirdEndDate());
        if (eventDTO.getImageUrl() != null) event.setImageUrl(eventDTO.getImageUrl());
        if (eventDTO.getTags() != null) {
            try {
                event.setTags(objectMapper.writeValueAsString(eventDTO.getTags()));
            } catch (Exception e) {
                // Handle JSON serialization error
            }
        }
        
        Event updatedEvent = eventRepository.save(event);
        return convertToDTO(updatedEvent);
    }

    @Transactional
    public EventDTO publishEvent(Long id, String email) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        
        // Check if already published
        if (event.getStatus() == Event.EventStatus.PUBLISHED) {
            throw new RuntimeException("Event is already published");
        }
        
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        // Set status to published
        event.setStatus(Event.EventStatus.PUBLISHED);
        event.setPublishedAt(LocalDateTime.now());
        event.setPublishedBy(user);
        
        Event publishedEvent = eventRepository.save(event);

        // Broadcast notification
        try {
            notificationService.broadcastToActiveMembers(
                    "New event published",
                    "A new event '" + publishedEvent.getName() + "' is now available.",
                    Notification.NotificationType.INFO,
                    Notification.NotificationCategory.EVENT,
                    "/dashboard?view=EVENTS"
            );
        } catch (Exception ignored) { /* ignore */ }

        return convertToDTO(publishedEvent);
    }

    private EventDTO convertToDTO(Event event) {
        EventDTO dto = new EventDTO();
        dto.setId(event.getId());
        dto.setName(event.getName());
        dto.setType(event.getType() != null ? event.getType().name() : null);
        dto.setDescription(event.getDescription());
        dto.setFullDescription(event.getFullDescription());
        dto.setStartDate(event.getStartDate());
        dto.setEndDate(event.getEndDate());
        dto.setStartTime(event.getStartTime());
        dto.setEndTime(event.getEndTime());
        dto.setLocation(event.getLocation());
        dto.setLocationType(event.getLocationType() != null ? event.getLocationType().name() : null);
        dto.setOnlineLink(event.getOnlineLink());
        dto.setOrganizerName(event.getOrganizerName());
        dto.setOrganizerEmail(event.getOrganizerEmail());
        dto.setOrganizerPhone(event.getOrganizerPhone());
        dto.setFormat(event.getFormat() != null ? event.getFormat().name() : null);
        dto.setCapacity(event.getCapacity());
        dto.setVisibility(event.getVisibility() != null ? event.getVisibility().name() : null);
        dto.setStatus(event.getStatus() != null ? event.getStatus().name() : null);
        dto.setPricingType(event.getPricingType() != null ? event.getPricingType().name() : null);
        dto.setMemberPrice(event.getMemberPrice());
        dto.setNonMemberPrice(event.getNonMemberPrice());
        dto.setEarlyBirdPrice(event.getEarlyBirdPrice());
        dto.setEarlyBirdEndDate(event.getEarlyBirdEndDate());
        dto.setImageUrl(event.getImageUrl());
        dto.setPublishedAt(event.getPublishedAt());
        
        // Parse tags from JSON string to List<String>
        if (event.getTags() != null && !event.getTags().isEmpty()) {
            try {
                dto.setTags(objectMapper.readValue(event.getTags(), new TypeReference<List<String>>() {}));
            } catch (Exception e) {
                dto.setTags(Collections.emptyList());
            }
        } else {
            dto.setTags(Collections.emptyList());
        }
        
        // Convert related entities to DTOs
        if (event.getTicketTypes() != null && !event.getTicketTypes().isEmpty()) {
            dto.setTicketTypes(event.getTicketTypes().stream()
                    .map(this::convertTicketTypeToDTO)
                    .collect(Collectors.toList()));
        } else {
            dto.setTicketTypes(Collections.emptyList());
        }
        
        if (event.getSpeakers() != null && !event.getSpeakers().isEmpty()) {
            dto.setSpeakers(event.getSpeakers().stream()
                    .map(this::convertSpeakerToDTO)
                    .collect(Collectors.toList()));
        } else {
            dto.setSpeakers(Collections.emptyList());
        }
        
        if (event.getSchedules() != null && !event.getSchedules().isEmpty()) {
            dto.setSchedules(event.getSchedules().stream()
                    .map(this::convertEventScheduleToDTO)
                    .collect(Collectors.toList()));
        } else {
            dto.setSchedules(Collections.emptyList());
        }
        
        // Calculate registration statistics
        List<com.portal.entity.EventRegistration> registrations = registrationRepository.findByEventId(event.getId());
        dto.setRegistrationCount(registrations.size()); // Number of registrations
        
        // Calculate total registered seats (sum of all quantities)
        int totalRegisteredSeats = registrations.stream()
                .mapToInt(com.portal.entity.EventRegistration::getQuantity)
                .sum();
        dto.setTotalRegisteredSeats(totalRegisteredSeats);
        
        // Calculate available seats
        if (event.getCapacity() != null && event.getCapacity() > 0) {
            int availableSeats = event.getCapacity() - totalRegisteredSeats;
            dto.setAvailableSeats(Math.max(0, availableSeats)); // Ensure non-negative
        } else {
            dto.setAvailableSeats(null); // No capacity limit
        }
        
        return dto;
    }

    private Event convertToEntity(EventDTO dto) {
        Event event = new Event();
        
        if (dto.getId() != null) {
            event.setId(dto.getId());
        }
        event.setName(dto.getName());
        if (dto.getType() != null) {
            event.setType(Event.EventType.valueOf(dto.getType()));
        }
        event.setDescription(dto.getDescription());
        event.setFullDescription(dto.getFullDescription());
        event.setStartDate(dto.getStartDate());
        event.setEndDate(dto.getEndDate());
        event.setStartTime(dto.getStartTime());
        event.setEndTime(dto.getEndTime());
        event.setLocation(dto.getLocation());
        if (dto.getLocationType() != null) {
            event.setLocationType(Event.LocationType.valueOf(dto.getLocationType()));
        }
        event.setOnlineLink(dto.getOnlineLink());
        event.setOrganizerName(dto.getOrganizerName());
        event.setOrganizerEmail(dto.getOrganizerEmail());
        event.setOrganizerPhone(dto.getOrganizerPhone());
        if (dto.getFormat() != null) {
            event.setFormat(Event.EventFormat.valueOf(dto.getFormat()));
        }
        event.setCapacity(dto.getCapacity());
        if (dto.getVisibility() != null) {
            event.setVisibility(Event.EventVisibility.valueOf(dto.getVisibility()));
        } else {
            event.setVisibility(Event.EventVisibility.PUBLIC);
        }
        if (dto.getStatus() != null) {
            event.setStatus(Event.EventStatus.valueOf(dto.getStatus()));
        } else {
            event.setStatus(Event.EventStatus.DRAFT);
        }
        if (dto.getPricingType() != null) {
            event.setPricingType(Event.PricingType.valueOf(dto.getPricingType()));
        } else {
            event.setPricingType(Event.PricingType.FREE);
        }
        event.setMemberPrice(dto.getMemberPrice());
        event.setNonMemberPrice(dto.getNonMemberPrice());
        event.setEarlyBirdPrice(dto.getEarlyBirdPrice());
        event.setEarlyBirdEndDate(dto.getEarlyBirdEndDate());
        event.setImageUrl(dto.getImageUrl());
        event.setPublishedAt(dto.getPublishedAt());
        
        // Convert tags from List<String> to JSON string
        if (dto.getTags() != null && !dto.getTags().isEmpty()) {
            try {
                event.setTags(objectMapper.writeValueAsString(dto.getTags()));
            } catch (Exception e) {
                event.setTags("[]");
            }
        } else {
            event.setTags("[]");
        }
        
        // Note: Related entities (ticketTypes, speakers, schedules) should be handled separately
        // They are typically created/updated through separate endpoints or cascade operations
        
        return event;
    }
    
    private TicketTypeDTO convertTicketTypeToDTO(com.portal.entity.TicketType ticketType) {
        TicketTypeDTO dto = new TicketTypeDTO();
        dto.setId(ticketType.getId());
        dto.setName(ticketType.getName());
        dto.setType(ticketType.getType() != null ? ticketType.getType().name() : null);
        dto.setPrice(ticketType.getPrice());
        dto.setQuantityLimit(ticketType.getQuantityLimit());
        dto.setAvailableQuantity(ticketType.getAvailableQuantity());
        dto.setDescription(ticketType.getDescription());
        return dto;
    }
    
    private SpeakerDTO convertSpeakerToDTO(com.portal.entity.Speaker speaker) {
        SpeakerDTO dto = new SpeakerDTO();
        dto.setId(speaker.getId());
        dto.setName(speaker.getName());
        dto.setTitle(speaker.getTitle());
        dto.setCompany(speaker.getCompany());
        dto.setBio(speaker.getBio());
        dto.setAvatarUrl(speaker.getAvatarUrl());
        dto.setLinkedinUrl(speaker.getLinkedinUrl());
        dto.setTwitterUrl(speaker.getTwitterUrl());
        dto.setWebsiteUrl(speaker.getWebsiteUrl());
        return dto;
    }
    
    private EventScheduleDTO convertEventScheduleToDTO(com.portal.entity.EventSchedule schedule) {
        EventScheduleDTO dto = new EventScheduleDTO();
        dto.setId(schedule.getId());
        dto.setStartTime(schedule.getStartTime());
        dto.setEndTime(schedule.getEndTime());
        dto.setTitle(schedule.getTitle());
        dto.setDescription(schedule.getDescription());
        if (schedule.getSpeaker() != null) {
            dto.setSpeakerId(schedule.getSpeaker().getId());
            dto.setSpeakerName(schedule.getSpeaker().getName());
        }
        dto.setLocation(schedule.getLocation());
        dto.setOrder(schedule.getOrder());
        return dto;
    }
    
    private Speaker convertSpeakerToEntity(SpeakerDTO dto, Event event) {
        Speaker speaker = new Speaker();
        speaker.setEvent(event);
        speaker.setName(dto.getName());
        speaker.setTitle(dto.getTitle());
        speaker.setCompany(dto.getCompany());
        speaker.setBio(dto.getBio());
        speaker.setAvatarUrl(dto.getAvatarUrl());
        speaker.setLinkedinUrl(dto.getLinkedinUrl());
        speaker.setTwitterUrl(dto.getTwitterUrl());
        speaker.setWebsiteUrl(dto.getWebsiteUrl());
        return speaker;
    }
    
    private EventSchedule convertEventScheduleToEntity(EventScheduleDTO dto, Event event) {
        EventSchedule schedule = new EventSchedule();
        schedule.setEvent(event);
        schedule.setStartTime(dto.getStartTime());
        schedule.setEndTime(dto.getEndTime());
        schedule.setTitle(dto.getTitle());
        schedule.setDescription(dto.getDescription());
        schedule.setLocation(dto.getLocation());
        schedule.setOrder(dto.getOrder() != null ? dto.getOrder() : 0);
        
        // Speaker will be set in createEvent method after speakers are created
        // This method just creates the schedule entity without speaker reference
        
        return schedule;
    }
    
    private TicketType convertTicketTypeToEntity(TicketTypeDTO dto, Event event) {
        TicketType ticketType = new TicketType();
        ticketType.setEvent(event);
        ticketType.setName(dto.getName());
        if (dto.getType() != null) {
            try {
                ticketType.setType(TicketType.TicketTypeEnum.valueOf(dto.getType().toUpperCase()));
            } catch (IllegalArgumentException e) {
                ticketType.setType(TicketType.TicketTypeEnum.MEMBER);
            }
        } else {
            ticketType.setType(TicketType.TicketTypeEnum.MEMBER);
        }
        ticketType.setPrice(dto.getPrice() != null ? dto.getPrice() : BigDecimal.ZERO);
        ticketType.setQuantityLimit(dto.getQuantityLimit());
        ticketType.setAvailableQuantity(dto.getAvailableQuantity() != null ? dto.getAvailableQuantity() : event.getCapacity());
        ticketType.setDescription(dto.getDescription());
        return ticketType;
    }
}

