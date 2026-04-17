import {
  ResourceDetailModalComponent,
  ResourcePostModalComponent
} from "./chunk-M22G7QOP.js";
import {
  PaymentModalComponent
} from "./chunk-2HN4FSBJ.js";
import {
  JobListingsComponent
} from "./chunk-32FFO5A4.js";
import "./chunk-YSJIGD2H.js";
import {
  EventDetailModalComponent
} from "./chunk-YJ756JFA.js";
import {
  MembershipService
} from "./chunk-4ZF6DWFC.js";
import {
  ConfirmService
} from "./chunk-ZFJR45MD.js";
import {
  ToastrService
} from "./chunk-NKTV2H2O.js";
import "./chunk-P4YHU2RF.js";
import {
  DataService
} from "./chunk-N5RJEOBE.js";
import {
  ActivatedRoute,
  AuthService
} from "./chunk-ZQTCOOSY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-EMPR7R4G.js";
import "./chunk-TPWHRN67.js";
import {
  ApiService,
  CommonModule,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
  UpperCasePipe,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IAKTGX76.js";

// src/app/pages/membership-plans/membership-plans.component.ts
var _c0 = (a0, a1) => ({ "ring-2 ring-indigo-500 border-transparent": a0, "bg-slate-50/50": a1 });
var _c1 = () => [];
var _c2 = (a0, a1) => ({ "bg-slate-100 text-slate-400 cursor-not-allowed": a0, "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg": a1 });
function MembershipPlansComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span");
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function MembershipPlansComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p", 17);
    \u0275\u0275text(2, "No plans available at the moment.");
    \u0275\u0275elementEnd()();
  }
}
function MembershipPlansComponent_div_14_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " Active Now ");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_14_div_1_li_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 42)(1, "span", 43);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(f_r3);
  }
}
function MembershipPlansComponent_div_14_div_1_li_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 45);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_14_div_1_li_24_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const plan_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showFeatures(plan_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" + ", (plan_r5.features.length || 0) - 4, " more features ");
  }
}
function MembershipPlansComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, MembershipPlansComponent_div_14_div_1_div_1_Template, 2, 0, "div", 21);
    \u0275\u0275elementStart(2, "div", 22)(3, "div", 23)(4, "div", 24)(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 28);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 29)(14, "span", 30);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 31);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 32)(20, "div", 33)(21, "ul", 34);
    \u0275\u0275template(22, MembershipPlansComponent_div_14_div_1_li_22_Template, 5, 1, "li", 35);
    \u0275\u0275pipe(23, "slice");
    \u0275\u0275template(24, MembershipPlansComponent_div_14_div_1_li_24_Template, 2, 1, "li", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 37)(26, "div", 38)(27, "button", 39);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_14_div_1_Template_button_click_27_listener() {
      const plan_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showFeatures(plan_r5));
    });
    \u0275\u0275text(28, " See Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 40);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_14_div_1_Template_button_click_29_listener() {
      const plan_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startSelectPlan(plan_r5));
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const plan_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(22, _c0, ctx_r0.isCurrentPlan(plan_r5), !ctx_r0.isCurrentPlan(plan_r5)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCurrentPlan(plan_r5));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(plan_r5.price === 0 ? "\u{1F331}" : "\u{1F48E}");
    \u0275\u0275advance();
    \u0275\u0275classMap(plan_r5.price === 0 ? "text-emerald-600 bg-emerald-50" : "text-amber-600 bg-amber-50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r5.price === 0 ? "Free tier" : "Premium", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", plan_r5.type, " MEMBERSHIP");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(16, 15, plan_r5.price, "1.0-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/ ", plan_r5.durationMonths > 1 ? plan_r5.durationMonths + "m" : "mo", "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(23, 18, plan_r5.features || \u0275\u0275pureFunction0(25, _c1), 0, 4));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (plan_r5.features.length || 0) > 4);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.isCurrentPlan(plan_r5))("ngClass", \u0275\u0275pureFunction2(26, _c2, ctx_r0.isCurrentPlan(plan_r5), !ctx_r0.isCurrentPlan(plan_r5)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isCurrentPlan(plan_r5) ? "Current Selection" : "Choose Plan", " ");
  }
}
function MembershipPlansComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, MembershipPlansComponent_div_14_div_1_Template, 31, 29, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.plans);
  }
}
function MembershipPlansComponent_div_15_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275element(1, "div", 64);
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_15_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68)(2, "div", 69);
    \u0275\u0275text(3, " \u2713 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 70)(5, "div", 71)(6, "span", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 73);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 74);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const feature_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(feature_r7.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getFeatureCategoryColor(feature_r7.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r7.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r7.description || "Access to " + feature_r7.name + " tools and services.");
  }
}
function MembershipPlansComponent_div_15_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275template(1, MembershipPlansComponent_div_15_div_16_div_1_Template, 12, 4, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.planFeatures);
  }
}
function MembershipPlansComponent_div_15_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "p", 76);
    \u0275\u0275text(2, "No specified features for this plan.");
    \u0275\u0275elementEnd()();
  }
}
function MembershipPlansComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFeaturesModal());
    });
    \u0275\u0275elementStart(1, "div", 47);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 48)(3, "div", 49)(4, "div", 50)(5, "h3", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 52);
    \u0275\u0275text(8, "Everything included in this plan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 53);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFeaturesModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 54);
    \u0275\u0275element(11, "path", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "span", 56);
    \u0275\u0275text(13, "\u{1F48E}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 57);
    \u0275\u0275template(15, MembershipPlansComponent_div_15_div_15_Template, 2, 0, "div", 58)(16, MembershipPlansComponent_div_15_div_16_Template, 2, 1, "div", 59)(17, MembershipPlansComponent_div_15_div_17_Template, 3, 0, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 61)(19, "button", 62);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_15_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFeaturesModal());
    });
    \u0275\u0275text(20, " Got it! ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.showingFeaturesForPlan.name);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.isLoadingFeatures);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingFeatures && ctx_r0.planFeatures.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingFeatures && ctx_r0.planFeatures.length === 0);
  }
}
function MembershipPlansComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78)(2, "div", 79)(3, "div", 80);
    \u0275\u0275text(4, " \u{1F680} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 81);
    \u0275\u0275text(6, "Confirm Your Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 82);
    \u0275\u0275text(8, "Ready to upgrade your experience?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 83)(10, "div", 84)(11, "span", 85);
    \u0275\u0275text(12, "Plan Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 86);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 87)(16, "span");
    \u0275\u0275text(17, "DURATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 88)(21, "span", 85);
    \u0275\u0275text(22, "Total to Pay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 89);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 38)(27, "button", 90);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_16_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmSelection());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 91);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_16_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelSelection());
    });
    \u0275\u0275text(30, " Go Back ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r0.confirmingPlan.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.confirmingPlan.durationMonths, " MONTHS");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(25, 5, ctx_r0.confirmingPlan.price, "1.0-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isProcessing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isProcessing ? "Working on it..." : "Confirm Subscription", " ");
  }
}
function MembershipPlansComponent_div_17_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r0.paymentsError, " ");
  }
}
function MembershipPlansComponent_div_17_div_13_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 107)(2, "div", 110);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 111);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 112);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 86);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 113);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 114);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 108)(21, "button", 115);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_div_13_tr_17_Template_button_click_21_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadInvoice(p_r11.id, p_r11.invoiceNumber));
    });
    \u0275\u0275text(22, " Download ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 8, p_r11.paidDate || p_r11.createdAt, "MMM d, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, p_r11.paidDate || p_r11.createdAt, "h:mm a"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r11.planName || "Legacy Plan");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(14, 14, p_r11.amount, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap((p_r11.status || "").toUpperCase() === "PAID" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r11.status || "PENDING", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.paymentMethod || "Razorpay");
  }
}
function MembershipPlansComponent_div_17_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "table", 106)(2, "thead")(3, "tr")(4, "th", 107);
    \u0275\u0275text(5, "DATE & TIME");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "PLAN SELECTED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "AMOUNT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "STATUS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "METHOD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 108);
    \u0275\u0275text(15, "INVOICE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, MembershipPlansComponent_div_17_div_13_tr_17_Template, 23, 17, "tr", 109);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.payments);
  }
}
function MembershipPlansComponent_div_17_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275element(1, "div", 64);
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_17_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "span", 118);
    \u0275\u0275text(2, "\u{1F9FE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 119);
    \u0275\u0275text(4, "No payment records found.");
    \u0275\u0275elementEnd()();
  }
}
function MembershipPlansComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePaymentHistory());
    });
    \u0275\u0275elementStart(1, "div", 93);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 94)(3, "div")(4, "h3", 81);
    \u0275\u0275text(5, "Payment History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 95);
    \u0275\u0275text(7, "Tracking all your plan subscriptions and transactions.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 96);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePaymentHistory());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 54);
    \u0275\u0275element(10, "path", 55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 97);
    \u0275\u0275template(12, MembershipPlansComponent_div_17_div_12_Template, 2, 1, "div", 98)(13, MembershipPlansComponent_div_17_div_13_Template, 18, 1, "div", 99)(14, MembershipPlansComponent_div_17_div_14_Template, 2, 0, "div", 100)(15, MembershipPlansComponent_div_17_div_15_Template, 5, 0, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 102)(17, "button", 103);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadPaymentHistory());
    });
    \u0275\u0275text(18, " REFRESH ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 104);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePaymentHistory());
    });
    \u0275\u0275text(20, " CLOSE ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r0.paymentsError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingPayments && !ctx_r0.paymentsError && ctx_r0.payments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoadingPayments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingPayments && !ctx_r0.paymentsError && ctx_r0.payments.length === 0);
  }
}
var MembershipPlansComponent = class _MembershipPlansComponent {
  constructor(apiService, membershipService, authService, toastr) {
    this.apiService = apiService;
    this.membershipService = membershipService;
    this.authService = authService;
    this.toastr = toastr;
    this.plans = [];
    this.isLoading = false;
    this.errorMessage = "";
    this.selectedPlan = null;
    this.confirmingPlan = null;
    this.isProcessing = false;
    this.currentUser = null;
    this.showingFeaturesForPlan = null;
    this.planFeatures = [];
    this.isLoadingFeatures = false;
    this.showPaymentHistory = false;
    this.payments = [];
    this.isLoadingPayments = false;
    this.paymentsError = "";
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.selectedPlan = this.membershipService.getSelectedPlan();
    this.loadPlans();
    this.membershipService.getSelectedPlan$().subscribe((plan) => {
      this.selectedPlan = plan;
    });
  }
  loadPlans() {
    this.isLoading = true;
    this.errorMessage = "";
    this.apiService.getMembershipPlans().subscribe({
      next: (response) => {
        this.plans = Array.isArray(response) ? response : [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading membership plans for member:", error);
        this.errorMessage = "Error loading membership plans. Please try again later.";
        this.isLoading = false;
      }
    });
  }
  isCurrentPlan(plan) {
    return !!this.selectedPlan && !!plan.id && this.selectedPlan.id === plan.id;
  }
  startSelectPlan(plan) {
    this.confirmingPlan = plan;
  }
  cancelSelection() {
    this.confirmingPlan = null;
    this.isProcessing = false;
  }
  showFeatures(plan) {
    if (!plan.id)
      return;
    this.showingFeaturesForPlan = plan;
    this.isLoadingFeatures = true;
    this.planFeatures = [];
    this.apiService.getPlanFeaturesByPlan(plan.id).subscribe({
      next: (response) => {
        this.planFeatures = Array.isArray(response) ? response : [];
        this.isLoadingFeatures = false;
      },
      error: (error) => {
        console.error("Error loading plan features:", error);
        this.planFeatures = [];
        this.isLoadingFeatures = false;
      }
    });
  }
  closeFeaturesModal() {
    this.showingFeaturesForPlan = null;
    this.planFeatures = [];
  }
  getFeatureCategoryColor(category) {
    switch (category) {
      case "DIRECTORY":
        return "bg-blue-100 text-blue-800";
      case "JOBS_PROJECTS":
        return "bg-green-100 text-green-800";
      case "EVENTS":
        return "bg-purple-100 text-purple-800";
      case "RESOURCES":
        return "bg-orange-100 text-orange-800";
      case "NETWORKING":
        return "bg-pink-100 text-pink-800";
      case "PREMIUM":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  }
  openPaymentHistory() {
    this.showPaymentHistory = true;
    this.loadPaymentHistory();
  }
  closePaymentHistory() {
    this.showPaymentHistory = false;
    this.isLoadingPayments = false;
    this.paymentsError = "";
  }
  loadPaymentHistory() {
    this.isLoadingPayments = true;
    this.paymentsError = "";
    this.payments = [];
    this.apiService.getMyMembershipPaymentHistory().subscribe({
      next: (response) => {
        const rows = Array.isArray(response) ? response : [];
        this.payments = rows.sort((a, b) => {
          const ad = new Date(a?.paidDate || a?.createdAt || 0).getTime();
          const bd = new Date(b?.paidDate || b?.createdAt || 0).getTime();
          return bd - ad;
        });
        this.isLoadingPayments = false;
      },
      error: (error) => {
        console.error("Error loading payment history:", error);
        this.paymentsError = error?.error?.error || "Failed to load payment history. Please try again.";
        this.isLoadingPayments = false;
      }
    });
  }
  downloadInvoice(paymentId, invoiceNumber) {
    if (!paymentId)
      return;
    const filename = (invoiceNumber && invoiceNumber.trim().length > 0 ? invoiceNumber : `invoice-${paymentId}`) + ".pdf";
    this.apiService.downloadMembershipInvoice(paymentId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error("Invoice download failed:", error);
        this.toastr.error("Failed to download invoice. Please try again.", "Error");
      }
    });
  }
  confirmSelection() {
    if (!this.confirmingPlan || !this.confirmingPlan.id)
      return;
    this.isProcessing = true;
    const plan = this.confirmingPlan;
    const planId = plan.id;
    const transactionId = "DUMMY-" + Date.now() + "-" + Math.random().toString(36).substring(2, 9).toUpperCase();
    this.apiService.createMembershipPayment(planId, "CREDIT_CARD", transactionId).subscribe({
      next: (paymentResponse) => {
        this.membershipService.setSelectedPlan(plan);
        this.isProcessing = false;
        this.confirmingPlan = null;
        this.toastr.success("Dummy payment successful. Membership plan updated and payment recorded.", "Success");
      },
      error: (error) => {
        console.error("Error creating membership payment:", error);
        this.isProcessing = false;
        this.toastr.warning("Payment recorded but there was an error. Please check your payment history.", "Warning");
        this.membershipService.setSelectedPlan(plan);
        this.confirmingPlan = null;
      }
    });
  }
  static {
    this.\u0275fac = function MembershipPlansComponent_Factory(t) {
      return new (t || _MembershipPlansComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(MembershipService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MembershipPlansComponent, selectors: [["app-membership-plans"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 7, consts: [[1, "space-y-8", "animate-fade-in"], [1, "flex", "items-center", "justify-between", "gap-6"], [1, "text-3xl", "font-extrabold", "text-slate-900", "tracking-tight"], [1, "text-slate-500", "font-medium", "mt-1"], ["type", "button", 1, "inline-flex", "items-center", "px-5", "py-2.5", "bg-white", "border", "border-slate-200", "rounded-2xl", "text-xs", "font-black", "text-slate-700", "uppercase", "tracking-widest", "hover:border-indigo-500", "hover:text-indigo-600", "transition-all", "shadow-sm", 3, "click"], [1, "mr-2"], ["class", "flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100", 4, "ngIf"], ["class", "p-6 bg-red-50 border border-red-100 rounded-3xl text-red-700 text-sm font-bold flex items-center gap-3", 4, "ngIf"], ["class", "p-20 text-center bg-white rounded-3xl border border-slate-100", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", 4, "ngIf"], ["class", "fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in", 4, "ngIf"], ["class", "fixed inset-0 z-[115] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in", 3, "click", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "bg-white", "rounded-3xl", "border", "border-slate-100"], [1, "w-12", "h-12", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin", "mb-4"], [1, "p-6", "bg-red-50", "border", "border-red-100", "rounded-3xl", "text-red-700", "text-sm", "font-bold", "flex", "items-center", "gap-3"], [1, "p-20", "text-center", "bg-white", "rounded-3xl", "border", "border-slate-100"], [1, "text-slate-500", "font-bold", "italic"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8"], ["class", "premium-card relative flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-all", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "premium-card", "relative", "flex", "flex-col", "justify-between", "overflow-hidden", "group", "hover:scale-[1.02]", "transition-all", 3, "ngClass"], ["class", "absolute top-0 right-0 py-1 px-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-bl-xl shadow-lg", 4, "ngIf"], [1, "p-8", "pb-4"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "p-3", "bg-white", "rounded-2xl", "border", "border-slate-100", "shadow-sm", "group-hover:scale-110", "transition-transform"], [1, "text-2xl"], [1, "px-3", "py-1", "rounded-full", "text-[10px]", "font-black", "uppercase", "tracking-widest"], [1, "text-xl", "font-black", "text-slate-900", "group-hover:text-indigo-600", "transition-colors"], [1, "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-widest", "mt-1"], [1, "mt-8", "flex", "items-baseline", "flex-wrap", "gap-x-1"], [1, "text-4xl", "font-extrabold", "text-slate-900", "tracking-tighter"], [1, "text-xs", "font-bold", "text-slate-400", "whitespace-nowrap"], [1, "px-8", "pb-8"], [1, "pt-6", "border-t", "border-slate-100"], [1, "space-y-3"], ["class", "flex items-center gap-3 text-xs font-medium text-slate-600", 4, "ngFor", "ngForOf"], ["class", "text-[10px] font-black text-indigo-500 uppercase tracking-widest cursor-pointer hover:underline mt-2", 3, "click", 4, "ngIf"], [1, "p-8", "pt-0", "mt-auto"], [1, "flex", "flex-col", "gap-3"], ["type", "button", 1, "w-full", "py-3", "rounded-2xl", "text-[11px]", "font-black", "uppercase", "tracking-widest", "bg-slate-100", "text-slate-600", "hover:bg-slate-200", "transition-all", 3, "click"], ["type", "button", 1, "w-full", "py-4", "rounded-2xl", "text-[11px]", "font-black", "uppercase", "tracking-widest", "shadow-md", "transition-all", "active:scale-95", 3, "click", "disabled", "ngClass"], [1, "absolute", "top-0", "right-0", "py-1", "px-4", "bg-indigo-600", "text-white", "text-[10px]", "font-black", "uppercase", "tracking-widest", "rounded-bl-xl", "shadow-lg"], [1, "flex", "items-center", "gap-3", "text-xs", "font-medium", "text-slate-600"], [1, "text-emerald-500", "text-lg"], [1, "truncate"], [1, "text-[10px]", "font-black", "text-indigo-500", "uppercase", "tracking-widest", "cursor-pointer", "hover:underline", "mt-2", 3, "click"], [1, "fixed", "inset-0", "z-[110]", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-sm", "animate-fade-in", 3, "click"], [1, "bg-white", "rounded-[2rem]", "shadow-2xl", "w-full", "max-w-2xl", "max-h-[85vh]", "overflow-hidden", "flex", "flex-col", 3, "click"], [1, "p-10", "border-b", "border-slate-100", "bg-gradient-to-br", "from-indigo-50", "to-white", "relative", "overflow-hidden"], [1, "relative", "z-10", "flex", "items-center", "justify-between"], [1, "space-y-1"], [1, "text-3xl", "font-black", "text-slate-900", "tracking-tight"], [1, "text-xs", "font-bold", "text-indigo-600", "uppercase", "tracking-widest"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-2xl", "bg-white", "text-slate-400", "hover:text-slate-900", "shadow-sm", "transition-all", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "absolute", "right-0", "bottom-0", "text-9xl", "opacity-5", "translate-y-1/2", "translate-x-1/4"], [1, "flex-1", "overflow-y-auto", "p-10", "space-y-4", "custom-scrollbar"], ["class", "flex flex-col items-center justify-center py-20", 4, "ngIf"], ["class", "grid grid-cols-1 gap-4", 4, "ngIf"], ["class", "text-center py-20", 4, "ngIf"], [1, "p-10", "border-t", "border-slate-100", "bg-slate-50", "flex", "justify-end"], [1, "px-8", "py-4", "bg-indigo-600", "text-white", "rounded-2xl", "text-xs", "font-black", "uppercase", "tracking-widest", "hover:bg-slate-900", "transition-all", "shadow-lg", "active:scale-95", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20"], [1, "w-12", "h-12", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "grid", "grid-cols-1", "gap-4"], ["class", "p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all group", 4, "ngFor", "ngForOf"], [1, "p-6", "bg-slate-50", "rounded-2xl", "border", "border-slate-100", "hover:border-indigo-200", "transition-all", "group"], [1, "flex", "items-start", "gap-4"], [1, "flex-shrink-0", "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-xl", "bg-white", "border", "border-slate-100", "text-emerald-500", "font-bold", "group-hover:bg-emerald-500", "group-hover:text-white", "transition-all"], [1, "flex-1"], [1, "flex", "items-center", "gap-3", "mb-1"], [1, "text-sm", "font-black", "text-slate-900", "uppercase", "tracking-wide"], [1, "text-[9px]", "font-black", "px-2", "py-0.5", "rounded-md", "uppercase", "tracking-widest", "text-white", 3, "ngClass"], [1, "text-xs", "text-slate-500", "font-medium", "leading-relaxed"], [1, "text-center", "py-20"], [1, "text-slate-400", "font-bold", "italic"], [1, "fixed", "inset-0", "z-[120]", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-sm", "animate-fade-in"], [1, "bg-white", "rounded-[2rem]", "shadow-2xl", "w-full", "max-w-md", "p-10"], [1, "text-center", "mb-10"], [1, "w-16", "h-16", "bg-blue-50", "text-blue-600", "rounded-3xl", "flex", "items-center", "justify-center", "mx-auto", "mb-6", "text-3xl"], [1, "text-2xl", "font-black", "text-slate-900", "tracking-tight"], [1, "text-sm", "text-slate-500", "mt-2", "font-medium"], [1, "bg-slate-50", "rounded-3xl", "border", "border-slate-100", "p-8", "space-y-4", "mb-10"], [1, "flex", "justify-between", "items-center"], [1, "text-xs", "font-black", "text-slate-400", "uppercase", "tracking-widest"], [1, "text-sm", "font-black", "text-slate-900"], [1, "flex", "justify-between", "items-center", "text-xs", "font-black", "text-indigo-600"], [1, "pt-4", "border-t", "border-slate-200", "flex", "justify-between", "items-end"], [1, "text-4xl", "font-black", "text-slate-900"], [1, "w-full", "py-5", "bg-green-600", "text-white", "rounded-[1.25rem]", "text-[11px]", "font-black", "uppercase", "tracking-widest", "hover:bg-slate-900", "transition-all", "shadow-xl", "active:scale-95", "disabled:opacity-50", 3, "click", "disabled"], [1, "w-full", "py-4", "text-slate-400", "font-black", "text-[10px]", "uppercase", "tracking-widest", "hover:text-red-500", "transition-colors", 3, "click"], [1, "fixed", "inset-0", "z-[115]", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-sm", "animate-fade-in", 3, "click"], [1, "bg-white", "rounded-[2rem]", "shadow-2xl", "w-full", "max-w-4xl", "max-h-[85vh]", "overflow-hidden", "flex", "flex-col", 3, "click"], [1, "p-8", "lg:p-10", "border-b", "border-slate-100", "flex", "items-center", "justify-between"], [1, "text-sm", "text-slate-500", "font-medium"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-2xl", "bg-white", "border", "border-slate-100", "text-slate-400", "hover:text-slate-900", "shadow-sm", "transition-all", 3, "click"], [1, "flex-1", "overflow-y-auto", "p-0", "custom-scrollbar"], ["class", "m-10 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-700 text-sm font-bold", 4, "ngIf"], [4, "ngIf"], ["class", "flex flex-col items-center justify-center py-32", 4, "ngIf"], ["class", "text-center py-32", 4, "ngIf"], [1, "p-8", "border-t", "border-slate-100", "bg-slate-50", "flex", "justify-end", "gap-4"], [1, "px-6", "py-3", "bg-white", "border", "border-slate-200", "text-slate-700", "text-xs", "font-black", "rounded-2xl", "hover:border-indigo-500", "transition-all", "shadow-sm", 3, "click"], [1, "px-8", "py-3", "bg-slate-900", "text-white", "text-xs", "font-black", "rounded-2xl", "hover:bg-slate-800", "transition-all", "shadow-md", "active:scale-95", 3, "click"], [1, "m-10", "p-4", "bg-red-50", "border", "border-red-100", "rounded-2xl", "text-red-700", "text-sm", "font-bold"], [1, "premium-table", "w-full"], [1, "pl-10"], [1, "pr-10", "text-right"], [4, "ngFor", "ngForOf"], [1, "text-xs", "font-black", "text-slate-900"], [1, "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-tighter"], [1, "text-sm", "font-black", "text-indigo-600"], [1, "px-2.5", "py-1", "rounded-md", "text-[9px]", "font-black", "uppercase", "tracking-widest"], [1, "text-xs", "font-bold", "text-slate-500", "uppercase"], [1, "px-4", "py-2", "border", "border-slate-200", "text-indigo-600", "hover:bg-slate-50", "text-xs", "font-black", "rounded-xl", "transition-all", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "py-32"], [1, "text-center", "py-32"], [1, "text-6xl", "block", "mb-6", "grayscale", "opacity-50"], [1, "text-xl", "font-bold", "text-slate-400", "italic"]], template: function MembershipPlansComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        \u0275\u0275text(4, "Membership Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Select the best membership to access exclusive community benefits.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function MembershipPlansComponent_Template_button_click_7_listener() {
          return ctx.openPaymentHistory();
        });
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "\u{1F4B3}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " History ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, MembershipPlansComponent_div_11_Template, 2, 0, "div", 6)(12, MembershipPlansComponent_div_12_Template, 4, 1, "div", 7)(13, MembershipPlansComponent_div_13_Template, 3, 0, "div", 8)(14, MembershipPlansComponent_div_14_Template, 2, 1, "div", 9)(15, MembershipPlansComponent_div_15_Template, 21, 4, "div", 10)(16, MembershipPlansComponent_div_16_Template, 31, 8, "div", 11)(17, MembershipPlansComponent_div_17_Template, 21, 4, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.plans.length === 0 && !ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.plans.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showingFeaturesForPlan);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.confirmingPlan);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showPaymentHistory);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SlicePipe, DecimalPipe, DatePipe], styles: ["\n\n.plan-card-current[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);\n}\n/*# sourceMappingURL=membership-plans.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MembershipPlansComponent, { className: "MembershipPlansComponent", filePath: "src\\app\\pages\\membership-plans\\membership-plans.component.ts", lineNumber: 51 });
})();

// src/app/pages/dashboard/bench-resources/bench-resources.component.ts
var _c02 = () => [];
var _c12 = (a0, a1, a2, a3) => ({ "bg-emerald-50 text-emerald-700 border-emerald-100": a0, "bg-slate-50 text-slate-500 border-slate-100": a1, "bg-indigo-50 text-indigo-700 border-indigo-100": a2, "bg-red-50 text-red-700 border-red-100": a3 });
function BenchResourcesComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 22);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function BenchResourcesComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementStart(2, "p", 25);
    \u0275\u0275text(3, "Loading resources...");
    \u0275\u0275elementEnd()();
  }
}
function BenchResourcesComponent_div_25_tr_19_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r3.trim(), " ");
  }
}
function BenchResourcesComponent_div_25_tr_19_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resource_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", (resource_r4.stack ? resource_r4.stack.split(",") : \u0275\u0275pureFunction0(1, _c02)).length - 3, " more");
  }
}
function BenchResourcesComponent_div_25_tr_19_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "Global/Remote");
    \u0275\u0275elementEnd();
  }
}
function BenchResourcesComponent_div_25_tr_19_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4, "per hour");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const resource_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", resource_r4.hourlyRate, "");
  }
}
function BenchResourcesComponent_div_25_tr_19_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "Negotiable");
    \u0275\u0275elementEnd();
  }
}
function BenchResourcesComponent_div_25_tr_19_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "button", 54);
    \u0275\u0275listener("click", function BenchResourcesComponent_div_25_tr_19_div_32_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const resource_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEditResource(resource_r4));
    });
    \u0275\u0275text(2, " \u270F\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 55);
    \u0275\u0275listener("click", function BenchResourcesComponent_div_25_tr_19_div_32_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const resource_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDeleteResource(resource_r4));
    });
    \u0275\u0275text(4, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd()();
  }
}
function BenchResourcesComponent_div_25_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 30)(1, "td")(2, "div", 31)(3, "div", 32);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "div", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "div", 35);
    \u0275\u0275template(13, BenchResourcesComponent_div_25_tr_19_span_13_Template, 2, 1, "span", 36)(14, BenchResourcesComponent_div_25_tr_19_span_14_Template, 2, 2, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 38);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 39)(19, "span", 38);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, BenchResourcesComponent_div_25_tr_19_span_21_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275template(23, BenchResourcesComponent_div_25_tr_19_div_23_Template, 5, 1, "div", 41)(24, BenchResourcesComponent_div_25_tr_19_span_24_Template, 2, 0, "span", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "span", 43);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td", 28)(29, "div", 44)(30, "button", 45);
    \u0275\u0275listener("click", function BenchResourcesComponent_div_25_tr_19_Template_button_click_30_listener() {
      const resource_r4 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onViewResource(resource_r4));
    });
    \u0275\u0275text(31, " Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, BenchResourcesComponent_div_25_tr_19_div_32_Template, 5, 0, "div", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const resource_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 13, (resource_r4.role || "R")[0]), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(resource_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", resource_r4.experience || "Entry", " Exp");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (resource_r4.stack ? resource_r4.stack.split(",") : \u0275\u0275pureFunction0(15, _c02)).slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (resource_r4.stack ? resource_r4.stack.split(",") : \u0275\u0275pureFunction0(16, _c02)).length > 3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r4.availability || "Immediate");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(resource_r4.location || "Remote");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", resource_r4.isRemote);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", resource_r4.hourlyRate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !resource_r4.hourlyRate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(17, _c12, resource_r4.status === "ACTIVE", resource_r4.status === "ARCHIVED", resource_r4.status === "HIRED", resource_r4.status === "EXPIRED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", resource_r4.status || "ACTIVE", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.isOwnResource(resource_r4));
  }
}
function BenchResourcesComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "table", 27)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Role & Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Technology Stack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Availability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Commercials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 28);
    \u0275\u0275text(17, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, BenchResourcesComponent_div_25_tr_19_Template, 33, 22, "tr", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r0.filteredResources);
  }
}
function BenchResourcesComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "span", 57);
    \u0275\u0275text(2, "\u{1F50E}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 58);
    \u0275\u0275text(4, "No resources matched");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 59);
    \u0275\u0275text(6, "Try refining your search terms or view your own postings.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 60);
    \u0275\u0275listener("click", function BenchResourcesComponent_div_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.searchQuery = "";
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275text(8, "Clear search");
    \u0275\u0275elementEnd()();
  }
}
function BenchResourcesComponent_app_resource_detail_modal_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-resource-detail-modal", 61);
    \u0275\u0275listener("close", function BenchResourcesComponent_app_resource_detail_modal_27_Template_app_resource_detail_modal_close_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeResourceDetailModal());
    })("interestSubmitted", function BenchResourcesComponent_app_resource_detail_modal_27_Template_app_resource_detail_modal_interestSubmitted_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onInterestSubmitted());
    })("editResource", function BenchResourcesComponent_app_resource_detail_modal_27_Template_app_resource_detail_modal_editResource_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onEditResource($event));
    })("archiveResource", function BenchResourcesComponent_app_resource_detail_modal_27_Template_app_resource_detail_modal_archiveResource_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onArchiveResource($event));
    })("unarchiveResource", function BenchResourcesComponent_app_resource_detail_modal_27_Template_app_resource_detail_modal_unarchiveResource_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onUnarchiveResource($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("show", ctx_r0.showResourceDetailModal)("resource", ctx_r0.selectedResource);
  }
}
function BenchResourcesComponent_app_resource_post_modal_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-resource-post-modal", 62);
    \u0275\u0275listener("close", function BenchResourcesComponent_app_resource_post_modal_28_Template_app_resource_post_modal_close_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeResourcePostModal());
    })("saved", function BenchResourcesComponent_app_resource_post_modal_28_Template_app_resource_post_modal_saved_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onResourceSaved());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("show", ctx_r0.showResourcePostModal)("editResource", ctx_r0.selectedResourceForEdit);
  }
}
var BenchResourcesComponent = class _BenchResourcesComponent {
  constructor(apiService, authService, toastr, confirmService) {
    this.apiService = apiService;
    this.authService = authService;
    this.toastr = toastr;
    this.confirmService = confirmService;
    this.navigate = new EventEmitter();
    this.openPayment = new EventEmitter();
    this.resources = [];
    this.filteredResources = [];
    this.currentUser = null;
    this.isLoading = false;
    this.errorMessage = "";
    this.resourceTab = "OTHERS";
    this.searchQuery = "";
    this.showResourceDetailModal = false;
    this.showResourcePostModal = false;
    this.selectedResource = null;
    this.selectedResourceForEdit = null;
    this.currentUser = this.authService.getCurrentUser();
  }
  ngOnInit() {
    console.log("BenchResourcesComponent initialized");
    console.log("Current user:", this.currentUser);
    this.loadResources();
  }
  loadResources() {
    this.isLoading = true;
    this.errorMessage = "";
    if (this.resourceTab === "MY_RESOURCES") {
      this.loadMyResources();
    } else {
      this.loadAllResources();
    }
  }
  loadAllResources() {
    this.apiService.getBenchResources().subscribe({
      next: (response) => {
        console.log("Bench resources response:", response);
        console.log("Response type:", typeof response);
        console.log("Is array:", Array.isArray(response));
        let allResources = [];
        if (Array.isArray(response)) {
          allResources = response;
        } else if (response && Array.isArray(response.data)) {
          allResources = response.data;
        } else if (response && response.resources && Array.isArray(response.resources)) {
          allResources = response.resources;
        } else if (response && typeof response === "object") {
          const keys = Object.keys(response);
          console.log("Response keys:", keys);
          for (const key of keys) {
            if (Array.isArray(response[key])) {
              allResources = response[key];
              break;
            }
          }
        }
        console.log("All resources after parsing:", allResources);
        console.log("All resources count:", allResources.length);
        if (this.currentUser && this.resourceTab === "OTHERS") {
          this.resources = allResources.filter((res) => {
            if (res.postedBy === null || res.postedBy === void 0) {
              return true;
            }
            const postedById = typeof res.postedBy === "number" ? res.postedBy : typeof res.postedBy === "string" && res.postedBy !== "" ? parseInt(res.postedBy) : null;
            const isOwnResource = postedById !== null && postedById === this.currentUser.id || res.postedByEmail && res.postedByEmail === this.currentUser.email;
            return !isOwnResource;
          });
        } else {
          this.resources = allResources;
        }
        console.log("Filtered resources (others):", this.resources);
        console.log("Resources count:", this.resources.length);
        console.log("Current user:", this.currentUser);
        this.applyFilters();
        console.log("Filtered resources after applyFilters:", this.filteredResources);
        console.log("Filtered count:", this.filteredResources.length);
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading bench resources:", error);
        console.error("Error details:", error.error);
        this.errorMessage = error.error?.message || error.message || "Error loading resources. Please try again.";
        this.resources = [];
        this.filteredResources = [];
        this.isLoading = false;
      }
    });
  }
  loadMyResources() {
    this.apiService.getMyBenchResources().subscribe({
      next: (response) => {
        console.log("My resources response:", response);
        this.resources = Array.isArray(response) ? response : [];
        console.log("My resources:", this.resources);
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading my resources:", error);
        console.error("Error details:", error.error);
        this.errorMessage = error.error?.message || error.message || "Error loading your resources. Please try again.";
        this.resources = [];
        this.filteredResources = [];
        this.isLoading = false;
      }
    });
  }
  switchResourceTab(tab) {
    this.resourceTab = tab;
    this.loadResources();
  }
  applyFilters() {
    console.log("Applying filters, resources count:", this.resources.length);
    console.log("Search query:", this.searchQuery);
    this.filteredResources = this.resources.filter((res) => {
      if (this.searchQuery && this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase();
        const matchesRole = res.role?.toLowerCase().includes(query);
        const matchesStack = res.stack?.toLowerCase().includes(query);
        const matchesDescription = res.description?.toLowerCase().includes(query);
        const matchesSkills = res.skills?.some((skill) => skill.toLowerCase().includes(query));
        if (!matchesRole && !matchesStack && !matchesDescription && !matchesSkills) {
          return false;
        }
      }
      return true;
    });
    console.log("After filtering, filteredResources count:", this.filteredResources.length);
  }
  onNavigate(view) {
    this.navigate.emit(view);
  }
  onOpenPayment() {
    this.openPayment.emit();
  }
  onCreateResource() {
    this.selectedResourceForEdit = null;
    this.showResourcePostModal = true;
  }
  onViewResource(resource) {
    if (resource.id && typeof resource.id === "number") {
      this.apiService.getBenchResourceById(resource.id).subscribe({
        next: (response) => {
          this.selectedResource = response;
          this.showResourceDetailModal = true;
        },
        error: (error) => {
          console.error("Error loading resource details:", error);
          this.selectedResource = resource;
          this.showResourceDetailModal = true;
        }
      });
    } else {
      this.selectedResource = resource;
      this.showResourceDetailModal = true;
    }
  }
  onEditResource(resource) {
    this.selectedResourceForEdit = resource;
    this.showResourcePostModal = true;
  }
  onArchiveResource(resource) {
    if (!resource.id || typeof resource.id !== "number")
      return;
    this.confirmService.confirm({
      title: "Archive Resource",
      message: "Are you sure you want to archive this resource posting? Archived resources will be hidden from public view but can be restored later.",
      confirmLabel: "Archive",
      cancelLabel: "Cancel",
      isDestructive: true
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.isLoading = true;
      this.apiService.archiveBenchResource(Number(resource.id)).subscribe({
        next: () => {
          console.log("Resource archived successfully");
          this.isLoading = false;
          this.toastr.success("Resource archived successfully", "Archived");
          this.loadResources();
        },
        error: (error) => {
          console.error("Error archiving resource:", error);
          this.isLoading = false;
          const errorMessage = error.error?.message || error.message || "Error archiving resource. Please try again.";
          this.toastr.error(`Error archiving resource: ${errorMessage}`, "Error");
        }
      });
    });
  }
  onUnarchiveResource(resource) {
    if (!resource.id || typeof resource.id !== "number")
      return;
    this.confirmService.confirm({
      title: "Unarchive Resource",
      message: "Are you sure you want to unarchive this resource posting? It will be restored to active status and visible to other users.",
      confirmLabel: "Unarchive",
      cancelLabel: "Cancel"
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.isLoading = true;
      this.apiService.unarchiveBenchResource(Number(resource.id)).subscribe({
        next: () => {
          console.log("Resource unarchived successfully");
          this.isLoading = false;
          this.toastr.success("Resource unarchived successfully", "Unarchived");
          this.loadResources();
        },
        error: (error) => {
          console.error("Error unarchiving resource:", error);
          this.isLoading = false;
          const errorMessage = error.error?.message || error.message || "Error unarchiving resource. Please try again.";
          this.toastr.error(`Error unarchiving resource: ${errorMessage}`, "Error");
        }
      });
    });
  }
  onDeleteResource(resource) {
    if (!resource.id || typeof resource.id !== "number")
      return;
    this.confirmService.confirm({
      title: "Delete Resource",
      message: "Are you sure you want to delete this resource posting? This will also delete all related interest submissions.",
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      isDestructive: true
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.isLoading = true;
      this.apiService.deleteBenchResource(Number(resource.id)).subscribe({
        next: () => {
          console.log("Resource deleted successfully");
          this.isLoading = false;
          this.toastr.success("Resource deleted successfully", "Deleted");
          this.loadResources();
        },
        error: (error) => {
          console.error("Error deleting resource:", error);
          this.isLoading = false;
          const errorMessage = error.error?.message || error.message || "Error deleting resource. Please try again.";
          this.toastr.error(`Error deleting resource: ${errorMessage}`, "Error");
        }
      });
    });
  }
  closeResourceDetailModal() {
    this.showResourceDetailModal = false;
    this.selectedResource = null;
  }
  closeResourcePostModal() {
    this.showResourcePostModal = false;
    this.selectedResourceForEdit = null;
  }
  onResourceSaved() {
    this.loadResources();
  }
  onInterestSubmitted() {
    this.loadResources();
  }
  canEditResource(resource) {
    if (!this.currentUser || !resource)
      return false;
    const postedById = typeof resource.postedBy === "number" ? resource.postedBy : parseInt(resource.postedBy);
    return postedById === this.currentUser.id || resource.postedByEmail === this.currentUser.email;
  }
  isOwnResource(resource) {
    return this.canEditResource(resource);
  }
  onViewResponses(resource) {
    if (resource.id && typeof resource.id === "number") {
      this.apiService.getBenchResourceById(resource.id).subscribe({
        next: (response) => {
          this.selectedResource = response;
          this.showResourceDetailModal = true;
        },
        error: (error) => {
          console.error("Error loading resource details:", error);
          this.selectedResource = resource;
          this.showResourceDetailModal = true;
        }
      });
    } else {
      this.selectedResource = resource;
      this.showResourceDetailModal = true;
    }
  }
  getInterestCount(resource) {
    return 0;
  }
  static {
    this.\u0275fac = function BenchResourcesComponent_Factory(t) {
      return new (t || _BenchResourcesComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ConfirmService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BenchResourcesComponent, selectors: [["app-bench-resources"]], inputs: { refreshTrigger: "refreshTrigger" }, outputs: { navigate: "navigate", openPayment: "openPayment" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 29, vars: 11, consts: [[1, "space-y-8", "animate-fade-in"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-6"], [1, "text-3xl", "font-extrabold", "text-slate-900", "tracking-tight"], [1, "text-slate-500", "font-medium", "mt-1"], [1, "inline-flex", "items-center", "justify-center", "px-6", "py-3", "bg-indigo-600", "text-white", "rounded-2xl", "hover:bg-indigo-700", "font-bold", "transition-all", "shadow-md", "hover:shadow-lg", "active:scale-95", 3, "click"], [1, "mr-2", "text-xl"], [1, "premium-card", "overflow-hidden"], [1, "px-8", "pt-6", "border-b", "border-slate-100", "flex", "items-center", "justify-between"], [1, "flex", "gap-8"], [1, "pb-4", "px-1", "text-sm", "tracking-wide", "transition-colors", 3, "click"], [1, "pb-4", "hidden", "md:block", "relative"], ["type", "text", "placeholder", "Filter by role, skills...", 1, "pl-9", "pr-4", "py-2", "bg-slate-50", "border", "border-slate-100", "rounded-xl", "text-xs", "font-bold", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "transition-all", "w-64", 3, "ngModelChange", "input", "ngModel"], [1, "absolute", "left-3", "top-2.5", "text-slate-400"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["class", "m-8 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-700 text-sm font-bold flex items-center gap-3", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-20", 4, "ngIf"], ["class", "overflow-x-auto custom-scrollbar", 4, "ngIf"], ["class", "p-20 text-center space-y-4", 4, "ngIf"], [3, "show", "resource", "close", "interestSubmitted", "editResource", "archiveResource", "unarchiveResource", 4, "ngIf"], [3, "show", "editResource", "close", "saved", 4, "ngIf"], [1, "m-8", "p-4", "bg-red-50", "border", "border-red-100", "rounded-2xl", "text-red-700", "text-sm", "font-bold", "flex", "items-center", "gap-3"], [1, "text-xl"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20"], [1, "w-12", "h-12", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin", "mb-4"], [1, "text-slate-500", "font-bold", "animate-pulse"], [1, "overflow-x-auto", "custom-scrollbar"], [1, "premium-table"], [1, "text-right"], ["class", "group", 4, "ngFor", "ngForOf"], [1, "group"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-xl", "bg-indigo-50", "text-indigo-600", "text-sm", "font-black", "border", "border-indigo-100", "group-hover:bg-indigo-600", "group-hover:text-white", "transition-all"], [1, "font-bold", "text-slate-900"], [1, "text-[10px]", "font-black", "text-slate-400", "uppercase"], [1, "flex", "flex-wrap", "gap-1", "max-w-[200px]"], ["class", "px-2 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-black rounded-md uppercase tracking-tight", 4, "ngFor", "ngForOf"], ["class", "text-[9px] font-black text-indigo-500", 4, "ngIf"], [1, "text-xs", "font-bold", "text-slate-600"], [1, "flex", "flex-col"], ["class", "text-[9px] font-black text-emerald-600 uppercase tracking-widest mt-0.5", 4, "ngIf"], ["class", "flex flex-col", 4, "ngIf"], ["class", "text-xs font-bold text-slate-400", 4, "ngIf"], [1, "px-2.5", "py-1", "rounded-full", "text-[9px]", "font-black", "tracking-widest", "uppercase", "border", 3, "ngClass"], [1, "flex", "items-center", "justify-end", "gap-2", "px-4"], [1, "px-4", "py-2", "bg-white", "border", "border-slate-200", "text-slate-700", "text-xs", "font-bold", "rounded-xl", "hover:border-indigo-500", "hover:text-indigo-600", "transition-all", 3, "click"], ["class", "flex gap-2", 4, "ngIf"], [1, "px-2", "py-0.5", "bg-slate-100", "text-slate-600", "text-[9px]", "font-black", "rounded-md", "uppercase", "tracking-tight"], [1, "text-[9px]", "font-black", "text-indigo-500"], [1, "text-[9px]", "font-black", "text-emerald-600", "uppercase", "tracking-widest", "mt-0.5"], [1, "text-sm", "font-black", "text-slate-900"], [1, "text-[9px]", "font-bold", "text-slate-400", "uppercase", "tracking-widest"], [1, "text-xs", "font-bold", "text-slate-400"], [1, "flex", "gap-2"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "bg-slate-50", "text-slate-500", "rounded-xl", "hover:bg-slate-900", "hover:text-white", "transition-all", 3, "click"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "bg-red-50", "text-red-500", "rounded-xl", "hover:bg-red-500", "hover:text-white", "transition-all", 3, "click"], [1, "p-20", "text-center", "space-y-4"], [1, "text-5xl", "block"], [1, "text-xl", "font-bold", "text-slate-900"], [1, "text-slate-500", "max-w-xs", "mx-auto"], [1, "text-sm", "font-bold", "text-indigo-600", "hover:underline", 3, "click"], [3, "close", "interestSubmitted", "editResource", "archiveResource", "unarchiveResource", "show", "resource"], [3, "close", "saved", "show", "editResource"]], template: function BenchResourcesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        \u0275\u0275text(4, "Bench Resources");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Acquire or share top-tier talent within the network.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function BenchResourcesComponent_Template_button_click_7_listener() {
          return ctx.onCreateResource();
        });
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "+");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Add Resource ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "nav", 8)(14, "button", 9);
        \u0275\u0275listener("click", function BenchResourcesComponent_Template_button_click_14_listener() {
          return ctx.switchResourceTab("OTHERS");
        });
        \u0275\u0275text(15, " Explore Network ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275listener("click", function BenchResourcesComponent_Template_button_click_16_listener() {
          return ctx.switchResourceTab("MY_RESOURCES");
        });
        \u0275\u0275text(17, " My Postings ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10)(19, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function BenchResourcesComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("input", function BenchResourcesComponent_Template_input_input_19_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 12);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 13);
        \u0275\u0275element(22, "path", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(23, BenchResourcesComponent_div_23_Template, 4, 1, "div", 15)(24, BenchResourcesComponent_div_24_Template, 4, 0, "div", 16)(25, BenchResourcesComponent_div_25_Template, 20, 1, "div", 17)(26, BenchResourcesComponent_div_26_Template, 9, 0, "div", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(27, BenchResourcesComponent_app_resource_detail_modal_27_Template, 1, 2, "app-resource-detail-modal", 19)(28, BenchResourcesComponent_app_resource_post_modal_28_Template, 1, 2, "app-resource-post-modal", 20);
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275classMap(ctx.resourceTab === "OTHERS" ? "border-b-2 border-indigo-600 text-indigo-600 font-bold" : "text-slate-400 hover:text-slate-600 font-bold");
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.resourceTab === "MY_RESOURCES" ? "border-b-2 border-indigo-600 text-indigo-600 font-bold" : "text-slate-400 hover:text-slate-600 font-bold");
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredResources.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredResources.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showResourceDetailModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showResourcePostModal);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, UpperCasePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ResourceDetailModalComponent, ResourcePostModalComponent], styles: ["\n\n/*# sourceMappingURL=bench-resources.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BenchResourcesComponent, { className: "BenchResourcesComponent", filePath: "src\\app\\pages\\dashboard\\bench-resources\\bench-resources.component.ts", lineNumber: 19 });
})();

// src/app/pages/dashboard/dashboard.component.ts
function DashboardComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275element(1, "span", 54);
    \u0275\u0275elementStart(2, "span", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadCount, " ");
  }
}
function DashboardComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function DashboardComponent_div_73_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.scrollToPlans());
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "h4", 58);
    \u0275\u0275text(3, "Go Premium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 59);
    \u0275\u0275text(5, "Unlock exclusive networking events and project tools.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 60);
    \u0275\u0275text(7, " Upgrade Now \u2192 ");
    \u0275\u0275elementEnd()()();
  }
}
function DashboardComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 57)(2, "p", 62);
    \u0275\u0275text(3, "Active Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function DashboardComponent_div_74_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.scrollToPlans());
    });
    \u0275\u0275text(7, "Manage Subscription");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 64);
    \u0275\u0275text(9, "\u{1F48E}");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedMembershipPlan.name);
  }
}
function DashboardComponent_div_76_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2, "\u{1F5D3}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 86);
    \u0275\u0275text(4, "Your schedule is empty.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 87);
    \u0275\u0275listener("click", function DashboardComponent_div_76_div_26_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSelectView("EVENTS"));
    });
    \u0275\u0275text(6, "Discover events to join");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_76_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89);
    \u0275\u0275element(2, "img", 90);
    \u0275\u0275elementStart(3, "div", 91)(4, "span", 92);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 93);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 94)(11, "h4", 95);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 96);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 97);
    \u0275\u0275element(15, "path", 98)(16, "path", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "button", 100);
    \u0275\u0275listener("click", function DashboardComponent_div_76_div_28_Template_button_click_18_listener() {
      const event_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onViewEvent(event_r7));
    });
    \u0275\u0275text(19, " Details ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", event_r7.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 6, event_r7.date, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 9, event_r7.date, "dd"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r7.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", event_r7.location, " \u2022 ", event_r7.mode, " ");
  }
}
function DashboardComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "div", 67)(3, "div", 68)(4, "span", 69);
    \u0275\u0275text(5, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 70);
    \u0275\u0275text(7, "+2 new");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 71);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 72);
    \u0275\u0275text(11, "Upcoming Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 67)(13, "div", 68)(14, "span", 69);
    \u0275\u0275text(15, "\u{1F465}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 71);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 72);
    \u0275\u0275text(19, "Network Connections");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "section", 73)(21, "div", 74)(22, "h2", 75);
    \u0275\u0275text(23, "My Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 76);
    \u0275\u0275listener("click", function DashboardComponent_div_76_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSelectView("EVENTS"));
    });
    \u0275\u0275text(25, "View Calendar \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, DashboardComponent_div_76_div_26_Template, 7, 0, "div", 77);
    \u0275\u0275elementStart(27, "div", 78);
    \u0275\u0275template(28, DashboardComponent_div_76_div_28_Template, 20, 12, "div", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "section", 80)(30, "div", 57)(31, "h2", 81);
    \u0275\u0275text(32, "Membership Plans");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 82);
    \u0275\u0275text(34, "Choose the best plan to grow your career and network.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "app-membership-plans");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "div", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.myEvents.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.members.length + ctx_r0.otherMembers.length);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.myEvents.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.myEvents);
  }
}
function DashboardComponent_div_77_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275element(1, "div", 115);
    \u0275\u0275elementStart(2, "p", 116);
    \u0275\u0275text(3, "Fetching events...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_77_div_52_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 5)(3, "div", 121);
    \u0275\u0275element(4, "img", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 123);
    \u0275\u0275element(6, "div");
    \u0275\u0275elementStart(7, "div")(8, "div", 124);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 125);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(12, "td", 126);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 126);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 127);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "button", 128);
    \u0275\u0275listener("click", function DashboardComponent_div_77_div_52_tr_16_Template_button_click_20_listener() {
      const event_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onViewEvent(event_r10));
    });
    \u0275\u0275text(21, " View ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", event_r10.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getCategoryColor(event_r10.type || event_r10.category) + " w-1.5 h-8 rounded-full");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r10.name || event_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r10.type || event_r10.category || "EVENT");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatEventDateTime(event_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r10.location || event_r10.venue);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-green-600", ctx_r0.isFreeEvent(event_r10))("font-black", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getEventCost(event_r10), " ");
  }
}
function DashboardComponent_div_77_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118)(2, "table", 119)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Event Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, DashboardComponent_div_77_div_52_tr_16_Template, 22, 12, "tr", 120);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.filteredEvents);
  }
}
function DashboardComponent_div_77_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129)(1, "span", 130);
    \u0275\u0275text(2, "\u{1F9D0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 75);
    \u0275\u0275text(4, "No events found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 131);
    \u0275\u0275text(6, "Try adjusting your filters or search query to find what you're looking for.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 132);
    \u0275\u0275listener("click", function DashboardComponent_div_77_div_53_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.eventTypeFilter = "All Types";
      ctx_r0.dateRangeFilter = "All Dates";
      ctx_r0.costFilter = "All Costs";
      ctx_r0.searchQuery = "";
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275text(8, "Clear all filters");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 101)(2, "h1", 102);
    \u0275\u0275text(3, "Event Listings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 103);
    \u0275\u0275text(5, "Discover and register for upcoming professional events.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 104)(7, "div", 105)(8, "label", 106);
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 107);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_div_77_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.eventTypeFilter, $event) || (ctx_r0.eventTypeFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function DashboardComponent_div_77_Template_select_change_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275elementStart(11, "option");
    \u0275\u0275text(12, "All Types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option");
    \u0275\u0275text(14, "CONFERENCE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option");
    \u0275\u0275text(16, "NETWORKING");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option");
    \u0275\u0275text(18, "WORKSHOP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option");
    \u0275\u0275text(20, "WEBINAR");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 105)(22, "label", 106);
    \u0275\u0275text(23, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 107);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_div_77_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.dateRangeFilter, $event) || (ctx_r0.dateRangeFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function DashboardComponent_div_77_Template_select_change_24_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275elementStart(25, "option");
    \u0275\u0275text(26, "All Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option");
    \u0275\u0275text(28, "This Week");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option");
    \u0275\u0275text(30, "This Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option");
    \u0275\u0275text(32, "Next Month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 105)(34, "label", 106);
    \u0275\u0275text(35, "Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 107);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_div_77_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.costFilter, $event) || (ctx_r0.costFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function DashboardComponent_div_77_Template_select_change_36_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275elementStart(37, "option");
    \u0275\u0275text(38, "All Costs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option");
    \u0275\u0275text(40, "Free");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option");
    \u0275\u0275text(42, "Paid");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 105)(44, "label", 106);
    \u0275\u0275text(45, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 108)(47, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_div_77_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.searchQuery, $event) || (ctx_r0.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DashboardComponent_div_77_Template_input_input_47_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.applyFilters());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 110);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 9);
    \u0275\u0275element(50, "path", 10);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(51, DashboardComponent_div_77_div_51_Template, 4, 0, "div", 111)(52, DashboardComponent_div_77_div_52_Template, 17, 1, "div", 112)(53, DashboardComponent_div_77_div_53_Template, 9, 0, "div", 113);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.eventTypeFilter);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.dateRangeFilter);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.costFilter);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.searchQuery);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.filteredEvents.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.filteredEvents.length === 0);
  }
}
function DashboardComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275element(1, "app-job-listings", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("showPostButton", true)("isAdminView", false);
  }
}
function DashboardComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "app-bench-resources", 135);
    \u0275\u0275listener("navigate", function DashboardComponent_div_79_Template_app_bench_resources_navigate_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onNavigate($event));
    })("openPayment", function DashboardComponent_div_79_Template_app_bench_resources_openPayment_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onNavigate("PAYMENT"));
    });
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_section_80_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 141);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 142);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 143);
    \u0275\u0275text(8, "ACTIVE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 144)(10, "button", 145);
    \u0275\u0275text(11, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const res_r14 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r14.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(res_r14.stack);
  }
}
function DashboardComponent_section_80_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 146);
    \u0275\u0275text(2, "No active postings found.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_section_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 73)(1, "div", 74)(2, "h2", 75);
    \u0275\u0275text(3, "Active Postings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 136)(5, "button", 137);
    \u0275\u0275listener("click", function DashboardComponent_section_80_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onNavigate("RESOURCE_POST"));
    });
    \u0275\u0275text(6, "+ Resource");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 138);
    \u0275\u0275listener("click", function DashboardComponent_section_80_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onNavigate("PROJECT_POST"));
    });
    \u0275\u0275text(8, "+ Project");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 139)(10, "table", 119)(11, "tbody");
    \u0275\u0275template(12, DashboardComponent_section_80_tr_12_Template, 12, 2, "tr", 120)(13, DashboardComponent_section_80_tr_13_Template, 3, 0, "tr", 140);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r0.getMyResources());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getMyResources().length === 0);
  }
}
function DashboardComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275element(1, "div", 148);
    \u0275\u0275elementStart(2, "div")(3, "p", 149);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 150);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", item_r15.type === "ALERT" ? "bg-red-500" : "bg-indigo-500");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r15.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r15.date);
  }
}
function DashboardComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151)(1, "div", 108);
    \u0275\u0275element(2, "img", 152)(3, "span", 153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 94)(5, "p", 154);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 155);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 156);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 9);
    \u0275\u0275element(11, "path", 157);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", member_r16.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(member_r16.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r16.company);
  }
}
function DashboardComponent_div_101_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275element(1, "img", 162);
    \u0275\u0275elementStart(2, "div", 94)(3, "p", 163);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 164);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", member_r17.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r17.company);
  }
}
function DashboardComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158)(1, "p", 159);
    \u0275\u0275text(2, "Other Professionals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 160);
    \u0275\u0275template(4, DashboardComponent_div_101_div_4_Template, 7, 3, "div", 161);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.otherMembers);
  }
}
function DashboardComponent_div_102_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275element(1, "div", 180);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_102_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181)(1, "span", 182);
    \u0275\u0275text(2, "\u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 183);
    \u0275\u0275text(4, "You're all caught up!");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_102_div_14_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 191);
    \u0275\u0275text(1, "NEW");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_102_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275listener("click", function DashboardComponent_div_102_div_14_Template_div_click_0_listener() {
      const n_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onNotificationClick(n_r20));
    });
    \u0275\u0275elementStart(1, "div", 185)(2, "span", 39);
    \u0275\u0275text(3, "\u{1F514}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 186)(5, "div", 187)(6, "p", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, DashboardComponent_div_102_div_14_span_8_Template, 2, 0, "span", 188);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 189);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 190);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r20 = ctx.$implicit;
    \u0275\u0275property("ngClass", n_r20.read ? "bg-white border-slate-100" : "bg-indigo-50/50 border-indigo-100 ring-1 ring-indigo-100");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(n_r20.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !n_r20.read);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r20.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 5, n_r20.createdAt, "mediumDate"));
  }
}
function DashboardComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 165);
    \u0275\u0275listener("click", function DashboardComponent_div_102_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeNotifications());
    });
    \u0275\u0275elementStart(1, "div", 166);
    \u0275\u0275listener("click", function DashboardComponent_div_102_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 167)(3, "div")(4, "h3", 168);
    \u0275\u0275text(5, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 4);
    \u0275\u0275text(7, "Updates for your subscription and network.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 169);
    \u0275\u0275listener("click", function DashboardComponent_div_102_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeNotifications());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 170);
    \u0275\u0275element(10, "path", 171);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 172);
    \u0275\u0275template(12, DashboardComponent_div_102_div_12_Template, 2, 0, "div", 173)(13, DashboardComponent_div_102_div_13_Template, 5, 0, "div", 174)(14, DashboardComponent_div_102_div_14_Template, 14, 8, "div", 175);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 176)(16, "button", 177);
    \u0275\u0275listener("click", function DashboardComponent_div_102_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markAllAsRead());
    });
    \u0275\u0275text(17, "Mark all read");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 178);
    \u0275\u0275listener("click", function DashboardComponent_div_102_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearAllNotifications());
    });
    \u0275\u0275text(19, "Clear all");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r0.isLoadingNotifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingNotifications && ctx_r0.notifications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(authService, dataService, apiService, membershipService, route) {
    this.authService = authService;
    this.dataService = dataService;
    this.apiService = apiService;
    this.membershipService = membershipService;
    this.route = route;
    this.navigate = new EventEmitter();
    this.viewEvent = new EventEmitter();
    this.currentView = null;
    this.currentUser = null;
    this.selectedMembershipPlan = null;
    this.myEvents = [];
    this.allEvents = [];
    this.filteredEvents = [];
    this.announcements = [];
    this.members = [];
    this.otherMembers = [];
    this.eventTypeFilter = "All Types";
    this.dateRangeFilter = "All Dates";
    this.costFilter = "All Costs";
    this.searchQuery = "";
    this.isLoading = false;
    this.showNotifications = false;
    this.notifications = [];
    this.unreadCount = 0;
    this.isLoadingNotifications = false;
    this.notificationsError = "";
    this.showEventDetailModal = false;
    this.selectedEvent = null;
    this.showPaymentModal = false;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.announcements = this.dataService.getAnnouncements();
    const allMembers = this.dataService.getMembers();
    this.members = allMembers.slice(0, 4);
    this.otherMembers = allMembers.filter((m) => {
      if (this.currentUser && m.email === this.currentUser.email) {
        return false;
      }
      return !this.members.some((r) => r.id === m.id);
    });
    this.selectedMembershipPlan = this.membershipService.getSelectedPlan();
    this.membershipService.getSelectedPlan$().subscribe((plan) => {
      this.selectedMembershipPlan = plan;
    });
    this.loadMyEvents();
    this.refreshUnreadNotificationsCount();
    this.route.queryParams.subscribe((params) => {
      const view = params["view"];
      if (view === "MEMBERSHIP_PLANS") {
        this.currentView = null;
        setTimeout(() => {
          const el = document.getElementById("membership-plans-section");
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      } else if (view) {
        this.onSelectView(view);
      }
    });
  }
  scrollToPlans() {
    const el = document.getElementById("membership-plans-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  refreshUnreadNotificationsCount() {
    this.apiService.getUnreadNotificationsCount().subscribe({
      next: (count) => {
        this.unreadCount = typeof count === "number" ? count : Number(count) || 0;
      },
      error: (error) => {
        console.error("Error loading unread notifications count:", error);
        this.unreadCount = 0;
      }
    });
  }
  openNotifications() {
    this.showNotifications = true;
    this.loadNotifications();
  }
  closeNotifications() {
    this.showNotifications = false;
    this.notificationsError = "";
  }
  loadNotifications() {
    this.isLoadingNotifications = true;
    this.notificationsError = "";
    this.apiService.getMyNotifications().subscribe({
      next: (response) => {
        this.notifications = Array.isArray(response) ? response : [];
        this.isLoadingNotifications = false;
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error("Error loading notifications:", error);
        this.notificationsError = "Failed to load notifications.";
        this.isLoadingNotifications = false;
      }
    });
  }
  markAsRead(n) {
    if (!n?.id)
      return;
    this.apiService.markNotificationRead(n.id).subscribe({
      next: () => {
        n.read = true;
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error("Error marking notification as read:", error);
      }
    });
  }
  markAllAsRead() {
    this.apiService.markAllNotificationsRead().subscribe({
      next: () => {
        this.notifications.forEach((n) => n.read = true);
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error("Error marking all notifications as read:", error);
      }
    });
  }
  onNotificationClick(n) {
    if (!n)
      return;
    if (!n.read) {
      this.markAsRead(n);
    }
    this.navigateFromNotificationLink(n.link, n.category);
  }
  navigateFromNotificationLink(link, category) {
    if (!link || typeof link !== "string" || link.trim() === "" || link.trim() === "/dashboard") {
      this.navigateFromNotificationCategory(category);
      return;
    }
    if (link.startsWith("http://") || link.startsWith("https://")) {
      window.open(link, "_blank");
      return;
    }
    const [path, queryString] = link.split("?");
    if (path && !path.startsWith("/dashboard")) {
      return;
    }
    const params = new URLSearchParams(queryString || "");
    const viewParam = params.get("view");
    if (viewParam === "MEMBERSHIP_PLANS") {
      this.currentView = null;
      this.closeNotifications();
      setTimeout(() => {
        const el = document.getElementById("membership-plans-section");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return;
    }
    if (viewParam) {
      const supported = ["HOME", "EVENTS", "DIRECTORY", "BENCH", "BLOGS", "JOBS_PROJECTS", null];
      if (supported.includes(viewParam)) {
        this.currentView = viewParam === "HOME" ? null : viewParam;
        if (this.currentView === "EVENTS") {
          this.loadAllEvents();
        }
      } else {
        this.navigateFromNotificationCategory(category);
        return;
      }
      this.closeNotifications();
      return;
    }
    this.navigateFromNotificationCategory(category);
  }
  navigateFromNotificationCategory(category) {
    const cat = (category || "").toUpperCase();
    if (cat === "EVENT") {
      this.currentView = "EVENTS";
      this.loadAllEvents();
      this.closeNotifications();
      return;
    }
    if (cat === "JOB") {
      this.currentView = "JOBS_PROJECTS";
      this.closeNotifications();
      return;
    }
    if (cat === "RESOURCES") {
      this.currentView = "BENCH";
      this.closeNotifications();
      return;
    }
    if (cat === "PAYMENT" || cat === "MEMBERSHIP") {
      this.currentView = null;
      this.closeNotifications();
      setTimeout(() => {
        const el = document.getElementById("membership-plans-section");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      return;
    }
    this.currentView = null;
    this.closeNotifications();
  }
  clearAllNotifications() {
    this.notificationsError = "";
    this.isLoadingNotifications = true;
    this.apiService.clearAllNotifications().subscribe({
      next: () => {
        this.notifications = [];
        this.unreadCount = 0;
        this.isLoadingNotifications = false;
      },
      error: (error) => {
        console.error("Error clearing notifications:", error);
        this.notificationsError = "Failed to clear notifications.";
        this.isLoadingNotifications = false;
      }
    });
  }
  loadMyEvents() {
    this.apiService.getEvents().subscribe({
      next: (response) => {
        const events = Array.isArray(response) ? response : [];
        const now = /* @__PURE__ */ new Date();
        now.setHours(0, 0, 0, 0);
        const upcoming = events.filter((e) => {
          const isRegistered = e.attendees?.some((a) => a.email === this.currentUser?.email);
          if (!isRegistered)
            return false;
          if (e.status === "CANCELLED" || e.status === "COMPLETED") {
            return false;
          }
          const now2 = /* @__PURE__ */ new Date();
          const today = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate());
          if (e.endDate) {
            const endDate = new Date(e.endDate);
            const endDay = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
            if (endDay < today) {
              return false;
            }
            if (endDay.getTime() === today.getTime() && e.endTime) {
              const [h, m] = e.endTime.split(":").map(Number);
              const endTime = new Date(today);
              endTime.setHours(h, m ?? 0, 0, 0);
              if (endTime < now2)
                return false;
            }
          } else if (e.startDate) {
            const startDate = new Date(e.startDate);
            const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
            if (startDay < today) {
              return false;
            }
          }
          return true;
        });
        this.myEvents = upcoming.map((e) => this.mapToAppEvent(e)).sort((a, b) => {
          const da = a.date ? new Date(a.date).getTime() : 0;
          const db = b.date ? new Date(b.date).getTime() : 0;
          return da - db;
        });
      },
      error: (error) => {
        console.error("Error loading events:", error);
        this.myEvents = [];
      }
    });
  }
  loadAllEvents() {
    this.isLoading = true;
    this.apiService.getEvents().subscribe({
      next: (response) => {
        const events = Array.isArray(response) ? response : [];
        const now = /* @__PURE__ */ new Date();
        now.setHours(0, 0, 0, 0);
        const publishedEvents = events.filter((e) => {
          if (e.status !== "PUBLISHED") {
            return false;
          }
          const now2 = /* @__PURE__ */ new Date();
          const today = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate());
          if (e.endDate) {
            const endDate = new Date(e.endDate);
            const endDay = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
            if (endDay < today) {
              return false;
            }
            if (endDay.getTime() === today.getTime() && e.endTime) {
              const [h, m] = e.endTime.split(":").map(Number);
              const endTime = new Date(today);
              endTime.setHours(h, m ?? 0, 0, 0);
              if (endTime < now2)
                return false;
            }
          } else if (e.startDate) {
            const startDate = new Date(e.startDate);
            const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
            if (startDay < today) {
              return false;
            }
          }
          return true;
        });
        this.allEvents = publishedEvents.map((e) => {
          let image = e.imageUrl || e.image;
          if (image === "assets/default-event.png")
            image = null;
          if (!image && e.poster) {
            image = "/api/events/poster/" + e.id;
          }
          if (!image) {
            image = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop";
          }
          return __spreadProps(__spreadValues({}, e), {
            title: e.name || e.title,
            date: e.startDate || e.date,
            location: e.location || e.venue,
            image,
            registeredCount: e.registrationCount || e.registeredCount || 0,
            totalRegisteredSeats: e.totalRegisteredSeats !== void 0 ? e.totalRegisteredSeats : e.registrationCount || e.registeredCount || 0,
            availableSeats: e.availableSeats !== void 0 ? e.availableSeats : e.capacity ? e.capacity - (e.totalRegisteredSeats || 0) : null
          });
        });
        this.filteredEvents = [...this.allEvents];
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading events:", error);
        this.allEvents = [];
        this.filteredEvents = [];
        this.isLoading = false;
      }
    });
  }
  mapToAppEvent(event) {
    let image = event.imageUrl || event.image;
    if (image === "assets/default-event.png")
      image = null;
    if (!image && event.poster) {
      image = "/api/events/poster/" + event.id;
    }
    if (!image) {
      image = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop";
    }
    return {
      id: event.id,
      title: event.name || event.title,
      date: event.startDate || event.date,
      endDate: event.endDate,
      location: event.location || event.venue,
      venueUrl: event.onlineLink || event.venueUrl,
      mode: event.mode || (event.locationType === "ONLINE" ? "ONLINE" : event.locationType === "HYBRID" ? "HYBRID" : "OFFLINE"),
      category: event.category || event.type,
      type: event.visibility === "MEMBERS_ONLY" ? "Member Only" : "Public",
      price: event.price || event.pricing?.memberPrice || event.memberPrice || 0,
      guestPrice: event.pricing?.nonMemberPrice || event.nonMemberPrice || 0,
      description: event.description || event.shortDescription,
      speaker: event.speaker || "",
      registeredCount: event.registrationCount || event.registeredCount || 0,
      totalRegisteredSeats: event.totalRegisteredSeats !== void 0 ? event.totalRegisteredSeats : event.registrationCount || event.registeredCount || 0,
      availableSeats: event.availableSeats !== void 0 ? event.availableSeats : null,
      maxCapacity: event.capacity || event.maxCapacity,
      status: event.status,
      isRegistered: event.isRegistered,
      attendees: event.attendees || [],
      image,
      // Preserve pricing information for the modal
      pricingType: event.pricingType,
      memberPrice: event.memberPrice,
      nonMemberPrice: event.nonMemberPrice,
      pricing: event.pricing
    };
  }
  onSelectView(view) {
    this.currentView = view;
    if (view === "EVENTS") {
      this.loadAllEvents();
    }
  }
  onNavigate(view) {
    this.navigate.emit(view);
  }
  onViewEvent(event) {
    if (event.id) {
      this.isLoading = true;
      this.apiService.getEventById(event.id).subscribe({
        next: (fullEvent) => {
          let image = fullEvent.imageUrl || fullEvent.image;
          if (image === "assets/default-event.png")
            image = null;
          if (!image && fullEvent.poster) {
            image = "/api/events/poster/" + fullEvent.id;
          }
          if (!image) {
            image = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop";
          }
          this.selectedEvent = __spreadProps(__spreadValues({}, fullEvent), {
            image,
            registeredCount: fullEvent.registrationCount || fullEvent.registeredCount || 0,
            totalRegisteredSeats: fullEvent.totalRegisteredSeats !== void 0 ? fullEvent.totalRegisteredSeats : fullEvent.registrationCount || fullEvent.registeredCount || 0,
            availableSeats: fullEvent.availableSeats !== void 0 ? fullEvent.availableSeats : null
          });
          this.showEventDetailModal = true;
          this.isLoading = false;
        },
        error: (error) => {
          console.error("Error loading event details:", error);
          this.selectedEvent = __spreadProps(__spreadValues({}, event), {
            registeredCount: event.registrationCount || event.registeredCount || 0,
            totalRegisteredSeats: event.totalRegisteredSeats !== void 0 ? event.totalRegisteredSeats : event.registrationCount || event.registeredCount || 0,
            availableSeats: event.availableSeats !== void 0 ? event.availableSeats : null
          });
          this.showEventDetailModal = true;
          this.isLoading = false;
        }
      });
    } else {
      this.selectedEvent = __spreadProps(__spreadValues({}, event), {
        registeredCount: event.registrationCount || event.registeredCount || 0
      });
      this.showEventDetailModal = true;
    }
  }
  closeEventDetailModal() {
    this.showEventDetailModal = false;
    this.selectedEvent = null;
  }
  onEventRegistered() {
    this.loadMyEvents();
    if (this.currentView === "EVENTS") {
      this.loadAllEvents();
    }
  }
  onEventPaymentRequest(paymentData) {
    if (paymentData && paymentData.event) {
      this.selectedEvent = __spreadProps(__spreadValues({}, paymentData.event), { quantity: paymentData.quantity || 1 });
      this.showEventDetailModal = false;
      this.showPaymentModal = true;
    }
  }
  closePaymentModal() {
    this.showPaymentModal = false;
    this.selectedEvent = null;
  }
  onPaymentSuccess(paymentResult) {
    if (paymentResult && paymentResult.type === "EVENT") {
      this.showPaymentModal = false;
      this.selectedEvent = null;
      this.loadMyEvents();
      if (this.currentView === "EVENTS") {
        this.loadAllEvents();
      }
    }
  }
  getMyResources() {
    return [];
  }
  applyFilters() {
    this.filteredEvents = this.allEvents.filter((event) => {
      const eventType = event.type || event.category || "";
      if (this.eventTypeFilter !== "All Types" && eventType !== this.eventTypeFilter) {
        return false;
      }
      if (this.dateRangeFilter !== "All Dates") {
        const eventDate = event.startDate || event.date;
        if (!eventDate) {
          return false;
        }
        const eventDateObj = new Date(eventDate);
        const now = /* @__PURE__ */ new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const dayOfWeek = today.getDay();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - dayOfWeek);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
        const startOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0, 23, 59, 59, 999);
        switch (this.dateRangeFilter) {
          case "This Week":
            if (eventDateObj < startOfWeek || eventDateObj > endOfWeek) {
              return false;
            }
            break;
          case "This Month":
            if (eventDateObj < startOfMonth || eventDateObj > endOfMonth) {
              return false;
            }
            break;
          case "Next Month":
            if (eventDateObj < startOfNextMonth || eventDateObj > endOfNextMonth) {
              return false;
            }
            break;
        }
      }
      const isFree = this.isFreeEvent(event);
      if (this.costFilter === "Free" && !isFree) {
        return false;
      }
      if (this.costFilter === "Paid" && isFree) {
        return false;
      }
      const eventName = (event.name || event.title || "").toLowerCase();
      const eventDesc = (event.description || event.shortDescription || "").toLowerCase();
      if (this.searchQuery && !eventName.includes(this.searchQuery.toLowerCase()) && !eventDesc.includes(this.searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    });
  }
  getCategoryColor(category) {
    const colors = {
      "CONFERENCE": "bg-blue-500",
      "NETWORKING": "bg-green-500",
      "WORKSHOP": "bg-purple-500",
      "WEBINAR": "bg-orange-500"
    };
    return colors[category] || "bg-slate-500";
  }
  getEventCost(event) {
    const pricingType = event.pricingType || event.pricing?.type;
    if (pricingType === "FREE" || !pricingType && !event.price && !event.memberPrice && !event.pricing?.memberPrice) {
      return "Free";
    }
    if (pricingType === "PAID" || pricingType === "DISCOUNTED") {
      const memberPrice = event.memberPrice || event.pricing?.memberPrice || 0;
      const freeMemberPrice = event.nonMemberPrice || event.pricing?.nonMemberPrice || 0;
      const isPaidMember = this.isPaidMember();
      if (isPaidMember && memberPrice > 0) {
        return `\u20B9${memberPrice.toLocaleString("en-IN")}`;
      }
      if (!isPaidMember && freeMemberPrice > 0) {
        return `\u20B9${freeMemberPrice.toLocaleString("en-IN")}`;
      }
      if (memberPrice > 0) {
        return `\u20B9${memberPrice.toLocaleString("en-IN")}`;
      }
      if (freeMemberPrice > 0) {
        return `\u20B9${freeMemberPrice.toLocaleString("en-IN")}`;
      }
    }
    const price = event.price || event.pricing?.memberPrice || 0;
    if (price === 0) {
      return "Free";
    }
    return `\u20B9${price.toLocaleString("en-IN")}`;
  }
  // Helper to determine if an event should be treated as Free or Paid
  isFreeEvent(event) {
    if (!event)
      return true;
    const pricingType = event.pricingType || event.pricing?.type;
    const memberPrice = event.memberPrice ?? event.pricing?.memberPrice ?? 0;
    const nonMemberPrice = event.nonMemberPrice ?? event.pricing?.nonMemberPrice ?? 0;
    const basePrice = event.price ?? 0;
    if (pricingType === "FREE") {
      return true;
    }
    if (pricingType === "PAID" || pricingType === "DISCOUNTED") {
      return memberPrice <= 0 && nonMemberPrice <= 0;
    }
    return basePrice === 0;
  }
  isPaidMember() {
    return !!this.currentUser && this.currentUser.type === "PREMIUM";
  }
  formatEventDateTime(event, useStartDate = true) {
    if (!event)
      return "N/A";
    const dateField = useStartDate ? event.startDate || event.date : event.endDate;
    const timeField = useStartDate ? event.startTime : event.endTime;
    if (!dateField)
      return "N/A";
    try {
      let dateStr = "";
      let timeStr = "";
      if (typeof dateField === "string") {
        dateStr = dateField.split("T")[0];
      } else {
        const date = new Date(dateField);
        if (isNaN(date.getTime()))
          return "Invalid Date";
        dateStr = date.toISOString().split("T")[0];
      }
      if (timeField) {
        if (typeof timeField === "string") {
          timeStr = timeField.split(":").slice(0, 2).join(":");
        } else {
          timeStr = String(timeField);
        }
      } else {
        if (typeof dateField === "string" && dateField.includes("T")) {
          const parts = dateField.split("T");
          if (parts[1]) {
            timeStr = parts[1].split(":").slice(0, 2).join(":");
          }
        } else if (dateField instanceof Date) {
          const hours = String(dateField.getHours()).padStart(2, "0");
          const minutes = String(dateField.getMinutes()).padStart(2, "0");
          timeStr = `${hours}:${minutes}`;
        }
      }
      if (dateStr && timeStr) {
        const combinedDateTime = /* @__PURE__ */ new Date(`${dateStr}T${timeStr}`);
        if (isNaN(combinedDateTime.getTime()))
          return "Invalid Date";
        const options = {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true
        };
        return combinedDateTime.toLocaleString("en-US", options);
      } else if (dateStr) {
        const date = new Date(dateStr);
        const options = {
          year: "numeric",
          month: "short",
          day: "numeric"
        };
        return date.toLocaleDateString("en-US", options);
      }
      return "N/A";
    } catch (error) {
      return "Invalid Date";
    }
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(MembershipService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], outputs: { navigate: "navigate", viewEvent: "viewEvent" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 105, vars: 32, consts: [[1, "dashboard-container"], [1, "flex", "items-center", "justify-between", "mb-8", "animate-fade-in"], [1, "flex", "flex-col"], [1, "text-2xl", "font-extrabold", "text-slate-900", "tracking-tight"], [1, "text-sm", "text-slate-500", "font-medium"], [1, "flex", "items-center", "gap-4"], [1, "hidden", "md:flex", "relative", "group"], ["type", "text", "placeholder", "Search everything...", 1, "w-64", "pl-10", "pr-4", "py-2", "bg-white", "border", "border-slate-200", "rounded-xl", "text-sm", "focus:ring-2", "focus:ring-indigo-500", "focus:border-transparent", "transition-all", "outline-none"], [1, "absolute", "left-3", "top-2.5", "text-slate-400", "group-focus-within:text-indigo-500", "transition-colors"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "relative", "p-2.5", "bg-white", "border", "border-slate-200", "rounded-xl", "hover:bg-slate-50", "transition-all", "group", 3, "click"], [1, "text-xl", "group-hover:scale-110", "transition-transform", "inline-block"], ["class", "absolute -top-1 -right-1 flex h-5 w-5", 4, "ngIf"], [1, "flex", "items-center", "gap-3", "pl-4", "border-l", "border-slate-200"], [1, "text-right", "hidden", "sm:block"], [1, "text-sm", "font-bold", "text-slate-900"], [1, "text-[10px]", "font-bold", "text-indigo-600", "uppercase", "tracking-widest"], [1, "avatar-container", "cursor-pointer", 3, "click"], ["alt", "Profile", 1, "avatar-img", "shadow-sm", 3, "src"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-8"], [1, "lg:col-span-3", "space-y-6", "animate-fade-in", 2, "animation-delay", "0.1s"], [1, "premium-card", "p-4", "space-y-2"], [1, "px-4", "text-[11px]", "font-bold", "text-slate-400", "uppercase", "tracking-widest", "mb-4"], [1, "nav-pill", 3, "click"], [1, "icon-box"], [1, "font-bold"], [1, "pt-6", "mt-6", "border-t", "border-slate-100"], [1, "nav-pill"], ["class", "upgrade-banner group cursor-pointer", 3, "click", 4, "ngIf"], ["class", "premium-card p-6 bg-gradient-to-br from-indigo-50 to-white overflow-hidden relative", 4, "ngIf"], [1, "lg:col-span-6", "space-y-8", "animate-fade-in", 2, "animation-delay", "0.2s"], ["class", "space-y-8", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], ["class", "animate-fade-in translate-y-4", 4, "ngIf"], ["class", "premium-card p-8", 4, "ngIf"], [1, "lg:col-span-3", "space-y-8", "animate-fade-in", 2, "animation-delay", "0.3s"], [1, "premium-card", "p-6"], [1, "flex", "items-center", "gap-2", "mb-6"], [1, "text-xl"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "space-y-6"], ["class", "flex gap-4 group cursor-pointer", 4, "ngFor", "ngForOf"], [1, "premium-card", "p-6", "overflow-hidden"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "font-bold", "text-indigo-600", "hover:underline", 3, "click"], [1, "space-y-5"], ["class", "flex items-center gap-3 group", 4, "ngFor", "ngForOf"], ["class", "mt-8 pt-6 border-t border-slate-100", 4, "ngIf"], ["class", "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in", 3, "click", 4, "ngIf"], [3, "close", "registered", "openPayment", "show", "event"], [3, "close", "success", "show", "paymentType", "event", "quantity"], [1, "absolute", "-top-1", "-right-1", "flex", "h-5", "w-5"], [1, "animate-ping", "absolute", "inline-flex", "h-full", "w-full", "rounded-full", "bg-red-400", "opacity-75"], [1, "relative", "inline-flex", "rounded-full", "h-5", "w-5", "bg-red-600", "text-white", "text-[10px]", "font-bold", "items-center", "justify-center", "border-2", "border-white"], [1, "upgrade-banner", "group", "cursor-pointer", 3, "click"], [1, "relative", "z-10"], [1, "font-bold", "text-white", "mb-1"], [1, "text-xs", "text-indigo-200", "mb-4"], [1, "inline-flex", "items-center", "text-xs", "font-bold", "bg-indigo-500", "text-white", "px-3", "py-1.5", "rounded-lg", "group-hover:bg-white", "group-hover:text-indigo-600", "transition-colors"], [1, "premium-card", "p-6", "bg-gradient-to-br", "from-indigo-50", "to-white", "overflow-hidden", "relative"], [1, "text-[10px]", "font-bold", "text-indigo-600", "uppercase", "mb-1"], [1, "mt-4", "text-sm", "font-bold", "text-indigo-600", "hover:underline", 3, "click"], [1, "absolute", "-bottom-4", "-right-4", "opacity-10", "text-6-xl", "rotate-12"], [1, "space-y-8"], [1, "quick-stats-grid"], [1, "premium-card", "stat-card"], [1, "flex", "justify-between", "items-start", "mb-2"], [1, "text-2xl"], [1, "text-[10px]", "font-bold", "text-green-600", "bg-green-50", "px-2", "py-0.5", "rounded-full"], [1, "stat-value"], [1, "stat-label"], [1, "premium-card", "p-8"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-xl", "font-bold", "text-slate-900"], [1, "text-sm", "font-bold", "text-indigo-600", "hover:text-indigo-700", 3, "click"], ["class", "flex flex-col items-center justify-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200", 4, "ngIf"], [1, "space-y-4"], ["class", "flex items-center gap-6 p-5 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group", 4, "ngFor", "ngForOf"], ["id", "membership-plans-section", 1, "premium-card", "p-8", "bg-slate-900", "overflow-hidden", "relative"], [1, "text-xl", "font-bold", "text-white", "mb-2"], [1, "text-slate-400", "text-sm", "mb-8"], [1, "absolute", "top-0", "right-0", "w-64", "h-64", "bg-indigo-500/10", "blur-3xl", "-translate-y-1/2", "translate-x-1/2"], [1, "flex", "flex-col", "items-center", "justify-center", "py-12", "bg-slate-50", "rounded-2xl", "border-2", "border-dashed", "border-slate-200"], [1, "text-4xl", "mb-4", "opacity-50"], [1, "text-slate-500", "font-medium"], [1, "mt-4", "text-sm", "font-bold", "text-indigo-600", 3, "click"], [1, "flex", "items-center", "gap-6", "p-5", "rounded-2xl", "border", "border-slate-100", "hover:border-indigo-200", "hover:bg-indigo-50/30", "transition-all", "group"], [1, "flex-shrink-0", "w-20", "h-20", "relative", "overflow-hidden", "rounded-2xl", "shadow-sm"], [1, "w-full", "h-full", "object-cover", "group-hover:scale-110", "transition-transform", "duration-500", 3, "src"], [1, "absolute", "inset-0", "bg-black/20", "flex", "flex-col", "items-center", "justify-center", "text-white"], [1, "text-[9px]", "font-black", "uppercase", "tracking-tighter"], [1, "text-xl", "font-black", "leading-none"], [1, "flex-1", "min-w-0"], [1, "font-bold", "text-slate-900", "truncate", "group-hover:text-indigo-600", "transition-colors"], [1, "text-xs", "text-slate-500", "mt-1", "flex", "items-center", "gap-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3.5", "h-3.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "px-4", "py-2", "bg-white", "border", "border-slate-200", "rounded-xl", "text-xs", "font-bold", "text-slate-700", "hover:border-indigo-500", "hover:text-indigo-600", "transition-all", 3, "click"], [1, "flex", "flex-col", "gap-2"], [1, "text-3xl", "font-extrabold", "text-slate-900", "tracking-tight"], [1, "text-slate-500"], [1, "premium-card", "p-6", "grid", "grid-cols-1", "md:grid-cols-4", "gap-4"], [1, "space-y-1.5"], [1, "px-1", "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-widest"], [1, "w-full", "bg-slate-50", "border", "border-slate-100", "rounded-xl", "px-4", "py-2.5", "text-sm", "font-medium", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "transition-all", 3, "ngModelChange", "change", "ngModel"], [1, "relative"], ["type", "text", "placeholder", "Search...", 1, "w-full", "bg-slate-50", "border", "border-slate-100", "rounded-xl", "pl-10", "pr-4", "py-2.5", "text-sm", "font-medium", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "transition-all", 3, "ngModelChange", "input", "ngModel"], [1, "absolute", "left-3.5", "top-3", "text-slate-400"], ["class", "flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100", 4, "ngIf"], ["class", "premium-card overflow-hidden", 4, "ngIf"], ["class", "premium-card p-20 text-center space-y-4", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "bg-white", "rounded-3xl", "border", "border-slate-100"], [1, "w-12", "h-12", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin", "mb-4"], [1, "text-slate-500", "font-bold", "animate-pulse"], [1, "premium-card", "overflow-hidden"], [1, "max-h-[600px]", "overflow-y-auto", "custom-scrollbar"], [1, "premium-table"], [4, "ngFor", "ngForOf"], [1, "w-12", "h-12", "rounded-xl", "overflow-hidden", "shadow-sm", "flex-shrink-0", "bg-slate-100"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "flex", "items-center", "gap-3"], [1, "font-bold", "text-slate-900", "text-sm", "leading-tight"], [1, "text-[9px]", "font-black", "text-slate-400", "uppercase", "tracking-widest", "mt-0.5"], [1, "text-sm", "font-medium", "text-slate-600"], [1, "text-sm"], [1, "px-4", "py-2", "bg-indigo-600", "text-white", "text-xs", "font-bold", "rounded-xl", "hover:bg-indigo-700", "hover:shadow-md", "transition-all", 3, "click"], [1, "premium-card", "p-20", "text-center", "space-y-4"], [1, "text-5xl", "block"], [1, "text-slate-500", "max-w-xs", "mx-auto"], [1, "text-sm", "font-bold", "text-indigo-600", "hover:underline", 3, "click"], [1, "animate-fade-in", "translate-y-4"], [3, "showPostButton", "isAdminView"], [3, "navigate", "openPayment"], [1, "flex", "gap-2"], [1, "px-4", "py-2", "bg-indigo-50", "text-indigo-600", "text-xs", "font-bold", "rounded-xl", "hover:bg-indigo-100", "transition-colors", 3, "click"], [1, "px-4", "py-2", "bg-emerald-50", "text-emerald-600", "text-xs", "font-bold", "rounded-xl", "hover:bg-emerald-100", "transition-colors", 3, "click"], [1, "overflow-x-auto"], [4, "ngIf"], [1, "font-bold", "text-slate-900"], [1, "text-[10px]", "text-slate-400"], [1, "px-2.5", "py-1", "bg-emerald-100", "text-emerald-700", "text-[10px]", "font-bold", "rounded-full"], [1, "text-right"], [1, "text-red-500", "hover:text-red-700", "font-bold", "text-xs", "uppercase", "tracking-widest"], ["colspan", "3", 1, "py-8", "text-center", "text-slate-400", "italic", "text-sm"], [1, "flex", "gap-4", "group", "cursor-pointer"], [1, "flex-shrink-0", "w-1.5", "h-10", "rounded-full", "mt-1", 3, "ngClass"], [1, "text-sm", "font-bold", "text-slate-800", "leading-snug", "group-hover:text-indigo-600", "transition-colors"], [1, "text-[10px]", "font-bold", "text-slate-400", "mt-1", "block", "uppercase"], [1, "flex", "items-center", "gap-3", "group"], [1, "w-10", "h-10", "rounded-xl", "bg-slate-100", "object-cover", "border", "border-slate-100", 3, "src"], [1, "absolute", "-bottom-1", "-right-1", "w-3", "h-3", "bg-green-500", "border-2", "border-white", "rounded-full"], [1, "text-sm", "font-bold", "text-slate-900", "truncate", "group-hover:text-indigo-600", "transition-colors"], [1, "text-[10px]", "font-bold", "text-slate-400", "truncate", "uppercase"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-xl", "bg-slate-50", "text-slate-400", "hover:bg-indigo-50", "hover:text-indigo-600", "transition-all"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4v16m8-8H4"], [1, "mt-8", "pt-6", "border-t", "border-slate-100"], [1, "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-widest", "mb-4"], [1, "max-h-60", "overflow-y-auto", "custom-scrollbar", "pr-2", "space-y-4"], ["class", "flex items-center gap-3", 4, "ngFor", "ngForOf"], [1, "w-8", "h-8", "rounded-lg", "bg-slate-100", "object-cover", "ring-1", "ring-slate-100", 3, "src"], [1, "text-[11px]", "font-bold", "text-slate-800", "truncate"], [1, "text-[9px]", "font-bold", "text-slate-400", "truncate", "uppercase"], [1, "fixed", "inset-0", "z-[100]", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/40", "backdrop-blur-sm", "animate-fade-in", 3, "click"], [1, "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-xl", "max-h-[85vh]", "overflow-hidden", "flex", "flex-col", "scale-100", "transition-transform", 3, "click"], [1, "p-8", "border-b", "border-slate-100", "flex", "items-center", "justify-between", "bg-gradient-to-r", "from-slate-50", "to-white"], [1, "text-2xl", "font-black", "text-slate-900", "tracking-tight"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-2xl", "bg-white", "border", "border-slate-200", "text-slate-400", "hover:text-slate-900", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "flex-1", "overflow-y-auto", "p-8", "space-y-4", "custom-scrollbar"], ["class", "flex flex-col items-center justify-center py-20", 4, "ngIf"], ["class", "text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-100", 4, "ngIf"], ["class", "group relative flex items-start gap-4 p-5 rounded-2xl border transition-all cursor-pointer", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "p-8", "border-t", "border-slate-100", "flex", "items-center", "justify-between", "bg-slate-50"], [1, "text-xs", "font-black", "text-indigo-600", "uppercase", "tracking-widest", "hover:underline", 3, "click"], [1, "text-xs", "font-black", "text-red-500", "uppercase", "tracking-widest", "hover:underline", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20"], [1, "w-10", "h-10", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "text-center", "py-20", "bg-slate-50", "rounded-3xl", "border-2", "border-dashed", "border-slate-100"], [1, "text-4xl", "block", "mb-4", "opacity-50"], [1, "text-slate-500", "font-bold"], [1, "group", "relative", "flex", "items-start", "gap-4", "p-5", "rounded-2xl", "border", "transition-all", "cursor-pointer", 3, "click", "ngClass"], [1, "flex-shrink-0", "w-12", "h-12", "flex", "items-center", "justify-center", "rounded-xl", "bg-white", "border", "border-slate-100", "shadow-sm"], [1, "flex-1"], [1, "flex", "items-center", "gap-2", "mb-1"], ["class", "text-[9px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded-md", 4, "ngIf"], [1, "text-xs", "text-slate-600", "leading-relaxed"], [1, "text-[9px]", "font-bold", "text-slate-400", "mt-3", "uppercase"], [1, "text-[9px]", "font-black", "bg-indigo-600", "text-white", "px-2", "py-0.5", "rounded-md"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Here's what's happening in your network today.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
        \u0275\u0275element(9, "input", 7);
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 9);
        \u0275\u0275element(12, "path", 10);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "button", 11);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_13_listener() {
          return ctx.openNotifications();
        });
        \u0275\u0275elementStart(14, "span", 12);
        \u0275\u0275text(15, "\u{1F514}");
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, DashboardComponent_span_16_Template, 4, 1, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 14)(18, "div", 15)(19, "p", 16);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p", 17);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 18);
        \u0275\u0275listener("click", function DashboardComponent_Template_div_click_23_listener() {
          return ctx.onNavigate("PROFILE_EDIT");
        });
        \u0275\u0275element(24, "img", 19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(25, "div", 20)(26, "aside", 21)(27, "div", 22)(28, "h3", 23);
        \u0275\u0275text(29, "Main Menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 24);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_30_listener() {
          return ctx.onSelectView(null);
        });
        \u0275\u0275elementStart(31, "div", 25);
        \u0275\u0275text(32, "\u{1F3E0}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 26);
        \u0275\u0275text(34, "Overview");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "button", 24);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_35_listener() {
          return ctx.onSelectView("EVENTS");
        });
        \u0275\u0275elementStart(36, "div", 25);
        \u0275\u0275text(37, "\u{1F4C5}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 26);
        \u0275\u0275text(39, "Events & Networking");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "button", 24);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_40_listener() {
          return ctx.onSelectView("BENCH");
        });
        \u0275\u0275elementStart(41, "div", 25);
        \u0275\u0275text(42, "\u{1F4BC}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 26);
        \u0275\u0275text(44, "Bench Resources");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "button", 24);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_45_listener() {
          return ctx.onSelectView("JOBS_PROJECTS");
        });
        \u0275\u0275elementStart(46, "div", 25);
        \u0275\u0275text(47, "\u{1F680}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "span", 26);
        \u0275\u0275text(49, "Jobs & Projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "button", 24);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_50_listener() {
          return ctx.onSelectView("BLOGS");
        });
        \u0275\u0275elementStart(51, "div", 25);
        \u0275\u0275text(52, "\u{1F4DD}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "span", 26);
        \u0275\u0275text(54, "Insights & Blogs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "button", 24);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_55_listener() {
          return ctx.onNavigate("DIRECTORY");
        });
        \u0275\u0275elementStart(56, "div", 25);
        \u0275\u0275text(57, "\u{1F465}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span", 26);
        \u0275\u0275text(59, "Member Directory");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 27)(61, "h3", 23);
        \u0275\u0275text(62, "Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "button", 28)(64, "div", 25);
        \u0275\u0275text(65, "\u2699\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "span", 26);
        \u0275\u0275text(67, "Account Settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "button", 28)(69, "div", 25);
        \u0275\u0275text(70, "\u2753");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "span", 26);
        \u0275\u0275text(72, "Help Center");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(73, DashboardComponent_div_73_Template, 8, 0, "div", 29)(74, DashboardComponent_div_74_Template, 10, 1, "div", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "main", 31);
        \u0275\u0275template(76, DashboardComponent_div_76_Template, 37, 4, "div", 32)(77, DashboardComponent_div_77_Template, 54, 7, "div", 33)(78, DashboardComponent_div_78_Template, 2, 2, "div", 34)(79, DashboardComponent_div_79_Template, 2, 0, "div", 34)(80, DashboardComponent_section_80_Template, 14, 2, "section", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "aside", 36)(82, "section", 37)(83, "div", 38)(84, "span", 39);
        \u0275\u0275text(85, "\u{1F4E2}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "h2", 40);
        \u0275\u0275text(87, "Announcements");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 41);
        \u0275\u0275template(89, DashboardComponent_div_89_Template, 7, 3, "div", 42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "section", 43)(91, "div", 44)(92, "div", 45)(93, "span", 39);
        \u0275\u0275text(94, "\u2728");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "h2", 40);
        \u0275\u0275text(96, "Connections");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "button", 46);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_97_listener() {
          return ctx.onNavigate("DIRECTORY");
        });
        \u0275\u0275text(98, "Directory");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 47);
        \u0275\u0275template(100, DashboardComponent_div_100_Template, 12, 3, "div", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275template(101, DashboardComponent_div_101_Template, 5, 1, "div", 49);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(102, DashboardComponent_div_102_Template, 20, 3, "div", 50);
        \u0275\u0275elementStart(103, "app-event-detail-modal", 51);
        \u0275\u0275listener("close", function DashboardComponent_Template_app_event_detail_modal_close_103_listener() {
          return ctx.closeEventDetailModal();
        })("registered", function DashboardComponent_Template_app_event_detail_modal_registered_103_listener() {
          return ctx.onEventRegistered();
        })("openPayment", function DashboardComponent_Template_app_event_detail_modal_openPayment_103_listener($event) {
          return ctx.onEventPaymentRequest($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "app-payment-modal", 52);
        \u0275\u0275listener("close", function DashboardComponent_Template_app_payment_modal_close_104_listener() {
          return ctx.closePaymentModal();
        })("success", function DashboardComponent_Template_app_payment_modal_success_104_listener($event) {
          return ctx.onPaymentSuccess($event);
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" Welcome back, ", ctx.currentUser == null ? null : ctx.currentUser.name == null ? null : (tmp_0_0 = ctx.currentUser.name.split(" ")) == null ? null : tmp_0_0.at(0), "! \u{1F44B} ");
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.unreadCount > 0);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.currentUser == null ? null : ctx.currentUser.type, " MEMBER");
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.currentUser == null ? null : ctx.currentUser.image, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", !ctx.currentView);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentView === "EVENTS");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentView === "BENCH");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentView === "JOBS_PROJECTS");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentView === "BLOGS");
        \u0275\u0275advance(23);
        \u0275\u0275property("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.type) === "REGULAR");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedMembershipPlan);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.currentView);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView === "EVENTS");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView === "JOBS_PROJECTS");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentView === "BENCH");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (!ctx.currentView || ctx.currentView !== "EVENTS" && ctx.currentView !== "JOBS_PROJECTS") && (ctx.currentUser == null ? null : ctx.currentUser.type) === "PREMIUM");
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.announcements);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.members);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.otherMembers.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNotifications);
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.showEventDetailModal)("event", ctx.selectedEvent);
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.showPaymentModal)("paymentType", ctx.selectedEvent && (ctx.selectedEvent.pricingType === "PAID" || ctx.selectedEvent.pricingType === "DISCOUNTED" || ctx.selectedEvent.memberPrice && ctx.selectedEvent.memberPrice > 0 || ctx.selectedEvent.nonMemberPrice && ctx.selectedEvent.nonMemberPrice > 0 || ctx.selectedEvent.price && ctx.selectedEvent.price > 0) ? "EVENT" : "MEMBERSHIP")("event", ctx.selectedEvent)("quantity", (ctx.selectedEvent == null ? null : ctx.selectedEvent.quantity) || 1);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, EventDetailModalComponent, JobListingsComponent, BenchResourcesComponent, MembershipPlansComponent, PaymentModalComponent], styles: ['\n\n[_nghost-%COMP%] {\n  --primary-color: #6366f1;\n  --primary-hover: #4f46e5;\n  --bg-color: #f8fafc;\n  --surface-color: #ffffff;\n  --text-main: #0f172a;\n  --text-muted: #64748b;\n  --border-color: #e2e8f0;\n  --accent-color: #8b5cf6;\n  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --radius-xl: 1rem;\n  --radius-2xl: 1.5rem;\n  display: block;\n  min-height: 100vh;\n  background-color: var(--bg-color);\n  color: var(--text-main);\n  font-family:\n    "Inter",\n    system-ui,\n    -apple-system,\n    sans-serif;\n}\n.dashboard-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.glass-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.premium-card[_ngcontent-%COMP%] {\n  background: var(--surface-color);\n  border-radius: var(--radius-2xl);\n  border: 1px solid var(--border-color);\n  box-shadow: var(--shadow-sm);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.premium-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n}\n.nav-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1.25rem;\n  border-radius: var(--radius-xl);\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 0.2s;\n  color: var(--text-muted);\n  border: 1px solid transparent;\n  width: 100%;\n  text-align: left;\n  background: transparent;\n}\n.nav-pill[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.05);\n  color: var(--primary-color);\n}\n.nav-pill.active[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--primary-color);\n  border-color: var(--border-color);\n  box-shadow: var(--shadow-sm);\n}\n.icon-box[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  background: var(--bg-color);\n  font-size: 1.1rem;\n  transition: all 0.2s;\n}\n.active[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n}\n.profile-header[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.profile-header[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 150px;\n  height: 150px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  border-radius: 50%;\n  transform: translate(30%, -30%);\n}\n.avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 3px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-color),\n      var(--accent-color));\n  border-radius: 50%;\n}\n.avatar-img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  border: 3px solid white;\n  object-fit: cover;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.badge-premium[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: white;\n}\n.badge-regular[_ngcontent-%COMP%] {\n  background: var(--bg-color);\n  color: var(--text-muted);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.animate-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out forwards;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border-color);\n  border-radius: 10px;\n}\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--text-muted);\n}\n  .premium-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n}\n  .premium-table th {\n  background: #f1f5f9;\n  color: var(--text-muted);\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  padding: 1rem 1.5rem;\n  text-align: left;\n}\n  .premium-table td {\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid var(--border-color);\n  transition: background 0.2s;\n  background: white;\n}\n  .premium-table tr:hover td {\n  background: rgba(99, 102, 241, 0.02);\n}\n.quick-stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n.upgrade-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b,\n      #0f172a);\n  color: white;\n  border-radius: var(--radius-2xl);\n  padding: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  overflow: hidden;\n  position: relative;\n}\n.upgrade-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.2) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\pages\\dashboard\\dashboard.component.ts", lineNumber: 37 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-AZA7EBJC.js.map
