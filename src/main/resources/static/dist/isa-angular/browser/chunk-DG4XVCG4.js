import {
  AuthService
} from "./chunk-ULHL74DO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RequiredValidator
} from "./chunk-PKI2UZZD.js";
import {
  ApiService,
  CommonModule,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DNDVYN6P.js";

// src/app/components/modals/job-detail-modal/job-detail-modal.component.ts
function JobDetailModalComponent_div_0_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Posted ", \u0275\u0275pipeBind2(2, 1, ctx_r1.jobPosting.postedDate, "mediumDate"), "");
  }
}
function JobDetailModalComponent_div_0_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "(REMOTE)");
    \u0275\u0275elementEnd();
  }
}
function JobDetailModalComponent_div_0_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.jobPosting.salaryCurrency || "INR", " ", \u0275\u0275pipeBind1(2, 2, ctx_r1.jobPosting.salaryMin), "");
  }
}
function JobDetailModalComponent_div_0_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " - ");
    \u0275\u0275elementEnd();
  }
}
function JobDetailModalComponent_div_0_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.jobPosting.salaryMax));
  }
}
function JobDetailModalComponent_div_0_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "COMPETITIVE");
    \u0275\u0275elementEnd();
  }
}
function JobDetailModalComponent_div_0_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "label");
    \u0275\u0275text(2, "Terminal Deadline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r1.jobPosting.closingDate, "longDate"));
  }
}
function JobDetailModalComponent_div_0_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 17);
    \u0275\u0275text(2, "Technical Deep-Dive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.jobPosting.fullDescription);
  }
}
function JobDetailModalComponent_div_0_div_56_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3);
  }
}
function JobDetailModalComponent_div_0_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 38);
    \u0275\u0275text(2, "Technical Core");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275template(4, JobDetailModalComponent_div_0_div_56_span_4_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.jobPosting.tags);
  }
}
function JobDetailModalComponent_div_0_div_57_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 44);
    \u0275\u0275element(1, "div", 45);
    \u0275\u0275elementStart(2, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r4);
  }
}
function JobDetailModalComponent_div_0_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 38);
    \u0275\u0275text(2, "Prerequisite Matrix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 42);
    \u0275\u0275template(4, JobDetailModalComponent_div_0_div_57_li_4_Template, 4, 1, "li", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.getRequirementsArray());
  }
}
function JobDetailModalComponent_div_0_div_58_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1, "Synchronizing Profiles...");
    \u0275\u0275elementEnd();
  }
}
function JobDetailModalComponent_div_0_div_58_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "p", 55);
    \u0275\u0275text(2, "No Proposals Logged in Archive");
    \u0275\u0275elementEnd()();
  }
}
function JobDetailModalComponent_div_0_div_58_div_6_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" BUDGET: ", p_r5.proposedBudget, " ");
  }
}
function JobDetailModalComponent_div_0_div_58_div_6_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" TERM: ", p_r5.proposedDuration, " ");
  }
}
function JobDetailModalComponent_div_0_div_58_div_6_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "button", 72);
    \u0275\u0275listener("click", function JobDetailModalComponent_div_0_div_58_div_6_div_1_div_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onAcceptApplication(p_r5));
    });
    \u0275\u0275text(2, "Authorize Engagement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 73);
    \u0275\u0275listener("click", function JobDetailModalComponent_div_0_div_58_div_6_div_1_div_20_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const p_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onRejectApplication(p_r5));
    });
    \u0275\u0275text(4, "Reject Proposal");
    \u0275\u0275elementEnd()();
  }
}
function JobDetailModalComponent_div_0_div_58_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "div", 60)(3, "div", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 63);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "span", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 64)(13, "span", 65);
    \u0275\u0275text(14, "Transmission Narrative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 66);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 67);
    \u0275\u0275template(18, JobDetailModalComponent_div_0_div_58_div_6_div_1_div_18_Template, 2, 1, "div", 68)(19, JobDetailModalComponent_div_0_div_58_div_6_div_1_div_19_Template, 2, 1, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, JobDetailModalComponent_div_0_div_58_div_6_div_1_div_20_Template, 5, 0, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (p_r5.applicantName || "A")[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.applicantName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r5.applicantEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r5.status === "ACCEPTED" ? "status-open" : p_r5.status === "REJECTED" ? "status-closed" : "status-filled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r5.status || "PENDING", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1('"', p_r5.coverMessage || p_r5.coverLetter || "No technical narrative provided.", '"');
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r5.proposedBudget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r5.proposedDuration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canAcceptReject(p_r5));
  }
}
function JobDetailModalComponent_div_0_div_58_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, JobDetailModalComponent_div_0_div_58_div_6_div_1_Template, 21, 9, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.proposals);
  }
}
function JobDetailModalComponent_div_0_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "span", 49);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, JobDetailModalComponent_div_0_div_58_div_4_Template, 2, 0, "div", 50)(5, JobDetailModalComponent_div_0_div_58_div_5_Template, 3, 0, "div", 51)(6, JobDetailModalComponent_div_0_div_58_div_6_Template, 2, 1, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Applicant Archive (", ctx_r1.proposals.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingProposals);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingProposals && ctx_r1.proposals.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingProposals && ctx_r1.proposals.length > 0);
  }
}
function JobDetailModalComponent_div_0_button_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function JobDetailModalComponent_div_0_button_60_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editJob.emit(ctx_r1.jobPosting));
    });
    \u0275\u0275text(1, "Modify Listing");
    \u0275\u0275elementEnd();
  }
}
function JobDetailModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function JobDetailModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275listener("click", function JobDetailModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "h2");
    \u0275\u0275text(5, "Professional Listing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function JobDetailModalComponent_div_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "span", 11);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, JobDetailModalComponent_div_0_span_15_Template, 3, 4, "span", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h1", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "span", 17);
    \u0275\u0275text(23, "Engagement Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18)(25, "div", 19)(26, "label");
    \u0275\u0275text(27, "Geographic Node");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 20);
    \u0275\u0275text(29);
    \u0275\u0275template(30, JobDetailModalComponent_div_0_span_30_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 19)(32, "label");
    \u0275\u0275text(33, "Entity Structure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 20);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 22)(37, "span", 23);
    \u0275\u0275text(38, "Financial Valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 18)(40, "div", 19)(41, "label");
    \u0275\u0275text(42, "Budget Allocation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 24);
    \u0275\u0275template(44, JobDetailModalComponent_div_0_span_44_Template, 3, 4, "span", 25)(45, JobDetailModalComponent_div_0_span_45_Template, 2, 0, "span", 25)(46, JobDetailModalComponent_div_0_span_46_Template, 3, 3, "span", 25)(47, JobDetailModalComponent_div_0_span_47_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, JobDetailModalComponent_div_0_div_48_Template, 6, 4, "div", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 27)(50, "span", 17);
    \u0275\u0275text(51, "Executive Synopsis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 28);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, JobDetailModalComponent_div_0_div_54_Template, 5, 1, "div", 29);
    \u0275\u0275elementStart(55, "div", 15);
    \u0275\u0275template(56, JobDetailModalComponent_div_0_div_56_Template, 5, 1, "div", 25)(57, JobDetailModalComponent_div_0_div_57_Template, 5, 1, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, JobDetailModalComponent_div_0_div_58_Template, 7, 4, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 31);
    \u0275\u0275template(60, JobDetailModalComponent_div_0_button_60_Template, 2, 0, "button", 32);
    \u0275\u0275elementStart(61, "button", 33);
    \u0275\u0275listener("click", function JobDetailModalComponent_div_0_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(62, "Dismiss");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", ctx_r1.jobPosting.status === "OPEN" ? "status-open" : ctx_r1.jobPosting.status === "CLOSED" ? "status-closed" : "status-filled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.jobPosting.status, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.jobPosting.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.jobPosting.postedDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.jobPosting.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("ID: ", ctx_r1.jobPosting.id || "ARCHIVED", " \u2022 ", ctx_r1.jobPosting.category || "General Placement", "");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r1.jobPosting.location, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.jobPosting.isRemote);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.jobPosting.employmentType || "\u2014");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.jobPosting.salaryMin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.jobPosting.salaryMin && ctx_r1.jobPosting.salaryMax);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.jobPosting.salaryMax);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.jobPosting.salaryMin && !ctx_r1.jobPosting.salaryMax);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.jobPosting.closingDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.jobPosting.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.jobPosting.fullDescription);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.jobPosting.tags == null ? null : ctx_r1.jobPosting.tags.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.jobPosting.requirements == null ? null : ctx_r1.jobPosting.requirements.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOwnJob);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isOwnJob);
  }
}
function JobDetailModalComponent_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "label", 85);
    \u0275\u0275text(2, "Reasoning Archive ");
    \u0275\u0275elementStart(3, "span", 86);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "textarea", 87);
    \u0275\u0275twoWayListener("ngModelChange", function JobDetailModalComponent_div_1_div_13_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.rejectionReason, $event) || (ctx_r1.rejectionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.rejectionReason);
  }
}
function JobDetailModalComponent_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "p", 89);
    \u0275\u0275text(2, "Proceeding with authorization will notify the applicant and initialize the professional engagement workflow.");
    \u0275\u0275elementEnd()();
  }
}
function JobDetailModalComponent_div_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function JobDetailModalComponent_div_1_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmAcceptApplication());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isSubmitting ? "Syncing..." : "Confirm Authorization");
  }
}
function JobDetailModalComponent_div_1_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function JobDetailModalComponent_div_1_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmRejectApplication());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting || !ctx_r1.rejectionReason.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isSubmitting ? "Syncing..." : "Confirm Rejection");
  }
}
function JobDetailModalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "div", 4)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 77);
    \u0275\u0275listener("click", function JobDetailModalComponent_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.closeAcceptModal();
      return \u0275\u0275resetView(ctx_r1.closeRejectModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "div", 78)(9, "p", 79);
    \u0275\u0275text(10, "Target Identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 80);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, JobDetailModalComponent_div_1_div_13_Template, 6, 1, "div", 52)(14, JobDetailModalComponent_div_1_div_14_Template, 3, 0, "div", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 31)(16, "button", 82);
    \u0275\u0275listener("click", function JobDetailModalComponent_div_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.closeAcceptModal();
      return \u0275\u0275resetView(ctx_r1.closeRejectModal());
    });
    \u0275\u0275text(17, "Discard");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, JobDetailModalComponent_div_1_button_18_Template, 2, 2, "button", 83)(19, JobDetailModalComponent_div_1_button_19_Template, 2, 2, "button", 84);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.showAcceptModal ? "Authorize Engagement" : "Reject Proposal");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedProposal == null ? null : ctx_r1.selectedProposal.applicantName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRejectModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAcceptModal);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.showAcceptModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showRejectModal);
  }
}
var JobDetailModalComponent = class _JobDetailModalComponent {
  constructor(apiService, authService) {
    this.apiService = apiService;
    this.authService = authService;
    this.show = false;
    this.jobPosting = null;
    this.close = new EventEmitter();
    this.proposalSubmitted = new EventEmitter();
    this.editJob = new EventEmitter();
    this.proposal = {
      coverLetter: "",
      resumeUrl: "",
      resumeFileName: ""
    };
    this.isSubmitting = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.currentUser = null;
    this.showProposalForm = false;
    this.proposals = [];
    this.isLoadingProposals = false;
    this.hasApplied = false;
    this.isOwnJob = false;
    this.showAcceptModal = false;
    this.showRejectModal = false;
    this.selectedProposal = null;
    this.rejectionReason = "";
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }
  ngOnChanges(changes) {
    if (changes["show"] && changes["show"].currentValue && this.jobPosting?.id) {
      this.checkOwnership();
      this.checkAppliedStatus();
      this.loadProposals();
      this.resetProposalForm();
    }
    if (changes["show"] && !changes["show"].currentValue) {
      this.resetProposalForm();
    }
    if (changes["jobPosting"] && changes["jobPosting"].currentValue) {
      this.checkOwnership();
      this.checkAppliedStatus();
    }
  }
  checkOwnership() {
    if (!this.currentUser || !this.jobPosting) {
      this.isOwnJob = false;
      return;
    }
    this.isOwnJob = this.jobPosting.postedBy === this.currentUser.id || this.jobPosting.postedByEmail === this.currentUser.email;
  }
  checkAppliedStatus() {
    if (!this.currentUser || !this.jobPosting?.id || this.isOwnJob) {
      this.hasApplied = false;
      return;
    }
    this.apiService.checkProposalStatus(this.jobPosting.id).subscribe({
      next: (response) => {
        this.hasApplied = response?.hasApplied || false;
      },
      error: () => {
        this.hasApplied = false;
      }
    });
  }
  loadProposals() {
    if (!this.jobPosting?.id)
      return;
    this.isLoadingProposals = true;
    this.apiService.getProposals(this.jobPosting.id).subscribe({
      next: (response) => {
        this.proposals = Array.isArray(response) ? response : [];
        this.isLoadingProposals = false;
      },
      error: (error) => {
        console.error("Error loading proposals:", error);
        this.proposals = [];
        this.isLoadingProposals = false;
      }
    });
  }
  resetProposalForm() {
    this.proposal = {
      coverLetter: "",
      proposedBudget: "",
      proposedDuration: "",
      relevantExperience: ""
    };
    this.errorMessage = "";
    this.successMessage = "";
    this.isSubmitting = false;
    this.showProposalForm = false;
  }
  onSubmitProposal(event) {
    if (event) {
      event.preventDefault();
    }
    if (!this.currentUser) {
      this.errorMessage = "Please login to submit a proposal";
      return;
    }
    if (!this.proposal.coverLetter || !this.proposal.coverLetter.trim()) {
      this.errorMessage = "Cover letter is required";
      return;
    }
    if (!this.jobPosting?.id) {
      this.errorMessage = "Job posting information is missing";
      return;
    }
    if (!this.canSubmitProposal()) {
      this.errorMessage = "You cannot apply for this job. It may be closed, you may have already applied, or you may be the job poster.";
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = "";
    this.successMessage = "";
    const proposalData = {
      coverMessage: this.proposal.coverLetter || this.proposal.coverMessage || "",
      resumeUrl: this.proposal.resumeUrl || "",
      resumeFileName: this.proposal.resumeFileName || ""
    };
    console.log("Submitting proposal for job:", this.jobPosting.id, proposalData);
    this.apiService.submitProposal(this.jobPosting.id, proposalData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.hasApplied = true;
        this.successMessage = "Proposal submitted successfully!";
        setTimeout(() => {
          this.proposalSubmitted.emit();
          this.loadProposals();
          this.resetProposalForm();
        }, 1500);
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error("Error submitting proposal:", error);
        if (error.status === 401 || error.status === 403) {
          this.errorMessage = "You are not authorized to apply for this job. Please login.";
        } else if (error.status === 404) {
          this.errorMessage = "Job posting not found.";
        } else if (error.status === 400) {
          this.errorMessage = error.error?.message || "Invalid application data. Please check your cover message.";
        } else if (error.status === 409) {
          this.errorMessage = "You have already applied for this job.";
          this.hasApplied = true;
        } else {
          this.errorMessage = error.error?.message || "Error submitting proposal. Please try again.";
        }
      }
    });
  }
  onClose() {
    this.resetProposalForm();
    this.close.emit();
  }
  canSubmitProposal() {
    if (!this.currentUser || !this.jobPosting)
      return false;
    return !this.isOwnJob && !this.hasApplied && !!this.jobPosting.id && (this.jobPosting.status === "PUBLISHED" || this.jobPosting.status === "OPEN");
  }
  isArray(value) {
    return Array.isArray(value);
  }
  getRequirementsArray() {
    if (!this.jobPosting?.requirements)
      return [];
    if (Array.isArray(this.jobPosting.requirements)) {
      return this.jobPosting.requirements;
    }
    return [];
  }
  getRequirementsString() {
    if (!this.jobPosting?.requirements)
      return "";
    if (typeof this.jobPosting.requirements === "string") {
      return this.jobPosting.requirements;
    }
    return "";
  }
  onAcceptApplication(proposal) {
    this.selectedProposal = proposal;
    this.showAcceptModal = true;
  }
  onRejectApplication(proposal) {
    this.selectedProposal = proposal;
    this.rejectionReason = "";
    this.showRejectModal = true;
  }
  confirmAcceptApplication() {
    if (!this.selectedProposal?.id)
      return;
    this.isSubmitting = true;
    this.errorMessage = "";
    this.apiService.acceptJobApplication(this.selectedProposal.id).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.showAcceptModal = false;
        this.selectedProposal = null;
        this.loadProposals();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || "Error accepting application. Please try again.";
      }
    });
  }
  confirmRejectApplication() {
    if (!this.selectedProposal?.id || !this.rejectionReason.trim()) {
      this.errorMessage = "Please provide a reason for rejection";
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = "";
    this.apiService.rejectJobApplication(this.selectedProposal.id, this.rejectionReason).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.showRejectModal = false;
        this.selectedProposal = null;
        this.rejectionReason = "";
        this.loadProposals();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || "Error rejecting application. Please try again.";
      }
    });
  }
  closeAcceptModal() {
    this.showAcceptModal = false;
    this.selectedProposal = null;
    this.errorMessage = "";
  }
  closeRejectModal() {
    this.showRejectModal = false;
    this.selectedProposal = null;
    this.rejectionReason = "";
    this.errorMessage = "";
  }
  canAcceptReject(proposal) {
    return proposal.status === "PENDING" || proposal.status === "UNDER_REVIEW";
  }
  static {
    this.\u0275fac = function JobDetailModalComponent_Factory(t) {
      return new (t || _JobDetailModalComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobDetailModalComponent, selectors: [["app-job-detail-modal"]], inputs: { show: "show", jobPosting: "jobPosting" }, outputs: { close: "close", proposalSubmitted: "proposalSubmitted", editJob: "editJob" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 2, vars: 2, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay !z-[1100]", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "flex", "items-center", "gap-4"], [1, "status-pill", 3, "ngClass"], ["title", "Close Panel", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-8"], [1, "flex", "items-center", "gap-3", "mb-3"], [1, "px-3", "py-1", "bg-indigo-50", "text-indigo-600", "rounded-lg", "text-[10px]", "font-black", "uppercase", "tracking-widest", "border", "border-indigo-100"], ["class", "text-[10px] font-black text-slate-400 uppercase tracking-widest", 4, "ngIf"], [1, "text-4xl", "font-black", "text-slate-900", "tracking-tighter", "mb-2"], [1, "text-sm", "font-bold", "text-slate-500", "uppercase", "tracking-wide"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "mb-8"], [1, "content-group", "mb-0"], [1, "group-title"], [1, "info-grid"], [1, "info-item"], [1, "value", "font-bold"], ["class", "text-emerald-500", 4, "ngIf"], [1, "content-group", "mb-0", "border-emerald-100", "bg-emerald-50/20"], [1, "group-title", "text-emerald-400"], [1, "value", "font-black", "text-emerald-600", "text-lg"], [4, "ngIf"], ["class", "info-item", 4, "ngIf"], [1, "content-group"], [1, "value", "text-sm", "leading-relaxed", "text-slate-600", "whitespace-pre-wrap"], ["class", "content-group", 4, "ngIf"], ["class", "mt-12 backdrop", 4, "ngIf"], [1, "modal-footer"], ["class", "btn-pill btn-primary px-12", 3, "click", 4, "ngIf"], [1, "btn-pill", "btn-secondary", "px-10", 3, "click"], [1, "text-[10px]", "font-black", "text-slate-400", "uppercase", "tracking-widest"], [1, "text-emerald-500"], [1, "value", "font-bold", "text-slate-600"], [1, "value", "text-sm", "leading-relaxed", "text-slate-500", "whitespace-pre-wrap"], [1, "group-title", "px-2"], [1, "flex", "flex-wrap", "gap-2"], ["class", "px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-indigo-100", 4, "ngFor", "ngForOf"], [1, "px-3", "py-1.5", "bg-indigo-50", "text-indigo-600", "rounded-xl", "text-[10px]", "font-black", "uppercase", "tracking-widest", "border", "border-indigo-100"], [1, "space-y-2"], ["class", "flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-2xl shadow-sm", 4, "ngFor", "ngForOf"], [1, "flex", "items-start", "gap-3", "p-3", "bg-white", "border", "border-slate-100", "rounded-2xl", "shadow-sm"], [1, "w-1.5", "h-1.5", "rounded-full", "bg-indigo-600", "mt-1.5", "flex-shrink-0"], [1, "text-xs", "font-bold", "text-slate-700", "leading-snug"], [1, "mt-12", "backdrop"], [1, "flex", "items-center", "justify-between", "mb-6", "px-2"], [1, "text-sm", "font-black", "text-slate-900", "uppercase", "tracking-widest"], ["class", "py-12 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse", 4, "ngIf"], ["class", "p-12 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], [1, "py-12", "text-center", "text-[10px]", "font-black", "text-slate-400", "uppercase", "tracking-widest", "animate-pulse"], [1, "p-12", "text-center", "bg-slate-50", "rounded-3xl", "border-2", "border-dashed", "border-slate-200"], [1, "text-[11px]", "font-black", "text-slate-300", "uppercase", "tracking-widest", "font-mono"], [1, "space-y-4"], ["class", "applicant-card", 4, "ngFor", "ngForOf"], [1, "applicant-card"], [1, "flex", "justify-between", "items-start", "mb-6"], [1, "flex", "gap-4", "items-center"], [1, "w-12", "h-12", "rounded-2xl", "bg-indigo-600", "text-white", "flex", "items-center", "justify-center", "font-black", "text-xl", "shadow-lg", "border-2", "border-white"], [1, "text-xl", "font-black", "text-slate-900", "tracking-tighter"], [1, "text-[10px]", "font-bold", "text-slate-400", "uppercase", "tracking-widest"], [1, "bg-slate-50", "p-5", "rounded-2xl", "mb-6"], [1, "group-title", "text-[9px]", "mb-3"], [1, "text-xs", "font-bold", "text-slate-600", "leading-relaxed", "italic", "whitespace-pre-wrap"], [1, "flex", "gap-4"], ["class", "px-4 py-2 bg-white border border-slate-100 rounded-xl text-[10px] font-black text-slate-900 shadow-sm", 4, "ngIf"], ["class", "mt-8 flex gap-3", 4, "ngIf"], [1, "px-4", "py-2", "bg-white", "border", "border-slate-100", "rounded-xl", "text-[10px]", "font-black", "text-slate-900", "shadow-sm"], [1, "mt-8", "flex", "gap-3"], [1, "btn-pill", "btn-success", "flex-1", "py-3", "text-[10px]", 3, "click"], [1, "btn-pill", "btn-danger", "flex-1", "py-3", "text-[10px]", 3, "click"], [1, "btn-pill", "btn-primary", "px-12", 3, "click"], [1, "modal-overlay", "!z-[1100]"], [1, "modal-container", "max-w-md"], [1, "btn-close", 3, "click"], [1, "summary-card", "mb-6"], [1, "text-xs", "font-black", "text-slate-400", "uppercase", "tracking-widest", "mb-1"], [1, "text-lg", "font-black", "text-slate-900", "tracking-tighter"], ["class", "alert-info !bg-emerald-50 !border-emerald-100 !text-emerald-700", 4, "ngIf"], [1, "btn-pill", "btn-secondary", 3, "click"], ["class", "btn-pill btn-success", 3, "disabled", "click", 4, "ngIf"], ["class", "btn-pill btn-danger", 3, "disabled", "click", 4, "ngIf"], [1, "input-label"], [1, "text-rose-500"], ["rows", "4", "placeholder", "Identify the mismatch or narrative for rejection...", "required", "", 1, "premium-textarea", 3, "ngModelChange", "ngModel"], [1, "alert-info", "!bg-emerald-50", "!border-emerald-100", "!text-emerald-700"], [1, "text-emerald-700", "text-xs", "font-bold", "leading-relaxed"], [1, "btn-pill", "btn-success", 3, "click", "disabled"], [1, "btn-pill", "btn-danger", 3, "click", "disabled"]], template: function JobDetailModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, JobDetailModalComponent_div_0_Template, 63, 21, "div", 0)(1, JobDetailModalComponent_div_1_Template, 20, 6, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show && ctx.jobPosting);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showAcceptModal || ctx.showRejectModal);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  --modal-primary: #6366f1;\n  --modal-success: #10b981;\n  --modal-danger: #f43f5e;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.4);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  animation: _ngcontent-%COMP%_overlayFade 0.3s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_overlayFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 32px;\n  width: 100%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n  animation: _ngcontent-%COMP%_modalReveal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  scrollbar-width: thin;\n  scrollbar-color: #e2e8f0 transparent;\n}\n@keyframes _ngcontent-%COMP%_modalReveal {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 10;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 1.5rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #ef4444;\n  transform: rotate(90deg);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.content-group[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 24px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n  margin-bottom: 24px;\n}\n.group-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 900;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 20px;\n  display: block;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 24px;\n}\n.info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #1e293b;\n  word-break: break-word;\n}\n.status-pill[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.65rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: inline-flex;\n  align-items: center;\n}\n.status-open[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-closed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.status-filled[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.applicant-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #f1f5f9;\n  border-radius: 20px;\n  padding: 24px;\n  margin-bottom: 16px;\n  transition: all 0.2s;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n}\n.applicant-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);\n  border-color: #e2e8f0;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  background: #f8fafc;\n  border-radius: 0 0 32px 32px;\n}\n.btn-pill[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  border-radius: 16px;\n  font-size: 0.8125rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  transition: all 0.2s;\n  border: none;\n  cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #f1f5f9;\n  color: #64748b;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #1e293b;\n  border-color: #e2e8f0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--modal-primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: var(--modal-success);\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: var(--modal-danger);\n  color: white;\n}\n/*# sourceMappingURL=job-detail-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobDetailModalComponent, { className: "JobDetailModalComponent", filePath: "src\\app\\components\\modals\\job-detail-modal\\job-detail-modal.component.ts", lineNumber: 15 });
})();

export {
  JobDetailModalComponent
};
//# sourceMappingURL=chunk-DG4XVCG4.js.map
