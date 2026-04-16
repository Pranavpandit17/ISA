import {
  ToastrService
} from "./chunk-BQ4A4C7G.js";
import {
  ApiService,
  CommonModule,
  DatePipe,
  EventEmitter,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DNDVYN6P.js";

// src/app/pages/member-management/member-management.component.ts
function MemberManagementComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.applications.length);
  }
}
function MemberManagementComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.approvedMembers.length);
  }
}
function MemberManagementComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.rejectedApplications.length);
  }
}
function MemberManagementComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function MemberManagementComponent_div_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementStart(2, "p", 19);
    \u0275\u0275text(3, "Processing Data...");
    \u0275\u0275elementEnd()();
  }
}
function MemberManagementComponent_div_17_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4, "No pending applications at the moment.");
    \u0275\u0275elementEnd()();
  }
}
function MemberManagementComponent_div_17_div_8_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29)(1, "td")(2, "p", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 34);
    \u0275\u0275text(15, "Pending Review");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "div", 35)(18, "button", 36);
    \u0275\u0275listener("click", function MemberManagementComponent_div_17_div_8_tr_17_Template_button_click_18_listener() {
      const app_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDetailModal(app_r4));
    });
    \u0275\u0275text(19, "Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 37);
    \u0275\u0275listener("click", function MemberManagementComponent_div_17_div_8_tr_17_Template_button_click_20_listener() {
      const app_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openApproveModal(app_r4));
    });
    \u0275\u0275text(21, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 38);
    \u0275\u0275listener("click", function MemberManagementComponent_div_17_div_8_tr_17_Template_button_click_22_listener() {
      const app_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openRejectModal(app_r4));
    });
    \u0275\u0275text(23, "Reject");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const app_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r4.applicantName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 8, app_r4.createdAt, "shortDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r4.company || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r4.industry);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
  }
}
function MemberManagementComponent_div_17_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "table", 24)(2, "thead", 25)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Applicant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Market / Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "Administrative Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 27);
    \u0275\u0275template(17, MemberManagementComponent_div_17_div_8_tr_17_Template, 24, 11, "tr", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.applications);
  }
}
function MemberManagementComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "h2");
    \u0275\u0275text(3, "Pending Applications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function MemberManagementComponent_div_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadData());
    });
    \u0275\u0275text(5, "\u{1F504}");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MemberManagementComponent_div_17_div_6_Template, 4, 0, "div", 14)(7, MemberManagementComponent_div_17_div_7_Template, 5, 0, "div", 15)(8, MemberManagementComponent_div_17_div_8_Template, 18, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.applications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.applications.length > 0);
  }
}
function MemberManagementComponent_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementStart(2, "p", 19);
    \u0275\u0275text(3, "Processing Data...");
    \u0275\u0275elementEnd()();
  }
}
function MemberManagementComponent_div_18_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4, "No active members found in records.");
    \u0275\u0275elementEnd()();
  }
}
function MemberManagementComponent_div_18_div_6_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29)(1, "td")(2, "p", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 39);
    \u0275\u0275text(14, "Active Member");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 26)(16, "button", 36);
    \u0275\u0275listener("click", function MemberManagementComponent_div_18_div_6_tr_17_Template_button_click_16_listener() {
      const member_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDetailModal(member_r6));
    });
    \u0275\u0275text(17, "Full Overview");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r6.name || member_r6.applicantName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Member ID: ", member_r6.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r6.company || "Private");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r6.industry);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
  }
}
function MemberManagementComponent_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "table", 24)(2, "thead", 25)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Registered Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Current Organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Direct Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Specialization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Account Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 27);
    \u0275\u0275template(17, MemberManagementComponent_div_18_div_6_tr_17_Template, 18, 6, "tr", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.approvedMembers);
  }
}
function MemberManagementComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "h2");
    \u0275\u0275text(3, "Active Members");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, MemberManagementComponent_div_18_div_4_Template, 4, 0, "div", 14)(5, MemberManagementComponent_div_18_div_5_Template, 5, 0, "div", 15)(6, MemberManagementComponent_div_18_div_6_Template, 18, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.approvedMembers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.approvedMembers.length > 0);
  }
}
function MemberManagementComponent_div_19_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementStart(2, "p", 19);
    \u0275\u0275text(3, "Processing Data...");
    \u0275\u0275elementEnd()();
  }
}
function MemberManagementComponent_div_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2, "\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4, "Rejection archive is empty.");
    \u0275\u0275elementEnd()();
  }
}
function MemberManagementComponent_div_19_div_6_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 41)(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 42);
    \u0275\u0275text(11, "Application Denied");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 26)(13, "button", 36);
    \u0275\u0275listener("click", function MemberManagementComponent_div_19_div_6_tr_17_Template_button_click_13_listener() {
      const app_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDetailModal(app_r8));
    });
    \u0275\u0275text(14, "Review Logs");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r8.applicantName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r8.company || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r8.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r8.industry);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
  }
}
function MemberManagementComponent_div_19_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "table", 24)(2, "thead", 25)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Former Applicant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Decision Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 27);
    \u0275\u0275template(17, MemberManagementComponent_div_19_div_6_tr_17_Template, 15, 5, "tr", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.rejectedApplications);
  }
}
function MemberManagementComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "h2");
    \u0275\u0275text(3, "Rejected Applications");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, MemberManagementComponent_div_19_div_4_Template, 4, 0, "div", 14)(5, MemberManagementComponent_div_19_div_5_Template, 5, 0, "div", 15)(6, MemberManagementComponent_div_19_div_6_Template, 18, 1, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.rejectedApplications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.rejectedApplications.length > 0);
  }
}
var MemberManagementComponent = class _MemberManagementComponent {
  constructor(apiService, toastr) {
    this.apiService = apiService;
    this.toastr = toastr;
    this.activeTab = "APPLICATIONS";
    this.applications = [];
    this.approvedMembers = [];
    this.rejectedApplications = [];
    this.pendingCount = 0;
    this.totalMembers = 0;
    this.isLoading = false;
    this.errorMessage = "";
    this.openDetail = new EventEmitter();
    this.openApprove = new EventEmitter();
    this.openReject = new EventEmitter();
  }
  ngOnInit() {
    console.log("hello");
    this.loadData();
  }
  loadData() {
    this.isLoading = true;
    this.apiService.getMembershipApplications().subscribe({
      next: (response) => {
        this.applications = response.filter((app) => app.status === "PENDING");
        this.pendingCount = response.reduce((acc, obj) => {
          if (obj.status === "PENDING") {
            return acc + 1;
          }
          return acc;
        }, 0);
        console.log(this.pendingCount);
        this.apiService.setPendingCount(this.pendingCount);
        this.rejectedApplications = response.filter((app) => app.status === "REJECTED");
        console.log("re", this.rejectedApplications);
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = "Error loading applications";
        this.isLoading = false;
      }
    });
    this.apiService.getApprovedMembers().subscribe({
      next: (response) => {
        this.approvedMembers = response;
        this.apiService.setTotalMembers(response.length);
      },
      error: (error) => {
        console.error("Error loading approved members:", error);
      }
    });
  }
  openApproveModal(application) {
    this.openApprove.emit(application);
  }
  openRejectModal(application) {
    this.openReject.emit(application);
  }
  openDetailModal(application) {
    this.openDetail.emit(application);
  }
  closeModals() {
  }
  onDetailApprove(application) {
    this.openApprove.emit(application);
  }
  onDetailReject(application) {
    this.openReject.emit(application);
  }
  onApproveConfirm(data) {
    this.isLoading = true;
    this.apiService.approveApplication(data.id).subscribe({
      next: () => {
        this.loadData();
        this.toastr.success("Application approved successfully! Member and user account created.", "Approved");
        this.closeModals();
      },
      error: (error) => {
        this.errorMessage = error.error?.message || "Error approving application";
        this.isLoading = false;
      }
    });
  }
  onRejectConfirm(data) {
    if (!data.reason || !data.reason.trim()) {
      this.toastr.error("Please provide a reason for rejection", "Error");
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.apiService.rejectApplication(data.id, data.reason).subscribe({
      next: () => {
        this.isLoading = false;
        this.loadData();
        this.toastr.success("Application rejected successfully", "Rejected");
        this.closeModals();
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || "Error rejecting application. Please try again.";
        this.toastr.error(this.errorMessage, "Error");
        console.error("Error rejecting application:", error);
      }
    });
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  static {
    this.\u0275fac = function MemberManagementComponent_Factory(t) {
      return new (t || _MemberManagementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MemberManagementComponent, selectors: [["app-member-management"]], outputs: { openDetail: "openDetail", openApprove: "openApprove", openReject: "openReject" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 13, consts: [[1, "management-container"], [1, "mb-10"], [1, "text-4xl", "font-black", "text-slate-900", "mb-2", "tracking-tighter"], [1, "text-sm", "font-medium", "text-slate-400"], [1, "tab-nav"], [1, "tab-btn", 3, "click"], ["class", "tab-badge", 4, "ngIf"], ["class", "mb-8 p-4 bg-rose-50 border-l-4 border-rose-500 text-rose-700 rounded-r-2xl text-sm font-medium animate-pulse", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], [1, "tab-badge"], [1, "mb-8", "p-4", "bg-rose-50", "border-l-4", "border-rose-500", "text-rose-700", "rounded-r-2xl", "text-sm", "font-medium", "animate-pulse"], [1, "table-wrapper"], [1, "table-header"], [1, "p-2", "h-10", "w-10", "text-slate-400", "hover:text-indigo-600", "hover:bg-indigo-50", "rounded-xl", "transition-all", 3, "click", "disabled"], ["class", "p-20 text-center flex flex-col items-center justify-center gap-4", 4, "ngIf"], ["class", "p-20 text-center", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "p-20", "text-center", "flex", "flex-col", "items-center", "justify-center", "gap-4"], [1, "h-10", "w-10", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "text-xs", "font-black", "text-slate-300", "uppercase", "tracking-widest"], [1, "p-20", "text-center"], [1, "text-5xl", "mb-4", "grayscale", "opacity-20"], [1, "text-sm", "font-bold", "text-slate-400"], [1, "overflow-x-auto"], [1, "w-full"], [1, "text-left", "font-bold", "uppercase", "text-[10px]", "tracking-widest", "text-slate-400"], [1, "text-right"], [1, "divide-y", "divide-slate-50"], ["class", "hover:bg-slate-50/50 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-slate-50/50", "transition-colors"], [1, "font-bold", "text-slate-900"], [1, "text-[11px]", "text-slate-400"], [1, "text-sm", "font-medium", "text-slate-600"], [1, "text-sm", "text-slate-500"], [1, "status-pill", "status-pending"], [1, "flex", "items-center", "justify-end", "gap-2"], [1, "btn-pill", "btn-details", 3, "click", "disabled"], [1, "btn-pill", "btn-confirm", 3, "click", "disabled"], [1, "btn-pill", "btn-deny", 3, "click", "disabled"], [1, "status-pill", "status-approved"], ["class", "hover:bg-slate-50/50 transition-colors grayscale-[0.5] opacity-80", 4, "ngFor", "ngForOf"], [1, "hover:bg-slate-50/50", "transition-colors", "grayscale-[0.5]", "opacity-80"], [1, "status-pill", "status-rejected"]], template: function MemberManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Member Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Manage membership applications, approve new members, and review rejection history.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "nav", 4)(7, "button", 5);
        \u0275\u0275listener("click", function MemberManagementComponent_Template_button_click_7_listener() {
          return ctx.setTab("APPLICATIONS");
        });
        \u0275\u0275text(8, " Applications ");
        \u0275\u0275template(9, MemberManagementComponent_span_9_Template, 2, 1, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275listener("click", function MemberManagementComponent_Template_button_click_10_listener() {
          return ctx.setTab("APPROVED");
        });
        \u0275\u0275text(11, " Approved Members ");
        \u0275\u0275template(12, MemberManagementComponent_span_12_Template, 2, 1, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 5);
        \u0275\u0275listener("click", function MemberManagementComponent_Template_button_click_13_listener() {
          return ctx.setTab("REJECTED");
        });
        \u0275\u0275text(14, " Rejected History ");
        \u0275\u0275template(15, MemberManagementComponent_span_15_Template, 2, 1, "span", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(16, MemberManagementComponent_div_16_Template, 2, 1, "div", 7)(17, MemberManagementComponent_div_17_Template, 9, 4, "div", 8)(18, MemberManagementComponent_div_18_Template, 7, 3, "div", 8)(19, MemberManagementComponent_div_19_Template, 7, 3, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275classProp("active", ctx.activeTab === "APPLICATIONS");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.applications.length > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "APPROVED");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.approvedMembers.length > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "REJECTED");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.rejectedApplications.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "APPLICATIONS");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "APPROVED");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "REJECTED");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  --member-primary: #6366f1;\n  --member-success: #10b981;\n  --member-danger: #f43f5e;\n  --member-warning: #f59e0b;\n}\n.management-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  background: #f1f5f9;\n  padding: 6px;\n  border-radius: 24px;\n  max-width: 100%;\n  margin-bottom: 2.5rem;\n  overflow-x: auto;\n  border: 1px solid rgba(226, 232, 240, 0.4);\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.tab-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 18px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #64748b;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: white;\n  color: #1e293b;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--member-primary);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n}\n.tab-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  background: #e2e8f0;\n  color: #64748b;\n}\n.active[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--member-primary);\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 32px;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n  overflow: hidden;\n}\n.table-header[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.table-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 900px;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 16px 32px;\n  color: #94a3b8;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-size: 0.65rem;\n  border-bottom: 2px solid #f1f5f9;\n  text-align: left;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  font-size: 0.9375rem;\n  color: #1e293b;\n  border-bottom: 1px solid #f1f5f9;\n  font-weight: 500;\n  text-align: left;\n  vertical-align: middle;\n}\n.overflow-x-auto[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #e2e8f0 transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #e2e8f0;\n  border-radius: 20px;\n  border: 2px solid transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #cbd5e1;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.status-pill[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.65rem;\n  font-weight: 900;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  white-space: nowrap !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-approved[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-rejected[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.btn-action-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-pill[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  cursor: pointer;\n}\n.btn-pill[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-details[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.btn-details[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  transform: translateY(-1px);\n}\n.btn-confirm[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2);\n}\n.btn-confirm[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n  box-shadow: 0 6px 14px rgba(16, 185, 129, 0.3);\n}\n.btn-deny[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #fee2e2;\n  color: #ef4444;\n}\n.btn-deny[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=member-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MemberManagementComponent, { className: "MemberManagementComponent", filePath: "src\\app\\pages\\member-management\\member-management.component.ts", lineNumber: 15 });
})();

export {
  MemberManagementComponent
};
//# sourceMappingURL=chunk-ASAHAGGL.js.map
