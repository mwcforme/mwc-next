"use client";

import { useState } from "react";
import { MapPin, Check, AlertCircle } from "lucide-react";

export type LocationKey = "richmond" | "virginia-beach" | "newport-news";

export const LOCATIONS: { key: LocationKey; label: string }[] = [
  { key: "richmond", label: "Richmond" },
  { key: "virginia-beach", label: "Virginia Beach" },
  { key: "newport-news", label: "Newport News" },
];

const ERR_RED = "#DC2626";
const ORANGE = "#E8670A";

export interface LocationRadioGroupProps {
  formId?: string;
  value: LocationKey | "";
  onChange: (key: LocationKey) => void;
  error?: string;
  dark?: boolean;
}

export function LocationRadioGroup({
  formId = "hf",
  value,
  onChange,
  error,
  dark = true,
}: LocationRadioGroupProps) {
  const [hovered, setHovered] = useState<LocationKey | null>(null);

  return (
    <div role="radiogroup" aria-label="Select center location" aria-required="true">
      <div className="flex flex-col gap-2">
        {LOCATIONS.map(({ key, label }) => {
          const sel = value === key;
          const hov = hovered === key && !sel;

          const bgDark = sel ? "rgba(232,103,10,0.12)" : "rgba(255,255,255,0.06)";
          const bgLight = sel ? "rgba(232,103,10,0.08)" : "#F7F7F5";
          const bg = dark ? bgDark : bgLight;

          const borderColor = sel
            ? ORANGE
            : error
            ? ERR_RED
            : hov
            ? "rgba(255,255,255,0.35)"
            : dark
            ? "rgba(255,255,255,0.18)"
            : "#DBDBDB";

          const labelColor = dark ? "var(--off-white)" : "#0B1029";

          return (
            <label
              key={key}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex",
                alignItems: "center",
                height: 52,
                borderRadius: 8,
                padding: "0 14px",
                gap: 12,
                cursor: "pointer",
                userSelect: "none",
                background: bg,
                border: `2px solid ${borderColor}`,
                boxShadow: sel ? "0 4px 12px rgba(232,103,10,0.15)" : "none",
                transform: sel ? "scale(1.01)" : "scale(1)",
                transition:
                  "transform 150ms ease, border-color 150ms ease, background 150ms ease, box-shadow 150ms ease",
              }}
            >
              <input
                type="radio"
                name={`${formId}-location`}
                value={key}
                checked={sel}
                onChange={() => onChange(key)}
                aria-label={label}
                className="absolute opacity-0 w-0 h-0 pointer-events-none"
              />
              <MapPin
                size={20}
                strokeWidth={1.75}
                aria-hidden
                style={{
                  color: sel ? ORANGE : dark ? "rgba(255,255,255,0.50)" : "#6B7280",
                  flexShrink: 0,
                  transition: "color 150ms ease",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body, Montserrat, sans-serif)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: labelColor,
                  lineHeight: 1,
                  flex: 1,
                }}
              >
                {label}
              </span>
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  border: sel ? `2px solid ${ORANGE}` : `1.5px solid ${dark ? "rgba(255,255,255,0.30)" : "#D1D5DB"}`,
                  background: sel ? ORANGE : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 150ms ease",
                }}
              >
                {sel && <Check size={12} strokeWidth={3} style={{ color: "#fff" }} />}
              </span>
            </label>
          );
        })}
      </div>
      {error && (
        <p role="alert" style={{ color: ERR_RED }} className="flex items-center gap-1 text-xs mt-1.5">
          <AlertCircle size={12} strokeWidth={2} /> {error}
        </p>
      )}
    </div>
  );
}
