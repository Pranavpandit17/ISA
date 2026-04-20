import {
  Router
} from "./chunk-X7FTYMHV.js";
import {
  ApiService,
  BehaviorSubject,
  Observable,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CRF7CKPV.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  constructor(apiService, router) {
    this.apiService = apiService;
    this.router = router;
    this.currentUserSubject = new BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    const storedUser = localStorage.getItem("currentUser");
    const token = localStorage.getItem("token");
    if (storedUser && token) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }
  mapUserResponse(userData, fallbackEmail) {
    const roleFromBackend = (userData.role || "").toString().toUpperCase();
    const normalizedRole = roleFromBackend === "ADMIN" ? "admin" : "member";
    return {
      id: userData.id,
      username: userData.username || userData.email?.split("@")[0] || "",
      email: userData.email || fallbackEmail || "",
      role: normalizedRole,
      name: userData.name || userData.username || userData.email?.split("@")[0] || "",
      type: userData.userType || (normalizedRole === "admin" ? "ADMIN" : "REGULAR"),
      membershipStatus: userData.membershipStatus,
      currentPlanId: userData.currentPlanId,
      currentPlanName: userData.currentPlanName,
      currentPlanLevel: userData.currentPlanLevel,
      hasPlan: !!userData.currentPlanId || !!userData.hasPlan,
      planStatus: userData.planStatus || (userData.currentPlanId ? "SELECTED" : "NOT_SELECTED"),
      planStartDate: userData.planStartDate,
      planExpiryDate: userData.planExpiryDate
    };
  }
  login(email, password) {
    return new Observable((observer) => {
      this.apiService.login(email, password).subscribe({
        next: (response) => {
          console.log("Login response:", response);
          const userData = response.user || response;
          const token = response.token;
          if (token && userData && userData.id) {
            const user = this.mapUserResponse(userData, email);
            localStorage.setItem("token", token);
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.currentUserSubject.next(user);
            console.log("User stored successfully:", user);
            observer.next(true);
            observer.complete();
          } else {
            console.error("Invalid response structure. Token:", !!token, "User data:", !!userData);
            console.log("Full response:", response);
            observer.next(false);
            observer.complete();
          }
        },
        error: (error) => {
          console.error("Login error:", error);
          observer.error(error);
        }
      });
    });
  }
  logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    this.currentUserSubject.next(null);
    this.router.navigate(["/"]);
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  isAuthenticated() {
    return this.currentUserSubject.value !== null;
  }
  isAdmin() {
    return this.currentUserSubject.value?.role === "admin";
  }
  isMember() {
    return this.currentUserSubject.value?.role === "member";
  }
  hasSelectedPlan() {
    const user = this.currentUserSubject.value;
    if (!user) {
      return false;
    }
    const isExpired = !!user.planExpiryDate && new Date(user.planExpiryDate) < new Date((/* @__PURE__ */ new Date()).toDateString());
    return !isExpired && (!!user.currentPlanId || user.planStatus === "SELECTED" || user.hasPlan === true);
  }
  refreshCurrentUserProfile() {
    return new Observable((observer) => {
      this.apiService.getCurrentUserProfile().subscribe({
        next: (response) => {
          const userData = response?.user || response;
          if (userData && userData.id) {
            const user = this.mapUserResponse(userData);
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.currentUserSubject.next(user);
            observer.next(user);
          } else {
            observer.next(this.currentUserSubject.value);
          }
          observer.complete();
        },
        error: () => {
          observer.next(this.currentUserSubject.value);
          observer.complete();
        }
      });
    });
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)(\u0275\u0275inject(ApiService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-HS4BPM7A.js.map
