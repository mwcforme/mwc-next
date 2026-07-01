"use client";

import { ArrowRight } from "lucide-react";
import { useFormModal } from "./FormModalProvider";

interface CtaButtonProps {
  label?: string;
  size?: "md" | "lg";
}

/**
 * Primary conversion button. Orange is reserved for CTAs only (brand rule).
 * Opens the lead-form modal so the visitor never loses their scroll position.
 */
export function CtaButton({ label = "Book My No-Cost Consultation", size = "md" }: CtaButtonProps) {
  const { open } = useFormModal();

  return (
    <button
      type="button"
      onClick={open}
      className="inline-flex items-center gap-2 whitespace-nowrap cursor-pointer border-none font-bold"
      style={{
        height: size === "lg" ? 60 : 52,
        padding: size === "lg" ? "0 40px" : "0 32px",
        borderRadius: 9999,
        background: "#E8670A",
        color: "#fff",
        fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
        fontSize: size === "lg" ? 16 : 15,
        textTransform: "uppercase",
        letterSpacing: "0.07em",
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
      {label} <ArrowRight size={16} strokeWidth={2.5} />
    </button>
  );
}
