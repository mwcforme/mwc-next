export function CredibilityBand() {
  const stats = [
    { value: "10,000+", label: "Men Treated\nSince 2015" },
    { value: "3", label: "Virginia\nCenters" },
    { value: "4.9★", label: "Google Rating\n200+ Reviews" },
    { value: "Today", label: "Same-Day\nAvailability" },
  ];

  return (
    <div
      style={{
        background: "#0B1029",
        padding: "40px 20px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        style={{ maxWidth: 900, margin: "0 auto" }}
      >
        {stats.map(({ value, label }) => (
          <div key={value}>
            <div
              style={{
                fontFamily: "var(--font-oswald), 'Arial Narrow', sans-serif",
                fontSize: "clamp(28px, 5vw, 40px)",
                fontWeight: 700,
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#B0ADA8",
                letterSpacing: "0.04em",
                marginTop: 4,
                whiteSpace: "pre-line",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
