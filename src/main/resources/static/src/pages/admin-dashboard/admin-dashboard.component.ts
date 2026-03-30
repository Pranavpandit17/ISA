import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ViewState } from '../../models/interfaces';
import { ApiService } from '../../services/api.service';
import { AuthService, User } from '../../services/auth.service';
import { EventCreateComponent } from '../event-create/event-create.component';
import { EventManagementComponent } from '../event-management/event-management.component';
import { MemberManagementComponent } from '../member-management/member-management.component';
import { JobManagementComponent } from '../job-management/job-management.component';
import { JobListingsComponent } from '../job-listings/job-listings.component';
import { MembershipPlanManagementComponent } from '../membership-plan-management/membership-plan-management.component';
import { PlanFeatureManagementComponent } from '../plan-feature-management/plan-feature-management.component';

type ManagementView = 'MEMBER_MANAGEMENT' | 'EVENT_MANAGEMENT' | 'POST_MANAGEMENT' | 'PLAN_MANAGEMENT' | 'FEATURE_MANAGEMENT' | null;

interface AppNotification {
  id: number;
  title: string;
  message: string;
  type?: string;
  category?: string;
  read?: boolean;
  readAt?: string;
  link?: string;
  createdAt?: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe, EventCreateComponent, EventManagementComponent, MemberManagementComponent, JobManagementComponent, JobListingsComponent, MembershipPlanManagementComponent, PlanFeatureManagementComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @Output() navigate = new EventEmitter<ViewState>();

  currentView: ManagementView = null;
  currentUser: User | null = null;

  // Stats
  pendingCount = 0;
  totalMembers = 0;
  activeEvents = 0;
  totalPosts = 0;

  // Data lists
  members: any[] = [];
  events: any[] = [];
  posts: any[] = [];
  
  isLoading = false;
  recentActivity: any[] = [];

  // Notifications
  showNotifications = false;
  notifications: AppNotification[] = [];
  unreadCount = 0;
  isLoadingNotifications = false;
  notificationsError = '';

  // Event modal state
  showEventModal = false;
  selectedEventForEdit: any = null;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.apiService.totalMembersSubject.subscribe(count => {
      this.totalMembers = count;
    });
    this.apiService.pendingCountSubject.subscribe(count=>{
      this.pendingCount = count;
    })
    this.loadUserProfile();
    this.loadStats();
    this.refreshUnreadNotificationsCount();
  }

  refreshUnreadNotificationsCount(): void {
    this.apiService.getUnreadNotificationsCount().subscribe({
      next: (count: any) => {
        this.unreadCount = typeof count === 'number' ? count : Number(count) || 0;
      },
      error: (error) => {
        console.error('Error loading unread notifications count (admin):', error);
        this.unreadCount = 0;
      }
    });
  }

  openNotifications(): void {
    this.showNotifications = true;
    this.loadNotifications();
  }

  closeNotifications(): void {
    this.showNotifications = false;
    this.notificationsError = '';
  }

  loadNotifications(): void {
    this.isLoadingNotifications = true;
    this.notificationsError = '';
    this.apiService.getMyNotifications().subscribe({
      next: (response: any) => {
        this.notifications = Array.isArray(response) ? response : [];
        this.isLoadingNotifications = false;
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error('Error loading notifications (admin):', error);
        this.notificationsError = 'Failed to load notifications.';
        this.isLoadingNotifications = false;
      }
    });
  }

  markNotificationRead(n: AppNotification): void {
    if (!n?.id) return;
    this.apiService.markNotificationRead(n.id).subscribe({
      next: () => {
        n.read = true;
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error('Error marking notification read (admin):', error);
      }
    });
  }

  markAllNotificationsRead(): void {
    this.apiService.markAllNotificationsRead().subscribe({
      next: () => {
        this.notifications.forEach(n => n.read = true);
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error('Error marking all notifications read (admin):', error);
      }
    });
  }

  clearAllNotifications(): void {
    this.notificationsError = '';
    this.isLoadingNotifications = true;

    this.apiService.clearAllNotifications().subscribe({
      next: () => {
        this.notifications = [];
        this.unreadCount = 0;
        this.isLoadingNotifications = false;
      },
      error: (error) => {
        console.error('Error clearing notifications (admin):', error);
        this.notificationsError = 'Failed to clear notifications.';
        this.isLoadingNotifications = false;
      }
    });
  }

  onNotificationClick(n: AppNotification): void {
    if (!n) return;

    // Mark read (non-blocking) then navigate
    if (!n.read) {
      this.markNotificationRead(n);
    }

    this.navigateFromNotificationLink(n.link);
  }

  private navigateFromNotificationLink(link?: string): void {
    if (!link || typeof link !== 'string') {
      return;
    }

    // External link support (just in case)
    if (link.startsWith('http://') || link.startsWith('https://')) {
      window.open(link, '_blank');
      return;
    }

    // Expected formats:
    // - /admin-dashboard
    // - /admin-dashboard?view=EVENT_MANAGEMENT
    // - /admin-dashboard?view=MEMBER_MANAGEMENT
    const [path, queryString] = link.split('?');
    if (path && !path.startsWith('/admin-dashboard')) {
      return;
    }

    const params = new URLSearchParams(queryString || '');
    const viewParam = params.get('view') as ManagementView | null;

    if (viewParam) {
      const supported: ManagementView[] = ['MEMBER_MANAGEMENT', 'EVENT_MANAGEMENT', 'POST_MANAGEMENT', 'PLAN_MANAGEMENT', 'FEATURE_MANAGEMENT', null];
      if ((supported as any).includes(viewParam)) {
        this.onSelectView(viewParam);
        this.closeNotifications();
        return;
      }
    }

    // No view param: just close modal
    this.closeNotifications();
  }
  formatStartTime(time: string): Date | null {
    if (!time) return null;
  
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  loadUserProfile(): void {
    this.currentUser = this.authService.getCurrentUser();
    // If user data is incomplete, you can fetch from API
    // this.apiService.getCurrentUserProfile().subscribe(...)
  }

  loadStats(): void {
    // Load pending applications count
    this.apiService.getMembershipApplications().subscribe({
      next: (response: any) => {
        const apps = Array.isArray(response) ? response : [];
        this.pendingCount = apps.filter((app: any) => app.status === 'PENDING').length;
        this.updateStats();
      }
    });

    // Load approved members count
    this.apiService.getApprovedMembers().subscribe({
      next: (response: any) => {
        this.totalMembers = Array.isArray(response) ? response.length : 0;
        this.updateStats();
      }
    });

    // Load events count
    this.apiService.getEvents().subscribe({
      next: (response: any) => {
        const events = Array.isArray(response) ? response : [];
        this.activeEvents = events.filter((e: any) => e.status === 'PUBLISHED').length;
        this.updateStats();
      }
    });

    // Load job postings count
    this.apiService.getJobPostings().subscribe({
      next: (response: any) => {
        const posts = Array.isArray(response) ? response : [];
        this.totalPosts = posts.length;
      }
    });
  }

  updateStats(): void {
    // Update stats based on current view
    if (this.currentView === 'MEMBER_MANAGEMENT') {
      // Refresh member stats
      this.apiService.getApprovedMembers().subscribe({
        next: (response: any) => {
          this.totalMembers = Array.isArray(response) ? response.length : 0;
        }
      });
    } else if (this.currentView === 'EVENT_MANAGEMENT') {
      // Refresh event stats
      this.apiService.getEvents().subscribe({
        next: (response: any) => {
          const events = Array.isArray(response) ? response : [];
          this.activeEvents = events.filter((e: any) => e.status === 'PUBLISHED').length;
        }
      });
    } else if (this.currentView === 'POST_MANAGEMENT') {
      // Load job postings count
      this.apiService.getJobPostings().subscribe({
        next: (response: any) => {
          const posts = Array.isArray(response) ? response : [];
          this.totalPosts = posts.length;
        }
      });
    }
  }

  onSelectView(view: ManagementView): void {
    this.currentView = view;
    this.isLoading = true;
    this.updateStats(); // Update stats when switching views

    if (view === 'MEMBER_MANAGEMENT') {
      // Member management component will load its own data
      this.isLoading = false;
    } else if (view === 'EVENT_MANAGEMENT') {
      this.loadEvents();
    } else if (view === 'POST_MANAGEMENT') {
      this.loadPosts();
    } else if (view === 'PLAN_MANAGEMENT') {
      // Membership plan management component will load its own data
      this.isLoading = false;
    } else if (view === 'FEATURE_MANAGEMENT') {
      // Feature management component will load its own data
      this.isLoading = false;
    }
  }

  loadEvents(): void {
    this.apiService.getEvents().subscribe({
      next: (response: any) => {
        this.events = Array.isArray(response) ? response : [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading events:', error);
        this.events = [];
        this.isLoading = false;
      }
    });
  }

  loadPosts(): void {
    // Job listings component will load its own data
    this.isLoading = false;
  }

  onCreateEvent(): void {
    this.selectedEventForEdit = null;
    this.showEventModal = true;
    this.saveEvent = false;
  }
  saveEvent:boolean=false;
  onEditEvent(event: any): void {
    this.selectedEventForEdit = event;
    console.log(event)
    this.showEventModal = true;
    this.saveEvent = true;
  }

  closeEventModal(): void {
    this.showEventModal = false;
    this.selectedEventForEdit = null;
  }

  onEventSaved(): void {
    this.loadEvents();
    this.closeEventModal();
  }

  onDeleteEvent(event: any): void {
    const eventName = event.name || event.title || 'this event';
    if (confirm(`Are you sure you want to delete "${eventName}"?`)) {
      console.log('Delete event:', event.id);
      // Reload events after deletion
      this.loadEvents();
    }
  }
}
