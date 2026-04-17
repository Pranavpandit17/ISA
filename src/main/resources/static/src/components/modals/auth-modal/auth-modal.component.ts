import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export class AuthModalComponent {
  @Input() show = false;
  @Input() mode: 'LOGIN' | 'REGISTER' = 'LOGIN';
  @Output() close = new EventEmitter<void>();
  @Output() success = new EventEmitter<void>();

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

    this.apiService.createMembershipApplication(this.regData).subscribe({
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
