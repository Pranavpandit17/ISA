import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

let handlingSessionExpiry = false;

export const authExpiryInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        const token = localStorage.getItem('token');
        const isAuthEndpoint = req.url.includes('/api/auth/login');

        // Handle only authenticated-session failures, not initial bad login attempts.
        if (token && !isAuthEndpoint && !handlingSessionExpiry) {
          handlingSessionExpiry = true;
          toastr.error('Token expired. Please login again.');
          authService.logout();

          // Prevent duplicate logout/toast bursts from concurrent 401 responses.
          setTimeout(() => {
            handlingSessionExpiry = false;
          }, 1500);
        }
      }

      return throwError(() => error);
    })
  );
};

