import {
  JobDetailModalComponent
} from "./chunk-YSJIGD2H.js";
import {
  ConfirmService
} from "./chunk-ZFJR45MD.js";
import {
  ToastrService
} from "./chunk-NKTV2H2O.js";
import {
  AuthService
} from "./chunk-ZQTCOOSY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-EMPR7R4G.js";
import {
  ApiService,
  CommonModule,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
} from "./chunk-IAKTGX76.js";

// src/app/components/modals/job-post-modal/job-post-modal.component.ts
function JobPostModalComponent_div_0_span_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275listener("click", function JobPostModalComponent_div_0_span_59_Template_span_click_2_listener() {
      const tech_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeTechStack(tech_r4));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tech_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tech_r4, " ");
  }
}
function JobPostModalComponent_div_0_span_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275listener("click", function JobPostModalComponent_div_0_span_68_Template_span_click_2_listener() {
      const req_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeRequirement(req_r6));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const req_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", req_r6, " ");
  }
}
function JobPostModalComponent_div_0_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15);
    \u0275\u0275text(2, "Availability Lifecycle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 43);
    \u0275\u0275twoWayListener("ngModelChange", function JobPostModalComponent_div_0_div_69_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.jobPosting.status, $event) || (ctx_r1.jobPosting.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 44);
    \u0275\u0275text(5, "MARKET ACTIVE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 45);
    \u0275\u0275text(7, "SUSPENDED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 46);
    \u0275\u0275text(9, "POSITION FILLED");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobPosting.status);
  }
}
function JobPostModalComponent_div_0_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.errorMessage, " ");
  }
}
function JobPostModalComponent_div_0_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2705 ", ctx_r1.successMessage, " ");
  }
}
function JobPostModalComponent_div_0_span_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Transmitting...");
    \u0275\u0275elementEnd();
  }
}
function JobPostModalComponent_div_0_span_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Authorize Update" : "Initialize Listing");
  }
}
function JobPostModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function JobPostModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function JobPostModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div")(5, "h3", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 7);
    \u0275\u0275listener("click", function JobPostModalComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 8);
    \u0275\u0275element(11, "path", 9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "div", 10)(13, "form", 11);
    \u0275\u0275listener("ngSubmit", function JobPostModalComponent_div_0_Template_form_ngSubmit_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "label", 15);
    \u0275\u0275text(18, "Offering classification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 16)(20, "button", 17);
    \u0275\u0275listener("click", function JobPostModalComponent_div_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.jobPosting.type = "JOB");
    });
    \u0275\u0275text(21, "Full Time Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 17);
    \u0275\u0275listener("click", function JobPostModalComponent_div_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.jobPosting.type = "PROJECT");
    });
    \u0275\u0275text(23, "Project / Gig");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 14)(25, "label", 15);
    \u0275\u0275text(26, "Strategic Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function JobPostModalComponent_div_0_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobPosting.title, $event) || (ctx_r1.jobPosting.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 19)(29, "div", 14)(30, "label", 15);
    \u0275\u0275text(31, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 20);
    \u0275\u0275twoWayListener("ngModelChange", function JobPostModalComponent_div_0_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobPosting.category, $event) || (ctx_r1.jobPosting.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 14)(34, "label", 15);
    \u0275\u0275text(35, "Geography");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function JobPostModalComponent_div_0_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobPosting.location, $event) || (ctx_r1.jobPosting.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 19)(38, "div", 14)(39, "label", 15);
    \u0275\u0275text(40, "Compensation Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function JobPostModalComponent_div_0_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobPosting.budget, $event) || (ctx_r1.jobPosting.budget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 14)(43, "label", 15);
    \u0275\u0275text(44, "Timeframe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function JobPostModalComponent_div_0_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobPosting.duration, $event) || (ctx_r1.jobPosting.duration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 13)(47, "div", 14)(48, "label", 15);
    \u0275\u0275text(49, "Scope & Narrative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "textarea", 24);
    \u0275\u0275twoWayListener("ngModelChange", function JobPostModalComponent_div_0_Template_textarea_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.jobPosting.description, $event) || (ctx_r1.jobPosting.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 14)(52, "label", 15);
    \u0275\u0275text(53, "Tech Stack Inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 25)(55, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function JobPostModalComponent_div_0_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.techStackInput, $event) || (ctx_r1.techStackInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function JobPostModalComponent_div_0_Template_input_keyup_enter_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addTechStack());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 27);
    \u0275\u0275listener("click", function JobPostModalComponent_div_0_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addTechStack());
    });
    \u0275\u0275text(57, " + ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 28);
    \u0275\u0275template(59, JobPostModalComponent_div_0_span_59_Template, 4, 1, "span", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 14)(61, "label", 15);
    \u0275\u0275text(62, "Critical Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 25)(64, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function JobPostModalComponent_div_0_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.requirementInput, $event) || (ctx_r1.requirementInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function JobPostModalComponent_div_0_Template_input_keyup_enter_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRequirement());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 31);
    \u0275\u0275listener("click", function JobPostModalComponent_div_0_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRequirement());
    });
    \u0275\u0275text(66, " + ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 28);
    \u0275\u0275template(68, JobPostModalComponent_div_0_span_68_Template, 4, 1, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, JobPostModalComponent_div_0_div_69_Template, 10, 1, "div", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(70, JobPostModalComponent_div_0_div_70_Template, 2, 1, "div", 34)(71, JobPostModalComponent_div_0_div_71_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 36)(73, "button", 37);
    \u0275\u0275listener("click", function JobPostModalComponent_div_0_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(74, " Discard Session ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "button", 38);
    \u0275\u0275template(76, JobPostModalComponent_div_0_span_76_Template, 2, 0, "span", 39)(77, JobPostModalComponent_div_0_span_77_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Modify Initiative" : "New Listing", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Sync changes to the live marketplace registry" : "Define a new career opportunity or collaborative project", " ");
    \u0275\u0275advance(12);
    \u0275\u0275classProp("active", ctx_r1.jobPosting.type === "JOB");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.jobPosting.type === "PROJECT");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobPosting.title);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobPosting.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobPosting.location);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobPosting.budget);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobPosting.duration);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.jobPosting.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.techStackInput);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.jobPosting.techStack);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.requirementInput);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.getRequirementsArray());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditMode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.successMessage);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSubmitting);
  }
}
var JobPostModalComponent = class _JobPostModalComponent {
  constructor(apiService, authService) {
    this.apiService = apiService;
    this.authService = authService;
    this.show = false;
    this.editJob = null;
    this.close = new EventEmitter();
    this.saved = new EventEmitter();
    this.jobPosting = {
      title: "",
      description: "",
      type: "JOB",
      category: "",
      location: "",
      budget: "",
      duration: "",
      techStack: [],
      requirements: [],
      status: "DRAFT"
    };
    this.techStackInput = "";
    this.requirementInput = "";
    this.isSubmitting = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.isEditMode = false;
  }
  ngOnInit() {
    this.resetForm();
  }
  ngOnChanges(changes) {
    if (changes["editJob"] && changes["editJob"].currentValue) {
      this.loadJobForEdit(changes["editJob"].currentValue);
    } else if (changes["show"] && !changes["show"].currentValue) {
      this.resetForm();
    }
  }
  loadJobForEdit(job) {
    console.log("job", job);
    this.isEditMode = true;
    let requirementsArray = [];
    if (Array.isArray(job.requirements)) {
      requirementsArray = job.requirements;
    } else if (job.requirements && typeof job.requirements === "string" && job.requirements.trim()) {
      const reqStr = job.requirements;
      requirementsArray = reqStr.split(/[\n,]/).map((r) => r.trim()).filter((r) => r.length > 0);
    }
    this.jobPosting = {
      id: job.id,
      title: job.title,
      description: job.description,
      type: job.type,
      category: job.category || "",
      location: job.location || "",
      budget: job.budget || "",
      duration: job.duration || "",
      techStack: job.techStack || [],
      requirements: requirementsArray,
      status: job.status
    };
    this.techStackInput = (job.techStack || []).join(", ");
    this.requirementInput = "";
  }
  resetForm() {
    this.isEditMode = false;
    this.jobPosting = {
      title: "",
      description: "",
      type: "JOB",
      category: "",
      location: "",
      budget: "",
      duration: "",
      techStack: [],
      requirements: [],
      status: "DRAFT"
    };
    this.techStackInput = "";
    this.requirementInput = "";
    this.errorMessage = "";
    this.successMessage = "";
    this.isSubmitting = false;
  }
  addTechStack() {
    if (this.techStackInput.trim()) {
      const techs = this.techStackInput.split(",").map((t) => t.trim()).filter((t) => t);
      this.jobPosting.techStack = [...this.jobPosting.techStack || [], ...techs];
      this.techStackInput = "";
    }
  }
  removeTechStack(tech) {
    this.jobPosting.techStack = (this.jobPosting.techStack || []).filter((t) => t !== tech);
  }
  getRequirementsArray() {
    if (Array.isArray(this.jobPosting.requirements)) {
      return this.jobPosting.requirements;
    }
    return [];
  }
  addRequirement() {
    if (this.requirementInput.trim()) {
      const requirements = this.requirementInput.split(",").map((r) => r.trim()).filter((r) => r.length > 0);
      const currentRequirements = this.getRequirementsArray();
      this.jobPosting.requirements = [...currentRequirements, ...requirements];
      this.requirementInput = "";
    }
  }
  removeRequirement(requirement) {
    const currentRequirements = this.getRequirementsArray();
    this.jobPosting.requirements = currentRequirements.filter((r) => r !== requirement);
  }
  onSubmit() {
    if (!this.jobPosting.title || !this.jobPosting.description) {
      this.errorMessage = "Title and description are required";
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = "";
    this.successMessage = "";
    const currentUser = this.authService.getCurrentUser();
    const jobData = __spreadProps(__spreadValues({}, this.jobPosting), {
      techStack: this.jobPosting.techStack || [],
      requirements: this.jobPosting.requirements || [],
      posterId: currentUser?.id || currentUser?.email
    });
    const request = this.isEditMode && this.jobPosting.id ? this.apiService.updateJobPosting(this.jobPosting.id, jobData) : this.apiService.createJobPosting(jobData);
    console.log("req", request);
    request.subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = this.isEditMode ? "Job updated successfully!" : "Job posted successfully!";
        setTimeout(() => {
          this.saved.emit();
          this.onClose();
        }, 1500);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || "Error saving job posting. Please try again.";
      }
    });
  }
  onClose() {
    this.resetForm();
    this.close.emit();
  }
  static {
    this.\u0275fac = function JobPostModalComponent_Factory(t) {
      return new (t || _JobPostModalComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobPostModalComponent, selectors: [["app-job-post-modal"]], inputs: { show: "show", editJob: "editJob" }, outputs: { close: "close", saved: "saved" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8", 3, "click", 4, "ngIf"], [1, "modal-overlay", "fixed", "inset-0", "z-[100]", "flex", "items-center", "justify-center", "p-4", "md:p-8", 3, "click"], [1, "glass-modal", "w-full", "max-w-4xl", 3, "click"], [1, "modal-header"], [1, "flex", "items-center", "justify-between"], [1, "modal-title"], [1, "modal-subtitle"], [1, "h-14", "w-14", "flex", "items-center", "justify-center", "bg-slate-50", "rounded-full", "hover:bg-slate-100", "transition-colors", "text-slate-400", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "modal-content"], ["id", "jobPostForm", 3, "ngSubmit"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "space-y-8"], [1, "input-group"], [1, "input-label"], [1, "type-toggle"], ["type", "button", 1, "type-btn", 3, "click"], ["type", "text", "name", "title", "placeholder", "e.g., Lead Systems Architect", "required", "", 1, "premium-input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "text", "name", "category", "placeholder", "e.g., Core API", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "location", "placeholder", "e.g., Remote / NCR", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "budget", "placeholder", "e.g., 20 - 30 LPA", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "duration", "placeholder", "e.g., Indefinite", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["name", "description", "rows", "6", "placeholder", "Elaborate on objectives, workflow integration, and cultural requirements...", "required", "", 1, "premium-input", "!resize-none", 3, "ngModelChange", "ngModel"], [1, "relative"], ["type", "text", "name", "techStackInput", "placeholder", "e.g., Angular, Spring Boot", 1, "premium-input", "pr-16", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "h-10", "w-10", "bg-indigo-600/10", "text-indigo-600", "rounded-xl", "hover:bg-indigo-600", "hover:text-white", "transition-all", "font-black", 3, "click"], [1, "tag-container", "mt-4"], ["class", "pill-tag", 4, "ngFor", "ngForOf"], ["type", "text", "name", "requirementInput", "placeholder", "e.g., 5+ Yrs DevOps, Masters Degree", 1, "premium-input", "pr-16", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "h-10", "w-10", "bg-emerald-600/10", "text-emerald-600", "rounded-xl", "hover:bg-emerald-600", "hover:text-white", "transition-all", "font-black", 3, "click"], ["class", "pill-tag !bg-emerald-50 !text-emerald-700 !border-emerald-100", 4, "ngFor", "ngForOf"], ["class", "input-group", 4, "ngIf"], ["class", "mt-8 p-6 bg-rose-50 border border-rose-100 rounded-3xl text-rose-500 font-bold uppercase tracking-widest text-[10px] animate-bounce", 4, "ngIf"], ["class", "mt-8 p-6 bg-emerald-50 border border-emerald-100 rounded-3xl text-emerald-600 font-bold uppercase tracking-widest text-[10px]", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "submit", "form", "jobPostForm", 1, "btn-submit", 3, "disabled"], [4, "ngIf"], [1, "pill-tag"], [1, "remove-tag", 3, "click"], [1, "pill-tag", "!bg-emerald-50", "!text-emerald-700", "!border-emerald-100"], ["name", "status", 1, "premium-input", "appearance-none", 3, "ngModelChange", "ngModel"], ["value", "OPEN"], ["value", "CLOSED"], ["value", "FILLED"], [1, "mt-8", "p-6", "bg-rose-50", "border", "border-rose-100", "rounded-3xl", "text-rose-500", "font-bold", "uppercase", "tracking-widest", "text-[10px]", "animate-bounce"], [1, "mt-8", "p-6", "bg-emerald-50", "border", "border-emerald-100", "rounded-3xl", "text-emerald-600", "font-bold", "uppercase", "tracking-widest", "text-[10px]"]], template: function JobPostModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, JobPostModalComponent_div_0_Template, 78, 22, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.modal-overlay[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.glass-modal[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;\n  border-radius: 40px;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(30px) scale(0.98);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 2.5rem 2.5rem 1.5rem;\n  border-bottom: 1px solid rgba(241, 245, 249, 0.8);\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.05em;\n  margin-bottom: 0.5rem;\n}\n.modal-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n}\n.modal-content[_ngcontent-%COMP%] {\n  padding: 2rem 2.5rem;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.modal-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 10px;\n}\n.input-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 0.75rem;\n  padding-left: 0.25rem;\n}\n.premium-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1rem 1.25rem;\n  background: #f8fafc;\n  border: 2px solid #f1f5f9;\n  border-radius: 18px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #1e293b;\n  transition: all 0.2s ease;\n}\n.premium-input[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  border-color: #6366f1;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);\n  outline: none;\n}\n.tag-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 1rem;\n}\n.pill-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  background: #eef2ff;\n  color: #4338ca;\n  border-radius: 100px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  border: 1px solid #e0e7ff;\n}\n.remove-tag[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.23s;\n}\n.remove-tag[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 2rem 2.5rem 2.5rem;\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  transition: all 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  padding: 1rem 2.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  color: #fff;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.4);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 15px 30px -5px rgba(79, 70, 229, 0.5);\n}\n.btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  filter: grayscale(1);\n}\n.type-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f1f5f9;\n  padding: 0.4rem;\n  border-radius: 18px;\n  gap: 0.25rem;\n}\n.type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem 1.5rem;\n  border-radius: 14px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  transition: all 0.2s;\n  color: #64748b;\n}\n.type-btn.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #4f46e5;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=job-post-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobPostModalComponent, { className: "JobPostModalComponent", filePath: "src\\app\\components\\modals\\job-post-modal\\job-post-modal.component.ts", lineNumber: 15 });
})();

// src/app/pages/job-listings/job-listings.component.ts
function JobListingsComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function JobListingsComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreateJob());
    });
    \u0275\u0275elementStart(1, "span", 14);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Post Opportunity ");
    \u0275\u0275elementEnd();
  }
}
function JobListingsComponent_div_8_div_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMyJobsCount("DRAFT"));
  }
}
function JobListingsComponent_div_8_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function JobListingsComponent_div_8_div_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMyJobsCount("PUBLISHED"));
  }
}
function JobListingsComponent_div_8_div_6_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function JobListingsComponent_div_8_div_6_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMyJobsCount("CLOSED"));
  }
}
function JobListingsComponent_div_8_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function JobListingsComponent_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20);
    \u0275\u0275listener("click", function JobListingsComponent_div_8_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchMyJobsStatus("DRAFT"));
    });
    \u0275\u0275text(2, " Drafts ");
    \u0275\u0275template(3, JobListingsComponent_div_8_div_6_span_3_Template, 2, 1, "span", 21)(4, JobListingsComponent_div_8_div_6_div_4_Template, 1, 0, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function JobListingsComponent_div_8_div_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchMyJobsStatus("PUBLISHED"));
    });
    \u0275\u0275text(6, " Live ");
    \u0275\u0275template(7, JobListingsComponent_div_8_div_6_span_7_Template, 2, 1, "span", 24)(8, JobListingsComponent_div_8_div_6_div_8_Template, 1, 0, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 20);
    \u0275\u0275listener("click", function JobListingsComponent_div_8_div_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.switchMyJobsStatus("CLOSED"));
    });
    \u0275\u0275text(10, " Archived ");
    \u0275\u0275template(11, JobListingsComponent_div_8_div_6_span_11_Template, 2, 1, "span", 25)(12, JobListingsComponent_div_8_div_6_div_12_Template, 1, 0, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.myJobsStatusTab === "DRAFT" ? "text-indigo-600 font-black" : "text-slate-400 font-bold");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getMyJobsCount("DRAFT") > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.myJobsStatusTab === "DRAFT");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.myJobsStatusTab === "PUBLISHED" ? "text-indigo-600 font-black" : "text-slate-400 font-bold");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getMyJobsCount("PUBLISHED") > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.myJobsStatusTab === "PUBLISHED");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.myJobsStatusTab === "CLOSED" ? "text-indigo-600 font-black" : "text-slate-400 font-bold");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getMyJobsCount("CLOSED") > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.myJobsStatusTab === "CLOSED");
  }
}
function JobListingsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "button", 17);
    \u0275\u0275listener("click", function JobListingsComponent_div_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("OTHERS"));
    });
    \u0275\u0275text(3, " Explore Openings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 17);
    \u0275\u0275listener("click", function JobListingsComponent_div_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchTab("YOURS"));
    });
    \u0275\u0275text(5, " My Postings ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, JobListingsComponent_div_8_div_6_Template, 13, 12, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.activeTab === "OTHERS" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.activeTab === "YOURS" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "YOURS");
  }
}
function JobListingsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "label", 32);
    \u0275\u0275text(3, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function JobListingsComponent_div_9_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.typeFilter, $event) || (ctx_r1.typeFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function JobListingsComponent_div_9_Template_select_change_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(5, "option", 34);
    \u0275\u0275text(6, "All Opportunities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 35);
    \u0275\u0275text(8, "Full-time Jobs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 36);
    \u0275\u0275text(10, "Project Gigs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 31)(12, "label", 32);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 33);
    \u0275\u0275twoWayListener("ngModelChange", function JobListingsComponent_div_9_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.statusFilter, $event) || (ctx_r1.statusFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function JobListingsComponent_div_9_Template_select_change_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementStart(15, "option", 34);
    \u0275\u0275text(16, "Any Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 37);
    \u0275\u0275text(18, "Accepting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 38);
    \u0275\u0275text(20, "Paused");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 39);
    \u0275\u0275text(22, "Filled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 40)(24, "label", 32);
    \u0275\u0275text(25, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 41)(27, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function JobListingsComponent_div_9_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function JobListingsComponent_div_9_Template_input_input_27_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 44);
    \u0275\u0275element(30, "path", 45);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.typeFilter);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.statusFilter);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
  }
}
function JobListingsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275element(1, "div", 47);
    \u0275\u0275elementEnd();
  }
}
function JobListingsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function JobListingsComponent_div_12_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "POSTED BY");
    \u0275\u0275elementEnd();
  }
}
function JobListingsComponent_div_12_tr_16_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "You've Applied");
    \u0275\u0275elementEnd();
  }
}
function JobListingsComponent_div_12_tr_16_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const job_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r7.postedBy || (job_r7.postedByEmail == null ? null : (tmp_4_0 = job_r7.postedByEmail.split("@")) == null ? null : tmp_4_0.at(0)) || "Verified Member", " ");
  }
}
function JobListingsComponent_div_12_tr_16_div_26_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function JobListingsComponent_div_12_tr_16_div_26_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const job_r7 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPublishJob(job_r7));
    });
    \u0275\u0275text(1, " \u2705 ");
    \u0275\u0275elementEnd();
  }
}
function JobListingsComponent_div_12_tr_16_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "button", 72);
    \u0275\u0275listener("click", function JobListingsComponent_div_12_tr_16_div_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const job_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEditJob(job_r7));
    });
    \u0275\u0275text(2, " \u270F\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, JobListingsComponent_div_12_tr_16_div_26_button_3_Template, 2, 0, "button", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", job_r7.status === "DRAFT");
  }
}
function JobListingsComponent_div_12_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 54)(1, "td")(2, "div", 55)(3, "div", 56)(4, "span", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "div", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 59);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "td")(12, "span", 60);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 61);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "div", 62)(18, "span", 63);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, JobListingsComponent_div_12_tr_16_span_20_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, JobListingsComponent_div_12_tr_16_td_21_Template, 2, 1, "td", 65);
    \u0275\u0275elementStart(22, "td", 52)(23, "div", 66)(24, "button", 67);
    \u0275\u0275listener("click", function JobListingsComponent_div_12_tr_16_Template_button_click_24_listener() {
      const job_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onViewJob(job_r7));
    });
    \u0275\u0275text(25, " VIEW ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, JobListingsComponent_div_12_tr_16_div_26_Template, 4, 1, "div", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(job_r7.type === "JOB" ? "\u{1F3E2}" : "\u{1F680}");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r7.location || "Remote Available");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", job_r7.type === "JOB" ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r7.type, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r7.category || "Professional");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getStatusColor(job_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r7.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isOwnJob(job_r7) && ctx_r1.hasApplied(job_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "OTHERS" || ctx_r1.isAdminView);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.canEditJob(job_r7));
  }
}
function JobListingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "table", 50)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "OPPORTUNITY DETAIL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "TYPE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "CATEGORY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "STATUS");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, JobListingsComponent_div_12_th_12_Template, 2, 0, "th", 51);
    \u0275\u0275elementStart(13, "th", 52);
    \u0275\u0275text(14, "ACTION");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, JobListingsComponent_div_12_tr_16_Template, 27, 12, "tr", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "OTHERS" || ctx_r1.isAdminView);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.filteredJobPostings);
  }
}
function JobListingsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2, "\u{1F4BC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 77);
    \u0275\u0275text(4, "No opportunities found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 78);
    \u0275\u0275text(6, "Try broadening your search or adjust your filters to see more results from the community.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 79);
    \u0275\u0275listener("click", function JobListingsComponent_div_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.typeFilter = "ALL";
      ctx_r1.statusFilter = "ALL";
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(8, "RESET ALL FILTERS");
    \u0275\u0275elementEnd()();
  }
}
var JobListingsComponent = class _JobListingsComponent {
  constructor(apiService, authService, toastr, confirmService) {
    this.apiService = apiService;
    this.authService = authService;
    this.toastr = toastr;
    this.confirmService = confirmService;
    this.showPostButton = true;
    this.isAdminView = false;
    this.jobSelected = new EventEmitter();
    this.jobPostings = [];
    this.filteredJobPostings = [];
    this.isLoading = false;
    this.errorMessage = "";
    this.activeTab = "OTHERS";
    this.myJobsStatusTab = "DRAFT";
    this.typeFilter = "ALL";
    this.statusFilter = "ALL";
    this.searchQuery = "";
    this.appliedJobs = /* @__PURE__ */ new Set();
    this.showJobDetailModal = false;
    this.showJobPostModal = false;
    this.selectedJob = null;
    this.selectedJobForEdit = null;
    this.currentUser = null;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.loadJobPostings();
  }
  loadJobPostings() {
    this.isLoading = true;
    this.errorMessage = "";
    if (this.isAdminView) {
      this.loadAllJobs();
    } else {
      this.loadJobsForCurrentTab();
    }
  }
  loadAllJobs() {
    this.apiService.getJobPostings().subscribe({
      next: (response) => {
        this.jobPostings = Array.isArray(response) ? response : [];
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading job postings:", error);
        this.errorMessage = "Error loading job postings. Please try again.";
        this.jobPostings = [];
        this.filteredJobPostings = [];
        this.isLoading = false;
      }
    });
  }
  loadJobsForCurrentTab() {
    const apiCall = this.activeTab === "YOURS" ? this.apiService.getMyJobPostings() : this.apiService.getOtherJobPostings();
    apiCall.subscribe({
      next: (response) => {
        this.jobPostings = Array.isArray(response) ? response : [];
        if (this.activeTab === "OTHERS") {
          this.checkAppliedStatus();
        }
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error(`Error loading ${this.activeTab === "YOURS" ? "my" : "other"} job postings:`, error);
        this.errorMessage = `Error loading ${this.activeTab === "YOURS" ? "your" : "other"} job postings. Please try again.`;
        this.jobPostings = [];
        this.filteredJobPostings = [];
        this.isLoading = false;
      }
    });
  }
  checkAppliedStatus() {
    if (!this.currentUser)
      return;
    this.jobPostings.forEach((job) => {
      if (job.id && !this.isOwnJob(job)) {
        this.apiService.checkProposalStatus(job.id).subscribe({
          next: (response) => {
            if (response?.hasApplied) {
              this.appliedJobs.add(job.id);
            }
          },
          error: () => {
          }
        });
      }
    });
  }
  isOwnJob(job) {
    if (!this.currentUser || !job)
      return false;
    return job.postedBy === this.currentUser.id || job.postedByEmail === this.currentUser.email;
  }
  canDeleteJob(job) {
    return !this.isAdminView && this.isOwnJob(job);
  }
  hasApplied(job) {
    return job.id ? this.appliedJobs.has(job.id) : false;
  }
  switchTab(tab) {
    this.activeTab = tab;
    if (tab === "YOURS") {
      this.myJobsStatusTab = "DRAFT";
    }
    if (!this.isAdminView) {
      this.loadJobsForCurrentTab();
    } else {
      this.applyFilters();
    }
  }
  switchMyJobsStatus(tab) {
    this.myJobsStatusTab = tab;
    this.applyFilters();
  }
  getMyJobsCount(status) {
    if (this.activeTab !== "YOURS" || this.isAdminView)
      return 0;
    return this.jobPostings.filter((job) => {
      if (status === "DRAFT") {
        return job.status === "DRAFT";
      } else if (status === "PUBLISHED") {
        return job.status === "PUBLISHED";
      } else if (status === "CLOSED") {
        return job.status === "CLOSED";
      }
      return false;
    }).length;
  }
  applyFilters() {
    this.filteredJobPostings = this.jobPostings.filter((job) => {
      if (!this.isAdminView && this.activeTab === "OTHERS") {
        if (job.status !== "PUBLISHED") {
          return false;
        }
      }
      if (!this.isAdminView && this.activeTab === "YOURS") {
        if (this.myJobsStatusTab === "DRAFT" && job.status !== "DRAFT") {
          return false;
        } else if (this.myJobsStatusTab === "PUBLISHED" && job.status !== "PUBLISHED") {
          return false;
        } else if (this.myJobsStatusTab === "CLOSED" && job.status !== "CLOSED") {
          return false;
        }
      }
      if (this.typeFilter !== "ALL" && job.type !== this.typeFilter) {
        return false;
      }
      if (this.statusFilter !== "ALL" && job.status !== this.statusFilter) {
        if (!(this.activeTab === "YOURS" && !this.isAdminView)) {
          return false;
        }
      }
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        const matchesTitle = job.title?.toLowerCase().includes(query);
        const matchesDescription = job.description?.toLowerCase().includes(query);
        const matchesCategory = job.category?.toLowerCase().includes(query);
        const matchesTechStack = job.techStack?.some((tech) => tech.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDescription && !matchesCategory && !matchesTechStack) {
          return false;
        }
      }
      return true;
    });
  }
  onCreateJob() {
    this.selectedJobForEdit = null;
    this.showJobPostModal = true;
  }
  onEditJob(job) {
    this.selectedJobForEdit = job;
    this.showJobPostModal = true;
  }
  onViewJob(job) {
    if (job.id) {
      this.apiService.getJobPostingById(job.id).subscribe({
        next: (response) => {
          this.selectedJob = response;
          this.showJobDetailModal = true;
        },
        error: (error) => {
          console.error("Error loading job details:", error);
          this.selectedJob = job;
          this.showJobDetailModal = true;
        }
      });
    } else {
      this.selectedJob = job;
      this.showJobDetailModal = true;
    }
  }
  onEditJobFromDetail(job) {
    this.showJobDetailModal = false;
    this.onEditJob(job);
  }
  onPublishJob(job) {
    if (!job.id)
      return;
    this.confirmService.confirm({
      title: "Publish Job",
      message: `Are you sure you want to publish "${job.title}"?`,
      confirmLabel: "Publish",
      cancelLabel: "Cancel"
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.isLoading = true;
      this.apiService.publishJob(job.id).subscribe({
        next: () => {
          this.isLoading = false;
          if (!this.isAdminView && this.activeTab === "YOURS") {
            this.myJobsStatusTab = "PUBLISHED";
          }
          this.toastr.success("Job published successfully", "Published");
          if (this.isAdminView) {
            this.loadAllJobs();
          } else {
            this.loadJobsForCurrentTab();
          }
        },
        error: (error) => {
          this.isLoading = false;
          console.error("Error publishing job:", error);
          this.toastr.error("Error publishing job posting. Please try again.", "Error");
        }
      });
    });
  }
  onDeleteJob(job) {
    if (!job.id)
      return;
    this.confirmService.confirm({
      title: "Delete Job",
      message: `Are you sure you want to delete "${job.title}"?`,
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      isDestructive: true
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.apiService.deleteJobPosting(job.id).subscribe({
        next: () => {
          this.toastr.success("Job deleted successfully", "Deleted");
          this.loadJobPostings();
        },
        error: (error) => {
          console.error("Error deleting job:", error);
          this.toastr.error("Error deleting job posting. Please try again.", "Error");
        }
      });
    });
  }
  closeJobDetailModal() {
    this.showJobDetailModal = false;
    this.selectedJob = null;
  }
  closeJobPostModal() {
    this.showJobPostModal = false;
    this.selectedJobForEdit = null;
  }
  onJobSaved() {
    if (this.isAdminView) {
      this.loadAllJobs();
    } else {
      this.loadJobsForCurrentTab();
    }
  }
  onProposalSubmitted() {
    if (this.selectedJob?.id) {
      this.appliedJobs.add(this.selectedJob.id);
    }
    if (this.isAdminView) {
      this.loadAllJobs();
    } else {
      this.loadJobsForCurrentTab();
    }
  }
  canEditJob(job) {
    if (!this.currentUser || !job)
      return false;
    return job.postedBy === this.currentUser.id || job.postedByEmail === this.currentUser.email || this.isAdminView;
  }
  getTypeColor(type) {
    return type === "JOB" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800";
  }
  getStatusColor(status) {
    const colors = {
      "DRAFT": "bg-yellow-100 text-yellow-800",
      "PUBLISHED": "bg-green-100 text-green-800",
      "OPEN": "bg-green-100 text-green-800",
      "CLOSED": "bg-red-100 text-red-800",
      "FILLED": "bg-gray-100 text-gray-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  }
  static {
    this.\u0275fac = function JobListingsComponent_Factory(t) {
      return new (t || _JobListingsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ConfirmService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobListingsComponent, selectors: [["app-job-listings"]], inputs: { showPostButton: "showPostButton", isAdminView: "isAdminView" }, outputs: { jobSelected: "jobSelected" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 11, consts: [[1, "space-y-8", "animate-fade-in"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-6"], [1, "text-3xl", "font-extrabold", "text-slate-900", "tracking-tight"], [1, "text-slate-500", "font-medium", "mt-1"], ["class", "inline-flex items-center justify-center px-6 py-3.5 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 font-bold transition-all shadow-md hover:shadow-lg active:scale-95", 3, "click", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], ["class", "premium-card p-6 grid grid-cols-1 md:grid-cols-4 gap-4", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-32", 4, "ngIf"], ["class", "p-6 bg-red-50 border border-red-100 rounded-3xl text-red-700 text-sm font-bold", 4, "ngIf"], ["class", "premium-card overflow-hidden", 4, "ngIf"], ["class", "premium-card p-24 text-center space-y-4", 4, "ngIf"], [3, "close", "proposalSubmitted", "editJob", "show", "jobPosting"], [3, "close", "saved", "show", "editJob"], [1, "inline-flex", "items-center", "justify-center", "px-6", "py-3.5", "bg-indigo-600", "text-white", "rounded-2xl", "hover:bg-indigo-700", "font-bold", "transition-all", "shadow-md", "hover:shadow-lg", "active:scale-95", 3, "click"], [1, "mr-2", "text-xl"], [1, "space-y-6"], [1, "flex", "items-center", "gap-2", "p-1.5", "bg-slate-100", "rounded-2xl", "w-fit"], [1, "px-6", "py-2.5", "rounded-[1.1rem]", "text-sm", "font-black", "transition-all", 3, "click"], ["class", "flex gap-4 border-b border-slate-100 pb-4", 4, "ngIf"], [1, "flex", "gap-4", "border-b", "border-slate-100", "pb-4"], [1, "text-xs", "uppercase", "tracking-widest", "relative", 3, "click"], ["class", "ml-2 bg-amber-100 text-amber-600 px-2 py-0.5 rounded-md text-[9px]", 4, "ngIf"], ["class", "absolute -bottom-4.5 left-0 w-full h-1 bg-indigo-600 rounded-full", 4, "ngIf"], [1, "text-xs", "uppercase", "tracking-widest", "relative", "px-4", 3, "click"], ["class", "ml-2 bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-md text-[9px]", 4, "ngIf"], ["class", "ml-2 bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md text-[9px]", 4, "ngIf"], [1, "ml-2", "bg-amber-100", "text-amber-600", "px-2", "py-0.5", "rounded-md", "text-[9px]"], [1, "absolute", "-bottom-4.5", "left-0", "w-full", "h-1", "bg-indigo-600", "rounded-full"], [1, "ml-2", "bg-emerald-100", "text-emerald-600", "px-2", "py-0.5", "rounded-md", "text-[9px]"], [1, "ml-2", "bg-slate-100", "text-slate-500", "px-2", "py-0.5", "rounded-md", "text-[9px]"], [1, "premium-card", "p-6", "grid", "grid-cols-1", "md:grid-cols-4", "gap-4"], [1, "space-y-1.5"], [1, "px-1", "text-[10px]", "font-black", "text-slate-400", "uppercase", "tracking-widest"], [1, "w-full", "bg-slate-50", "border", "border-slate-100", "rounded-xl", "px-4", "py-2.5", "text-sm", "font-bold", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "transition-all", 3, "ngModelChange", "change", "ngModel"], ["value", "ALL"], ["value", "JOB"], ["value", "PROJECT"], ["value", "OPEN"], ["value", "CLOSED"], ["value", "FILLED"], [1, "md:col-span-2", "space-y-1.5"], [1, "relative"], ["type", "text", "placeholder", "Search skills, roles or companies...", 1, "w-full", "bg-slate-50", "border", "border-slate-100", "rounded-xl", "pl-10", "pr-4", "py-2.5", "text-sm", "font-bold", "focus:ring-2", "focus:ring-indigo-500", "outline-none", "transition-all", 3, "ngModelChange", "input", "ngModel"], [1, "absolute", "left-3.5", "top-3", "text-slate-400"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "flex", "flex-col", "items-center", "justify-center", "py-32"], [1, "w-12", "h-12", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin", "mb-4"], [1, "p-6", "bg-red-50", "border", "border-red-100", "rounded-3xl", "text-red-700", "text-sm", "font-bold"], [1, "premium-card", "overflow-hidden"], [1, "premium-table"], [4, "ngIf"], [1, "text-right"], ["class", "group", 4, "ngFor", "ngForOf"], [1, "group"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-xl", "bg-slate-50", "border", "border-slate-100", "group-hover:bg-indigo-50", "transition-colors"], [1, "text-xl"], [1, "font-black", "text-slate-900", "leading-tight"], [1, "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-widest", "mt-1"], [1, "px-2.5", "py-1", "rounded-md", "text-[9px]", "font-black", "uppercase", "tracking-widest", 3, "ngClass"], [1, "text-xs", "font-bold", "text-slate-600"], [1, "flex", "flex-col", "gap-1"], [1, "px-2.5", "py-1", "rounded-md", "text-[9px]", "font-black", "uppercase", "tracking-widest", "bg-opacity-10", "w-fit"], ["class", "text-[9px] font-black text-purple-600 uppercase", 4, "ngIf"], ["class", "text-xs font-bold text-slate-500 uppercase", 4, "ngIf"], [1, "flex", "items-center", "justify-end", "gap-2", "px-4"], [1, "px-5", "py-2.5", "bg-indigo-600", "text-white", "text-xs", "font-black", "rounded-xl", "hover:bg-slate-900", "transition-all", "shadow-sm", 3, "click"], ["class", "flex gap-2", 4, "ngIf"], [1, "text-[9px]", "font-black", "text-purple-600", "uppercase"], [1, "text-xs", "font-bold", "text-slate-500", "uppercase"], [1, "flex", "gap-2"], [1, "w-9", "h-9", "flex", "items-center", "justify-center", "bg-slate-50", "border", "border-slate-100", "text-slate-500", "rounded-xl", "hover:bg-slate-900", "hover:text-white", "transition-all", 3, "click"], ["class", "w-9 h-9 flex items-center justify-center bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all", 3, "click", 4, "ngIf"], [1, "w-9", "h-9", "flex", "items-center", "justify-center", "bg-emerald-50", "border", "border-emerald-100", "text-emerald-600", "rounded-xl", "hover:bg-emerald-600", "hover:text-white", "transition-all", 3, "click"], [1, "premium-card", "p-24", "text-center", "space-y-4"], [1, "text-6xl", "block", "mb-4", "grayscale", "opacity-40"], [1, "text-2xl", "font-black", "text-slate-900"], [1, "text-slate-400", "max-w-sm", "mx-auto", "font-medium"], [1, "text-sm", "font-black", "text-indigo-600", "hover:underline", 3, "click"]], template: function JobListingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        \u0275\u0275text(4, "Jobs & Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Discover career-defining roles and high-impact projects.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, JobListingsComponent_button_7_Template, 4, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, JobListingsComponent_div_8_Template, 7, 5, "div", 5)(9, JobListingsComponent_div_9_Template, 31, 3, "div", 6)(10, JobListingsComponent_div_10_Template, 2, 0, "div", 7)(11, JobListingsComponent_div_11_Template, 2, 1, "div", 8)(12, JobListingsComponent_div_12_Template, 17, 2, "div", 9)(13, JobListingsComponent_div_13_Template, 9, 0, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "app-job-detail-modal", 11);
        \u0275\u0275listener("close", function JobListingsComponent_Template_app_job_detail_modal_close_14_listener() {
          return ctx.closeJobDetailModal();
        })("proposalSubmitted", function JobListingsComponent_Template_app_job_detail_modal_proposalSubmitted_14_listener() {
          return ctx.onProposalSubmitted();
        })("editJob", function JobListingsComponent_Template_app_job_detail_modal_editJob_14_listener($event) {
          return ctx.onEditJobFromDetail($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "app-job-post-modal", 12);
        \u0275\u0275listener("close", function JobListingsComponent_Template_app_job_post_modal_close_15_listener() {
          return ctx.closeJobPostModal();
        })("saved", function JobListingsComponent_Template_app_job_post_modal_saved_15_listener() {
          return ctx.onJobSaved();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.showPostButton);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isAdminView);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isAdminView && ctx.activeTab === "OTHERS");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredJobPostings.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredJobPostings.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.showJobDetailModal)("jobPosting", ctx.selectedJob);
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.showJobPostModal)("editJob", ctx.selectedJobForEdit);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, JobDetailModalComponent, JobPostModalComponent], styles: ["\n\n.line-clamp-3[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=job-listings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobListingsComponent, { className: "JobListingsComponent", filePath: "src\\app\\pages\\job-listings\\job-listings.component.ts", lineNumber: 19 });
})();

export {
  JobPostModalComponent,
  JobListingsComponent
};
//# sourceMappingURL=chunk-32FFO5A4.js.map
