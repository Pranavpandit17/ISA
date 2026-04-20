import {
  AppModalService
} from "./chunk-CGDGWJBY.js";
import {
  DataService
} from "./chunk-RLDPKJFY.js";
import {
  formatMemberFacingCost,
  normalizeTicketTypes,
  resolveMemberFacingUnitPrice
} from "./chunk-WTPJNKEG.js";
import {
  MembershipService
} from "./chunk-ZRHEMPKX.js";
import {
  AuthService
} from "./chunk-HS4BPM7A.js";
import {
  Router
} from "./chunk-X7FTYMHV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-QNLLDZ5O.js";
import "./chunk-BACPM34C.js";
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CRF7CKPV.js";

// src/app/pages/events/events.component.ts
function EventsComponent_nav_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 23)(1, "ul", 24)(2, "li")(3, "a", 25);
    \u0275\u0275listener("click", function EventsComponent_nav_3_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigate("DASHBOARD"));
    });
    \u0275\u0275text(4, "Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "li");
    \u0275\u0275text(6, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li", 19);
    \u0275\u0275text(8, "Events");
    \u0275\u0275elementEnd()()();
  }
}
function EventsComponent_div_56_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 28)(1, "div", 29);
    \u0275\u0275element(2, "img", 30);
    \u0275\u0275elementStart(3, "div", 31)(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 33);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 35)(13, "div", 36)(14, "span", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h3", 38);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 39)(19, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 41);
    \u0275\u0275element(21, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "div", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 41);
    \u0275\u0275element(25, "path", 43)(26, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 45)(29, "span", 46);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 47);
    \u0275\u0275listener("click", function EventsComponent_div_56_article_1_Template_button_click_31_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onViewEvent(event_r4));
    });
    \u0275\u0275text(32, " View Details ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r5 * 0.05 + "s");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", event_r4.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 13, event_r4.startDate || event_r4.date, "dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 16, event_r4.startDate || event_r4.date, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", event_r4.totalRegisteredSeats || 0, " / ", event_r4.maxCapacity || "N/A", " Registered ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getCategoryColor(event_r4.category || "") + "/10 " + ctx_r1.getCategoryColor(event_r4.category || "").replace("bg-", "text-"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r4.category, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r4.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatEventDateTime(event_r4), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", event_r4.location, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getEventCost(event_r4));
  }
}
function EventsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, EventsComponent_div_56_article_1_Template, 33, 19, "article", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredEvents);
  }
}
function EventsComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 50);
    \u0275\u0275element(3, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 52);
    \u0275\u0275text(5, "No Events Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 53);
    \u0275\u0275text(7, "Try adjusting your filters or search query to find what you're looking for. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 54);
    \u0275\u0275listener("click", function EventsComponent_div_57_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.eventTypeFilter = "All Types";
      ctx_r1.dateRangeFilter = "All Dates";
      ctx_r1.costFilter = "All Costs";
      ctx_r1.searchQuery = "";
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(9, " Clear All Filters ");
    \u0275\u0275elementEnd()();
  }
}
var EventsComponent = class _EventsComponent {
  constructor(dataService, authService, apiService, membershipService, modalService, router) {
    this.dataService = dataService;
    this.authService = authService;
    this.apiService = apiService;
    this.membershipService = membershipService;
    this.modalService = modalService;
    this.router = router;
    this.navigate = new EventEmitter();
    this.viewEvent = new EventEmitter();
    this.events = [];
    this.filteredEvents = [];
    this.currentUser = null;
    this.eventTypeFilter = "All Types";
    this.dateRangeFilter = "All Dates";
    this.costFilter = "All Costs";
    this.searchQuery = "";
    this.currentUser = this.authService.getCurrentUser();
  }
  ngOnInit() {
    this.loadAllUpcomingEvents();
  }
  resolveEventImageUrl(rawImage) {
    if (!rawImage) {
      return null;
    }
    const image = String(rawImage).trim();
    if (!image) {
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
  loadAllUpcomingEvents() {
    const now = /* @__PURE__ */ new Date();
    now.setHours(0, 0, 0, 0);
    this.apiService.getEvents().subscribe({
      next: (response) => {
        const allEvents = Array.isArray(response) ? response : [];
        const upcomingPublished = allEvents.filter((e) => {
          const isAdmin = this.currentUser?.role === "admin" || this.currentUser?.type === "ADMIN";
          if (e.status !== "PUBLISHED" && !isAdmin) {
            return false;
          }
          const now2 = /* @__PURE__ */ new Date();
          const today = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate());
          if (e.endDate) {
            const endDate = new Date(e.endDate);
            const endDay = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
            if (endDay < today) {
              return false;
            }
            if (endDay.getTime() === today.getTime() && e.endTime) {
              const [h, m] = e.endTime.split(":").map(Number);
              const endTime = new Date(today);
              endTime.setHours(h, m ?? 0, 0, 0);
              if (endTime < now2) {
                return false;
              }
            }
          } else if (e.startDate) {
            const startDate = new Date(e.startDate);
            const startDay = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
            if (startDay < today) {
              return false;
            }
          }
          return true;
        });
        this.events = upcomingPublished.map((e) => {
          let image = this.resolveEventImageUrl(e.imageUrl || e.image);
          if (!image && e.poster) {
            image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${e.id}`;
          }
          if (!image) {
            image = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop";
          }
          return __spreadProps(__spreadValues({}, e), {
            title: e.name || e.title,
            date: e.startDate || e.date,
            location: e.location || e.venue,
            category: e.category || e.type,
            image,
            registeredCount: e.registrationCount || e.registeredCount || 0,
            totalRegisteredSeats: e.totalRegisteredSeats || e.totalRegisteredSeats || 0,
            availableSeats: e.availableSeats !== void 0 ? e.availableSeats : e.capacity ? e.capacity - (e.totalRegisteredSeats || 0) : null,
            maxCapacity: e.capacity || e.maxCapacity
          });
        });
        this.filteredEvents = [...this.events];
      },
      error: (error) => {
        console.error("Error loading events list:", error);
        this.events = [];
        this.filteredEvents = [];
      }
    });
  }
  onNavigate(view) {
    this.navigate.emit(view);
  }
  onViewEvent(event) {
    if (event && event.id) {
      this.router.navigate(["/events", event.id]);
    }
  }
  applyFilters() {
    this.filteredEvents = this.events.filter((event) => {
      if (this.eventTypeFilter !== "All Types" && event.category !== this.eventTypeFilter) {
        return false;
      }
      if (this.dateRangeFilter !== "All Dates") {
        const eventDate = event.date || event.startDate;
        if (!eventDate) {
          return false;
        }
        const eventDateObj = new Date(eventDate);
        const now = /* @__PURE__ */ new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const dayOfWeek = today.getDay();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - dayOfWeek);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
        const startOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0, 23, 59, 59, 999);
        switch (this.dateRangeFilter) {
          case "This Week":
            if (eventDateObj < startOfWeek || eventDateObj > endOfWeek) {
              return false;
            }
            break;
          case "This Month":
            if (eventDateObj < startOfMonth || eventDateObj > endOfMonth) {
              return false;
            }
            break;
          case "Next Month":
            if (eventDateObj < startOfNextMonth || eventDateObj > endOfNextMonth) {
              return false;
            }
            break;
        }
      }
      const isFree = this.isFreeEvent(event);
      if (this.costFilter === "Free" && !isFree) {
        return false;
      }
      if (this.costFilter === "Paid" && isFree) {
        return false;
      }
      if (this.searchQuery && !event.title.toLowerCase().includes(this.searchQuery.toLowerCase()) && !event.description.toLowerCase().includes(this.searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    });
  }
  getCategoryColor(category) {
    const colors = {
      "CONFERENCE": "bg-indigo-500",
      "NETWORKING": "bg-emerald-500",
      "WORKSHOP": "bg-purple-500",
      "WEBINAR": "bg-sky-500",
      "MEETUP": "bg-amber-500",
      "SEMINAR": "bg-rose-500"
    };
    return colors[category?.toUpperCase()] || "bg-slate-500";
  }
  getEventCost(event) {
    return formatMemberFacingCost(event, this.currentUser);
  }
  // Helper to determine if an event should be treated as Free or Paid
  isFreeEvent(event) {
    if (!event)
      return true;
    const pricingType = event.pricingType || event.pricing?.type;
    if (pricingType === "FREE") {
      return true;
    }
    const tickets = normalizeTicketTypes(event);
    if (tickets.length > 0) {
      const maxTicket = Math.max(0, ...tickets.map((t) => Number(t.price || 0)));
      if (maxTicket > 0)
        return false;
      return true;
    }
    const unit = resolveMemberFacingUnitPrice(event, this.currentUser);
    if (unit > 0)
      return false;
    const memberPrice = event.memberPrice ?? event.pricing?.memberPrice ?? 0;
    const nonMemberPrice = event.nonMemberPrice ?? event.pricing?.nonMemberPrice ?? 0;
    const basePrice = event.price ?? 0;
    if (pricingType === "PAID" || pricingType === "DISCOUNTED") {
      return memberPrice <= 0 && nonMemberPrice <= 0;
    }
    return basePrice === 0;
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
    this.\u0275fac = function EventsComponent_Factory(t) {
      return new (t || _EventsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(MembershipService), \u0275\u0275directiveInject(AppModalService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsComponent, selectors: [["app-events"]], outputs: { navigate: "navigate", viewEvent: "viewEvent" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 8, consts: [[1, "events-page-root", "min-h-screen", "bg-slate-50", "relative", "overflow-x-hidden"], [1, "events-header", "relative"], [1, "max-w-7xl", "mx-auto", "px-6"], ["class", "mb-6 reveal-up", 4, "ngIf"], [1, "flex", "flex-col", "lg:flex-row", "lg:items-end", "justify-between", "gap-8", "reveal-up"], [1, "text-4xl", "md:text-5xl", "font-black", "text-slate-900", "mb-4", "tracking-tighter"], [1, "text-lg", "text-slate-500", "font-medium", "max-w-xl"], [1, "search-input-wrapper"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-4", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-slate-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search for events, topics...", 1, "search-input", 3, "ngModelChange", "input", "ngModel"], [1, "max-w-7xl", "mx-auto", "px-6", "py-8"], [1, "flex", "flex-wrap", "items-center", "gap-4", "reveal-up", "delay-1"], [1, "flex", "items-center", "gap-2", "px-3", "py-2", "bg-slate-100", "rounded-xl", "text-xs", "font-black", "text-slate-500", "uppercase", "tracking-widest", "mr-2"], ["width", "14", "height", "14", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"], [1, "relative"], [1, "filter-dropdown", 3, "ngModelChange", "change", "ngModel"], [1, "ml-auto", "text-sm", "font-bold", "text-slate-400"], [1, "text-slate-900"], [1, "max-w-7xl", "mx-auto", "px-6", "pb-32"], ["class", "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", 4, "ngIf"], ["class", "empty-state reveal-up", 4, "ngIf"], [1, "mb-6", "reveal-up"], [1, "flex", "items-center", "space-x-2", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-slate-400"], [1, "hover:text-blue-600", "cursor-pointer", "transition-colors", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-8"], ["class", "event-card reveal-up", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "event-card", "reveal-up"], [1, "event-card-image-wrap"], ["alt", "Event Poster", 1, "event-card-img", 3, "src"], [1, "event-date-badge"], [1, "event-date-day"], [1, "event-date-month"], [1, "absolute", "bottom-3", "right-3", "bg-slate-900/80", "backdrop-blur-md", "px-3", "py-1.5", "rounded-xl", "text-[10px]", "font-black", "text-white", "uppercase", "tracking-widest", "z-10"], [1, "event-card-content"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "category-tag", 3, "ngClass"], [1, "event-card-title"], [1, "mt-auto", "space-y-3"], [1, "event-detail-item"], ["width", "16", "height", "16", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "event-card-footer"], [1, "event-price"], [1, "event-btn", 3, "click"], [1, "empty-state", "reveal-up"], [1, "inline-flex", "items-center", "justify-center", "w-20", "h-20", "bg-slate-50", "rounded-full", "mb-6"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "text-slate-300"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], [1, "text-2xl", "font-black", "text-slate-900", "mb-2"], [1, "text-slate-500", "font-medium"], [1, "mt-8", "text-blue-600", "font-black", "uppercase", "tracking-widest", "text-xs", "hover:text-blue-800", "transition-colors", 3, "click"]], template: function EventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2);
        \u0275\u0275template(3, EventsComponent_nav_3_Template, 9, 0, "nav", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "div")(6, "h1", 5);
        \u0275\u0275text(7, " Community Events ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, " Where Indore's tech leaders meet to exchange ideas, build partnerships, and shape the industrial future. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 8);
        \u0275\u0275element(12, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function EventsComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("input", function EventsComponent_Template_input_input_13_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(14, "section", 11)(15, "div", 12)(16, "div", 13);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 14);
        \u0275\u0275element(18, "path", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " Filter By ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(20, "div", 16)(21, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function EventsComponent_Template_select_ngModelChange_21_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.eventTypeFilter, $event) || (ctx.eventTypeFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function EventsComponent_Template_select_change_21_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(22, "option");
        \u0275\u0275text(23, "All Types");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "option");
        \u0275\u0275text(25, "CONFERENCE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "option");
        \u0275\u0275text(27, "NETWORKING");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "option");
        \u0275\u0275text(29, "WORKSHOP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "option");
        \u0275\u0275text(31, "WEBINAR");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 16)(33, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function EventsComponent_Template_select_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateRangeFilter, $event) || (ctx.dateRangeFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function EventsComponent_Template_select_change_33_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(34, "option");
        \u0275\u0275text(35, "All Dates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "option");
        \u0275\u0275text(37, "This Week");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "option");
        \u0275\u0275text(39, "This Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "option");
        \u0275\u0275text(41, "Next Month");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 16)(43, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function EventsComponent_Template_select_ngModelChange_43_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.costFilter, $event) || (ctx.costFilter = $event);
          return $event;
        });
        \u0275\u0275listener("change", function EventsComponent_Template_select_change_43_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(44, "option");
        \u0275\u0275text(45, "All Costs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "option");
        \u0275\u0275text(47, "Free");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "option");
        \u0275\u0275text(49, "Paid");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 18);
        \u0275\u0275text(51, " Showing ");
        \u0275\u0275elementStart(52, "span", 19);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " events ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "main", 20);
        \u0275\u0275template(56, EventsComponent_div_56_Template, 2, 1, "div", 21)(57, EventsComponent_div_57_Template, 10, 0, "div", 22);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.currentUser);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.eventTypeFilter);
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.dateRangeFilter);
        \u0275\u0275advance(10);
        \u0275\u0275twoWayProperty("ngModel", ctx.costFilter);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.filteredEvents.length);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.filteredEvents.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredEvents.length === 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: [`

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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsComponent, { className: "EventsComponent", filePath: "src\\app\\pages\\events\\events.component.ts", lineNumber: 24 });
})();
export {
  EventsComponent
};
//# sourceMappingURL=chunk-BYDGV2VW.js.map
