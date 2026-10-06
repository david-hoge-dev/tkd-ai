import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MaterialModule } from '@shared/material.module';

/**
 * Imprint/Impressum page component
 * Legal information required by German law (§5 TMG)
 */
@Component({
  selector: 'app-imprint',
  imports: [CommonModule, MaterialModule],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
  standalone: true
})
export class Imprint {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
