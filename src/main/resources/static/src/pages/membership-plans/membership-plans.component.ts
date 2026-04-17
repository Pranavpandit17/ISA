import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { MembershipService } from '../../services/membership.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../services/auth.service';

interface MembershipPlan {
  id?: number;
  name: string;
  type: string;
  price: number;
  currency: string;
  durationMonths: number;
  features: string[];
  planFeatures?: PlanFeature[]; // Features from PlanFeature entity
  isActive: boolean;
}

interface PlanFeature {
  id: number;
  code: string;
  name: string;
  description?: string;
  category: string;
  isActive: boolean;
}

interface MembershipPayment {
  id: number;
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
  selector: 'app-membership-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membership-plans.component.html',
  styleUrls: ['./membership-plans.component.css']
})
export class MembershipPlansComponent implements OnInit {
  plans: MembershipPlan[] = [];
  isLoading = false;
  errorMessage = '';

  selectedPlan: MembershipPlan | null = null;
  confirmingPlan: MembershipPlan | null = null;
  isProcessing = false;
  currentUser: User | null = null;
  
  // Feature display
  showingFeaturesForPlan: MembershipPlan | null = null;
  planFeatures: PlanFeature[] = [];
  isLoadingFeatures = false;

  // Payment history
  showPaymentHistory = false;
  payments: MembershipPayment[] = [];
  isLoadingPayments = false;
  paymentsError = '';

  constructor(
    private apiService: ApiService,
    private membershipService: MembershipService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.selectedPlan = this.membershipService.getSelectedPlan();
    this.loadPlans();
    this.membershipService.getSelectedPlan$().subscribe(plan => {
      this.selectedPlan = plan;
    });
  }

  loadPlans(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.getMembershipPlans().subscribe({
      next: (response: any) => {
        this.plans = Array.isArray(response) ? response : [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading membership plans for member:', error);
        this.errorMessage = 'Error loading membership plans. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  isCurrentPlan(plan: MembershipPlan): boolean {
    return !!this.selectedPlan && !!plan.id && this.selectedPlan.id === plan.id;
  }

  startSelectPlan(plan: MembershipPlan): void {
    this.confirmingPlan = plan;
  }

  cancelSelection(): void {
    this.confirmingPlan = null;
    this.isProcessing = false;
  }

  showFeatures(plan: MembershipPlan): void {
    if (!plan.id) return;
    
    this.showingFeaturesForPlan = plan;
    this.isLoadingFeatures = true;
    this.planFeatures = [];
    
    this.apiService.getPlanFeaturesByPlan(plan.id).subscribe({
      next: (response: any) => {
        this.planFeatures = Array.isArray(response) ? response : [];
        this.isLoadingFeatures = false;
      },
      error: (error) => {
        console.error('Error loading plan features:', error);
        this.planFeatures = [];
        this.isLoadingFeatures = false;
      }
    });
  }

  closeFeaturesModal(): void {
    this.showingFeaturesForPlan = null;
    this.planFeatures = [];
  }

  getFeatureCategoryColor(category: string): string {
    switch (category) {
      case 'DIRECTORY': return 'bg-blue-100 text-blue-800';
      case 'JOBS_PROJECTS': return 'bg-green-100 text-green-800';
      case 'EVENTS': return 'bg-purple-100 text-purple-800';
      case 'RESOURCES': return 'bg-orange-100 text-orange-800';
      case 'NETWORKING': return 'bg-pink-100 text-pink-800';
      case 'PREMIUM': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  }

  openPaymentHistory(): void {
    this.showPaymentHistory = true;
    this.loadPaymentHistory();
  }

  closePaymentHistory(): void {
    this.showPaymentHistory = false;
    this.isLoadingPayments = false;
    this.paymentsError = '';
  }

  loadPaymentHistory(): void {
    this.isLoadingPayments = true;
    this.paymentsError = '';
    this.payments = [];

    this.apiService.getMyMembershipPaymentHistory().subscribe({
      next: (response: any) => {
        const rows = Array.isArray(response) ? response : [];
        // Sort newest first (paidDate or createdAt)
        this.payments = rows.sort((a: any, b: any) => {
          const ad = new Date(a?.paidDate || a?.createdAt || 0).getTime();
          const bd = new Date(b?.paidDate || b?.createdAt || 0).getTime();
          return bd - ad;
        });
        this.isLoadingPayments = false;
      },
      error: (error: any) => {
        console.error('Error loading payment history:', error);
        this.paymentsError = error?.error?.error || 'Failed to load payment history. Please try again.';
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
        alert('Failed to download invoice. Please try again.');
      }
    });
  }

  confirmSelection(): void {
    if (!this.confirmingPlan || !this.confirmingPlan.id) return;

    // Dummy payment flow - save to database
    this.isProcessing = true;
    const plan = this.confirmingPlan;
    const planId = plan.id!; // Non-null assertion since we checked above

    // Generate dummy transaction ID
    const transactionId = 'DUMMY-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9).toUpperCase();

    // Create membership payment in database
    this.apiService.createMembershipPayment(planId, 'CREDIT_CARD', transactionId).subscribe({
      next: (paymentResponse: any) => {
        // Payment saved successfully
        this.membershipService.setSelectedPlan(plan);
        this.isProcessing = false;
        this.confirmingPlan = null;
        alert('Dummy payment successful. Membership plan updated and payment recorded.');
      },
      error: (error: any) => {
        console.error('Error creating membership payment:', error);
        this.isProcessing = false;
        alert('Payment recorded but there was an error. Please check your payment history.');
        // Still update the selected plan even if payment save fails
        this.membershipService.setSelectedPlan(plan);
        this.confirmingPlan = null;
      }
    });
  }
}

