import { Routes } from '@angular/router';

// Role-based guards should be used in reality, but inline matching or basic approach for now
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent) },
  { path: 'admin-dashboard', loadComponent: () => import('./pages/admin-dashboard/admin-dashboard.component').then(c => c.AdminDashboardComponent) },
  { path: 'directory', loadComponent: () => import('./pages/directory/directory.component').then(c => c.DirectoryComponent) },
  { path: 'events', loadComponent: () => import('./pages/events/events.component').then(c => c.EventsComponent) },
  { path: 'events/:id', loadComponent: () => import('./pages/event-detail/event-detail.component').then(c => c.EventDetailComponent) },
  { path: 'bench', loadComponent: () => import('./pages/bench/bench.component').then(c => c.BenchComponent) },
  { path: 'blogs', loadComponent: () => import('./pages/blogs/blogs.component').then(c => c.BlogsComponent) },
  { path: 'profile-edit', loadComponent: () => import('./pages/profile-edit/profile-edit.component').then(c => c.ProfileEditComponent) },
  { path: 'resource-post', loadComponent: () => import('./pages/resource-post/resource-post.component').then(c => c.ResourcePostComponent) },
  { path: 'project-post', loadComponent: () => import('./pages/project-post/project-post.component').then(c => c.ProjectPostComponent) },
  { path: 'blog-create', loadComponent: () => import('./pages/blog-create/blog-create.component').then(c => c.BlogCreateComponent) },
  { path: 'member-management', loadComponent: () => import('./pages/member-management/member-management.component').then(c => c.MemberManagementComponent) },
  { path: 'event-create', loadComponent: () => import('./pages/event-create/event-create.component').then(c => c.EventCreateComponent) },
  { path: 'event-management', loadComponent: () => import('./pages/event-management/event-management.component').then(c => c.EventManagementComponent) },
  { path: '**', redirectTo: 'home' } // Fallback
];
