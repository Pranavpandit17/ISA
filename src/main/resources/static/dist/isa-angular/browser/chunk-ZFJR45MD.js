import {
  Observable,
  Subject,
  ɵɵdefineInjectable
} from "./chunk-IAKTGX76.js";

// src/app/services/confirm.service.ts
var ConfirmService = class _ConfirmService {
  constructor() {
    this.confirmState = new Subject();
    this.currentResolver = null;
    this.confirmState$ = this.confirmState.asObservable();
  }
  /**
   * Opens the confirm dialog and returns a Promise resolving to boolean.
   * We use Promise here instead of Observable to make it easier to replace `if (confirm(...))`
   * with `if (await this.confirmService.confirm(...))` if we prefer async/await, or
   * simply `.then(res => { if (res) ... })`. Using Observable is also fine.
   */
  confirm(config) {
    return new Observable((subscriber) => {
      this.currentResolver = (result) => {
        subscriber.next(result);
        subscriber.complete();
      };
      this.confirmState.next(config);
    });
  }
  respond(result) {
    if (this.currentResolver) {
      this.currentResolver(result);
      this.currentResolver = null;
    }
    this.confirmState.next(null);
  }
  static {
    this.\u0275fac = function ConfirmService_Factory(t) {
      return new (t || _ConfirmService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmService, factory: _ConfirmService.\u0275fac, providedIn: "root" });
  }
};

export {
  ConfirmService
};
//# sourceMappingURL=chunk-ZFJR45MD.js.map
