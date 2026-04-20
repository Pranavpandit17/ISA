import {
  Router
} from "./chunk-X7FTYMHV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QNLLDZ5O.js";
import "./chunk-BACPM34C.js";
import {
  ApiService,
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CRF7CKPV.js";

// src/app/pages/old-events/old-events.component.ts
function OldEventsComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "s");
    \u0275\u0275elementEnd();
  }
}
function OldEventsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3, "Loading archive...");
    \u0275\u0275elementEnd()();
  }
}
function OldEventsComponent_div_22_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 23);
    \u0275\u0275listener("click", function OldEventsComponent_div_22_article_1_Template_article_click_0_listener() {
      const event_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEvent(event_r2));
    });
    \u0275\u0275elementStart(1, "div", 24);
    \u0275\u0275element(2, "img", 25);
    \u0275\u0275elementStart(3, "div", 26)(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 29);
    \u0275\u0275text(11, " Past ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 30)(13, "span", 31);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h2", 32);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 33);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 34)(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275styleProp("animation-delay", i_r4 * 0.05 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", event_r2.image, \u0275\u0275sanitizeUrl)("alt", event_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 10, event_r2.startDate || event_r2.date, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 13, event_r2.startDate || event_r2.date, "MMM"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(event_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(event_r2.location);
  }
}
function OldEventsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, OldEventsComponent_div_22_article_1_Template, 22, 16, "article", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredEvents);
  }
}
function OldEventsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 37);
    \u0275\u0275text(4, "No past events yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 38);
    \u0275\u0275text(6, " When published events end, they will appear here automatically. ");
    \u0275\u0275elementEnd()();
  }
}
var OldEventsComponent = class _OldEventsComponent {
  constructor(apiService, router) {
    this.apiService = apiService;
    this.router = router;
    this.events = [];
    this.filteredEvents = [];
    this.searchQuery = "";
    this.isLoading = false;
  }
  ngOnInit() {
    this.loadPastEvents();
  }
  resolveEventImageUrl(rawImage) {
    if (!rawImage)
      return null;
    const image = String(rawImage).trim();
    if (!image)
      return null;
    if (/^https?:\/\//i.test(image))
      return image;
    if (image.startsWith("//"))
      return `${window.location.protocol}${image}`;
    const normalizedPath = image.startsWith("/") ? image : `/${image}`;
    return `${this.apiService.getBackendBaseUrl()}${normalizedPath}`;
  }
  /** Same semantics as home page — local calendar end instant */
  parseLocalDay(raw) {
    if (raw == null || raw === "")
      return null;
    if (raw instanceof Date && !isNaN(raw.getTime())) {
      return new Date(raw.getFullYear(), raw.getMonth(), raw.getDate());
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
  getEventEndMillis(e) {
    const endDay = this.parseLocalDay(e.endDate);
    if (endDay) {
      return this.applyLocalTime(endDay, e.endTime, !e.endTime).getTime();
    }
    const startDay = this.parseLocalDay(e.startDate ?? e.date);
    if (!startDay)
      return null;
    return this.applyLocalTime(startDay, e.startTime, true).getTime();
  }
  loadPastEvents() {
    this.isLoading = true;
    this.apiService.getPublishedEvents().subscribe({
      next: (response) => {
        const list = Array.isArray(response) ? response : [];
        const now = Date.now();
        const past = list.filter((e) => {
          const endMs = this.getEventEndMillis(e);
          return endMs != null && endMs < now;
        }).sort((a, b) => {
          const eb = this.getEventEndMillis(b) ?? 0;
          const ea = this.getEventEndMillis(a) ?? 0;
          return eb - ea;
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
            title: e.name || e.title || "Event",
            date: e.startDate || e.date,
            location: e.location || e.venue || "TBA",
            category: e.category || e.type || "Event",
            description: e.description || e.shortDescription || "Highlights and outcomes from this ISA session."
          });
        });
        this.events = past;
        this.applyFilters();
        this.isLoading = false;
      },
      error: () => {
        this.events = [];
        this.filteredEvents = [];
        this.isLoading = false;
      }
    });
  }
  applyFilters() {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) {
      this.filteredEvents = [...this.events];
      return;
    }
    this.filteredEvents = this.events.filter((e) => String(e.title || "").toLowerCase().includes(q) || String(e.description || "").toLowerCase().includes(q) || String(e.location || "").toLowerCase().includes(q));
  }
  openEvent(event) {
    if (event?.id != null) {
      this.router.navigate(["/old-events", event.id]);
    }
  }
  static {
    this.\u0275fac = function OldEventsComponent_Factory(t) {
      return new (t || _OldEventsComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OldEventsComponent, selectors: [["app-old-events"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 6, consts: [[1, "events-page-root", "old-events-page", "min-h-screen", "bg-slate-50", "relative", "overflow-x-hidden"], [1, "events-header", "relative"], [1, "max-w-7xl", "mx-auto", "px-6"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-end", "justify-between", "gap-8", "reveal-up"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "text-indigo-500", "mb-2"], [1, "text-4xl", "md:text-5xl", "font-black", "text-slate-900", "mb-4", "tracking-tighter"], [1, "text-lg", "text-slate-500", "font-medium", "max-w-2xl"], [1, "search-input-wrapper"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-4", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search past events...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "max-w-7xl", "mx-auto", "px-6", "py-6"], [1, "flex", "items-center", "justify-between", "text-sm", "font-bold", "text-slate-400"], [4, "ngIf"], [1, "max-w-7xl", "mx-auto", "px-6", "pb-32"], ["class", "py-20 text-center", 4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", 4, "ngIf"], ["class", "empty-state reveal-up text-center py-20", 4, "ngIf"], [1, "py-20", "text-center"], [1, "h-10", "w-10", "border-4", "border-slate-100", "border-t-indigo-600", "rounded-full", "animate-spin", "mx-auto", "mb-4"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "text-slate-400"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8"], ["class", "event-card reveal-up cursor-pointer", 3, "animation-delay", "click", 4, "ngFor", "ngForOf"], [1, "event-card", "reveal-up", "cursor-pointer", 3, "click"], [1, "event-card-image-wrap"], [1, "event-card-img", 3, "src", "alt"], [1, "event-date-badge"], [1, "day"], [1, "month"], [1, "absolute", "top-3", "left-3", "px-2", "py-1", "rounded-lg", "text-[10px]", "font-black", "uppercase", "bg-slate-900/70", "text-white"], [1, "p-6", "flex", "flex-col", "flex-grow"], [1, "text-[10px]", "font-black", "uppercase", "text-indigo-500", "mb-2"], [1, "text-lg", "font-black", "text-slate-900", "mb-2", "leading-tight"], [1, "text-sm", "text-slate-500", "line-clamp-3", "mb-4", "flex-grow"], [1, "text-xs", "font-bold", "text-slate-400", "flex", "items-center", "gap-2"], [1, "empty-state", "reveal-up", "text-center", "py-20"], [1, "text-5xl", "mb-4", "grayscale", "opacity-30"], [1, "text-2xl", "font-black", "text-slate-900", "mb-2"], [1, "text-slate-500", "max-w-md", "mx-auto"]], template: function OldEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "p", 4);
        \u0275\u0275text(6, "Archive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h1", 5);
        \u0275\u0275text(8, " Old Events ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, " Browse past ISA meetups, conferences, and sessions. Use this archive for highlights, outcomes, and reference material from completed events. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 8);
        \u0275\u0275element(13, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(14, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function OldEventsComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("input", function OldEventsComponent_Template_input_input_14_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(15, "section", 11)(16, "div", 12)(17, "span");
        \u0275\u0275text(18);
        \u0275\u0275template(19, OldEventsComponent_span_19_Template, 2, 0, "span", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "main", 14);
        \u0275\u0275template(21, OldEventsComponent_div_21_Template, 4, 0, "div", 15)(22, OldEventsComponent_div_22_Template, 2, 1, "div", 16)(23, OldEventsComponent_div_23_Template, 7, 0, "div", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", ctx.filteredEvents.length, " past event");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredEvents.length !== 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredEvents.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading && ctx.filteredEvents.length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.old-events-page[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.12);\n}\n.old-events-page[_ngcontent-%COMP%]   .reveal-up[_ngcontent-%COMP%] {\n  animation: none;\n  opacity: 1;\n  transform: none;\n}\n/*# sourceMappingURL=old-events.component.css.map */", `

[_nghost-%COMP%] {
  display: block;
}
.events-header[_ngcontent-%COMP%] {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 4rem 0 3rem;
}
.search-input-wrapper[_ngcontent-%COMP%] {
  position: relative;
  max-width: 500px;
  width: 100%;
}
.search-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: #f8fafc;
  border: 1.5px solid #edf2f7;
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #1e293b;
  transition: all 0.25s ease;
}
.search-input[_ngcontent-%COMP%]:focus {
  background: #fff;
  border-color: #4f46e5;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.1);
  outline: none;
}
.filter-dropdown[_ngcontent-%COMP%] {
  appearance: none;
  background: #fff;
  border: 1.5px solid #e2e8f0;
  padding: 0.6rem 2.5rem 0.6rem 1.25rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
}
.filter-dropdown[_ngcontent-%COMP%]:hover {
  border-color: #cbd5e1;
  background-color: #f8fafc;
}
.filter-dropdown[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}
.event-card[_ngcontent-%COMP%] {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #f1f5f9;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
}
.event-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.1);
  border-color: #e2e8f0;
}
.event-card-image-wrap[_ngcontent-%COMP%] {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: #f1f5f9;
}
.event-card-img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.event-card[_ngcontent-%COMP%]:hover   .event-card-img[_ngcontent-%COMP%] {
  transform: scale(1.08);
}
.event-date-badge[_ngcontent-%COMP%] {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  padding: 0.5rem 0.75rem;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
.event-date-day[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 900;
  color: #1e293b;
  line-height: 1;
}
.event-date-month[_ngcontent-%COMP%] {
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #6366f1;
  letter-spacing: 0.05em;
}
.category-tag[_ngcontent-%COMP%] {
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
  margin-bottom: 0.75rem;
}
.event-card-content[_ngcontent-%COMP%] {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.event-card-title[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1.3;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s ease;
}
.event-card[_ngcontent-%COMP%]:hover   .event-card-title[_ngcontent-%COMP%] {
  color: #4f46e5;
}
.event-detail-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.event-card-footer[_ngcontent-%COMP%] {
  padding: 1.25rem 1.5rem;
  border-top: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fcfcfd;
}
.event-price[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 800;
  color: #0f172a;
}
.event-btn[_ngcontent-%COMP%] {
  padding: 0.5rem 1.25rem;
  background: #4f46e5;
  color: #fff;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 700;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}
.event-btn[_ngcontent-%COMP%]:hover {
  background: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}
@keyframes _ngcontent-%COMP%_fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.reveal-up[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.empty-state[_ngcontent-%COMP%] {
  padding: 5rem 2rem;
  text-align: center;
  background: white;
  border-radius: 32px;
  border: 2px dashed #e2e8f0;
}
.events-page-root[_ngcontent-%COMP%]   .reveal-up[_ngcontent-%COMP%] {
  animation: none !important;
  opacity: 1 !important;
  transform: none !important;
}
.events-page-root[_ngcontent-%COMP%]   .event-date-badge[_ngcontent-%COMP%] {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
/*# sourceMappingURL=events.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OldEventsComponent, { className: "OldEventsComponent", filePath: "src\\app\\pages\\old-events\\old-events.component.ts", lineNumber: 14 });
})();
export {
  OldEventsComponent
};
//# sourceMappingURL=chunk-IB7WX6EI.js.map
