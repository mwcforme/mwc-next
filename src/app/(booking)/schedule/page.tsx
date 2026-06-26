"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { MapPin, ChevronRight, X, Clock, Mail } from "lucide-react";
import { FunnelProgressBar } from "@/components/FunnelProgressBar";
import { BookingRouteGuard } from "@/components/BookingRouteGuard";
import { getBookingState, patchBookingState } from "@/lib/bookingStore";

// ─── Constants ────────────────────────────────────────────────────────────────

const ORANGE = "#E8670A";
const NAVY = "#0B1029";
const WHITE = "#FFFFFF";
const OSWALD = "Oswald, 'Arial Narrow', sans-serif";
const INTER = "Inter, system-ui, sans-serif";
const TIMEZONE = "America/New_York";

const CALENDARS: Record<string, { calendarId: string; label: string }> = {
  richmond: { calendarId: "1Cfy5JnO2A4ggiZlMVvX", label: "Richmond" },
  "virginia-beach": { calendarId: "4xmnBGMWJ6TVUKcAPpPb", label: "Virginia Beach" },
  "newport-news": { calendarId: "lBaRbjUpEmesxEloFBME", label: "Newport News" },
};

const LOCATION_ADDRESSES: Record<string, string> = {
  richmond: "7001 Forest Ave Suite 302, Richmond, VA 23229",
  "virginia-beach": "1620 Laskin Rd Suite 106, Virginia Beach, VA 23451",
  "newport-news": "12200 Warwick Blvd Suite 10, Newport News, VA 23606",
};

const SYMPTOM_MAP: Record<string, string> = {
  energy: "low energy",
  sexual: "sexual health concerns",
  weight: "weight management",
  other: "health concerns",
};

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface DayCell {
  date: Date;
  dateKey: string; // YYYY-MM-DD
  closed: boolean;
  slots: string[]; // ISO strings
  loaded: boolean;
}

interface TimeSlot {
  iso: string;
  display: string; // "9:00"
  meridiem: string; // "AM"
  hour: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Get today's date in ET timezone */
function getTodayET(): Date {
  const now = new Date();
  const etStr = now.toLocaleDateString("en-CA", { timeZone: TIMEZONE }); // YYYY-MM-DD
  const [y, m, d] = etStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/** Get YYYY-MM-DD for a local Date */
function toDateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Build 9-day strip starting from today */
function buildDays(): DayCell[] {
  const today = getTodayET();
  const days: DayCell[] = [];
  let offset = 0;
  while (days.length < 9) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    days.push({
      date: d,
      dateKey: toDateKey(d),
      closed: d.getDay() === 0, // Sunday closed
      slots: [],
      loaded: false,
    });
    offset++;
  }
  return days;
}

/** Parse GHL free-slots response */
function parseSlotsResponse(data: Record<string, { slots: string[] }>): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  for (const [key, val] of Object.entries(data)) {
    // key is like "2026-06-26"
    if (val?.slots && Array.isArray(val.slots)) {
      result[key] = val.slots;
    }
  }
  return result;
}

/** Convert ISO to display time in ET */
function isoToDisplayTime(iso: string): TimeSlot {
  const dt = new Date(iso);
  const timeStr = dt.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: TIMEZONE,
  });
  // "9:00 AM" → display="9:00", meridiem="AM"
  const parts = timeStr.replace(/\u202f/g, " ").split(" ");
  const display = parts[0];
  const meridiem = parts[1] ?? "";
  const hour = dt.toLocaleString("en-US", {
    hour: "numeric",
    hour12: false,
    timeZone: TIMEZONE,
  });
  return { iso, display, meridiem, hour: parseInt(hour, 10) };
}

/** Filter past slots if the day is today */
function filterPastSlots(slots: string[], isToday: boolean): string[] {
  if (!isToday) return slots;
  const now = Date.now();
  return slots.filter((iso) => new Date(iso).getTime() > now);
}

/** Group slots into Morning (< 12) and Afternoon (>= 12) */
function groupSlots(timeSlots: TimeSlot[]): {
  morning: TimeSlot[];
  afternoon: TimeSlot[];
} {
  return {
    morning: timeSlots.filter((s) => s.hour < 12),
    afternoon: timeSlots.filter((s) => s.hour >= 12),
  };
}

/** Format full date for confirmation: "Monday, June 26" */
function formatConfirmDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: TIMEZONE,
  });
}

// ─── Day Chip Component ───────────────────────────────────────────────────────

function DayChip({
  day,
  selected,
  loading,
  onSelect,
}: {
  day: DayCell;
  selected: boolean;
  loading: boolean;
  onSelect: () => void;
}) {
  const dow = DOW[day.date.getDay()];
  const dateNum = day.date.getDate();
  const mon = MONTHS[day.date.getMonth()];
  const slotsLeft = day.slots.length;
  const disabled = day.closed || (day.loaded && slotsLeft === 0);

  const baseStyle: React.CSSProperties = {
    flexShrink: 0,
    width: 64,
    borderRadius: 12,
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: "center",
    cursor: disabled ? "default" : "pointer",
    userSelect: "none",
    transition: "background 0.15s, box-shadow 0.15s",
    border: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
  };

  if (disabled) {
    return (
      <div
        style={{
          ...baseStyle,
          background: "rgba(11,16,41,0.08)",
          opacity: 0.55,
          cursor: "default",
        }}
      >
        <span
          style={{ fontFamily: OSWALD, fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: NAVY, opacity: 0.5 }}
        >
          {dow.toUpperCase()}
        </span>
        <span style={{ fontFamily: OSWALD, fontSize: 26, fontWeight: 700, lineHeight: 1, color: NAVY, opacity: 0.5 }}>
          {dateNum}
        </span>
        <span style={{ fontFamily: INTER, fontSize: 10, fontWeight: 600, color: NAVY, opacity: 0.5 }}>
          {day.closed ? "Closed" : "Full"}
        </span>
      </div>
    );
  }

  if (selected) {
    return (
      <button
        type="button"
        onClick={onSelect}
        style={{
          ...baseStyle,
          background: ORANGE,
          boxShadow: "0 6px 20px rgba(232,103,10,0.35)",
        }}
      >
        <span style={{ fontFamily: OSWALD, fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: WHITE }}>
          {dow.toUpperCase()}
        </span>
        <span style={{ fontFamily: OSWALD, fontSize: 26, fontWeight: 700, lineHeight: 1, color: WHITE }}>
          {dateNum}
        </span>
        <span style={{ fontFamily: INTER, fontSize: 10, color: WHITE }}>
          {mon}
        </span>
        {day.loaded && (
          <span style={{ fontFamily: INTER, fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
            {slotsLeft} slots
          </span>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        ...baseStyle,
        background: "rgba(11,16,41,0.07)",
        border: "2px solid rgba(11,16,41,0.12)",
      }}
    >
      <span style={{ fontFamily: OSWALD, fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", color: "rgba(11,16,41,0.5)" }}>
        {dow.toUpperCase()}
      </span>
      <span style={{ fontFamily: OSWALD, fontSize: 26, fontWeight: 700, lineHeight: 1, color: NAVY }}>
        {dateNum}
      </span>
      <span style={{ fontFamily: INTER, fontSize: 10, color: "rgba(11,16,41,0.5)" }}>
        {mon}
      </span>
      {loading ? (
        <span style={{ fontFamily: INTER, fontSize: 9, color: "rgba(11,16,41,0.3)" }}>...</span>
      ) : day.loaded ? (
        <span style={{ fontFamily: INTER, fontSize: 9, color: slotsLeft > 0 ? "rgba(11,16,41,0.5)" : "#EF4444" }}>
          {slotsLeft > 0 ? `${slotsLeft} slots` : "Full"}
        </span>
      ) : null}
    </button>
  );
}

// ─── Slot Button Component ────────────────────────────────────────────────────

function SlotButton({
  slot,
  selected,
  onSelect,
}: {
  slot: TimeSlot;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        height: 44,
        borderRadius: 12,
        border: selected ? `2px solid ${ORANGE}` : "2px solid rgba(11,16,41,0.12)",
        background: selected ? ORANGE : WHITE,
        color: selected ? WHITE : NAVY,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.15s, border-color 0.15s",
        boxShadow: selected ? "0 6px 20px rgba(232,103,10,0.30)" : "none",
      }}
    >
      <span style={{ fontFamily: OSWALD, fontSize: 15, fontWeight: 700, lineHeight: 1 }}>
        {slot.display}
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", marginLeft: 2 }}>
          {slot.meridiem}
        </span>
      </span>
    </button>
  );
}

// ─── Confirmation Sheet ───────────────────────────────────────────────────────

interface ConfirmSheetProps {
  slotIso: string;
  location: string;
  firstName: string;
  onConfirm: (email?: string) => void;
  onClose: () => void;
  confirming: boolean;
  error: string | null;
}

function ConfirmSheet({
  slotIso,
  location,
  firstName,
  onConfirm,
  onClose,
  confirming,
  error,
}: ConfirmSheetProps) {
  const [email, setEmail] = useState("");
  const cal = CALENDARS[location];
  const address = LOCATION_ADDRESSES[location] ?? "";

  const dateStr = formatConfirmDate(slotIso);
  const timeSlot = isoToDisplayTime(slotIso);
  const timeStr = `${timeSlot.display} ${timeSlot.meridiem}`;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        background: "rgba(11,16,41,0.65)",
        backdropFilter: "blur(4px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          background: WHITE,
          borderRadius: "20px 20px 0 0",
          padding: "0 0 24px",
          maxHeight: "92dvh",
          overflowY: "auto",
          animation: "slideUp 240ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <style>{`
          @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to   { transform: translateY(0); opacity: 1; }
          }
        `}</style>

        {/* Handle */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 12, paddingBottom: 4 }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: "rgba(11,16,41,0.15)" }} />
        </div>

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 20px 4px" }}>
          <h2 style={{ fontFamily: OSWALD, fontSize: 22, fontWeight: 700, color: NAVY, textTransform: "uppercase", letterSpacing: "0.02em", margin: 0 }}>
            Confirm Your Visit
          </h2>
          <button
            type="button"
            onClick={onClose}
            style={{ width: 40, height: 40, borderRadius: "50%", border: "none", background: "rgba(11,16,41,0.07)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            aria-label="Close"
          >
            <X size={16} color={NAVY} />
          </button>
        </div>

        {/* Slot summary */}
        <div style={{ padding: "12px 20px" }}>
          <div style={{ background: "rgba(11,16,41,0.04)", borderRadius: 12, padding: "14px 16px" }}>
            <p style={{ fontFamily: OSWALD, fontSize: 16, fontWeight: 700, color: NAVY, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              {dateStr}
            </p>
            <p style={{ fontFamily: INTER, fontSize: 15, color: NAVY, margin: 0 }}>
              {timeStr} · 60 min visit
            </p>
          </div>
        </div>

        {/* Location card */}
        {cal && (
          <div style={{ padding: "0 20px 12px" }}>
            <div style={{ border: "1px solid rgba(11,16,41,0.12)", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px" }}>
                <MapPin size={18} color={ORANGE} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontFamily: OSWALD, fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: NAVY, margin: "0 0 3px" }}>
                    Men&rsquo;s Wellness Centers · {cal.label}
                  </p>
                  {address && (
                    <p style={{ fontFamily: INTER, fontSize: 13, color: "rgba(11,16,41,0.6)", margin: 0, lineHeight: 1.5 }}>
                      {address}
                    </p>
                  )}
                </div>
              </div>
              <div style={{ height: 1, background: "rgba(11,16,41,0.08)" }} />
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 16px" }}>
                <Clock size={15} color="rgba(11,16,41,0.5)" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontFamily: INTER, fontSize: 13, color: "rgba(11,16,41,0.6)", margin: 0, lineHeight: 1.5 }}>
                  Please arrive 5 minutes early. Your physician will be ready.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Email input */}
        <div style={{ padding: "0 20px 16px" }}>
          <label style={{ display: "block", fontFamily: INTER, fontSize: 12, fontWeight: 600, color: "rgba(11,16,41,0.6)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Email (optional)
          </label>
          <div style={{ position: "relative" }}>
            <Mail size={16} color="rgba(11,16,41,0.4)" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                height: 50,
                paddingLeft: 42,
                paddingRight: 14,
                border: "2px solid rgba(11,16,41,0.12)",
                borderRadius: 12,
                fontFamily: INTER,
                fontSize: 15,
                color: NAVY,
                background: WHITE,
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>
          <p style={{ fontFamily: INTER, fontSize: 12, color: "rgba(11,16,41,0.45)", margin: "6px 0 0" }}>
            Used only for appointment confirmation and reminders.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div style={{ margin: "0 20px 12px", padding: "12px 14px", background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: 10 }}>
            <p style={{ fontFamily: INTER, fontSize: 14, color: "#991B1B", margin: 0 }}>{error}</p>
          </div>
        )}

        {/* CTA */}
        <div style={{ padding: "0 20px", borderTop: "1px solid rgba(11,16,41,0.08)", paddingTop: 16 }}>
          <button
            type="button"
            onClick={() => onConfirm(email.trim() || undefined)}
            disabled={confirming}
            style={{
              width: "100%",
              height: 56,
              borderRadius: 14,
              border: "none",
              background: confirming ? "rgba(11,16,41,0.15)" : ORANGE,
              color: confirming ? "rgba(11,16,41,0.4)" : WHITE,
              fontFamily: OSWALD,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: confirming ? "wait" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              boxShadow: confirming ? "none" : "0 4px 20px rgba(232,103,10,0.40)",
              transition: "background 0.15s",
            }}
          >
            {confirming ? "Booking..." : (
              <>
                Confirm Visit
                <ChevronRight size={18} strokeWidth={2.5} />
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{
              width: "100%",
              height: 44,
              marginTop: 10,
              border: "none",
              background: "transparent",
              fontFamily: INTER,
              fontSize: 15,
              fontWeight: 600,
              color: NAVY,
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            Change Time
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Schedule Content ────────────────────────────────────────────────────

function ScheduleContent() {
  const router = useRouter();
  const state = getBookingState();
  const firstName = state?.identity?.firstName ?? "";
  const symptom = state?.symptom ?? "";
  const location = state?.location ?? "richmond";

  const concernLabel =
    SYMPTOM_MAP[symptom] ?? SYMPTOM_MAP["other"];
  const cal = CALENDARS[location] ?? CALENDARS["richmond"];

  // Days state
  const [days, setDays] = useState<DayCell[]>(() => buildDays());
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(0);
  const [loadingDays, setLoadingDays] = useState<Set<string>>(new Set());

  // Slots state
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Confirm state
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [bookError, setBookError] = useState<string | null>(null);

  // Scroll ref for day strip
  const stripRef = useRef<HTMLDivElement>(null);

  // Fetch slots for a range of days
  const fetchSlots = useCallback(
    async (dayIndices: number[]) => {
      const toFetch = dayIndices.filter(
        (i) => !days[i].closed && !days[i].loaded && !loadingDays.has(days[i].dateKey)
      );
      if (toFetch.length === 0) return;

      const keys = toFetch.map((i) => days[i].dateKey);
      setLoadingDays((prev) => new Set([...prev, ...keys]));

      // Batch: use first/last of the range
      const first = days[toFetch[0]];
      const last = days[toFetch[toFetch.length - 1]];

      // ET midnight for start
      const startDate = new Date(`${first.dateKey}T00:00:00`).getTime();
      // ET end-of-day for last
      const endDate = new Date(`${last.dateKey}T23:59:59`).getTime();

      try {
        const res = await fetch(
          `/api/slots?location=${location}&startDate=${startDate}&endDate=${endDate}`
        );
        if (!res.ok) throw new Error("fetch failed");
        const data = await res.json() as Record<string, { slots: string[] }>;
        const slotsByDate = parseSlotsResponse(data);

        setDays((prev) => {
          const next = [...prev];
          toFetch.forEach((i) => {
            const dk = next[i].dateKey;
            const rawSlots = slotsByDate[dk] ?? [];
            const isToday = i === 0;
            const filtered = filterPastSlots(rawSlots, isToday);
            next[i] = { ...next[i], slots: filtered, loaded: true };
          });
          return next;
        });
      } catch (err) {
        console.error("fetchSlots error:", err);
        // Mark as loaded with empty slots on error
        setDays((prev) => {
          const next = [...prev];
          toFetch.forEach((i) => {
            next[i] = { ...next[i], slots: [], loaded: true };
          });
          return next;
        });
      } finally {
        setLoadingDays((prev) => {
          const next = new Set(prev);
          keys.forEach((k) => next.delete(k));
          return next;
        });
      }
    },
    [days, loadingDays, location]
  );

  // Fetch all 9 days on mount (batch)
  useEffect(() => {
    const allIdx = days.map((_, i) => i);
    fetchSlots(allIdx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Refetch selected day when changed (if not loaded)
  useEffect(() => {
    if (!days[selectedDayIdx].loaded && !days[selectedDayIdx].closed) {
      fetchSlots([selectedDayIdx]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDayIdx]);

  // Clear selected slot when day changes
  useEffect(() => {
    setSelectedSlot(null);
  }, [selectedDayIdx]);

  const selectedDay = days[selectedDayIdx];
  const isLoadingSlots = loadingDays.has(selectedDay.dateKey);

  const timeSlots: TimeSlot[] = selectedDay.slots.map(isoToDisplayTime);
  const { morning, afternoon } = groupSlots(timeSlots);

  // Book appointment
  const handleConfirm = async (email?: string) => {
    if (!selectedSlot) return;
    setConfirming(true);
    setBookError(null);

    const bookState = getBookingState();
    const body = {
      slotIso: selectedSlot,
      location,
      firstName: bookState?.identity?.firstName ?? "",
      lastName: bookState?.identity?.lastName ?? "",
      email: email || bookState?.identity?.email,
      phone: bookState?.identity?.phone ?? "",
      contactId: bookState?.identity?.ghlContactId,
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json() as { ok?: boolean; appointmentId?: string; error?: string };
      if (!res.ok || !data.ok) {
        setBookError(data.error ?? "Something went wrong. Please try again.");
        setConfirming(false);
        return;
      }

      // Save confirmed appointment to session storage
      patchBookingState({
        // @ts-expect-error extending state
        confirmedAppointment: {
          slotIso: selectedSlot,
          location,
          locationLabel: cal.label,
          appointmentId: data.appointmentId,
        },
      });

      router.push("/confirmed");
    } catch {
      setBookError("Network error. Please try again.");
      setConfirming(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 640,
        padding: "0 0 60px",
      }}
    >
      {/* Progress bar */}
      <div style={{ padding: "0 20px 8px" }}>
        <FunnelProgressBar activeStep={3} />
      </div>

      {/* Heading */}
      <div style={{ padding: "0 20px 16px" }}>
        <h1
          style={{
            fontFamily: OSWALD,
            fontSize: 22,
            fontWeight: 700,
            color: NAVY,
            margin: "0 0 8px",
            lineHeight: 1.25,
          }}
        >
          {firstName
            ? `${firstName}, your physician is ready to help with your ${concernLabel}.`
            : `Your physician is ready to help with your ${concernLabel}.`}
        </h1>

        {/* Location pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 12px",
            background: "rgba(11,16,41,0.07)",
            borderRadius: 999,
          }}
        >
          <MapPin size={13} color={ORANGE} strokeWidth={2} />
          <span style={{ fontFamily: OSWALD, fontSize: 12, fontWeight: 700, color: NAVY, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {cal.label}
          </span>
        </div>
      </div>

      {/* Day strip */}
      <div
        ref={stripRef}
        style={{
          display: "flex",
          gap: 8,
          overflowX: "auto",
          padding: "4px 20px 16px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        role="radiogroup"
        aria-label="Select a day"
      >
        {days.map((day, i) => (
          <DayChip
            key={day.dateKey}
            day={day}
            selected={selectedDayIdx === i}
            loading={loadingDays.has(day.dateKey)}
            onSelect={() => {
              if (!day.closed) setSelectedDayIdx(i);
            }}
          />
        ))}
      </div>

      {/* Slot grid */}
      <div style={{ padding: "0 20px" }}>
        {selectedDay.closed ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <p style={{ fontFamily: INTER, fontSize: 15, color: "rgba(11,16,41,0.5)" }}>
              We&rsquo;re closed on Sundays. Please select another day.
            </p>
          </div>
        ) : isLoadingSlots ? (
          <div style={{ display: "flex", justifyContent: "center", padding: "40px 0" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: `3px solid rgba(11,16,41,0.15)`,
                borderTopColor: ORANGE,
                animation: "spin 0.7s linear infinite",
              }}
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : timeSlots.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <p style={{ fontFamily: INTER, fontSize: 15, color: "rgba(11,16,41,0.5)" }}>
              No available slots for this day. Please try another day.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {morning.length > 0 && (
              <div>
                <h3 style={{ fontFamily: OSWALD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(11,16,41,0.45)", margin: "0 0 10px" }}>
                  Morning
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                  {morning.map((s) => (
                    <SlotButton
                      key={s.iso}
                      slot={s}
                      selected={selectedSlot === s.iso}
                      onSelect={() => {
                        setSelectedSlot(s.iso);
                        setShowConfirm(true);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            {afternoon.length > 0 && (
              <div>
                <h3 style={{ fontFamily: OSWALD, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(11,16,41,0.45)", margin: "0 0 10px" }}>
                  Afternoon
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                  {afternoon.map((s) => (
                    <SlotButton
                      key={s.iso}
                      slot={s}
                      selected={selectedSlot === s.iso}
                      onSelect={() => {
                        setSelectedSlot(s.iso);
                        setShowConfirm(true);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Confirm sheet */}
      {showConfirm && selectedSlot && (
        <ConfirmSheet
          slotIso={selectedSlot}
          location={location}
          firstName={firstName}
          onConfirm={handleConfirm}
          onClose={() => {
            setShowConfirm(false);
            setBookError(null);
          }}
          confirming={confirming}
          error={bookError}
        />
      )}
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function SchedulePage() {
  return (
    <BookingRouteGuard>
      <ScheduleContent />
    </BookingRouteGuard>
  );
}
