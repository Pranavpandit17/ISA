import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ViewState } from '../../models/interfaces';

@Component({
  selector: 'app-event-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit, OnChanges {
  @Output() navigate = new EventEmitter<ViewState>();
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  @Input() isModal = false;
  @Input() editEvent: any = null;
  @Input() show = true;
  @Input() saveEvent:boolean = false;

  currentStep = 1;
  totalSteps = 5;
  isEditMode = false;

  eventData: any = {
    // Step 1: Basic Information
    name: '',
    type: 'CONFERENCE',
    description: '',
    fullDescription: '',
    
    // Step 2: Date & Time
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    
    // Step 3: Location & Format
    location: '',
    locationType: 'IN_PERSON',
    format: 'IN_PERSON',
    onlineLink: '',
    capacity: 100,
    visibility: 'PUBLIC',
    
    // Step 4: Organizer & Pricing
    organizerName: '',
    organizerEmail: '',
    organizerPhone: '',
    pricing: {
      type: 'FREE',
      memberPrice: 0,
      nonMemberPrice: 0,
      earlyBirdPrice: 0,
      earlyBirdEndDate: ''
    },
    ticketTypes: [],
    schedule: [],
    speakers: []
  };

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (this.editEvent) {
      this.isEditMode = true;
      this.loadEventData(this.editEvent);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // React to changes in editEvent input
    if (changes['editEvent']) {
      if (changes['editEvent'].currentValue) {
        this.isEditMode = true;
        this.loadEventData(changes['editEvent'].currentValue);
        this.currentStep = 1; // Reset to first step when editing
      } else {
        // Reset form when creating new event
        this.isEditMode = false;
        this.resetForm();
        this.currentStep = 1;
      }
    }
    
    // When modal opens, check if we need to load event data
    if (changes['show'] && changes['show'].currentValue && this.editEvent) {
      this.isEditMode = true;
      this.loadEventData(this.editEvent);
      this.currentStep = 1;
    }
    
    // Reset form when modal closes
    if (changes['show'] && !changes['show'].currentValue) {
      this.resetForm();
      this.currentStep = 1;
      this.isEditMode = false;
    }
  }

  resetForm(): void {
    this.eventData = {
      name: '',
      type: 'CONFERENCE',
      description: '',
      fullDescription: '',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      location: '',
      locationType: 'IN_PERSON',
      format: 'IN_PERSON',
      onlineLink: '',
      capacity: 100,
      visibility: 'PUBLIC',
      organizerName: '',
      organizerEmail: '',
      organizerPhone: '',
      pricing: {
        type: 'FREE',
        memberPrice: 0,
        nonMemberPrice: 0,
        earlyBirdPrice: 0,
        earlyBirdEndDate: ''
      },
      ticketTypes: [],
      schedule: [],
      speakers: []
    };
    this.errorMessage = '';
    this.successMessage = '';
  }

  loadEventData(event: any): void {
    // Load event data for editing
    // Backend returns separate startDate (LocalDate) and startTime (LocalTime)
    // Use them directly to avoid timezone conversion issues
    let startDateStr = '';
    let startTimeStr = '';
    let endDateStr = '';
    let endTimeStr = '';
    
    // Backend sends startTime and endTime as separate LocalTime fields (e.g., "14:30:00" or "14:30")
    // Use them directly if available
    if (event.startTime) {
      // startTime is in "HH:mm:ss" or "HH:mm" format from backend LocalTime
      // Extract just HH:mm for the time input
      startTimeStr = event.startTime.split(':').slice(0, 2).join(':');
    }
    
    if (event.endTime) {
      // endTime is in "HH:mm:ss" or "HH:mm" format from backend LocalTime
      // Extract just HH:mm for the time input
      endTimeStr = event.endTime.split(':').slice(0, 2).join(':');
    }
    
    // Backend sends startDate and endDate as LocalDate (e.g., "2024-01-15")
    if (event.startDate) {
      if (typeof event.startDate === 'string') {
        // LocalDate is returned as "YYYY-MM-DD" string
        startDateStr = event.startDate.split('T')[0]; // Handle any datetime format
      } else {
        // If it's a Date object (fallback), convert to ISO string
        const startDate = new Date(event.startDate);
        startDateStr = startDate.toISOString().split('T')[0];
        // If we don't have startTime yet, extract from Date (but prefer separate field)
        if (!startTimeStr) {
          // Use local time to preserve entered time
          const hours = String(startDate.getHours()).padStart(2, '0');
          const minutes = String(startDate.getMinutes()).padStart(2, '0');
          startTimeStr = `${hours}:${minutes}`;
        }
      }
    }
    
    if (event.endDate) {
      if (typeof event.endDate === 'string') {
        // LocalDate is returned as "YYYY-MM-DD" string
        endDateStr = event.endDate.split('T')[0]; // Handle any datetime format
      } else {
        // If it's a Date object (fallback), convert to ISO string
        const endDate = new Date(event.endDate);
        endDateStr = endDate.toISOString().split('T')[0];
        // If we don't have endTime yet, extract from Date (but prefer separate field)
        if (!endTimeStr) {
          // Use local time to preserve entered time
          const hours = String(endDate.getHours()).padStart(2, '0');
          const minutes = String(endDate.getMinutes()).padStart(2, '0');
          endTimeStr = `${hours}:${minutes}`;
        }
      }
    }
    
    this.eventData = {
      name: event.name || event.title || '',
      type: event.type || 'CONFERENCE',
      description: event.description || event.shortDescription || '',
      fullDescription: event.fullDescription || event.description || '',
      startDate: startDateStr,
      endDate: endDateStr,
      startTime: startTimeStr,
      endTime: endTimeStr,
      location: event.location || event.venue || '',
      locationType: event.locationType || event.mode || 'IN_PERSON',
      format: event.format || event.mode || 'IN_PERSON',
      onlineLink: event.onlineLink || event.venueUrl || '',
      capacity: event.capacity || event.maxCapacity || 100,
      visibility: event.visibility || (event.type === 'Member Only' ? 'MEMBERS_ONLY' : 'PUBLIC'),
      organizerName: event.organizerName || '',
      organizerEmail: event.organizerEmail || '',
      organizerPhone: event.organizerPhone || '',
      pricing: event.pricing || {
        type: event.pricingType || (event.price > 0 ? 'PAID' : 'FREE'),
        memberPrice: event.memberPrice || event.price || 0,
        nonMemberPrice: event.nonMemberPrice || event.guestPrice || 0,
        earlyBirdPrice: event.earlyBirdPrice || 0,
        earlyBirdEndDate: event.earlyBirdEndDate ? new Date(event.earlyBirdEndDate).toISOString().split('T')[0] : ''
      },
      ticketTypes: event.ticketTypes || [],
      schedule: event.schedule || [],
      speakers: event.speakers || []
    };
  }
  

  onClose(): void {
    if (this.isModal) {
      this.close.emit();
    } else {
      this.navigate.emit('EVENT_MANAGEMENT');
    }
  }

  nextStep(): void {
    if (this.validateCurrentStep()) {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  validateCurrentStep(): boolean {
    this.errorMessage = '';
    
    if (this.currentStep === 1) {
      if (!this.eventData.name || !this.eventData.type || !this.eventData.description) {
        this.errorMessage = 'Please fill in all required fields';
        return false;
      }
    } else if (this.currentStep === 2) {
      if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
        this.errorMessage = 'Please fill in all date and time fields';
        return false;
      }
      
      // Validate start date/time is in the future
      const startDateTime = new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
      const now = new Date();
      
      if (startDateTime <= now) {
        this.errorMessage = 'Start date and time must be in the future';
        return false;
      }
      
      // Validate end date/time is after start date/time
      const endDateTime = new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
      
      if (endDateTime <= startDateTime) {
        this.errorMessage = 'End date and time must be after start date and time';
        return false;
      }
    } else if (this.currentStep === 3) {
      if (!this.eventData.location || !this.eventData.capacity) {
        this.errorMessage = 'Please fill in location and capacity';
        return false;
      }
      if (this.eventData.locationType === 'ONLINE' && !this.eventData.onlineLink) {
        this.errorMessage = 'Please provide online link for online events';
        return false;
      }
    } else if (this.currentStep === 4) {
      if (!this.eventData.organizerName || !this.eventData.organizerEmail) {
        this.errorMessage = 'Please fill in organizer information';
        return false;
      }

      // Email format validation
      const email = String(this.eventData.organizerEmail).trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.errorMessage = 'Please enter a valid organizer email address';
        return false;
      }

      // Phone validation (if provided)
      if (this.eventData.organizerPhone) {
        const rawPhone = String(this.eventData.organizerPhone).trim();
        // Allow digits, spaces, +, -, and parentheses
        const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
        // Also ensure at least 7 digits
        const digitCount = rawPhone.replace(/\D/g, '').length;
        if (!phoneRegex.test(rawPhone) || digitCount < 7) {
          this.errorMessage = 'Please enter a valid organizer phone number';
          return false;
        }
      }

      // Validate pricing for paid events
      if (this.eventData.pricing?.type === 'PAID' || this.eventData.pricing?.type === 'DISCOUNTED') {
        const memberPrice = this.eventData.pricing?.memberPrice || 0;
        const nonMemberPrice = this.eventData.pricing?.nonMemberPrice || 0;
        if (memberPrice <= 0 && nonMemberPrice <= 0) {
          this.errorMessage = 'Please provide at least one price (Member or Non-Member) for paid events';
          return false;
        }
      }
    } else if (this.currentStep === 5) {
      // Step 5 validation (Schedule & Speakers) - optional fields
      // No required validation needed
    }
    
    return true;
  }

  addTicketType(): void {
    this.eventData.ticketTypes.push({
      name: '',
      type: 'MEMBER',
      price: 0,
      quantityLimit: null,
      availableQuantity: 0,
      description: ''
    });
  }

  removeTicketType(index: number): void {
    this.eventData.ticketTypes.splice(index, 1);
  }

  addSchedule(): void {
    this.eventData.schedule.push({
      startTime: '',
      endTime: '',
      title: '',
      description: '',
      speakerId: null,
      location: ''
    });
  }

  removeSchedule(index: number): void {
    this.eventData.schedule.splice(index, 1);
  }

  addSpeaker(): void {
    this.eventData.speakers.push({
      name: '',
      title: '',
      company: '',
      bio: '',
      avatar: '',
      socialLinks: {
        linkedin: '',
        twitter: '',
        website: ''
      }
    });
  }

  removeSpeaker(index: number): void {
    this.eventData.speakers.splice(index, 1);
  }

  validateDateTimes(): boolean {
    this.errorMessage = '';
    
    if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
      this.errorMessage = 'Please fill in all date and time fields';
      return false;
    }
    
    // Validate start date/time is in the future
    const startDateTime = new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    const now = new Date();
    
    if (startDateTime <= now) {
      this.errorMessage = 'Start date and time must be in the future';
      return false;
    }
    
    // Validate end date/time is after start date/time
    const endDateTime = new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
    
    if (endDateTime <= startDateTime) {
      this.errorMessage = 'End date and time must be after start date and time';
      return false;
    }
    
    return true;
  }

  onSubmit(): void {
    // Validate all steps before submitting
    if (!this.validateCurrentStep()) {
      return;
    }
    
    // Additional validation for date/time on final submit
    if (!this.validateDateTimes()) {
      // If we're not on step 2, navigate to step 2 to show the error
      if (this.currentStep !== 2) {
        this.currentStep = 2;
      }
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Format dates and map pricing correctly
    // Backend expects separate startDate (LocalDate) and startTime (LocalTime)
    // Send them as separate fields to avoid timezone conversion issues
    const pricingType = this.eventData.pricing?.type || 'FREE';
    const eventPayload: any = {
      ...this.eventData,
      // Send date and time separately to match backend LocalDate and LocalTime
      startDate: this.eventData.startDate, // "YYYY-MM-DD"
      startTime: this.eventData.startTime, // "HH:mm"
      endDate: this.eventData.endDate,     // "YYYY-MM-DD"
      endTime: this.eventData.endTime,     // "HH:mm"
      // Map pricing from nested object to flat properties
      pricingType: pricingType,
      memberPrice: pricingType === 'FREE' ? 0 : (this.eventData.pricing?.memberPrice || 0),
      nonMemberPrice: pricingType === 'FREE' ? 0 : (this.eventData.pricing?.nonMemberPrice || 0),
      earlyBirdPrice: this.eventData.pricing?.earlyBirdPrice || 0,
      earlyBirdEndDate: this.eventData.pricing?.earlyBirdEndDate ? this.eventData.pricing.earlyBirdEndDate : null,
      // Map schedule array to backend's expected "schedules" field
      schedules: this.eventData.schedule || []
    };
    
    // Remove nested pricing object and local-only fields
    delete eventPayload.pricing;
    delete eventPayload.schedule; // backend expects "schedules", not "schedule"

    if (this.isEditMode && this.editEvent?.id) {
      // Update existing event
      this.apiService.updateEvent(this.editEvent.id, eventPayload).subscribe({
        next: () => {
          this.isLoading = false;
          this.successMessage = 'Event updated successfully!';
          setTimeout(() => {
            this.saved.emit();
            if (this.isModal) {
              this.close.emit();
            } else {
              this.navigate.emit('EVENT_MANAGEMENT');
            }
          }, 1500);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Error updating event. Please try again.';
        }
      });
    } else {
      // Create new event
      this.apiService.createEvent(eventPayload).subscribe({
        next: () => {
          this.isLoading = false;
          this.successMessage = 'Event created successfully!';
          setTimeout(() => {
            this.saved.emit();
            if (this.isModal) {
              this.close.emit();
            } else {
              this.navigate.emit('EVENT_MANAGEMENT');
            }
          }, 1500);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Error creating event. Please try again.';
        }
      });
    }
  }

  onCancel(): void {
    this.onClose();
  }

  getMinDate(): string {
    // Return today's date in YYYY-MM-DD format for date input min attribute
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  getMinEndDate(): string {
    // Return start date as minimum for end date
    if (this.eventData.startDate) {
      return this.eventData.startDate;
    }
    return this.getMinDate();
  }

  hasDateValidationError(): boolean {
    if (!this.eventData.startDate || !this.eventData.startTime) {
      return false;
    }
    const startDateTime = new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    const now = new Date();
    return startDateTime <= now;
  }

  hasStartDateError(): boolean {
    return this.hasDateValidationError();
  }

  hasEndDateError(): boolean {
    if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
      return false;
    }
    const startDateTime = new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    const endDateTime = new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
    return endDateTime <= startDateTime;
  }
}

