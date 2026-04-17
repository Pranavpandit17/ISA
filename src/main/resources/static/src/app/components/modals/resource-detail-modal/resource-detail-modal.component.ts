import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Resource } from '../../../models/interfaces';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-resource-detail-modal',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './resource-detail-modal.component.html',
  styleUrls: ['./resource-detail-modal.component.css']
})
export class ResourceDetailModalComponent implements OnInit, OnChanges {
  @Input() show: boolean = false;
  @Input() resource: Resource | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() interestSubmitted = new EventEmitter<void>();
  @Output() editResource = new EventEmitter<Resource>();
  @Output() archiveResource = new EventEmitter<Resource>();
  @Output() unarchiveResource = new EventEmitter<Resource>();

  interestForm = {
    message: '',
    contactEmail: '',
    contactPhone: ''
  };

  isSubmitting = false;
  errorMessage = '';
  successMessage = '';
  currentUser: any = null;
  showInterestForm = false;
  isOwnResource = false;
  interests: any[] = [];
  isLoadingInterests = false;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.interestForm.contactEmail = this.currentUser.email || '';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['show'] && changes['show'].currentValue && this.resource) {
      this.checkOwnership();
      this.resetInterestForm();
      // Always try to load interests - backend will handle authorization
      // This ensures we don't miss interests due to frontend ownership check issues
      if (this.resource && this.resource.id && typeof this.resource.id === 'number') {
        // Small delay to ensure modal is fully rendered
        setTimeout(() => {
          this.loadInterests();
        }, 200);
      }
    }
    if (changes['show'] && !changes['show'].currentValue) {
      this.resetInterestForm();
      this.interests = [];
    }
    if (changes['resource'] && changes['resource'].currentValue && this.resource) {
      this.checkOwnership();
      // Reload interests when resource changes
      if (this.resource.id && typeof this.resource.id === 'number') {
        setTimeout(() => {
          this.loadInterests();
        }, 200);
      }
    }
  }

  loadInterests(): void {
    if (!this.resource?.id || typeof this.resource.id !== 'number') {
      console.warn('Cannot load interests: resource ID is missing or invalid', this.resource);
      return;
    }

    // Always attempt to load interests - let the backend handle authorization
    // This ensures we don't miss interests due to frontend ownership check issues
    console.log('Loading interests for resource:', this.resource.id, 'isOwnResource:', this.isOwnResource);
    this.isLoadingInterests = true;
    this.apiService.getResourceInterests(this.resource.id).subscribe({
      next: (response: any) => {
        console.log('Interests API response:', response);
        this.interests = Array.isArray(response) ? response : [];
        this.isLoadingInterests = false;
        console.log('Successfully loaded interests:', this.interests.length);
        
        // If we got interests (even empty array), user must own the resource
        // Set isOwnResource to true so the section is displayed
        this.isOwnResource = true;
        
        // Scroll to interests section after loading (with delay to ensure DOM is ready)
        if (this.interests.length > 0) {
          setTimeout(() => {
            this.scrollToInterests();
          }, 300);
        }
      },
      error: (error) => {
        console.error('Error loading interests:', error);
        console.error('Error status:', error.status);
        console.error('Error message:', error.error);
        
        if (error.status === 403) {
          // User doesn't own the resource
          console.warn('User does not own this resource, cannot view interests');
          this.isOwnResource = false;
        } else if (error.status === 401) {
          console.warn('Unauthorized to view interests - user not logged in');
        } else if (error.status === 404) {
          console.warn('Resource not found');
        } else {
          console.error('Unexpected error loading interests:', error);
        }
        this.interests = [];
        this.isLoadingInterests = false;
      }
    });
  }

  refreshInterests(): void {
    this.loadInterests();
  }

  scrollToInterests(): void {
    // Scroll to interests section if it exists
    setTimeout(() => {
      const element = document.getElementById('interests-section');
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }, 300);
  }

  checkOwnership(): void {
    if (!this.currentUser || !this.resource) {
      this.isOwnResource = false;
      console.log('Ownership check failed: missing currentUser or resource', {
        hasCurrentUser: !!this.currentUser,
        hasResource: !!this.resource,
        currentUserId: this.currentUser?.id,
        resourcePostedBy: this.resource?.postedBy
      });
      return;
    }
    
    // Check ownership by ID or email
    const postedById = typeof this.resource.postedBy === 'number' 
      ? this.resource.postedBy 
      : (this.resource.postedBy ? parseInt(String(this.resource.postedBy)) : null);
    
    const currentUserId = typeof this.currentUser.id === 'number' 
      ? this.currentUser.id 
      : parseInt(String(this.currentUser.id));
    
    const ownsById = postedById !== null && currentUserId !== null && postedById === currentUserId;
    const ownsByEmail = Boolean(this.resource.postedByEmail && this.resource.postedByEmail === this.currentUser.email);
    
    this.isOwnResource = ownsById || ownsByEmail;
    
    console.log('Ownership check result:', {
      isOwnResource: this.isOwnResource,
      postedById,
      currentUserId,
      ownsById,
      ownsByEmail,
      postedByEmail: this.resource.postedByEmail,
      currentUserEmail: this.currentUser.email
    });
  }

  resetInterestForm(): void {
    this.interestForm = {
      message: '',
      contactEmail: this.currentUser?.email || '',
      contactPhone: ''
    };
    this.showInterestForm = false;
    this.errorMessage = '';
    this.successMessage = '';
  }

  onSubmitInterest(): void {
    if (!this.resource || !this.currentUser) {
      this.errorMessage = 'Please login to show interest';
      return;
    }

    if (!this.resource.id || typeof this.resource.id !== 'number') {
      this.errorMessage = 'Resource information is missing';
      return;
    }

    if (!this.interestForm.message || !this.interestForm.message.trim()) {
      this.errorMessage = 'Please enter a message';
      return;
    }

    if (!this.interestForm.contactEmail || !this.interestForm.contactEmail.trim()) {
      this.errorMessage = 'Please enter your contact email';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    const interestData = {
      message: this.interestForm.message,
      contactEmail: this.interestForm.contactEmail,
      contactPhone: this.interestForm.contactPhone || ''
    };

    this.apiService.submitResourceInterest(this.resource.id, interestData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.successMessage = 'Your interest has been sent! The resource owner will contact you soon.';
        setTimeout(() => {
          this.interestSubmitted.emit();
          this.onClose();
        }, 2000);
      },
      error: (error) => {
        this.isSubmitting = false;
        if (error.status === 409) {
          this.errorMessage = 'You have already shown interest in this resource.';
        } else if (error.status === 400) {
          this.errorMessage = error.error?.message || 'Invalid interest data. Please check your message and email.';
        } else {
          this.errorMessage = error.error?.message || 'Error submitting interest. Please try again.';
        }
      }
    });
  }

  canShowInterest(): boolean {
    return !this.isOwnResource && !!this.currentUser && !!this.resource;
  }

  onClose(): void {
    this.close.emit();
  }

  getSkillsArray(): string[] {
    if (!this.resource?.skills) return [];
    if (Array.isArray(this.resource.skills)) {
      return this.resource.skills;
    }
    return [];
  }
}


