import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { AuthService, User } from '../../../services/auth.service';
import { MembershipService } from '../../../services/membership.service';

@Component({
  selector: 'app-event-detail-modal',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe, FormsModule],
  templateUrl: './event-detail-modal.component.html',
  styleUrls: ['./event-detail-modal.component.css']
})
export class EventDetailModalComponent implements OnInit, OnChanges {
  @Input() show = false;
  @Input() event: any = null;
  @Output() close = new EventEmitter<void>();
  @Output() registered = new EventEmitter<void>();
  @Output() openPayment = new EventEmitter<any>(); // Emit event to open payment modal

  currentUser: User | null = null;
  isLoading = false;
  isRegistering = false;
  isProcessingPayment = false;
  errorMessage = '';
  successMessage = '';
  quantity: number = 1;
  selectedTicketTypeId: number | null = null;

  // Attendance (admin)
  attendees: any[] = [];
  isLoadingAttendees = false;
  attendanceError = '';
  attendanceSuccess = '';
  showAttendance = false;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private membershipService: MembershipService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.initializeTicketSelection();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['event']) {
      this.initializeTicketSelection();
      this.quantity = 1;
    }
  }

  onClose(): void {
    this.close.emit();
    this.errorMessage = '';
    this.successMessage = '';
    this.quantity = 1; // Reset quantity to default
    this.selectedTicketTypeId = null;
  }

  onRegister(): void {
    // Always refresh the current user from AuthService in case login happened after modal was created
    this.currentUser = this.authService.getCurrentUser();

    if (!this.currentUser) {
      this.errorMessage = 'Please login to register for events';
      return;
    }

    if (!this.event || !this.event.id) {
      this.errorMessage = 'Event information is missing';
      return;
    }

    // Check if event is closed
    if (this.isEventClosed()) {
      this.errorMessage = 'This event is already closed. Registration is no longer available.';
      return;
    }

    if (this.quantity < 1) {
      this.errorMessage = 'Quantity must be at least 1';
      return;
    }
    const selectedTicket = this.getSelectedTicketType();
    if (this.getTicketTypes().length > 0) {
      if (!selectedTicket) {
        this.errorMessage = 'Please select a ticket type.';
        return;
      }
      if (!this.isTicketAvailable(selectedTicket)) {
        this.errorMessage = 'Selected ticket is sold out.';
        return;
      }
      if (!this.isTicketEligible(selectedTicket)) {
        this.errorMessage = 'You are not eligible for the selected ticket.';
        return;
      }
    }

    if (this.isEventPaid()) {
      const currentQty = this.quantity;
      // Close event detail modal and open payment modal
      this.onClose();
      // Emit event with event data and quantity to parent
      this.openPayment.emit({
        event: this.event,
        quantity: currentQty,
        selectedTicketTypeId: selectedTicket.id,
        selectedTicketType: selectedTicket
      });
      return;
    }

    // For free events, proceed with registration directly
    if (!this.isEventPaid()) {
      this.performRegistration();
    }
  }

  private performRegistration(paymentId?: number): void {
    // Check capacity - use totalRegisteredSeats (sum of quantities) instead of registeredCount (number of registrations)
    const currentRegisteredSeats = this.event.totalRegisteredSeats !== undefined 
      ? this.event.totalRegisteredSeats 
      : (this.event.registrationCount || this.event.registeredCount || 0);
    const capacity = this.event.capacity || this.event.maxCapacity;
    if (capacity && (currentRegisteredSeats + this.quantity) > capacity) {
      this.errorMessage = `Only ${capacity - currentRegisteredSeats} spots available. Please reduce quantity.`;
      return;
    }

    this.isRegistering = true;
    this.errorMessage = '';
    // Keep any existing successMessage (e.g. from dummy payment)

    const selectedTicket = this.getSelectedTicketType();
    const registrationData: any = {
      quantity: this.quantity,
      ticketTypeId: selectedTicket?.id || null
    };
    if (paymentId) {
      registrationData.paymentId = paymentId;
    }

    this.apiService.registerForEvent(this.event.id, registrationData).subscribe({
      next: (response: any) => {
        this.isRegistering = false;

        // Optimistically update capacity/registered seats in UI
        const currentRegisteredSeats = this.event.totalRegisteredSeats !== undefined 
          ? this.event.totalRegisteredSeats 
          : (this.event.registrationCount || this.event.registeredCount || 0);
        const newSeatsCount = currentRegisteredSeats + this.quantity;
        this.event.totalRegisteredSeats = newSeatsCount;
        this.event.registeredCount = newSeatsCount; // Keep for backward compatibility
        this.event.registrationCount = newSeatsCount; // Keep for backward compatibility
        if (selectedTicket) {
          selectedTicket.availableQuantity = Math.max(0, (Number(selectedTicket.availableQuantity) || 0) - this.quantity);
        }

        this.successMessage = `Successfully registered ${this.quantity} ${this.quantity === 1 ? 'ticket' : 'tickets'} for the event!`;
        setTimeout(() => {
          this.registered.emit();
          this.onClose();
        }, 2000);
      },
      error: (error) => {
        this.isRegistering = false;
        this.errorMessage = error.error?.message || 'Error registering for event. Please try again.';
      }
    });
  }

  getEventPrice(): number {
    if (!this.event) return 0;
    const selected = this.getSelectedTicketType();
    if (selected) {
      return Number(selected.price || 0);
    }
    return Number(this.event.price || this.event.pricing?.memberPrice || 0);
  }

  getEventCost(): string {
    if (!this.event) return 'Free';
    
    // Check pricingType first
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === 'FREE' || (!pricingType && !this.event.price && !this.event.memberPrice && !this.event.pricing?.memberPrice)) {
      return 'Free';
    }
    
    // For paid events, show price based on member type
    if (pricingType === 'PAID' || pricingType === 'DISCOUNTED') {
      const memberPrice = this.event.memberPrice || this.event.pricing?.memberPrice || 0;
      const nonMemberPrice = this.event.nonMemberPrice || this.event.pricing?.nonMemberPrice || 0;
      const freeMemberPrice = nonMemberPrice; // renamed in UI
      const isPaidMember = this.isPaidMember();

      if (isPaidMember && memberPrice > 0) {
        return `₹${memberPrice.toLocaleString('en-IN')}`;
      }
      if (!isPaidMember && freeMemberPrice > 0) {
        return `₹${freeMemberPrice.toLocaleString('en-IN')}`;
      }

      // Fallbacks
      if (memberPrice > 0) {
        return `₹${memberPrice.toLocaleString('en-IN')}`;
      }
      if (freeMemberPrice > 0) {
        return `₹${freeMemberPrice.toLocaleString('en-IN')}`;
      }
    }
    
    // Fallback to old format
    const price = this.event.price || this.event.pricing?.memberPrice || 0;
    if (price === 0) {
      return 'Free';
    }
    return `₹${price.toLocaleString('en-IN')}`;
  }

  isEventPaid(): boolean {
    return this.getEventPrice() > 0;
  }

  isUserRegistered(): boolean {
    if (!this.currentUser || !this.event) return false;
    return this.event.attendees?.some((a: any) => a.email === this.currentUser?.email) || false;
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

  /**
   * "Member pricing / member eligibility" is based on plan level.
   * Current mapping:
   *  - level >= 2  => member
   *  - level < 2   => non-member
   */
  private isPaidMember(): boolean {
    return this.getActivePlanLevel() >= 2;
  }

  // Attendance management (admin only)
  canManageAttendance(): boolean {
    return this.currentUser?.role === 'admin';
  }

  toggleAttendance(): void {
    if (!this.canManageAttendance() || !this.event || !this.event.id) {
      return;
    }
    this.showAttendance = !this.showAttendance;
    if (this.showAttendance && this.attendees.length === 0) {
      this.loadAttendees();
    }
  }

  loadAttendees(): void {
    if (!this.event || !this.event.id || !this.canManageAttendance()) {
      return;
    }
    this.isLoadingAttendees = true;
    this.attendanceError = '';

    this.apiService.getEventAttendees(this.event.id).subscribe({
      next: (response: any) => {
        this.attendees = Array.isArray(response) ? response : [];
        this.isLoadingAttendees = false;
      },
      error: (error) => {
        console.error('Error loading event attendees:', error);
        this.attendanceError = error.error?.message || 'Error loading attendees. Please try again.';
        this.attendees = [];
        this.isLoadingAttendees = false;
      }
    });
  }

  markAttendance(attendee: any): void {
    if (!this.canManageAttendance() || !attendee?.id) {
      return;
    }
    // If already checked in, do nothing
    if (attendee.checkedIn) {
      return;
    }

    this.attendanceError = '';
    this.attendanceSuccess = '';

    this.apiService.markEventAttendance(attendee.id).subscribe({
      next: (updated: any) => {
        this.attendanceSuccess = `Marked attendance for ${updated.userName || updated.userEmail || 'attendee'}.`;
        // Update local list
        const idx = this.attendees.findIndex((a: any) => a.id === updated.id);
        if (idx !== -1) {
          this.attendees[idx] = updated;
        }
      },
      error: (error) => {
        console.error('Error marking attendance:', error);
        this.attendanceError = error.error?.message || 'Error marking attendance. Please try again.';
      }
    });
  }

  getMaxQuantity(): number {
    if (!this.event) return 1;
    const ticket = this.getSelectedTicketType();
    const ticketRemaining = ticket?.availableQuantity != null ? Number(ticket.availableQuantity) : null;
    const capacity = this.event.capacity || this.event.maxCapacity;
    const registeredSeats = this.event.totalRegisteredSeats !== undefined 
      ? this.event.totalRegisteredSeats 
      : (this.event.registeredCount || 0);
    const capacityRemaining = capacity ? Math.max(0, capacity - registeredSeats) : null;
    if (ticketRemaining != null && capacityRemaining != null) return Math.max(1, Math.min(ticketRemaining, capacityRemaining));
    if (ticketRemaining != null) return Math.max(1, ticketRemaining);
    if (capacityRemaining != null) return Math.max(1, capacityRemaining);
    return 10; // Default max if no limits
  }

  // Format schedule time (LocalTime from backend) as HH:mm
  formatScheduleTime(time: string | null | undefined): string {
    if (!time) return '';
    try {
      // time may be "HH:mm:ss" or "HH:mm"
      return time.split(':').slice(0, 2).join(':');
    } catch {
      return String(time);
    }
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

  validateQuantity(): void {
    if (this.quantity < 1) {
      this.quantity = 1;
    }
    const maxQty = this.getMaxQuantity();
    if (this.quantity > maxQty) {
      this.quantity = maxQty;
    }
  }

  getTotalPrice(): string {
    const price = this.getEventPrice();
    const total = price * this.quantity;
    if (total === 0) {
      return 'Free';
    }
    return `₹${total.toLocaleString('en-IN')}`;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity(): void {
    const maxQty = this.getMaxQuantity();
    if (this.quantity < maxQty) {
      this.quantity++;
    }
  }

  private initializeTicketSelection(): void {
    this.currentUser = this.authService.getCurrentUser();
    const tickets = this.getTicketTypes();
    if (!tickets.length) {
      this.selectedTicketTypeId = null;
      return;
    }
    // If user is logged in, prefer an eligible + available ticket.
    if (this.currentUser) {
      const preferred = tickets.find(t => this.isTicketEligible(t) && this.isTicketAvailable(t));
      this.selectedTicketTypeId = preferred?.id ?? tickets[0].id;
      return;
    }
    // If not logged in, default to first available ticket (eligibility will be checked after login).
    const firstAvailable = tickets.find(t => this.isTicketAvailable(t));
    this.selectedTicketTypeId = firstAvailable?.id ?? tickets[0].id;
  }

  getTicketTypes(): any[] {
    if (!this.event) return [];
    const list = Array.isArray(this.event.ticketTypes) ? this.event.ticketTypes : [];
    const normalized = list
      .filter((t: any) => t && t.id != null)
      .map((t: any) => ({
        ...t,
        type: String(t.type || '').toUpperCase(),
        price: Number(t.price || 0),
        availableQuantity: t.availableQuantity != null ? Number(t.availableQuantity) : null
      }));
    const unique = new Map<string, any>();
    for (const ticket of normalized) {
      const key = ticket.type || String(ticket.name || '').trim().toUpperCase();
      if (!unique.has(key)) {
        unique.set(key, ticket);
      }
    }
    return Array.from(unique.values());
  }

  getSelectedTicketType(): any | null {
    const list = this.getTicketTypes();
    if (!list.length) return null;
    return list.find(t => t.id === this.selectedTicketTypeId) || list[0];
  }

  selectTicket(ticket: any): void {
    if (!ticket) return;
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
    if (!ticket || !this.currentUser) return false;
    const isAdmin = this.currentUser.role === 'admin' || this.currentUser.type === 'ADMIN';
    switch (ticket.type) {
      case 'VIP':
        return isAdmin || this.getActivePlanLevel() >= 3;
      case 'MEMBER':
        return isAdmin || this.getActivePlanLevel() >= 2;
      case 'NON_MEMBER':
        return isAdmin || this.getActivePlanLevel() < 2;
      case 'EARLY_BIRD':
        return this.isEarlyBirdOpen();
      default:
        return true;
    }
  }

  getTicketStatus(ticket: any): string {
    if (!this.isTicketAvailable(ticket)) return 'Sold out';
    if (ticket.type === 'EARLY_BIRD' && !this.isEarlyBirdOpen()) return 'Closed';
    if (!this.isTicketEligible(ticket)) return 'Not eligible';
    if (ticket.availableQuantity != null && ticket.availableQuantity <= 10) return 'Few left';
    return 'Available';
  }

  isSelectedTicketPayable(): boolean {
    if (this.getTicketTypes().length === 0) {
      return true;
    }
    const t = this.getSelectedTicketType();
    if (!t) return false;
    return this.isTicketAvailable(t) && this.isTicketEligible(t);
  }

  getSelectedTicketReason(): string {
    const ticket = this.getSelectedTicketType();
    if (!ticket) return 'Please select a ticket type.';
    if (!this.currentUser) return 'Please login to continue.';
    if (!this.isTicketAvailable(ticket)) return 'Selected ticket is sold out.';
    if (ticket.type === 'EARLY_BIRD' && !this.isEarlyBirdOpen()) return 'Early bird window is closed.';
    if (!this.isTicketEligible(ticket)) {
      if (ticket.type === 'MEMBER') return 'This is a member-only ticket.';
      if (ticket.type === 'NON_MEMBER') return 'This ticket is for non-members only.';
      if (ticket.type === 'VIP') return 'VIP ticket is restricted.';
      return 'You are not eligible for this ticket.';
    }
    return '';
  }

  canProceedRegistration(): boolean {
    // Keep button clickable for unauthenticated users so we can show login message.
    if (!this.currentUser) return true;
    return this.isSelectedTicketPayable();
  }

  getRegisterButtonText(): string {
    if (this.isRegistering) return 'Processing Commitment...';
    if (this.isUserRegistered()) return 'Registration Secured';
    if (!this.currentUser) return 'Login to Register';
    if (!this.isSelectedTicketPayable()) return 'Ticket Unavailable';
    return 'Commit to Attendance';
  }
}

