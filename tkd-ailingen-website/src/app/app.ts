import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '@core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('tkd-ailingen-website');

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    // Initialize theme (loads from localStorage or uses default)
    // Note: inline script in index.html applies theme class early to prevent FOUC
    // This ensures Angular service state matches the applied theme
    this.themeService.initializeTheme();
  }
}
