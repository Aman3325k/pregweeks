// src/utils/pregnancyState.ts

export interface PregnancyState {
  mode: 'lmp' | 'conception' | 'edd';
  date: string; // YYYY-MM-DD
}

export interface GestationalAgeProgress {
  week: number;          // 0 to 42
  days: number;          // 0 to 6
  daysUntilDue: number;  // days left (positive, or negative if overdue)
  trimester: 1 | 2 | 3;
  isOverdue: boolean;
}

/**
 * Safely fetches the pregnancy state from localStorage.
 * Handles server-side rendering (SSR) environments by checking for `window`.
 */
export function getPregnancyState(): PregnancyState | null {
  if (typeof window === 'undefined') return null;
  const saved = localStorage.getItem('pregnancy_calc_v2');
  if (!saved) return null;
  try {
    const parsed = JSON.parse(saved);
    if (parsed && parsed.date && (parsed.mode === 'lmp' || parsed.mode === 'conception' || parsed.mode === 'edd')) {
      return parsed as PregnancyState;
    }
  } catch (e) {
    console.error('Error parsing pregnancy state:', e);
  }
  return null;
}

/**
 * Saves the pregnancy calculation input state to localStorage.
 */
export function savePregnancyState(date: string, mode: 'lmp' | 'conception' | 'edd'): void {
  if (typeof window === 'undefined') return;
  const state: PregnancyState = { date, mode };
  localStorage.setItem('pregnancy_calc_v2', JSON.stringify(state));
}

/**
 * Clears the pregnancy state from localStorage.
 */
export function clearPregnancyState(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('pregnancy_calc_v2');
}

/**
 * Calculates timezone-safe gestational age from the saved local storage.
 * Handles overdue states and caps the maximum week count at 42 (294 days).
 */
export function getCurrentProgress(): GestationalAgeProgress | null {
  const state = getPregnancyState();
  if (!state) return null;

  const inputDate = new Date(state.date);
  inputDate.setHours(12, 0, 0, 0);

  const now = new Date();
  now.setHours(12, 0, 0, 0);

  let edd: Date;
  let gestationalDays = 0;

  if (state.mode === 'lmp') {
    // Due Date is 280 days from LMP
    edd = new Date(inputDate.getTime() + 280 * 24 * 60 * 60 * 1000);
    gestationalDays = Math.round((now.getTime() - inputDate.getTime()) / (24 * 60 * 60 * 1000));
  } else if (state.mode === 'conception') {
    // Due Date is 266 days from Conception
    edd = new Date(inputDate.getTime() + 266 * 24 * 60 * 60 * 1000);
    gestationalDays = Math.round((now.getTime() - inputDate.getTime()) / (24 * 60 * 60 * 1000)) + 14;
  } else {
    // 'edd' mode: Input date IS the due date
    edd = inputDate;
    const daysUntilDue = Math.round((edd.getTime() - now.getTime()) / (24 * 60 * 60 * 1000));
    gestationalDays = 280 - daysUntilDue;
  }

  if (gestationalDays < 0) gestationalDays = 0;

  const daysUntilDue = Math.round((edd.getTime() - now.getTime()) / (24 * 60 * 60 * 1000));
  const isOverdue = daysUntilDue < 0;

  // Cap pregnancy progress calculations at 42 weeks (294 days)
  const cappedGestationalDays = Math.min(294, gestationalDays);
  const week = Math.floor(cappedGestationalDays / 7);
  const days = cappedGestationalDays % 7;

  let trimester: 1 | 2 | 3 = 1;
  if (week >= 28) {
    trimester = 3;
  } else if (week >= 13) {
    trimester = 2;
  }

  return {
    week,
    days,
    daysUntilDue,
    trimester,
    isOverdue
  };
}

export interface PregnancyCalculations {
  edd: Date;
  gestationalDays: number;
  weeks: number;
  days: number;
  daysRemaining: number;
  progressPercent: number;
  trimester: 'First Trimester' | 'Second Trimester' | 'Third Trimester';
}

/**
 * Backwards-compatible calculator rehydration utility.
 */
export function calculatePregnancyData(dateStr: string, mode: 'lmp' | 'conception' | 'edd'): PregnancyCalculations {
  const inputDate = new Date(dateStr);
  inputDate.setHours(12, 0, 0, 0);

  const now = new Date();
  now.setHours(12, 0, 0, 0);

  let edd: Date;
  let gestationalDays = 0;

  if (mode === 'lmp') {
    edd = new Date(inputDate.getTime() + 280 * 24 * 60 * 60 * 1000);
    gestationalDays = Math.round((now.getTime() - inputDate.getTime()) / (24 * 60 * 60 * 1000));
  } else if (mode === 'conception') {
    edd = new Date(inputDate.getTime() + 266 * 24 * 60 * 60 * 1000);
    gestationalDays = Math.round((now.getTime() - inputDate.getTime()) / (24 * 60 * 60 * 1000)) + 14;
  } else {
    // 'edd' mode: Input date IS the due date
    edd = inputDate;
    const daysUntilDue = Math.round((edd.getTime() - now.getTime()) / (24 * 60 * 60 * 1000));
    gestationalDays = 280 - daysUntilDue;
  }

  if (gestationalDays < 0) gestationalDays = 0;

  const daysRemaining = Math.max(0, Math.round((edd.getTime() - now.getTime()) / (24 * 60 * 60 * 1000)));
  const weeks = Math.min(42, Math.floor(gestationalDays / 7));
  const days = gestationalDays % 7;
  const progressPercent = Math.min(100, Math.max(0, Math.floor((gestationalDays / 280) * 100)));

  let trimester: 'First Trimester' | 'Second Trimester' | 'Third Trimester' = 'First Trimester';
  if (weeks >= 28) {
    trimester = 'Third Trimester';
  } else if (weeks >= 13) {
    trimester = 'Second Trimester';
  }

  return {
    edd,
    gestationalDays,
    weeks,
    days,
    daysRemaining,
    progressPercent,
    trimester
  };
}
