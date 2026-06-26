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

      {/* Footer */}
      <footer style={{ background: "#0B1029", color: "rgba(245,240,235,0.70)", padding: "48px 24px 0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {/* Left */}
          <div>
            <img src="/logos/Text_Logo_white.webp" alt="Men's Wellness Centers" width={140} height={22} style={{ height: 22, width: "auto", marginBottom: 12 }} />
            <p style={{ fontSize: 12, color: "rgba(245,240,235,0.50)" }}>Copyright &copy; 2026</p>
            <p style={{ fontSize: 12, color: "rgba(245,240,235,0.50)", marginTop: 4 }}>\uD83D\uDCDE (866) 344-4955</p>
          </div>
          {/* Right */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#FFFFFF", marginBottom: 10 }}>Contact</p>
            <p style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(245,240,235,0.50)" }}>
              Richmond: 804-346-4636<br/>
              Virginia Beach: 757-612-4428<br/>
              Newport News: 757-806-6263
            </p>
            <p style={{ fontSize: 12, color: "rgba(245,240,235,0.50)", marginTop: 8 }}>info@menswellnesscenters.com</p>
          </div>
        </div>

        {/* Certifications */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 32, paddingTop: 24, display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" as const }}>
          <span style={{ fontSize: 11, color: "rgba(245,240,235,0.40)", fontWeight: 600, letterSpacing: "0.05em" }}>CLIA CERTIFIED</span>
          <span style={{ fontSize: 11, color: "rgba(245,240,235,0.40)", fontWeight: 600, letterSpacing: "0.05em" }}>LEGITSCRIPT CERTIFIED</span>
          <span style={{ fontSize: 11, color: "rgba(245,240,235,0.40)", fontWeight: 600, letterSpacing: "0.05em" }}>HIPAA COMPLIANT</span>
        </div>

        {/* Disclaimer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 24, paddingTop: 20, paddingBottom: 20 }}>
          <p style={{ fontSize: 10, lineHeight: 1.6, color: "rgba(245,240,235,0.30)", maxWidth: 800, margin: "0 auto" }}>
            Treatment requires a clinical evaluation and is provided only when medically appropriate. Individual results vary. The information on this website is for general informational purposes only and is not medical advice. Men&rsquo;s Wellness Centers provides care through in-center visits at its Virginia locations by licensed medical professionals exercising independent clinical judgment. Testimonials reflect individual experiences and are not intended to represent typical outcomes.
          </p>
        </div>

        {/* Legal links */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "14px 0", textAlign: "center" as const }}>
          <p style={{ fontSize: 10, color: "rgba(245,240,235,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
            &copy; 2026 MEN&rsquo;S WELLNESS CENTERS &nbsp;|&nbsp; SAFETY POLICY &nbsp;|&nbsp; TERMS OF SERVICE &nbsp;|&nbsp; PRIVACY POLICY &nbsp;|&nbsp; HIPAA NOTICE
          </p>
        </div>
      </footer>
    </div>
  );
}
