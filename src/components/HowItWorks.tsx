const steps = [
  {
    num: "1",
    title: "Book Your Visit",
    desc: "Choose your nearest center and pick a time. Same-day appointments available.",
  },
  {
    num: "2",
    title: "Get Tested",
    desc: "Comprehensive labs drawn on-site. Results reviewed by your provider the same day.",
  },
  {
    num: "3",
    title: "Start Your Plan",
    desc: "If treatment is appropriate, leave with a personalized plan. No referral chains.",
  },
];

export function HowItWorks() {
  return (
    <section style={{ background: "var(--navy-deep)", padding: "clamp(56px,10vw,120px) 20px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--accent-orange)",
              marginBottom: 12,
            }}
          >
            How It Works
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: "clamp(24px, 4vw, 40px)",
              lineHeight: 1.05,
              marginBottom: 16,
              color: "#fff",
            }}
          >
            Three Steps. One Visit.
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--body-gray)",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            No referrals. No waiting weeks for results. Walk in, get answers, leave with a plan.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginTop: 40,
          }}
        >
          {steps.map(({ num, title, desc }) => (
            <div
              key={num}
              style={{
                background: "var(--navy-mid)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "32px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(232,103,10,0.12)",
                  color: "var(--accent-orange)",
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 16,
                }}
              >
                {num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--body-gray)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
