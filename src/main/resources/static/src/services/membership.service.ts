import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const SELECTED_PLAN_KEY = 'selectedMembershipPlan';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  private selectedPlanSubject: BehaviorSubject<any | null>;

  constructor() {
    const stored = localStorage.getItem(SELECTED_PLAN_KEY);
    let initialPlan: any | null = null;
    if (stored) {
      try {
        initialPlan = JSON.parse(stored);
      } catch {
        initialPlan = null;
      }
    }
    this.selectedPlanSubject = new BehaviorSubject<any | null>(initialPlan);
  }

  getSelectedPlan$(): Observable<any | null> {
    return this.selectedPlanSubject.asObservable();
  }

  getSelectedPlan(): any | null {
    return this.selectedPlanSubject.value;
  }

  setSelectedPlan(plan: any | null): void {
    this.selectedPlanSubject.next(plan);
    if (plan) {
      localStorage.setItem(SELECTED_PLAN_KEY, JSON.stringify(plan));
    } else {
      localStorage.removeItem(SELECTED_PLAN_KEY);
    }
  }
}

