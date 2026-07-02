import type { Metadata } from "next";
import {
  ChevronRight,
  Star,
  CheckCircle2,
  Zap,
  Heart,
  Dumbbell,
  ShieldCheck,
  FlaskConical,
  FileText,
  DollarSign,
  MapPin,
  Phone,
  Clock,
  XCircle,
  User,
  BadgeCheck,
  Stethoscope,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { DesktopStickyBar } from "@/components/DesktopStickyBar";
import { TRTFAQAccordion } from "@/components/TRTFAQAccordion";
import { TRTSubnav } from "@/components/TRTSubnav";
import { CtaButton } from "@/components/CtaButton";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Testosterone Replacement Therapy in Virginia | Men's Wellness Centers",
  description:
    "Provider-supervised TRT at 3 Virginia locations. Labs drawn on-site. Results reviewed same visit. Same-day availability in Richmond, Virginia Beach and Newport News.",
  // Paid-ads lander: keep out of organic search to avoid duplicate/competing results
  robots: { index: false, follow: false },
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
    mapQuery: "4050 Innslake Dr Suite 360 Glen Allen VA 23060",
  },
  {
    city: "Virginia Beach",
    address: "996 First Colonial Road",
    cityState: "Virginia Beach, VA 23454",
    phone: "866-344-4955",
    mapQuery: "996 First Colonial Road Virginia Beach VA 23454",
  },
  {
    city: "Newport News",
    address: "827 Diligence Drive, Suite 206",
    cityState: "Newport News, VA 23606",
    phone: "866-344-4955",
    mapQuery: "827 Diligence Drive Suite 206 Newport News VA 23606",
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
      <Header exitLinks={false} />

      {/* ════════════════════════════════════════════════════
          02. HERO + INLINE LEAD FORM (above fold)
      ════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "linear-gradient(135deg, #04081A 0%, #0B1029 50%, #0F1535 100%)",
          paddingTop: 32,
          paddingBottom: 48,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{ ...MAX_W }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-8 lg:gap-16 items-center"
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

            {/* Headline — matches ad creative (message match) */}
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
              <span className="block">Your GP Said You&rsquo;re Fine.</span>
              <span className="block">You Don&rsquo;t Feel Fine.</span>
            </h1>

            {/* Proof subhead — 11yr / 10,000+ = instant trust */}
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#C8C4BE", maxWidth: 520 }}>
              11 years. 10,000+ Virginia members. 60-minute in-person visit,
              same-day labs in 15 minutes.
            </p>

            {/* Trust badges (desktop; form card carries them on mobile) */}
            <div className="hidden sm:flex flex-wrap gap-3">
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
          </div>

          {/* RIGHT: Inline lead form — form + phone above the fold (CRO rule) */}
          <div className="flex justify-center lg:justify-end">
            <LeadForm formId="hero" source="trt-lander" variant="cro" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          03. TRUST STRIP — "is this legit?"
      ════════════════════════════════════════════════════ */}
      <section style={{ background: "#080D1F", paddingTop: 36, paddingBottom: 36 }}>
        <div style={{ ...MAX_W }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
            {[
              { value: "11", label: "YEARS IN VIRGINIA" },
              { value: "10K+", label: "MEMBERS SEEN" },
              { value: "4.9★", label: "191+ GOOGLE REVIEWS" },
              { value: null, label: "LEGITSCRIPT CERTIFIED" },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                className={i < 3 ? "lg:border-r" : ""}
                style={{
                  textAlign: "center",
                  padding: "0 16px",
                  borderColor: "#1E244A",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {value ? (
                  <div
                    style={{
                      fontSize: "clamp(30px, 4.5vw, 44px)",
                      fontWeight: 700,
                      color: "#F5F0EB",
                      letterSpacing: "-0.01em",
                      lineHeight: 1,
                      fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                    }}
                  >
                    {value}
                  </div>
                ) : (
                  <img
                    src="/images/badges/legitscript.webp"
                    alt="LegitScript certified"
                    style={{ height: 40, width: "auto" }}
                    loading="lazy"
                  />
                )}
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.65)",
                    marginTop: 8,
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
          04. STICKY ANCHOR SUBNAV (desktop)
      ════════════════════════════════════════════════════ */}
      <TRTSubnav />

      {/* ════════════════════════════════════════════════════
          05. SERVICE TRIPTYCH — "are they generalists?"
      ════════════════════════════════════════════════════ */}
      <section id="services" style={{ ...SECTION_PAD, scrollMarginTop: 120 }} className="bg-surface">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={LABEL_STYLE}>WHY MWC IS DIFFERENT</p>
            <h2 style={H2_STYLE}>This Is All We Do.</h2>
            <p
              style={{
                fontSize: 17,
                color: "var(--color-ink-soft)",
                lineHeight: 1.65,
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
                tag: "LOW TESTOSTERONE",
                heading: "Get your energy back",
                body: "Physician-led hormone evaluation with same-day labs. Personalized protocols when clinically appropriate.",
                img: "/images/cro/hero-trt-v4.jpg",
              },
              {
                tag: "SEXUAL HEALTH",
                heading: "Perform with confidence again",
                body: "An in-person evaluation with a Virginia-licensed provider, same-day. FDA-approved options reviewed when clinically appropriate.",
                img: "/images/cro/hero-ed-v2.jpg",
              },
              {
                tag: "MEDICAL WEIGHT LOSS",
                heading: "Drop the weight that won't budge",
                body: "Physician-led, lab-guided weight loss monitored at your local Men's Wellness Centers. GLP-1 medications when clinically appropriate.",
                img: "/images/cro/hero-wl-v3.jpg",
              },
            ].map(({ tag, heading, body, img }) => (
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
                <div style={{ height: 200, position: "relative", overflow: "hidden" }}>
                  <img
                    src={img}
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
                  <p style={{ fontSize: 14, color: "var(--color-ink-soft)", lineHeight: 1.6, flex: 1 }}>
                    {body}
                  </p>
                  {/* Card CTA = "Reserve", not "Learn more" */}
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
                    Reserve my visit <ChevronRight size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <CtaButton label="Reserve My 60-Min Visit" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          06. THE PROCESS (one visit) — "will this take all day?"
      ════════════════════════════════════════════════════ */}
      <section id="process" style={{ ...SECTION_PAD, scrollMarginTop: 120 }} className="bg-navy">
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
                callout: "CLIA-certified lab on-site · results in 15 minutes",
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
                    {step.callout && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          marginTop: 12,
                          background: "rgba(232,103,10,0.12)",
                          border: "1px solid rgba(232,103,10,0.40)",
                          borderRadius: 100,
                          padding: "6px 14px",
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          color: "#F5F0EB",
                        }}
                      >
                        <FlaskConical size={14} color="#E8670A" strokeWidth={2} />
                        {step.callout}
                      </span>
                    )}
                  </div>
                </div>
                {i < 2 && (
                  <div style={{ height: 1, background: "#1E244A", margin: "0 0 0 60px" }} />
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <CtaButton label="Book My No-Cost Consultation" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          07. MEET YOUR VIRGINIA PROVIDERS — "who's treating me?"
      ════════════════════════════════════════════════════ */}
      <section id="providers" style={{ ...SECTION_PAD, scrollMarginTop: 120 }} className="bg-surface">
        <div style={MAX_W}>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
            {/* Left: team photo */}
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

            {/* Right: credentials */}
            <div>
              <p style={LABEL_STYLE}>MEET YOUR VIRGINIA PROVIDERS</p>
              <h2 style={H2_STYLE}>You&rsquo;ll know exactly who&rsquo;s treating you.</h2>
              <p style={{ ...BODY_STYLE, color: "var(--color-ink-soft)" }}>
                Every evaluation, every protocol, and every dose adjustment at Men&rsquo;s Wellness
                Centers is overseen by a Virginia-licensed provider who works exclusively in
                men&rsquo;s health. You meet them in person, at your local center, on your first visit.
              </p>

              <div className="flex flex-col" style={{ marginTop: 28, gap: 14 }}>
                {[
                  {
                    Icon: BadgeCheck,
                    title: "Virginia-licensed providers",
                    body: "Licensed in the Commonwealth of Virginia. Credentials and licensure available at every center.",
                  },
                  {
                    Icon: Stethoscope,
                    title: "Men's hormone health is their only focus",
                    body: "Not a general practice rotation. Your provider evaluates men's hormone panels every single day.",
                  },
                  {
                    Icon: Clock,
                    title: "11 years serving Virginia men",
                    body: "The same local team, in the same centers, not a rotating cast of telehealth contractors.",
                  },
                ].map(({ Icon, title, body }) => (
                  <div
                    key={title}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      background: "var(--color-surface-elevated)",
                      border: "1px solid var(--color-navy-line)",
                      borderRadius: 10,
                      padding: "16px 18px",
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
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, color: "var(--color-ink)" }}>{title}</p>
                      <p style={{ fontSize: 13, color: "var(--color-ink-soft)", lineHeight: 1.55, marginTop: 4 }}>
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          08. INSIDE OUR CENTERS — "real place or mail-order?"
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-navy">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ ...LABEL_STYLE, color: "#E8670A" }}>INSIDE OUR CENTERS</p>
            <h2 style={{ ...H2_STYLE, color: "#fff" }}>A real center. Not a shipping label.</h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.65,
                maxWidth: 600,
                margin: "14px auto 0",
              }}
            >
              Three brick-and-mortar centers across Virginia. Walk in, meet your provider,
              get your labs drawn, all under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { img: "/images/cro/doctor-consult.webp", label: "Private consultation rooms" },
              { img: "/images/clinic-lab-draw.webp", label: "On-site lab draw station" },
              { img: "/images/man-gym-confident.webp", label: "Real storefronts. Walk right in." },
            ].map(({ img, label }) => (
              <div key={label} style={{ borderRadius: 12, overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
                <img
                  src={img}
                  alt={label}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "32px 16px 14px",
                    background: "linear-gradient(to top, rgba(11,16,41,0.85) 0%, transparent 100%)",
                  }}
                >
                  <p style={{ color: "rgba(255,255,255,0.92)", fontSize: 13, fontWeight: 600 }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          09. SYMPTOM CHECKLIST — self-identification
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={MAX_W}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: member portrait (45–55 demographic) */}
            <div
              className="hidden lg:block relative"
              style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/5" }}
            >
              <img
                src="/images/patient-trt.webp"
                alt="Men's Wellness Centers member"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                  background: "rgba(11,16,41,0.90)",
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
              <p style={LABEL_STYLE}>Do Any of These Sound Familiar?</p>
              <h2 style={H2_STYLE}>
                Your labs might be &ldquo;normal.&rdquo; You still don&rsquo;t feel right.
              </h2>
              <p style={{ ...BODY_STYLE, color: "var(--color-ink-soft)" }}>
                These aren&rsquo;t signs of aging you just have to accept. They&rsquo;re symptoms
                of a hormonal imbalance that can be identified, measured, and treated. Your
                physician interprets your numbers against your symptoms and your life, not just a chart.
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
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "var(--color-ink-soft)",
                        lineHeight: 1.5,
                      }}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 32 }}>
                <CtaButton label="Book My No-Cost Consultation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          10. INCLUDED + NOT HERE — cost / hidden fees objection
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-navy">
        <div style={MAX_W}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: What's Included */}
            <div>
              <p style={{ ...LABEL_STYLE, color: "#E8670A" }}>What&rsquo;s Included</p>
              <h2 style={{ ...H2_STYLE, color: "#fff", fontSize: "clamp(26px, 3.5vw, 38px)" }}>
                No Hidden Costs. No Surprises.
              </h2>
              <p style={{ ...BODY_STYLE, color: "#B0ADA8" }}>
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
                      background: "#161B3A",
                      border: "1px solid #1E244A",
                      borderRadius: 10,
                      padding: "14px 18px",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: "rgba(232,103,10,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} color="var(--color-accent)" strokeWidth={1.75} />
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: NOT HERE */}
            <div
              style={{
                background: "#161B3A",
                border: "1px solid #1E244A",
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
                NOT HERE
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
                        background: "rgba(255,255,255,0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <XCircle size={15} color="rgba(255,255,255,0.45)" strokeWidth={1.75} />
                    </div>
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#B0ADA8",
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
          11. POSITIONING — local-vs-local, never name competitors
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={H2_STYLE}>Physician-led. Virginia-local. Built for men.</h2>
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
                  background: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-navy-line)",
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
                    background: "var(--color-navy)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Icon size={24} color="#fff" strokeWidth={1.75} />
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    letterSpacing: "0.04em",
                    marginBottom: 10,
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--color-ink-soft)", lineHeight: 1.65 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          12. REVIEWS — "are testimonials fake?"
      ════════════════════════════════════════════════════ */}
      <section id="reviews" style={{ ...SECTION_PAD, scrollMarginTop: 120 }} className="bg-surface">
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

          {/* Google rating bar — links to live reviews */}
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
                4.9 out of 5 &middot; 191+ verified Google reviews &middot; read them live
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          13. "DONE COMPARING?" + REPEAT FORM — mid-page conversion
      ════════════════════════════════════════════════════ */}
      <section style={{ ...SECTION_PAD }} className="bg-surface">
        <div style={{ ...MAX_W, maxWidth: 1100 }}>
          <div
            className="bg-navy rounded-2xl grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-center"
            style={{
              padding: "clamp(32px, 6vw, 48px) clamp(24px, 5vw, 48px)",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "clamp(24px, 4vw, 36px)",
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
                  fontSize: 15,
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.65,
                  maxWidth: 480,
                }}
              >
                Three Virginia centers. Physician-led. The opposite of mail-order telehealth.
              </p>
              {/* Proof line above the button (wireframe 13) */}
              <p
                style={{
                  marginTop: 20,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                11 years &nbsp;&middot;&nbsp; 10,000+ members &nbsp;&middot;&nbsp; Locally owned
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <LeadForm formId="midpage" source="trt-lander-midpage" variant="cro" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          14. LOCATIONS + MAPS — "are they near me?"
      ════════════════════════════════════════════════════ */}
      <section id="locations" style={{ ...SECTION_PAD, scrollMarginTop: 120 }} className="bg-surface">
        <div style={MAX_W}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={LABEL_STYLE}>Our Centers</p>
            <h2 style={H2_STYLE}>
              3 Virginia Locations.{" "}
              All Taking New Members.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map(({ city, address, cityState, phone, mapQuery }) => (
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
                {/* Embedded map (keyless Google embed) */}
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
          15. FAQ — objection handling
      ════════════════════════════════════════════════════ */}
      <section id="faq" style={{ ...SECTION_PAD, scrollMarginTop: 120 }} className="bg-navy">
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
          16. FINAL CTA — last push
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
                marginBottom: 12,
              }}
            >
              Your first visit is no-cost. On-site labs. Same-day results. No referral needed.
            </p>
            {/* Proof line — 11 years, 10,000+ members, locally owned */}
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                marginBottom: 32,
              }}
            >
              11 years &nbsp;&middot;&nbsp; 10,000+ members &nbsp;&middot;&nbsp; Locally owned
            </p>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
              <CtaButton size="lg" label="Book My No-Cost Consultation" />
              <a
                href="tel:+18663444955"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <Phone size={15} strokeWidth={2} /> Or call 866-344-4955
              </a>
            </div>

            {/* Reassurance lines */}
            <div
              style={{
                marginTop: 20,
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
