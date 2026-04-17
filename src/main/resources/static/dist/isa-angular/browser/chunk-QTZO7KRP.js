import {
  ToastService
} from "./chunk-P4YHU2RF.js";
import {
  DataService
} from "./chunk-N5RJEOBE.js";
import {
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
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IAKTGX76.js";

// src/app/pages/directory/directory.component.ts
var _c0 = () => ["SaaS", "Fintech", "EdTech", "Services", "HealthTech"];
function DirectoryComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function DirectoryComponent_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate("DASHBOARD"));
    });
    \u0275\u0275text(1, " \u2190 Back to Dashboard ");
    \u0275\u0275elementEnd();
  }
}
function DirectoryComponent_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ind_r3 = ctx.$implicit;
    \u0275\u0275property("value", ind_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ind_r3);
  }
}
function DirectoryComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 15);
    \u0275\u0275text(4, "Premium Feature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 16);
    \u0275\u0275text(6, "Upgrade your membership to access the full directory of 200+ IT leaders and connect directly.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function DirectoryComponent_div_11_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOpenPayment());
    });
    \u0275\u0275text(8, "Unlock Directory");
    \u0275\u0275elementEnd()();
  }
}
function DirectoryComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275element(2, "img", 22);
    \u0275\u0275elementStart(3, "button", 23);
    \u0275\u0275listener("click", function DirectoryComponent_div_12_div_1_Template_button_click_3_listener() {
      const member_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.connectWith(member_r6.id));
    });
    \u0275\u0275text(4, "Connect");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "h3", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", member_r6.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(member_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r6.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r6.bio);
  }
}
function DirectoryComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, DirectoryComponent_div_12_div_1_Template, 14, 5, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredMembers);
  }
}
var DirectoryComponent = class _DirectoryComponent {
  constructor(dataService, authService, toastService) {
    this.dataService = dataService;
    this.authService = authService;
    this.toastService = toastService;
    this.navigate = new EventEmitter();
    this.openPayment = new EventEmitter();
    this.members = [];
    this.filteredMembers = [];
    this.dirSearch = "";
    this.dirIndustryFilter = "";
    this.currentUser = null;
    this.currentUser = this.authService.getCurrentUser();
  }
  ngOnInit() {
    this.members = this.dataService.getMembers();
    this.filterMembers();
  }
  filterMembers() {
    this.filteredMembers = this.members.filter((m) => {
      const matchesSearch = !this.dirSearch || m.name.toLowerCase().includes(this.dirSearch.toLowerCase()) || m.company.toLowerCase().includes(this.dirSearch.toLowerCase());
      const matchesIndustry = !this.dirIndustryFilter || m.industry === this.dirIndustryFilter;
      return matchesSearch && matchesIndustry && m.status === "ACTIVE" && m.type !== "ADMIN";
    });
  }
  onNavigate(view) {
    this.navigate.emit(view);
  }
  onOpenPayment() {
    this.openPayment.emit();
  }
  connectWith(id) {
    this.toastService.success("Connection Request Sent Successfully!");
  }
  static {
    this.\u0275fac = function DirectoryComponent_Factory(t) {
      return new (t || _DirectoryComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectoryComponent, selectors: [["app-directory"]], outputs: { navigate: "navigate", openPayment: "openPayment" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 7, consts: [[1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8", "w-full"], ["class", "mb-6 text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium transition-colors", 3, "click", 4, "ngIf"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-4", "mb-8"], [1, "text-2xl", "font-bold", "text-slate-900"], [1, "flex", "flex-wrap", "gap-2", "w-full", "md:w-auto"], ["type", "text", "placeholder", "Search members...", 1, "pl-3", "pr-4", "py-2", "border", "border-slate-300", "rounded-lg", "w-full", "md:w-64", 3, "ngModelChange", "ngModel"], [1, "py-2", "pl-3", "pr-8", "border", "border-slate-300", "rounded-lg", "text-sm", "bg-white", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-center py-16 bg-white rounded-xl border border-slate-200 shadow-sm", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", 4, "ngIf"], [1, "mb-6", "text-slate-500", "hover:text-slate-800", "flex", "items-center", "gap-1", "font-medium", "transition-colors", 3, "click"], [3, "value"], [1, "text-center", "py-16", "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-sm"], [1, "w-16", "h-16", "bg-amber-100", "text-amber-600", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4", "text-2xl"], [1, "text-xl", "font-bold", "text-slate-900", "mb-2"], [1, "text-slate-500", "max-w-md", "mx-auto", "mb-6"], [1, "px-6", "py-2", "bg-amber-600", "text-white", "rounded-lg", "hover:bg-amber-700", "font-medium", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], ["class", "bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all p-6 flex flex-col", 4, "ngFor", "ngForOf"], [1, "bg-white", "rounded-lg", "border", "border-slate-200", "shadow-sm", "hover:shadow-md", "transition-all", "p-6", "flex", "flex-col"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "w-16", "h-16", "rounded-full", "object-cover", "border", "border-slate-200", 3, "src"], ["title", "Connect", 1, "text-blue-600", "hover:bg-blue-50", "p-2", "rounded-full", 3, "click"], [1, "text-lg", "font-bold", "text-slate-900"], [1, "text-sm", "text-blue-600", "font-medium"], [1, "text-sm", "text-slate-500", "mb-4"], [1, "text-xs", "text-slate-400", "mb-4", "line-clamp-2", "min-h-[2.5em]"]], template: function DirectoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, DirectoryComponent_button_1_Template, 2, 0, "button", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Member Directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function DirectoryComponent_Template_input_ngModelChange_6_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dirSearch, $event) || (ctx.dirSearch = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function DirectoryComponent_Template_input_ngModelChange_6_listener() {
          return ctx.filterMembers();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function DirectoryComponent_Template_select_ngModelChange_7_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dirIndustryFilter, $event) || (ctx.dirIndustryFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function DirectoryComponent_Template_select_change_7_listener() {
          return ctx.filterMembers();
        });
        \u0275\u0275elementStart(8, "option", 7);
        \u0275\u0275text(9, "All Industries");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, DirectoryComponent_option_10_Template, 2, 2, "option", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, DirectoryComponent_div_11_Template, 9, 0, "div", 9)(12, DirectoryComponent_div_12_Template, 2, 1, "div", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentUser);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.dirSearch);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.dirIndustryFilter);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(6, _c0));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.type) !== "PREMIUM" && (ctx.currentUser == null ? null : ctx.currentUser.type) !== "ADMIN");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.currentUser == null ? null : ctx.currentUser.type) === "PREMIUM" || (ctx.currentUser == null ? null : ctx.currentUser.type) === "ADMIN");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.line-clamp-2[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=directory.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectoryComponent, { className: "DirectoryComponent", filePath: "src\\app\\pages\\directory\\directory.component.ts", lineNumber: 16 });
})();
export {
  DirectoryComponent
};
//# sourceMappingURL=chunk-QTZO7KRP.js.map
