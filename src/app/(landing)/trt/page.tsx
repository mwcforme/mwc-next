import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { CredibilityBand } from "@/components/CredibilityBand";
import { TrustStrip } from "@/components/TrustStrip";
import { EverythingIncluded } from "@/components/EverythingIncluded";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { DesktopStickyBar } from "@/components/DesktopStickyBar";

export const metadata: Metadata = {
  title: "Testosterone Replacement Therapy in Virginia | Men's Wellness Centers",
  description:
    "Provider-supervised TRT at 3 Virginia locations. Labs drawn on-site. Results reviewed same visit. Same-day availability in Richmond, Virginia Beach & Newport News.",
};

const BULLETS = [
  "Testosterone, metabolic & CBC labs drawn on-site",
  "Board-certified provider reviews results same visit",
  "Leave with a clear plan — not a referral chain",
  "FSA & HSA accepted. No insurance required.",
];

export default function TRTPage() {
  return (
    <main style={{ background: "var(--navy-deep)", minHeight: "100vh" }}>
      <Header />

      {/* ── Hero ── */}
      <section
        style={{
          background: "#080D1F",
          minHeight: 720,
          paddingTop: 96,
          paddingBottom: 48,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 20px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 32,
            alignItems: "stretch",
          }}
          className="lg:grid-cols-[1fr_460px] lg:pt-[128px] lg:pb-[96px] lg:gap-[64px]"
        >
          {/* Left: Copy */}
          <div className="flex flex-col justify-center">
            {/* Stars */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
              }}
            >
              <svg width="80" height="14" viewBox="0 0 80 14" fill="#C9A961" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <polygon
                    key={i}
                    points="7,1 8.9,5.6 14,6.1 10,9.5 11.2,14 7,11.5 2.8,14 4,9.5 0,6.1 5.1,5.6"
                    transform={`translate(${i * 16}, 0)`}
                  />
                ))}
              </svg>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--off-white)" }}>
                4.9 · 200+ Google Reviews
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "clamp(26px, 7vw, 80px)",
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
                color: "#fff",
              }}
            >
              Low T?{" "}
              <span style={{ color: "#E8670A" }}>Get Answers</span>{" "}
              Today.
            </h1>

            <p
              style={{
                marginTop: 20,
                fontSize: "clamp(15px, 2vw, 19px)",
                lineHeight: 1.6,
                color: "var(--off-white)",
              }}
            >
              Provider-supervised testosterone therapy at 3 Virginia locations. Labs drawn on-site,
              results reviewed the same visit.
            </p>

            <ul
              className="hidden lg:flex flex-col gap-3"
              style={{ marginTop: 24, listStyle: "none" }}
            >
              {BULLETS.map((bullet) => (
                <li key={bullet} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E8670A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: 3 }}
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "var(--off-white)", lineHeight: 1.4 }}>
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div id="hero-form" className="flex justify-center lg:justify-end">
            <LeadForm formId="hero" source="trt-lander" dark={true} />
          </div>
        </div>
      </section>

      <CredibilityBand />
      <TrustStrip />
      <EverythingIncluded />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
      <DesktopStickyBar />
    </main>
  );
}
