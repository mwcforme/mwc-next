"use client";

/**
 * CROPage — 7-round CRO optimization
 * Round 1: 3-step quiz form in hero
 * Round 2: Section reorder (Hero→Services→CredBand→HowItWorks→Manifesto→Testimonials→Included→Locations→FAQ→FinalCTA)
 * Round 3: All CTAs → "CHECK AVAILABILITY" / "Check Now"
 * Round 4: Price anchor after insurance/FSA mentions
 * Round 5: Dynamic headlines from URL params (?svc=trt|ed|wl)
 * Round 6: Hero testimonial + "Join 10,000+ Virginia Men" form heading
 * Round 7: Mobile bottom-sheet pattern (headline + subhead + stars + single CTA)
 *
 * Colors: Orange #E8670A | Navy #0B1029 | White #FFFFFF | Cream #F5F0EB
 */

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  MapPin,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Quote,
} from "lucide-react";
import { useFormModal } from "./FormModalProvider";

// ─── Shared CTA Button ───────────────────────────────────────────────────────

function CTAButton({
  onClick,
  children,
  fullWidth = false,
  size = "md",
}: {
  onClick: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const h = size === "lg" ? 56 : size === "sm" ? 44 : 50;
  const fs = size === "lg" ? 16 : size === "sm" ? 13 : 14;
  const px = size === "lg" ? 36 : size === "sm" ? 20 : 28;
  return (
    <button
      type="button"
      onClick={onClick}
      className="cro-cta-btn"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        height: h,
        padding: `0 ${px}px`,
        width: fullWidth ? "100%" : undefined,
        border: "none",
        borderRadius: 9999,
        background: "#E8670A",
        color: "#FFFFFF",
        fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
        fontSize: fs,
        fontWeight: 700,
        textTransform: "uppercase" as const,
        letterSpacing: "0.07em",
        cursor: "pointer",
        boxShadow:
          "0 4px 20px rgba(232,103,10,0.45), 0 0 40px rgba(232,103,10,0.15)",
        transition: "all 200ms ease",
        position: "relative" as const,
      }}
    >
      {children}
      <ArrowRight size={size === "sm" ? 14 : 16} strokeWidth={2.5} />
    </button>
  );
}

// ─── Google Icon ─────────────────────────────────────────────────────────────

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

// ─── Round 1: 3-Step Hero Quiz Form ──────────────────────────────────────────

const CONCERN_OPTIONS = [
  { id: "energy", label: "Low Energy / Fatigue" },
  { id: "performance", label: "Sexual Performance" },
  { id: "weight", label: "Weight Loss" },
];

const LOCATION_OPTIONS = [
  { id: "richmond", label: "Richmond" },
  { id: "virginia-beach", label: "Virginia Beach" },
  { id: "newport-news", label: "Newport News" },
];

const TCPA_TEXT =
  "By submitting, you consent to receive calls and texts from Men's Wellness Centers at the number provided. Message & data rates may apply. Reply STOP to opt out.";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function HeroQuizForm() {
  const [step, setStep] = useState(1);
  const [concern, setConcern] = useState("");
  const [locationId, setLocationId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tcpa, setTcpa] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const router = useRouter();
  const { open: openForm } = useFormModal();

  const handleConcernSelect = (id: string) => {
    setConcern(id);
    setStep(2);
  };

  const handleLocationSelect = (id: string) => {
    setLocationId(id);
    setStep(3);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
    setPhoneError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nameOk = name.trim().length >= 3;
    const phoneDigits = phone.replace(/\D/g, "");
    const phoneOk = phoneDigits.length === 10;

    if (!nameOk) setNameError(true);
    if (!phoneOk) setPhoneError(true);
    if (!nameOk || !phoneOk || !tcpa) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/qualify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phoneDigits,
          location: locationId,
          concern,
          source: "cro-hero-quiz",
          utmSource:
            typeof window !== "undefined"
              ? new URLSearchParams(window.location.search).get("utm_source") ??
                undefined
              : undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      const contactId = data?.contactId ?? "";
      router.push(
        `/qualify?location=${encodeURIComponent(locationId)}&phone=${encodeURIComponent(`+1${phoneDigits}`)}&name=${encodeURIComponent(name.trim())}&source=cro-hero-quiz&contactId=${contactId}`
      );
    } catch {
      openForm();
    } finally {
      setSubmitting(false);
    }
  };

  const optionBtnBase: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(255,255,255,0.08)",
    border: "1.5px solid rgba(255,255,255,0.20)",
    borderRadius: 10,
    color: "#FFFFFF",
    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "left" as const,
    transition: "all 180ms ease",
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: "1.5px solid rgba(255,255,255,0.18)",
        borderRadius: 16,
        padding: "28px 24px 24px",
        maxWidth: 416,
        width: "100%",
      }}
    >
      {/* Card heading — Round 6 */}
      <p
        style={{
          fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
          fontSize: 18,
          fontWeight: 700,
          color: "#FFFFFF",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          marginBottom: 4,
          lineHeight: 1.2,
        }}
      >
        Join 10,000+ Virginia Men
      </p>

      {/* Progress bar */}
      <div style={{ display: "flex", gap: 6, marginBottom: 20, marginTop: 6 }}>
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 4,
              background: s <= step ? "#E8670A" : "rgba(255,255,255,0.20)",
              transition: "background 200ms ease",
            }}
          />
        ))}
      </div>

      {/* Step 1: Concern */}
      {step === 1 && (
        <div>
          <p
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              marginBottom: 12,
            }}
          >
            What&rsquo;s your #1 concern?
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {CONCERN_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleConcernSelect(opt.id)}
                style={optionBtnBase}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(232,103,10,0.20)";
                  e.currentTarget.style.borderColor = "#E8670A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Location */}
      {step === 2 && (
        <div>
          <p
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 700,
              color: "rgba(255,255,255,0.85)",
              marginBottom: 12,
            }}
          >
            Which location is closest?
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {LOCATION_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleLocationSelect(opt.id)}
                style={optionBtnBase}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(232,103,10,0.20)";
                  e.currentTarget.style.borderColor = "#E8670A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(1)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.50)",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 12,
              cursor: "pointer",
              marginTop: 12,
              padding: 0,
            }}
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 3: Name + Phone + TCPA */}
      {step === 3 && (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false);
            }}
            style={{
              width: "100%",
              height: 52,
              padding: "0 16px",
              background: "rgba(255,255,255,0.10)",
              border: `1.5px solid ${nameError ? "#EF4444" : "rgba(255,255,255,0.20)"}`,
              borderRadius: 10,
              color: "#FFFFFF",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 15,
              outline: "none",
              boxSizing: "border-box" as const,
            }}
          />

          <input
            type="tel"
            inputMode="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhoneChange}
            style={{
              width: "100%",
              height: 52,
              padding: "0 16px",
              background: "rgba(255,255,255,0.10)",
              border: `1.5px solid ${phoneError ? "#EF4444" : "rgba(255,255,255,0.20)"}`,
              borderRadius: 10,
              color: "#FFFFFF",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 15,
              outline: "none",
              boxSizing: "border-box" as const,
            }}
          />

          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={tcpa}
              onChange={(e) => setTcpa(e.target.checked)}
              style={{ marginTop: 3, flexShrink: 0, accentColor: "#E8670A" }}
            />
            <span
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: 11,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {TCPA_TEXT}
            </span>
          </label>

          {/* Round 4: Price anchor */}
          <p
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 12,
              color: "rgba(255,255,255,0.50)",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Most members invest $199 to $349/month. FSA, HSA, and financing
            available.
          </p>

          <button
            type="submit"
            disabled={submitting || !tcpa}
            style={{
              width: "100%",
              height: 52,
              background:
                submitting || !tcpa ? "rgba(232,103,10,0.45)" : "#E8670A",
              border: "none",
              borderRadius: 9999,
              color: "#FFFFFF",
              fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              textTransform: "uppercase" as const,
              letterSpacing: "0.07em",
              cursor: submitting || !tcpa ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              boxShadow:
                submitting || !tcpa
                  ? "none"
                  : "0 4px 20px rgba(232,103,10,0.45)",
              transition: "all 200ms ease",
            }}
          >
            {submitting ? "Checking..." : "CHECK AVAILABILITY"}
            {!submitting && <ArrowRight size={16} strokeWidth={2.5} />}
          </button>

          <button
            type="button"
            onClick={() => setStep(2)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.50)",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 12,
              cursor: "pointer",
              padding: 0,
              textAlign: "center" as const,
            }}
          >
            ← Back
          </button>
        </form>
      )}
    </div>
  );
}

// ─── Round 5: Dynamic Headline Config ────────────────────────────────────────

const BULLETS_DEFAULT = [
  "Exhausted by noon, no matter how much you sleep.",
  "Gaining weight despite doing everything right.",
  "Low drive or performance changes you didn't used to have.",
  "Your doctor ran labs and said you're fine. You're not fine.",
  "You want answers, not another subscription.",
];

const BULLETS_TRT = [
  "Low energy, brain fog, or mood changes you can't explain.",
  "Losing muscle even when you're working out consistently.",
  "Your GP said your levels are fine. You know they're not.",
  "You want a real testosterone evaluation, not a screening call.",
  "Same-day labs. Walk in today.",
];

const BULLETS_ED = [
  "Performance changes you didn't used to have.",
  "You want answers in-person, not a subscription kit.",
  "A private evaluation with a Virginia-licensed provider.",
  "FDA-approved options reviewed when medically appropriate.",
  "Same-day. In-person. Confidential.",
];

const BULLETS_WL = [
  "Weight that won't move no matter what you try.",
  "Tried diets, apps, and programs — none of them stuck.",
  "A physician-led plan built around your labs, not a template.",
  "Every visit monitored by the same provider.",
  "Real results. Same-day labs. One visit to start.",
];

type HeadlineConfig = { line1: string; line2: string; bullets: string[] };

function getHeadlineConfig(
  searchParams: URLSearchParams,
  pathname: string
): HeadlineConfig {
  const svc = searchParams.get("svc") ?? "";
  const path = pathname.toLowerCase();

  if (svc === "trt" || path.includes("trt")) {
    return {
      line1: "TRT IN VIRGINIA.",
      line2: "SAME-DAY LABS. WALK IN TODAY.",
      bullets: BULLETS_TRT,
    };
  }
  if (svc === "ed" || path.includes("ed")) {
    return {
      line1: "PRIVATE ED EVALUATION.",
      line2: "IN-PERSON. SAME DAY.",
      bullets: BULLETS_ED,
    };
  }
  if (svc === "wl" || path.includes("weight")) {
    return {
      line1: "MEDICAL WEIGHT LOSS",
      line2: "THAT ACTUALLY WORKS.",
      bullets: BULLETS_WL,
    };
  }
  return {
    line1: "YOU\u2019RE NOT JUST \u201cAGING.\u201d",
    line2: "LET\u2019S FIND THE REAL ISSUE.",
    bullets: BULLETS_DEFAULT,
  };
}

// ─── Hero Inner (uses useSearchParams → must be inside Suspense) ─────────────

function CROHeroInner() {
  const searchParams = useSearchParams();
  const { open: openForm } = useFormModal();
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  const config = getHeadlineConfig(searchParams, pathname);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        background: "#0B1029",
        overflow: "hidden",
        padding:
          "clamp(16px, 3vw, 64px) clamp(16px, 4vw, 32px) clamp(32px, 5vw, 80px)",
      }}
    >
      {/* Background portrait */}
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}
      >
        <img
          src="/images/cro/hero-portrait-v3.jpg"
          alt=""
          loading="eager"
          decoding="async"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "55%",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.35,
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,0.8) 30%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,0.8) 30%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #0B1029 40%, transparent 80%)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(16px, 4vw, 48px)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="cro-hero-grid"
      >
        {/* Left: Copy */}
        <div style={{ maxWidth: 600 }}>
          {/* Round 5: dynamic headline */}
          <h1 className="cro-hero-headline">
            {config.line1}
            <br />
            <span style={{ color: "#E8670A" }}>{config.line2}</span>
          </h1>

          {/* Rating */}
          <a
            href="https://www.google.com/maps/search/Men%27s+Wellness+Centers"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 8,
              textDecoration: "none",
              color: "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            <span style={{ display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#C9A961" color="#C9A961" aria-hidden />
              ))}
            </span>
            <span>4.9 · 191 verified Google reviews</span>
          </a>

          {/* Body — hidden mobile */}
          <p className="cro-hero-body">
            They told you it&rsquo;s part of getting older. It&rsquo;s not. Low
            testosterone, ED, and stubborn weight have real, measurable causes.
            This is all we do, and that focus is the difference.
          </p>

          {/* Round 5: dynamic bullets */}
          <ul style={{ listStyle: "none", margin: "12px 0 0", padding: 0 }}>
            {config.bullets.map((text, i) => (
              <li
                key={i}
                className={i >= 3 ? "cro-bullet-desktop" : ""}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.55,
                  marginBottom: 6,
                  color: "#F5F0EB",
                }}
              >
                <ChevronRight
                  size={14}
                  color="#E8670A"
                  style={{ flexShrink: 0, marginTop: 3 }}
                  aria-hidden
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Quiz (desktop) / Bottom-sheet CTA (mobile) — Rounds 1 & 7 */}
        <div className="cro-hero-form-col">
          {/* Desktop: 3-step quiz form */}
          <div className="cro-hero-quiz-desktop">
            <HeroQuizForm />
          </div>

          {/* Round 7: Mobile — stripped hero, single CTA opens modal */}
          <div className="cro-hero-mobile-cta">
            <p
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.75)",
                marginBottom: 12,
                lineHeight: 1.5,
              }}
            >
              TRT. ED. Weight Loss. One provider. Same-day labs.
            </p>
            <a
              href="https://www.google.com/maps/search/Men%27s+Wellness+Centers"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 18,
                textDecoration: "none",
                color: "rgba(255,255,255,0.65)",
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              <span style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    fill="#C9A961"
                    color="#C9A961"
                    aria-hidden
                  />
                ))}
              </span>
              <span>4.9 · 191 reviews</span>
            </a>
            <button
              type="button"
              onClick={openForm}
              className="cro-cta-btn"
              style={{
                width: "100%",
                height: 56,
                background: "#E8670A",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 9999,
                fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                textTransform: "uppercase" as const,
                letterSpacing: "0.07em",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                boxShadow: "0 4px 20px rgba(232,103,10,0.45)",
              }}
            >
              Check My Availability
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Round 6: Hero testimonial (desktop only, below form column) */}
      <div
        className="cro-hero-testimonial"
        style={{
          maxWidth: 1280,
          margin: "20px auto 0",
          display: "flex",
          justifyContent: "flex-end",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: 416,
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <GoogleIcon />
          <span style={{ display: "flex", gap: 2 }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill="#C9A961" color="#C9A961" aria-hidden />
            ))}
          </span>
          <p
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 12,
              color: "rgba(255,255,255,0.70)",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            &ldquo;After one visit I had answers and a plan.&rdquo; &mdash; R.T., 44,
            Richmond
          </p>
        </div>
      </div>

      <style>{`
        .cro-hero-headline {
          font-family: var(--font-oswald), 'Arial Narrow', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.08;
          margin: 0;
          color: #FFFFFF;
          font-size: 26px;
        }
        @media (min-width: 768px) { .cro-hero-headline { font-size: 72px; } }
        @media (min-width: 1024px) { .cro-hero-headline { font-size: 100px; } }

        .cro-hero-body {
          font-family: var(--font-montserrat), system-ui, sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #FFFFFF;
          margin-top: 16px;
          margin-bottom: 16px;
          display: none;
        }
        @media (min-width: 768px) { .cro-hero-body { display: block; } }

        .cro-bullet-desktop { display: none !important; }
        @media (min-width: 768px) { .cro-bullet-desktop { display: flex !important; } }

        @media (min-width: 1024px) {
          .cro-hero-grid { grid-template-columns: 1fr 460px !important; }
        }

        @media (max-width: 767px) {
          .cro-hero-form-col { padding: 0 4px; }
        }

        /* Round 7: mobile hides quiz, shows single CTA */
        .cro-hero-quiz-desktop { display: none; }
        .cro-hero-mobile-cta { display: block; }
        @media (min-width: 768px) {
          .cro-hero-quiz-desktop { display: block; }
          .cro-hero-mobile-cta { display: none; }
        }

        /* Round 6: testimonial desktop-only */
        .cro-hero-testimonial { display: none; }
        @media (min-width: 1024px) { .cro-hero-testimonial { display: flex; } }
      `}</style>
    </section>
  );
}

function CROHero() {
  return (
    <Suspense fallback={<div style={{ minHeight: 600, background: "#0B1029" }} />}>
      <CROHeroInner />
    </Suspense>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function CROHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { open: openForm } = useFormModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(24px, 4vw, 32px)",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease",
          background: scrolled
            ? "rgba(11,16,41,0.95)"
            : "rgba(11,16,41,0.6)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img
            src="/logos/Text_Logo_white.webp"
            alt="Men's Wellness Centers"
            style={{ width: 160, height: "auto" }}
          />
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="tel:+18663444955"
            aria-label="Call 866-344-4955"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            <span
              className="header-phone-icon"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#E8670A",
                flexShrink: 0,
              }}
            >
              <Phone size={18} color="#FFFFFF" />
            </span>
            <span className="header-phone-text">866-344-4955</span>
          </a>

          <div className="header-cta-wrap">
            {/* Round 3: BOOK VISIT → CHECK AVAILABILITY */}
            <button
              type="button"
              onClick={openForm}
              style={{
                padding: "0 24px",
                height: 40,
                background: "#E8670A",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 9999,
                fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(232,103,10,0.35)",
              }}
            >
              CHECK AVAILABILITY
            </button>
          </div>
        </div>
      </header>

      <div style={{ height: 64 }} aria-hidden />

      <style>{`
        .header-phone-text { display: none; }
        .header-cta-wrap { display: none; }
        @media (min-width: 768px) {
          .header-phone-text { display: inline; }
          .header-cta-wrap { display: block; }
          .header-phone-icon { display: none !important; }
        }
      `}</style>
    </>
  );
}

// ─── Credibility Band ────────────────────────────────────────────────────────

function CROCredibilityBand() {
  const stats = [
    { value: "10,000+", label: "Virginia Members" },
    { value: "3", label: "Virginia Centers" },
    {
      value: "4.9★",
      label: "Google Rating, 191 Verified Reviews",
      href: "https://www.google.com/maps/search/Men%27s+Wellness+Centers",
    },
    { value: "Same-Day", label: "Lab Results, Same Visit" },
  ];

  return (
    <section style={{ background: "#0A1628", padding: "48px clamp(16px, 4vw, 32px) 40px" }}>
      <div
        className="cro-cred-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px 16px",
          textAlign: "center",
        }}
      >
        {stats.map((stat, i) => {
          const inner = (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(26px, 4vw, 44px)",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: 11,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.10em",
                  color: "rgba(255,255,255,0.70)",
                  marginTop: 6,
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          );
          if (stat.href) {
            return (
              <a
                key={i}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {inner}
              </a>
            );
          }
          return inner;
        })}
      </div>

      {/* Round 4: Price anchor after insurance line */}
      <div
        style={{
          maxWidth: 1280,
          margin: "32px auto 0",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 20,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#9CA3AF",
            margin: "0 0 8px",
          }}
        >
          FSA, HSA &amp; FINANCING ACCEPTED. WE DO NOT BILL INSURANCE.
        </p>
        <p
          style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            fontSize: 12,
            color: "rgba(255,255,255,0.50)",
            margin: 0,
            lineHeight: 1.4,
          }}
        >
          Most members invest $199 to $349/month. FSA, HSA, and financing
          available.
        </p>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .cro-cred-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    image: "/images/man-gym-confident.webp",
    imageAlt: "Confident, energized man after testosterone therapy",
    imagePosition: "center 30%",
    name: "TESTOSTERONE THERAPY",
    subhead: "Get your energy, drive, and edge back.",
    body: "A Virginia-licensed provider reads your bloodwork on-site and builds a plan around your numbers.",
  },
  {
    image: "/images/couple-wellness.webp",
    imageAlt: "Couple relaxing together after addressing sexual health concerns",
    imagePosition: "center 40%",
    name: "MEN'S SEXUAL HEALTH",
    subhead: "Perform with confidence again.",
    body: "An in-person evaluation with a Virginia-licensed provider, same-day, with FDA-approved options reviewed when medically appropriate.",
  },
  {
    image: "/images/cro/hero-runner.jpg",
    imageAlt: "Active man running outdoors after medical weight loss",
    imagePosition: "center 25%",
    name: "MEDICAL WEIGHT LOSS",
    subhead: "Drop the weight that won't budge.",
    body: "Physician-led, lab-guided weight loss monitored at every visit, not a call-center intake.",
  },
];

function CROServices({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section
      id="services"
      style={{ background: "#F9F8F6", padding: "clamp(48px, 8vw, 96px) 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.1,
            color: "#0B1029",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          THIS IS ALL <span style={{ color: "#E8670A" }}>WE DO.</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            fontSize: 15,
            color: "#374151",
            lineHeight: 1.5,
            textAlign: "center",
            maxWidth: 540,
            margin: "0 auto 40px",
          }}
        >
          Three services. One focus. Every provider, every visit, every protocol
          built around men&apos;s health.
        </p>

        <div className="cro-services-grid">
          {SERVICES.map((svc) => (
            <div
              key={svc.name}
              style={{
                background: "#FFFFFF",
                borderRadius: 12,
                border: "1px solid rgba(11,16,41,0.10)",
                boxShadow: "0 4px 16px rgba(11,16,41,0.08)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ padding: "16px 20px", background: "#0B1029" }}>
                <h3 className="cro-service-name" style={{ color: "#FFFFFF" }}>
                  {svc.name}
                </h3>
              </div>

              <div className="cro-service-photo">
                <img
                  src={svc.image}
                  alt={svc.imageAlt}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: svc.imagePosition ?? "center 25%",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "16px 16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#E8670A",
                    lineHeight: 1.25,
                    marginBottom: 8,
                  }}
                >
                  {svc.subhead}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: 14,
                    color: "#374151",
                    lineHeight: 1.55,
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  {svc.body}
                </p>
                {/* Round 3: CTA → CHECK AVAILABILITY */}
                <div className="cro-service-cta">
                  <CTAButton onClick={onBookClick} fullWidth size="sm">
                    CHECK AVAILABILITY
                  </CTAButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cro-services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .cro-services-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
        }
        .cro-service-name {
          font-family: var(--font-oswald), 'Arial Narrow', sans-serif;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          line-height: 1.1;
          margin: 0;
          font-size: 22px;
        }
        @media (min-width: 1024px) { .cro-service-name { font-size: 26px; } }
        .cro-service-photo { height: 120px; position: relative; overflow: hidden; }
        @media (min-width: 768px) { .cro-service-photo { height: 170px; } }
        .cro-service-cta { display: none; }
        @media (min-width: 768px) { .cro-service-cta { display: block; } }
      `}</style>
    </section>
  );
}

// ─── How It Works ────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: 1,
    label: "First",
    title: "Book Online in Under 5 Minutes",
    description:
      "Pick the location and time that works for you. No referral, no phone tag.",
    isLast: false,
  },
  {
    number: 2,
    label: "Then",
    title: "Your Provider Reviews Every Number With You",
    description:
      "A licensed provider who specializes in men's health sits with you, goes over your labs, and tells you exactly what's driving your symptoms.",
    isLast: false,
  },
  {
    number: 3,
    label: "Finally",
    title: "Walk Out With Your Protocol Locked In",
    description:
      "A care plan built around your labs and your goals. Most members start treatment the same visit.",
    isLast: true,
  },
];

function CROHowItWorks({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section
      id="how-it-works"
      style={{ background: "#F9F8F6", padding: "clamp(48px, 8vw, 96px) 24px" }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#E8670A",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          THE PROCESS
        </p>
        <h2
          style={{
            fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.05,
            color: "#0B1029",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          HERE&rsquo;S HOW IT WORKS IN ONE VISIT
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 48 }}>
          {STEPS.map((step) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                background: "#FFFFFF",
                borderRadius: 12,
                border: "1px solid rgba(11,16,41,0.10)",
                boxShadow: "0 4px 12px rgba(11,16,41,0.06)",
                padding: "28px 32px",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  minWidth: 48,
                  borderRadius: "50%",
                  background: step.isLast ? "#E8670A" : "#0B1029",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  boxShadow: step.isLast
                    ? "0 0 0 4px rgba(232,103,10,0.20), 0 8px 24px rgba(232,103,10,0.30)"
                    : "none",
                }}
              >
                {step.number}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#E8670A",
                    marginBottom: 4,
                  }}
                >
                  {step.label}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: "#0B1029",
                    marginBottom: 6,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: 15,
                    color: "#374151",
                    lineHeight: 1.65,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          {/* Round 3: CTA text */}
          <CTAButton onClick={onBookClick} size="lg">
            CHECK AVAILABILITY
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

// ─── Manifesto ────────────────────────────────────────────────────────────────

function CROManifesto({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section
      style={{
        background: "#F9F8F6",
        padding: "clamp(48px, 8vw, 96px) 24px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 48,
          alignItems: "center",
        }}
        className="manifesto-grid"
      >
        <div className="manifesto-image-order">
          <img
            src="/images/photos/member-richmond.jpg"
            alt="Men's Wellness Centers member, Richmond Virginia"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 12,
              objectFit: "cover",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        <div>
          <p
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#E8670A",
              marginBottom: 12,
            }}
          >
            WHY MEN CHOOSE US
          </p>

          <h2
            style={{
              fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 700,
              textTransform: "uppercase",
              lineHeight: 1.05,
              color: "#0B1029",
              marginBottom: 24,
            }}
          >
            Your labs might be normal.
            <br />
            You still don&rsquo;t feel right.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 15,
              color: "#374151",
              lineHeight: 1.7,
              marginBottom: 16,
              maxWidth: 580,
            }}
          >
            Most men wait two years before saying something out loud. They get
            bloodwork. Their GP says everything looks fine. They go home. Nothing
            changes.
          </p>
          <p
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 15,
              color: "#374151",
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 580,
            }}
          >
            We specialize in men&rsquo;s health. One licensed provider, your labs,
            and a real conversation. Not a coordinator reading from a tablet. If
            treatment is right for you, you leave with a plan the same day.
          </p>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(11,16,41,0.10)",
              borderRadius: 12,
              boxShadow: "0 4px 16px rgba(11,16,41,0.06)",
              padding: 32,
              marginBottom: 28,
            }}
          >
            <Quote
              size={20}
              color="#E8670A"
              strokeWidth={2}
              aria-hidden
              style={{ marginBottom: 12, opacity: 0.7 }}
            />
            <p
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: 15,
                color: "#374151",
                fontStyle: "italic",
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              &ldquo;Saw two GPs who told me my levels were fine. I knew they
              weren&rsquo;t. Three weeks after starting treatment I was sleeping
              through the night again. The difference in energy over the next few
              months was something no standard lab panel ever captured.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "#0B1029",
                marginBottom: 4,
              }}
            >
              James T., 48, Norfolk
            </p>
            <p
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "0.75rem",
                color: "#6B7280",
              }}
            >
              Verified member. Individual results vary.
            </p>
          </div>

          {/* Round 3: CTA text */}
          <CTAButton onClick={onBookClick} size="lg">
            CHECK AVAILABILITY
          </CTAButton>
          <p
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "0.75rem",
              color: "#6B7280",
              marginTop: 12,
            }}
          >
            No-obligation in-person visit. Individual results vary.
          </p>
        </div>
      </div>

      <style>{`
        .manifesto-image-order { order: 1; }
        @media (min-width: 1024px) {
          .manifesto-grid { grid-template-columns: 1fr 1fr !important; }
          .manifesto-image-order { order: 2; }
        }
      `}</style>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const GBP_URL =
  "https://www.google.com/maps/search/?api=1&query=Men%27s+Wellness+Centers+Glen+Allen+VA";

const TESTIMONIALS = [
  {
    pullQuote: "After one visit I had answers and a plan.",
    quote:
      "I've been to two GPs who told me my levels were fine. After one visit here I had answers and a plan. Game-changer.",
    name: "R.T.",
    age: 44,
    initials: "RT",
    location: "Richmond",
    service: "TRT",
  },
  {
    pullQuote: "The energy difference was remarkable.",
    quote:
      "Three weeks after starting treatment I was sleeping through the night again. The energy difference over the next few months was remarkable.",
    name: "James T.",
    age: 48,
    initials: "JT",
    location: "Norfolk",
    service: "TRT",
  },
  {
    pullQuote: "They explained what was driving each symptom.",
    quote:
      "They didn't just throw a prescription at me. They actually looked at my numbers and explained what was driving each symptom.",
    name: "Michael C.",
    age: 52,
    initials: "MC",
    location: "Virginia Beach",
    service: "ED",
  },
];

function CROTestimonialsPlaceholder() {
  return (
    <section style={{ background: "#0B1029", padding: "clamp(48px, 8vw, 96px) 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <GoogleIcon />
            <span
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              4.9
            </span>
            <span style={{ display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} fill="#FBBC05" color="#FBBC05" aria-hidden />
              ))}
            </span>
            <span
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              191 reviews
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              textTransform: "uppercase",
              lineHeight: 1.05,
              color: "#FFFFFF",
            }}
          >
            WHAT OUR MEMBERS SAY
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: 16,
                padding: "28px 28px 24px",
                boxShadow:
                  "0 0 40px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.25)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                display: "flex",
                flexDirection: "column" as const,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <GoogleIcon />
                  <span style={{ display: "flex", gap: 2 }}>
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} fill="#FBBC05" color="#FBBC05" aria-hidden />
                    ))}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#E8670A",
                    background: "rgba(232,103,10,0.12)",
                    padding: "4px 10px",
                    borderRadius: 20,
                  }}
                >
                  {t.service}
                </span>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.25,
                  marginBottom: 12,
                }}
              >
                &ldquo;{t.pullQuote}&rdquo;
              </p>

              <p
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.70)",
                  lineHeight: 1.65,
                  marginBottom: 20,
                  flex: 1,
                }}
              >
                {t.quote}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#0B1029",
                    border: "2px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#E8670A",
                    letterSpacing: "0.03em",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: 0,
                    }}
                  >
                    {t.name}, {t.age}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontSize: 11,
                      color: "#9CA3AF",
                      margin: 0,
                    }}
                  >
                    {t.location} · Verified Google review
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a
            href={GBP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(255,255,255,0.70)",
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.12)",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.70)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <GoogleIcon />
            Read all 191 reviews on Google
            <ArrowRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Everything Included ──────────────────────────────────────────────────────

function CROEverythingIncluded() {
  const included = [
    "Same-day in-person evaluation",
    "On-site lab draw & same-visit results",
    "Provider who specializes in men's health",
    "Customized treatment protocol",
    "Ongoing monitoring & adjustments",
    "FSA & HSA accepted",
  ];

  const notIncluded = [
    "Insurance billing",
    "Referral requirements",
    "Long wait times",
    "Template protocols",
    "Phone-only consultations",
    "Hidden fees",
  ];

  return (
    <section
      style={{ background: "#F9F8F6", padding: "clamp(48px, 8vw, 96px) 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#E8670A",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          YOUR FIRST VISIT
        </p>
        <h2
          style={{
            fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.05,
            color: "#0B1029",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          EVERYTHING INCLUDED. NO SURPRISES.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            maxWidth: 800,
            margin: "0 auto",
          }}
          className="included-grid"
        >
          {/* Included */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(11,16,41,0.10)",
              borderRadius: 12,
              padding: 32,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: "#0B1029",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              ✓ What&rsquo;s Included
            </h3>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {included.map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                >
                  <span style={{ color: "#E8670A", fontWeight: 700, flexShrink: 0 }}>
                    ✓
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontSize: 14,
                      color: "#374151",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {/* Round 4: price anchor on light bg */}
            <p
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: 12,
                color: "#6B7280",
                marginTop: 16,
                lineHeight: 1.4,
              }}
            >
              Most members invest $199 to $349/month. FSA, HSA, and financing
              available.
            </p>
          </div>

          {/* Not Included */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(11,16,41,0.10)",
              borderRadius: 12,
              padding: 32,
              opacity: 0.7,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: "#6B7280",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              ✗ Not Here
            </h3>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {notIncluded.map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                >
                  <span style={{ color: "#9CA3AF", fontWeight: 700, flexShrink: 0 }}>
                    ✗
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontSize: 14,
                      color: "#6B7280",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Locations ────────────────────────────────────────────────────────────────

const LOCATIONS_DATA = [
  {
    city: "Richmond",
    region: "Richmond Area",
    address: "4050 Innslake Dr, Suite 360",
    cityStateZip: "Richmond, VA 23060",
    phone: "(804) 346-4636",
    tel: "tel:8043464636",
    driveTime: "5 min from I-64",
  },
  {
    city: "Virginia Beach",
    region: "Coastal Virginia",
    address: "996 First Colonial Road",
    cityStateZip: "Virginia Beach, VA 23454",
    phone: "(757) 612-4428",
    tel: "tel:7576124428",
    driveTime: "5 min from I-264",
  },
  {
    city: "Newport News",
    region: "Peninsula",
    address: "827 Diligence Drive, Suite 206",
    cityStateZip: "Newport News, VA 23606",
    phone: "(757) 806-6263",
    tel: "tel:7578066263",
    driveTime: "3 min from I-64, Exit 258A",
  },
];

function CROLocations() {
  const { open: openForm } = useFormModal();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (city: string) => {
    setSelected(city);
    openForm();
  };

  return (
    <section
      id="locations"
      style={{ background: "#F9F8F6", padding: "clamp(48px, 8vw, 96px) 24px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#E8670A",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          3 VIRGINIA CENTERS
        </p>
        <h2
          style={{
            fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.05,
            color: "#0B1029",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          PICK YOUR LOCATION
        </h2>

        <div
          style={{
            display: "grid",
            gap: 20,
          }}
          className="loc-grid"
        >
          {LOCATIONS_DATA.map((loc) => {
            const isSelected = selected === loc.city;
            return (
              <div
                key={loc.city}
                onClick={() => handleSelect(loc.city)}
                style={{
                  background: isSelected ? "#0B1029" : "#FFFFFF",
                  borderRadius: 12,
                  border: isSelected
                    ? "2px solid #E8670A"
                    : "1px solid rgba(11,16,41,0.12)",
                  boxShadow: isSelected
                    ? "0 4px 20px rgba(232,103,10,0.15)"
                    : "0 1px 4px rgba(0,0,0,0.06)",
                  padding: "clamp(24px, 3vw, 32px)",
                  cursor: "pointer",
                  position: "relative",
                  transition: "background 0.25s, border-color 0.25s",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {isSelected && (
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      right: 16,
                      background: "#E8670A",
                      color: "#FFFFFF",
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      padding: "3px 10px",
                      borderRadius: 6,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    ✓ Selected
                  </div>
                )}

                <p
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: isSelected ? "#E8670A" : "#9CA3AF",
                    margin: 0,
                  }}
                >
                  {loc.region}
                </p>

                <h3
                  style={{
                    fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: isSelected ? "#FFFFFF" : "#0B1029",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  {loc.city}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: 13,
                    color: isSelected ? "rgba(255,255,255,0.65)" : "#9CA3AF",
                  }}
                >
                  <MapPin size={14} aria-hidden />
                  {loc.driveTime}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: 14,
                    color: isSelected ? "rgba(255,255,255,0.75)" : "#374151",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {loc.address}
                  <br />
                  {loc.cityStateZip}
                </p>

                <div
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: 14,
                    color: isSelected ? "#F5F0EB" : "#0B1029",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Phone size={14} aria-hidden />
                  <a
                    href={loc.tel}
                    onClick={(e) => e.stopPropagation()}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {loc.phone}
                  </a>
                </div>

                <div style={{ marginTop: 8 }}>
                  <CTAButton
                    onClick={() => handleSelect(loc.city)}
                    fullWidth
                  >
                    {isSelected ? "CONFIRMED — SCROLL TO BOOK" : "BOOK YOUR 60-MINUTE VISIT"}
                  </CTAButton>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    fontSize: 12,
                    color: isSelected ? "rgba(255,255,255,0.45)" : "#9CA3AF",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  60-minute in-person visit. No cost, no obligation.
                </p>
              </div>
            );
          })}
        </div>

        <p
          style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            fontSize: 14,
            color: "#6B7280",
            textAlign: "center",
            marginTop: 32,
          }}
        >
          Not sure? Any center can run your labs the same day.
        </p>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "Does insurance cover this?",
    a: "Your first visit is at no cost, including labs and the provider review. We don't bill insurance, but we accept FSA and HSA cards. Most men find the straightforward pricing easier than navigating insurance approvals.",
  },
  {
    q: "What does treatment typically involve?",
    a: "Treatment plans are personalized based on your labs and symptoms. Common options include clinician-prescribed hormone therapy administered through several delivery methods. Your provider will review the options that fit your situation at your appointment.",
  },
  {
    q: "Is testosterone replacement therapy safe?",
    a: "TRT is FDA-approved when prescribed and monitored by a licensed provider for men with clinically diagnosed low testosterone. Like any prescription treatment, it has potential side effects, which your provider will review with you. Ongoing lab monitoring is part of every care plan.",
  },
  {
    q: "How is this different from online or mail-order TRT services?",
    a: "We're in-person only. You see the same licensed provider at the same center, labs are drawn on-site and reviewed that day, and your provider knows your full case. No mail-order chatbots, no remote sign-offs, no waiting on shipping.",
  },
  {
    q: "How do I know if testosterone treatment is right for me?",
    a: "A diagnosis of low testosterone requires lab work and a clinical evaluation. At your first visit, we run a full hormone lab panel and review your symptoms. Treatment is only prescribed when clinically appropriate.",
  },
  {
    q: "What should I expect at my first visit?",
    a: "Plan for 60 minutes. Your labs are drawn on-site: a full hormone panel. Your Virginia provider then reviews every result with you in the same visit, explains what they mean in plain language, and if treatment is appropriate, you leave with a protocol that day. No-cost visit. No obligation to proceed.",
  },
  {
    q: "How soon do members typically notice changes?",
    a: "Many members report initial changes in energy and mood within the first few weeks, with broader symptom improvements over 2 to 3 months. Individual results vary based on baseline labs, adherence, and individual health factors.",
  },
  {
    q: "Is this completely private?",
    a: "Yes, completely private. We do not bill insurance, so there are no insurance claims and nothing appears on your EOB or employer health records. Your visit, your labs, and your treatment plan stay between you and your provider. We are HIPAA-compliant.",
  },
];

function CROFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const { open: openForm } = useFormModal();

  return (
    <section
      id="faq"
      style={{ background: "#0B1029", padding: "clamp(48px, 8vw, 96px) 24px" }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#E8670A",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          COMMON QUESTIONS
        </p>
        <h2
          style={{
            fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.1,
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 12,
                  border: "1px solid rgba(11,16,41,0.12)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#0B1029",
                      lineHeight: 1.35,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      color: "#E8670A",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <ChevronDown size={22} strokeWidth={2} />
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 500 : 0,
                    overflow: "hidden",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 300ms ease, opacity 250ms ease",
                  }}
                  aria-hidden={!isOpen}
                >
                  <div
                    style={{
                      padding: "0 24px 20px",
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "#374151",
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <CTAButton onClick={openForm}>
            CHECK AVAILABILITY
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function CROFinalCTA() {
  const { open: openForm } = useFormModal();

  return (
    <section
      style={{ background: "#F9F8F6", padding: "clamp(48px, 8vw, 96px) 24px" }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          background: "#0B1029",
          borderRadius: 16,
          padding: "clamp(48px, 8vw, 80px) clamp(24px, 5vw, 64px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.05,
              textTransform: "uppercase",
              color: "#FFFFFF",
              margin: "0 0 20px",
            }}
          >
            READY TO
            <br />
            <span style={{ color: "#E8670A" }}>FEEL THE DIFFERENCE?</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 16,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 560,
              margin: "0 auto 36px",
            }}
          >
            No-cost 60-minute in-person visit. Same-day labs. No insurance
            needed. FSA &amp; HSA accepted.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <CTAButton onClick={openForm} size="lg">
              CHECK AVAILABILITY
            </CTAButton>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                onClick={() => (window.location.href = "tel:+18663444955")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 20px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <Phone size={16} strokeWidth={2} />
                Call
              </button>
              <button
                type="button"
                onClick={() =>
                  (window.location.href =
                    "sms:+18663444955?body=Hi%2C%20I%27d%20like%20to%20book%20a%20visit.")
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 20px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 8,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <MessageCircle size={16} strokeWidth={2} />
                Text
              </button>
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.50)",
              marginTop: 28,
              letterSpacing: "0.02em",
            }}
          >
            3 Virginia locations &middot; HIPAA compliant &middot; LegitScript
            certified
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────

const DISCLAIMERS = [
  "Treatment requires a clinical evaluation and is provided only when medically appropriate.",
  "Individual results vary. Treatment is provided by licensed providers at Men's Wellness Centers.",
  "The information presented on this website is for general informational purposes only and is not intended to constitute medical advice, diagnosis, or treatment.",
  "Men's Wellness Centers provides care through in-center visits at its Virginia locations. All lab work, evaluations, and treatments are conducted on-site by licensed providers.",
  "Testimonials and reviews reflect individual experiences only and are not intended to represent typical outcomes or make medical claims.",
];

function CROFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0B1029",
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
      }}
    >
      <div style={{ padding: "48px 24px 0", maxWidth: 1200, margin: "0 auto" }}>
        {/* Contact */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            marginBottom: 40,
          }}
          className="footer-grid"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#FFFFFF",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Men&rsquo;s Wellness Centers
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                marginTop: 12,
                lineHeight: 1.5,
              }}
            >
              &copy; {year} Men&rsquo;s Wellness Centers.
              <br />
              All rights reserved.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 16,
              }}
            >
              Contact
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {LOCATIONS_DATA.map((loc) => (
                <a
                  key={loc.city}
                  href={loc.tel}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    fontSize: 14,
                    lineHeight: 1.5,
                  }}
                >
                  <Phone
                    size={14}
                    strokeWidth={2}
                    style={{ color: "#E8670A", flexShrink: 0 }}
                  />
                  <span style={{ fontWeight: 600 }}>{loc.city}:</span>{" "}
                  {loc.phone}
                </a>
              ))}
              <a
                href="mailto:info@menswellnesscenters.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontSize: 14,
                  marginTop: 4,
                }}
              >
                <Mail
                  size={14}
                  strokeWidth={2}
                  style={{ color: "#E8670A", flexShrink: 0 }}
                />
                info@menswellnesscenters.com
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            marginTop: 32,
            paddingTop: 24,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {DISCLAIMERS.map((text, i) => (
            <p
              key={i}
              style={{
                fontSize: 11,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.50)",
                margin: 0,
                overflowWrap: "break-word",
              }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            marginTop: 24,
            paddingTop: 16,
            paddingBottom: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.50)",
          }}
        >
          <span>&copy; {year} Men&rsquo;s Wellness Centers</span>
          <a
            href="https://menswellnesscenters.com/privacy-practices/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.50)", textDecoration: "none" }}
          >
            Privacy Policy
          </a>
          <a
            href="https://menswellnesscenters.com/privacy-practices/#hipaa"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.50)", textDecoration: "none" }}
          >
            HIPAA Notice
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Sticky Mobile CTA ────────────────────────────────────────────────────────

function CROStickyMobileCTA() {
  const { open: openForm } = useFormModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const heroForm = document.getElementById("hero-form");
      const pastThreshold = window.scrollY > 700;

      let formInView = false;
      if (heroForm) {
        const rect = heroForm.getBoundingClientRect();
        formInView = rect.top < window.innerHeight && rect.bottom > 0;
      }

      setVisible(pastThreshold && !formInView);
    };

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });
    check();
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div
      className="sticky-mobile-cta"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "rgba(11,16,41,0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "12px 16px",
        paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 300ms ease",
      }}
    >
      <button
        type="button"
        onClick={openForm}
        style={{
          width: "100%",
          height: 56,
          background: "#E8670A",
          color: "#FFFFFF",
          border: "none",
          borderRadius: 0,
          fontFamily: "var(--font-oswald), sans-serif",
          fontSize: 15,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        CHECK AVAILABILITY →
      </button>
      <p
        style={{
          textAlign: "center",
          fontFamily: "var(--font-montserrat), sans-serif",
          fontSize: 11,
          color: "#9CA3AF",
          margin: "6px 0 0",
          letterSpacing: "0.02em",
        }}
      >
        60-minute in-person visit · Men&rsquo;s Wellness Centers
      </p>
    </div>
  );
}

// ─── Desktop Sticky Bar ───────────────────────────────────────────────────────

function CRODesktopStickyBar() {
  const [visible, setVisible] = useState(false);
  const { open: openForm } = useFormModal();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="desktop-sticky-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        height: 64,
        background: "#0B1029",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.40)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 300ms ease",
      }}
      aria-hidden={!visible}
    >
      <span
        style={{
          fontFamily: "var(--font-montserrat), system-ui, sans-serif",
          fontWeight: 700,
          color: "#FFFFFF",
          fontSize: 14,
        }}
      >
        Virginia&rsquo;s #1 Men&rsquo;s Health Center
        <span style={{ margin: "0 12px", color: "#E8670A" }}>&middot;</span>
        Same-Day Availability
      </span>
      <button
        type="button"
        onClick={openForm}
        style={{
          padding: "0 28px",
          height: 44,
          background: "#E8670A",
          color: "#FFFFFF",
          border: "none",
          borderRadius: 9999,
          fontFamily: "var(--font-oswald), sans-serif",
          fontSize: 14,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(232,103,10,0.35)",
        }}
      >
        Claim My Visit
      </button>
    </div>
  );
}

// ─── Page Composition ─────────────────────────────────────────────────────────

export function CROPage() {
  const { open: openForm } = useFormModal();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <CROHeader />
      <main style={{ flex: 1 }}>
        <CROHero />
        <CROCredibilityBand />
        <CROServices onBookClick={openForm} />
        <CROHowItWorks onBookClick={openForm} />
        <CROManifesto onBookClick={openForm} />
        <CROTestimonialsPlaceholder />
        <CROEverythingIncluded />
        <CROLocations />
        <CROFaq />
        <CROFinalCTA />
      </main>
      <CROFooter />
      <CROStickyMobileCTA />
      <CRODesktopStickyBar />

      {/* Responsive styles */}
      <style>{`
        .included-grid {
          grid-template-columns: 1fr 1fr;
        }
        .loc-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .footer-grid {
          grid-template-columns: 1fr 1fr;
        }
        .sticky-mobile-cta {
          display: block;
        }
        .desktop-sticky-bar {
          display: flex;
        }
        @media (max-width: 767px) {
          .included-grid {
            grid-template-columns: 1fr !important;
          }
          .loc-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .desktop-sticky-bar {
            display: none !important;
          }
        }
        @media (min-width: 768px) {
          .sticky-mobile-cta {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}