"use client";

import { useFormModal } from "./FormModalProvider";

export function FinalCTA() {
  const { open } = useFormModal();

  return (
    <section
      style={{
        background: "#0B1029",
        padding: "clamp(64px,12vw,120px) 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
          fontWeight: 700,
          textTransform: "uppercase",
          fontSize: "clamp(28px, 5vw, 48px)",
          lineHeight: 1.05,
          color: "#fff",
          marginBottom: 12,
        }}
      >
        Stop Guessing.<br />Get Answers.
      </h2>
      <p style={{ fontSize: 16, color: "#B0ADA8", marginBottom: 32, fontFamily: "'Montserrat', system-ui, sans-serif" }}>
        No-cost visit. Same-day availability.
      </p>
      <button
        type="button"
        onClick={open}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          height: 56,
          padding: "0 32px",
          border: "none",
          borderRadius: 60,
          background: "#E8670A",
          color: "#fff",
          fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(232,103,10,0.40)",
          transition: "background 180ms ease, transform 180ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#CF5C09";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#E8670A";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Book In-Person Visit
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
