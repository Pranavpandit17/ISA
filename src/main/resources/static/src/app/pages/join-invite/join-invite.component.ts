import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-join-invite',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './join-invite.component.html',
  styleUrls: ['./join-invite.component.css']
})
export class JoinInviteComponent implements OnInit {
  inviteToken = '';
  inviteRef = '';
  tokenChecked = false;
  tokenValid = false;
  submitted = false;
  isSubmitting = false;
  errorMessage = '';
  membershipNumberHint = '';

  form = {
    company: '',
    website: '',
    applicantName: '',
    email: '',
    phone: '',
    teamSize: '',
    industry: '',
    techStack: '',
    address: '',
    password: '',
    membershipType: 'CORPORATE'
  };

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.inviteToken = String(this.route.snapshot.queryParamMap.get('token') || '').trim();
    this.inviteRef = String(this.route.snapshot.queryParamMap.get('ref') || '').trim();

    if (!this.inviteToken) {
      this.tokenChecked = true;
      this.tokenValid = false;
      return;
    }

    this.apiService.validateInviteToken(this.inviteToken).subscribe({
      next: (res) => {
        this.tokenValid = !!res?.valid;
        this.tokenChecked = true;
      },
      error: () => {
        this.tokenValid = false;
        this.tokenChecked = true;
      }
    });
  }

  get shareUrlHint(): string {
    const base = typeof window !== 'undefined' ? `${window.location.origin}/join` : '/join';
    const params = new URLSearchParams();
    params.set('token', this.inviteToken || 'YOUR_TOKEN');
    if (this.inviteRef) {
      params.set('ref', this.inviteRef);
    }
    return `${base}?${params.toString()}`;
  }

  onSubmit(): void {
    this.errorMessage = '';
    if (!this.tokenValid) {
      this.errorMessage = 'A valid invite token is required.';
      return;
    }
    if (!this.validate()) {
      return;
    }

    this.isSubmitting = true;
    const payload = {
      ...this.form,
      inviteToken: this.inviteToken,
      notes: this.inviteRef ? `Invite ref: ${this.inviteRef}` : undefined
    };

    this.apiService.registerViaInvite(payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitted = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage =
          error?.error?.message ||
          error?.error?.error ||
          'Registration failed. Please check your details and try again.';
      }
    });
  }

  private validate(): boolean {
    const f = this.form;
    if (!f.company || !f.applicantName || !f.email || !f.phone || !f.teamSize || !f.industry || !f.address || !f.password) {
      this.errorMessage = 'Please fill in all required fields marked with *.';
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(f.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return false;
    }
    if (f.password.length < 6) {
      this.errorMessage = 'Password should be at least 6 characters.';
      return false;
    }
    return true;
  }
}
