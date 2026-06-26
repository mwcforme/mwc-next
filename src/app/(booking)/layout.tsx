import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Visit | Men's Wellness Centers",
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ECEAE6",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          height: 56,
          background: "rgba(11,16,41,0.92)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          flexShrink: 0,
        }}
      >
        <a href="/" aria-label="Men's Wellness Centers home" style={{ display: "inline-flex" }}>
          <img
            src="/logos/Text_Logo_white.webp"
            alt="Men's Wellness Centers"
            width={160}
            height={25}
            style={{ height: 25, width: "auto" }}
          />
        </a>

        <a
          href="tel:+18663444955"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            height: 34,
            padding: "0 14px",
            background: "#E8670A",
            color: "#FFFFFF",
            borderRadius: 9999,
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 12,
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Contact Support
        </a>
      </header>

      {/* Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        {children}
      </main>

      {/* Footer — matches TRTFooter from Vite */}
      <footer style={{ background: "#0B1029", fontFamily: "'Inter', system-ui, sans-serif" }}>
        <div style={{ padding: "48px 24px 0", maxWidth: 1200, margin: "0 auto" }}>

          {/* Row 1: Logo + Contact — stacks on mobile, 2-col on md+ */}
          <style>{`
            @media (max-width: 639px) {
              .booking-footer-top { grid-template-columns: 1fr !important; }
              .booking-footer-bottom { flex-direction: column !important; align-items: center !important; }
            }
          `}</style>
          <div
            className="booking-footer-top"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              marginBottom: 40,
            }}
          >
            {/* Brand column */}
            <div>
              <img
                src="/logos/Text_Logo_white.webp"
                alt="Men's Wellness Centers"
                width={200}
                height={40}
                style={{ height: 40, width: "auto", opacity: 0.9, display: "block" }}
              />
              <p style={{ fontSize: 12, color: "rgba(245,240,235,0.50)", marginTop: 16 }}>Copyright &copy; 2026</p>
              <div style={{ marginTop: 20 }}>
                <a
                  href="tel:+18663444955"
                  style={{ fontSize: 14, color: "rgba(245,240,235,0.80)", textDecoration: "none" }}
                >
                  ☎ (866) 344-4955
                </a>
              </div>
            </div>

            {/* Contact column */}
            <div>
              <h3
                style={{
                  fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: 16,
                }}
              >
                Contact
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {([
                  { label: "Richmond", tel: "tel:8043464636", num: "804-346-4636" },
                  { label: "Virginia Beach", tel: "tel:7576124428", num: "757-612-4428" },
                  { label: "Newport News", tel: "tel:7578066263", num: "757-806-6263" },
                ] as const).map(({ label, tel, num }) => (
                  <li key={label} style={{ marginBottom: 4, fontSize: 14, minHeight: 44, color: "rgba(245,240,235,0.75)", display: "flex", alignItems: "center" }}>
                    {label}:{" "}
                    <a href={tel} style={{ color: "rgba(245,240,235,0.75)", textDecoration: "none", marginLeft: 4 }}>{num}</a>
                  </li>
                ))}
                <li style={{ marginBottom: 4, fontSize: 14, minHeight: 44, color: "rgba(245,240,235,0.75)", display: "flex", alignItems: "center" }}>
                  <a href="mailto:info@menswellnesscenters.com" style={{ color: "rgba(245,240,235,0.75)", textDecoration: "none" }}>info@menswellnesscenters.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 2: Trust badge images */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <img
              src="/images/badges/clia-color.webp"
              alt="CLIA Certified"
              width={120}
              height={52}
              style={{ height: 52, width: "auto" }}
              loading="lazy"
              decoding="async"
            />
            <a
              href="https://www.legitscript.com/websites/?checker_keywords=menswellnesscenters.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/badges/legitscript-color.webp"
                alt="LegitScript Certified"
                width={110}
                height={64}
                style={{ height: 64, width: "auto" }}
                loading="lazy"
                decoding="async"
              />
            </a>
            <img
              src="/images/badges/hipaa-color.webp"
              alt="HIPAA Compliant"
              width={120}
              height={52}
              style={{ height: 52, width: "auto" }}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Row 3: Legal disclaimers */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.12)",
              marginTop: 32,
              paddingTop: 24,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {[
              "Treatment requires a clinical evaluation and is provided only when medically appropriate.",
              "Individual results vary. Treatment is provided by licensed providers at Men's Wellness Centers.",
              "The information presented on this website is provided for general informational purposes only and is not intended to constitute medical advice, diagnosis, or treatment. Men's Wellness Centers does not provide medical advice through this website, and nothing on this website should be relied upon as a substitute for an in-person evaluation, diagnosis, or consultation with a licensed healthcare professional.",
              "Men's Wellness Centers provides care through in-center visits at its Virginia locations. Medical services are provided following an individualized evaluation and are rendered by licensed medical professionals exercising independent clinical judgment.",
              "Testimonials and reviews reflect individual experiences only and are not intended to represent typical outcomes or make medical claims.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: 11,
                  lineHeight: 1.5,
                  color: "rgba(245,240,235,0.40)",
                  margin: 0,
                  overflowWrap: "break-word",
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Bottom bar — policy links, stacked on mobile */}
          <div
            className="booking-footer-bottom"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.12)",
              marginTop: 24,
              paddingTop: 16,
              paddingBottom: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.09em",
              textTransform: "uppercase" as const,
              color: "rgba(245,240,235,0.50)",
            }}
          >
            <span>&copy; 2026 Men&rsquo;s Wellness Centers</span>
            {([
              { href: "/prescribing-policy", label: "Safety Policy" },
              { href: "/terms-of-service", label: "Terms of Service" },
              { href: "https://menswellnesscenters.com/privacy-practices/", label: "Privacy Policy" },
              { href: "https://menswellnesscenters.com/privacy-practices/#hipaa", label: "HIPAA Notice" },
            ] as const).map(({ href, label }) => (
              <a
                key={label}
                href={href}
                style={{
                  color: "rgba(245,240,235,0.50)",
                  textDecoration: "none",
                  minHeight: 44,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
