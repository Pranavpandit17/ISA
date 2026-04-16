import {
  AppModalService
} from "./chunk-MVRZHEL3.js";
import {
  AppNavigationService
} from "./chunk-QHKKPQF3.js";
import {
  DataService
} from "./chunk-N5RJEOBE.js";
import {
  AuthService
} from "./chunk-ZQTCOOSY.js";
import "./chunk-TPWHRN67.js";
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
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IAKTGX76.js";

// src/app/pages/home/home.component.ts
var _c0 = (a0, a1) => ({ "bg-white w-8": a0, "bg-white/20 w-3": a1 });
function HomeComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98);
    \u0275\u0275element(1, "img", 99);
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
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 102)(4, "div", 103);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 104);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "div", 105);
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
    \u0275\u0275elementStart(0, "div", 106)(1, "div", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 108);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 109);
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
function HomeComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "img", 99);
    \u0275\u0275elementStart(2, "div", 111)(3, "span", 112);
    \u0275\u0275text(4, "ISA Event Archive");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const img_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-100", i_r7 === ctx_r7.currentGalleryIndex)("opacity-0", i_r7 !== ctx_r7.currentGalleryIndex)("scale-100", i_r7 === ctx_r7.currentGalleryIndex)("scale-110", i_r7 !== ctx_r7.currentGalleryIndex);
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r6, \u0275\u0275sanitizeUrl);
  }
}
function HomeComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113);
    \u0275\u0275listener("click", function HomeComponent_div_92_Template_div_click_0_listener() {
      const i_r10 = \u0275\u0275restoreView(_r9).index;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.goToGallery(i_r10));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c0, i_r10 === ctx_r7.currentGalleryIndex, i_r10 !== ctx_r7.currentGalleryIndex));
  }
}
function HomeComponent_section_93_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122);
    \u0275\u0275element(2, "img", 123);
    \u0275\u0275elementStart(3, "div", 124);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 125)(6, "div", 126)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 127);
    \u0275\u0275text(11, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "h3", 128);
    \u0275\u0275listener("click", function HomeComponent_section_93_div_13_Template_h3_click_14_listener() {
      const event_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onViewEvent(event_r13));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 129);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 130);
    \u0275\u0275listener("click", function HomeComponent_section_93_div_13_Template_button_click_18_listener() {
      const event_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onViewEvent(event_r13));
    });
    \u0275\u0275text(19, " Register Now ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r14 * 0.1 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", event_r13.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r13.category, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 8, event_r13.startDate || event_r13.date, "MMM dd, yyyy"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(event_r13.startTime || "10:00 AM");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r13.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r13.description, " ");
  }
}
function HomeComponent_section_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 114)(1, "div", 38)(2, "div", 115)(3, "div", 116)(4, "span", 40);
    \u0275\u0275text(5, "Don't Miss Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 117);
    \u0275\u0275text(7, "Upcoming Meetups & Sessions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 118);
    \u0275\u0275listener("click", function HomeComponent_section_93_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onNavigate("EVENTS"));
    });
    \u0275\u0275text(9, " View Full Calendar ");
    \u0275\u0275elementStart(10, "span", 119);
    \u0275\u0275text(11, "\u2192");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 43);
    \u0275\u0275template(13, HomeComponent_section_93_div_13_Template, 20, 11, "div", 120);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r7.events.slice(0, 3));
  }
}
function HomeComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275element(1, "div", 132);
    \u0275\u0275elementStart(2, "p", 133);
    \u0275\u0275text(3, "Synchronizing Membership Tiers...");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_104_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1, "Popular");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_104_div_1_h3_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 147);
    \u0275\u0275text(1, "Custom");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_104_div_1_h3_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 147);
    \u0275\u0275text(1, "Free");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_div_104_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148)(1, "span", 149);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 150);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", plan_r16.price.toLocaleString("en-IN"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", plan_r16.durationMonths === 12 ? "yr" : plan_r16.durationMonths + "m", "");
  }
}
function HomeComponent_div_104_div_1_li_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 151)(1, "span", 152);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 153);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feat_r17 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feat_r17);
  }
}
function HomeComponent_div_104_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "div", 136)(2, "div")(3, "h3", 137);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 138);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, HomeComponent_div_104_div_1_div_7_Template, 2, 0, "div", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 140);
    \u0275\u0275template(9, HomeComponent_div_104_div_1_h3_9_Template, 2, 0, "h3", 141)(10, HomeComponent_div_104_div_1_h3_10_Template, 2, 0, "h3", 141)(11, HomeComponent_div_104_div_1_div_11_Template, 5, 2, "div", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 143);
    \u0275\u0275template(13, HomeComponent_div_104_div_1_li_13_Template, 5, 1, "li", 144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 145);
    \u0275\u0275listener("click", function HomeComponent_div_104_div_1_Template_button_click_14_listener() {
      const plan_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.onPlanAction(plan_r16));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r16 = ctx.$implicit;
    const i_r18 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r18 * 0.1 + "s");
    \u0275\u0275classProp("plan-card-featured", plan_r16.highlight);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(plan_r16.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r16.period);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r16.highlight);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", plan_r16.price > 5e4 || plan_r16.name.includes("Executive"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r16.price === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r16.price > 0 && plan_r16.price <= 5e4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", plan_r16.features);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-blue-600", plan_r16.highlight)("text-white", plan_r16.highlight)("bg-slate-100", !plan_r16.highlight)("text-slate-900", !plan_r16.highlight)("hover:bg-blue-700", plan_r16.highlight)("hover:bg-slate-200", !plan_r16.highlight);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", plan_r16.btnText, " ");
  }
}
function HomeComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, HomeComponent_div_104_div_1_Template, 16, 24, "div", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r7.membershipPlans);
  }
}
function HomeComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154)(1, "div", 155);
    \u0275\u0275element(2, "img", 156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4", 157);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 158);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 159);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r20 * 0.1 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", member_r19.image || "assets/default-avatar.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r19.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r19.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r19.company);
  }
}
function HomeComponent_div_143_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 164);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faq_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r22.answer, " ");
  }
}
function HomeComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 160)(1, "button", 161);
    \u0275\u0275listener("click", function HomeComponent_div_143_Template_button_click_1_listener() {
      const faq_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.toggleFaq(faq_r22));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 162);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, HomeComponent_div_143_div_6_Template, 2, 1, "div", 163);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faq_r22 = ctx.$implicit;
    \u0275\u0275classProp("active", faq_r22.isOpen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r22.question);
    \u0275\u0275advance();
    \u0275\u0275classProp("rotate-180", faq_r22.isOpen);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r22.isOpen ? "\u2212" : "+", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", faq_r22.isOpen);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(dataService, authService, apiService, navService, modalService) {
    this.dataService = dataService;
    this.authService = authService;
    this.apiService = apiService;
    this.navService = navService;
    this.modalService = modalService;
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
    this.loadUpcomingEvents();
    this.loadMembershipPlans();
    if (this.galleryImages.length > 1) {
      this.galleryIntervalId = setInterval(() => this.nextGallery(), 5e3);
    }
  }
  loadMembershipPlans() {
    this.isLoadingPlans = true;
    this.apiService.getMembershipPlans().subscribe({
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
  ngOnDestroy() {
    if (this.galleryIntervalId)
      clearInterval(this.galleryIntervalId);
  }
  loadUpcomingEvents() {
    this.isLoadingEvents = true;
    this.apiService.getEvents().subscribe({
      next: (response) => {
        const events = Array.isArray(response) ? response : [];
        const now = /* @__PURE__ */ new Date();
        const upcoming = events.filter((e) => {
          if (e.status !== "PUBLISHED")
            return false;
          const checkDate = e.endDate || e.startDate || e.date;
          if (!checkDate)
            return true;
          const dt = new Date(checkDate);
          return dt >= now;
        });
        this.events = upcoming.sort((a, b) => {
          const dA = new Date(a.startDate || a.date || 0);
          const dB = new Date(b.startDate || b.date || 0);
          return dA.getTime() - dB.getTime();
        }).map((e) => {
          let image = e.imageUrl || e.image || (e.poster ? `/api/events/poster/${e.id}` : "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop");
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
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 189, vars: 10, consts: [[1, "overflow-x-hidden"], [1, "hero-dark", "min-h-[95vh]", "flex", "items-center", "justify-center", "px-6", "overflow-hidden"], [1, "hero-glow-1"], [1, "hero-glow-2"], [1, "max-w-7xl", "mx-auto", "w-full", "grid", "grid-cols-1", "lg:grid-cols-2", "gap-16", "items-center", "relative", "z-10", "py-20"], [1, "reveal-up"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "rounded-full", "bg-blue-500/10", "border", "border-blue-500/20", "text-blue-400", "text-[10px]", "font-black", "uppercase", "tracking-[0.2em]", "mb-6"], [1, "relative", "flex", "h-2", "w-2"], [1, "animate-ping", "absolute", "inline-flex", "h-full", "w-full", "rounded-full", "bg-blue-400", "opacity-75"], [1, "relative", "inline-flex", "rounded-full", "h-2", "w-2", "bg-blue-500"], [1, "text-4xl", "lg:text-6xl", "font-black", "mb-8", "leading-[1]", "tracking-tight"], [1, "hero-text-gradient"], [1, "bg-gradient-to-r", "from-blue-400", "via-indigo-400", "to-purple-500", "bg-clip-text", "text-transparent"], [1, "text-xl", "text-slate-400", "mb-12", "max-w-lg", "leading-relaxed", "font-medium"], [1, "flex", "flex-wrap", "gap-5"], [1, "bg-blue-600", "text-white", "px-12", "py-5", "rounded-2xl", "text-lg", "font-bold", "hover:bg-blue-500", "transition-all", "shadow-[0_20px_50px_rgba(37,99,235,0.3)]", "hover:shadow-[0_20px_50px_rgba(37,99,235,0.5)]", "transform", "hover:-translate-y-1", 3, "click"], [1, "bg-white/5", "backdrop-blur-xl", "text-white", "border", "border-white/10", "px-12", "py-5", "rounded-2xl", "text-lg", "font-bold", "hover:bg-white/10", "transition-all", 3, "click"], [1, "mt-16", "flex", "items-center", "gap-5"], [1, "flex", "-space-x-3"], ["class", "w-12 h-12 rounded-full border-2 border-slate-900 overflow-hidden ring-1 ring-white/10 shadow-2xl", 4, "ngFor", "ngForOf"], [1, "w-12", "h-12", "rounded-full", "bg-blue-600", "border-2", "border-slate-900", "flex", "items-center", "justify-center", "text-[10px]", "font-black", "text-white", "ring-1", "ring-white/10"], [1, "flex", "flex-col"], [1, "text-sm", "font-bold", "text-white", "leading-none", "mb-1"], [1, "text-[11px]", "text-slate-500", "font-bold", "uppercase", "tracking-widest"], [1, "hero-visual-wrapper", "hidden", "lg:block", "reveal-up", "delay-2"], [1, "relative"], [1, "absolute", "-top-10", "-right-[-20px]", "hero-card", "p-5", "rounded-3xl", "z-20", "reveal-up", "delay-3"], [1, "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "bg-green-500/20", "rounded-2xl", "flex", "items-center", "justify-center", "text-xl"], [1, "text-[10px]", "uppercase", "font-black", "text-slate-500", "tracking-widest", "mb-1"], [1, "text-xl", "font-black", "text-white"], [1, "absolute", "-bottom-10", "-left-10", "hero-card", "p-5", "rounded-3xl", "z-20", "reveal-up", "delay-4"], [1, "w-12", "h-12", "bg-blue-500/20", "rounded-2xl", "flex", "items-center", "justify-center", "text-xl"], ["src", "assets/it_leaders_hero_visual_1775114268184.png", "alt", "IT Hub Visual", "onerror", "this.src='assets/ISA-Logo-Large.png'; this.classList.add('px-20', 'py-20')", 1, "hero-visual-img", "w-full", "h-auto", "aspect-square", "object-cover"], [1, "max-w-7xl", "mx-auto", "px-4", "mb-10", 2, "margin-top", "-35px"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-8"], ["class", "stat-card reveal-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "bg-slate-50", "px-4", 2, "margin-top", "80px"], [1, "max-w-7xl", "mx-auto"], [1, "text-center", "mb-20", "reveal-up"], [1, "section-tag"], [1, "text-4xl", "md:text-5xl", "section-title", "mb-6"], [1, "text-slate-500", "max-w-2xl", "mx-auto", "text-lg", "leading-relaxed"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8"], ["class", "feature-card reveal-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "py-32", "px-4", "bg-white", "relative"], [1, "grid", "grid-cols-1", "lg:grid-cols-5", "gap-16", "items-center"], [1, "lg:col-span-2", "reveal-up"], [1, "text-4xl", "section-title", "mb-8", "leading-tight"], [1, "text-slate-600", "mb-10", "text-lg", "leading-relaxed"], [1, "flex", "gap-4"], [1, "gallery-btn", 3, "click"], [1, "lg:col-span-3", "gallery-viewport", "h-[450px]", "relative", "reveal-up", "delay-2"], ["class", "absolute inset-0 transition-all duration-700 ease-in-out transform", 3, "opacity-100", "opacity-0", "scale-100", "scale-110", 4, "ngFor", "ngForOf"], [1, "absolute", "bottom-8", "right-8", "flex", "gap-2"], ["class", "h-3 rounded-full cursor-pointer transition-all border-2 border-white/50", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "py-24 px-4 bg-slate-50", 4, "ngIf"], [1, "text-slate-500", "max-w-2xl", "mx-auto", "text-lg"], ["class", "py-20 text-center", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", 4, "ngIf"], [1, "max-w-7xl", "mx-auto", "px-4", "py-20", "reveal-up"], [1, "premium-gradient-card", "grid", "grid-cols-1", "lg:grid-cols-2", "gap-12", "items-center"], [1, "relative", "z-10"], [1, "inline-block", "px-4", "py-1.5", "rounded-full", "bg-blue-500/10", "border", "border-blue-500/20", "text-blue-400", "text-[10px]", "font-black", "uppercase", "tracking-widest", "mb-6"], [1, "text-4xl", "md:text-5xl", "font-black", "mb-8", "leading-tight"], [1, "text-blue-200", "text-lg", "mb-12", "max-w-lg", "leading-relaxed"], [1, "flex", "flex-wrap", "gap-4"], [1, "bg-white", "text-slate-900", "px-12", "py-5", "rounded-2xl", "font-black", "shadow-[0_20px_50px_rgba(255,255,255,0.15)]", "hover:bg-slate-50", "transform", "hover:-translate-y-1", "transition-all", 3, "click"], [1, "bg-white/10", "backdrop-blur-md", "text-white", "border", "border-white/20", "px-12", "py-5", "rounded-2xl", "font-bold", "hover:bg-white/20", "transition-all", 3, "click"], [1, "cta-badge-wrapper", "hidden", "lg:flex"], [1, "absolute", "inset-0", "bg-blue-500/10", "blur-[100px]", "rounded-full"], ["src", "assets/isa_membership_vip_badge_1775114556110.png", "alt", "Membership Badge", 1, "cta-badge-img", "relative", "z-10"], [1, "py-32", "px-4", "bg-white"], [1, "text-4xl", "section-title", "mb-6"], [1, "grid", "grid-cols-2", "lg:grid-cols-4", "gap-x-8", "gap-y-16"], ["class", "leader-card reveal-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "py-32", "px-4", "bg-slate-50"], [1, "max-w-3xl", "mx-auto"], [1, "text-center", "mb-16", "reveal-up"], [1, "text-3xl", "font-extrabold", "text-slate-900", "mb-4"], ["class", "faq-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "py-32", "px-4", "bg-white", "border-t", "border-slate-100"], [1, "max-w-7xl", "mx-auto", "grid", "grid-cols-1", "lg:grid-cols-2", "gap-16", "items-center"], [1, "text-4xl", "section-title", "mb-8"], [1, "text-lg", "text-slate-600", "mb-10", "leading-relaxed"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-6"], [1, "flex", "items-start", "gap-4"], [1, "w-12", "h-12", "rounded-2xl", "bg-slate-50", "flex", "items-center", "justify-center", "text-2xl", "flex-shrink-0"], [1, "text-xs", "font-bold", "text-slate-400", "uppercase", "tracking-widest", "mb-1"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "reveal-up", "delay-2"], [1, "bg-slate-50", "p-10", "rounded-[32px]", "border", "border-slate-200"], [1, "grid", "grid-cols-1", "gap-6"], [1, "block", "text-xs", "font-black", "text-slate-400", "uppercase", "tracking-widest", "mb-2"], ["type", "text", "placeholder", "Your name", 1, "w-full", "bg-white", "border", "border-slate-200", "p-4", "rounded-2xl", "text-sm", "focus:border-blue-600", "outline-none", "transition-all"], ["type", "email", "placeholder", "example@company.com", 1, "w-full", "bg-white", "border", "border-slate-200", "p-4", "rounded-2xl", "text-sm", "focus:border-blue-600", "outline-none", "transition-all"], ["rows", "3", 1, "w-full", "bg-white", "border", "border-slate-200", "p-4", "rounded-2xl", "text-sm", "focus:border-blue-600", "outline-none", "transition-all"], [1, "bg-blue-600", "text-white", "font-bold", "py-5", "rounded-2xl", "shadow-xl", "hover:bg-blue-700", "hover:shadow-blue-200/50", "transition-all", "transform", "hover:-translate-y-1"], [1, "w-12", "h-12", "rounded-full", "border-2", "border-slate-900", "overflow-hidden", "ring-1", "ring-white/10", "shadow-2xl"], [1, "w-full", "h-full", "object-cover", 3, "src"], [1, "stat-card", "reveal-up"], [1, "stat-icon-wrapper"], [1, "stat-content"], [1, "stat-value", 2, "font-size", "3rem"], [1, "stat-label"], [1, "stat-accent"], [1, "feature-card", "reveal-up"], [1, "feature-icon-box"], [1, "text-xl", "font-bold", "text-slate-900", "mb-3"], [1, "text-slate-600", "leading-relaxed", "text-sm"], [1, "absolute", "inset-0", "transition-all", "duration-700", "ease-in-out", "transform"], [1, "absolute", "bottom-0", "left-0", "right-0", "p-8", "pt-16", "bg-gradient-to-t", "from-slate-900/80", "to-transparent"], [1, "text-white/60", "text-xs", "font-bold", "uppercase", "tracking-widest"], [1, "h-3", "rounded-full", "cursor-pointer", "transition-all", "border-2", "border-white/50", 3, "click", "ngClass"], [1, "py-24", "px-4", "bg-slate-50"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "justify-between", "mb-16", "reveal-up"], [1, "mb-4", "md:mb-0"], [1, "text-4xl", "section-title"], [1, "group", "flex", "items-center", "gap-2", "text-blue-600", "font-bold", "hover:text-blue-800", "transition-colors", 3, "click"], [1, "group-hover:translate-x-1", "transition-transform"], ["class", "group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-200 reveal-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "group", "bg-white", "rounded-3xl", "overflow-hidden", "shadow-sm", "hover:shadow-2xl", "transition-all", "border", "border-slate-200", "reveal-up"], [1, "h-48", "bg-slate-100", "relative", "overflow-hidden"], [1, "w-full", "h-full", "object-cover", "transition-transform", "duration-500", "group-hover:scale-110", 3, "src"], [1, "absolute", "top-4", "right-4", "bg-white/90", "backdrop-blur-md", "px-3", "py-1", "rounded-lg", "text-xs", "font-bold", "text-slate-800", "shadow-sm", "border", "border-white/20"], [1, "p-8"], [1, "flex", "items-center", "gap-2", "text-blue-600", "font-bold", "text-xs", "uppercase", "mb-3"], [1, "text-slate-300"], [1, "text-xl", "font-extrabold", "text-slate-900", "mb-4", "group-hover:text-blue-600", "transition-colors", "cursor-pointer", 3, "click"], [1, "text-slate-500", "text-sm", "line-clamp-2", "mb-6", "leading-relaxed"], [1, "w-full", "py-4", "text-sm", "font-bold", "text-blue-600", "border", "border-blue-100", "bg-blue-50/50", "rounded-2xl", "group-hover:bg-blue-600", "group-hover:text-white", "group-hover:border-blue-600", "transition-all", 3, "click"], [1, "py-20", "text-center"], [1, "h-10", "w-10", "border-4", "border-slate-100", "border-t-blue-600", "rounded-full", "animate-spin", "mx-auto", "mb-4"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "text-slate-400"], ["class", "plan-card reveal-up", 3, "plan-card-featured", "animation-delay", 4, "ngFor", "ngForOf"], [1, "plan-card", "reveal-up"], [1, "flex", "justify-between", "items-start", "mb-8"], [1, "text-xl", "font-black", "mb-2"], [1, "text-sm", "font-bold", "uppercase", "tracking-widest", "opacity-60"], ["class", "bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase", 4, "ngIf"], [1, "mb-8"], ["class", "text-xl font-black mb-1", 4, "ngIf"], ["class", "flex items-baseline gap-1", 4, "ngIf"], [1, "feature-list"], ["class", "feature-item", 4, "ngFor", "ngForOf"], [1, "w-full", "py-4", "rounded-2xl", "font-black", "transition-all", "transform", "hover:-translate-y-1", 3, "click"], [1, "bg-blue-500", "text-white", "text-[10px]", "font-black", "px-3", "py-1", "rounded-full", "uppercase"], [1, "text-xl", "font-black", "mb-1"], [1, "flex", "items-baseline", "gap-1"], [1, "text-4xl", "font-black", "tracking-tighter"], [1, "text-slate-400", "font-bold"], [1, "feature-item"], [1, "feature-check", "!bg-green-50", "!text-green-500"], [1, "feature-text", "text-sm", "font-medium"], [1, "leader-card", "reveal-up"], [1, "leader-image-wrap"], [1, "leader-img", 3, "src"], [1, "text-lg", "font-bold", "text-slate-900", "leading-tight", "mb-1"], [1, "text-blue-600", "text-xs", "font-bold", "uppercase", "tracking-widest", "mb-3"], [1, "text-slate-400", "text-xs", "font-medium"], [1, "faq-item"], [1, "faq-trigger", 3, "click"], [1, "text-blue-600", "text-lg", "transition-transform"], ["class", "faq-answer", 4, "ngIf"], [1, "faq-answer"]], template: function HomeComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(72, "section", 45)(73, "div", 38)(74, "div", 46)(75, "div", 47)(76, "span", 40);
        \u0275\u0275text(77, "Community in Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "h2", 48);
        \u0275\u0275text(79, "Shared Moments, ");
        \u0275\u0275element(80, "br");
        \u0275\u0275text(81, " Lasting Impact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p", 49);
        \u0275\u0275text(83, " Take a look into our regular meetups, policy sessions, and industry networking events. We believe progress happens when we walk together. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 50)(85, "button", 51);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_85_listener() {
          return ctx.prevGallery();
        });
        \u0275\u0275text(86, "\u2190");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "button", 51);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_87_listener() {
          return ctx.nextGallery();
        });
        \u0275\u0275text(88, "\u2192");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(89, "div", 52);
        \u0275\u0275template(90, HomeComponent_div_90_Template, 5, 9, "div", 53);
        \u0275\u0275elementStart(91, "div", 54);
        \u0275\u0275template(92, HomeComponent_div_92_Template, 1, 4, "div", 55);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(93, HomeComponent_section_93_Template, 14, 1, "section", 56);
        \u0275\u0275elementStart(94, "section", 45)(95, "div", 38)(96, "div", 39)(97, "span", 40);
        \u0275\u0275text(98, "Tiered Access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "h2", 41);
        \u0275\u0275text(100, "ISA Membership Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "p", 57);
        \u0275\u0275text(102, " Choose a path that aligns with your organization's scale and collaborative goals. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(103, HomeComponent_div_103_Template, 4, 0, "div", 58)(104, HomeComponent_div_104_Template, 2, 1, "div", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "section", 60)(106, "div", 61)(107, "div", 62)(108, "span", 63);
        \u0275\u0275text(109, "ISA Excellence");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "h2", 64);
        \u0275\u0275text(111, "Elevate Indore's ");
        \u0275\u0275element(112, "br");
        \u0275\u0275text(113, " Global Standing.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "p", 65);
        \u0275\u0275text(115, " Be part of the only curated ecosystem for tech leadership in Central India. Get exclusive project access, policy influence, and elite networking. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 66)(117, "button", 67);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_117_listener() {
          return ctx.onOpenAuth("REGISTER");
        });
        \u0275\u0275text(118, " Apply for Membership ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "button", 68);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_119_listener() {
          return ctx.onNavigate("BENCH");
        });
        \u0275\u0275text(120, " Bench Exchange ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(121, "div", 69);
        \u0275\u0275element(122, "div", 70)(123, "img", 71);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(124, "section", 72)(125, "div", 38)(126, "div", 39)(127, "span", 40);
        \u0275\u0275text(128, "Governance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "h2", 73);
        \u0275\u0275text(130, "Led by Industry Visionaries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "p", 57);
        \u0275\u0275text(132, " Meet the experienced leaders steering ISA towards industrial excellence and collaborative growth. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "div", 74);
        \u0275\u0275template(134, HomeComponent_div_134_Template, 9, 6, "div", 75);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(135, "section", 76)(136, "div", 77)(137, "div", 78)(138, "span", 40);
        \u0275\u0275text(139, "Common Questions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "h2", 79);
        \u0275\u0275text(141, "You Ask, We Answer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div", 5);
        \u0275\u0275template(143, HomeComponent_div_143_Template, 7, 7, "div", 80);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(144, "section", 81)(145, "div", 82)(146, "div", 5)(147, "span", 40);
        \u0275\u0275text(148, "Let's Connect");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "h2", 83);
        \u0275\u0275text(150, "Ready to grow Indore's IT footprint?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "p", 84);
        \u0275\u0275text(152, " Questions about membership or partnership opportunities? Our office in Indore is always open for innovators. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "div", 85)(154, "div", 86)(155, "div", 87);
        \u0275\u0275text(156, "\u{1F3E2} ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "div")(158, "p", 88);
        \u0275\u0275text(159, "Our Base");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "p", 89);
        \u0275\u0275text(161, "Brilliant Convention Centre, ");
        \u0275\u0275element(162, "br");
        \u0275\u0275text(163, " Indore, MP");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(164, "div", 86)(165, "div", 87);
        \u0275\u0275text(166, "\u{1F4EC} ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "div")(168, "p", 88);
        \u0275\u0275text(169, "Contact Mail");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "p", 89);
        \u0275\u0275text(171, "contact@isaindore.com");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(172, "div", 90)(173, "div", 91)(174, "div", 92)(175, "div")(176, "label", 93);
        \u0275\u0275text(177, "FullName");
        \u0275\u0275elementEnd();
        \u0275\u0275element(178, "input", 94);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "div")(180, "label", 93);
        \u0275\u0275text(181, "Enterprise Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(182, "input", 95);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "div")(184, "label", 93);
        \u0275\u0275text(185, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275element(186, "textarea", 96);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "button", 97);
        \u0275\u0275text(188, " Send Message ");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(29);
        \u0275\u0275property("ngForOf", ctx.boardMembers.slice(0, 5));
        \u0275\u0275advance(31);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.features);
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
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe], styles: ['/* src/app/pages/home/home.component.css */\n:host {\n  display: block;\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeInLR {\n  from {\n    opacity: 0;\n    transform: translateX(-30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes float {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-15px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@keyframes pulse-soft {\n  0% {\n    transform: scale(1);\n    opacity: 0.2;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.3;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0.2;\n  }\n}\n.reveal-up {\n  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.delay-1 {\n  animation-delay: 0.1s;\n}\n.delay-2 {\n  animation-delay: 0.2s;\n}\n.delay-3 {\n  animation-delay: 0.3s;\n}\n.delay-4 {\n  animation-delay: 0.4s;\n}\n.hero-dark {\n  background:\n    radial-gradient(\n      circle at 20% 40%,\n      rgba(15, 23, 42, 1) 0%,\n      rgba(2, 6, 23, 1) 100%);\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n.hero-glow-1 {\n  position: absolute;\n  top: -10%;\n  right: -5%;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(79, 70, 229, 0.4) 0%,\n      transparent 70%);\n  filter: blur(100px);\n  animation: pulse-soft 8s infinite ease-in-out;\n  pointer-events: none;\n}\n.hero-glow-2 {\n  position: absolute;\n  bottom: -15%;\n  left: -5%;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(124, 58, 237, 0.3) 0%,\n      transparent 70%);\n  filter: blur(100px);\n  animation: pulse-soft 10s infinite ease-in-out reverse;\n  pointer-events: none;\n}\n.hero-visual-wrapper {\n  position: relative;\n  perspective: 1000px;\n}\n.hero-visual-img {\n  border-radius: 40px;\n  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  animation: float 6s ease-in-out infinite;\n  transform-style: preserve-3d;\n  background: rgba(255, 255, 255, 0.02);\n}\n.hero-visual-img::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.1) 0%,\n      transparent 40%);\n  z-index: 1;\n}\n.hero-text-gradient {\n  background:\n    linear-gradient(\n      to right,\n      #ffffff 30%,\n      #a5b4fc 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-card {\n  background: rgba(255, 255, 255, 0.05);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n  transition: all 0.4s ease;\n}\n.hero-card:hover {\n  border-color: rgba(99, 102, 241, 0.4);\n  transform: translateY(-5px);\n  background: rgba(255, 255, 255, 0.05);\n}\n.stat-card {\n  background: #ffffff;\n  padding: 3rem 2rem;\n  border-radius: 32px;\n  border: 1px solid #f1f5f9;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);\n}\n.stat-card:hover {\n  transform: translateY(-12px) scale(1.02);\n  box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.1);\n  border-color: #e2e8f0;\n}\n.stat-icon-wrapper {\n  width: 72px;\n  height: 72px;\n  border-radius: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.25rem;\n  margin-bottom: 2rem;\n  transition: all 0.5s ease;\n  z-index: 2;\n}\n.stat-card:hover .stat-icon-wrapper {\n  transform: rotate(10deg) scale(1.1);\n  box-shadow: 0 10px 20px -5px currentColor;\n}\n.stat-content {\n  z-index: 2;\n}\n.stat-value {\n  font-size: 3.5rem;\n  font-weight: 900;\n  line-height: 1;\n  margin-bottom: 0.75rem;\n  letter-spacing: -0.05em;\n}\n.stat-label {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n  margin: 0;\n}\n.stat-accent {\n  position: absolute;\n  bottom: -40px;\n  right: -40px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  filter: blur(40px);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n  pointer-events: none;\n}\n.stat-card:hover .stat-accent {\n  opacity: 0.15;\n}\n.feature-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  padding: 2.5rem;\n  border-radius: 20px;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n  overflow: hidden;\n}\n.feature-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #4f46e5,\n      #7c3aed);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.3s ease;\n}\n.feature-card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);\n  border-color: #dee2e6;\n}\n.feature-card:hover::before {\n  transform: scaleX(1);\n}\n.feature-icon-box {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background: rgba(79, 70, 229, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.75rem;\n  margin-bottom: 1.5rem;\n  transition: transform 0.3s ease;\n}\n.feature-card:hover .feature-icon-box {\n  transform: scale(1.1) rotate(5deg);\n  background: rgba(79, 70, 229, 0.1);\n}\n.section-tag {\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  color: #6366f1;\n  display: inline-block;\n  margin-bottom: 0.75rem;\n}\n.section-title {\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.plan-card {\n  background: white;\n  border-radius: 32px;\n  padding: 3rem;\n  border: 1px solid #f1f5f9;\n  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n  display: flex;\n  flex-direction: column;\n}\n.plan-card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.1);\n  border-color: #e2e8f0;\n}\n.plan-card-featured {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e1b4b 100%);\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 30px 60px -12px rgba(30, 27, 75, 0.4);\n}\n.plan-card-featured::after {\n  content: "";\n  position: absolute;\n  top: -20%;\n  right: -20%;\n  width: 200px;\n  height: 200px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(79, 70, 229, 0.2) 0%,\n      transparent 70%);\n}\n.feature-list {\n  list-style: none;\n  padding: 0;\n  margin: 2rem 0;\n  flex-grow: 1;\n}\n.feature-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 1rem;\n  font-size: 0.95rem;\n}\n.feature-check {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: rgba(79, 70, 229, 0.1);\n  color: #4f46e5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 900;\n  flex-shrink: 0;\n}\n.plan-card-featured .feature-check {\n  background: rgba(255, 255, 255, 0.1);\n  color: #818cf8;\n}\n.feature-text {\n  color: #64748b;\n}\n.plan-card-featured .feature-text {\n  color: #cbd5e1;\n}\n.premium-gradient-card {\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e1b4b 100%);\n  border-radius: 32px;\n  padding: 4rem;\n  position: relative;\n  overflow: hidden;\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.premium-gradient-card::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(99, 102, 241, 0.15) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.cta-badge-wrapper {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.cta-badge-img {\n  width: 320px;\n  height: auto;\n  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4));\n  animation: float 5s ease-in-out infinite;\n  border-radius: 15px;\n}\n.gallery-viewport {\n  border-radius: 24px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  background: #f1f5f9;\n}\n.gallery-btn {\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease;\n  color: #1e293b;\n}\n.gallery-btn:hover {\n  background: #ffffff;\n  transform: scale(1.1);\n  color: #4f46e5;\n}\n.leader-card {\n  text-align: center;\n  padding: 2rem;\n  border-radius: 24px;\n  background: #fff;\n  border: 1px solid transparent;\n  transition: all 0.3s ease;\n}\n.leader-card:hover {\n  border-color: #f1f5f9;\n  background: #fcfcfd;\n}\n.leader-image-wrap {\n  width: 140px;\n  height: 140px;\n  margin: 0 auto 1.5rem;\n  position: relative;\n}\n.leader-image-wrap::before {\n  content: "";\n  position: absolute;\n  inset: -8px;\n  border: 2px solid #e2e8f0;\n  border-radius: 50%;\n  transition: all 0.4s ease;\n}\n.leader-card:hover .leader-image-wrap::before {\n  inset: -12px;\n  border-color: #6366f1;\n  transform: rotate(180deg);\n  border-style: dashed;\n}\n.leader-img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n  filter: grayscale(100%);\n  transition: all 0.4s ease;\n}\n.leader-card:hover .leader-img {\n  filter: grayscale(0%);\n  transform: scale(1.05);\n}\n.faq-item {\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  margin-bottom: 1rem;\n  transition: all 0.2s ease;\n}\n.faq-item.active {\n  border-color: #cbd5e1;\n  background: #f8fafc;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);\n}\n.faq-trigger {\n  width: 100%;\n  padding: 1.25rem 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 700;\n  color: #1e293b;\n  text-align: left;\n}\n.faq-answer {\n  padding: 0 1.5rem 1.5rem;\n  color: #64748b;\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n/*# sourceMappingURL=home.component.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 18 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-QO4AH3RA.js.map
