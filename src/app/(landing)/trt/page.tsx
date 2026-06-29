import type { Metadata } from "next";
import {
  ChevronRight,
  Star,
  CheckCircle2,
  Zap,
  Brain,
  Smile,
  Dumbbell,
  ShieldCheck,
  FlaskConical,
  FileText,
  DollarSign,
  MapPin,
  Phone,
  Clock,
  Heart,
  XCircle,
  User,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { DesktopStickyBar } from "@/components/DesktopStickyBar";
import { TRTFAQAccordion } from "@/components/TRTFAQAccordion";
import { HeroCTA } from "@/components/HeroCTA";
import { CtaButton } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Testosterone Replacement Therapy in Virginia | Men's Wellness Centers",
  description:
    "Provider-supervised TRT at 3 Virginia locations. Labs drawn on-site. Results reviewed same visit. Same-day availability in Richmond, Virginia Beach and Newport News.",
};

/* ────────────────────────────────────────────────────────── */
/*  Constants                                                 */
/* ────────────────────────────────────────────────────────── */

const SYMPTOMS = [
  "Decrease in sex drive (libido)",
  "Feelings of sadness or grumpiness",
  "Less frequent or weaker erections",
  "Lack of energy, strength, or endurance",
  "Tiredness and persistent fatigue",
  "Lack of focus and mental clarity",
  "Increased body fat, especially around midsection",
];

const INCLUDED = [
  { icon: FileText, label: "Comprehensive Health Assessment" },
  { icon: FlaskConical, label: "Same-Day Lab Results (No Waiting)" },
  { icon: CheckCircle2, label: "Personalized Treatment Recommendations" },
  { icon: DollarSign, label: "Transparent Pricing. No Surprise Bills." },
  { icon: ShieldCheck, label: "HIPAA Compliant" },
  { icon: Star, label: "LegitScript Certified" },
];

const NOT_HERE_ITEMS = [
  "No subscription required",
  "No insurance billing or claims",
  "No referral needed",
  "No 15-minute video calls",
  "No mass-market mail order",
  "No mid-level providers handling hormone decisions",
];

const OUTCOMES = [
  {
    Icon: Zap,
    title: "Restored Energy",
    body: "Wake up feeling refreshed and maintain consistent energy throughout the day.",
  },
  {
    Icon: Brain,
    title: "Mental Clarity",
    body: "Improved focus, sharper thinking, and reduced brain fog.",
  },
  {
    Icon: Smile,
    title: "Better Mood",
    body: "More balanced mood, reduced irritability, and improved sense of well-being.",
  },
  {
    Icon: Dumbbell,
    title: "Physical Performance",
    body: "Increased strength, faster recovery, and improved body composition.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I've been to two GPs who told me my levels were fine. After one visit here I had answers and a plan. Game-changer.",
    name: "R.T.",
    location: "Richmond, VA",
    stars: 5,
  },
  {
    quote:
      "Same-day labs changed everything. I walked in not knowing what was wrong and left with a real treatment plan the same day.",
    name: "D.M.",
    location: "Virginia Beach, VA",
    stars: 5,
  },
  {
    quote:
      "Within 6 weeks I felt like myself again. Energy is back. Focus is back. I only wish I'd found them sooner.",
    name: "J.K.",
    location: "Newport News, VA",
    stars: 5,
  },
];

const LOCATIONS = [
  {
    city: "Richmond",
    address: "4050 Innslake Dr, Suite 360",
    cityState: "Glen Allen, VA 23060",
    phone: "866-344-4955",
    mapUrl: "https://maps.google.com/?q=4050+Innslake+Dr+Suite+360+Glen+Allen+VA",
  },
  {
    city: "Virginia Beach",
    address: "996 First Colonial Road",
    cityState: "Virginia Beach, VA 23454",
    phone: "866-344-4955",
    mapUrl: "https://maps.google.com/?q=996+First+Colonial+Road+Virginia+Beach+VA",
  },
  {
    city: "Newport News",
    address: "827 Diligence Drive, Suite 206",
    cityState: "Newport News, VA 23606",
    phone: "866-344-4955",
    mapUrl: "https://maps.google.com/?q=827+Diligence+Drive+Suite+206+Newport+News+VA",
  },
];

/* ────────────────────────────────────────────────────────── */
/*  Section helpers                                           */
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

export default function TRTPage() {
  return (
    <main className="bg-surface" style={{ minHeight: "100vh", paddingTop: 64, width: "100%" }}>
      <Header />

      {/* ════════════════════════════════════════════════════
          1. HERO (Dark navy gradient, Marek-inspired)
      ════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #04081A 0%, #0B1029 50%, #0F1535 100%)",
          paddingTop: 40,
          paddingBottom: 56,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{ ...MAX_W }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-10 lg:gap-16 items-center"
        >
          {/* LEFT: Copy */}
          <div className="flex flex-col gap-5">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 w-fit" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block", flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#F5F0EB" }}>
                Physician-Led in Virginia
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(32px, 3.6vw, 52px)",
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                fontWeight: 800,
                textTransform: "uppercase",
              }}
            >
              <span style={{ display: "block", whiteSpace: "nowrap" }}>Your GP Said You&rsquo;re Fine.</span>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>You Don&rsquo;t Feel Fine.</span>
            </h1>

            {/* Single supporting line */}
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#C8C4BE", maxWidth: 520 }}>
              We specialize exclusively in men&rsquo;s hormone health, ED, and weight loss.
              In-person. Physician-led. Same-day availability.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {["No referral needed", "Same-day availability", "FSA and HSA accepted"].map((badge) => (
                <span
                  key={badge}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 100,
                    padding: "6px 14px",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#F5F0EB",
                  }}
                >
                  <CheckCircle2 size={14} color="#0E7C66" strokeWidth={2.5} />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div style={{ marginTop: 8 }}>
              <HeroCTA />
            </div>

          </div>

          {/* RIGHT: Vial product shot */}
          <div className="hidden lg:flex" style={{ alignItems: "center", justifyContent: "center", minHeight: 480, padding: 20 }}>
            <img
              src="/images/trt-hero-vial.png"
              alt="Men's Wellness Centers Testosterone Cypionate 200mg/mL"
              style={{ maxHeight: 520, width: "auto", maxWidth: "100%", display: "block", filter: "drop-shadow(0 24px 64px rgba(0,0,0,0.60))" }}
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          9.1 STAT BAR - Dark navy (Marek-inspired)
      ════════════════════════════════════════════════════ */}
      <section style={{ background: "#080D1F", paddingTop: 40, paddingBottom: 40 }}>
        <div style={{ ...MAX_W }}>
          <div className="grid grid-cols-3">
            {[
              { value: "15 MIN", label: "LAB RESULTS" },
              { value: "10,000+", label: "VIRGINIA MEMBERS" },
              { value: "4.9\u2605", label: "191 GOOGLE REVIEWS" },
              ].map(({ value, label }, i) => (
              <div
                key={label}
                style={{
                  textAlign: "center",
                  padding: "0 16px",
                  borderRight: i < 2 ? "1px solid #1E244A" : undefined,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(32px, 5vw, 48px)",
                    fontWeight: 700,
                    color: "#F5F0EB",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.65)",
                    marginTop: 6,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          9.2 SERVICE TRIPTYCH - Cream
      ════════════════════════════════════════════════════ */}
      <section id="why-different" style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={LABEL_STYLE}>WHY MWC IS DIFFERENT</p>
            <h2 style={H2_STYLE}>This Is All We Do.</h2>
            <p
              style={{
                fontSize: 17,
                color: "var(--color-ink-soft)",
                lineHeight: 1.65,
                marginTop: 14,
                maxWidth: 680,
                margin: "14px auto 0",
              }}
            >
              Three services. One focus. Every provider, every visit, every protocol built around
              men&rsquo;s health. Not a general practice. Not a med spa. Not telehealth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: Zap,
                tag: "LOW TESTOSTERONE",
                heading: "Get your energy back",
                body: "Physician-led hormone evaluation with same-day labs. Personalized protocols when clinically appropriate.",
              },
              {
                Icon: Heart,
                tag: "SEXUAL HEALTH",
                heading: "Perform with confidence again",
                body: "An in-person evaluation with a Virginia-licensed provider, same-day. FDA-approved options reviewed when clinically appropriate.",
              },
              {
                Icon: Dumbbell,
                tag: "MEDICAL WEIGHT LOSS",
                heading: "Drop the weight that won't budge",
                body: "Physician-led, lab-guided weight loss monitored at your local Men's Wellness Centers. GLP-1 medications when clinically appropriate.",
              },
            ].map(({ Icon, tag, heading, body }, idx) => {
              const cardImages = [
                "/images/cro/hero-trt-v4.jpg",
                "/images/cro/hero-ed-v2.jpg",
                "/images/cro/hero-wl-v3.jpg",
              ];
              return (
              <div
                key={tag}
                style={{
                  background: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-navy-line)",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image area */}
                <div
                  style={{
                    height: 200,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={cardImages[idx]}
                    alt={heading}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                  />
                  {/* Tag chip */}
                  <div
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: "var(--color-navy)",
                      color: "rgba(255,255,255,0.90)",
                      borderRadius: 100,
                      padding: "4px 10px",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {tag}
                  </div>
                </div>
                {/* Card content */}
                <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--color-ink)",
                      letterSpacing: "0.01em",
                      lineHeight: 1.2,
                      marginBottom: 10,
                    }}
                  >
                    {heading}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--color-ink-soft)",
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {body}
                  </p>
                  <a
                    href="#hero-form"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
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
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          9.3 PROCESS 3-STEP - now navy
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-navy">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ ...LABEL_STYLE, color: "#E8670A" }}>THE PROCESS</p>
            <h2 style={{ ...H2_STYLE, color: "#fff" }}>Here&rsquo;s how it works in one visit.</h2>
          </div>

          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {[
              {
                num: "01",
                title: "Book in under 2 minutes",
                body: "Pick a time at your local Richmond, Newport News, or Virginia Beach center. Confidential. No obligation.",
              },
              {
                num: "02",
                title: "Your provider prepares before you arrive",
                body: "Your physician sees your intake and history ahead of time, so your first visit is focused on results, not paperwork.",
              },
              {
                num: "03",
                title: "Leave with your personal plan",
                body: "A 60-minute in-person visit. Same-day labs. A treatment plan reviewed when medically appropriate.",
              },
            ].map((step, i) => (
              <div key={step.num}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20, padding: "28px 0" }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#ffffff",
                      color: "#0B1029",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "0.01em",
                        lineHeight: 1.3,
                        marginBottom: 8,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 15, color: "#B0ADA8", lineHeight: 1.65 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
                {i < 2 && (
                  <div style={{ height: 1, background: "#1E244A", margin: "0 0 0 60px" }} />
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <CtaButton />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          9.4 LABS MIGHT BE NORMAL - Cream, 2-col
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={MAX_W}>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
            {/* Left: 60% */}
            <div>
              <p style={LABEL_STYLE}>IF THIS SOUNDS FAMILIAR</p>
              <h2 style={H2_STYLE}>Your labs might be normal. You still don&rsquo;t feel right.</h2>
              <p style={{ ...BODY_STYLE, color: "var(--color-ink-soft)" }}>
                Standard reference ranges are built around the average man. They tell you whether
                you&rsquo;re sick, not whether you&rsquo;re thriving. At Men&rsquo;s Wellness Centers,
                your physician interprets your numbers in the context of your symptoms, your training,
                and your life. Not against a chart.
              </p>

              {/* Inline quote box */}
              <div
                style={{
                  marginTop: 24,
                  background: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-navy-line)",
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.65,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;I went to two GPs who told me my levels were fine. After one visit at
                  Men&rsquo;s Wellness Centers I had answers and a plan.&rdquo;
                </p>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--color-ink-muted)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  R.T., Richmond. Verified member.
                </p>
              </div>
            </div>

            {/* Right: 40% — team photo */}
            <div
              style={{
                borderRadius: 12,
                aspectRatio: "4/5",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src="/images/cro/mwc-team.webp"
                alt="Men's Wellness Centers provider team in Virginia"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "40px 20px 20px",
                  background: "linear-gradient(to top, rgba(11,16,41,0.80) 0%, transparent 100%)",
                }}
              >
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 500, lineHeight: 1.4 }}>
                  Our Virginia provider team. Real physicians. Local to Virginia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. SYMPTOMS - now navy
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-navy">
        <div style={MAX_W}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div
              className="hidden lg:block relative"
              style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/5" }}
            >
              <img
                src="/images/trt-hero-man.jpg"
                alt="Confident man after TRT treatment at Men's Wellness Centers"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              {/* Overlay badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                  background: "#1E244A",
                  backdropFilter: "blur(8px)",
                  borderRadius: 10,
                  padding: "14px 18px",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.90)",
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;Low T affects roughly 1 in 4 men over 30. Most go
                  undiagnosed because standard panels miss the full picture.&rdquo;
                </p>
              </div>
            </div>

            {/* Right: Symptoms */}
            <div>
              <p style={{ ...LABEL_STYLE, color: "#E8670A" }}>Do Any of These Sound Familiar?</p>
              <h2 style={{ ...H2_STYLE, color: "#fff" }}>
                Low Testosterone Has Real Symptoms.{" "}
                You Deserve Real Answers.
              </h2>
              <p style={{ ...BODY_STYLE, color: "#B0ADA8" }}>
                These aren&rsquo;t signs of aging you just have to accept. They&rsquo;re symptoms
                of a hormonal imbalance that can be identified, measured, and treated.
              </p>

              <div className="flex flex-col" style={{ marginTop: 28, gap: 14 }}>
                {SYMPTOMS.map((s) => (
                  <div
                    key={s}
                    style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                  >
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "rgba(232,103,10,0.15)",
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
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "#B0ADA8",
                        lineHeight: 1.5,
                      }}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 32 }}>
                <CtaButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          9.6 INCLUDED + NOT HERE - 2-col restructure
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={MAX_W}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: What's Included */}
            <div>
              <p style={LABEL_STYLE}>What&rsquo;s Included</p>
              <h2 style={{ ...H2_STYLE, fontSize: "clamp(26px, 3.5vw, 38px)" }}>
                No Hidden Costs. No Surprises.
              </h2>
              <p style={{ ...BODY_STYLE, color: "var(--color-ink-soft)" }}>
                Your no-cost consultation covers everything you need to understand what&rsquo;s
                going on and what to do about it.
              </p>

              <div className="flex flex-col" style={{ marginTop: 28, gap: 14 }}>
                {INCLUDED.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      background: "var(--color-surface-elevated)",
                      border: "1px solid var(--color-navy-line)",
                      borderRadius: 10,
                      padding: "14px 18px",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: "var(--color-accent-tint)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} color="var(--color-accent)" strokeWidth={1.75} />
                    </div>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--color-ink)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: NOT HERE */}
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
                  color: "var(--color-ink-muted)",
                  marginBottom: 8,
                }}
              >
                NOT HERE
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
                What you won&rsquo;t find.
              </h3>
              <div className="flex flex-col" style={{ gap: 14 }}>
                {NOT_HERE_ITEMS.map((item) => (
                  <div
                    key={item}
                    style={{ display: "flex", alignItems: "center", gap: 14 }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "var(--color-surface-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <XCircle size={15} color="var(--color-ink-muted)" strokeWidth={1.75} />
                    </div>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--color-ink-soft)",
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          9.5 THREE PILLARS - now navy
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-navy">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ ...H2_STYLE, color: "#fff" }}>Physician-led. Virginia-local. Built for men.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: ShieldCheck,
                title: "Physician-Led",
                body: "Every evaluation, every protocol, every dose adjustment is overseen by a Virginia-licensed physician. Not a nurse practitioner. Not a coordinator.",
              },
              {
                Icon: MapPin,
                title: "Virginia-Local",
                body: "Three brick-and-mortar centers across Virginia. In-person visits, local providers, and same-day labs. No mail-order. No video calls.",
              },
              {
                Icon: User,
                title: "Built for Men",
                body: "Men's health is our only focus. Every protocol, every exam room, every team member is built around what men actually need.",
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                style={{
                  background: "#161B3A",
                  border: "1px solid #1E244A",
                  borderRadius: 12,
                  padding: 24,
                  textAlign: "center",
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
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "0.04em",
                    marginBottom: 10,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#B0ADA8",
                    lineHeight: 1.65,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          9.7 FIRST VISIT DETAIL - Navy, 6-item grid
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-navy">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ ...LABEL_STYLE }}>YOUR FIRST VISIT</p>
            <h2
              style={{
                ...H2_STYLE,
                color: "#fff",
              }}
            >
              What to expect at your first visit.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.65,
                marginTop: 14,
                maxWidth: 600,
                margin: "14px auto 0",
              }}
            >
              Your physician sees your intake before you arrive. Your first 60 minutes are
              focused on you, not paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "ARRIVE 5 MINUTES EARLY",
                body: "Park in the lot. Walk in. Your physician is ready at the top of the hour.",
              },
              {
                num: "02",
                title: "SAME-DAY IN-CENTER LABS",
                body: "Bloodwork drawn on site. Results in 15 minutes. No third-party lab waiting.",
              },
              {
                num: "03",
                title: "60-MINUTE PHYSICIAN VISIT",
                body: "A full clinical evaluation with a Virginia-licensed physician. No timer on the wall.",
              },
              {
                num: "04",
                title: "PERSONALIZED PROTOCOL",
                body: "Your physician reviews your labs and history and builds a plan when medically appropriate.",
              },
              {
                num: "05",
                title: "TRANSPARENT PRICING",
                body: "You see the cost before you commit. No insurance billing. FSA and HSA accepted.",
              },
              {
                num: "06",
                title: "ONGOING SUPPORT",
                body: "Lab monitoring, dose adjustments, and provider access between visits. Included in your plan.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: "#161B3A",
                  border: "1px solid #1E244A",
                  borderRadius: 12,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "var(--color-accent)",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.num}
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
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#B0ADA8",
                    lineHeight: 1.6,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6. TESTIMONIALS (existing, keep)
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={LABEL_STYLE}>Real Members</p>
            <h2 style={H2_STYLE}>
              Men Just Like You{" "}
              Are Getting Their Life Back
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, name, location, stars }) => (
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
                <div style={{ display: "flex", gap: 2 }}>
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--color-star)" stroke="var(--color-star)" aria-hidden />
                  ))}
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
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--color-ink)",
                    }}
                  >
                    {name}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--color-ink-muted)",
                      marginTop: 2,
                    }}
                  >
                    {location} &middot; Verified Member
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Google rating bar */}
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
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--color-ink)",
                }}
              >
                4.9 out of 5 &middot; 191 verified Google reviews
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          9.8 SECONDARY CTA BAND - Cream with navy card
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={{ ...MAX_W, maxWidth: 1024 }}>
          <div
            className="bg-navy rounded-2xl"
            style={{
              padding: "clamp(32px, 6vw, 40px) clamp(24px, 5vw, 40px)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(22px, 4vw, 34px)",
                fontWeight: 700,
                color: "#fff",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
                marginBottom: 12,
              }}
            >
              Done comparing? Most men book here.
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.65,
                marginBottom: 28,
                maxWidth: 560,
                margin: "12px auto 28px",
              }}
            >
              Three Virginia centers. Physician-led. Locally owned. The opposite of mail-order
              telehealth.
            </p>
            <CtaButton />
            <p
              style={{
                marginTop: 16,
                fontSize: 12,
                color: "rgba(255,255,255,0.60)",
                letterSpacing: "0.04em",
              }}
            >
              No referral needed &nbsp;|&nbsp; Same-day availability &nbsp;|&nbsp; FSA and HSA accepted
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          8. LOCATIONS (existing, keep)
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={LABEL_STYLE}>Our Centers</p>
            <h2 style={H2_STYLE}>
              3 Virginia Locations.{" "}
              All Taking New Members.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map(({ city, address, cityState, phone, mapUrl }) => (
              <div
                key={city}
                style={{
                  background: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-navy-line)",
                  borderRadius: 12,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                }}
              >
                <div
                  style={{
                    height: 3,
                    background: "var(--color-accent)",
                    borderRadius: 2,
                    marginBottom: 20,
                    width: 40,
                  }}
                />
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
                    <a href="tel:+18663444955" style={{ fontSize: 14, color: "var(--color-ink-soft)", textDecoration: "none" }}>
                      {phone}
                    </a>
                  </div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <Clock size={16} color="var(--color-accent)" strokeWidth={1.75} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "var(--color-ink-soft)" }}>
                      Same-day appointments available
                    </span>
                  </div>
                </div>

                <a
                  href={mapUrl}
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
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          7. FAQ - now navy
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-navy">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ ...LABEL_STYLE, color: "#E8670A" }}>Common Questions</p>
            <h2 style={{ ...H2_STYLE, color: "#fff" }}>
              Answers Before{" "}
              You Even Call
            </h2>
          </div>
          <TRTFAQAccordion />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          9. FINAL CTA + 9.9 REASSURANCE LINES
      ════════════════════════════════════════════════════ */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) 20px" }} className="bg-surface">
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
                fontSize: "clamp(28px, 5vw, 52px)",
                lineHeight: 1.05,
                color: "rgba(255,255,255,1)",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                marginBottom: 16,
              }}
            >
              Stop Accepting{" "}
              &ldquo;Normal&rdquo; When
              You Don&rsquo;t Feel Normal.
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.65,
                marginBottom: 36,
              }}
            >
              Your first visit is no-cost. On-site labs. Same-day results. No referral needed.
              Virginia&rsquo;s only specialty men&rsquo;s health practice with 3 locations.
            </p>

            <CtaButton size="lg" />

            {/* 9.9 Reassurance lines */}
            <div
              style={{
                marginTop: 16,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {[
                "Confidential. No obligation. No subscription.",
                "You'll hear back within one business hour.",
                "Speak to a real Virginia team member, not a chatbot.",
              ].map((line) => (
                <p
                  key={line}
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.6,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div
              className="flex flex-wrap justify-center gap-x-8 gap-y-3"
              style={{ marginTop: 24 }}
            >
              {["No referral needed", "Same-day availability", "FSA and HSA accepted", "HIPAA compliant"].map(
                (t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.60)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
      <DesktopStickyBar />
    </main>
  );
}
