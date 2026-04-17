import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobPosting } from '../../../models/interfaces';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-job-post-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-post-modal.component.html',
  styleUrls: ['./job-post-modal.component.css']
})
export class JobPostModalComponent implements OnInit, OnChanges {
  @Input() show: boolean = false;
  @Input() editJob?: JobPosting | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() saved = new EventEmitter<void>();

  jobPosting: Partial<JobPosting> = {
    title: '',
    description: '',
    type: 'JOB',
    category: '',
    location: '',
    budget: '',
    duration: '',
    techStack: [],
    requirements: [],
    status: 'DRAFT'
  };

  techStackInput: string = '';
  requirementInput: string = '';
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';
  isEditMode = false;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editJob'] && changes['editJob'].currentValue) {
      this.loadJobForEdit(changes['editJob'].currentValue);
    } else if (changes['show'] && !changes['show'].currentValue) {
      this.resetForm();
    }
  }

  loadJobForEdit(job: JobPosting): void {
    console.log('job',job)
    this.isEditMode = true;
    // Handle requirements - convert string to array if needed
    let requirementsArray: string[] = [];
    if (Array.isArray(job.requirements)) {
      requirementsArray = job.requirements;
    } else if (job.requirements && typeof job.requirements === 'string' && job.requirements.trim()) {
      // Split by newlines or commas if it's a string
      const reqStr: string = job.requirements;
      requirementsArray = reqStr.split(/[\n,]/).map((r: string) => r.trim()).filter((r: string) => r.length > 0);
    }

    this.jobPosting = {
      id: job.id,
      title: job.title,
      description: job.description,
      type: job.type,
      category: job.category || '',
      location: job.location || '',
      budget: job.budget || '',
      duration: job.duration || '',
      techStack: job.techStack || [],
      requirements: requirementsArray,
      status: job.status
    };
    this.techStackInput = (job.techStack || []).join(', ');
    this.requirementInput = '';
  }

  resetForm(): void {
    this.isEditMode = false;
    this.jobPosting = {
      title: '',
      description: '',
      type: 'JOB',
      category: '',
      location: '',
      budget: '',
      duration: '',
      techStack: [],
      requirements: [],
      status: 'DRAFT'
    };
    this.techStackInput = '';
    this.requirementInput = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.isSubmitting = false;
  }

  addTechStack(): void {
    if (this.techStackInput.trim()) {
      const techs = this.techStackInput.split(',').map(t => t.trim()).filter(t => t);
      this.jobPosting.techStack = [...(this.jobPosting.techStack || []), ...techs];
      this.techStackInput = '';
    }
  }

  removeTechStack(tech: string): void {
    this.jobPosting.techStack = (this.jobPosting.techStack || []).filter(t => t !== tech);
  }

  getRequirementsArray(): string[] {
    if (Array.isArray(this.jobPosting.requirements)) {
      return this.jobPosting.requirements;
    }
    return [];
  }

  addRequirement(): void {
    if (this.requirementInput.trim()) {
      const requirements = this.requirementInput.split(',').map((r: string) => r.trim()).filter((r: string) => r.length > 0);
      const currentRequirements = this.getRequirementsArray();
      this.jobPosting.requirements = [...currentRequirements, ...requirements];
      this.requirementInput = '';
    }
  }

  removeRequirement(requirement: string): void {
    const currentRequirements = this.getRequirementsArray();
    this.jobPosting.requirements = currentRequirements.filter((r: string) => r !== requirement);
  }

  onSubmit(): void {
    if (!this.jobPosting.title || !this.jobPosting.description) {
      this.errorMessage = 'Title and description are required';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    const currentUser = this.authService.getCurrentUser();
    const jobData = {
      ...this.jobPosting,
      techStack: this.jobPosting.techStack || [],
      requirements: this.jobPosting.requirements || [],
      posterId: currentUser?.id || currentUser?.email
    };

    const request = this.isEditMode && this.jobPosting.id
      ? this.apiService.updateJobPosting(this.jobPosting.id, jobData)
      : this.apiService.createJobPosting(jobData);
    console.log('req',request)
    request.subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = this.isEditMode ? 'Job updated successfully!' : 'Job posted successfully!';
        setTimeout(() => {
          this.saved.emit();
          this.onClose();
        }, 1500);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || 'Error saving job posting. Please try again.';
      }
    });
  }

  onClose(): void {
    this.resetForm();
    this.close.emit();
  }
}

