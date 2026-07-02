"use client";

import { ArrowRight } from "lucide-react";
import { useFormModal } from "./FormModalProvider";

interface CtaButtonProps {
  label?: string;
  size?: "md" | "lg";
  /** solid = filled orange (primary); outline = orange border, transparent fill */
  variant?: "solid" | "outline";
  /** Navigate to a URL instead of opening the lead-form modal */
  href?: string;
  className?: string;
}

/**
 * Primary conversion button. Orange is reserved for CTAs only (brand rule).
 * Default behavior opens the lead-form modal so the visitor never loses
 * their scroll position; pass `href` to navigate instead.
 */
export function CtaButton({
  label = "Book My No-Cost Consultation",
  size = "md",
  variant = "solid",
  href,
  className,
}: CtaButtonProps) {
  const { open } = useFormModal();
  const solid = variant === "solid";

  const style: React.CSSProperties = {
    height: size === "lg" ? 60 : 52,
    padding: size === "lg" ? "0 40px" : "0 32px",
    borderRadius: 9999,
    background: solid ? "#E8670A" : "transparent",
    color: solid ? "#fff" : "#E8670A",
    border: solid ? "none" : "2px solid #E8670A",
    fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
    fontSize: size === "lg" ? 16 : 15,
    textTransform: "uppercase",
    letterSpacing: "0.07em",
    boxShadow: solid ? "0 4px 20px rgba(232,103,10,0.40)" : "none",
    transition: "background 180ms ease, color 180ms ease, transform 180ms ease",
  };

  const hover = {
    enter: (el: HTMLElement) => {
      if (solid) {
        el.style.background = "#CF5C09";
      } else {
        el.style.background = "#E8670A";
        el.style.color = "#fff";
      }
      el.style.transform = "translateY(-1px)";
    },
    leave: (el: HTMLElement) => {
      if (solid) {
        el.style.background = "#E8670A";
      } else {
        el.style.background = "transparent";
        el.style.color = "#E8670A";
      }
      el.style.transform = "translateY(0)";
    },
  };

  const sharedClass = `inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer font-bold ${className ?? ""}`;

  if (href) {
    return (
      <a
        href={href}
        className={sharedClass}
        style={style}
        onMouseEnter={(e) => hover.enter(e.currentTarget)}
        onMouseLeave={(e) => hover.leave(e.currentTarget)}
      >
        {label} <ArrowRight size={16} strokeWidth={2.5} />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={open}
      className={sharedClass}
      style={style}
      onMouseEnter={(e) => hover.enter(e.currentTarget)}
      onMouseLeave={(e) => hover.leave(e.currentTarget)}
    >
      {label} <ArrowRight size={16} strokeWidth={2.5} />
    </button>
  );
}
