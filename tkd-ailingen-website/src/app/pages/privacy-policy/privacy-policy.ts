import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MaterialModule } from '@shared/material.module';

/**
 * Privacy Policy/Datenschutzerklärung page component
 * GDPR-compliant privacy policy required by German law
 */
@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, MaterialModule],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
  standalone: true
})
export class PrivacyPolicy {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
