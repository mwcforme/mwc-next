export function Footer() {
  return (
    <footer
      style={{
        background: "#0B1029",
        padding: "40px 20px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        textAlign: "center",
      }}
    >
      {/* Compliance badges (wireframe 17) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <img
          src="/images/badges/legitscript.webp"
          alt="LegitScript certified"
          style={{ height: 44, width: "auto" }}
          loading="lazy"
        />
        <img
          src="/images/badges/hipaa-white.webp"
          alt="HIPAA compliant"
          style={{ height: 36, width: "auto" }}
          loading="lazy"
        />
      </div>

      <p style={{ fontSize: 12, color: "#9CA3AF", lineHeight: 1.6 }}>
        &copy; 2026 Men&rsquo;s Wellness Centers. All rights reserved.
      </p>
      <p style={{ marginTop: 8, fontSize: 12, color: "#9CA3AF" }}>
        <a
          href="https://menswellnesscenters.com/privacy-practices/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#E8670A" }}
        >
          Privacy Policy
        </a>
        &nbsp;&middot;&nbsp;
        <a
          href="https://menswellnesscenters.com/terms-of-service/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#E8670A" }}
        >
          Terms of Service
        </a>
      </p>
      <p style={{ marginTop: 12, fontSize: 11, color: "#6B7280", maxWidth: 640, margin: "12px auto 0", lineHeight: 1.6 }}>
        Treatment requires a clinical evaluation and is provided only when medically appropriate.
        Individual results may vary. This is not a guarantee of treatment outcomes. All treatments
        are administered under the supervision of licensed providers.
      </p>
    </footer>
  );
}
