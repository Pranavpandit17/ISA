import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

type LegalTab = 'terms' | 'privacy' | 'refund';

@Component({
  selector: 'app-terms-policy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './terms-policy.component.html',
  styleUrls: ['./terms-policy.component.css']
})
export class TermsPolicyComponent implements OnInit {
  activeTab: LegalTab = 'terms';
  lastUpdated = 'August 2026';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const section = String(
      this.route.snapshot.data?.['section'] ||
      this.route.snapshot.queryParamMap.get('tab') ||
      'terms'
    ).toLowerCase();
    this.activeTab = this.resolveTab(section);

    this.route.queryParamMap.subscribe((params) => {
      const tab = String(params.get('tab') || '').toLowerCase();
      if (tab === 'privacy' || tab === 'terms' || tab === 'refund') {
        this.activeTab = tab;
      }
    });
  }

  setTab(tab: LegalTab): void {
    this.activeTab = tab;
  }

  private resolveTab(section: string): LegalTab {
    if (section === 'privacy') return 'privacy';
    if (section === 'refund') return 'refund';
    return 'terms';
  }
}
