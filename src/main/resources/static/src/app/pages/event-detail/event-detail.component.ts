import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { Event } from '../../models/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { AppModalService } from '../../services/app-modal.service';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() event: Event | any = null;
  @Output() navigate = new EventEmitter<string>();
  @Output() register = new EventEmitter<Event>();
  @Output() openPayment = new EventEmitter<void>();

  currentUser: any = null;
  isLoading = false;

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
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id && !this.event) {
        this.loadEventDetails(id);
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
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching event:', err);
        this.isLoading = false;
      }
    });
  }

  onNavigate(view: string): void {
    if (view === 'EVENTS') {
      this.router.navigate(['/events']);
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

    if (this.isEventPaid()) {
      // Open payment modal
      this.modalService.openPayment({ event: this.event, quantity: 1 });
      return;
    }

    this.isLoading = true;
    this.apiService.registerForEvent(this.event.id, { quantity: 1 }).subscribe({
      next: () => {
        this.isLoading = false;
        this.toastService.success('Successfully registered for the event!');
        // Ideally reload event or update status
        this.event.isRegistered = true;
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Registration failed:', err);
        this.toastService.error(err.error?.message || 'Registration failed. Please try again.');
      }
    });
  }

  isEventPaid(): boolean {
    if (!this.event) return false;
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === 'PAID' || pricingType === 'DISCOUNTED') return true;
    
    const price = this.currentUser?.type === 'PREMIUM' 
      ? (this.event.memberPrice || this.event.pricing?.memberPrice || this.event.price) 
      : (this.event.nonMemberPrice || this.event.pricing?.nonMemberPrice || this.event.guestPrice);
    
    return Number(price) > 0;
  }

  isEventPaidForUser(): boolean {
    return this.isEventPaid();
  }
}



