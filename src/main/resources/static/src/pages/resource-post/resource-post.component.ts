import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewState } from '../../models/interfaces';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-resource-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resource-post.component.html',
  styleUrls: ['./resource-post.component.css']
})
export class ResourcePostComponent implements OnInit {
  @Output() navigate = new EventEmitter<ViewState>();

  newResource = {
    role: '',
    stack: '',
    experience: '',
    availability: 'Immediate',
    description: '',
    hourlyRate: null as number | null,
    currency: 'USD',
    expiryDate: null as string | null,
    contactEmail: '',
    contactPhone: '',
    location: '',
    isRemote: false,
    skills: [] as string[],
    certifications: '',
    previousProjects: ''
  };

  currentUser: any = null;
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';
  skillsInput = '';

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.newResource.contactEmail = this.currentUser.email || '';
    }
  }

  onNavigate(view: ViewState): void {
    this.navigate.emit(view);
  }

  submitResource(): void {
    // Validate required fields
    if (!this.newResource.role || !this.newResource.role.trim()) {
      this.errorMessage = 'Role is required';
      return;
    }
    if (!this.newResource.stack || !this.newResource.stack.trim()) {
      this.errorMessage = 'Tech stack is required';
      return;
    }
    if (!this.newResource.experience || !this.newResource.experience.trim()) {
      this.errorMessage = 'Experience is required';
      return;
    }
    if (!this.newResource.availability || !this.newResource.availability.trim()) {
      this.errorMessage = 'Availability is required';
      return;
    }

    if (!this.currentUser) {
      this.errorMessage = 'Please login to post a resource';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Parse skills from comma-separated string
    const skills = this.skillsInput
      ? this.skillsInput.split(',').map(s => s.trim()).filter(s => s.length > 0)
      : [];

    const resourceData = {
      ...this.newResource,
      skills: skills,
      status: 'ACTIVE'
    };

    this.apiService.createBenchResource(resourceData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = 'Resource posted successfully!';
        setTimeout(() => {
          this.onNavigate('BENCH');
        }, 1500);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || 'Error posting resource. Please try again.';
        console.error('Error posting resource:', error);
      }
    });
  }
}

