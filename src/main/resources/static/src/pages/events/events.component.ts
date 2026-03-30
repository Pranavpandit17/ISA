import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Event, ViewState } from '../../models/interfaces';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { MembershipService } from '../../services/membership.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe, FormsModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @Output() navigate = new EventEmitter<ViewState>();
  @Output() viewEvent = new EventEmitter<Event>();

  events: Event[] = [];
  filteredEvents: Event[] = [];
  currentUser: any = null;

  // Filter properties
  eventTypeFilter = 'All Types';
  dateRangeFilter = 'All Dates';
  costFilter = 'All Costs';
  searchQuery = '';

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private apiService: ApiService,
    private membershipService: MembershipService
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    this.loadAllUpcomingEvents();
  }

  private loadAllUpcomingEvents(): void {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    this.apiService.getEvents().subscribe({
      next: (response: any) => {
        const allEvents = Array.isArray(response) ? response : [];

        // Only show published events that are upcoming (end date/time not in past)
        const upcomingPublished = allEvents.filter((e: any) => {
          if (e.status !== 'PUBLISHED') {
            return false;
          }

          // Check end date/time first
          if (e.endDate) {
            const endDateTime = new Date(e.endDate);
            if (e.endTime) {
              const [h, m] = e.endTime.split(':').map(Number);
              endDateTime.setHours(h, m ?? 0, 0, 0);
            }
            if (endDateTime < new Date()) {
              return false;
            }
          } else if (e.startDate) {
            // Fallback: use start date/time
            const startDateTime = new Date(e.startDate);
            if (e.startTime) {
              const [h, m] = e.startTime.split(':').map(Number);
              startDateTime.setHours(h, m ?? 0, 0, 0);
            }
            if (startDateTime < new Date()) {
              return false;
            }
          }

          return true;
        });

        // Map to Event-like objects used by the table
        this.events = upcomingPublished.map((e: any) => ({
          ...(e as any),
          title: e.name || e.title,
          date: e.startDate || e.date,
          location: e.location || e.venue,
          category: e.category || e.type,
          registeredCount: e.registrationCount || e.registeredCount || 0,
          totalRegisteredSeats: e.totalRegisteredSeats || e.totalRegisteredSeats || 0, // Total seats (sum of quantities)
          availableSeats: e.availableSeats !== undefined ? e.availableSeats : (e.capacity ? e.capacity - (e.totalRegisteredSeats || 0) : null),
          maxCapacity: e.capacity || e.maxCapacity
        }));

        this.filteredEvents = [...this.events];
      },
      error: (error) => {
        console.error('Error loading events list:', error);
        this.events = [];
        this.filteredEvents = [];
      }
    });
  }

  onNavigate(view: ViewState): void {
    this.navigate.emit(view);
  }

  onViewEvent(event: Event): void {
    this.viewEvent.emit(event);
  }

  applyFilters(): void {
    this.filteredEvents = this.events.filter(event => {
      // Event Type filter
      if (this.eventTypeFilter !== 'All Types' && event.category !== this.eventTypeFilter) {
        return false;
      }

      // Date Range filter
      if (this.dateRangeFilter !== 'All Dates') {
        // Handle both Event interface (date) and API response (startDate)
        const eventDate = event.date || (event as any).startDate;
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

      // Cost filter (use pricingType + member/non-member prices)
      const isFree = this.isFreeEvent(event as any);
      if (this.costFilter === 'Free' && !isFree) {
        return false;
      }
      if (this.costFilter === 'Paid' && isFree) {
        return false;
      }

      // Search filter
      if (this.searchQuery && !event.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
          !event.description.toLowerCase().includes(this.searchQuery.toLowerCase())) {
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

  getEventCost(event: Event | any): string {
    // Determine pricing type
    const pricingType = event.pricingType || event.pricing?.type;

    // Completely free event
    if (pricingType === 'FREE' || (!pricingType && !event.price && !event.memberPrice && !event.pricing?.memberPrice)) {
      return 'Free';
    }

    // Paid / discounted events - show price based on member type
    if (pricingType === 'PAID' || pricingType === 'DISCOUNTED') {
      const memberPrice = event.memberPrice || event.pricing?.memberPrice || 0;
      const freeMemberPrice = event.nonMemberPrice || event.pricing?.nonMemberPrice || 0; // stored in nonMemberPrice
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
  private isFreeEvent(event: any): boolean {
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
    const plan = this.membershipService.getSelectedPlan();
    if (!plan) return false;
    const price = plan.price || 0;
    return price > 0;
  }

  formatEventDateTime(event: Event | any, useStartDate: boolean = true): string {
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

