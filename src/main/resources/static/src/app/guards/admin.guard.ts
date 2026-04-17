import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated() && authService.isAdmin()) {
    return true;
  }

  if (!authService.isAuthenticated()) {
    sessionStorage.setItem('redirectAfterLogin', window.location.pathname);
    return router.createUrlTree(['/home']);
  }

  // If authenticated but not admin, redirect to user dashboard or home
  return router.createUrlTree(['/dashboard']);
};
