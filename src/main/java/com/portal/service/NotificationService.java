package com.portal.service;

import com.portal.dto.NotificationDTO;
import com.portal.entity.Notification;
import com.portal.entity.Member;
import com.portal.entity.User;
import com.portal.repository.MemberRepository;
import com.portal.repository.NotificationRepository;
import com.portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MemberRepository memberRepository;

    public List<NotificationDTO> getUserNotifications(String email) { // Parameter is now email, not username
        try {
            User user = userRepository.findByEmailIgnoreCase(email)
                    .orElseThrow(() -> new RuntimeException("User not found: " + email));
            List<Notification> notifications = notificationRepository.findByUserIdOrderByCreatedAtDesc(user.getId());
            if (notifications == null || notifications.isEmpty()) {
                return new ArrayList<>();
            }
            return notifications.stream()
                    .filter(n -> n != null)
                    .map(this::convertToDTO)
                    .filter(dto -> dto != null)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new RuntimeException("Error fetching notifications for user: " + email, e);
        }
    }

    public Long getUnreadCount(String email) { // Parameter is now email, not username
        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return notificationRepository.countByUserIdAndReadFalse(user.getId());
    }

    @Transactional
    public void markAsRead(Long notificationId, String actorEmail, boolean isAdmin) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new RuntimeException("Notification not found"));

        if (!isAdmin) {
            User actor = userRepository.findByEmailIgnoreCase(actorEmail)
                    .orElseThrow(() -> new RuntimeException("User not found"));
            if (notification.getUser() == null || notification.getUser().getId() == null ||
                    !notification.getUser().getId().equals(actor.getId())) {
                throw new RuntimeException("Forbidden");
            }
        }

        notification.setRead(true);
        notification.setReadAt(LocalDateTime.now());
        notificationRepository.save(notification);
    }

    @Transactional
    public void markAllAsRead(String email) { // Parameter is now email, not username
        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<Notification> notifications = notificationRepository.findByUserIdAndReadFalseOrderByCreatedAtDesc(user.getId());
        LocalDateTime now = LocalDateTime.now();
        notifications.forEach(n -> {
            n.setRead(true);
            n.setReadAt(now);
        });
        notificationRepository.saveAll(notifications);
    }

    @Transactional
    public void clearAllForUser(String email) {
        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        notificationRepository.deleteByUserId(user.getId());
    }

    @Transactional
    public NotificationDTO createNotificationForEmail(
            String recipientEmail,
            String title,
            String message,
            Notification.NotificationType type,
            Notification.NotificationCategory category,
            String link
    ) {
        User user = userRepository.findByEmailIgnoreCase(recipientEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Notification n = new Notification();
        n.setUser(user);
        n.setTitle(title != null ? title : "Notification");
        n.setMessage(message != null ? message : "");
        n.setType(type != null ? type : Notification.NotificationType.INFO);
        n.setCategory(category != null ? category : Notification.NotificationCategory.SYSTEM);
        n.setRead(false);
        n.setReadAt(null);
        n.setLink(link);

        Notification saved = notificationRepository.save(n);
        return convertToDTO(saved);
    }

    /**
     * Broadcast a notification to all ACTIVE members (one notification per member).
     * Runs in a separate transaction so failures (or rollback-only markers) cannot break
     * the caller's transaction — e.g. publishing an event must commit even if broadcast fails.
     */
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void broadcastToActiveMembers(
            String title,
            String message,
            Notification.NotificationType type,
            Notification.NotificationCategory category,
            String link
    ) {
        List<Member> members = memberRepository.findByMembershipStatus(Member.MembershipStatus.ACTIVE);
        if (members == null || members.isEmpty()) {
            return;
        }

        List<Notification> batch = new ArrayList<>();
        for (Member m : members) {
            if (m == null || m.getUser() == null || m.getUser().getId() == null) continue;
            User u = m.getUser();
            Notification n = new Notification();
            n.setUser(u);
            n.setTitle(title != null ? title : "Notification");
            n.setMessage(message != null ? message : "");
            n.setType(type != null ? type : Notification.NotificationType.INFO);
            n.setCategory(category != null ? category : Notification.NotificationCategory.SYSTEM);
            n.setRead(false);
            n.setReadAt(null);
            n.setLink(link);
            batch.add(n);
        }

        if (!batch.isEmpty()) {
            notificationRepository.saveAll(batch);
        }
    }

    /**
     * Broadcast a notification to all ADMIN users.
     */
    @Transactional
    public void broadcastToAdmins(
            String title,
            String message,
            Notification.NotificationType type,
            Notification.NotificationCategory category,
            String link
    ) {
        List<User> admins = userRepository.findByRole(User.Role.ADMIN);
        if (admins == null || admins.isEmpty()) {
            return;
        }

        List<Notification> batch = new ArrayList<>();
        for (User u : admins) {
            if (u == null || u.getId() == null) continue;
            Notification n = new Notification();
            n.setUser(u);
            n.setTitle(title != null ? title : "Notification");
            n.setMessage(message != null ? message : "");
            n.setType(type != null ? type : Notification.NotificationType.INFO);
            n.setCategory(category != null ? category : Notification.NotificationCategory.SYSTEM);
            n.setRead(false);
            n.setReadAt(null);
            n.setLink(link);
            batch.add(n);
        }

        if (!batch.isEmpty()) {
            notificationRepository.saveAll(batch);
        }
    }

    /**
     * Broadcast a notification to all ACTIVE members excluding a specific userId (usually the creator).
     */
    @Transactional
    public void broadcastToActiveMembersExcludingUserId(
            Long excludeUserId,
            String title,
            String message,
            Notification.NotificationType type,
            Notification.NotificationCategory category,
            String link
    ) {
        List<Member> members = memberRepository.findByMembershipStatus(Member.MembershipStatus.ACTIVE);
        if (members == null || members.isEmpty()) {
            return;
        }

        List<Notification> batch = new ArrayList<>();
        for (Member m : members) {
            if (m == null || m.getUser() == null || m.getUser().getId() == null) continue;
            User u = m.getUser();
            if (excludeUserId != null && excludeUserId.equals(u.getId())) continue;

            Notification n = new Notification();
            n.setUser(u);
            n.setTitle(title != null ? title : "Notification");
            n.setMessage(message != null ? message : "");
            n.setType(type != null ? type : Notification.NotificationType.INFO);
            n.setCategory(category != null ? category : Notification.NotificationCategory.SYSTEM);
            n.setRead(false);
            n.setReadAt(null);
            n.setLink(link);
            batch.add(n);
        }

        if (!batch.isEmpty()) {
            notificationRepository.saveAll(batch);
        }
    }

    /**
     * Broadcast a notification to all ADMIN users excluding a specific userId (usually the creator).
     */
    @Transactional
    public void broadcastToAdminsExcludingUserId(
            Long excludeUserId,
            String title,
            String message,
            Notification.NotificationType type,
            Notification.NotificationCategory category,
            String link
    ) {
        List<User> admins = userRepository.findByRole(User.Role.ADMIN);
        if (admins == null || admins.isEmpty()) {
            return;
        }

        List<Notification> batch = new ArrayList<>();
        for (User u : admins) {
            if (u == null || u.getId() == null) continue;
            if (excludeUserId != null && excludeUserId.equals(u.getId())) continue;

            Notification n = new Notification();
            n.setUser(u);
            n.setTitle(title != null ? title : "Notification");
            n.setMessage(message != null ? message : "");
            n.setType(type != null ? type : Notification.NotificationType.INFO);
            n.setCategory(category != null ? category : Notification.NotificationCategory.SYSTEM);
            n.setRead(false);
            n.setReadAt(null);
            n.setLink(link);
            batch.add(n);
        }

        if (!batch.isEmpty()) {
            notificationRepository.saveAll(batch);
        }
    }

    private NotificationDTO convertToDTO(Notification notification) {
        if (notification == null) {
            return null;
        }
        NotificationDTO dto = new NotificationDTO();
        dto.setId(notification.getId());
        dto.setTitle(notification.getTitle() != null ? notification.getTitle() : "");
        dto.setMessage(notification.getMessage() != null ? notification.getMessage() : "");
        dto.setType(notification.getType() != null ? notification.getType().name() : null);
        dto.setCategory(notification.getCategory() != null ? notification.getCategory().name() : null);
        dto.setRead(notification.getRead() != null ? notification.getRead() : false);
        dto.setReadAt(notification.getReadAt());
        dto.setLink(notification.getLink());
        dto.setCreatedAt(notification.getCreatedAt());
        return dto;
    }
}

