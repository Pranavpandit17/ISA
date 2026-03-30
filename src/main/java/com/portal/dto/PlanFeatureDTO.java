package com.portal.dto;

import lombok.Data;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class PlanFeatureDTO {
    private Long id;
    private String code;
    private String name;
    private String description;
    private String category;
    private Boolean isActive;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<Long> planIds; // Plans that have this feature
}
