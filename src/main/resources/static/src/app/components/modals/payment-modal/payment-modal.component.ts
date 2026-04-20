import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';
import { MembershipService } from '../../../services/membership.service';
import { resolveMemberFacingUnitPrice } from '../../../utils/event-member-pricing';

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
  @Input() planData: any = null; // For membership payments
  @Input() quantity: number = 1; // For event payments
  @Output() close = new EventEmitter<void>();
  @Output() success = new EventEmitter<any>();

  processingPayment = false;
  errorMessage = '';
  currentUser: any = null;
  selectedPaymentMethod: 'CREDIT_CARD' | 'UPI' = 'CREDIT_CARD';

  // Card Details
  cardDetails = {
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  };

  // UPI Details
  selectedUpiOption: 'GPAY' | 'PHONEPE' | 'PAYTM' | 'OTHER' | null = null;
  upiId: string = '';

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private toastService: ToastService,
    private membershipService: MembershipService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  onClose(): void {
    this.close.emit();
    this.errorMessage = '';
    this.processingPayment = false;
    this.resetForm();
  }

  resetForm(): void {
    this.cardDetails = { number: '', expiry: '', cvv: '', name: '' };
    this.selectedUpiOption = null;
    this.upiId = '';
  }

  setPaymentMethod(method: 'CREDIT_CARD' | 'UPI'): void {
    this.selectedPaymentMethod = method;
    this.errorMessage = '';
  }

  setUpiOption(option: 'GPAY' | 'PHONEPE' | 'PAYTM' | 'OTHER'): void {
    this.selectedUpiOption = option;
    this.errorMessage = '';
    if (option !== 'OTHER') {
      this.upiId = '';
    }
  }

  isFormValid(): boolean {
    // Event registration uses the dummy gateway path — no real card/UPI capture; don't block Pay Now.
    if (this.paymentType === 'EVENT') {
      return true;
    }

    // Membership: guest picking a plan continues without instrument (handled in processMembershipPayment).
    if (this.paymentType === 'MEMBERSHIP' && !this.currentUser && this.planData) {
      return true;
    }

    // Zero total — confirm only (e.g. free tier / legacy flow).
    if (this.getPaymentAmount() <= 0) {
      return true;
    }

    if (this.selectedPaymentMethod === 'CREDIT_CARD') {
      const n = this.cardDetails.number?.trim();
      const e = this.cardDetails.expiry?.trim();
      const c = this.cardDetails.cvv?.trim();
      const nm = this.cardDetails.name?.trim();
      return !!(n && e && c && nm);
    }

    if (!this.selectedUpiOption) return false;
    if (this.selectedUpiOption === 'OTHER') return !!this.upiId?.trim();
    return true;
  }

  getPaymentTitle(): string {
    if (this.paymentType === 'EVENT' && this.event) {
      return this.event.name || this.event.title || 'Event Registration';
    }
    if (this.planData) {
      return this.planData.name || 'Premium Membership';
    }
    return 'Premium Membership';
  }

  getPaymentSubtitle(): string {
    if (this.paymentType === 'EVENT' && this.event) {
      return 'Event Registration';
    }
    if (this.planData) {
      return this.planData.durationMonths === 12 ? 'ISA Annual Plan' : `ISA ${this.planData.durationMonths} Months Plan`;
    }
    return 'ISA Annual Plan';
  }

  getPaymentAmount(): number {
    if (this.paymentType === 'EVENT' && this.event) {
      return this.getEventPrice() * this.quantity;
    }
    
    if (this.planData) {
      return this.planData.price || 0;
    }
    return 12000; // Default membership amount
  }

  getEventPrice(): number {
    if (!this.event) return 0;
    if (this.event.selectedTicketType?.price != null) {
      return Number(this.event.selectedTicketType.price) || 0;
    }
    this.currentUser = this.authService.getCurrentUser();
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === 'FREE') {
      return 0;
    }
    return resolveMemberFacingUnitPrice(this.event, this.currentUser);
  }

  processPayment(): void {
    const skipInstrument =
      this.paymentType === 'EVENT' ||
      (this.paymentType === 'MEMBERSHIP' && !this.currentUser && this.planData) ||
      this.getPaymentAmount() <= 0;

    if (!skipInstrument) {
      if (this.selectedPaymentMethod === 'CREDIT_CARD') {
        if (!this.cardDetails.number?.trim() || !this.cardDetails.expiry?.trim()
            || !this.cardDetails.cvv?.trim() || !this.cardDetails.name?.trim()) {
          this.errorMessage = 'Please fill all card details';
          return;
        }
      } else if (this.selectedPaymentMethod === 'UPI') {
        if (!this.selectedUpiOption) {
          this.errorMessage = 'Please select a UPI option';
          return;
        }
        if (this.selectedUpiOption === 'OTHER' && !this.upiId?.trim()) {
          this.errorMessage = 'Please enter your UPI ID';
          return;
        }
      }
    }

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
    if (this.event?.selectedTicketTypeId) {
      registrationData.ticketTypeId = this.event.selectedTicketTypeId;
    }
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
    if (!this.planData?.id) {
      this.errorMessage = 'Membership plan information is missing.';
      return;
    }

    // Registration flow: user not logged in yet. Keep legacy behavior and continue signup.
    if (!this.currentUser) {
      this.processingPayment = true;
      setTimeout(() => {
        this.processingPayment = false;
        this.membershipService.setSelectedPlan(this.planData);
        this.toastService.success('Plan selected successfully');
        this.success.emit({ type: 'MEMBERSHIP', plan: this.planData });
        this.onClose();
      }, 600);
      return;
    }
    this.processingPayment = true;
    this.errorMessage = '';

    const transactionId = 'DUMMY-MEM-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    this.apiService.createMembershipPayment(this.planData.id, this.selectedPaymentMethod, transactionId).subscribe({
      next: (paymentResponse: any) => {
        this.membershipService.setSelectedPlan(this.planData);
        this.authService.refreshCurrentUserProfile().subscribe({
          next: () => {
            this.processingPayment = false;
            this.toastService.success('Membership plan activated successfully');
            this.success.emit({ type: 'MEMBERSHIP', payment: paymentResponse, plan: this.planData });
            this.onClose();
          },
          error: () => {
            this.processingPayment = false;
            this.toastService.success('Membership plan activated successfully');
            this.success.emit({ type: 'MEMBERSHIP', payment: paymentResponse, plan: this.planData });
            this.onClose();
          }
        });
      },
      error: (error: any) => {
        this.processingPayment = false;
        this.errorMessage = error?.error?.error || error?.error?.message || 'Membership payment failed. Please try again.';
      }
    });
  }
}
