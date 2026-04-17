import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-DNDVYN6P.js";

// src/app/services/membership.service.ts
var SELECTED_PLAN_KEY = "selectedMembershipPlan";
var MembershipService = class _MembershipService {
  constructor() {
    const stored = localStorage.getItem(SELECTED_PLAN_KEY);
    let initialPlan = null;
    if (stored) {
      try {
        initialPlan = JSON.parse(stored);
      } catch {
        initialPlan = null;
      }
    }
    this.selectedPlanSubject = new BehaviorSubject(initialPlan);
  }
  getSelectedPlan$() {
    return this.selectedPlanSubject.asObservable();
  }
  getSelectedPlan() {
    return this.selectedPlanSubject.value;
  }
  setSelectedPlan(plan) {
    this.selectedPlanSubject.next(plan);
    if (plan) {
      localStorage.setItem(SELECTED_PLAN_KEY, JSON.stringify(plan));
    } else {
      localStorage.removeItem(SELECTED_PLAN_KEY);
    }
  }
  static {
    this.\u0275fac = function MembershipService_Factory(t) {
      return new (t || _MembershipService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MembershipService, factory: _MembershipService.\u0275fac, providedIn: "root" });
  }
};

export {
  MembershipService
};
//# sourceMappingURL=chunk-VT4PRNUX.js.map
