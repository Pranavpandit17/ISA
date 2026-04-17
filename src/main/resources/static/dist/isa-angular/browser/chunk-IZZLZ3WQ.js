import {
  AppModalService
} from "./chunk-MVRZHEL3.js";
import {
  ToastService
} from "./chunk-P4YHU2RF.js";
import {
  ActivatedRoute,
  AuthService,
  Router
} from "./chunk-ZQTCOOSY.js";
import "./chunk-TPWHRN67.js";
import {
  ApiService,
  CommonModule,
  CurrencyPipe,
  DatePipe,
  EventEmitter,
  NgIf,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IAKTGX76.js";

// src/app/pages/event-detail/event-detail.component.ts
function EventDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_div_4_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, " Standard Rate Applied ");
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "img", 9)(3, "div", 10);
    \u0275\u0275elementStart(4, "div", 11)(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 14)(10, "div", 15)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 16);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 17)(19, "div", 18)(20, "div")(21, "span", 19);
    \u0275\u0275text(22, "Registration Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 20);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, EventDetailComponent_div_4_p_26_Template, 2, 0, "p", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 22);
    \u0275\u0275listener("click", function EventDetailComponent_div_4_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRegister());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 23)(30, "div", 24)(31, "h3", 25);
    \u0275\u0275text(32, "Speaker & Keynote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 26)(34, "div", 27);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div")(37, "p", 28);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 29);
    \u0275\u0275text(40, "Featured Guest");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 24)(42, "h3", 25);
    \u0275\u0275text(43, "Venue Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 26)(45, "div", 30);
    \u0275\u0275text(46, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div")(48, "p", 28);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 29);
    \u0275\u0275text(51, "On-site Participation");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.event.image, \u0275\u0275sanitizeUrl)("alt", ctx_r1.event.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.event.category || "Event", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.event.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", \u0275\u0275pipeBind2(13, 13, ctx_r1.event.date, "medium"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r1.event.location, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.event.description);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.event.price > 0 ? \u0275\u0275pipeBind2(25, 16, ctx_r1.event.price, "INR") : "Complementary Access", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.currentUser == null ? null : ctx_r1.currentUser.type) === "REGULAR" && ctx_r1.event.price > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEventPaidForUser() ? "Authorize & Secure Seat" : "Confirm Attendance", " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.event.speaker || "S")[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.event.speaker || "Industry Expert");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.event.location);
  }
}
function EventDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "p", 33);
    \u0275\u0275text(2, "Event could not be found or has been removed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 34);
    \u0275\u0275listener("click", function EventDetailComponent_div_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate("EVENTS"));
    });
    \u0275\u0275text(4, "Back to Directory");
    \u0275\u0275elementEnd()();
  }
}
var EventDetailComponent = class _EventDetailComponent {
  constructor(authService, apiService, route, router, toastService, modalService) {
    this.authService = authService;
    this.apiService = apiService;
    this.route = route;
    this.router = router;
    this.toastService = toastService;
    this.modalService = modalService;
    this.event = null;
    this.navigate = new EventEmitter();
    this.register = new EventEmitter();
    this.openPayment = new EventEmitter();
    this.currentUser = null;
    this.isLoading = false;
    this.currentUser = this.authService.getCurrentUser();
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      if (id && !this.event) {
        this.loadEventDetails(id);
      }
    });
  }
  loadEventDetails(id) {
    this.isLoading = true;
    this.apiService.getEventById(Number(id)).subscribe({
      next: (data) => {
        let image = data.imageUrl || data.image;
        if (!image && data.poster) {
          image = "/api/events/poster/" + data.id;
        }
        if (!image) {
          image = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop";
        }
        this.event = __spreadProps(__spreadValues({}, data), {
          title: data.name || data.title,
          date: data.startDate || data.date,
          location: data.location || data.venue,
          image
        });
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error fetching event:", err);
        this.isLoading = false;
      }
    });
  }
  onNavigate(view) {
    if (view === "EVENTS") {
      this.router.navigate(["/events"]);
    } else {
      this.navigate.emit(view);
    }
  }
  onRegister() {
    if (!this.event)
      return;
    if (!this.currentUser) {
      this.toastService.info("Please login to register for events");
      this.modalService.openAuth("LOGIN");
      return;
    }
    if (this.isEventPaid()) {
      this.modalService.openPayment({ event: this.event, quantity: 1 });
      return;
    }
    this.isLoading = true;
    this.apiService.registerForEvent(this.event.id, { quantity: 1 }).subscribe({
      next: () => {
        this.isLoading = false;
        this.toastService.success("Successfully registered for the event!");
        this.event.isRegistered = true;
      },
      error: (err) => {
        this.isLoading = false;
        console.error("Registration failed:", err);
        this.toastService.error(err.error?.message || "Registration failed. Please try again.");
      }
    });
  }
  isEventPaid() {
    if (!this.event)
      return false;
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === "PAID" || pricingType === "DISCOUNTED")
      return true;
    const price = this.currentUser?.type === "PREMIUM" ? this.event.memberPrice || this.event.pricing?.memberPrice || this.event.price : this.event.nonMemberPrice || this.event.pricing?.nonMemberPrice || this.event.guestPrice;
    return Number(price) > 0;
  }
  isEventPaidForUser() {
    return this.isEventPaid();
  }
  static {
    this.\u0275fac = function EventDetailComponent_Factory(t) {
      return new (t || _EventDetailComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(AppModalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailComponent, selectors: [["app-event-detail"]], inputs: { event: "event" }, outputs: { navigate: "navigate", register: "register", openPayment: "openPayment" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 3, consts: [[1, "max-w-4xl", "mx-auto", "px-4", "py-8", "w-full"], [1, "mb-4", "text-blue-600", 3, "click"], ["class", "flex justify-center py-20", 4, "ngIf"], ["class", "bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in", 4, "ngIf"], ["class", "text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm", 4, "ngIf"], [1, "flex", "justify-center", "py-20"], [1, "w-12", "h-12", "border-4", "border-blue-100", "border-t-blue-600", "rounded-full", "animate-spin"], [1, "bg-white", "rounded-2xl", "shadow-xl", "overflow-hidden", "animate-fade-in"], [1, "w-full", "h-[400px]", "relative", "overflow-hidden", "bg-slate-100"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/60", "to-transparent"], [1, "absolute", "bottom-6", "left-8"], [1, "px-3", "py-1", "bg-blue-600", "text-white", "text-[10px]", "font-black", "uppercase", "tracking-widest", "rounded-lg", "mb-2", "inline-block"], [1, "text-4xl", "font-black", "text-white", "tracking-tight"], [1, "p-8"], [1, "flex", "gap-4", "mb-6", "text-sm", "text-slate-500"], [1, "text-slate-600", "mb-8", "leading-relaxed", "text-lg"], [1, "bg-indigo-50/50", "p-8", "rounded-3xl", "border", "border-indigo-100", "mb-8"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-center", "gap-6"], [1, "text-[10px]", "font-black", "text-indigo-400", "uppercase", "tracking-widest", "mb-1", "block"], [1, "text-4xl", "font-black", "text-slate-900", "tracking-tighter"], ["class", "text-xs text-amber-500 font-bold mt-2 font-mono uppercase", 4, "ngIf"], [1, "w-full", "md:w-auto", "px-10", "py-5", "bg-indigo-600", "text-white", "rounded-2xl", "font-black", "uppercase", "tracking-widest", "shadow-xl", "shadow-indigo-200", "hover:bg-indigo-700", "hover:-translate-y-1", "transition-all", "active:scale-95", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "space-y-4"], [1, "text-sm", "font-black", "text-slate-400", "uppercase", "tracking-widest"], [1, "flex", "items-center", "gap-4", "p-4", "bg-slate-50", "rounded-2xl", "border", "border-slate-100"], [1, "w-12", "h-12", "bg-indigo-100", "rounded-xl", "flex", "items-center", "justify-center", "text-xl", "font-bold", "text-indigo-600"], [1, "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-400"], [1, "w-12", "h-12", "bg-emerald-100", "rounded-xl", "flex", "items-center", "justify-center", "text-xl"], [1, "text-xs", "text-amber-500", "font-bold", "mt-2", "font-mono", "uppercase"], [1, "text-center", "py-20", "bg-white", "rounded-2xl", "border", "border-slate-100", "shadow-sm"], [1, "text-slate-500", "font-bold", "mb-4"], [1, "px-6", "py-2", "bg-slate-100", "text-slate-600", "rounded-xl", "font-bold", 3, "click"]], template: function EventDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function EventDetailComponent_Template_button_click_1_listener() {
          return ctx.onNavigate("EVENTS");
        });
        \u0275\u0275text(2, "\u2190 Back to Events");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, EventDetailComponent_div_3_Template, 2, 0, "div", 2)(4, EventDetailComponent_div_4_Template, 52, 19, "div", 3)(5, EventDetailComponent_div_5_Template, 5, 0, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.event);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.event);
      }
    }, dependencies: [CommonModule, NgIf, CurrencyPipe, DatePipe], styles: ["\n\n/*# sourceMappingURL=event-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailComponent, { className: "EventDetailComponent", filePath: "src\\app\\pages\\event-detail\\event-detail.component.ts", lineNumber: 17 });
})();
export {
  EventDetailComponent
};
//# sourceMappingURL=chunk-IZZLZ3WQ.js.map
