import {
  AppModalService
} from "./chunk-CGDGWJBY.js";
import {
  AppNavigationService
} from "./chunk-J6JLAZ5K.js";
import {
  DataService
} from "./chunk-RLDPKJFY.js";
import {
  AuthService
} from "./chunk-HS4BPM7A.js";
import "./chunk-X7FTYMHV.js";
import "./chunk-BACPM34C.js";
import {
  ApiService,
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CRF7CKPV.js";

// src/app/pages/home/home.component.ts
var _c0 = (a0, a1) => ({ "bg-white w-8": a0, "bg-white/20 w-3": a1 });
function HomeComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "img", 101);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", m_r1.image || "assets/default-avatar.png", \u0275\u0275sanitizeUrl);
  }
}
function HomeComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 104)(4, "div", 105);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 106);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r3 * 0.1 + "s");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", stat_r2.color + "15")("color", stat_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stat_r2.icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", stat_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stat_r2.value, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", stat_r2.color);
  }
}
function HomeComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 110);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 111);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r5 * 0.1 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", f_r4.desc, " ");
  }
}
function HomeComponent_article_82_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "video", 120);
    \u0275\u0275element(2, "source", 121);
    \u0275\u0275text(3, " Your browser does not support video playback. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const testimonial_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("poster", testimonial_r6.videoPoster || ctx_r6.defaultTestimonialVideoPoster, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", testimonial_r6.videoUrl, \u0275\u0275sanitizeUrl);
  }
}
function HomeComponent_article_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 112);
    \u0275\u0275template(1, HomeComponent_article_82_div_1_Template, 4, 2, "div", 113);
    \u0275\u0275elementStart(2, "p", 114);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 115)(5, "h3", 116);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 117);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 118);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const testimonial_r6 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r8 * 0.1 + "s");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", testimonial_r6.videoUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(' "', testimonial_r6.quote, '" ');
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(testimonial_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r6.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r6.company);
  }
}
function HomeComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122);
    \u0275\u0275element(1, "img", 101);
    \u0275\u0275elementStart(2, "div", 123)(3, "span", 124);
    \u0275\u0275text(4, "ISA Event Archive");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const img_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-100", i_r10 === ctx_r6.currentGalleryIndex)("opacity-0", i_r10 !== ctx_r6.currentGalleryIndex)("scale-100", i_r10 === ctx_r6.currentGalleryIndex)("scale-110", i_r10 !== ctx_r6.currentGalleryIndex);
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r9, \u0275\u0275sanitizeUrl);
  }
}
function HomeComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("click", function HomeComponent_div_103_Template_div_click_0_listener() {
      const i_r12 = \u0275\u0275restoreView(_r11).index;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.goToGallery(i_r12));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c0, i_r12 === ctx_r6.currentGalleryIndex, i_r12 !== ctx_r6.currentGalleryIndex));
  }
}
function HomeComponent_section_104_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 134);
    \u0275\u0275element(2, "img", 135);
    \u0275\u0275elementStart(3, "div", 136);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 137)(6, "div", 138)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 139);
    \u0275\u0275text(11, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "h3", 140);
    \u0275\u0275listener("click", function HomeComponent_section_104_div_13_Template_h3_click_14_listener() {
      const event_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onViewEvent(event_r15));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 141);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 142);
    \u0275\u0275listener("click", function HomeComponent_section_104_div_13_Template_button_click_18_listener() {
      const event_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onViewEvent(event_r15));
    });
    \u0275\u0275text(19, " Register Now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r16 * 0.1 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", event_r15.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r15.category, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 8, event_r15.startDate || event_r15.date, "MMM dd, yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r15.startTime || "10:00 AM");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r15.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r15.description, " ");
  }
}
function HomeComponent_section_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 126)(1, "div", 38)(2, "div", 127)(3, "div", 128)(4, "span", 40);
    \u0275\u0275text(5, "Don't Miss Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 129);
    \u0275\u0275text(7, "Upcoming Meetups & Sessions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 130);
    \u0275\u0275listener("click", function HomeComponent_section_104_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onNavigate("EVENTS"));
    });
    \u0275\u0275text(9, " View Full Calendar ");
    \u0275\u0275elementStart(10, "span", 131);
    \u0275\u0275text(11, "\u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 43);
    \u0275\u0275template(13, HomeComponent_section_104_div_13_Template, 20, 11, "div", 132);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r6.events.slice(0, 3));
  }
}
function HomeComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275element(1, "div", 144);
    \u0275\u0275elementStart(2, "p", 145);
    \u0275\u0275text(3, "Synchronizing Membership Tiers...");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_115_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 166);
    \u0275\u0275text(1, " Most Popular ");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_115_div_1_h3_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 167);
    \u0275\u0275text(1, "Custom");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_115_div_1_h3_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 167);
    \u0275\u0275text(1, "Free");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_115_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168)(1, "span", 169);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 170);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", plan_r18.price.toLocaleString("en-IN"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", plan_r18.durationMonths === 12 ? "yr" : plan_r18.durationMonths + "m", "");
  }
}
function HomeComponent_div_115_div_1_div_21_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 176);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r19.description, " ");
  }
}
function HomeComponent_div_115_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 171);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 172);
    \u0275\u0275element(3, "path", 173);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div")(5, "h5", 174);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HomeComponent_div_115_div_1_div_21_p_7_Template, 2, 1, "p", 175);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r19 = ctx.$implicit;
    const plan_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", plan_r18.highlight ? "bg-blue-500/20 text-blue-400" : "bg-white/5 text-slate-400");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(feature_r19.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r19.description);
  }
}
function HomeComponent_div_115_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 177);
    \u0275\u0275text(1, " No explicit features mapped. ");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_115_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148);
    \u0275\u0275element(1, "div", 149);
    \u0275\u0275elementStart(2, "div", 150)(3, "div", 151)(4, "div", 152)(5, "span", 153);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HomeComponent_div_115_div_1_span_7_Template, 2, 0, "span", 154);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 155);
    \u0275\u0275template(9, HomeComponent_div_115_div_1_h3_9_Template, 2, 0, "h3", 156)(10, HomeComponent_div_115_div_1_h3_10_Template, 2, 0, "h3", 156)(11, HomeComponent_div_115_div_1_div_11_Template, 5, 2, "div", 157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 158);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 159)(15, "button", 160);
    \u0275\u0275listener("click", function HomeComponent_div_115_div_1_Template_button_click_15_listener() {
      const plan_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.onPlanAction(plan_r18));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 161)(18, "h4", 162);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 163);
    \u0275\u0275template(21, HomeComponent_div_115_div_1_div_21_Template, 8, 3, "div", 164)(22, HomeComponent_div_115_div_1_div_22_Template, 2, 0, "div", 165);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const plan_r18 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r20 * 0.1 + "s");
    \u0275\u0275classProp("featured-card", plan_r18.highlight);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-100", plan_r18.highlight);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", plan_r18.highlight ? "text-blue-400" : "text-slate-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r18.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r18.highlight);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", plan_r18.price > 5e4 || plan_r18.name.includes("Executive"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r18.price === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r18.price > 0 && plan_r18.price <= 5e4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", plan_r18.period || "Access to base core features.", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", plan_r18.highlight ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]" : "bg-white/5 hover:bg-white/10 text-white border border-white/10");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r18.btnText || (plan_r18.price > 0 ? "Upgrade Now" : "Start Free"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("What's included in ", plan_r18.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r6.getPlanFeatureObjects(plan_r18));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r6.getPlanFeatureObjects(plan_r18).length === 0);
  }
}
function HomeComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275template(1, HomeComponent_div_115_div_1_Template, 23, 18, "div", 147);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r6.membershipPlans);
  }
}
function HomeComponent_div_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 178)(1, "div", 179);
    \u0275\u0275element(2, "img", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 181);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 182);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 183);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r22 * 0.1 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", member_r21.image || "assets/default-avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r21.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r21.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r21.company);
  }
}
function HomeComponent_div_154_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 188);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faq_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r24.answer, " ");
  }
}
function HomeComponent_div_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 184)(1, "button", 185);
    \u0275\u0275listener("click", function HomeComponent_div_154_Template_button_click_1_listener() {
      const faq_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.toggleFaq(faq_r24));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 186);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, HomeComponent_div_154_div_6_Template, 2, 1, "div", 187);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faq_r24 = ctx.$implicit;
    \u0275\u0275classProp("active", faq_r24.isOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r24.question);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", faq_r24.isOpen);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r24.isOpen ? "\u2212" : "+", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", faq_r24.isOpen);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(dataService, authService, apiService, navService, modalService) {
    this.dataService = dataService;
    this.authService = authService;
    this.apiService = apiService;
    this.navService = navService;
    this.modalService = modalService;
    this.defaultTestimonialVideoPoster = "assets/default-event.png";
    this.events = [];
    this.boardMembers = [];
    this.faqs = [];
    this.galleryImages = [];
    this.currentGalleryIndex = 0;
    this.isLoadingEvents = false;
    this.activeTab = "features";
    this.stats = [
      { value: "200+", label: "Active CXOs", color: "#6366f1", icon: "\u{1F465}" },
      { value: "50+", label: "Annual Events", color: "#22d3ee", icon: "\u{1F3AF}" },
      { value: "\u20B9500Cr+", label: "Combined Revenue", color: "#4ade80", icon: "\u{1F4B0}" },
      { value: "10k+", label: "Talent Pool", color: "#f472b6", icon: "\u{1F680}" }
    ];
    this.features = [
      { icon: "\u{1F91D}", title: "Elite Networking", desc: "Connect with 200+ CXOs, Founders, and Tech Leaders from Indore's top IT companies." },
      { icon: "\u{1F4DA}", title: "Knowledge Hub", desc: "Exclusive reports, workshops, and industry insights from verified experts." },
      { icon: "\u{1F3DB}\uFE0F", title: "Policy Advocacy", desc: "One unified voice representing Indore's IT sector to government bodies." },
      { icon: "\u{1F4BC}", title: "Bench Exchange", desc: "Share resources, talent, and projects across member organizations." },
      { icon: "\u{1F310}", title: "Global Visibility", desc: "Establish Indore as a global IT hub with international collaborations." },
      { icon: "\u{1F396}\uFE0F", title: "Prestigious Recognition", desc: "Awards, certifications, and recognition programs for member excellence." }
    ];
    this.testimonials = [
      {
        quote: "ISA created real collaboration between companies that usually operate in silos. The value from networking alone is outstanding.",
        name: "Rahul Sharma",
        role: "VP Engineering",
        company: "TechNova Systems",
        videoUrl: "assets/testimonials/rahul-sharma.mp4",
        videoPoster: "assets/testimonials/rahul-sharma.jpg"
      },
      {
        quote: "Through ISA sessions, we discovered practical policy insights and strong hiring connections that helped us scale faster.",
        name: "Neha Verma",
        role: "Director - Operations",
        company: "Infinitive Labs",
        videoUrl: "assets/testimonials/neha-verma.mp4",
        videoPoster: "assets/testimonials/neha-verma.jpg"
      },
      {
        quote: "The community is focused, credible, and action-driven. Every meetup translates into useful business and talent outcomes.",
        name: "Amit Jain",
        role: "Founder & CEO",
        company: "CortexSphere",
        videoUrl: "assets/testimonials/amit-jain.mp4",
        videoPoster: "assets/testimonials/amit-jain.jpg"
      }
    ];
    this.membershipPlans = [];
    this.isLoadingPlans = false;
    this.boardMembers = this.dataService.getBoardMembers();
    this.faqs = this.dataService.getFaqs();
    this.galleryImages = [
      "assets/gallery/1.png",
      "assets/gallery/2.png",
      "assets/gallery/3.png"
    ];
  }
  ngOnInit() {
    this.loadHomeSliderImages();
    this.loadUpcomingEvents();
    this.loadMembershipPlans();
    this.startGalleryAutoSlide();
  }
  startGalleryAutoSlide() {
    if (this.galleryIntervalId) {
      clearInterval(this.galleryIntervalId);
      this.galleryIntervalId = null;
    }
    if (this.galleryImages.length > 1) {
      this.galleryIntervalId = setInterval(() => this.nextGallery(), 5e3);
    }
  }
  loadHomeSliderImages() {
    this.apiService.getHomeSliderConfig().subscribe({
      next: (config) => {
        const rawImages = Array.isArray(config?.imageUrls) ? config.imageUrls : [];
        const resolvedImages = rawImages.map((img) => this.resolveEventImageUrl(img)).filter((img) => !!img);
        if (resolvedImages.length > 0) {
          this.galleryImages = resolvedImages;
          this.currentGalleryIndex = 0;
          this.startGalleryAutoSlide();
        }
      },
      error: () => {
      }
    });
  }
  loadMembershipPlans() {
    this.isLoadingPlans = true;
    this.apiService.getPublicPlans().subscribe({
      next: (plans) => {
        this.membershipPlans = (plans || []).map((p) => __spreadProps(__spreadValues({}, p), {
          highlight: p.isPopular || p.id === 2 || p.price > 0 && p.price < 5e4,
          btnText: p.price === 0 ? "Start Free" : p.price > 5e4 ? "Contact Us" : "Upgrade Now",
          action: p.price === 0 ? "AUTH" : p.price > 5e4 ? "CONTACT" : "PAYMENT"
        }));
        this.isLoadingPlans = false;
      },
      error: () => {
        this.isLoadingPlans = false;
      }
    });
  }
  getPlanDisplayFeatures(plan) {
    const features = Array.isArray(plan?.features) ? plan.features : [];
    return features.map((f) => {
      if (f && typeof f === "object") {
        return String(f.name || f.description || "").trim();
      }
      return String(f || "").trim();
    }).filter((f) => !!f);
  }
  getPlanFeatureObjects(plan) {
    const features = Array.isArray(plan?.features) ? plan.features : [];
    return features.map((f) => {
      if (f && typeof f === "object") {
        return {
          name: String(f.name || f.code || "").trim(),
          description: String(f.description || "").trim(),
          category: String(f.category || "GENERAL").trim()
        };
      }
      const text = String(f || "").trim();
      return {
        name: text,
        description: "",
        category: "GENERAL"
      };
    }).filter((f) => !!f.name);
  }
  ngOnDestroy() {
    if (this.galleryIntervalId)
      clearInterval(this.galleryIntervalId);
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
  loadUpcomingEvents() {
    this.isLoadingEvents = true;
    this.apiService.getPublishedEvents().subscribe({
      next: (response) => {
        const events = Array.isArray(response) ? response : [];
        const now = Date.now();
        const upcoming = events.filter((e) => {
          const endMs = this.getEventSortEndMillis(e);
          return endMs == null || endMs >= now;
        });
        this.events = upcoming.sort((a, b) => {
          const dA = new Date(a.startDate || a.date || 0);
          const dB = new Date(b.startDate || b.date || 0);
          return dA.getTime() - dB.getTime();
        }).map((e) => {
          let image = this.resolveEventImageUrl(e.imageUrl || e.image);
          if (!image && e.poster) {
            image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${e.id}`;
          }
          if (!image) {
            image = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop";
          }
          return __spreadProps(__spreadValues({}, e), {
            image,
            title: e.name || e.title || "Untitled Event",
            date: e.startDate || e.date,
            location: e.location || e.venue || "TBA",
            category: e.category || e.type || "Event",
            description: e.description || e.shortDescription || "Experience this exclusive ISA session and networking opportunity."
          });
        });
        this.isLoadingEvents = false;
      },
      error: () => {
        this.events = [];
        this.isLoadingEvents = false;
      }
    });
  }
  /**
   * Compare using local calendar date/time so YYYY-MM-DD from the API is not shifted by UTC parsing.
   * Event counts as upcoming until end of local day on endDate (with endTime if present).
   */
  parseLocalDay(raw) {
    if (raw == null || raw === "")
      return null;
    if (raw instanceof Date && !isNaN(raw.getTime())) {
      const d = new Date(raw.getFullYear(), raw.getMonth(), raw.getDate());
      return d;
    }
    const s = String(raw).split("T")[0];
    const parts = s.split("-").map(Number);
    if (parts.length !== 3 || parts.some((n) => Number.isNaN(n)))
      return null;
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }
  applyLocalTime(day, timeStr, endOfDay) {
    const out = new Date(day.getFullYear(), day.getMonth(), day.getDate());
    const t = timeStr ? String(timeStr).split(":").map((x) => Number(x)) : [];
    const hh = t.length ? t[0] : endOfDay ? 23 : 0;
    const mm = t.length > 1 ? t[1] : endOfDay ? 59 : 0;
    const ss = t.length > 2 ? t[2] : endOfDay ? 59 : 0;
    const ms = endOfDay && !timeStr ? 999 : 0;
    out.setHours(hh, mm, ss, ms);
    return out;
  }
  /** Latest instant when the event is still considered "running" — for hiding after it has ended */
  getEventSortEndMillis(e) {
    const endDay = this.parseLocalDay(e.endDate);
    if (endDay) {
      return this.applyLocalTime(endDay, e.endTime, !e.endTime).getTime();
    }
    const startDay = this.parseLocalDay(e.startDate ?? e.date);
    if (!startDay)
      return null;
    return this.applyLocalTime(startDay, e.startTime, true).getTime();
  }
  onNavigate(view) {
    this.navService.go(view);
  }
  onOpenAuth(mode) {
    this.modalService.openAuth(mode);
  }
  onOpenPayment() {
    this.modalService.openPayment();
  }
  onPlanAction(plan) {
    if (plan.action === "PAYMENT") {
      this.modalService.openPayment(plan);
    } else if (plan.action === "AUTH") {
      this.onOpenAuth("REGISTER");
    } else if (plan.action === "CONTACT") {
      const contactSection = document.getElementById("quick-contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "auto" });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "auto" });
      }
    }
  }
  onViewEvent(event) {
    if (!this.authService.isAuthenticated()) {
      this.modalService.openAuth("LOGIN");
      return;
    }
    this.navService.eventDetail(event.id);
  }
  toggleFaq(faq) {
    faq.isOpen = !faq.isOpen;
  }
  nextGallery() {
    this.currentGalleryIndex = (this.currentGalleryIndex + 1) % this.galleryImages.length;
  }
  prevGallery() {
    this.currentGalleryIndex = (this.currentGalleryIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
  }
  goToGallery(i) {
    this.currentGalleryIndex = i;
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AppNavigationService), \u0275\u0275directiveInject(AppModalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 200, vars: 11, consts: [[1, "home-page-root", "overflow-x-hidden"], [1, "hero-dark", "min-h-[95vh]", "flex", "items-center", "justify-center", "px-6", "overflow-hidden"], [1, "hero-glow-1"], [1, "hero-glow-2"], [1, "max-w-7xl", "mx-auto", "w-full", "grid", "grid-cols-1", "lg:grid-cols-2", "gap-16", "items-center", "relative", "z-10", "py-20"], [1, "reveal-up"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "rounded-full", "bg-blue-500/10", "border", "border-blue-500/20", "text-blue-400", "text-[10px]", "font-black", "uppercase", "tracking-[0.2em]", "mb-6"], [1, "relative", "flex", "h-2", "w-2"], [1, "animate-ping", "absolute", "inline-flex", "h-full", "w-full", "rounded-full", "bg-blue-400", "opacity-75"], [1, "relative", "inline-flex", "rounded-full", "h-2", "w-2", "bg-blue-500"], [1, "text-4xl", "lg:text-6xl", "font-black", "mb-8", "leading-[1]", "tracking-tight"], [1, "hero-text-gradient"], [1, "bg-gradient-to-r", "from-blue-400", "via-indigo-400", "to-purple-500", "bg-clip-text", "text-transparent"], [1, "text-xl", "text-slate-400", "mb-12", "max-w-lg", "leading-relaxed", "font-medium"], [1, "flex", "flex-wrap", "gap-5"], [1, "bg-blue-600", "text-white", "px-12", "py-5", "rounded-2xl", "text-lg", "font-bold", "hover:bg-blue-500", "transition-all", "shadow-[0_20px_50px_rgba(37,99,235,0.3)]", "hover:shadow-[0_20px_50px_rgba(37,99,235,0.5)]", "transform", "hover:-translate-y-1", 3, "click"], [1, "bg-white/5", "backdrop-blur-xl", "text-white", "border", "border-white/10", "px-12", "py-5", "rounded-2xl", "text-lg", "font-bold", "hover:bg-white/10", "transition-all", 3, "click"], [1, "mt-16", "flex", "items-center", "gap-5"], [1, "flex", "-space-x-3"], ["class", "w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden ring-1 ring-white/10 shadow-2xl", 4, "ngFor", "ngForOf"], [1, "w-12", "h-12", "rounded-full", "bg-blue-600", "border-2", "border-slate-900", "flex", "items-center", "justify-center", "text-[10px]", "font-black", "text-white", "ring-1", "ring-white/10"], [1, "flex", "flex-col"], [1, "text-sm", "font-bold", "text-white", "leading-none", "mb-1"], [1, "text-[11px]", "text-slate-500", "font-bold", "uppercase", "tracking-widest"], [1, "hero-visual-wrapper", "hidden", "lg:block", "reveal-up", "delay-2"], [1, "relative"], [1, "absolute", "-top-10", "-right-[-20px]", "hero-card", "p-5", "rounded-3xl", "z-20", "reveal-up", "delay-3"], [1, "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "bg-green-500/20", "rounded-2xl", "flex", "items-center", "justify-center", "text-xl"], [1, "text-[10px]", "uppercase", "font-black", "text-slate-500", "tracking-widest", "mb-1"], [1, "text-xl", "font-black", "text-white"], [1, "absolute", "-bottom-10", "-left-10", "hero-card", "p-5", "rounded-3xl", "z-20", "reveal-up", "delay-4"], [1, "w-12", "h-12", "bg-blue-500/20", "rounded-2xl", "flex", "items-center", "justify-center", "text-xl"], ["src", "assets/it_leaders_hero_visual_1775114268184.png", "alt", "IT Hub Visual", "onerror", "this.src='assets/ISA-Logo-Large.png'; this.classList.add('px-20', 'py-20')", 1, "hero-visual-img", "w-full", "h-auto", "aspect-square", "object-cover"], [1, "max-w-7xl", "mx-auto", "px-4", "mb-10", 2, "margin-top", "-35px"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-8"], ["class", "stat-card reveal-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "bg-slate-50", "px-4", 2, "margin-top", "80px"], [1, "max-w-7xl", "mx-auto"], [1, "text-center", "mb-20", "reveal-up"], [1, "section-tag"], [1, "text-4xl", "md:text-5xl", "section-title", "mb-6"], [1, "text-slate-500", "max-w-2xl", "mx-auto", "text-lg", "leading-relaxed"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8"], ["class", "feature-card reveal-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "py-28", "px-4", "bg-white"], [1, "text-center", "mb-16", "reveal-up"], ["class", "testimonial-card reveal-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "py-32", "px-4", "bg-white", "relative"], [1, "grid", "grid-cols-1", "lg:grid-cols-5", "gap-16", "items-center"], [1, "lg:col-span-2", "reveal-up"], [1, "text-4xl", "section-title", "mb-8", "leading-tight"], [1, "text-slate-600", "mb-10", "text-lg", "leading-relaxed"], [1, "flex", "gap-4"], [1, "gallery-btn", 3, "click"], [1, "lg:col-span-3", "gallery-viewport", "h-[450px]", "relative", "reveal-up", "delay-2"], ["class", "absolute inset-0 transition-all duration-700 ease-in-out transform", 3, "opacity-100", "opacity-0", "scale-100", "scale-110", 4, "ngFor", "ngForOf"], [1, "absolute", "bottom-8", "right-8", "flex", "gap-2"], ["class", "h-3 rounded-full cursor-pointer transition-all border-2 border-white/50", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "py-24 px-4 bg-slate-50", 4, "ngIf"], [1, "text-slate-500", "max-w-2xl", "mx-auto", "text-lg"], ["class", "py-20 text-center", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", 4, "ngIf"], [1, "max-w-7xl", "mx-auto", "px-4", "py-20", "reveal-up"], [1, "premium-gradient-card", "grid", "grid-cols-1", "lg:grid-cols-2", "gap-12", "items-center"], [1, "relative", "z-10"], [1, "inline-block", "px-4", "py-1.5", "rounded-full", "bg-blue-500/10", "border", "border-blue-500/20", "text-blue-400", "text-[10px]", "font-black", "uppercase", "tracking-widest", "mb-6"], [1, "text-4xl", "md:text-5xl", "font-black", "mb-8", "leading-tight"], [1, "text-blue-200", "text-lg", "mb-12", "max-w-lg", "leading-relaxed"], [1, "flex", "flex-wrap", "gap-4"], [1, "bg-white", "text-slate-900", "px-12", "py-5", "rounded-2xl", "font-black", "shadow-[0_20px_50px_rgba(255,255,255,0.15)]", "hover:bg-slate-50", "transform", "hover:-translate-y-1", "transition-all", 3, "click"], [1, "bg-white/10", "backdrop-blur-md", "text-white", "border", "border-white/20", "px-12", "py-5", "rounded-2xl", "font-bold", "hover:bg-white/20", "transition-all", 3, "click"], [1, "cta-badge-wrapper", "hidden", "lg:flex"], [1, "absolute", "inset-0", "bg-blue-500/10", "blur-[100px]", "rounded-full"], ["src", "assets/isa_membership_vip_badge_1775114556110.png", "alt", "Membership Badge", 1, "cta-badge-img", "relative", "z-10"], [1, "py-32", "px-4", "bg-white"], [1, "text-4xl", "section-title", "mb-6"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-x-8", "gap-y-16"], ["class", "leader-card reveal-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "py-32", "px-4", "bg-slate-50"], [1, "max-w-3xl", "mx-auto"], [1, "text-3xl", "font-extrabold", "text-slate-900", "mb-4"], ["class", "faq-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "py-32", "px-4", "bg-white", "border-t", "border-slate-100"], [1, "max-w-7xl", "mx-auto", "grid", "grid-cols-1", "lg:grid-cols-2", "gap-16", "items-center"], [1, "text-4xl", "section-title", "mb-8"], [1, "text-lg", "text-slate-600", "mb-10", "leading-relaxed"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-6"], [1, "flex", "items-start", "gap-4"], [1, "w-12", "h-12", "rounded-2xl", "bg-slate-50", "flex", "items-center", "justify-center", "text-2xl", "flex-shrink-0"], [1, "text-xs", "font-bold", "text-slate-400", "uppercase", "tracking-widest", "mb-1"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "reveal-up", "delay-2"], [1, "bg-slate-50", "p-10", "rounded-[32px]", "border", "border-slate-200"], [1, "grid", "grid-cols-1", "gap-6"], [1, "block", "text-xs", "font-black", "text-slate-400", "uppercase", "tracking-widest", "mb-2"], ["type", "text", "placeholder", "Your name", 1, "w-full", "bg-white", "border", "border-slate-200", "p-4", "rounded-2xl", "text-sm", "focus:border-blue-600", "outline-none", "transition-all"], ["type", "email", "placeholder", "example@company.com", 1, "w-full", "bg-white", "border", "border-slate-200", "p-4", "rounded-2xl", "text-sm", "focus:border-blue-600", "outline-none", "transition-all"], ["rows", "3", 1, "w-full", "bg-white", "border", "border-slate-200", "p-4", "rounded-2xl", "text-sm", "focus:border-blue-600", "outline-none", "transition-all"], [1, "bg-blue-600", "text-white", "font-bold", "py-5", "rounded-2xl", "shadow-xl", "hover:bg-blue-700", "hover:shadow-blue-200/50", "transition-all", "transform", "hover:-translate-y-1"], [1, "w-12", "h-12", "rounded-full", "border-2", "border-slate-900", "overflow-hidden", "ring-1", "ring-white/10", "shadow-2xl"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "stat-card", "reveal-up"], [1, "stat-icon-wrapper"], [1, "stat-content"], [1, "stat-value", 2, "font-size", "3rem"], [1, "stat-label"], [1, "stat-accent"], [1, "feature-card", "reveal-up"], [1, "feature-icon-box"], [1, "text-xl", "font-bold", "text-slate-900", "mb-3"], [1, "text-slate-600", "leading-relaxed", "text-sm"], [1, "testimonial-card", "reveal-up"], ["class", "testimonial-video-wrap", 4, "ngIf"], [1, "testimonial-quote"], [1, "mt-8"], [1, "text-base", "font-black", "text-slate-900"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-blue-600", "mt-1"], [1, "text-sm", "text-slate-500", "mt-1"], [1, "testimonial-video-wrap"], ["controls", "", "preload", "metadata", 1, "testimonial-video"], ["type", "video/mp4", 3, "src"], [1, "absolute", "inset-0", "transition-all", "duration-700", "ease-in-out", "transform"], [1, "absolute", "bottom-0", "left-0", "right-0", "p-8", "pt-16", "bg-gradient-to-t", "from-slate-900/80", "to-transparent"], [1, "text-white/60", "text-xs", "font-bold", "uppercase", "tracking-widest"], [1, "h-3", "rounded-full", "cursor-pointer", "transition-all", "border-2", "border-white/50", 3, "click", "ngClass"], [1, "py-24", "px-4", "bg-slate-50"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "mb-16", "reveal-up"], [1, "mb-4", "md:mb-0"], [1, "text-4xl", "section-title"], [1, "group", "flex", "items-center", "gap-2", "text-blue-600", "font-bold", "hover:text-blue-800", "transition-colors", 3, "click"], [1, "group-hover:translate-x-1", "transition-transform"], ["class", "group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-200 reveal-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "group", "bg-white", "rounded-3xl", "overflow-hidden", "shadow-sm", "hover:shadow-2xl", "transition-all", "border", "border-slate-200", "reveal-up"], [1, "h-48", "bg-slate-100", "relative", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "transition-transform", "duration-500", "group-hover:scale-110", 3, "src"], [1, "absolute", "top-4", "right-4", "bg-white/90", "backdrop-blur-md", "px-3", "py-1", "rounded-lg", "text-xs", "font-bold", "text-slate-800", "shadow-sm", "border", "border-white/20"], [1, "p-8"], [1, "flex", "items-center", "gap-2", "text-blue-600", "font-bold", "text-xs", "uppercase", "mb-3"], [1, "text-slate-300"], [1, "text-xl", "font-extrabold", "text-slate-900", "mb-4", "group-hover:text-blue-600", "transition-colors", "cursor-pointer", 3, "click"], [1, "text-slate-500", "text-sm", "line-clamp-2", "mb-6", "leading-relaxed"], [1, "w-full", "py-4", "text-sm", "font-bold", "text-blue-600", "border", "border-blue-100", "bg-blue-50/50", "rounded-2xl", "group-hover:bg-blue-600", "group-hover:text-white", "group-hover:border-blue-600", "transition-all", 3, "click"], [1, "py-20", "text-center"], [1, "h-10", "w-10", "border-4", "border-slate-100", "border-t-blue-600", "rounded-full", "animate-spin", "mx-auto", "mb-4"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "text-slate-400"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8", "max-w-6xl", "mx-auto"], ["class", "saas-pricing-card reveal-up", 3, "featured-card", "animation-delay", 4, "ngFor", "ngForOf"], [1, "saas-pricing-card", "reveal-up"], [1, "absolute", "inset-0", "bg-gradient-to-b", "from-blue-600/10", "to-transparent", "opacity-0", "transition-opacity", "duration-500"], [1, "relative", "z-10", "flex", "flex-col", "h-full"], [1, "mb-8"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", 3, "ngClass"], ["class", "px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-300 border border-blue-500/30", 4, "ngIf"], [1, "mb-3"], ["class", "text-4xl text-white font-black mb-1", 4, "ngIf"], ["class", "flex items-end gap-1", 4, "ngIf"], [1, "text-sm", "text-slate-400", "font-medium"], [1, "mb-8", "border-b", "border-white/5", "pb-8"], [1, "w-full", "py-4", "rounded-xl", "font-bold", "transition-all", "duration-300", 3, "click", "ngClass"], [1, "flex-grow", "flex", "flex-col"], [1, "text-[11px]", "font-black", "uppercase", "tracking-widest", "text-slate-500", "mb-6"], [1, "space-y-5"], ["class", "flex items-start gap-4", 4, "ngFor", "ngForOf"], ["class", "text-xs text-slate-600 italic", 4, "ngIf"], [1, "px-2.5", "py-1", "rounded-md", "text-[10px]", "font-black", "uppercase", "tracking-widest", "bg-blue-500/20", "text-blue-300", "border", "border-blue-500/30"], [1, "text-4xl", "text-white", "font-black", "mb-1"], [1, "flex", "items-end", "gap-1"], [1, "text-5xl", "font-black", "tracking-tighter", "text-white"], [1, "text-slate-500", "font-bold", "text-sm", "mb-1"], [1, "w-5", "h-5", "rounded-full", "flex", "items-center", "justify-center", "flex-shrink-0", "mt-0.5", 3, "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "3", "d", "M5 13l4 4L19 7"], [1, "text-sm", "font-semibold", "text-slate-200", "mb-1", "leading-tight"], ["class", "text-xs text-slate-500 leading-relaxed", 4, "ngIf"], [1, "text-xs", "text-slate-500", "leading-relaxed"], [1, "text-xs", "text-slate-600", "italic"], [1, "leader-card", "reveal-up"], [1, "leader-image-wrap"], [1, "leader-img", 3, "src"], [1, "text-lg", "font-bold", "text-slate-900", "leading-tight", "mb-1"], [1, "text-blue-600", "text-xs", "font-bold", "uppercase", "tracking-widest", "mb-3"], [1, "text-slate-400", "text-xs", "font-medium"], [1, "faq-item"], [1, "faq-trigger", 3, "click"], [1, "text-blue-600", "text-lg", "transition-transform"], ["class", "faq-answer", 4, "ngIf"], [1, "faq-answer"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "span", 7);
        \u0275\u0275element(8, "span", 8)(9, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Establishing Indore as a Global Tech Hub ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h1", 10)(12, "span", 11);
        \u0275\u0275text(13, "Connect.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "br");
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16, "Collaborate.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "br");
        \u0275\u0275elementStart(18, "span", 12);
        \u0275\u0275text(19, "Scale Together.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "p", 13);
        \u0275\u0275text(21, " The ultimate ecosystem for the next generation of tech leaders in Central India. Join 200+ CXOs driving Indore's digital revolution. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 14)(23, "button", 15);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_23_listener() {
          return ctx.onOpenAuth("REGISTER");
        });
        \u0275\u0275text(24, " Become a Member ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 16);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_25_listener() {
          return ctx.onNavigate("EVENTS");
        });
        \u0275\u0275text(26, " Explore Events ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 17)(28, "div", 18);
        \u0275\u0275template(29, HomeComponent_div_29_Template, 2, 1, "div", 19);
        \u0275\u0275elementStart(30, "div", 20);
        \u0275\u0275text(31, " +200 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 21)(33, "span", 22);
        \u0275\u0275text(34, "Indore's Top 200+ CXOs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 23);
        \u0275\u0275text(36, "Industry Leaders from global IT hubs");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 24)(38, "div", 25)(39, "div", 26)(40, "div", 27)(41, "div", 28);
        \u0275\u0275text(42, "\u{1F4C8}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div")(44, "p", 29);
        \u0275\u0275text(45, "Industry Growth");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p", 30);
        \u0275\u0275text(47, "+22% YoY");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(48, "div", 31)(49, "div", 27)(50, "div", 32);
        \u0275\u0275text(51, "\u{1F91D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div")(53, "p", 29);
        \u0275\u0275text(54, "Collaborations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p", 30);
        \u0275\u0275text(56, "500+");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(57, "img", 33);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(58, "section", 34)(59, "div", 35);
        \u0275\u0275template(60, HomeComponent_div_60_Template, 9, 13, "div", 36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "section", 37)(62, "div", 38)(63, "div", 39)(64, "span", 40);
        \u0275\u0275text(65, "What We Do");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "h2", 41);
        \u0275\u0275text(67, "Built for Indore's IT Future");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "p", 42);
        \u0275\u0275text(69, " Through strategic partnership and policy advocacy, we bridge the gap between innovation and global industry standard. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 43);
        \u0275\u0275template(71, HomeComponent_div_71_Template, 7, 5, "div", 44);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "section", 45)(73, "div", 38)(74, "div", 46)(75, "span", 40);
        \u0275\u0275text(76, "Testimonials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "h2", 41);
        \u0275\u0275text(78, "Trusted by Industry Leaders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "p", 42);
        \u0275\u0275text(80, " Hear from members who are actively shaping the future of Indore's technology ecosystem. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 43);
        \u0275\u0275template(82, HomeComponent_article_82_Template, 11, 7, "article", 47);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(83, "section", 48)(84, "div", 38)(85, "div", 49)(86, "div", 50)(87, "span", 40);
        \u0275\u0275text(88, "Community in Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "h2", 51);
        \u0275\u0275text(90, "Shared Moments, ");
        \u0275\u0275element(91, "br");
        \u0275\u0275text(92, " Lasting Impact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "p", 52);
        \u0275\u0275text(94, " Take a look into our regular meetups, policy sessions, and industry networking events. We believe progress happens when we walk together. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 53)(96, "button", 54);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_96_listener() {
          return ctx.prevGallery();
        });
        \u0275\u0275text(97, "\u2190");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "button", 54);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_98_listener() {
          return ctx.nextGallery();
        });
        \u0275\u0275text(99, "\u2192");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(100, "div", 55);
        \u0275\u0275template(101, HomeComponent_div_101_Template, 5, 9, "div", 56);
        \u0275\u0275elementStart(102, "div", 57);
        \u0275\u0275template(103, HomeComponent_div_103_Template, 1, 4, "div", 58);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(104, HomeComponent_section_104_Template, 14, 1, "section", 59);
        \u0275\u0275elementStart(105, "section", 48)(106, "div", 38)(107, "div", 39)(108, "span", 40);
        \u0275\u0275text(109, "Tiered Access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "h2", 41);
        \u0275\u0275text(111, "ISA Membership Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "p", 60);
        \u0275\u0275text(113, " Choose a path that aligns with your organization's scale and collaborative goals. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(114, HomeComponent_div_114_Template, 4, 0, "div", 61)(115, HomeComponent_div_115_Template, 2, 1, "div", 62);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "section", 63)(117, "div", 64)(118, "div", 65)(119, "span", 66);
        \u0275\u0275text(120, "ISA Excellence");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "h2", 67);
        \u0275\u0275text(122, "Elevate Indore's ");
        \u0275\u0275element(123, "br");
        \u0275\u0275text(124, " Global Standing.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "p", 68);
        \u0275\u0275text(126, " Be part of the only curated ecosystem for tech leadership in Central India. Get exclusive project access, policy influence, and elite networking. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "div", 69)(128, "button", 70);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_128_listener() {
          return ctx.onOpenAuth("REGISTER");
        });
        \u0275\u0275text(129, " Apply for Membership ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "button", 71);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_130_listener() {
          return ctx.onNavigate("BENCH");
        });
        \u0275\u0275text(131, " Bench Exchange ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(132, "div", 72);
        \u0275\u0275element(133, "div", 73)(134, "img", 74);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(135, "section", 75)(136, "div", 38)(137, "div", 39)(138, "span", 40);
        \u0275\u0275text(139, "Governance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "h2", 76);
        \u0275\u0275text(141, "Led by Industry Visionaries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "p", 60);
        \u0275\u0275text(143, " Meet the experienced leaders steering ISA towards industrial excellence and collaborative growth. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "div", 77);
        \u0275\u0275template(145, HomeComponent_div_145_Template, 9, 6, "div", 78);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(146, "section", 79)(147, "div", 80)(148, "div", 46)(149, "span", 40);
        \u0275\u0275text(150, "Common Questions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "h2", 81);
        \u0275\u0275text(152, "You Ask, We Answer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(153, "div", 5);
        \u0275\u0275template(154, HomeComponent_div_154_Template, 7, 7, "div", 82);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(155, "section", 83)(156, "div", 84)(157, "div", 5)(158, "span", 40);
        \u0275\u0275text(159, "Let's Connect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "h2", 85);
        \u0275\u0275text(161, "Ready to grow Indore's IT footprint?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "p", 86);
        \u0275\u0275text(163, " Questions about membership or partnership opportunities? Our office in Indore is always open for innovators. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "div", 87)(165, "div", 88)(166, "div", 89);
        \u0275\u0275text(167, "\u{1F3E2} ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "div")(169, "p", 90);
        \u0275\u0275text(170, "Our Base");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "p", 91);
        \u0275\u0275text(172, "Brilliant Convention Centre, ");
        \u0275\u0275element(173, "br");
        \u0275\u0275text(174, " Indore, MP");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(175, "div", 88)(176, "div", 89);
        \u0275\u0275text(177, "\u{1F4EC} ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div")(179, "p", 90);
        \u0275\u0275text(180, "Contact Mail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "p", 91);
        \u0275\u0275text(182, "contact@isaindore.com");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(183, "div", 92)(184, "div", 93)(185, "div", 94)(186, "div")(187, "label", 95);
        \u0275\u0275text(188, "FullName");
        \u0275\u0275elementEnd();
        \u0275\u0275element(189, "input", 96);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "div")(191, "label", 95);
        \u0275\u0275text(192, "Enterprise Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(193, "input", 97);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "div")(195, "label", 95);
        \u0275\u0275text(196, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275element(197, "textarea", 98);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "button", 99);
        \u0275\u0275text(199, " Send Message ");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(29);
        \u0275\u0275property("ngForOf", ctx.boardMembers.slice(0, 5));
        \u0275\u0275advance(31);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.features);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.testimonials);
        \u0275\u0275advance(19);
        \u0275\u0275property("ngForOf", ctx.galleryImages);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.galleryImages);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.events && ctx.events.length > 0);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.isLoadingPlans);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoadingPlans && ctx.membershipPlans.length > 0);
        \u0275\u0275advance(30);
        \u0275\u0275property("ngForOf", ctx.boardMembers);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.faqs);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], styles: ['/* src/app/pages/home/home.component.css */\n:host {\n  display: block;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeInLR {\n  from {\n    opacity: 0;\n    transform: translateX(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes float {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-15px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@keyframes pulse-soft {\n  0% {\n    transform: scale(1);\n    opacity: 0.2;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.3;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0.2;\n  }\n}\n.reveal-up {\n  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.delay-1 {\n  animation-delay: 0.1s;\n}\n.delay-2 {\n  animation-delay: 0.2s;\n}\n.delay-3 {\n  animation-delay: 0.3s;\n}\n.delay-4 {\n  animation-delay: 0.4s;\n}\n.hero-dark {\n  background:\n    radial-gradient(\n      circle at 20% 40%,\n      rgba(15, 23, 42, 1) 0%,\n      rgba(2, 6, 23, 1) 100%);\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n.hero-glow-1 {\n  position: absolute;\n  top: -10%;\n  right: -5%;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(79, 70, 229, 0.4) 0%,\n      transparent 70%);\n  filter: blur(100px);\n  animation: pulse-soft 8s infinite ease-in-out;\n  pointer-events: none;\n}\n.hero-glow-2 {\n  position: absolute;\n  bottom: -15%;\n  left: -5%;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(124, 58, 237, 0.3) 0%,\n      transparent 70%);\n  filter: blur(100px);\n  animation: pulse-soft 10s infinite ease-in-out reverse;\n  pointer-events: none;\n}\n.hero-visual-wrapper {\n  position: relative;\n  perspective: 1000px;\n}\n.hero-visual-img {\n  border-radius: 40px;\n  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  animation: float 6s ease-in-out infinite;\n  transform-style: preserve-3d;\n  background: rgba(255, 255, 255, 0.02);\n}\n.hero-visual-img::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 40%);\n  z-index: 1;\n}\n.hero-text-gradient {\n  background:\n    linear-gradient(\n      to right,\n      #ffffff 30%,\n      #a5b4fc 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-card {\n  background: rgba(255, 255, 255, 0.05);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n  transition: all 0.4s ease;\n}\n.hero-card:hover {\n  border-color: rgba(99, 102, 241, 0.4);\n  transform: translateY(-5px);\n  background: rgba(255, 255, 255, 0.05);\n}\n.stat-card {\n  background: #ffffff;\n  padding: 3rem 2rem;\n  border-radius: 32px;\n  border: 1px solid #f1f5f9;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);\n}\n.stat-card:hover {\n  transform: translateY(-12px) scale(1.02);\n  box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.1);\n  border-color: #e2e8f0;\n}\n.stat-icon-wrapper {\n  width: 72px;\n  height: 72px;\n  border-radius: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.25rem;\n  margin-bottom: 2rem;\n  transition: all 0.5s ease;\n  z-index: 2;\n}\n.stat-card:hover .stat-icon-wrapper {\n  transform: rotate(10deg) scale(1.1);\n  box-shadow: 0 10px 20px -5px currentColor;\n}\n.stat-content {\n  z-index: 2;\n}\n.stat-value {\n  font-size: 3.5rem;\n  font-weight: 900;\n  line-height: 1;\n  margin-bottom: 0.75rem;\n  letter-spacing: -0.05em;\n}\n.stat-label {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n  margin: 0;\n}\n.stat-accent {\n  position: absolute;\n  bottom: -40px;\n  right: -40px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  filter: blur(40px);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  pointer-events: none;\n}\n.stat-card:hover .stat-accent {\n  opacity: 0.15;\n}\n.feature-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  padding: 2.5rem;\n  border-radius: 20px;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n  overflow: hidden;\n}\n.feature-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #4f46e5,\n      #7c3aed);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.3s ease;\n}\n.feature-card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);\n  border-color: #dee2e6;\n}\n.feature-card:hover::before {\n  transform: scaleX(1);\n}\n.feature-icon-box {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background: rgba(79, 70, 229, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.75rem;\n  margin-bottom: 1.5rem;\n  transition: transform 0.3s ease;\n}\n.feature-card:hover .feature-icon-box {\n  transform: scale(1.1) rotate(5deg);\n  background: rgba(79, 70, 229, 0.1);\n}\n.testimonial-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 24px;\n  padding: 2rem;\n  box-shadow: 0 10px 25px -15px rgba(15, 23, 42, 0.22);\n  transition: all 0.3s ease;\n}\n.testimonial-card:hover {\n  transform: translateY(-6px);\n  border-color: #cbd5e1;\n  box-shadow: 0 22px 40px -20px rgba(15, 23, 42, 0.28);\n}\n.testimonial-quote {\n  color: #334155;\n  font-size: 0.95rem;\n  line-height: 1.75;\n  margin: 0;\n  position: relative;\n  padding-left: 1.15rem;\n  border-left: 3px solid #6366f1;\n}\n.testimonial-video-wrap {\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 1.25rem;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n}\n.testimonial-video {\n  width: 100%;\n  height: 210px;\n  display: block;\n  object-fit: cover;\n  background: #020617;\n}\n.section-tag {\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: #6366f1;\n  display: inline-block;\n  margin-bottom: 0.75rem;\n}\n.section-title {\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.saas-pricing-card {\n  background: #0B0F19;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 24px;\n  padding: 2.5rem;\n  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02), 0 20px 40px -10px rgba(0, 0, 0, 0.3);\n}\n.saas-pricing-card:hover {\n  transform: translateY(-8px);\n  border-color: rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 40px 80px -20px rgba(0, 0, 0, 0.5);\n}\n.featured-card {\n  border-color: rgba(59, 130, 246, 0.3);\n  box-shadow: inset 0 0 0 1px rgba(59, 130, 246, 0.2), 0 30px 60px -10px rgba(59, 130, 246, 0.15);\n}\n.featured-card:hover {\n  border-color: rgba(59, 130, 246, 0.5);\n  box-shadow: inset 0 0 0 1px rgba(59, 130, 246, 0.3), 0 40px 80px -20px rgba(59, 130, 246, 0.3);\n}\n.premium-gradient-card {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e1b4b 100%);\n  border-radius: 32px;\n  padding: 4rem;\n  position: relative;\n  overflow: hidden;\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.premium-gradient-card::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.cta-badge-wrapper {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.cta-badge-img {\n  width: 320px;\n  height: auto;\n  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4));\n  animation: float 5s ease-in-out infinite;\n  border-radius: 15px;\n}\n.gallery-viewport {\n  border-radius: 24px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  background: #f1f5f9;\n}\n.gallery-btn {\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  color: #1e293b;\n}\n.gallery-btn:hover {\n  background: #ffffff;\n  transform: scale(1.1);\n  color: #4f46e5;\n}\n.leader-card {\n  text-align: center;\n  padding: 2rem;\n  border-radius: 24px;\n  background: #fff;\n  border: 1px solid transparent;\n  transition: all 0.3s ease;\n}\n.leader-card:hover {\n  border-color: #f1f5f9;\n  background: #fcfcfd;\n}\n.leader-image-wrap {\n  width: 140px;\n  height: 140px;\n  margin: 0 auto 1.5rem;\n  position: relative;\n}\n.leader-image-wrap::before {\n  content: "";\n  position: absolute;\n  inset: -8px;\n  border: 2px solid #e2e8f0;\n  border-radius: 50%;\n  transition: all 0.4s ease;\n}\n.leader-card:hover .leader-image-wrap::before {\n  inset: -12px;\n  border-color: #6366f1;\n  transform: rotate(180deg);\n  border-style: dashed;\n}\n.leader-img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  filter: grayscale(100%);\n  transition: all 0.4s ease;\n}\n.leader-card:hover .leader-img {\n  filter: grayscale(0%);\n  transform: scale(1.05);\n}\n.faq-item {\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease;\n}\n.faq-item.active {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);\n}\n.faq-trigger {\n  width: 100%;\n  padding: 1.25rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 700;\n  color: #1e293b;\n  text-align: left;\n}\n.faq-answer {\n  padding: 0 1.5rem 1.5rem;\n  color: #64748b;\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n.home-page-root .reveal-up {\n  animation: none !important;\n  opacity: 1 !important;\n  transform: none !important;\n}\n.home-page-root .hero-glow-1,\n.home-page-root .hero-glow-2 {\n  animation: none !important;\n  filter: blur(32px);\n}\n.home-page-root .hero-visual-img,\n.home-page-root .cta-badge-img {\n  animation: none !important;\n}\n.home-page-root .hero-card,\n.home-page-root .gallery-btn {\n  backdrop-filter: none;\n  -webkit-backdrop-filter: none;\n}\n/*# sourceMappingURL=home.component.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 27 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-JDMDZUH7.js.map
