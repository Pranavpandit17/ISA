import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-member-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-benefits.component.html',
  styleUrls: ['./member-benefits.component.css']
})
export class MemberBenefitsComponent implements OnInit {
  images: string[] = [];
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadMemberBenefitImages();
  }

  private resolveImageUrl(rawImage: string | null | undefined): string | null {
    if (!rawImage) return null;
    const image = String(rawImage).trim();
    if (!image) return null;
    if (/^https?:\/\//i.test(image)) return image;
    if (image.startsWith('//')) return `${window.location.protocol}${image}`;
    const normalizedPath = image.startsWith('/') ? image : `/${image}`;
    return `${this.apiService.getBackendBaseUrl()}${normalizedPath}`;
  }

  loadMemberBenefitImages(): void {
    this.isLoading = true;
    this.apiService.getMemberBenefitsConfig().subscribe({
      next: (response: any) => {
        const imageUrls = Array.isArray(response?.imageUrls) ? response.imageUrls : [];
        this.images = imageUrls
          .map((img: any) => this.resolveImageUrl(img))
          .filter((img: string | null): img is string => !!img);
        this.isLoading = false;
      },
      error: () => {
        this.images = [];
        this.isLoading = false;
      }
    });
  }
}
