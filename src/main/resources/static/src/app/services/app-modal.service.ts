import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Shared service so any page component can trigger global modals
 * (auth, payment) without needing @Output event bubbling.
 */
@Injectable({ providedIn: 'root' })
export class AppModalService {
  private authModalSubject = new Subject<'LOGIN' | 'REGISTER'>();
  private paymentModalSubject = new Subject<any>();
  private eventDetailModalSubject = new Subject<any>();

  /** Observable that AppComponent listens to */
  authModal$ = this.authModalSubject.asObservable();
  paymentModal$ = this.paymentModalSubject.asObservable();
  eventDetailModal$ = this.eventDetailModalSubject.asObservable();

  openAuth(mode: 'LOGIN' | 'REGISTER'): void {
    this.authModalSubject.next(mode);
  }

  openPayment(data?: any): void {
    this.paymentModalSubject.next(data);
  }

  openEventDetail(event: any): void {
    this.eventDetailModalSubject.next(event);
  }
}
