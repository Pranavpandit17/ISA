import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnChanges {
  @Input() show = false;
  @Input() mode: 'LOGIN' | 'REGISTER' = 'LOGIN';
  @Output() close = new EventEmitter<void>();
  @Output() success = new EventEmitter<void>();
  @Output() openPayment = new EventEmitter<any>();

  // Steps for Registration
  step: 'PLAN_SELECTION' | 'AUTH_FORM' = 'AUTH_FORM';
  plans: any[] = [];
  selectedPlan: any = null;

  // Login fields
  loginEmail = '';
  loginPassword = '';

  // Registration fields
  regData = {
    applicantName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    teamSize: '',
    industry: '',
    techStack: '',
    address: '',
    password: '',
    membershipType: 'INDIVIDUAL'
  };

  isLoading = false;
  errorMessage = '';
  successMessage = '';
  showJoinIsa = false;

  ngOnChanges(): void {
    if (this.show) {
      this.errorMessage = '';
      this.successMessage = '';
      this.showJoinIsa = false;
      this.isLoading = false;

      if (this.mode === 'REGISTER') {
        this.step = 'PLAN_SELECTION';
        this.loadPlans();
      } else {
        this.step = 'AUTH_FORM';
      }
    }
  }

  loadPlans(): void {
    this.isLoading = true;
    this.apiService.getMembershipPlans().subscribe({
      next: (plans) => {
        this.plans = plans || [];
        this.isLoading = false;
        
        // Fallback: If no plans are returned from the backend, 
        // don't block the user. Auto-select a dummy free plan or just move ahead.
        if (this.plans.length === 0) {
          console.warn('No membership plans found in backend. Moving to registration form.');
          this.step = 'AUTH_FORM';
        }
      },
      error: (error) => {
        console.error('Error loading plans:', error);
        this.isLoading = false;
        // Even on error, we don't want to block registration
        this.step = 'AUTH_FORM';
      }
    });
  }

  selectPlan(plan: any): void {
    this.selectedPlan = plan;
    if (plan.price > 0) {
      // Trigger payment through parent
      this.openPayment.emit(plan);
    } else {
      // Direct to registration
      this.step = 'AUTH_FORM';
    }
  }

  getFeatureLabel(feature: any): string {
    if (feature && typeof feature === 'object') {
      return feature.name || feature.description || '';
    }
    return String(feature || '');
  }

  // Called from parent after payment success
  onPaymentSuccess(): void {
    this.step = 'AUTH_FORM';
  }

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  onClose(): void {
    this.close.emit();
    this.errorMessage = '';
    this.successMessage = '';
  }

  handleAuth(): void {
    if (this.mode === 'REGISTER') {
      this.submitApplication();
    } else {
      this.handleLogin();
    }
  }

  handleLogin(): void {
    if (!this.loginEmail || !this.loginPassword) {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.showJoinIsa = false;

    this.authService.login(this.loginEmail, this.loginPassword).subscribe({
      next: (success) => {
        this.isLoading = false;
        if (success) {
          // Emit success event - parent component will handle routing and close modal
          this.success.emit();
          // Don't close modal here - let parent component handle it after routing
        } else {
          this.errorMessage = 'Login failed. Please check your credentials.';
          this.showJoinIsa = false;
        }
      },
      error: (error) => {
        this.isLoading = false;
        const backendMessage = (error.error?.message || '').toString();

        // Check for rejected member
        if (backendMessage.toLowerCase().includes('rejected member') || backendMessage.toLowerCase().includes('rejected candidate')) {
          this.errorMessage = 'Rejected member cant login. only approved member can log in to website';
          this.showJoinIsa = false;
        } else if (error.status === 404 || backendMessage.toLowerCase().includes('not found')) {
          // If user does not exist in the system, show explicit Join ISA message and button
          this.errorMessage = 'You are not a member, Join ISA';
          this.showJoinIsa = true;
        } else {
          this.errorMessage = backendMessage || 'Invalid credentials. Please try again.';
          this.showJoinIsa = false;
        }

        console.error('Login error:', error);
      }
    });
  }

  switchToJoinIsa(): void {
    this.mode = 'REGISTER';
    this.errorMessage = '';
    this.showJoinIsa = false;
    // Prefill registration email from attempted login
    if (this.loginEmail) {
      this.regData.email = this.loginEmail;
    }
  }

  submitApplication(): void {
    // Validate required fields
    if (!this.regData.applicantName || !this.regData.email || 
        !this.regData.phone || !this.regData.company || 
        !this.regData.address || !this.regData.password) {
      this.errorMessage = 'Please fill in all required fields';
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.regData.email)) {
      this.errorMessage = 'Please enter a valid email address';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.apiService.createMembershipApplication({
      ...this.regData,
      planId: this.selectedPlan?.id
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = 'Application submitted successfully! Your membership is pending admin approval.';
        setTimeout(() => {
          this.onClose();
        }, 3000);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Error submitting application. Please try again.';
      }
    });
  }
}
