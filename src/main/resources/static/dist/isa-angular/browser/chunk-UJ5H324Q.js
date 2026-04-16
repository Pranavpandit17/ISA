import {
  AuthService,
  Router
} from "./chunk-ULHL74DO.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DNDVYN6P.js";

// src/app/services/app-navigation.service.ts
var AppNavigationService = class _AppNavigationService {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.viewStateToRoute = {
      "HOME": "home",
      "DASHBOARD": "dashboard",
      "ADMIN_DASHBOARD": "admin-dashboard",
      "DIRECTORY": "directory",
      "EVENTS": "events",
      "EVENT_DETAIL": "events",
      "BENCH": "bench",
      "BLOGS": "blogs",
      "PROFILE_EDIT": "profile-edit",
      "RESOURCE_POST": "resource-post",
      "PROJECT_POST": "project-post",
      "BLOG_CREATE": "blog-create",
      "MEMBER_MANAGEMENT": "member-management",
      "EVENT_CREATE": "event-create",
      "EVENT_MANAGEMENT": "event-management",
      "JOBS_PROJECTS": "bench",
      "POST_MANAGEMENT": "admin-dashboard",
      "PAYMENT": "home"
    };
    this.protectedRoutes = [
      "dashboard",
      "admin-dashboard",
      "directory",
      "events",
      "bench",
      "profile-edit",
      "resource-post",
      "project-post",
      "blog-create",
      "member-management",
      "event-create",
      "event-management"
    ];
  }
  /**
   * Navigate to a route. Accepts both ViewState strings ('EVENTS') and path strings ('events').
   * Handles auth guards and role-based routing automatically.
   */
  go(viewOrPath) {
    const path = this.viewStateToRoute[viewOrPath] ?? viewOrPath.toLowerCase().replace(/_/g, "-");
    const user = this.authService.getCurrentUser();
    if (this.protectedRoutes.includes(path) && !user) {
      sessionStorage.setItem("redirectAfterLogin", "/" + path);
      this.router.navigate(["/home"]);
      return;
    }
    if (user && user.role !== "admin" && path !== "select-plan" && !this.authService.hasSelectedPlan()) {
      this.router.navigate(["/select-plan"]);
      return;
    }
    if (viewOrPath === "PAYMENT" && user) {
      this.router.navigate([user.role === "admin" ? "/admin-dashboard" : "/dashboard"], {
        queryParams: { view: "MEMBERSHIP_PLANS" }
      });
    } else if (path === "dashboard") {
      this.router.navigate([user?.role === "admin" ? "/admin-dashboard" : "/dashboard"]);
    } else {
      this.router.navigate(["/" + path]);
    }
    window.scrollTo(0, 0);
  }
  /** Navigate to home */
  home() {
    this.go("home");
  }
  /** Navigate to events list */
  events() {
    this.go("events");
  }
  /** Navigate to a specific event by id */
  eventDetail(id) {
    this.router.navigate(["/events", id]);
    window.scrollTo(0, 0);
  }
  /** Navigate back (browser history) */
  back() {
    history.back();
  }
  static {
    this.\u0275fac = function AppNavigationService_Factory(t) {
      return new (t || _AppNavigationService)(\u0275\u0275inject(Router), \u0275\u0275inject(AuthService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppNavigationService, factory: _AppNavigationService.\u0275fac, providedIn: "root" });
  }
};

export {
  AppNavigationService
};
//# sourceMappingURL=chunk-UJ5H324Q.js.map
