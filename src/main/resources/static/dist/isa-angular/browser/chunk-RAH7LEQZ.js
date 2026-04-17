import {
  AuthService
} from "./chunk-ULHL74DO.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-PKI2UZZD.js";
import {
  ApiService,
  CommonModule,
  DatePipe,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
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

// src/app/components/modals/resource-detail-modal/resource-detail-modal.component.ts
var _c0 = (a0, a1) => ({ "status-active": a0, "status-archived": a1 });
function ResourceDetailModalComponent_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, " REMOTELY ACCESSIBLE ");
    \u0275\u0275elementEnd();
  }
}
function ResourceDetailModalComponent_div_0_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "\u2022");
    \u0275\u0275elementEnd();
  }
}
function ResourceDetailModalComponent_div_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.resource.postedByCompany);
  }
}
function ResourceDetailModalComponent_div_0_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "p", 25);
    \u0275\u0275text(2, "Authorize Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.resource.hourlyRate, " ", ctx_r1.resource.currency || "USD", " / HOUR");
  }
}
function ResourceDetailModalComponent_div_0_section_48_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r3, " ");
  }
}
function ResourceDetailModalComponent_div_0_section_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 50)(1, "h4", 51)(2, "span", 21);
    \u0275\u0275text(3, "\u{1F6E0}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Core Competencies ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 52);
    \u0275\u0275template(6, ResourceDetailModalComponent_div_0_section_48_span_6_Template, 2, 1, "span", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.getSkillsArray());
  }
}
function ResourceDetailModalComponent_div_0_section_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 50)(1, "h4", 51)(2, "span", 21);
    \u0275\u0275text(3, "\u{1F3D7}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Project Retrospective ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resource.previousProjects, " ");
  }
}
function ResourceDetailModalComponent_div_0_div_66_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.resource.contactEmail);
  }
}
function ResourceDetailModalComponent_div_0_div_66_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.resource.contactPhone);
  }
}
function ResourceDetailModalComponent_div_0_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "h4", 57);
    \u0275\u0275text(2, "Authorized Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275template(4, ResourceDetailModalComponent_div_0_div_66_p_4_Template, 2, 1, "p", 59)(5, ResourceDetailModalComponent_div_0_div_66_p_5_Template, 2, 1, "p", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.resource.contactEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resource.contactPhone);
  }
}
function ResourceDetailModalComponent_div_0_div_67_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function ResourceDetailModalComponent_div_0_div_67_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showInterestForm = true);
    });
    \u0275\u0275text(1, " Open Channel ");
    \u0275\u0275elementEnd();
  }
}
function ResourceDetailModalComponent_div_0_div_67_form_8_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Transmitting...");
    \u0275\u0275elementEnd();
  }
}
function ResourceDetailModalComponent_div_0_div_67_form_8_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Authorize Transmission");
    \u0275\u0275elementEnd();
  }
}
function ResourceDetailModalComponent_div_0_div_67_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 69);
    \u0275\u0275listener("ngSubmit", function ResourceDetailModalComponent_div_0_div_67_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onSubmitInterest());
    });
    \u0275\u0275elementStart(1, "div", 70)(2, "label", 71);
    \u0275\u0275text(3, "Formal Inquiry Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ResourceDetailModalComponent_div_0_div_67_form_8_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.interestForm.message, $event) || (ctx_r1.interestForm.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "label", 71);
    \u0275\u0275text(7, "Response Endpoint Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function ResourceDetailModalComponent_div_0_div_67_form_8_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.interestForm.contactEmail, $event) || (ctx_r1.interestForm.contactEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "label", 71);
    \u0275\u0275text(11, "Tele-Contact (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ResourceDetailModalComponent_div_0_div_67_form_8_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.interestForm.contactPhone, $event) || (ctx_r1.interestForm.contactPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 75)(14, "button", 76);
    \u0275\u0275listener("click", function ResourceDetailModalComponent_div_0_div_67_form_8_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.showInterestForm = false);
    });
    \u0275\u0275text(15, "Dismiss Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 77);
    \u0275\u0275template(17, ResourceDetailModalComponent_div_0_div_67_form_8_span_17_Template, 2, 0, "span", 78)(18, ResourceDetailModalComponent_div_0_div_67_form_8_span_18_Template, 2, 0, "span", 78);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.interestForm.message);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.interestForm.contactEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.interestForm.contactPhone);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSubmitting);
  }
}
function ResourceDetailModalComponent_div_0_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "div")(3, "h4", 65);
    \u0275\u0275text(4, "Inquiry Terminal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 66);
    \u0275\u0275text(6, "Initiate a formal collaboration inquiry with the resource owner");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ResourceDetailModalComponent_div_0_div_67_button_7_Template, 2, 0, "button", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ResourceDetailModalComponent_div_0_div_67_form_8_Template, 19, 6, "form", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r1.showInterestForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showInterestForm);
  }
}
function ResourceDetailModalComponent_div_0_div_68_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275element(1, "div", 86);
    \u0275\u0275elementStart(2, "p", 87);
    \u0275\u0275text(3, "Synchronizing Interest Cloud...");
    \u0275\u0275elementEnd()();
  }
}
function ResourceDetailModalComponent_div_0_div_68_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "span", 89);
    \u0275\u0275text(2, "\u{1F4EB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 90);
    \u0275\u0275text(4, "No active inquiries tracked");
    \u0275\u0275elementEnd()();
  }
}
function ResourceDetailModalComponent_div_0_div_68_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "div", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 96);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 97);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 98)(11, "span", 99);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 100)(15, "div", 58)(16, "p", 87);
    \u0275\u0275text(17, "Member Narrative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 101);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 32)(21, "p", 87);
    \u0275\u0275text(22, "Secure Connectivity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 102)(24, "div", 103)(25, "span", 104);
    \u0275\u0275text(26, "Direct Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 105);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 103)(30, "span", 104);
    \u0275\u0275text(31, "Direct Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 105);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const interest_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (interest_r7.interestedUserName || interest_r7.interestedUserEmail || "U")[0].toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(interest_r7.interestedUserName || "Anonymous Member");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(interest_r7.interestedUserEmail);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("REC: ", \u0275\u0275pipeBind2(13, 7, interest_r7.createdAt, "MMM d, h:mm a"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(' "', interest_r7.message, '" ');
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(interest_r7.contactEmail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(interest_r7.contactPhone || "NOT DECLARED");
  }
}
function ResourceDetailModalComponent_div_0_div_68_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, ResourceDetailModalComponent_div_0_div_68_div_14_div_1_Template, 34, 10, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.interests);
  }
}
function ResourceDetailModalComponent_div_0_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "header", 64)(2, "div")(3, "h4", 65);
    \u0275\u0275text(4, "Inquiry Registry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 66);
    \u0275\u0275text(6, "Managing ");
    \u0275\u0275elementStart(7, "span", 80);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " member-initiated connections");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 81);
    \u0275\u0275listener("click", function ResourceDetailModalComponent_div_0_div_68_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshInterests());
    });
    \u0275\u0275text(11, " Sync Records ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ResourceDetailModalComponent_div_0_div_68_div_12_Template, 4, 0, "div", 82)(13, ResourceDetailModalComponent_div_0_div_68_div_13_Template, 5, 0, "div", 83)(14, ResourceDetailModalComponent_div_0_div_68_div_14_Template, 2, 1, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.interests.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isLoadingInterests);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingInterests);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingInterests && ctx_r1.interests.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingInterests && ctx_r1.interests.length > 0);
  }
}
function ResourceDetailModalComponent_div_0_button_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 106);
    \u0275\u0275listener("click", function ResourceDetailModalComponent_div_0_button_71_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.archiveResource.emit(ctx_r1.resource));
    });
    \u0275\u0275text(1, " Suspend Listing ");
    \u0275\u0275elementEnd();
  }
}
function ResourceDetailModalComponent_div_0_button_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function ResourceDetailModalComponent_div_0_button_72_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unarchiveResource.emit(ctx_r1.resource));
    });
    \u0275\u0275text(1, " Re-Activate ");
    \u0275\u0275elementEnd();
  }
}
function ResourceDetailModalComponent_div_0_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 68);
    \u0275\u0275listener("click", function ResourceDetailModalComponent_div_0_button_74_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editResource.emit(ctx_r1.resource));
    });
    \u0275\u0275text(1, " Refine Resource ");
    \u0275\u0275elementEnd();
  }
}
function ResourceDetailModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ResourceDetailModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ResourceDetailModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ResourceDetailModalComponent_div_0_span_7_Template, 2, 0, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 8);
    \u0275\u0275listener("click", function ResourceDetailModalComponent_div_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 9);
    \u0275\u0275element(10, "path", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "h3", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "span", 14);
    \u0275\u0275text(16, "Originator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ResourceDetailModalComponent_div_0_span_19_Template, 2, 0, "span", 15)(20, ResourceDetailModalComponent_div_0_span_20_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 17)(22, "div", 18)(23, "div", 19)(24, "section")(25, "h4", 20)(26, "span", 21);
    \u0275\u0275text(27, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Mission Narrative & Scope ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 22);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 23)(32, "div", 24)(33, "p", 25);
    \u0275\u0275text(34, "Technical Stack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 26);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 24)(38, "p", 25);
    \u0275\u0275text(39, "Domain Expertise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p", 26);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 24)(43, "p", 25);
    \u0275\u0275text(44, "Operational Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p", 26);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, ResourceDetailModalComponent_div_0_div_47_Template, 5, 2, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, ResourceDetailModalComponent_div_0_section_48_Template, 7, 1, "section", 28)(49, ResourceDetailModalComponent_div_0_section_49_Template, 7, 1, "section", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 29)(51, "div", 30)(52, "h4", 31);
    \u0275\u0275text(53, "Logistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 32)(55, "div", 33)(56, "span", 34);
    \u0275\u0275text(57, "Deployment Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 35);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 33)(61, "span", 34);
    \u0275\u0275text(62, "Contract Validity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 35);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(66, ResourceDetailModalComponent_div_0_div_66_Template, 6, 2, "div", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(67, ResourceDetailModalComponent_div_0_div_67_Template, 9, 2, "div", 37)(68, ResourceDetailModalComponent_div_0_div_68_Template, 15, 5, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 39)(70, "div", 40);
    \u0275\u0275template(71, ResourceDetailModalComponent_div_0_button_71_Template, 2, 0, "button", 41)(72, ResourceDetailModalComponent_div_0_button_72_Template, 2, 0, "button", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 43);
    \u0275\u0275template(74, ResourceDetailModalComponent_div_0_button_74_Template, 2, 0, "button", 44);
    \u0275\u0275elementStart(75, "button", 45);
    \u0275\u0275listener("click", function ResourceDetailModalComponent_div_0_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(76, "Close Terminal");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c0, ctx_r1.resource.status === "ACTIVE", ctx_r1.resource.status === "ARCHIVED"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.resource.status || "ACTIVE", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resource.isRemote);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resource.role);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.resource.postedByName || ctx_r1.resource.postedByEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resource.postedByCompany);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resource.postedByCompany);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resource.description, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.resource.stack);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resource.experience);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.resource.availability);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resource.hourlyRate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getSkillsArray().length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resource.previousProjects);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.resource.location || "Remote Deployment");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 22, ctx_r1.resource.expiryDate, "MMMM d, yyyy") || "Ongoing Listing");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.resource.contactEmail || ctx_r1.resource.contactPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.canShowInterest());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOwnResource || ctx_r1.interests.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isOwnResource && ctx_r1.resource && ctx_r1.resource.status !== "ARCHIVED");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOwnResource && ctx_r1.resource && ctx_r1.resource.status === "ARCHIVED");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isOwnResource && ctx_r1.resource && ctx_r1.resource.status !== "ARCHIVED");
  }
}
var ResourceDetailModalComponent = class _ResourceDetailModalComponent {
  constructor(apiService, authService) {
    this.apiService = apiService;
    this.authService = authService;
    this.show = false;
    this.resource = null;
    this.close = new EventEmitter();
    this.interestSubmitted = new EventEmitter();
    this.editResource = new EventEmitter();
    this.archiveResource = new EventEmitter();
    this.unarchiveResource = new EventEmitter();
    this.interestForm = {
      message: "",
      contactEmail: "",
      contactPhone: ""
    };
    this.isSubmitting = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.currentUser = null;
    this.showInterestForm = false;
    this.isOwnResource = false;
    this.interests = [];
    this.isLoadingInterests = false;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.interestForm.contactEmail = this.currentUser.email || "";
    }
  }
  ngOnChanges(changes) {
    if (changes["show"] && changes["show"].currentValue && this.resource) {
      this.checkOwnership();
      this.resetInterestForm();
      if (this.resource && this.resource.id && typeof this.resource.id === "number") {
        setTimeout(() => {
          this.loadInterests();
        }, 200);
      }
    }
    if (changes["show"] && !changes["show"].currentValue) {
      this.resetInterestForm();
      this.interests = [];
    }
    if (changes["resource"] && changes["resource"].currentValue && this.resource) {
      this.checkOwnership();
      if (this.resource.id && typeof this.resource.id === "number") {
        setTimeout(() => {
          this.loadInterests();
        }, 200);
      }
    }
  }
  loadInterests() {
    if (!this.resource?.id || typeof this.resource.id !== "number") {
      console.warn("Cannot load interests: resource ID is missing or invalid", this.resource);
      return;
    }
    console.log("Loading interests for resource:", this.resource.id, "isOwnResource:", this.isOwnResource);
    this.isLoadingInterests = true;
    this.apiService.getResourceInterests(this.resource.id).subscribe({
      next: (response) => {
        console.log("Interests API response:", response);
        this.interests = Array.isArray(response) ? response : [];
        this.isLoadingInterests = false;
        console.log("Successfully loaded interests:", this.interests.length);
        this.isOwnResource = true;
        if (this.interests.length > 0) {
          setTimeout(() => {
            this.scrollToInterests();
          }, 300);
        }
      },
      error: (error) => {
        console.error("Error loading interests:", error);
        console.error("Error status:", error.status);
        console.error("Error message:", error.error);
        if (error.status === 403) {
          console.warn("User does not own this resource, cannot view interests");
          this.isOwnResource = false;
        } else if (error.status === 401) {
          console.warn("Unauthorized to view interests - user not logged in");
        } else if (error.status === 404) {
          console.warn("Resource not found");
        } else {
          console.error("Unexpected error loading interests:", error);
        }
        this.interests = [];
        this.isLoadingInterests = false;
      }
    });
  }
  refreshInterests() {
    this.loadInterests();
  }
  scrollToInterests() {
    setTimeout(() => {
      const element = document.getElementById("interests-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  }
  checkOwnership() {
    if (!this.currentUser || !this.resource) {
      this.isOwnResource = false;
      console.log("Ownership check failed: missing currentUser or resource", {
        hasCurrentUser: !!this.currentUser,
        hasResource: !!this.resource,
        currentUserId: this.currentUser?.id,
        resourcePostedBy: this.resource?.postedBy
      });
      return;
    }
    const postedById = typeof this.resource.postedBy === "number" ? this.resource.postedBy : this.resource.postedBy ? parseInt(String(this.resource.postedBy)) : null;
    const currentUserId = typeof this.currentUser.id === "number" ? this.currentUser.id : parseInt(String(this.currentUser.id));
    const ownsById = postedById !== null && currentUserId !== null && postedById === currentUserId;
    const ownsByEmail = Boolean(this.resource.postedByEmail && this.resource.postedByEmail === this.currentUser.email);
    this.isOwnResource = ownsById || ownsByEmail;
    console.log("Ownership check result:", {
      isOwnResource: this.isOwnResource,
      postedById,
      currentUserId,
      ownsById,
      ownsByEmail,
      postedByEmail: this.resource.postedByEmail,
      currentUserEmail: this.currentUser.email
    });
  }
  resetInterestForm() {
    this.interestForm = {
      message: "",
      contactEmail: this.currentUser?.email || "",
      contactPhone: ""
    };
    this.showInterestForm = false;
    this.errorMessage = "";
    this.successMessage = "";
  }
  onSubmitInterest() {
    if (!this.resource || !this.currentUser) {
      this.errorMessage = "Please login to show interest";
      return;
    }
    if (!this.resource.id || typeof this.resource.id !== "number") {
      this.errorMessage = "Resource information is missing";
      return;
    }
    if (!this.interestForm.message || !this.interestForm.message.trim()) {
      this.errorMessage = "Please enter a message";
      return;
    }
    if (!this.interestForm.contactEmail || !this.interestForm.contactEmail.trim()) {
      this.errorMessage = "Please enter your contact email";
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = "";
    this.successMessage = "";
    const interestData = {
      message: this.interestForm.message,
      contactEmail: this.interestForm.contactEmail,
      contactPhone: this.interestForm.contactPhone || ""
    };
    this.apiService.submitResourceInterest(this.resource.id, interestData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.successMessage = "Your interest has been sent! The resource owner will contact you soon.";
        setTimeout(() => {
          this.interestSubmitted.emit();
          this.onClose();
        }, 2e3);
      },
      error: (error) => {
        this.isSubmitting = false;
        if (error.status === 409) {
          this.errorMessage = "You have already shown interest in this resource.";
        } else if (error.status === 400) {
          this.errorMessage = error.error?.message || "Invalid interest data. Please check your message and email.";
        } else {
          this.errorMessage = error.error?.message || "Error submitting interest. Please try again.";
        }
      }
    });
  }
  canShowInterest() {
    return !this.isOwnResource && !!this.currentUser && !!this.resource;
  }
  onClose() {
    this.close.emit();
  }
  getSkillsArray() {
    if (!this.resource?.skills)
      return [];
    if (Array.isArray(this.resource.skills)) {
      return this.resource.skills;
    }
    return [];
  }
  static {
    this.\u0275fac = function ResourceDetailModalComponent_Factory(t) {
      return new (t || _ResourceDetailModalComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResourceDetailModalComponent, selectors: [["app-resource-detail-modal"]], inputs: { show: "show", resource: "resource" }, outputs: { close: "close", interestSubmitted: "interestSubmitted", editResource: "editResource", archiveResource: "archiveResource", unarchiveResource: "unarchiveResource" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "detail-overlay fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8", 3, "click", 4, "ngIf"], [1, "detail-overlay", "fixed", "inset-0", "z-[200]", "flex", "items-center", "justify-center", "p-4", "md:p-8", 3, "click"], [1, "premium-modal", "w-full", "max-w-6xl", "h-full", "max-h-[85vh]", 3, "click"], [1, "modal-header-premium"], [1, "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-3"], [1, "status-badge", 3, "ngClass"], ["class", "status-badge bg-emerald-50 text-emerald-700 border border-emerald-100", 4, "ngIf"], [1, "h-14", "w-14", "flex", "items-center", "justify-center", "bg-slate-50", "rounded-full", "hover:bg-slate-100", "transition-colors", "text-slate-400", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "resource-title"], [1, "meta-info"], [1, "flex", "items-center", "gap-2"], [1, "text-[10px]", "uppercase", "font-black", "tracking-widest", "text-slate-300"], ["class", "opacity-30", 4, "ngIf"], ["class", "text-indigo-600 uppercase tracking-tighter", 4, "ngIf"], [1, "modal-body-premium"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-12"], [1, "lg:col-span-2", "space-y-12"], [1, "section-label"], [1, "w-8", "h-8", "rounded-xl", "bg-slate-50", "flex", "items-center", "justify-center"], [1, "text-lg", "font-medium", "text-slate-600", "leading-relaxed", "whitespace-pre-wrap", "pl-11"], [1, "grid", "grid-cols-2", "gap-4", "pl-11"], [1, "data-card"], [1, "data-label"], [1, "data-value"], ["class", "data-card", 4, "ngIf"], ["class", "pl-11", 4, "ngIf"], [1, "space-y-10"], [1, "bg-slate-50", "rounded-[32px]", "p-8", "border", "border-slate-100"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "text-slate-900", "mb-6"], [1, "space-y-6"], [1, "flex", "flex-col"], [1, "text-[10px]", "font-bold", "text-slate-400", "mb-1"], [1, "text-sm", "font-black", "text-slate-900"], ["class", "bg-indigo-50/50 rounded-[32px] p-8 border border-indigo-100", 4, "ngIf"], ["class", "interest-panel", 4, "ngIf"], ["class", "mt-12", 4, "ngIf"], [1, "modal-footer-premium"], [1, "flex-1", "flex", "gap-3"], ["class", "btn-secondary !text-orange-500 !border-orange-100 hover:!bg-orange-50", 3, "click", 4, "ngIf"], ["class", "btn-secondary !text-emerald-600 !border-emerald-100 hover:!bg-emerald-50", 3, "click", 4, "ngIf"], [1, "flex", "gap-3"], ["class", "btn-primary", 3, "click", 4, "ngIf"], [1, "btn-secondary", 3, "click"], [1, "status-badge", "bg-emerald-50", "text-emerald-700", "border", "border-emerald-100"], [1, "opacity-30"], [1, "text-indigo-600", "uppercase", "tracking-tighter"], [1, "data-value", "text-indigo-600"], [1, "pl-11"], [1, "section-label", "!ml-[-2.75rem]"], [1, "flex", "flex-wrap", "gap-2"], ["class", "px-5 py-3 bg-white border-2 border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600", 4, "ngFor", "ngForOf"], [1, "px-5", "py-3", "bg-white", "border-2", "border-slate-100", "rounded-2xl", "text-[10px]", "font-black", "uppercase", "tracking-widest", "text-slate-600"], [1, "text-base", "text-slate-500", "leading-relaxed", "font-medium"], [1, "bg-indigo-50/50", "rounded-[32px]", "p-8", "border", "border-indigo-100"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "text-indigo-600", "mb-6"], [1, "space-y-4"], ["class", "text-sm font-bold text-indigo-900 break-all", 4, "ngIf"], ["class", "text-sm font-bold text-indigo-900", 4, "ngIf"], [1, "text-sm", "font-bold", "text-indigo-900", "break-all"], [1, "text-sm", "font-bold", "text-indigo-900"], [1, "interest-panel"], [1, "flex", "items-center", "justify-between", "mb-10"], [1, "text-2xl", "font-black", "text-slate-900", "tracking-tighter"], [1, "text-sm", "font-bold", "text-slate-500"], ["id", "interestForm", "class", "grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-10 rounded-[32px] shadow-sm border border-slate-100", 3, "ngSubmit", 4, "ngIf"], [1, "btn-primary", 3, "click"], ["id", "interestForm", 1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8", "bg-white", "p-10", "rounded-[32px]", "shadow-sm", "border", "border-slate-100", 3, "ngSubmit"], [1, "md:col-span-2"], [1, "text-[10px]", "font-black", "uppercase", "tracking-widest", "text-slate-400", "mb-3", "block"], ["name", "message", "rows", "4", "placeholder", "Define the scope of interest and proposed collaborative value...", "required", "", 1, "w-full", "px-6", "py-4", "bg-slate-50", "border-2", "border-slate-100", "rounded-3xl", "text-sm", "font-bold", "focus:bg-white", "focus:border-indigo-600", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "contactEmail", "placeholder", "your.official@email.com", "required", "", 1, "w-full", "px-6", "py-4", "bg-slate-50", "border-2", "border-slate-100", "rounded-2xl", "text-sm", "font-bold", "focus:bg-white", "focus:border-indigo-600", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "contactPhone", "placeholder", "+1 (000) 000-0000", 1, "w-full", "px-6", "py-4", "bg-slate-50", "border-2", "border-slate-100", "rounded-2xl", "text-sm", "font-bold", "focus:bg-white", "focus:border-indigo-600", "outline-none", "transition-all", 3, "ngModelChange", "ngModel"], [1, "md:col-span-2", "flex", "justify-end", "gap-3", "mt-4"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "mt-12"], [1, "text-indigo-600"], [1, "btn-secondary", "!py-2", 3, "click", "disabled"], ["class", "py-20 text-center", 4, "ngIf"], ["class", "py-20 bg-slate-50 rounded-[40px] text-center border-2 border-dashed border-slate-200", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], [1, "py-20", "text-center"], [1, "h-10", "w-10", "border-4", "border-indigo-100", "border-t-indigo-600", "rounded-full", "animate-spin", "mx-auto", "mb-4"], [1, "text-[10px]", "font-black", "uppercase", "tracking-widest", "text-slate-300"], [1, "py-20", "bg-slate-50", "rounded-[40px]", "text-center", "border-2", "border-dashed", "border-slate-200"], [1, "text-5xl", "block", "mb-4", "grayscale", "opacity-20"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "text-slate-400"], ["class", "interest-card hover:border-indigo-200 transition-all", 4, "ngFor", "ngForOf"], [1, "interest-card", "hover:border-indigo-200", "transition-all"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "justify-between", "gap-6", "mb-8", "pb-6", "border-b", "border-slate-50"], [1, "flex", "items-center", "gap-4"], [1, "h-14", "w-14", "bg-indigo-600", "rounded-[22px]", "flex", "items-center", "justify-center", "text-xl", "font-black", "text-white", "shadow-lg"], [1, "text-lg", "font-black", "text-slate-900", "leading-none", "mb-1"], [1, "text-[10px]", "font-bold", "text-slate-400", "tracking-tighter"], [1, "text-right"], [1, "text-[10px]", "font-black", "uppercase", "tracking-widest", "px-3", "py-1", "bg-slate-50", "rounded-full", "text-slate-400"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "bg-slate-50", "p-6", "rounded-[24px]", "border", "border-slate-100", "italic", "text-slate-600", "font-medium"], [1, "grid", "grid-cols-2", "gap-4"], [1, "bg-indigo-50/50", "p-4", "rounded-2xl", "border", "border-indigo-50"], [1, "text-[8px]", "font-black", "uppercase", "tracking-widest", "text-indigo-400", "block", "mb-1"], [1, "text-xs", "font-black", "text-indigo-900"], [1, "btn-secondary", "!text-orange-500", "!border-orange-100", "hover:!bg-orange-50", 3, "click"], [1, "btn-secondary", "!text-emerald-600", "!border-emerald-100", "hover:!bg-emerald-50", 3, "click"]], template: function ResourceDetailModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ResourceDetailModalComponent_div_0_Template, 77, 28, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show && ctx.resource);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.detail-overlay[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.premium-modal[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 40px;\n  overflow: hidden;\n  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_modalScale 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_modalScale {\n  from {\n    transform: scale(0.9) translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1) translateY(0);\n    opacity: 1;\n  }\n}\n.modal-header-premium[_ngcontent-%COMP%] {\n  padding: 3rem 3.5rem 2rem;\n  background: #fff;\n  border-bottom: 1px solid #f1f5f9;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border-radius: 100px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.status-active[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #15803d;\n  border: 1px solid #dcfce7;\n}\n.status-archived[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.resource-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 900;\n  color: #0f172a;\n  letter-spacing: -0.05em;\n  line-height: 1.1;\n  margin: 1.5rem 0 0.5rem;\n}\n.meta-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #64748b;\n}\n.modal-body-premium[_ngcontent-%COMP%] {\n  padding: 2.5rem 3.5rem;\n  overflow-y: auto;\n  flex-grow: 1;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-cols: 1;\n  gap: 3rem;\n}\n@media (min-width: 768px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 2fr 1fr;\n  }\n}\n.data-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #f1f5f9;\n  border-radius: 24px;\n  padding: 1.5rem;\n}\n.data-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n}\n.data-value[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.interest-panel[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border-radius: 32px;\n  padding: 2.5rem;\n  margin-top: 3rem;\n}\n.interest-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  padding: 2rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f1f5f9;\n}\n.modal-footer-premium[_ngcontent-%COMP%] {\n  padding: 2rem 3.5rem 2.5rem;\n  background: #fff;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border-radius: 18px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: #64748b;\n  border: 2px solid #f1f5f9;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #e2e8f0;\n  color: #0f172a;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 1rem 2.5rem;\n  background: #6366f1;\n  color: white;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.4);\n  transition: all 0.3s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n  transform: translateY(-2px);\n  box-shadow: 0 15px 30px -5px rgba(99, 102, 241, 0.5);\n}\n/*# sourceMappingURL=resource-detail-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResourceDetailModalComponent, { className: "ResourceDetailModalComponent", filePath: "src\\app\\components\\modals\\resource-detail-modal\\resource-detail-modal.component.ts", lineNumber: 15 });
})();

// src/app/components/modals/resource-post-modal/resource-post-modal.component.ts
function ResourcePostModalComponent_div_0_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0\uFE0F ", ctx_r1.errorMessage, " ");
  }
}
function ResourcePostModalComponent_div_0_div_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2705 ", ctx_r1.successMessage, " ");
  }
}
function ResourcePostModalComponent_div_0_span_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Processing Auth...");
    \u0275\u0275elementEnd();
  }
}
function ResourcePostModalComponent_div_0_span_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Authorize Update" : "Initialize Listing");
  }
}
function ResourcePostModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ResourcePostModalComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("click", function ResourcePostModalComponent_div_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "h2", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 6);
    \u0275\u0275listener("click", function ResourcePostModalComponent_div_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 7);
    \u0275\u0275element(8, "path", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "p", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 10)(12, "form", 11);
    \u0275\u0275listener("ngSubmit", function ResourcePostModalComponent_div_0_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(13, "h4", 12);
    \u0275\u0275text(14, "Professional Identity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 13)(16, "div", 14)(17, "label", 15);
    \u0275\u0275text(18, "Architectural Role Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.role, $event) || (ctx_r1.resource.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "label", 15);
    \u0275\u0275text(22, "Core Technical Stack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.stack, $event) || (ctx_r1.resource.stack = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 14)(25, "label", 15);
    \u0275\u0275text(26, "Domain Seniority / Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.experience, $event) || (ctx_r1.resource.experience = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 14)(29, "label", 15);
    \u0275\u0275text(30, "Operational Availability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_select_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.availability, $event) || (ctx_r1.resource.availability = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(32, "option", 20);
    \u0275\u0275text(33, "IMMEDIATE DEPLOY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 21);
    \u0275\u0275text(35, "1 WEEK BUFFER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 22);
    \u0275\u0275text(37, "2 WEEKS BUFFER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 23);
    \u0275\u0275text(39, "1 MONTH BUFFER");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "h4", 12);
    \u0275\u0275text(41, "Competency & Narrative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 24)(43, "div", 14)(44, "label", 15);
    \u0275\u0275text(45, "Expertise Narrative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "textarea", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_textarea_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.description, $event) || (ctx_r1.resource.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 26)(48, "div", 14)(49, "label", 15);
    \u0275\u0275text(50, "Skill Inventory Tags (CSV)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.skillsInput, $event) || (ctx_r1.skillsInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 28)(53, "label", 29)(54, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.isRemote, $event) || (ctx_r1.resource.isRemote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 31);
    \u0275\u0275text(56, "Remote Deployment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 32)(58, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.location, $event) || (ctx_r1.resource.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(59, "h4", 12);
    \u0275\u0275text(60, "Authorized Logistics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 13)(62, "div", 14)(63, "label", 15);
    \u0275\u0275text(64, "Authorization Hourly Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 34)(66, "select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_select_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.currency, $event) || (ctx_r1.resource.currency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(67, "option", 36);
    \u0275\u0275text(68, "USD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "option", 37);
    \u0275\u0275text(70, "INR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "option", 38);
    \u0275\u0275text(72, "EUR");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.hourlyRate, $event) || (ctx_r1.resource.hourlyRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div", 14)(75, "label", 15);
    \u0275\u0275text(76, "Registry Expiry Timestamp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_input_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.expiryDate, $event) || (ctx_r1.resource.expiryDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 14)(79, "label", 15);
    \u0275\u0275text(80, "Response Email Endpoint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_input_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.contactEmail, $event) || (ctx_r1.resource.contactEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 14)(83, "label", 15);
    \u0275\u0275text(84, "Direct Voice Transmission (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_input_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.contactPhone, $event) || (ctx_r1.resource.contactPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "h4", 12);
    \u0275\u0275text(87, "Certification & Heritage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 43)(89, "div", 14)(90, "label", 15);
    \u0275\u0275text(91, "Professional Accreditations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "textarea", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_textarea_ngModelChange_92_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.certifications, $event) || (ctx_r1.resource.certifications = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 14)(94, "label", 15);
    \u0275\u0275text(95, "Project Retrospective");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "textarea", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcePostModalComponent_div_0_Template_textarea_ngModelChange_96_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resource.previousProjects, $event) || (ctx_r1.resource.previousProjects = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(97, ResourcePostModalComponent_div_0_div_97_Template, 2, 1, "div", 46)(98, ResourcePostModalComponent_div_0_div_98_Template, 2, 1, "div", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 48)(100, "button", 49);
    \u0275\u0275listener("click", function ResourcePostModalComponent_div_0_Template_button_click_100_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(101, "Abort Modification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "button", 50);
    \u0275\u0275template(103, ResourcePostModalComponent_div_0_span_103_Template, 2, 0, "span", 51)(104, ResourcePostModalComponent_div_0_span_104_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Modify Registry" : "Resource Allocation");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.isEditMode ? "Synchronizing resource parameters with the live market" : "Define technical bench capacity for collaborative outreach");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.role);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.stack);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.experience);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.availability);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.skillsInput);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.isRemote);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.location);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.currency);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.hourlyRate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.expiryDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.contactEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.contactPhone);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.certifications);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resource.previousProjects);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.successMessage);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isSubmitting);
  }
}
var ResourcePostModalComponent = class _ResourcePostModalComponent {
  constructor(apiService, authService) {
    this.apiService = apiService;
    this.authService = authService;
    this.show = false;
    this.editResource = null;
    this.close = new EventEmitter();
    this.saved = new EventEmitter();
    this.resource = {
      role: "",
      stack: "",
      experience: "",
      availability: "Immediate",
      description: "",
      hourlyRate: null,
      currency: "USD",
      expiryDate: null,
      contactEmail: "",
      contactPhone: "",
      location: "",
      isRemote: false,
      skills: [],
      certifications: "",
      previousProjects: ""
    };
    this.skillsInput = "";
    this.isSubmitting = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.isEditMode = false;
    this.currentUser = null;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.resetForm();
  }
  ngOnChanges(changes) {
    if (changes["editResource"] && changes["editResource"].currentValue) {
      this.loadResourceForEdit(changes["editResource"].currentValue);
    } else if (changes["show"] && !changes["show"].currentValue) {
      this.resetForm();
    }
  }
  loadResourceForEdit(resource) {
    this.isEditMode = true;
    let skillsArray = [];
    if (Array.isArray(resource.skills)) {
      skillsArray = resource.skills;
    }
    this.resource = {
      id: resource.id,
      role: resource.role || "",
      stack: resource.stack || "",
      experience: resource.experience || "",
      availability: resource.availability || "Immediate",
      description: resource.description || "",
      hourlyRate: resource.hourlyRate || null,
      currency: resource.currency || "USD",
      expiryDate: resource.expiryDate ? typeof resource.expiryDate === "string" ? resource.expiryDate : new Date(resource.expiryDate).toISOString().split("T")[0] : null,
      contactEmail: resource.contactEmail || "",
      contactPhone: resource.contactPhone || "",
      location: resource.location || "",
      isRemote: resource.isRemote || false,
      skills: skillsArray,
      certifications: resource.certifications || "",
      previousProjects: resource.previousProjects || ""
    };
    this.skillsInput = skillsArray.join(", ");
  }
  resetForm() {
    this.isEditMode = false;
    this.resource = {
      role: "",
      stack: "",
      experience: "",
      availability: "Immediate",
      description: "",
      hourlyRate: null,
      currency: "USD",
      expiryDate: null,
      contactEmail: this.currentUser?.email || "",
      contactPhone: "",
      location: "",
      isRemote: false,
      skills: [],
      certifications: "",
      previousProjects: ""
    };
    this.skillsInput = "";
    this.errorMessage = "";
    this.successMessage = "";
  }
  onSubmit() {
    if (!this.resource.role || !this.resource.role.trim()) {
      this.errorMessage = "Role is required";
      return;
    }
    if (!this.resource.stack || !this.resource.stack.trim()) {
      this.errorMessage = "Tech stack is required";
      return;
    }
    if (!this.resource.experience || !this.resource.experience.trim()) {
      this.errorMessage = "Experience is required";
      return;
    }
    if (!this.resource.availability || !this.resource.availability.trim()) {
      this.errorMessage = "Availability is required";
      return;
    }
    if (!this.currentUser) {
      this.errorMessage = "Please login to post a resource";
      return;
    }
    this.isSubmitting = true;
    this.errorMessage = "";
    this.successMessage = "";
    const skills = this.skillsInput ? this.skillsInput.split(",").map((s) => s.trim()).filter((s) => s.length > 0) : [];
    const resourceData = __spreadProps(__spreadValues({}, this.resource), {
      skills,
      status: this.resource.status || "ACTIVE"
    });
    const apiCall = this.isEditMode && this.resource.id ? this.apiService.updateBenchResource(this.resource.id, resourceData) : this.apiService.createBenchResource(resourceData);
    apiCall.subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = this.isEditMode ? "Resource updated successfully!" : "Resource posted successfully!";
        setTimeout(() => {
          this.saved.emit();
          this.onClose();
        }, 1500);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || `Error ${this.isEditMode ? "updating" : "posting"} resource. Please try again.`;
        console.error(`Error ${this.isEditMode ? "updating" : "posting"} resource:`, error);
      }
    });
  }
  onClose() {
    this.close.emit();
  }
  static {
    this.\u0275fac = function ResourcePostModalComponent_Factory(t) {
      return new (t || _ResourcePostModalComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResourcePostModalComponent, selectors: [["app-resource-post-modal"]], inputs: { show: "show", editResource: "editResource" }, outputs: { close: "close", saved: "saved" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "post-overlay fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8", 3, "click", 4, "ngIf"], [1, "post-overlay", "fixed", "inset-0", "z-[200]", "flex", "items-center", "justify-center", "p-4", "md:p-8", 3, "click"], [1, "glass-editor", "w-full", "max-w-5xl", 3, "click"], [1, "editor-header"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "editor-title", "tracking-tight"], [1, "h-12", "w-12", "flex", "items-center", "justify-center", "bg-slate-50", "rounded-full", "hover:bg-slate-100", "transition-colors", "text-slate-400", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "editor-subtitle", "uppercase", "tracking-widest"], [1, "editor-body"], ["id", "resourcePostForm", 3, "ngSubmit"], [1, "form-section-title"], [1, "form-grid"], [1, "field-group"], [1, "field-label"], ["name", "role", "type", "text", "placeholder", "e.g. Principal Cloud Engineer", "required", "", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["name", "stack", "type", "text", "placeholder", "e.g. AWS, React, Kubernetes", "required", "", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["name", "experience", "type", "text", "placeholder", "e.g. 10+ Years / Lead Level", "required", "", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["name", "availability", "required", "", 1, "premium-input", "appearance-none", "bg-white", "font-bold", 3, "ngModelChange", "ngModel"], ["value", "Immediate"], ["value", "1 Week"], ["value", "2 Weeks"], ["value", "1 Month"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-10", "mb-16"], ["name", "description", "rows", "5", "placeholder", "Define the resource's strategic value and integration capacity...", 1, "premium-input", "!resize-none", 3, "ngModelChange", "ngModel"], [1, "space-y-10"], ["name", "skills", "type", "text", "placeholder", "JavaScript, Python, Docker, microservices...", 1, "premium-input", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-6"], [1, "checkbox-wrapper", "flex-1"], ["name", "isRemote", "type", "checkbox", 1, "h-5", "w-5", "rounded-lg", "border-2", "border-slate-300", "text-indigo-600", "focus:ring-indigo-600", 3, "ngModelChange", "ngModel"], [1, "text-xs", "font-black", "uppercase", "text-slate-600", "tracking-widest"], [1, "field-group", "flex-1"], ["name", "location", "type", "text", "placeholder", "Geographic Base (e.g. USA)", 1, "premium-input", "py-[0.85rem]", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2"], ["name", "currency", 1, "premium-input", "!w-1/3", "appearance-none", "bg-white", "font-bold", 3, "ngModelChange", "ngModel"], ["value", "USD"], ["value", "INR"], ["value", "EUR"], ["name", "hourlyRate", "type", "number", "step", "0.01", "placeholder", "Rate Amount", 1, "premium-input", "flex-1", 3, "ngModelChange", "ngModel"], ["name", "expiryDate", "type", "date", 1, "premium-input", "font-bold", 3, "ngModelChange", "ngModel"], ["name", "contactEmail", "type", "email", "placeholder", "official@endpoint.com", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["name", "contactPhone", "type", "tel", "placeholder", "+1 (000) 000-0000", 1, "premium-input", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-10"], ["name", "certifications", "rows", "3", "placeholder", "AWS Solution Architect, GCP Professional Data Engineer...", 1, "premium-input", "!resize-none", 3, "ngModelChange", "ngModel"], ["name", "previousProjects", "rows", "3", "placeholder", "Historical deployment success stories and architectural contributions...", 1, "premium-input", "!resize-none", 3, "ngModelChange", "ngModel"], ["class", "mt-12 p-6 bg-rose-50 border border-rose-100 rounded-[32px] text-rose-500 font-bold uppercase tracking-widest text-[10px] animate-bounce", 4, "ngIf"], ["class", "mt-12 p-6 bg-emerald-50 border border-emerald-100 rounded-[32px] text-emerald-600 font-bold uppercase tracking-widest text-[10px]", 4, "ngIf"], [1, "editor-footer"], [1, "btn-dismiss", 3, "click"], ["type", "submit", "form", "resourcePostForm", 1, "btn-authorize", 3, "disabled"], [4, "ngIf"], [1, "mt-12", "p-6", "bg-rose-50", "border", "border-rose-100", "rounded-[32px]", "text-rose-500", "font-bold", "uppercase", "tracking-widest", "text-[10px]", "animate-bounce"], [1, "mt-12", "p-6", "bg-emerald-50", "border", "border-emerald-100", "rounded-[32px]", "text-emerald-600", "font-bold", "uppercase", "tracking-widest", "text-[10px]"]], template: function ResourcePostModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ResourcePostModalComponent_div_0_Template, 105, 22, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.show);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n\n.post-overlay[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n.glass-editor[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 44px;\n  overflow: hidden;\n  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.4);\n  animation: _ngcontent-%COMP%_slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n  display: flex;\n  flex-direction: column;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(50px) scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n  }\n}\n.editor-header[_ngcontent-%COMP%] {\n  padding: 3rem 4rem 2rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.editor-title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 950;\n  color: #0f172a;\n  letter-spacing: -0.06em;\n  line-height: 1;\n}\n.editor-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #94a3b8;\n  margin-top: 0.75rem;\n}\n.editor-body[_ngcontent-%COMP%] {\n  padding: 3rem 4rem;\n  overflow-y: auto;\n  max-height: 65vh;\n}\n.editor-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.editor-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #e2e8f0;\n  border-radius: 10px;\n}\n.form-section-title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 900;\n  color: #6366f1;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n  margin-bottom: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.form-section-title[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #f1f5f9;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2.5rem;\n  margin-bottom: 4rem;\n}\n.field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #475569;\n  padding-left: 0.25rem;\n}\n.premium-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.125rem 1.5rem;\n  background: #f8fafc;\n  border: 2px solid #f8fafc;\n  border-radius: 20px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: #1e293b;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.premium-input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: #6366f1;\n  box-shadow: 0 0 0 5px rgba(99, 102, 241, 0.1);\n  outline: none;\n}\n.editor-footer[_ngcontent-%COMP%] {\n  padding: 2.5rem 4rem 3rem;\n  background: #f8fafc;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  justify-content: flex-end;\n  gap: 1.5rem;\n}\n.btn-dismiss[_ngcontent-%COMP%] {\n  padding: 1.125rem 2rem;\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.btn-authorize[_ngcontent-%COMP%] {\n  padding: 1.125rem 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #4f46e5 100%);\n  color: white;\n  border-radius: 22px;\n  font-size: 0.75rem;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  box-shadow: 0 12px 24px -6px rgba(79, 70, 229, 0.4);\n  transition: all 0.3s;\n}\n.btn-authorize[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 18px 36px -6px rgba(79, 70, 229, 0.5);\n}\n.checkbox-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  cursor: pointer;\n  padding: 1rem;\n  background: #f1f5f9;\n  border-radius: 18px;\n  transition: all 0.2s;\n}\n.checkbox-wrapper[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n/*# sourceMappingURL=resource-post-modal.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResourcePostModalComponent, { className: "ResourcePostModalComponent", filePath: "src\\app\\components\\modals\\resource-post-modal\\resource-post-modal.component.ts", lineNumber: 15 });
})();

export {
  ResourceDetailModalComponent,
  ResourcePostModalComponent
};
//# sourceMappingURL=chunk-RAH7LEQZ.js.map
