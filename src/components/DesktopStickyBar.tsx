"use client";

import { useState, useEffect } from "react";
import { useFormModal } from "./FormModalProvider";

export function DesktopStickyBar() {
  const [visible, setVisible] = useState(false);
  const { open: openForm } = useFormModal();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="hidden md:flex"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        height: 64,
        background: "#0B1029",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.40)",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        fontFamily: "Montserrat, var(--font-body), sans-serif",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 300ms ease",
      }}
      aria-hidden={!visible}
    >
      <span style={{ fontWeight: 700, color: "#FFFFFF", fontSize: 14 }}>
        Virginia&rsquo;s #1 Men&rsquo;s Health Center
        <span style={{ margin: "0 12px", color: "#E8670A" }}>&middot;</span>
        Same-Day Availability
      </span>
      <button
        type="button"
        onClick={openForm}
        style={{
          padding: "0 28px",
          height: 44,
          background: "#E8670A",
          color: "#FFFFFF",
          border: "none",
          borderRadius: 9999,
          fontFamily: "Oswald, var(--font-display), sans-serif",
          fontSize: 14,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(232,103,10,0.35)",
          transition: "background 150ms ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "#D15F09"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "#E8670A"; }}
      >
        Claim My Visit
      </button>
    </div>
  );
}
