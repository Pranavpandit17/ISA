import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  // PDF viewer fragment hides the built-in toolbar so the document is view-only.
  private readonly certificatePath = 'assets/docs/Society_Certificate_ISA.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&view=FitH';

  certificateUrl: SafeResourceUrl;

  registrationDetails = [
    { label: 'Registered name', value: 'Indotech Software Association' },
    { label: 'Registration number', value: '03/27/01/25174/23' },
    { label: 'Date of registration', value: '20 July 2023' },
    { label: 'Registered under', value: 'M.P. Society Registration Act, 1973' },
    { label: 'Registered office', value: '4th Floor, B Zone Business Spaces, Nipania Main Road, Dewas Naka, Pipliya Kumar, Indore (M.P.)' }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.certificateUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.certificatePath);
  }
}
