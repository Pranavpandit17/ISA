package com.portal.dto;

import lombok.Data;

@Data
public class DashboardStatsDTO {
    private Long totalMembers;
    private Long pendingApplications;
    private Long upcomingEvents;
    private Long pendingJobs;

    // Getters and Setters
    public Long getTotalMembers() {
        return totalMembers;
    }

    public void setTotalMembers(Long totalMembers) {
        this.totalMembers = totalMembers;
    }

    public Long getPendingApplications() {
        return pendingApplications;
    }

    public void setPendingApplications(Long pendingApplications) {
        this.pendingApplications = pendingApplications;
    }

    public Long getUpcomingEvents() {
        return upcomingEvents;
    }

    public void setUpcomingEvents(Long upcomingEvents) {
        this.upcomingEvents = upcomingEvents;
    }

    public Long getPendingJobs() {
        return pendingJobs;
    }

    public void setPendingJobs(Long pendingJobs) {
        this.pendingJobs = pendingJobs;
    }
}




