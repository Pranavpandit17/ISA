package com.portal.dto;

import jakarta.validation.constraints.NotNull;

public class SelectPlanRequest {
    @NotNull(message = "planId is required")
    private Long planId;

    public Long getPlanId() {
        return planId;
    }

    public void setPlanId(Long planId) {
        this.planId = planId;
    }
}
