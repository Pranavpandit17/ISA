import {
  ConfirmService
} from "./chunk-HJ6C4NPU.js";
import {
  ToastrService
} from "./chunk-KKJ3RDO7.js";
import {
  ApiService,
  CommonModule,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CRF7CKPV.js";

// src/app/pages/event-management/event-management.component.ts
function EventManagementComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.draftEvents.length);
  }
}
function EventManagementComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.publishedEvents.length);
  }
}
function EventManagementComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.oldEvents.length);
  }
}
function EventManagementComponent_div_21_Template(rf, ctx) {
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
function EventManagementComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "p", 18);
    \u0275\u0275text(3, "Processing Inventory...");
    \u0275\u0275elementEnd()();
  }
}
function EventManagementComponent_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, "No draft events in the pipeline.");
    \u0275\u0275elementEnd()();
  }
}
function EventManagementComponent_div_22_div_3_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29)(1, "td")(2, "div", 30);
    \u0275\u0275element(3, "img", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 35);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 36);
    \u0275\u0275text(17, "In Development");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 37)(19, "div", 38)(20, "button", 39);
    \u0275\u0275listener("click", function EventManagementComponent_div_22_div_3_tr_19_Template_button_click_20_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDetailModal(event_r3));
    });
    \u0275\u0275text(21, "Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 40);
    \u0275\u0275listener("click", function EventManagementComponent_div_22_div_3_tr_19_Template_button_click_22_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onEditEvent(event_r3));
    });
    \u0275\u0275text(23, "Modify");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 41);
    \u0275\u0275listener("click", function EventManagementComponent_div_22_div_3_tr_19_Template_button_click_24_listener() {
      const event_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onPublishEvent(event_r3));
    });
    \u0275\u0275text(25, "Go Live");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", event_r3.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r3.name || event_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ref ID: #", event_r3.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r3.type || event_r3.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatEventDateTime(event_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r3.location || event_r3.venue);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
  }
}
function EventManagementComponent_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead", 24)(3, "tr")(4, "th", 25);
    \u0275\u0275text(5, "Poster");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Event Identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Scheduled Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Location / Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 26);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 27);
    \u0275\u0275template(19, EventManagementComponent_div_22_div_3_tr_19_Template, 26, 9, "tr", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r0.draftEvents);
  }
}
function EventManagementComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, EventManagementComponent_div_22_div_1_Template, 4, 0, "div", 13)(2, EventManagementComponent_div_22_div_2_Template, 5, 0, "div", 14)(3, EventManagementComponent_div_22_div_3_Template, 20, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.draftEvents.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.draftEvents.length > 0);
  }
}
function EventManagementComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "p", 18);
    \u0275\u0275text(3, "Gathering Active Events...");
    \u0275\u0275elementEnd()();
  }
}
function EventManagementComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "\u{1F4E1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, "No active events currently live.");
    \u0275\u0275elementEnd()();
  }
}
function EventManagementComponent_div_23_div_3_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29)(1, "td")(2, "div", 30);
    \u0275\u0275element(3, "img", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 42);
    \u0275\u0275text(8, "Visible to Community");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 35);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 43);
    \u0275\u0275text(17, "Published");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 37)(19, "div", 38)(20, "button", 39);
    \u0275\u0275listener("click", function EventManagementComponent_div_23_div_3_tr_19_Template_button_click_20_listener() {
      const event_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDetailModal(event_r5));
    });
    \u0275\u0275text(21, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 40);
    \u0275\u0275listener("click", function EventManagementComponent_div_23_div_3_tr_19_Template_button_click_22_listener() {
      const event_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onEditEvent(event_r5));
    });
    \u0275\u0275text(23, "Refine Details");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", event_r5.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r5.name || event_r5.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(event_r5.type || event_r5.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatEventDateTime(event_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r5.location || event_r5.venue);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
  }
}
function EventManagementComponent_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead", 24)(3, "tr")(4, "th", 25);
    \u0275\u0275text(5, "Poster");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Public Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Classification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Timing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Venue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 26);
    \u0275\u0275text(17, "Administrative");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 27);
    \u0275\u0275template(19, EventManagementComponent_div_23_div_3_tr_19_Template, 24, 7, "tr", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r0.publishedEvents);
  }
}
function EventManagementComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, EventManagementComponent_div_23_div_1_Template, 4, 0, "div", 13)(2, EventManagementComponent_div_23_div_2_Template, 5, 0, "div", 14)(3, EventManagementComponent_div_23_div_3_Template, 20, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.publishedEvents.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.publishedEvents.length > 0);
  }
}
function EventManagementComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "div", 17);
    \u0275\u0275elementStart(2, "p", 18);
    \u0275\u0275text(3, "Unlocking Records...");
    \u0275\u0275elementEnd()();
  }
}
function EventManagementComponent_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "\u{1F3DB}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 21);
    \u0275\u0275text(4, "Archive is currently empty.");
    \u0275\u0275elementEnd()();
  }
}
function EventManagementComponent_div_24_div_3_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 45)(1, "td")(2, "div", 30);
    \u0275\u0275element(3, "img", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 35);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 37)(16, "div", 38)(17, "button", 39);
    \u0275\u0275listener("click", function EventManagementComponent_div_24_div_3_tr_19_Template_button_click_17_listener() {
      const event_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openDetailModal(event_r7));
    });
    \u0275\u0275text(18, "Review Outcome");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", event_r7.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r7.name || event_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r7.type || event_r7.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatEventDateTime(event_r7));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r7.location || event_r7.venue);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", event_r7.status === "CANCELLED" ? "status-cancelled" : "status-completed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r7.status || "COMPLETED");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isLoading);
  }
}
function EventManagementComponent_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 23)(2, "thead", 24)(3, "tr")(4, "th", 25);
    \u0275\u0275text(5, "Poster");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Past Event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Occurred On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Venue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Outcome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 26);
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 27);
    \u0275\u0275template(19, EventManagementComponent_div_24_div_3_tr_19_Template, 19, 8, "tr", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r0.oldEvents);
  }
}
function EventManagementComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, EventManagementComponent_div_24_div_1_Template, 4, 0, "div", 13)(2, EventManagementComponent_div_24_div_2_Template, 5, 0, "div", 14)(3, EventManagementComponent_div_24_div_3_Template, 20, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.oldEvents.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading && ctx_r0.oldEvents.length > 0);
  }
}
var EventManagementComponent = class _EventManagementComponent {
  constructor(apiService, toastr, confirmService) {
    this.apiService = apiService;
    this.toastr = toastr;
    this.confirmService = confirmService;
    this.navigate = new EventEmitter();
    this.activeTab = "DRAFT";
    this.allEvents = [];
    this.draftEvents = [];
    this.publishedEvents = [];
    this.oldEvents = [];
    this.isLoading = false;
    this.errorMessage = "";
    this.openDetail = new EventEmitter();
    this.openEdit = new EventEmitter();
    this.openCreate = new EventEmitter();
  }
  ngOnInit() {
    this.loadEvents();
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
  loadEvents() {
    this.isLoading = true;
    this.errorMessage = "";
    this.apiService.getEvents().subscribe({
      next: (response) => {
        const events = Array.isArray(response) ? response : [];
        this.allEvents = events.map((e) => {
          let image = this.resolveEventImageUrl(e.imageUrl || e.image);
          if (!image && e.poster) {
            image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${e.id}`;
          }
          if (!image) {
            image = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop";
          }
          return __spreadProps(__spreadValues({}, e), { image });
        });
        this.categorizeEvents();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = "Error loading events. Please try again.";
        this.isLoading = false;
        console.error("Error loading events:", error);
      }
    });
  }
  categorizeEvents() {
    const now = /* @__PURE__ */ new Date();
    const hasPastEndDateTime = (event) => {
      if (event.endDate && event.endTime) {
        try {
          let endDateStr = "";
          if (typeof event.endDate === "string") {
            endDateStr = event.endDate.split("T")[0];
          } else {
            const endDate = new Date(event.endDate);
            endDateStr = endDate.toISOString().split("T")[0];
          }
          let endTimeStr = "";
          if (typeof event.endTime === "string") {
            endTimeStr = event.endTime.split(":").slice(0, 2).join(":");
          } else {
            endTimeStr = String(event.endTime);
          }
          if (endDateStr && endTimeStr) {
            const endDateTime = /* @__PURE__ */ new Date(`${endDateStr}T${endTimeStr}`);
            if (!isNaN(endDateTime.getTime())) {
              return endDateTime < now;
            }
          }
        } catch (error) {
          console.error("Error parsing end date/time:", error);
        }
      }
      if (event.endDate) {
        const endDate = new Date(event.endDate);
        endDate.setHours(23, 59, 59, 999);
        return endDate < now;
      }
      if (event.startDate && event.startTime) {
        try {
          let startDateStr = "";
          if (typeof event.startDate === "string") {
            startDateStr = event.startDate.split("T")[0];
          } else {
            const startDate = new Date(event.startDate);
            startDateStr = startDate.toISOString().split("T")[0];
          }
          let startTimeStr = "";
          if (typeof event.startTime === "string") {
            startTimeStr = event.startTime.split(":").slice(0, 2).join(":");
          } else {
            startTimeStr = String(event.startTime);
          }
          if (startDateStr && startTimeStr) {
            const startDateTime = /* @__PURE__ */ new Date(`${startDateStr}T${startTimeStr}`);
            if (!isNaN(startDateTime.getTime())) {
              return startDateTime < now;
            }
          }
        } catch (error) {
          console.error("Error parsing start date/time:", error);
        }
      }
      if (event.startDate) {
        const startDate = new Date(event.startDate);
        startDate.setHours(23, 59, 59, 999);
        return startDate < now;
      }
      return false;
    };
    this.draftEvents = this.allEvents.filter((event) => {
      return event.status === "DRAFT" && !hasPastEndDateTime(event);
    });
    this.publishedEvents = this.allEvents.filter((event) => {
      return event.status === "PUBLISHED" && !hasPastEndDateTime(event);
    });
    this.oldEvents = this.allEvents.filter((event) => {
      if (hasPastEndDateTime(event)) {
        return true;
      }
      if (event.status === "COMPLETED" || event.status === "CANCELLED") {
        return true;
      }
      return false;
    });
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  onCreateEvent() {
    this.openCreate.emit();
  }
  onEditEvent(event) {
    this.openEdit.emit(event);
  }
  openDetailModal(event) {
    if (event && event.id) {
      this.isLoading = true;
      this.apiService.getEventById(event.id).subscribe({
        next: (fullEvent) => {
          let image = this.resolveEventImageUrl(fullEvent.imageUrl || fullEvent.image);
          if (!image && fullEvent.poster) {
            image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${fullEvent.id}`;
          }
          if (!image) {
            image = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop";
          }
          this.openDetail.emit(__spreadProps(__spreadValues({}, fullEvent), { image }));
          this.isLoading = false;
        },
        error: (error) => {
          console.error("Error loading event details:", error);
          this.openDetail.emit(event);
          this.isLoading = false;
        }
      });
    } else {
      this.openDetail.emit(event);
    }
  }
  closeEventModal() {
  }
  closeDetailModal() {
  }
  onEventSaved() {
    this.loadEvents();
  }
  onPublishEvent(event) {
    this.confirmService.confirm({
      title: "Publish Event",
      message: `Are you sure you want to publish "${event.name || event.title}"?`,
      confirmLabel: "Publish",
      cancelLabel: "Cancel"
    }).subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.isLoading = true;
      this.apiService.publishEvent(event.id).subscribe({
        next: () => {
          this.toastr.success("Event published successfully!", "Published");
          this.loadEvents();
          this.closeDetailModal();
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "Error publishing event. Please try again.";
          this.isLoading = false;
          this.toastr.error(this.errorMessage, "Error");
        }
      });
    });
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
      }
    });
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
  static {
    this.\u0275fac = function EventManagementComponent_Factory(t) {
      return new (t || _EventManagementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(ToastrService), \u0275\u0275directiveInject(ConfirmService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventManagementComponent, selectors: [["app-event-management"]], outputs: { navigate: "navigate", openDetail: "openDetail", openEdit: "openEdit", openCreate: "openCreate" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 13, consts: [[1, "management-container"], [1, "page-header"], [1, "title-area"], [1, "btn-add-event", 3, "click"], [1, "text-xl"], [1, "tab-nav"], [1, "tab-btn", 3, "click"], ["class", "tab-badge", 4, "ngIf"], ["class", "mb-8 p-4 bg-rose-50 border-l-4 border-rose-500 text-rose-700 rounded-r-2xl text-sm font-medium animate-pulse", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], [1, "tab-badge"], [1, "mb-8", "p-4", "bg-rose-50", "border-l-4", "border-rose-500", "text-rose-700", "rounded-r-2xl", "text-sm", "font-medium", "animate-pulse"], [1, "table-wrapper"], ["class", "p-20 text-center flex flex-col items-center justify-center gap-4", 4, "ngIf"], ["class", "p-20 text-center", 4, "ngIf"], ["class", "overflow-x-auto", 4, "ngIf"], [1, "p-20", "text-center", "flex", "flex-col", "items-center", "justify-center", "gap-4"], [1, "h-10", "w-10", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin"], [1, "text-xs", "font-black", "text-slate-300", "uppercase", "tracking-widest"], [1, "p-20", "text-center"], [1, "text-5xl", "mb-4", "grayscale", "opacity-20"], [1, "text-sm", "font-bold", "text-slate-400"], [1, "overflow-x-auto"], [1, "w-full"], [1, "text-left", "font-bold", "uppercase", "text-[10px]", "tracking-widest", "text-slate-400"], [1, "w-16"], [1, "text-right"], [1, "divide-y", "divide-slate-50"], ["class", "hover:bg-slate-50/50 transition-colors", 4, "ngFor", "ngForOf"], [1, "hover:bg-slate-50/50", "transition-colors"], [1, "h-10", "w-10", "rounded-lg", "overflow-hidden", "bg-slate-100", "border", "border-slate-200"], [1, "h-full", "w-full", "object-cover", 3, "src"], [1, "font-bold", "text-slate-900", "leading-tight"], [1, "text-[10px]", "text-slate-400", "font-bold", "uppercase", "tracking-tight", "mt-1"], [1, "text-sm", "font-medium", "text-slate-600"], [1, "text-sm", "text-slate-500", "font-medium"], [1, "status-pill", "status-draft"], [1, "event-actions-cell"], [1, "event-actions-row"], ["type", "button", 1, "btn-pill", "btn-details", 3, "click", "disabled"], ["type", "button", 1, "btn-pill", "btn-edit", 3, "click", "disabled"], ["type", "button", 1, "btn-pill", "btn-publish", 3, "click", "disabled"], [1, "text-[10px]", "text-emerald-500", "font-bold", "uppercase", "tracking-tight", "mt-1"], [1, "status-pill", "status-published"], ["class", "hover:bg-slate-50/50 transition-colors grayscale-[0.8] opacity-80", 4, "ngFor", "ngForOf"], [1, "hover:bg-slate-50/50", "transition-colors", "grayscale-[0.8]", "opacity-80"], [1, "font-bold", "text-slate-900"], [1, "status-pill", 3, "ngClass"]], template: function EventManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4, "Event Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Schedule new conferences, webinars, and coordinate community gatherings.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function EventManagementComponent_Template_button_click_7_listener() {
          return ctx.onCreateEvent();
        });
        \u0275\u0275elementStart(8, "span", 4);
        \u0275\u0275text(9, "+");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Add New Event ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "nav", 5)(12, "button", 6);
        \u0275\u0275listener("click", function EventManagementComponent_Template_button_click_12_listener() {
          return ctx.setTab("DRAFT");
        });
        \u0275\u0275text(13, " Drafts ");
        \u0275\u0275template(14, EventManagementComponent_span_14_Template, 2, 1, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 6);
        \u0275\u0275listener("click", function EventManagementComponent_Template_button_click_15_listener() {
          return ctx.setTab("PUBLISHED");
        });
        \u0275\u0275text(16, " Published ");
        \u0275\u0275template(17, EventManagementComponent_span_17_Template, 2, 1, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 6);
        \u0275\u0275listener("click", function EventManagementComponent_Template_button_click_18_listener() {
          return ctx.setTab("OLD");
        });
        \u0275\u0275text(19, " Event Archive ");
        \u0275\u0275template(20, EventManagementComponent_span_20_Template, 2, 1, "span", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, EventManagementComponent_div_21_Template, 2, 1, "div", 8)(22, EventManagementComponent_div_22_Template, 4, 3, "div", 9)(23, EventManagementComponent_div_23_Template, 4, 3, "div", 9)(24, EventManagementComponent_div_24_Template, 4, 3, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275classProp("active", ctx.activeTab === "DRAFT");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.draftEvents.length > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "PUBLISHED");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.publishedEvents.length > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "OLD");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.oldEvents.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "DRAFT");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "PUBLISHED");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "OLD");
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  --event-primary: #6366f1;\n  --event-success: #10b981;\n  --event-draft: #f59e0b;\n  --event-completed: #94a3b8;\n}\n.management-container[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 2.5rem;\n}\n.title-area[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.04em;\n  margin-bottom: 0.5rem;\n}\n.title-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.btn-add-event[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: white;\n  padding: 12px 24px;\n  border-radius: 16px;\n  font-weight: 800;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  cursor: pointer;\n}\n.btn-add-event[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.3);\n}\n.tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  background: #f1f5f9;\n  padding: 6px;\n  border-radius: 24px;\n  max-width: 100%;\n  margin-bottom: 2.5rem;\n  overflow-x: auto;\n  border: 1px solid rgba(226, 232, 240, 0.4);\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.tab-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 18px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #64748b;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: white;\n  color: #1e293b;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--event-primary);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n}\n.tab-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 8px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  background: #e2e8f0;\n  color: #64748b;\n}\n.active[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--event-primary);\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 32px;\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);\n  overflow: hidden;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 900px;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 16px 32px;\n  color: #94a3b8;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-size: 0.65rem;\n  border-bottom: 2px solid #f1f5f9;\n  text-align: left;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n  font-size: 0.9375rem;\n  color: #1e293b;\n  border-bottom: 1px solid #f1f5f9;\n  font-weight: 500;\n  text-align: left;\n  vertical-align: middle;\n}\n.overflow-x-auto[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: #e2e8f0 transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #e2e8f0;\n  border-radius: 20px;\n  border: 2px solid transparent;\n}\n.overflow-x-auto[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #cbd5e1;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.status-pill[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: 0.65rem;\n  font-weight: 900;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  white-space: nowrap !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n}\n.status-draft[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-published[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.event-actions-cell[_ngcontent-%COMP%] {\n  text-align: right;\n  vertical-align: middle;\n}\n.event-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-pill[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.btn-details[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.btn-details[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  transform: translateY(-1px);\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: #6366f1;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #e0e7ff;\n  transform: translateY(-1px);\n}\n.btn-publish[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.btn-publish[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: translateY(-1px);\n}\n.management-container[_ngcontent-%COMP%] {\n  animation: none !important;\n}\n.management-container[_ngcontent-%COMP%]   .animate-pulse[_ngcontent-%COMP%], .management-container[_ngcontent-%COMP%]   .animate-spin[_ngcontent-%COMP%] {\n  animation-duration: 1.8s;\n}\n/*# sourceMappingURL=event-management.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventManagementComponent, { className: "EventManagementComponent", filePath: "src\\app\\pages\\event-management\\event-management.component.ts", lineNumber: 17 });
})();

export {
  EventManagementComponent
};
//# sourceMappingURL=chunk-O6RF27FZ.js.map
