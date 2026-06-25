export function TrustStrip() {
  const items = [
    "HIPAA Compliant",
    "Board-Certified Providers",
    "FSA & HSA Accepted",
    "No Insurance Needed",
  ];

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
        flexWrap: "wrap",
      }}
    >
      {items.map((item) => (
        <span
          key={item}
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--muted-gray)",
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
