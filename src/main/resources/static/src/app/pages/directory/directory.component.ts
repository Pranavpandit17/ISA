import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Member } from '../../models/interfaces';
import { AuthService, User } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { ApiService } from '../../services/api.service';

/** Card row: API dto + display fields matching directory mock layout */
export interface DirectoryRow {
  member: Member;
  dto: Record<string, unknown>;
  /** Avatar image URL (photo or ui-avatars initials) */
  avatarImage: string;
  /** Blue subtitle line (e.g. plan or membership type) */
  displayTitle: string;
  /** One-line tagline under company */
  tagline: string;
}

const AVATAR_BG_HEX = [
  '0D8ABC', '2563EB', '7C3AED', 'C2410C', '0F766E', 'B45309', '4F46E5', 'BE185D', '15803D', '0369A1'
];

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  @Output() openPayment = new EventEmitter<void>();

  directoryRows: DirectoryRow[] = [];
  filteredRows: DirectoryRow[] = [];
  industryOptions: string[] = [];
  dirSearch = '';
  dirIndustryFilter = '';
  currentUser: User | null = null;
  isLoading = false;
  loadError: string | null = null;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private apiService: ApiService
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    if (this.canViewDirectoryContent()) {
      this.loadDirectoryFromApi();
    } else {
      this.directoryRows = [];
      this.filteredRows = [];
      this.industryOptions = [];
    }
  }

  canViewDirectoryContent(): boolean {
    const u = this.currentUser;
    return !!u && (u.type === 'PREMIUM' || u.type === 'ADMIN' || u.role === 'admin');
  }

  private loadDirectoryFromApi(): void {
    this.isLoading = true;
    this.loadError = null;
    this.apiService.getDirectoryMembers().subscribe({
      next: (list: unknown) => {
        this.isLoading = false;
        const arr = Array.isArray(list) ? list as Record<string, unknown>[] : [];
        this.directoryRows = arr.map((dto) => {
          const member = this.mapDtoToMember(dto);
          return {
            member,
            dto,
            avatarImage: this.buildCardAvatar(member),
            displayTitle: this.deriveDisplayTitle(dto),
            tagline: this.deriveTagline(dto)
          };
        });
        this.industryOptions = this.buildIndustryOptions(arr);
        this.filterMembers();
      },
      error: () => {
        this.isLoading = false;
        this.loadError = 'Could not load member directory. Please try again later.';
        this.toastService.error(this.loadError);
        this.directoryRows = [];
        this.filteredRows = [];
        this.industryOptions = [];
      }
    });
  }

  /** ui-avatars initials (same visual language as original mock cards). */
  private buildCardAvatar(member: Member): string {
    return this.uiAvatarsUrl(member.name, member.id);
  }

  private uiAvatarsUrl(name: string, id: string): string {
    const n = name.trim() || 'Member';
    const idx = Math.abs(this.hashString(String(id || n))) % AVATAR_BG_HEX.length;
    const bg = AVATAR_BG_HEX[idx];
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(n)}&size=128&background=${bg}&color=fff&bold=true`;
  }

  private hashString(s: string): number {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
      h = (h << 5) - h + s.charCodeAt(i);
      h |= 0;
    }
    return h;
  }

  private deriveDisplayTitle(d: Record<string, unknown>): string {
    const plan = String(d['activePlanName'] ?? '').trim();
    if (plan && plan.length <= 32) {
      return plan;
    }
    const mt = String(d['membershipType'] ?? '').trim().toUpperCase();
    if (mt === 'CORPORATE') {
      return 'Corporate';
    }
    if (mt === 'INDIVIDUAL') {
      return 'Individual';
    }
    if (mt === 'ANNUAL') {
      return 'Annual';
    }
    return plan || 'Member';
  }

  private deriveTagline(d: Record<string, unknown>): string {
    const desc = String(d['companyDescription'] ?? '').trim();
    if (desc) {
      const first = desc.split(/[.!?\n]/)[0]?.trim() || desc;
      return first.length > 100 ? first.slice(0, 97) + '…' : first;
    }
    const ind = String(d['industry'] ?? '').trim();
    if (ind) {
      const short = ind.split(',')[0]?.trim() || ind;
      return short.length > 100 ? short.slice(0, 97) + '…' : short + '.';
    }
    return 'ISA network member.';
  }

  private mapDtoToMember(d: Record<string, unknown>): Member {
    const name = String(d['name'] ?? '').trim() || 'Member';
    const industry = String(d['industry'] ?? '').trim();
    const desc = String(d['companyDescription'] ?? '').trim();
    const addr = String(d['address'] ?? '').trim();
    const team = String(d['teamSize'] ?? '').trim();
    const bioParts = [desc, addr, team].filter(Boolean);
    const bio = bioParts.length ? bioParts.join(' — ') : industry || 'ISA member';

    const statusRaw = String(d['membershipStatus'] ?? 'ACTIVE').toUpperCase();
    const status: Member['status'] =
      statusRaw === 'SUSPENDED' || statusRaw === 'PENDING' || statusRaw === 'REJECTED'
        ? (statusRaw as Member['status'])
        : 'ACTIVE';

    return {
      id: String(d['id'] ?? ''),
      email: String(d['email'] ?? ''),
      name,
      title: this.deriveDisplayTitle(d),
      company: String(d['company'] ?? '').trim() || '—',
      image: 'assets/ISA-logo.png',
      type: 'REGULAR',
      industry,
      experience: 0,
      skills: [],
      bio,
      location: addr || '—',
      status,
      teamSize: team || undefined,
      website: typeof d['companyWebsite'] === 'string' ? d['companyWebsite'] : undefined,
      phone: String(d['phone'] ?? '').trim() || undefined,
      socialLinks: {
        website: typeof d['companyWebsite'] === 'string' ? d['companyWebsite'] : undefined
      },
      joinedDate: d['createdAt'] ? new Date(String(d['createdAt'])) : new Date(),
      connections: []
    };
  }

  private buildIndustryOptions(rows: Record<string, unknown>[]): string[] {
    const set = new Set<string>();
    for (const r of rows) {
      const ind = String(r['industry'] ?? '').trim();
      if (ind) {
        set.add(ind);
      }
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }

  filterMembers(): void {
    const q = this.dirSearch.trim().toLowerCase();
    const ind = this.dirIndustryFilter.trim();

    this.filteredRows = this.directoryRows.filter(({ member, dto, tagline, displayTitle }) => {
      const st = String(dto['membershipStatus'] ?? 'ACTIVE').toUpperCase();
      if (st !== 'ACTIVE') {
        return false;
      }
      const hay = [
        member.name,
        member.company,
        member.industry,
        member.bio,
        tagline,
        displayTitle,
        member.email,
        member.phone ?? '',
        member.location,
        String(dto['membershipNumber'] ?? ''),
        String(dto['email'] ?? ''),
        String(dto['phone'] ?? '')
      ]
        .join(' ')
        .toLowerCase();
      const matchesSearch = !q || hay.includes(q);
      const dtoInd = String(dto['industry'] ?? '').trim();
      const matchesIndustry =
        !ind || dtoInd === ind || dtoInd.toLowerCase().includes(ind.toLowerCase());
      return matchesSearch && matchesIndustry;
    });
  }

  onNavigate(view: string): void {
    this.navigate.emit(view);
  }

  onOpenPayment(): void {
    this.openPayment.emit();
  }

  connectWith(id: string): void {
    this.toastService.success('Connection request recorded for member #' + id);
  }
}
