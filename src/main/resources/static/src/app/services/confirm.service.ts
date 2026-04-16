import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface ConfirmConfig {
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isDestructive?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ConfirmService {
  private confirmState = new Subject<ConfirmConfig | null>();
  // We need to store the current resolver so we only resolve the current dialog
  private currentResolver: ((result: boolean) => void) | null = null;

  confirmState$ = this.confirmState.asObservable();
  
  /**
   * Opens the confirm dialog and returns a Promise resolving to boolean.
   * We use Promise here instead of Observable to make it easier to replace `if (confirm(...))`
   * with `if (await this.confirmService.confirm(...))` if we prefer async/await, or
   * simply `.then(res => { if (res) ... })`. Using Observable is also fine.
   */
  confirm(config: ConfirmConfig): Observable<boolean> {
    return new Observable<boolean>((subscriber) => {
      this.currentResolver = (result: boolean) => {
        subscriber.next(result);
        subscriber.complete();
      };
      this.confirmState.next(config);
    });
  }

  respond(result: boolean) {
    if (this.currentResolver) {
      this.currentResolver(result);
      this.currentResolver = null;
    }
    this.confirmState.next(null); // Close modal
  }
}
