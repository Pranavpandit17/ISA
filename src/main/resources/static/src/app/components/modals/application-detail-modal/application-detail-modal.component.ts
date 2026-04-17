import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ApiService } from '../../../services/api.service';

interface MembershipPayment {
  id: number;
  memberId?: number;
  memberName?: string;
  planId?: number;
  planName?: string;
  amount?: number;
  currency?: string;
  status?: string;
  dueDate?: string;
  paidDate?: string;
  paymentMethod?: string;
  transactionId?: string;
  invoiceNumber?: string;
  createdAt?: string;
}

@Component({
  selector: 'app-application-detail-modal',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './application-detail-modal.component.html',
  styleUrls: ['./application-detail-modal.component.css']
})
export class ApplicationDetailModalComponent {
  @Input() show = false;
  @Input() application: any = null;
  @Input() showActions = false; // Whether to show Approve/Reject buttons
  @Output() close = new EventEmitter<void>();
  @Output() approve = new EventEmitter<any>();
  @Output() reject = new EventEmitter<any>();

  // Payment history (Approved Members only)
  showPaymentHistory = false;
  payments: MembershipPayment[] = [];
  isLoadingPayments = false;
  isLoading = false; // Added to fix template reference
  paymentsError = '';

  constructor(private apiService: ApiService) {}

  onClose(): void {
    // reset payment state when closing
    this.showPaymentHistory = false;
    this.payments = [];
    this.isLoadingPayments = false;
    this.paymentsError = '';
    this.close.emit();
  }

  onApprove(): void {
    // Let parent decide modal flow (close detail + open approve modal).
    // If we auto-close here, parent (close) handler may clear selectedApplication
    // before the approve modal receives the application.
    this.approve.emit(this.application);
  }

  onReject(): void {
    // Let parent decide modal flow (close detail + open reject modal).
    this.reject.emit(this.application);
  }

  isApprovedMember(): boolean {
    // Approved member objects come from /membership/members and usually contain membershipStatus/membershipNumber.
    return !!this.application && (
      this.application.membershipStatus === 'ACTIVE' ||
      this.application.membershipNumber ||
      this.application.status === 'APPROVED'
    );
  }

  togglePaymentHistory(): void {
    if (!this.isApprovedMember()) return;
    this.showPaymentHistory = !this.showPaymentHistory;
    if (this.showPaymentHistory) {
      this.loadPaymentHistory();
    }
  }

  loadPaymentHistory(): void {
    if (!this.isApprovedMember() || !this.application?.id) return;

    const memberId = Number(this.application.id);
    if (!memberId) return;

    this.isLoadingPayments = true;
    this.paymentsError = '';
    this.payments = [];

    this.apiService.getMemberMembershipPaymentHistory(memberId).subscribe({
      next: (response: any) => {
        const rows = Array.isArray(response) ? response : [];
        // newest first
        this.payments = rows.sort((a: any, b: any) => {
          const ad = new Date(a?.paidDate || a?.createdAt || 0).getTime();
          const bd = new Date(b?.paidDate || b?.createdAt || 0).getTime();
          return bd - ad;
        });
        this.isLoadingPayments = false;
      },
      error: (error: any) => {
        console.error('Error loading member payment history:', error);
        this.paymentsError = error?.error?.error || error?.error?.message || 'Failed to load payment history.';
        this.isLoadingPayments = false;
      }
    });
  }

  downloadInvoice(paymentId: number, invoiceNumber?: string): void {
    if (!paymentId) return;
    const filename = (invoiceNumber && invoiceNumber.trim().length > 0 ? invoiceNumber : `invoice-${paymentId}`) + '.pdf';

    this.apiService.downloadMembershipInvoice(paymentId).subscribe({
      next: (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error: any) => {
        console.error('Invoice download failed:', error);
        this.paymentsError = 'Failed to download invoice. Please try again.';
      }
    });
  }
}
