import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState, Event as AppEvent, Member } from './models/interfaces';
import { AuthService, User } from './services/auth.service';
import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';

// Import all page components
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { DirectoryComponent } from './pages/directory/directory.component';
import { EventsComponent } from './pages/events/events.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { BenchComponent } from './pages/bench/bench.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';
import { ResourcePostComponent } from './pages/resource-post/resource-post.component';
import { ProjectPostComponent } from './pages/project-post/project-post.component';
import { BlogCreateComponent } from './pages/blog-create/blog-create.component';
import { MemberManagementComponent } from './pages/member-management/member-management.component';
import { EventCreateComponent } from './pages/event-create/event-create.component';
import { EventManagementComponent } from './pages/event-management/event-management.component';

// Import shared components
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModalComponent } from './components/modals/auth-modal/auth-modal.component';
import { PaymentModalComponent } from './components/modals/payment-modal/payment-modal.component';
import { EventDetailModalComponent } from './components/modals/event-detail-modal/event-detail-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    DashboardComponent,
    AdminDashboardComponent,
    DirectoryComponent,
    EventsComponent,
    EventDetailComponent,
    BenchComponent,
    BlogsComponent,
    ProfileEditComponent,
    ResourcePostComponent,
    ProjectPostComponent,
    BlogCreateComponent,
    MemberManagementComponent,
    EventCreateComponent,
    EventManagementComponent,
    NavigationComponent,
    FooterComponent,
    AuthModalComponent,
    PaymentModalComponent,
    EventDetailModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentView: ViewState = 'HOME';
  currentUser: User | null = null;
  selectedEvent: AppEvent | null = null;
  pendingEvent: AppEvent | null = null;
  
  // Modals
  showAuthModal = false;
  authMode: 'LOGIN' | 'REGISTER' = 'LOGIN';
  showPaymentModal = false;
  showEventDetailModal = false;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Ensure we start on HOME view
    this.currentView = 'HOME';
    
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      // Don't auto-redirect on page load - stay on HOME
    });
  }

  navigate(view: ViewState): void {
    if ((['DASHBOARD','DIRECTORY','PROFILE_EDIT','RESOURCE_POST','PROJECT_POST','BLOG_CREATE'].includes(view)) && !this.currentUser) {
      this.openAuthModal('LOGIN');
      return;
    }
    if ((view === 'RESOURCE_POST' || view === 'PROJECT_POST') && this.currentUser?.type === 'REGULAR') {
      alert("Posting is a Premium feature.");
      this.openPaymentModal();
      return;
    }
    // Handle role-based routing
    if (view === 'DASHBOARD') {
      const user = this.authService.getCurrentUser();
      if (user?.role === 'admin') {
        this.currentView = 'ADMIN_DASHBOARD';
      } else {
        this.currentView = 'DASHBOARD';
      }
    } else {
      this.currentView = view;
    }
    window.scrollTo(0, 0);
  }

  openAuthModal(mode: 'LOGIN' | 'REGISTER'): void {
    this.authMode = mode;
    this.showAuthModal = true;
  }

  closeAuthModal(): void {
    this.showAuthModal = false;
  }

  onAuthSuccess(): void {
    // Close modal first
    this.closeAuthModal();
    
    // Get user immediately - BehaviorSubject update is synchronous
    const user = this.authService.getCurrentUser();
    
    if (user) {
      this.currentUser = user;
      console.log('Login successful. User role:', user.role); // Debug log

      // If user had tried to register for an event from HOME before login,
      // continue that previous action by opening the event detail
      if (this.pendingEvent) {
        const eventToOpen = this.pendingEvent;
        this.pendingEvent = null;
        this.viewEventDetail(eventToOpen);
        return;
      }
      
      // Route directly to respective landing page based on role from database
      if (user.role === 'admin') {
        console.log('Routing to Admin Dashboard');
        this.currentView = 'ADMIN_DASHBOARD';
      } else if (user.role === 'member') {
        console.log('Routing to Member Dashboard');
        this.currentView = 'DASHBOARD';
      } else {
        // Fallback: default to member dashboard if role is unclear
        console.warn('Unknown role, defaulting to member dashboard. Role was:', user.role);
        this.currentView = 'DASHBOARD';
      }
      window.scrollTo(0, 0);
    } else {
      // Fallback: check localStorage if BehaviorSubject hasn't updated yet
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          console.log('Found user in localStorage:', parsedUser);
          this.currentUser = parsedUser;
          if (parsedUser.role === 'admin') {
            this.currentView = 'ADMIN_DASHBOARD';
          } else {
            this.currentView = 'DASHBOARD';
          }
          window.scrollTo(0, 0);
        } catch (e) {
          console.error('Error parsing stored user:', e);
        }
      } else {
        console.error('User not found after login');
      }
    }
  }

  logout(): void {
    this.authService.logout();
    this.currentUser = null;
    this.navigate('HOME');
  }

  openPaymentModal(): void {
    this.showPaymentModal = true;
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
    // Clear selected event if it was only for payment
    if (this.selectedEvent && !this.showEventDetailModal) {
      this.selectedEvent = null;
    }
  }

  onPaymentSuccess(paymentResult?: any): void {
    // Handle payment success
    if (paymentResult && paymentResult.type === 'EVENT') {
      // Event payment and registration completed
      alert('Payment successful! You have been registered for the event.');
      this.showPaymentModal = false;
      this.selectedEvent = null;
      // Optionally refresh events or navigate
    }
  }

  handleLoginRequiredForEvent(event: AppEvent): void {
    // Remember which event user wanted to register for, then open login
    this.pendingEvent = event;
    this.openAuthModal('LOGIN');
  }

  viewEventDetail(event: AppEvent): void {
    // If user is not logged in, require login first
    if (!this.currentUser) {
      this.handleLoginRequiredForEvent(event);
      return;
    }

    // Fetch full event details first
    if ((event as any).id) {
      this.apiService.getEventById((event as any).id).subscribe({
        next: (fullEvent: any) => {
          const eventWithDetails = {
            ...fullEvent,
            registeredCount: fullEvent.registrationCount || fullEvent.registeredCount || 0
          } as any;
          
          // Check if event is paid - if so, open payment modal instead of event detail modal
          const pricingType = eventWithDetails.pricingType || eventWithDetails.pricing?.type;
          const isPaid = pricingType === 'PAID' || pricingType === 'DISCOUNTED' || 
                         (eventWithDetails.memberPrice > 0 || eventWithDetails.nonMemberPrice > 0 || eventWithDetails.price > 0);
          
          if (isPaid) {
            // For paid events, open payment modal
            this.selectedEvent = eventWithDetails;
            this.showPaymentModal = true;
          } else {
            // For free events, open event detail modal
            this.selectedEvent = eventWithDetails;
            this.showEventDetailModal = true;
          }
        },
        error: (error) => {
          console.error('Error loading event details:', error);
          // Fallback to using the event we already have
          const eventFallback = {
            ...(event as any),
            registeredCount: (event as any).registrationCount || (event as any).registeredCount || 0
          } as any;
          
          const pricingType = eventFallback.pricingType || eventFallback.pricing?.type;
          const isPaid = pricingType === 'PAID' || pricingType === 'DISCOUNTED' || 
                         (eventFallback.memberPrice > 0 || eventFallback.nonMemberPrice > 0 || eventFallback.price > 0);
          
          if (isPaid) {
            this.selectedEvent = eventFallback;
            this.showPaymentModal = true;
          } else {
            this.selectedEvent = eventFallback;
            this.showEventDetailModal = true;
          }
        }
      });
    } else {
      // If no ID, use the event as-is
      const eventFallback = {
        ...(event as any),
        registeredCount: (event as any).registrationCount || (event as any).registeredCount || 0
      } as any;
      
      const pricingType = eventFallback.pricingType || eventFallback.pricing?.type;
      const isPaid = pricingType === 'PAID' || pricingType === 'DISCOUNTED' || 
                     (eventFallback.memberPrice > 0 || eventFallback.nonMemberPrice > 0 || eventFallback.price > 0);
      
      if (isPaid) {
        this.selectedEvent = eventFallback;
        this.showPaymentModal = true;
      } else {
        this.selectedEvent = eventFallback;
        this.showEventDetailModal = true;
      }
    }
  }

  closeEventDetailModal(): void {
    this.showEventDetailModal = false;
    this.selectedEvent = null;
  }

  onEventRegistered(): void {
    // After successful registration from the modal, keep user on same page;
    // dashboards/pages that need to refresh events will handle it locally.
  }

  onEventPaymentRequest(paymentData: any): void {
    // Handle payment request from event detail modal
    if (paymentData && paymentData.event) {
      const eventWithQuantity = {
        ...paymentData.event,
        quantity: paymentData.quantity || 1
      };
      this.selectedEvent = eventWithQuantity as AppEvent;
      this.showEventDetailModal = false; // Close event detail modal
      this.showPaymentModal = true; // Open payment modal
    }
  }

  // Legacy handler for <app-event-detail> component's (register) output.
  // Now simply routes into the shared event detail / booking modal flow.
  registerForEvent(event: AppEvent): void {
    this.viewEventDetail(event);
  }
}

