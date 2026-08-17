import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';
import { AppNavigationService } from '../../services/app-navigation.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {
  @Input() currentUser: User | null = null;
  // Keep these outputs for AppComponent modal coordination
  @Output() openAuth = new EventEmitter<'LOGIN' | 'REGISTER'>();
  @Output() logout = new EventEmitter<void>();
  // Keep navigate output for AppComponent compat (footer etc)
  @Output() navigate = new EventEmitter<string>();

  navItems: Array<{ label: string; path: string }> = [
    { label: 'Home', path: '/home' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Member Benefits', path: '/member-benefits' },
    { label: 'Events', path: '/events' },
    { label: 'Past Events', path: '/old-events' },
    { label: 'News', path: '/news' },
    { label: 'Directory', path: '/directory' },
    { label: 'About Us', path: '/about' }
  ];

  constructor(
    private authService: AuthService,
    private navService: AppNavigationService
  ) { }

  ngOnInit(): void { }

  onNavigate(path: string): void {
    this.navService.go(path);
  }

  onDashboard(): void {
    const user = this.authService.getCurrentUser();
    this.navService.go(user?.role === 'admin' ? 'admin-dashboard' : 'dashboard');
  }

  onOpenAuth(mode: 'LOGIN' | 'REGISTER'): void {
    this.openAuth.emit(mode);
  }

  onLogout(): void {
    this.logout.emit();
  }

  getUserPlanLabel(): string {
    if (!this.currentUser) {
      return '';
    }
    if (this.currentUser.role === 'admin' || this.currentUser.type === 'ADMIN') {
      return 'ADMIN';
    }
    if (this.currentUser.currentPlanName && this.authService.hasSelectedPlan()) {
      return this.currentUser.currentPlanName.toUpperCase();
    }
    if (this.currentUser.planExpiryDate && new Date(this.currentUser.planExpiryDate) < new Date(new Date().toDateString())) {
      return 'PLAN EXPIRED';
    }
    return 'NO PLAN';
  }
}
