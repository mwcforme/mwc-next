"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

/*
 * Google reviews carousel (wireframe section 12).
 * Initials + city only (HIPAA). The "live" badge links to the Google
 * listing — a true auto-updating widget needs a Places API key.
 */
const REVIEWS = [
  {
    quote:
      "I've been to two GPs who told me my levels were fine. After one visit here I had answers and a plan. Game-changer.",
    name: "R.T.",
    location: "Richmond, VA",
  },
  {
    quote:
      "Same-day labs changed everything. I walked in not knowing what was wrong and left with a real treatment plan the same day.",
    name: "D.M.",
    location: "Virginia Beach, VA",
  },
  {
    quote:
      "Within 6 weeks I felt like myself again. Energy is back. Focus is back. I only wish I'd found them sooner.",
    name: "J.K.",
    location: "Newport News, VA",
  },
];

const GBP_URL = "https://www.google.com/maps/search/Men%27s+Wellness+Centers";

export function ReviewsCarousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setIdx((i) => (i + 1) % REVIEWS.length);
  const review = REVIEWS[idx];

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      {/* Live rating badge */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
        <a
          href={GBP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "var(--color-surface-elevated)",
            border: "1px solid var(--color-navy-line)",
            borderRadius: 100,
            padding: "10px 20px",
            textDecoration: "none",
          }}
        >
          <span style={{ display: "flex", gap: 2 }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="var(--color-star)" stroke="var(--color-star)" aria-hidden />
            ))}
          </span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-ink)" }}>
            4.9 &middot; 191+ Google reviews
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#0E7C66",
              border: "1px solid rgba(14,124,102,0.35)",
              borderRadius: 100,
              padding: "2px 8px",
            }}
          >
            Live
          </span>
        </a>
      </div>

      {/* Card */}
      <div
        style={{
          background: "var(--color-surface-elevated)",
          border: "1px solid var(--color-navy-line)",
          borderRadius: 16,
          padding: "36px 32px",
          textAlign: "center",
          minHeight: 220,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        aria-live="polite"
      >
        <div style={{ display: "flex", justifyContent: "center", gap: 2, marginBottom: 16 }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="var(--color-star)" stroke="var(--color-star)" aria-hidden />
          ))}
        </div>
        <p
          style={{
            fontSize: 17,
            color: "var(--color-ink-soft)",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          &ldquo;{review.quote}&rdquo;
        </p>
        <p style={{ marginTop: 18, fontSize: 13, fontWeight: 700, color: "var(--color-ink)" }}>
          {review.name}
          <span style={{ fontWeight: 500, color: "var(--color-ink-muted)" }}>
            {" "}&middot; {review.location} &middot; Verified member
          </span>
        </p>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 20 }}>
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid var(--color-navy-line)",
            background: "var(--color-surface-elevated)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronLeft size={18} color="var(--color-ink)" />
        </button>
        <div style={{ display: "flex", gap: 8 }}>
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Go to review ${i + 1}`}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                background: i === idx ? "var(--color-accent)" : "var(--color-navy-line)",
              }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1px solid var(--color-navy-line)",
            background: "var(--color-surface-elevated)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronRight size={18} color="var(--color-ink)" />
        </button>
      </div>
    </div>
  );
}
