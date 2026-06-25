"use client";

/**
 * CROPage — Full CRO landing page matching book.menswellnesscenters.com
 * All colors hardcoded (no CSS custom properties).
 * Orange: #E8670A | Navy: #0B1029 | White: #FFFFFF | Cream: #F5F0EB
 * Body text on light: #374151 | Muted gray: #6B7280
 * Font display: 'Oswald', 'Arial Narrow', sans-serif
 * Font body: 'Montserrat', system-ui, sans-serif
 */

import { useState, useEffect } from "react";
import {
  ChevronRight,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Quote,
} from "lucide-react";
import { LeadForm } from "./LeadForm";

// ─── Hero Section ────────────────────────────────────────────────────────────

const SYMPTOM_BULLETS = [
  "Exhausted by noon, no matter how much you sleep.",
  "Gaining weight despite doing everything right.",
  "Low drive or performance changes you didn't used to have.",
  "Your doctor ran labs and said you're fine. You're not fine.",
  "You want answers, not another subscription.",
];

function CROHero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        background: "#0B1029",
        overflow: "hidden",
        padding: "clamp(16px, 3vw, 64px) clamp(16px, 4vw, 32px) clamp(32px, 5vw, 80px)",
      }}
    >
      {/* Hero background portrait */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
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
            maskImage: "linear-gradient(to left, rgba(0,0,0,0.8) 30%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.8) 30%, transparent 100%)",
          }}
        />
        {/* Gradient overlay left side */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #0B1029 40%, transparent 80%)",
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
        {/* Left column: Copy */}
        <div style={{ maxWidth: 600 }}>
          <h1 className="cro-hero-headline">
            YOU&rsquo;RE NOT JUST &ldquo;AGING.&rdquo;
            <br />
            <span style={{ color: "#E8670A" }}>LET&rsquo;S FIND THE REAL ISSUE.</span>
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
              fontFamily: "'Montserrat', system-ui, sans-serif",
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

          {/* Body paragraph — hidden on mobile */}
          <p className="cro-hero-body">
            They told you it&rsquo;s part of getting older. It&rsquo;s not. Low testosterone, ED, and stubborn weight have real, measurable causes. This is all we do, and that focus is the difference.
          </p>

          {/* Symptom bullets */}
          <ul style={{ listStyle: "none", margin: "12px 0 0", padding: 0 }}>
            {SYMPTOM_BULLETS.map((text, i) => (
              <li
                key={i}
                className={i >= 3 ? "cro-bullet-desktop" : ""}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  fontFamily: "'Montserrat', system-ui, sans-serif",
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

        {/* Right column: Form */}
        <div className="cro-hero-form-col">
          <LeadForm variant="cro" formId="hero-cro" source="cro-homepage-hero" />
        </div>
      </div>

      <style>{`
        .cro-hero-headline {
          font-family: 'Oswald', 'Arial Narrow', sans-serif;
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
          font-family: 'Montserrat', system-ui, sans-serif;
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
          .cro-hero-grid {
            grid-template-columns: 1fr 460px !important;
          }
        }

        @media (max-width: 767px) {
          .cro-hero-form-col { padding: 0 4px; }
        }
      `}</style>
    </section>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function CROHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
  };

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
          background: scrolled ? "rgba(11,16,41,0.95)" : "rgba(11,16,41,0.6)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img
            src="/logos/Text_Logo_white.webp"
            alt="Men's Wellness Centers"
            style={{ width: 160, height: "auto" }}
          />
        </a>

        {/* Right: phone + CTA */}
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
              fontFamily: "'Montserrat', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            {/* Mobile: orange circle icon */}
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
            {/* Desktop: number text */}
            <span className="header-phone-text">866-344-4955</span>
          </a>

          {/* CTA — desktop only */}
          <div className="header-cta-wrap">
            <button
              type="button"
              onClick={scrollToForm}
              style={{
                padding: "0 24px",
                height: 40,
                background: "#E8670A",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 9999,
                fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(232,103,10,0.35)",
              }}
            >
              BOOK VISIT
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
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
    { value: "4.9★", label: "Google Rating, 191 Verified Reviews", href: "https://www.google.com/maps/search/Men%27s+Wellness+Centers" },
    { value: "Same-Day", label: "Lab Results, Same Visit" },
  ];

  return (
    <section
      style={{
        background: "#0A1628",
        padding: "48px clamp(16px, 4vw, 32px) 40px",
      }}
    >
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
                  fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
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
                  fontFamily: "'Montserrat', system-ui, sans-serif",
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
              <a key={i} href={stat.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                {inner}
              </a>
            );
          }
          return inner;
        })}
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "32px auto 0",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 20,
          textAlign: "center",
          fontFamily: "'Montserrat', system-ui, sans-serif",
          fontSize: 12,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#9CA3AF",
        }}
      >
        FSA, HSA &amp; FINANCING ACCEPTED. WE DO NOT BILL INSURANCE.
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
    image: "/images/cro/hero-trt-v5.jpg",
    imageAlt: "Man focused on reclaiming his energy through testosterone therapy",
    eyebrow: "MEN'S HORMONE HEALTH",
    headline: "Your labs, reviewed by your provider.",
    body: "A Virginia-licensed provider reviews your bloodwork on-site and builds a protocol around your numbers. Seen this week. No referrals. No template protocols.",
  },
  {
    image: "/images/cro/hero-ed-v2.jpg",
    imageAlt: "Man sitting on bed, contemplating erectile challenges",
    eyebrow: "MEN'S SEXUAL HEALTH",
    headline: "In-person evaluation. Clinical answers.",
    body: "Erectile challenges have a physiological cause and a medical solution. An in-person evaluation with a Virginia-licensed provider, same-day, with FDA-approved options reviewed on site.",
  },
  {
    image: "/images/cro/hero-wl-v3.jpg",
    imageAlt: "GLP-1 injection for medical weight loss",
    eyebrow: "MEDICAL WEIGHT LOSS",
    headline: "Lab-guided protocol. Ongoing care.",
    body: "GLP-1 therapy prescribed and monitored by a Virginia provider, not a call-center intake. Labs reviewed at every visit. One provider, one plan, adjusted as you progress.",
  },
];

function CROServices({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section
      id="services"
      style={{
        background: "#F9F8F6",
        padding: "clamp(48px, 8vw, 96px) 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "'Montserrat', system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#E8670A",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          INTEGRATED CARE
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.05,
            color: "#0B1029",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          ONE PROVIDER. THREE CONCERNS.
        </h2>

        {/* Subhead */}
        <p
          style={{
            fontFamily: "'Montserrat', system-ui, sans-serif",
            fontSize: 16,
            color: "#374151",
            lineHeight: 1.6,
            textAlign: "center",
            maxWidth: 640,
            margin: "0 auto 48px",
          }}
        >
          Most men treat these separately. We handle all three in a single in-person visit. Same provider. Same day. One plan built around your labs.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {SERVICES.map((svc) => (
            <div
              key={svc.eyebrow}
              style={{
                background: "#FFFFFF",
                borderRadius: 12,
                border: "1px solid rgba(11,16,41,0.10)",
                boxShadow: "0 4px 16px rgba(11,16,41,0.08)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: 420,
              }}
            >
              <div style={{ height: 220, position: "relative", overflow: "hidden" }}>
                <img
                  src={svc.image}
                  alt={svc.imageAlt}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%" }}
                />
              </div>
              <div style={{ padding: 32, display: "flex", flexDirection: "column", flex: 1 }}>
                <p
                  style={{
                    fontFamily: "'Montserrat', system-ui, sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#E8670A",
                    marginBottom: 8,
                  }}
                >
                  {svc.eyebrow}
                </p>
                <h3
                  style={{
                    fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#0B1029",
                    textTransform: "uppercase",
                    lineHeight: 1.15,
                    marginBottom: 12,
                  }}
                >
                  {svc.headline}
                </h3>
                <p
                  style={{
                    fontFamily: "'Montserrat', system-ui, sans-serif",
                    fontSize: 15,
                    color: "#374151",
                    lineHeight: 1.6,
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  {svc.body}
                </p>
                <button
                  type="button"
                  onClick={onBookClick}
                  style={{
                    width: "100%",
                    height: 48,
                    background: "#E8670A",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: 9999,
                    fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(232,103,10,0.30)",
                  }}
                >
                  BOOK IN-PERSON VISIT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Manifesto ("Why Men Choose Us") ─────────────────────────────────────────

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
        {/* Image — first on mobile, right on desktop */}
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

        {/* Copy */}
        <div>
          <p
            style={{
              fontFamily: "'Montserrat', system-ui, sans-serif",
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
              fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
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
              fontFamily: "'Montserrat', system-ui, sans-serif",
              fontSize: 15,
              color: "#374151",
              lineHeight: 1.7,
              marginBottom: 16,
              maxWidth: 580,
            }}
          >
            Most men wait two years before saying something out loud. They get bloodwork. Their GP says everything looks fine. They go home. Nothing changes.
          </p>
          <p
            style={{
              fontFamily: "'Montserrat', system-ui, sans-serif",
              fontSize: 15,
              color: "#374151",
              lineHeight: 1.7,
              marginBottom: 32,
              maxWidth: 580,
            }}
          >
            We specialize in men&rsquo;s health. One licensed provider, your labs, and a real conversation. Not a coordinator reading from a tablet. If treatment is right for you, you leave with a plan the same day.
          </p>

          {/* Testimonial card */}
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
            <Quote size={20} color="#E8670A" strokeWidth={2} aria-hidden style={{ marginBottom: 12, opacity: 0.7 }} />
            <p
              style={{
                fontFamily: "'Montserrat', system-ui, sans-serif",
                fontSize: 15,
                color: "#374151",
                fontStyle: "italic",
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              &ldquo;Saw two GPs who told me my levels were fine. I knew they weren&rsquo;t. Three weeks after starting treatment I was sleeping through the night again. The difference in energy over the next few months was something no standard lab panel ever captured.&rdquo;
            </p>
            <p style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: "0.875rem", fontWeight: 700, color: "#0B1029", marginBottom: 4 }}>
              James T., 48, Norfolk
            </p>
            <p style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: "0.75rem", color: "#6B7280" }}>
              Verified member. Individual results vary.
            </p>
          </div>

          <button
            type="button"
            onClick={onBookClick}
            style={{
              padding: "0 32px",
              height: 52,
              background: "#E8670A",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 9999,
              fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(232,103,10,0.40)",
            }}
          >
            BOOK YOUR 60-MINUTE VISIT
          </button>
          <p style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: "0.75rem", color: "#6B7280", marginTop: 12 }}>
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

// ─── How It Works ────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: 1,
    title: "Book Online In Under 5 Minutes",
    description: "Pick the location and time that works for you. No referral, no phone tag.",
    isLast: false,
  },
  {
    number: 2,
    title: "A Provider Who Actually Explains Your Labs",
    description: "A licensed provider who specializes in men's health sits with you, goes over every number, and tells you exactly what's driving your symptoms.",
    isLast: false,
  },
  {
    number: 3,
    title: "Walk Out With Your Protocol Locked In",
    description: "A care plan built around your labs and your goals. Most members start treatment the same visit.",
    isLast: true,
  },
];

function CROHowItWorks({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section
      id="how-it-works"
      style={{
        background: "#F9F8F6",
        padding: "clamp(48px, 8vw, 96px) 24px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Montserrat', system-ui, sans-serif",
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
            fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
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
                  fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  boxShadow: step.isLast ? "0 0 0 4px rgba(232,103,10,0.20), 0 8px 24px rgba(232,103,10,0.30)" : "none",
                }}
              >
                {step.number}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', system-ui, sans-serif",
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
                    fontFamily: "'Montserrat', system-ui, sans-serif",
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
          <button
            type="button"
            onClick={onBookClick}
            style={{
              padding: "0 36px",
              height: 52,
              background: "#E8670A",
              color: "#FFFFFF",
              border: "none",
              borderRadius: 9999,
              fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(232,103,10,0.40)",
            }}
          >
            BOOK YOUR 60-MINUTE VISIT →
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Placeholder ─────────────────────────────────────────────────

function CROTestimonialsPlaceholder() {
  const testimonials = [
    {
      quote: "I've been to two GPs who told me my levels were fine. After one visit here I had answers and a plan. Game-changer.",
      name: "R.T., 44",
      location: "Richmond",
    },
    {
      quote: "Three weeks after starting treatment I was sleeping through the night again. The energy difference over the next few months was remarkable.",
      name: "James T., 48",
      location: "Norfolk",
    },
    {
      quote: "They didn't just throw a prescription at me. They actually looked at my numbers and explained what was driving each symptom.",
      name: "Michael C., 52",
      location: "Virginia Beach",
    },
  ];

  return (
    <section
      style={{
        background: "#0B1029",
        padding: "clamp(48px, 8vw, 96px) 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Montserrat', system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#E8670A",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          MEMBER STORIES
        </p>
        <h2
          style={{
            fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.05,
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          WHAT OUR MEMBERS SAY
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 12,
                padding: 32,
              }}
            >
              <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="#C9A961" color="#C9A961" aria-hidden />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "'Montserrat', system-ui, sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.85)",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <p style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>
                {t.name}
              </p>
              <p style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: 12, color: "#9CA3AF" }}>
                {t.location} · Verified member
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What's Included Placeholder ──────────────────────────────────────────────

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
      style={{
        background: "#F9F8F6",
        padding: "clamp(48px, 8vw, 96px) 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Montserrat', system-ui, sans-serif",
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
            fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
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
                fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: "#0B1029",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              ✓ What&rsquo;s Included
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {included.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: "#E8670A", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: 14, color: "#374151" }}>{item}</span>
                </li>
              ))}
            </ul>
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
                fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: "#6B7280",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              ✗ Not Here
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {notIncluded.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: "#6B7280", fontWeight: 700, flexShrink: 0 }}>✗</span>
                  <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: 14, color: "#6B7280" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .included-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

// ─── Locations ────────────────────────────────────────────────────────────────

const LOCATION_DATA = [
  {
    name: "Richmond",
    address: "9002 Patterson Ave, Suite 200\nRichmond, VA 23229",
    phone: "(804) 346-4636",
    tel: "tel:8043464636",
    mapUrl: "https://maps.google.com/?q=Men%27s+Wellness+Centers+Richmond+VA",
  },
  {
    name: "Virginia Beach",
    address: "1903 Pleasure House Rd, Suite 105\nVirginia Beach, VA 23455",
    phone: "(757) 612-4428",
    tel: "tel:7576124428",
    mapUrl: "https://maps.google.com/?q=Men%27s+Wellness+Centers+Virginia+Beach+VA",
  },
  {
    name: "Newport News",
    address: "12827 Jefferson Ave, Suite 201\nNewport News, VA 23608",
    phone: "(757) 806-6263",
    tel: "tel:7578066263",
    mapUrl: "https://maps.google.com/?q=Men%27s+Wellness+Centers+Newport+News+VA",
  },
];

function CROLocations({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section
      id="locations"
      style={{
        background: "#0B1029",
        padding: "clamp(48px, 8vw, 96px) 24px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Montserrat', system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#E8670A",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          OUR LOCATIONS
        </p>
        <h2
          style={{
            fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.05,
            color: "#FFFFFF",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          3 VIRGINIA CENTERS
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {LOCATION_DATA.map((loc) => (
            <div
              key={loc.name}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 12,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                {loc.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Montserrat', system-ui, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.70)",
                  lineHeight: 1.6,
                  whiteSpace: "pre-line",
                }}
              >
                {loc.address}
              </p>
              <a
                href={loc.tel}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', system-ui, sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                <Phone size={16} color="#E8670A" /> {loc.phone}
              </a>
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 13,
                  color: "#E8670A",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', system-ui, sans-serif",
                  fontWeight: 600,
                }}
              >
                View on Google Maps →
              </a>
              <button
                type="button"
                onClick={onBookClick}
                style={{
                  marginTop: 8,
                  width: "100%",
                  height: 48,
                  background: "#E8670A",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: 9999,
                  fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                }}
              >
                BOOK AT THIS LOCATION
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ─────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "Is the first visit really free?",
    a: "Yes. The initial consultation, lab draw, and provider review are included at no cost. If you choose to start a treatment program, those costs are discussed with your provider during the visit.",
  },
  {
    q: "Do I need a referral?",
    a: "No referral needed. Call or book online and come in. We handle all lab work on-site during your first visit.",
  },
  {
    q: "How long does the first visit take?",
    a: "Plan for about 60 minutes. Your provider will review your labs and discuss your symptoms, goals, and options.",
  },
  {
    q: "Do you take insurance?",
    a: "We are a cash-pay practice and do not bill insurance. FSA and HSA accounts are accepted. We also offer financing options.",
  },
  {
    q: "What if my labs are borderline?",
    a: "Borderline results are often where men fall through the cracks of standard care. Our providers look at your full picture — not just whether a number clears a threshold.",
  },
];

function CROFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#F9F8F6",
        padding: "clamp(48px, 8vw, 96px) 24px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Montserrat', system-ui, sans-serif",
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
            fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.05,
            color: "#0B1029",
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(11,16,41,0.10)",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', system-ui, sans-serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#0B1029",
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontSize: 20,
                    color: "#E8670A",
                    fontWeight: 700,
                    flexShrink: 0,
                    marginLeft: 16,
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 200ms ease",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div style={{ padding: "0 24px 20px" }}>
                  <p
                    style={{
                      fontFamily: "'Montserrat', system-ui, sans-serif",
                      fontSize: 14,
                      color: "#374151",
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function CROFinalCTA({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section
      style={{
        background: "#F9F8F6",
        padding: "clamp(48px, 8vw, 96px) 24px",
      }}
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
        {/* Background image overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/images/cro/surfers-sunset.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
              fontSize: "clamp(32px, 6vw, 64px)",
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
              fontFamily: "'Montserrat', system-ui, sans-serif",
              fontSize: 16,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 560,
              margin: "0 auto 36px",
            }}
          >
            No-cost 60-minute in-person visit. Same-day labs. No insurance needed. FSA &amp; HSA accepted.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <button
              type="button"
              onClick={onBookClick}
              style={{
                padding: "0 36px",
                height: 56,
                background: "#E8670A",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 9999,
                fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                cursor: "pointer",
                boxShadow: "0 4px 24px rgba(232,103,10,0.50)",
              }}
            >
              BOOK YOUR 60-MINUTE VISIT →
            </button>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href="tel:+18663444955"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "0 24px",
                  height: 44,
                  background: "rgba(255,255,255,0.10)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.20)",
                  borderRadius: 9999,
                  fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                }}
              >
                <Phone size={16} /> Call
              </a>
              <a
                href="sms:+18663444955?body=Hi%2C%20I%27d%20like%20to%20book%20a%20visit."
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "0 24px",
                  height: 44,
                  background: "rgba(255,255,255,0.10)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.20)",
                  borderRadius: 9999,
                  fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                }}
              >
                <MessageCircle size={16} /> Text
              </a>
            </div>
          </div>

          <p style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.50)", marginTop: 28 }}>
            3 Virginia locations &middot; HIPAA compliant &middot; LegitScript certified
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const FOOTER_LOCATIONS = [
  { name: "Richmond", phone: "(804) 346-4636", tel: "tel:8043464636" },
  { name: "Virginia Beach", phone: "(757) 612-4428", tel: "tel:7576124428" },
  { name: "Newport News", phone: "(757) 806-6263", tel: "tel:7578066263" },
];

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
    <footer style={{ background: "#080D1F", fontFamily: "'Montserrat', system-ui, sans-serif" }}>
      <div style={{ padding: "48px 24px 0", maxWidth: 1200, margin: "0 auto" }}>
        {/* Row 1: Logo + Contact */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            marginBottom: 40,
          }}
          className="footer-top-grid"
        >
          <div>
            <img
              src="/logos/Text_Logo_white.webp"
              alt="Men's Wellness Centers"
              width={200}
              height={40}
              loading="lazy"
              style={{ height: 40, width: "auto", opacity: 0.9 }}
            />
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 12, lineHeight: 1.5 }}>
              &copy; {year} Men&rsquo;s Wellness Centers.
              <br />All rights reserved.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
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
              {FOOTER_LOCATIONS.map((loc) => (
                <a
                  key={loc.name}
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
                  <Phone size={14} strokeWidth={2} style={{ color: "#E8670A", flexShrink: 0 }} />
                  <span style={{ fontWeight: 600 }}>{loc.name}:</span>{" "}{loc.phone}
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
                <Mail size={14} strokeWidth={2} style={{ color: "#E8670A", flexShrink: 0 }} />
                info@menswellnesscenters.com
              </a>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <img src="/images/badges/clia-color.webp" alt="CLIA Certified" loading="lazy" style={{ height: 52, width: "auto" }} />
          <a href="https://www.legitscript.com/websites/?checker_keywords=menswellnesscenters.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/badges/legitscript-color.webp" alt="LegitScript Certified" loading="lazy" style={{ height: 64, width: "auto" }} />
          </a>
          <img src="/images/badges/hipaa-color.webp" alt="HIPAA Compliant" loading="lazy" style={{ height: 52, width: "auto" }} />
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
            <p key={i} style={{ fontSize: 11, lineHeight: 1.5, color: "rgba(255,255,255,0.50)", margin: 0 }}>
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
          <a href="https://menswellnesscenters.com/privacy-practices/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.50)", textDecoration: "none" }}>Privacy Policy</a>
          <a href="https://menswellnesscenters.com/terms-of-service/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.50)", textDecoration: "none" }}>Terms of Service</a>
          <a href="https://menswellnesscenters.com/privacy-practices/#hipaa" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.50)", textDecoration: "none" }}>HIPAA Notice</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-top-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

// ─── Sticky Mobile CTA ────────────────────────────────────────────────────────

function CROStickyMobileCTA({ onBookClick }: { onBookClick: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const form = document.getElementById("hero-form");
      const pastThreshold = window.scrollY > 700;
      let formInView = false;
      if (form) {
        const rect = form.getBoundingClientRect();
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
        // Hide on desktop
      }}
      className="sticky-mobile-cta"
    >
      <button
        type="button"
        onClick={onBookClick}
        style={{
          width: "100%",
          height: 56,
          background: "#E8670A",
          color: "#FFFFFF",
          border: "none",
          borderRadius: 0,
          fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
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
        BOOK YOUR 60-MINUTE VISIT →
      </button>
      <p style={{ textAlign: "center", fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: 11, color: "#9CA3AF", margin: "6px 0 0" }}>
        60-minute in-person visit · Men&rsquo;s Wellness Centers
      </p>

      <style>{`
        @media (min-width: 768px) { .sticky-mobile-cta { display: none !important; } }
      `}</style>
    </div>
  );
}

// ─── Desktop Sticky Bar ───────────────────────────────────────────────────────

function CRODesktopStickyBar({ onBookClick }: { onBookClick: () => void }) {
  const [visible, setVisible] = useState(false);

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
        fontFamily: "'Montserrat', system-ui, sans-serif",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 300ms ease",
      }}
      aria-hidden={!visible}
    >
      <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: 14 }}>
        Virginia&rsquo;s #1 Men&rsquo;s Health Center
        <span style={{ margin: "0 12px", color: "#E8670A" }}>&middot;</span>
        Same-Day Availability
      </span>
      <button
        type="button"
        onClick={onBookClick}
        style={{
          padding: "0 28px",
          height: 44,
          background: "#E8670A",
          color: "#FFFFFF",
          border: "none",
          borderRadius: 9999,
          fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
          fontSize: 14,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(232,103,10,0.35)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#D15F09"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "#E8670A"; }}
      >
        Claim My Visit
      </button>

      <style>{`
        .desktop-sticky-bar { display: none !important; }
        @media (min-width: 768px) { .desktop-sticky-bar { display: flex !important; } }
      `}</style>
    </div>
  );
}

// ─── Main CROPage ─────────────────────────────────────────────────────────────

export function CROPage() {
  const scrollToForm = () => {
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
      <CROHeader />
      <main style={{ flex: 1 }}>
        <CROHero />
        <CROCredibilityBand />
        <CROServices onBookClick={scrollToForm} />
        <CROManifesto onBookClick={scrollToForm} />
        <CROHowItWorks onBookClick={scrollToForm} />
        <CROTestimonialsPlaceholder />
        <CROEverythingIncluded />
        <CROLocations onBookClick={scrollToForm} />
        <CROFaq />
        <CROFinalCTA onBookClick={scrollToForm} />
      </main>
      <CROFooter />
      <CROStickyMobileCTA onBookClick={scrollToForm} />
      <CRODesktopStickyBar onBookClick={scrollToForm} />
    </div>
  );
}
