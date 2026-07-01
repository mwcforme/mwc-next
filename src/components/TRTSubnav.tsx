"use client";

/*
 * Sticky anchor subnav (wireframe section 04). Desktop only —
 * on mobile the sticky CTA bar takes its place.
 */
const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Providers", href: "#providers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Locations", href: "#locations" },
  { label: "FAQ", href: "#faq" },
];

export function TRTSubnav() {
  return (
    <nav
      aria-label="Page sections"
      className="hidden md:block"
      style={{
        position: "sticky",
        top: 64,
        zIndex: 40,
        background: "rgba(22,27,58,0.97)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #1E244A",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          gap: "clamp(20px, 3vw, 44px)",
          padding: "14px 24px",
        }}
      >
        {LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)",
              transition: "color 150ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
