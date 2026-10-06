import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';
import { ScheduleFilter } from '@app/shared/components/schedule-filter/schedule-filter';
import { TrainingSession, ScheduleFilters, DEFAULT_FILTERS, DayOfWeek } from '@shared/models';

const DAY_NAMES: Record<DayOfWeek, string> = {
  monday: 'Montag',
  tuesday: 'Dienstag',
  wednesday: 'Mittwoch',
  thursday: 'Donnerstag',
  friday: 'Freitag',
  saturday: 'Samstag',
  sunday: 'Sonntag',
};

/**
 * Schedules section component displaying all program schedules
 * Grouped by day of week with all programs shown together
 */
@Component({
  selector: 'app-schedules-section',
  imports: [CommonModule, MaterialModule, ScheduleFilter],
  templateUrl: './schedules-section.html',
  styleUrl: './schedules-section.scss',
})
export class SchedulesSection {
  @Input() sessions: TrainingSession[] = [];

  filters = signal<ScheduleFilters>({ ...DEFAULT_FILTERS });
  
  // Define day order for display
  readonly dayOrder: DayOfWeek[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];
  
  filteredSessions = computed(() => {
    const allSessions = this.sessions;
    const currentFilters = this.filters();

    return allSessions.filter(session => {
      // Program type filter
      if (currentFilters.programType !== 'all' && session.programType !== currentFilters.programType) {
        return false;
      }

      // Search text filter (searches level, day, and time only)
      // Supports comma-separated terms (e.g., "donn, bam" for Donnerstag + Bambini)
      if (currentFilters.searchText) {
        const searchableText = [
          session.levelAgeGroup,
          session.dayOfWeek, // English key (e.g., "friday")
          DAY_NAMES[session.dayOfWeek],
          session.startTime,
          session.endTime,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        // Split by comma and check that ALL terms match (AND logic)
        const searchTerms = currentFilters.searchText
          .split(',')
          .map(term => term.trim().toLowerCase())
          .filter(term => term.length > 0);

        const allTermsMatch = searchTerms.every(term => 
          searchableText.includes(term)
        );

        if (!allTermsMatch) {
          return false;
        }
      }

      return true;
    });
  });

  onFiltersChange(newFilters: ScheduleFilters): void {
    this.filters.set(newFilters);
  }

  // Group sessions by day of week
  getSessionsByDay(day: DayOfWeek): TrainingSession[] {
    return this.filteredSessions()
      .filter(s => s.dayOfWeek === day)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  }
  
  getDayName(day: DayOfWeek): string {
    return DAY_NAMES[day];
  }
  
  getProgramDisplayName(programType: string): string {
    const programMap: Record<string, string> = {
      'taekwondo': 'Taekwondo',
      'zumba': 'Zumba®',
      'deepwork': 'deepWORK®'
    };
    return programMap[programType] || programType;
  }
  
  getProgramIcon(programType: string): string {
    const iconMap: Record<string, string> = {
      'taekwondo': 'sports_martial_arts',
      'zumba': 'music_note',
      'deepwork': 'fitness_center'
    };
    return iconMap[programType] || 'event';
  }
}
