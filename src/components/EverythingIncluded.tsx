const CHECK_SVG = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const items = [
  {
    title: "Comprehensive Lab Panel",
    desc: "Testosterone, metabolic markers, CBC, and more — drawn on-site.",
  },
  {
    title: "Provider Review",
    desc: "A board-certified provider reviews your labs with you the same day.",
  },
  {
    title: "Personalized Plan",
    desc: "If treatment is right, you'll leave with a clear plan — not a referral chain.",
  },
  {
    title: "No Insurance Required",
    desc: "Transparent pricing. FSA & HSA accepted. No hidden fees.",
  },
];

export function EverythingIncluded() {
  return (
    <section style={{ background: "#F5F0EB", padding: "clamp(56px,10vw,120px) 20px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "'Montserrat', system-ui, sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#E8670A",
            marginBottom: 12,
          }}
        >
          Your First Visit
        </div>
        <h2
          style={{
            fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "clamp(24px, 4vw, 40px)",
            lineHeight: 1.05,
            marginBottom: 16,
            color: "#0B1029",
          }}
        >
          Everything Included. No Surprise Bills.
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: "#6B7280", maxWidth: 640 }}>
          Your 60-minute visit covers labs, provider review, and a treatment plan if appropriate. No
          copays. No insurance hoops.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            marginTop: 32,
          }}
        >
          {items.map(({ title, desc }) => (
            <div
              key={title}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                padding: 16,
                background: "#fff",
                border: "1px solid rgba(11,16,41,0.08)",
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: "rgba(232,103,10,0.10)",
                  color: "#E8670A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {CHECK_SVG}
              </div>
              <div>
                <strong style={{ fontSize: 15, fontWeight: 600, color: "#0B1029", display: "block", fontFamily: "'Montserrat', system-ui, sans-serif" }}>
                  {title}
                </strong>
                <span style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.4 }}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
