import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobPosting, Proposal } from '../../../models/interfaces';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-job-detail-modal',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './job-detail-modal.component.html',
  styleUrls: ['./job-detail-modal.component.css']
})
export class JobDetailModalComponent implements OnInit, OnChanges {
  @Input() show: boolean = false;
  @Input() jobPosting: JobPosting | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() proposalSubmitted = new EventEmitter<void>();
  @Output() editJob = new EventEmitter<JobPosting>();

  proposal: Partial<Proposal> = {
    coverLetter: '',
    resumeUrl: '',
    resumeFileName: ''
  };

  isSubmitting = false;
  errorMessage = '';
  successMessage = '';
  currentUser: any = null;
  showProposalForm = false;
  proposals: Proposal[] = [];
  isLoadingProposals = false;
  hasApplied = false;
  isOwnJob = false;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['show'] && changes['show'].currentValue && this.jobPosting?.id) {
      this.checkOwnership();
      this.checkAppliedStatus();
      this.loadProposals();
      this.resetProposalForm();
    }
    if (changes['show'] && !changes['show'].currentValue) {
      this.resetProposalForm();
    }
    if (changes['jobPosting'] && changes['jobPosting'].currentValue) {
      this.checkOwnership();
      this.checkAppliedStatus();
    }
  }

  checkOwnership(): void {
    if (!this.currentUser || !this.jobPosting) {
      this.isOwnJob = false;
      return;
    }
    // Check ownership using postedBy field (user ID) or postedByEmail
    this.isOwnJob = (this.jobPosting.postedBy === this.currentUser.id) ||
                    (this.jobPosting.postedByEmail === this.currentUser.email);
  }

  checkAppliedStatus(): void {
    if (!this.currentUser || !this.jobPosting?.id || this.isOwnJob) {
      this.hasApplied = false;
      return;
    }
    
    this.apiService.checkProposalStatus(this.jobPosting.id).subscribe({
      next: (response: any) => {
        this.hasApplied = response?.hasApplied || false;
      },
      error: () => {
        this.hasApplied = false;
      }
    });
  }

  loadProposals(): void {
    if (!this.jobPosting?.id) return;

    this.isLoadingProposals = true;
    this.apiService.getProposals(this.jobPosting.id).subscribe({
      next: (response: any) => {
        this.proposals = Array.isArray(response) ? response : [];
        this.isLoadingProposals = false;
      },
      error: (error) => {
        console.error('Error loading proposals:', error);
        this.proposals = [];
        this.isLoadingProposals = false;
      }
    });
  }

  resetProposalForm(): void {
    this.proposal = {
      coverLetter: '',
      proposedBudget: '',
      proposedDuration: '',
      relevantExperience: ''
    };
    this.errorMessage = '';
    this.successMessage = '';
    this.isSubmitting = false;
    this.showProposalForm = false;
  }

  onSubmitProposal(event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    if (!this.currentUser) {
      this.errorMessage = 'Please login to submit a proposal';
      return;
    }

    if (!this.proposal.coverLetter || !this.proposal.coverLetter.trim()) {
      this.errorMessage = 'Cover letter is required';
      return;
    }

    if (!this.jobPosting?.id) {
      this.errorMessage = 'Job posting information is missing';
      return;
    }

    // Double-check if user can submit
    if (!this.canSubmitProposal()) {
      this.errorMessage = 'You cannot apply for this job. It may be closed, you may have already applied, or you may be the job poster.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Prepare application data matching JobApplicationDTO structure
    const proposalData = {
      coverMessage: this.proposal.coverLetter || this.proposal.coverMessage || '',
      resumeUrl: this.proposal.resumeUrl || '',
      resumeFileName: this.proposal.resumeFileName || ''
    };

    console.log('Submitting proposal for job:', this.jobPosting.id, proposalData);

    this.apiService.submitProposal(this.jobPosting.id, proposalData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.hasApplied = true;
        this.successMessage = 'Proposal submitted successfully!';
        setTimeout(() => {
          this.proposalSubmitted.emit();
          this.loadProposals();
          this.resetProposalForm();
        }, 1500);
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Error submitting proposal:', error);
        
        // Handle specific error cases
        if (error.status === 401 || error.status === 403) {
          this.errorMessage = 'You are not authorized to apply for this job. Please login.';
        } else if (error.status === 404) {
          this.errorMessage = 'Job posting not found.';
        } else if (error.status === 400) {
          this.errorMessage = error.error?.message || 'Invalid application data. Please check your cover message.';
        } else if (error.status === 409) {
          this.errorMessage = 'You have already applied for this job.';
          this.hasApplied = true;
        } else {
          this.errorMessage = error.error?.message || 'Error submitting proposal. Please try again.';
        }
      }
    });
  }

  onClose(): void {
    this.resetProposalForm();
    this.close.emit();
  }

  canSubmitProposal(): boolean {
    if (!this.currentUser || !this.jobPosting) return false;
    // Allow submitting if:
    // 1. User is not the poster (can apply to others' jobs)
    // 2. User hasn't already applied
    // 3. Job status is PUBLISHED or OPEN
    // 4. Job has an ID
    return !this.isOwnJob && 
           !this.hasApplied &&
           !!this.jobPosting.id &&
           (this.jobPosting.status === 'PUBLISHED' || this.jobPosting.status === 'OPEN');
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  getRequirementsArray(): string[] {
    if (!this.jobPosting?.requirements) return [];
    if (Array.isArray(this.jobPosting.requirements)) {
      return this.jobPosting.requirements;
    }
    return [];
  }

  getRequirementsString(): string {
    if (!this.jobPosting?.requirements) return '';
    if (typeof this.jobPosting.requirements === 'string') {
      return this.jobPosting.requirements;
    }
    return '';
  }

  // Application management methods
  showAcceptModal = false;
  showRejectModal = false;
  selectedProposal: Proposal | null = null;
  rejectionReason = '';

  onAcceptApplication(proposal: Proposal): void {
    this.selectedProposal = proposal;
    this.showAcceptModal = true;
  }

  onRejectApplication(proposal: Proposal): void {
    this.selectedProposal = proposal;
    this.rejectionReason = '';
    this.showRejectModal = true;
  }

  confirmAcceptApplication(): void {
    if (!this.selectedProposal?.id) return;

    this.isSubmitting = true;
    this.errorMessage = '';
    this.apiService.acceptJobApplication(this.selectedProposal.id).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.showAcceptModal = false;
        this.selectedProposal = null;
        // Reload proposals to show updated status
        this.loadProposals();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || 'Error accepting application. Please try again.';
      }
    });
  }

  confirmRejectApplication(): void {
    if (!this.selectedProposal?.id || !this.rejectionReason.trim()) {
      this.errorMessage = 'Please provide a reason for rejection';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.apiService.rejectJobApplication(this.selectedProposal.id, this.rejectionReason).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.showRejectModal = false;
        this.selectedProposal = null;
        this.rejectionReason = '';
        // Reload proposals to show updated status
        this.loadProposals();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || 'Error rejecting application. Please try again.';
      }
    });
  }

  closeAcceptModal(): void {
    this.showAcceptModal = false;
    this.selectedProposal = null;
    this.errorMessage = '';
  }

  closeRejectModal(): void {
    this.showRejectModal = false;
    this.selectedProposal = null;
    this.rejectionReason = '';
    this.errorMessage = '';
  }

  canAcceptReject(proposal: Proposal): boolean {
    return proposal.status === 'PENDING' || proposal.status === 'UNDER_REVIEW';
  }
}

