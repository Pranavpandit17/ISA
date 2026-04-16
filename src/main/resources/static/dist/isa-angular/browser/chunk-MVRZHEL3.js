import {
  Subject,
  ɵɵdefineInjectable
} from "./chunk-IAKTGX76.js";

// src/app/services/app-modal.service.ts
var AppModalService = class _AppModalService {
  constructor() {
    this.authModalSubject = new Subject();
    this.paymentModalSubject = new Subject();
    this.eventDetailModalSubject = new Subject();
    this.authModal$ = this.authModalSubject.asObservable();
    this.paymentModal$ = this.paymentModalSubject.asObservable();
    this.eventDetailModal$ = this.eventDetailModalSubject.asObservable();
  }
  openAuth(mode) {
    this.authModalSubject.next(mode);
  }
  openPayment(data) {
    this.paymentModalSubject.next(data);
  }
  openEventDetail(event) {
    this.eventDetailModalSubject.next(event);
  }
  static {
    this.\u0275fac = function AppModalService_Factory(t) {
      return new (t || _AppModalService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppModalService, factory: _AppModalService.\u0275fac, providedIn: "root" });
  }
};

export {
  AppModalService
};
//# sourceMappingURL=chunk-MVRZHEL3.js.map
