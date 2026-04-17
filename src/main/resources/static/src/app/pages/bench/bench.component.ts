import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Resource, Project, BenchTab, ViewState, JobPosting } from '../../models/interfaces';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { AppNavigationService } from '../../services/app-navigation.service';
import { ResourceDetailModalComponent } from '../../components/modals/resource-detail-modal/resource-detail-modal.component';
import { ResourcePostModalComponent } from '../../components/modals/resource-post-modal/resource-post-modal.component';
import { JobDetailModalComponent } from '../../components/modals/job-detail-modal/job-detail-modal.component';
import { ToastService } from '../../services/toast.service';
import { ConfirmService } from '../../services/confirm.service';

@Component({
  selector: 'app-bench',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule, ResourceDetailModalComponent, ResourcePostModalComponent, JobDetailModalComponent],
  templateUrl: './bench.component.html',
  styleUrls: ['./bench.component.css']
})
export class BenchComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  @Output() openPayment = new EventEmitter<void>();

  benchTab: BenchTab = 'TALENT';
  resources: Resource[] = [];
  filteredResources: Resource[] = [];
  projects: JobPosting[] = [];
  currentUser: any = null;
  isLoading = false;
  isLoadingProjects = false;
  errorMessage = '';

  // Tab management for resources
  resourceTab: 'OTHERS' | 'MY_RESOURCES' = 'OTHERS';

  // Filter properties
  searchQuery = '';

  // Modal states
  showResourceDetailModal = false;
  showResourcePostModal = false;
  showProjectDetailModal = false;
  selectedResource: Resource | null = null;
  selectedResourceForEdit: Resource | null = null;
  selectedProject: JobPosting | null = null;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private navService: AppNavigationService,
    private toastService: ToastService,
    private confirmService: ConfirmService
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    this.loadResources();
    this.loadProjects();
  }

  loadResources(): void {
    this.isLoading = true;
    this.errorMessage = '';

    if (this.resourceTab === 'MY_RESOURCES') {
      this.loadMyResources();
    } else {
      this.loadAllResources();
    }
  }

  loadAllResources(): void {
    this.apiService.getBenchResources().subscribe({
      next: (response: any) => {
        const allResources = Array.isArray(response) ? response : [];
        // Filter out own resources for "Others" tab
        if (this.currentUser) {
          this.resources = allResources.filter((res: Resource) => {
            const postedById = typeof res.postedBy === 'number' ? res.postedBy : parseInt(res.postedBy as string);
            return postedById !== this.currentUser.id &&
              res.postedByEmail !== this.currentUser.email;
          });
        } else {
          this.resources = allResources;
        }
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading bench resources:', error);
        this.errorMessage = 'Error loading resources. Please try again.';
        this.resources = [];
        this.filteredResources = [];
        this.isLoading = false;
      }
    });
  }

  loadMyResources(): void {
    this.apiService.getMyBenchResources().subscribe({
      next: (response: any) => {
        this.resources = Array.isArray(response) ? response : [];
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading my resources:', error);
        this.errorMessage = 'Error loading your resources. Please try again.';
        this.resources = [];
        this.filteredResources = [];
        this.isLoading = false;
      }
    });
  }

  loadProjects(): void {
    this.isLoadingProjects = true;
    this.apiService.getOtherJobPostings().subscribe({
      next: (response: any) => {
        const allJobs = Array.isArray(response) ? response : [];
        // Filter for projects
        this.projects = allJobs.filter((job: JobPosting) => job.type === 'PROJECT');
        this.isLoadingProjects = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.projects = [];
        this.isLoadingProjects = false;
      }
    });
  }

  switchResourceTab(tab: 'OTHERS' | 'MY_RESOURCES'): void {
    this.resourceTab = tab;
    this.loadResources();
  }

  applyFilters(): void {
    this.filteredResources = this.resources.filter((res: Resource) => {
      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        const matchesRole = res.role?.toLowerCase().includes(query);
        const matchesStack = res.stack?.toLowerCase().includes(query);
        const matchesDescription = res.description?.toLowerCase().includes(query);
        const matchesSkills = res.skills?.some(skill => skill.toLowerCase().includes(query));

        if (!matchesRole && !matchesStack && !matchesDescription && !matchesSkills) {
          return false;
        }
      }

      return true;
    });
  }

  onNavigate(view: string): void {
    this.navService.go(view);
  }

  onOpenPayment(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      // If logged in, go to dashboard and scroll to plans (handled by dashboard normally)
      // For now, use the standard PAYMENT route defined in service
      this.navService.go('PAYMENT');
    } else {
      this.navService.go('PAYMENT');
    }
  }

  onCreateResource(): void {
    this.selectedResourceForEdit = null;
    this.showResourcePostModal = true;
  }

  onViewProject(project: JobPosting): void {
    this.selectedProject = project;
    this.showProjectDetailModal = true;
  }

  onViewResource(resource: Resource): void {
    // Load full resource details
    if (resource.id && typeof resource.id === 'number') {
      this.apiService.getBenchResourceById(resource.id).subscribe({
        next: (response: any) => {
          this.selectedResource = response;
          this.showResourceDetailModal = true;
        },
        error: (error) => {
          console.error('Error loading resource details:', error);
          this.selectedResource = resource;
          this.showResourceDetailModal = true;
        }
      });
    } else {
      this.selectedResource = resource;
      this.showResourceDetailModal = true;
    }
  }

  onEditResource(resource: Resource): void {
    this.selectedResourceForEdit = resource;
    this.showResourcePostModal = true;
  }

  onDeleteResource(resource: Resource): void {
    if (!resource.id || typeof resource.id !== 'number') return;

    this.confirmService.confirm({
      title: 'Delete Resource',
      message: 'Are you sure you want to delete this resource posting?',
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      isDestructive: true
    }).subscribe(confirmed => {
      if (!confirmed) return;

      this.apiService.deleteBenchResource(Number(resource.id)).subscribe({
        next: () => {
          this.loadResources();
        },
        error: (error) => {
          console.error('Error deleting resource:', error);
          this.toastService.error('Error deleting resource. Please try again.');
        }
      });
    });
  }

  closeResourceDetailModal(): void {
    this.showResourceDetailModal = false;
    this.selectedResource = null;
  }

  closeResourcePostModal(): void {
    this.showResourcePostModal = false;
    this.selectedResourceForEdit = null;
  }

  closeProjectDetailModal(): void {
    this.showProjectDetailModal = false;
    this.selectedProject = null;
  }

  onResourceSaved(): void {
    this.loadResources();
  }

  onInterestSubmitted(): void {
    // Reload resources after showing interest
    this.loadResources();
  }

  canEditResource(resource: Resource): boolean {
    if (!this.currentUser || !resource) return false;
    const postedById = typeof resource.postedBy === 'number' ? resource.postedBy : parseInt(resource.postedBy as string);
    return postedById === this.currentUser.id ||
      resource.postedByEmail === this.currentUser.email;
  }

  isOwnResource(resource: Resource): boolean {
    return this.canEditResource(resource);
  }
}


