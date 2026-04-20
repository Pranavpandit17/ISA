import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-QNLLDZ5O.js";
import {
  ApiService,
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CRF7CKPV.js";

// src/app/pages/event-create/event-create.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function EventCreateComponent_div_0_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
  if (rf & 2) {
    const step_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("filled", ctx_r1.currentStep > step_r3);
  }
}
function EventCreateComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EventCreateComponent_div_0_div_8_div_5_Template, 1, 2, "div", 18);
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
    \u0275\u0275textInterpolate1(" ", step_r3 === 1 ? "Basic info" : step_r3 === 2 ? "Date & time" : step_r3 === 3 ? "Location" : step_r3 === 4 ? "Organizer" : "Schedule", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r4 < 4);
  }
}
function EventCreateComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function EventCreateComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function EventCreateComponent_div_0_div_12_div_42_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_12_div_42_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.clearCoverImage());
    });
    \u0275\u0275text(1, "Remove new file");
    \u0275\u0275elementEnd();
  }
}
function EventCreateComponent_div_0_div_12_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "img", 44);
    \u0275\u0275template(2, EventCreateComponent_div_0_div_12_div_42_button_2_Template, 2, 0, "button", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.coverImagePreviewUrl || ctx_r1.eventData.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.coverImageFile);
  }
}
function EventCreateComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h3", 23);
    \u0275\u0275text(2, "Basic information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "div", 25)(5, "label", 26);
    \u0275\u0275text(6, "Event name ");
    \u0275\u0275elementStart(7, "span", 27);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_12_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.name, $event) || (ctx_r1.eventData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 25)(11, "label", 26);
    \u0275\u0275text(12, "Event type ");
    \u0275\u0275elementStart(13, "span", 27);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_12_Template_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.type, $event) || (ctx_r1.eventData.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(16, "option", 30);
    \u0275\u0275text(17, "Conference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 31);
    \u0275\u0275text(19, "Workshop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 32);
    \u0275\u0275text(21, "Networking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 33);
    \u0275\u0275text(23, "Seminar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 34);
    \u0275\u0275text(25, "Webinar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 35);
    \u0275\u0275text(27, "Training");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 36);
    \u0275\u0275text(29, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 37)(31, "label", 26);
    \u0275\u0275text(32, "Short description ");
    \u0275\u0275elementStart(33, "span", 27);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_12_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.description, $event) || (ctx_r1.eventData.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 37)(37, "label", 26);
    \u0275\u0275text(38, "Event image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 39);
    \u0275\u0275listener("change", function EventCreateComponent_div_0_div_12_Template_input_change_39_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCoverImageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 40);
    \u0275\u0275text(41, "Optional image shown on the event page (JPEG, PNG, GIF, or WebP).");
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, EventCreateComponent_div_0_div_12_div_42_Template, 3, 2, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 37)(44, "label", 26);
    \u0275\u0275text(45, "Full description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "textarea", 42);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_12_Template_textarea_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.fullDescription, $event) || (ctx_r1.eventData.fullDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.type);
    \u0275\u0275advance(20);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.description);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.coverImagePreviewUrl || ctx_r1.eventData.imageUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.fullDescription);
  }
}
function EventCreateComponent_div_0_div_13_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1, "Start should be in the future.");
    \u0275\u0275elementEnd();
  }
}
function EventCreateComponent_div_0_div_13_p_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 51);
    \u0275\u0275text(1, "End must be after start.");
    \u0275\u0275elementEnd();
  }
}
function EventCreateComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h3", 23);
    \u0275\u0275text(2, "Date & time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47)(4, "div", 25)(5, "label", 26);
    \u0275\u0275text(6, "Start date ");
    \u0275\u0275elementStart(7, "span", 27);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_13_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.startDate, $event) || (ctx_r1.eventData.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 25)(11, "label", 26);
    \u0275\u0275text(12, "Start time ");
    \u0275\u0275elementStart(13, "span", 27);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_13_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.startTime, $event) || (ctx_r1.eventData.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 25)(17, "label", 26);
    \u0275\u0275text(18, "End date ");
    \u0275\u0275elementStart(19, "span", 27);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_13_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.endDate, $event) || (ctx_r1.eventData.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 25)(23, "label", 26);
    \u0275\u0275text(24, "End time ");
    \u0275\u0275elementStart(25, "span", 27);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_13_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.endTime, $event) || (ctx_r1.eventData.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, EventCreateComponent_div_0_div_13_p_28_Template, 2, 0, "p", 50)(29, EventCreateComponent_div_0_div_13_p_29_Template, 2, 0, "p", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.startDate);
    \u0275\u0275property("min", ctx_r1.getMinDate());
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.startTime);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.endDate);
    \u0275\u0275property("min", ctx_r1.getMinEndDate());
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.endTime);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasDateValidationError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasEndDateError());
  }
}
function EventCreateComponent_div_0_div_14_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "label", 26);
    \u0275\u0275text(2, "Online link ");
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_14_div_34_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.onlineLink, $event) || (ctx_r1.eventData.onlineLink = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.onlineLink);
  }
}
function EventCreateComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h3", 23);
    \u0275\u0275text(2, "Location & format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "div", 25)(5, "label", 26);
    \u0275\u0275text(6, "Location type ");
    \u0275\u0275elementStart(7, "span", 27);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_14_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.locationType, $event) || (ctx_r1.eventData.locationType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 52);
    \u0275\u0275text(11, "In person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 53);
    \u0275\u0275text(13, "Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 54);
    \u0275\u0275text(15, "Hybrid");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 25)(17, "label", 26);
    \u0275\u0275text(18, "Event format ");
    \u0275\u0275elementStart(19, "span", 27);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_14_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.format, $event) || (ctx_r1.eventData.format = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(22, "option", 52);
    \u0275\u0275text(23, "In person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 53);
    \u0275\u0275text(25, "Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 54);
    \u0275\u0275text(27, "Hybrid");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 37)(29, "label", 26);
    \u0275\u0275text(30, "Location / venue ");
    \u0275\u0275elementStart(31, "span", 27);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_14_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.location, $event) || (ctx_r1.eventData.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, EventCreateComponent_div_0_div_14_div_34_Template, 6, 1, "div", 56);
    \u0275\u0275elementStart(35, "div", 25)(36, "label", 26);
    \u0275\u0275text(37, "Capacity ");
    \u0275\u0275elementStart(38, "span", 27);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_14_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.capacity, $event) || (ctx_r1.eventData.capacity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 25)(42, "label", 26);
    \u0275\u0275text(43, "Visibility ");
    \u0275\u0275elementStart(44, "span", 27);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_14_Template_select_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.visibility, $event) || (ctx_r1.eventData.visibility = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(47, "option", 58);
    \u0275\u0275text(48, "Public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 59);
    \u0275\u0275text(50, "Members only");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.locationType);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.format);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.location);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.eventData.locationType !== "IN_PERSON");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.capacity);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.visibility);
  }
}
function EventCreateComponent_div_0_div_15_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "h4", 71);
    \u0275\u0275text(2, "Ticket types");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 72);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_15_div_32_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addTicketType());
    });
    \u0275\u0275text(4, "+ Add ticket type");
    \u0275\u0275elementEnd()();
  }
}
function EventCreateComponent_div_0_div_15_p_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 73);
    \u0275\u0275text(1, " Combined ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " for all ticket types must not exceed ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "event capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" (", ctx_r1.eventData.capacity, "). ");
  }
}
function EventCreateComponent_div_0_div_15_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275text(1, " Ticket types are disabled because pricing type is set to Free. ");
    \u0275\u0275elementEnd();
  }
}
function EventCreateComponent_div_0_div_15_div_35_div_1_div_25_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 96);
    \u0275\u0275text(1, " Calendar allows ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " through ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " (event end). ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.eventData.endDate);
  }
}
function EventCreateComponent_div_0_div_15_div_35_div_1_div_25_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 97);
    \u0275\u0275text(1, " Set ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "End date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " in step 2 (Date & time) so the calendar can cap at the event end. ");
    \u0275\u0275elementEnd();
  }
}
function EventCreateComponent_div_0_div_15_div_35_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "label", 92);
    \u0275\u0275text(2, "Early bird pricing ends ");
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_div_35_div_1_div_25_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const t_r14 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(t_r14.earlyBirdEndDate, $event) || (t_r14.earlyBirdEndDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, EventCreateComponent_div_0_div_15_div_35_div_1_div_25_p_6_Template, 8, 1, "p", 94)(7, EventCreateComponent_div_0_div_15_div_35_div_1_div_25_p_7_Template, 5, 0, "p", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", t_r14.earlyBirdEndDate);
    \u0275\u0275property("min", ctx_r1.getMinDate())("max", ctx_r1.getEarlyBirdMaxDate());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.eventData.endDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.eventData.endDate);
  }
}
function EventCreateComponent_div_0_div_15_div_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "button", 77);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_15_div_35_div_1_Template_button_click_1_listener() {
      const i_r13 = \u0275\u0275restoreView(_r12).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeTicketType(i_r13));
    });
    \u0275\u0275text(2, "Remove");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78)(4, "div", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 80);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_div_35_div_1_Template_select_ngModelChange_6_listener($event) {
      const t_r14 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(t_r14.type, $event) || (t_r14.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EventCreateComponent_div_0_div_15_div_35_div_1_Template_select_ngModelChange_6_listener() {
      const t_r14 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onTicketTypeChange(t_r14));
    });
    \u0275\u0275elementStart(7, "option", 81);
    \u0275\u0275text(8, "Paid Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 82);
    \u0275\u0275text(10, "Free Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 83);
    \u0275\u0275text(12, "Non Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 84);
    \u0275\u0275text(14, "VIP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 85);
    \u0275\u0275text(16, "Early Bird");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 86)(18, "span", 87);
    \u0275\u0275text(19, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_div_35_div_1_Template_input_ngModelChange_20_listener($event) {
      const t_r14 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(t_r14.price, $event) || (t_r14.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 86)(22, "span", 87);
    \u0275\u0275text(23, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_div_35_div_1_Template_input_ngModelChange_24_listener($event) {
      const t_r14 = \u0275\u0275restoreView(_r12).$implicit;
      \u0275\u0275twoWayBindingSet(t_r14.availableQuantity, $event) || (t_r14.availableQuantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, EventCreateComponent_div_0_div_15_div_35_div_1_div_25_Template, 8, 5, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("title", ctx_r1.defaultTicketName(t_r14.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.defaultTicketName(t_r14.type), " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", t_r14.type);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", t_r14.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", t_r14.availableQuantity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r14.type === "EARLY_BIRD");
  }
}
function EventCreateComponent_div_0_div_15_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275template(1, EventCreateComponent_div_0_div_15_div_35_div_1_Template, 26, 6, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.eventData.ticketTypes);
  }
}
function EventCreateComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h3", 23);
    \u0275\u0275text(2, "Organizer & pricing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "div", 25)(5, "label", 26);
    \u0275\u0275text(6, "Organizer name ");
    \u0275\u0275elementStart(7, "span", 27);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.organizerName, $event) || (ctx_r1.eventData.organizerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 25)(11, "label", 26);
    \u0275\u0275text(12, "Organizer email ");
    \u0275\u0275elementStart(13, "span", 27);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.organizerEmail, $event) || (ctx_r1.eventData.organizerEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 37)(17, "label", 26);
    \u0275\u0275text(18, "Organizer phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.organizerPhone, $event) || (ctx_r1.eventData.organizerPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 37)(21, "label", 26);
    \u0275\u0275text(22, "Pricing type ");
    \u0275\u0275elementStart(23, "span", 27);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_15_Template_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.eventData.pricing.type, $event) || (ctx_r1.eventData.pricing.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(26, "option", 64);
    \u0275\u0275text(27, "Free");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 65);
    \u0275\u0275text(29, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 66);
    \u0275\u0275text(31, "Discounted");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(32, EventCreateComponent_div_0_div_15_div_32_Template, 5, 0, "div", 67)(33, EventCreateComponent_div_0_div_15_p_33_Template, 8, 1, "p", 68)(34, EventCreateComponent_div_0_div_15_div_34_Template, 2, 0, "div", 68)(35, EventCreateComponent_div_0_div_15_div_35_Template, 2, 1, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.organizerName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.organizerEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.organizerPhone);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eventData.pricing.type);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.eventData.pricing.type !== "FREE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.eventData.pricing.type !== "FREE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.eventData.pricing.type === "FREE");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.eventData.pricing.type !== "FREE");
  }
}
function EventCreateComponent_div_0_div_16_div_9_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "img", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", s_r19.avatarPreviewUrl || s_r19.avatarUrl, \u0275\u0275sanitizeUrl);
  }
}
function EventCreateComponent_div_0_div_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99)(1, "button", 100);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_16_div_9_Template_button_click_1_listener() {
      const i_r18 = \u0275\u0275restoreView(_r17).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeSpeaker(i_r18));
    });
    \u0275\u0275text(2, "Remove");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "div", 25)(7, "label", 26);
    \u0275\u0275text(8, "Name ");
    \u0275\u0275elementStart(9, "span", 27);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_9_Template_input_ngModelChange_11_listener($event) {
      const s_r19 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(s_r19.name, $event) || (s_r19.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 25)(13, "label", 26);
    \u0275\u0275text(14, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_9_Template_input_ngModelChange_15_listener($event) {
      const s_r19 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(s_r19.title, $event) || (s_r19.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 25)(17, "label", 26);
    \u0275\u0275text(18, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_9_Template_input_ngModelChange_19_listener($event) {
      const s_r19 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(s_r19.company, $event) || (s_r19.company = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 37)(21, "label", 26);
    \u0275\u0275text(22, "Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 39);
    \u0275\u0275listener("change", function EventCreateComponent_div_0_div_16_div_9_Template_input_change_23_listener($event) {
      const i_r18 = \u0275\u0275restoreView(_r17).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSpeakerAvatarChange(i_r18, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, EventCreateComponent_div_0_div_16_div_9_div_24_Template, 2, 1, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 37)(26, "label", 26);
    \u0275\u0275text(27, "Bio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "textarea", 105);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_9_Template_textarea_ngModelChange_28_listener($event) {
      const s_r19 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(s_r19.bio, $event) || (s_r19.bio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 25)(30, "label", 26);
    \u0275\u0275text(31, "LinkedIn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 106);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_9_Template_input_ngModelChange_32_listener($event) {
      const s_r19 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(s_r19.linkedinUrl, $event) || (s_r19.linkedinUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 25)(34, "label", 26);
    \u0275\u0275text(35, "Twitter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_9_Template_input_ngModelChange_36_listener($event) {
      const s_r19 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(s_r19.twitterUrl, $event) || (s_r19.twitterUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 25)(38, "label", 26);
    \u0275\u0275text(39, "Website");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_9_Template_input_ngModelChange_40_listener($event) {
      const s_r19 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(s_r19.websiteUrl, $event) || (s_r19.websiteUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r19 = ctx.$implicit;
    const i_r18 = ctx.index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Speaker ", i_r18 + 1, "");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", s_r19.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", s_r19.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", s_r19.company);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", s_r19.avatarPreviewUrl || s_r19.avatarUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", s_r19.bio);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", s_r19.linkedinUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", s_r19.twitterUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", s_r19.websiteUrl);
  }
}
function EventCreateComponent_div_0_div_16_div_16_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r23 = ctx.$implicit;
    \u0275\u0275property("ngValue", opt_r23.index);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r23.label);
  }
}
function EventCreateComponent_div_0_div_16_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99)(1, "button", 100);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_16_div_16_Template_button_click_1_listener() {
      const i_r21 = \u0275\u0275restoreView(_r20).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeSchedule(i_r21));
    });
    \u0275\u0275text(2, "Remove");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 47)(6, "div", 25)(7, "label", 26);
    \u0275\u0275text(8, "Start time ");
    \u0275\u0275elementStart(9, "span", 27);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_16_Template_input_ngModelChange_11_listener($event) {
      const item_r22 = \u0275\u0275restoreView(_r20).$implicit;
      \u0275\u0275twoWayBindingSet(item_r22.startTime, $event) || (item_r22.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 25)(13, "label", 26);
    \u0275\u0275text(14, "End time ");
    \u0275\u0275elementStart(15, "span", 27);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_16_Template_input_ngModelChange_17_listener($event) {
      const item_r22 = \u0275\u0275restoreView(_r20).$implicit;
      \u0275\u0275twoWayBindingSet(item_r22.endTime, $event) || (item_r22.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 37)(19, "label", 26);
    \u0275\u0275text(20, "Title ");
    \u0275\u0275elementStart(21, "span", 27);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_16_Template_input_ngModelChange_23_listener($event) {
      const item_r22 = \u0275\u0275restoreView(_r20).$implicit;
      \u0275\u0275twoWayBindingSet(item_r22.title, $event) || (item_r22.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 37)(25, "label", 26);
    \u0275\u0275text(26, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "textarea", 111);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_16_Template_textarea_ngModelChange_27_listener($event) {
      const item_r22 = \u0275\u0275restoreView(_r20).$implicit;
      \u0275\u0275twoWayBindingSet(item_r22.description, $event) || (item_r22.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 25)(29, "label", 26);
    \u0275\u0275text(30, "Room / location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_16_Template_input_ngModelChange_31_listener($event) {
      const item_r22 = \u0275\u0275restoreView(_r20).$implicit;
      \u0275\u0275twoWayBindingSet(item_r22.location, $event) || (item_r22.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 25)(33, "label", 26);
    \u0275\u0275text(34, "Speaker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function EventCreateComponent_div_0_div_16_div_16_Template_select_ngModelChange_35_listener($event) {
      const item_r22 = \u0275\u0275restoreView(_r20).$implicit;
      \u0275\u0275twoWayBindingSet(item_r22.speakerIndex, $event) || (item_r22.speakerIndex = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(36, "option", 113);
    \u0275\u0275text(37, "No speaker");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, EventCreateComponent_div_0_div_16_div_16_option_38_Template, 2, 2, "option", 114);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Schedule item ", i_r21 + 1, "");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", item_r22.startTime);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", item_r22.endTime);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", item_r22.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r22.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r22.location);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r22.speakerIndex);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.speakerDisplayOptions());
  }
}
function EventCreateComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h3", 23);
    \u0275\u0275text(2, "Schedule & speakers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "h4", 71);
    \u0275\u0275text(5, "Speakers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 72);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_16_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addSpeaker());
    });
    \u0275\u0275text(7, "+ Add speaker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 74);
    \u0275\u0275template(9, EventCreateComponent_div_0_div_16_div_9_Template, 41, 9, "div", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 70)(11, "h4", 71);
    \u0275\u0275text(12, "Event schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 72);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_16_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addSchedule());
    });
    \u0275\u0275text(14, "+ Add schedule item");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 74);
    \u0275\u0275template(16, EventCreateComponent_div_0_div_16_div_16_Template, 39, 9, "div", 98);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.eventData.speakers);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.eventData.schedule);
  }
}
function EventCreateComponent_div_0_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 115);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.previousStep());
    });
    \u0275\u0275text(1, "Previous");
    \u0275\u0275elementEnd();
  }
}
function EventCreateComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "button", 117);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(2, "Next");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
  }
}
function EventCreateComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "button", 118);
    \u0275\u0275listener("click", function EventCreateComponent_div_0_div_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isEditMode ? "Save changes" : "Create event", " ");
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
    \u0275\u0275template(9, EventCreateComponent_div_0_div_9_Template, 2, 1, "div", 8)(10, EventCreateComponent_div_0_div_10_Template, 2, 1, "div", 9);
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275template(12, EventCreateComponent_div_0_div_12_Template, 47, 5, "div", 11)(13, EventCreateComponent_div_0_div_13_Template, 30, 8, "div", 11)(14, EventCreateComponent_div_0_div_14_Template, 51, 6, "div", 11)(15, EventCreateComponent_div_0_div_15_Template, 36, 8, "div", 11)(16, EventCreateComponent_div_0_div_16_Template, 17, 2, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275template(18, EventCreateComponent_div_0_button_18_Template, 2, 0, "button", 13)(19, EventCreateComponent_div_0_div_19_Template, 3, 1, "div", 14)(20, EventCreateComponent_div_0_div_20_Template, 3, 2, "div", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Edit event" : "Create new event");
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
    this.coverImageFile = null;
    this.coverImagePreviewUrl = null;
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
    this.isLoading = false;
    this.errorMessage = "";
    this.successMessage = "";
  }
  ngOnInit() {
    if (this.editEvent) {
      this.isEditMode = true;
      this.loadEditEventData(this.editEvent);
    }
  }
  ngOnChanges(changes) {
    if (changes["editEvent"]) {
      if (changes["editEvent"].currentValue) {
        this.isEditMode = true;
        this.loadEditEventData(changes["editEvent"].currentValue);
        this.currentStep = 1;
      } else {
        this.isEditMode = false;
        this.resetForm();
        this.currentStep = 1;
      }
    }
    if (changes["show"] && changes["show"].currentValue && this.editEvent) {
      this.isEditMode = true;
      this.loadEditEventData(this.editEvent);
      this.currentStep = 1;
    }
    if (changes["show"] && !changes["show"].currentValue) {
      this.resetForm();
      this.currentStep = 1;
      this.isEditMode = false;
    }
  }
  revokeCoverPreview() {
    if (this.coverImagePreviewUrl && this.coverImagePreviewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(this.coverImagePreviewUrl);
    }
    this.coverImagePreviewUrl = null;
  }
  resetForm() {
    this.revokeCoverPreview();
    this.coverImageFile = null;
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
  onCoverImageChange(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file) {
      return;
    }
    this.coverImageFile = file;
    this.revokeCoverPreview();
    this.coverImagePreviewUrl = URL.createObjectURL(file);
  }
  clearCoverImage() {
    this.coverImageFile = null;
    this.revokeCoverPreview();
  }
  onSpeakerAvatarChange(index, event) {
    const input = event.target;
    const file = input.files?.[0];
    const speaker = this.eventData.speakers[index];
    if (!speaker) {
      return;
    }
    speaker.avatarFile = file || null;
    if (speaker.avatarPreviewUrl && speaker.avatarPreviewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(speaker.avatarPreviewUrl);
    }
    speaker.avatarPreviewUrl = file ? URL.createObjectURL(file) : null;
  }
  loadEventData(event) {
    let startDateStr = "";
    let startTimeStr = "";
    let endDateStr = "";
    let endTimeStr = "";
    if (event.startTime) {
      startTimeStr = String(event.startTime).split(":").slice(0, 2).join(":");
    }
    if (event.endTime) {
      endTimeStr = String(event.endTime).split(":").slice(0, 2).join(":");
    }
    if (event.startDate) {
      if (typeof event.startDate === "string") {
        startDateStr = event.startDate.split("T")[0];
      } else {
        const d = new Date(event.startDate);
        startDateStr = d.toISOString().split("T")[0];
      }
    }
    if (event.endDate) {
      if (typeof event.endDate === "string") {
        endDateStr = event.endDate.split("T")[0];
      } else {
        const d = new Date(event.endDate);
        endDateStr = d.toISOString().split("T")[0];
      }
    }
    const speakersList = event.speakers || [];
    const idToSpeakerIndex = /* @__PURE__ */ new Map();
    speakersList.forEach((s, idx) => {
      if (s.id != null) {
        idToSpeakerIndex.set(Number(s.id), idx);
      }
    });
    const scheduleRows = (event.schedules || event.schedule || []).map((it) => {
      let speakerIndex = null;
      if (it.speakerId != null && idToSpeakerIndex.has(Number(it.speakerId))) {
        speakerIndex = idToSpeakerIndex.get(Number(it.speakerId)) ?? null;
      }
      const st = it.startTime ? String(it.startTime).split(":").slice(0, 2).join(":") : "";
      const et = it.endTime ? String(it.endTime).split(":").slice(0, 2).join(":") : "";
      return {
        startTime: st,
        endTime: et,
        title: it.title || "",
        description: it.description || "",
        speakerIndex,
        location: it.location || ""
      };
    });
    this.revokeCoverPreview();
    this.coverImageFile = null;
    const mappedTicketTypes = (event.ticketTypes || []).map((t) => {
      const rawType = (t.type || "MEMBER").toString().toUpperCase();
      const price = t.price != null ? Number(t.price) : 0;
      const uiType = rawType === "MEMBER" && price <= 0 ? "FREE_MEMBER" : rawType;
      return {
        name: this.defaultTicketName(uiType),
        type: uiType,
        price,
        availableQuantity: t.availableQuantity != null ? Number(t.availableQuantity) : 0,
        quantityLimit: t.quantityLimit,
        description: t.description || "",
        earlyBirdEndDate: rawType === "EARLY_BIRD" && event.earlyBirdEndDate ? String(event.earlyBirdEndDate).split("T")[0] : ""
      };
    });
    if (mappedTicketTypes.length === 0) {
      const memberPrice = Number(event.memberPrice) || 0;
      const freeMemberPrice = Number(event.earlyBirdPrice) || 0;
      const nonMemberPrice = Number(event.nonMemberPrice) || 0;
      if (memberPrice > 0) {
        mappedTicketTypes.push({
          name: this.defaultTicketName("MEMBER"),
          type: "MEMBER",
          price: memberPrice,
          availableQuantity: Number(event.capacity) || 0,
          quantityLimit: null,
          description: ""
        });
      }
      if (freeMemberPrice > 0) {
        const treatAsEarlyBird = !!event.earlyBirdEndDate;
        const synType = treatAsEarlyBird ? "EARLY_BIRD" : "FREE_MEMBER";
        mappedTicketTypes.push({
          name: this.defaultTicketName(synType),
          type: synType,
          price: freeMemberPrice,
          availableQuantity: Number(event.capacity) || 0,
          quantityLimit: null,
          description: "",
          earlyBirdEndDate: treatAsEarlyBird && event.earlyBirdEndDate ? String(event.earlyBirdEndDate).split("T")[0] : ""
        });
      }
      if (nonMemberPrice > 0) {
        mappedTicketTypes.push({
          name: this.defaultTicketName("NON_MEMBER"),
          type: "NON_MEMBER",
          price: nonMemberPrice,
          availableQuantity: Number(event.capacity) || 0,
          quantityLimit: null,
          description: ""
        });
      }
    }
    this.eventData = {
      name: event.name || event.title || "",
      type: event.type || "CONFERENCE",
      description: event.description || event.shortDescription || "",
      fullDescription: event.fullDescription || "",
      startDate: startDateStr,
      endDate: endDateStr,
      startTime: startTimeStr,
      endTime: endTimeStr,
      location: event.location || event.venue || "",
      locationType: event.locationType || "IN_PERSON",
      format: event.format || event.locationType || "IN_PERSON",
      onlineLink: event.onlineLink || "",
      capacity: event.capacity ?? 100,
      visibility: event.visibility || "PUBLIC",
      organizerName: event.organizerName || "",
      organizerEmail: event.organizerEmail || "",
      organizerPhone: event.organizerPhone || "",
      pricing: event.pricing || {
        type: event.pricingType || "FREE",
        memberPrice: Number(event.memberPrice) || 0,
        nonMemberPrice: Number(event.nonMemberPrice) || 0,
        earlyBirdPrice: Number(event.earlyBirdPrice) || 0,
        earlyBirdEndDate: event.earlyBirdEndDate ? String(event.earlyBirdEndDate).split("T")[0] : ""
      },
      ticketTypes: mappedTicketTypes,
      schedule: scheduleRows,
      speakers: speakersList.map((s) => ({
        name: s.name || "",
        title: s.title || "",
        company: s.company || "",
        bio: s.bio || "",
        avatarUrl: s.avatarUrl || "",
        linkedinUrl: s.linkedinUrl || "",
        twitterUrl: s.twitterUrl || "",
        websiteUrl: s.websiteUrl || "",
        avatarFile: null,
        avatarPreviewUrl: null
      })),
      imageUrl: event.imageUrl || ""
    };
  }
  loadEditEventData(event) {
    const eventId = Number(event?.id);
    if (!eventId) {
      this.loadEventData(event);
      return;
    }
    this.apiService.getEventById(eventId).subscribe({
      next: (fullEvent) => {
        this.loadEventData(fullEvent || event);
      },
      error: () => {
        this.loadEventData(event);
      }
    });
  }
  onClose() {
    if (this.isModal) {
      this.close.emit();
    } else {
      this.navigate.emit("event-management");
    }
  }
  nextStep() {
    if (this.validateCurrentStep() && this.currentStep < this.totalSteps) {
      this.currentStep++;
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
      if (!this.eventData.name?.trim() || !this.eventData.type || !this.eventData.description?.trim()) {
        this.errorMessage = "Please complete Event name, Event type, and Short description.";
        return false;
      }
    } else if (this.currentStep === 2) {
      if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
        this.errorMessage = "Please fill in start and end date and time.";
        return false;
      }
      const startDateTime = /* @__PURE__ */ new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
      const endDateTime = /* @__PURE__ */ new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
      if (!this.isEditMode && startDateTime <= /* @__PURE__ */ new Date()) {
        this.errorMessage = "Start date and time must be in the future.";
        return false;
      }
      if (endDateTime <= startDateTime) {
        this.errorMessage = "End must be after start.";
        return false;
      }
    } else if (this.currentStep === 3) {
      if (!this.eventData.locationType || !this.eventData.format || !this.eventData.location?.trim()) {
        this.errorMessage = "Please set location type, event format, and venue.";
        return false;
      }
      if (this.eventData.capacity == null || Number(this.eventData.capacity) < 1) {
        this.errorMessage = "Please enter a valid capacity.";
        return false;
      }
      if (!this.eventData.visibility) {
        this.errorMessage = "Please choose visibility.";
        return false;
      }
      if (this.eventData.locationType === "ONLINE" && !this.eventData.onlineLink?.trim()) {
        this.errorMessage = "Please add the online meeting link.";
        return false;
      }
    } else if (this.currentStep === 4) {
      if (!this.eventData.organizerName?.trim() || !this.eventData.organizerEmail?.trim()) {
        this.errorMessage = "Organizer name and email are required.";
        return false;
      }
      const email = String(this.eventData.organizerEmail).trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        this.errorMessage = "Please enter a valid organizer email.";
        return false;
      }
      if (this.eventData.organizerPhone?.trim()) {
        const raw = String(this.eventData.organizerPhone).trim();
        const digits = raw.replace(/\D/g, "").length;
        if (!/^[0-9+\-\s()]{7,20}$/.test(raw) || digits < 7) {
          this.errorMessage = "Please enter a valid phone number or leave it blank.";
          return false;
        }
      }
      const pType = this.eventData.pricing?.type || "FREE";
      if (pType === "PAID" || pType === "DISCOUNTED") {
        const activeTickets = (this.eventData.ticketTypes || []).filter((t) => String(t?.name || "").trim().length > 0);
        const hasPricedTicket = activeTickets.some((t) => Number(t?.price || 0) > 0);
        if (!hasPricedTicket) {
          this.errorMessage = "For paid events, add at least one priced ticket type.";
          return false;
        }
      }
      const seenTypes = /* @__PURE__ */ new Set();
      for (const t of this.eventData.ticketTypes || []) {
        const name = String(t?.name || "").trim();
        if (!name) {
          continue;
        }
        const type = String(t?.type || "MEMBER").toUpperCase();
        if (seenTypes.has(type)) {
          this.errorMessage = `Duplicate ticket type "${type}" is not allowed. Keep only one entry per type.`;
          return false;
        }
        seenTypes.add(type);
        if (type === "EARLY_BIRD") {
          const earlyBirdEndDate = String(t?.earlyBirdEndDate || "").trim();
          if (!earlyBirdEndDate) {
            this.errorMessage = "Early Bird ticket requires an end date.";
            return false;
          }
          const today = this.getMinDate();
          if (earlyBirdEndDate < today) {
            this.errorMessage = "Early Bird end date cannot be before today.";
            return false;
          }
          const eventEnd = this.eventData.endDate ? String(this.eventData.endDate).split("T")[0] : "";
          if (!eventEnd) {
            this.errorMessage = "Set the event end date in Date & time (step 2) before using Early Bird.";
            return false;
          }
          if (earlyBirdEndDate > eventEnd) {
            this.errorMessage = "Early Bird end date must be on or before the event end date.";
            return false;
          }
        }
      }
      if (!this.validateTicketQuantitiesAgainstCapacity()) {
        return false;
      }
    } else if (this.currentStep === 5) {
      const speakers = this.eventData.speakers || [];
      for (let i = 0; i < speakers.length; i++) {
        const s = speakers[i];
        if (s.avatarFile && !s.name?.trim()) {
          this.errorMessage = "A speaker photo requires that speaker name.";
          return false;
        }
        if (!s.name?.trim()) {
          this.errorMessage = `Speaker ${i + 1}: enter a name or remove this row.`;
          return false;
        }
      }
      const schedule = this.eventData.schedule || [];
      for (let i = 0; i < schedule.length; i++) {
        const it = schedule[i];
        const partial = !!(it.title || it.startTime || it.endTime || it.description || it.location);
        if (partial && (!it.startTime || !it.endTime || !it.title?.trim())) {
          this.errorMessage = `Schedule item ${i + 1}: start time, end time, and title are required.`;
          return false;
        }
      }
    }
    return true;
  }
  /**
   * Ticket display name sent to API: "{Paid Member|Free Member|…} Ticket" from selected tier.
   */
  defaultTicketName(uiType) {
    const key = String(uiType || "MEMBER").toUpperCase();
    const labels = {
      MEMBER: "Paid Member",
      FREE_MEMBER: "Free Member",
      NON_MEMBER: "Non Member",
      VIP: "VIP",
      EARLY_BIRD: "Early Bird"
    };
    const label = labels[key] || "Ticket";
    return `${label} Ticket`;
  }
  onTicketTypeChange(t) {
    if (!t)
      return;
    t.name = this.defaultTicketName(t.type);
  }
  addTicketType() {
    if ((this.eventData.pricing?.type || "FREE") === "FREE") {
      this.errorMessage = "Ticket types are disabled for free events.";
      return;
    }
    const usedTypes = new Set((this.eventData.ticketTypes || []).map((t) => String(t?.type || "").toUpperCase()).filter((t) => !!t));
    const allTypes = ["MEMBER", "FREE_MEMBER", "NON_MEMBER", "VIP", "EARLY_BIRD"];
    const nextType = allTypes.find((t) => !usedTypes.has(t));
    if (!nextType) {
      this.errorMessage = "Each ticket type can be added only once.";
      return;
    }
    this.eventData.ticketTypes.push({
      name: this.defaultTicketName(nextType),
      type: nextType,
      price: 0,
      availableQuantity: 0,
      quantityLimit: null,
      description: "",
      earlyBirdEndDate: ""
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
      speakerIndex: null,
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
      avatarUrl: "",
      linkedinUrl: "",
      twitterUrl: "",
      websiteUrl: "",
      avatarFile: null,
      avatarPreviewUrl: null
    });
  }
  removeSpeaker(index) {
    const s = this.eventData.speakers[index];
    if (s?.avatarPreviewUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(s.avatarPreviewUrl);
    }
    this.eventData.speakers.splice(index, 1);
  }
  /**
   * Same quantity rules as buildEventJson(): named ticket rows only;
   * blank quantity defaults to full event capacity per tier.
   */
  validateTicketQuantitiesAgainstCapacity() {
    const pType = this.eventData.pricing?.type || "FREE";
    if (pType === "FREE") {
      return true;
    }
    const cap = Number(this.eventData.capacity);
    if (!Number.isFinite(cap) || cap < 1) {
      return true;
    }
    const namedTickets = (this.eventData.ticketTypes || []).filter((t) => String(t?.name || "").trim().length > 0);
    if (namedTickets.length === 0) {
      return true;
    }
    let sum = 0;
    for (const t of namedTickets) {
      const raw = t.availableQuantity;
      const q = raw != null && raw !== "" ? Number(raw) : cap;
      if (!Number.isFinite(q) || q < 0 || !Number.isInteger(q)) {
        this.errorMessage = "Each ticket quantity must be a non-negative whole number.";
        return false;
      }
      sum += q;
    }
    if (sum > cap) {
      this.errorMessage = `Total ticket quantities (${sum}) cannot exceed event capacity (${cap}). Reduce quantities or raise capacity in Location & capacity (step 3).`;
      return false;
    }
    return true;
  }
  validateDateTimes() {
    this.errorMessage = "";
    if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
      this.errorMessage = "Please fill in all date and time fields.";
      return false;
    }
    const startDateTime = /* @__PURE__ */ new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    const endDateTime = /* @__PURE__ */ new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
    if (!this.isEditMode && startDateTime <= /* @__PURE__ */ new Date()) {
      this.errorMessage = "Start date and time must be in the future.";
      return false;
    }
    if (endDateTime <= startDateTime) {
      this.errorMessage = "End date and time must be after start.";
      return false;
    }
    return true;
  }
  buildEventJson() {
    const pricingType = this.eventData.pricing?.type || "FREE";
    const speakers = (this.eventData.speakers || []).map((s) => ({
      name: String(s.name || "").trim(),
      title: s.title || "",
      company: s.company || "",
      bio: s.bio || "",
      avatarUrl: s.avatarUrl || "",
      linkedinUrl: s.linkedinUrl || "",
      twitterUrl: s.twitterUrl || "",
      websiteUrl: s.websiteUrl || ""
    }));
    const ticketTypes = (this.eventData.pricing?.type || "FREE") === "FREE" ? [] : (this.eventData.ticketTypes || []).filter((t) => String(t?.type || "").trim()).map((t) => ({
      name: this.defaultTicketName(t.type),
      type: String(t.type || "MEMBER").toUpperCase(),
      price: Number(t.price) || 0,
      quantityLimit: t.quantityLimit != null ? Number(t.quantityLimit) : null,
      availableQuantity: t.availableQuantity != null && t.availableQuantity !== "" ? Number(t.availableQuantity) : Number(this.eventData.capacity) || 0,
      description: t.description || ""
    }));
    const findTicket = (codes) => ticketTypes.find((x) => codes.includes(String(x?.type || "").toUpperCase()));
    const paidMemberTicket = findTicket(["MEMBER"]);
    const nonMemberTicket = findTicket(["NON_MEMBER"]);
    const earlyBirdTicket = findTicket(["EARLY_BIRD"]);
    const schedules = (this.eventData.schedule || []).filter((item) => item.title?.trim() && item.startTime && item.endTime).map((item, orderIndex) => ({
      startTime: item.startTime,
      endTime: item.endTime,
      title: String(item.title).trim(),
      description: item.description || "",
      location: item.location || "",
      speakerId: item.speakerIndex !== null && item.speakerIndex !== void 0 && item.speakerIndex !== "" ? Number(item.speakerIndex) : null,
      order: orderIndex
    }));
    return {
      name: String(this.eventData.name).trim(),
      type: this.eventData.type,
      description: String(this.eventData.description).trim(),
      fullDescription: this.eventData.fullDescription || "",
      startDate: this.eventData.startDate,
      startTime: this.eventData.startTime,
      endDate: this.eventData.endDate,
      endTime: this.eventData.endTime,
      location: String(this.eventData.location).trim(),
      locationType: this.eventData.locationType,
      format: this.eventData.format,
      onlineLink: this.eventData.onlineLink || "",
      capacity: Number(this.eventData.capacity),
      visibility: this.eventData.visibility,
      organizerName: String(this.eventData.organizerName).trim(),
      organizerEmail: String(this.eventData.organizerEmail).trim(),
      organizerPhone: this.eventData.organizerPhone || "",
      pricingType,
      // Keep legacy pricing fields in sync with ticket types for backend compatibility
      memberPrice: pricingType === "FREE" ? 0 : Number(paidMemberTicket?.price || 0),
      nonMemberPrice: pricingType === "FREE" ? 0 : Number(nonMemberTicket?.price || 0),
      earlyBirdPrice: Number(earlyBirdTicket?.price || 0) || 0,
      earlyBirdEndDate: (() => {
        const v = earlyBirdTicket?.earlyBirdEndDate || this.eventData.pricing?.earlyBirdEndDate;
        return v && String(v).trim() ? v : null;
      })(),
      imageUrl: this.eventData.imageUrl || "",
      ticketTypes,
      speakers,
      schedules,
      status: "DRAFT"
    };
  }
  appendSpeakerAvatars(formData, speakersRaw) {
    const avatarIdx = [];
    speakersRaw.forEach((s, idx) => {
      if (!s.name?.trim()) {
        return;
      }
      if (s.avatarFile) {
        avatarIdx.push(idx);
        formData.append("speakerAvatar", s.avatarFile, s.avatarFile.name);
      }
    });
    if (avatarIdx.length) {
      formData.append("speakerAvatarIndexes", avatarIdx.join(","));
    }
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
    if (!this.validateTicketQuantitiesAgainstCapacity()) {
      this.currentStep = 4;
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.successMessage = "";
    const jsonBody = this.buildEventJson();
    const speakersRaw = this.eventData.speakers || [];
    const useMultipartCreate = !this.isEditMode && (!!this.coverImageFile || speakersRaw.some((s) => s.avatarFile));
    const useMultipartUpdate = this.isEditMode && this.editEvent?.id && !!this.coverImageFile;
    if (this.isEditMode && this.editEvent?.id) {
      jsonBody.id = this.editEvent.id;
      if (useMultipartUpdate) {
        const fd = new FormData();
        fd.append("event", new Blob([JSON.stringify(jsonBody)], { type: "application/json" }));
        fd.append("coverImage", this.coverImageFile, this.coverImageFile.name);
        this.apiService.updateEventFormData(this.editEvent.id, fd).subscribe({
          next: () => this.onSaveSuccess(),
          error: (e) => this.onSaveError(e)
        });
        return;
      }
      this.apiService.updateEvent(this.editEvent.id, jsonBody).subscribe({
        next: () => this.onSaveSuccess(),
        error: (e) => this.onSaveError(e)
      });
      return;
    }
    if (useMultipartCreate) {
      const fd = new FormData();
      fd.append("event", new Blob([JSON.stringify(jsonBody)], { type: "application/json" }));
      if (this.coverImageFile) {
        fd.append("coverImage", this.coverImageFile, this.coverImageFile.name);
      }
      this.appendSpeakerAvatars(fd, speakersRaw);
      this.apiService.createEventFormData(fd).subscribe({
        next: () => this.onSaveSuccess(),
        error: (e) => this.onSaveError(e)
      });
      return;
    }
    this.apiService.createEvent(jsonBody).subscribe({
      next: () => this.onSaveSuccess(),
      error: (e) => this.onSaveError(e)
    });
  }
  onSaveSuccess() {
    this.isLoading = false;
    this.successMessage = this.isEditMode ? "Event updated successfully." : "Event created successfully.";
    setTimeout(() => {
      this.saved.emit();
      if (this.isModal) {
        this.close.emit();
      } else {
        this.navigate.emit("event-management");
      }
    }, 1200);
  }
  onSaveError(error) {
    this.isLoading = false;
    const msg = error?.error?.message || error?.message || "";
    this.errorMessage = msg || "Something went wrong. Please try again.";
  }
  onCancel() {
    this.onClose();
  }
  getMinDate() {
    return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  }
  getMinEndDate() {
    return this.eventData.startDate || this.getMinDate();
  }
  /** Upper bound for Early Bird end date: last day of the event (step 2 end date). */
  getEarlyBirdMaxDate() {
    if (!this.eventData?.endDate) {
      return "";
    }
    return String(this.eventData.endDate).split("T")[0];
  }
  hasDateValidationError() {
    if (!this.eventData.startDate || !this.eventData.startTime || this.isEditMode) {
      return false;
    }
    const startDateTime = /* @__PURE__ */ new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    return startDateTime <= /* @__PURE__ */ new Date();
  }
  hasEndDateError() {
    if (!this.eventData.startDate || !this.eventData.endDate || !this.eventData.startTime || !this.eventData.endTime) {
      return false;
    }
    const a = /* @__PURE__ */ new Date(`${this.eventData.startDate}T${this.eventData.startTime}`);
    const b = /* @__PURE__ */ new Date(`${this.eventData.endDate}T${this.eventData.endTime}`);
    return b <= a;
  }
  speakerDisplayOptions() {
    return (this.eventData.speakers || []).map((s, index) => ({
      index,
      label: `Speaker ${index + 1}: ${s.name?.trim() || "(no name yet)"}`
    }));
  }
  static {
    this.\u0275fac = function EventCreateComponent_Factory(t) {
      return new (t || _EventCreateComponent)(\u0275\u0275directiveInject(ApiService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCreateComponent, selectors: [["app-event-create"]], inputs: { isModal: "isModal", editEvent: "editEvent", show: "show", saveEvent: "saveEvent" }, outputs: { navigate: "navigate", close: "close", saved: "saved" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "step-track"], ["class", "step-node", 3, "active", "completed", 4, "ngFor", "ngForOf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "modal-body"], ["class", "step-section", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "class", "btn-pill btn-secondary", 3, "click", 4, "ngIf"], ["class", "footer-next", 4, "ngIf"], [1, "step-node"], [1, "step-circle"], [1, "step-label"], ["class", "step-line", 3, "filled", 4, "ngIf"], [1, "step-line"], [1, "alert", "alert-error"], [1, "alert", "alert-success"], [1, "step-section"], [1, "form-title"], [1, "form-grid"], [1, "input-group"], [1, "input-label"], [1, "req"], ["type", "text", "placeholder", "Event name", 1, "premium-input", 3, "ngModelChange", "ngModel"], [1, "premium-input", 3, "ngModelChange", "ngModel"], ["value", "CONFERENCE"], ["value", "WORKSHOP"], ["value", "NETWORKING"], ["value", "SEMINAR"], ["value", "WEBINAR"], ["value", "TRAINING"], ["value", "OTHER"], [1, "input-group", "full-width"], ["type", "text", "placeholder", "One line summary", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", "image/jpeg,image/png,image/gif,image/webp", 1, "premium-input", "file-input", 3, "change"], [1, "hint"], ["class", "image-preview-row", 4, "ngIf"], ["rows", "4", "placeholder", "Full details (optional)", 1, "premium-input", "resize-y", 3, "ngModelChange", "ngModel"], [1, "image-preview-row"], ["alt", "Event preview", 1, "thumb-preview", 3, "src"], ["type", "button", "class", "link-button", 3, "click", 4, "ngIf"], ["type", "button", 1, "link-button", 3, "click"], [1, "form-grid", "form-grid-2"], ["type", "date", 1, "premium-input", 3, "ngModelChange", "ngModel", "min"], ["type", "time", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["class", "field-hint warn", 4, "ngIf"], [1, "field-hint", "warn"], ["value", "IN_PERSON"], ["value", "ONLINE"], ["value", "HYBRID"], ["type", "text", "placeholder", "Address or venue name", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["class", "input-group full-width", 4, "ngIf"], ["type", "number", "min", "1", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["value", "PUBLIC"], ["value", "MEMBERS_ONLY"], ["type", "url", "placeholder", "https://example.com/meeting", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Organizer name", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "name@example.com", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "+1 \u2026 (optional)", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["value", "FREE"], ["value", "PAID"], ["value", "DISCOUNTED"], ["class", "subsection-head", 4, "ngIf"], ["class", "field-hint", 4, "ngIf"], ["class", "stack", 4, "ngIf"], [1, "subsection-head"], [1, "subsection-title"], ["type", "button", 1, "btn-pill", "btn-primary", "btn-small", 3, "click"], [1, "field-hint"], [1, "stack"], ["class", "ticket-card", 4, "ngFor", "ngForOf"], [1, "ticket-card"], ["type", "button", 1, "remove-link", 3, "click"], [1, "ticket-row"], [1, "premium-input", "grow", "flex", "items-center", "min-h-[42px]", "text-slate-800", "font-semibold", "bg-slate-50", "border", "border-slate-200", "rounded-xl", "px-3", 3, "title"], [1, "premium-input", "ticket-type-select", 3, "ngModelChange", "ngModel"], ["value", "MEMBER"], ["value", "FREE_MEMBER"], ["value", "NON_MEMBER"], ["value", "VIP"], ["value", "EARLY_BIRD"], [1, "inline-input-group"], [1, "inline-input-label"], ["type", "number", "min", "0", "step", "0.01", "placeholder", "0", 1, "premium-input", "num", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "placeholder", "0", 1, "premium-input", "num", 3, "ngModelChange", "ngModel"], ["class", "early-bird-date-block", 4, "ngIf"], [1, "early-bird-date-block"], [1, "input-label", "text-xs", "font-bold", "text-slate-600"], ["type", "date", 1, "premium-input", "early-bird-date", "mt-1", "max-w-xs", 3, "ngModelChange", "ngModel", "min", "max"], ["class", "field-hint mt-1", 4, "ngIf"], ["class", "field-hint warn mt-1", 4, "ngIf"], [1, "field-hint", "mt-1"], [1, "field-hint", "warn", "mt-1"], ["class", "item-card", 4, "ngFor", "ngForOf"], [1, "item-card"], ["type", "button", 1, "remove-link", "card-remove", 3, "click"], [1, "card-kicker"], ["type", "text", "placeholder", "Speaker name", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Job title", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Company name", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Speaker biography", 1, "premium-input", "resize-y", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "LinkedIn URL", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "Twitter URL", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "Website URL", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["alt", "", 1, "thumb-preview", "sm", 3, "src"], ["type", "text", "placeholder", "Session title", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "Session description", 1, "premium-input", "resize-y", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Room or venue", 1, "premium-input", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn-pill", "btn-secondary", 3, "click"], [1, "footer-next"], ["type", "button", 1, "btn-pill", "btn-primary", 3, "click", "disabled"], ["type", "button", 1, "btn-pill", "btn-success", 3, "click", "disabled"]], template: function EventCreateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, EventCreateComponent_div_0_Template, 21, 13, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  --modal-primary: #6366f1;\n  --modal-success: #10b981;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.4);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.modal-container[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.98);\n  border-radius: 32px;\n  width: 100%;\n  max-width: 900px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_modalReveal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;\n  scrollbar-width: thin;\n}\n@keyframes _ngcontent-%COMP%_modalReveal {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  border-bottom: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.step-track[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 40px;\n  background: #f8fafc;\n  margin: 0 40px 40px;\n  border-radius: 24px;\n  border: 1px solid #f1f5f9;\n}\n.step-node[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  z-index: 2;\n  flex: 1;\n}\n.step-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 900;\n  transition: all 0.3s;\n  background: white;\n  border: 2px solid #e2e8f0;\n  color: #94a3b8;\n}\n.step-node.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: var(--modal-primary);\n  border-color: var(--modal-primary);\n  color: white;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);\n}\n.step-node.completed[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: var(--modal-success);\n  border-color: var(--modal-success);\n  color: white;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-top: 12px;\n}\n.step-node.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.step-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 100%;\n  height: 2px;\n  background: #e2e8f0;\n  z-index: 1;\n}\n.step-line.filled[_ngcontent-%COMP%] {\n  background: var(--modal-primary);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 40px 40px;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 900;\n  color: #0f172a;\n  margin-bottom: 24px;\n}\n.input-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.premium-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  background: #f8fafc;\n  border: 2px solid #f1f5f9;\n  border-radius: 14px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.premium-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--modal-primary);\n  background: white;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 32px 40px;\n  background: #f8fafc;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0 0 32px 32px;\n}\n.btn-pill[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  border-radius: 16px;\n  font-size: 0.75rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e2e8f0;\n  color: #64748b;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--modal-primary);\n  color: white;\n}\n.item-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #f1f5f9;\n  border-radius: 20px;\n  padding: 24px;\n  margin-bottom: 16px;\n  position: relative;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n}\n.step-section[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.form-grid-2[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 640px) {\n  .form-grid[_ngcontent-%COMP%], .form-grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.input-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.req[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.alert[_ngcontent-%COMP%] {\n  margin: 0 40px 16px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  font-size: 0.875rem;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #b91c1c;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  color: #047857;\n}\n.file-input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  font-size: 0.8rem;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin: 6px 0 0;\n}\n.image-preview-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 10px;\n}\n.thumb-preview[_ngcontent-%COMP%] {\n  max-height: 120px;\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.thumb-preview.sm[_ngcontent-%COMP%] {\n  max-height: 64px;\n}\n.link-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6366f1;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.resize-y[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin-top: 8px;\n}\n.field-hint.warn[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.subsection-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 28px 0 12px;\n}\n.subsection-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.btn-small[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 0.65rem;\n}\n.price-box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin: 16px 0 8px;\n  padding: 16px;\n  background: #f8fafc;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n}\n@media (max-width: 640px) {\n  .price-box[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ticket-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  border: 1px solid #f1f5f9;\n  border-radius: 16px;\n  padding: 16px 16px 12px;\n}\n.ticket-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: center;\n  padding-top: 8px;\n}\n.grow[_ngcontent-%COMP%] {\n  flex: 1 1 140px;\n}\n.premium-input.num[_ngcontent-%COMP%] {\n  width: 96px;\n  flex: 0 0 auto;\n}\n.inline-input-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.inline-input-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #475569;\n  white-space: nowrap;\n}\n.ticket-type-select[_ngcontent-%COMP%] {\n  min-width: 120px;\n  flex: 0 0 auto;\n}\n.early-bird-date[_ngcontent-%COMP%] {\n  min-width: 170px;\n  flex: 0 0 auto;\n}\n.early-bird-date-block[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid rgba(226, 232, 240, 0.95);\n  width: 100%;\n}\n.remove-link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 14px;\n  background: none;\n  border: none;\n  color: #ef4444;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n.card-remove[_ngcontent-%COMP%] {\n  top: 16px;\n  right: 16px;\n}\n.card-kicker[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #6366f1;\n  margin: 0 0 12px;\n}\n.footer-next[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n}\n.btn-success[_ngcontent-%COMP%]:disabled, .btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  backdrop-filter: none;\n  -webkit-backdrop-filter: none;\n}\n.modal-container[_ngcontent-%COMP%] {\n  animation: none;\n}\n.btn-pill[_ngcontent-%COMP%], .step-circle[_ngcontent-%COMP%] {\n  transition: none;\n}\n/*# sourceMappingURL=event-create.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCreateComponent, { className: "EventCreateComponent", filePath: "src\\app\\pages\\event-create\\event-create.component.ts", lineNumber: 13 });
})();

export {
  EventCreateComponent
};
//# sourceMappingURL=chunk-MLXA72YZ.js.map
