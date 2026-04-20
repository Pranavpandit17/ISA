import {
  ToastService
} from "./chunk-BMTGONH6.js";
import {
  DataService
} from "./chunk-RLDPKJFY.js";
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
import "./chunk-BACPM34C.js";
import {
  CommonModule,
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CRF7CKPV.js";

// src/app/pages/project-post/project-post.component.ts
var ProjectPostComponent = class _ProjectPostComponent {
  constructor(dataService, authService, toastService) {
    this.dataService = dataService;
    this.authService = authService;
    this.toastService = toastService;
    this.navigate = new EventEmitter();
    this.newProject = { title: "", budget: "", description: "", techStackRaw: "" };
    this.currentUser = null;
    this.currentUser = this.authService.getCurrentUser();
  }
  onNavigate(view) {
    this.navigate.emit(view);
  }
  submitProject() {
    const project = {
      id: "p_" + Date.now(),
      title: this.newProject.title,
      budget: this.newProject.budget,
      duration: "TBD",
      techStack: this.newProject.techStackRaw.split(",").map((s) => s.trim()),
      postedBy: this.currentUser?.name || "Unknown",
      posterId: this.currentUser?.id || "",
      description: this.newProject.description,
      postedDate: /* @__PURE__ */ new Date(),
      status: "OPEN"
    };
    this.dataService.addProject(project);
    this.toastService.success("Your development project has been posted successfully!");
    this.onNavigate("BENCH");
  }
  static {
    this.\u0275fac = function ProjectPostComponent_Factory(t) {
      return new (t || _ProjectPostComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectPostComponent, selectors: [["app-project-post"]], outputs: { navigate: "navigate" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 4, consts: [[1, "max-w-2xl", "mx-auto", "px-4", "py-8"], [1, "mb-6", "text-slate-500", "hover:text-slate-800", "flex", "items-center", "gap-1", "font-medium", "transition-colors", 3, "click"], [1, "bg-white", "shadow", "rounded-lg", "border", "border-slate-200", "p-8"], [1, "text-2xl", "font-bold", "text-slate-900", "mb-6", "border-b", "pb-4"], [1, "space-y-5"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1"], ["type", "text", "placeholder", "e.g. E-commerce App Development", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. \u20B9 5L - \u20B9 8L", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "Describe the project requirements...", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Flutter, Firebase, Node.js", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-indigo-500", "focus:border-indigo-500", 3, "ngModelChange", "ngModel"], [1, "w-full", "bg-indigo-600", "text-white", "py-3", "rounded-lg", "font-bold", "hover:bg-indigo-700", "shadow-md", "mt-4", "transition-all", 3, "click"]], template: function ProjectPostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function ProjectPostComponent_Template_button_click_1_listener() {
          return ctx.onNavigate("DASHBOARD");
        });
        \u0275\u0275text(2, " \u2190 Back to Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "h2", 3);
        \u0275\u0275text(5, "Post Project Requirement");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "div")(8, "label", 5);
        \u0275\u0275text(9, "Project Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function ProjectPostComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newProject.title, $event) || (ctx.newProject.title = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div")(12, "label", 5);
        \u0275\u0275text(13, "Estimated Budget");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function ProjectPostComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newProject.budget, $event) || (ctx.newProject.budget = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div")(16, "label", 5);
        \u0275\u0275text(17, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "textarea", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ProjectPostComponent_Template_textarea_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newProject.description, $event) || (ctx.newProject.description = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div")(20, "label", 5);
        \u0275\u0275text(21, "Required Tech Stack (Comma separated)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function ProjectPostComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newProject.techStackRaw, $event) || (ctx.newProject.techStackRaw = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 10);
        \u0275\u0275listener("click", function ProjectPostComponent_Template_button_click_23_listener() {
          return ctx.submitProject();
        });
        \u0275\u0275text(24, "Post Project");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.newProject.title);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newProject.budget);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newProject.description);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newProject.techStackRaw);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n/*# sourceMappingURL=project-post.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectPostComponent, { className: "ProjectPostComponent", filePath: "src\\app\\pages\\project-post\\project-post.component.ts", lineNumber: 16 });
})();
export {
  ProjectPostComponent
};
//# sourceMappingURL=chunk-AZKVJDE4.js.map
