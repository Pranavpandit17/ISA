import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { MembershipService } from '../../services/membership.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface MembershipPlan {
  id?: number;
  name: string;
  type: string;
  price: number;
  currency: string;
  durationMonths: number;
  level?: number;
  features: any[];
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
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.selectedPlan = this.currentUser?.currentPlanId ? { id: this.currentUser.currentPlanId } as MembershipPlan : this.membershipService.getSelectedPlan();
    this.loadPlans();
    this.membershipService.getSelectedPlan$().subscribe(plan => {
      if (!this.currentUser?.currentPlanId) {
        this.selectedPlan = plan;
      }
    });
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.selectedPlan = user?.currentPlanId ? { id: user.currentPlanId } as MembershipPlan : this.selectedPlan;
    });
  }

  loadPlans(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.getPublicPlans().subscribe({
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

  getFeatureLabel(feature: any): string {
    if (feature && typeof feature === 'object') {
      return feature.name || feature.description || '';
    }
    return String(feature || '');
  }

  isCurrentPlan(plan: MembershipPlan): boolean {
    const currentPlanId = this.currentUser?.currentPlanId || this.selectedPlan?.id;
    return !!currentPlanId && !!plan.id && currentPlanId === plan.id;
  }

  private getPlanLevel(plan: MembershipPlan): number {
    if (plan.level != null && plan.level > 0) {
      return plan.level;
    }
    // Fallback based on price if level is missing
    const price = plan.price || 0;
    if (price <= 0) return 1;
    if (price <= 3500) return 2;
    if (price <= 7000) return 3;
    return 4;
  }

  private getCurrentPlanLevel(): number {
    if (!this.currentUser) return 0;
    
    // If user has a plan ID but no level, try to find it in the loaded plans
    if (this.currentUser.currentPlanId && (!this.currentUser.currentPlanLevel || this.currentUser.currentPlanLevel === 0)) {
      const current = this.plans.find(p => p.id === this.currentUser?.currentPlanId);
      if (current) return this.getPlanLevel(current);
    }
    
    return this.currentUser.currentPlanLevel || 0;
  }

  canSelectPlan(plan: MembershipPlan): boolean {
    if (!this.currentUser) return true; // Let them click, they'll be prompted to login/register
    
    // Admin bypass: Admins can select/test any plan
    const isAdmin = this.currentUser.role === 'admin' || this.currentUser.type === 'ADMIN';
    if (isAdmin) return !this.isCurrentPlan(plan);

    if (this.isCurrentPlan(plan)) {
      return false;
    }

    const currentLevel = this.getCurrentPlanLevel();
    if (!currentLevel || currentLevel === 0) {
      return true;
    }

    // Allow upgrades (selecting a plan with a higher level)
    return this.getPlanLevel(plan) > currentLevel;
  }

  getPlanActionLabel(plan: MembershipPlan): string {
    if (this.isCurrentPlan(plan)) {
      return 'Current Plan';
    }
    if (this.canSelectPlan(plan)) {
      return this.getCurrentPlanLevel() ? 'Upgrade Plan' : 'Choose Plan';
    }
    return 'Not Allowed';
  }

  startSelectPlan(plan: MembershipPlan): void {
    if (!this.canSelectPlan(plan)) {
      return;
    }
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
        this.toastr.error('Failed to download invoice. Please try again.', 'Error');
      }
    });
  }

  confirmSelection(): void {
    if (!this.confirmingPlan || !this.confirmingPlan.id) return;

    this.isProcessing = true;
    const plan = this.confirmingPlan;
    const planId = plan.id!; // Non-null assertion since we checked above

    this.apiService.selectPlan(planId).subscribe({
      next: () => {
        this.membershipService.setSelectedPlan(plan);
        this.authService.refreshCurrentUserProfile().subscribe({
          next: () => {
            this.isProcessing = false;
            this.confirmingPlan = null;
            this.toastr.success('Membership plan selected successfully.', 'Success');
            this.router.navigate(['/dashboard']);
          },
          error: () => {
            this.isProcessing = false;
            this.confirmingPlan = null;
            this.toastr.success('Membership plan selected successfully.', 'Success');
            this.router.navigate(['/dashboard']);
          }
        });
      },
      error: (error: any) => {
        console.error('Error selecting membership plan:', error);
        this.isProcessing = false;
        this.toastr.error(error?.error?.error || error?.error?.message || 'Unable to select membership plan.', 'Error');
      }
    });
  }
}



