import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const memberGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated() && authService.isMember()) {
    return true;
  }

  if (!authService.isAuthenticated()) {
    sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
    return router.createUrlTree(['/home']);
  }

  // If authenticated but is an admin, redirect to admin dashboard
  if (authService.isAdmin()) {
    return router.createUrlTree(['/admin-dashboard']);
  }

  return router.createUrlTree(['/home']);
};
