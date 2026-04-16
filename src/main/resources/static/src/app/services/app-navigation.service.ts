import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Centralized navigation service.
 * Pages inject this instead of emitting (navigate) events to parent.
 * Handles auth guards and ViewState-to-route mapping internally.
 */
@Injectable({ providedIn: 'root' })
export class AppNavigationService {

    /** Maps legacy ViewState enum strings → route paths */
    private readonly viewStateToRoute: Record<string, string> = {
        'HOME': 'home',
        'DASHBOARD': 'dashboard',
        'ADMIN_DASHBOARD': 'admin-dashboard',
        'DIRECTORY': 'directory',
        'EVENTS': 'events',
        'EVENT_DETAIL': 'events',
        'BENCH': 'bench',
        'BLOGS': 'blogs',
        'PROFILE_EDIT': 'profile-edit',
        'RESOURCE_POST': 'resource-post',
        'PROJECT_POST': 'project-post',
        'BLOG_CREATE': 'blog-create',
        'MEMBER_MANAGEMENT': 'member-management',
        'EVENT_CREATE': 'event-create',
        'EVENT_MANAGEMENT': 'event-management',
        'JOBS_PROJECTS': 'bench',
        'POST_MANAGEMENT': 'admin-dashboard',
        'PAYMENT': 'home',
    };

    private readonly protectedRoutes = [
        'dashboard', 'admin-dashboard', 'directory',
        'profile-edit', 'resource-post', 'project-post', 'blog-create',
        'member-management', 'event-create', 'event-management'
    ];

    constructor(private router: Router, private authService: AuthService) { }

    /**
     * Navigate to a route. Accepts both ViewState strings ('EVENTS') and path strings ('events').
     * Handles auth guards and role-based routing automatically.
     */
    go(viewOrPath: string): void {
        const path = this.viewStateToRoute[viewOrPath] ?? viewOrPath.toLowerCase().replace(/_/g, '-');
        const user = this.authService.getCurrentUser();

        if (this.protectedRoutes.includes(path) && !user) {
            sessionStorage.setItem('redirectAfterLogin', '/' + path);
            this.router.navigate(['/home']);
            return;
        }

        // Special handling for PAYMENT: go to dashboard plans if logged in
        if (viewOrPath === 'PAYMENT' && user) {
            this.router.navigate([user.role === 'admin' ? '/admin-dashboard' : '/dashboard'], { 
                queryParams: { view: 'MEMBERSHIP_PLANS' } 
            });
        } else if (path === 'dashboard') {
            // Role-based dashboard routing
            this.router.navigate([user?.role === 'admin' ? '/admin-dashboard' : '/dashboard']);
        } else {
            this.router.navigate(['/' + path]);
        }

        window.scrollTo(0, 0);
    }

    /** Navigate to home */
    home(): void { this.go('home'); }

    /** Navigate to events list */
    events(): void { this.go('events'); }

    /** Navigate to a specific event by id */
    eventDetail(id: string | number): void {
        this.router.navigate(['/events', id]);
        window.scrollTo(0, 0);
    }

    /** Navigate back (browser history) */
    back(): void { history.back(); }
}
