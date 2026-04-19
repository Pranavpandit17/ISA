import {
  AppModalService
} from "./chunk-CGDGWJBY.js";
import {
  ToastService
} from "./chunk-BMTGONH6.js";
import {
  AuthService
} from "./chunk-HS4BPM7A.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-X7FTYMHV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-QNLLDZ5O.js";
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
  combineLatest,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
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

// src/app/pages/event-detail/event-detail.component.ts
var _c0 = (a0, a1, a2) => ({ "border-indigo-500 bg-white shadow-lg shadow-indigo-100": a0, "border-slate-100 bg-slate-50 opacity-60": a1, "border-slate-100 bg-slate-50 hover:border-indigo-200": a2 });
var _c1 = (a0, a1, a2, a3) => ({ "text-emerald-600": a0, "text-amber-600": a1, "text-rose-600": a2, "text-slate-400": a3 });
function EventDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function EventDetailComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "\u{1F3F7}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatEventKindLabel(ctx_r0.event.type));
  }
}
function EventDetailComponent_div_4_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "\u{1F3C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Ends ", ctx_r0.formatEventDateTime(ctx_r0.event, false), "");
  }
}
function EventDetailComponent_div_4_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 19);
    \u0275\u0275text(2, "\u{1F517}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 34);
    \u0275\u0275text(4, "Join / recording link");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", ctx_r0.event.onlineLink, \u0275\u0275sanitizeUrl);
  }
}
function EventDetailComponent_div_4_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3", 22);
    \u0275\u0275text(2, "Full description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.event.fullDescription);
  }
}
function EventDetailComponent_div_4_div_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r2);
  }
}
function EventDetailComponent_div_4_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275template(1, EventDetailComponent_div_4_div_35_span_1_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.event.tags);
  }
}
function EventDetailComponent_div_4_div_36_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.event.organizerName);
  }
}
function EventDetailComponent_div_4_div_36_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 42)(1, "a", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + ctx_r0.event.organizerEmail, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.event.organizerEmail);
  }
}
function EventDetailComponent_div_4_div_36_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.event.organizerPhone);
  }
}
function EventDetailComponent_div_4_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "h3", 39);
    \u0275\u0275text(2, "Organizer");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, EventDetailComponent_div_4_div_36_p_3_Template, 2, 1, "p", 40)(4, EventDetailComponent_div_4_div_36_p_4_Template, 3, 2, "p", 41)(5, EventDetailComponent_div_4_div_36_p_5_Template, 2, 1, "p", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.event.organizerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.organizerEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.organizerPhone);
  }
}
function EventDetailComponent_div_4_div_40_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 51);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 52)(7, "span", 53);
    \u0275\u0275text(8, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 54);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ticket_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ticket_r3.name || ticket_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getTicketArchiveLabel(ticket_r3));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ticket_r3.price === 0 ? "Complementary" : "\u20B9" + \u0275\u0275pipeBind2(11, 3, ticket_r3.price, "1.0-0"));
  }
}
function EventDetailComponent_div_4_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "label", 45);
    \u0275\u0275text(2, "Ticket tiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275template(4, EventDetailComponent_div_4_div_40_div_4_Template, 12, 6, "div", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.getTicketTypes());
  }
}
function EventDetailComponent_div_4_div_41_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 58);
    \u0275\u0275text(2, "Member:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(4, 1, ctx_r0.event.memberPrice, "1.0-0"), "");
  }
}
function EventDetailComponent_div_4_div_41_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "span", 58);
    \u0275\u0275text(2, "Non-member:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(4, 1, ctx_r0.event.nonMemberPrice, "1.0-0"), "");
  }
}
function EventDetailComponent_div_4_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "p", 56);
    \u0275\u0275text(2, "Pricing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 57);
    \u0275\u0275template(6, EventDetailComponent_div_4_div_41_span_6_Template, 5, 4, "span", 31)(7, EventDetailComponent_div_4_div_41_span_7_Template, 5, 4, "span", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.event.pricingType || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.event.memberPrice != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.nonMemberPrice != null);
  }
}
function EventDetailComponent_div_4_ng_container_42_div_1_button_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "span", 53);
    \u0275\u0275text(2, "Quantity Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 80);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ticket_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ticket_r6.availableQuantity);
  }
}
function EventDetailComponent_div_4_ng_container_42_div_1_button_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "span", 53);
    \u0275\u0275text(2, "Ends On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 80);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.event.earlyBirdEndDate, "dd MMM yyyy"));
  }
}
function EventDetailComponent_div_4_ng_container_42_div_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function EventDetailComponent_div_4_ng_container_42_div_1_button_4_Template_button_click_0_listener() {
      const ticket_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectTicket(ticket_r6));
    });
    \u0275\u0275elementStart(1, "div", 49)(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 52)(7, "span", 53);
    \u0275\u0275text(8, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 54);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, EventDetailComponent_div_4_ng_container_42_div_1_button_4_div_12_Template, 5, 1, "div", 78)(13, EventDetailComponent_div_4_ng_container_42_div_1_button_4_div_13_Template, 6, 4, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ticket_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(10, _c0, ctx_r0.selectedTicketTypeId === ticket_r6.id, ctx_r0.selectedTicketTypeId !== ticket_r6.id && (ctx_r0.getTicketStatus(ticket_r6) === "Sold out" || ctx_r0.getTicketStatus(ticket_r6) === "Not eligible"), ctx_r0.selectedTicketTypeId !== ticket_r6.id && ctx_r0.getTicketStatus(ticket_r6) !== "Sold out" && ctx_r0.getTicketStatus(ticket_r6) !== "Not eligible"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ticket_r6.name || ticket_r6.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(14, _c1, ctx_r0.getTicketStatus(ticket_r6) === "Available", ctx_r0.getTicketStatus(ticket_r6) === "Few left", ctx_r0.getTicketStatus(ticket_r6) === "Sold out" || ctx_r0.getTicketStatus(ticket_r6) === "Closed", ctx_r0.getTicketStatus(ticket_r6) === "Not eligible"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTicketStatus(ticket_r6), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ticket_r6.price === 0 ? "Complementary" : "\u20B9" + \u0275\u0275pipeBind2(11, 7, ticket_r6.price, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ticket_r6.availableQuantity != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ticket_r6.type === "EARLY_BIRD" && (ctx_r0.event == null ? null : ctx_r0.event.earlyBirdEndDate));
  }
}
function EventDetailComponent_div_4_ng_container_42_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span");
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSelectedTicketReason(), " ");
  }
}
function EventDetailComponent_div_4_ng_container_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "label", 45);
    \u0275\u0275text(2, "Available Ticket Tiers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275template(4, EventDetailComponent_div_4_ng_container_42_div_1_button_4_Template, 14, 19, "button", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EventDetailComponent_div_4_ng_container_42_div_1_div_5_Template, 4, 1, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.getTicketTypes());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getSelectedTicketReason());
  }
}
function EventDetailComponent_div_4_ng_container_42_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 82);
  }
}
function EventDetailComponent_div_4_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EventDetailComponent_div_4_ng_container_42_div_1_Template, 6, 2, "div", 29);
    \u0275\u0275elementStart(2, "div", 59)(3, "div", 60)(4, "label", 61);
    \u0275\u0275text(5, "Unit Investment (Base)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 62);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 63)(9, "label", 64);
    \u0275\u0275text(10, "Magnitude (Quantity)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 65)(12, "button", 66);
    \u0275\u0275listener("click", function EventDetailComponent_div_4_ng_container_42_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.decreaseQuantity());
    });
    \u0275\u0275text(13, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function EventDetailComponent_div_4_ng_container_42_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.quantity, $event) || (ctx_r0.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function EventDetailComponent_div_4_ng_container_42_Template_input_change_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.validateQuantity());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 66);
    \u0275\u0275listener("click", function EventDetailComponent_div_4_ng_container_42_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.increaseQuantity());
    });
    \u0275\u0275text(16, "+");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 68)(18, "div", 69)(19, "span", 70);
    \u0275\u0275text(20, "Committing Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 71);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 72);
    \u0275\u0275listener("click", function EventDetailComponent_div_4_ng_container_42_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onRegister());
    });
    \u0275\u0275template(24, EventDetailComponent_div_4_ng_container_42_span_24_Template, 1, 0, "span", 73);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getTicketTypes().length);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.getEventCost());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.quantity <= 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.quantity);
    \u0275\u0275property("max", ctx_r0.getMaxQuantity());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.quantity >= ctx_r0.getMaxQuantity());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.getTotalPrice());
    \u0275\u0275advance();
    \u0275\u0275classProp("btn-disabled", ctx_r0.isUserRegistered());
    \u0275\u0275property("disabled", ctx_r0.isRegistering || ctx_r0.isUserRegistered() || !ctx_r0.canProceedRegistration() || ctx_r0.isEventClosed());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isRegistering);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getRegisterButtonText(), " ");
  }
}
function EventDetailComponent_div_4_div_44_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 90);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (s_r7.name || "S")[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r7.title || "Featured Speaker");
  }
}
function EventDetailComponent_div_4_div_44_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EventDetailComponent_div_4_div_44_ng_container_4_div_1_Template, 8, 3, "div", 87);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.event.speakers);
  }
}
function EventDetailComponent_div_4_div_44_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 90);
    \u0275\u0275text(7, "Featured Speaker");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.event.speaker || "S")[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.event.speaker || "Industry Expert");
  }
}
function EventDetailComponent_div_4_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "h3", 84);
    \u0275\u0275text(2, "Voice & Authority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 85);
    \u0275\u0275template(4, EventDetailComponent_div_4_div_44_ng_container_4_Template, 2, 1, "ng-container", 86)(5, EventDetailComponent_div_4_div_44_ng_template_5_Template, 8, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const singleSpeaker_r8 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.event == null ? null : ctx_r0.event.speakers == null ? null : ctx_r0.event.speakers.length)("ngIfElse", singleSpeaker_r8);
  }
}
function EventDetailComponent_div_4_div_45_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 96)(4, "p", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatScheduleTime(item_r9.startTime), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.title || "Session");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.location || "Main Venue");
  }
}
function EventDetailComponent_div_4_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "h3", 84);
    \u0275\u0275text(2, "Agenda Sequence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 85);
    \u0275\u0275template(4, EventDetailComponent_div_4_div_45_div_4_Template, 8, 3, "div", 93);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.event.schedules);
  }
}
function EventDetailComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275element(2, "img", 10)(3, "div", 11);
    \u0275\u0275elementStart(4, "div", 12)(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 16);
    \u0275\u0275template(11, EventDetailComponent_div_4_div_11_Template, 5, 1, "div", 17);
    \u0275\u0275elementStart(12, "div", 18)(13, "span", 19);
    \u0275\u0275text(14, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 20);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, EventDetailComponent_div_4_div_17_Template, 5, 1, "div", 17);
    \u0275\u0275elementStart(18, "div", 18)(19, "span", 19);
    \u0275\u0275text(20, "\u{1F4CD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 20);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, EventDetailComponent_div_4_div_23_Template, 5, 1, "div", 17);
    \u0275\u0275elementStart(24, "div", 18)(25, "span", 19);
    \u0275\u0275text(26, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 20);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 21)(30, "h3", 22);
    \u0275\u0275text(31, "Executive Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 23);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, EventDetailComponent_div_4_div_34_Template, 5, 1, "div", 24)(35, EventDetailComponent_div_4_div_35_Template, 2, 1, "div", 25)(36, EventDetailComponent_div_4_div_36_Template, 6, 3, "div", 26);
    \u0275\u0275elementStart(37, "div", 27)(38, "span", 28);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, EventDetailComponent_div_4_div_40_Template, 5, 1, "div", 29)(41, EventDetailComponent_div_4_div_41_Template, 8, 3, "div", 30)(42, EventDetailComponent_div_4_ng_container_42_Template, 26, 12, "ng-container", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 32);
    \u0275\u0275template(44, EventDetailComponent_div_4_div_44_Template, 7, 2, "div", 33)(45, EventDetailComponent_div_4_div_45_Template, 5, 1, "div", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.event.image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.event.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.event.category || "Event", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.event.title);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.event.type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatEventDateTime(ctx_r0.event));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.formatEventDateTime(ctx_r0.event, false) !== "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.event.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.onlineLink);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", ctx_r0.event.totalRegisteredSeats !== void 0 ? ctx_r0.event.totalRegisteredSeats : ctx_r0.event.registeredCount || 0, " / ", ctx_r0.event.capacity || ctx_r0.event.maxCapacity || "\u221E", " Registered ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.event.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.fullDescription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.tags == null ? null : ctx_r0.event.tags.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.organizerName || ctx_r0.event.organizerEmail || ctx_r0.event.organizerPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isArchiveContext ? "Pricing & tiers (archive)" : "Financial Valuation");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isArchiveContext && ctx_r0.getTicketTypes().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isArchiveContext && !ctx_r0.getTicketTypes().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isArchiveContext);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.event == null ? null : ctx_r0.event.speakers == null ? null : ctx_r0.event.speakers.length) || ctx_r0.event.speaker);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event == null ? null : ctx_r0.event.schedules == null ? null : ctx_r0.event.schedules.length);
  }
}
function EventDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "p", 99);
    \u0275\u0275text(2, "Event could not be found or has been removed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 100);
    \u0275\u0275listener("click", function EventDetailComponent_div_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onNavigate("EVENTS"));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.isArchiveContext ? "Back to Old Events" : "Back to Directory");
  }
}
var EventDetailComponent = class _EventDetailComponent {
  constructor(authService, apiService, route, router, toastService, modalService) {
    this.authService = authService;
    this.apiService = apiService;
    this.route = route;
    this.router = router;
    this.toastService = toastService;
    this.modalService = modalService;
    this.event = null;
    this.navigate = new EventEmitter();
    this.register = new EventEmitter();
    this.openPayment = new EventEmitter();
    this.currentUser = null;
    this.isLoading = false;
    this.isRegistering = false;
    this.errorMessage = "";
    this.quantity = 1;
    this.selectedTicketTypeId = null;
    this.ticketTypes = [];
    this.isLoadingTickets = false;
    this.isArchiveContext = false;
    this.currentUser = this.authService.getCurrentUser();
  }
  ngOnInit() {
    combineLatest([this.route.params, this.route.data]).subscribe(([params, data]) => {
      this.isArchiveContext = !!data["eventArchive"];
      const id = params["id"];
      if (!id)
        return;
      this.loadEventDetails(String(id));
    });
  }
  formatEventKindLabel(raw) {
    if (!raw)
      return "";
    return String(raw).replace(/_/g, " ");
  }
  /** Archive views only show informational ticket status */
  getTicketArchiveLabel(ticket) {
    if (!ticket)
      return "";
    return this.isTicketAvailable(ticket) ? "Recorded tier" : "Sold out (at time of event)";
  }
  resolveEventImageUrl(rawImage) {
    if (!rawImage) {
      return null;
    }
    const image = String(rawImage).trim();
    if (!image || image === "assets/default-event.png") {
      return null;
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
  loadEventDetails(id) {
    this.isLoading = true;
    this.apiService.getEventById(Number(id)).subscribe({
      next: (data) => {
        let image = this.resolveEventImageUrl(data.imageUrl || data.image);
        if (!image && data.poster) {
          image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${data.id}`;
        }
        if (!image) {
          image = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop";
        }
        this.event = __spreadProps(__spreadValues({}, data), {
          title: data.name || data.title,
          date: data.startDate || data.date,
          location: data.location || data.venue,
          image
        });
        const archive = this.route.snapshot.data["eventArchive"] === true;
        this.ticketTypes = Array.isArray(data.ticketTypes) ? data.ticketTypes : [];
        this.isLoading = false;
        if (!archive) {
          this.loadTicketTypes();
        } else {
          this.isLoadingTickets = false;
        }
      },
      error: (err) => {
        console.error("Error fetching event:", err);
        this.isLoading = false;
      }
    });
  }
  loadTicketTypes() {
    if (!this.event || !this.event.id)
      return;
    this.isLoadingTickets = true;
    this.apiService.getEventById(this.event.id).subscribe({
      next: (data) => {
        this.ticketTypes = data.ticketTypes || [];
        this.initializeTicketSelection();
        this.isLoadingTickets = false;
      },
      error: (err) => {
        console.error("Error loading ticket types:", err);
        this.isLoadingTickets = false;
      }
    });
  }
  initializeTicketSelection() {
    const tickets = this.getTicketTypes();
    if (!tickets.length) {
      this.selectedTicketTypeId = null;
      return;
    }
    if (this.currentUser) {
      const preferred = tickets.find((t) => this.isTicketEligible(t) && this.isTicketAvailable(t));
      this.selectedTicketTypeId = preferred?.id ?? tickets[0].id;
      return;
    }
    const firstAvailable = tickets.find((t) => this.isTicketAvailable(t));
    this.selectedTicketTypeId = firstAvailable?.id ?? tickets[0].id;
  }
  getTicketTypes() {
    if (!this.event)
      return [];
    const list = Array.isArray(this.ticketTypes) ? this.ticketTypes : [];
    return list.filter((t) => t && t.id != null).map((t) => __spreadProps(__spreadValues({}, t), {
      type: String(t.type || "").toUpperCase(),
      price: Number(t.price || 0),
      availableQuantity: t.availableQuantity != null ? Number(t.availableQuantity) : null
    }));
  }
  selectTicket(ticket) {
    if (this.isArchiveContext || !ticket)
      return;
    this.selectedTicketTypeId = ticket.id;
    this.quantity = 1;
    this.validateQuantity();
  }
  isTicketAvailable(ticket) {
    if (!ticket)
      return false;
    return ticket.availableQuantity == null || ticket.availableQuantity > 0;
  }
  isEarlyBirdOpen() {
    if (!this.event?.earlyBirdEndDate)
      return true;
    const now = /* @__PURE__ */ new Date();
    const end = new Date(this.event.earlyBirdEndDate);
    end.setHours(23, 59, 59, 999);
    return now <= end;
  }
  isTicketEligible(ticket) {
    if (!ticket)
      return false;
    const typeStr = String(ticket.type || "").toUpperCase();
    const priceNum = Number(ticket.price ?? 0);
    if (!typeStr && priceNum === 0)
      return true;
    if (!this.currentUser)
      return false;
    const isAdmin = this.currentUser.role === "admin" || this.currentUser.type === "ADMIN";
    switch (typeStr) {
      case "VIP":
        return isAdmin || this.getActivePlanLevel() >= 3;
      case "MEMBER":
      case "FREE_MEMBER":
        return isAdmin || this.getActivePlanLevel() >= 2;
      case "NON_MEMBER":
        return isAdmin || this.getActivePlanLevel() < 2;
      case "EARLY_BIRD":
        return this.isEarlyBirdOpen();
      default:
        return priceNum === 0 || true;
    }
  }
  getTicketStatus(ticket) {
    if (!this.isTicketAvailable(ticket))
      return "Sold out";
    if (ticket.type === "EARLY_BIRD" && !this.isEarlyBirdOpen())
      return "Closed";
    if (!this.isTicketEligible(ticket))
      return "Not eligible";
    if (ticket.availableQuantity != null && ticket.availableQuantity <= 10)
      return "Few left";
    return "Available";
  }
  getActivePlanLevel() {
    if (!this.currentUser)
      return 0;
    const isAdmin = this.currentUser.role === "admin" || this.currentUser.type === "ADMIN";
    if (isAdmin)
      return 999;
    if (!this.currentUser.currentPlanId) {
      return 0;
    }
    if (this.currentUser.planExpiryDate) {
      const expiry = new Date(this.currentUser.planExpiryDate);
      if (expiry < new Date((/* @__PURE__ */ new Date()).toDateString())) {
        return 0;
      }
    }
    return this.currentUser.currentPlanLevel || 0;
  }
  getSelectedTicket() {
    const list = this.getTicketTypes();
    if (!list.length)
      return null;
    return list.find((t) => t.id === this.selectedTicketTypeId) || list[0];
  }
  getSelectedTicketReason() {
    const ticket = this.getSelectedTicket();
    if (!ticket)
      return "Please select a ticket type.";
    if (!this.currentUser)
      return "Please login to continue.";
    if (!this.isTicketAvailable(ticket))
      return "Selected ticket is sold out.";
    if (ticket.type === "EARLY_BIRD" && !this.isEarlyBirdOpen())
      return "Early bird window is closed.";
    if (!this.isTicketEligible(ticket)) {
      if (ticket.type === "MEMBER" || ticket.type === "FREE_MEMBER")
        return "This is a member-only ticket.";
      if (ticket.type === "NON_MEMBER")
        return "This ticket is for non-members only.";
      if (ticket.type === "VIP")
        return "VIP ticket is restricted.";
      return "You are not eligible for this ticket.";
    }
    return "";
  }
  increaseQuantity() {
    if (this.quantity < this.getMaxQuantity()) {
      this.quantity++;
    }
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  validateQuantity() {
    const max = this.getMaxQuantity();
    if (this.quantity < 1)
      this.quantity = 1;
    if (this.quantity > max)
      this.quantity = max;
  }
  getMaxQuantity() {
    if (!this.event)
      return 1;
    const ticket = this.getSelectedTicket();
    const ticketRemaining = ticket?.availableQuantity != null ? Number(ticket.availableQuantity) : null;
    const capacity = this.event.capacity || this.event.maxCapacity;
    const registeredSeats = this.event.totalRegisteredSeats !== void 0 ? this.event.totalRegisteredSeats : this.event.registeredCount || 0;
    const capacityRemaining = capacity ? Math.max(0, capacity - registeredSeats) : null;
    if (ticketRemaining != null && capacityRemaining != null)
      return Math.max(1, Math.min(ticketRemaining, capacityRemaining));
    if (ticketRemaining != null)
      return Math.max(1, ticketRemaining);
    if (capacityRemaining != null)
      return Math.max(1, capacityRemaining);
    return 10;
  }
  getEventCost() {
    const ticket = this.getSelectedTicket();
    if (ticket) {
      return ticket.price === 0 ? "Complementary" : `\u20B9${ticket.price.toLocaleString("en-IN")}`;
    }
    return "TBA";
  }
  getTotalPrice() {
    const ticket = this.getSelectedTicket();
    if (ticket) {
      const total = ticket.price * this.quantity;
      return total === 0 ? "Complementary" : `\u20B9${total.toLocaleString("en-IN")}`;
    }
    return "TBA";
  }
  isSelectedTicketPayable() {
    const t = this.getSelectedTicket();
    if (!t)
      return false;
    return this.isTicketAvailable(t) && this.isTicketEligible(t);
  }
  canProceedRegistration() {
    if (!this.currentUser)
      return true;
    return this.isSelectedTicketPayable();
  }
  isUserRegistered() {
    if (!this.currentUser || !this.event)
      return false;
    return this.event.isRegistered || this.event.attendees?.some((a) => a.email === this.currentUser?.email) || false;
  }
  getRegisterButtonText() {
    if (this.isRegistering)
      return "Processing Commitment...";
    if (this.isEventClosed())
      return "Event Concluded";
    if (this.isUserRegistered())
      return "Registration Secured";
    if (!this.currentUser)
      return "Login to Register";
    if (!this.isSelectedTicketPayable())
      return "Ticket Unavailable";
    return "Commit to Attendance";
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
  onNavigate(view) {
    if (view === "EVENTS") {
      const archive = this.route.snapshot.data["eventArchive"] === true;
      this.router.navigate([archive ? "/old-events" : "/events"]);
    } else {
      this.navigate.emit(view);
    }
  }
  onRegister() {
    if (!this.event)
      return;
    if (!this.currentUser) {
      this.toastService.info("Please login to register for events");
      this.modalService.openAuth("LOGIN");
      return;
    }
    if (this.isUserRegistered())
      return;
    const ticket = this.getSelectedTicket();
    if (!ticket) {
      this.toastService.error("Please select a ticket type");
      return;
    }
    if (!this.isTicketEligible(ticket)) {
      this.toastService.error(this.getSelectedTicketReason());
      return;
    }
    if (ticket.price > 0) {
      this.modalService.openPayment({
        event: this.event,
        quantity: this.quantity,
        ticketTypeId: ticket.id,
        selectedTicketType: ticket,
        amount: ticket.price * this.quantity
      });
      return;
    }
    this.isRegistering = true;
    this.apiService.registerForEvent(this.event.id, {
      quantity: this.quantity,
      ticketTypeId: ticket.id
    }).subscribe({
      next: () => {
        this.isRegistering = false;
        this.toastService.success("Successfully registered for the event!");
        this.event.isRegistered = true;
        this.loadEventDetails(this.event.id.toString());
      },
      error: (err) => {
        this.isRegistering = false;
        console.error("Registration failed:", err);
        this.toastService.error(err.error?.message || "Registration failed. Please try again.");
      }
    });
  }
  isEventPaid() {
    if (!this.event)
      return false;
    const pricingType = this.event.pricingType || this.event.pricing?.type;
    if (pricingType === "PAID" || pricingType === "DISCOUNTED")
      return true;
    const price = this.currentUser?.type === "PREMIUM" ? this.event.memberPrice || this.event.pricing?.memberPrice || this.event.price : this.event.nonMemberPrice || this.event.pricing?.nonMemberPrice || this.event.guestPrice;
    return Number(price) > 0;
  }
  isEventPaidForUser() {
    return this.isEventPaid();
  }
  static {
    this.\u0275fac = function EventDetailComponent_Factory(t) {
      return new (t || _EventDetailComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(AppModalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailComponent, selectors: [["app-event-detail"]], inputs: { event: "event" }, outputs: { navigate: "navigate", register: "register", openPayment: "openPayment" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 4, consts: [["singleSpeaker", ""], [1, "max-w-4xl", "mx-auto", "px-4", "py-8", "w-full"], [1, "mb-4", "text-blue-600", 3, "click"], ["class", "flex justify-center py-20", 4, "ngIf"], ["class", "bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in", 4, "ngIf"], ["class", "text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm", 4, "ngIf"], [1, "flex", "justify-center", "py-20"], [1, "w-12", "h-12", "border-4", "border-blue-100", "border-t-blue-600", "rounded-full", "animate-spin"], [1, "bg-white", "rounded-2xl", "shadow-xl", "overflow-hidden", "animate-fade-in"], [1, "w-full", "h-[400px]", "relative", "overflow-hidden", "bg-slate-100"], [1, "w-full", "h-full", "object-cover", 3, "src", "alt"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/60", "to-transparent"], [1, "absolute", "bottom-6", "left-8"], [1, "px-3", "py-1", "bg-blue-600", "text-white", "text-[10px]", "font-black", "uppercase", "tracking-widest", "rounded-lg", "mb-2", "inline-block"], [1, "text-4xl", "font-black", "text-white", "tracking-tight"], [1, "p-8"], [1, "flex", "flex-wrap", "gap-4", "mb-8", "text-sm", "text-slate-500", "bg-slate-50", "p-4", "rounded-2xl", "border", "border-slate-100"], ["class", "flex items-center gap-2", 4, "ngIf"], [1, "flex", "items-center", "gap-2"], [1, "text-indigo-600"], [1, "font-bold", "text-slate-900"], [1, "prose", "max-w-none", "mb-12"], [1, "text-xs", "font-black", "text-slate-400", "uppercase", "tracking-widest", "mb-4"], [1, "text-slate-600", "leading-relaxed", "text-lg", "whitespace-pre-line"], ["class", "prose max-w-none mb-12", 4, "ngIf"], ["class", "flex flex-wrap gap-2 mb-12", 4, "ngIf"], ["class", "mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-100", 4, "ngIf"], [1, "content-group", "border-indigo-100", "bg-indigo-50/30", "mb-12"], [1, "group-title", "text-indigo-400"], ["class", "mb-6", 4, "ngIf"], ["class", "mb-6 rounded-2xl border border-indigo-100 bg-white p-5 text-sm text-slate-700", 4, "ngIf"], [4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-12"], ["class", "space-y-6", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "font-bold", "text-indigo-600", "hover:underline", 3, "href"], [1, "flex", "flex-wrap", "gap-2", "mb-12"], ["class", "px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100", 4, "ngFor", "ngForOf"], [1, "px-3", "py-1.5", "rounded-full", "bg-indigo-50", "text-indigo-700", "text-xs", "font-bold", "border", "border-indigo-100"], [1, "mb-12", "p-6", "bg-slate-50", "rounded-2xl", "border", "border-slate-100"], [1, "text-xs", "font-black", "text-slate-400", "uppercase", "tracking-widest", "mb-3"], ["class", "font-bold text-slate-900", 4, "ngIf"], ["class", "text-slate-600 mt-1", 4, "ngIf"], [1, "text-slate-600", "mt-1"], [1, "text-indigo-600", "font-semibold", 3, "href"], [1, "mb-6"], [1, "text-[10px]", "font-black", "text-indigo-300", "uppercase", "mb-3", "block"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-3"], ["class", "text-left px-4 py-3 rounded-2xl border-2 border-slate-100 bg-white shadow-sm", 4, "ngFor", "ngForOf"], [1, "text-left", "px-4", "py-3", "rounded-2xl", "border-2", "border-slate-100", "bg-white", "shadow-sm"], [1, "flex", "items-center", "justify-between", "gap-2"], [1, "text-xs", "font-black", "text-slate-900"], [1, "text-[10px]", "font-black", "uppercase", "text-slate-500"], [1, "flex", "items-center", "justify-between", "mt-2"], [1, "text-[10px]", "font-black", "uppercase", "text-slate-400"], [1, "text-sm", "font-black", "text-indigo-600"], [1, "mb-6", "rounded-2xl", "border", "border-indigo-100", "bg-white", "p-5", "text-sm", "text-slate-700"], [1, "text-[10px]", "font-black", "uppercase", "text-indigo-400", "mb-2"], [1, "mt-3", "grid", "grid-cols-1", "sm:grid-cols-2", "gap-2"], [1, "text-slate-500"], [1, "flex", "flex-col", "md:flex-row", "items-end", "justify-between", "gap-6", "pt-6", "border-t", "border-indigo-100"], [1, "w-full", "md:w-auto"], [1, "text-[10px]", "font-black", "text-indigo-300", "uppercase", "mb-2", "block"], [1, "value-large", "text-3xl", "font-black", "text-indigo-600", "tracking-tighter"], [1, "flex", "flex-col", "items-end", "gap-2", "w-full", "md:w-auto"], [1, "text-[10px]", "font-black", "text-indigo-300", "uppercase"], [1, "flex", "items-center", "gap-2", "bg-white", "p-2", "rounded-2xl", "shadow-sm", "border", "border-indigo-100", "w-full", "md:w-auto", "justify-between"], [1, "w-10", "h-10", "rounded-xl", "text-indigo-600", "hover:bg-indigo-50", "disabled:opacity-20", "font-black", "text-lg", "transition-colors", 3, "click", "disabled"], ["type", "number", "min", "1", 1, "w-12", "text-center", "font-black", "text-base", "text-slate-900", "focus:outline-none", "bg-transparent", 3, "ngModelChange", "change", "ngModel", "max"], [1, "mt-8", "pt-6", "border-t-2", "border-dashed", "border-indigo-100", "flex", "flex-col", "md:flex-row", "justify-between", "items-center", "gap-6"], [1, "flex", "flex-col"], [1, "text-[10px]", "font-black", "text-indigo-400", "uppercase", "tracking-widest"], [1, "text-3xl", "font-black", "text-indigo-600", "tracking-tighter"], [1, "w-full", "md:w-auto", "px-12", "py-5", "bg-indigo-600", "text-white", "rounded-2xl", "font-black", "uppercase", "tracking-widest", "shadow-xl", "shadow-indigo-200", "hover:bg-indigo-700", "hover:-translate-y-1", "transition-all", "active:scale-95", "disabled:bg-slate-200", "disabled:text-slate-400", "disabled:shadow-none", "disabled:transform-none", 3, "click", "disabled"], ["class", "animate-spin h-5 w-5 border-2 border-white/20 border-t-white rounded-full mr-2 inline-block", 4, "ngIf"], ["type", "button", "class", "text-left px-4 py-3 rounded-2xl border-2 transition-all", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "mt-3 p-3 bg-amber-50 rounded-xl border border-amber-100 text-[11px] font-bold text-amber-600 flex items-center gap-2", 4, "ngIf"], ["type", "button", 1, "text-left", "px-4", "py-3", "rounded-2xl", "border-2", "transition-all", 3, "click", "ngClass"], [1, "text-[10px]", "font-black", "uppercase", 3, "ngClass"], ["class", "flex items-center justify-between mt-1", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "mt-1"], [1, "text-[10px]", "font-bold", "text-slate-400"], [1, "mt-3", "p-3", "bg-amber-50", "rounded-xl", "border", "border-amber-100", "text-[11px]", "font-bold", "text-amber-600", "flex", "items-center", "gap-2"], [1, "animate-spin", "h-5", "w-5", "border-2", "border-white/20", "border-t-white", "rounded-full", "mr-2", "inline-block"], [1, "space-y-6"], [1, "text-sm", "font-black", "text-slate-400", "uppercase", "tracking-widest"], [1, "space-y-4"], [4, "ngIf", "ngIfElse"], ["class", "flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-4", "p-4", "bg-slate-50", "rounded-2xl", "border", "border-slate-100", "shadow-sm"], [1, "w-12", "h-12", "bg-indigo-600", "text-white", "rounded-xl", "flex", "items-center", "justify-center", "text-xl", "font-bold"], [1, "text-xs", "text-slate-400", "uppercase", "tracking-widest", "font-black"], [1, "flex", "items-center", "gap-4", "p-4", "bg-slate-50", "rounded-2xl", "border", "border-slate-100"], [1, "w-12", "h-12", "bg-indigo-100", "rounded-xl", "flex", "items-center", "justify-center", "text-xl", "font-bold", "text-indigo-600"], ["class", "flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm", 4, "ngFor", "ngForOf"], [1, "flex", "gap-4", "p-4", "bg-slate-50", "rounded-2xl", "border", "border-slate-100", "shadow-sm"], [1, "text-xs", "font-black", "text-indigo-600", "uppercase", "w-20", "pt-1", "border-r", "border-indigo-100", "mr-2"], [1, "flex-1"], [1, "text-xs", "text-slate-400"], [1, "text-center", "py-20", "bg-white", "rounded-2xl", "border", "border-slate-100", "shadow-sm"], [1, "text-slate-500", "font-bold", "mb-4"], [1, "px-6", "py-2", "bg-slate-100", "text-slate-600", "rounded-xl", "font-bold", 3, "click"]], template: function EventDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
        \u0275\u0275listener("click", function EventDetailComponent_Template_button_click_1_listener() {
          return ctx.onNavigate("EVENTS");
        });
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, EventDetailComponent_div_3_Template, 2, 0, "div", 3)(4, EventDetailComponent_div_4_Template, 46, 21, "div", 4)(5, EventDetailComponent_div_5_Template, 5, 1, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\u2190 Back to ", ctx.isArchiveContext ? "Old Events" : "Events", "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.event);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && !ctx.event);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  --modal-primary: #6366f1;\n  --modal-success: #10b981;\n  --modal-danger: #f43f5e;\n}\n.content-group[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 24px;\n  padding: 24px;\n  border: 1px solid #f1f5f9;\n  margin-bottom: 24px;\n}\n.group-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 900;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-bottom: 20px;\n  display: block;\n}\n.value-large[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.btn-pill[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 16px;\n  font-size: 0.875rem;\n  font-weight: 800;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--modal-primary);\n  color: white;\n  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n}\n.btn-disabled[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #94a3b8;\n  cursor: not-allowed;\n}\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=event-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailComponent, { className: "EventDetailComponent", filePath: "src\\app\\pages\\event-detail\\event-detail.component.ts", lineNumber: 19 });
})();
export {
  EventDetailComponent
};
//# sourceMappingURL=chunk-VPDMSCR6.js.map
