"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { useFormModal } from "./FormModalProvider";

export function StickyMobileCTA() {
  const { open: openForm } = useFormModal();
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
      className="md:hidden"
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
      }}
    >
      {/* Dual path: call OR book — both one thumb-tap away (wireframe 18) */}
      <div style={{ display: "flex", gap: 10 }}>
        <a
          href="tel:+18663444955"
          aria-label="Call 866-344-4955"
          style={{
            flexShrink: 0,
            width: 104,
            height: 56,
            border: "2px solid #E8670A",
            borderRadius: 8,
            color: "#fff",
            fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <Phone size={16} strokeWidth={2.5} /> Call
        </a>
        <button
          type="button"
          onClick={openForm}
          style={{
            flex: 1,
            height: 56,
            background: "#E8670A",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 8,
            fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
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
          BOOK MY VISIT →
        </button>
      </div>
      <p
        style={{
          textAlign: "center",
          fontFamily: "var(--font-montserrat), system-ui, sans-serif",
          fontSize: 11,
          color: "#9CA3AF",
          margin: "6px 0 0",
          letterSpacing: "0.02em",
        }}
      >
        60-minute in-person visit · Men&rsquo;s Wellness Centers
      </p>
    </div>
  );
}
