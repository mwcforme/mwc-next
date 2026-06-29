import type { Metadata } from "next";
import { ChevronRight, Star } from "lucide-react";
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

const TRT_SYMPTOMS = [
  "You're tired by noon. Coffee stopped working.",
  "You're training just as hard. Your body stopped responding.",
  "Your drive is down. For work, the gym, her.",
  "Your doctor ran labs. Said everything is normal. You don't feel normal.",
  "You don't need a pep talk. You need someone to look at the data.",
];

export default function TRTPage() {
  return (
    <main style={{ background: "#0B1029", minHeight: "100vh" }}>
      <Header />

      {/* ── Hero ── */}
      <section
        style={{
          background: "#080D1F",
          minHeight: 720,
        }}
        className="flex items-start lg:items-center"
      >
        <div
          className="w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-8 lg:gap-16 items-start"
          style={{
            maxWidth: 1280,
            padding: "0 20px",
            paddingTop: 96,
            paddingBottom: 48,
          }}
        >
          {/* LEFT: Copy */}
          <div
            className="flex flex-col lg:pt-8"
            style={{ paddingTop: 0 }}
          >
            <h1
              className="font-bold uppercase"
              style={{
                fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                fontSize: "clamp(26px, 7vw, 96px)",
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                fontWeight: 700,
              }}
            >
              <span className="block">YOUR GP SAID YOU&rsquo;RE FINE.</span>
              <span className="block" style={{ color: "#E8670A" }}>YOU DON&rsquo;T FEEL FINE.</span>
            </h1>

            {/* Stars */}
            <div
              style={{
                marginTop: 16,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#C9A961" stroke="#C9A961" />
                ))}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#F5F0EB",
                  fontFamily: "'Montserrat', system-ui, sans-serif",
                }}
              >
                4.9 &middot; 191 verified Google reviews
              </span>
            </div>

            {/* Body copy */}
            <p
              style={{
                marginTop: 20,
                fontSize: 19,
                lineHeight: 1.6,
                color: "#F5F0EB",
                fontFamily: "'Montserrat', system-ui, sans-serif",
              }}
            >
              Your GP checked the basics and said you&rsquo;re fine. You&rsquo;re not fine. We specialize in men&rsquo;s
              hormones, ED, and weight loss. It&rsquo;s all we do. That focus is the difference.
            </p>

            {/* Symptom bullets — desktop only */}
            <div className="hidden lg:flex flex-col gap-3" style={{ marginTop: 24 }}>
              {TRT_SYMPTOMS.map((text) => (
                <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <ChevronRight
                    size={16}
                    strokeWidth={1.75}
                    aria-hidden
                    style={{ color: "#E8670A", marginTop: 3, flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#F5F0EB",
                      fontFamily: "'Montserrat', system-ui, sans-serif",
                      lineHeight: 1.4,
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Form */}
          <div
            id="hero-form"
            className="flex justify-center lg:justify-end"
          >
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
