import { Component, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Resource, ViewState } from '../../../models/interfaces';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
import { ResourceDetailModalComponent } from '../../../components/modals/resource-detail-modal/resource-detail-modal.component';
import { ResourcePostModalComponent } from '../../../components/modals/resource-post-modal/resource-post-modal.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmService } from '../../../services/confirm.service';

@Component({
  selector: 'app-bench-resources',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule, ResourceDetailModalComponent, ResourcePostModalComponent],
  templateUrl: './bench-resources.component.html',
  styleUrls: ['./bench-resources.component.css']
})
export class BenchResourcesComponent implements OnInit {
  @Input() refreshTrigger?: any; // Trigger to reload resources
  @Output() navigate = new EventEmitter<string>();
  @Output() openPayment = new EventEmitter<void>();

  resources: Resource[] = [];
  filteredResources: Resource[] = [];
  currentUser: any = null;
  isLoading = false;
  errorMessage = '';
  
  // Tab management for resources - Default to 'OTHERS' to show resources posted by other users
  resourceTab: 'OTHERS' | 'MY_RESOURCES' = 'OTHERS';
  
  // Filter properties
  searchQuery = '';
  
  // Modal states
  showResourceDetailModal = false;
  showResourcePostModal = false;
  selectedResource: Resource | null = null;
  selectedResourceForEdit: Resource | null = null;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private toastr: ToastrService,
    private confirmService: ConfirmService
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    console.log('BenchResourcesComponent initialized');
    console.log('Current user:', this.currentUser);
    this.loadResources();
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
        console.log('Bench resources response:', response);
        console.log('Response type:', typeof response);
        console.log('Is array:', Array.isArray(response));
        
        // Handle different response formats
        let allResources: Resource[] = [];
        if (Array.isArray(response)) {
          allResources = response;
        } else if (response && Array.isArray(response.data)) {
          allResources = response.data;
        } else if (response && response.resources && Array.isArray(response.resources)) {
          allResources = response.resources;
        } else if (response && typeof response === 'object') {
          // Try to find array in response
          const keys = Object.keys(response);
          console.log('Response keys:', keys);
          for (const key of keys) {
            if (Array.isArray(response[key])) {
              allResources = response[key];
              break;
            }
          }
        }
        
        console.log('All resources after parsing:', allResources);
        console.log('All resources count:', allResources.length);
        
        // Filter out own resources for "Others" tab
        if (this.currentUser && this.resourceTab === 'OTHERS') {
          this.resources = allResources.filter((res: Resource) => {
            // Handle different types of postedBy field
            if (res.postedBy === null || res.postedBy === undefined) {
              return true; // Include resources without postedBy info
            }
            
            const postedById = typeof res.postedBy === 'number' 
              ? res.postedBy 
              : (typeof res.postedBy === 'string' && res.postedBy !== '' ? parseInt(res.postedBy) : null);
            
            const isOwnResource = (postedById !== null && postedById === this.currentUser.id) ||
                                 (res.postedByEmail && res.postedByEmail === this.currentUser.email);
            
            return !isOwnResource;
          });
        } else {
          this.resources = allResources;
        }
        
        console.log('Filtered resources (others):', this.resources);
        console.log('Resources count:', this.resources.length);
        console.log('Current user:', this.currentUser);
        this.applyFilters();
        console.log('Filtered resources after applyFilters:', this.filteredResources);
        console.log('Filtered count:', this.filteredResources.length);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading bench resources:', error);
        console.error('Error details:', error.error);
        this.errorMessage = error.error?.message || error.message || 'Error loading resources. Please try again.';
        this.resources = [];
        this.filteredResources = [];
        this.isLoading = false;
      }
    });
  }

  loadMyResources(): void {
    this.apiService.getMyBenchResources().subscribe({
      next: (response: any) => {
        console.log('My resources response:', response);
        this.resources = Array.isArray(response) ? response : [];
        console.log('My resources:', this.resources);
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading my resources:', error);
        console.error('Error details:', error.error);
        this.errorMessage = error.error?.message || error.message || 'Error loading your resources. Please try again.';
        this.resources = [];
        this.filteredResources = [];
        this.isLoading = false;
      }
    });
  }

  switchResourceTab(tab: 'OTHERS' | 'MY_RESOURCES'): void {
    this.resourceTab = tab;
    this.loadResources();
  }

  applyFilters(): void {
    console.log('Applying filters, resources count:', this.resources.length);
    console.log('Search query:', this.searchQuery);
    
    this.filteredResources = this.resources.filter((res: Resource) => {
      // Search filter
      if (this.searchQuery && this.searchQuery.trim()) {
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
    
    console.log('After filtering, filteredResources count:', this.filteredResources.length);
  }

  onNavigate(view: string): void {
    this.navigate.emit(view);
  }

  onOpenPayment(): void {
    this.openPayment.emit();
  }

  onCreateResource(): void {
    this.selectedResourceForEdit = null;
    this.showResourcePostModal = true;
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

  onArchiveResource(resource: Resource): void {
    if (!resource.id || typeof resource.id !== 'number') return;
    
    this.confirmService.confirm({
      title: 'Archive Resource',
      message: 'Are you sure you want to archive this resource posting? Archived resources will be hidden from public view but can be restored later.',
      confirmLabel: 'Archive',
      cancelLabel: 'Cancel',
      isDestructive: true
    }).subscribe(confirmed => {
      if (!confirmed) return;

      this.isLoading = true;
      this.apiService.archiveBenchResource(Number(resource.id)).subscribe({
        next: () => {
          console.log('Resource archived successfully');
          this.isLoading = false;
          this.toastr.success('Resource archived successfully', 'Archived');
          this.loadResources();
        },
        error: (error) => {
          console.error('Error archiving resource:', error);
          this.isLoading = false;
          const errorMessage = error.error?.message || error.message || 'Error archiving resource. Please try again.';
          this.toastr.error(`Error archiving resource: ${errorMessage}`, 'Error');
        }
      });
    });
  }

  onUnarchiveResource(resource: Resource): void {
    if (!resource.id || typeof resource.id !== 'number') return;
    
    this.confirmService.confirm({
      title: 'Unarchive Resource',
      message: 'Are you sure you want to unarchive this resource posting? It will be restored to active status and visible to other users.',
      confirmLabel: 'Unarchive',
      cancelLabel: 'Cancel'
    }).subscribe(confirmed => {
      if (!confirmed) return;

      this.isLoading = true;
      this.apiService.unarchiveBenchResource(Number(resource.id)).subscribe({
        next: () => {
          console.log('Resource unarchived successfully');
          this.isLoading = false;
          this.toastr.success('Resource unarchived successfully', 'Unarchived');
          this.loadResources();
        },
        error: (error) => {
          console.error('Error unarchiving resource:', error);
          this.isLoading = false;
          const errorMessage = error.error?.message || error.message || 'Error unarchiving resource. Please try again.';
          this.toastr.error(`Error unarchiving resource: ${errorMessage}`, 'Error');
        }
      });
    });
  }

  onDeleteResource(resource: Resource): void {
    if (!resource.id || typeof resource.id !== 'number') return;
    
    this.confirmService.confirm({
      title: 'Delete Resource',
      message: 'Are you sure you want to delete this resource posting? This will also delete all related interest submissions.',
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      isDestructive: true
    }).subscribe(confirmed => {
      if (!confirmed) return;

      this.isLoading = true;
      this.apiService.deleteBenchResource(Number(resource.id)).subscribe({
        next: () => {
          console.log('Resource deleted successfully');
          this.isLoading = false;
          this.toastr.success('Resource deleted successfully', 'Deleted');
          this.loadResources();
        },
        error: (error) => {
          console.error('Error deleting resource:', error);
          this.isLoading = false;
          const errorMessage = error.error?.message || error.message || 'Error deleting resource. Please try again.';
          this.toastr.error(`Error deleting resource: ${errorMessage}`, 'Error');
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

  onViewResponses(resource: Resource): void {
    // Open the detail modal which will show interests
    // Load full resource details first
    if (resource.id && typeof resource.id === 'number') {
      this.apiService.getBenchResourceById(resource.id).subscribe({
        next: (response: any) => {
          this.selectedResource = response;
          this.showResourceDetailModal = true;
          // The modal will automatically load interests when opened
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

  getInterestCount(resource: Resource): number {
    // This will be updated when we fetch interest counts
    return 0; // Placeholder - can be enhanced to show actual count
  }
}



