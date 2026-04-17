import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { Event, ViewState } from '../../models/interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
  @Input() event: Event | null = null;
  @Output() navigate = new EventEmitter<ViewState>();
  @Output() register = new EventEmitter<Event>();
  @Output() openPayment = new EventEmitter<void>();

  currentUser: any = null;

  constructor(private authService: AuthService) {
    this.currentUser = this.authService.getCurrentUser();
  }

  onNavigate(view: ViewState): void {
    this.navigate.emit(view);
  }

  onRegister(): void {
    if (this.event) {
      this.register.emit(this.event);
    }
  }

  onOpenPayment(): void {
    this.openPayment.emit();
  }

  isEventPaidForUser(): boolean {
    if (!this.currentUser || !this.event) return true;
    return this.currentUser.type === 'REGULAR' ? this.event.guestPrice > 0 : this.event.price > 0;
  }
}

