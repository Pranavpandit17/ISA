package com.portal.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Data
@Getter
@Setter
public class EventDTO {
    private Long id;
    private String name;
    private String type;
    private String description;
    private String fullDescription;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private String location;
    private String locationType;
    private String onlineLink;
    private String organizerName;
    private String organizerEmail;
    private String organizerPhone;
    private String format;
    private Integer capacity;
    private String visibility;
    private String status;
    private String pricingType;
    private BigDecimal memberPrice;
    private BigDecimal nonMemberPrice;
    private BigDecimal earlyBirdPrice;
    private LocalDate earlyBirdEndDate;
    private String imageUrl;
    private List<String> tags;
    private LocalDateTime publishedAt;
    private List<TicketTypeDTO> ticketTypes;
    private List<SpeakerDTO> speakers;
    private List<EventScheduleDTO> schedules;
    private Integer registrationCount; // Number of registrations
    private Integer totalRegisteredSeats; // Total seats registered (sum of quantities)
    private Integer availableSeats; // Available seats = capacity - totalRegisteredSeats
    private List<EventRegistrationDTO> attendees; // List of registered users as attendees

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFullDescription() {
        return fullDescription;
    }

    public void setFullDescription(String fullDescription) {
        this.fullDescription = fullDescription;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getLocationType() {
        return locationType;
    }

    public void setLocationType(String locationType) {
        this.locationType = locationType;
    }

    public String getOnlineLink() {
        return onlineLink;
    }

    public void setOnlineLink(String onlineLink) {
        this.onlineLink = onlineLink;
    }

    public String getOrganizerName() {
        return organizerName;
    }

    public void setOrganizerName(String organizerName) {
        this.organizerName = organizerName;
    }

    public String getOrganizerEmail() {
        return organizerEmail;
    }

    public void setOrganizerEmail(String organizerEmail) {
        this.organizerEmail = organizerEmail;
    }

    public String getOrganizerPhone() {
        return organizerPhone;
    }

    public void setOrganizerPhone(String organizerPhone) {
        this.organizerPhone = organizerPhone;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public String getVisibility() {
        return visibility;
    }

    public void setVisibility(String visibility) {
        this.visibility = visibility;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPricingType() {
        return pricingType;
    }

    public void setPricingType(String pricingType) {
        this.pricingType = pricingType;
    }

    public BigDecimal getMemberPrice() {
        return memberPrice;
    }

    public void setMemberPrice(BigDecimal memberPrice) {
        this.memberPrice = memberPrice;
    }

    public BigDecimal getNonMemberPrice() {
        return nonMemberPrice;
    }

    public void setNonMemberPrice(BigDecimal nonMemberPrice) {
        this.nonMemberPrice = nonMemberPrice;
    }

    public BigDecimal getEarlyBirdPrice() {
        return earlyBirdPrice;
    }

    public void setEarlyBirdPrice(BigDecimal earlyBirdPrice) {
        this.earlyBirdPrice = earlyBirdPrice;
    }

    public LocalDate getEarlyBirdEndDate() {
        return earlyBirdEndDate;
    }

    public void setEarlyBirdEndDate(LocalDate earlyBirdEndDate) {
        this.earlyBirdEndDate = earlyBirdEndDate;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public LocalDateTime getPublishedAt() {
        return publishedAt;
    }

    public void setPublishedAt(LocalDateTime publishedAt) {
        this.publishedAt = publishedAt;
    }

    public List<TicketTypeDTO> getTicketTypes() {
        return ticketTypes;
    }

    public void setTicketTypes(List<TicketTypeDTO> ticketTypes) {
        this.ticketTypes = ticketTypes;
    }

    public List<SpeakerDTO> getSpeakers() {
        return speakers;
    }

    public void setSpeakers(List<SpeakerDTO> speakers) {
        this.speakers = speakers;
    }

    public List<EventScheduleDTO> getSchedules() {
        return schedules;
    }

    public void setSchedules(List<EventScheduleDTO> schedules) {
        this.schedules = schedules;
    }

    public Integer getRegistrationCount() {
        return registrationCount;
    }

    public void setRegistrationCount(Integer registrationCount) {
        this.registrationCount = registrationCount;
    }

    public Integer getTotalRegisteredSeats() {
        return totalRegisteredSeats;
    }

    public void setTotalRegisteredSeats(Integer totalRegisteredSeats) {
        this.totalRegisteredSeats = totalRegisteredSeats;
    }

    public Integer getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(Integer availableSeats) {
        this.availableSeats = availableSeats;
    }

    public List<EventRegistrationDTO> getAttendees() {
        return attendees;
    }

    public void setAttendees(List<EventRegistrationDTO> attendees) {
        this.attendees = attendees;
    }
}

