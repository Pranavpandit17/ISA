import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Event as AppEvent } from './models/interfaces';
import { AuthService, User } from './services/auth.service';
import { ApiService } from './services/api.service';
import { AppNavigationService } from './services/app-navigation.service';
import { AppModalService } from './services/app-modal.service';

// Import shared components
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModalComponent } from './components/modals/auth-modal/auth-modal.component';
import { PaymentModalComponent } from './components/modals/payment-modal/payment-modal.component';
import { EventDetailModalComponent } from './components/modals/event-detail-modal/event-detail-modal.component';
import { ConfirmModalComponent } from './components/modals/confirm-modal/confirm-modal.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastService } from './services/toast.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        NavigationComponent,
        FooterComponent,
        AuthModalComponent,
        PaymentModalComponent,
        EventDetailModalComponent,
        ConfirmModalComponent,
        ToastComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    @ViewChild(AuthModalComponent) authModal!: AuthModalComponent;
    currentUser: User | null = null;
    selectedEvent: AppEvent | null = null;
    pendingEvent: AppEvent | null = null;

    // Modals
    showAuthModal = false;
    authMode: 'LOGIN' | 'REGISTER' = 'LOGIN';
    showPaymentModal = false;
    paymentPlanData: any = null;
    showEventDetailModal = false;

    constructor(
        private authService: AuthService,
        private apiService: ApiService,
        private router: Router,
        private navService: AppNavigationService,
        private modalService: AppModalService,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.authService.currentUser$.subscribe(user => {
            this.currentUser = user;
        });
        // Listen for modal requests from any routed page
        this.modalService.authModal$.subscribe(mode => this.openAuthModal(mode));
        this.modalService.paymentModal$.subscribe(data => this.openPaymentModal(data));
        this.modalService.eventDetailModal$.subscribe(event => this.viewEventDetail(event));
    }

    /** Called from Navigation & Footer via (navigate) output — delegates to centralized service */
    navigate(viewOrPath: string): void {
        this.navService.go(viewOrPath);
    }

    openAuthModal(mode: 'LOGIN' | 'REGISTER'): void {
        this.authMode = mode;
        this.showAuthModal = true;
    }

    closeAuthModal(): void {
        this.showAuthModal = false;
    }

    onAuthSuccess(): void {
        this.closeAuthModal();
        const user = this.authService.getCurrentUser();

        if (user) {
            this.currentUser = user;

            if (this.pendingEvent) {
                const eventToOpen = this.pendingEvent;
                this.pendingEvent = null;
                this.viewEventDetail(eventToOpen);
                return;
            }

            // Check if there was a pending redirect
            const redirect = sessionStorage.getItem('redirectAfterLogin');
            if (redirect) {
                sessionStorage.removeItem('redirectAfterLogin');
                this.router.navigate([redirect]);
                return;
            }

            if (user.role !== 'admin' && !this.authService.hasSelectedPlan()) {
                this.router.navigate(['/select-plan']);
                return;
            }

            this.router.navigate([user.role === 'admin' ? '/admin-dashboard' : '/dashboard']);
            window.scrollTo(0, 0);
        } else {
            const storedUser = localStorage.getItem('currentUser');
            if (storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    this.currentUser = parsedUser;
                    if (parsedUser.role !== 'admin' && !this.authService.hasSelectedPlan()) {
                        this.router.navigate(['/select-plan']);
                        return;
                    }
                    this.router.navigate([parsedUser.role === 'admin' ? '/admin-dashboard' : '/dashboard']);
                    window.scrollTo(0, 0);
                } catch (e) {
                    console.error('Error parsing stored user:', e);
                }
            }
        }
    }

    logout(): void {
        this.authService.logout();
        this.currentUser = null;
        this.router.navigate(['/home']);
    }

    openPaymentModal(data?: any): void {
        if (data && data.event) {
            this.selectedEvent = { 
              ...data.event, 
              quantity: data.quantity || 1,
              selectedTicketTypeId: data.ticketTypeId || data.selectedTicketTypeId || null,
              selectedTicketType: data.selectedTicketType || null
            } as AppEvent;
            this.paymentPlanData = null;
        } else {
            this.paymentPlanData = data;
            // If it's pure plan data (no event), ensure selectedEvent is null so it defaults to membership
            this.selectedEvent = null;
        }
        this.showPaymentModal = true;
    }

    closePaymentModal(): void {
        this.showPaymentModal = false;
        // Don't clear selectedEvent immediately if we're in the middle of a flow
        // but if it was just for the payment modal, we can clear it.
        // If eventDetailModal is still open, we should keep it.
        if (!this.showEventDetailModal) {
            this.selectedEvent = null;
        }
    }

    onPaymentSuccess(paymentResult?: any): void {
        if (paymentResult && paymentResult.type === 'EVENT') {
            this.toastService.success('Your event registration is complete!');
            this.showPaymentModal = false;
            this.selectedEvent = null;
        } else if (paymentResult && paymentResult.type === 'MEMBERSHIP') {
            // Payment for membership successful during registration flow
            this.showPaymentModal = false;

            // If auth modal is already open, show the form
            if (this.showAuthModal && this.authModal) {
                this.authModal.onPaymentSuccess();
            } else {
                // Was likely from Home "Upgrade Now". Open registration form
                this.openAuthModal('REGISTER');
                // We need to wait for it to initialize or just ensure it starts at AUTH_FORM
                // AuthModal logic usually handles this if a plan was selected.
                // To be safe, we can use a small timeout or a state variable.
            }
        }
    }

    onAuthPaymentRequest(plan: any): void {
        this.openPaymentModal(plan);
    }

    handleLoginRequiredForEvent(event: AppEvent): void {
        this.pendingEvent = event;
        this.openAuthModal('LOGIN');
    }

    viewEventDetail(event: AppEvent): void {
        if (!this.currentUser) {
            this.handleLoginRequiredForEvent(event);
            return;
        }

        const processEvent = (ev: any) => {
            const pricingType = ev.pricingType || ev.pricing?.type;
            const isPaid = pricingType === 'PAID' || pricingType === 'DISCOUNTED' ||
                (ev.memberPrice > 0 || ev.nonMemberPrice > 0 || ev.price > 0);
            this.selectedEvent = { ...ev, registeredCount: ev.registrationCount || ev.registeredCount || 0 } as any;
            this.showEventDetailModal = true;
        };

        if ((event as any).id) {
            this.apiService.getEventById((event as any).id).subscribe({
                next: (fullEvent: any) => processEvent(fullEvent),
                error: () => processEvent(event)
            });
        } else {
            processEvent(event);
        }
    }

    closeEventDetailModal(): void {
        this.showEventDetailModal = false;
        this.selectedEvent = null;
    }

    onEventRegistered(): void { }

    onEventPaymentRequest(paymentData: any): void {
        if (paymentData && paymentData.event) {
            this.selectedEvent = {
                ...paymentData.event,
                quantity: paymentData.quantity || 1,
                selectedTicketTypeId: paymentData.selectedTicketTypeId || null,
                selectedTicketType: paymentData.selectedTicketType || null
            } as AppEvent;
            this.showEventDetailModal = false;
            this.showPaymentModal = true;
        }
    }

    registerForEvent(event: AppEvent): void {
        this.viewEventDetail(event);
    }
}
