import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ViewState } from '../../models/interfaces';
import { ApiService } from '../../services/api.service';
import { EventCreateComponent } from '../event-create/event-create.component';
import { EventDetailModalComponent } from '../../components/modals/event-detail-modal/event-detail-modal.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmService } from '../../services/confirm.service';

@Component({
  selector: 'app-event-management',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  activeTab: 'DRAFT' | 'PUBLISHED' | 'OLD' = 'DRAFT';
  
  allEvents: any[] = [];
  draftEvents: any[] = [];
  publishedEvents: any[] = [];
  oldEvents: any[] = [];
  
  isLoading = false;
  errorMessage = '';

  @Output() openDetail = new EventEmitter<any>();
  @Output() openEdit = new EventEmitter<any>();
  @Output() openCreate = new EventEmitter<void>();

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private confirmService: ConfirmService
  ) {}

  ngOnInit(): void {
    this.loadEvents();
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

  loadEvents(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.apiService.getEvents().subscribe({
      next: (response: any) => {
        const events = Array.isArray(response) ? response : [];
        this.allEvents = events.map((e: any) => {
          // Robust image mapping with protection against missing local assets
          let image = this.resolveEventImageUrl(e.imageUrl || e.image);
          
          if (!image && e.poster) {
            image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${e.id}`;
          }
          if (!image) {
            image = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop';
          }
          return { ...e, image };
        });
        this.categorizeEvents();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading events. Please try again.';
        this.isLoading = false;
        console.error('Error loading events:', error);
      }
    });
  }

  categorizeEvents(): void {
    const now = new Date();
    
    // Helper function to check if event has past end date AND time
    const hasPastEndDateTime = (event: any): boolean => {
      // Check if event has both endDate and endTime
      if (event.endDate && event.endTime) {
        try {
          // Get end date string (LocalDate format: "YYYY-MM-DD")
          let endDateStr = '';
          if (typeof event.endDate === 'string') {
            endDateStr = event.endDate.split('T')[0]; // Handle "YYYY-MM-DD" or "YYYY-MM-DDTHH:mm:ss"
          } else {
            const endDate = new Date(event.endDate);
            endDateStr = endDate.toISOString().split('T')[0];
          }
          
          // Get end time string (LocalTime format: "HH:mm:ss" or "HH:mm")
          let endTimeStr = '';
          if (typeof event.endTime === 'string') {
            endTimeStr = event.endTime.split(':').slice(0, 2).join(':'); // Get "HH:mm"
          } else {
            endTimeStr = String(event.endTime);
          }
          
          // Combine end date and time
          if (endDateStr && endTimeStr) {
            const endDateTime = new Date(`${endDateStr}T${endTimeStr}`);
            if (!isNaN(endDateTime.getTime())) {
              return endDateTime < now;
            }
          }
        } catch (error) {
          console.error('Error parsing end date/time:', error);
        }
      }
      
      // Fallback: If only endDate is available, check if it's in the past
      if (event.endDate) {
        const endDate = new Date(event.endDate);
        endDate.setHours(23, 59, 59, 999); // Set to end of day
        return endDate < now;
      }
      
      // If no endDate, check startDate and startTime as fallback
      if (event.startDate && event.startTime) {
        try {
          let startDateStr = '';
          if (typeof event.startDate === 'string') {
            startDateStr = event.startDate.split('T')[0];
          } else {
            const startDate = new Date(event.startDate);
            startDateStr = startDate.toISOString().split('T')[0];
          }
          
          let startTimeStr = '';
          if (typeof event.startTime === 'string') {
            startTimeStr = event.startTime.split(':').slice(0, 2).join(':');
          } else {
            startTimeStr = String(event.startTime);
          }
          
          if (startDateStr && startTimeStr) {
            const startDateTime = new Date(`${startDateStr}T${startTimeStr}`);
            if (!isNaN(startDateTime.getTime())) {
              return startDateTime < now;
            }
          }
        } catch (error) {
          console.error('Error parsing start date/time:', error);
        }
      }
      
      // Final fallback: check startDate only
      if (event.startDate) {
        const startDate = new Date(event.startDate);
        startDate.setHours(23, 59, 59, 999);
        return startDate < now;
      }
      
      return false;
    };
    
    // Draft events: only DRAFT status and not past end date/time
    this.draftEvents = this.allEvents.filter((event: any) => {
      return event.status === 'DRAFT' && !hasPastEndDateTime(event);
    });
    
    // Published events: PUBLISHED status and not past end date/time
    this.publishedEvents = this.allEvents.filter((event: any) => {
      return event.status === 'PUBLISHED' && !hasPastEndDateTime(event);
    });
    
    // Old events: all events with past end date AND time, plus completed/cancelled events
    this.oldEvents = this.allEvents.filter((event: any) => {
      // Include events with past end date AND time (regardless of status)
      if (hasPastEndDateTime(event)) {
        return true;
      }
      // Include explicitly completed or cancelled events
      if (event.status === 'COMPLETED' || event.status === 'CANCELLED') {
        return true;
      }
      return false;
    });
  }

  setTab(tab: 'DRAFT' | 'PUBLISHED' | 'OLD'): void {
    this.activeTab = tab;
  }

  onCreateEvent(): void {
    this.openCreate.emit();
  }

  onEditEvent(event: any): void {
    this.openEdit.emit(event);
  }

  openDetailModal(event: any): void {
    if (event && event.id) {
      this.isLoading = true;
      this.apiService.getEventById(event.id).subscribe({
        next: (fullEvent: any) => {
          // Robust image mapping for full details with protection against missing local assets
          let image = this.resolveEventImageUrl(fullEvent.imageUrl || fullEvent.image);
          
          if (!image && fullEvent.poster) {
            image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${fullEvent.id}`;
          }
          if (!image) {
            image = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop';
          }
          
          this.openDetail.emit({ ...fullEvent, image });
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading event details:', error);
          this.openDetail.emit(event);
          this.isLoading = false;
        }
      });
    } else {
      this.openDetail.emit(event);
    }
  }

  closeEventModal(): void {
    // Handled by dashboard
  }

  closeDetailModal(): void {
    // Handled by dashboard
  }

  onEventSaved(): void {
    this.loadEvents();
  }

  onPublishEvent(event: any): void {
    this.confirmService.confirm({
      title: 'Publish Event',
      message: `Are you sure you want to publish "${event.name || event.title}"?`,
      confirmLabel: 'Publish',
      cancelLabel: 'Cancel'
    }).subscribe(confirmed => {
      if (!confirmed) return;

      this.isLoading = true;
      this.apiService.publishEvent(event.id).subscribe({
        next: () => {
          this.toastr.success('Event published successfully!', 'Published');
          this.loadEvents();
          this.closeDetailModal();
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'Error publishing event. Please try again.';
          this.isLoading = false;
          this.toastr.error(this.errorMessage, 'Error');
        }
      });
    });
  }

  onDeleteEvent(event: any): void {
    const eventName = event.name || event.title || 'this event';
    this.confirmService.confirm({
      title: 'Delete Event',
      message: `Are you sure you want to delete "${eventName}"?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      isDestructive: true
    }).subscribe(confirmed => {
      if (confirmed) {
        // Implement delete functionality
        console.log('Delete event:', event.id);
      }
    });
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
}



