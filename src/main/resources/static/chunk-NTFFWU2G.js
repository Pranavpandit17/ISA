import {
  AppNavigationService
} from "./chunk-J6JLAZ5K.js";
import {
  ResourceDetailModalComponent,
  ResourcePostModalComponent
} from "./chunk-TGAVGDZI.js";
import {
  ToastService
} from "./chunk-BMTGONH6.js";
import {
  JobDetailModalComponent
} from "./chunk-6BWAVG33.js";
import {
  AuthService
} from "./chunk-HS4BPM7A.js";
import "./chunk-X7FTYMHV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QNLLDZ5O.js";
import {
  ConfirmService
} from "./chunk-HJ6C4NPU.js";
import "./chunk-BACPM34C.js";
import {
  ApiService,
  CommonModule,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CRF7CKPV.js";

// src/app/pages/bench/bench.component.ts
var _c0 = (a0) => ({ "bg-blue-100 border-blue-300": a0 });
function BenchComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function BenchComponent_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate("DASHBOARD"));
    });
    \u0275\u0275text(1, " \u2190 Back to Dashboard ");
    \u0275\u0275elementEnd();
  }
}
function BenchComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "button", 13);
    \u0275\u0275listener("click", function BenchComponent_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreateResource());
    });
    \u0275\u0275text(2, " + Post Talent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 14);
    \u0275\u0275listener("click", function BenchComponent_div_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate("PROJECT_POST"));
    });
    \u0275\u0275text(4, " + Post Project ");
    \u0275\u0275elementEnd()();
  }
}
function BenchComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2, " \u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 17);
    \u0275\u0275text(4, "Premium Feature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, "Upgrade your membership to view Bench Resources and Project opportunities.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 19);
    \u0275\u0275listener("click", function BenchComponent_div_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOpenPayment());
    });
    \u0275\u0275text(8, "Upgrade Membership");
    \u0275\u0275elementEnd()();
  }
}
function BenchComponent_div_10_div_25_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function BenchComponent_div_10_div_25_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, " Loading resources... ");
    \u0275\u0275elementEnd();
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, " Remote ");
    \u0275\u0275elementEnd();
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 57);
    \u0275\u0275element(2, "path", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const resource_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", resource_r8.hourlyRate, " ", resource_r8.currency || "USD", "/hr");
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 57);
    \u0275\u0275element(2, "path", 70)(3, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const resource_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(resource_r8.location);
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_div_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r9, " ");
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_div_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resource_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", resource_r8.skills.length - 3, " more ");
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275template(1, BenchComponent_div_10_div_25_div_14_div_1_div_29_span_1_Template, 2, 1, "span", 73)(2, BenchComponent_div_10_div_25_div_14_div_1_div_29_span_2_Template, 2, 1, "span", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resource_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", resource_r8.skills.slice(0, 3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", resource_r8.skills.length > 3);
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_div_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resource_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Posted by ", resource_r8.postedByName, "");
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_div_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " \u2022 ");
    \u0275\u0275elementEnd();
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_div_30_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resource_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(resource_r8.postedByCompany);
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275template(1, BenchComponent_div_10_div_25_div_14_div_1_div_30_span_1_Template, 2, 1, "span", 7)(2, BenchComponent_div_10_div_25_div_14_div_1_div_30_span_2_Template, 2, 0, "span", 7)(3, BenchComponent_div_10_div_25_div_14_div_1_div_30_span_3_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const resource_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", resource_r8.postedByName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", resource_r8.postedByName && resource_r8.postedByCompany);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", resource_r8.postedByCompany);
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function BenchComponent_div_10_div_25_div_14_div_1_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const resource_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onEditResource(resource_r8));
    });
    \u0275\u0275text(1, " Edit ");
    \u0275\u0275elementEnd();
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function BenchComponent_div_10_div_25_div_14_div_1_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const resource_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onDeleteResource(resource_r8));
    });
    \u0275\u0275text(1, " Delete ");
    \u0275\u0275elementEnd();
  }
}
function BenchComponent_div_10_div_25_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, BenchComponent_div_10_div_25_div_14_div_1_span_5_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 53)(7, "h3", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 54);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 55)(12, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 57);
    \u0275\u0275element(14, "path", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 57);
    \u0275\u0275element(19, "path", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 57);
    \u0275\u0275element(24, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, BenchComponent_div_10_div_25_div_14_div_1_div_27_Template, 5, 2, "div", 61)(28, BenchComponent_div_10_div_25_div_14_div_1_div_28_Template, 6, 1, "div", 61)(29, BenchComponent_div_10_div_25_div_14_div_1_div_29_Template, 3, 2, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, BenchComponent_div_10_div_25_div_14_div_1_div_30_Template, 4, 3, "div", 63);
    \u0275\u0275elementStart(31, "div", 64)(32, "button", 65);
    \u0275\u0275listener("click", function BenchComponent_div_10_div_25_div_14_div_1_Template_button_click_32_listener() {
      const resource_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onViewResource(resource_r8));
    });
    \u0275\u0275text(33, " View Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, BenchComponent_div_10_div_25_div_14_div_1_button_34_Template, 2, 0, "button", 66)(35, BenchComponent_div_10_div_25_div_14_div_1_button_35_Template, 2, 0, "button", 67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const resource_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", resource_r8.status || "ACTIVE", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", resource_r8.isRemote);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(resource_r8.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r8.description || resource_r8.stack);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(resource_r8.stack);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", resource_r8.experience, " experience");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(resource_r8.availability);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", resource_r8.hourlyRate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", resource_r8.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", resource_r8.skills && resource_r8.skills.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", resource_r8.postedByName || resource_r8.postedByEmail);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.canEditResource(resource_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canEditResource(resource_r8));
  }
}
function BenchComponent_div_10_div_25_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, BenchComponent_div_10_div_25_div_14_div_1_Template, 36, 13, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredResources);
  }
}
function BenchComponent_div_10_div_25_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "p", 81);
    \u0275\u0275text(2, "No resources found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4, "Try adjusting your search or post a new resource");
    \u0275\u0275elementEnd()();
  }
}
function BenchComponent_div_10_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 32)(2, "nav", 33)(3, "button", 34);
    \u0275\u0275listener("click", function BenchComponent_div_10_div_25_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchResourceTab("OTHERS"));
    });
    \u0275\u0275text(4, " All Resources ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 34);
    \u0275\u0275listener("click", function BenchComponent_div_10_div_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchResourceTab("MY_RESOURCES"));
    });
    \u0275\u0275text(6, " My Resources ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 35)(8, "div", 36)(9, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function BenchComponent_div_10_div_25_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function BenchComponent_div_10_div_25_Template_input_input_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 38);
    \u0275\u0275element(11, "path", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, BenchComponent_div_10_div_25_div_12_Template, 2, 1, "div", 40)(13, BenchComponent_div_10_div_25_div_13_Template, 2, 0, "div", 41)(14, BenchComponent_div_10_div_25_div_14_Template, 2, 1, "div", 42)(15, BenchComponent_div_10_div_25_div_15_Template, 5, 0, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.resourceTab === "OTHERS" ? "border-b-2 border-indigo-600 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-700");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.resourceTab === "MY_RESOURCES" ? "border-b-2 border-indigo-600 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-700");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.filteredResources.length === 0);
  }
}
function BenchComponent_div_10_div_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1, " Loading projects... ");
    \u0275\u0275elementEnd();
  }
}
function BenchComponent_div_10_div_26_div_2_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tech_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tech_r14);
  }
}
function BenchComponent_div_10_div_26_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("click", function BenchComponent_div_10_div_26_div_2_div_1_Template_div_click_0_listener() {
      const proj_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onViewProject(proj_r13));
    });
    \u0275\u0275elementStart(1, "div", 87)(2, "div")(3, "h3", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 90);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 91);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 92);
    \u0275\u0275template(12, BenchComponent_div_10_div_26_div_2_div_1_span_12_Template, 2, 1, "span", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 94)(14, "div", 95)(15, "span", 96);
    \u0275\u0275text(16, "Budget:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 97);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 98);
    \u0275\u0275listener("click", function BenchComponent_div_10_div_26_div_2_div_1_Template_button_click_19_listener($event) {
      const proj_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.onViewProject(proj_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(20, "View & Apply");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const proj_r13 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(proj_r13.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Posted by ", proj_r13.postedByCompany || proj_r13.postedByName || "ISA Member", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(proj_r13.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(proj_r13.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", proj_r13.techStack);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(proj_r13.budget || "Negotiable");
  }
}
function BenchComponent_div_10_div_26_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, BenchComponent_div_10_div_26_div_2_div_1_Template, 21, 6, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.projects);
  }
}
function BenchComponent_div_10_div_26_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "p", 81);
    \u0275\u0275text(2, "No projects found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4, "Check back later for new opportunities");
    \u0275\u0275elementEnd()();
  }
}
function BenchComponent_div_10_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, BenchComponent_div_10_div_26_div_1_Template, 2, 0, "div", 41)(2, BenchComponent_div_10_div_26_div_2_Template, 2, 1, "div", 83)(3, BenchComponent_div_10_div_26_div_3_Template, 5, 0, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingProjects);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingProjects);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingProjects && ctx_r1.projects.length === 0);
  }
}
function BenchComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 20)(2, "h3", 21);
    \u0275\u0275text(3, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 22)(5, "button", 23);
    \u0275\u0275listener("click", function BenchComponent_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreateResource());
    });
    \u0275\u0275elementStart(6, "span", 24);
    \u0275\u0275text(7, "\u2795");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25);
    \u0275\u0275text(9, "Post Resource");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 26);
    \u0275\u0275listener("click", function BenchComponent_div_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate("PROJECT_POST"));
    });
    \u0275\u0275elementStart(11, "span", 24);
    \u0275\u0275text(12, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 27);
    \u0275\u0275text(14, "Post Project");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 28);
    \u0275\u0275listener("click", function BenchComponent_div_10_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.benchTab = "TALENT");
    });
    \u0275\u0275elementStart(16, "span", 24);
    \u0275\u0275text(17, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 29);
    \u0275\u0275text(19, "View Talent");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 30)(21, "button", 31);
    \u0275\u0275listener("click", function BenchComponent_div_10_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.benchTab = "TALENT");
    });
    \u0275\u0275text(22, " Available Talent ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 31);
    \u0275\u0275listener("click", function BenchComponent_div_10_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.benchTab = "PROJECTS");
    });
    \u0275\u0275text(24, " Project Outsourcing ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, BenchComponent_div_10_div_25_Template, 16, 9, "div", 7)(26, BenchComponent_div_10_div_26_Template, 4, 3, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx_r1.benchTab === "TALENT"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.benchTab === "TALENT" ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.benchTab === "PROJECTS" ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.benchTab === "TALENT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.benchTab === "PROJECTS");
  }
}
function BenchComponent_app_resource_detail_modal_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-resource-detail-modal", 100);
    \u0275\u0275listener("close", function BenchComponent_app_resource_detail_modal_11_Template_app_resource_detail_modal_close_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResourceDetailModal());
    })("interestSubmitted", function BenchComponent_app_resource_detail_modal_11_Template_app_resource_detail_modal_interestSubmitted_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInterestSubmitted());
    })("editResource", function BenchComponent_app_resource_detail_modal_11_Template_app_resource_detail_modal_editResource_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEditResource($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("show", ctx_r1.showResourceDetailModal)("resource", ctx_r1.selectedResource);
  }
}
function BenchComponent_app_resource_post_modal_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-resource-post-modal", 101);
    \u0275\u0275listener("close", function BenchComponent_app_resource_post_modal_12_Template_app_resource_post_modal_close_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeResourcePostModal());
    })("saved", function BenchComponent_app_resource_post_modal_12_Template_app_resource_post_modal_saved_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onResourceSaved());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("show", ctx_r1.showResourcePostModal)("editResource", ctx_r1.selectedResourceForEdit);
  }
}
function BenchComponent_app_job_detail_modal_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-job-detail-modal", 102);
    \u0275\u0275listener("close", function BenchComponent_app_job_detail_modal_13_Template_app_job_detail_modal_close_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeProjectDetailModal());
    })("proposalSubmitted", function BenchComponent_app_job_detail_modal_13_Template_app_job_detail_modal_proposalSubmitted_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadProjects());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("show", ctx_r1.showProjectDetailModal)("jobPosting", ctx_r1.selectedProject);
  }
}
var BenchComponent = class _BenchComponent {
  constructor(apiService, authService, navService, toastService, confirmService) {
    this.apiService = apiService;
    this.authService = authService;
    this.navService = navService;
    this.toastService = toastService;
    this.confirmService = confirmService;
    this.navigate = new EventEmitter();
    this.openPayment = new EventEmitter();
    this.benchTab = "TALENT";
    this.resources = [];
    this.filteredResources = [];
    this.projects = [];
    this.currentUser = null;
    this.isLoading = false;
    this.isLoadingProjects = false;
    this.errorMessage = "";
    this.resourceTab = "OTHERS";
    this.searchQuery = "";
    this.showResourceDetailModal = false;
    this.showResourcePostModal = false;
    this.showProjectDetailModal = false;
    this.selectedResource = null;
    this.selectedResourceForEdit = null;
    this.selectedProject = null;
    this.currentUser = this.authService.getCurrentUser();
  }
  ngOnInit() {
    this.loadResources();
    this.loadProjects();
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
        const allResources = Array.isArray(response) ? response : [];
        if (this.currentUser) {
          this.resources = allResources.filter((res) => {
            const postedById = typeof res.postedBy === "number" ? res.postedBy : parseInt(res.postedBy);
            return postedById !== this.currentUser.id && res.postedByEmail !== this.currentUser.email;
          });
        } else {
          this.resources = allResources;
        }
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading bench resources:", error);
        this.errorMessage = "Error loading resources. Please try again.";
        this.resources = [];
        this.filteredResources = [];
        this.isLoading = false;
      }
    });
  }
  loadMyResources() {
    this.apiService.getMyBenchResources().subscribe({
      next: (response) => {
        this.resources = Array.isArray(response) ? response : [];
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading my resources:", error);
        this.errorMessage = "Error loading your resources. Please try again.";
        this.resources = [];
        this.filteredResources = [];
        this.isLoading = false;
      }
    });
  }
  loadProjects() {
    this.isLoadingProjects = true;
    this.apiService.getOtherJobPostings().subscribe({
      next: (response) => {
        const allJobs = Array.isArray(response) ? response : [];
        this.projects = allJobs.filter((job) => job.type === "PROJECT");
        this.isLoadingProjects = false;
      },
      error: (error) => {
        console.error("Error loading projects:", error);
        this.projects = [];
        this.isLoadingProjects = false;
      }
    });
  }
  switchResourceTab(tab) {
    this.resourceTab = tab;
    this.loadResources();
  }
  applyFilters() {
    this.filteredResources = this.resources.filter((res) => {
      if (this.searchQuery) {
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
  }
  onNavigate(view) {
    this.navService.go(view);
  }
  onOpenPayment() {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.navService.go("PAYMENT");
    } else {
      this.navService.go("PAYMENT");
    }
  }
  onCreateResource() {
    this.selectedResourceForEdit = null;
    this.showResourcePostModal = true;
  }
  onViewProject(project) {
    this.selectedProject = project;
    this.showProjectDetailModal = true;
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
  onDeleteResource(resource) {
    if (!resource.id || typeof resource.id !== "number")
      return;
    this.confirmService.confirm({
      title: "Delete Resource",
      message: "Are you sure you want to delete this resource posting?",
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      isDestructive: true
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.apiService.deleteBenchResource(Number(resource.id)).subscribe({
        next: () => {
          this.loadResources();
        },
        error: (error) => {
          console.error("Error deleting resource:", error);
          this.toastService.error("Error deleting resource. Please try again.");
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
  closeProjectDetailModal() {
    this.showProjectDetailModal = false;
    this.selectedProject = null;
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
  static {
    this.\u0275fac = function BenchComponent_Factory(t) {
      return new (t || _BenchComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AppNavigationService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ConfirmService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BenchComponent, selectors: [["app-bench"]], outputs: { navigate: "navigate", openPayment: "openPayment" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 7, consts: [[1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8", "w-full"], ["class", "mb-6 text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium transition-colors", 3, "click", 4, "ngIf"], [1, "bg-indigo-900", "rounded-2xl", "p-8", "mb-8", "text-white", "flex", "flex-col", "md:flex-row", "justify-between", "items-center", "gap-6", "shadow-xl"], [1, "text-2xl", "font-bold", "mb-2"], [1, "text-indigo-200"], ["class", "flex gap-3", 4, "ngIf"], ["class", "text-center py-16 bg-white rounded-xl border border-slate-200 shadow-sm", 4, "ngIf"], [4, "ngIf"], [3, "show", "resource", "close", "interestSubmitted", "editResource", 4, "ngIf"], [3, "show", "editResource", "close", "saved", 4, "ngIf"], [3, "show", "jobPosting", "close", "proposalSubmitted", 4, "ngIf"], [1, "mb-6", "text-slate-500", "hover:text-slate-800", "flex", "items-center", "gap-1", "font-medium", "transition-colors", 3, "click"], [1, "flex", "gap-3"], [1, "px-5", "py-2.5", "bg-indigo-700", "text-white", "font-semibold", "rounded-lg", "hover:bg-indigo-600", "transition-colors", "border", "border-indigo-500", 3, "click"], [1, "px-5", "py-2.5", "bg-white", "text-indigo-900", "font-bold", "rounded-lg", "hover:bg-indigo-50", "transition-colors", "shadow-lg", 3, "click"], [1, "text-center", "py-16", "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm"], [1, "w-16", "h-16", "bg-indigo-100", "text-indigo-600", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4", "text-2xl"], [1, "text-xl", "font-bold", "text-slate-900", "mb-2"], [1, "text-slate-500", "max-w-md", "mx-auto", "mb-6"], [1, "px-6", "py-2", "bg-indigo-600", "text-white", "rounded-lg", "hover:bg-indigo-700", "font-medium", 3, "click"], [1, "bg-white", "shadow", "rounded-lg", "p-6", "border", "border-slate-100", "mb-6"], [1, "text-lg", "font-medium", "text-slate-900", "mb-4"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "gap-4"], [1, "p-4", "bg-indigo-50", "rounded-lg", "text-center", "hover:bg-indigo-100", "transition", "border-2", "border-indigo-300", 3, "click"], [1, "text-2xl", "block", "mb-2"], [1, "text-sm", "font-medium", "text-indigo-700"], [1, "p-4", "bg-green-50", "rounded-lg", "text-center", "hover:bg-green-100", "transition", "border-2", "border-green-300", 3, "click"], [1, "text-sm", "font-medium", "text-green-700"], [1, "p-4", "bg-slate-50", "rounded-lg", "text-center", "hover:bg-slate-100", "transition", "border", "border-slate-200", 3, "click", "ngClass"], [1, "text-sm", "font-medium"], [1, "flex", "border-b", "border-slate-200", "mb-6"], [1, "px-6", "py-3", "font-medium", "text-sm", "border-b-2", "transition-colors", 3, "click", "ngClass"], [1, "mb-6", "border-b", "border-slate-200"], [1, "flex", "space-x-8"], [1, "pb-4", "px-1", "text-sm", 3, "click"], [1, "bg-slate-50", "rounded-lg", "border", "border-slate-200", "p-4", "mb-6"], [1, "relative"], ["type", "text", "placeholder", "Search by role, stack, skills...", 1, "w-full", "pl-10", "pr-3", "py-2", "border", "border-slate-300", "rounded-md", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", 3, "ngModelChange", "input", "ngModel"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-2.5", "h-5", "w-5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm", 4, "ngIf"], ["class", "text-center py-12 text-slate-500", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", 4, "ngIf"], ["class", "text-center py-12", 4, "ngIf"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-md", "text-red-700", "text-sm"], [1, "text-center", "py-12", "text-slate-500"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-lg", "shadow-sm", "border", "border-slate-200", "overflow-hidden", "hover:shadow-md", "transition-shadow"], [1, "p-4", "pb-2", "flex", "justify-between", "items-start"], [1, "flex", "flex-wrap", "gap-2"], [1, "px-3", "py-1", "rounded-full", "text-xs", "font-semibold", "bg-indigo-100", "text-indigo-800"], ["class", "px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800", 4, "ngIf"], [1, "px-4", "pb-4"], [1, "text-slate-600", "text-sm", "mb-4", "line-clamp-3"], [1, "space-y-2", "mb-4"], [1, "flex", "items-center", "text-slate-600", "text-sm"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], ["class", "flex items-center text-slate-600 text-sm", 4, "ngIf"], ["class", "flex flex-wrap gap-1 mt-2", 4, "ngIf"], ["class", "text-xs text-slate-400 mb-4", 4, "ngIf"], [1, "flex", "gap-2"], [1, "flex-1", "py-2", "px-4", "border-2", "border-indigo-600", "text-indigo-600", "rounded-md", "font-medium", "hover:bg-indigo-50", "transition-colors", 3, "click"], ["class", "px-4 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50", 3, "click", 4, "ngIf"], ["class", "px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50", 3, "click", 4, "ngIf"], [1, "px-3", "py-1", "rounded-full", "text-xs", "font-semibold", "bg-green-100", "text-green-800"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "flex", "flex-wrap", "gap-1", "mt-2"], ["class", "px-2 py-0.5 rounded text-xs bg-indigo-50 text-indigo-700", 4, "ngFor", "ngForOf"], ["class", "px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-600", 4, "ngIf"], [1, "px-2", "py-0.5", "rounded", "text-xs", "bg-indigo-50", "text-indigo-700"], [1, "px-2", "py-0.5", "rounded", "text-xs", "bg-slate-100", "text-slate-600"], [1, "text-xs", "text-slate-400", "mb-4"], [1, "px-4", "py-2", "border", "border-slate-300", "text-slate-700", "rounded-md", "hover:bg-slate-50", 3, "click"], [1, "px-4", "py-2", "border", "border-red-300", "text-red-600", "rounded-md", "hover:bg-red-50", 3, "click"], [1, "text-center", "py-12"], [1, "text-slate-500", "text-lg", "mb-2"], [1, "text-slate-400", "text-sm"], ["class", "grid gap-6 md:grid-cols-2", 4, "ngIf"], [1, "grid", "gap-6", "md:grid-cols-2"], ["class", "bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-lg", "border", "border-slate-200", "p-6", "shadow-sm", "hover:shadow-md", "transition-shadow", "cursor-pointer", 3, "click"], [1, "flex", "justify-between", "items-start", "mb-4"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "text-sm", "text-slate-500"], [1, "px-2", "py-1", "bg-green-100", "text-green-800", "text-xs", "font-bold", "rounded", "uppercase"], [1, "text-slate-600", "text-sm", "mb-4", "line-clamp-2"], [1, "flex", "flex-wrap", "gap-2", "mb-6"], ["class", "px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded border border-slate-200", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-center", "pt-4", "border-t", "border-slate-100"], [1, "text-sm"], [1, "text-slate-500"], [1, "font-bold", "text-slate-900"], [1, "px-4", "py-2", "bg-indigo-600", "text-white", "text-sm", "font-medium", "rounded", "hover:bg-indigo-700", 3, "click"], [1, "px-2", "py-1", "bg-slate-100", "text-slate-600", "text-xs", "rounded", "border", "border-slate-200"], [3, "close", "interestSubmitted", "editResource", "show", "resource"], [3, "close", "saved", "show", "editResource"], [3, "close", "proposalSubmitted", "show", "jobPosting"]], template: function BenchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, BenchComponent_button_1_Template, 2, 0, "button", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div")(4, "h2", 3);
        \u0275\u0275text(5, "Resource & Project Exchange");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, "Connect for bench resources or project outsourcing opportunities.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, BenchComponent_div_8_Template, 5, 0, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, BenchComponent_div_9_Template, 9, 0, "div", 6)(10, BenchComponent_div_10_Template, 27, 7, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, BenchComponent_app_resource_detail_modal_11_Template, 1, 2, "app-resource-detail-modal", 8)(12, BenchComponent_app_resource_post_modal_12_Template, 1, 2, "app-resource-post-modal", 9)(13, BenchComponent_app_job_detail_modal_13_Template, 1, 2, "app-job-detail-modal", 10);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentUser);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.type) === "PREMIUM" || (ctx.currentUser == null ? null : ctx.currentUser.type) === "ADMIN");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.type) !== "PREMIUM" && (ctx.currentUser == null ? null : ctx.currentUser.type) !== "ADMIN");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.type) === "PREMIUM" || (ctx.currentUser == null ? null : ctx.currentUser.type) === "ADMIN");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showResourceDetailModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showResourcePostModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showProjectDetailModal);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ResourceDetailModalComponent, ResourcePostModalComponent, JobDetailModalComponent], styles: ["\n\n/*# sourceMappingURL=bench.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BenchComponent, { className: "BenchComponent", filePath: "src\\app\\pages\\bench\\bench.component.ts", lineNumber: 21 });
})();
export {
  BenchComponent
};
//# sourceMappingURL=chunk-NTFFWU2G.js.map
