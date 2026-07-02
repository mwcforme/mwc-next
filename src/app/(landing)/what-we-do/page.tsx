import type { Metadata } from "next";
import {
  CheckCircle2,
  XCircle,
  Zap,
  Brain,
  Smile,
  Heart,
  MapPin,
  Phone,
  Star,
  ChevronRight,
  Clock,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { DesktopStickyBar } from "@/components/DesktopStickyBar";
import { CtaButton } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "What We Do - Men's Wellness Centers | TRT, ED & Weight Loss",
  description:
    "We specialize exclusively in testosterone therapy, erectile dysfunction, and medical weight loss. Physician-led. Virginia-based. We are NOT a general clinic. See if you're a good fit.",
  // Paid-ads clarifier page — stays out of organic search
  robots: { index: false, follow: false },
};

/* ────────────────────────────────────────────────────────── */
/*  Content Constants                                         */
/* ────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    title: "Testosterone Therapy",
    description:
      "Physician-supervised evaluation and treatment for low testosterone with same-day labs and personalized protocols.",
    icon: Zap,
  },
  {
    title: "Sexual Health",
    description:
      "In-person evaluation and FDA-approved treatment options for erectile dysfunction and sexual performance.",
    icon: Heart,
  },
  {
    title: "Medical Weight Loss",
    description:
      "Physician-led, lab-guided weight loss with GLP-1 medications when clinically appropriate.",
    icon: Smile,
  },
];

const GOOD_FIT = [
  "Low energy or fatigue despite sleep",
  "Decreased sex drive or erectile concerns",
  "Weight that won't budge despite diet/exercise",
  "Your doctor said labs are 'normal' but you don't feel right",
  "You want a physician, not a coordinator or chatbot",
];

const NOT_FIT = [
  {
    label: "Urology services",
    desc: "Prostate exams, vasectomy, kidney stones",
  },
  {
    label: "Fertility/sperm analysis",
    desc: "Go to a board-certified reproductive urologist",
  },
  {
    label: "General medicine",
    desc: "Annual physicals, chronic disease management",
  },
  {
    label: "Telehealth only",
    desc: "We require in-person visits for labs and evaluation",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Book Online in Under 5 Minutes",
    description: "Pick your location and preferred time. No referral needed.",
  },
  {
    step: "02",
    title: "Same-Day Labs & Provider Review",
    description:
      "In-center lab draw. Results reviewed same visit by your Virginia-licensed provider.",
  },
  {
    step: "03",
    title: "Leave With Your Personal Plan",
    description:
      "A 60-minute evaluation. A treatment protocol when medically appropriate.",
  },
];

const OUTCOMES = [
  {
    icon: Zap,
    title: "Restored Energy",
    desc: "Consistent energy throughout the day",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    desc: "Improved focus and reduced brain fog",
  },
  {
    icon: Heart,
    title: "Better Mood",
    desc: "Reduced irritability, improved well-being",
  },
  {
    icon: Smile,
    title: "Physical Performance",
    desc: "Increased strength and faster recovery",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I've been to two GPs who told me my levels were fine. After one visit here I had answers and a plan. Game-changer.",
    name: "R.T.",
    location: "Richmond, VA",
    type: "TRT",
  },
  {
    quote:
      "Same-day labs changed everything. I walked in not knowing what was wrong and left with a real treatment plan the same day.",
    name: "D.M.",
    location: "Virginia Beach, VA",
    type: "ED",
  },
  {
    quote:
      "Within 6 weeks I felt like myself again. Energy is back. Focus is back. I only wish I'd found them sooner.",
    name: "J.K.",
    location: "Newport News, VA",
    type: "TRT",
  },
];

const LOCATIONS = [
  {
    city: "Richmond",
    address: "4050 Innslake Dr, Suite 360",
    cityState: "Glen Allen, VA 23060",
    phone: "(804) 346-4636",
    driveTime: "5 min from I-64",
    mapQuery: "4050 Innslake Dr Suite 360 Glen Allen VA 23060",
  },
  {
    city: "Virginia Beach",
    address: "996 First Colonial Road",
    cityState: "Virginia Beach, VA 23454",
    phone: "(757) 612-4428",
    driveTime: "5 min from I-264",
    mapQuery: "996 First Colonial Road Virginia Beach VA 23454",
  },
  {
    city: "Newport News",
    address: "827 Diligence Drive, Suite 206",
    cityState: "Newport News, VA 23606",
    phone: "(757) 806-6263",
    driveTime: "3 min from I-64, Exit 258A",
    mapQuery: "827 Diligence Drive Suite 206 Newport News VA 23606",
  },
];

/* ────────────────────────────────────────────────────────── */
/*  Section helpers (matches /trt design system)              */
/* ────────────────────────────────────────────────────────── */

const SECTION_PAD = { paddingTop: "clamp(48px, 8vw, 80px)", paddingBottom: "clamp(48px, 8vw, 80px)" } as React.CSSProperties;
const MAX_W = { maxWidth: 1440, margin: "0 auto", width: "100%", padding: "0 clamp(20px, 4vw, 80px)" } as React.CSSProperties;
const LABEL_STYLE: React.CSSProperties = {
  display: "inline-block",
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
  marginBottom: 12,
};
const H2_STYLE: React.CSSProperties = {
  fontWeight: 600,
  fontSize: "clamp(28px, 4.5vw, 44px)",
  lineHeight: 1.05,
  color: "var(--color-ink)",
  textTransform: "uppercase",
  letterSpacing: "-0.01em",
};
const BODY_STYLE: React.CSSProperties = {
  fontSize: 18,
  lineHeight: 1.65,
  color: "var(--color-ink)",
  marginTop: 14,
};

/* ────────────────────────────────────────────────────────── */
/*  Page                                                      */
/* ────────────────────────────────────────────────────────── */

export default function WhatWeDoPage() {
  return (
    <main className="bg-surface" style={{ minHeight: "100vh", paddingTop: 64, width: "100%" }}>
      <Header exitLinks={false} />

      {/* ════════════════════════════════════════════════════
          1. HERO — specialization clarifier
      ════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #04081A 0%, #0B1029 50%, #0F1535 100%)",
          paddingTop: 48,
          paddingBottom: 56,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ ...MAX_W, maxWidth: 900 }}>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 w-fit" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", marginBottom: 20 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F5F0EB" }}>
              Physician-Led in Virginia
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(32px, 4.2vw, 52px)",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
              fontWeight: 800,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            We Specialize in One Thing: Men&rsquo;s Health
          </h1>

          {/* Subhead */}
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#C8C4BE", maxWidth: 620 }}>
            Testosterone therapy, erectile dysfunction, and medical weight loss.
          </p>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#FFFFFF", fontWeight: 700, marginTop: 8 }}>
            NOT a general clinic. NOT mail-order. NOT telehealth.
          </p>

          {/* Service pills */}
          <div className="flex flex-wrap gap-3" style={{ marginTop: 24 }}>
            {SERVICES.map((s) => (
              <span
                key={s.title}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 100,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#F5F0EB",
                }}
              >
                <s.icon size={15} color="var(--color-accent)" strokeWidth={2} />
                {s.title}
              </span>
            ))}
          </div>

          {/* Proof lines */}
          <div
            style={{
              marginTop: 28,
              borderLeft: "2px solid var(--color-accent)",
              paddingLeft: 18,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {["11 years in Virginia", "10,000+ men treated", "4.9★ rating (191 verified reviews)"].map((line) => (
              <p key={line} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#F5F0EB" }}>
                <CheckCircle2 size={15} color="#0E7C66" strokeWidth={2.5} /> {line}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: 32 }}>
            <CtaButton label="Book Your No-Cost Consultation" />
            <p style={{ marginTop: 14, fontSize: 13, color: "rgba(255,255,255,0.70)" }}>
              60-minute in-person visit. Same-day labs. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. ARE YOU A GOOD FIT? — filters unqualified leads
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={{ ...MAX_W, maxWidth: 1100 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={LABEL_STYLE}>BEFORE YOU BOOK</p>
            <h2 style={H2_STYLE}>Are You a Good Fit?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Good fit */}
            <div
              style={{
                background: "var(--color-surface-elevated)",
                border: "1px solid var(--color-navy-line)",
                borderRadius: 16,
                padding: "28px 24px",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: 8,
                }}
              >
                GOOD FIT
              </p>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  textTransform: "uppercase",
                  letterSpacing: "0.01em",
                  marginBottom: 24,
                }}
              >
                You might be a good fit if:
              </h3>
              <div className="flex flex-col" style={{ gap: 14 }}>
                {GOOD_FIT.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "rgba(232,103,10,0.12)",
                        border: "1.5px solid rgba(232,103,10,0.50)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <CheckCircle2 size={13} color="var(--color-accent)" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 500, color: "var(--color-ink-soft)", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not a fit */}
            <div
              className="bg-navy"
              style={{
                borderRadius: 16,
                padding: "28px 24px",
              }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: 8,
                }}
              >
                NOT A FIT
              </p>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.01em",
                  marginBottom: 24,
                }}
              >
                We&rsquo;re not the right fit if you need:
              </h3>
              <div className="flex flex-col" style={{ gap: 16 }}>
                {NOT_FIT.map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <XCircle size={15} color="rgba(255,255,255,0.45)" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: 13, color: "#B0ADA8", lineHeight: 1.5, marginTop: 2 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clarification strip */}
          <div
            style={{
              marginTop: 24,
              background: "var(--color-accent-tint)",
              border: "1px solid rgba(232,103,10,0.30)",
              borderRadius: 12,
              padding: "18px 24px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-ink)", lineHeight: 1.6 }}>
              We&rsquo;re specialists, not generalists. Our focus is <strong>TRT</strong>,{" "}
              <strong>ED</strong>, and <strong>weight loss</strong> — with physician-led
              in-person care.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. OUR THREE SPECIALTIES
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-navy">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ ...LABEL_STYLE, color: "#E8670A" }}>THIS IS ALL WE DO</p>
            <h2 style={{ ...H2_STYLE, color: "#fff" }}>Our Three Specialties</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                style={{
                  background: "#161B3A",
                  border: "1px solid #1E244A",
                  borderRadius: 12,
                  padding: 24,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Icon size={24} color="#0B1029" strokeWidth={1.75} />
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "0.02em",
                    marginBottom: 10,
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 14, color: "#B0ADA8", lineHeight: 1.65, flex: 1 }}>
                  {description}
                </p>
                <a
                  href="#final-cta"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    marginTop: 16,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    textDecoration: "none",
                  }}
                >
                  Learn more <ChevronRight size={14} strokeWidth={2.5} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4. THE PROCESS — one visit
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={LABEL_STYLE}>THE PROCESS</p>
            <h2 style={H2_STYLE}>Here&rsquo;s How It Works</h2>
            <p style={{ fontSize: 16, color: "var(--color-ink-soft)", marginTop: 12 }}>
              In one 60-minute visit.
            </p>
          </div>

          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {PROCESS.map((step, i) => (
              <div key={step.step}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20, padding: "28px 0" }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--color-navy)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "var(--color-ink)",
                        letterSpacing: "0.01em",
                        lineHeight: 1.3,
                        marginBottom: 8,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 15, color: "var(--color-ink-soft)", lineHeight: 1.65 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
                {i < PROCESS.length - 1 && (
                  <div style={{ height: 1, background: "var(--color-navy-line)", margin: "0 0 0 56px" }} />
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <CtaButton label="Book My No-Cost Consultation" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          5. WHAT MEMBERS EXPERIENCE — outcomes
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-navy">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ ...LABEL_STYLE, color: "#E8670A" }}>WHAT TO EXPECT</p>
            <h2 style={{ ...H2_STYLE, color: "#fff" }}>What Our Members Experience</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OUTCOMES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: "#161B3A",
                  border: "1px solid #1E244A",
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "rgba(232,103,10,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  <Icon size={20} color="var(--color-accent)" strokeWidth={1.75} />
                </div>
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    lineHeight: 1.3,
                    marginBottom: 8,
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 13, color: "#B0ADA8", lineHeight: 1.6 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6. TESTIMONIALS
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={LABEL_STYLE}>Real Members</p>
            <h2 style={H2_STYLE}>Real Men. Real Results.</h2>
            <p style={{ fontSize: 14, color: "var(--color-ink-muted)", marginTop: 12 }}>
              Verified reviews from Google
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, name, location, type }) => (
              <div
                key={name}
                style={{
                  background: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-navy-line)",
                  borderRadius: 12,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--color-star)" stroke="var(--color-star)" aria-hidden />
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      background: "var(--color-navy)",
                      color: "rgba(255,255,255,0.90)",
                      borderRadius: 100,
                      padding: "4px 10px",
                    }}
                  >
                    {type}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.65,
                    fontStyle: "italic",
                    flex: 1,
                  }}
                >
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "var(--color-ink)" }}>
                    {name}
                  </p>
                  <p style={{ fontSize: 12, color: "var(--color-ink-muted)", marginTop: 2 }}>
                    {location} &middot; Verified Member
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
            <a
              href="https://www.google.com/maps/search/Men%27s+Wellness+Centers"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                background: "var(--color-surface-elevated)",
                border: "1px solid var(--color-navy-line)",
                borderRadius: 100,
                padding: "10px 20px",
              }}
            >
              <span style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="var(--color-star)" stroke="var(--color-star)" aria-hidden />
                ))}
              </span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink)" }}>
                Read all 191 verified reviews on Google
              </span>
              <ChevronRight size={14} color="var(--color-accent)" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          7. LOCATIONS
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={LABEL_STYLE}>Our Centers</p>
            <h2 style={H2_STYLE}>Three Virginia Locations</h2>
            <p style={{ fontSize: 16, color: "var(--color-ink-soft)", marginTop: 12 }}>
              Same-day appointments available at all centers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map(({ city, address, cityState, phone, driveTime, mapQuery }) => (
              <div
                key={city}
                style={{
                  background: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-navy-line)",
                  borderRadius: 12,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <iframe
                  title={`Map to Men's Wellness Centers ${city}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=14&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ width: "100%", height: 170, border: 0, display: "block" }}
                />

                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--color-ink)",
                      textTransform: "uppercase",
                      letterSpacing: "0.01em",
                      marginBottom: 16,
                    }}
                  >
                    {city}
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <MapPin size={16} color="var(--color-accent)" strokeWidth={1.75} style={{ marginTop: 2, flexShrink: 0 }} />
                      <p style={{ fontSize: 14, color: "var(--color-ink-soft)", lineHeight: 1.5 }}>
                        {address}<br />{cityState}
                      </p>
                    </div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <Phone size={16} color="var(--color-accent)" strokeWidth={1.75} style={{ flexShrink: 0 }} />
                      <a href={`tel:${phone.replace(/\D/g, "")}`} style={{ fontSize: 14, color: "var(--color-ink-soft)", textDecoration: "none" }}>
                        {phone}
                      </a>
                    </div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <Clock size={16} color="var(--color-accent)" strokeWidth={1.75} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: "var(--color-ink-soft)" }}>
                        {driveTime}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: 20,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Get Directions <ChevronRight size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          8. FINAL CTA
      ════════════════════════════════════════════════════ */}
      <section id="final-cta" style={{ padding: "clamp(48px, 8vw, 80px) 20px", scrollMarginTop: 100 }} className="bg-surface">
        <div style={{ ...MAX_W, maxWidth: 720 }}>
          <div
            className="bg-navy rounded-2xl"
            style={{
              padding: "60px 40px",
              textAlign: "center",
            }}
          >
            <p style={{ ...LABEL_STYLE, color: "var(--color-accent)" }}>Ready to Start?</p>
            <h2
              style={{
                fontWeight: 600,
                fontSize: "clamp(28px, 5vw, 44px)",
                lineHeight: 1.05,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                marginBottom: 16,
              }}
            >
              Stop Accepting &ldquo;Normal&rdquo; When You Don&rsquo;t Feel Normal
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.65,
                marginBottom: 32,
              }}
            >
              Your first visit is no-cost. On-site labs. Same-day results. No referral needed.
            </p>

            <CtaButton size="lg" label="Book Your Consultation Today" />

            <p
              style={{
                marginTop: 20,
                fontSize: 12,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.6,
              }}
            >
              Confidential. No obligation. You&rsquo;ll hear back within one business hour.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
      <DesktopStickyBar />
    </main>
  );
}
