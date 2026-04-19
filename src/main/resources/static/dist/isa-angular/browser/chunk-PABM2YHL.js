import {
  ToastService
} from "./chunk-BMTGONH6.js";
import {
  MembershipService
} from "./chunk-ZRHEMPKX.js";
import {
  AuthService
} from "./chunk-HS4BPM7A.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QNLLDZ5O.js";
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CRF7CKPV.js";

// src/app/components/modals/payment-modal/payment-modal.component.ts
function PaymentModalComponent_div_0_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.quantity, " UNITS");
  }
}
function PaymentModalComponent_div_0_div_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
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
function PaymentModalComponent_div_0_div_23_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.event.location);
  }
}
function PaymentModalComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275template(1, PaymentModalComponent_div_0_div_23_span_1_Template, 3, 4, "span", 48);
    \u0275\u0275elementStart(2, "span", 49);
    \u0275\u0275text(3, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PaymentModalComponent_div_0_div_23_span_4_Template, 2, 1, "span", 48);
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
function PaymentModalComponent_div_0_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u20B9 ", ctx_r1.getEventPrice().toLocaleString("en-IN"), " / UNIT ");
  }
}
function PaymentModalComponent_div_0_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "label", 54);
    \u0275\u0275text(3, "Card Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentModalComponent_div_0_div_52_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cardDetails.number, $event) || (ctx_r1.cardDetails.number = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 56)(6, "div", 53)(7, "label", 54);
    \u0275\u0275text(8, "Expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentModalComponent_div_0_div_52_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cardDetails.expiry, $event) || (ctx_r1.cardDetails.expiry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 53)(11, "label", 54);
    \u0275\u0275text(12, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentModalComponent_div_0_div_52_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cardDetails.cvv, $event) || (ctx_r1.cardDetails.cvv = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 53)(15, "label", 54);
    \u0275\u0275text(16, "Card Holder Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentModalComponent_div_0_div_52_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.cardDetails.name, $event) || (ctx_r1.cardDetails.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cardDetails.number);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cardDetails.expiry);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cardDetails.cvv);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.cardDetails.name);
  }
}
function PaymentModalComponent_div_0_div_53_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentModalComponent_div_0_div_53_div_17_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.upiId, $event) || (ctx_r1.upiId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function PaymentModalComponent_div_0_div_53_div_17_Template_input_input_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.errorMessage = "");
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.upiId);
  }
}
function PaymentModalComponent_div_0_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "button", 62);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_div_53_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setUpiOption("GPAY"));
    });
    \u0275\u0275elementStart(3, "div", 63);
    \u0275\u0275text(4, "GPay");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 62);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_div_53_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setUpiOption("PHONEPE"));
    });
    \u0275\u0275elementStart(6, "div", 63);
    \u0275\u0275text(7, "PhonePe");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 62);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_div_53_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setUpiOption("PAYTM"));
    });
    \u0275\u0275elementStart(9, "div", 63);
    \u0275\u0275text(10, "Paytm");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 64)(12, "button", 65);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_div_53_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setUpiOption("OTHER"));
    });
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Enter UPI ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 66);
    \u0275\u0275text(16, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, PaymentModalComponent_div_0_div_53_div_17_Template, 2, 1, "div", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedUpiOption === "GPAY");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("selected", ctx_r1.selectedUpiOption === "PHONEPE");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("selected", ctx_r1.selectedUpiOption === "PAYTM");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("selected", ctx_r1.selectedUpiOption === "OTHER");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.selectedUpiOption === "OTHER");
  }
}
function PaymentModalComponent_div_0_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.errorMessage, " ");
  }
}
function PaymentModalComponent_div_0_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 71);
  }
}
function PaymentModalComponent_div_0_span_57_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.getPaymentAmount().toLocaleString("en-IN"), "");
  }
}
function PaymentModalComponent_div_0_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275template(2, PaymentModalComponent_div_0_span_57_span_2_Template, 2, 1, "span", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getPaymentAmount() === 0 ? "Confirm Selection" : "Pay Now", " ");
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
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "span", 5);
    \u0275\u0275text(5, "Secure Checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7, "Razorpay");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "span", 8);
    \u0275\u0275text(10, "Test Mode");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "h2", 11);
    \u0275\u0275text(14, "Investment Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "p", 14);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 15)(20, "span", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, PaymentModalComponent_div_0_span_22_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, PaymentModalComponent_div_0_div_23_Template, 5, 2, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 19)(25, "p", 20);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, PaymentModalComponent_div_0_p_27_Template, 2, 1, "p", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 22)(29, "span", 23);
    \u0275\u0275text(30, "Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 24);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 25)(34, "h3", 11);
    \u0275\u0275text(35, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 26)(37, "label", 27);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_Template_label_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPaymentMethod("CREDIT_CARD"));
    });
    \u0275\u0275element(38, "input", 28);
    \u0275\u0275elementStart(39, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 30);
    \u0275\u0275element(41, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "span", 32);
    \u0275\u0275text(43, "Card");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "label", 27);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_Template_label_click_44_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPaymentMethod("UPI"));
    });
    \u0275\u0275element(45, "input", 28);
    \u0275\u0275elementStart(46, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 30);
    \u0275\u0275element(48, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(49, "span", 32);
    \u0275\u0275text(50, "UPI");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 34);
    \u0275\u0275template(52, PaymentModalComponent_div_0_div_52_Template, 18, 4, "div", 35)(53, PaymentModalComponent_div_0_div_53_Template, 18, 9, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, PaymentModalComponent_div_0_div_54_Template, 2, 1, "div", 37);
    \u0275\u0275elementStart(55, "button", 38);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.processPayment());
    });
    \u0275\u0275template(56, PaymentModalComponent_div_0_span_56_Template, 1, 0, "span", 39)(57, PaymentModalComponent_div_0_span_57_Template, 3, 2, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 41)(59, "div", 42)(60, "span", 43);
    \u0275\u0275text(61, "Powered by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 44);
    \u0275\u0275text(63, "Razorpay");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 42)(65, "span", 43);
    \u0275\u0275text(66, "Encryption");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 45);
    \u0275\u0275text(68, "SSL 256");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "button", 46);
    \u0275\u0275listener("click", function PaymentModalComponent_div_0_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(70, " Discard Checkout Session ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
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
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.selectedPaymentMethod === "CREDIT_CARD");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPaymentMethod === "UPI");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.processingPayment || !ctx_r1.isFormValid());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.processingPayment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.processingPayment);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.processingPayment);
  }
}
var PaymentModalComponent = class _PaymentModalComponent {
  constructor(apiService, authService, toastService, membershipService) {
    this.apiService = apiService;
    this.authService = authService;
    this.toastService = toastService;
    this.membershipService = membershipService;
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
    this.cardDetails = {
      number: "",
      expiry: "",
      cvv: "",
      name: ""
    };
    this.selectedUpiOption = null;
    this.upiId = "";
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }
  onClose() {
    this.close.emit();
    this.errorMessage = "";
    this.processingPayment = false;
    this.resetForm();
  }
  resetForm() {
    this.cardDetails = { number: "", expiry: "", cvv: "", name: "" };
    this.selectedUpiOption = null;
    this.upiId = "";
  }
  setPaymentMethod(method) {
    this.selectedPaymentMethod = method;
    this.errorMessage = "";
  }
  setUpiOption(option) {
    this.selectedUpiOption = option;
    this.errorMessage = "";
    if (option !== "OTHER") {
      this.upiId = "";
    }
  }
  isFormValid() {
    if (this.selectedPaymentMethod === "CREDIT_CARD") {
      return !!(this.cardDetails.number && this.cardDetails.expiry && this.cardDetails.cvv && this.cardDetails.name);
    } else {
      if (!this.selectedUpiOption)
        return false;
      if (this.selectedUpiOption === "OTHER")
        return !!this.upiId;
      return true;
    }
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
    if (this.event.selectedTicketType?.price != null) {
      return Number(this.event.selectedTicketType.price) || 0;
    }
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === "FREE") {
      return 0;
    }
    const isPaidMember = (() => {
      if (!this.currentUser)
        return false;
      const type = String(this.currentUser.type || "").toUpperCase();
      return type === "PREMIUM" || type === "ADMIN";
    })();
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
    if (this.selectedPaymentMethod === "CREDIT_CARD") {
      if (!this.cardDetails.number || !this.cardDetails.expiry || !this.cardDetails.cvv || !this.cardDetails.name) {
        this.errorMessage = "Please fill all card details";
        return;
      }
    } else if (this.selectedPaymentMethod === "UPI") {
      if (!this.selectedUpiOption) {
        this.errorMessage = "Please select a UPI option";
        return;
      }
      if (this.selectedUpiOption === "OTHER" && !this.upiId) {
        this.errorMessage = "Please enter your UPI ID";
        return;
      }
    }
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
    if (this.event?.selectedTicketTypeId) {
      registrationData.ticketTypeId = this.event.selectedTicketTypeId;
    }
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
    if (!this.planData?.id) {
      this.errorMessage = "Membership plan information is missing.";
      return;
    }
    if (!this.currentUser) {
      this.processingPayment = true;
      setTimeout(() => {
        this.processingPayment = false;
        this.membershipService.setSelectedPlan(this.planData);
        this.toastService.success("Plan selected successfully");
        this.success.emit({ type: "MEMBERSHIP", plan: this.planData });
        this.onClose();
      }, 600);
      return;
    }
    this.processingPayment = true;
    this.errorMessage = "";
    const transactionId = "DUMMY-MEM-" + Date.now() + "-" + Math.random().toString(36).substring(2, 9).toUpperCase();
    this.apiService.createMembershipPayment(this.planData.id, this.selectedPaymentMethod, transactionId).subscribe({
      next: (paymentResponse) => {
        this.membershipService.setSelectedPlan(this.planData);
        this.authService.refreshCurrentUserProfile().subscribe({
          next: () => {
            this.processingPayment = false;
            this.toastService.success("Membership plan activated successfully");
            this.success.emit({ type: "MEMBERSHIP", payment: paymentResponse, plan: this.planData });
            this.onClose();
          },
          error: () => {
            this.processingPayment = false;
            this.toastService.success("Membership plan activated successfully");
            this.success.emit({ type: "MEMBERSHIP", payment: paymentResponse, plan: this.planData });
            this.onClose();
          }
        });
      },
      error: (error) => {
        this.processingPayment = false;
        this.errorMessage = error?.error?.error || error?.error?.message || "Membership payment failed. Please try again.";
      }
    });
  }
  static {
    this.\u0275fac = function PaymentModalComponent_Factory(t) {
      return new (t || _PaymentModalComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(MembershipService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentModalComponent, selectors: [["app-payment-modal"]], inputs: { show: "show", paymentType: "paymentType", event: "event", planData: "planData", quantity: "quantity" }, outputs: { close: "close", success: "success" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "payment-backdrop fixed inset-0 z-[200]", 3, "click", 4, "ngIf"], [1, "payment-backdrop", "fixed", "inset-0", "z-[200]", 3, "click"], [1, "checkout-card", 3, "click"], [1, "brand-banner"], [1, "flex", "flex-col"], [1, "text-[10px]", "uppercase", "font-black", "tracking-widest", "text-white/60"], [1, "text-xl", "font-black", "italic", "tracking-tighter"], [1, "px-3", "py-1", "bg-white/10", "backdrop-blur-md", "rounded-lg", "border", "border-white/10"], [1, "text-[10px]", "font-black", "uppercase", "tracking-widest"], [1, "checkout-body"], [1, "summary-card"], [1, "text-[10px]", "font-black", "uppercase", "tracking-widest", "text-slate-400", "mb-4"], [1, "flex", "items-start", "justify-between", "gap-6"], [1, "flex-1"], [1, "text-lg", "font-black", "text-slate-900", "leading-tight", "mb-2"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-2", "py-0.5", "bg-white", "border", "border-slate-100", "rounded-lg", "text-[9px]", "font-black", "uppercase", "text-slate-500"], ["class", "px-2 py-0.5 bg-white border border-slate-100 rounded-lg text-[9px] font-black uppercase text-slate-500", 4, "ngIf"], ["class", "mt-4 flex items-center gap-3 text-slate-400", 4, "ngIf"], [1, "text-right"], [1, "text-2xl", "font-black", "text-slate-900", "tracking-tighter"], ["class", "text-[10px] font-black uppercase text-slate-400 mt-2", 4, "ngIf"], [1, "total-row"], [1, "text-xs", "font-black", "uppercase", "tracking-tighter", "text-slate-500"], [1, "text-2xl", "font-black", "text-[#2b84ea]", "tracking-tighter"], [1, "mb-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-3"], [1, "method-option", 3, "click"], ["type", "radio", 1, "sr-only"], [1, "w-10", "h-10", "bg-white", "rounded-xl", "flex", "items-center", "justify-center", "shadow-sm", "border", "border-slate-100", "mr-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-slate-700"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"], [1, "text-xs", "font-black", "text-slate-900"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"], [1, "payment-form-area", "mb-6"], ["class", "space-y-3 animate-form", 4, "ngIf"], ["class", "space-y-4 animate-form", 4, "ngIf"], ["class", "mb-8 p-6 bg-rose-50 border border-rose-100 rounded-3xl text-rose-500 font-bold uppercase tracking-widest text-[10px] animate-bounce", 4, "ngIf"], [1, "pay-button", 3, "click", "disabled"], ["class", "animate-spin h-5 w-5 border-3 border-white/20 border-t-white rounded-full", 4, "ngIf"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "gap-6", "mt-8"], [1, "flex", "items-center", "gap-2", "grayscale", "border", "border-slate-100", "px-3", "py-1.5", "rounded-xl"], [1, "text-[8px]", "font-black", "uppercase", "text-slate-400"], [1, "text-[10px]", "font-black", "italic", "text-slate-600"], [1, "text-[10px]", "font-black", "uppercase", "text-slate-600", "tracking-widest"], [1, "cancel-link", 3, "click", "disabled"], [1, "mt-4", "flex", "items-center", "gap-3", "text-slate-400"], ["class", "text-xs font-bold", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "text-xs", "font-bold"], [1, "text-[10px]", "font-black", "uppercase", "text-slate-400", "mt-2"], [1, "space-y-3", "animate-form"], [1, "form-group"], [1, "text-[9px]", "font-black", "uppercase", "text-slate-400", "mb-1", "block"], ["type", "text", "placeholder", "4242 4242 4242 4242", 1, "w-full", "bg-slate-50", "border", "border-slate-100", "rounded-xl", "px-4", "py-3", "text-sm", "font-mono", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "text", "placeholder", "MM / YY", 1, "w-full", "bg-slate-50", "border", "border-slate-100", "rounded-xl", "px-4", "py-3", "text-sm", "font-mono", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "\u2022\u2022\u2022", 1, "w-full", "bg-slate-50", "border", "border-slate-100", "rounded-xl", "px-4", "py-3", "text-sm", "font-mono", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "FULL NAME", 1, "w-full", "bg-slate-50", "border", "border-slate-100", "rounded-xl", "px-4", "py-3", "text-sm", "font-bold", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], [1, "space-y-4", "animate-form"], [1, "grid", "grid-cols-3", "gap-2"], [1, "upi-option", 3, "click"], [1, "upi-logo-box"], [1, "pt-2"], [1, "w-full", "text-left", "px-4", "py-3", "border", "border-slate-100", "rounded-xl", "text-xs", "font-bold", "text-slate-600", "hover:bg-slate-50", "transition-all", "flex", "justify-between", "items-center", 3, "click"], [1, "text-indigo-600"], ["class", "mt-2 animate-form", 4, "ngIf"], [1, "mt-2", "animate-form"], ["type", "text", "placeholder", "example@bank", 1, "w-full", "bg-slate-50", "border", "border-slate-100", "rounded-xl", "px-4", "py-3", "text-sm", "font-medium", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "transition-all", 3, "ngModelChange", "input", "ngModel"], [1, "mb-8", "p-6", "bg-rose-50", "border", "border-rose-100", "rounded-3xl", "text-rose-500", "font-bold", "uppercase", "tracking-widest", "text-[10px]", "animate-bounce"], [1, "animate-spin", "h-5", "w-5", "border-3", "border-white/20", "border-t-white", "rounded-full"], [1, "flex", "items-center", "gap-2"], ["class", "opacity-50", 4, "ngIf"], [1, "opacity-50"]], template: function PaymentModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PaymentModalComponent_div_0_Template, 71, 18, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show);
      }
    }, dependencies: [CommonModule, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.payment-backdrop[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.7);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n  overflow-y: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.checkout-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  animation: _ngcontent-%COMP%_slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n  margin: 1rem auto;\n  width: 95%;\n  max-width: 440px;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateY(40px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.brand-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2b84ea 0%,\n      #1e40af 100%);\n  padding: 1.5rem 2rem;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.checkout-body[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem 2rem;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  border-radius: 20px;\n  padding: 1.25rem;\n  margin-bottom: 1.5rem;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  margin-top: 1rem;\n  border-top: 1px dashed #e2e8f0;\n}\n.method-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  border: 1px solid #f1f5f9;\n  border-radius: 16px;\n  margin-bottom: 0.5rem;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.method-option[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n}\n.method-option.selected[_ngcontent-%COMP%] {\n  border-color: #2b84ea;\n  background: #eff6ff;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);\n}\n.upi-option[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #f1f5f9;\n  border-radius: 12px;\n  background: #f8fafc;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.upi-option[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.upi-option.selected[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #2b84ea;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);\n}\n.upi-logo-box[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.025em;\n}\n.upi-option.selected[_ngcontent-%COMP%]   .upi-logo-box[_ngcontent-%COMP%] {\n  color: #2b84ea;\n}\n@keyframes _ngcontent-%COMP%_formAppear {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-form[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_formAppear 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #cbd5e1;\n  font-weight: 500;\n}\n.pay-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem;\n  background: #2b84ea;\n  color: #fff;\n  border-radius: 12px;\n  font-size: 1rem;\n  font-weight: 800;\n  box-shadow: 0 8px 20px -5px rgba(37, 99, 235, 0.3);\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n}\n.pay-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-2px);\n  box-shadow: 0 15px 30px -5px rgba(37, 99, 235, 0.5);\n}\n.pay-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cancel-link[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: center;\n  margin-top: 1.25rem;\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  transition: color 0.2s;\n}\n.cancel-link[_ngcontent-%COMP%]:hover {\n  color: #64748b;\n}\n/*# sourceMappingURL=payment-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentModalComponent, { className: "PaymentModalComponent", filePath: "src\\app\\components\\modals\\payment-modal\\payment-modal.component.ts", lineNumber: 16 });
})();

export {
  PaymentModalComponent
};
//# sourceMappingURL=chunk-PABM2YHL.js.map
