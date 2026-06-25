"use client";

import { useState, useEffect } from "react";
import { User, Phone, ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { LocationRadioGroup, type LocationKey } from "./LocationRadioGroup";
import { TCPADisclaimer } from "./TCPADisclaimer";

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

function autoDetectLocation(): LocationKey | "" {
  if (typeof window === "undefined") return "";
  const path = window.location.pathname.toLowerCase();
  if (path.includes("richmond")) return "richmond";
  if (path.includes("virginia-beach")) return "virginia-beach";
  if (path.includes("newport-news")) return "newport-news";
  return "";
}

interface LeadFormProps {
  formId?: string;
  source?: string;
  dark?: boolean;
}

export function LeadForm({ formId = "hero", source = "next-lander", dark = true }: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState<LocationKey | "">("");
  const [tcpa, setTcpa] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successLocation, setSuccessLocation] = useState("");
  const [formError, setFormError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const detected = autoDetectLocation();
    if (detected) setLocation(detected);
  }, []);

  const nameOk = name.trim().length >= 2;
  const phoneOk = phone.replace(/\D/g, "").length === 10;
  const locOk = !!location;
  const tcpaOk = tcpa;
  const canSubmit = nameOk && phoneOk && locOk && tcpaOk && !submitting;

  const handleNameChange = (v: string) => {
    setName(v.replace(/<[^>]*>/g, ""));
    if (errors.name) setErrors((e) => ({ ...e, name: "" }));
  };

  const handlePhoneChange = (v: string) => {
    setPhone(formatPhone(v));
    if (errors.phone) setErrors((e) => ({ ...e, phone: "" }));
  };

  const handleLocationChange = (key: LocationKey) => {
    setLocation(key);
    if (errors.location) setErrors((e) => ({ ...e, location: "" }));
  };

  const handleTcpaChange = (checked: boolean) => {
    setTcpa(checked);
    if (errors.tcpa) setErrors((e) => ({ ...e, tcpa: "" }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (name.trim().length < 2) newErrors.name = "Please enter your name.";
    if (phone.replace(/\D/g, "").length !== 10) newErrors.phone = "Please enter a valid 10-digit phone number.";
    if (!location) newErrors.location = "Please select a location.";
    if (!tcpa) newErrors.tcpa = "Please agree to the terms to continue.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setFormError("");
    if (!validate()) return;

    setSubmitting(true);
    const parts = name.trim().split(/\s+/);
    const firstName = parts[0] ?? "Guest";
    const lastName = parts.slice(1).join(" ") || undefined;

    const payload = {
      firstName,
      lastName,
      phone,
      location,
      source,
      landing_page: typeof window !== "undefined" ? window.location.href : "",
      ...getUtmParams(),
    };

    try {
      const res = await fetch("/api/qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((data as { error?: string }).error ?? "Something went wrong.");

      const locLabel = (data as { location?: string }).location ??
        location.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      setSuccessLocation(locLabel);
      setSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setFormError(message);
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div
        style={{
          background: dark ? "rgba(255,255,255,0.07)" : "#fff",
          backdropFilter: dark ? "blur(24px)" : "none",
          WebkitBackdropFilter: dark ? "blur(24px)" : "none",
          border: dark ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(11,16,41,0.10)",
          borderRadius: 16,
          padding: "48px 28px",
          boxShadow: "0 24px 64px rgba(0,0,0,0.50)",
          maxWidth: 460,
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(93,214,138,0.15)",
            color: "#5DD68A",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <CheckCircle size={32} strokeWidth={2} />
        </div>
        <h2
          style={{
            fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
            fontSize: 24,
            textTransform: "uppercase",
            fontWeight: 700,
            color: dark ? "#fff" : "#0B1029",
            marginBottom: 8,
          }}
        >
          You&rsquo;re In.
        </h2>
        <p style={{ color: dark ? "#B0ADA8" : "#6B7280", fontSize: 14, lineHeight: 1.5 }}>
          We&rsquo;ll reach out shortly to confirm your visit at{" "}
          <strong>{successLocation}</strong>.
        </p>
        <p style={{ marginTop: 12, fontSize: 13, color: "#9CA3AF" }}>
          Check your phone for a confirmation text.
        </p>
      </div>
    );
  }

  const inputWrapStyle = (field: string): React.CSSProperties => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    background: dark ? "rgba(255,255,255,0.08)" : "#fff",
    border: `2px solid ${errors[field] ? "#DC2626" : dark ? "rgba(255,255,255,0.22)" : "rgba(11,16,41,0.20)"}`,
    borderRadius: 10,
    height: 52,
    transition: "border-color 150ms",
  });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    padding: "0 14px 0 42px",
    background: "transparent",
    border: "none",
    outline: "none",
    color: dark ? "#fff" : "#0B1029",
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: 15,
    fontWeight: 400,
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: 14,
    color: dark ? "rgba(255,255,255,0.50)" : "rgba(11,16,41,0.40)",
    pointerEvents: "none",
    display: "flex",
  };

  return (
    <div
      id={`${formId}-card`}
      style={{
        background: dark ? "rgba(255,255,255,0.07)" : "#fff",
        backdropFilter: dark ? "blur(24px)" : "none",
        WebkitBackdropFilter: dark ? "blur(24px)" : "none",
        border: dark ? "1px solid rgba(255,255,255,0.35)" : "1px solid rgba(11,16,41,0.10)",
        borderRadius: 16,
        padding: "32px 28px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.50)",
        maxWidth: 460,
        width: "100%",
      }}
    >
      <h2
        style={{
          fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
          fontWeight: 700,
          fontSize: 20,
          lineHeight: 1.15,
          color: dark ? "#F5F0EB" : "#0B1029",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          marginBottom: 8,
        }}
      >
        Start Feeling Like Yourself Again.
      </h2>
      <p style={{ fontSize: 13, color: dark ? "#F5F0EB" : "#6B7280", lineHeight: 1.4, marginBottom: 8, fontFamily: "'Montserrat', system-ui, sans-serif" }}>
        No-cost 60-minute visit. Same-day labs. No insurance needed. FSA &amp; HSA accepted.
      </p>

      <form id={`${formId}-form`} onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-3">
          {/* Name */}
          <div>
            <div style={inputWrapStyle("name")}>
              <span style={iconStyle}>
                <User size={16} strokeWidth={1.75} />
              </span>
              <input
                type="text"
                placeholder="Name"
                autoComplete="name"
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                style={inputStyle}
                aria-label="Your name"
              />
            </div>
            {errors.name && (
              <p role="alert" className="flex items-center gap-1 text-xs mt-1" style={{ color: "#DC2626" }}>
                <AlertCircle size={12} strokeWidth={2} /> {errors.name}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <div style={inputWrapStyle("phone")}>
              <span style={iconStyle}>
                <Phone size={16} strokeWidth={1.75} />
              </span>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                style={inputStyle}
                aria-label="Your phone number"
              />
            </div>
            {errors.phone && (
              <p role="alert" className="flex items-center gap-1 text-xs mt-1" style={{ color: "#DC2626" }}>
                <AlertCircle size={12} strokeWidth={2} /> {errors.phone}
              </p>
            )}
          </div>

          {/* Location */}
          <LocationRadioGroup
            formId={formId}
            value={location}
            onChange={handleLocationChange}
            error={errors.location}
            dark={dark}
          />

          {/* TCPA */}
          <TCPADisclaimer
            checked={tcpa}
            onChange={handleTcpaChange}
            error={errors.tcpa}
            dark={dark}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            style={{
              width: "100%",
              height: 54,
              marginTop: 4,
              border: "none",
              borderRadius: 60,
              fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: canSubmit ? "pointer" : "not-allowed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "background 180ms ease, transform 180ms ease, box-shadow 180ms ease",
              background: canSubmit ? "#E8670A" : "#1E244A",
              color: canSubmit ? "#fff" : "rgba(255,255,255,0.50)",
              boxShadow: canSubmit ? "0 4px 20px rgba(232,103,10,0.40)" : "none",
            }}
            onMouseEnter={(e) => {
              if (canSubmit) {
                e.currentTarget.style.background = "#CF5C09";
                e.currentTarget.style.transform = "translateY(-1px)";
              }
            }}
            onMouseLeave={(e) => {
              if (canSubmit) {
                e.currentTarget.style.background = "#E8670A";
                e.currentTarget.style.transform = "translateY(0)";
              }
            }}
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Booking...
              </>
            ) : (
              <>
                Book My No-Cost Visit <ArrowRight size={16} strokeWidth={2.5} />
              </>
            )}
          </button>

          {formError && (
            <p
              role="alert"
              className="flex items-center gap-1 text-xs"
              style={{ color: "#DC2626" }}
            >
              <AlertCircle size={12} strokeWidth={2} /> {formError}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
