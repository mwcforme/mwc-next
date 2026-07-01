"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

/*
 * Objection-handling FAQ (wireframe section 15):
 * cost, insurance, referral, speed of results, privacy/HIPAA.
 * Compliance disclosures included in the answers.
 */
const FAQS = [
  {
    q: "How much does it cost?",
    a: "Your first visit — a 60-minute in-person evaluation with same-day labs — is no-cost. If treatment is medically appropriate, your provider walks you through transparent pricing before you commit to anything. No surprise bills, no hidden fees, no subscription.",
  },
  {
    q: "Do you take insurance?",
    a: "We don't bill insurance, and that's by design: no claims, no referrals, no waiting on authorizations. Pricing is transparent and often less than out-of-pocket costs elsewhere. FSA and HSA cards are accepted.",
  },
  {
    q: "Do I need a referral?",
    a: "No. You can book directly — no referral from a GP, no prior labs required. Bloodwork is drawn on-site at your visit with results in about 15 minutes.",
  },
  {
    q: "How fast will I see results?",
    a: "You'll have lab results and a plan the same day as your first visit. If treatment is started, most men report noticeable improvements in energy and mood within 2–4 weeks, with continued gains over 8–12 weeks. Individual results vary, and treatment is provided only when medically appropriate.",
  },
  {
    q: "Is my visit private and HIPAA compliant?",
    a: "Yes. Men's Wellness Centers is fully HIPAA compliant and LegitScript certified. Your consultation is confidential, your records are protected, and testimonials on this page use initials and city only.",
  },
  {
    q: "Is this a subscription or a contract?",
    a: "No subscription and no long-term contract. You see the cost of your plan up front and you can stop at any time. Ongoing lab monitoring and provider access are included while you're a member.",
  },
];

export function TRTFAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      {FAQS.map(({ q, a }, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={q}
            style={{
              borderBottom: "1px solid #1E244A",
              background: isOpen ? "#161B3A" : "transparent",
              borderRadius: isOpen ? 10 : 0,
              transition: "background 180ms ease",
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "20px 16px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.4,
                }}
              >
                {q}
              </span>
              {isOpen ? (
                <Minus size={18} color="#E8670A" strokeWidth={2.5} style={{ flexShrink: 0 }} />
              ) : (
                <Plus size={18} color="#E8670A" strokeWidth={2.5} style={{ flexShrink: 0 }} />
              )}
            </button>
            {isOpen && (
              <p
                style={{
                  padding: "0 16px 20px",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#B0ADA8",
                }}
              >
                {a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
