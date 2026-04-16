import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobPosting } from '../../models/interfaces';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { JobDetailModalComponent } from '../../components/modals/job-detail-modal/job-detail-modal.component';
import { JobPostModalComponent } from '../../components/modals/job-post-modal/job-post-modal.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmService } from '../../services/confirm.service';

@Component({
  selector: 'app-job-listings',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule, JobDetailModalComponent, JobPostModalComponent],
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {
  @Input() showPostButton: boolean = true;
  @Input() isAdminView: boolean = false;
  @Output() jobSelected = new EventEmitter<JobPosting>();

  jobPostings: JobPosting[] = [];
  filteredJobPostings: JobPosting[] = [];
  isLoading = false;
  errorMessage = '';

  // Tab management
  activeTab: 'OTHERS' | 'YOURS' = 'OTHERS';
  myJobsStatusTab: 'DRAFT' | 'PUBLISHED' | 'CLOSED' = 'DRAFT';
  
  // Filter properties
  typeFilter: 'ALL' | 'JOB' | 'PROJECT' = 'ALL';
  statusFilter: 'ALL' | 'OPEN' | 'CLOSED' | 'FILLED' = 'ALL';
  searchQuery = '';

  // Applied status tracking
  appliedJobs: Set<number> = new Set();

  // Modal states
  showJobDetailModal = false;
  showJobPostModal = false;
  selectedJob: JobPosting | null = null;
  selectedJobForEdit: JobPosting | null = null;
  currentUser: any = null;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private toastr: ToastrService,
    private confirmService: ConfirmService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.loadJobPostings();
  }

  loadJobPostings(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    // Use appropriate API based on active tab (for member view)
    // Admin view uses all jobs
    if (this.isAdminView) {
      this.loadAllJobs();
    } else {
      this.loadJobsForCurrentTab();
    }
  }

  loadAllJobs(): void {
    this.apiService.getJobPostings().subscribe({
      next: (response: any) => {
        this.jobPostings = Array.isArray(response) ? response : [];
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading job postings:', error);
        this.errorMessage = 'Error loading job postings. Please try again.';
        this.jobPostings = [];
        this.filteredJobPostings = [];
        this.isLoading = false;
      }
    });
  }

  loadJobsForCurrentTab(): void {
    const apiCall = this.activeTab === 'YOURS' 
      ? this.apiService.getMyJobPostings()
      : this.apiService.getOtherJobPostings();

    apiCall.subscribe({
      next: (response: any) => {
        this.jobPostings = Array.isArray(response) ? response : [];
        // Only check applied status for other jobs
        if (this.activeTab === 'OTHERS') {
          this.checkAppliedStatus();
        }
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error(`Error loading ${this.activeTab === 'YOURS' ? 'my' : 'other'} job postings:`, error);
        this.errorMessage = `Error loading ${this.activeTab === 'YOURS' ? 'your' : 'other'} job postings. Please try again.`;
        this.jobPostings = [];
        this.filteredJobPostings = [];
        this.isLoading = false;
      }
    });
  }

  checkAppliedStatus(): void {
    if (!this.currentUser) return;
    
    // Check applied status for each job
    this.jobPostings.forEach((job: JobPosting) => {
      if (job.id && !this.isOwnJob(job)) {
        this.apiService.checkProposalStatus(job.id).subscribe({
          next: (response: any) => {
            if (response?.hasApplied) {
              this.appliedJobs.add(job.id!);
            }
          },
          error: () => {
            // Silently fail - user might not have applied
          }
        });
      }
    });
  }

  isOwnJob(job: JobPosting): boolean {
    if (!this.currentUser || !job) return false;
    return (job.postedBy === this.currentUser.id) || (job.postedByEmail === this.currentUser.email);
  }

  canDeleteJob(job: JobPosting): boolean {
    // Only the member who created the job (and not in admin view) can delete
    return !this.isAdminView && this.isOwnJob(job);
  }

  hasApplied(job: JobPosting): boolean {
    return job.id ? this.appliedJobs.has(job.id) : false;
  }

  switchTab(tab: 'OTHERS' | 'YOURS'): void {
    this.activeTab = tab;
    // Reset status tab to DRAFT when switching to MY JOBS
    if (tab === 'YOURS') {
      this.myJobsStatusTab = 'DRAFT';
    }
    // Reload jobs for the new tab
    if (!this.isAdminView) {
      this.loadJobsForCurrentTab();
    } else {
      this.applyFilters();
    }
  }

  switchMyJobsStatus(tab: 'DRAFT' | 'PUBLISHED' | 'CLOSED'): void {
    this.myJobsStatusTab = tab;
    this.applyFilters();
  }

  getMyJobsCount(status: 'DRAFT' | 'PUBLISHED' | 'CLOSED'): number {
    if (this.activeTab !== 'YOURS' || this.isAdminView) return 0;
    return this.jobPostings.filter((job: JobPosting) => {
      if (status === 'DRAFT') {
        return job.status === 'DRAFT';
      } else if (status === 'PUBLISHED') {
        return job.status === 'PUBLISHED';
      } else if (status === 'CLOSED') {
        return job.status === 'CLOSED';
      }
      return false;
    }).length;
  }

  applyFilters(): void {
    // For member view, jobs are already filtered by API, so we just apply search/type/status filters
    // For admin view, apply all filters
    this.filteredJobPostings = this.jobPostings.filter((job: JobPosting) => {
      // For member view, "Other Jobs" tab should only show published jobs
      if (!this.isAdminView && this.activeTab === 'OTHERS') {
        if (job.status !== 'PUBLISHED') {
          return false;
        }
      }

      // For member view, "My Jobs" tab should filter by status tab (DRAFT, PUBLISHED, CLOSED)
      if (!this.isAdminView && this.activeTab === 'YOURS') {
        if (this.myJobsStatusTab === 'DRAFT' && job.status !== 'DRAFT') {
          return false;
        } else if (this.myJobsStatusTab === 'PUBLISHED' && job.status !== 'PUBLISHED') {
          return false;
        } else if (this.myJobsStatusTab === 'CLOSED' && job.status !== 'CLOSED') {
          return false;
        }
      }

      // Type filter
      if (this.typeFilter !== 'ALL' && job.type !== this.typeFilter) {
        return false;
      }

      // Status filter (only apply if not filtering by My Jobs status tab)
      if (this.statusFilter !== 'ALL' && job.status !== this.statusFilter) {
        // Skip this filter if we're in My Jobs tab with status filtering
        if (!(this.activeTab === 'YOURS' && !this.isAdminView)) {
          return false;
        }
      }

      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        const matchesTitle = job.title?.toLowerCase().includes(query);
        const matchesDescription = job.description?.toLowerCase().includes(query);
        const matchesCategory = job.category?.toLowerCase().includes(query);
        const matchesTechStack = job.techStack?.some(tech => tech.toLowerCase().includes(query));
        
        if (!matchesTitle && !matchesDescription && !matchesCategory && !matchesTechStack) {
          return false;
        }
      }

      return true;
    });
  }

  onCreateJob(): void {
    this.selectedJobForEdit = null;
    this.showJobPostModal = true;
  }

  onEditJob(job: JobPosting): void {
    this.selectedJobForEdit = job;
    this.showJobPostModal = true;
  }

  onViewJob(job: JobPosting): void {
    // Always load full job details to get complete information
    if (job.id) {
      this.apiService.getJobPostingById(job.id).subscribe({
        next: (response: any) => {
          this.selectedJob = response;
          this.showJobDetailModal = true;
        },
        error: (error) => {
          console.error('Error loading job details:', error);
          this.selectedJob = job;
          this.showJobDetailModal = true;
        }
      });
    } else {
      this.selectedJob = job;
      this.showJobDetailModal = true;
    }
  }

  onEditJobFromDetail(job: JobPosting): void {
    this.showJobDetailModal = false;
    this.onEditJob(job);
  }

  onPublishJob(job: JobPosting): void {
    if (!job.id) return;
    
    this.confirmService.confirm({
      title: 'Publish Job',
      message: `Are you sure you want to publish "${job.title}"?`,
      confirmLabel: 'Publish',
      cancelLabel: 'Cancel'
    }).subscribe(confirmed => {
      if (!confirmed) return;

      this.isLoading = true;
      this.apiService.publishJob(job.id!).subscribe({
        next: () => {
          this.isLoading = false;
          // Switch to Published tab and reload jobs
          if (!this.isAdminView && this.activeTab === 'YOURS') {
            this.myJobsStatusTab = 'PUBLISHED';
          }
          this.toastr.success('Job published successfully', 'Published');
          // Reload jobs for current tab
          if (this.isAdminView) {
            this.loadAllJobs();
          } else {
            this.loadJobsForCurrentTab();
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error publishing job:', error);
          this.toastr.error('Error publishing job posting. Please try again.', 'Error');
        }
      });
    });
  }

  onDeleteJob(job: JobPosting): void {
    if (!job.id) return;
    
    this.confirmService.confirm({
      title: 'Delete Job',
      message: `Are you sure you want to delete "${job.title}"?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      isDestructive: true
    }).subscribe(confirmed => {
      if (!confirmed) return;

      this.apiService.deleteJobPosting(job.id!).subscribe({
        next: () => {
          this.toastr.success('Job deleted successfully', 'Deleted');
          this.loadJobPostings();
        },
        error: (error) => {
          console.error('Error deleting job:', error);
          this.toastr.error('Error deleting job posting. Please try again.', 'Error');
        }
      });
    });
  }

  closeJobDetailModal(): void {
    this.showJobDetailModal = false;
    this.selectedJob = null;
  }

  closeJobPostModal(): void {
    this.showJobPostModal = false;
    this.selectedJobForEdit = null;
  }

  onJobSaved(): void {
    // Reload jobs for current tab
    if (this.isAdminView) {
      this.loadAllJobs();
    } else {
      this.loadJobsForCurrentTab();
    }
  }

  onProposalSubmitted(): void {
    // Mark as applied if viewing others' jobs
    if (this.selectedJob?.id) {
      this.appliedJobs.add(this.selectedJob.id);
    }
    // Reload jobs for current tab
    if (this.isAdminView) {
      this.loadAllJobs();
    } else {
      this.loadJobsForCurrentTab();
    }
  }

  canEditJob(job: JobPosting): boolean {
    if (!this.currentUser || !job) return false;
    // User can edit if they are the owner (check postedBy ID or email) or if admin
    return (job.postedBy === this.currentUser.id) || 
           (job.postedByEmail === this.currentUser.email) || 
           this.isAdminView;
  }

  getTypeColor(type: string): string {
    return type === 'JOB' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'DRAFT': 'bg-yellow-100 text-yellow-800',
      'PUBLISHED': 'bg-green-100 text-green-800',
      'OPEN': 'bg-green-100 text-green-800',
      'CLOSED': 'bg-red-100 text-red-800',
      'FILLED': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  }
}



