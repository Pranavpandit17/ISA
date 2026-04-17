import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const planSelectedGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.getCurrentUser();

  if (!user) {
    return router.createUrlTree(['/home']);
  }

  if (user.role === 'admin') {
    return true;
  }

  if (authService.hasSelectedPlan()) {
    return true;
  }

  return router.createUrlTree(['/select-plan']);
};
