import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { JobPosting } from '../../models/interfaces';
import { ApiService } from '../../services/api.service';
import { JobDetailModalComponent } from '../../components/modals/job-detail-modal/job-detail-modal.component';
import { JobPostModalComponent } from '../../components/modals/job-post-modal/job-post-modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job-management',
  standalone: true,
  imports: [CommonModule, DatePipe, JobDetailModalComponent, JobPostModalComponent],
  templateUrl: './job-management.component.html',
  styleUrls: ['./job-management.component.css']
})
export class JobManagementComponent implements OnInit {
  activeTab: 'DRAFT' | 'PUBLISHED' | 'CLOSED' = 'DRAFT';
  
  allJobs: JobPosting[] = [];
  draftJobs: JobPosting[] = [];
  publishedJobs: JobPosting[] = [];
  closedJobs: JobPosting[] = [];
  
  isLoading = false;
  errorMessage = '';

  // Modal state
  showJobPostModal = false;
  showDetailModal = false;
  selectedJob: JobPosting | null = null;
  selectedJobForEdit: JobPosting | null = null;

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.apiService.getJobPostings().subscribe({
      next: (response: any) => {
        this.allJobs = Array.isArray(response) ? response : [];
        this.categorizeJobs();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading jobs and projects. Please try again.';
        this.isLoading = false;
        console.error('Error loading jobs:', error);
      }
    });
  }

  categorizeJobs(): void {
    this.draftJobs = this.allJobs.filter((job: JobPosting) => 
      job.status === 'DRAFT'
    );
    
    this.publishedJobs = this.allJobs.filter((job: JobPosting) => 
      job.status === 'PUBLISHED' || job.status === 'OPEN'
    );
    
    // Closed jobs: CLOSED, ARCHIVED, or FILLED status
    this.closedJobs = this.allJobs.filter((job: JobPosting) => 
      job.status === 'CLOSED' || job.status === 'ARCHIVED' || job.status === 'FILLED'
    );
  }

  setTab(tab: 'DRAFT' | 'PUBLISHED' | 'CLOSED'): void {
    this.activeTab = tab;
  }

  onCreateJob(): void {
    this.selectedJobForEdit = null;
    this.showJobPostModal = true;
  }

  onEditJob(job: JobPosting): void {
    this.selectedJobForEdit = job;
    this.showJobPostModal = true;
  }

  openDetailModal(job: JobPosting): void {
    if (job.id) {
      this.apiService.getJobPostingById(job.id).subscribe({
        next: (response: any) => {
          this.selectedJob = response;
          this.showDetailModal = true;
        },
        error: (error) => {
          console.error('Error loading job details:', error);
          this.selectedJob = job;
          this.showDetailModal = true;
        }
      });
    } else {
      this.selectedJob = job;
      this.showDetailModal = true;
    }
  }

  closeJobPostModal(): void {
    this.showJobPostModal = false;
    this.selectedJobForEdit = null;
  }

  closeDetailModal(): void {
    this.showDetailModal = false;
    this.selectedJob = null;
  }

  onJobSaved(): void {
    this.loadJobs();
    this.closeJobPostModal();
  }

  onPublishJob(job: JobPosting): void {
    if (!job.id) return;
    
    if (!confirm(`Are you sure you want to publish "${job.title}"?`)) {
      return;
    }

    this.isLoading = true;
    this.apiService.publishJob(job.id).subscribe({
      next: () => {
        this.toastr.success('Job/Project published successfully!', 'Published');
        this.loadJobs();
        this.closeDetailModal();
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Error publishing job/project. Please try again.';
        this.isLoading = false;
        this.toastr.error(this.errorMessage, 'Error');
      }
    });
  }

  onDeleteJob(job: JobPosting): void {
    if (!job.id || typeof job.id !== 'number') return;
    
    if (!confirm(`Are you sure you want to delete "${job.title}"? This action cannot be undone.`)) {
      return;
    }

    this.isLoading = true;
    this.apiService.deleteJobPosting(job.id).subscribe({
      next: () => {
        this.toastr.success('Job/Project deleted successfully!', 'Deleted');
        this.loadJobs();
        this.closeDetailModal();
      },
      error: (error) => {
        this.isLoading = false;
        let errorMessage = 'Error deleting job/project. Please try again.';
        
        if (error.status === 403) {
          errorMessage = 'You do not have permission to delete this job/project.';
        } else if (error.status === 404) {
          errorMessage = 'Job/Project not found.';
        } else if (error.status === 401) {
          errorMessage = 'Please login to delete jobs/projects.';
        } else if (error.error?.message) {
          errorMessage = error.error.message;
        }
        
        this.errorMessage = errorMessage;
        this.toastr.error(errorMessage, 'Error');
      }
    });
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
      'ARCHIVED': 'bg-slate-100 text-slate-800',
      'FILLED': 'bg-slate-100 text-slate-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  }
}
