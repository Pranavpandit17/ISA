import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ConfirmService } from '../../services/confirm.service';

interface PlanFeature {
  id: number;
  code: string;
  name: string;
  description?: string;
  category: string;
  isActive: boolean;
}

interface MembershipPlan {
  id?: number;
  name: string;
  type: string;
  price: number;
  currency: string;
  durationMonths: number;
  features: any[];
  planFeatures?: PlanFeature[]; // Features from PlanFeature entity
  isActive: boolean;
  // UI-only field to distinguish free vs paid plans (backend still uses price)
  costType?: 'FREE' | 'PAID';
  createdAt?: string;
  memberCount?: number; // Number of members registered for this plan
}

@Component({
  selector: 'app-membership-plan-management',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './membership-plan-management.component.html',
  styleUrls: ['./membership-plan-management.component.css']
})
export class MembershipPlanManagementComponent implements OnInit, OnDestroy {
  plans: MembershipPlan[] = [];
  selectedPlan: MembershipPlan | null = null;
  isEditMode = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  showFormFlag = false; // Track if form should be visible

  // Simple form model
  form: MembershipPlan = this.getEmptyPlan();
  featuresText = ''; // comma-separated features in UI (legacy, kept for backward compatibility)
  
  // Plan features (from PlanFeature entity)
  availableFeatures: PlanFeature[] = [];
  selectedFeatureIds: number[] = []; // Selected feature IDs for the current plan

  // Current user (for admin check)
  currentUser: any = null;
  isAdmin = false;
  private userSubscription?: Subscription;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private toastr: ToastrService,
    private confirmService: ConfirmService
  ) {}

  ngOnInit(): void {
    // Subscribe to user changes
    this.userSubscription = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.updateAdminStatus();
    });
    
    // Initial check
    this.currentUser = this.authService.getCurrentUser();
    this.updateAdminStatus();
    
    this.loadPlans();
    this.loadAvailableFeatures();
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  private updateAdminStatus(): void {
    this.isAdmin = this.authService.isAdmin() || this.currentUser?.role === 'admin' || this.currentUser?.role === 'ADMIN';
    
    // Debug logging (can be removed in production)
    if (this.currentUser) {
      console.log('Membership Plan Management - User:', this.currentUser);
      console.log('Membership Plan Management - Role:', this.currentUser.role);
      console.log('Membership Plan Management - Is Admin:', this.isAdmin);
    }
  }

  getEmptyPlan(): MembershipPlan {
    return {
      name: '',
      type: 'INDIVIDUAL',
      price: 0, // Free by default until a paid cost type is chosen
      currency: 'INR',
      durationMonths: 12,
      features: [],
      isActive: true,
      costType: 'FREE'
    };
  }

  loadPlans(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.apiService.getAllMembershipPlansAdmin().subscribe({
      next: (response: any) => {
        this.plans = Array.isArray(response) ? response : [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading membership plans:', error);
        this.errorMessage = 'Error loading membership plans. Please try again.';
        this.isLoading = false;
      }
    });
  }

  startCreate(): void {
    this.isEditMode = false;
    this.selectedPlan = null;
    this.form = this.getEmptyPlan();
    this.featuresText = '';
    this.selectedFeatureIds = [];
    this.showFormFlag = true;
    this.loadAvailableFeatures();
  }

  startEdit(plan: MembershipPlan): void {
    this.isEditMode = true;
    this.selectedPlan = plan;
    this.form = {
      id: plan.id,
      name: plan.name,
      type: plan.type,
      price: plan.price,
      currency: plan.currency || 'INR',
      durationMonths: plan.durationMonths,
      features: plan.features || [],
      planFeatures: plan.planFeatures || [],
      isActive: plan.isActive,
      createdAt: plan.createdAt,
      // Infer cost type from price for existing plans
      costType: (plan.price && plan.price > 0) ? 'PAID' : 'FREE'
    };
    this.featuresText = (plan.features || [])
      .map((f: any) => {
        if (f && typeof f === 'object') {
          return f.name || f.description || '';
        }
        return String(f || '');
      })
      .filter((f: string) => !!f)
      .join(', ');
    
    // Load existing features for this plan
    if (plan.id) {
      this.loadPlanFeatures(plan.id);
    } else {
      this.selectedFeatureIds = [];
    }
    
    this.showFormFlag = true;
    this.loadAvailableFeatures();
  }

  cancelEdit(): void {
    this.isEditMode = false;
    this.selectedPlan = null;
    this.form = this.getEmptyPlan();
    this.featuresText = '';
    this.selectedFeatureIds = [];
    this.showFormFlag = false;
  }

  private parseFeatures(text: string): string[] {
    if (!text) return [];
    return text
      .split(',')
      .map(f => f.trim())
      .filter(f => f.length > 0);
  }

  loadAvailableFeatures(): void {
    this.apiService.getActivePlanFeatures().subscribe({
      next: (response: any) => {
        this.availableFeatures = Array.isArray(response) ? response : [];
      },
      error: (error) => {
        console.error('Error loading available features:', error);
      }
    });
  }

  loadPlanFeatures(planId: number): void {
    this.apiService.getPlanFeaturesByPlan(planId).subscribe({
      next: (response: any) => {
        const features = Array.isArray(response) ? response : [];
        this.selectedFeatureIds = features.map((f: PlanFeature) => f.id).filter((id: number) => id != null);
      },
      error: (error) => {
        console.error('Error loading plan features:', error);
        this.selectedFeatureIds = [];
      }
    });
  }

  toggleFeatureSelection(featureId: number): void {
    const index = this.selectedFeatureIds.indexOf(featureId);
    if (index > -1) {
      this.selectedFeatureIds.splice(index, 1);
    } else {
      this.selectedFeatureIds.push(featureId);
    }
  }

  isFeatureSelected(featureId: number): boolean {
    return this.selectedFeatureIds.includes(featureId);
  }

  savePlan(): void {
    this.errorMessage = '';

    const isFree = this.form.costType === 'FREE';

    // Basic validation
    if (!this.form.name || !this.form.type) {
      this.errorMessage = 'Please fill in Plan Name and Plan Type.';
      return;
    }

    if (!isFree) {
      if (!this.form.currency) {
        this.errorMessage = 'Please select a currency for paid membership.';
        return;
      }
      if (!this.form.price || this.form.price <= 0) {
        this.errorMessage = 'Please enter a valid positive price for paid membership.';
        return;
      }
    } else {
      // Force free plans to have zero price
      this.form.price = 0;
    }
    if (!this.form.durationMonths || this.form.durationMonths <= 0) {
      this.errorMessage = 'Duration (months) must be greater than 0.';
      return;
    }

    const payload: MembershipPlan = {
      ...this.form,
      features: this.parseFeatures(this.featuresText)
    };

    this.isLoading = true;

    if (this.isEditMode && this.form.id) {
      // Update existing plan
      this.apiService.updateMembershipPlan(this.form.id, payload).subscribe({
        next: () => {
          // Assign features to plan after updating
          this.assignFeaturesToPlan(this.form.id!, this.selectedFeatureIds);
        },
        error: (error) => {
          console.error('Error updating plan:', error);
          this.errorMessage = error.error?.message || 'Error updating plan. Please try again.';
          this.toastr.error(this.errorMessage, 'Error');
          this.isLoading = false;
        }
      });
    } else {
      // Create new plan
      this.apiService.createMembershipPlan(payload).subscribe({
        next: (response: any) => {
          // Extract plan ID from response (could be response.id, response.planId, or in nested object)
          const newPlanId = response?.id || response?.planId || (response?.data && response.data.id) || (response?.plan && response.plan.id);
          
          if (newPlanId) {
            // Assign features to the newly created plan (even if empty array)
            this.assignFeaturesToPlan(newPlanId, this.selectedFeatureIds);
          } else {
            // If we can't get the plan ID, still show success but warn about features
            if (this.selectedFeatureIds.length > 0) {
              this.toastr.warning('Plan created but could not assign features. Please edit the plan to assign features.', 'Warning');
            } else {
              this.toastr.success('Membership plan created successfully', 'Created');
            }
            this.isLoading = false;
            this.cancelEdit();
            this.loadPlans();
          }
        },
        error: (error) => {
          console.error('Error creating plan:', error);
          this.errorMessage = error.error?.message || 'Error creating plan. Please try again.';
          this.toastr.error(this.errorMessage, 'Error');
          this.isLoading = false;
        }
      });
    }
  }

  private assignFeaturesToPlan(planId: number, featureIds: number[]): void {
    // Always call assign API, even if featureIds is empty (to clear existing assignments)
    this.apiService.assignFeaturesToPlan(planId, featureIds).subscribe({
      next: () => {
        const featureCount = featureIds.length;
        if (featureCount > 0) {
          this.toastr.success(`Membership plan saved successfully with ${featureCount} feature${featureCount === 1 ? '' : 's'}`, 'Success');
        } else {
          this.toastr.success('Membership plan saved successfully', 'Success');
        }
        this.isLoading = false;
        this.cancelEdit();
        this.loadPlans();
      },
      error: (error) => {
        console.error('Error assigning features to plan:', error);
        // Plan was saved but features assignment failed
        if (featureIds.length > 0) {
          this.toastr.warning('Plan saved but there was an error assigning features. Please try editing the plan to assign features.', 'Warning');
        } else {
          this.toastr.success('Plan saved successfully', 'Success');
        }
        this.isLoading = false;
        this.cancelEdit();
        this.loadPlans();
      }
    });
  }

  toggleActive(plan: MembershipPlan): void {
    if (!plan.id) return;
    const updated: MembershipPlan = { ...plan, isActive: !plan.isActive };
    this.apiService.updateMembershipPlan(plan.id, updated).subscribe({
      next: () => {
        this.toastr.success('Plan status updated', 'Updated');
        this.loadPlans();
      },
      error: (error) => {
        console.error('Error toggling plan status:', error);
        this.toastr.error('Error updating plan status. Please try again.', 'Error');
      }
    });
  }

  deletePlan(plan: MembershipPlan): void {
    if (!plan.id) return;
    this.confirmService.confirm({
      title: 'Delete Plan',
      message: `Are you sure you want to delete the plan "${plan.name}"?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      isDestructive: true
    }).subscribe(confirmed => {
      if (!confirmed) return;

      this.apiService.deleteMembershipPlan(plan.id!).subscribe({
        next: () => {
          this.toastr.success('Membership plan deleted successfully', 'Deleted');
          this.loadPlans();
        },
        error: (error) => {
          console.error('Error deleting plan:', error);
          this.toastr.error(error.error?.message || 'Error deleting plan. Please try again.', 'Error');
        }
      });
    });
  }

  // Computed properties for stats
  get totalCount(): number {
    return this.plans.length;
  }

  get activeCount(): number {
    return this.plans.filter(p => p.isActive).length;
  }

  get inactiveCount(): number {
    return this.plans.filter(p => !p.isActive).length;
  }

  get showForm(): boolean {
    return this.showFormFlag;
  }

  onPrimaryButtonClick(): void {
    if (this.showFormFlag) {
      this.cancelEdit();
    } else {
      this.startCreate();
    }
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
}



