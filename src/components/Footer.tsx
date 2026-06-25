export function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy-deep)",
        padding: "32px 20px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 12, color: "var(--muted-gray)", lineHeight: 1.6 }}>
        &copy; 2026 Men&rsquo;s Wellness Centers. All rights reserved.
      </p>
      <p style={{ marginTop: 8, fontSize: 12, color: "var(--muted-gray)" }}>
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
      <p style={{ marginTop: 12, fontSize: 11, color: "#6B7280" }}>
        Individual results may vary. This is not a guarantee of treatment outcomes. All treatments
        are administered under the supervision of board-certified providers.
      </p>
    </footer>
  );
}
