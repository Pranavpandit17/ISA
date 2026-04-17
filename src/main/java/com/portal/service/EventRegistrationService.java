package com.portal.service;

import com.portal.dto.EventRegistrationDTO;
import com.portal.entity.Event;
import com.portal.entity.EventRegistration;
import com.portal.entity.Payment;
import com.portal.entity.TicketType;
import com.portal.entity.User;
import com.portal.repository.EventRegistrationRepository;
import com.portal.repository.EventRepository;
import com.portal.repository.TicketTypeRepository;
import com.portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class EventRegistrationService {

    @Autowired
    private EventRegistrationRepository registrationRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private TicketTypeRepository ticketTypeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private com.portal.repository.MemberRepository memberRepository;

    @Autowired
    private com.portal.repository.PaymentRepository paymentRepository;

    @Autowired(required = false)
    private EmailService emailService;

    @Transactional
    public EventRegistrationDTO registerForEvent(Long eventId, Long userId, Long ticketTypeId, Integer quantity, Long paymentId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        TicketType ticketType;
        if (ticketTypeId != null) {
            ticketType = ticketTypeRepository.findById(ticketTypeId)
                    .orElseThrow(() -> new RuntimeException("Ticket type not found"));
        } else {
            // Create a default ticket type if none exists
            ticketType = createDefaultTicketType(event, user);
        }

        // Check if user already registered
        if (registrationRepository.existsByEventIdAndUserId(eventId, userId)) {
            throw new RuntimeException("User already registered for this event");
        }

        // Check capacity availability
        if (event.getCapacity() != null && event.getCapacity() > 0) {
            // Calculate total registered seats (sum of all quantities for this event)
            int totalRegisteredSeats = registrationRepository.findByEventId(eventId).stream()
                    .mapToInt(EventRegistration::getQuantity)
                    .sum();
            
            // Check if requested quantity is available
            int availableSeats = event.getCapacity() - totalRegisteredSeats;
            if (quantity > availableSeats) {
                throw new RuntimeException(
                    String.format("Not enough seats available. Only %d seat(s) remaining out of %d total capacity.", 
                        availableSeats, event.getCapacity())
                );
            }
        }

        // Calculate total amount
        BigDecimal totalAmount = ticketType.getPrice().multiply(BigDecimal.valueOf(quantity));

        // Create registration
        EventRegistration registration = new EventRegistration();
        registration.setEvent(event);
        registration.setUser(user);
        registration.setTicketType(ticketType);
        registration.setQuantity(quantity);
        registration.setTotalAmount(totalAmount);
        registration.setStatus(EventRegistration.RegistrationStatus.REGISTERED);
        registration.setRegistrationId("REG-" + UUID.randomUUID().toString().substring(0, 9).toUpperCase());
        registration.setRegisteredAt(LocalDateTime.now()); // Explicitly set registeredAt
        
        // Link payment if provided (for dummy payment flow)
        if (paymentId != null) {
            Payment payment = paymentRepository.findById(paymentId)
                    .orElseThrow(() -> new RuntimeException("Payment not found"));
            registration.setPayment(payment);
            registration.setPaymentStatus(EventRegistration.PaymentStatus.COMPLETED);
            registration.setStatus(EventRegistration.RegistrationStatus.CONFIRMED);
        } else {
            // Set payment status based on ticket price
            if (totalAmount.compareTo(BigDecimal.ZERO) > 0) {
                registration.setPaymentStatus(EventRegistration.PaymentStatus.PENDING);
            } else {
                registration.setPaymentStatus(EventRegistration.PaymentStatus.COMPLETED);
            }
        }

        EventRegistration savedRegistration = registrationRepository.save(registration);
        
        // Send registration confirmation email
        try {
            if (emailService != null && user.getEmail() != null) {
                String eventDate = event.getStartDate() != null ? event.getStartDate().toString() : "TBA";
                String venue = event.getLocation() != null ? event.getLocation() : "TBA";
                String userName = user.getName() != null ? user.getName() : user.getEmail();
                emailService.sendEventRegistrationConfirmation(
                    user.getEmail(),
                    userName,
                    event.getName() != null ? event.getName() : "Event",
                    eventDate,
                    venue,
                    quantity
                );
                
                // If payment was made, also send payment confirmation
                if (paymentId != null && savedRegistration.getPayment() != null) {
                    Payment payment = savedRegistration.getPayment();
                    emailService.sendEventPaymentConfirmation(
                        user.getEmail(),
                        userName,
                        event.getName() != null ? event.getName() : "Event",
                        payment.getAmount().toString(),
                        payment.getCurrency(),
                        payment.getTransactionId()
                    );
                }
            }
        } catch (Exception e) {
            // Log but don't fail registration
            System.err.println("Error sending registration email: " + e.getMessage());
        }
        
        return convertToDTO(savedRegistration);
    }

    @Transactional
    public EventRegistrationDTO confirmPayment(Long registrationId, Payment payment) {
        EventRegistration registration = registrationRepository.findById(registrationId)
                .orElseThrow(() -> new RuntimeException("Registration not found"));

        registration.setPayment(payment);
        registration.setPaymentStatus(EventRegistration.PaymentStatus.COMPLETED);
        registration.setStatus(EventRegistration.RegistrationStatus.CONFIRMED);

        EventRegistration updatedRegistration = registrationRepository.save(registration);
        return convertToDTO(updatedRegistration);
    }

    public List<EventRegistrationDTO> getUserRegistrations(Long userId) {
        return registrationRepository.findByUserId(userId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public EventRegistrationDTO getRegistrationById(Long id) {
        EventRegistration registration = registrationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Registration not found"));
        return convertToDTO(registration);
    }

    public EventRegistrationDTO getRegistrationByRegistrationId(String registrationId) {
        EventRegistration registration = registrationRepository.findByRegistrationId(registrationId)
                .orElseThrow(() -> new RuntimeException("Registration not found"));
        return convertToDTO(registration);
    }

    public List<EventRegistrationDTO> getEventRegistrations(Long eventId) {
        return registrationRepository.findByEventId(eventId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
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
    
    private TicketType createDefaultTicketType(Event event, User user) {
        // Check if user is an active member (has MEMBER role AND active Member record)
        boolean isActiveMember = user.getRole() == User.Role.MEMBER && 
                                 memberRepository.findById(user.getId())
                                     .map(m -> m.getMembershipStatus() == com.portal.entity.Member.MembershipStatus.ACTIVE)
                                     .orElse(false);
        
        TicketType ticketType = new TicketType();
        ticketType.setEvent(event);
        
        if (event.getPricingType() == Event.PricingType.FREE) {
            ticketType.setName("Free Ticket");
            ticketType.setType(TicketType.TicketTypeEnum.MEMBER);
            ticketType.setPrice(BigDecimal.ZERO);
        } else if (isActiveMember && event.getMemberPrice() != null && event.getMemberPrice().compareTo(BigDecimal.ZERO) > 0) {
            ticketType.setName("Member Ticket");
            ticketType.setType(TicketType.TicketTypeEnum.MEMBER);
            ticketType.setPrice(event.getMemberPrice());
        } else if (event.getNonMemberPrice() != null && event.getNonMemberPrice().compareTo(BigDecimal.ZERO) > 0) {
            ticketType.setName("Non-Member Ticket");
            ticketType.setType(TicketType.TicketTypeEnum.NON_MEMBER);
            ticketType.setPrice(event.getNonMemberPrice());
        } else if (event.getMemberPrice() != null && event.getMemberPrice().compareTo(BigDecimal.ZERO) > 0) {
            // Fallback to member price if non-member price is not set
            ticketType.setName("Standard Ticket");
            ticketType.setType(TicketType.TicketTypeEnum.MEMBER);
            ticketType.setPrice(event.getMemberPrice());
        } else {
            ticketType.setName("Standard Ticket");
            ticketType.setType(TicketType.TicketTypeEnum.MEMBER);
            ticketType.setPrice(BigDecimal.ZERO);
        }
        
        ticketType.setAvailableQuantity(event.getCapacity());
        return ticketTypeRepository.save(ticketType);
    }
}

