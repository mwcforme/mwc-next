"use client";

import { useId } from "react";
import { Check, AlertCircle } from "lucide-react";

const ERR_RED = "#DC2626";
const ORANGE = "#E8670A";

interface TCPADisclaimerProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  dark?: boolean;
}

export function TCPADisclaimer({
  id: idProp,
  checked,
  onChange,
  error,
  dark = true,
}: TCPADisclaimerProps) {
  const generatedId = useId();
  const id = idProp ?? `tcpa-${generatedId}`;

  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-describedby={`${id}-text`}
        aria-invalid={!!error}
        className="absolute opacity-0 w-0 h-0 pointer-events-none"
      />
      <label
        htmlFor={id}
        style={{ padding: "10px 12px", margin: "0 -12px" }}
        className="flex items-start gap-3 cursor-pointer select-none rounded-lg"
      >
        <div
          aria-hidden="true"
          style={{
            width: 24,
            height: 24,
            borderRadius: 5,
            border: `2px solid ${
              checked ? ORANGE : error ? ERR_RED : dark ? "rgba(255,255,255,0.40)" : "rgba(11,16,41,0.20)"
            }`,
            background: checked ? ORANGE : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginTop: 1,
            transition: "background 150ms ease, border-color 150ms ease",
          }}
        >
          {checked && <Check size={14} strokeWidth={3} className="text-white" />}
        </div>
        <span
          id={`${id}-text`}
          className="text-[11px] leading-snug"
          style={{ color: dark ? "#F5F0EB" : "#6B7280" }}
        >
          I agree to receive SMS/calls &amp; texts from Men&rsquo;s Wellness Centers. Msg &amp; data
          rates may apply. Reply STOP to opt out. Not a condition of service. HIPAA Compliant.{" "}
          <a
            href="https://menswellnesscenters.com/privacy-practices/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: ORANGE }}
          >
            Privacy Policy
          </a>
        </span>
      </label>
      {error && (
        <p role="alert" style={{ color: ERR_RED }} className="flex items-center gap-1 text-xs mt-1.5">
          <AlertCircle size={12} strokeWidth={2} /> {error}
        </p>
      )}
    </div>
  );
}
