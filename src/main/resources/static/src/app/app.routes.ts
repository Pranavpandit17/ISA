import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { memberGuard } from './guards/member.guard';
import { planSelectedGuard } from './guards/plan-selected.guard';

// Role-based guards should be used in reality, but inline matching or basic approach for now
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
  { path: 'dashboard', canActivate: [memberGuard, planSelectedGuard], loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent) },
  { path: 'admin-dashboard', canActivate: [adminGuard], loadComponent: () => import('./pages/admin-dashboard/admin-dashboard.component').then(c => c.AdminDashboardComponent) },
  { path: 'directory', canActivate: [memberGuard, planSelectedGuard], loadComponent: () => import('./pages/directory/directory.component').then(c => c.DirectoryComponent) },
  { path: 'events', canActivate: [memberGuard, planSelectedGuard], loadComponent: () => import('./pages/events/events.component').then(c => c.EventsComponent) },
  { path: 'events/:id', loadComponent: () => import('./pages/event-detail/event-detail.component').then(c => c.EventDetailComponent) },
  { path: 'bench', canActivate: [memberGuard, planSelectedGuard], loadComponent: () => import('./pages/bench/bench.component').then(c => c.BenchComponent) },
  { path: 'blogs', loadComponent: () => import('./pages/blogs/blogs.component').then(c => c.BlogsComponent) },
  { path: 'profile-edit', canActivate: [memberGuard, planSelectedGuard], loadComponent: () => import('./pages/profile-edit/profile-edit.component').then(c => c.ProfileEditComponent) },
  { path: 'resource-post', canActivate: [memberGuard, planSelectedGuard], loadComponent: () => import('./pages/resource-post/resource-post.component').then(c => c.ResourcePostComponent) },
  { path: 'project-post', canActivate: [memberGuard, planSelectedGuard], loadComponent: () => import('./pages/project-post/project-post.component').then(c => c.ProjectPostComponent) },
  { path: 'blog-create', canActivate: [memberGuard, planSelectedGuard], loadComponent: () => import('./pages/blog-create/blog-create.component').then(c => c.BlogCreateComponent) },
  { path: 'member-management', canActivate: [adminGuard], loadComponent: () => import('./pages/member-management/member-management.component').then(c => c.MemberManagementComponent) },
  { path: 'event-create', canActivate: [adminGuard, planSelectedGuard], loadComponent: () => import('./pages/event-create/event-create.component').then(c => c.EventCreateComponent) },
  { path: 'event-management', canActivate: [adminGuard], loadComponent: () => import('./pages/event-management/event-management.component').then(c => c.EventManagementComponent) },
  { path: 'select-plan', canActivate: [memberGuard], loadComponent: () => import('./pages/membership-plans/membership-plans.component').then(c => c.MembershipPlansComponent) },
  { path: '**', redirectTo: 'home' } // Fallback
];
