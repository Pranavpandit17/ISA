import {
  JobPostModalComponent
} from "./chunk-IAQ5WSDV.js";
import {
  JobDetailModalComponent
} from "./chunk-6BWAVG33.js";
import {
  EventDetailModalComponent
} from "./chunk-EMZJRUO4.js";
import "./chunk-WTPJNKEG.js";
import "./chunk-ZRHEMPKX.js";
import {
  AuthService
} from "./chunk-HS4BPM7A.js";
import "./chunk-X7FTYMHV.js";
import {
  EventCreateComponent
} from "./chunk-MLXA72YZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-QNLLDZ5O.js";
import {
  EventManagementComponent
} from "./chunk-O6RF27FZ.js";
import {
  ConfirmService
} from "./chunk-HJ6C4NPU.js";
import {
  MemberManagementComponent
} from "./chunk-J6KDRKHB.js";
import {
  ToastrService
} from "./chunk-KKJ3RDO7.js";
import "./chunk-BACPM34C.js";
import {
  ApiService,
  CommonModule,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CRF7CKPV.js";

// src/app/pages/job-management/job-management.component.ts
function JobManagementComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.draftJobs.length);
  }
}
function JobManagementComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.publishedJobs.length);
  }
}
function JobManagementComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.closedJobs.length);
  }
}
function JobManagementComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function JobManagementComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "p", 18);
    \u0275\u0275text(3, "Compiling Drafts...");
    \u0275\u0275elementEnd()();
  }
}
function JobManagementComponent_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, "No draft oportunidades found.");
    \u0275\u0275elementEnd()();
  }
}
function JobManagementComponent_div_22_div_3_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td")(2, "p", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 34);
    \u0275\u0275element(15, "div", 35);
    \u0275\u0275text(16, " Draft ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td")(18, "div", 36)(19, "button", 37);
    \u0275\u0275listener("click", function JobManagementComponent_div_22_div_3_tr_17_Template_button_click_19_listener() {
      const job_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDetailModal(job_r3));
    });
    \u0275\u0275text(20, "Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 38);
    \u0275\u0275listener("click", function JobManagementComponent_div_22_div_3_tr_17_Template_button_click_21_listener() {
      const job_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onEditJob(job_r3));
    });
    \u0275\u0275text(22, "Modify");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 39);
    \u0275\u0275listener("click", function JobManagementComponent_div_22_div_3_tr_17_Template_button_click_23_listener() {
      const job_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onPublishJob(job_r3));
    });
    \u0275\u0275text(24, "Publish");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ref ID: #", job_r3.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getTypeColor(job_r3.type || "JOB"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r3.type || "JOB");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r3.category || "Legacy");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r3.postedBy || job_r3.postedByEmail || "Portal Admin");
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
  }
}
function JobManagementComponent_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead", 24)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Opportunity Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Classification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Author");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 25);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 26);
    \u0275\u0275template(17, JobManagementComponent_div_22_div_3_tr_17_Template, 25, 9, "tr", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.draftJobs);
  }
}
function JobManagementComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, JobManagementComponent_div_22_div_1_Template, 4, 0, "div", 13)(2, JobManagementComponent_div_22_div_2_Template, 5, 0, "div", 14)(3, JobManagementComponent_div_22_div_3_Template, 18, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.draftJobs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.draftJobs.length > 0);
  }
}
function JobManagementComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "p", 18);
    \u0275\u0275text(3, "Fetching Active Postings...");
    \u0275\u0275elementEnd()();
  }
}
function JobManagementComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "\u{1F4BC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, "No active marketplace listings.");
    \u0275\u0275elementEnd()();
  }
}
function JobManagementComponent_div_23_div_3_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td")(2, "p", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 34);
    \u0275\u0275element(13, "div", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 42)(16, "button", 37);
    \u0275\u0275listener("click", function JobManagementComponent_div_23_div_3_tr_17_Template_button_click_16_listener() {
      const job_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDetailModal(job_r5));
    });
    \u0275\u0275text(17, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 38);
    \u0275\u0275listener("click", function JobManagementComponent_div_23_div_3_tr_17_Template_button_click_18_listener() {
      const job_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onEditJob(job_r5));
    });
    \u0275\u0275text(19, "Modify");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getTypeColor(job_r5.type || "JOB"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r5.type || "JOB");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r5.category || "General");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r5.postedBy || job_r5.postedByEmail || "Portal");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r5.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
  }
}
function JobManagementComponent_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead", 24)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Market");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Origin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Current Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 25);
    \u0275\u0275text(15, "Administrative");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 26);
    \u0275\u0275template(17, JobManagementComponent_div_23_div_3_tr_17_Template, 20, 8, "tr", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.publishedJobs);
  }
}
function JobManagementComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, JobManagementComponent_div_23_div_1_Template, 4, 0, "div", 13)(2, JobManagementComponent_div_23_div_2_Template, 5, 0, "div", 14)(3, JobManagementComponent_div_23_div_3_Template, 18, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.publishedJobs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.publishedJobs.length > 0);
  }
}
function JobManagementComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "p", 18);
    \u0275\u0275text(3, "Opening Archive...");
    \u0275\u0275elementEnd()();
  }
}
function JobManagementComponent_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, "Opportunity archive is empty.");
    \u0275\u0275elementEnd()();
  }
}
function JobManagementComponent_div_24_div_3_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 44)(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "div", 34);
    \u0275\u0275element(12, "div", 46);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 25)(15, "button", 37);
    \u0275\u0275listener("click", function JobManagementComponent_div_24_div_3_tr_17_Template_button_click_15_listener() {
      const job_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDetailModal(job_r7));
    });
    \u0275\u0275text(16, "Review Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.getTypeColor(job_r7.type || "JOB"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r7.type || "JOB");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r7.category || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(job_r7.postedBy || "System");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r7.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
  }
}
function JobManagementComponent_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead", 24)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Sector");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Final Outcome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 25);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 26);
    \u0275\u0275template(17, JobManagementComponent_div_24_div_3_tr_17_Template, 17, 7, "tr", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.closedJobs);
  }
}
function JobManagementComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, JobManagementComponent_div_24_div_1_Template, 4, 0, "div", 13)(2, JobManagementComponent_div_24_div_2_Template, 5, 0, "div", 14)(3, JobManagementComponent_div_24_div_3_Template, 18, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.closedJobs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.closedJobs.length > 0);
  }
}
var JobManagementComponent = class _JobManagementComponent {
  constructor(apiService, toastr, confirmService) {
    this.apiService = apiService;
    this.toastr = toastr;
    this.confirmService = confirmService;
    this.activeTab = "DRAFT";
    this.allJobs = [];
    this.draftJobs = [];
    this.publishedJobs = [];
    this.closedJobs = [];
    this.isLoading = false;
    this.errorMessage = "";
    this.openDetail = new EventEmitter();
    this.openEdit = new EventEmitter();
  }
  ngOnInit() {
    this.loadJobs();
  }
  loadJobs() {
    this.isLoading = true;
    this.errorMessage = "";
    this.apiService.getJobPostings().subscribe({
      next: (response) => {
        this.allJobs = Array.isArray(response) ? response : [];
        this.categorizeJobs();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = "Error loading jobs and projects. Please try again.";
        this.isLoading = false;
        console.error("Error loading jobs:", error);
      }
    });
  }
  categorizeJobs() {
    this.draftJobs = this.allJobs.filter((job) => job.status === "DRAFT");
    this.publishedJobs = this.allJobs.filter((job) => job.status === "PUBLISHED" || job.status === "OPEN");
    this.closedJobs = this.allJobs.filter((job) => job.status === "CLOSED" || job.status === "ARCHIVED" || job.status === "FILLED");
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  onCreateJob() {
    this.openEdit.emit(null);
  }
  onEditJob(job) {
    this.openEdit.emit(job);
  }
  openDetailModal(job) {
    if (job.id) {
      this.isLoading = true;
      this.apiService.getJobPostingById(job.id).subscribe({
        next: (response) => {
          this.openDetail.emit(response);
          this.isLoading = false;
        },
        error: (error) => {
          console.error("Error loading job details:", error);
          this.openDetail.emit(job);
          this.isLoading = false;
        }
      });
    } else {
      this.openDetail.emit(job);
    }
  }
  closeJobPostModal() {
  }
  closeDetailModal() {
  }
  onJobSaved() {
    this.loadJobs();
  }
  onPublishJob(job) {
    if (!job.id)
      return;
    this.confirmService.confirm({
      title: "Publish Job/Project",
      message: `Are you sure you want to publish "${job.title}"?`,
      confirmLabel: "Publish",
      cancelLabel: "Cancel"
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.isLoading = true;
      this.apiService.publishJob(job.id).subscribe({
        next: () => {
          this.toastr.success("Job/Project published successfully!", "Published");
          this.loadJobs();
          this.closeDetailModal();
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "Error publishing job/project. Please try again.";
          this.isLoading = false;
          this.toastr.error(this.errorMessage, "Error");
        }
      });
    });
  }
  onDeleteJob(job) {
    if (!job.id || typeof job.id !== "number")
      return;
    this.confirmService.confirm({
      title: "Delete Job/Project",
      message: `Are you sure you want to delete "${job.title}"? This action cannot be undone.`,
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      isDestructive: true
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.isLoading = true;
      this.apiService.deleteJobPosting(job.id).subscribe({
        next: () => {
          this.toastr.success("Job/Project deleted successfully!", "Deleted");
          this.loadJobs();
          this.closeDetailModal();
        },
        error: (error) => {
          this.isLoading = false;
          let errorMessage = "Error deleting job/project. Please try again.";
          if (error.status === 403) {
            errorMessage = "You do not have permission to delete this job/project.";
          } else if (error.status === 404) {
            errorMessage = "Job/Project not found.";
          } else if (error.status === 401) {
            errorMessage = "Please login to delete jobs/projects.";
          } else if (error.error?.message) {
            errorMessage = error.error.message;
          }
          this.errorMessage = errorMessage;
          this.toastr.error(errorMessage, "Error");
        }
      });
    });
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
      "ARCHIVED": "bg-slate-100 text-slate-800",
      "FILLED": "bg-slate-100 text-slate-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  }
  static {
    this.\u0275fac = function JobManagementComponent_Factory(t) {
      return new (t || _JobManagementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ConfirmService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobManagementComponent, selectors: [["app-job-management"]], outputs: { openDetail: "openDetail", openEdit: "openEdit" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 13, consts: [[1, "management-container"], [1, "page-header"], [1, "title-area"], [1, "btn-add-job", 3, "click"], [1, "text-xl"], [1, "tab-nav"], [1, "tab-btn", 3, "click"], ["class", "tab-badge", 4, "ngIf"], ["class", "mb-8 p-4 bg-rose-50 border-l-4 border-rose-500 text-rose-700 rounded-r-2xl text-sm font-medium animate-pulse", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], [1, "tab-badge"], [1, "mb-8", "p-4", "bg-rose-50", "border-l-4", "border-rose-500", "text-rose-700", "rounded-r-2xl", "text-sm", "font-medium", "animate-pulse"], [1, "table-wrapper"], ["class", "p-20 text-center flex flex-col items-center justify-center gap-4", 4, "ngIf"], ["class", "p-20 text-center text-slate-300", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "p-20", "text-center", "flex", "flex-col", "items-center", "justify-center", "gap-4"], [1, "h-10", "w-10", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "text-xs", "font-black", "text-slate-300", "uppercase", "tracking-widest"], [1, "p-20", "text-center", "text-slate-300"], [1, "text-5xl", "mb-4", "grayscale", "opacity-20"], [1, "text-sm", "font-bold"], [1, "overflow-x-auto"], [1, "w-full"], [1, "text-left", "font-bold", "uppercase", "text-[10px]", "tracking-widest", "text-slate-400"], [1, "text-right"], [1, "divide-y", "divide-slate-50"], ["class", "hover:bg-slate-50/50 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-slate-50/50", "transition-colors"], [1, "font-bold", "text-slate-900", "leading-tight"], [1, "text-[10px]", "text-slate-400", "font-bold", "uppercase", "tracking-tight", "mt-1"], [1, "type-pill", 3, "ngClass"], [1, "text-sm", "font-medium", "text-slate-500"], [1, "text-sm", "text-slate-400", "font-bold", "whitespace-nowrap"], [1, "status-dots"], [1, "dot", "bg-yellow-400"], [1, "flex", "items-center", "justify-end", "gap-2"], [1, "btn-pill", "btn-details", 3, "click", "disabled"], [1, "btn-pill", "btn-edit", 3, "click", "disabled"], [1, "btn-pill", "btn-publish", 3, "click", "disabled"], [1, "text-sm", "text-slate-400", "font-bold"], [1, "dot", "bg-emerald-500"], [1, "text-right", "space-x-2"], ["class", "hover:bg-slate-50/50 transition-colors opacity-70 grayscale-[0.6]", 4, "ngFor", "ngForOf"], [1, "hover:bg-slate-50/50", "transition-colors", "opacity-70", "grayscale-[0.6]"], [1, "font-bold", "text-slate-900"], [1, "dot", "bg-slate-400"]], template: function JobManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Opportunity Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Curate job postings, project collaboration requests, and career resources.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function JobManagementComponent_Template_button_click_7_listener() {
          return ctx.onCreateJob();
        });
        \u0275\u0275elementStart(8, "span", 4);
        \u0275\u0275text(9, "+");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Post New Opportunity ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "nav", 5)(12, "button", 6);
        \u0275\u0275listener("click", function JobManagementComponent_Template_button_click_12_listener() {
          return ctx.setTab("DRAFT");
        });
        \u0275\u0275text(13, " Drafts ");
        \u0275\u0275template(14, JobManagementComponent_span_14_Template, 2, 1, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 6);
        \u0275\u0275listener("click", function JobManagementComponent_Template_button_click_15_listener() {
          return ctx.setTab("PUBLISHED");
        });
        \u0275\u0275text(16, " Active ");
        \u0275\u0275template(17, JobManagementComponent_span_17_Template, 2, 1, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 6);
        \u0275\u0275listener("click", function JobManagementComponent_Template_button_click_18_listener() {
          return ctx.setTab("CLOSED");
        });
        \u0275\u0275text(19, " Archive ");
        \u0275\u0275template(20, JobManagementComponent_span_20_Template, 2, 1, "span", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, JobManagementComponent_div_21_Template, 2, 1, "div", 8)(22, JobManagementComponent_div_22_Template, 4, 3, "div", 9)(23, JobManagementComponent_div_23_Template, 4, 3, "div", 9)(24, JobManagementComponent_div_24_Template, 4, 3, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275classProp("active", ctx.activeTab === "DRAFT");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.draftJobs.length > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "PUBLISHED");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.publishedJobs.length > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "CLOSED");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.closedJobs.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "DRAFT");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "PUBLISHED");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "CLOSED");
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  --job-primary: #6366f1;\n  --job-accent: #f43f5e;\n  --job-success: #10b981;\n}\n.management-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 2.5rem;\n}\n.title-area[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.04em;\n  margin-bottom: 0.5rem;\n}\n.title-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.btn-add-job[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b,\n      #0f172a);\n  color: white;\n  padding: 12px 24px;\n  border-radius: 16px;\n  font-weight: 800;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.2);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  cursor: pointer;\n}\n.btn-add-job[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.3);\n}\n.tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  background: #f1f5f9;\n  padding: 6px;\n  border-radius: 24px;\n  max-width: 100%;\n  margin-bottom: 2.5rem;\n  overflow-x: auto;\n  border: 1px solid rgba(226, 232, 240, 0.4);\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.tab-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 18px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #64748b;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: white;\n  color: #1e293b;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--job-primary);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n}\n.tab-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  background: #e2e8f0;\n  color: #64748b;\n}\n.active[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--job-primary);\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 32px;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n  overflow: hidden;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 900px;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 16px 32px;\n  color: #94a3b8;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-size: 0.65rem;\n  border-bottom: 2px solid #f1f5f9;\n  text-align: left;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  font-size: 0.9375rem;\n  color: #1e293b;\n  border-bottom: 1px solid #f1f5f9;\n  font-weight: 500;\n  text-align: left;\n  vertical-align: middle;\n}\n.overflow-x-auto[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #e2e8f0 transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #e2e8f0;\n  border-radius: 20px;\n  border: 2px solid transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #cbd5e1;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.type-pill[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.65rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  white-space: nowrap !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n}\n.status-dots[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 99px;\n}\n.btn-pill[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  cursor: pointer;\n}\n.btn-details[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.btn-details[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  transform: translateY(-1px);\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #6366f1;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #e0e7ff;\n  transform: translateY(-1px);\n}\n.btn-publish[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.btn-publish[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=job-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobManagementComponent, { className: "JobManagementComponent", filePath: "src\\app\\pages\\job-management\\job-management.component.ts", lineNumber: 17 });
})();

// src/app/pages/membership-plan-management/membership-plan-management.component.ts
function MembershipPlanManagementComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function MembershipPlanManagementComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPrimaryButtonClick());
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showForm ? "View Active Plans" : "Create New Plan", " ");
  }
}
function MembershipPlanManagementComponent_ng_container_8_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, " ");
  }
}
function MembershipPlanManagementComponent_ng_container_8_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function MembershipPlanManagementComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "p");
    \u0275\u0275text(5, "Total Inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275text(9, "\u{1F3DB}\uFE0F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 12)(11, "div", 13)(12, "p");
    \u0275\u0275text(13, "Active Offerings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3", 15);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 16);
    \u0275\u0275text(17, "\u{1F4E1}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 17)(19, "div", 13)(20, "p");
    \u0275\u0275text(21, "Archived Plans");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h3");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 18);
    \u0275\u0275text(25, "\u{1F4C1}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, MembershipPlanManagementComponent_ng_container_8_div_26_Template, 2, 1, "div", 19)(27, MembershipPlanManagementComponent_ng_container_8_div_27_Template, 2, 1, "div", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.activeCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.inactiveCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
  }
}
function MembershipPlanManagementComponent_div_9_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 27);
    \u0275\u0275text(2, "Financial Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function MembershipPlanManagementComponent_div_9_div_33_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.price, $event) || (ctx_r1.form.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.price);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
  }
}
function MembershipPlanManagementComponent_div_9_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 27);
    \u0275\u0275text(2, "Currency ISO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function MembershipPlanManagementComponent_div_9_div_34_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.currency, $event) || (ctx_r1.form.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.currency);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
  }
}
function MembershipPlanManagementComponent_div_9_div_41_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlanManagementComponent_div_9_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function MembershipPlanManagementComponent_div_9_div_41_Template_div_click_0_listener() {
      const feature_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFeatureSelection(feature_r7.id));
    });
    \u0275\u0275elementStart(1, "div", 51)(2, "div", 52)(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, MembershipPlanManagementComponent_div_9_div_41_div_9_Template, 2, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.isFeatureSelected(feature_r7.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("[", feature_r7.code, "]");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r7.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFeatureSelected(feature_r7.id));
  }
}
function MembershipPlanManagementComponent_div_9_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "p", 59);
    \u0275\u0275text(2, "Registry is empty. Use Feature Management first.");
    \u0275\u0275elementEnd()();
  }
}
function MembershipPlanManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 25);
    \u0275\u0275listener("click", function MembershipPlanManagementComponent_div_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 26)(7, "div")(8, "label", 27);
    \u0275\u0275text(9, "Identity Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function MembershipPlanManagementComponent_div_9_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "label", 27);
    \u0275\u0275text(13, "Classification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function MembershipPlanManagementComponent_div_9_Template_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.type, $event) || (ctx_r1.form.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "option", 30);
    \u0275\u0275text(16, "INDIVIDUAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 31);
    \u0275\u0275text(18, "CORPORATE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 32);
    \u0275\u0275text(20, "ANNUAL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div")(22, "label", 27);
    \u0275\u0275text(23, "Access Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function MembershipPlanManagementComponent_div_9_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.costType, $event) || (ctx_r1.form.costType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 33);
    \u0275\u0275text(26, "Standard Public (Free)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 34);
    \u0275\u0275text(28, "Premium Subscriber (Paid)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div")(30, "label", 27);
    \u0275\u0275text(31, "Duration Lifecycle (Months)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function MembershipPlanManagementComponent_div_9_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.durationMonths, $event) || (ctx_r1.form.durationMonths = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, MembershipPlanManagementComponent_div_9_div_33_Template, 4, 2, "div", 6)(34, MembershipPlanManagementComponent_div_9_div_34_Template, 4, 2, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 36)(36, "label", 37);
    \u0275\u0275text(37, " Integrated Features Archive ");
    \u0275\u0275elementStart(38, "span", 38);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 39);
    \u0275\u0275template(41, MembershipPlanManagementComponent_div_9_div_41_Template, 10, 6, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, MembershipPlanManagementComponent_div_9_div_42_Template, 3, 0, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 42)(44, "label", 27);
    \u0275\u0275text(45, "Initial Availability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 43)(47, "button", 44);
    \u0275\u0275listener("click", function MembershipPlanManagementComponent_div_9_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.isActive = true);
    });
    \u0275\u0275text(48, "ACTIVE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 44);
    \u0275\u0275listener("click", function MembershipPlanManagementComponent_div_9_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.isActive = false);
    });
    \u0275\u0275text(50, "INACTIVE");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 45)(52, "button", 46);
    \u0275\u0275listener("click", function MembershipPlanManagementComponent_div_9_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(53, "DISCARD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 47);
    \u0275\u0275listener("click", function MembershipPlanManagementComponent_div_9_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePlan());
    });
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Modify Membership Structure" : "Design New Membership Plan");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.type);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.costType);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.durationMonths);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.costType === "PAID");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.costType === "PAID");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedFeatureIds.length, " Selected");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.availableFeatures);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.availableFeatures.length === 0 && !ctx_r1.isLoading);
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r1.form.isActive ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(!ctx_r1.form.isActive ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isLoading ? "Processing..." : ctx_r1.isEditMode ? "Authorize Update" : "Initialize Plan");
  }
}
function MembershipPlanManagementComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "div", 65);
    \u0275\u0275elementStart(2, "p", 66);
    \u0275\u0275text(3, "Opening Plan Vault...");
    \u0275\u0275elementEnd()();
  }
}
function MembershipPlanManagementComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68);
    \u0275\u0275text(2, "\u{1F4DC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 59);
    \u0275\u0275text(4, "Vault is empty. Create your first strategic plan.");
    \u0275\u0275elementEnd()();
  }
}
function MembershipPlanManagementComponent_div_10_div_3_tr_19_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", plan_r8.currency || "INR", " ", \u0275\u0275pipeBind2(2, 2, plan_r8.price, "1.2-2"), "");
  }
}
function MembershipPlanManagementComponent_div_10_div_3_tr_19_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 89);
    \u0275\u0275text(1, "Complimentary");
    \u0275\u0275elementEnd();
  }
}
function MembershipPlanManagementComponent_div_10_div_3_tr_19_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "button", 91);
    \u0275\u0275listener("click", function MembershipPlanManagementComponent_div_10_div_3_tr_19_div_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const plan_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEdit(plan_r8));
    });
    \u0275\u0275text(2, "EDIT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 92);
    \u0275\u0275listener("click", function MembershipPlanManagementComponent_div_10_div_3_tr_19_div_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const plan_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleActive(plan_r8));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 93);
    \u0275\u0275listener("click", function MembershipPlanManagementComponent_div_10_div_3_tr_19_div_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const plan_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePlan(plan_r8));
    });
    \u0275\u0275text(6, "DELETE");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(plan_r8.isActive ? "Suspend" : "Activate");
  }
}
function MembershipPlanManagementComponent_div_10_div_3_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 75)(1, "td", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 78);
    \u0275\u0275template(7, MembershipPlanManagementComponent_div_10_div_3_tr_19_span_7_Template, 3, 5, "span", 79)(8, MembershipPlanManagementComponent_div_10_div_3_tr_19_span_8_Template, 2, 0, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 81);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 82);
    \u0275\u0275element(13, "div", 83);
    \u0275\u0275elementStart(14, "span", 84);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 85);
    \u0275\u0275text(17, "Members");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "td")(19, "span", 86);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 72);
    \u0275\u0275template(22, MembershipPlanManagementComponent_div_10_div_3_tr_19_div_22_Template, 7, 1, "div", 87);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r8.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r8.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", plan_r8.price && plan_r8.price > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !plan_r8.price || plan_r8.price === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", plan_r8.durationMonths, " Month", plan_r8.durationMonths > 1 ? "s" : "", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(plan_r8.memberCount || 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", plan_r8.isActive ? "badge-active" : "badge-inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r8.isActive ? "Active Plan" : "Inactive");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin);
  }
}
function MembershipPlanManagementComponent_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "table", 70)(2, "thead", 71)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Structure Identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Classification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Financials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Lifecycle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Population");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 72);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 73);
    \u0275\u0275template(19, MembershipPlanManagementComponent_div_10_div_3_tr_19_Template, 23, 10, "tr", 74);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r1.plans);
  }
}
function MembershipPlanManagementComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275template(1, MembershipPlanManagementComponent_div_10_div_1_Template, 4, 0, "div", 61)(2, MembershipPlanManagementComponent_div_10_div_2_Template, 5, 0, "div", 62)(3, MembershipPlanManagementComponent_div_10_div_3_Template, 20, 1, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading && ctx_r1.plans.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.plans.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.plans.length > 0);
  }
}
var MembershipPlanManagementComponent = class _MembershipPlanManagementComponent {
  constructor(apiService, authService, toastr, confirmService) {
    this.apiService = apiService;
    this.authService = authService;
    this.toastr = toastr;
    this.confirmService = confirmService;
    this.plans = [];
    this.selectedPlan = null;
    this.isEditMode = false;
    this.isLoading = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.showFormFlag = false;
    this.form = this.getEmptyPlan();
    this.featuresText = "";
    this.availableFeatures = [];
    this.selectedFeatureIds = [];
    this.currentUser = null;
    this.isAdmin = false;
  }
  ngOnInit() {
    this.userSubscription = this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      this.updateAdminStatus();
    });
    this.currentUser = this.authService.getCurrentUser();
    this.updateAdminStatus();
    this.loadPlans();
    this.loadAvailableFeatures();
  }
  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
  updateAdminStatus() {
    this.isAdmin = this.authService.isAdmin() || this.currentUser?.role === "admin" || this.currentUser?.role === "ADMIN";
    if (this.currentUser) {
      console.log("Membership Plan Management - User:", this.currentUser);
      console.log("Membership Plan Management - Role:", this.currentUser.role);
      console.log("Membership Plan Management - Is Admin:", this.isAdmin);
    }
  }
  getEmptyPlan() {
    return {
      name: "",
      type: "INDIVIDUAL",
      price: 0,
      currency: "INR",
      durationMonths: 12,
      features: [],
      isActive: true,
      costType: "FREE"
    };
  }
  loadPlans() {
    this.isLoading = true;
    this.errorMessage = "";
    this.apiService.getAllMembershipPlansAdmin().subscribe({
      next: (response) => {
        this.plans = Array.isArray(response) ? response : [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading membership plans:", error);
        this.errorMessage = "Error loading membership plans. Please try again.";
        this.isLoading = false;
      }
    });
  }
  startCreate() {
    this.isEditMode = false;
    this.selectedPlan = null;
    this.form = this.getEmptyPlan();
    this.featuresText = "";
    this.selectedFeatureIds = [];
    this.showFormFlag = true;
    this.loadAvailableFeatures();
  }
  startEdit(plan) {
    this.isEditMode = true;
    this.selectedPlan = plan;
    this.form = {
      id: plan.id,
      name: plan.name,
      type: plan.type,
      price: plan.price,
      currency: plan.currency || "INR",
      durationMonths: plan.durationMonths,
      features: plan.features || [],
      planFeatures: plan.planFeatures || [],
      isActive: plan.isActive,
      createdAt: plan.createdAt,
      // Infer cost type from price for existing plans
      costType: plan.price && plan.price > 0 ? "PAID" : "FREE"
    };
    this.featuresText = (plan.features || []).map((f) => {
      if (f && typeof f === "object") {
        return f.name || f.description || "";
      }
      return String(f || "");
    }).filter((f) => !!f).join(", ");
    if (plan.id) {
      this.loadPlanFeatures(plan.id);
    } else {
      this.selectedFeatureIds = [];
    }
    this.showFormFlag = true;
    this.loadAvailableFeatures();
  }
  cancelEdit() {
    this.isEditMode = false;
    this.selectedPlan = null;
    this.form = this.getEmptyPlan();
    this.featuresText = "";
    this.selectedFeatureIds = [];
    this.showFormFlag = false;
  }
  parseFeatures(text) {
    if (!text)
      return [];
    return text.split(",").map((f) => f.trim()).filter((f) => f.length > 0);
  }
  loadAvailableFeatures() {
    this.apiService.getActivePlanFeatures().subscribe({
      next: (response) => {
        this.availableFeatures = Array.isArray(response) ? response : [];
      },
      error: (error) => {
        console.error("Error loading available features:", error);
      }
    });
  }
  loadPlanFeatures(planId) {
    this.apiService.getPlanFeaturesByPlan(planId).subscribe({
      next: (response) => {
        const features = Array.isArray(response) ? response : [];
        this.selectedFeatureIds = features.map((f) => f.id).filter((id) => id != null);
      },
      error: (error) => {
        console.error("Error loading plan features:", error);
        this.selectedFeatureIds = [];
      }
    });
  }
  toggleFeatureSelection(featureId) {
    const index = this.selectedFeatureIds.indexOf(featureId);
    if (index > -1) {
      this.selectedFeatureIds.splice(index, 1);
    } else {
      this.selectedFeatureIds.push(featureId);
    }
  }
  isFeatureSelected(featureId) {
    return this.selectedFeatureIds.includes(featureId);
  }
  savePlan() {
    this.errorMessage = "";
    const isFree = this.form.costType === "FREE";
    if (!this.form.name || !this.form.type) {
      this.errorMessage = "Please fill in Plan Name and Plan Type.";
      return;
    }
    if (!isFree) {
      if (!this.form.currency) {
        this.errorMessage = "Please select a currency for paid membership.";
        return;
      }
      if (!this.form.price || this.form.price <= 0) {
        this.errorMessage = "Please enter a valid positive price for paid membership.";
        return;
      }
    } else {
      this.form.price = 0;
    }
    if (!this.form.durationMonths || this.form.durationMonths <= 0) {
      this.errorMessage = "Duration (months) must be greater than 0.";
      return;
    }
    const payload = __spreadProps(__spreadValues({}, this.form), {
      features: this.parseFeatures(this.featuresText)
    });
    this.isLoading = true;
    if (this.isEditMode && this.form.id) {
      this.apiService.updateMembershipPlan(this.form.id, payload).subscribe({
        next: () => {
          this.assignFeaturesToPlan(this.form.id, this.selectedFeatureIds);
        },
        error: (error) => {
          console.error("Error updating plan:", error);
          this.errorMessage = error.error?.message || "Error updating plan. Please try again.";
          this.toastr.error(this.errorMessage, "Error");
          this.isLoading = false;
        }
      });
    } else {
      this.apiService.createMembershipPlan(payload).subscribe({
        next: (response) => {
          const newPlanId = response?.id || response?.planId || response?.data && response.data.id || response?.plan && response.plan.id;
          if (newPlanId) {
            this.assignFeaturesToPlan(newPlanId, this.selectedFeatureIds);
          } else {
            if (this.selectedFeatureIds.length > 0) {
              this.toastr.warning("Plan created but could not assign features. Please edit the plan to assign features.", "Warning");
            } else {
              this.toastr.success("Membership plan created successfully", "Created");
            }
            this.isLoading = false;
            this.cancelEdit();
            this.loadPlans();
          }
        },
        error: (error) => {
          console.error("Error creating plan:", error);
          this.errorMessage = error.error?.message || "Error creating plan. Please try again.";
          this.toastr.error(this.errorMessage, "Error");
          this.isLoading = false;
        }
      });
    }
  }
  assignFeaturesToPlan(planId, featureIds) {
    this.apiService.assignFeaturesToPlan(planId, featureIds).subscribe({
      next: () => {
        const featureCount = featureIds.length;
        if (featureCount > 0) {
          this.toastr.success(`Membership plan saved successfully with ${featureCount} feature${featureCount === 1 ? "" : "s"}`, "Success");
        } else {
          this.toastr.success("Membership plan saved successfully", "Success");
        }
        this.isLoading = false;
        this.cancelEdit();
        this.loadPlans();
      },
      error: (error) => {
        console.error("Error assigning features to plan:", error);
        if (featureIds.length > 0) {
          this.toastr.warning("Plan saved but there was an error assigning features. Please try editing the plan to assign features.", "Warning");
        } else {
          this.toastr.success("Plan saved successfully", "Success");
        }
        this.isLoading = false;
        this.cancelEdit();
        this.loadPlans();
      }
    });
  }
  toggleActive(plan) {
    if (!plan.id)
      return;
    const updated = __spreadProps(__spreadValues({}, plan), { isActive: !plan.isActive });
    this.apiService.updateMembershipPlan(plan.id, updated).subscribe({
      next: () => {
        this.toastr.success("Plan status updated", "Updated");
        this.loadPlans();
      },
      error: (error) => {
        console.error("Error toggling plan status:", error);
        this.toastr.error("Error updating plan status. Please try again.", "Error");
      }
    });
  }
  deletePlan(plan) {
    if (!plan.id)
      return;
    this.confirmService.confirm({
      title: "Delete Plan",
      message: `Are you sure you want to delete the plan "${plan.name}"?`,
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      isDestructive: true
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.apiService.deleteMembershipPlan(plan.id).subscribe({
        next: () => {
          this.toastr.success("Membership plan deleted successfully", "Deleted");
          this.loadPlans();
        },
        error: (error) => {
          console.error("Error deleting plan:", error);
          this.toastr.error(error.error?.message || "Error deleting plan. Please try again.", "Error");
        }
      });
    });
  }
  // Computed properties for stats
  get totalCount() {
    return this.plans.length;
  }
  get activeCount() {
    return this.plans.filter((p) => p.isActive).length;
  }
  get inactiveCount() {
    return this.plans.filter((p) => !p.isActive).length;
  }
  get showForm() {
    return this.showFormFlag;
  }
  onPrimaryButtonClick() {
    if (this.showFormFlag) {
      this.cancelEdit();
    } else {
      this.startCreate();
    }
  }
  getFeatureCategoryColor(category) {
    switch (category) {
      case "DIRECTORY":
        return "bg-blue-100 text-blue-800";
      case "JOBS_PROJECTS":
        return "bg-green-100 text-green-800";
      case "EVENTS":
        return "bg-purple-100 text-purple-800";
      case "RESOURCES":
        return "bg-orange-100 text-orange-800";
      case "NETWORKING":
        return "bg-pink-100 text-pink-800";
      case "PREMIUM":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  }
  static {
    this.\u0275fac = function MembershipPlanManagementComponent_Factory(t) {
      return new (t || _MembershipPlanManagementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ConfirmService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MembershipPlanManagementComponent, selectors: [["app-membership-plan-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 4, consts: [[1, "management-container"], [1, "mb-10", "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-6"], [1, "title-area"], [1, "text-4xl", "font-black", "text-slate-900", "mb-2", "tracking-tighter"], [1, "text-sm", "font-medium", "text-slate-400"], ["class", "btn-premium flex items-center gap-2", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["class", "form-panel", "id", "plan-form", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], [1, "btn-premium", "flex", "items-center", "gap-2", 3, "click", "disabled"], [1, "text-xl"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-info"], [1, "stat-icon", "bg-indigo-50", "text-indigo-600"], [1, "text-emerald-500"], [1, "stat-icon", "bg-emerald-50", "text-emerald-600"], [1, "stat-card", "border-slate-100", "opacity-60"], [1, "stat-icon", "bg-slate-50", "text-slate-400"], ["class", "mb-8 p-4 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-700 rounded-r-2xl text-sm font-medium animate-pulse", 4, "ngIf"], ["class", "mb-8 p-4 bg-rose-50 border-l-4 border-rose-500 text-rose-700 rounded-r-2xl text-sm font-medium animate-pulse", 4, "ngIf"], [1, "mb-8", "p-4", "bg-emerald-50", "border-l-4", "border-emerald-500", "text-emerald-700", "rounded-r-2xl", "text-sm", "font-medium", "animate-pulse"], [1, "mb-8", "p-4", "bg-rose-50", "border-l-4", "border-rose-500", "text-rose-700", "rounded-r-2xl", "text-sm", "font-medium", "animate-pulse"], ["id", "plan-form", 1, "form-panel"], [1, "form-header"], [1, "text-slate-300", "hover:text-slate-600", "font-black", "text-2xl", "transition-all", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8", "mb-8"], [1, "input-label"], ["type", "text", "placeholder", "e.g. Executive Platinum", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["value", "INDIVIDUAL"], ["value", "CORPORATE"], ["value", "ANNUAL"], ["value", "FREE"], ["value", "PAID"], ["type", "number", "placeholder", "12", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "mb-8", "p-6", "bg-slate-50/50", "rounded-3xl", "border", "border-slate-100"], [1, "input-label", "font-black", "mb-4", "flex", "items-center", "gap-2"], [1, "bg-indigo-600", "text-white", "px-2", "py-0.5", "rounded-full", "text-[10px]"], [1, "feature-list-container", "gap-4"], ["class", "feature-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["class", "p-10 text-center", 4, "ngIf"], [1, "mb-10"], [1, "flex", "gap-4"], [1, "px-6", "py-2", "rounded-xl", "text-xs", "font-bold", "transition-all", 3, "click"], [1, "flex", "justify-end", "gap-3", "pt-6", "border-t", "border-slate-100"], [1, "px-8", "py-3", "rounded-2xl", "border-2", "border-slate-100", "text-slate-400", "font-black", "text-xs", "hover:bg-slate-50", "transition-all", 3, "click", "disabled"], [1, "btn-premium", "px-10", "py-3", 3, "click", "disabled"], ["type", "number", "placeholder", "0.00", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "maxlength", "3", "placeholder", "INR", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "feature-item", 3, "click"], [1, "flex-1"], [1, "flex", "items-center", "gap-2", "mb-1"], [1, "text-[10px]", "font-black", "uppercase", "text-indigo-400", "font-mono"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "text-[11px]", "text-slate-400", "line-clamp-1", "italic", "font-medium"], ["class", "text-indigo-600 text-xl font-black", 4, "ngIf"], [1, "text-indigo-600", "text-xl", "font-black"], [1, "p-10", "text-center"], [1, "text-sm", "font-bold", "text-slate-400"], [1, "table-wrapper"], ["class", "p-40 text-center flex flex-col items-center justify-center gap-4", 4, "ngIf"], ["class", "p-40 text-center", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "p-40", "text-center", "flex", "flex-col", "items-center", "justify-center", "gap-4"], [1, "h-10", "w-10", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "text-xs", "font-black", "text-slate-300", "uppercase", "tracking-widest"], [1, "p-40", "text-center"], [1, "text-6xl", "mb-4", "grayscale", "opacity-20"], [1, "overflow-x-auto"], [1, "w-full"], [1, "text-left", "font-bold", "uppercase", "text-[10px]", "tracking-widest", "text-slate-400"], [1, "text-right"], [1, "divide-y", "divide-slate-50"], ["class", "hover:bg-slate-50/50 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-slate-50/50", "transition-colors"], [1, "font-black", "text-slate-900"], [1, "text-[10px]", "font-black", "px-3", "py-1", "bg-indigo-50", "text-indigo-600", "rounded-lg"], [1, "text-sm", "font-black"], ["class", "text-indigo-600", 4, "ngIf"], ["class", "text-slate-400 font-bold opacity-50 uppercase tracking-tighter", 4, "ngIf"], [1, "text-sm", "font-medium", "text-slate-500"], [1, "flex", "items-center", "gap-2"], [1, "w-2", "h-2", "rounded-full", "bg-slate-200"], [1, "text-sm", "font-black", "text-slate-900"], [1, "text-[10px]", "uppercase", "font-black", "text-slate-400"], [1, "badge", 3, "ngClass"], ["class", "flex items-center justify-end gap-2", 4, "ngIf"], [1, "text-indigo-600"], [1, "text-slate-400", "font-bold", "opacity-50", "uppercase", "tracking-tighter"], [1, "flex", "items-center", "justify-end", "gap-2"], [1, "text-xs", "font-black", "text-indigo-600", "hover:bg-indigo-50", "px-3", "py-1.5", "rounded-lg", "transition-all", 3, "click"], [1, "text-xs", "font-black", "text-slate-400", "hover:text-slate-900", "px-3", "py-1.5", "rounded-lg", "transition-all", 3, "click"], [1, "text-xs", "font-black", "text-rose-500", "hover:bg-rose-50", "px-3", "py-1.5", "rounded-lg", "transition-all", 3, "click"]], template: function MembershipPlanManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Membership Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Design subscription structures, coordinate premium features, and monitor tiered growth.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, MembershipPlanManagementComponent_button_7_Template, 4, 2, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, MembershipPlanManagementComponent_ng_container_8_Template, 28, 5, "ng-container", 6)(9, MembershipPlanManagementComponent_div_9_Template, 56, 21, "div", 7)(10, MembershipPlanManagementComponent_div_10_Template, 4, 3, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.isAdmin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showForm && ctx.isAdmin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showForm);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  --plan-primary: #6366f1;\n  --plan-secondary: #0ea5e9;\n  --plan-success: #10b981;\n}\n.management-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 24px;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: transform 0.3s ease;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.stat-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 4px;\n}\n.stat-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  color: #0f172a;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 32px;\n  border: 2px solid #eef2ff;\n  padding: 32px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);\n  margin-bottom: 3rem;\n}\n.form-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 900;\n  letter-spacing: -0.02em;\n}\n.input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #475569;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border-radius: 14px;\n  border: 2px solid #f1f5f9;\n  background: #f8fafc;\n  font-size: 0.875rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--plan-primary);\n  background: white;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);\n  outline: none;\n}\n.feature-list-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 12px;\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 20px;\n}\n.feature-item[_ngcontent-%COMP%] {\n  background: white;\n  padding: 16px;\n  border-radius: 16px;\n  border: 1px solid #e2e8f0;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  gap: 12px;\n}\n.feature-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--plan-primary);\n  transform: scale(1.02);\n}\n.feature-item.selected[_ngcontent-%COMP%] {\n  border-color: var(--plan-primary);\n  background: #f5f3ff;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 32px;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n  overflow: hidden;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1000px;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 16px 24px;\n  color: #94a3b8;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-size: 0.65rem;\n  border-bottom: 2px solid #f1f5f9;\n  text-align: left;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 24px 24px;\n  font-size: 0.875rem;\n  color: #334155;\n  border-bottom: 1px solid #f8fafc;\n  text-align: left;\n  vertical-align: middle;\n}\n.overflow-x-auto[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #e2e8f0 transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #e2e8f0;\n  border-radius: 20px;\n  border: 2px solid transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #cbd5e1;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.65rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  white-space: nowrap !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 0.05em;\n}\n.badge-active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge-inactive[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.btn-premium[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #0ea5e9);\n  color: white;\n  padding: 10px 20px;\n  border-radius: 14px;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.2);\n}\n.btn-premium[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);\n}\n/*# sourceMappingURL=membership-plan-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MembershipPlanManagementComponent, { className: "MembershipPlanManagementComponent", filePath: "src\\app\\pages\\membership-plan-management\\membership-plan-management.component.ts", lineNumber: 42 });
})();

// src/app/pages/plan-feature-management/plan-feature-management.component.ts
function PlanFeatureManagementComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function PlanFeatureManagementComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPrimaryButtonClick());
    });
    \u0275\u0275elementStart(1, "span", 11);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showForm ? "View Feature List" : "Define New Feature", " ");
  }
}
function PlanFeatureManagementComponent_ng_container_8_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.successMessage, "");
  }
}
function PlanFeatureManagementComponent_ng_container_8_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, "");
  }
}
function PlanFeatureManagementComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "p");
    \u0275\u0275text(5, "Total Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275text(9, "\u{1F6E0}\uFE0F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 13)(11, "div", 14)(12, "p");
    \u0275\u0275text(13, "Active Privileges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 18);
    \u0275\u0275text(17, "\u{1F4E1}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 19)(19, "div", 14)(20, "p");
    \u0275\u0275text(21, "Suspended");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h3", 20);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 21);
    \u0275\u0275text(25, "\u{1F507}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(26, PlanFeatureManagementComponent_ng_container_8_div_26_Template, 2, 1, "div", 22)(27, PlanFeatureManagementComponent_ng_container_8_div_27_Template, 2, 1, "div", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.totalCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.activeCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.inactiveCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
  }
}
function PlanFeatureManagementComponent_div_9_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1, "Internal logic identifier");
    \u0275\u0275elementEnd();
  }
}
function PlanFeatureManagementComponent_div_9_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1, "Use only UPPERCASE, NUMBERS, and UNDERSCORES");
    \u0275\u0275elementEnd();
  }
}
function PlanFeatureManagementComponent_div_9_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    \u0275\u0275property("value", cat_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r4);
  }
}
function PlanFeatureManagementComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "h2", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function PlanFeatureManagementComponent_div_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "div", 31)(8, "label");
    \u0275\u0275text(9, "System Code Keyword");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function PlanFeatureManagementComponent_div_9_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.code, $event) || (ctx_r1.form.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function PlanFeatureManagementComponent_div_9_Template_input_input_10_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCodeInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, PlanFeatureManagementComponent_div_9_p_11_Template, 2, 0, "p", 33)(12, PlanFeatureManagementComponent_div_9_p_12_Template, 2, 0, "p", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 31)(14, "label");
    \u0275\u0275text(15, "Public Facing Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function PlanFeatureManagementComponent_div_9_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 36)(18, "label", 37);
    \u0275\u0275text(19, "Description & Narrative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 38);
    \u0275\u0275twoWayListener("ngModelChange", function PlanFeatureManagementComponent_div_9_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 31)(22, "label");
    \u0275\u0275text(23, "System Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PlanFeatureManagementComponent_div_9_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.category, $event) || (ctx_r1.form.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(25, PlanFeatureManagementComponent_div_9_option_25_Template, 2, 2, "option", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 31)(27, "label");
    \u0275\u0275text(28, "Initial Lifecycle Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function PlanFeatureManagementComponent_div_9_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.isActive, $event) || (ctx_r1.form.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option", 41);
    \u0275\u0275text(31, "Active Availability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 41);
    \u0275\u0275text(33, "Internal/Suspended");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(34, "div", 42)(35, "button", 43);
    \u0275\u0275listener("click", function PlanFeatureManagementComponent_div_9_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelEdit());
    });
    \u0275\u0275text(36, "Discard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 44);
    \u0275\u0275listener("click", function PlanFeatureManagementComponent_div_9_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveFeature());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Modify Feature Definition" : "Draft New System Feature");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.code);
    \u0275\u0275property("disabled", ctx_r1.isEditMode || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.form.code || ctx_r1.validateCode() && ctx_r1.form.code.length >= 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.code && !ctx_r1.validateCode());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.category);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.isActive);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngValue", false);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isLoading || !ctx_r1.isFormValid());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isLoading ? "COMMITTING..." : ctx_r1.isEditMode ? "Authorize Changes" : "Initialize Feature");
  }
}
function PlanFeatureManagementComponent_nav_10_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function PlanFeatureManagementComponent_nav_10_button_3_Template_button_click_0_listener() {
      const cat_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTabChange(cat_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === cat_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r7);
  }
}
function PlanFeatureManagementComponent_nav_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 48)(1, "button", 49);
    \u0275\u0275listener("click", function PlanFeatureManagementComponent_nav_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("ALL"));
    });
    \u0275\u0275text(2, "All Collections");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PlanFeatureManagementComponent_nav_10_button_3_Template, 2, 3, "button", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.activeTab === "ALL");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
  }
}
function PlanFeatureManagementComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "div", 56);
    \u0275\u0275elementStart(2, "p", 57);
    \u0275\u0275text(3, "Opening Feature Registry...");
    \u0275\u0275elementEnd()();
  }
}
function PlanFeatureManagementComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59);
    \u0275\u0275text(2, "\u2699\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 60);
    \u0275\u0275text(4, "Registry is clean. No data found.");
    \u0275\u0275elementEnd()();
  }
}
function PlanFeatureManagementComponent_div_11_div_3_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 67);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function PlanFeatureManagementComponent_div_11_div_3_tr_18_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 67)(1, "div", 78)(2, "button", 79);
    \u0275\u0275listener("click", function PlanFeatureManagementComponent_div_11_div_3_tr_18_td_24_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const feature_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEdit(feature_r9));
    });
    \u0275\u0275text(3, "Modify");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 80);
    \u0275\u0275listener("click", function PlanFeatureManagementComponent_div_11_div_3_tr_18_td_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const feature_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteFeature(feature_r9));
    });
    \u0275\u0275text(5, "Erase");
    \u0275\u0275elementEnd()()();
  }
}
function PlanFeatureManagementComponent_div_11_div_3_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 68)(1, "td")(2, "code", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "p", 70);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 71);
    \u0275\u0275text(8, "Resource Managed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "p", 72);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td")(13, "span", 73);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "span", 74);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 75)(20, "span", 76);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 77);
    \u0275\u0275text(23, "Linked Plans");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, PlanFeatureManagementComponent_div_11_div_3_tr_18_td_24_Template, 6, 0, "td", 64);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r9.code);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r9.name);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", feature_r9.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r9.description || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r9.category);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(feature_r9.isActive ? "text-emerald-500" : "text-slate-400 opacity-50");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r9.isActive ? "Active" : "Suspended");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((feature_r9.planIds == null ? null : feature_r9.planIds.length) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin);
  }
}
function PlanFeatureManagementComponent_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "table", 62)(2, "thead", 63)(3, "tr")(4, "th");
    \u0275\u0275text(5, "Logical Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Implementation");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, PlanFeatureManagementComponent_div_11_div_3_th_16_Template, 2, 0, "th", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody", 65);
    \u0275\u0275template(18, PlanFeatureManagementComponent_div_11_div_3_tr_18_Template, 25, 10, "tr", 66);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.filteredFeatures);
  }
}
function PlanFeatureManagementComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, PlanFeatureManagementComponent_div_11_div_1_Template, 4, 0, "div", 52)(2, PlanFeatureManagementComponent_div_11_div_2_Template, 5, 0, "div", 53)(3, PlanFeatureManagementComponent_div_11_div_3_Template, 19, 2, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.filteredFeatures.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoading && ctx_r1.filteredFeatures.length > 0);
  }
}
var PlanFeatureManagementComponent = class _PlanFeatureManagementComponent {
  constructor(apiService, authService, toastr, confirmService) {
    this.apiService = apiService;
    this.authService = authService;
    this.toastr = toastr;
    this.confirmService = confirmService;
    this.features = [];
    this.filteredFeatures = [];
    this.isLoading = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.activeTab = "ALL";
    this.showForm = false;
    this.isEditMode = false;
    this.selectedFeature = null;
    this.form = this.getEmptyForm();
    this.categories = ["GENERAL", "DIRECTORY", "JOBS_PROJECTS", "EVENTS", "RESOURCES", "NETWORKING", "PREMIUM"];
    this.currentUser = null;
    this.isAdmin = false;
  }
  ngOnInit() {
    this.userSubscription = this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      this.updateAdminStatus();
    });
    this.currentUser = this.authService.getCurrentUser();
    this.updateAdminStatus();
    this.loadFeatures();
  }
  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
  updateAdminStatus() {
    this.isAdmin = this.authService.isAdmin() || this.currentUser?.role === "admin" || this.currentUser?.role === "ADMIN";
    if (this.currentUser) {
      console.log("Plan Feature Management - User:", this.currentUser);
      console.log("Plan Feature Management - Role:", this.currentUser.role);
      console.log("Plan Feature Management - Is Admin:", this.isAdmin);
    }
  }
  loadFeatures() {
    this.isLoading = true;
    this.errorMessage = "";
    this.apiService.getPlanFeatures().subscribe({
      next: (response) => {
        this.features = Array.isArray(response) ? response : [];
        this.filterFeatures();
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading features:", error);
        this.errorMessage = "Error loading features. Please try again.";
        this.toastr.error(this.errorMessage, "Error");
        this.isLoading = false;
      }
    });
  }
  filterFeatures() {
    if (this.activeTab === "ALL") {
      this.filteredFeatures = this.features;
    } else {
      this.filteredFeatures = this.features.filter((f) => f.category === this.activeTab);
    }
  }
  onTabChange(tab) {
    this.activeTab = tab;
    this.filterFeatures();
  }
  getEmptyForm() {
    return {
      code: "",
      name: "",
      description: "",
      category: "GENERAL",
      isActive: true
    };
  }
  startCreate() {
    this.isEditMode = false;
    this.selectedFeature = null;
    this.form = this.getEmptyForm();
    this.showForm = true;
    this.errorMessage = "";
    this.successMessage = "";
  }
  startEdit(feature) {
    this.isEditMode = true;
    this.selectedFeature = feature;
    this.form = __spreadValues({}, feature);
    this.showForm = true;
    this.errorMessage = "";
  }
  cancelEdit() {
    this.isEditMode = false;
    this.selectedFeature = null;
    this.form = this.getEmptyForm();
    this.showForm = false;
    this.errorMessage = "";
    this.successMessage = "";
  }
  saveFeature() {
    this.errorMessage = "";
    this.successMessage = "";
    if (!this.form.code || !this.form.code.trim()) {
      this.errorMessage = "Feature Code is required.";
      this.toastr.error("Feature Code is required.", "Validation Error");
      return;
    }
    if (!this.form.name || !this.form.name.trim()) {
      this.errorMessage = "Feature Name is required.";
      this.toastr.error("Feature Name is required.", "Validation Error");
      return;
    }
    const codeRegex = /^[A-Z0-9_]+$/;
    const trimmedCode = this.form.code.trim().toUpperCase();
    if (!codeRegex.test(trimmedCode)) {
      this.errorMessage = "Code must contain only uppercase letters, numbers, and underscores.";
      this.toastr.error("Invalid code format. Use only uppercase letters, numbers, and underscores.", "Validation Error");
      return;
    }
    if (trimmedCode.length < 3) {
      this.errorMessage = "Code must be at least 3 characters long.";
      this.toastr.error("Code must be at least 3 characters long.", "Validation Error");
      return;
    }
    if (this.form.name.trim().length < 3) {
      this.errorMessage = "Feature Name must be at least 3 characters long.";
      this.toastr.error("Feature Name must be at least 3 characters long.", "Validation Error");
      return;
    }
    this.isLoading = true;
    const payload = {
      code: trimmedCode,
      name: this.form.name.trim(),
      description: this.form.description?.trim() || "",
      category: this.form.category,
      isActive: this.form.isActive !== void 0 ? this.form.isActive : true
    };
    if (this.isEditMode && this.form.id) {
      this.apiService.updatePlanFeature(this.form.id, payload).subscribe({
        next: (response) => {
          this.toastr.success("Feature updated successfully", "Updated");
          this.isLoading = false;
          this.cancelEdit();
          this.loadFeatures();
        },
        error: (error) => {
          console.error("Error updating feature:", error);
          const errorMsg = error.error?.error || error.error?.message || "Error updating feature. Please try again.";
          this.errorMessage = errorMsg;
          this.toastr.error(errorMsg, "Error");
          this.isLoading = false;
        }
      });
    } else {
      this.apiService.createPlanFeature(payload).subscribe({
        next: (response) => {
          this.successMessage = "Feature created successfully!";
          this.toastr.success("Feature created successfully", "Created");
          this.isLoading = false;
          this.cancelEdit();
          this.loadFeatures();
        },
        error: (error) => {
          console.error("Error creating feature:", error);
          const errorMsg = error.error?.error || error.error?.message || "Error creating feature. Please try again.";
          if (errorMsg.includes("already exists") || errorMsg.includes("duplicate")) {
            this.errorMessage = "A feature with this code already exists. Please use a different code.";
            this.toastr.error("A feature with this code already exists.", "Duplicate Code");
          } else {
            this.errorMessage = errorMsg;
            this.toastr.error(errorMsg, "Error");
          }
          this.isLoading = false;
        }
      });
    }
  }
  // Auto-format code to uppercase as user types
  onCodeInput(event) {
    const value = event.target.value.toUpperCase().replace(/[^A-Z0-9_]/g, "");
    this.form.code = value;
  }
  // Validate code format in real-time
  validateCode() {
    if (!this.form.code)
      return true;
    const codeRegex = /^[A-Z0-9_]+$/;
    return codeRegex.test(this.form.code);
  }
  // Check if form is valid
  isFormValid() {
    return !!(this.form.code && this.form.code.trim().length >= 3 && this.form.name && this.form.name.trim().length >= 3 && this.validateCode());
  }
  deleteFeature(feature) {
    if (!feature.id)
      return;
    this.confirmService.confirm({
      title: "Delete Feature",
      message: `Are you sure you want to delete feature "${feature.name}"? This will remove it from all plans.`,
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      isDestructive: true
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.isLoading = true;
      this.apiService.deletePlanFeature(feature.id).subscribe({
        next: () => {
          this.toastr.success("Feature deleted successfully", "Deleted");
          this.loadFeatures();
        },
        error: (error) => {
          console.error("Error deleting feature:", error);
          this.toastr.error(error.error?.error || "Error deleting feature.", "Error");
          this.isLoading = false;
        }
      });
    });
  }
  getCategoryColor(category) {
    switch (category) {
      case "DIRECTORY":
        return "bg-blue-100 text-blue-800";
      case "JOBS_PROJECTS":
        return "bg-green-100 text-green-800";
      case "EVENTS":
        return "bg-purple-100 text-purple-800";
      case "RESOURCES":
        return "bg-orange-100 text-orange-800";
      case "NETWORKING":
        return "bg-pink-100 text-pink-800";
      case "PREMIUM":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-slate-100 text-slate-800";
    }
  }
  get totalCount() {
    return this.features.length;
  }
  get activeCount() {
    return this.features.filter((f) => f.isActive).length;
  }
  get inactiveCount() {
    return this.features.filter((f) => !f.isActive).length;
  }
  getCategoryCount(category) {
    return this.features.filter((f) => f.category === category).length;
  }
  onPrimaryButtonClick() {
    if (this.showForm) {
      this.cancelEdit();
    } else {
      this.startCreate();
    }
  }
  static {
    this.\u0275fac = function PlanFeatureManagementComponent_Factory(t) {
      return new (t || _PlanFeatureManagementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ConfirmService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlanFeatureManagementComponent, selectors: [["app-plan-feature-management"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [[1, "management-container"], [1, "mb-10", "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "gap-6"], [1, "title-area"], [1, "text-4xl", "font-black", "text-slate-900", "mb-2", "tracking-tighter"], [1, "text-sm", "font-medium", "text-slate-400"], ["class", "btn-premium flex items-center gap-2", 3, "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["class", "form-card", "id", "feature-form", 4, "ngIf"], ["class", "cat-nav", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], [1, "btn-premium", "flex", "items-center", "gap-2", 3, "click", "disabled"], [1, "text-xl"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-info"], [1, "text-slate-900", "font-black"], [1, "stat-icon", "bg-indigo-50", "text-indigo-600"], [1, "text-emerald-500", "font-black"], [1, "stat-icon", "bg-emerald-50", "text-emerald-600"], [1, "stat-card", "border-slate-100", "opacity-60"], [1, "text-slate-400", "font-black"], [1, "stat-icon", "bg-slate-50", "text-slate-400"], ["class", "mb-8 p-4 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-700 rounded-r-2xl text-sm font-medium animate-pulse", 4, "ngIf"], ["class", "mb-8 p-4 bg-rose-50 border-l-4 border-rose-500 text-rose-700 rounded-r-2xl text-sm font-medium animate-pulse", 4, "ngIf"], [1, "mb-8", "p-4", "bg-emerald-50", "border-l-4", "border-emerald-500", "text-emerald-700", "rounded-r-2xl", "text-sm", "font-medium", "animate-pulse"], [1, "mb-8", "p-4", "bg-rose-50", "border-l-4", "border-rose-500", "text-rose-700", "rounded-r-2xl", "text-sm", "font-medium", "animate-pulse"], ["id", "feature-form", 1, "form-card"], [1, "flex", "items-center", "justify-between", "mb-8", "pb-4", "border-bottom", "border-slate-100"], [1, "text-2xl", "font-black", "text-slate-900"], [1, "text-slate-300", "hover:text-slate-600", "font-black", "text-2xl", "transition-all", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8", "mb-8"], [1, "input-group"], ["type", "text", "placeholder", "ACCESS_DIRECTORY", 1, "premium-input", "uppercase", "font-mono", 3, "ngModelChange", "input", "ngModel", "disabled"], ["class", "text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tighter", 4, "ngIf"], ["class", "text-[10px] font-bold text-rose-500 mt-2 uppercase tracking-tighter", 4, "ngIf"], ["type", "text", "placeholder", "Member Directory Access", 1, "premium-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "md:col-span-2"], [1, "block", "text-[11px]", "font-black", "uppercase", "text-slate-400", "mb-2", "tracking-widest"], ["rows", "3", "placeholder", "Detailed explanation...", 1, "premium-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "premium-input", 3, "ngModelChange", "ngModel", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "flex", "justify-end", "gap-3", "pt-6", "border-t", "border-slate-100"], [1, "px-8", "py-3", "rounded-2xl", "border-2", "border-slate-100", "text-slate-400", "font-black", "text-xs", "hover:bg-slate-50", "transition-all", "uppercase", "tracking-widest", "font-mono", 3, "click", "disabled"], [1, "btn-premium", "px-10", "py-3", "font-mono", "font-black", "uppercase", "tracking-widest", 3, "click", "disabled"], [1, "text-[10px]", "font-bold", "text-slate-400", "mt-2", "uppercase", "tracking-tighter"], [1, "text-[10px]", "font-bold", "text-rose-500", "mt-2", "uppercase", "tracking-tighter"], [3, "value"], [1, "cat-nav"], [1, "cat-btn", 3, "click"], ["class", "cat-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "table-wrapper"], ["class", "p-40 text-center flex flex-col items-center justify-center gap-4", 4, "ngIf"], ["class", "p-40 text-center", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "p-40", "text-center", "flex", "flex-col", "items-center", "justify-center", "gap-4"], [1, "h-10", "w-10", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "text-[10px]", "font-black", "text-slate-300", "uppercase", "tracking-widest"], [1, "p-40", "text-center"], [1, "text-6xl", "mb-4", "grayscale", "opacity-20"], [1, "text-xs", "font-black", "text-slate-300", "uppercase", "tracking-widest"], [1, "overflow-x-auto"], [1, "w-full"], [1, "bg-slate-50/50"], ["class", "text-right", 4, "ngIf"], [1, "divide-y", "divide-slate-50"], ["class", "hover:bg-slate-50/50 transition-colors", 4, "ngFor", "ngForOf"], [1, "text-right"], [1, "hover:bg-slate-50/50", "transition-colors"], [1, "code-badge", "uppercase", "font-bold"], [1, "font-black", "text-slate-800", "leading-tight"], [1, "text-[10px]", "text-slate-400", "font-bold", "uppercase", "tracking-tight", "mt-1"], [1, "text-xs", "text-slate-500", "font-medium", "max-w-sm", "line-clamp-2", 3, "title"], [1, "cat-pill", "bg-slate-100", "text-slate-500", "font-black"], [1, "text-[10px]", "font-black", "uppercase"], [1, "flex", "items-center", "gap-2"], [1, "text-xs", "font-black", "text-slate-900"], [1, "text-[10px]", "text-slate-400", "font-bold", "uppercase"], [1, "flex", "items-center", "justify-end", "gap-3"], [1, "text-[10px]", "font-black", "text-indigo-600", "hover:text-indigo-800", "transition-all", "uppercase", "tracking-widest", 3, "click"], [1, "text-[10px]", "font-black", "text-rose-500", "hover:text-rose-700", "transition-all", "uppercase", "tracking-widest", 3, "click"]], template: function PlanFeatureManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1", 3);
        \u0275\u0275text(4, "Plan Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Assemble core capabilities, define access permissions, and calibrate subscriber benefits.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, PlanFeatureManagementComponent_button_7_Template, 4, 2, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, PlanFeatureManagementComponent_ng_container_8_Template, 28, 5, "ng-container", 6)(9, PlanFeatureManagementComponent_div_9_Template, 39, 19, "div", 7)(10, PlanFeatureManagementComponent_nav_10_Template, 4, 3, "nav", 8)(11, PlanFeatureManagementComponent_div_11_Template, 4, 3, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.isAdmin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showForm && ctx.isAdmin);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showForm);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showForm);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  --feature-primary: #6366f1;\n  --feature-accent: #f43f5e;\n}\n.management-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 3rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 24px;\n  padding: 24px;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cat-nav[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f1f5f9;\n  padding: 8px;\n  border-radius: 24px;\n  max-width: 100%;\n  margin-bottom: 2.5rem;\n  overflow-x: auto;\n  border: 1px solid rgba(226, 232, 240, 0.4);\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.cat-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.cat-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 18px;\n  font-size: 10px;\n  font-weight: 800;\n  color: #64748b;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  white-space: nowrap;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  flex-shrink: 0;\n}\n.cat-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--feature-primary);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);\n  transform: translateY(-1px);\n}\n.cat-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: white;\n  color: #1e293b;\n}\n.cat-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--feature-primary);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n}\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 32px;\n  border: 2px solid #eef2ff;\n  padding: 32px;\n  margin-bottom: 3rem;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.premium-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border-radius: 14px;\n  border: 2px solid #f1f5f9;\n  background: #f8fafc;\n  font-size: 0.875rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.premium-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--feature-primary);\n  background: white;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);\n  outline: none;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 32px;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n  overflow: hidden;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 900px;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 16px 24px;\n  color: #94a3b8;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-size: 0.65rem;\n  border-bottom: 2px solid #f1f5f9;\n  text-align: left;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 24px 24px;\n  font-size: 0.875rem;\n  color: #334155;\n  border-bottom: 1px solid #f8fafc;\n  text-align: left;\n  vertical-align: middle;\n}\n.overflow-x-auto[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #e2e8f0 transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #e2e8f0;\n  border-radius: 20px;\n  border: 2px solid transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #cbd5e1;\n}\n.code-badge[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: #f5f3ff;\n  color: #6366f1;\n  padding: 4px 8px;\n  border-radius: 8px;\n  border: 1px solid rgba(99, 102, 241, 0.1);\n}\n.cat-pill[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 10px;\n  font-size: 0.65rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  white-space: nowrap;\n  display: inline-flex;\n}\n.btn-premium[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: white;\n  padding: 12px 24px;\n  border-radius: 16px;\n  font-weight: 800;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=plan-feature-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlanFeatureManagementComponent, { className: "PlanFeatureManagementComponent", filePath: "src\\app\\pages\\plan-feature-management\\plan-feature-management.component.ts", lineNumber: 29 });
})();

// src/app/components/modals/application-detail-modal/application-detail-modal.component.ts
var _c0 = (a0, a1, a2) => ({ "status-pending": a0, "status-approved": a1, "status-rejected": a2 });
function ApplicationDetailModalComponent_div_0_div_7_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "label");
    \u0275\u0275text(2, "Digital Presence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r1.application.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.application.website, " ");
  }
}
function ApplicationDetailModalComponent_div_0_div_7_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 12);
    \u0275\u0275text(2, "Headquarters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.application.address);
  }
}
function ApplicationDetailModalComponent_div_0_div_7_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 12);
    \u0275\u0275text(2, "Intelligence Stack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.application.techStack);
  }
}
function ApplicationDetailModalComponent_div_0_div_7_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "label", 26);
    \u0275\u0275text(3, "Rejection Narrative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 28);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.application.rejectionReason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Finalized On: ", \u0275\u0275pipeBind2(8, 2, ctx_r1.application.reviewedAt, "medium"), "");
  }
}
function ApplicationDetailModalComponent_div_0_div_7_div_55_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "p", 38);
    \u0275\u0275text(3, "Synchronizing Records...");
    \u0275\u0275elementEnd()();
  }
}
function ApplicationDetailModalComponent_div_0_div_7_div_55_div_6_div_2_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 46)(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 49)(7, "span", 50);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 51)(10, "button", 52);
    \u0275\u0275listener("click", function ApplicationDetailModalComponent_div_0_div_7_div_55_div_6_div_2_tr_13_Template_button_click_10_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.downloadInvoice(p_r5.id, p_r5.invoiceNumber));
    });
    \u0275\u0275text(11, "EXTRACT PDF");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, p_r5.paidDate || p_r5.createdAt, "shortDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.planName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r5.currency, " ", p_r5.amount, "");
  }
}
function ApplicationDetailModalComponent_div_0_div_7_div_55_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "table", 40)(2, "thead", 41)(3, "tr")(4, "th", 42);
    \u0275\u0275text(5, "Transacted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 42);
    \u0275\u0275text(7, "Identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 42);
    \u0275\u0275text(9, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 43);
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody", 44);
    \u0275\u0275template(13, ApplicationDetailModalComponent_div_0_div_7_div_55_div_6_div_2_tr_13_Template, 12, 7, "tr", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.payments);
  }
}
function ApplicationDetailModalComponent_div_0_div_7_div_55_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, ApplicationDetailModalComponent_div_0_div_7_div_55_div_6_div_1_Template, 4, 0, "div", 34)(2, ApplicationDetailModalComponent_div_0_div_7_div_55_div_6_div_2_Template, 14, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingPayments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingPayments && ctx_r1.payments.length > 0);
  }
}
function ApplicationDetailModalComponent_div_0_div_7_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3, "Financial Ledger");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function ApplicationDetailModalComponent_div_0_div_7_div_55_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.togglePaymentHistory());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ApplicationDetailModalComponent_div_0_div_7_div_55_div_6_Template, 3, 2, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showPaymentHistory ? "Archive History" : "Examine Ledger", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showPaymentHistory);
  }
}
function ApplicationDetailModalComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "h1", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 11)(7, "span", 12);
    \u0275\u0275text(8, "Primary Applicant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 14)(11, "label");
    \u0275\u0275text(12, "Legal Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14)(16, "label");
    \u0275\u0275text(17, "Secure Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "label");
    \u0275\u0275text(22, "Contact Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 15);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 14)(26, "label");
    \u0275\u0275text(27, "Submission Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 15);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 11)(32, "span", 12);
    \u0275\u0275text(33, "Professional Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 13)(35, "div", 14)(36, "label");
    \u0275\u0275text(37, "Entity Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 16);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 14)(41, "label");
    \u0275\u0275text(42, "Industry Segment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 15);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 14)(46, "label");
    \u0275\u0275text(47, "Workforce Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 15);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(50, ApplicationDetailModalComponent_div_0_div_7_div_50_Template, 5, 2, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 18);
    \u0275\u0275template(52, ApplicationDetailModalComponent_div_0_div_7_div_52_Template, 5, 1, "div", 19)(53, ApplicationDetailModalComponent_div_0_div_7_div_53_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, ApplicationDetailModalComponent_div_0_div_7_div_54_Template, 9, 5, "div", 20)(55, ApplicationDetailModalComponent_div_0_div_7_div_55_Template, 7, 2, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.application.company);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(18, _c0, ctx_r1.application.status === "PENDING", ctx_r1.application.status === "APPROVED", ctx_r1.application.status === "REJECTED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.application.status, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.application.applicantName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.application.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.application.phone || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 15, ctx_r1.application.createdAt, "MMM d, y, h:mm a"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.application.company);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.application.industry || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.application.teamSize || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.application.website);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.application.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.application.techStack);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.application.status === "REJECTED" && ctx_r1.application.rejectionReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isApprovedMember());
  }
}
function ApplicationDetailModalComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "button", 54);
    \u0275\u0275listener("click", function ApplicationDetailModalComponent_div_0_div_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReject());
    });
    \u0275\u0275text(2, "Reject Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 55);
    \u0275\u0275listener("click", function ApplicationDetailModalComponent_div_0_div_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onApprove());
    });
    \u0275\u0275text(4, "Authorize Member");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
  }
}
function ApplicationDetailModalComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "button", 56);
    \u0275\u0275listener("click", function ApplicationDetailModalComponent_div_0_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(2, "Close Dossier");
    \u0275\u0275elementEnd()();
  }
}
function ApplicationDetailModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ApplicationDetailModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ApplicationDetailModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h2");
    \u0275\u0275text(4, "Application Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ApplicationDetailModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ApplicationDetailModalComponent_div_0_div_7_Template, 56, 22, "div", 5)(8, ApplicationDetailModalComponent_div_0_div_8_Template, 5, 2, "div", 6)(9, ApplicationDetailModalComponent_div_0_div_9_Template, 3, 0, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.application);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showActions && ctx_r1.application.status === "PENDING");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.showActions || ctx_r1.application.status !== "PENDING");
  }
}
var ApplicationDetailModalComponent = class _ApplicationDetailModalComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.show = false;
    this.application = null;
    this.showActions = false;
    this.close = new EventEmitter();
    this.approve = new EventEmitter();
    this.reject = new EventEmitter();
    this.showPaymentHistory = false;
    this.payments = [];
    this.isLoadingPayments = false;
    this.isLoading = false;
    this.paymentsError = "";
  }
  onClose() {
    this.showPaymentHistory = false;
    this.payments = [];
    this.isLoadingPayments = false;
    this.paymentsError = "";
    this.close.emit();
  }
  onApprove() {
    this.approve.emit(this.application);
  }
  onReject() {
    this.reject.emit(this.application);
  }
  isApprovedMember() {
    return !!this.application && (this.application.membershipStatus === "ACTIVE" || this.application.membershipNumber || this.application.status === "APPROVED");
  }
  togglePaymentHistory() {
    if (!this.isApprovedMember())
      return;
    this.showPaymentHistory = !this.showPaymentHistory;
    if (this.showPaymentHistory) {
      this.loadPaymentHistory();
    }
  }
  loadPaymentHistory() {
    if (!this.isApprovedMember() || !this.application?.id)
      return;
    const memberId = Number(this.application.id);
    if (!memberId)
      return;
    this.isLoadingPayments = true;
    this.paymentsError = "";
    this.payments = [];
    this.apiService.getMemberMembershipPaymentHistory(memberId).subscribe({
      next: (response) => {
        const rows = Array.isArray(response) ? response : [];
        this.payments = rows.sort((a, b) => {
          const ad = new Date(a?.paidDate || a?.createdAt || 0).getTime();
          const bd = new Date(b?.paidDate || b?.createdAt || 0).getTime();
          return bd - ad;
        });
        this.isLoadingPayments = false;
      },
      error: (error) => {
        console.error("Error loading member payment history:", error);
        this.paymentsError = error?.error?.error || error?.error?.message || "Failed to load payment history.";
        this.isLoadingPayments = false;
      }
    });
  }
  downloadInvoice(paymentId, invoiceNumber) {
    if (!paymentId)
      return;
    const filename = (invoiceNumber && invoiceNumber.trim().length > 0 ? invoiceNumber : `invoice-${paymentId}`) + ".pdf";
    this.apiService.downloadMembershipInvoice(paymentId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        console.error("Invoice download failed:", error);
        this.paymentsError = "Failed to download invoice. Please try again.";
      }
    });
  }
  static {
    this.\u0275fac = function ApplicationDetailModalComponent_Factory(t) {
      return new (t || _ApplicationDetailModalComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplicationDetailModalComponent, selectors: [["app-application-detail-modal"]], inputs: { show: "show", application: "application", showActions: "showActions" }, outputs: { close: "close", approve: "approve", reject: "reject" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], ["title", "Close Panel", 1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-body"], [1, "status-track"], [1, "text-4xl", "font-black", "text-slate-900", "tracking-tighter"], [1, "status-badge", 3, "ngClass"], [1, "content-group"], [1, "group-title"], [1, "info-grid"], [1, "info-item"], [1, "value"], [1, "value", "font-bold", "text-indigo-600"], ["class", "info-item", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], ["class", "content-group mb-0", 4, "ngIf"], ["class", "mt-8", 4, "ngIf"], ["target", "_blank", 1, "value", "text-indigo-600", "hover:underline", 3, "href"], [1, "content-group", "mb-0"], [1, "value", "text-sm", "leading-relaxed"], [1, "mt-8"], [1, "bg-rose-50", "border-l-4", "border-rose-500", "rounded-r-2xl", "p-6"], [1, "info-item", "label", "text-rose-800", "mb-2"], [1, "text-rose-900", "font-medium", "whitespace-pre-wrap"], [1, "text-[10px]", "text-rose-400", "mt-4", "uppercase", "font-black"], [1, "flex", "items-center", "justify-between", "mb-4", "px-2"], [1, "text-sm", "font-black", "text-slate-900", "uppercase", "tracking-widest"], [1, "btn-pill", "btn-secondary", "text-[10px]", "py-1.5", 3, "click"], ["class", "animate-fadeIn", 4, "ngIf"], [1, "animate-fadeIn"], ["class", "py-12 text-center", 4, "ngIf"], ["class", "overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm", 4, "ngIf"], [1, "py-12", "text-center"], [1, "h-8", "w-8", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin", "mx-auto", "mb-4"], [1, "text-[10px]", "font-black", "text-slate-400", "uppercase"], [1, "overflow-hidden", "rounded-2xl", "border", "border-slate-100", "bg-white", "shadow-sm"], [1, "min-w-full", "text-left"], [1, "bg-slate-50"], [1, "px-6", "py-4", "text-[10px]", "font-black", "text-slate-400", "uppercase"], [1, "px-6", "py-4", "text-[10px]", "font-black", "text-slate-400", "uppercase", "text-right"], [1, "divide-y", "divide-slate-50"], ["class", "hover:bg-slate-50 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-slate-50", "transition-colors"], [1, "px-6", "py-4", "text-xs", "font-medium", "text-slate-500"], [1, "px-6", "py-4", "text-xs", "font-bold", "text-slate-900"], [1, "px-6", "py-4"], [1, "text-xs", "font-black", "text-emerald-600"], [1, "px-6", "py-4", "text-right"], [1, "text-[10px]", "font-black", "text-indigo-600", "hover:underline", 3, "click"], [1, "modal-footer"], [1, "btn-pill", "btn-secondary", 3, "click", "disabled"], [1, "btn-pill", "btn-primary", 3, "click", "disabled"], [1, "btn-pill", "btn-secondary", 3, "click"]], template: function ApplicationDetailModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ApplicationDetailModalComponent_div_0_Template, 10, 3, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  --modal-primary: #6366f1;\n  --modal-success: #10b981;\n  --modal-danger: #f43f5e;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.4);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  animation: _ngcontent-%COMP%_overlayFade 0.3s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_overlayFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 32px;\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n  animation: _ngcontent-%COMP%_modalReveal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  scrollbar-width: thin;\n  scrollbar-color: #e2e8f0 transparent;\n}\n@keyframes _ngcontent-%COMP%_modalReveal {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 10;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 1.5rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #ef4444;\n  transform: rotate(90deg);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.content-group[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 24px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n  margin-bottom: 24px;\n}\n.group-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 900;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 20px;\n  display: block;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 24px;\n}\n.info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #1e293b;\n  word-break: break-all;\n}\n.status-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 32px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 12px;\n  font-size: 0.7rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-approved[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-rejected[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  background: #f8fafc;\n  border-radius: 0 0 32px 32px;\n}\n.btn-pill[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 16px;\n  font-size: 0.875rem;\n  font-weight: 800;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  color: #64748b;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #1e293b;\n  border-color: #cbd5e1;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--modal-primary);\n  color: white;\n  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--modal-danger);\n  color: white;\n  box-shadow: 0 10px 15px -3px rgba(244, 63, 94, 0.2);\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: var(--modal-success);\n  color: white;\n  box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2);\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=application-detail-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplicationDetailModalComponent, { className: "ApplicationDetailModalComponent", filePath: "src\\app\\components\\modals\\application-detail-modal\\application-detail-modal.component.ts", lineNumber: 29 });
})();

// src/app/components/modals/approve-reject-modal/approve-reject-modal.component.ts
function ApproveRejectModalComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p")(2, "strong");
    \u0275\u0275text(3, "Entity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p")(7, "strong");
    \u0275\u0275text(8, "Identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p")(12, "strong");
    \u0275\u0275text(13, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.application.company);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.application.applicantName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.application.email);
  }
}
function ApproveRejectModalComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "label", 14);
    \u0275\u0275text(2, "Reasoning Archive ");
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "textarea", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ApproveRejectModalComponent_div_0_div_9_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.rejectionReason, $event) || (ctx_r1.rejectionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(6, "        ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rejectionReason);
  }
}
function ApproveRejectModalComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 19);
    \u0275\u0275element(3, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Proceeding with authorization will initialize Member and User accounts. The applicant will gain immediate access to the authenticated portal nodes.");
    \u0275\u0275elementEnd()();
  }
}
function ApproveRejectModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ApproveRejectModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ApproveRejectModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function ApproveRejectModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275template(8, ApproveRejectModalComponent_div_0_div_8_Template, 16, 3, "div", 6)(9, ApproveRejectModalComponent_div_0_div_9_Template, 7, 1, "div", 7)(10, ApproveRejectModalComponent_div_0_div_10_Template, 6, 0, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
    \u0275\u0275listener("click", function ApproveRejectModalComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(13, "Discard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function ApproveRejectModalComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.mode === "APPROVE" ? "Authorization Decision" : "Access Suspension");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.application);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mode === "REJECT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mode === "APPROVE");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("btn-approve", ctx_r1.mode === "APPROVE")("btn-reject", ctx_r1.mode === "REJECT");
    \u0275\u0275property("disabled", ctx_r1.mode === "REJECT" && !ctx_r1.rejectionReason);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.mode === "APPROVE" ? "Approve Member" : "Suspend Application", " ");
  }
}
var ApproveRejectModalComponent = class _ApproveRejectModalComponent {
  constructor() {
    this.show = false;
    this.mode = "APPROVE";
    this.application = null;
    this.close = new EventEmitter();
    this.confirm = new EventEmitter();
    this.rejectionReason = "";
  }
  onClose() {
    this.close.emit();
    this.rejectionReason = "";
  }
  onConfirm() {
    if (this.mode === "REJECT" && !this.rejectionReason.trim()) {
      return;
    }
    this.confirm.emit({
      id: this.application?.id,
      reason: this.mode === "REJECT" ? this.rejectionReason : void 0
    });
    this.onClose();
  }
  static {
    this.\u0275fac = function ApproveRejectModalComponent_Factory(t) {
      return new (t || _ApproveRejectModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApproveRejectModalComponent, selectors: [["app-approve-reject-modal"]], inputs: { show: "show", mode: "mode", application: "application" }, outputs: { close: "close", confirm: "confirm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], ["title", "Dismiss Panel", 1, "btn-close", 3, "click"], [1, "modal-body", "animate-reveal"], ["class", "summary-card", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], ["class", "alert-info", 4, "ngIf"], [1, "modal-footer"], [1, "btn-pill", "btn-secondary", 3, "click"], [1, "btn-pill", 3, "click", "disabled"], [1, "summary-card"], [1, "space-y-4"], [1, "input-label"], [1, "text-rose-500"], ["rows", "4", "placeholder", "Document the specific narrative for this rejection decision...", "required", "", 1, "premium-textarea", 3, "ngModelChange", "ngModel"], [1, "alert-info"], [1, "pt-1"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "3", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"]], template: function ApproveRejectModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ApproveRejectModalComponent_div_0_Template, 16, 10, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  --modal-primary: #6366f1;\n  --modal-success: #10b981;\n  --modal-danger: #f43f5e;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.4);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  animation: _ngcontent-%COMP%_overlayFade 0.3s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_overlayFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 32px;\n  width: 100%;\n  max-width: 500px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n  animation: _ngcontent-%COMP%_modalReveal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_modalReveal {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n  color: #64748b;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 20px;\n  padding: 20px;\n  border: 1px solid #f1f5f9;\n  margin-bottom: 24px;\n}\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #64748b;\n  margin-bottom: 8px;\n}\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 800;\n  text-transform: uppercase;\n  font-size: 0.65rem;\n  letter-spacing: 0.05em;\n  display: inline-block;\n  width: 80px;\n}\n.input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.premium-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  background: #fff;\n  border: 2px solid #f1f5f9;\n  border-radius: 16px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1e293b;\n  transition: all 0.2s;\n  min-height: 120px;\n  resize: none;\n}\n.premium-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--modal-danger);\n  box-shadow: 0 0 0 4px rgba(244, 63, 94, 0.1);\n}\n.alert-info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: 1px solid #dbeafe;\n  border-radius: 16px;\n  padding: 16px;\n  display: flex;\n  gap: 12px;\n}\n.alert-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #1e40af;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 24px 32px;\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.btn-pill[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  color: #64748b;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #1e293b;\n}\n.btn-approve[_ngcontent-%COMP%] {\n  background: var(--modal-success);\n  color: white;\n  box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);\n}\n.btn-approve[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n}\n.btn-reject[_ngcontent-%COMP%] {\n  background: var(--modal-danger);\n  color: white;\n  box-shadow: 0 4px 6px rgba(244, 63, 94, 0.2);\n}\n.btn-reject[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=approve-reject-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApproveRejectModalComponent, { className: "ApproveRejectModalComponent", filePath: "src\\app\\components\\modals\\approve-reject-modal\\approve-reject-modal.component.ts", lineNumber: 12 });
})();

// src/app/pages/admin-dashboard/admin-dashboard.component.ts
function AdminDashboardComponent_img_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 52);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.name);
  }
}
function AdminDashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1, "\u{1F464}");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.unreadCount, " ");
  }
}
function AdminDashboardComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "div", 56);
    \u0275\u0275elementStart(2, "p", 57);
    \u0275\u0275text(3, "Gathering Data...");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_91_app_member_management_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-member-management", 63);
    \u0275\u0275listener("openDetail", function AdminDashboardComponent_div_91_app_member_management_1_Template_app_member_management_openDetail_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openMemberDetail($event));
    })("openApprove", function AdminDashboardComponent_div_91_app_member_management_1_Template_app_member_management_openApprove_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openApproveMember($event));
    })("openReject", function AdminDashboardComponent_div_91_app_member_management_1_Template_app_member_management_openReject_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openRejectMember($event));
    });
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_91_app_event_management_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-event-management", 64);
    \u0275\u0275listener("openDetail", function AdminDashboardComponent_div_91_app_event_management_2_Template_app_event_management_openDetail_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEventDetail($event));
    })("openEdit", function AdminDashboardComponent_div_91_app_event_management_2_Template_app_event_management_openEdit_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onEditEvent($event));
    })("openCreate", function AdminDashboardComponent_div_91_app_event_management_2_Template_app_event_management_openCreate_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCreateEvent());
    });
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_91_app_job_management_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-job-management", 65);
    \u0275\u0275listener("openDetail", function AdminDashboardComponent_div_91_app_job_management_3_Template_app_job_management_openDetail_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openJobDetail($event));
    })("openEdit", function AdminDashboardComponent_div_91_app_job_management_3_Template_app_job_management_openEdit_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openJobPostModal($event));
    });
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_div_91_app_membership_plan_management_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-membership-plan-management");
  }
}
function AdminDashboardComponent_div_91_app_plan_feature_management_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-plan-feature-management");
  }
}
function AdminDashboardComponent_div_91_div_6_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275element(1, "img", 79);
    \u0275\u0275elementStart(2, "div", 80)(3, "button", 81);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_91_div_6_div_10_div_1_Template_button_click_3_listener() {
      const img_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.deleteSliderImage(img_r7.id));
    });
    \u0275\u0275text(4, " \u{1F5D1}\uFE0F ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const img_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r7.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_91_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275template(1, AdminDashboardComponent_div_91_div_6_div_10_div_1_Template, 5, 1, "div", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.sliderImagesFromServer);
  }
}
function AdminDashboardComponent_div_91_div_6_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "span", 83);
    \u0275\u0275text(2, "No image uploaded yet");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_91_div_6_div_17_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 86);
  }
  if (rf & 2) {
    const preview_r8 = ctx.$implicit;
    \u0275\u0275property("src", preview_r8, \u0275\u0275sanitizeUrl);
  }
}
function AdminDashboardComponent_div_91_div_6_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, AdminDashboardComponent_div_91_div_6_div_17_img_1_Template, 1, 1, "img", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.sliderImagePreviewUrls);
  }
}
function AdminDashboardComponent_div_91_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 67)(2, "h3", 68);
    \u0275\u0275text(3, "Home Page Slider Images");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 69);
    \u0275\u0275text(5, " Upload multiple images together. The home page slider will use this backend image array. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 70)(7, "div")(8, "p", 71);
    \u0275\u0275text(9, "Current Images");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, AdminDashboardComponent_div_91_div_6_div_10_Template, 2, 1, "div", 72)(11, AdminDashboardComponent_div_91_div_6_ng_template_11_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "p", 71);
    \u0275\u0275text(15, "Upload New Images");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 73);
    \u0275\u0275listener("change", function AdminDashboardComponent_div_91_div_6_Template_input_change_16_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSliderImageSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AdminDashboardComponent_div_91_div_6_div_17_Template, 2, 1, "div", 74);
    \u0275\u0275elementStart(18, "button", 75);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_91_div_6_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveHomeSliderImages());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const noCurrentSliderImage_r9 = \u0275\u0275reference(12);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.sliderImagesFromServer.length > 0)("ngIfElse", noCurrentSliderImage_r9);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.sliderImagePreviewUrls.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isUpdatingSliderImage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isUpdatingSliderImage ? "Updating..." : "Update Slider Images", " ");
  }
}
function AdminDashboardComponent_div_91_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88);
    \u0275\u0275text(2, " \u{1F3DB}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 89);
    \u0275\u0275text(4, "Portal Administration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 90);
    \u0275\u0275text(6, " Welcome to your command center. Select a module from the top navigation to manage the ISA portal ecosystem. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 91)(8, "button", 92);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_91_div_7_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onSelectView("MEMBER_MANAGEMENT"));
    });
    \u0275\u0275text(9, "Review Applications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 93);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_91_div_7_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCreateEvent());
    });
    \u0275\u0275text(11, "+ Create Event");
    \u0275\u0275elementEnd()()();
  }
}
function AdminDashboardComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminDashboardComponent_div_91_app_member_management_1_Template, 1, 0, "app-member-management", 58)(2, AdminDashboardComponent_div_91_app_event_management_2_Template, 1, 0, "app-event-management", 59)(3, AdminDashboardComponent_div_91_app_job_management_3_Template, 1, 0, "app-job-management", 60)(4, AdminDashboardComponent_div_91_app_membership_plan_management_4_Template, 1, 0, "app-membership-plan-management", 43)(5, AdminDashboardComponent_div_91_app_plan_feature_management_5_Template, 1, 0, "app-plan-feature-management", 43)(6, AdminDashboardComponent_div_91_div_6_Template, 20, 5, "div", 61)(7, AdminDashboardComponent_div_91_div_7_Template, 12, 0, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentView === "MEMBER_MANAGEMENT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentView === "EVENT_MANAGEMENT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentView === "POST_MANAGEMENT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentView === "PLAN_MANAGEMENT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentView === "FEATURE_MANAGEMENT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentView === "HOME_MEDIA_MANAGEMENT");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.currentView);
  }
}
function AdminDashboardComponent_div_92_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "div", 108);
    \u0275\u0275elementStart(2, "p", 109);
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_92_ng_container_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "span", 113);
    \u0275\u0275text(2, "\u{1F4EB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 114);
    \u0275\u0275text(4, "Inbox is clear");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_div_92_ng_container_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_92_ng_container_13_div_2_Template_div_click_0_listener() {
      const n_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onNotificationClick(n_r13));
    });
    \u0275\u0275elementStart(1, "div", 116)(2, "div", 117);
    \u0275\u0275element(3, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 118)(5, "div", 119)(6, "p", 120);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 121);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 122);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 123);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const n_r13 = ctx.$implicit;
    \u0275\u0275property("ngClass", n_r13.read ? "bg-white border-slate-100" : "bg-indigo-50/50 border-indigo-100 ring-1 ring-indigo-100");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(n_r13.read ? "w-2 h-2 rounded-full bg-slate-200" : "unread-dot");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(n_r13.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r13.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r13.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 7, n_r13.createdAt, "MMM d, h:mm a"));
  }
}
function AdminDashboardComponent_div_92_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminDashboardComponent_div_92_ng_container_13_div_1_Template, 5, 0, "div", 110)(2, AdminDashboardComponent_div_92_ng_container_13_div_2_Template, 15, 10, "div", 111);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.notifications.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
function AdminDashboardComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_92_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeNotifications());
    });
    \u0275\u0275elementStart(1, "div", 95);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_92_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 96)(3, "div")(4, "h3", 97);
    \u0275\u0275text(5, "System Updates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 98);
    \u0275\u0275text(7, "Monitoring platform activity in real-time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 99);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_92_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeNotifications());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 100);
    \u0275\u0275element(10, "path", 101);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 102);
    \u0275\u0275template(12, AdminDashboardComponent_div_92_div_12_Template, 4, 0, "div", 103)(13, AdminDashboardComponent_div_92_ng_container_13_Template, 3, 2, "ng-container", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 104)(15, "button", 105);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_92_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markAllNotificationsRead());
    });
    \u0275\u0275text(16, "Mark all read");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 106);
    \u0275\u0275listener("click", function AdminDashboardComponent_div_92_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearAllNotifications());
    });
    \u0275\u0275text(18, "Clear all");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r0.isLoadingNotifications);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoadingNotifications);
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor(apiService, authService, confirmService, toastr) {
    this.apiService = apiService;
    this.authService = authService;
    this.confirmService = confirmService;
    this.toastr = toastr;
    this.navigate = new EventEmitter();
    this.currentView = null;
    this.currentUser = null;
    this.pendingCount = 0;
    this.totalMembers = 0;
    this.activeEvents = 0;
    this.totalPosts = 0;
    this.members = [];
    this.events = [];
    this.posts = [];
    this.isLoading = false;
    this.recentActivity = [];
    this.showNotifications = false;
    this.notifications = [];
    this.unreadCount = 0;
    this.isLoadingNotifications = false;
    this.notificationsError = "";
    this.showDetailModal = false;
    this.showApproveModal = false;
    this.showRejectModal = false;
    this.selectedApplication = null;
    this.showEventDetailModal = false;
    this.selectedEvent = null;
    this.showEventModal = false;
    this.selectedEventForEdit = null;
    this.showJobDetailModal = false;
    this.showJobPostModal = false;
    this.selectedJob = null;
    this.sliderImageFiles = [];
    this.sliderImagePreviewUrls = [];
    this.sliderImagesFromServer = [];
    this.isUpdatingSliderImage = false;
    this.saveEvent = false;
  }
  ngOnInit() {
    this.apiService.totalMembersSubject.subscribe((count) => {
      this.totalMembers = count;
    });
    this.apiService.pendingCountSubject.subscribe((count) => {
      this.pendingCount = count;
    });
    this.loadUserProfile();
    this.loadStats();
    this.loadHomeSliderSettings();
    this.refreshUnreadNotificationsCount();
  }
  refreshUnreadNotificationsCount() {
    this.apiService.getUnreadNotificationsCount().subscribe({
      next: (count) => {
        this.unreadCount = typeof count === "number" ? count : Number(count) || 0;
      },
      error: (error) => {
        console.error("Error loading unread notifications count (admin):", error);
        this.unreadCount = 0;
      }
    });
  }
  openNotifications() {
    this.showNotifications = true;
    this.loadNotifications();
  }
  closeNotifications() {
    this.showNotifications = false;
    this.notificationsError = "";
  }
  loadNotifications() {
    this.isLoadingNotifications = true;
    this.notificationsError = "";
    this.apiService.getMyNotifications().subscribe({
      next: (response) => {
        this.notifications = Array.isArray(response) ? response : [];
        this.isLoadingNotifications = false;
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error("Error loading notifications (admin):", error);
        this.notificationsError = "Failed to load notifications.";
        this.isLoadingNotifications = false;
      }
    });
  }
  markNotificationRead(n) {
    if (!n?.id)
      return;
    this.apiService.markNotificationRead(n.id).subscribe({
      next: () => {
        n.read = true;
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error("Error marking notification read (admin):", error);
      }
    });
  }
  markAllNotificationsRead() {
    this.apiService.markAllNotificationsRead().subscribe({
      next: () => {
        this.notifications.forEach((n) => n.read = true);
        this.refreshUnreadNotificationsCount();
      },
      error: (error) => {
        console.error("Error marking all notifications read (admin):", error);
      }
    });
  }
  clearAllNotifications() {
    this.notificationsError = "";
    this.isLoadingNotifications = true;
    this.apiService.clearAllNotifications().subscribe({
      next: () => {
        this.notifications = [];
        this.unreadCount = 0;
        this.isLoadingNotifications = false;
      },
      error: (error) => {
        console.error("Error clearing notifications (admin):", error);
        this.notificationsError = "Failed to clear notifications.";
        this.isLoadingNotifications = false;
      }
    });
  }
  onNotificationClick(n) {
    if (!n)
      return;
    if (!n.read) {
      this.markNotificationRead(n);
    }
    this.navigateFromNotificationLink(n.link);
  }
  navigateFromNotificationLink(link) {
    if (!link || typeof link !== "string") {
      return;
    }
    if (link.startsWith("http://") || link.startsWith("https://")) {
      window.open(link, "_blank");
      return;
    }
    const [path, queryString] = link.split("?");
    if (path && !path.startsWith("/admin-dashboard")) {
      return;
    }
    const params = new URLSearchParams(queryString || "");
    const viewParam = params.get("view");
    if (viewParam) {
      const supported = ["MEMBER_MANAGEMENT", "EVENT_MANAGEMENT", "POST_MANAGEMENT", "PLAN_MANAGEMENT", "FEATURE_MANAGEMENT", "HOME_MEDIA_MANAGEMENT", null];
      if (supported.includes(viewParam)) {
        this.onSelectView(viewParam);
        this.closeNotifications();
        return;
      }
    }
    this.closeNotifications();
  }
  formatStartTime(time) {
    if (!time)
      return null;
    const [hours, minutes] = time.split(":").map(Number);
    const date = /* @__PURE__ */ new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  }
  loadUserProfile() {
    this.currentUser = this.authService.getCurrentUser();
  }
  loadStats() {
    this.apiService.getMembershipApplications().subscribe({
      next: (response) => {
        const apps = Array.isArray(response) ? response : [];
        this.pendingCount = apps.filter((app) => app.status === "PENDING").length;
        this.updateStats();
      }
    });
    this.apiService.getApprovedMembers().subscribe({
      next: (response) => {
        this.totalMembers = Array.isArray(response) ? response.length : 0;
        this.updateStats();
      }
    });
    this.apiService.getEvents().subscribe({
      next: (response) => {
        const events = Array.isArray(response) ? response : [];
        this.activeEvents = events.filter((e) => e.status === "PUBLISHED").length;
        this.updateStats();
      }
    });
    this.apiService.getJobPostings().subscribe({
      next: (response) => {
        const posts = Array.isArray(response) ? response : [];
        this.totalPosts = posts.length;
      }
    });
  }
  updateStats() {
    if (this.currentView === "MEMBER_MANAGEMENT") {
      this.apiService.getApprovedMembers().subscribe({
        next: (response) => {
          this.totalMembers = Array.isArray(response) ? response.length : 0;
        }
      });
    } else if (this.currentView === "EVENT_MANAGEMENT") {
      this.apiService.getEvents().subscribe({
        next: (response) => {
          const events = Array.isArray(response) ? response : [];
          this.activeEvents = events.filter((e) => e.status === "PUBLISHED").length;
        }
      });
    } else if (this.currentView === "POST_MANAGEMENT") {
      this.apiService.getJobPostings().subscribe({
        next: (response) => {
          const posts = Array.isArray(response) ? response : [];
          this.totalPosts = posts.length;
        }
      });
    }
  }
  onSelectView(view) {
    this.currentView = view;
    this.isLoading = true;
    this.updateStats();
    if (view === "MEMBER_MANAGEMENT") {
      this.isLoading = false;
    } else if (view === "EVENT_MANAGEMENT") {
      this.loadEvents();
    } else if (view === "POST_MANAGEMENT") {
      this.loadPosts();
    } else if (view === "PLAN_MANAGEMENT") {
      this.isLoading = false;
    } else if (view === "FEATURE_MANAGEMENT") {
      this.isLoading = false;
    } else if (view === "HOME_MEDIA_MANAGEMENT") {
      this.loadHomeSliderSettings();
      this.isLoading = false;
    }
  }
  resolveImageUrl(rawImage) {
    if (!rawImage) {
      return "";
    }
    const image = String(rawImage).trim();
    if (!image) {
      return "";
    }
    if (/^https?:\/\//i.test(image)) {
      return image;
    }
    if (image.startsWith("//")) {
      return `${window.location.protocol}${image}`;
    }
    const normalizedPath = image.startsWith("/") ? image : `/${image}`;
    return `${this.apiService.getBackendBaseUrl()}${normalizedPath}`;
  }
  loadHomeSliderSettings() {
    this.apiService.getHomeSliderConfig().subscribe({
      next: (response) => {
        const images = Array.isArray(response?.images) ? response.images : [];
        this.sliderImagesFromServer = images.map((img) => ({
          id: Number(img?.id),
          imageUrl: this.resolveImageUrl(img?.imageUrl)
        })).filter((img) => Number.isFinite(img.id) && !!img.imageUrl);
      },
      error: () => {
        this.sliderImagesFromServer = [];
      }
    });
  }
  onSliderImageSelect(event) {
    const input = event.target;
    const files = input.files ? Array.from(input.files) : [];
    this.sliderImageFiles = files;
    if (!files.length) {
      this.sliderImagePreviewUrls = [];
      return;
    }
    const readers = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.readAsDataURL(file);
      });
    });
    Promise.all(readers).then((previews) => {
      this.sliderImagePreviewUrls = previews;
    });
  }
  saveHomeSliderImages() {
    if (!this.sliderImageFiles.length) {
      this.toastr.warning("Please select at least one image.", "No file selected");
      return;
    }
    const formData = new FormData();
    this.sliderImageFiles.forEach((file) => {
      formData.append("images", file, file.name);
    });
    this.isUpdatingSliderImage = true;
    this.apiService.updateHomeSliderImages(formData).subscribe({
      next: (response) => {
        const images = Array.isArray(response?.images) ? response.images : [];
        this.toastr.success("Home slider images updated successfully.", "Updated");
        this.sliderImagesFromServer = images.map((img) => ({
          id: Number(img?.id),
          imageUrl: this.resolveImageUrl(img?.imageUrl)
        })).filter((img) => Number.isFinite(img.id) && !!img.imageUrl);
        this.sliderImagePreviewUrls = [];
        this.sliderImageFiles = [];
        this.isUpdatingSliderImage = false;
      },
      error: (error) => {
        const message = error?.error?.message || "Failed to update home slider images.";
        this.toastr.error(message, "Error");
        this.isUpdatingSliderImage = false;
      }
    });
  }
  deleteSliderImage(imageId) {
    if (!imageId) {
      return;
    }
    this.apiService.deleteHomeSliderImage(imageId).subscribe({
      next: (response) => {
        const images = Array.isArray(response?.images) ? response.images : [];
        this.sliderImagesFromServer = images.map((img) => ({
          id: Number(img?.id),
          imageUrl: this.resolveImageUrl(img?.imageUrl)
        })).filter((img) => Number.isFinite(img.id) && !!img.imageUrl);
        this.toastr.success("Slider image deleted successfully.", "Deleted");
      },
      error: (error) => {
        const message = error?.error?.message || "Failed to delete slider image.";
        this.toastr.error(message, "Error");
      }
    });
  }
  loadEvents() {
    this.apiService.getEvents().subscribe({
      next: (response) => {
        this.events = Array.isArray(response) ? response : [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading events:", error);
        this.events = [];
        this.isLoading = false;
      }
    });
  }
  loadPosts() {
    this.isLoading = false;
  }
  // Global Modal Handlers
  openMemberDetail(app) {
    this.selectedApplication = app;
    this.showDetailModal = true;
  }
  openApproveMember(app) {
    this.selectedApplication = app;
    this.showApproveModal = true;
  }
  openRejectMember(app) {
    this.selectedApplication = app;
    this.showRejectModal = true;
  }
  closeGlobalModals() {
    this.showDetailModal = false;
    this.showApproveModal = false;
    this.showRejectModal = false;
    this.showEventDetailModal = false;
    this.showJobDetailModal = false;
    this.showJobPostModal = false;
    this.showEventModal = false;
    this.selectedApplication = null;
    this.selectedEvent = null;
    this.selectedJob = null;
    this.selectedEventForEdit = null;
  }
  openEventDetail(event) {
    this.selectedEvent = event;
    this.showEventDetailModal = true;
  }
  openJobDetail(job) {
    this.selectedJob = job;
    this.showJobDetailModal = true;
  }
  openJobPostModal(job) {
    this.selectedJob = job || null;
    this.showJobPostModal = true;
  }
  onCreateEvent() {
    this.selectedEventForEdit = null;
    this.showEventModal = true;
    this.saveEvent = false;
  }
  onEditEvent(event) {
    this.selectedEventForEdit = event;
    this.showEventModal = true;
    this.saveEvent = true;
  }
  closeEventModal() {
    this.showEventModal = false;
    this.selectedEventForEdit = null;
  }
  onEventSaved() {
    this.loadEvents();
    this.closeGlobalModals();
  }
  onDeleteEvent(event) {
    const eventName = event.name || event.title || "this event";
    this.confirmService.confirm({
      title: "Delete Event",
      message: `Are you sure you want to delete "${eventName}"?`,
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      isDestructive: true
    }).subscribe((confirmed) => {
      if (confirmed) {
        console.log("Delete event:", event.id);
        this.loadEvents();
      }
    });
  }
  onApproveConfirm(data) {
    if (!data?.id) {
      this.toastr.error("Invalid application selected.", "Error");
      return;
    }
    this.isLoading = true;
    this.apiService.approveApplication(data.id).subscribe({
      next: () => {
        this.toastr.success("Application approved successfully.", "Approved");
        this.closeGlobalModals();
        this.loadStats();
      },
      error: (error) => {
        this.isLoading = false;
        const message = error?.error?.message || "Error approving application.";
        this.toastr.error(message, "Error");
      }
    });
  }
  onRejectConfirm(data) {
    if (!data?.id) {
      this.toastr.error("Invalid application selected.", "Error");
      return;
    }
    if (!data.reason || !data.reason.trim()) {
      this.toastr.error("Please provide a rejection reason.", "Error");
      return;
    }
    this.isLoading = true;
    this.apiService.rejectApplication(data.id, data.reason).subscribe({
      next: () => {
        this.toastr.success("Application rejected successfully.", "Rejected");
        this.closeGlobalModals();
        this.loadStats();
      },
      error: (error) => {
        this.isLoading = false;
        const message = error?.error?.message || "Error rejecting application.";
        this.toastr.error(message, "Error");
      }
    });
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(t) {
      return new (t || _AdminDashboardComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ConfirmService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], outputs: { navigate: "navigate" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 100, vars: 41, consts: [["noCurrentSliderImage", ""], [1, "admin-layout"], [1, "max-w-8xl", "mx-auto", "px-6", "py-10"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-8", "items-start"], [1, "lg:col-span-4", "space-y-6"], [1, "glass-card", "rounded-3xl", "p-8", "reveal-up"], [1, "flex", "items-start", "justify-between"], [1, "flex", "items-center", "gap-5"], [1, "relative"], [1, "h-20", "w-20", "rounded-2xl", "profile-avatar", "overflow-hidden"], [1, "bg-white", "w-full", "h-full", "p-0.5", "rounded-[14px]", "overflow-hidden"], ["class", "w-full h-full object-cover rounded-[13px]", 3, "src", "alt", 4, "ngIf"], ["class", "w-full h-full flex items-center justify-center bg-slate-50 text-3xl", 4, "ngIf"], [1, "absolute", "-bottom-1", "-right-1", "h-5", "w-5", "bg-emerald-500", "border-4", "border-white", "rounded-full"], [1, "admin-badge", "text-[10px]", "px-2", "py-0.5", "rounded-lg", "mb-2", "inline-block"], [1, "text-xl", "font-black", "text-slate-900", "tracking-tight"], [1, "text-sm", "font-medium", "text-slate-400"], [1, "relative", "p-3", "rounded-2xl", "bg-slate-50", "text-slate-400", "hover:text-indigo-600", "hover:bg-indigo-50", "transition-all", "border", "border-slate-100", "group", 3, "click"], ["width", "24", "height", "24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "group-hover:rotate-12", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"], ["class", "absolute top-2 right-2 h-4 min-w-[16px] px-1 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white", 4, "ngIf"], [1, "glass-card", "rounded-3xl", "p-8", "reveal-up", 2, "animation-delay", "0.1s"], [1, "text-xs", "font-black", "text-slate-400", "uppercase", "tracking-widest", "mb-6"], [1, "grid", "grid-cols-2", "gap-4"], [1, "p-4", "bg-blue-50/50", "rounded-2xl", "border", "border-blue-100/50", "stat-card", "text-blue-600"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-wider", "mb-1", "opacity-70"], [1, "text-2xl", "font-black"], [1, "p-4", "bg-indigo-50/50", "rounded-2xl", "border", "border-indigo-100/50", "stat-card", "text-indigo-600"], [1, "p-4", "bg-emerald-50/50", "rounded-2xl", "border", "border-emerald-100/50", "stat-card", "text-emerald-600"], [1, "p-4", "bg-rose-50/50", "rounded-2xl", "border", "border-rose-100/50", "stat-card", "text-rose-600"], [1, "p-6", "bg-slate-900", "rounded-3xl", "text-white", "shadow-2xl", "reveal-up", 2, "animation-delay", "0.2s"], [1, "flex", "items-center", "gap-3", "mb-3"], [1, "h-8", "w-8", "rounded-lg", "bg-white/10", "flex", "items-center", "justify-center"], [1, "text-sm", "font-bold"], [1, "text-xs", "text-slate-400", "leading-relaxed"], [1, "lg:col-span-8", "space-y-8"], [1, "glass-card", "rounded-[32px]", "p-2", "reveal-up", 2, "animation-delay", "0.3s"], [1, "grid", "grid-cols-2", "md:grid-cols-6", "gap-2"], [1, "nav-item", "rounded-3xl", "p-4", "transition-all", 3, "click"], [1, "icon-box"], [1, "text-[10px]", "font-black", "uppercase", "text-slate-500", "tracking-tight"], [1, "glass-card", "rounded-[40px]", "p-8", "min-h-[500px]", "reveal-up", 2, "animation-delay", "0.4s"], ["class", "flex flex-col items-center justify-center py-24 gap-4", 4, "ngIf"], [4, "ngIf"], ["class", "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in", 3, "click", 4, "ngIf"], [3, "close", "saved", "isModal", "show", "editEvent", "saveEvent"], [3, "close", "approve", "reject", "show", "application", "showActions"], ["mode", "APPROVE", 3, "close", "confirm", "show", "application"], ["mode", "REJECT", 3, "close", "confirm", "show", "application"], [3, "close", "show", "event"], [3, "close", "show", "jobPosting"], [3, "close", "saved", "show", "editJob"], [1, "w-full", "h-full", "object-cover", "rounded-[13px]", 3, "src", "alt"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", "bg-slate-50", "text-3xl"], [1, "absolute", "top-2", "right-2", "h-4", "min-w-[16px]", "px-1", "bg-rose-500", "text-white", "text-[10px]", "font-bold", "rounded-full", "flex", "items-center", "justify-center", "border-2", "border-white"], [1, "flex", "flex-col", "items-center", "justify-center", "py-24", "gap-4"], [1, "h-12", "w-12", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "text-sm", "font-bold", "text-slate-400", "uppercase", "tracking-widest"], [3, "openDetail", "openApprove", "openReject", 4, "ngIf"], [3, "openDetail", "openEdit", "openCreate", 4, "ngIf"], [3, "openDetail", "openEdit", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], ["class", "flex flex-col items-center justify-center py-20 text-center", 4, "ngIf"], [3, "openDetail", "openApprove", "openReject"], [3, "openDetail", "openEdit", "openCreate"], [3, "openDetail", "openEdit"], [1, "space-y-6"], [1, "border", "border-slate-200", "rounded-3xl", "p-6", "bg-white"], [1, "text-lg", "font-black", "text-slate-900", "mb-2"], [1, "text-sm", "text-slate-500", "mb-5"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "text-slate-400", "mb-2"], ["class", "grid grid-cols-2 gap-3 max-h-64 overflow-auto pr-1", 4, "ngIf", "ngIfElse"], ["type", "file", "accept", "image/*", "multiple", "", 1, "block", "w-full", "text-sm", "text-slate-600", "file:mr-4", "file:py-2", "file:px-4", "file:rounded-xl", "file:border-0", "file:bg-indigo-50", "file:text-indigo-700", "file:font-semibold", "hover:file:bg-indigo-100", 3, "change"], ["class", "mt-4 grid grid-cols-2 gap-3 max-h-52 overflow-auto pr-1", 4, "ngIf"], [1, "mt-5", "px-5", "py-3", "rounded-2xl", "bg-indigo-600", "text-white", "font-bold", "hover:bg-indigo-700", "disabled:opacity-60", "disabled:cursor-not-allowed", 3, "click", "disabled"], [1, "grid", "grid-cols-2", "gap-3", "max-h-64", "overflow-auto", "pr-1"], ["class", "slider-image-card", 4, "ngFor", "ngForOf"], [1, "slider-image-card"], ["alt", "Current home slider image", 1, "h-24", "w-full", "object-cover", "rounded-xl", "border", "border-slate-200", 3, "src"], [1, "slider-image-overlay"], ["type", "button", "title", "Delete image", "aria-label", "Delete image", 1, "slider-delete-btn", 3, "click"], [1, "h-52", "rounded-2xl", "border", "border-slate-200", "bg-slate-50", "overflow-hidden", "flex", "items-center", "justify-center"], [1, "text-sm", "text-slate-400"], [1, "mt-4", "grid", "grid-cols-2", "gap-3", "max-h-52", "overflow-auto", "pr-1"], ["class", "h-24 w-full object-cover rounded-xl border border-slate-200", "alt", "New slider preview", 3, "src", 4, "ngFor", "ngForOf"], ["alt", "New slider preview", 1, "h-24", "w-full", "object-cover", "rounded-xl", "border", "border-slate-200", 3, "src"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20", "text-center"], [1, "h-32", "w-32", "bg-indigo-50", "rounded-full", "flex", "items-center", "justify-center", "text-5xl", "mb-8", "animate-pulse"], [1, "text-3xl", "font-black", "text-slate-900", "mb-4", "tracking-tighter"], [1, "text-slate-500", "max-w-sm", "mx-auto", "font-medium", "leading-relaxed", "mb-10"], [1, "flex", "gap-3"], [1, "px-6", "py-3", "bg-white", "border", "border-slate-200", "rounded-2xl", "text-sm", "font-bold", "hover:bg-slate-50", "transition-colors", 3, "click"], [1, "px-6", "py-3", "btn-premium", "rounded-2xl", "text-sm", "font-bold", 3, "click"], [1, "fixed", "inset-0", "z-[100]", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/40", "backdrop-blur-sm", "animate-fade-in", 3, "click"], [1, "bg-white", "rounded-3xl", "shadow-2xl", "w-full", "max-w-xl", "max-h-[85vh]", "overflow-hidden", "flex", "flex-col", "min-h-0", "reveal-up", 3, "click"], [1, "p-8", "border-b", "border-slate-100", "flex-shrink-0", "flex", "items-center", "justify-between", "bg-gradient-to-r", "from-slate-50", "to-white"], [1, "text-2xl", "font-black", "text-slate-900", "tracking-tighter"], [1, "text-sm", "font-medium", "text-slate-400", "mt-1"], ["type", "button", 1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-2xl", "bg-white", "border", "border-slate-200", "text-slate-400", "hover:text-slate-900", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "flex-1", "min-h-0", "overflow-y-auto", "overflow-x-hidden", "p-8", "space-y-4", "custom-scrollbar"], ["class", "flex flex-col items-center justify-center py-20", 4, "ngIf"], [1, "p-8", "border-t", "border-slate-100", "bg-slate-50", "flex-shrink-0", "flex", "flex-wrap", "items-center", "justify-between", "gap-4"], ["type", "button", 1, "text-xs", "font-black", "text-indigo-600", "uppercase", "tracking-widest", "hover:underline", "px-2", "py-2", 3, "click"], ["type", "button", 1, "text-xs", "font-black", "text-red-500", "uppercase", "tracking-widest", "hover:underline", "px-2", "py-2", 3, "click"], [1, "flex", "flex-col", "items-center", "justify-center", "py-20"], [1, "w-10", "h-10", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "text-xs", "font-bold", "text-slate-400", "mt-4", "uppercase", "tracking-widest"], ["class", "text-center py-16 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-100", 4, "ngIf"], ["class", "p-5 rounded-3xl border transition-all cursor-pointer notif-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "text-center", "py-16", "bg-slate-50", "rounded-3xl", "border-2", "border-dashed", "border-slate-100"], [1, "text-5xl", "block", "mb-4", "opacity-40", "grayscale"], [1, "text-slate-500", "font-bold"], [1, "p-5", "rounded-3xl", "border", "transition-all", "cursor-pointer", "notif-item", 3, "click", "ngClass"], [1, "flex", "gap-4"], [1, "mt-1", "flex-shrink-0"], [1, "flex-1", "min-w-0"], [1, "flex", "items-center", "gap-2", "mb-1", "flex-wrap"], [1, "text-sm", "font-black", "text-slate-900"], [1, "text-[9px]", "font-black", "uppercase", "px-1.5", "py-0.5", "bg-white", "border", "border-slate-100", "rounded", "text-slate-400"], [1, "text-sm", "text-slate-500", "font-medium", "leading-snug"], [1, "text-[10px]", "text-slate-400", "mt-3", "font-bold", "uppercase", "tracking-tight"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "aside", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9)(9, "div", 10);
        \u0275\u0275template(10, AdminDashboardComponent_img_10_Template, 1, 2, "img", 11)(11, AdminDashboardComponent_div_11_Template, 2, 0, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(12, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div")(14, "span", 14);
        \u0275\u0275text(15, "System Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h2", 15);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 16);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "button", 17);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_20_listener() {
          return ctx.openNotifications();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 18);
        \u0275\u0275element(22, "path", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, AdminDashboardComponent_span_23_Template, 2, 1, "span", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(24, "div", 21)(25, "h3", 22);
        \u0275\u0275text(26, "Real-time Statistics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 23)(28, "div", 24)(29, "p", 25);
        \u0275\u0275text(30, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 26);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 27)(34, "p", 25);
        \u0275\u0275text(35, "Members");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p", 26);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 28)(39, "p", 25);
        \u0275\u0275text(40, "Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 26);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 29)(44, "p", 25);
        \u0275\u0275text(45, "Postings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p", 26);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "div", 30)(49, "div", 31)(50, "span", 32);
        \u0275\u0275text(51, "\u{1F4A1}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span", 33);
        \u0275\u0275text(53, "Admin Tip");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "p", 34);
        \u0275\u0275text(55, " Review membership applications daily to maintain a healthy community growth and ensure data accuracy. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "main", 35)(57, "header", 36)(58, "div", 37)(59, "button", 38);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_59_listener() {
          return ctx.onSelectView("MEMBER_MANAGEMENT");
        });
        \u0275\u0275elementStart(60, "div", 39);
        \u0275\u0275text(61, "\u{1F465}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p", 40);
        \u0275\u0275text(63, "Members");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "button", 38);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_64_listener() {
          return ctx.onSelectView("EVENT_MANAGEMENT");
        });
        \u0275\u0275elementStart(65, "div", 39);
        \u0275\u0275text(66, "\u{1F4C5}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "p", 40);
        \u0275\u0275text(68, "Events");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "button", 38);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_69_listener() {
          return ctx.onSelectView("POST_MANAGEMENT");
        });
        \u0275\u0275elementStart(70, "div", 39);
        \u0275\u0275text(71, "\u{1F4DD}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p", 40);
        \u0275\u0275text(73, "Posts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "button", 38);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_74_listener() {
          return ctx.onSelectView("PLAN_MANAGEMENT");
        });
        \u0275\u0275elementStart(75, "div", 39);
        \u0275\u0275text(76, "\u{1F4B3}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p", 40);
        \u0275\u0275text(78, "Plans");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "button", 38);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_79_listener() {
          return ctx.onSelectView("FEATURE_MANAGEMENT");
        });
        \u0275\u0275elementStart(80, "div", 39);
        \u0275\u0275text(81, "\u2699\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p", 40);
        \u0275\u0275text(83, "Features");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "button", 38);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_84_listener() {
          return ctx.onSelectView("HOME_MEDIA_MANAGEMENT");
        });
        \u0275\u0275elementStart(85, "div", 39);
        \u0275\u0275text(86, "\u{1F5BC}\uFE0F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "p", 40);
        \u0275\u0275text(88, "Home Slider");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(89, "section", 41);
        \u0275\u0275template(90, AdminDashboardComponent_div_90_Template, 4, 0, "div", 42)(91, AdminDashboardComponent_div_91_Template, 8, 7, "div", 43);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(92, AdminDashboardComponent_div_92_Template, 19, 2, "div", 44);
        \u0275\u0275elementStart(93, "app-event-create", 45);
        \u0275\u0275listener("close", function AdminDashboardComponent_Template_app_event_create_close_93_listener() {
          return ctx.closeGlobalModals();
        })("saved", function AdminDashboardComponent_Template_app_event_create_saved_93_listener() {
          return ctx.onEventSaved();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "app-application-detail-modal", 46);
        \u0275\u0275listener("close", function AdminDashboardComponent_Template_app_application_detail_modal_close_94_listener() {
          return ctx.closeGlobalModals();
        })("approve", function AdminDashboardComponent_Template_app_application_detail_modal_approve_94_listener($event) {
          return ctx.openApproveMember($event);
        })("reject", function AdminDashboardComponent_Template_app_application_detail_modal_reject_94_listener($event) {
          return ctx.openRejectMember($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "app-approve-reject-modal", 47);
        \u0275\u0275listener("close", function AdminDashboardComponent_Template_app_approve_reject_modal_close_95_listener() {
          return ctx.closeGlobalModals();
        })("confirm", function AdminDashboardComponent_Template_app_approve_reject_modal_confirm_95_listener($event) {
          return ctx.onApproveConfirm($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "app-approve-reject-modal", 48);
        \u0275\u0275listener("close", function AdminDashboardComponent_Template_app_approve_reject_modal_close_96_listener() {
          return ctx.closeGlobalModals();
        })("confirm", function AdminDashboardComponent_Template_app_approve_reject_modal_confirm_96_listener($event) {
          return ctx.onRejectConfirm($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "app-event-detail-modal", 49);
        \u0275\u0275listener("close", function AdminDashboardComponent_Template_app_event_detail_modal_close_97_listener() {
          return ctx.closeGlobalModals();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "app-job-detail-modal", 50);
        \u0275\u0275listener("close", function AdminDashboardComponent_Template_app_job_detail_modal_close_98_listener() {
          return ctx.closeGlobalModals();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "app-job-post-modal", 51);
        \u0275\u0275listener("close", function AdminDashboardComponent_Template_app_job_post_modal_close_99_listener() {
          return ctx.closeGlobalModals();
        })("saved", function AdminDashboardComponent_Template_app_job_post_modal_saved_99_listener() {
          return ctx.onEventSaved();
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.currentUser == null ? null : ctx.currentUser.image);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !(ctx.currentUser == null ? null : ctx.currentUser.image));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", (ctx.currentUser == null ? null : ctx.currentUser.name) || "Administrator", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.email);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.unreadCount > 0);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.pendingCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.totalMembers);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.activeEvents);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.totalPosts);
        \u0275\u0275advance(12);
        \u0275\u0275classProp("active", ctx.currentView === "MEMBER_MANAGEMENT");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentView === "EVENT_MANAGEMENT");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentView === "POST_MANAGEMENT");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentView === "PLAN_MANAGEMENT");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentView === "FEATURE_MANAGEMENT");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.currentView === "HOME_MEDIA_MANAGEMENT");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showNotifications);
        \u0275\u0275advance();
        \u0275\u0275property("isModal", true)("show", ctx.showEventModal)("editEvent", ctx.selectedEventForEdit)("saveEvent", ctx.saveEvent);
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.showDetailModal)("application", ctx.selectedApplication)("showActions", ctx.currentView === "MEMBER_MANAGEMENT");
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.showApproveModal)("application", ctx.selectedApplication);
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.showRejectModal)("application", ctx.selectedApplication);
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.showEventDetailModal)("event", ctx.selectedEvent);
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.showJobDetailModal)("jobPosting", ctx.selectedJob);
        \u0275\u0275advance();
        \u0275\u0275property("show", ctx.showJobPostModal)("editJob", ctx.selectedJob);
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      DatePipe,
      EventCreateComponent,
      EventManagementComponent,
      MemberManagementComponent,
      JobManagementComponent,
      MembershipPlanManagementComponent,
      PlanFeatureManagementComponent,
      ApplicationDetailModalComponent,
      EventDetailModalComponent,
      JobDetailModalComponent,
      JobPostModalComponent,
      ApproveRejectModalComponent
    ], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  --admin-primary: #6366f1;\n  --admin-secondary: #8b5cf6;\n  --admin-accent: #f43f5e;\n  --admin-success: #10b981;\n  --admin-surface: #ffffff;\n  --admin-bg: #f8fafc;\n  --admin-text-900: #0f172a;\n  --admin-text-600: #475569;\n  --admin-border: rgba(226, 232, 240, 0.8);\n}\n.admin-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: var(--admin-bg);\n  background-image:\n    radial-gradient(\n      at 0% 0%,\n      rgba(99, 102, 241, 0.05) 0px,\n      transparent 50%),\n    radial-gradient(\n      at 100% 0%,\n      rgba(139, 92, 246, 0.05) 0px,\n      transparent 50%);\n}\n.glass-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid var(--admin-border);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.glass-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n}\n.profile-avatar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--admin-primary),\n      var(--admin-secondary));\n  padding: 2px;\n}\n.admin-badge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  color: var(--admin-primary);\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.stat-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 64px;\n  height: 64px;\n  background: currentColor;\n  opacity: 0.05;\n  border-radius: 0 0 0 100%;\n}\n.nav-item[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid transparent;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: white;\n  border-color: var(--admin-primary);\n  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.1);\n}\n.nav-item.active[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--admin-primary),\n      var(--admin-secondary));\n  color: white;\n  transform: scale(1.1);\n}\n.icon-box[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin: 0 auto 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  background: #f1f5f9;\n  font-size: 1.5rem;\n  transition: all 0.3s ease;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .icon-box[_ngcontent-%COMP%] {\n  transform: translateY(-4px) scale(1.05);\n}\n.management-header[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  background: rgba(255, 255, 255, 0.9);\n  border-bottom: 1px solid var(--admin-border);\n}\n.reveal-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_revealUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n@keyframes _ngcontent-%COMP%_revealUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.notif-item[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: rgba(248, 250, 252, 0.8);\n}\n.unread-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 99px;\n  background-color: var(--admin-primary);\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);\n}\n.btn-premium[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--admin-primary),\n      var(--admin-secondary));\n  color: white;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);\n}\n.btn-premium[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);\n}\n.admin-layout[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.admin-layout[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.admin-layout[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #e2e8f0;\n  border-radius: 20px;\n  border: 2px solid transparent;\n}\n.admin-layout[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #cbd5e1;\n}\n.admin-layout[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #e2e8f0 transparent;\n}\n.slider-image-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0.75rem;\n  overflow: hidden;\n}\n.slider-image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(15, 23, 42, 0.35);\n  -webkit-backdrop-filter: blur(1.5px);\n  backdrop-filter: blur(1.5px);\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.slider-image-card[_ngcontent-%COMP%]:hover   .slider-image-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.slider-delete-btn[_ngcontent-%COMP%] {\n  border: 0;\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background: rgba(239, 68, 68, 0.95);\n  color: #fff;\n  box-shadow: 0 6px 16px rgba(239, 68, 68, 0.35);\n  transition: transform 0.15s ease;\n}\n.slider-delete-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n}\n.admin-layout[_ngcontent-%COMP%]   .reveal-up[_ngcontent-%COMP%] {\n  animation: none !important;\n  opacity: 1 !important;\n  transform: none !important;\n}\n.admin-layout[_ngcontent-%COMP%]   .glass-card[_ngcontent-%COMP%], .admin-layout[_ngcontent-%COMP%]   .management-header[_ngcontent-%COMP%], .admin-layout[_ngcontent-%COMP%]   .slider-image-overlay[_ngcontent-%COMP%] {\n  backdrop-filter: none;\n  -webkit-backdrop-filter: none;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\pages\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 53 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-72PAJ3QS.js.map
