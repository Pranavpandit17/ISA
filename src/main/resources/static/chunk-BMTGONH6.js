import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-CRF7CKPV.js";

// src/app/services/toast.service.ts
var ToastService = class _ToastService {
  constructor() {
    this.toastsSubject = new BehaviorSubject([]);
    this.toasts$ = this.toastsSubject.asObservable();
    this.counter = 0;
  }
  success(message) {
    this.add(message, "success");
  }
  error(message) {
    this.add(message, "error");
  }
  info(message) {
    this.add(message, "info");
  }
  warning(message) {
    this.add(message, "warning");
  }
  add(message, type) {
    const id = this.counter++;
    const current = this.toastsSubject.value;
    this.toastsSubject.next([...current, { message, type, id }]);
    setTimeout(() => {
      this.remove(id);
    }, 4e3);
  }
  remove(id) {
    const current = this.toastsSubject.value;
    this.toastsSubject.next(current.filter((t) => t.id !== id));
  }
  static {
    this.\u0275fac = function ToastService_Factory(t) {
      return new (t || _ToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
  }
};

export {
  ToastService
};
//# sourceMappingURL=chunk-BMTGONH6.js.map
