import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent implements OnInit {
  @Input() show = false;
  @Input() paymentType: 'MEMBERSHIP' | 'EVENT' = 'MEMBERSHIP';
  @Input() event: any = null; // For event payments
  @Input() plan: any = null; // For membership payments
  @Input() quantity: number = 1; // For event payments
  @Output() close = new EventEmitter<void>();
  @Output() success = new EventEmitter<any>();

  processingPayment = false;
  errorMessage = '';
  currentUser: any = null;
  selectedPaymentMethod: string = 'CREDIT_CARD';

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  onClose(): void {
    this.close.emit();
    this.errorMessage = '';
    this.processingPayment = false;
  }

  getPaymentTitle(): string {
    if (this.paymentType === 'EVENT' && this.event) {
      return this.event.name || this.event.title || 'Event Registration';
    }
    return 'Premium Membership';
  }

  getPaymentSubtitle(): string {
    if (this.paymentType === 'EVENT' && this.event) {
      return 'Event Registration';
    }
    return 'ISA Annual Plan';
  }

  getPaymentAmount(): number {
    if (this.paymentType === 'EVENT' && this.event) {
      const pricingType = this.event.pricingType || this.event.pricing?.type;
      if (pricingType === 'FREE') {
        return 0;
      }
      
      const isMember = this.currentUser?.role === 'member';
      if (pricingType === 'PAID' || pricingType === 'DISCOUNTED') {
        if (isMember && this.event.memberPrice) {
          return (this.event.memberPrice || 0) * this.quantity;
        } else if (this.event.nonMemberPrice) {
          return (this.event.nonMemberPrice || 0) * this.quantity;
        } else if (this.event.memberPrice) {
          return (this.event.memberPrice || 0) * this.quantity;
        }
      }
      return (this.event.price || this.event.pricing?.memberPrice || 0) * this.quantity;
    }
    return 12000; // Default membership amount
  }

  getEventPrice(): number {
    if (!this.event) return 0;
    
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === 'FREE') {
      return 0;
    }
    
    // Choose price based on member type
    const isPaidMember = !!this.currentUser && this.currentUser.type === 'PREMIUM';
    
    if (pricingType === 'PAID' || pricingType === 'DISCOUNTED') {
      const memberPrice = this.event.memberPrice || this.event.pricing?.memberPrice || 0;
      const freeMemberPrice = this.event.nonMemberPrice || this.event.pricing?.nonMemberPrice || 0;

      if (isPaidMember && memberPrice > 0) {
        return memberPrice;
      }
      if (!isPaidMember && freeMemberPrice > 0) {
        return freeMemberPrice;
      }

      // Fallbacks
      if (memberPrice > 0) return memberPrice;
      if (freeMemberPrice > 0) return freeMemberPrice;
    }
    
    return this.event.price || this.event.pricing?.memberPrice || 0;
  }

  processPayment(): void {
    if (this.paymentType === 'EVENT' && this.event) {
      this.processEventPayment();
    } else {
      this.processMembershipPayment();
    }
  }

  private processEventPayment(): void {
    if (!this.event || !this.event.id) {
      this.errorMessage = 'Event information is missing';
      return;
    }

    this.processingPayment = true;
    this.errorMessage = '';

    const amount = this.getEventPrice(); // single-ticket price
    const totalAmount = amount * this.quantity;
    const transactionId = 'DUMMY-EVENT-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    const description = `${this.event.name || this.event.title} - ${this.quantity} ticket${this.quantity === 1 ? '' : 's'}`;

    // Create event payment
    this.apiService.createEventPayment(
      this.event.id,
      totalAmount,
      'INR',
      this.selectedPaymentMethod,
      transactionId,
      description
    ).subscribe({
      next: (paymentResponse: any) => {
        // Payment successful - now register for event
        this.registerForEvent(paymentResponse.paymentId);
      },
      error: (error: any) => {
        console.error('Error creating event payment:', error);
        this.processingPayment = false;
        this.errorMessage = error.error?.error || 'Payment processing failed. Please try again.';
      }
    });
  }

  private registerForEvent(paymentId: number): void {
    const registrationData: any = { quantity: this.quantity };
    if (paymentId) {
      registrationData.paymentId = paymentId;
    }

    this.apiService.registerForEvent(this.event.id, registrationData).subscribe({
      next: (response: any) => {
        this.processingPayment = false;
        this.success.emit({ type: 'EVENT', event: this.event, registration: response });
        this.onClose();
      },
      error: (error: any) => {
        console.error('Error registering for event:', error);
        this.processingPayment = false;
        this.errorMessage = error.error?.message || 'Registration failed. Payment was successful but registration failed. Please contact support.';
      }
    });
  }

  private processMembershipPayment(): void {
    // Existing membership payment logic
    this.processingPayment = true;
    setTimeout(() => {
      this.processingPayment = false;
      this.success.emit({ type: 'MEMBERSHIP' });
      this.onClose();
      alert('Paid');
    }, 1000);
  }
}
