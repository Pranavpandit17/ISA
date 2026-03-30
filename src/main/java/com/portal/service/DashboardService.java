package com.portal.service;

import com.portal.dto.DashboardStatsDTO;
import com.portal.entity.Event;
import com.portal.entity.JobPosting;
import com.portal.entity.Member;
import com.portal.entity.MembershipApplication;
import com.portal.repository.EventRepository;
import com.portal.repository.JobPostingRepository;
import com.portal.repository.MemberRepository;
import com.portal.repository.MembershipApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class DashboardService {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private MembershipApplicationRepository applicationRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private JobPostingRepository jobPostingRepository;

    public DashboardStatsDTO getDashboardStats() {
        DashboardStatsDTO stats = new DashboardStatsDTO();

        // Total active members
        List<Member> activeMembers = memberRepository.findAll().stream()
                .filter(m -> m.getMembershipStatus() == Member.MembershipStatus.ACTIVE)
                .toList();
        stats.setTotalMembers((long) activeMembers.size());

        // Pending membership applications
        List<MembershipApplication> pendingApps = applicationRepository.findAll().stream()
                .filter(app -> app.getStatus() == MembershipApplication.ApplicationStatus.PENDING)
                .toList();
        stats.setPendingApplications((long) pendingApps.size());

        // Upcoming events (published events with start date >= today)
        LocalDate today = LocalDate.now();
        List<Event> upcomingEvents = eventRepository.findAll().stream()
                .filter(e -> e.getStatus() == Event.EventStatus.PUBLISHED
                        && e.getStartDate() != null
                        && !e.getStartDate().isBefore(today))
                .toList();
        stats.setUpcomingEvents((long) upcomingEvents.size());

        // Pending jobs (pending admin review)
        List<JobPosting> pendingJobs = jobPostingRepository.findAll().stream()
                .filter(job -> job.getAdminReviewStatus() == JobPosting.AdminReviewStatus.PENDING)
                .toList();
        stats.setPendingJobs((long) pendingJobs.size());

        return stats;
    }
}




