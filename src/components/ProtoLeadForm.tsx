"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { patchBookingState } from "@/lib/bookingStore";
import type { LocationKey } from "./LocationRadioGroup";

/*
 * Lead form styled to match the prototype's white form card
 * (labeled fields + center selector), wired to the real funnel:
 * POST /api/qualify → sessionStorage → /qualify.
 */

const LOCATIONS: Array<{ key: LocationKey; label: string }> = [
  { key: "richmond", label: "Richmond" },
  { key: "virginia-beach", label: "Virginia Beach" },
  { key: "newport-news", label: "Newport News" },
];

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "msclkid"]) {
    const v = params.get(key);
    if (v) result[key] = v;
  }
  return result;
}

interface ProtoLeadFormProps {
  formId: string;
  source?: string;
  heading?: string;
  subline?: string;
}

export function ProtoLeadForm({
  formId,
  source = "home-lander",
  heading = "Claim your no-cost visit",
  subline = "Booked today. Seen today. Labs in 15 minutes.",
}: ProtoLeadFormProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState<LocationKey | "">("");
  const [tcpa, setTcpa] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (name.trim().length < 2) e.name = "Please enter your name.";
    if (phone.replace(/\D/g, "").length !== 10) e.phone = "Please enter a valid 10-digit phone number.";
    if (!location) e.location = "Please choose your center.";
    if (!tcpa) e.tcpa = "Please agree to the terms to continue.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (submitting) return;
    setFormError("");
    if (!validate()) return;
    setSubmitting(true);

    const parts = name.trim().split(/\s+/);
    const firstName = parts[0] ?? "Guest";
    const lastName = parts.slice(1).join(" ") || undefined;

    try {
      const res = await fetch("/api/qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          location,
          source,
          landing_page: typeof window !== "undefined" ? window.location.href : "",
          ...getUtmParams(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((data as { error?: string }).error ?? "Something went wrong.");

      patchBookingState({
        identity: {
          firstName,
          lastName: parts.slice(1).join(" ") || "",
          phone,
          ghlContactId: (data as { contactId?: string }).contactId ?? "",
        },
        location: location as LocationKey,
        source,
      });
      router.push("/qualify");
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="form-card" id={formId}>
      <div className="ftop">
        <h2>{heading}</h2>
        <span className="stars">★★★★★</span>
      </div>
      <p className="fsub">{subline}</p>

      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor={`${formId}-name`}>Name</label>
          <input
            id={`${formId}-name`}
            type="text"
            placeholder="John Smith"
            autoComplete="name"
            value={name}
            className={errors.name ? "err" : undefined}
            onChange={(e) => {
              setName(e.target.value.replace(/<[^>]*>/g, ""));
              if (errors.name) setErrors((p) => ({ ...p, name: "" }));
            }}
          />
        </div>
        {errors.name && <p className="ferr" role="alert">{errors.name}</p>}

        <div className="field">
          <label htmlFor={`${formId}-phone`}>Phone</label>
          <input
            id={`${formId}-phone`}
            type="tel"
            inputMode="tel"
            placeholder="(804) 555-0123"
            autoComplete="tel"
            value={phone}
            className={errors.phone ? "err" : undefined}
            onChange={(e) => {
              setPhone(formatPhone(e.target.value));
              if (errors.phone) setErrors((p) => ({ ...p, phone: "" }));
            }}
          />
        </div>
        {errors.phone && <p className="ferr" role="alert">{errors.phone}</p>}

        <div className="loc-label">Choose your center</div>
        <div className="loc-grid" role="radiogroup" aria-label="Choose your center">
          {LOCATIONS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={location === key}
              className={`loc-opt${location === key ? " sel" : ""}`}
              onClick={() => {
                setLocation(key);
                if (errors.location) setErrors((p) => ({ ...p, location: "" }));
              }}
            >
              {label}
            </button>
          ))}
        </div>
        {errors.location && <p className="ferr" role="alert">{errors.location}</p>}

        {/* TCPA consent — required by the funnel */}
        <div className="tcpa-row">
          <input
            id={`${formId}-tcpa`}
            type="checkbox"
            checked={tcpa}
            onChange={(e) => {
              setTcpa(e.target.checked);
              if (errors.tcpa) setErrors((p) => ({ ...p, tcpa: "" }));
            }}
          />
          <label htmlFor={`${formId}-tcpa`}>
            I agree to receive SMS/calls &amp; texts from Men&rsquo;s Wellness Centers. Msg and
            data rates may apply. Reply STOP to opt out. Not a condition of service. HIPAA
            compliant.{" "}
            <a
              href="https://menswellnesscenters.com/privacy-practices/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.tcpa && <p className="ferr" role="alert">{errors.tcpa}</p>}

        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? "Booking..." : "Check availability"}
        </button>

        {formError && <p className="ferr" role="alert" style={{ marginTop: 10 }}>{formError}</p>}

        <p className="fine">
          Speak to a real Virginia team member, not a chatbot. No referral needed. Same-day
          availability. FSA and HSA accepted.
        </p>
      </form>
    </div>
  );
}
