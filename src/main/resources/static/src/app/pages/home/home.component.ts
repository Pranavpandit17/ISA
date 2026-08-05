import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Event, BoardMember, FaqItem } from '../../models/interfaces';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { AppNavigationService } from '../../services/app-navigation.service';
import { AppModalService } from '../../services/app-modal.service';

type HomeTestimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  videoUrl?: string;
  videoPoster?: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly defaultTestimonialVideoPoster = 'assets/ISA-logo.png';
  /** Placeholder when member/board photo URL fails or is empty (must exist under classpath static/assets). */
  readonly defaultAvatarSrc = 'assets/ISA-logo.png';

  events: any[] = [];
  boardMembers: BoardMember[] = [];
  /** Two concatenated copies of {@link boardMembers} for seamless CSS marquee. */
  boardMembersMarquee: BoardMember[] = [];
  faqs: FaqItem[] = [];
  galleryImages: string[] = [];
  currentGalleryIndex = 0;
  isLoadingEvents = false;
  activeTab: 'features' | 'benefits' = 'features';

  private galleryIntervalId: any;

  /** Zoho Backstage ticket page for Beyond Small Talk / ISA Social. */
  readonly zohoBackstageEventUrl =
    'https://isa.zohobackstage.in/embed/ISASocial26/buyTickets';

  stats = [
    { value: '200+', label: 'Active CXOs', color: '#6366f1', icon: '👥' },
    { value: '50+', label: 'Annual Events', color: '#22d3ee', icon: '🎯' },
    { value: '₹500Cr+', label: 'Combined Revenue', color: '#4ade80', icon: '💰' },
    { value: '10k+', label: 'Talent Pool', color: '#f472b6', icon: '🚀' },
  ];

  features = [
    { icon: '🤝', title: 'Elite Networking', desc: 'Connect with 200+ CXOs, Founders, and Tech Leaders from Indore\'s top IT companies.' },
    { icon: '📚', title: 'Knowledge Hub', desc: 'Exclusive reports, workshops, and industry insights from verified experts.' },
    { icon: '🏛️', title: 'Policy Advocacy', desc: 'One unified voice representing Indore\'s IT sector to government bodies.' },
    { icon: '💼', title: 'Bench Exchange', desc: 'Share resources, talent, and projects across member organizations.' },
    { icon: '🌐', title: 'Global Visibility', desc: 'Establish Indore as a global IT hub with international collaborations.' },
    { icon: '🎖️', title: 'Prestigious Recognition', desc: 'Awards, certifications, and recognition programs for member excellence.' },
  ];

  // Frontend-only testimonials (static content from local assets)
  testimonials: HomeTestimonial[] = [
    {
      quote: 'ISA helped us convert networking into measurable partnerships and faster execution across teams.',
      name: 'Member Testimonial 1',
      role: 'Industry Leader',
      company: 'ISA Community',
      videoUrl: 'assets/videos/video1.mp4',
      videoPoster: 'assets/ISA-logo.png'
    },
    {
      quote: 'The ISA network gave us the right visibility, hiring connections, and trusted peer support to scale confidently.',
      name: 'Member Testimonial 2',
      role: 'Technology Executive',
      company: 'ISA Community',
      videoUrl: 'assets/videos/video2.mp4',
      videoPoster: 'assets/ISA-logo.png'
    }
  ];

  membershipPlans: any[] = [];
  isLoadingPlans = false;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private apiService: ApiService,
    private navService: AppNavigationService,
    private modalService: AppModalService
  ) {
    this.boardMembers = this.dataService.getBoardMembers();
    this.boardMembersMarquee = [...this.boardMembers, ...this.boardMembers];
    this.faqs = this.dataService.getFaqs();
    this.galleryImages = [
      'assets/gallery/1.png',
      'assets/gallery/2.png',
      'assets/gallery/3.png'
    ];
  }

  ngOnInit(): void {
    this.loadHomeSliderImages();
    this.loadUpcomingEvents();
    this.loadMembershipPlans();
    this.startGalleryAutoSlide();
  }

  private startGalleryAutoSlide(): void {
    if (this.galleryIntervalId) {
      clearInterval(this.galleryIntervalId);
      this.galleryIntervalId = null;
    }
    if (this.galleryImages.length > 1) {
      this.galleryIntervalId = setInterval(() => this.nextGallery(), 5000);
    }
  }

  private loadHomeSliderImages(): void {
    this.apiService.getHomeSliderConfig().subscribe({
      next: (config: any) => {
        const rawImages = Array.isArray(config?.imageUrls) ? config.imageUrls : [];
        const resolvedImages = rawImages
          .map((img: any) => this.resolveEventImageUrl(img))
          .filter((img: string | null): img is string => !!img);
        if (resolvedImages.length > 0) {
          this.galleryImages = resolvedImages;
          this.currentGalleryIndex = 0;
          this.startGalleryAutoSlide();
        }
      },
      error: () => {
        // Keep fallback static slider images when API is unavailable.
      }
    });
  }

  loadMembershipPlans(): void {
    this.isLoadingPlans = true;
    this.apiService.getPublicPlans().subscribe({
      next: (plans) => {
        // Map backend plans to suit the premium home UI
        this.membershipPlans = (plans || []).map((p: any) => ({
          ...p,
          highlight: p.isPopular || p.id === 2 || p.price > 0 && p.price < 50000,
          btnText: p.price === 0 ? 'Start Free' : (p.price > 50000 ? 'Contact Us' : 'Upgrade Now'),
          action: p.price === 0 ? 'AUTH' : (p.price > 50000 ? 'CONTACT' : 'PAYMENT')
        }));
        this.isLoadingPlans = false;
      },
      error: () => {
        this.isLoadingPlans = false;
      }
    });
  }

  getPlanDisplayFeatures(plan: any): string[] {
    const features = Array.isArray(plan?.features) ? plan.features : [];
    return features
      .map((f: any) => {
        if (f && typeof f === 'object') {
          return String(f.name || f.description || '').trim();
        }
        return String(f || '').trim();
      })
      .filter((f: string) => !!f);
  }

  getPlanFeatureObjects(plan: any): Array<{ name: string; description: string; category: string }> {
    const features = Array.isArray(plan?.features) ? plan.features : [];
    return features
      .map((f: any) => {
        if (f && typeof f === 'object') {
          return {
            name: String(f.name || f.code || '').trim(),
            description: String(f.description || '').trim(),
            category: String(f.category || 'GENERAL').trim()
          };
        }
        const text = String(f || '').trim();
        return {
          name: text,
          description: '',
          category: 'GENERAL'
        };
      })
      .filter((f: { name: string }) => !!f.name);
  }

  ngOnDestroy(): void {
    if (this.galleryIntervalId) clearInterval(this.galleryIntervalId);
  }

  private resolveEventImageUrl(rawImage: string | null | undefined): string | null {
    if (!rawImage) {
      return null;
    }
    const image = String(rawImage).trim();
    if (!image || image === 'assets/default-event.png') {
      return null;
    }
    if (/^https?:\/\//i.test(image)) {
      return image;
    }
    if (image.startsWith('//')) {
      return `${window.location.protocol}${image}`;
    }
    const normalizedPath = image.startsWith('/') ? image : `/${image}`;
    return `${this.apiService.getBackendBaseUrl()}${normalizedPath}`;
  }

  loadUpcomingEvents(): void {
    this.isLoadingEvents = true;
    const eventsRequest: Observable<any> = this.authService.isAuthenticated()
      ? this.apiService.getEvents()
      : this.apiService.getPublishedEvents();
    eventsRequest.subscribe({
      next: (response: any) => {
        const rawEvents = Array.isArray(response) ? response : [];
        const events = this.authService.isAuthenticated()
          ? rawEvents.filter((e: any) => e?.status === 'PUBLISHED')
          : rawEvents;
        const now = Date.now();
        const upcoming = events.filter((e: any) => {
          const endMs = this.getEventSortEndMillis(e);
          return endMs == null || endMs >= now;
        });
        this.events = upcoming.sort((a: any, b: any) => {
          const dA = new Date(a.startDate || a.date || 0);
          const dB = new Date(b.startDate || b.date || 0);
          return dA.getTime() - dB.getTime();
        }).map((e: any) => {
          let image = this.resolveEventImageUrl(e.imageUrl || e.image);
          if (!image && e.poster) {
            image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${e.id}`;
          }
          if (!image) {
            image = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop';
          }
          return { 
            ...e, 
            image,
            title: e.name || e.title || 'Untitled Event',
            date: e.startDate || e.date,
            location: e.location || e.venue || 'TBA',
            category: e.category || e.type || 'Event',
            description: e.description || e.shortDescription || 'Experience this exclusive ISA session and networking opportunity.'
          };
        });
        this.isLoadingEvents = false;
      },
      error: () => { this.events = []; this.isLoadingEvents = false; }
    });
  }

  /** Navigate the browser to the Zoho Backstage ticket page. */
  private redirectToZohoTickets(): void {
    window.location.href = this.zohoBackstageEventUrl;
  }

  /**
   * Compare using local calendar date/time so YYYY-MM-DD from the API is not shifted by UTC parsing.
   * Event counts as upcoming until end of local day on endDate (with endTime if present).
   */
  private parseLocalDay(raw: string | Date | null | undefined): Date | null {
    if (raw == null || raw === '') return null;
    if (raw instanceof Date && !isNaN(raw.getTime())) {
      const d = new Date(raw.getFullYear(), raw.getMonth(), raw.getDate());
      return d;
    }
    const s = String(raw).split('T')[0];
    const parts = s.split('-').map(Number);
    if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return null;
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }

  private applyLocalTime(day: Date, timeStr: string | null | undefined, endOfDay: boolean): Date {
    const out = new Date(day.getFullYear(), day.getMonth(), day.getDate());
    const t = timeStr ? String(timeStr).split(':').map((x) => Number(x)) : [];
    const hh = t.length ? t[0] : endOfDay ? 23 : 0;
    const mm = t.length > 1 ? t[1] : endOfDay ? 59 : 0;
    const ss = t.length > 2 ? t[2] : endOfDay ? 59 : 0;
    const ms = endOfDay && !timeStr ? 999 : 0;
    out.setHours(hh, mm, ss, ms);
    return out;
  }

  /** Latest instant when the event is still considered "running" — for hiding after it has ended */
  private getEventSortEndMillis(e: any): number | null {
    const endDay = this.parseLocalDay(e.endDate);
    if (endDay) {
      return this.applyLocalTime(endDay, e.endTime, !e.endTime).getTime();
    }
    const startDay = this.parseLocalDay(e.startDate ?? e.date);
    if (!startDay) return null;
    return this.applyLocalTime(startDay, e.startTime, true).getTime();
  }

  onNavigate(view: string): void { this.navService.go(view); }
  onOpenAuth(mode: 'LOGIN' | 'REGISTER'): void { this.modalService.openAuth(mode); }
  onOpenPayment(): void { this.modalService.openPayment(); }

  onPlanAction(plan: any): void {
    if (plan.action === 'PAYMENT') {
      this.modalService.openPayment(plan);
    } else if (plan.action === 'AUTH') {
      this.onOpenAuth('REGISTER');
    } else if (plan.action === 'CONTACT') {
      const contactSection = document.getElementById('quick-contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'auto' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'auto' });
      }
    }
  }

  onViewEvent(event: Event): void {
    if (!this.authService.isAuthenticated()) { this.modalService.openAuth('LOGIN'); return; }
    this.navService.eventDetail((event as any).id);
  }

  /** Home "Register Now" always opens Zoho Backstage tickets for ISA Social. */
  onRegisterClick(_event: any, clickEvent: MouseEvent): void {
    clickEvent.preventDefault();
    clickEvent.stopPropagation();
    this.redirectToZohoTickets();
  }

  toggleFaq(faq: FaqItem): void { faq.isOpen = !faq.isOpen; }
  nextGallery(): void { this.currentGalleryIndex = (this.currentGalleryIndex + 1) % this.galleryImages.length; }
  prevGallery(): void { this.currentGalleryIndex = (this.currentGalleryIndex - 1 + this.galleryImages.length) % this.galleryImages.length; }
  goToGallery(i: number): void { this.currentGalleryIndex = i; }

  /** Fallback when /uploads/board/... file is missing */
  onBoardImageError(event: ErrorEvent): void {
    const img = event.target as HTMLImageElement | null;
    if (img) {
      img.src = this.defaultAvatarSrc;
    }
  }
}
