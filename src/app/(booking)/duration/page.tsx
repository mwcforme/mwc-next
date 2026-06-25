"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, CalendarDays, Calendar, CalendarRange, Check } from "lucide-react";
import { FunnelProgressBar } from "@/components/FunnelProgressBar";
import { BookingRouteGuard } from "@/components/BookingRouteGuard";
import { patchBookingState } from "@/lib/bookingStore";

const ORANGE = "#E8670A";

type Duration = "lt6mo" | "6to12mo" | "1to2yr" | "gt2yr";

interface DurationOption {
  value: Duration;
  label: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    style?: React.CSSProperties;
  }>;
  urgency: string;
}

const OPTIONS: DurationOption[] = [
  {
    value: "lt6mo",
    label: "Less than 6 months",
    icon: Clock,
    urgency: "early",
  },
  {
    value: "6to12mo",
    label: "6 to 12 months",
    icon: CalendarDays,
    urgency: "building",
  },
  {
    value: "1to2yr",
    label: "1 to 2 years",
    icon: Calendar,
    urgency: "overdue",
  },
  {
    value: "gt2yr",
    label: "More than 2 years",
    icon: CalendarRange,
    urgency: "long_overdue",
  },
];

function DurationContent() {
  const router = useRouter();
  const [selected, setSelected] = useState<Duration | null>(null);
  const [advancing, setAdvancing] = useState(false);

  const handlePick = (value: Duration) => {
    if (advancing) return;
    setAdvancing(true);
    setSelected(value);
    patchBookingState({ duration: value });
    setTimeout(() => router.push("/schedule"), 280);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 640,
        padding: "0 20px 40px",
      }}
    >
      <div style={{ marginBottom: 12 }}>
        <FunnelProgressBar activeStep={2} />
      </div>

      <h1
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          fontSize: 22,
          fontWeight: 700,
          color: "#0B1029",
          textAlign: "center",
          marginBottom: 24,
          lineHeight: 1.3,
        }}
      >
        How long has this been going on?
      </h1>

      <div
        role="radiogroup"
        aria-label="Select duration"
        style={{ display: "flex", flexDirection: "column", gap: 6 }}
      >
        {OPTIONS.map((opt) => {
          const Icon = opt.icon;
          const sel = selected === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handlePick(opt.value)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                width: "100%",
                height: 52,
                padding: "0 14px",
                borderRadius: 10,
                border: sel
                  ? `1.5px solid ${ORANGE}`
                  : "1.5px solid #E5E7EB",
                background: sel ? "rgba(232,103,10,0.10)" : "#FFFFFF",
                cursor: "pointer",
                textAlign: "left",
                transition: "border-color 150ms, background 150ms",
                userSelect: "none",
              }}
            >
              <Icon
                size={20}
                strokeWidth={1.5}
                style={{ color: ORANGE, flexShrink: 0 }}
              />
              <span
                style={{
                  flex: 1,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0B1029",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {opt.label}
              </span>
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  border: sel
                    ? `1.5px solid ${ORANGE}`
                    : "1.5px solid #9CA3AF",
                  background: sel ? ORANGE : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "border-color 150ms, background 150ms",
                }}
              >
                {sel && <Check size={12} strokeWidth={3} color="#FFFFFF" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function DurationPage() {
  return (
    <BookingRouteGuard>
      <DurationContent />
    </BookingRouteGuard>
  );
}
