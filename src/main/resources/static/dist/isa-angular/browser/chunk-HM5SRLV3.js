import {
  DataService
} from "./chunk-RX5FVGNL.js";
import {
  AuthService
} from "./chunk-ULHL74DO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-PKI2UZZD.js";
import {
  ToastrService
} from "./chunk-BQ4A4C7G.js";
import "./chunk-MEK4GBIB.js";
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
} from "./chunk-DNDVYN6P.js";

// src/app/pages/blog-create/blog-create.component.ts
var BlogCreateComponent = class _BlogCreateComponent {
  constructor(dataService, authService, toastr) {
    this.dataService = dataService;
    this.authService = authService;
    this.toastr = toastr;
    this.navigate = new EventEmitter();
    this.newBlog = { title: "", category: "Technology", excerpt: "", content: "" };
    this.currentUser = null;
    this.currentUser = this.authService.getCurrentUser();
  }
  onNavigate(view) {
    this.navigate.emit(view);
  }
  submitBlog() {
    const post = {
      id: "b_" + Date.now(),
      title: this.newBlog.title,
      excerpt: this.newBlog.excerpt,
      authorName: this.currentUser?.name || "Unknown",
      authorId: this.currentUser?.id || "",
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      category: this.newBlog.category,
      readTime: "5 min",
      content: this.newBlog.content,
      likes: 0,
      status: "PENDING"
    };
    this.dataService.addBlogPost(post);
    this.toastr.success("Submitted blog post successfully", "Submitted");
    this.onNavigate("BLOGS");
  }
  static {
    this.\u0275fac = function BlogCreateComponent_Factory(t) {
      return new (t || _BlogCreateComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogCreateComponent, selectors: [["app-blog-create"]], outputs: { navigate: "navigate" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 4, consts: [[1, "max-w-2xl", "mx-auto", "px-4", "py-8"], [1, "mb-6", "text-slate-500", "hover:text-slate-800", "flex", "items-center", "gap-1", "font-medium", "transition-colors", 3, "click"], [1, "bg-white", "shadow", "rounded-lg", "border", "border-slate-200", "p-8"], [1, "text-2xl", "font-bold", "text-slate-900", "mb-6", "border-b", "pb-4"], [1, "space-y-5"], [1, "block", "text-sm", "font-medium", "text-slate-700", "mb-1"], ["type", "text", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-blue-500", "focus:border-blue-500", 3, "ngModelChange", "ngModel"], [1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "bg-white", "focus:ring-blue-500", "focus:border-blue-500", 3, "ngModelChange", "ngModel"], ["rows", "6", 1, "block", "w-full", "border", "border-slate-300", "rounded-lg", "py-2", "px-3", "focus:ring-blue-500", "focus:border-blue-500", 3, "ngModelChange", "ngModel"], [1, "w-full", "bg-blue-600", "text-white", "py-3", "rounded-lg", "font-bold", "hover:bg-blue-700", "shadow-md", "mt-4", "transition-all", 3, "click"]], template: function BlogCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function BlogCreateComponent_Template_button_click_1_listener() {
          return ctx.onNavigate("BLOGS");
        });
        \u0275\u0275text(2, " \u2190 Back to Blogs ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "h2", 3);
        \u0275\u0275text(5, "Write New Article");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "div")(8, "label", 5);
        \u0275\u0275text(9, "Article Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function BlogCreateComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newBlog.title, $event) || (ctx.newBlog.title = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div")(12, "label", 5);
        \u0275\u0275text(13, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function BlogCreateComponent_Template_select_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newBlog.category, $event) || (ctx.newBlog.category = $event);
          return $event;
        });
        \u0275\u0275elementStart(15, "option");
        \u0275\u0275text(16, "Technology");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "option");
        \u0275\u0275text(18, "Business");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "option");
        \u0275\u0275text(20, "Startups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "option");
        \u0275\u0275text(22, "Policy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div")(24, "label", 5);
        \u0275\u0275text(25, "Short Excerpt");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function BlogCreateComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newBlog.excerpt, $event) || (ctx.newBlog.excerpt = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div")(28, "label", 5);
        \u0275\u0275text(29, "Content");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "textarea", 8);
        \u0275\u0275twoWayListener("ngModelChange", function BlogCreateComponent_Template_textarea_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newBlog.content, $event) || (ctx.newBlog.content = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "button", 9);
        \u0275\u0275listener("click", function BlogCreateComponent_Template_button_click_31_listener() {
          return ctx.submitBlog();
        });
        \u0275\u0275text(32, "Submit for Review");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.newBlog.title);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newBlog.category);
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.newBlog.excerpt);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.newBlog.content);
      }
    }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n/*# sourceMappingURL=blog-create.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogCreateComponent, { className: "BlogCreateComponent", filePath: "src\\app\\pages\\blog-create\\blog-create.component.ts", lineNumber: 16 });
})();
export {
  BlogCreateComponent
};
//# sourceMappingURL=chunk-HM5SRLV3.js.map
