import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Event as AppEvent, Announcement, ViewState, Member } from '../../models/interfaces';
import { DataService } from '../../services/data.service';
import { AuthService, User } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { MembershipService } from '../../services/membership.service';
import { MembershipPlansComponent } from '../membership-plans/membership-plans.component';
import { EventDetailModalComponent } from '../../components/modals/event-detail-modal/event-detail-modal.component';
import { PaymentModalComponent } from '../../components/modals/payment-modal/payment-modal.component';
import { JobListingsComponent } from '../job-listings/job-listings.component';
import { BenchResourcesComponent } from './bench-resources/bench-resources.component';

type DashboardView = 'HOME' | 'EVENTS' | 'DIRECTORY' | 'BENCH' | 'BLOGS' | 'JOBS_PROJECTS' | null;

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
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe, FormsModule, EventDetailModalComponent, JobListingsComponent, BenchResourcesComponent, MembershipPlansComponent, PaymentModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  @Output() viewEvent = new EventEmitter<AppEvent>();

  currentView: DashboardView = null;
  currentUser: User | null = null;
  selectedMembershipPlan: any = null;
  myEvents: AppEvent[] = [];
  allEvents: any[] = [];
  filteredEvents: any[] = [];
  announcements: Announcement[] = [];
  members: Member[] = [];
  otherMembers: Member[] = [];

  // Filter properties for events
  eventTypeFilter = 'All Types';
  dateRangeFilter = 'All Dates';
  costFilter = 'All Costs';
  searchQuery = '';

  isLoading = false;

  // Notifications
  showNotifications = false;
  notifications: AppNotification[] = [];
  unreadCount = 0;
  isLoadingNotifications = false;
  notificationsError = '';

  // Event detail modal state
  showEventDetailModal = false;
  selectedEvent: any = null;
  showPaymentModal = false; // Payment modal state

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private apiService: ApiService,
    private membershipService: MembershipService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.announcements = this.dataService.getAnnouncements();
    const allMembers = this.dataService.getMembers();
    // Recommended: first few members (existing logic)
    this.members = allMembers.slice(0, 4);
    // Other Members: all approved members excluding current user and those already in recommended
    this.otherMembers = allMembers.filter(m => {
      if (this.currentUser && m.email === this.currentUser.email) {
        return false;
      }
      return !this.members.some(r => r.id === m.id);
    });

    // Load selected membership plan (from local storage via service)
    this.selectedMembershipPlan = this.membershipService.getSelectedPlan();
    this.membershipService.getSelectedPlan$().subscribe(plan => {
      this.selectedMembershipPlan = plan;
    });
    this.loadMyEvents();
    this.refreshUnreadNotificationsCount();

    // Check for query parameters (e.g. ?view=MEMBERSHIP_PLANS)
    this.route.queryParams.subscribe(params => {
      const view = params['view'];
      if (view === 'MEMBERSHIP_PLANS'!) {
        this.currentView = null; // Default dashboard view holds the plans
        setTimeout(() => {
          const el = document.getElementById('membership-plans-section');
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      } else if (view) {
        this.onSelectView(view as DashboardView);
      }
    });
  }

  private resolveEventImageUrl(rawImage: string | null | undefined): string | null {
    if (!rawImage) {
      return null;
    }
    const image = String(rawImage).trim();
    if (!image || image === 'assets/default-event.png') {
      return null;
    }
    if (/^https?:\/\//i.test(image)) {
      return image;
    }
    if (image.startsWith('//')) {
      return `${window.location.protocol}${image}`;
    }
    const normalizedPath = image.startsWith('/') ? image : `/${image}`;
    return `${this.apiService.getBackendBaseUrl()}${normalizedPath}`;
  }

  scrollToPlans(): void {
    const el = document.getElementById('membership-plans-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  refreshUnreadNotificationsCount(): void {
    this.apiService.getUnreadNotificationsCount().subscribe({
      next: (count: any) => {
        this.unreadCount = typeof count === 'number' ? count : Number(count) || 0;
      },
      error: (error) => {
        console.error('Error loading unread notifications count:', error);
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
        console.error('Error loading notifications:', error);
        this.notificationsError = 'Failed to load notifications.';
        this.isLoadingNotifications = false;
      }
    });
  }

  markAsRead(n: AppNotification): void {
    if (!n?.id) return;
    this.apiService.markNotificationRead(n.id).subscribe({
      next: () => {
        n.read = true;
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error('Error marking notification as read:', error);
      }
    });
  }

  markAllAsRead(): void {
    this.apiService.markAllNotificationsRead().subscribe({
      next: () => {
        this.notifications.forEach(n => n.read = true);
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error('Error marking all notifications as read:', error);
      }
    });
  }

  onNotificationClick(n: AppNotification): void {
    if (!n) return;

    // Mark read (non-blocking) then navigate
    if (!n.read) {
      this.markAsRead(n);
    }

    this.navigateFromNotificationLink(n.link, n.category);
  }

  private navigateFromNotificationLink(link?: string, category?: string): void {
    // If link is missing or too generic, fallback to category-based navigation
    if (!link || typeof link !== 'string' || link.trim() === '' || link.trim() === '/dashboard') {
      this.navigateFromNotificationCategory(category);
      return;
    }

    // External link support (just in case)
    if (link.startsWith('http://') || link.startsWith('https://')) {
      window.open(link, '_blank');
      return;
    }

    // Expected formats:
    // - /dashboard
    // - /dashboard?view=EVENTS
    // - /dashboard?view=JOBS_PROJECTS
    // - /dashboard?view=BENCH
    // - /dashboard?view=MEMBERSHIP_PLANS (maps to default view + scroll)
    const [path, queryString] = link.split('?');
    if (path && !path.startsWith('/dashboard')) {
      return;
    }

    const params = new URLSearchParams(queryString || '');
    const viewParam = params.get('view');

    // Membership plans live on the default dashboard view
    if (viewParam === 'MEMBERSHIP_PLANS') {
      this.currentView = null;
      this.closeNotifications();
      setTimeout(() => {
        const el = document.getElementById('membership-plans-section');
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      return;
    }

    if (viewParam) {
      const supported: DashboardView[] = ['HOME', 'EVENTS', 'DIRECTORY', 'BENCH', 'BLOGS', 'JOBS_PROJECTS', null];
      if ((supported as any).includes(viewParam)) {
        // HOME maps to default
        this.currentView = viewParam === 'HOME' ? null : (viewParam as DashboardView);
        // Ensure data loads the same way as clicking the tab
        if (this.currentView === 'EVENTS') {
          this.loadAllEvents();
        }
      } else {
        // Fallback to category-based navigation
        this.navigateFromNotificationCategory(category);
        return;
      }
      this.closeNotifications();
      return;
    }

    // No view param: just close modal
    this.navigateFromNotificationCategory(category);
  }

  private navigateFromNotificationCategory(category?: string): void {
    const cat = (category || '').toUpperCase();

    if (cat === 'EVENT') {
      this.currentView = 'EVENTS';
      this.loadAllEvents();
      this.closeNotifications();
      return;
    }

    if (cat === 'JOB') {
      this.currentView = 'JOBS_PROJECTS';
      this.closeNotifications();
      return;
    }

    if (cat === 'RESOURCES') {
      this.currentView = 'BENCH';
      this.closeNotifications();
      return;
    }

    if (cat === 'PAYMENT' || cat === 'MEMBERSHIP') {
      this.currentView = null;
      this.closeNotifications();
      setTimeout(() => {
        const el = document.getElementById('membership-plans-section');
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
      return;
    }

    // SYSTEM or unknown: go to default dashboard
    this.currentView = null;
    this.closeNotifications();
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
        console.error('Error clearing notifications:', error);
        this.notificationsError = 'Failed to clear notifications.';
        this.isLoadingNotifications = false;
      }
    });
  }

  loadMyEvents(): void {
    // Load events from database
    this.apiService.getEvents().subscribe({
      next: (response: any) => {
        const events = Array.isArray(response) ? response : [];
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        // Only keep events this member is registered for AND that are not past/closed
        const upcoming = events.filter((e: any) => {
          const isRegistered = e.attendees?.some((a: any) => a.email === this.currentUser?.email);
          if (!isRegistered) return false;

          // Exclude explicitly cancelled or completed events
          if (e.status === 'CANCELLED' || e.status === 'COMPLETED') {
            return false;
          }

          const now = new Date();
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

          // Exclude events with past end dates
          if (e.endDate) {
            const endDate = new Date(e.endDate);
            const endDay = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
            if (endDay < today) {
              return false;
            }
            if (endDay.getTime() === today.getTime() && e.endTime) {
              const [h, m] = e.endTime.split(':').map(Number);
              const endTime = new Date(today);
              endTime.setHours(h, m ?? 0, 0, 0);
              if (endTime < now) return false;
            }
          } else if (e.startDate) {
            const startDate = new Date(e.startDate);
            const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
            if (startDay < today) {
              return false;
            }
          }

          return true;
        });

        // Map and sort by date ascending
        this.myEvents = upcoming
          .map((e: any) => this.mapToAppEvent(e))
          .sort((a: any, b: any) => {
            const da = a.date ? new Date(a.date).getTime() : 0;
            const db = b.date ? new Date(b.date).getTime() : 0;
            return da - db;
          });
      },
      error: (error) => {
        console.error('Error loading events:', error);
        this.myEvents = [];
      }
    });
  }

  loadAllEvents(): void {
    this.isLoading = true;
    this.apiService.getEvents().subscribe({
      next: (response: any) => {
        const events = Array.isArray(response) ? response : [];
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        // Only show published events to members that are not old (end date not in past)
        const publishedEvents = events.filter((e: any) => {
          if (e.status !== 'PUBLISHED') {
            return false;
          }

          const now = new Date();
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

          // Exclude events with past end dates
          if (e.endDate) {
            const endDate = new Date(e.endDate);
            const endDay = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
            if (endDay < today) {
              return false;
            }
            if (endDay.getTime() === today.getTime() && e.endTime) {
              const [h, m] = e.endTime.split(':').map(Number);
              const endTime = new Date(today);
              endTime.setHours(h, m ?? 0, 0, 0);
              if (endTime < now) return false;
            }
          } else if (e.startDate) {
            const startDate = new Date(e.startDate);
            const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
            if (startDay < today) {
              return false;
            }
          }
          return true;
        });

        // Map registrationCount from backend to registeredCount for frontend
        this.allEvents = publishedEvents.map((e: any) => {
          // Robust image mapping with protection against missing local assets
          let image = this.resolveEventImageUrl(e.imageUrl || e.image);

          if (!image && e.poster) {
            image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${e.id}`;
          }
          if (!image) {
            image = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop';
          }

          return {
            ...e,
            title: e.name || e.title,
            date: e.startDate || e.date,
            location: e.location || e.venue,
            image: image,
            registeredCount: e.registrationCount || e.registeredCount || 0,
            totalRegisteredSeats: e.totalRegisteredSeats !== undefined ? e.totalRegisteredSeats : (e.registrationCount || e.registeredCount || 0),
            availableSeats: e.availableSeats !== undefined ? e.availableSeats : (e.capacity ? e.capacity - (e.totalRegisteredSeats || 0) : null)
          };
        });
        this.filteredEvents = [...this.allEvents];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading events:', error);
        this.allEvents = [];
        this.filteredEvents = [];
        this.isLoading = false;
      }
    });
  }

  mapToAppEvent(event: any): AppEvent {
    // Robust image mapping with protection against missing local assets
    let image = this.resolveEventImageUrl(event.imageUrl || event.image);

    if (!image && event.poster) {
      image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${event.id}`;
    }
    if (!image) {
      image = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop';
    }

    return {
      id: event.id,
      title: event.name || event.title,
      date: event.startDate || event.date,
      endDate: event.endDate,
      location: event.location || event.venue,
      venueUrl: event.onlineLink || event.venueUrl,
      mode: event.mode || (event.locationType === 'ONLINE' ? 'ONLINE' : event.locationType === 'HYBRID' ? 'HYBRID' : 'OFFLINE'),
      category: event.category || event.type,
      type: event.visibility === 'MEMBERS_ONLY' ? 'Member Only' : 'Public',
      price: event.price || event.pricing?.memberPrice || event.memberPrice || 0,
      guestPrice: event.pricing?.nonMemberPrice || event.nonMemberPrice || 0,
      description: event.description || event.shortDescription,
      speaker: event.speaker || '',
      registeredCount: event.registrationCount || event.registeredCount || 0,
      totalRegisteredSeats: event.totalRegisteredSeats !== undefined ? event.totalRegisteredSeats : (event.registrationCount || event.registeredCount || 0),
      availableSeats: event.availableSeats !== undefined ? event.availableSeats : null,
      maxCapacity: event.capacity || event.maxCapacity,
      status: event.status,
      isRegistered: event.isRegistered,
      attendees: event.attendees || [],
      image: image,
      // Preserve pricing information for the modal
      pricingType: event.pricingType,
      memberPrice: event.memberPrice,
      nonMemberPrice: event.nonMemberPrice,
      pricing: event.pricing
    } as any;
  }

  onSelectView(view: DashboardView): void {
    this.currentView = view;
    if (view === 'EVENTS') {
      this.loadAllEvents();
    }
    // BENCH resources will be loaded by the BenchResourcesComponent
  }

  onNavigate(view: string): void {
    this.navigate.emit(view);
  }

  onViewEvent(event: AppEvent | any): void {
    // If event has an ID, fetch full details to ensure we have all pricing information
    if (event.id) {
      this.isLoading = true;
      this.apiService.getEventById(event.id).subscribe({
        next: (fullEvent: any) => {
          // Robust image mapping with protection against missing local assets
          let image = this.resolveEventImageUrl(fullEvent.imageUrl || fullEvent.image);

          if (!image && fullEvent.poster) {
            image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${fullEvent.id}`;
          }
          if (!image) {
            image = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop';
          }

          this.selectedEvent = {
            ...fullEvent,
            image: image,
            registeredCount: fullEvent.registrationCount || fullEvent.registeredCount || 0,
            totalRegisteredSeats: fullEvent.totalRegisteredSeats !== undefined ? fullEvent.totalRegisteredSeats : (fullEvent.registrationCount || fullEvent.registeredCount || 0),
            availableSeats: fullEvent.availableSeats !== undefined ? fullEvent.availableSeats : null
          };
          this.showEventDetailModal = true;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading event details:', error);
          // Fallback to using the event we have
          this.selectedEvent = {
            ...event,
            registeredCount: event.registrationCount || event.registeredCount || 0,
            totalRegisteredSeats: event.totalRegisteredSeats !== undefined ? event.totalRegisteredSeats : (event.registrationCount || event.registeredCount || 0),
            availableSeats: event.availableSeats !== undefined ? event.availableSeats : null
          };
          this.showEventDetailModal = true;
          this.isLoading = false;
        }
      });
    } else {
      // If no ID, use the event as-is
      this.selectedEvent = {
        ...event,
        registeredCount: event.registrationCount || event.registeredCount || 0
      };
      this.showEventDetailModal = true;
    }
  }

  closeEventDetailModal(): void {
    this.showEventDetailModal = false;
    this.selectedEvent = null;
  }

  onEventRegistered(): void {
    // Reload events after registration
    this.loadMyEvents();
    if (this.currentView === 'EVENTS') {
      this.loadAllEvents();
    }
  }

  onEventPaymentRequest(paymentData: any): void {
    // Handle payment request from event detail modal
    if (paymentData && paymentData.event) {
      this.selectedEvent = {
        ...paymentData.event,
        quantity: paymentData.quantity || 1,
        selectedTicketTypeId: paymentData.selectedTicketTypeId || null,
        selectedTicketType: paymentData.selectedTicketType || null
      };
      this.showEventDetailModal = false; // Close event detail modal
      this.showPaymentModal = true; // Open payment modal
    }
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
    this.selectedEvent = null;
  }

  onPaymentSuccess(paymentResult?: any): void {
    // Handle payment success
    if (paymentResult && paymentResult.type === 'EVENT') {
      // Event payment and registration completed
      this.showPaymentModal = false;
      this.selectedEvent = null;
      // Reload events
      this.loadMyEvents();
      if (this.currentView === 'EVENTS') {
        this.loadAllEvents();
      }
    }
  }

  getMyResources(): any[] {
    return [];
  }

  applyFilters(): void {
    this.filteredEvents = this.allEvents.filter((event: any) => {
      // Event Type filter
      const eventType = event.type || event.category || '';
      if (this.eventTypeFilter !== 'All Types' && eventType !== this.eventTypeFilter) {
        return false;
      }

      // Date Range filter
      if (this.dateRangeFilter !== 'All Dates') {
        const eventDate = event.startDate || event.date;
        if (!eventDate) {
          return false; // Skip events without dates
        }

        const eventDateObj = new Date(eventDate);
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        // Get start and end of current week (Sunday to Saturday)
        const dayOfWeek = today.getDay();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - dayOfWeek);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);

        // Get start and end of current month
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);

        // Get start and end of next month
        const startOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0, 23, 59, 59, 999);

        switch (this.dateRangeFilter) {
          case 'This Week':
            if (eventDateObj < startOfWeek || eventDateObj > endOfWeek) {
              return false;
            }
            break;
          case 'This Month':
            if (eventDateObj < startOfMonth || eventDateObj > endOfMonth) {
              return false;
            }
            break;
          case 'Next Month':
            if (eventDateObj < startOfNextMonth || eventDateObj > endOfNextMonth) {
              return false;
            }
            break;
        }
      }

      // Cost filter
      const isFree = this.isFreeEvent(event);
      if (this.costFilter === 'Free' && !isFree) {
        return false;
      }
      if (this.costFilter === 'Paid' && isFree) {
        return false;
      }

      // Search filter
      const eventName = (event.name || event.title || '').toLowerCase();
      const eventDesc = (event.description || event.shortDescription || '').toLowerCase();
      if (this.searchQuery && !eventName.includes(this.searchQuery.toLowerCase()) &&
        !eventDesc.includes(this.searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'CONFERENCE': 'bg-blue-500',
      'NETWORKING': 'bg-green-500',
      'WORKSHOP': 'bg-purple-500',
      'WEBINAR': 'bg-orange-500'
    };
    return colors[category] || 'bg-slate-500';
  }

  getEventCost(event: any): string {
    const pricingType = event.pricingType || event.pricing?.type;

    // Completely free event
    if (pricingType === 'FREE' || (!pricingType && !event.price && !event.memberPrice && !event.pricing?.memberPrice)) {
      return 'Free';
    }

    // Paid / discounted events - show price based on member type
    if (pricingType === 'PAID' || pricingType === 'DISCOUNTED') {
      const memberPrice = event.memberPrice || event.pricing?.memberPrice || 0;
      const freeMemberPrice = event.nonMemberPrice || event.pricing?.nonMemberPrice || 0;
      const isPaidMember = this.isPaidMember();

      if (isPaidMember && memberPrice > 0) {
        return `₹${memberPrice.toLocaleString('en-IN')}`;
      }
      if (!isPaidMember && freeMemberPrice > 0) {
        return `₹${freeMemberPrice.toLocaleString('en-IN')}`;
      }

      // Fallbacks if type is missing
      if (memberPrice > 0) {
        return `₹${memberPrice.toLocaleString('en-IN')}`;
      }
      if (freeMemberPrice > 0) {
        return `₹${freeMemberPrice.toLocaleString('en-IN')}`;
      }
    }

    // Fallback to legacy single price
    const price = event.price || event.pricing?.memberPrice || 0;
    if (price === 0) {
      return 'Free';
    }
    return `₹${price.toLocaleString('en-IN')}`;
  }

  // Helper to determine if an event should be treated as Free or Paid
  isFreeEvent(event: any): boolean {
    if (!event) return true;

    const pricingType = event.pricingType || event.pricing?.type;
    const memberPrice = event.memberPrice ?? event.pricing?.memberPrice ?? 0;
    const nonMemberPrice = event.nonMemberPrice ?? event.pricing?.nonMemberPrice ?? 0;
    const basePrice = event.price ?? 0;

    // Explicit FREE type
    if (pricingType === 'FREE') {
      return true;
    }

    // Explicit PAID / DISCOUNTED type
    if (pricingType === 'PAID' || pricingType === 'DISCOUNTED') {
      return memberPrice <= 0 && nonMemberPrice <= 0;
    }

    // Fallback to legacy price field
    return basePrice === 0;
  }

  private isPaidMember(): boolean {
    return !!this.currentUser && this.currentUser.type === 'PREMIUM';
  }

  getMembershipLabel(): string {
    if (!this.currentUser) {
      return 'GUEST';
    }
    if (this.currentUser.role === 'admin') {
      return 'ADMIN';
    }
    if (this.currentUser.currentPlanName && this.authService.hasSelectedPlan()) {
      return this.currentUser.currentPlanName.toUpperCase();
    }
    if (this.currentUser.planExpiryDate && new Date(this.currentUser.planExpiryDate) < new Date(new Date().toDateString())) {
      return 'PLAN EXPIRED';
    }
    return 'NO PLAN';
  }

  canUpgradePlan(): boolean {
    return !!this.currentUser && this.currentUser.role !== 'admin';
  }

  formatEventDateTime(event: any, useStartDate: boolean = true): string {
    if (!event) return 'N/A';

    // Backend sends separate startDate (LocalDate) and startTime (LocalTime)
    // Combine them properly for display
    const dateField = useStartDate ? (event.startDate || event.date) : event.endDate;
    const timeField = useStartDate ? event.startTime : event.endTime;

    if (!dateField) return 'N/A';

    try {
      let dateStr = '';
      let timeStr = '';

      // Extract date from startDate/endDate (LocalDate format: "YYYY-MM-DD")
      if (typeof dateField === 'string') {
        dateStr = dateField.split('T')[0]; // Handle "YYYY-MM-DD" or "YYYY-MM-DDTHH:mm:ss"
      } else {
        const date = new Date(dateField);
        if (isNaN(date.getTime())) return 'Invalid Date';
        dateStr = date.toISOString().split('T')[0];
      }

      // Extract time from startTime/endTime (LocalTime format: "HH:mm:ss" or "HH:mm")
      if (timeField) {
        if (typeof timeField === 'string') {
          // LocalTime from backend: "14:30:00" or "14:30"
          timeStr = timeField.split(':').slice(0, 2).join(':'); // Get "HH:mm"
        } else {
          // If it's a number or other format, try to extract
          timeStr = String(timeField);
        }
      } else {
        // Fallback: try to extract from combined datetime if available
        if (typeof dateField === 'string' && dateField.includes('T')) {
          const parts = dateField.split('T');
          if (parts[1]) {
            timeStr = parts[1].split(':').slice(0, 2).join(':');
          }
        } else if (dateField instanceof Date) {
          const hours = String(dateField.getHours()).padStart(2, '0');
          const minutes = String(dateField.getMinutes()).padStart(2, '0');
          timeStr = `${hours}:${minutes}`;
        }
      }

      // Combine date and time
      if (dateStr && timeStr) {
        const combinedDateTime = new Date(`${dateStr}T${timeStr}`);
        if (isNaN(combinedDateTime.getTime())) return 'Invalid Date';

        // Format: "MMM d, y 'at' h:mm a" (e.g., "Jan 15, 2024 at 2:30 PM")
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        };

        return combinedDateTime.toLocaleString('en-US', options);
      } else if (dateStr) {
        // If only date available, format just the date
        const date = new Date(dateStr);
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        };
        return date.toLocaleDateString('en-US', options);
      }

      return 'N/A';
    } catch (error) {
      return 'Invalid Date';
    }
  }
}



