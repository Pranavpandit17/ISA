import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ViewState } from '../../models/interfaces';
import { ApiService } from '../../services/api.service';
import { AuthService, User } from '../../services/auth.service';
import { EventCreateComponent } from '../event-create/event-create.component';
import { EventManagementComponent } from '../event-management/event-management.component';
import { MemberManagementComponent } from '../member-management/member-management.component';
import { JobManagementComponent } from '../job-management/job-management.component';
import { JobListingsComponent } from '../job-listings/job-listings.component';
import { MembershipPlanManagementComponent } from '../membership-plan-management/membership-plan-management.component';
import { PlanFeatureManagementComponent } from '../plan-feature-management/plan-feature-management.component';
import { ApplicationDetailModalComponent } from '../../components/modals/application-detail-modal/application-detail-modal.component';
import { EventDetailModalComponent } from '../../components/modals/event-detail-modal/event-detail-modal.component';
import { JobDetailModalComponent } from '../../components/modals/job-detail-modal/job-detail-modal.component';
import { JobPostModalComponent } from '../../components/modals/job-post-modal/job-post-modal.component';
import { ApproveRejectModalComponent } from '../../components/modals/approve-reject-modal/approve-reject-modal.component';
import { ConfirmService } from '../../services/confirm.service';
import { ToastrService } from 'ngx-toastr';

type ManagementView =
  | 'MEMBER_MANAGEMENT'
  | 'EVENT_MANAGEMENT'
  | 'POST_MANAGEMENT'
  | 'PLAN_MANAGEMENT'
  | 'FEATURE_MANAGEMENT'
  | 'HOME_MEDIA_MANAGEMENT'
  | 'GALLERY_MEDIA_MANAGEMENT'
  | 'MEMBER_BENEFITS_MEDIA_MANAGEMENT'
  | null;

interface AppNotification {
  id: number;
  title: string;
  message: string;
  type?: string;
  category?: string;
  read?: boolean;
  readAt?: string;
  link?: string;
  createdAt?: string;
}

interface SliderImageItem {
  id: number;
  imageUrl: string;
  displayOrder?: number;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule, DatePipe, DragDropModule, EventCreateComponent, EventManagementComponent, 
    MemberManagementComponent, JobManagementComponent, JobListingsComponent, 
    MembershipPlanManagementComponent, PlanFeatureManagementComponent,
    ApplicationDetailModalComponent, EventDetailModalComponent, 
    JobDetailModalComponent, JobPostModalComponent, ApproveRejectModalComponent
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  currentView: ManagementView = null;
  currentUser: User | null = null;

  // Stats
  pendingCount = 0;
  totalMembers = 0;
  activeEvents = 0;
  totalPosts = 0;

  // Data lists
  members: any[] = [];
  events: any[] = [];
  posts: any[] = [];
  
  isLoading = false;
  recentActivity: any[] = [];

  // Notifications
  showNotifications = false;
  notifications: AppNotification[] = [];
  unreadCount = 0;
  isLoadingNotifications = false;
  notificationsError = '';

  // Global Modal State (Hoisted from children)
  // Member Management
  showDetailModal = false;
  showApproveModal = false;
  showRejectModal = false;
  selectedApplication: any = null;

  // Event Management
  showEventDetailModal = false;
  selectedEvent: any = null;
  showEventModal = false; // Add Event / Edit Event
  selectedEventForEdit: any = null;

  // Job Management
  showJobDetailModal = false;
  showJobPostModal = false;
  selectedJob: any = null;

  // Home slider media management
  sliderImageFiles: File[] = [];
  sliderImagePreviewUrls: string[] = [];
  sliderImagesFromServer: SliderImageItem[] = [];
  isUpdatingSliderImage = false;
  isReorderingSlider = false;

  // Gallery media management
  galleryImageFiles: File[] = [];
  galleryImagePreviewUrls: string[] = [];
  galleryImagesFromServer: SliderImageItem[] = [];
  isUpdatingGalleryImage = false;
  isReorderingGallery = false;

  // Member benefits media management
  memberBenefitImageFiles: File[] = [];
  memberBenefitImagePreviewUrls: string[] = [];
  memberBenefitImagesFromServer: SliderImageItem[] = [];
  isUpdatingMemberBenefitImage = false;
  isReorderingMemberBenefits = false;

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private confirmService: ConfirmService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.apiService.totalMembersSubject.subscribe(count => {
      this.totalMembers = count;
    });
    this.apiService.pendingCountSubject.subscribe(count=>{
      this.pendingCount = count;
    })
    this.loadUserProfile();
    this.loadStats();
    this.loadHomeSliderSettings();
    this.loadGallerySettings();
    this.loadMemberBenefitSettings();
    this.refreshUnreadNotificationsCount();
  }

  refreshUnreadNotificationsCount(): void {
    this.apiService.getUnreadNotificationsCount().subscribe({
      next: (count: any) => {
        this.unreadCount = typeof count === 'number' ? count : Number(count) || 0;
      },
      error: (error) => {
        console.error('Error loading unread notifications count (admin):', error);
        this.unreadCount = 0;
      }
    });
  }

  openNotifications(): void {
    this.showNotifications = true;
    this.loadNotifications();
  }

  closeNotifications(): void {
    this.showNotifications = false;
    this.notificationsError = '';
  }

  loadNotifications(): void {
    this.isLoadingNotifications = true;
    this.notificationsError = '';
    this.apiService.getMyNotifications().subscribe({
      next: (response: any) => {
        this.notifications = Array.isArray(response) ? response : [];
        this.isLoadingNotifications = false;
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error('Error loading notifications (admin):', error);
        this.notificationsError = 'Failed to load notifications.';
        this.isLoadingNotifications = false;
      }
    });
  }

  markNotificationRead(n: AppNotification): void {
    if (!n?.id) return;
    this.apiService.markNotificationRead(n.id).subscribe({
      next: () => {
        n.read = true;
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error('Error marking notification read (admin):', error);
      }
    });
  }

  markAllNotificationsRead(): void {
    this.apiService.markAllNotificationsRead().subscribe({
      next: () => {
        this.notifications.forEach(n => n.read = true);
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error('Error marking all notifications read (admin):', error);
      }
    });
  }

  clearAllNotifications(): void {
    this.notificationsError = '';
    this.isLoadingNotifications = true;

    this.apiService.clearAllNotifications().subscribe({
      next: () => {
        this.notifications = [];
        this.unreadCount = 0;
        this.isLoadingNotifications = false;
      },
      error: (error) => {
        console.error('Error clearing notifications (admin):', error);
        this.notificationsError = 'Failed to clear notifications.';
        this.isLoadingNotifications = false;
      }
    });
  }

  onNotificationClick(n: AppNotification): void {
    if (!n) return;

    // Mark read (non-blocking) then navigate
    if (!n.read) {
      this.markNotificationRead(n);
    }

    this.navigateFromNotificationLink(n.link);
  }

  private navigateFromNotificationLink(link?: string): void {
    if (!link || typeof link !== 'string') {
      return;
    }

    // External link support (just in case)
    if (link.startsWith('http://') || link.startsWith('https://')) {
      window.open(link, '_blank');
      return;
    }

    // Expected formats:
    // - /admin-dashboard
    // - /admin-dashboard?view=EVENT_MANAGEMENT
    // - /admin-dashboard?view=MEMBER_MANAGEMENT
    const [path, queryString] = link.split('?');
    if (path && !path.startsWith('/admin-dashboard')) {
      return;
    }

    const params = new URLSearchParams(queryString || '');
    const viewParam = params.get('view') as ManagementView | null;

    if (viewParam) {
      const supported: ManagementView[] = [
        'MEMBER_MANAGEMENT',
        'EVENT_MANAGEMENT',
        'POST_MANAGEMENT',
        'PLAN_MANAGEMENT',
        'FEATURE_MANAGEMENT',
        'HOME_MEDIA_MANAGEMENT',
        'GALLERY_MEDIA_MANAGEMENT',
        'MEMBER_BENEFITS_MEDIA_MANAGEMENT',
        null
      ];
      if ((supported as any).includes(viewParam)) {
        this.onSelectView(viewParam);
        this.closeNotifications();
        return;
      }
    }

    // No view param: just close modal
    this.closeNotifications();
  }
  formatStartTime(time: string): Date | null {
    if (!time) return null;
  
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  loadUserProfile(): void {
    this.currentUser = this.authService.getCurrentUser();
    // If user data is incomplete, you can fetch from API
    // this.apiService.getCurrentUserProfile().subscribe(...)
  }

  loadStats(): void {
    // Load pending applications count
    this.apiService.getMembershipApplications().subscribe({
      next: (response: any) => {
        const apps = Array.isArray(response) ? response : [];
        this.pendingCount = apps.filter((app: any) => app.status === 'PENDING').length;
        this.updateStats();
      }
    });

    // Load approved members count
    this.apiService.getApprovedMembers().subscribe({
      next: (response: any) => {
        this.totalMembers = Array.isArray(response) ? response.length : 0;
        this.updateStats();
      }
    });

    // Load events count
    this.apiService.getEvents().subscribe({
      next: (response: any) => {
        const events = Array.isArray(response) ? response : [];
        this.activeEvents = events.filter((e: any) => e.status === 'PUBLISHED').length;
        this.updateStats();
      }
    });

    // Load job postings count
    this.apiService.getJobPostings().subscribe({
      next: (response: any) => {
        const posts = Array.isArray(response) ? response : [];
        this.totalPosts = posts.length;
      }
    });
  }

  updateStats(): void {
    // Update stats based on current view
    if (this.currentView === 'MEMBER_MANAGEMENT') {
      // Refresh member stats
      this.apiService.getApprovedMembers().subscribe({
        next: (response: any) => {
          this.totalMembers = Array.isArray(response) ? response.length : 0;
        }
      });
    } else if (this.currentView === 'EVENT_MANAGEMENT') {
      // Refresh event stats
      this.apiService.getEvents().subscribe({
        next: (response: any) => {
          const events = Array.isArray(response) ? response : [];
          this.activeEvents = events.filter((e: any) => e.status === 'PUBLISHED').length;
        }
      });
    } else if (this.currentView === 'POST_MANAGEMENT') {
      // Load job postings count
      this.apiService.getJobPostings().subscribe({
        next: (response: any) => {
          const posts = Array.isArray(response) ? response : [];
          this.totalPosts = posts.length;
        }
      });
    }
  }

  onSelectView(view: ManagementView): void {
    this.currentView = view;
    this.isLoading = true;
    this.updateStats(); // Update stats when switching views

    if (view === 'MEMBER_MANAGEMENT') {
      // Member management component will load its own data
      this.isLoading = false;
    } else if (view === 'EVENT_MANAGEMENT') {
      this.loadEvents();
    } else if (view === 'POST_MANAGEMENT') {
      this.loadPosts();
    } else if (view === 'PLAN_MANAGEMENT') {
      // Membership plan management component will load its own data
      this.isLoading = false;
    } else if (view === 'FEATURE_MANAGEMENT') {
      // Feature management component will load its own data
      this.isLoading = false;
    } else if (view === 'HOME_MEDIA_MANAGEMENT') {
      this.loadHomeSliderSettings();
      this.isLoading = false;
    } else if (view === 'GALLERY_MEDIA_MANAGEMENT') {
      this.loadGallerySettings();
      this.isLoading = false;
    } else if (view === 'MEMBER_BENEFITS_MEDIA_MANAGEMENT') {
      this.loadMemberBenefitSettings();
      this.isLoading = false;
    }
  }

  private resolveImageUrl(rawImage: string | null | undefined): string {
    if (!rawImage) {
      return '';
    }
    const image = String(rawImage).trim();
    if (!image) {
      return '';
    }
    if (/^https?:\/\//i.test(image)) {
      return image;
    }
    if (image.startsWith('//')) {
      return `${window.location.protocol}${image}`;
    }
    const normalizedPath = image.startsWith('/') ? image : `/${image}`;
    return `${this.apiService.getBackendBaseUrl()}${normalizedPath}`;
  }

  private mapMediaImages(images: any[]): SliderImageItem[] {
    return images
      .map((img: any) => ({
        id: Number(img?.id),
        imageUrl: this.resolveImageUrl(img?.imageUrl),
        displayOrder: Number(img?.displayOrder)
      }))
      .filter((img: SliderImageItem) => Number.isFinite(img.id) && !!img.imageUrl)
      .sort((a, b) => {
        const orderA = Number.isFinite(a.displayOrder) ? (a.displayOrder as number) : a.id;
        const orderB = Number.isFinite(b.displayOrder) ? (b.displayOrder as number) : b.id;
        return orderA - orderB || a.id - b.id;
      });
  }

  private applySliderResponse(response: any): void {
    const images = Array.isArray(response?.images) ? response.images : [];
    this.sliderImagesFromServer = this.mapMediaImages(images);
  }

  private applyGalleryResponse(response: any): void {
    const images = Array.isArray(response?.images) ? response.images : [];
    this.galleryImagesFromServer = this.mapMediaImages(images);
  }

  private applyMemberBenefitResponse(response: any): void {
    const images = Array.isArray(response?.images) ? response.images : [];
    this.memberBenefitImagesFromServer = this.mapMediaImages(images);
  }

  loadHomeSliderSettings(): void {
    this.apiService.getHomeSliderConfig().subscribe({
      next: (response: any) => {
        this.applySliderResponse(response);
      },
      error: () => {
        this.sliderImagesFromServer = [];
      }
    });
  }

  onSliderReorder(event: CdkDragDrop<SliderImageItem[]>): void {
    if (event.previousIndex === event.currentIndex || this.sliderImagesFromServer.length < 2) {
      return;
    }
    moveItemInArray(this.sliderImagesFromServer, event.previousIndex, event.currentIndex);
    const imageIds = this.sliderImagesFromServer.map((img) => img.id);
    this.isReorderingSlider = true;
    this.apiService.reorderHomeSlider(imageIds).subscribe({
      next: (response: any) => {
        this.applySliderResponse(response);
        this.isReorderingSlider = false;
        this.toastr.success('Slider order saved.', 'Updated');
      },
      error: (error) => {
        this.isReorderingSlider = false;
        this.loadHomeSliderSettings();
        const message = error?.error?.message || 'Failed to save slider order.';
        this.toastr.error(message, 'Error');
      }
    });
  }

  onSliderImageSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    this.sliderImageFiles = files;
    if (!files.length) {
      this.sliderImagePreviewUrls = [];
      return;
    }
    const readers = files.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.readAsDataURL(file);
      });
    });
    Promise.all(readers).then((previews) => {
      this.sliderImagePreviewUrls = previews;
    });
  }

  saveHomeSliderImages(): void {
    if (!this.sliderImageFiles.length) {
      this.toastr.warning('Please select at least one image.', 'No file selected');
      return;
    }
    const formData = new FormData();
    this.sliderImageFiles.forEach((file) => {
      formData.append('images', file, file.name);
    });
    this.isUpdatingSliderImage = true;
    this.apiService.updateHomeSliderImages(formData).subscribe({
      next: (response: any) => {
        this.toastr.success('Home slider images updated successfully.', 'Updated');
        this.applySliderResponse(response);
        this.sliderImagePreviewUrls = [];
        this.sliderImageFiles = [];
        this.isUpdatingSliderImage = false;
      },
      error: (error) => {
        const message = error?.error?.message || 'Failed to update home slider images.';
        this.toastr.error(message, 'Error');
        this.isUpdatingSliderImage = false;
      }
    });
  }

  deleteSliderImage(imageId: number): void {
    if (!imageId) {
      return;
    }
    this.apiService.deleteHomeSliderImage(imageId).subscribe({
      next: (response: any) => {
        this.applySliderResponse(response);
        this.toastr.success('Slider image deleted successfully.', 'Deleted');
      },
      error: (error) => {
        const message = error?.error?.message || 'Failed to delete slider image.';
        this.toastr.error(message, 'Error');
      }
    });
  }

  loadGallerySettings(): void {
    this.apiService.getGalleryConfig().subscribe({
      next: (response: any) => {
        this.applyGalleryResponse(response);
      },
      error: () => {
        this.galleryImagesFromServer = [];
      }
    });
  }

  onGalleryReorder(event: CdkDragDrop<SliderImageItem[]>): void {
    if (event.previousIndex === event.currentIndex || this.galleryImagesFromServer.length < 2) {
      return;
    }
    moveItemInArray(this.galleryImagesFromServer, event.previousIndex, event.currentIndex);
    const imageIds = this.galleryImagesFromServer.map((img) => img.id);
    this.isReorderingGallery = true;
    this.apiService.reorderGallery(imageIds).subscribe({
      next: (response: any) => {
        this.applyGalleryResponse(response);
        this.isReorderingGallery = false;
        this.toastr.success('Gallery order saved.', 'Updated');
      },
      error: (error) => {
        this.isReorderingGallery = false;
        this.loadGallerySettings();
        const message = error?.error?.message || 'Failed to save gallery order.';
        this.toastr.error(message, 'Error');
      }
    });
  }

  onGalleryImageSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    this.galleryImageFiles = files;
    if (!files.length) {
      this.galleryImagePreviewUrls = [];
      return;
    }
    const readers = files.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.readAsDataURL(file);
      });
    });
    Promise.all(readers).then((previews) => {
      this.galleryImagePreviewUrls = previews;
    });
  }

  saveGalleryImages(): void {
    if (!this.galleryImageFiles.length) {
      this.toastr.warning('Please select at least one image.', 'No file selected');
      return;
    }
    const formData = new FormData();
    this.galleryImageFiles.forEach((file) => {
      formData.append('images', file, file.name);
    });
    this.isUpdatingGalleryImage = true;
    this.apiService.updateGalleryImages(formData).subscribe({
      next: (response: any) => {
        this.toastr.success('Gallery images updated successfully.', 'Updated');
        this.applyGalleryResponse(response);
        this.galleryImagePreviewUrls = [];
        this.galleryImageFiles = [];
        this.isUpdatingGalleryImage = false;
      },
      error: (error) => {
        const message = error?.error?.message || 'Failed to update gallery images.';
        this.toastr.error(message, 'Error');
        this.isUpdatingGalleryImage = false;
      }
    });
  }

  deleteGalleryImage(imageId: number): void {
    if (!imageId) {
      return;
    }
    this.apiService.deleteGalleryImage(imageId).subscribe({
      next: (response: any) => {
        this.applyGalleryResponse(response);
        this.toastr.success('Gallery image deleted successfully.', 'Deleted');
      },
      error: (error) => {
        const message = error?.error?.message || 'Failed to delete gallery image.';
        this.toastr.error(message, 'Error');
      }
    });
  }

  loadMemberBenefitSettings(): void {
    this.apiService.getMemberBenefitsConfig().subscribe({
      next: (response: any) => {
        this.applyMemberBenefitResponse(response);
      },
      error: () => {
        this.memberBenefitImagesFromServer = [];
      }
    });
  }

  onMemberBenefitReorder(event: CdkDragDrop<SliderImageItem[]>): void {
    if (event.previousIndex === event.currentIndex || this.memberBenefitImagesFromServer.length < 2) {
      return;
    }
    moveItemInArray(this.memberBenefitImagesFromServer, event.previousIndex, event.currentIndex);
    const imageIds = this.memberBenefitImagesFromServer.map((img) => img.id);
    this.isReorderingMemberBenefits = true;
    this.apiService.reorderMemberBenefits(imageIds).subscribe({
      next: (response: any) => {
        this.applyMemberBenefitResponse(response);
        this.isReorderingMemberBenefits = false;
        this.toastr.success('Member benefits order saved.', 'Updated');
      },
      error: (error) => {
        this.isReorderingMemberBenefits = false;
        this.loadMemberBenefitSettings();
        const message = error?.error?.message || 'Failed to save member benefits order.';
        this.toastr.error(message, 'Error');
      }
    });
  }

  onMemberBenefitImageSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files ? Array.from(input.files) : [];
    this.memberBenefitImageFiles = files;
    if (!files.length) {
      this.memberBenefitImagePreviewUrls = [];
      return;
    }
    const readers = files.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.readAsDataURL(file);
      });
    });
    Promise.all(readers).then((previews) => {
      this.memberBenefitImagePreviewUrls = previews;
    });
  }

  saveMemberBenefitImages(): void {
    if (!this.memberBenefitImageFiles.length) {
      this.toastr.warning('Please select at least one image.', 'No file selected');
      return;
    }
    const formData = new FormData();
    this.memberBenefitImageFiles.forEach((file) => {
      formData.append('images', file, file.name);
    });
    this.isUpdatingMemberBenefitImage = true;
    this.apiService.updateMemberBenefitImages(formData).subscribe({
      next: (response: any) => {
        this.toastr.success('Member benefit images updated successfully.', 'Updated');
        this.applyMemberBenefitResponse(response);
        this.memberBenefitImagePreviewUrls = [];
        this.memberBenefitImageFiles = [];
        this.isUpdatingMemberBenefitImage = false;
      },
      error: (error) => {
        const message = error?.error?.message || 'Failed to update member benefit images.';
        this.toastr.error(message, 'Error');
        this.isUpdatingMemberBenefitImage = false;
      }
    });
  }

  deleteMemberBenefitImage(imageId: number): void {
    if (!imageId) {
      return;
    }
    this.apiService.deleteMemberBenefitImage(imageId).subscribe({
      next: (response: any) => {
        this.applyMemberBenefitResponse(response);
        this.toastr.success('Member benefit image deleted successfully.', 'Deleted');
      },
      error: (error) => {
        const message = error?.error?.message || 'Failed to delete member benefit image.';
        this.toastr.error(message, 'Error');
      }
    });
  }

  loadEvents(): void {
    this.apiService.getEvents().subscribe({
      next: (response: any) => {
        this.events = Array.isArray(response) ? response : [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading events:', error);
        this.events = [];
        this.isLoading = false;
      }
    });
  }

  loadPosts(): void {
    // Job listings component will load its own data
    this.isLoading = false;
  }

  // Global Modal Handlers
  openMemberDetail(app: any): void {
    this.selectedApplication = app;
    this.showDetailModal = true;
  }

  openApproveMember(app: any): void {
    this.selectedApplication = app;
    this.showApproveModal = true;
  }

  openRejectMember(app: any): void {
    this.selectedApplication = app;
    this.showRejectModal = true;
  }

  closeGlobalModals(): void {
    this.showDetailModal = false;
    this.showApproveModal = false;
    this.showRejectModal = false;
    this.showEventDetailModal = false;
    this.showJobDetailModal = false;
    this.showJobPostModal = false;
    this.showEventModal = false;
    this.selectedApplication = null;
    this.selectedEvent = null;
    this.selectedJob = null;
    this.selectedEventForEdit = null;
  }

  openEventDetail(event: any): void {
    this.selectedEvent = event;
    this.showEventDetailModal = true;
  }

  openJobDetail(job: any): void {
    this.selectedJob = job;
    this.showJobDetailModal = true;
  }

  openJobPostModal(job?: any): void {
    this.selectedJob = job || null;
    this.showJobPostModal = true;
  }

  onCreateEvent(): void {
    this.selectedEventForEdit = null;
    this.showEventModal = true;
    this.saveEvent = false;
  }
  saveEvent:boolean=false;
  onEditEvent(event: any): void {
    this.selectedEventForEdit = event;
    this.showEventModal = true;
    this.saveEvent = true;
  }

  closeEventModal(): void {
    this.showEventModal = false;
    this.selectedEventForEdit = null;
  }

  onEventSaved(): void {
    this.loadEvents();
    this.closeGlobalModals();
  }

  onDeleteEvent(event: any): void {
    const eventName = event.name || event.title || 'this event';
    this.confirmService.confirm({
      title: 'Delete Event',
      message: `Are you sure you want to delete "${eventName}"?`,
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
      isDestructive: true
    }).subscribe(confirmed => {
      if (confirmed) {
        console.log('Delete event:', event.id);
        // Reload events after deletion
        this.loadEvents();
      }
    });
  }

  onApproveConfirm(data: { id: number; reason?: string }): void {
    if (!data?.id) {
      this.toastr.error('Invalid application selected.', 'Error');
      return;
    }
    this.isLoading = true;
    this.apiService.approveApplication(data.id).subscribe({
      next: () => {
        this.toastr.success('Application approved successfully.', 'Approved');
        this.closeGlobalModals();
        this.loadStats();
      },
      error: (error) => {
        this.isLoading = false;
        const message = error?.error?.message || 'Error approving application.';
        this.toastr.error(message, 'Error');
      }
    });
  }

  onRejectConfirm(data: { id: number; reason?: string }): void {
    if (!data?.id) {
      this.toastr.error('Invalid application selected.', 'Error');
      return;
    }
    if (!data.reason || !data.reason.trim()) {
      this.toastr.error('Please provide a rejection reason.', 'Error');
      return;
    }
    this.isLoading = true;
    this.apiService.rejectApplication(data.id, data.reason).subscribe({
      next: () => {
        this.toastr.success('Application rejected successfully.', 'Rejected');
        this.closeGlobalModals();
        this.loadStats();
      },
      error: (error) => {
        this.isLoading = false;
        const message = error?.error?.message || 'Error rejecting application.';
        this.toastr.error(message, 'Error');
      }
    });
  }
}


