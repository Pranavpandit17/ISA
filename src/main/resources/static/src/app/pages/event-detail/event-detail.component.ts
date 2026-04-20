import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Event } from '../../models/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { AuthService, User } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { AppModalService } from '../../services/app-modal.service';
import { formatMemberFacingCost, resolveMemberFacingUnitPrice } from '../../utils/event-member-pricing';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe, FormsModule],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() event: Event | any = null;
  @Output() navigate = new EventEmitter<string>();
  @Output() register = new EventEmitter<Event>();
  @Output() openPayment = new EventEmitter<void>();

  currentUser: User | null = null;
  isLoading = false;
  isRegistering = false;
  errorMessage = '';
  quantity: number = 1;
  selectedTicketTypeId: number | null = null;
  ticketTypes: any[] = [];
  isLoadingTickets: boolean = false;
  /** Routed under `/old-events/:id` — keep navigation inside Old Events archive */
  isArchiveContext = false;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private modalService: AppModalService
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    combineLatest([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.isArchiveContext = !!data['eventArchive'];
      const id = params['id'];
      if (!id) return;
      this.loadEventDetails(String(id));
    });
  }

  formatEventKindLabel(raw: string | null | undefined): string {
    if (!raw) return '';
    return String(raw).replace(/_/g, ' ');
  }

  /** Archive views only show informational ticket status */
  getTicketArchiveLabel(ticket: any): string {
    if (!ticket) return '';
    return this.isTicketAvailable(ticket) ? 'Recorded tier' : 'Sold out (at time of event)';
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

  private loadEventDetails(id: string): void {
    this.isLoading = true;
    this.apiService.getEventById(Number(id)).subscribe({
      next: (data: any) => {
        // Robust image mapping
        let image = this.resolveEventImageUrl(data.imageUrl || data.image);
        if (!image && data.poster) {
          image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${data.id}`;
        }
        if (!image) {
          image = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop';
        }

        this.event = {
          ...data,
          title: data.name || data.title,
          date: data.startDate || data.date,
          location: data.location || data.venue,
          image: image
        };
        const archive = this.route.snapshot.data['eventArchive'] === true;
        this.ticketTypes = Array.isArray(data.ticketTypes) ? data.ticketTypes : [];
        this.isLoading = false;
        if (!archive) {
          this.loadTicketTypes();
        } else {
          this.isLoadingTickets = false;
        }
      },
      error: (err) => {
        console.error('Error fetching event:', err);
        this.isLoading = false;
      }
    });
  }

  private loadTicketTypes(): void {
    if (!this.event || !this.event.id) return;
    this.isLoadingTickets = true;
    this.apiService.getEventById(this.event.id).subscribe({
      next: (data: any) => {
        this.ticketTypes = data.ticketTypes || [];
        this.initializeTicketSelection();
        this.isLoadingTickets = false;
      },
      error: (err) => {
        console.error('Error loading ticket types:', err);
        this.isLoadingTickets = false;
      }
    });
  }

  private initializeTicketSelection(): void {
    if (this.isArchiveContext) {
      const tickets = this.getTicketTypes();
      this.selectedTicketTypeId = tickets.length ? tickets[0].id : null;
      return;
    }
    const visible = this.getVisibleTicketTypes();
    if (!visible.length) {
      this.selectedTicketTypeId = null;
      return;
    }
    if (this.currentUser) {
      const level = this.getActivePlanLevel();
      const paid = visible.find(t => t.type === 'MEMBER' && this.isTicketAvailable(t));
      const freeM = visible.find(t => t.type === 'FREE_MEMBER' && this.isTicketAvailable(t));
      let preferred =
        level >= 2 && paid ? paid : level === 1 && freeM ? freeM : undefined;
      if (!preferred) {
        preferred = visible.find(t => this.isTicketAvailable(t));
      }
      this.selectedTicketTypeId = (preferred ?? visible[0]).id;
      return;
    }
    const firstAvailable = visible.find(t => this.isTicketAvailable(t));
    this.selectedTicketTypeId = (firstAvailable ?? visible[0]).id;
  }

  getTicketTypes(): any[] {
    if (!this.event) return [];
    const list = Array.isArray(this.ticketTypes) ? this.ticketTypes : [];
    return list
      .filter((t: any) => t && t.id != null)
      .map((t: any) => ({
        ...t,
        type: String(t.type || '').toUpperCase(),
        price: Number(t.price || 0),
        availableQuantity: t.availableQuantity != null ? Number(t.availableQuantity) : null
      }));
  }

  /**
   * Registration view: only tiers the current user may care about. Archive shows all tiers.
   */
  getVisibleTicketTypes(): any[] {
    if (this.isArchiveContext) {
      return this.getTicketTypes();
    }
    const all = this.getTicketTypes();
    if (!all.length) return [];

    const isAdmin =
      this.currentUser?.role === 'admin' || this.currentUser?.type === 'ADMIN';
    if (isAdmin) return all;

    const level = this.getActivePlanLevel();

    if (!this.currentUser || level === 0) {
      return all.filter(t => {
        const ty = String(t.type || '').toUpperCase();
        if (ty === 'NON_MEMBER' || ty === 'EARLY_BIRD') return true;
        if (!ty && Number(t.price || 0) === 0) return true;
        return false;
      });
    }

    let visible = all.filter(t => this.isTicketEligible(t));

    const hasMember = all.some(t => String(t.type || '').toUpperCase() === 'MEMBER');
    const hasFreeMember = all.some(t => String(t.type || '').toUpperCase() === 'FREE_MEMBER');

    if (level >= 2 && hasMember) {
      visible = visible.filter(t => String(t.type || '').toUpperCase() !== 'FREE_MEMBER');
    }
    if (level === 1 && hasFreeMember) {
      visible = visible.filter(t => String(t.type || '').toUpperCase() !== 'MEMBER');
    }

    return visible;
  }

  selectTicket(ticket: any): void {
    if (this.isArchiveContext || !ticket) return;
    this.selectedTicketTypeId = ticket.id;
    this.quantity = 1;
    this.validateQuantity();
  }

  isTicketAvailable(ticket: any): boolean {
    if (!ticket) return false;
    return ticket.availableQuantity == null || ticket.availableQuantity > 0;
  }

  isEarlyBirdOpen(): boolean {
    if (!this.event?.earlyBirdEndDate) return true;
    const now = new Date();
    const end = new Date(this.event.earlyBirdEndDate);
    end.setHours(23, 59, 59, 999);
    return now <= end;
  }

  isTicketEligible(ticket: any): boolean {
    if (!ticket) return false;

    const typeStr = String(ticket.type || '').toUpperCase();
    const priceNum = Number(ticket.price ?? 0);

    if (!typeStr && priceNum === 0) return true;

    if (!this.currentUser) {
      if (typeStr === 'NON_MEMBER' || typeStr === 'EARLY_BIRD') return true;
      return priceNum === 0;
    }

    const isAdmin = this.currentUser.role === 'admin' || this.currentUser.type === 'ADMIN';
    if (isAdmin) return true;

    const level = this.getActivePlanLevel();

    switch (typeStr) {
      case 'VIP':
        return level >= 3;
      case 'MEMBER':
        return level >= 2;
      case 'FREE_MEMBER':
        return level >= 1;
      case 'NON_MEMBER':
        return level < 2;
      case 'EARLY_BIRD':
        return this.isEarlyBirdOpen();
      default:
        return priceNum === 0;
    }
  }

  getTicketStatus(ticket: any): string {
    if (!this.isTicketAvailable(ticket)) return 'Sold out';
    if (ticket.type === 'EARLY_BIRD' && !this.isEarlyBirdOpen()) return 'Closed';
    if (!this.isTicketEligible(ticket)) return 'Not eligible';
    if (ticket.availableQuantity != null && ticket.availableQuantity <= 10) return 'Few left';
    return 'Available';
  }

  private getActivePlanLevel(): number {
    if (!this.currentUser) return 0;

    const isAdmin = this.currentUser.role === 'admin' || this.currentUser.type === 'ADMIN';
    if (isAdmin) return 999;

    if (!this.currentUser.currentPlanId) {
      return 0;
    }

    if (this.currentUser.planExpiryDate) {
      const expiry = new Date(this.currentUser.planExpiryDate);
      if (expiry < new Date(new Date().toDateString())) {
        return 0;
      }
    }

    return this.currentUser.currentPlanLevel || 0;
  }

  getSelectedTicket(): any {
    const list = this.getTicketTypes();
    if (!list.length) return null;
    return list.find(t => t.id === this.selectedTicketTypeId) || list[0];
  }

  getSelectedTicketReason(): string {
    const ticket = this.getSelectedTicket();
    if (!ticket) return 'Please select a ticket type.';
    if (!this.currentUser) return 'Please login to continue.';
    if (!this.isTicketAvailable(ticket)) return 'Selected ticket is sold out.';
    if (ticket.type === 'EARLY_BIRD' && !this.isEarlyBirdOpen()) return 'Early bird window is closed.';
    if (!this.isTicketEligible(ticket)) {
      if (ticket.type === 'MEMBER') return 'This paid member tier requires an active paid membership.';
      if (ticket.type === 'FREE_MEMBER') return 'This tier requires an active membership.';
      if (ticket.type === 'NON_MEMBER') return 'This ticket is for non-members only.';
      if (ticket.type === 'VIP') return 'VIP ticket is restricted.';
      return 'You are not eligible for this ticket.';
    }
    return '';
  }

  increaseQuantity(): void {
    if (this.quantity < this.getMaxQuantity()) {
      this.quantity++;
    }
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  validateQuantity(): void {
    const max = this.getMaxQuantity();
    if (this.quantity < 1) this.quantity = 1;
    if (this.quantity > max) this.quantity = max;
  }

  getMaxQuantity(): number {
    if (!this.event) return 1;
    const ticket = this.getSelectedTicket();
    const ticketRemaining = ticket?.availableQuantity != null ? Number(ticket.availableQuantity) : null;
    const capacity = this.event.capacity || this.event.maxCapacity;
    const registeredSeats = this.event.totalRegisteredSeats !== undefined 
      ? this.event.totalRegisteredSeats 
      : (this.event.registeredCount || 0);
    const capacityRemaining = capacity ? Math.max(0, capacity - registeredSeats) : null;
    
    if (ticketRemaining != null && capacityRemaining != null) return Math.max(1, Math.min(ticketRemaining, capacityRemaining));
    if (ticketRemaining != null) return Math.max(1, ticketRemaining);
    if (capacityRemaining != null) return Math.max(1, capacityRemaining);
    return 10;
  }

  getEventCost(): string {
    const ticket = this.getSelectedTicket();
    if (ticket) {
      return ticket.price === 0 ? 'Complementary' : `₹${ticket.price.toLocaleString('en-IN')}`;
    }
    if (!this.event) return 'TBA';
    return formatMemberFacingCost(this.event, this.currentUser);
  }

  getTotalPrice(): string {
    const ticket = this.getSelectedTicket();
    if (ticket) {
      const total = ticket.price * this.quantity;
      return total === 0 ? 'Complementary' : `₹${total.toLocaleString('en-IN')}`;
    }
    return 'TBA';
  }

  isSelectedTicketPayable(): boolean {
    const t = this.getSelectedTicket();
    if (!t) return false;
    return this.isTicketAvailable(t) && this.isTicketEligible(t);
  }

  canProceedRegistration(): boolean {
    if (!this.currentUser) return true; // Show login message instead of disabling
    return this.isSelectedTicketPayable();
  }

  isUserRegistered(): boolean {
    if (!this.currentUser || !this.event) return false;
    // Check local isRegistered flag and the attendees list
    return this.event.isRegistered || this.event.attendees?.some((a: any) => a.email === this.currentUser?.email) || false;
  }

  getRegisterButtonText(): string {
    if (this.isRegistering) return 'Processing Commitment...';
    if (this.isEventClosed()) return 'Event Concluded';
    if (this.isUserRegistered()) return 'Registration Secured';
    if (!this.currentUser) return 'Login to Register';
    if (!this.isSelectedTicketPayable()) return 'Ticket Unavailable';
    return 'Commit to Attendance';
  }

  isEventClosed(): boolean {
    if (!this.event) return false;
    
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    // Check if event has past end date
    if (this.event.endDate) {
      const endDate = new Date(this.event.endDate);
      endDate.setHours(0, 0, 0, 0);
      if (endDate < now) {
        return true;
      }
    } else if (this.event.startDate) {
      // If no endDate, check startDate as fallback
      const startDate = new Date(this.event.startDate);
      startDate.setHours(0, 0, 0, 0);
      if (startDate < now) {
        return true;
      }
    }
    
    // Check if event is explicitly cancelled or completed
    if (this.event.status === 'CANCELLED' || this.event.status === 'COMPLETED') {
      return true;
    }
    
    return false;
  }

  // Format schedule time (LocalTime from backend) as HH:mm
  formatScheduleTime(time: string | null | undefined): string {
    if (!time) return '';
    try {
      return time.split(':').slice(0, 2).join(':');
    } catch {
      return String(time);
    }
  }

  formatEventDateTime(event: any, useStartDate: boolean = true): string {
    if (!event) return 'N/A';
    
    const dateField = useStartDate ? (event.startDate || event.date) : event.endDate;
    const timeField = useStartDate ? event.startTime : event.endTime;
    
    if (!dateField) return 'N/A';
    
    try {
      let dateStr = '';
      let timeStr = '';
      
      if (typeof dateField === 'string') {
        dateStr = dateField.split('T')[0];
      } else {
        const date = new Date(dateField);
        if (isNaN(date.getTime())) return 'Invalid Date';
        dateStr = date.toISOString().split('T')[0];
      }
      
      if (timeField) {
        if (typeof timeField === 'string') {
          timeStr = timeField.split(':').slice(0, 2).join(':');
        } else {
          timeStr = String(timeField);
        }
      }
      
      if (dateStr && timeStr) {
        const combinedDateTime = new Date(`${dateStr}T${timeStr}`);
        if (isNaN(combinedDateTime.getTime())) return 'Invalid Date';
        
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

  onNavigate(view: string): void {
    if (view === 'EVENTS') {
      const archive = this.route.snapshot.data['eventArchive'] === true;
      this.router.navigate([archive ? '/old-events' : '/events']);
    } else {
      this.navigate.emit(view);
    }
  }

  onRegister(): void {
    if (!this.event) return;

    if (!this.currentUser) {
      this.toastService.info('Please login to register for events');
      this.modalService.openAuth('LOGIN');
      return;
    }

    if (this.isUserRegistered()) return;

    const ticket = this.getSelectedTicket();
    if (!ticket) {
      this.toastService.error('Please select a ticket type');
      return;
    }

    if (!this.isTicketEligible(ticket)) {
      this.toastService.error(this.getSelectedTicketReason());
      return;
    }

    if (ticket.price > 0) {
      // Open payment modal
      this.modalService.openPayment({ 
        event: this.event, 
        quantity: this.quantity,
        ticketTypeId: ticket.id,
        selectedTicketType: ticket,
        amount: ticket.price * this.quantity
      });
      return;
    }

    this.isRegistering = true;
    this.apiService.registerForEvent(this.event.id, { 
      quantity: this.quantity,
      ticketTypeId: ticket.id
    }).subscribe({
      next: () => {
        this.isRegistering = false;
        this.toastService.success('Successfully registered for the event!');
        this.event.isRegistered = true;
        // Optionally reload to update capacity
        this.loadEventDetails(this.event.id.toString());
      },
      error: (err) => {
        this.isRegistering = false;
        console.error('Registration failed:', err);
        this.toastService.error(err.error?.message || 'Registration failed. Please try again.');
      }
    });
  }

  isEventPaid(): boolean {
    if (!this.event) return false;
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === 'PAID' || pricingType === 'DISCOUNTED') return true;

    const ticket = this.getSelectedTicket();
    if (ticket) return Number(ticket.price || 0) > 0;

    return resolveMemberFacingUnitPrice(this.event, this.currentUser) > 0;
  }

  isEventPaidForUser(): boolean {
    return this.isEventPaid();
  }
}



