import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Resource } from '../../../models/interfaces';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-resource-post-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resource-post-modal.component.html',
  styleUrls: ['./resource-post-modal.component.css']
})
export class ResourcePostModalComponent implements OnInit, OnChanges {
  @Input() show: boolean = false;
  @Input() editResource?: Resource | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  resource: any = {
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

  skillsInput = '';
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';
  isEditMode = false;
  currentUser: any = null;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.resetForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editResource'] && changes['editResource'].currentValue) {
      this.loadResourceForEdit(changes['editResource'].currentValue);
    } else if (changes['show'] && !changes['show'].currentValue) {
      this.resetForm();
    }
  }

  loadResourceForEdit(resource: Resource): void {
    this.isEditMode = true;
    
    // Handle skills - convert to array if needed
    let skillsArray: string[] = [];
    if (Array.isArray(resource.skills)) {
      skillsArray = resource.skills;
    }

    this.resource = {
      id: resource.id,
      role: resource.role || '',
      stack: resource.stack || '',
      experience: resource.experience || '',
      availability: resource.availability || 'Immediate',
      description: resource.description || '',
      hourlyRate: resource.hourlyRate || null,
      currency: resource.currency || 'USD',
      expiryDate: resource.expiryDate ? (typeof resource.expiryDate === 'string' ? resource.expiryDate : new Date(resource.expiryDate).toISOString().split('T')[0]) : null,
      contactEmail: resource.contactEmail || '',
      contactPhone: resource.contactPhone || '',
      location: resource.location || '',
      isRemote: resource.isRemote || false,
      skills: skillsArray,
      certifications: resource.certifications || '',
      previousProjects: resource.previousProjects || ''
    };

    this.skillsInput = skillsArray.join(', ');
  }

  resetForm(): void {
    this.isEditMode = false;
    this.resource = {
      role: '',
      stack: '',
      experience: '',
      availability: 'Immediate',
      description: '',
      hourlyRate: null,
      currency: 'USD',
      expiryDate: null,
      contactEmail: this.currentUser?.email || '',
      contactPhone: '',
      location: '',
      isRemote: false,
      skills: [],
      certifications: '',
      previousProjects: ''
    };
    this.skillsInput = '';
    this.errorMessage = '';
    this.successMessage = '';
  }

  onSubmit(): void {
    // Validate required fields
    if (!this.resource.role || !this.resource.role.trim()) {
      this.errorMessage = 'Role is required';
      return;
    }
    if (!this.resource.stack || !this.resource.stack.trim()) {
      this.errorMessage = 'Tech stack is required';
      return;
    }
    if (!this.resource.experience || !this.resource.experience.trim()) {
      this.errorMessage = 'Experience is required';
      return;
    }
    if (!this.resource.availability || !this.resource.availability.trim()) {
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
      ...this.resource,
      skills: skills,
      status: this.resource.status || 'ACTIVE'
    };

    const apiCall = this.isEditMode && this.resource.id
      ? this.apiService.updateBenchResource(this.resource.id, resourceData)
      : this.apiService.createBenchResource(resourceData);

    apiCall.subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = this.isEditMode ? 'Resource updated successfully!' : 'Resource posted successfully!';
        setTimeout(() => {
          this.saved.emit();
          this.onClose();
        }, 1500);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || `Error ${this.isEditMode ? 'updating' : 'posting'} resource. Please try again.`;
        console.error(`Error ${this.isEditMode ? 'updating' : 'posting'} resource:`, error);
      }
    });
  }

  onClose(): void {
    this.close.emit();
  }
}


