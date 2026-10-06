import { Component, computed, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../core/services/theme.service';

/**
 * Theme toggle button component
 * Displays an icon button that switches between dark and light themes
 * Shows sun icon in dark mode (to switch to light) and moon icon in light mode (to switch to dark)
 */
@Component({
  selector: 'app-theme-toggle',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
  standalone: true
})
export class ThemeToggle implements OnInit {
  private themeService = inject(ThemeService);

  ngOnInit() {
    // Component initialized
  }

  /**
   * Computed signal for current theme
   */
  currentTheme = this.themeService.getThemeSignal();

  /**
   * Handle toggle button click
   */
  onToggle(): void {
    this.themeService.toggleTheme();
  }

  /**
   * Get the icon name based on current theme
   * Shows the icon for the theme you'll switch TO (not the current theme)
   */
  getIcon(): string {
    return this.currentTheme() === 'dark' ? 'light_mode' : 'dark_mode';
  }

  /** Get the German ARIA label for the theme that the button will activate. */
  getAriaLabel(): string {
    const targetTheme = this.currentTheme() === 'dark' ? 'Hellmodus' : 'Dunkelmodus';
    return `Zu ${targetTheme} wechseln`;
  }
}

