import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewState } from '../../models/interfaces';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() currentView: ViewState = 'HOME';
  @Input() currentUser: User | null = null;
  @Output() navigate = new EventEmitter<ViewState>();
  @Output() openAuth = new EventEmitter<'LOGIN' | 'REGISTER'>();
  @Output() logout = new EventEmitter<void>();

  navItems: Array<{ label: string; view: ViewState }> = [
    { label: 'Home', view: 'HOME' },
    { label: 'Events', view: 'EVENTS' },
    { label: 'Resources', view: 'BENCH' },
    { label: 'Directory', view: 'DIRECTORY' },
    { label: 'Insights', view: 'BLOGS' }
  ];

  onNavigate(view: ViewState): void {
    this.navigate.emit(view);
  }

  onOpenAuth(mode: 'LOGIN' | 'REGISTER'): void {
    this.openAuth.emit(mode);
  }

  onLogout(): void {
    this.logout.emit();
  }
}

