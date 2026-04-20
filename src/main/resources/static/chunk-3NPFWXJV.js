import {
  MembershipService
} from "./chunk-ZRHEMPKX.js";
import {
  AuthService
} from "./chunk-HS4BPM7A.js";
import {
  Router
} from "./chunk-X7FTYMHV.js";
import {
  ToastrService
} from "./chunk-KKJ3RDO7.js";
import {
  ApiService,
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  SlicePipe,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CRF7CKPV.js";

// src/app/pages/membership-plans/membership-plans.component.ts
var _c0 = () => [];
function MembershipPlansComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading plans...");
    \u0275\u0275elementEnd()();
  }
}
function MembershipPlansComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span");
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
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No plans available at the moment.");
    \u0275\u0275elementEnd()();
  }
}
function MembershipPlansComponent_div_14_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "span", 46);
    \u0275\u0275text(2, " ACTIVE PLAN ");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_14_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1, " \u2605 Most Popular ");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_14_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, " \u{1F451} Best Value ");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_14_div_1_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, "Free");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_14_div_1_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "\u20B9");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_14_div_1_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, plan_r3.price, "1.0-0"));
  }
}
function MembershipPlansComponent_div_14_div_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("/ ", plan_r3.durationMonths > 1 ? plan_r3.durationMonths + " months" : "year", "");
  }
}
function MembershipPlansComponent_div_14_div_1_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1, "No credit card required");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_14_div_1_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1, "Perfect for growing professionals");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_14_div_1_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1, "Unlock everything the community offers");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_14_div_1_li_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 53)(1, "span", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 55);
    \u0275\u0275element(3, "polyline", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.getFeatureLabel(f_r4));
  }
}
function MembershipPlansComponent_div_14_div_1_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_14_div_1_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const plan_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showFeatures(plan_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" + ", (plan_r3.features.length || 0) - 5, " more features \u2192 ");
  }
}
function MembershipPlansComponent_div_14_div_1_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713 Current Plan");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_14_div_1_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getPlanActionLabel(plan_r3));
  }
}
function MembershipPlansComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22)(2, "div", 23);
    \u0275\u0275template(3, MembershipPlansComponent_div_14_div_1_div_3_Template, 3, 0, "div", 24)(4, MembershipPlansComponent_div_14_div_1_div_4_Template, 2, 0, "div", 25)(5, MembershipPlansComponent_div_14_div_1_div_5_Template, 2, 0, "div", 26);
    \u0275\u0275elementStart(6, "div", 27)(7, "div", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 30);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 31)(14, "div", 32);
    \u0275\u0275template(15, MembershipPlansComponent_div_14_div_1_span_15_Template, 2, 0, "span", 33)(16, MembershipPlansComponent_div_14_div_1_span_16_Template, 2, 0, "span", 34)(17, MembershipPlansComponent_div_14_div_1_span_17_Template, 3, 4, "span", 33)(18, MembershipPlansComponent_div_14_div_1_span_18_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, MembershipPlansComponent_div_14_div_1_p_19_Template, 2, 0, "p", 36)(20, MembershipPlansComponent_div_14_div_1_p_20_Template, 2, 0, "p", 36)(21, MembershipPlansComponent_div_14_div_1_p_21_Template, 2, 0, "p", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 37)(23, "span");
    \u0275\u0275text(24, "What's included");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 38)(26, "ul");
    \u0275\u0275template(27, MembershipPlansComponent_div_14_div_1_li_27_Template, 6, 1, "li", 39);
    \u0275\u0275pipe(28, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, MembershipPlansComponent_div_14_div_1_button_29_Template, 2, 1, "button", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 41)(31, "button", 42);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_14_div_1_Template_button_click_31_listener() {
      const plan_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showFeatures(plan_r3));
    });
    \u0275\u0275text(32, " View All Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "button", 43);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_14_div_1_Template_button_click_33_listener() {
      const plan_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startSelectPlan(plan_r3));
    });
    \u0275\u0275template(34, MembershipPlansComponent_div_14_div_1_span_34_Template, 2, 0, "span", 44)(35, MembershipPlansComponent_div_14_div_1_span_35_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plan_r3 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r6 * 0.1 + "s");
    \u0275\u0275classProp("plan-card--free", plan_r3.price === 0)("plan-card--regular", plan_r3.price > 0 && plan_r3.price <= 3500)("plan-card--gold", plan_r3.price > 3500)("plan-card--active", ctx_r0.isCurrentPlan(plan_r3));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isCurrentPlan(plan_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isCurrentPlan(plan_r3) && plan_r3.price > 0 && plan_r3.price <= 3500);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isCurrentPlan(plan_r3) && plan_r3.price > 3500);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", plan_r3.price === 0 ? "\u{1F331}" : plan_r3.price > 3500 ? "\u{1F451}" : "\u{1F48E}", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", plan_r3.type, " Membership");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", plan_r3.price === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r3.price > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r3.price > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r3.price > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r3.price === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r3.price > 0 && plan_r3.price <= 3500);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r3.price > 3500);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(28, 30, plan_r3.features || \u0275\u0275pureFunction0(34, _c0), 0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (plan_r3.features.length || 0) > 5);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("plan-card__btn--disabled", !ctx_r0.canSelectPlan(plan_r3));
    \u0275\u0275property("disabled", !ctx_r0.canSelectPlan(plan_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isCurrentPlan(plan_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isCurrentPlan(plan_r3));
  }
}
function MembershipPlansComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275template(1, MembershipPlansComponent_div_14_div_1_Template, 36, 35, "div", 20);
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
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275element(1, "div", 76);
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_15_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80)(2, "div", 81);
    \u0275\u0275text(3, " \u2713 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 82)(5, "div", 83)(6, "span", 84);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 85);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 86);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const feature_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(feature_r8.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getFeatureCategoryColor(feature_r8.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r8.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r8.description || "Access to " + feature_r8.name + " tools and services.");
  }
}
function MembershipPlansComponent_div_15_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, MembershipPlansComponent_div_15_div_16_div_1_Template, 12, 4, "div", 78);
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
    \u0275\u0275elementStart(0, "div", 87)(1, "p", 88);
    \u0275\u0275text(2, "No specified features for this plan.");
    \u0275\u0275elementEnd()();
  }
}
function MembershipPlansComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_15_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFeaturesModal());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_15_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 60)(3, "div", 61)(4, "div", 62)(5, "h3", 63);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 64);
    \u0275\u0275text(8, "Everything included in this plan");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 65);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_15_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeFeaturesModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 66);
    \u0275\u0275element(11, "path", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "span", 68);
    \u0275\u0275text(13, "\u{1F48E}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 69);
    \u0275\u0275template(15, MembershipPlansComponent_div_15_div_15_Template, 2, 0, "div", 70)(16, MembershipPlansComponent_div_15_div_16_Template, 2, 1, "div", 71)(17, MembershipPlansComponent_div_15_div_17_Template, 3, 0, "div", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 73)(19, "button", 74);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_15_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r7);
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
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90)(2, "div", 91)(3, "div", 92);
    \u0275\u0275text(4, " \u{1F680} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3", 93);
    \u0275\u0275text(6, "Confirm Your Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 94);
    \u0275\u0275text(8, "Ready to upgrade your experience?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 95)(10, "div", 96)(11, "span", 97);
    \u0275\u0275text(12, "Plan Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 98);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 99)(16, "span");
    \u0275\u0275text(17, "DURATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 100)(21, "span", 97);
    \u0275\u0275text(22, "Total to Pay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 101);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 102)(27, "button", 103);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_16_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmSelection());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 104);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_16_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r9);
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
    \u0275\u0275elementStart(0, "div", 117);
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
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 119)(2, "div", 122);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 123);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 124);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "span", 98);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 125);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 126);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 120)(21, "button", 127);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_div_13_tr_17_Template_button_click_21_listener() {
      const p_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadInvoice(p_r12.id, p_r12.invoiceNumber));
    });
    \u0275\u0275text(22, " Download ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 8, p_r12.paidDate || p_r12.createdAt, "MMM d, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, p_r12.paidDate || p_r12.createdAt, "h:mm a"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r12.planName || "Legacy Plan");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(14, 14, p_r12.amount, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap((p_r12.status || "").toUpperCase() === "PAID" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r12.status || "PENDING", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.paymentMethod || "Razorpay");
  }
}
function MembershipPlansComponent_div_17_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "table", 118)(2, "thead")(3, "tr")(4, "th", 119);
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
    \u0275\u0275elementStart(14, "th", 120);
    \u0275\u0275text(15, "INVOICE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, MembershipPlansComponent_div_17_div_13_tr_17_Template, 23, 17, "tr", 121);
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
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275element(1, "div", 76);
    \u0275\u0275elementEnd();
  }
}
function MembershipPlansComponent_div_17_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129)(1, "span", 130);
    \u0275\u0275text(2, "\u{1F9FE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 131);
    \u0275\u0275text(4, "No payment records found.");
    \u0275\u0275elementEnd()();
  }
}
function MembershipPlansComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePaymentHistory());
    });
    \u0275\u0275elementStart(1, "div", 106);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 107)(3, "div")(4, "h3", 93);
    \u0275\u0275text(5, "Payment History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 108);
    \u0275\u0275text(7, "Tracking all your plan subscriptions and transactions.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 109);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closePaymentHistory());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 66);
    \u0275\u0275element(10, "path", 67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 110);
    \u0275\u0275template(12, MembershipPlansComponent_div_17_div_12_Template, 2, 1, "div", 111)(13, MembershipPlansComponent_div_17_div_13_Template, 18, 1, "div", 44)(14, MembershipPlansComponent_div_17_div_14_Template, 2, 0, "div", 112)(15, MembershipPlansComponent_div_17_div_15_Template, 5, 0, "div", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 114)(17, "button", 115);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadPaymentHistory());
    });
    \u0275\u0275text(18, " REFRESH ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 116);
    \u0275\u0275listener("click", function MembershipPlansComponent_div_17_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r10);
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
  constructor(apiService, membershipService, authService, toastr, router) {
    this.apiService = apiService;
    this.membershipService = membershipService;
    this.authService = authService;
    this.toastr = toastr;
    this.router = router;
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
    this.selectedPlan = this.currentUser?.currentPlanId ? { id: this.currentUser.currentPlanId } : this.membershipService.getSelectedPlan();
    this.loadPlans();
    this.membershipService.getSelectedPlan$().subscribe((plan) => {
      if (!this.currentUser?.currentPlanId) {
        this.selectedPlan = plan;
      }
    });
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      this.selectedPlan = user?.currentPlanId ? { id: user.currentPlanId } : this.selectedPlan;
    });
  }
  loadPlans() {
    this.isLoading = true;
    this.errorMessage = "";
    this.apiService.getPublicPlans().subscribe({
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
  getFeatureLabel(feature) {
    if (feature && typeof feature === "object") {
      return feature.name || feature.description || "";
    }
    return String(feature || "");
  }
  isCurrentPlan(plan) {
    const currentPlanId = this.currentUser?.currentPlanId || this.selectedPlan?.id;
    return !!currentPlanId && !!plan.id && currentPlanId === plan.id;
  }
  getPlanLevel(plan) {
    if (plan.level != null && plan.level > 0) {
      return plan.level;
    }
    const price = plan.price || 0;
    if (price <= 0)
      return 1;
    if (price <= 3500)
      return 2;
    if (price <= 7e3)
      return 3;
    return 4;
  }
  getCurrentPlanLevel() {
    if (!this.currentUser)
      return 0;
    if (this.currentUser.currentPlanId && (!this.currentUser.currentPlanLevel || this.currentUser.currentPlanLevel === 0)) {
      const current = this.plans.find((p) => p.id === this.currentUser?.currentPlanId);
      if (current)
        return this.getPlanLevel(current);
    }
    return this.currentUser.currentPlanLevel || 0;
  }
  canSelectPlan(plan) {
    if (!this.currentUser)
      return true;
    const isAdmin = this.currentUser.role === "admin" || this.currentUser.type === "ADMIN";
    if (isAdmin)
      return !this.isCurrentPlan(plan);
    if (this.isCurrentPlan(plan)) {
      return false;
    }
    const currentLevel = this.getCurrentPlanLevel();
    if (!currentLevel || currentLevel === 0) {
      return true;
    }
    return this.getPlanLevel(plan) > currentLevel;
  }
  getPlanActionLabel(plan) {
    if (this.isCurrentPlan(plan)) {
      return "Current Plan";
    }
    if (this.canSelectPlan(plan)) {
      return this.getCurrentPlanLevel() ? "Upgrade Plan" : "Choose Plan";
    }
    return "Not Allowed";
  }
  startSelectPlan(plan) {
    if (!this.canSelectPlan(plan)) {
      return;
    }
    this.confirmingPlan = plan;
  }
  cancelSelection() {
    this.confirmingPlan = null;
    this.isProcessing = false;
  }
  resolvePlanId(plan) {
    const raw = plan?.id ?? plan?.planId;
    if (raw == null || raw === "")
      return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }
  showFeatures(plan) {
    const planId = this.resolvePlanId(plan);
    if (planId == null) {
      this.toastr.warning("This plan has no detail record yet. Try again after plans reload.", "Unavailable");
      return;
    }
    this.showingFeaturesForPlan = plan;
    this.isLoadingFeatures = true;
    this.planFeatures = [];
    this.apiService.getPlanFeaturesByPlan(planId).subscribe({
      next: (response) => {
        let list = Array.isArray(response) ? response : [];
        if (list.length === 0 && plan.features?.length) {
          list = (plan.features || []).map((f, idx) => ({
            id: idx,
            code: "",
            name: typeof f === "string" ? f : f?.name || f?.description || "Feature",
            description: typeof f === "object" ? f?.description || "" : "",
            category: typeof f === "object" && f?.category ? f.category : "PREMIUM",
            isActive: true
          }));
        }
        this.planFeatures = list;
        this.isLoadingFeatures = false;
      },
      error: (error) => {
        console.error("Error loading plan features:", error);
        const msg = error?.status === 403 || error?.status === 401 ? "Please sign in again to load full plan details." : "Could not load full plan details. Showing summary from the card where available.";
        this.toastr.error(msg, "Plan details");
        let list = [];
        if (plan.features?.length) {
          list = (plan.features || []).map((f, idx) => ({
            id: idx,
            code: "",
            name: typeof f === "string" ? f : f?.name || f?.description || "Feature",
            description: typeof f === "object" ? f?.description || "" : "",
            category: typeof f === "object" && f?.category ? f.category : "PREMIUM",
            isActive: true
          }));
        }
        this.planFeatures = list;
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
    this.apiService.selectPlan(planId).subscribe({
      next: () => {
        this.membershipService.setSelectedPlan(plan);
        this.authService.refreshCurrentUserProfile().subscribe({
          next: () => {
            this.isProcessing = false;
            this.confirmingPlan = null;
            this.toastr.success("Membership plan selected successfully.", "Success");
            this.router.navigate(["/dashboard"]);
          },
          error: () => {
            this.isProcessing = false;
            this.confirmingPlan = null;
            this.toastr.success("Membership plan selected successfully.", "Success");
            this.router.navigate(["/dashboard"]);
          }
        });
      },
      error: (error) => {
        console.error("Error selecting membership plan:", error);
        this.isProcessing = false;
        this.toastr.error(error?.error?.error || error?.error?.message || "Unable to select membership plan.", "Error");
      }
    });
  }
  static {
    this.\u0275fac = function MembershipPlansComponent_Factory(t) {
      return new (t || _MembershipPlansComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(MembershipService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MembershipPlansComponent, selectors: [["app-membership-plans"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 7, consts: [[1, "plans-wrapper", "animate-fade-in"], [1, "plans-header"], [1, "plans-title"], [1, "plans-subtitle"], ["type", "button", 1, "history-btn", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["class", "plans-loading", 4, "ngIf"], ["class", "plans-error", 4, "ngIf"], ["class", "plans-empty", 4, "ngIf"], ["class", "plans-grid", 4, "ngIf"], ["class", "fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in", 3, "click", 4, "ngIf"], ["class", "fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in", 4, "ngIf"], ["class", "fixed inset-0 z-[115] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in", 3, "click", 4, "ngIf"], [1, "plans-loading"], [1, "plans-spinner"], [1, "plans-error"], [1, "plans-empty"], [1, "plans-empty-icon"], [1, "plans-grid"], ["class", "plan-card", 3, "plan-card--free", "plan-card--regular", "plan-card--gold", "plan-card--active", "animation-delay", 4, "ngFor", "ngForOf"], [1, "plan-card"], [1, "plan-card__orb", "plan-card__orb--1"], [1, "plan-card__orb", "plan-card__orb--2"], ["class", "plan-badge plan-badge--active", 4, "ngIf"], ["class", "plan-badge plan-badge--popular", 4, "ngIf"], ["class", "plan-badge plan-badge--premium", 4, "ngIf"], [1, "plan-card__header"], [1, "plan-card__icon"], [1, "plan-card__name"], [1, "plan-card__type"], [1, "plan-card__pricing"], [1, "plan-card__price-row"], ["class", "plan-card__price", 4, "ngIf"], ["class", "plan-card__currency", 4, "ngIf"], ["class", "plan-card__period", 4, "ngIf"], ["class", "plan-card__price-note", 4, "ngIf"], [1, "plan-card__divider"], [1, "plan-card__features"], ["class", "plan-card__feature", 4, "ngFor", "ngForOf"], ["class", "plan-card__more-link", 3, "click", 4, "ngIf"], [1, "plan-card__actions"], ["type", "button", 1, "plan-card__btn", "plan-card__btn--details", 3, "click"], ["type", "button", 1, "plan-card__btn", "plan-card__btn--cta", 3, "click", "disabled"], [4, "ngIf"], [1, "plan-badge", "plan-badge--active"], [1, "plan-badge__dot"], [1, "plan-badge", "plan-badge--popular"], [1, "plan-badge", "plan-badge--premium"], [1, "plan-card__price"], [1, "plan-card__currency"], [1, "plan-card__period"], [1, "plan-card__price-note"], [1, "plan-card__feature"], [1, "plan-card__check"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "20 6 9 17 4 12"], [1, "plan-card__more-link", 3, "click"], [1, "fixed", "inset-0", "z-[110]", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-sm", "animate-fade-in", 3, "click"], [1, "bg-white", "rounded-[2rem]", "shadow-2xl", "w-full", "max-w-2xl", "max-h-[85vh]", "overflow-hidden", "flex", "flex-col", 3, "click"], [1, "p-10", "border-b", "border-slate-100", "bg-gradient-to-br", "from-indigo-50", "to-white", "relative", "overflow-hidden"], [1, "relative", "z-10", "flex", "items-center", "justify-between"], [1, "space-y-1"], [1, "text-3xl", "font-black", "text-slate-900", "tracking-tight"], [1, "text-xs", "font-bold", "text-indigo-600", "uppercase", "tracking-widest"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-2xl", "bg-white", "text-slate-400", "hover:text-slate-900", "shadow-sm", "transition-all", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "absolute", "right-0", "bottom-0", "text-9xl", "opacity-5", "translate-y-1/2", "translate-x-1/4"], [1, "flex-1", "overflow-y-auto", "p-10", "space-y-4", "custom-scrollbar"], ["class", "flex flex-col items-center justify-center py-20", 4, "ngIf"], ["class", "grid grid-cols-1 gap-4", 4, "ngIf"], ["class", "text-center py-20", 4, "ngIf"], [1, "p-10", "border-t", "border-slate-100", "bg-slate-50", "flex", "justify-end"], [1, "px-8", "py-4", "bg-indigo-600", "text-white", "rounded-2xl", "text-xs", "font-black", "uppercase", "tracking-widest", "hover:bg-slate-900", "transition-all", "shadow-lg", "active:scale-95", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20"], [1, "w-12", "h-12", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "grid", "grid-cols-1", "gap-4"], ["class", "p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all group", 4, "ngFor", "ngForOf"], [1, "p-6", "bg-slate-50", "rounded-2xl", "border", "border-slate-100", "hover:border-indigo-200", "transition-all", "group"], [1, "flex", "items-start", "gap-4"], [1, "flex-shrink-0", "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-xl", "bg-white", "border", "border-slate-100", "text-emerald-500", "font-bold", "group-hover:bg-emerald-500", "group-hover:text-white", "transition-all"], [1, "flex-1"], [1, "flex", "items-center", "gap-3", "mb-1"], [1, "text-sm", "font-black", "text-slate-900", "uppercase", "tracking-wide"], [1, "text-[9px]", "font-black", "px-2", "py-0.5", "rounded-md", "uppercase", "tracking-widest", "text-white", 3, "ngClass"], [1, "text-xs", "text-slate-500", "font-medium", "leading-relaxed"], [1, "text-center", "py-20"], [1, "text-slate-400", "font-bold", "italic"], [1, "fixed", "inset-0", "z-[120]", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-sm", "animate-fade-in"], [1, "bg-white", "rounded-[2rem]", "shadow-2xl", "w-full", "max-w-md", "p-10"], [1, "text-center", "mb-10"], [1, "w-16", "h-16", "bg-blue-50", "text-blue-600", "rounded-3xl", "flex", "items-center", "justify-center", "mx-auto", "mb-6", "text-3xl"], [1, "text-2xl", "font-black", "text-slate-900", "tracking-tight"], [1, "text-sm", "text-slate-500", "mt-2", "font-medium"], [1, "bg-slate-50", "rounded-3xl", "border", "border-slate-100", "p-8", "space-y-4", "mb-10"], [1, "flex", "justify-between", "items-center"], [1, "text-xs", "font-black", "text-slate-400", "uppercase", "tracking-widest"], [1, "text-sm", "font-black", "text-slate-900"], [1, "flex", "justify-between", "items-center", "text-xs", "font-black", "text-indigo-600"], [1, "pt-4", "border-t", "border-slate-200", "flex", "justify-between", "items-end"], [1, "text-4xl", "font-black", "text-slate-900"], [1, "flex", "flex-col", "gap-3"], [1, "w-full", "py-5", "bg-green-600", "text-white", "rounded-[1.25rem]", "text-[11px]", "font-black", "uppercase", "tracking-widest", "hover:bg-slate-900", "transition-all", "shadow-xl", "active:scale-95", "disabled:opacity-50", 3, "click", "disabled"], [1, "w-full", "py-4", "text-slate-400", "font-black", "text-[10px]", "uppercase", "tracking-widest", "hover:text-red-500", "transition-colors", 3, "click"], [1, "fixed", "inset-0", "z-[115]", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-sm", "animate-fade-in", 3, "click"], [1, "bg-white", "rounded-[2rem]", "shadow-2xl", "w-full", "max-w-4xl", "max-h-[85vh]", "overflow-hidden", "flex", "flex-col", 3, "click"], [1, "p-8", "lg:p-10", "border-b", "border-slate-100", "flex", "items-center", "justify-between"], [1, "text-sm", "text-slate-500", "font-medium"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-2xl", "bg-white", "border", "border-slate-100", "text-slate-400", "hover:text-slate-900", "shadow-sm", "transition-all", 3, "click"], [1, "flex-1", "overflow-y-auto", "p-0", "custom-scrollbar"], ["class", "m-10 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-700 text-sm font-bold", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-32", 4, "ngIf"], ["class", "text-center py-32", 4, "ngIf"], [1, "p-8", "border-t", "border-slate-100", "bg-slate-50", "flex", "justify-end", "gap-4"], [1, "px-6", "py-3", "bg-white", "border", "border-slate-200", "text-slate-700", "text-xs", "font-black", "rounded-2xl", "hover:border-indigo-500", "transition-all", "shadow-sm", 3, "click"], [1, "px-8", "py-3", "bg-slate-900", "text-white", "text-xs", "font-black", "rounded-2xl", "hover:bg-slate-800", "transition-all", "shadow-md", "active:scale-95", 3, "click"], [1, "m-10", "p-4", "bg-red-50", "border", "border-red-100", "rounded-2xl", "text-red-700", "text-sm", "font-bold"], [1, "premium-table", "w-full"], [1, "pl-10"], [1, "pr-10", "text-right"], [4, "ngFor", "ngForOf"], [1, "text-xs", "font-black", "text-slate-900"], [1, "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-tighter"], [1, "text-sm", "font-black", "text-indigo-600"], [1, "px-2.5", "py-1", "rounded-md", "text-[9px]", "font-black", "uppercase", "tracking-widest"], [1, "text-xs", "font-bold", "text-slate-500", "uppercase"], [1, "px-4", "py-2", "border", "border-slate-200", "text-indigo-600", "hover:bg-slate-50", "text-xs", "font-black", "rounded-xl", "transition-all", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "py-32"], [1, "text-center", "py-32"], [1, "text-6xl", "block", "mb-6", "grayscale", "opacity-50"], [1, "text-xl", "font-bold", "text-slate-400", "italic"]], template: function MembershipPlansComponent_Template(rf, ctx) {
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
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 5);
        \u0275\u0275element(9, "path", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Payment History ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, MembershipPlansComponent_div_11_Template, 4, 0, "div", 7)(12, MembershipPlansComponent_div_12_Template, 4, 1, "div", 8)(13, MembershipPlansComponent_div_13_Template, 5, 0, "div", 9)(14, MembershipPlansComponent_div_14_Template, 2, 1, "div", 10)(15, MembershipPlansComponent_div_15_Template, 21, 4, "div", 11)(16, MembershipPlansComponent_div_16_Template, 31, 8, "div", 12)(17, MembershipPlansComponent_div_17_Template, 21, 4, "div", 13);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, SlicePipe, DecimalPipe, DatePipe], styles: ['\n\n.plans-wrapper[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.plans-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 40px;\n}\n.plans-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.025em;\n  line-height: 1.2;\n}\n.plans-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 500;\n  margin-top: 4px;\n  font-size: 0.875rem;\n}\n.history-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px;\n  background: white;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #475569;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  white-space: nowrap;\n}\n.history-btn[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  color: #6366f1;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);\n}\n.plans-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  background: white;\n  border-radius: 24px;\n  border: 1px solid #f1f5f9;\n}\n.plans-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 700;\n  font-size: 0.875rem;\n  margin-top: 16px;\n  animation: _ngcontent-%COMP%_pulse 1.6s ease-in-out infinite;\n}\n.plans-spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid #e0e7ff;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.plans-error[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 16px;\n  color: #b91c1c;\n  font-size: 0.875rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.plans-empty[_ngcontent-%COMP%] {\n  padding: 80px;\n  text-align: center;\n  background: white;\n  border-radius: 24px;\n  border: 1px solid #f1f5f9;\n}\n.plans-empty-icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 3rem;\n  margin-bottom: 16px;\n  opacity: 0.4;\n}\n.plans-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 700;\n  font-style: italic;\n}\n.plans-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 28px;\n}\n@media (min-width: 1024px) {\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.plan-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: 24px;\n  overflow: hidden;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  animation: _ngcontent-%COMP%_cardSlideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);\n}\n.plan-card__orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  pointer-events: none;\n  z-index: 0;\n}\n.plan-card[_ngcontent-%COMP%]:hover   .plan-card__orb[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.plan-card__orb--1[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  top: -60px;\n  right: -60px;\n}\n.plan-card__orb--2[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  bottom: -40px;\n  left: -40px;\n}\n.plan-card--free[_ngcontent-%COMP%] {\n  border-color: #d1fae5;\n  background:\n    linear-gradient(\n      180deg,\n      #ecfdf5 0%,\n      #ffffff 40%);\n}\n.plan-card--free[_ngcontent-%COMP%]:hover {\n  border-color: #34d399;\n  box-shadow: 0 25px 50px -12px rgba(16, 185, 129, 0.2);\n}\n.plan-card--free[_ngcontent-%COMP%]   .plan-card__orb--1[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(16, 185, 129, 0.2),\n      transparent 70%);\n}\n.plan-card--free[_ngcontent-%COMP%]   .plan-card__orb--2[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(52, 211, 153, 0.15),\n      transparent 70%);\n}\n.plan-card--free[_ngcontent-%COMP%]   .plan-card__icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d1fae5,\n      #a7f3d0);\n  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);\n}\n.plan-card--free[_ngcontent-%COMP%]   .plan-card__price[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.plan-card--free[_ngcontent-%COMP%]   .plan-card__check[_ngcontent-%COMP%] {\n  color: #10b981;\n  background: #ecfdf5;\n}\n.plan-card--free[_ngcontent-%COMP%]   .plan-card__btn--cta[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.3);\n}\n.plan-card--free[_ngcontent-%COMP%]   .plan-card__btn--cta[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #059669,\n      #047857);\n  box-shadow: 0 12px 32px rgba(16, 185, 129, 0.4);\n}\n.plan-card--free[_ngcontent-%COMP%]   .plan-card__divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.plan-card--free[_ngcontent-%COMP%]   .plan-card__divider[_ngcontent-%COMP%]::before, .plan-card--free[_ngcontent-%COMP%]   .plan-card__divider[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      #d1fae5,\n      transparent);\n}\n.plan-card--regular[_ngcontent-%COMP%] {\n  border-color: #c7d2fe;\n  background:\n    linear-gradient(\n      180deg,\n      #eef2ff 0%,\n      #ffffff 40%);\n}\n.plan-card--regular[_ngcontent-%COMP%]:hover {\n  border-color: #818cf8;\n  box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.25);\n}\n.plan-card--regular[_ngcontent-%COMP%]   .plan-card__orb--1[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.2),\n      transparent 70%);\n}\n.plan-card--regular[_ngcontent-%COMP%]   .plan-card__orb--2[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(129, 140, 248, 0.15),\n      transparent 70%);\n}\n.plan-card--regular[_ngcontent-%COMP%]   .plan-card__icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #c7d2fe,\n      #a5b4fc);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);\n}\n.plan-card--regular[_ngcontent-%COMP%]   .plan-card__price[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.plan-card--regular[_ngcontent-%COMP%]   .plan-card__check[_ngcontent-%COMP%] {\n  color: #6366f1;\n  background: #eef2ff;\n}\n.plan-card--regular[_ngcontent-%COMP%]   .plan-card__btn--cta[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);\n}\n.plan-card--regular[_ngcontent-%COMP%]   .plan-card__btn--cta[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #4338ca);\n  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.45);\n}\n.plan-card--regular[_ngcontent-%COMP%]   .plan-card__divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.plan-card--regular[_ngcontent-%COMP%]   .plan-card__divider[_ngcontent-%COMP%]::before, .plan-card--regular[_ngcontent-%COMP%]   .plan-card__divider[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      #c7d2fe,\n      transparent);\n}\n.plan-card--gold[_ngcontent-%COMP%] {\n  border-color: #fde68a;\n  background:\n    linear-gradient(\n      180deg,\n      #fffbeb 0%,\n      #ffffff 40%);\n}\n.plan-card--gold[_ngcontent-%COMP%]:hover {\n  border-color: #f59e0b;\n  box-shadow: 0 25px 50px -12px rgba(245, 158, 11, 0.25);\n}\n.plan-card--gold[_ngcontent-%COMP%]   .plan-card__orb--1[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(245, 158, 11, 0.2),\n      transparent 70%);\n}\n.plan-card--gold[_ngcontent-%COMP%]   .plan-card__orb--2[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle,\n      rgba(251, 191, 36, 0.15),\n      transparent 70%);\n}\n.plan-card--gold[_ngcontent-%COMP%]   .plan-card__icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.25);\n}\n.plan-card--gold[_ngcontent-%COMP%]   .plan-card__price[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.plan-card--gold[_ngcontent-%COMP%]   .plan-card__check[_ngcontent-%COMP%] {\n  color: #d97706;\n  background: #fffbeb;\n}\n.plan-card--gold[_ngcontent-%COMP%]   .plan-card__btn--cta[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.35);\n}\n.plan-card--gold[_ngcontent-%COMP%]   .plan-card__btn--cta[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #d97706,\n      #b45309);\n  box-shadow: 0 12px 32px rgba(245, 158, 11, 0.45);\n}\n.plan-card--gold[_ngcontent-%COMP%]   .plan-card__divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.plan-card--gold[_ngcontent-%COMP%]   .plan-card__divider[_ngcontent-%COMP%]::before, .plan-card--gold[_ngcontent-%COMP%]   .plan-card__divider[_ngcontent-%COMP%]::after {\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      #fde68a,\n      transparent);\n}\n.plan-card--active[_ngcontent-%COMP%] {\n  border-width: 2px;\n}\n.plan-card--free.plan-card--active[_ngcontent-%COMP%] {\n  border-color: #10b981;\n  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12), 0 12px 40px -8px rgba(16, 185, 129, 0.2);\n}\n.plan-card--regular.plan-card--active[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12), 0 12px 40px -8px rgba(99, 102, 241, 0.2);\n}\n.plan-card--gold.plan-card--active[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n  box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.12), 0 12px 40px -8px rgba(245, 158, 11, 0.2);\n}\n.plan-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  padding: 5px 14px;\n  border-radius: 100px;\n  font-size: 0.625rem;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.plan-badge--active[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.3);\n}\n.plan-badge__dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #4ade80;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_pulseDot 2s ease-in-out infinite;\n}\n.plan-badge--popular[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  color: white;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);\n}\n.plan-badge--premium[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f59e0b,\n      #d97706);\n  color: white;\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35);\n}\n.plan-card__header[_ngcontent-%COMP%] {\n  padding: 32px 28px 0;\n  position: relative;\n  z-index: 1;\n}\n.plan-card__icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n  transition: transform 0.3s ease;\n}\n.plan-card[_ngcontent-%COMP%]:hover   .plan-card__icon[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(-3deg);\n}\n.plan-card__name[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n  margin: 0;\n}\n.plan-card__type[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.625rem;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  margin-top: 4px;\n}\n.plan-card__pricing[_ngcontent-%COMP%] {\n  padding: 24px 28px 0;\n  position: relative;\n  z-index: 1;\n}\n.plan-card__price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 2px;\n  flex-wrap: wrap;\n}\n.plan-card__currency[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  opacity: 0.6;\n  color: #0f172a;\n}\n.plan-card__price[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  font-weight: 900;\n  letter-spacing: -0.04em;\n  line-height: 1;\n}\n.plan-card__period[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #94a3b8;\n  margin-left: 4px;\n}\n.plan-card__price-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n  font-weight: 500;\n  margin-top: 6px;\n}\n.plan-card__divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 24px 28px 0;\n  position: relative;\n  z-index: 1;\n}\n.plan-card__divider[_ngcontent-%COMP%]::before, .plan-card__divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n}\n.plan-card__divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.625rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  white-space: nowrap;\n}\n.plan-card__features[_ngcontent-%COMP%] {\n  padding: 20px 28px 0;\n  flex: 1;\n  position: relative;\n  z-index: 1;\n}\n.plan-card__features[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.plan-card__feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 8px 0;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #334155;\n  line-height: 1.5;\n}\n.plan-card__check[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 22px;\n  height: 22px;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1px;\n}\n.plan-card__more-link[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  background: none;\n  border: none;\n  font-size: 0.6875rem;\n  font-weight: 800;\n  color: #6366f1;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n  padding: 4px 0;\n  transition: color 0.2s;\n}\n.plan-card__more-link[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n  text-decoration: underline;\n}\n.plan-card__actions[_ngcontent-%COMP%] {\n  padding: 24px 28px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  position: relative;\n  z-index: 1;\n}\n.plan-card__btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 20px;\n  border-radius: 14px;\n  font-size: 0.6875rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  cursor: pointer;\n  border: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n}\n.plan-card__btn--details[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.plan-card__btn--details[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n  color: #1e293b;\n}\n.plan-card__btn--cta[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 16px 20px;\n  font-size: 0.75rem;\n  position: relative;\n  overflow: hidden;\n}\n.plan-card__btn--cta[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.plan-card__btn--cta[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n}\n.plan-card__btn--disabled[_ngcontent-%COMP%] {\n  background: #f1f5f9 !important;\n  color: #94a3b8 !important;\n  box-shadow: none !important;\n  cursor: not-allowed;\n}\n.plan-card__btn--disabled[_ngcontent-%COMP%]:hover {\n  transform: none !important;\n}\n@keyframes _ngcontent-%COMP%_cardSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 0.5;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulseDot {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(0.7);\n  }\n}\n@media (max-width: 768px) {\n  .plans-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .plans-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .plan-card__price[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n  }\n}\n.plan-card__btn--cta[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.15),\n      transparent);\n  transition: left 0.6s ease;\n}\n.plan-card[_ngcontent-%COMP%]:hover   .plan-card__btn--cta[_ngcontent-%COMP%]:not(.plan-card__btn--disabled)::after {\n  left: 100%;\n}\n/*# sourceMappingURL=membership-plans.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MembershipPlansComponent, { className: "MembershipPlansComponent", filePath: "src\\app\\pages\\membership-plans\\membership-plans.component.ts", lineNumber: 53 });
})();

export {
  MembershipPlansComponent
};
//# sourceMappingURL=chunk-3NPFWXJV.js.map
