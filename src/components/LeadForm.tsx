"use client";

import { useState, useEffect } from "react";
import { User, Phone, ArrowRight, Loader2, CheckCircle, AlertCircle, Star } from "lucide-react";
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
  /** CRO variant: star rating at top, CRO heading/CTA, testimonial at bottom, always-orange pill button */
  variant?: "trt" | "cro";
}

export function LeadForm({ formId = "hero", source = "next-lander", dark = true, variant }: LeadFormProps) {
  const isCro = variant === "cro" || dark === false;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState<LocationKey | "">("");
  const [tcpa, setTcpa] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successLocation, setSuccessLocation] = useState("");
  const [successContactId, setSuccessContactId] = useState("");
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
  // CRO: button is always orange regardless of form completeness
  const btnEnabled = isCro ? !submitting : canSubmit;

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

      const contactId = (data as { contactId?: string }).contactId ?? "";
      const locLabel = (data as { location?: string }).location ??
        location.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

      setSuccessLocation(locLabel);
      setSuccessContactId(contactId);
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
          background: isCro ? "#fff" : "rgba(255,255,255,0.07)",
          backdropFilter: isCro ? "none" : "blur(24px)",
          WebkitBackdropFilter: isCro ? "none" : "blur(24px)",
          border: isCro ? "1px solid rgba(11,16,41,0.10)" : "1px solid rgba(255,255,255,0.35)",
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
            color: isCro ? "#0B1029" : "#fff",
            marginBottom: 8,
          }}
        >
          You&rsquo;re In.
        </h2>
        <p style={{ color: isCro ? "#374151" : "#B0ADA8", fontSize: 14, lineHeight: 1.5 }}>
          We&rsquo;ll reach out shortly to confirm your visit at{" "}
          <strong>{successLocation}</strong>.
        </p>
        <a
          href="https://book.menswellnesscenters.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginTop: 20,
            width: "100%",
            height: 54,
            background: "#E8670A",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 9999,
            fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(232,103,10,0.40)",
          }}
        >
          Book Your Visit →
        </a>
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
    background: isCro ? "#fff" : "rgba(255,255,255,0.08)",
    border: `2px solid ${errors[field] ? "#DC2626" : isCro ? "rgba(11,16,41,0.20)" : "rgba(255,255,255,0.22)"}`,
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
    color: isCro ? "#0B1029" : "#fff",
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: 15,
    fontWeight: 400,
  };

  const iconStyle: React.CSSProperties = {
    position: "absolute",
    left: 14,
    color: isCro ? "rgba(11,16,41,0.40)" : "rgba(255,255,255,0.50)",
    pointerEvents: "none",
    display: "flex",
  };

  return (
    <div
      id={isCro ? "hero-form" : `${formId}-card`}
      style={{
        background: isCro ? "#FFFFFF" : "rgba(255,255,255,0.07)",
        backdropFilter: isCro ? "none" : "blur(24px)",
        WebkitBackdropFilter: isCro ? "none" : "blur(24px)",
        border: isCro ? "1px solid rgba(11,16,41,0.06)" : "1px solid rgba(255,255,255,0.35)",
        borderRadius: 16,
        padding: "32px 28px",
        boxShadow: isCro ? "0 20px 60px rgba(0,0,0,0.25)" : "0 24px 64px rgba(0,0,0,0.50)",
        maxWidth: 460,
        width: "100%",
      }}
    >
      {/* CRO-only: star rating at top */}
      {isCro && (
        <a
          href="https://www.google.com/maps/search/Men%27s+Wellness+Centers"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 10, textDecoration: "none", flexWrap: "nowrap" }}
        >
          <span style={{ display: "flex", gap: 2 }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#C9A961" stroke="#C9A961" aria-hidden />
            ))}
          </span>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
            4.9 &middot; 191 verified Google reviews
          </span>
        </a>
      )}

      <h2
        style={{
          fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
          fontWeight: 700,
          fontSize: 20,
          lineHeight: 1.15,
          color: isCro ? "#0B1029" : "#F5F0EB",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          marginBottom: 8,
        }}
      >
        {isCro ? "CLAIM YOUR NO-COST VISIT" : "Start Feeling Like Yourself Again."}
      </h2>
      <p style={{ fontSize: 13, color: isCro ? "#374151" : "#F5F0EB", lineHeight: 1.4, marginBottom: 8, fontFamily: "'Montserrat', system-ui, sans-serif" }}>
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
            dark={!isCro}
          />

          {/* TCPA */}
          <TCPADisclaimer
            checked={tcpa}
            onChange={handleTcpaChange}
            error={errors.tcpa}
            dark={!isCro}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={!btnEnabled}
            style={{
              width: "100%",
              height: isCro ? 56 : 54,
              marginTop: 4,
              border: "none",
              borderRadius: isCro ? 9999 : 60,
              fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: submitting ? "wait" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "background 180ms ease, transform 180ms ease, box-shadow 180ms ease",
              background: (btnEnabled || isCro) ? "#E8670A" : "#1E244A",
              color: (btnEnabled || isCro) ? "#fff" : "rgba(255,255,255,0.50)",
              boxShadow: (btnEnabled || isCro) ? "0 4px 20px rgba(232,103,10,0.40)" : "none",
            }}
            onMouseEnter={(e) => {
              if (btnEnabled || isCro) {
                e.currentTarget.style.background = "#CF5C09";
                e.currentTarget.style.transform = "translateY(-1px)";
              }
            }}
            onMouseLeave={(e) => {
              if (btnEnabled || isCro) {
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
                {isCro ? "BOOK MY 60-MINUTE VISIT" : "Book My No-Cost Visit"}{" "}
                <ArrowRight size={16} strokeWidth={2.5} />
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

          {/* CRO-only: testimonial quote at bottom */}
          {isCro && (
            <p
              style={{
                fontSize: 11,
                marginTop: 20,
                textAlign: "center",
                lineHeight: 1.5,
                fontStyle: "italic",
                color: "#6B7280",
                fontFamily: "'Montserrat', system-ui, sans-serif",
              }}
            >
              &ldquo;I&rsquo;ve been to two GPs who told me my levels were fine. After one visit here I had answers and a plan. Game-changer for me.&rdquo; R.T., Richmond &middot; Verified member
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
