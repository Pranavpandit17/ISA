import {
  MembershipService
} from "./chunk-ZRHEMPKX.js";
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
  ToastrService
} from "./chunk-KKJ3RDO7.js";
import "./chunk-BACPM34C.js";
import {
  CommonModule,
  EventEmitter,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CRF7CKPV.js";

// src/app/pages/profile-edit/profile-edit.component.ts
function ProfileEditComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4, " To change your membership plan, go back to the dashboard and use the Membership Plans section. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.selectedMembershipPlan.name, " (", ctx_r1.selectedMembershipPlan.type, ") ");
  }
}
function ProfileEditComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, " No membership plan selected yet. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 13);
    \u0275\u0275text(3, " You can select a plan from the Membership Plans section on your dashboard. ");
    \u0275\u0275elementEnd();
  }
}
function ProfileEditComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div")(3, "label", 17);
    \u0275\u0275text(4, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileEditComponent_div_16_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentUser.name, $event) || (ctx_r1.currentUser.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 17);
    \u0275\u0275text(8, "Job Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileEditComponent_div_16_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentUser.title, $event) || (ctx_r1.currentUser.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div")(11, "label", 17);
    \u0275\u0275text(12, "Company Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileEditComponent_div_16_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentUser.company, $event) || (ctx_r1.currentUser.company = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "label", 17);
    \u0275\u0275text(16, "Bio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileEditComponent_div_16_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentUser.bio, $event) || (ctx_r1.currentUser.bio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 13);
    \u0275\u0275text(19, "Brief description for the member directory.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "button", 21);
    \u0275\u0275listener("click", function ProfileEditComponent_div_16_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate("DASHBOARD"));
    });
    \u0275\u0275text(22, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 22);
    \u0275\u0275listener("click", function ProfileEditComponent_div_16_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProfile());
    });
    \u0275\u0275text(24, "Save Changes");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentUser.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentUser.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentUser.company);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.currentUser.bio);
  }
}
var ProfileEditComponent = class _ProfileEditComponent {
  constructor(authService, membershipService, toastr) {
    this.authService = authService;
    this.membershipService = membershipService;
    this.toastr = toastr;
    this.navigate = new EventEmitter();
    this.currentUser = null;
    this.selectedMembershipPlan = null;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.selectedMembershipPlan = this.membershipService.getSelectedPlan();
    this.membershipService.getSelectedPlan$().subscribe((plan) => {
      this.selectedMembershipPlan = plan;
    });
  }
  onNavigate(view) {
    this.navigate.emit(view);
  }
  saveProfile() {
    this.toastr.success("Saved profile successfully", "Saved");
    this.onNavigate("DASHBOARD");
  }
  static {
    this.\u0275fac = function ProfileEditComponent_Factory(t) {
      return new (t || _ProfileEditComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MembershipService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileEditComponent, selectors: [["app-profile-edit"]], outputs: { navigate: "navigate" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 3, consts: [["noPlan", ""], [1, "max-w-3xl", "mx-auto", "px-4", "py-8"], [1, "mb-6", "text-slate-500", "hover:text-slate-800", "flex", "items-center", "gap-1", "font-medium", "transition-colors", 3, "click"], [1, "bg-white", "shadow", "rounded-lg", "border", "border-slate-200", "p-8"], [1, "text-2xl", "font-bold", "text-slate-900", "mb-6", "border-b", "pb-4"], [1, "mb-6", "bg-slate-50", "border", "border-slate-200", "rounded-lg", "p-4", "flex", "items-start", "gap-3"], [1, "mt-1"], [1, "inline-flex", "items-center", "justify-center", "h-8", "w-8", "rounded-full", "bg-blue-100", "text-blue-600", "text-sm", "font-bold"], [1, "flex-1"], [1, "text-sm", "font-semibold", "text-slate-900"], [4, "ngIf", "ngIfElse"], ["class", "grid grid-cols-1 gap-6", 4, "ngIf"], [1, "text-sm", "text-slate-700", "mt-1"], [1, "text-xs", "text-slate-500", "mt-1"], [1, "text-sm", "text-slate-600", "mt-1"], [1, "grid", "grid-cols-1", "gap-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1"], ["type", "text", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "shadow-sm", "py-2", "px-3", "focus:ring-blue-500", "focus:border-blue-500", 3, "ngModelChange", "ngModel"], ["rows", "4", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "shadow-sm", "py-2", "px-3", "focus:ring-blue-500", "focus:border-blue-500", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "pt-6", "border-t", "border-slate-100"], [1, "mr-3", "px-4", "py-2", "border", "border-slate-300", "rounded-lg", "text-slate-700", "hover:bg-slate-50", "font-medium", 3, "click"], [1, "bg-blue-600", "text-white", "px-6", "py-2", "rounded-lg", "font-bold", "hover:bg-blue-700", "shadow-md", "transition-all", 3, "click"]], template: function ProfileEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
        \u0275\u0275listener("click", function ProfileEditComponent_Template_button_click_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onNavigate("DASHBOARD"));
        });
        \u0275\u0275text(2, " \u2190 Back to Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "h2", 4);
        \u0275\u0275text(5, "Edit Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "span", 7);
        \u0275\u0275text(9, " \u{1F4B3} ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 8)(11, "p", 9);
        \u0275\u0275text(12, "Membership Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, ProfileEditComponent_ng_container_13_Template, 5, 2, "ng-container", 10)(14, ProfileEditComponent_ng_template_14_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(16, ProfileEditComponent_div_16_Template, 25, 4, "div", 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const noPlan_r4 = \u0275\u0275reference(15);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", ctx.selectedMembershipPlan)("ngIfElse", noPlan_r4);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.currentUser);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n/*# sourceMappingURL=profile-edit.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileEditComponent, { className: "ProfileEditComponent", filePath: "src\\app\\pages\\profile-edit\\profile-edit.component.ts", lineNumber: 16 });
})();
export {
  ProfileEditComponent
};
//# sourceMappingURL=chunk-OJVQSJ2M.js.map
