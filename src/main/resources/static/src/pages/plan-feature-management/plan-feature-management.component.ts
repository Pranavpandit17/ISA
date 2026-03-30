import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

interface PlanFeature {
  id?: number;
  code: string;
  name: string;
  description?: string;
  category: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
  planIds?: number[];
}

@Component({
  selector: 'app-plan-feature-management',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './plan-feature-management.component.html',
  styleUrls: ['./plan-feature-management.component.css']
})
export class PlanFeatureManagementComponent implements OnInit, OnDestroy {
  features: PlanFeature[] = [];
  filteredFeatures: PlanFeature[] = [];
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  
  // Tab state
  activeTab: 'ALL' | string = 'ALL';
  
  // Form state
  showForm = false;
  isEditMode = false;
  selectedFeature: PlanFeature | null = null;
  form: PlanFeature = this.getEmptyForm();

  // Category options
  categories = ['GENERAL', 'DIRECTORY', 'JOBS_PROJECTS', 'EVENTS', 'RESOURCES', 'NETWORKING', 'PREMIUM'];

  // Current user (for admin check)
  currentUser: any = null;
  isAdmin = false;
  private userSubscription?: Subscription;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private toastr: ToastrService
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
    
    this.loadFeatures();
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
      console.log('Plan Feature Management - User:', this.currentUser);
      console.log('Plan Feature Management - Role:', this.currentUser.role);
      console.log('Plan Feature Management - Is Admin:', this.isAdmin);
    }
  }

  loadFeatures(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.apiService.getPlanFeatures().subscribe({
      next: (response: any) => {
        this.features = Array.isArray(response) ? response : [];
        this.filterFeatures();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading features:', error);
        this.errorMessage = 'Error loading features. Please try again.';
        this.toastr.error(this.errorMessage, 'Error');
        this.isLoading = false;
      }
    });
  }

  filterFeatures(): void {
    if (this.activeTab === 'ALL') {
      this.filteredFeatures = this.features;
    } else {
      this.filteredFeatures = this.features.filter(
        f => f.category === this.activeTab
      );
    }
  }

  onTabChange(tab: string): void {
    this.activeTab = tab;
    this.filterFeatures();
  }

  getEmptyForm(): PlanFeature {
    return {
      code: '',
      name: '',
      description: '',
      category: 'GENERAL',
      isActive: true
    };
  }

  startCreate(): void {
    this.isEditMode = false;
    this.selectedFeature = null;
    this.form = this.getEmptyForm();
    this.showForm = true;
    this.errorMessage = '';
    this.successMessage = '';
    
    // Scroll to form after a short delay to ensure it's rendered
    setTimeout(() => {
      const formElement = document.querySelector('.feature-form-panel');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  startEdit(feature: PlanFeature): void {
    this.isEditMode = true;
    this.selectedFeature = feature;
    this.form = { ...feature };
    this.showForm = true;
    this.errorMessage = '';
  }

  cancelEdit(): void {
    this.isEditMode = false;
    this.selectedFeature = null;
    this.form = this.getEmptyForm();
    this.showForm = false;
    this.errorMessage = '';
    this.successMessage = '';
  }

  saveFeature(): void {
    // Reset messages
    this.errorMessage = '';
    this.successMessage = '';

    // Validation
    if (!this.form.code || !this.form.code.trim()) {
      this.errorMessage = 'Feature Code is required.';
      this.toastr.error('Feature Code is required.', 'Validation Error');
      return;
    }

    if (!this.form.name || !this.form.name.trim()) {
      this.errorMessage = 'Feature Name is required.';
      this.toastr.error('Feature Name is required.', 'Validation Error');
      return;
    }

    // Validate code format (uppercase, alphanumeric and underscores)
    const codeRegex = /^[A-Z0-9_]+$/;
    const trimmedCode = this.form.code.trim().toUpperCase();
    
    if (!codeRegex.test(trimmedCode)) {
      this.errorMessage = 'Code must contain only uppercase letters, numbers, and underscores.';
      this.toastr.error('Invalid code format. Use only uppercase letters, numbers, and underscores.', 'Validation Error');
      return;
    }

    // Check minimum length
    if (trimmedCode.length < 3) {
      this.errorMessage = 'Code must be at least 3 characters long.';
      this.toastr.error('Code must be at least 3 characters long.', 'Validation Error');
      return;
    }

    if (this.form.name.trim().length < 3) {
      this.errorMessage = 'Feature Name must be at least 3 characters long.';
      this.toastr.error('Feature Name must be at least 3 characters long.', 'Validation Error');
      return;
    }

    this.isLoading = true;
    const payload: any = {
      code: trimmedCode,
      name: this.form.name.trim(),
      description: this.form.description?.trim() || '',
      category: this.form.category,
      isActive: this.form.isActive !== undefined ? this.form.isActive : true
    };

    if (this.isEditMode && this.form.id) {
      // Update existing feature
      this.apiService.updatePlanFeature(this.form.id, payload).subscribe({
        next: (response: any) => {
          this.toastr.success('Feature updated successfully', 'Updated');
          this.isLoading = false;
          this.cancelEdit();
          this.loadFeatures();
        },
        error: (error: any) => {
          console.error('Error updating feature:', error);
          const errorMsg = error.error?.error || error.error?.message || 'Error updating feature. Please try again.';
          this.errorMessage = errorMsg;
          this.toastr.error(errorMsg, 'Error');
          this.isLoading = false;
        }
      });
    } else {
      // Create new feature
      this.apiService.createPlanFeature(payload).subscribe({
        next: (response: any) => {
          this.successMessage = 'Feature created successfully!';
          this.toastr.success('Feature created successfully', 'Created');
          this.isLoading = false;
          this.cancelEdit();
          this.loadFeatures();
        },
        error: (error: any) => {
          console.error('Error creating feature:', error);
          const errorMsg = error.error?.error || error.error?.message || 'Error creating feature. Please try again.';
          
          // Handle specific error cases
          if (errorMsg.includes('already exists') || errorMsg.includes('duplicate')) {
            this.errorMessage = 'A feature with this code already exists. Please use a different code.';
            this.toastr.error('A feature with this code already exists.', 'Duplicate Code');
          } else {
            this.errorMessage = errorMsg;
            this.toastr.error(errorMsg, 'Error');
          }
          this.isLoading = false;
        }
      });
    }
  }

  // Auto-format code to uppercase as user types
  onCodeInput(event: any): void {
    const value = event.target.value.toUpperCase().replace(/[^A-Z0-9_]/g, '');
    this.form.code = value;
  }

  // Validate code format in real-time
  validateCode(): boolean {
    if (!this.form.code) return true; // Don't show error if empty
    const codeRegex = /^[A-Z0-9_]+$/;
    return codeRegex.test(this.form.code);
  }

  // Check if form is valid
  isFormValid(): boolean {
    return !!(
      this.form.code &&
      this.form.code.trim().length >= 3 &&
      this.form.name &&
      this.form.name.trim().length >= 3 &&
      this.validateCode()
    );
  }

  deleteFeature(feature: PlanFeature): void {
    if (!feature.id) return;
    if (!confirm(`Are you sure you want to delete feature "${feature.name}"? This will remove it from all plans.`)) {
      return;
    }

    this.isLoading = true;
    this.apiService.deletePlanFeature(feature.id).subscribe({
      next: () => {
        this.toastr.success('Feature deleted successfully', 'Deleted');
        this.loadFeatures();
      },
      error: (error) => {
        console.error('Error deleting feature:', error);
        this.toastr.error(error.error?.error || 'Error deleting feature.', 'Error');
        this.isLoading = false;
      }
    });
  }

  getCategoryColor(category: string): string {
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

  get totalCount(): number {
    return this.features.length;
  }

  get activeCount(): number {
    return this.features.filter(f => f.isActive).length;
  }

  get inactiveCount(): number {
    return this.features.filter(f => !f.isActive).length;
  }

  getCategoryCount(category: string): number {
    return this.features.filter(f => f.category === category).length;
  }
}
