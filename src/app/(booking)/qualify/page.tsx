"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Battery, Heart, Dumbbell, Brain, Check } from "lucide-react";
import { FunnelProgressBar } from "@/components/FunnelProgressBar";
import { BookingRouteGuard } from "@/components/BookingRouteGuard";
import { patchBookingState } from "@/lib/bookingStore";

const ORANGE = "#E8670A";

type Concern = "low_energy" | "libido_ed" | "weight_muscle" | "brain_mood";

interface ConcernOption {
  value: Concern;
  label: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    style?: React.CSSProperties;
  }>;
}

const OPTIONS: ConcernOption[] = [
  { value: "low_energy", label: "Low energy or fatigue", icon: Battery },
  { value: "libido_ed", label: "ED or sexual health", icon: Heart },
  { value: "weight_muscle", label: "Weight or muscle", icon: Dumbbell },
  { value: "brain_mood", label: "Brain fog or mood", icon: Brain },
];

const symptomMap: Record<Concern, string> = {
  low_energy: "energy",
  libido_ed: "sexual",
  weight_muscle: "weight",
  brain_mood: "other",
};

function QualifyContent() {
  const router = useRouter();
  const [selected, setSelected] = useState<Concern | null>(null);

  const handlePick = (value: Concern) => {
    if (selected) return;
    setSelected(value);
    // Write to sessionStorage
    patchBookingState({
      primaryConcern: value,
      symptom: symptomMap[value],
    });
    // Fire analytics event
    if (typeof window !== "undefined") {
      // @ts-expect-error dataLayer may not be typed
      window.dataLayer = window.dataLayer || [];
      // @ts-expect-error dataLayer may not be typed
      window.dataLayer.push({
        event: "generate_lead",
        lead_value: 100,
        lead_currency: "USD",
        lead_source: "qualify_page",
      });
    }
    // Auto-advance after 280ms
    setTimeout(() => router.push("/duration"), 280);
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
        Which one fits you best?
      </h1>

      <div
        role="radiogroup"
        aria-label="Select your main concern"
        style={{ display: "flex", flexDirection: "column", gap: 8 }}
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
                height: 56,
                padding: "0 14px",
                borderRadius: 10,
                border: sel
                  ? `1.5px solid ${ORANGE}`
                  : "1.5px solid #E2E4E8",
                background: sel ? "rgba(232,103,10,0.10)" : "#FFFFFF",
                cursor: "pointer",
                textAlign: "left",
                transition: "border-color 150ms, background 150ms",
                userSelect: "none",
              }}
            >
              <Icon
                size={22}
                strokeWidth={1.5}
                style={{ color: ORANGE, flexShrink: 0 }}
              />
              <span
                style={{
                  flex: 1,
                  fontSize: 16,
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
                  border: sel ? `1.5px solid ${ORANGE}` : "1.5px solid #9CA3AF",
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

export default function QualifyPage() {
  return (
    <BookingRouteGuard>
      <QualifyContent />
    </BookingRouteGuard>
  );
}
