import {
  ToastService
} from "./chunk-P4YHU2RF.js";
import {
  AuthService
} from "./chunk-ZQTCOOSY.js";
import {
  FormsModule
} from "./chunk-EMPR7R4G.js";
import {
  ApiService,
  CommonModule,
  DatePipe,
  EventEmitter,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IAKTGX76.js";

// src/app/components/modals/payment-modal/payment-modal.component.ts
function PaymentModalComponent_div_0_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.quantity, " UNITS");
  }
}
function PaymentModalComponent_div_0_div_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r1.event.startDate, "MMM d, y"));
  }
}
function PaymentModalComponent_div_0_div_24_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.event.location);
  }
}
function PaymentModalComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, PaymentModalComponent_div_0_div_24_span_1_Template, 3, 4, "span", 57);
    \u0275\u0275elementStart(2, "span", 58);
    \u0275\u0275text(3, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PaymentModalComponent_div_0_div_24_span_4_Template, 2, 1, "span", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.event.startDate);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.event.location);
  }
}
function PaymentModalComponent_div_0_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20B9 ", ctx_r1.getEventPrice().toLocaleString("en-IN"), " / UNIT ");
  }
}
function PaymentModalComponent_div_0_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.errorMessage, " ");
  }
}
function PaymentModalComponent_div_0_span_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 62);
  }
}
function PaymentModalComponent_div_0_span_76_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20B9 ", ctx_r1.getPaymentAmount().toLocaleString("en-IN"), "");
  }
}
function PaymentModalComponent_div_0_span_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275template(2, PaymentModalComponent_div_0_span_76_span_2_Template, 2, 1, "span", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPaymentAmount() === 0 ? "COMPLETE ENTRY" : "AUTHORIZE INVOICE", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getPaymentAmount() > 0);
  }
}
function PaymentModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "span", 6);
    \u0275\u0275text(6, "Secure Checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 7);
    \u0275\u0275text(8, "Razorpay");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 8)(10, "span", 9);
    \u0275\u0275text(11, "Test Mode");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "h2", 12);
    \u0275\u0275text(15, "Investment Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "p", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16)(21, "span", 17);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, PaymentModalComponent_div_0_span_23_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, PaymentModalComponent_div_0_div_24_Template, 5, 2, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 20)(26, "p", 21);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, PaymentModalComponent_div_0_p_28_Template, 2, 1, "p", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 23)(30, "span", 24);
    \u0275\u0275text(31, "Merchant Authorize Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 25);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 26)(35, "h3", 12);
    \u0275\u0275text(36, "Gateway Selection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 27)(38, "label", 28);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_Template_label_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedPaymentMethod = "CREDIT_CARD");
    });
    \u0275\u0275element(39, "input", 29);
    \u0275\u0275elementStart(40, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 31);
    \u0275\u0275element(42, "path", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "span", 33);
    \u0275\u0275text(44, "Card Assets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "label", 28);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_Template_label_click_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectedPaymentMethod = "UPI");
    });
    \u0275\u0275element(46, "input", 29);
    \u0275\u0275elementStart(47, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(48, "svg", 31);
    \u0275\u0275element(49, "path", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "span", 33);
    \u0275\u0275text(51, "Unified UPI");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 35)(53, "div", 36)(54, "div", 37)(55, "div", 38);
    \u0275\u0275element(56, "div", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "span", 40);
    \u0275\u0275text(58, "Test Transaction Mode");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 41)(60, "p", 42);
    \u0275\u0275text(61, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4242");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 43)(63, "div", 5)(64, "span", 44);
    \u0275\u0275text(65, "VALID THRU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 45);
    \u0275\u0275text(67, "12/28");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 5)(69, "span", 44);
    \u0275\u0275text(70, "HOLDER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 45);
    \u0275\u0275text(72, "ISA TEST USER");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(73, PaymentModalComponent_div_0_div_73_Template, 2, 1, "div", 46);
    \u0275\u0275elementStart(74, "button", 47);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.processPayment());
    });
    \u0275\u0275template(75, PaymentModalComponent_div_0_span_75_Template, 1, 0, "span", 48)(76, PaymentModalComponent_div_0_span_76_Template, 3, 2, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 50)(78, "div", 51)(79, "span", 52);
    \u0275\u0275text(80, "Powered by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "span", 53);
    \u0275\u0275text(82, "Razorpay");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 51)(84, "span", 52);
    \u0275\u0275text(85, "Encryption");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span", 54);
    \u0275\u0275text(87, "SSL 256");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(88, "button", 55);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(89, " Discard Checkout Session ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275textInterpolate(ctx_r1.getPaymentTitle());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getPaymentSubtitle());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentType === "EVENT" && ctx_r1.quantity > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentType === "EVENT" && ctx_r1.event);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9 ", ctx_r1.getPaymentAmount().toLocaleString("en-IN"), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentType === "EVENT" && ctx_r1.quantity > 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9 ", ctx_r1.getPaymentAmount().toLocaleString("en-IN"), "");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("selected", ctx_r1.selectedPaymentMethod === "CREDIT_CARD");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("selected", ctx_r1.selectedPaymentMethod === "UPI");
    \u0275\u0275advance(28);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.processingPayment || ctx_r1.getPaymentAmount() === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.processingPayment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.processingPayment);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.processingPayment);
  }
}
var PaymentModalComponent = class _PaymentModalComponent {
  constructor(apiService, authService, toastService) {
    this.apiService = apiService;
    this.authService = authService;
    this.toastService = toastService;
    this.show = false;
    this.paymentType = "MEMBERSHIP";
    this.event = null;
    this.planData = null;
    this.quantity = 1;
    this.close = new EventEmitter();
    this.success = new EventEmitter();
    this.processingPayment = false;
    this.errorMessage = "";
    this.currentUser = null;
    this.selectedPaymentMethod = "CREDIT_CARD";
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }
  onClose() {
    this.close.emit();
    this.errorMessage = "";
    this.processingPayment = false;
  }
  getPaymentTitle() {
    if (this.paymentType === "EVENT" && this.event) {
      return this.event.name || this.event.title || "Event Registration";
    }
    if (this.planData) {
      return this.planData.name || "Premium Membership";
    }
    return "Premium Membership";
  }
  getPaymentSubtitle() {
    if (this.paymentType === "EVENT" && this.event) {
      return "Event Registration";
    }
    if (this.planData) {
      return this.planData.durationMonths === 12 ? "ISA Annual Plan" : `ISA ${this.planData.durationMonths} Months Plan`;
    }
    return "ISA Annual Plan";
  }
  getPaymentAmount() {
    if (this.paymentType === "EVENT" && this.event) {
      return this.getEventPrice() * this.quantity;
    }
    if (this.planData) {
      return this.planData.price || 0;
    }
    return 12e3;
  }
  getEventPrice() {
    if (!this.event)
      return 0;
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === "FREE") {
      return 0;
    }
    const isPaidMember = !!this.currentUser && this.currentUser.type === "PREMIUM";
    if (pricingType === "PAID" || pricingType === "DISCOUNTED") {
      const memberPrice = this.event.memberPrice || this.event.pricing?.memberPrice || 0;
      const freeMemberPrice = this.event.nonMemberPrice || this.event.pricing?.nonMemberPrice || 0;
      if (isPaidMember && memberPrice > 0) {
        return memberPrice;
      }
      if (!isPaidMember && freeMemberPrice > 0) {
        return freeMemberPrice;
      }
      if (memberPrice > 0)
        return memberPrice;
      if (freeMemberPrice > 0)
        return freeMemberPrice;
    }
    return this.event.price || this.event.pricing?.memberPrice || 0;
  }
  processPayment() {
    if (this.paymentType === "EVENT" && this.event) {
      this.processEventPayment();
    } else {
      this.processMembershipPayment();
    }
  }
  processEventPayment() {
    if (!this.event || !this.event.id) {
      this.errorMessage = "Event information is missing";
      return;
    }
    this.processingPayment = true;
    this.errorMessage = "";
    const amount = this.getEventPrice();
    const totalAmount = amount * this.quantity;
    const transactionId = "DUMMY-EVENT-" + Date.now() + "-" + Math.random().toString(36).substring(2, 9).toUpperCase();
    const description = `${this.event.name || this.event.title} - ${this.quantity} ticket${this.quantity === 1 ? "" : "s"}`;
    this.apiService.createEventPayment(this.event.id, totalAmount, "INR", this.selectedPaymentMethod, transactionId, description).subscribe({
      next: (paymentResponse) => {
        this.registerForEvent(paymentResponse.paymentId);
      },
      error: (error) => {
        console.error("Error creating event payment:", error);
        this.processingPayment = false;
        this.errorMessage = error.error?.error || "Payment processing failed. Please try again.";
      }
    });
  }
  registerForEvent(paymentId) {
    const registrationData = { quantity: this.quantity };
    if (paymentId) {
      registrationData.paymentId = paymentId;
    }
    this.apiService.registerForEvent(this.event.id, registrationData).subscribe({
      next: (response) => {
        this.processingPayment = false;
        this.success.emit({ type: "EVENT", event: this.event, registration: response });
        this.onClose();
      },
      error: (error) => {
        console.error("Error registering for event:", error);
        this.processingPayment = false;
        this.errorMessage = error.error?.message || "Registration failed. Payment was successful but registration failed. Please contact support.";
      }
    });
  }
  processMembershipPayment() {
    this.processingPayment = true;
    setTimeout(() => {
      this.processingPayment = false;
      this.toastService.success("Membership payment verified successfully");
      this.success.emit({ type: "MEMBERSHIP" });
      this.onClose();
    }, 1e3);
  }
  static {
    this.\u0275fac = function PaymentModalComponent_Factory(t) {
      return new (t || _PaymentModalComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentModalComponent, selectors: [["app-payment-modal"]], inputs: { show: "show", paymentType: "paymentType", event: "event", planData: "planData", quantity: "quantity" }, outputs: { close: "close", success: "success" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "payment-backdrop fixed inset-0 z-[200]", 3, "click", 4, "ngIf"], [1, "payment-backdrop", "fixed", "inset-0", "z-[200]", 3, "click"], [1, "checkout-card", 3, "click"], [1, "brand-banner"], [1, "flex", "items-center", "gap-4"], [1, "flex", "flex-col"], [1, "text-xs", "uppercase", "font-black", "tracking-widest", "text-white/60"], [1, "text-2xl", "font-black", "italic", "tracking-tighter"], [1, "px-4", "py-2", "bg-white/20", "backdrop-blur-md", "rounded-2xl", "border", "border-white/20"], [1, "text-xs", "font-black", "uppercase", "tracking-widest"], [1, "checkout-body"], [1, "summary-card"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "text-[#94a3b8]", "mb-6"], [1, "flex", "items-start", "justify-between", "gap-6"], [1, "flex-1"], [1, "text-xl", "font-black", "text-slate-900", "leading-tight", "mb-2"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-3", "py-1", "bg-white", "border", "border-slate-100", "rounded-xl", "text-[10px]", "font-black", "uppercase", "text-slate-500"], ["class", "px-3 py-1 bg-white border border-slate-100 rounded-xl text-[10px] font-black uppercase text-slate-500", 4, "ngIf"], ["class", "mt-4 flex items-center gap-3 text-slate-400", 4, "ngIf"], [1, "text-right"], [1, "text-2xl", "font-black", "text-slate-900", "tracking-tighter"], ["class", "text-[10px] font-black uppercase text-slate-400 mt-2", 4, "ngIf"], [1, "total-row"], [1, "text-sm", "font-black", "uppercase", "tracking-tighter", "text-slate-600"], [1, "text-3xl", "font-black", "text-[#2b84ea]", "tracking-tighter"], [1, "mb-10"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-3"], [1, "method-option", 3, "click"], ["type", "radio", 1, "sr-only"], [1, "w-12", "h-12", "bg-white", "rounded-2xl", "flex", "items-center", "justify-center", "shadow-sm", "border", "border-slate-100", "mr-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-slate-900"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"], [1, "text-sm", "font-black", "text-slate-900"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "test-card-box"], [1, "flex", "justify-between", "items-start", "mb-10"], [1, "w-14", "h-10", "bg-gradient-to-br", "from-yellow-300", "to-yellow-500", "rounded-lg", "flex", "items-center", "justify-center"], [1, "w-8", "h-6", "border-2", "border-white/30", "rounded", "flex", "items-center", "justify-center"], [1, "w-4", "h-4", "bg-white/20", "rounded-full"], [1, "text-[10px]", "font-black", "uppercase", "text-white/40", "tracking-widest"], [1, "space-y-1"], [1, "text-2xl", "font-mono", "tracking-[0.25em]", "text-white"], [1, "flex", "gap-10", "pt-4"], [1, "text-[8px]", "uppercase", "font-bold", "text-white/30", "mb-1"], [1, "text-xs", "font-mono", "font-bold"], ["class", "mb-8 p-6 bg-rose-50 border border-rose-100 rounded-3xl text-rose-500 font-bold uppercase tracking-widest text-[10px] animate-bounce", 4, "ngIf"], [1, "pay-button", 3, "click", "disabled"], ["class", "animate-spin h-6 w-6 border-4 border-white/20 border-t-white rounded-full", 4, "ngIf"], ["class", "flex items-center gap-3", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "gap-6", "mt-8"], [1, "flex", "items-center", "gap-2", "grayscale", "border", "border-slate-100", "px-3", "py-1.5", "rounded-xl"], [1, "text-[8px]", "font-black", "uppercase", "text-slate-400"], [1, "text-[10px]", "font-black", "italic", "text-slate-600"], [1, "text-[10px]", "font-black", "uppercase", "text-slate-600", "tracking-widest"], [1, "cancel-link", 3, "click", "disabled"], [1, "mt-4", "flex", "items-center", "gap-3", "text-slate-400"], ["class", "text-xs font-bold", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "text-xs", "font-bold"], [1, "text-[10px]", "font-black", "uppercase", "text-slate-400", "mt-2"], [1, "mb-8", "p-6", "bg-rose-50", "border", "border-rose-100", "rounded-3xl", "text-rose-500", "font-bold", "uppercase", "tracking-widest", "text-[10px]", "animate-bounce"], [1, "animate-spin", "h-6", "w-6", "border-4", "border-white/20", "border-t-white", "rounded-full"], [1, "flex", "items-center", "gap-3"], ["class", "opacity-50 tracking-tighter", 4, "ngIf"], [1, "opacity-50", "tracking-tighter"]], template: function PaymentModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PaymentModalComponent_div_0_Template, 90, 16, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show);
      }
    }, dependencies: [CommonModule, NgIf, DatePipe, FormsModule], styles: ['\n\n.payment-backdrop[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.7);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n  overflow-y: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.checkout-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 48px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  animation: _ngcontent-%COMP%_slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n  margin: 2rem auto;\n  width: 95%;\n  max-width: 650px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(40px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.brand-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b84ea 0%,\n      #1e40af 100%);\n  padding: 2.5rem;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.checkout-body[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 2px solid #f1f5f9;\n  border-radius: 32px;\n  padding: 2rem;\n  margin-bottom: 2.5rem;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1.5rem;\n  margin-top: 1.5rem;\n  border-top: 2px dashed #e2e8f0;\n}\n.method-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1.25rem 1.5rem;\n  border: 2px solid #f1f5f9;\n  border-radius: 20px;\n  margin-bottom: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.method-option[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n.method-option.selected[_ngcontent-%COMP%] {\n  border-color: #2b84ea;\n  background: #eff6ff;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);\n}\n.test-card-box[_ngcontent-%COMP%] {\n  background: #1e293b;\n  border-radius: 24px;\n  padding: 1.5rem;\n  color: white;\n  margin-bottom: 2.5rem;\n  position: relative;\n  overflow: hidden;\n}\n.test-card-box[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 200%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent,\n      rgba(255, 255, 255, 0.05),\n      transparent);\n  transform: rotate(45deg);\n}\n.pay-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.25rem;\n  background: #2b84ea;\n  color: #fff;\n  border-radius: 24px;\n  font-size: 1.125rem;\n  font-weight: 800;\n  box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4);\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n}\n.pay-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-2px);\n  box-shadow: 0 15px 30px -5px rgba(37, 99, 235, 0.5);\n}\n.pay-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cancel-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  transition: color 0.2s;\n}\n.cancel-link[_ngcontent-%COMP%]:hover {\n  color: #64748b;\n}\n/*# sourceMappingURL=payment-modal.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentModalComponent, { className: "PaymentModalComponent", filePath: "src\\app\\components\\modals\\payment-modal\\payment-modal.component.ts", lineNumber: 15 });
})();

export {
  PaymentModalComponent
};
//# sourceMappingURL=chunk-2HN4FSBJ.js.map
