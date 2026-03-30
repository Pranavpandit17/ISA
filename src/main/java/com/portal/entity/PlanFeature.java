package com.portal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "plan_features")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"plans"})
@EntityListeners(AuditingEntityListener.class)
public class PlanFeature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String code; // Unique identifier like "ACCESS_DIRECTORY", "POST_JOBS"

    @Column(nullable = false, length = 200)
    private String name; // Display name like "Access to Member Directory"

    @Column(columnDefinition = "TEXT")
    private String description; // Detailed description

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FeatureCategory category = FeatureCategory.GENERAL;

    @Column(name = "is_active", nullable = false)
    private Boolean isActive = true;

    @ManyToMany(mappedBy = "planFeatures")
    private Set<MembershipFeePlan> plans = new HashSet<>();

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    public enum FeatureCategory {
        GENERAL,
        DIRECTORY,
        JOBS_PROJECTS,
        EVENTS,
        RESOURCES,
        NETWORKING,
        PREMIUM
    }
}
