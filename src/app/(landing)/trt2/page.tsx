"use client";

import {
  ChevronRight,
  CheckCircle2,
  Zap,
  Brain,
  Dumbbell,
  Check,
  X,
  ChevronLeft,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { DesktopStickyBar } from "@/components/DesktopStickyBar";

const MAX_W = { maxWidth: 1440, margin: "0 auto", width: "100%", padding: "0 clamp(20px, 4vw, 80px)" } as React.CSSProperties;

export default function TRT2Page() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: 64, width: "100%", background: "var(--surface)" }}>
      <Header />
      <DesktopStickyBar />
      <StickyMobileCTA />

      {/* ════════════════════════════════════════════════════
          1. HERO (Dark navy rounded card, Marek-style)
      ════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 48, paddingBottom: 48, background: "var(--surface)" }}>
        <div style={{ ...MAX_W }}>
          <div
            style={{
              background: "var(--navy)",
              borderRadius: 24,
              padding: "clamp(40px, 6vw, 80px)",
              color: "#F5F0EB",
            }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center"
          >
            {/* LEFT: Copy */}
            <div className="flex flex-col gap-6">
              {/* Section label with dot */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, width: "fit-content" }}>
                <span style={{ fontSize: 20, color: "var(--color-accent)" }}>●</span>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8C4BE" }}>
                  Physician-Led TRT
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                  fontWeight: 900,
                  textTransform: "uppercase",
                }}
              >
                Take Control of Your Testosterone Health
              </h1>

              {/* Bulleted value props */}
              <div className="flex flex-col gap-3">
                {[
                  "Same-day lab results in-office",
                  "Physician-led assessment & personalized treatment",
                  "3 locations across Virginia",
                  "No insurance claim hassles",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <CheckCircle2 size={18} color="var(--color-accent)" strokeWidth={2} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 16, lineHeight: 1.5, color: "#C8C4BE" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button (pill-shaped) */}
              <div style={{ marginTop: 16 }}>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 32px",
                    borderRadius: 200,
                    background: "var(--color-accent)",
                    color: "#FFFFFF",
                    border: "none",
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "opacity 200ms",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
                >
                  Get Started
                  <ChevronRight size={16} strokeWidth={2.5} />
                </button>
              </div>

              {/* Fine print */}
              <p style={{ fontSize: 12, color: "#7C7972", lineHeight: 1.6, maxWidth: 400, marginTop: 8 }}>
                15-minute consultation. Same-day assessment. Lab work completed on-site. Results reviewed same visit.
              </p>
            </div>

            {/* RIGHT: Product image */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 600 }} className="hidden lg:flex">
              <img
                src="/images/trt-vial-mwc-transparent.png"
                alt="Testosterone Cypionate"
                style={{
                  
                  width: "100%",
                  filter: "drop-shadow(0 24px 64px rgba(0,0,0,0.40))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2. STATS ROW (Light background)
      ════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 48, paddingBottom: 48, background: "var(--surface)" }}>
        <div style={{ ...MAX_W }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {[
              { num: "15 MIN", label: "Lab Results" },
              { num: "10,000+", label: "VA Members" },
              { num: "4.9★", label: "191 Reviews" },
              { num: "100%", label: "Physician-Led" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    fontWeight: 900,
                    color: "var(--color-ink)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-ink-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 8 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. HOW TESTOSTERONE CHANGES HOW YOU FEEL (2-col + cards)
      ════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 64, paddingBottom: 64, background: "var(--surface)" }}>
        <div style={{ ...MAX_W }}>
          {/* Left: Headline + copy */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-10 lg:gap-16 items-start mb-16">
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{ fontSize: 20, color: "var(--color-accent)" }}>●</span>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)" }}>
                  Real Transformations
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: "var(--color-ink)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                }}
              >
                How Optimized Testosterone Changes How You Feel
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--color-ink-soft)", marginTop: 20, maxWidth: 520 }}>
                Within 6-8 weeks of starting treatment, men report significant improvements across energy, mood, body composition, and sexual performance.
              </p>
            </div>

            {/* Right: CTA */}
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 32px",
                  borderRadius: 200,
                  background: "var(--color-accent)",
                  color: "#FFFFFF",
                  border: "none",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "opacity 200ms",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* 3-column feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Zap, title: "Energy & Drive", body: "Wake refreshed. Maintain energy all day. Peak performance returns." },
              { Icon: Brain, title: "Mental Clarity", body: "Sharper focus. Improved mood. Reduced brain fog and irritability." },
              { Icon: Dumbbell, title: "Body Composition", body: "Build muscle. Lose fat. Faster recovery. Strength gains." },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: "var(--navy)",
                  borderRadius: 16,
                  padding: "clamp(24px, 4vw, 40px)",
                  color: "#F5F0EB",
                }}
              >
                <card.Icon size={32} color="var(--color-accent)" strokeWidth={2} />
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF", marginTop: 12 }}>{card.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#C8C4BE", marginTop: 10 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4. CLIENT RESULTS (Before/After Grid)
      ════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 64, paddingBottom: 64, background: "var(--surface)" }}>
        <div style={{ ...MAX_W }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{ fontSize: 20, color: "var(--color-accent)" }}>●</span>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)" }}>
                  Real Client Results
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 48px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: "var(--color-ink)",
                  fontWeight: 900,
                  textTransform: "uppercase",
                }}
              >
                Men Are Getting Results
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--color-ink-soft)", marginTop: 20, maxWidth: 480 }}>
                Physician-supervised treatment. Same-day labs. Measurable results. These aren't before/afters from 12 months—these are typical 8-week transformations.
              </p>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 32px",
                  borderRadius: 200,
                  background: "var(--color-accent)",
                  color: "#FFFFFF",
                  border: "none",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  marginTop: 32,
                  transition: "opacity 200ms",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
              >
                Join Them
              </button>
            </div>

            {/* Right: Placeholder for before/after grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                background: "var(--color-surface-subtle)",
                borderRadius: 16,
                padding: 20,
                minHeight: 600,
              }}
            >
              {["Dylan R.", "Erin C.", "Richard O.", "Josh C."].map((name, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--navy)",
                    borderRadius: 12,
                    height: 180,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#C8C4BE",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          5. COMPARISON TABLE (MWC vs others)
      ════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 64, paddingBottom: 64, background: "var(--surface)" }}>
        <div style={{ ...MAX_W }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ fontSize: 20, color: "var(--color-accent)" }}>●</span>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)" }}>
                Why Choose Us
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "var(--color-ink)",
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              MWC vs. the Competition
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-navy-line)" }}>
                  <th style={{ padding: "16px", textAlign: "left", fontSize: 14, fontWeight: 700, color: "var(--color-ink)", textTransform: "uppercase" }}>
                    Feature
                  </th>
                  <th
                    style={{
                      padding: "16px",
                      textAlign: "center",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#FFFFFF",
                      background: "var(--navy)",
                      borderRadius: "8px 0 0 0",
                    }}
                  >
                    Men&apos;s Wellness
                  </th>
                  <th style={{ padding: "16px", textAlign: "center", fontSize: 14, fontWeight: 700, color: "var(--color-ink)" }}>
                    Telehealth Clinics
                  </th>
                  <th style={{ padding: "16px", textAlign: "center", fontSize: 14, fontWeight: 700, color: "var(--color-ink)" }}>
                    Big Box MD
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "In-Person Evaluation", mwc: true, tele: false, big: false },
                  { feature: "Same-Day Lab Results", mwc: true, tele: false, big: true },
                  { feature: "Physician-Led (Not PA/NP)", mwc: true, tele: false, big: false },
                  { feature: "No Insurance Claims", mwc: true, tele: true, big: false },
                  { feature: "3 Local Locations", mwc: true, tele: false, big: false },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--color-navy-line)" }}>
                    <td style={{ padding: "16px", fontSize: 14, color: "var(--color-ink)", fontWeight: 600 }}>{row.feature}</td>
                    <td style={{ padding: "16px", textAlign: "center", background: "var(--color-accent-tint)" }}>
                      {row.mwc ? <Check size={18} color="var(--color-accent)" strokeWidth={3} /> : <X size={18} color="var(--color-ink-muted)" strokeWidth={3} />}
                    </td>
                    <td style={{ padding: "16px", textAlign: "center" }}>
                      {row.tele ? <Check size={18} color="var(--color-accent)" strokeWidth={3} /> : <X size={18} color="var(--color-ink-muted)" strokeWidth={3} />}
                    </td>
                    <td style={{ padding: "16px", textAlign: "center" }}>
                      {row.big ? <Check size={18} color="var(--color-accent)" strokeWidth={3} /> : <X size={18} color="var(--color-ink-muted)" strokeWidth={3} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6. TRUST METRICS
      ════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 64, paddingBottom: 64, background: "var(--navy)" }}>
        <div style={{ ...MAX_W }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "4.9★", label: "191 Google Reviews" },
              { stat: "10,000+", label: "Virginia Members" },
              { stat: "15 MIN", label: "Lab Results Reported" },
              { stat: "100%", label: "HIPAA Compliant" },
            ].map((metric, i) => (
              <div key={i} style={{ textAlign: "center", color: "#F5F0EB" }}>
                <div style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, letterSpacing: "-0.01em", lineHeight: 1 }}>
                  {metric.stat}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 12, color: "#C8C4BE" }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          7. FAQ (Left/Right columns)
      ════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 64, paddingBottom: 64, background: "var(--surface)" }}>
        <div style={{ ...MAX_W }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2
              style={{
                fontSize: "clamp(32px, 4.5vw, 48px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "var(--color-ink)",
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Common Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
            {/* Left: Questions */}
            <div className="flex flex-col gap-2">
              {[
                "How long until I see results?",
                "What if my labs come back normal?",
                "Do you accept insurance?",
                "Is it subscription-based?",
              ].map((q, i) => (
                <button
                  key={i}
                  style={{
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "1px solid var(--color-navy-line)",
                    background: i === 0 ? "var(--color-accent-tint)" : "transparent",
                    color: "var(--color-ink)",
                    fontSize: 14,
                    fontWeight: 600,
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 200ms",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--color-accent-tint)";
                  }}
                  onMouseLeave={(e) => {
                    if (i !== 0) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Right: Answer */}
            <div
              style={{
                background: "var(--color-surface-elevated)",
                border: "1px solid var(--color-navy-line)",
                borderRadius: 12,
                padding: "32px",
              }}
            >
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--color-ink)", marginBottom: 16 }}>
                How long until I see results?
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-ink-soft)" }}>
                Most men report noticeable improvements in energy and mood within 2-4 weeks. Sexual function typically improves within 6-8 weeks. Body composition changes become visible around 8-12 weeks with proper diet and exercise. All changes are supported by repeat lab work.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
                <button style={{ padding: "8px 16px", background: "transparent", border: "1px solid var(--color-navy-line)", borderRadius: 6, cursor: "pointer" }}>
                  <ChevronLeft size={16} />
                </button>
                <button style={{ padding: "8px 16px", background: "transparent", border: "1px solid var(--color-navy-line)", borderRadius: 6, cursor: "pointer" }}>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          8. FINAL CTA (Dark card, Marek-style)
      ════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 48, paddingBottom: 48, background: "var(--surface)" }}>
        <div style={{ ...MAX_W }}>
          <div
            style={{
              background: "var(--navy)",
              borderRadius: 24,
              padding: "clamp(40px, 6vw, 80px)",
              textAlign: "center",
              color: "#F5F0EB",
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              <span style={{ fontSize: 20, color: "var(--color-accent)" }}>●</span>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#C8C4BE" }}>
                The Time Is Now
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontWeight: 900,
                textTransform: "uppercase",
              }}
            >
              Join Thousands Optimizing Their Health
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#C8C4BE", marginTop: 20, maxWidth: 700, margin: "20px auto 0" }}>
              Same-day lab results. Physician-led treatment. Three Virginia locations. Start your consultation today.
            </p>
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "16px 40px",
                borderRadius: 200,
                background: "var(--color-accent)",
                color: "#FFFFFF",
                border: "none",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                marginTop: 32,
                transition: "opacity 200ms",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
            >
              Schedule Now
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
