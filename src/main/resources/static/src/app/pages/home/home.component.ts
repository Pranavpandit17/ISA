import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Event, BoardMember, FaqItem } from '../../models/interfaces';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { AppNavigationService } from '../../services/app-navigation.service';
import { AppModalService } from '../../services/app-modal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
  events: any[] = [];
  boardMembers: BoardMember[] = [];
  faqs: FaqItem[] = [];
  galleryImages: string[] = [];
  currentGalleryIndex = 0;
  isLoadingEvents = false;
  activeTab: 'features' | 'benefits' = 'features';

  private galleryIntervalId: any;

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
        // Keep fallback static gallery image when API is unavailable.
      }
    });
  }

  loadMembershipPlans(): void {
    this.isLoadingPlans = true;
    this.apiService.getMembershipPlans().subscribe({
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

  getPlanFeatureObjects(plan: any): any[] {
    const features = Array.isArray(plan?.features) ? plan.features : [];
    return features.map((f: any) => {
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
    }).filter((f: any) => !!f.name);
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
    this.apiService.getEvents().subscribe({
      next: (response: any) => {
        const events = Array.isArray(response) ? response : [];
        const now = new Date();
        const upcoming = events.filter((e: any) => {
          if (e.status !== 'PUBLISHED') return false;
          const checkDate = e.endDate || e.startDate || e.date;
          if (!checkDate) return true;
          const dt = new Date(checkDate);
          return dt >= now;
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
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }
  }

  onViewEvent(event: Event): void {
    if (!this.authService.isAuthenticated()) { this.modalService.openAuth('LOGIN'); return; }
    this.navService.eventDetail((event as any).id);
  }

  toggleFaq(faq: FaqItem): void { faq.isOpen = !faq.isOpen; }
  nextGallery(): void { this.currentGalleryIndex = (this.currentGalleryIndex + 1) % this.galleryImages.length; }
  prevGallery(): void { this.currentGalleryIndex = (this.currentGalleryIndex - 1 + this.galleryImages.length) % this.galleryImages.length; }
  goToGallery(i: number): void { this.currentGalleryIndex = i; }
}
