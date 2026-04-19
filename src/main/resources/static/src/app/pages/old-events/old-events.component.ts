import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-old-events',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './old-events.component.html',
  styleUrls: ['./old-events.component.css', '../events/events.component.css']
})
export class OldEventsComponent implements OnInit {
  events: any[] = [];
  filteredEvents: any[] = [];
  searchQuery = '';
  isLoading = false;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPastEvents();
  }

  private resolveEventImageUrl(rawImage: string | null | undefined): string | null {
    if (!rawImage) return null;
    const image = String(rawImage).trim();
    if (!image) return null;
    if (/^https?:\/\//i.test(image)) return image;
    if (image.startsWith('//')) return `${window.location.protocol}${image}`;
    const normalizedPath = image.startsWith('/') ? image : `/${image}`;
    return `${this.apiService.getBackendBaseUrl()}${normalizedPath}`;
  }

  /** Same semantics as home page — local calendar end instant */
  private parseLocalDay(raw: string | Date | null | undefined): Date | null {
    if (raw == null || raw === '') return null;
    if (raw instanceof Date && !isNaN(raw.getTime())) {
      return new Date(raw.getFullYear(), raw.getMonth(), raw.getDate());
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

  private getEventEndMillis(e: any): number | null {
    const endDay = this.parseLocalDay(e.endDate);
    if (endDay) {
      return this.applyLocalTime(endDay, e.endTime, !e.endTime).getTime();
    }
    const startDay = this.parseLocalDay(e.startDate ?? e.date);
    if (!startDay) return null;
    return this.applyLocalTime(startDay, e.startTime, true).getTime();
  }

  loadPastEvents(): void {
    this.isLoading = true;
    this.apiService.getPublishedEvents().subscribe({
      next: (response: any) => {
        const list = Array.isArray(response) ? response : [];
        const now = Date.now();
        const past = list
          .filter((e: any) => {
            const endMs = this.getEventEndMillis(e);
            return endMs != null && endMs < now;
          })
          .sort((a: any, b: any) => {
            const eb = this.getEventEndMillis(b) ?? 0;
            const ea = this.getEventEndMillis(a) ?? 0;
            return eb - ea;
          })
          .map((e: any) => {
            let image = this.resolveEventImageUrl(e.imageUrl || e.image);
            if (!image && e.poster) {
              image = `${this.apiService.getBackendBaseUrl()}/api/events/poster/${e.id}`;
            }
            if (!image) {
              image =
                'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop';
            }
            return {
              ...e,
              image,
              title: e.name || e.title || 'Event',
              date: e.startDate || e.date,
              location: e.location || e.venue || 'TBA',
              category: e.category || e.type || 'Event',
              description:
                e.description ||
                e.shortDescription ||
                'Highlights and outcomes from this ISA session.'
            };
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

  applyFilters(): void {
    const q = this.searchQuery.trim().toLowerCase();
    if (!q) {
      this.filteredEvents = [...this.events];
      return;
    }
    this.filteredEvents = this.events.filter(
      (e) =>
        String(e.title || '').toLowerCase().includes(q) ||
        String(e.description || '').toLowerCase().includes(q) ||
        String(e.location || '').toLowerCase().includes(q)
    );
  }

  openEvent(event: any): void {
    if (event?.id != null) {
      this.router.navigate(['/old-events', event.id]);
    }
  }
}
