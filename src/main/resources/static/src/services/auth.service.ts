import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'member';
  name: string;
  // Optional properties for compatibility with Member interface
  type?: 'REGULAR' | 'PREMIUM' | 'ADMIN';
  company?: string;
  image?: string;
  title?: string;
  bio?: string;
  phone?: string;
  website?: string;
  industry?: string;
  location?: string;
  skills?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    // Check for stored user session
    const storedUser = localStorage.getItem('currentUser');
    const token = localStorage.getItem('token');
    if (storedUser && token) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      this.apiService.login(email, password).subscribe({
        next: (response: any) => {
          console.log('Login response:', response);
          
          // Handle both nested (response.user) and flat response structures
          const userData = response.user || response;
          const token = response.token;
          
          if (token && userData && userData.id) {
            // Handle capitalized role from backend (MEMBER, ADMIN)
            const roleFromBackend = (userData.role || '').toString().toUpperCase();
            const normalizedRole = roleFromBackend === 'ADMIN' ? 'admin' : 'member';
            
            console.log('Backend role:', userData.role, 'Normalized to:', normalizedRole);
            
            const user: User = {
              id: userData.id,
              username: userData.username || userData.email?.split('@')[0] || '',
              email: userData.email || email,
              role: normalizedRole as 'admin' | 'member',
              name: userData.name || userData.username || userData.email?.split('@')[0] || ''
            };
            
            // Store user and token
            localStorage.setItem('token', token);
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Update BehaviorSubject synchronously
            this.currentUserSubject.next(user);
            
            console.log('User stored successfully:', user);
            observer.next(true);
            observer.complete();
          } else {
            console.error('Invalid response structure. Token:', !!token, 'User data:', !!userData);
            console.log('Full response:', response);
            observer.next(false);
            observer.complete();
          }
        },
        error: (error) => {
          console.error('Login error:', error);
          observer.error(error);
        }
      });
    });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  isAdmin(): boolean {
    return this.currentUserSubject.value?.role === 'admin';
  }

  isMember(): boolean {
    return this.currentUserSubject.value?.role === 'member';
  }
}
