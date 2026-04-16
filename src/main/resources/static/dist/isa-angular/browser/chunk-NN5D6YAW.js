import {
  DataService
} from "./chunk-RX5FVGNL.js";
import {
  AuthService
} from "./chunk-ULHL74DO.js";
import "./chunk-MEK4GBIB.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-DNDVYN6P.js";

// src/app/pages/blogs/blogs.component.ts
function BlogsComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function BlogsComponent_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate("DASHBOARD"));
    });
    \u0275\u0275text(1, " \u2190 Back to Dashboard ");
    \u0275\u0275elementEnd();
  }
}
function BlogsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const post_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r3.excerpt);
  }
}
var BlogsComponent = class _BlogsComponent {
  constructor(dataService, authService) {
    this.dataService = dataService;
    this.authService = authService;
    this.navigate = new EventEmitter();
    this.blogPosts = [];
    this.currentUser = null;
    this.currentUser = this.authService.getCurrentUser();
  }
  ngOnInit() {
    this.blogPosts = this.dataService.getBlogPosts();
  }
  onNavigate(view) {
    this.navigate.emit(view);
  }
  static {
    this.\u0275fac = function BlogsComponent_Factory(t) {
      return new (t || _BlogsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsComponent, selectors: [["app-blogs"]], outputs: { navigate: "navigate" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8", "w-full"], ["class", "mb-6 text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium transition-colors", 3, "click", 4, "ngIf"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold"], [1, "px-4", "py-2", "bg-slate-900", "text-white", "rounded", 3, "click"], [1, "grid", "gap-6", "md:grid-cols-3"], ["class", "bg-white p-6 rounded shadow border border-slate-200", 4, "ngFor", "ngForOf"], [1, "mb-6", "text-slate-500", "hover:text-slate-800", "flex", "items-center", "gap-1", "font-medium", "transition-colors", 3, "click"], [1, "bg-white", "p-6", "rounded", "shadow", "border", "border-slate-200"], [1, "text-xs", "text-blue-600", "font-bold", "mb-2"], [1, "font-bold", "text-lg", "mb-2"], [1, "text-sm", "text-slate-500", "line-clamp-2"]], template: function BlogsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, BlogsComponent_button_1_Template, 2, 0, "button", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Knowledge Hub");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 4);
        \u0275\u0275listener("click", function BlogsComponent_Template_button_click_5_listener() {
          return ctx.onNavigate("BLOG_CREATE");
        });
        \u0275\u0275text(6, "Write Article");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275template(8, BlogsComponent_div_8_Template, 7, 3, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentUser);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.blogPosts);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.line-clamp-2[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=blogs.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsComponent, { className: "BlogsComponent", filePath: "src\\app\\pages\\blogs\\blogs.component.ts", lineNumber: 14 });
})();
export {
  BlogsComponent
};
//# sourceMappingURL=chunk-NN5D6YAW.js.map
