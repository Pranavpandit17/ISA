import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const memberGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Allow both regular members and admins to access member-guarded routes
  if (authService.isAuthenticated() && (authService.isMember() || authService.isAdmin())) {
    return true;
  }

  if (!authService.isAuthenticated()) {
    sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
    return router.createUrlTree(['/home']);
  }

  return router.createUrlTree(['/home']);
};
