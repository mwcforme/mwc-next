"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,16,41,0.95)" : "rgba(11,16,41,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        height: 64,
      }}
    >
      <div
        className="flex items-center justify-between px-6 mx-auto h-full"
        style={{ maxWidth: 1200 }}
      >
        {/* Logo */}
        <a href="https://menswellnesscenters.com" aria-label="Men's Wellness Centers home" className="inline-flex">
          <img
            src="/logos/Text_Logo_white.webp"
            alt="Men's Wellness Centers"
            width={180}
            height={28}
            className="h-7 w-auto"
          />
        </a>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+18663444955"
            className="text-sm font-medium transition-opacity hover:opacity-80"
            style={{ color: "#F5F0EB", fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            866-344-4955
          </a>
          <button
            type="button"
            onClick={scrollToForm}
            className="h-[44px] inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer border-none font-bold"
            style={{
              padding: "0 22px",
              borderRadius: 60,
              boxShadow: "0 4px 16px rgba(232,103,10,0.40)",
              transition: "background 180ms ease, transform 180ms ease",
              fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              background: "#E8670A",
              color: "#fff",
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
            Book Appointment <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile: phone icon */}
        <div className="md:hidden flex items-center">
          <a
            href="tel:+18663444955"
            aria-label="Call 866-344-4955"
            className="relative inline-flex items-center justify-center rounded-full"
            style={{
              width: 52,
              height: 52,
              background: "#E8670A",
              color: "#fff",
              boxShadow: "0 4px 16px rgba(232,103,10,0.40)",
            }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full animate-ping opacity-40"
              style={{ background: "#E8670A" }}
            />
            <Phone size={22} className="relative" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </header>
  );
}
