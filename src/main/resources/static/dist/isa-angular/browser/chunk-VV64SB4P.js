import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-EMPR7R4G.js";
import {
  ApiService,
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IAKTGX76.js";

// src/app/pages/event-create/event-create.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function EventCreateComponent_div_0_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
  if (rf & 2) {
    const step_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("filled", ctx_r1.currentStep > step_r3);
  }
}
function EventCreateComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EventCreateComponent_div_0_div_8_div_5_Template, 1, 2, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.currentStep === step_r3)("completed", ctx_r1.currentStep > step_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentStep > step_r3 ? "\u2713" : step_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", step_r3 === 1 ? "Archetype" : step_r3 === 2 ? "Chronology" : step_r3 === 3 ? "Geospatial" : step_r3 === 4 ? "Fiscal" : "Agenda", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r4 < 4);
  }
}
function EventCreateComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ERROR // ", ctx_r1.errorMessage, " ");
  }
}
function EventCreateComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, " ARCHIVE SYNC COMPLETED ");
    \u0275\u0275elementEnd();
  }
}
function EventCreateComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "h2", 25);
    \u0275\u0275text(2, "Identity & Archetype");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "div", 27)(5, "label", 28);
    \u0275\u0275text(6, "Public Identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_12_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.name, $event) || (ctx_r1.eventData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 27)(9, "label", 28);
    \u0275\u0275text(10, "Category Classification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_12_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.type, $event) || (ctx_r1.eventData.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 31);
    \u0275\u0275text(13, "Conference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 32);
    \u0275\u0275text(15, "Workshop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 33);
    \u0275\u0275text(17, "Networking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 34);
    \u0275\u0275text(19, "Seminar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 35);
    \u0275\u0275text(21, "Webinar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 36);
    \u0275\u0275text(23, "Training");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 37);
    \u0275\u0275text(25, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 38)(27, "label", 28);
    \u0275\u0275text(28, "Core Synopsis (Short)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_12_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.description, $event) || (ctx_r1.eventData.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 38)(31, "label", 28);
    \u0275\u0275text(32, "Promotional Visual (URL)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_12_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.imageUrl, $event) || (ctx_r1.eventData.imageUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 38)(35, "label", 28);
    \u0275\u0275text(36, "Extended Briefing (Full Narrative)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "textarea", 41);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_12_Template_textarea_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.fullDescription, $event) || (ctx_r1.eventData.fullDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.type);
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.imageUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.fullDescription);
  }
}
function EventCreateComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "h2", 25);
    \u0275\u0275text(2, "Chronological Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "div", 24)(5, "label", 43);
    \u0275\u0275text(6, "Origin Segment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 27)(8, "label", 28);
    \u0275\u0275text(9, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_13_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.startDate, $event) || (ctx_r1.eventData.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function EventCreateComponent_div_0_div_13_Template_input_change_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validateDateTimes());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 27)(12, "label", 28);
    \u0275\u0275text(13, "Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_13_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.startTime, $event) || (ctx_r1.eventData.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function EventCreateComponent_div_0_div_13_Template_input_change_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validateDateTimes());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 24)(16, "label", 43);
    \u0275\u0275text(17, "Termination Segment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 27)(19, "label", 28);
    \u0275\u0275text(20, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_13_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.endDate, $event) || (ctx_r1.eventData.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function EventCreateComponent_div_0_div_13_Template_input_change_21_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validateDateTimes());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 27)(23, "label", 28);
    \u0275\u0275text(24, "End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_13_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.endTime, $event) || (ctx_r1.eventData.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function EventCreateComponent_div_0_div_13_Template_input_change_25_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validateDateTimes());
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.startDate);
    \u0275\u0275property("min", ctx_r1.getMinDate());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.startTime);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.endDate);
    \u0275\u0275property("min", ctx_r1.getMinEndDate());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.endTime);
  }
}
function EventCreateComponent_div_0_div_14_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "label", 28);
    \u0275\u0275text(2, "Online Communication Node (URL)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_14_div_18_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.onlineLink, $event) || (ctx_r1.eventData.onlineLink = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.onlineLink);
  }
}
function EventCreateComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "h2", 25);
    \u0275\u0275text(2, "Geospatial Logistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "div", 27)(5, "label", 28);
    \u0275\u0275text(6, "Environment Protocol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_14_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.locationType, $event) || (ctx_r1.eventData.locationType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option", 46);
    \u0275\u0275text(9, "In Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 47);
    \u0275\u0275text(11, "Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 48);
    \u0275\u0275text(13, "Hybrid");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 27)(15, "label", 28);
    \u0275\u0275text(16, "Geographic Node / Venue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_14_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.location, $event) || (ctx_r1.eventData.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, EventCreateComponent_div_0_div_14_div_18_Template, 4, 1, "div", 50);
    \u0275\u0275elementStart(19, "div", 27)(20, "label", 28);
    \u0275\u0275text(21, "Load Capacity (Units)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_14_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.capacity, $event) || (ctx_r1.eventData.capacity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 27)(24, "label", 28);
    \u0275\u0275text(25, "Access Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 30);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_14_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.visibility, $event) || (ctx_r1.eventData.visibility = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 52);
    \u0275\u0275text(28, "Public Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 53);
    \u0275\u0275text(30, "Member Encrypted");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.locationType);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.eventData.locationType !== "IN_PERSON");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.capacity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.visibility);
  }
}
function EventCreateComponent_div_0_div_15_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66)(1, "div", 27)(2, "label", 28);
    \u0275\u0275text(3, "Member Valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_div_13_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.pricing.memberPrice, $event) || (ctx_r1.eventData.pricing.memberPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 27)(6, "label", 28);
    \u0275\u0275text(7, "Public Valuation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_div_13_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.pricing.nonMemberPrice, $event) || (ctx_r1.eventData.pricing.nonMemberPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.pricing.memberPrice);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.pricing.nonMemberPrice);
  }
}
function EventCreateComponent_div_0_div_15_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_div_21_Template_input_ngModelChange_1_listener($event) {
      const t_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(t_r12.name, $event) || (t_r12.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_div_21_Template_input_ngModelChange_2_listener($event) {
      const t_r12 = \u0275\u0275restoreView(_r11).$implicit;
      \u0275\u0275twoWayBindingSet(t_r12.price, $event) || (t_r12.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 71);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_15_div_21_Template_button_click_3_listener() {
      const i_r13 = \u0275\u0275restoreView(_r11).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeTicketType(i_r13));
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", t_r12.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", t_r12.price);
  }
}
function EventCreateComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "h2", 25);
    \u0275\u0275text(2, "Fiscal Architecture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 56)(4, "label", 28);
    \u0275\u0275text(5, "Monetization Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.pricing.type, $event) || (ctx_r1.eventData.pricing.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(7, "option", 58);
    \u0275\u0275text(8, "FREE ADMISSION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 59);
    \u0275\u0275text(10, "PAID ENTRY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 60);
    \u0275\u0275text(12, "DISCOUNTED ACCESS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, EventCreateComponent_div_0_div_15_div_13_Template, 9, 2, "div", 61);
    \u0275\u0275elementStart(14, "div")(15, "div", 62)(16, "label", 43);
    \u0275\u0275text(17, "Ticket Variant Registry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 63);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_15_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addTicketType());
    });
    \u0275\u0275text(19, "+ ARCHIVE NEW VARIANT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 64);
    \u0275\u0275template(21, EventCreateComponent_div_0_div_15_div_21_Template, 5, 2, "div", 65);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.pricing.type);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.eventData.pricing.type !== "FREE");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.eventData.ticketTypes);
  }
}
function EventCreateComponent_div_0_div_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "button", 77);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_16_div_10_Template_button_click_1_listener() {
      const i_r16 = \u0275\u0275restoreView(_r15).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeSpeaker(i_r16));
    });
    \u0275\u0275text(2, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_10_Template_input_ngModelChange_5_listener($event) {
      const s_r17 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(s_r17.name, $event) || (s_r17.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_10_Template_input_ngModelChange_6_listener($event) {
      const s_r17 = \u0275\u0275restoreView(_r15).$implicit;
      \u0275\u0275twoWayBindingSet(s_r17.title, $event) || (s_r17.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    const i_r16 = ctx.index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Authority #", i_r16 + 1, "");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", s_r17.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", s_r17.title);
  }
}
function EventCreateComponent_div_0_div_16_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "span", 83);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 84);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_16_div_18_Template_button_click_4_listener() {
      const i_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeSchedule(i_r19));
    });
    \u0275\u0275text(5, "DISCARD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 85)(7, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_18_Template_input_ngModelChange_7_listener($event) {
      const item_r20 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(item_r20.startTime, $event) || (item_r20.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_18_Template_input_ngModelChange_8_listener($event) {
      const item_r20 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(item_r20.endTime, $event) || (item_r20.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_18_Template_input_ngModelChange_9_listener($event) {
      const item_r20 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(item_r20.title, $event) || (item_r20.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const i_r19 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Sequence #", i_r19 + 1, "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r20.startTime);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", item_r20.endTime);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", item_r20.title);
  }
}
function EventCreateComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "h2", 25);
    \u0275\u0275text(2, "Agenda & Logic Sequence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "div", 62)(5, "label", 43);
    \u0275\u0275text(6, "Voice & Authority Registry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 63);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addSpeaker());
    });
    \u0275\u0275text(8, "+ INITIALIZE SPEAKER");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 72);
    \u0275\u0275template(10, EventCreateComponent_div_0_div_16_div_10_Template, 7, 3, "div", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "div", 62)(13, "label", 43);
    \u0275\u0275text(14, "Engagement Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 63);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_16_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addSchedule());
    });
    \u0275\u0275text(16, "+ APPEND SEQUENCE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 74);
    \u0275\u0275template(18, EventCreateComponent_div_0_div_16_div_18_Template, 10, 4, "div", 75);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r1.eventData.speakers);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.eventData.schedule);
  }
}
function EventCreateComponent_div_0_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousStep());
    });
    \u0275\u0275text(1, "Previous Sequence");
    \u0275\u0275elementEnd();
  }
}
function EventCreateComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "button", 90);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(2, "Next Sequence");
    \u0275\u0275elementEnd()();
  }
}
function EventCreateComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "button", 88);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(2, "Discard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 92);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_20_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Authorize Deployment" : "Launch Event", " ");
  }
}
function EventCreateComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "h2", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275template(8, EventCreateComponent_div_0_div_8_Template, 6, 7, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, EventCreateComponent_div_0_div_9_Template, 2, 1, "div", 8)(10, EventCreateComponent_div_0_div_10_Template, 2, 0, "div", 9);
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275template(12, EventCreateComponent_div_0_div_12_Template, 38, 5, "div", 11)(13, EventCreateComponent_div_0_div_13_Template, 26, 6, "div", 11)(14, EventCreateComponent_div_0_div_14_Template, 31, 5, "div", 11)(15, EventCreateComponent_div_0_div_15_Template, 22, 3, "div", 12)(16, EventCreateComponent_div_0_div_16_Template, 19, 2, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275template(18, EventCreateComponent_div_0_button_18_Template, 2, 0, "button", 14)(19, EventCreateComponent_div_0_div_19_Template, 3, 0, "div", 15)(20, EventCreateComponent_div_0_div_20_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Experience Architect" : "Initialize New Event", " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(12, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.successMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep < 5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep === 5);
  }
}
var EventCreateComponent = class _EventCreateComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.navigate = new EventEmitter();
    this.close = new EventEmitter();
    this.saved = new EventEmitter();
    this.isModal = false;
    this.editEvent = null;
    this.show = true;
    this.saveEvent = false;
    this.currentStep = 1;
    this.totalSteps = 5;
    this.isEditMode = false;
    this.eventData = {
      // Step 1: Basic Information
      name: "",
      type: "CONFERENCE",
      description: "",
      fullDescription: "",
      // Step 2: Date & Time
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      // Step 3: Location & Format
      location: "",
      locationType: "IN_PERSON",
      format: "IN_PERSON",
      onlineLink: "",
      capacity: 100,
      visibility: "PUBLIC",
      // Step 4: Organizer & Pricing
      organizerName: "",
      organizerEmail: "",
      organizerPhone: "",
      pricing: {
        type: "FREE",
        memberPrice: 0,
        nonMemberPrice: 0,
        earlyBirdPrice: 0,
        earlyBirdEndDate: ""
      },
      ticketTypes: [],
      schedule: [],
      speakers: [],
      imageUrl: ""
    };
    this.isLoading = false;
    this.errorMessage = "";
    this.successMessage = "";
  }
  ngOnInit() {
    if (this.editEvent) {
      this.isEditMode = true;
      this.loadEventData(this.editEvent);
    }
  }
  ngOnChanges(changes) {
    if (changes["editEvent"]) {
      if (changes["editEvent"].currentValue) {
        this.isEditMode = true;
        this.loadEventData(changes["editEvent"].currentValue);
        this.currentStep = 1;
      } else {
        this.isEditMode = false;
        this.resetForm();
        this.currentStep = 1;
      }
    }
    if (changes["show"] && changes["show"].currentValue && this.editEvent) {
      this.isEditMode = true;
      this.loadEventData(this.editEvent);
      this.currentStep = 1;
    }
    if (changes["show"] && !changes["show"].currentValue) {
      this.resetForm();
      this.currentStep = 1;
      this.isEditMode = false;
    }
  }
  resetForm() {
    this.eventData = {
      name: "",
      type: "CONFERENCE",
      description: "",
      fullDescription: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      location: "",
      locationType: "IN_PERSON",
      format: "IN_PERSON",
      onlineLink: "",
      capacity: 100,
      visibility: "PUBLIC",
      organizerName: "",
      organizerEmail: "",
      organizerPhone: "",
      pricing: {
        type: "FREE",
        memberPrice: 0,
        nonMemberPrice: 0,
        earlyBirdPrice: 0,
        earlyBirdEndDate: ""
      },
      ticketTypes: [],
      schedule: [],
      speakers: [],
      imageUrl: ""
    };
    this.errorMessage = "";
    this.successMessage = "";
  }
  loadEventData(event) {
    let startDateStr = "";
    let startTimeStr = "";
    let endDateStr = "";
    let endTimeStr = "";
    if (event.startTime) {
      startTimeStr = event.startTime.split(":").slice(0, 2).join(":");
    }
    if (event.endTime) {
      endTimeStr = event.endTime.split(":").slice(0, 2).join(":");
    }
    if (event.startDate) {
      if (typeof event.startDate === "string") {
        startDateStr = event.startDate.split("T")[0];
      } else {
        const startDate = new Date(event.startDate);
        startDateStr = startDate.toISOString().split("T")[0];
        if (!startTimeStr) {
          const hours = String(startDate.getHours()).padStart(2, "0");
          const minutes = String(startDate.getMinutes()).padStart(2, "0");
          startTimeStr = `${hours}:${minutes}`;
        }
      }
    }
    if (event.endDate) {
      if (typeof event.endDate === "string") {
        endDateStr = event.endDate.split("T")[0];
      } else {
        const endDate = new Date(event.endDate);
        endDateStr = endDate.toISOString().split("T")[0];
        if (!endTimeStr) {
          const hours = String(endDate.getHours()).padStart(2, "0");
          const minutes = String(endDate.getMinutes()).padStart(2, "0");
          endTimeStr = `${hours}:${minutes}`;
        }
      }
    }
    this.eventData = {
      name: event.name || event.title || "",
      type: event.type || "CONFERENCE",
      description: event.description || event.shortDescription || "",
      fullDescription: event.fullDescription || event.description || "",
      startDate: startDateStr,
      endDate: endDateStr,
      startTime: startTimeStr,
      endTime: endTimeStr,
      location: event.location || event.venue || "",
      locationType: event.locationType || event.mode || "IN_PERSON",
      format: event.format || event.mode || "IN_PERSON",
      onlineLink: event.onlineLink || event.venueUrl || "",
      capacity: event.capacity || event.maxCapacity || 100,
      visibility: event.visibility || (event.type === "Member Only" ? "MEMBERS_ONLY" : "PUBLIC"),
      organizerName: event.organizerName || "",
      organizerEmail: event.organizerEmail || "",
      organizerPhone: event.organizerPhone || "",
      pricing: event.pricing || {
        type: event.pricingType || (event.price > 0 ? "PAID" : "FREE"),
        memberPrice: event.memberPrice || event.price || 0,
        nonMemberPrice: event.nonMemberPrice || event.guestPrice || 0,
        earlyBirdPrice: event.earlyBirdPrice || 0,
        earlyBirdEndDate: event.earlyBirdEndDate ? new Date(event.earlyBirdEndDate).toISOString().split("T")[0] : ""
      },
      ticketTypes: event.ticketTypes || [],
      schedule: event.schedule || [],
      speakers: event.speakers || [],
      imageUrl: event.imageUrl || event.image || ""
    };
  }
  onClose() {
    if (this.isModal) {
      this.close.emit();
    } else {
      this.navigate.emit("event-management");
    }
  }
  nextStep() {
    if (this.validateCurrentStep()) {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    }
  }
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  validateCurrentStep() {
    this.errorMessage = "";
    if (this.currentStep === 1) {
      if (!this.eventData.name || !this.eventData.type || !this.eventData.description) {
        this.errorMessage = "Please fill in all required fields";
        return false;
      }
    } else if (this.currentStep === 2) {
      if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
        this.errorMessage = "Please fill in all date and time fields";
        return false;
      }
      const startDateTime = /* @__PURE__ */ new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
      const now = /* @__PURE__ */ new Date();
      if (startDateTime <= now) {
        this.errorMessage = "Start date and time must be in the future";
        return false;
      }
      const endDateTime = /* @__PURE__ */ new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
      if (endDateTime <= startDateTime) {
        this.errorMessage = "End date and time must be after start date and time";
        return false;
      }
    } else if (this.currentStep === 3) {
      if (!this.eventData.location || !this.eventData.capacity) {
        this.errorMessage = "Please fill in location and capacity";
        return false;
      }
      if (this.eventData.locationType === "ONLINE" && !this.eventData.onlineLink) {
        this.errorMessage = "Please provide online link for online events";
        return false;
      }
    } else if (this.currentStep === 4) {
      if (!this.eventData.organizerName || !this.eventData.organizerEmail) {
        this.errorMessage = "Please fill in organizer information";
        return false;
      }
      const email = String(this.eventData.organizerEmail).trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        this.errorMessage = "Please enter a valid organizer email address";
        return false;
      }
      if (this.eventData.organizerPhone) {
        const rawPhone = String(this.eventData.organizerPhone).trim();
        const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
        const digitCount = rawPhone.replace(/\D/g, "").length;
        if (!phoneRegex.test(rawPhone) || digitCount < 7) {
          this.errorMessage = "Please enter a valid organizer phone number";
          return false;
        }
      }
      if (this.eventData.pricing?.type === "PAID" || this.eventData.pricing?.type === "DISCOUNTED") {
        const memberPrice = this.eventData.pricing?.memberPrice || 0;
        const nonMemberPrice = this.eventData.pricing?.nonMemberPrice || 0;
        if (memberPrice <= 0 && nonMemberPrice <= 0) {
          this.errorMessage = "Please provide at least one price (Member or Non-Member) for paid events";
          return false;
        }
      }
    } else if (this.currentStep === 5) {
    }
    return true;
  }
  addTicketType() {
    this.eventData.ticketTypes.push({
      name: "",
      type: "MEMBER",
      price: 0,
      quantityLimit: null,
      availableQuantity: 0,
      description: ""
    });
  }
  removeTicketType(index) {
    this.eventData.ticketTypes.splice(index, 1);
  }
  addSchedule() {
    this.eventData.schedule.push({
      startTime: "",
      endTime: "",
      title: "",
      description: "",
      speakerId: null,
      location: ""
    });
  }
  removeSchedule(index) {
    this.eventData.schedule.splice(index, 1);
  }
  addSpeaker() {
    this.eventData.speakers.push({
      name: "",
      title: "",
      company: "",
      bio: "",
      avatar: "",
      socialLinks: {
        linkedin: "",
        twitter: "",
        website: ""
      }
    });
  }
  removeSpeaker(index) {
    this.eventData.speakers.splice(index, 1);
  }
  validateDateTimes() {
    this.errorMessage = "";
    if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
      this.errorMessage = "Please fill in all date and time fields";
      return false;
    }
    const startDateTime = /* @__PURE__ */ new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    const now = /* @__PURE__ */ new Date();
    if (startDateTime <= now) {
      this.errorMessage = "Start date and time must be in the future";
      return false;
    }
    const endDateTime = /* @__PURE__ */ new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
    if (endDateTime <= startDateTime) {
      this.errorMessage = "End date and time must be after start date and time";
      return false;
    }
    return true;
  }
  onSubmit() {
    if (!this.validateCurrentStep()) {
      return;
    }
    if (!this.validateDateTimes()) {
      if (this.currentStep !== 2) {
        this.currentStep = 2;
      }
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.successMessage = "";
    const pricingType = this.eventData.pricing?.type || "FREE";
    const eventPayload = __spreadProps(__spreadValues({}, this.eventData), {
      // Send date and time separately to match backend LocalDate and LocalTime
      startDate: this.eventData.startDate,
      startTime: this.eventData.startTime,
      endDate: this.eventData.endDate,
      endTime: this.eventData.endTime,
      // Map pricing from nested object to flat properties
      pricingType,
      memberPrice: pricingType === "FREE" ? 0 : this.eventData.pricing?.memberPrice || 0,
      nonMemberPrice: pricingType === "FREE" ? 0 : this.eventData.pricing?.nonMemberPrice || 0,
      earlyBirdPrice: this.eventData.pricing?.earlyBirdPrice || 0,
      earlyBirdEndDate: this.eventData.pricing?.earlyBirdEndDate ? this.eventData.pricing.earlyBirdEndDate : null,
      // Map schedule array to backend's expected "schedules" field
      schedules: this.eventData.schedule || [],
      image: this.eventData.imageUrl
    });
    delete eventPayload.pricing;
    delete eventPayload.schedule;
    if (this.isEditMode && this.editEvent?.id) {
      this.apiService.updateEvent(this.editEvent.id, eventPayload).subscribe({
        next: () => {
          this.isLoading = false;
          this.successMessage = "Event updated successfully!";
          setTimeout(() => {
            this.saved.emit();
            if (this.isModal) {
              this.close.emit();
            } else {
              this.navigate.emit("event-management");
            }
          }, 1500);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || "Error updating event. Please try again.";
        }
      });
    } else {
      this.apiService.createEvent(eventPayload).subscribe({
        next: () => {
          this.isLoading = false;
          this.successMessage = "Event created successfully!";
          setTimeout(() => {
            this.saved.emit();
            if (this.isModal) {
              this.close.emit();
            } else {
              this.navigate.emit("event-management");
            }
          }, 1500);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || "Error creating event. Please try again.";
        }
      });
    }
  }
  onCancel() {
    this.onClose();
  }
  getMinDate() {
    const today = /* @__PURE__ */ new Date();
    return today.toISOString().split("T")[0];
  }
  getMinEndDate() {
    if (this.eventData.startDate) {
      return this.eventData.startDate;
    }
    return this.getMinDate();
  }
  hasDateValidationError() {
    if (!this.eventData.startDate || !this.eventData.startTime) {
      return false;
    }
    const startDateTime = /* @__PURE__ */ new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    const now = /* @__PURE__ */ new Date();
    return startDateTime <= now;
  }
  hasStartDateError() {
    return this.hasDateValidationError();
  }
  hasEndDateError() {
    if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
      return false;
    }
    const startDateTime = /* @__PURE__ */ new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    const endDateTime = /* @__PURE__ */ new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
    return endDateTime <= startDateTime;
  }
  static {
    this.\u0275fac = function EventCreateComponent_Factory(t) {
      return new (t || _EventCreateComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCreateComponent, selectors: [["app-event-create"]], inputs: { isModal: "isModal", editEvent: "editEvent", show: "show", saveEvent: "saveEvent" }, outputs: { navigate: "navigate", close: "close", saved: "saved" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "text-xl", "font-extrabold", "text-slate-900", "tracking-tighter"], [1, "btn-close", 3, "click"], [1, "step-track", "mt-8"], ["class", "step-node", 3, "active", "completed", 4, "ngFor", "ngForOf"], ["class", "mx-8 mb-4 p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-2xl text-rose-700 text-[11px] font-black uppercase tracking-widest animate-pulse", 4, "ngIf"], ["class", "mx-8 mb-4 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl text-emerald-700 text-[11px] font-black uppercase tracking-widest", 4, "ngIf"], [1, "modal-body", "animate-reveal"], ["class", "space-y-6", 4, "ngIf"], ["class", "space-y-8", 4, "ngIf"], [1, "modal-footer"], ["class", "btn-pill btn-secondary", 3, "click", 4, "ngIf"], ["class", "ml-auto", 4, "ngIf"], ["class", "ml-auto gap-3 flex", 4, "ngIf"], [1, "step-node"], [1, "step-circle"], [1, "step-label"], ["class", "step-line", 3, "filled", 4, "ngIf"], [1, "step-line"], [1, "mx-8", "mb-4", "p-4", "bg-rose-50", "border-l-4", "border-rose-500", "rounded-r-2xl", "text-rose-700", "text-[11px]", "font-black", "uppercase", "tracking-widest", "animate-pulse"], [1, "mx-8", "mb-4", "p-4", "bg-emerald-50", "border-l-4", "border-emerald-500", "rounded-r-2xl", "text-emerald-700", "text-[11px]", "font-black", "uppercase", "tracking-widest"], [1, "space-y-6"], [1, "form-title"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "input-group"], [1, "input-label"], ["type", "text", "placeholder", "Event Designation", "required", "", 1, "premium-input", 3, "ngModelChange", "ngModel"], [1, "premium-input", 3, "ngModelChange", "ngModel"], ["value", "CONFERENCE"], ["value", "WORKSHOP"], ["value", "NETWORKING"], ["value", "SEMINAR"], ["value", "WEBINAR"], ["value", "TRAINING"], ["value", "OTHER"], [1, "input-group", "col-span-2"], ["type", "text", "placeholder", "Primary impact statement", "required", "", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g., https://example.com/poster.jpg", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "Comprehensive engagement details...", 1, "premium-input", "resize-none", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-8"], [1, "section-label", "px-0"], ["type", "date", 1, "premium-input", 3, "ngModelChange", "change", "ngModel", "min"], ["type", "time", 1, "premium-input", 3, "ngModelChange", "change", "ngModel"], ["value", "IN_PERSON"], ["value", "ONLINE"], ["value", "HYBRID"], ["type", "text", "placeholder", "Specific location identifier", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["class", "input-group col-span-2", 4, "ngIf"], ["type", "number", "placeholder", "0", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["value", "PUBLIC"], ["value", "MEMBERS_ONLY"], ["type", "url", "placeholder", "https://access-node.link", 1, "premium-input", 3, "ngModelChange", "ngModel"], [1, "space-y-8"], [1, "form-section", "!bg-white", "!px-0", "!border-0", "mb-0"], [1, "premium-input", "!bg-slate-50", "border-2", "border-slate-100", "font-black", "text-indigo-600", 3, "ngModelChange", "ngModel"], ["value", "FREE"], ["value", "PAID"], ["value", "DISCOUNTED"], ["class", "grid grid-cols-2 gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-100", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "mb-4"], ["type", "button", 1, "btn-pill", "btn-primary", "text-[10px]", "py-1.5", "px-4", 3, "click"], [1, "space-y-3"], ["class", "bg-white border border-slate-100 p-4 rounded-2xl flex gap-3 items-center shadow-sm", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-2", "gap-6", "bg-slate-50", "p-6", "rounded-3xl", "border", "border-slate-100"], ["type", "number", "placeholder", "0.00", 1, "premium-input", 3, "ngModelChange", "ngModel"], [1, "bg-white", "border", "border-slate-100", "p-4", "rounded-2xl", "flex", "gap-3", "items-center", "shadow-sm"], ["type", "text", "placeholder", "Variant Identity", 1, "premium-input", "flex-1", "!text-xs", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Fiscal Value", 1, "premium-input", "w-24", "!text-xs", 3, "ngModelChange", "ngModel"], [1, "text-rose-400", "hover:text-rose-600", "font-black", "text-lg", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["class", "item-card relative", 4, "ngFor", "ngForOf"], [1, "space-y-4"], ["class", "item-card", 4, "ngFor", "ngForOf"], [1, "item-card", "relative"], [1, "absolute", "top-4", "right-4", "text-slate-300", "hover:text-rose-500", "font-black", 3, "click"], [1, "input-label", "mb-4"], ["type", "text", "placeholder", "Full Identity", 1, "premium-input", "mb-3", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Corporate Title", 1, "premium-input", "text-xs", 3, "ngModelChange", "ngModel"], [1, "item-card"], [1, "flex", "justify-between", "mb-4"], [1, "text-[10px]", "font-black", "text-indigo-400", "uppercase", "tracking-widest"], [1, "text-rose-400", "font-bold", 3, "click"], [1, "grid", "grid-cols-2", "gap-4", "mb-4"], ["type", "time", 1, "premium-input", "text-xs", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Sequence Identity (e.g. Opening Keynote)", 1, "premium-input", 3, "ngModelChange", "ngModel"], [1, "btn-pill", "btn-secondary", 3, "click"], [1, "ml-auto"], [1, "btn-pill", "btn-primary", "px-12", 3, "click"], [1, "ml-auto", "gap-3", "flex"], [1, "btn-pill", "btn-primary", "!bg-emerald-600", "px-12", "shadow-lg", "shadow-emerald-200", 3, "click"]], template: function EventCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EventCreateComponent_div_0_Template, 21, 13, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  --modal-primary: #6366f1;\n  --modal-success: #10b981;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.4);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 32px;\n  width: 100%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_modalReveal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  scrollbar-width: thin;\n}\n@keyframes _ngcontent-%COMP%_modalReveal {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.step-track[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 40px;\n  background: #f8fafc;\n  margin: 0 40px 40px;\n  border-radius: 24px;\n  border: 1px solid #f1f5f9;\n}\n.step-node[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n  flex: 1;\n}\n.step-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 900;\n  transition: all 0.3s;\n  background: white;\n  border: 2px solid #e2e8f0;\n  color: #94a3b8;\n}\n.step-node.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: var(--modal-primary);\n  border-color: var(--modal-primary);\n  color: white;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);\n}\n.step-node.completed[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: var(--modal-success);\n  border-color: var(--modal-success);\n  color: white;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-top: 12px;\n}\n.step-node.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.step-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 100%;\n  height: 2px;\n  background: #e2e8f0;\n  z-index: 1;\n}\n.step-line.filled[_ngcontent-%COMP%] {\n  background: var(--modal-primary);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 40px 40px;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: #0f172a;\n  margin-bottom: 24px;\n}\n.input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.premium-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  background: #f8fafc;\n  border: 2px solid #f1f5f9;\n  border-radius: 14px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.premium-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--modal-primary);\n  background: white;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  background: #f8fafc;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0 0 32px 32px;\n}\n.btn-pill[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e2e8f0;\n  color: #64748b;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--modal-primary);\n  color: white;\n}\n.item-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #f1f5f9;\n  border-radius: 20px;\n  padding: 24px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=event-create.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCreateComponent, { className: "EventCreateComponent", filePath: "src\\app\\pages\\event-create\\event-create.component.ts", lineNumber: 14 });
})();

export {
  EventCreateComponent
};
//# sourceMappingURL=chunk-VV64SB4P.js.map
