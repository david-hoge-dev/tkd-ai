/**
 * Schedule filter types
 * Used to filter training sessions by program, level, and age group
 */

export type FilterProgramType = 'all' | 'taekwondo' | 'zumba' | 'deepwork';

export interface ScheduleFilters {
  programType: FilterProgramType;
  searchText: string;
}

export const FILTER_STORAGE_KEY = 'schedule-filters';

export const DEFAULT_FILTERS: ScheduleFilters = {
  programType: 'all',
  searchText: '',
};

export const PROGRAM_TYPE_OPTIONS: Array<{ value: FilterProgramType; label: string }> = [
  { value: 'all', label: 'Alle Kurse' },
  { value: 'taekwondo', label: 'Taekwondo' },
  { value: 'zumba', label: 'Zumba®' },
  { value: 'deepwork', label: 'deepWORK®' },
];
