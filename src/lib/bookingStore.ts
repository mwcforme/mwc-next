/**
 * bookingStore.ts — Session-scoped booking state via sessionStorage.
 * No Zustand needed — plain functions with sessionStorage.
 */

const KEY = "mwc_booking_state_v2";

export interface BookingState {
  identity: {
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    ghlContactId?: string;
  };
  service?: string;
  location?: string;
  source?: string;
  primaryConcern?: string;
  symptom?: string;
  duration?: string;
}

export function getBookingState(): BookingState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as BookingState;
  } catch {
    return null;
  }
}

export function patchBookingState(partial: Partial<BookingState>): void {
  if (typeof window === "undefined") return;
  try {
    const current = getBookingState() ?? ({} as BookingState);
    const next = { ...current, ...partial };
    sessionStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // sessionStorage not available
  }
}

export function resetBookingState(): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
