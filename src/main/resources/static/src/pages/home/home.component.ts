import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Event, BoardMember, FaqItem, ViewState } from '../../models/interfaces';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  @Output() navigate = new EventEmitter<ViewState>();
  @Output() openAuth = new EventEmitter<'LOGIN' | 'REGISTER'>();
  @Output() openPayment = new EventEmitter<void>();
  @Output() viewEvent = new EventEmitter<Event>();
  @Output() loginRequiredForEvent = new EventEmitter<Event>();

  events: any[] = [];
  boardMembers: BoardMember[] = [];
  faqs: FaqItem[] = [];
  galleryImages: string[] = [];
  currentGalleryIndex = 0;
  isLoadingEvents = false;
  private galleryIntervalId: any;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private apiService: ApiService
  ) {
    this.boardMembers = this.dataService.getBoardMembers();
    this.faqs = this.dataService.getFaqs();
    // Initialize gallery images from assets/gallery (1.png, 2.png, 3.png)
    this.galleryImages = [
      'assets/gallery/1.png',
      'assets/gallery/2.png',
      'assets/gallery/3.png'
    ];
  }

  ngOnInit(): void {
    this.loadUpcomingEvents();
    // Auto-rotate gallery every 5 seconds
    if (this.galleryImages && this.galleryImages.length > 1) {
      this.galleryIntervalId = setInterval(() => {
        this.nextGallery();
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.galleryIntervalId) {
      clearInterval(this.galleryIntervalId);
      this.galleryIntervalId = null;
    }
  }

  loadUpcomingEvents(): void {
    this.isLoadingEvents = true;
    this.apiService.getEvents().subscribe({
      next: (response: any) => {
        const events = Array.isArray(response) ? response : [];
        const now = new Date();
        
        // Filter for published events that are upcoming (end date not in past)
        const upcomingEvents = events.filter((e: any) => {
          if (e.status !== 'PUBLISHED') {
            return false;
          }
          // Exclude events with past end dates and times
          if (e.endDate) {
            const endDateTime = new Date(e.endDate);
            if (e.endTime) {
              const [hours, minutes] = e.endTime.split(':').map(Number);
              endDateTime.setHours(hours, minutes, 0, 0);
            }
            if (endDateTime < now) {
              return false; // Event is closed
            }
          } else if (e.startDate) {
            // If no endDate, check startDate as fallback
            const startDateTime = new Date(e.startDate);
            if (e.startTime) {
              const [hours, minutes] = e.startTime.split(':').map(Number);
              startDateTime.setHours(hours, minutes, 0, 0);
            }
            if (startDateTime < now) {
              return false; // Event is closed
            }
          } else if (e.date) {
            // Fallback to date field
            const eventDate = new Date(e.date);
            if (eventDate < now) {
              return false; // Event is closed
            }
          }
          return true;
        });
        
        // Sort by start date (earliest first) and take all upcoming events
        this.events = upcomingEvents.sort((a: any, b: any) => {
          const dateA = a.startDate ? new Date(a.startDate) : (a.date ? new Date(a.date) : new Date(0));
          const dateB = b.startDate ? new Date(b.startDate) : (b.date ? new Date(b.date) : new Date(0));
          return dateA.getTime() - dateB.getTime();
        });
        
        this.isLoadingEvents = false;
      },
      error: (error) => {
        console.error('Error loading upcoming events:', error);
        this.events = [];
        this.isLoadingEvents = false;
      }
    });
  }

  onNavigate(view: ViewState): void {
    this.navigate.emit(view);
  }

  onOpenAuth(mode: 'LOGIN' | 'REGISTER'): void {
    this.openAuth.emit(mode);
  }

  onOpenPayment(): void {
    this.openPayment.emit();
  }

  onViewEvent(event: Event): void {
    // If user is not logged in, ask parent to open login and remember this event
    if (!this.authService.isAuthenticated()) {
      this.loginRequiredForEvent.emit(event);
      return;
    }
    // If authenticated, propagate event selection to parent
    this.viewEvent.emit(event);
  }

  toggleFaq(faq: FaqItem): void {
    faq.isOpen = !faq.isOpen;
  }

  nextGallery(): void {
    if (!this.galleryImages || this.galleryImages.length === 0) {
      return;
    }
    this.currentGalleryIndex = (this.currentGalleryIndex + 1) % this.galleryImages.length;
  }

  prevGallery(): void {
    if (!this.galleryImages || this.galleryImages.length === 0) {
      return;
    }
    this.currentGalleryIndex =
      (this.currentGalleryIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
  }

  goToGallery(index: number): void {
    if (!this.galleryImages || index < 0 || index >= this.galleryImages.length) {
      return;
    }
    this.currentGalleryIndex = index;
  }
}

