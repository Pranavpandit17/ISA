import {
  AuthService
} from "./chunk-HS4BPM7A.js";
import "./chunk-X7FTYMHV.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-QNLLDZ5O.js";
import "./chunk-BACPM34C.js";
import {
  ApiService,
  CommonModule,
  EventEmitter,
  NgIf,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CRF7CKPV.js";

// src/app/pages/resource-post/resource-post.component.ts
function ResourcePostComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ResourcePostComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function ResourcePostComponent_span_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Posting Resource...");
    \u0275\u0275elementEnd();
  }
}
function ResourcePostComponent_span_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Post Resource");
    \u0275\u0275elementEnd();
  }
}
var ResourcePostComponent = class _ResourcePostComponent {
  constructor(apiService, authService) {
    this.apiService = apiService;
    this.authService = authService;
    this.navigate = new EventEmitter();
    this.newResource = {
      role: "",
      stack: "",
      experience: "",
      availability: "Immediate",
      description: "",
      hourlyRate: null,
      currency: "USD",
      expiryDate: null,
      contactEmail: "",
      contactPhone: "",
      location: "",
      isRemote: false,
      skills: [],
      certifications: "",
      previousProjects: ""
    };
    this.currentUser = null;
    this.isSubmitting = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.skillsInput = "";
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.newResource.contactEmail = this.currentUser.email || "";
    }
  }
  onNavigate(view) {
    this.navigate.emit(view);
  }
  submitResource() {
    if (!this.newResource.role || !this.newResource.role.trim()) {
      this.errorMessage = "Role is required";
      return;
    }
    if (!this.newResource.stack || !this.newResource.stack.trim()) {
      this.errorMessage = "Tech stack is required";
      return;
    }
    if (!this.newResource.experience || !this.newResource.experience.trim()) {
      this.errorMessage = "Experience is required";
      return;
    }
    if (!this.newResource.availability || !this.newResource.availability.trim()) {
      this.errorMessage = "Availability is required";
      return;
    }
    if (!this.currentUser) {
      this.errorMessage = "Please login to post a resource";
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = "";
    this.successMessage = "";
    const skills = this.skillsInput ? this.skillsInput.split(",").map((s) => s.trim()).filter((s) => s.length > 0) : [];
    const resourceData = __spreadProps(__spreadValues({}, this.newResource), {
      skills,
      status: "ACTIVE"
    });
    this.apiService.createBenchResource(resourceData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = "Resource posted successfully!";
        setTimeout(() => {
          this.onNavigate("BENCH");
        }, 1500);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || "Error posting resource. Please try again.";
        console.error("Error posting resource:", error);
      }
    });
  }
  static {
    this.\u0275fac = function ResourcePostComponent_Factory(t) {
      return new (t || _ResourcePostComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResourcePostComponent, selectors: [["app-resource-post"]], outputs: { navigate: "navigate" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 96, vars: 20, consts: [[1, "max-w-3xl", "mx-auto", "px-4", "py-8"], [1, "mb-6", "text-slate-500", "hover:text-slate-800", "flex", "items-center", "gap-1", "font-medium", "transition-colors", 3, "click"], [1, "bg-white", "shadow", "rounded-lg", "border", "border-slate-200", "p-8"], [1, "text-2xl", "font-bold", "text-slate-900", "mb-6", "border-b", "pb-4"], ["class", "mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm", 4, "ngIf"], ["class", "mb-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm", 4, "ngIf"], [1, "space-y-5", 3, "ngSubmit"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1"], ["name", "role", "type", "text", "placeholder", "e.g. Senior React Developer", "required", "", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["name", "stack", "type", "text", "placeholder", "e.g. React, Node.js, AWS", "required", "", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], ["name", "experience", "type", "text", "placeholder", "e.g. 5 Years, Senior Level", "required", "", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["name", "availability", "required", "", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", "bg-white", 3, "ngModelChange", "ngModel"], ["value", "Immediate"], ["value", "1 Week"], ["value", "2 Weeks"], ["value", "1 Month"], ["value", "2 Months"], ["value", "3 Months"], ["name", "description", "rows", "4", "placeholder", "Describe the resource, their expertise, and what they can bring to projects...", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["name", "skills", "type", "text", "placeholder", "e.g. JavaScript, React, Node.js, AWS, Docker", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], [1, "mt-1", "text-xs", "text-slate-500"], [1, "flex"], ["name", "currency", 1, "border", "border-slate-300", "rounded-l-lg", "py-2", "px-3", "bg-slate-50", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["value", "USD"], ["value", "INR"], ["value", "EUR"], ["name", "hourlyRate", "type", "number", "step", "0.01", "placeholder", "e.g. 50", 1, "flex-1", "border", "border-slate-300", "rounded-r-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["name", "location", "type", "text", "placeholder", "e.g. New York, USA", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center"], ["name", "isRemote", "type", "checkbox", "id", "isRemote", 1, "h-4", "w-4", "text-indigo-600", "focus:ring-indigo-500", "border-slate-300", "rounded", 3, "ngModelChange", "ngModel"], ["for", "isRemote", 1, "ml-2", "block", "text-sm", "text-slate-700"], ["name", "contactEmail", "type", "email", "placeholder", "contact@example.com", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["name", "contactPhone", "type", "tel", "placeholder", "+1 234 567 8900", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["name", "certifications", "rows", "2", "placeholder", "List relevant certifications...", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["name", "previousProjects", "rows", "3", "placeholder", "Brief description of previous projects or experience...", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["name", "expiryDate", "type", "date", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], [1, "pt-4"], ["type", "submit", 1, "w-full", "bg-indigo-600", "text-white", "py-3", "rounded-lg", "font-bold", "hover:bg-indigo-700", "shadow-md", "transition-all", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], [4, "ngIf"], [1, "mb-4", "p-3", "bg-red-50", "border", "border-red-200", "rounded-md", "text-red-700", "text-sm"], [1, "mb-4", "p-3", "bg-green-50", "border", "border-green-200", "rounded-md", "text-green-700", "text-sm"]], template: function ResourcePostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function ResourcePostComponent_Template_button_click_1_listener() {
          return ctx.onNavigate("BENCH");
        });
        \u0275\u0275text(2, " \u2190 Back to Bench ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "h2", 3);
        \u0275\u0275text(5, "Post Available Bench Resource");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, ResourcePostComponent_div_6_Template, 2, 1, "div", 4)(7, ResourcePostComponent_div_7_Template, 2, 1, "div", 5);
        \u0275\u0275elementStart(8, "form", 6);
        \u0275\u0275listener("ngSubmit", function ResourcePostComponent_Template_form_ngSubmit_8_listener() {
          return ctx.submitResource();
        });
        \u0275\u0275elementStart(9, "div")(10, "label", 7);
        \u0275\u0275text(11, "Role Title *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.role, $event) || (ctx.newResource.role = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div")(14, "label", 7);
        \u0275\u0275text(15, "Tech Stack *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.stack, $event) || (ctx.newResource.stack = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 10)(18, "div")(19, "label", 7);
        \u0275\u0275text(20, "Experience *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_input_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.experience, $event) || (ctx.newResource.experience = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div")(23, "label", 7);
        \u0275\u0275text(24, "Availability *");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "select", 12);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_select_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.availability, $event) || (ctx.newResource.availability = $event);
          return $event;
        });
        \u0275\u0275elementStart(26, "option", 13);
        \u0275\u0275text(27, "Immediate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "option", 14);
        \u0275\u0275text(29, "1 Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "option", 15);
        \u0275\u0275text(31, "2 Weeks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "option", 16);
        \u0275\u0275text(33, "1 Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "option", 17);
        \u0275\u0275text(35, "2 Months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "option", 18);
        \u0275\u0275text(37, "3 Months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div")(39, "label", 7);
        \u0275\u0275text(40, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "textarea", 19);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_textarea_ngModelChange_41_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.description, $event) || (ctx.newResource.description = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div")(43, "label", 7);
        \u0275\u0275text(44, "Skills (comma-separated)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "input", 20);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_input_ngModelChange_45_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.skillsInput, $event) || (ctx.skillsInput = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p", 21);
        \u0275\u0275text(47, "Separate multiple skills with commas");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 10)(49, "div")(50, "label", 7);
        \u0275\u0275text(51, "Hourly Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 22)(53, "select", 23);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_select_ngModelChange_53_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.currency, $event) || (ctx.newResource.currency = $event);
          return $event;
        });
        \u0275\u0275elementStart(54, "option", 24);
        \u0275\u0275text(55, "USD");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "option", 25);
        \u0275\u0275text(57, "INR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "option", 26);
        \u0275\u0275text(59, "EUR");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "input", 27);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_input_ngModelChange_60_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.hourlyRate, $event) || (ctx.newResource.hourlyRate = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div")(62, "label", 7);
        \u0275\u0275text(63, "Location");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "input", 28);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_input_ngModelChange_64_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.location, $event) || (ctx.newResource.location = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 29)(66, "input", 30);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_input_ngModelChange_66_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.isRemote, $event) || (ctx.newResource.isRemote = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "label", 31);
        \u0275\u0275text(68, " Available for remote work ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 10)(70, "div")(71, "label", 7);
        \u0275\u0275text(72, "Contact Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "input", 32);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_input_ngModelChange_73_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.contactEmail, $event) || (ctx.newResource.contactEmail = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div")(75, "label", 7);
        \u0275\u0275text(76, "Contact Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "input", 33);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_input_ngModelChange_77_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.contactPhone, $event) || (ctx.newResource.contactPhone = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div")(79, "label", 7);
        \u0275\u0275text(80, "Certifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "textarea", 34);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_textarea_ngModelChange_81_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.certifications, $event) || (ctx.newResource.certifications = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div")(83, "label", 7);
        \u0275\u0275text(84, "Previous Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "textarea", 35);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_textarea_ngModelChange_85_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.previousProjects, $event) || (ctx.newResource.previousProjects = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div")(87, "label", 7);
        \u0275\u0275text(88, "Expiry Date (Optional)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "input", 36);
        \u0275\u0275twoWayListener("ngModelChange", function ResourcePostComponent_Template_input_ngModelChange_89_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newResource.expiryDate, $event) || (ctx.newResource.expiryDate = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "p", 21);
        \u0275\u0275text(91, "Leave empty if resource is available indefinitely");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 37)(93, "button", 38);
        \u0275\u0275template(94, ResourcePostComponent_span_94_Template, 2, 0, "span", 39)(95, ResourcePostComponent_span_95_Template, 2, 0, "span", 39);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successMessage);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.role);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.stack);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.experience);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.availability);
        \u0275\u0275advance(16);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.description);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.skillsInput);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.currency);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.hourlyRate);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.location);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.isRemote);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.contactEmail);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.contactPhone);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.certifications);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.previousProjects);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newResource.expiryDate);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.isSubmitting);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSubmitting);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isSubmitting);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n/*# sourceMappingURL=resource-post.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResourcePostComponent, { className: "ResourcePostComponent", filePath: "src\\app\\pages\\resource-post\\resource-post.component.ts", lineNumber: 15 });
})();
export {
  ResourcePostComponent
};
//# sourceMappingURL=chunk-TRYLH2YL.js.map
