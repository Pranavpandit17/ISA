import {
  MembershipService
} from "./chunk-4ZF6DWFC.js";
import {
  AuthService
} from "./chunk-ZQTCOOSY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-EMPR7R4G.js";
import {
  ApiService,
  CommonModule,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction5,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IAKTGX76.js";

// src/app/components/modals/event-detail-modal/event-detail-modal.component.ts
var _c0 = () => ["CONFERENCE", "NETWORKING", "WORKSHOP", "WEBINAR"];
var _c1 = (a0, a1, a2, a3, a4) => ({ "bg-indigo-600": a0, "bg-emerald-600": a1, "bg-fuchsia-600": a2, "bg-amber-600": a3, "bg-slate-500": a4 });
function EventDetailModalComponent_div_0_div_7_div_65_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 48);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (s_r4.name || "S")[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.title);
  }
}
function EventDetailModalComponent_div_0_div_7_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 42);
    \u0275\u0275text(2, "Voice & Authority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43);
    \u0275\u0275template(4, EventDetailModalComponent_div_0_div_7_div_65_div_4_Template, 8, 3, "div", 44);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.event.speakers);
  }
}
function EventDetailModalComponent_div_0_div_7_div_66_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "p", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatScheduleTime(item_r5.startTime), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.title || "Session");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.location);
  }
}
function EventDetailModalComponent_div_0_div_7_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 42);
    \u0275\u0275text(2, "Agenda Sequence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43);
    \u0275\u0275template(4, EventDetailModalComponent_div_0_div_7_div_66_div_4_Template, 8, 3, "div", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.event.schedules);
  }
}
function EventDetailModalComponent_div_0_div_7_div_67_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, "Synchronizing Nodes...");
    \u0275\u0275elementEnd();
  }
}
function EventDetailModalComponent_div_0_div_7_div_67_div_6_div_2_tr_15_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function EventDetailModalComponent_div_0_div_7_div_67_div_6_div_2_tr_15_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const a_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r1.markAttendance(a_r8));
    });
    \u0275\u0275text(1, "AUTHORIZE");
    \u0275\u0275elementEnd();
  }
}
function EventDetailModalComponent_div_0_div_7_div_67_div_6_div_2_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 68)(6, "span", 69);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 70);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 64);
    \u0275\u0275template(12, EventDetailModalComponent_div_0_div_7_div_67_div_6_div_2_tr_15_button_12_Template, 2, 0, "button", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.userEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.ticketTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", a_r8.status === "CONFIRMED" ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r8.status);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(a_r8.checkedIn ? "text-indigo-600" : "text-slate-300");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r8.checkedIn ? "SECURED" : "PENDING");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !a_r8.checkedIn);
  }
}
function EventDetailModalComponent_div_0_div_7_div_67_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Ticket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 64);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, EventDetailModalComponent_div_0_div_7_div_67_div_6_div_2_tr_15_Template, 13, 8, "tr", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.attendees);
  }
}
function EventDetailModalComponent_div_0_div_7_div_67_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, EventDetailModalComponent_div_0_div_7_div_67_div_6_div_1_Template, 2, 0, "div", 60)(2, EventDetailModalComponent_div_0_div_7_div_67_div_6_div_2_Template, 16, 1, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingAttendees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingAttendees && ctx_r1.attendees.length > 0);
  }
}
function EventDetailModalComponent_div_0_div_7_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "span", 56);
    \u0275\u0275text(3, "Attendance Registry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 57);
    \u0275\u0275listener("click", function EventDetailModalComponent_div_0_div_7_div_67_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleAttendance());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, EventDetailModalComponent_div_0_div_7_div_67_div_6_Template, 3, 2, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.showAttendance ? "Hide Registry" : "Extract Registry", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAttendance);
  }
}
function EventDetailModalComponent_div_0_div_7_button_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function EventDetailModalComponent_div_0_div_7_button_69_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onRegister());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("btn-disabled", ctx_r1.isUserRegistered());
    \u0275\u0275property("disabled", ctx_r1.isRegistering || ctx_r1.isUserRegistered());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isRegistering ? "Processing Commitment..." : ctx_r1.isUserRegistered() ? "Registration Secured" : "Commit to Attendance", " ");
  }
}
function EventDetailModalComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275element(2, "img", 8)(3, "div", 9);
    \u0275\u0275elementStart(4, "div", 10)(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 13)(10, "div", 14)(11, "span", 15);
    \u0275\u0275text(12, "Engagement Logistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 16)(14, "div", 17)(15, "label");
    \u0275\u0275text(16, "Chronology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 18);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 17)(20, "label");
    \u0275\u0275text(21, "Geographic Node");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 19);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 17)(25, "label");
    \u0275\u0275text(26, "Load Factor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 19)(28, "span", 20);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 17)(32, "label");
    \u0275\u0275text(33, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 21);
    \u0275\u0275text(35, "LIVE REGISTRATION");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 14)(37, "span", 15);
    \u0275\u0275text(38, "Executive Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 22);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 23)(42, "span", 24);
    \u0275\u0275text(43, "Financial Valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 25)(45, "div")(46, "label", 26);
    \u0275\u0275text(47, "Unit Price (Base)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 27);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 28)(51, "label", 29);
    \u0275\u0275text(52, "Magnitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 30)(54, "button", 31);
    \u0275\u0275listener("click", function EventDetailModalComponent_div_0_div_7_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.decreaseQuantity());
    });
    \u0275\u0275text(55, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function EventDetailModalComponent_div_0_div_7_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.quantity, $event) || (ctx_r1.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function EventDetailModalComponent_div_0_div_7_Template_input_change_56_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validateQuantity());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 31);
    \u0275\u0275listener("click", function EventDetailModalComponent_div_0_div_7_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.increaseQuantity());
    });
    \u0275\u0275text(58, "+");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(59, "div", 33)(60, "span", 34);
    \u0275\u0275text(61, "Committing Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 35);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 36);
    \u0275\u0275template(65, EventDetailModalComponent_div_0_div_7_div_65_Template, 5, 1, "div", 37)(66, EventDetailModalComponent_div_0_div_7_div_66_Template, 5, 1, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, EventDetailModalComponent_div_0_div_7_div_67_Template, 7, 2, "div", 38);
    \u0275\u0275elementStart(68, "div", 39);
    \u0275\u0275template(69, EventDetailModalComponent_div_0_div_7_button_69_Template, 2, 4, "button", 40);
    \u0275\u0275elementStart(70, "button", 41);
    \u0275\u0275listener("click", function EventDetailModalComponent_div_0_div_7_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(71, "Dismiss");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.event.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(20, _c1, (ctx_r1.event.type || ctx_r1.event.category) === "CONFERENCE", (ctx_r1.event.type || ctx_r1.event.category) === "NETWORKING", (ctx_r1.event.type || ctx_r1.event.category) === "WORKSHOP", (ctx_r1.event.type || ctx_r1.event.category) === "WEBINAR", !\u0275\u0275pureFunction0(19, _c0).includes(ctx_r1.event.type || ctx_r1.event.category)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.event.type || ctx_r1.event.category || "EVENT", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.event.name || ctx_r1.event.title);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatEventDateTime(ctx_r1.event));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.event.location || ctx_r1.event.venue);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.event.totalRegisteredSeats !== void 0 ? ctx_r1.event.totalRegisteredSeats : ctx_r1.event.registeredCount || 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" / ", ctx_r1.event.capacity || ctx_r1.event.maxCapacity || "\u221E", " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.event.description || ctx_r1.event.shortDescription || ctx_r1.event.fullDescription);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.getEventCost());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.quantity <= 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.quantity);
    \u0275\u0275property("max", ctx_r1.getMaxQuantity());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.quantity >= ctx_r1.getMaxQuantity());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getTotalPrice());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.event == null ? null : ctx_r1.event.speakers == null ? null : ctx_r1.event.speakers.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.event == null ? null : ctx_r1.event.schedules == null ? null : ctx_r1.event.schedules.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canManageAttendance());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isEventClosed());
  }
}
function EventDetailModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function EventDetailModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function EventDetailModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h2");
    \u0275\u0275text(4, "Experience Synopsis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 4);
    \u0275\u0275listener("click", function EventDetailModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, EventDetailModalComponent_div_0_div_7_Template, 72, 26, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.event);
  }
}
var EventDetailModalComponent = class _EventDetailModalComponent {
  constructor(apiService, authService, membershipService) {
    this.apiService = apiService;
    this.authService = authService;
    this.membershipService = membershipService;
    this.show = false;
    this.event = null;
    this.close = new EventEmitter();
    this.registered = new EventEmitter();
    this.openPayment = new EventEmitter();
    this.currentUser = null;
    this.isLoading = false;
    this.isRegistering = false;
    this.isProcessingPayment = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.quantity = 1;
    this.attendees = [];
    this.isLoadingAttendees = false;
    this.attendanceError = "";
    this.attendanceSuccess = "";
    this.showAttendance = false;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }
  onClose() {
    this.close.emit();
    this.errorMessage = "";
    this.successMessage = "";
    this.quantity = 1;
  }
  onRegister() {
    this.currentUser = this.authService.getCurrentUser();
    if (!this.currentUser) {
      this.errorMessage = "Please login to register for events";
      return;
    }
    if (!this.event || !this.event.id) {
      this.errorMessage = "Event information is missing";
      return;
    }
    if (this.isEventClosed()) {
      this.errorMessage = "This event is already closed. Registration is no longer available.";
      return;
    }
    if (this.quantity < 1) {
      this.errorMessage = "Quantity must be at least 1";
      return;
    }
    if (this.isEventPaid()) {
      const currentQty = this.quantity;
      this.onClose();
      this.openPayment.emit({ event: this.event, quantity: currentQty });
      return;
    }
    if (!this.isEventPaid()) {
      this.performRegistration();
    }
  }
  performRegistration(paymentId) {
    const currentRegisteredSeats = this.event.totalRegisteredSeats !== void 0 ? this.event.totalRegisteredSeats : this.event.registrationCount || this.event.registeredCount || 0;
    const capacity = this.event.capacity || this.event.maxCapacity;
    if (capacity && currentRegisteredSeats + this.quantity > capacity) {
      this.errorMessage = `Only ${capacity - currentRegisteredSeats} spots available. Please reduce quantity.`;
      return;
    }
    this.isRegistering = true;
    this.errorMessage = "";
    const registrationData = { quantity: this.quantity };
    if (paymentId) {
      registrationData.paymentId = paymentId;
    }
    this.apiService.registerForEvent(this.event.id, registrationData).subscribe({
      next: (response) => {
        this.isRegistering = false;
        const currentRegisteredSeats2 = this.event.totalRegisteredSeats !== void 0 ? this.event.totalRegisteredSeats : this.event.registrationCount || this.event.registeredCount || 0;
        const newSeatsCount = currentRegisteredSeats2 + this.quantity;
        this.event.totalRegisteredSeats = newSeatsCount;
        this.event.registeredCount = newSeatsCount;
        this.event.registrationCount = newSeatsCount;
        this.successMessage = `Successfully registered ${this.quantity} ${this.quantity === 1 ? "ticket" : "tickets"} for the event!`;
        setTimeout(() => {
          this.registered.emit();
          this.onClose();
        }, 2e3);
      },
      error: (error) => {
        this.isRegistering = false;
        this.errorMessage = error.error?.message || "Error registering for event. Please try again.";
      }
    });
  }
  getEventPrice() {
    if (!this.event)
      return 0;
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === "FREE") {
      return 0;
    }
    const isPaidMember = this.isPaidMember();
    if (pricingType === "PAID" || pricingType === "DISCOUNTED") {
      const memberPrice = this.event.memberPrice || this.event.pricing?.memberPrice || 0;
      const freeMemberPrice = this.event.nonMemberPrice || this.event.pricing?.nonMemberPrice || 0;
      if (isPaidMember && memberPrice > 0) {
        return memberPrice;
      }
      if (!isPaidMember && freeMemberPrice > 0) {
        return freeMemberPrice;
      }
      if (memberPrice > 0)
        return memberPrice;
      if (freeMemberPrice > 0)
        return freeMemberPrice;
    }
    return this.event.price || this.event.pricing?.memberPrice || 0;
  }
  getEventCost() {
    if (!this.event)
      return "Free";
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === "FREE" || !pricingType && !this.event.price && !this.event.memberPrice && !this.event.pricing?.memberPrice) {
      return "Free";
    }
    if (pricingType === "PAID" || pricingType === "DISCOUNTED") {
      const memberPrice = this.event.memberPrice || this.event.pricing?.memberPrice || 0;
      const nonMemberPrice = this.event.nonMemberPrice || this.event.pricing?.nonMemberPrice || 0;
      const freeMemberPrice = nonMemberPrice;
      const isPaidMember = this.isPaidMember();
      if (isPaidMember && memberPrice > 0) {
        return `\u20B9${memberPrice.toLocaleString("en-IN")}`;
      }
      if (!isPaidMember && freeMemberPrice > 0) {
        return `\u20B9${freeMemberPrice.toLocaleString("en-IN")}`;
      }
      if (memberPrice > 0) {
        return `\u20B9${memberPrice.toLocaleString("en-IN")}`;
      }
      if (freeMemberPrice > 0) {
        return `\u20B9${freeMemberPrice.toLocaleString("en-IN")}`;
      }
    }
    const price = this.event.price || this.event.pricing?.memberPrice || 0;
    if (price === 0) {
      return "Free";
    }
    return `\u20B9${price.toLocaleString("en-IN")}`;
  }
  isEventPaid() {
    if (!this.event)
      return false;
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === "PAID" || pricingType === "DISCOUNTED") {
      return true;
    }
    return this.getEventPrice() > 0;
  }
  isUserRegistered() {
    if (!this.currentUser || !this.event)
      return false;
    return this.event.attendees?.some((a) => a.email === this.currentUser?.email) || false;
  }
  isEventClosed() {
    if (!this.event)
      return false;
    const now = /* @__PURE__ */ new Date();
    now.setHours(0, 0, 0, 0);
    if (this.event.endDate) {
      const endDate = new Date(this.event.endDate);
      endDate.setHours(0, 0, 0, 0);
      if (endDate < now) {
        return true;
      }
    } else if (this.event.startDate) {
      const startDate = new Date(this.event.startDate);
      startDate.setHours(0, 0, 0, 0);
      if (startDate < now) {
        return true;
      }
    }
    if (this.event.status === "CANCELLED" || this.event.status === "COMPLETED") {
      return true;
    }
    return false;
  }
  isPaidMember() {
    return !!this.currentUser && this.currentUser.type === "PREMIUM";
  }
  // Attendance management (admin only)
  canManageAttendance() {
    return this.currentUser?.role === "admin";
  }
  toggleAttendance() {
    if (!this.canManageAttendance() || !this.event || !this.event.id) {
      return;
    }
    this.showAttendance = !this.showAttendance;
    if (this.showAttendance && this.attendees.length === 0) {
      this.loadAttendees();
    }
  }
  loadAttendees() {
    if (!this.event || !this.event.id || !this.canManageAttendance()) {
      return;
    }
    this.isLoadingAttendees = true;
    this.attendanceError = "";
    this.apiService.getEventAttendees(this.event.id).subscribe({
      next: (response) => {
        this.attendees = Array.isArray(response) ? response : [];
        this.isLoadingAttendees = false;
      },
      error: (error) => {
        console.error("Error loading event attendees:", error);
        this.attendanceError = error.error?.message || "Error loading attendees. Please try again.";
        this.attendees = [];
        this.isLoadingAttendees = false;
      }
    });
  }
  markAttendance(attendee) {
    if (!this.canManageAttendance() || !attendee?.id) {
      return;
    }
    if (attendee.checkedIn) {
      return;
    }
    this.attendanceError = "";
    this.attendanceSuccess = "";
    this.apiService.markEventAttendance(attendee.id).subscribe({
      next: (updated) => {
        this.attendanceSuccess = `Marked attendance for ${updated.userName || updated.userEmail || "attendee"}.`;
        const idx = this.attendees.findIndex((a) => a.id === updated.id);
        if (idx !== -1) {
          this.attendees[idx] = updated;
        }
      },
      error: (error) => {
        console.error("Error marking attendance:", error);
        this.attendanceError = error.error?.message || "Error marking attendance. Please try again.";
      }
    });
  }
  getMaxQuantity() {
    if (!this.event)
      return 1;
    const capacity = this.event.capacity || this.event.maxCapacity;
    const registeredSeats = this.event.totalRegisteredSeats !== void 0 ? this.event.totalRegisteredSeats : this.event.registeredCount || 0;
    if (!capacity)
      return 10;
    return Math.max(1, capacity - registeredSeats);
  }
  // Format schedule time (LocalTime from backend) as HH:mm
  formatScheduleTime(time) {
    if (!time)
      return "";
    try {
      return time.split(":").slice(0, 2).join(":");
    } catch {
      return String(time);
    }
  }
  formatEventDateTime(event, useStartDate = true) {
    if (!event)
      return "N/A";
    const dateField = useStartDate ? event.startDate || event.date : event.endDate;
    const timeField = useStartDate ? event.startTime : event.endTime;
    if (!dateField)
      return "N/A";
    try {
      let dateStr = "";
      let timeStr = "";
      if (typeof dateField === "string") {
        dateStr = dateField.split("T")[0];
      } else {
        const date = new Date(dateField);
        if (isNaN(date.getTime()))
          return "Invalid Date";
        dateStr = date.toISOString().split("T")[0];
      }
      if (timeField) {
        if (typeof timeField === "string") {
          timeStr = timeField.split(":").slice(0, 2).join(":");
        } else {
          timeStr = String(timeField);
        }
      } else {
        if (typeof dateField === "string" && dateField.includes("T")) {
          const parts = dateField.split("T");
          if (parts[1]) {
            timeStr = parts[1].split(":").slice(0, 2).join(":");
          }
        } else if (dateField instanceof Date) {
          const hours = String(dateField.getHours()).padStart(2, "0");
          const minutes = String(dateField.getMinutes()).padStart(2, "0");
          timeStr = `${hours}:${minutes}`;
        }
      }
      if (dateStr && timeStr) {
        const combinedDateTime = /* @__PURE__ */ new Date(`${dateStr}T${timeStr}`);
        if (isNaN(combinedDateTime.getTime()))
          return "Invalid Date";
        const options = {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true
        };
        return combinedDateTime.toLocaleString("en-US", options);
      } else if (dateStr) {
        const date = new Date(dateStr);
        const options = {
          year: "numeric",
          month: "short",
          day: "numeric"
        };
        return date.toLocaleDateString("en-US", options);
      }
      return "N/A";
    } catch (error) {
      return "Invalid Date";
    }
  }
  validateQuantity() {
    if (this.quantity < 1) {
      this.quantity = 1;
    }
    const maxQty = this.getMaxQuantity();
    if (this.quantity > maxQty) {
      this.quantity = maxQty;
    }
  }
  getTotalPrice() {
    const price = this.getEventPrice();
    const total = price * this.quantity;
    if (total === 0) {
      return "Free";
    }
    return `\u20B9${total.toLocaleString("en-IN")}`;
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  increaseQuantity() {
    const maxQty = this.getMaxQuantity();
    if (this.quantity < maxQty) {
      this.quantity++;
    }
  }
  static {
    this.\u0275fac = function EventDetailModalComponent_Factory(t) {
      return new (t || _EventDetailModalComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(MembershipService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailModalComponent, selectors: [["app-event-detail-modal"]], inputs: { show: "show", event: "event" }, outputs: { close: "close", registered: "registered", openPayment: "openPayment" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], ["title", "Close Panel", 1, "btn-close", 3, "click"], ["class", "modal-body !p-0", 4, "ngIf"], [1, "modal-body", "!p-0"], [1, "w-full", "h-64", "relative", "overflow-hidden", "bg-slate-100"], ["alt", "Event Cover", 1, "w-full", "h-full", "object-cover", 3, "src"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-slate-900/80", "via-slate-900/20", "to-transparent"], [1, "absolute", "bottom-6", "left-8", "right-8"], [1, "px-3", "py-1", "text-white", "text-[10px]", "font-black", "uppercase", "tracking-widest", "rounded-lg", "mb-3", "inline-block", "shadow-lg", 3, "ngClass"], [1, "text-3xl", "font-black", "text-white", "tracking-tighter", "leading-tight"], [1, "p-8"], [1, "content-group"], [1, "group-title"], [1, "info-grid"], [1, "info-item"], [1, "value", "font-bold", "text-slate-900"], [1, "value"], [1, "text-indigo-600", "font-black"], [1, "value", "text-[10px]", "font-black", "uppercase", "text-emerald-500", "tracking-widest", "shadow-sm", "px-2", "py-1", "bg-emerald-50", "rounded-lg", "inline-block"], [1, "value", "text-sm", "leading-relaxed", "text-slate-600", "whitespace-pre-line"], [1, "content-group", "border-indigo-100", "bg-indigo-50/30"], [1, "group-title", "text-indigo-400"], [1, "flex", "items-end", "justify-between"], [1, "text-[10px]", "font-black", "text-indigo-300", "uppercase", "mb-1", "block"], [1, "value-large", "text-indigo-600"], [1, "flex", "flex-col", "items-end", "gap-2"], [1, "text-[10px]", "font-black", "text-indigo-300", "uppercase"], [1, "flex", "items-center", "gap-1", "bg-white", "p-1", "rounded-xl", "shadow-sm", "border", "border-indigo-100"], [1, "w-8", "h-8", "rounded-lg", "text-indigo-600", "hover:bg-indigo-50", "disabled:opacity-20", "font-black", 3, "click", "disabled"], ["type", "number", "min", "1", 1, "w-10", "text-center", "font-black", "text-xs", "text-slate-900", "focus:outline-none", 3, "ngModelChange", "change", "ngModel", "max"], [1, "mt-4", "pt-4", "border-t", "border-indigo-100", "flex", "justify-between", "items-center"], [1, "text-[10px]", "font-black", "text-indigo-400", "uppercase"], [1, "text-sm", "font-black", "text-indigo-600", "tracking-tight"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "mt-8"], [4, "ngIf"], ["class", "attendance-track", 4, "ngIf"], [1, "flex", "gap-4", "mt-10"], ["class", "btn-pill btn-primary py-4", 3, "disabled", "btn-disabled", "click", 4, "ngIf"], [1, "btn-pill", "btn-secondary", "px-10", 3, "click"], [1, "group-title", "px-2"], [1, "space-y-3"], ["class", "flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-2xl shadow-sm", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-3", "p-3", "bg-white", "border", "border-slate-100", "rounded-2xl", "shadow-sm"], [1, "w-10", "h-10", "rounded-xl", "bg-indigo-600", "text-white", "flex", "items-center", "justify-center", "font-black", "text-sm"], [1, "text-xs", "font-black", "text-slate-900", "tracking-tight"], [1, "text-[9px]", "font-bold", "text-slate-400", "uppercase"], ["class", "flex gap-3 p-3 bg-white border border-slate-100 rounded-2xl shadow-sm", 4, "ngFor", "ngForOf"], [1, "flex", "gap-3", "p-3", "bg-white", "border", "border-slate-100", "rounded-2xl", "shadow-sm"], [1, "text-[9px]", "font-black", "text-indigo-600", "uppercase", "w-16", "pt-0.5"], [1, "flex-1"], [1, "text-[9px]", "font-bold", "text-slate-400"], [1, "attendance-track"], [1, "flex", "items-center", "justify-between", "mb-4", "px-2"], [1, "text-sm", "font-black", "text-slate-900", "uppercase", "tracking-widest"], [1, "btn-pill", "btn-secondary", "text-[10px]", "py-1.5", 3, "click"], ["class", "animate-reveal", 4, "ngIf"], [1, "animate-reveal"], ["class", "py-12 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest", 4, "ngIf"], ["class", "scroll-track shadow-inner bg-slate-50/50", 4, "ngIf"], [1, "py-12", "text-center", "text-[10px]", "font-black", "text-slate-400", "uppercase", "tracking-widest"], [1, "scroll-track", "shadow-inner", "bg-slate-50/50"], [1, "text-right"], [4, "ngFor", "ngForOf"], [1, "font-bold"], [1, "text-[10px]", "font-black", "text-slate-400", "uppercase"], [1, "text-center"], [1, "px-2", "py-0.5", "rounded-lg", "text-[9px]", "font-black", 3, "ngClass"], [1, "text-[10px]", "font-black", "uppercase"], ["class", "text-[10px] font-black text-indigo-600 hover:underline", 3, "click", 4, "ngIf"], [1, "text-[10px]", "font-black", "text-indigo-600", "hover:underline", 3, "click"], [1, "btn-pill", "btn-primary", "py-4", 3, "click", "disabled"]], template: function EventDetailModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EventDetailModalComponent_div_0_Template, 8, 1, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  --modal-primary: #6366f1;\n  --modal-success: #10b981;\n  --modal-danger: #f43f5e;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.4);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  animation: _ngcontent-%COMP%_overlayFade 0.3s ease-out forwards;\n}\n@keyframes _ngcontent-%COMP%_overlayFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 32px;\n  width: 100%;\n  max-width: 800px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n  animation: _ngcontent-%COMP%_modalReveal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  scrollbar-width: thin;\n  scrollbar-color: #e2e8f0 transparent;\n}\n@keyframes _ngcontent-%COMP%_modalReveal {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  z-index: 10;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.btn-close[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n  color: #64748b;\n  font-size: 1.5rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #ef4444;\n  transform: rotate(90deg);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.content-group[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 24px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n  margin-bottom: 24px;\n}\n.group-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 900;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 20px;\n  display: block;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 24px;\n}\n.info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #1e293b;\n  word-break: break-word;\n}\n.info-item[_ngcontent-%COMP%]   .value-large[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  background: #f8fafc;\n  border-radius: 0 0 32px 32px;\n}\n.btn-pill[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 16px;\n  font-size: 0.875rem;\n  font-weight: 800;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e2e8f0;\n  color: #64748b;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #1e293b;\n  border-color: #cbd5e1;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--modal-primary);\n  color: white;\n  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);\n  flex: 1;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: var(--modal-success);\n  color: white;\n  flex: 1;\n}\n.btn-disabled[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #94a3b8;\n  cursor: not-allowed;\n  flex: 1;\n}\n.attendance-track[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.scroll-track[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  border-radius: 20px;\n  border: 1px solid #f1f5f9;\n  background: white;\n  scrollbar-width: thin;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: #f8fafc;\n  padding: 12px 20px;\n  text-align: left;\n  font-size: 0.65rem;\n  font-weight: 900;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  border-bottom: 1px solid #f1f5f9;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  font-size: 0.8125rem;\n  color: #334155;\n  border-bottom: 1px solid #f8fafc;\n}\n/*# sourceMappingURL=event-detail-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailModalComponent, { className: "EventDetailModalComponent", filePath: "src\\app\\components\\modals\\event-detail-modal\\event-detail-modal.component.ts", lineNumber: 15 });
})();

export {
  EventDetailModalComponent
};
//# sourceMappingURL=chunk-YJ756JFA.js.map
