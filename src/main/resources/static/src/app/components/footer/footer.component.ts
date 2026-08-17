import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppNavigationService } from '../../services/app-navigation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'Past Events', path: '/old-events' },
    { label: 'Member Directory', path: '/directory' },
    { label: 'Insights & Blogs', path: '/blogs' },
    { label: 'Bench Exchange', path: '/bench' },
    { label: 'Terms & Policy', path: '/terms-and-policy' },
  ];

  memberLinks = [
    { label: 'Join ISA', path: '/home' },
    { label: 'Member Dashboard', path: '/dashboard' },
    { label: 'Edit Profile', path: '/profile-edit' },
    { label: 'Post a Resource', path: '/resource-post' },
    { label: 'Post a Project', path: '/project-post' },
  ];

  constructor(private navService: AppNavigationService) { }

  go(path: string): void {
    this.navService.go(path);
  }
}
