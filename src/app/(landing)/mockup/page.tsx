import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import {
  ArrowUpRight,
  Star,
  Check,
  X,
  Phone,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Men's Wellness Centers — Physician-Led. Virginia-Local.",
  description:
    "A high-fidelity concept lander for testosterone therapy, sexual health, and medical weight loss. Physician-led evaluations at three Virginia locations.",
  robots: { index: false, follow: false },
};

/* ─────────────────────────────────────────────────────────
   Design tokens (page-local, cream editorial palette)
────────────────────────────────────────────────────────── */
const ink = "#0B1029";
const inkSoft = "#2A2F4A";
const inkMuted = "#6E6A62";
const paper = "#F5F0E8";
const paperSubtle = "#EAE3D6";
const line = "#D9CFBE";
const lineSoft = "#E7DECE";
const gold = "#B08248";
const goldSoft = "#C9A961";
const forest = "#2F4A3C";

const SERIF = "var(--font-fraunces), 'Playfair Display', Georgia, serif";
const SANS = "var(--font-montserrat), system-ui, sans-serif";

/* ─────────────────────────────────────────────────────────
   Content
────────────────────────────────────────────────────────── */
const SYMPTOMS = [
  "Decrease in sex drive",
  "Feelings of sadness or grumpiness",
  "Less frequent or weaker erections",
  "Lack of energy, strength, or endurance",
  "Tiredness and persistent fatigue",
  "Lack of focus and mental clarity",
  "Increased body fat around the midsection",
];

const SERVICES = [
  {
    num: "01",
    tag: "Testosterone Therapy",
    line: "For the man who feels flat, foggy, and unlike himself.",
    body: "A physician-supervised hormone evaluation. Same-day labs. A protocol built around your numbers — not a template.",
  },
  {
    num: "02",
    tag: "Sexual Health",
    line: "Restore performance with clinical precision.",
    body: "In-person evaluation with a Virginia-licensed provider. FDA-approved options reviewed when clinically appropriate.",
  },
  {
    num: "03",
    tag: "Medical Weight Loss",
    line: "Weight loss under a physician, not an app.",
    body: "Lab-guided GLP-1 protocols monitored at every visit. Not a mail-order subscription.",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Book online",
    body: "Choose a location and time. Under five minutes. No referral needed.",
  },
  {
    num: "02",
    title: "Labs & provider review",
    body: "On-site blood work. Results reviewed in the same visit by your Virginia-licensed provider.",
  },
  {
    num: "03",
    title: "Walk out with a plan",
    body: "A protocol grounded in your labs, your goals, and your history. Most members start treatment the same visit.",
  },
];

const PROVIDERS = [
  {
    name: "Medical Director",
    title: "MD · Virginia-licensed",
    line: "Oversees every protocol and every dose adjustment.",
  },
  {
    name: "Lead Provider — Richmond",
    title: "Virginia-licensed provider",
    line: "Runs hormone panel evaluations daily. Present at your first visit.",
  },
  {
    name: "Lead Provider — Hampton Roads",
    title: "Virginia-licensed provider",
    line: "Serving Virginia Beach and Newport News for eleven years.",
  },
];

const INCLUDED = [
  "Comprehensive health assessment",
  "Same-day labs (results in 15 min)",
  "Personalized treatment plan",
  "Transparent, itemized pricing",
  "HIPAA compliant, on-site care",
  "LegitScript certified",
];

const NOT_HERE = [
  "No subscription lock-in",
  "No insurance billing or claims",
  "No referral required",
  "No 15-minute video calls",
  "No mass-market mail order",
  "No mid-level providers on hormone decisions",
];

const REVIEWS = [
  {
    quote:
      "I've been to two GPs who told me my levels were fine. After one visit here I had answers and a plan. Game-changer.",
    name: "R.T.",
    meta: "Richmond · Verified Google review",
    service: "TRT",
  },
  {
    quote:
      "Three weeks after starting treatment I was sleeping through the night again. The energy difference over the next few months was remarkable.",
    name: "James T., 48",
    meta: "Norfolk · Verified Google review",
    service: "TRT",
  },
  {
    quote:
      "They didn't just throw a prescription at me. They actually looked at my numbers and explained what was driving each symptom.",
    name: "Michael C., 52",
    meta: "Virginia Beach · Verified Google review",
    service: "ED",
  },
];

const LOCATIONS = [
  {
    region: "Richmond Area",
    city: "Richmond",
    address: "4050 Innslake Dr, Suite 360",
    cityState: "Glen Allen, VA 23060",
    drive: "5 min from I-64",
    phone: "(804) 346-4636",
  },
  {
    region: "Coastal Virginia",
    city: "Virginia Beach",
    address: "996 First Colonial Road",
    cityState: "Virginia Beach, VA 23454",
    drive: "5 min from I-264",
    phone: "(757) 612-4428",
  },
  {
    region: "Peninsula",
    city: "Newport News",
    address: "827 Diligence Drive, Suite 206",
    cityState: "Newport News, VA 23606",
    drive: "3 min from I-64, Exit 258A",
    phone: "(757) 806-6263",
  },
];

const FAQ = [
  {
    q: "Does insurance cover this?",
    a: "Your first visit is at no cost, including labs and the provider review. We don't bill insurance, but we accept FSA and HSA cards. Most men find the straightforward pricing easier than navigating insurance approvals.",
  },
  {
    q: "What does treatment typically involve?",
    a: "A comprehensive lab panel, in-person evaluation, and — if medically appropriate — a personalized protocol reviewed and adjusted at follow-up visits.",
  },
  {
    q: "Is testosterone replacement therapy safe?",
    a: "Under physician supervision with regular lab monitoring, TRT has a well-established safety profile. Every protocol at MWC is reviewed by our Medical Director and adjusted based on your labs and response.",
  },
  {
    q: "How is this different from online or mail-order TRT services?",
    a: "In-person visits. Same-day labs at our own centers. A Virginia-licensed physician reviewing your numbers with you, not a coordinator following a script.",
  },
  {
    q: "How do I know if treatment is right for me?",
    a: "The only way to know is a proper evaluation: symptoms, history, and a full hormone panel reviewed against your goals. That's exactly what your first visit is.",
  },
  {
    q: "Is this completely private?",
    a: "Yes. HIPAA compliant, on-site labs, and separate exam rooms. No pharmacy pickup. No visible packaging.",
  },
];

/* ─────────────────────────────────────────────────────────
   Layout helpers
────────────────────────────────────────────────────────── */
const MAX_W: React.CSSProperties = {
  maxWidth: 1360,
  margin: "0 auto",
  width: "100%",
  padding: "0 clamp(20px, 5vw, 72px)",
};

const eyebrow: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: gold,
};

const numeral: React.CSSProperties = {
  fontFamily: SERIF,
  fontStyle: "italic",
  fontWeight: 300,
  fontSize: "clamp(48px, 6vw, 72px)",
  color: ink,
  lineHeight: 0.9,
  letterSpacing: "-0.02em",
};

const hairline: React.CSSProperties = {
  height: 1,
  background: line,
  border: 0,
  width: "100%",
};

/* ─────────────────────────────────────────────────────────
   Page
────────────────────────────────────────────────────────── */
export default function AgencyMockupPage() {
  return (
    <main
      className={fraunces.variable}
      style={{
        background: paper,
        color: ink,
        fontFamily: SANS,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ═══════════════════════════════════════════════════
          NAV — ultra-thin editorial bar
      ═══════════════════════════════════════════════════ */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(245, 240, 232, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${line}`,
        }}
      >
        <div
          style={{
            ...MAX_W,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: SERIF,
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              color: ink,
            }}
          >
            Men&rsquo;s Wellness Centers
            <span style={{ color: gold, marginLeft: 4 }}>·</span>
          </a>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: inkSoft,
            }}
            className="hidden md:flex"
          >
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#providers">Providers</a>
            <a href="#reviews">Reviews</a>
            <a href="#locations">Locations</a>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a
              href="tel:8663444955"
              style={{
                fontFamily: SANS,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: ink,
              }}
              className="hidden sm:inline"
            >
              866-344-4955
            </a>
            <a
              href="/book"
              style={{
                background: ink,
                color: paper,
                padding: "12px 22px",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 2,
              }}
            >
              Book a visit <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          01. HERO — editorial split
      ═══════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          paddingTop: "clamp(48px, 8vw, 88px)",
          paddingBottom: "clamp(56px, 8vw, 104px)",
          borderBottom: `1px solid ${line}`,
        }}
      >
        <div style={MAX_W}>
          {/* Meta row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              paddingBottom: 32,
              marginBottom: 40,
              borderBottom: `1px solid ${line}`,
              fontFamily: SANS,
              fontSize: 11,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: inkMuted,
              fontWeight: 500,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <span>Est. 2014 · Virginia</span>
            <span>Chapter 01 — The Consultation</span>
            <span>Vol. VII</span>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20"
            style={{ alignItems: "start" }}
          >
            {/* Left */}
            <div>
              <p style={{ ...eyebrow, marginBottom: 24 }}>
                <span style={{ color: gold }}>❋</span> Physician-Led · Virginia-Local
              </p>
              <h1
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(44px, 6.8vw, 100px)",
                  lineHeight: 0.98,
                  fontWeight: 400,
                  letterSpacing: "-0.025em",
                  color: ink,
                  marginBottom: 32,
                }}
              >
                Your labs say
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 300, color: gold }}>
                  &ldquo;normal.&rdquo;
                </span>
                <br />
                Your body knows better.
              </h1>
              <p
                style={{
                  fontFamily: SERIF,
                  fontSize: 22,
                  lineHeight: 1.45,
                  color: inkSoft,
                  maxWidth: 560,
                  fontWeight: 300,
                  marginBottom: 40,
                }}
              >
                Eleven years. Ten thousand Virginia men. A sixty-minute in-person
                visit with a physician who does one thing — and does it well.
              </p>

              {/* stat row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 24,
                  paddingTop: 28,
                  borderTop: `1px solid ${line}`,
                  maxWidth: 480,
                }}
              >
                {[
                  { v: "11", l: "Years in\nVirginia" },
                  { v: "10K+", l: "Members\nseen" },
                  { v: "4.9★", l: "191 verified\nreviews" },
                ].map((s) => (
                  <div key={s.v}>
                    <div
                      style={{
                        fontFamily: SERIF,
                        fontSize: 40,
                        fontWeight: 400,
                        lineHeight: 1,
                        color: ink,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {s.v}
                    </div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: inkMuted,
                        whiteSpace: "pre-line",
                        lineHeight: 1.5,
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — lead card */}
            <aside
              style={{
                background: "#FFFFFF",
                border: `1px solid ${line}`,
                padding: "clamp(24px, 3.5vw, 40px)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -1,
                  right: -1,
                  background: ink,
                  color: paper,
                  padding: "6px 12px",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                No-cost visit
              </div>
              <p style={{ ...eyebrow, marginBottom: 8, color: forest }}>
                Reserve your consultation
              </p>
              <h3
                style={{
                  fontFamily: SERIF,
                  fontSize: 30,
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: ink,
                  marginBottom: 28,
                }}
              >
                Start with a
                <br />
                <span style={{ fontStyle: "italic" }}>real conversation.</span>
              </h3>

              <div style={{ display: "grid", gap: 14 }}>
                {[
                  { l: "First & last name", ph: "James Whitmore" },
                  { l: "Phone", ph: "(804) 555-0142" },
                  { l: "ZIP", ph: "23060" },
                ].map((f) => (
                  <label key={f.l} style={{ display: "block" }}>
                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: inkMuted,
                        fontWeight: 600,
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {f.l}
                    </span>
                    <input
                      type="text"
                      placeholder={f.ph}
                      style={{
                        width: "100%",
                        border: 0,
                        borderBottom: `1px solid ${line}`,
                        padding: "10px 0",
                        fontSize: 16,
                        fontFamily: SANS,
                        color: ink,
                        background: "transparent",
                        outline: "none",
                      }}
                    />
                  </label>
                ))}
                <div style={{ marginTop: 4 }}>
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: inkMuted,
                      fontWeight: 600,
                      display: "block",
                      marginBottom: 10,
                    }}
                  >
                    Preferred location
                  </span>
                  <div style={{ display: "grid", gap: 6 }}>
                    {["Richmond", "Virginia Beach", "Newport News"].map((c) => (
                      <label
                        key={c}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "8px 0",
                          fontSize: 15,
                          color: ink,
                          cursor: "pointer",
                          borderBottom: `1px solid ${lineSoft}`,
                        }}
                      >
                        <span
                          style={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            border: `1px solid ${ink}`,
                            display: "inline-block",
                          }}
                        />
                        {c}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button
                style={{
                  marginTop: 28,
                  width: "100%",
                  background: ink,
                  color: paper,
                  border: 0,
                  padding: "18px 22px",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                Check availability
                <ArrowUpRight size={16} />
              </button>
              <p
                style={{
                  fontSize: 11,
                  color: inkMuted,
                  marginTop: 12,
                  lineHeight: 1.5,
                  letterSpacing: "0.02em",
                }}
              >
                By submitting, you agree to receive a scheduling call. HIPAA
                compliant. No spam. Ever.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          02. TRUST STRIP (ticker)
      ═══════════════════════════════════════════════════ */}
      <section style={{ background: ink, color: paper, padding: "24px 0" }}>
        <div
          style={{
            ...MAX_W,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
            fontSize: 12,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 500,
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: goldSoft }}>❋ On-site labs</span>
          <span style={{ opacity: 0.35 }} className="hidden md:inline">
            —
          </span>
          <span>Same-day results</span>
          <span style={{ opacity: 0.35 }} className="hidden md:inline">
            —
          </span>
          <span style={{ color: goldSoft }}>Virginia-licensed physicians</span>
          <span style={{ opacity: 0.35 }} className="hidden md:inline">
            —
          </span>
          <span>FSA · HSA accepted</span>
          <span style={{ opacity: 0.35 }} className="hidden md:inline">
            —
          </span>
          <span style={{ color: goldSoft }}>HIPAA · LegitScript</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          03. SERVICES — This Is All We Do
      ═══════════════════════════════════════════════════ */}
      <section
        id="services"
        style={{ paddingTop: "clamp(80px, 10vw, 140px)", paddingBottom: "clamp(80px, 10vw, 140px)" }}
      >
        <div style={MAX_W}>
          {/* Section header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "baseline",
              gap: 24,
              paddingBottom: 24,
              borderBottom: `1px solid ${line}`,
              marginBottom: 64,
            }}
          >
            <span style={numeral}>§ 01</span>
            <span style={{ ...eyebrow }}>The Focus</span>
            <span style={{ fontSize: 12, color: inkMuted, letterSpacing: "0.1em" }}>
              3 services · 1 focus
            </span>
          </div>

          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 1,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              maxWidth: 900,
              marginBottom: 20,
            }}
          >
            This is <span style={{ fontStyle: "italic", color: gold }}>all</span> we
            do.
          </h2>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: 20,
              color: inkSoft,
              maxWidth: 640,
              lineHeight: 1.5,
              fontWeight: 300,
              marginBottom: 72,
            }}
          >
            Every provider, every visit, every protocol built around men&rsquo;s
            health. Not a general practice. Not a med spa. Not telehealth.
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderTop: `1px solid ${line}` }}>
            {SERVICES.map((s, i) => (
              <article
                key={s.num}
                style={{
                  padding: "40px 32px 44px",
                  borderRight: i < SERVICES.length - 1 ? `1px solid ${line}` : "none",
                  borderBottom: `1px solid ${line}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 24,
                  }}
                >
                  <span style={{ ...numeral, fontSize: 42 }}>{s.num}</span>
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: inkMuted,
                      fontWeight: 600,
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: 28,
                    fontWeight: 400,
                    lineHeight: 1.15,
                    color: ink,
                    marginBottom: 16,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.line}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: inkSoft,
                    marginBottom: 32,
                  }}
                >
                  {s.body}
                </p>
                <a
                  href="/book"
                  style={{
                    fontFamily: SANS,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: ink,
                    borderBottom: `1px solid ${ink}`,
                    paddingBottom: 4,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Reserve a visit <ArrowUpRight size={13} strokeWidth={2} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          04. THE PROCESS (dark editorial section)
      ═══════════════════════════════════════════════════ */}
      <section
        id="process"
        style={{
          background: ink,
          color: paper,
          paddingTop: "clamp(96px, 11vw, 160px)",
          paddingBottom: "clamp(96px, 11vw, 160px)",
        }}
      >
        <div style={MAX_W}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "baseline",
              gap: 24,
              paddingBottom: 24,
              borderBottom: `1px solid rgba(245, 240, 232, 0.15)`,
              marginBottom: 64,
            }}
          >
            <span style={{ ...numeral, color: paper }}>§ 02</span>
            <span style={{ ...eyebrow, color: goldSoft }}>The Visit</span>
            <span style={{ fontSize: 12, color: "rgba(245, 240, 232, 0.5)", letterSpacing: "0.1em" }}>
              60 minutes · one appointment
            </span>
          </div>

          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 1,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              maxWidth: 900,
              marginBottom: 20,
              color: paper,
            }}
          >
            One visit. <span style={{ fontStyle: "italic", color: goldSoft }}>Real</span>{" "}
            answers.
          </h2>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: 20,
              color: "rgba(245, 240, 232, 0.72)",
              maxWidth: 620,
              lineHeight: 1.5,
              fontWeight: 300,
              marginBottom: 88,
            }}
          >
            No 15-minute video calls. No coordinator reading from a tablet. A
            physician, your labs, and a plan — in the same room.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PROCESS.map((p, i) => (
              <div
                key={p.num}
                style={{
                  position: "relative",
                  paddingTop: 40,
                  borderTop: `1px solid rgba(245, 240, 232, 0.2)`,
                }}
              >
                <div
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 56,
                    fontWeight: 300,
                    color: goldSoft,
                    lineHeight: 0.9,
                    marginBottom: 24,
                  }}
                >
                  {p.num}
                </div>
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: 30,
                    fontWeight: 400,
                    color: paper,
                    marginBottom: 16,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(245, 240, 232, 0.72)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 80, textAlign: "center" }}>
            <a
              href="/book"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                background: goldSoft,
                color: ink,
                padding: "22px 40px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                borderRadius: 2,
              }}
            >
              Reserve your no-cost consultation
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          05. PROVIDERS
      ═══════════════════════════════════════════════════ */}
      <section
        id="providers"
        style={{ paddingTop: "clamp(80px, 10vw, 140px)", paddingBottom: "clamp(80px, 10vw, 140px)" }}
      >
        <div style={MAX_W}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "baseline",
              gap: 24,
              paddingBottom: 24,
              borderBottom: `1px solid ${line}`,
              marginBottom: 64,
            }}
          >
            <span style={numeral}>§ 03</span>
            <span style={{ ...eyebrow }}>The People</span>
            <span style={{ fontSize: 12, color: inkMuted, letterSpacing: "0.1em" }}>
              Virginia-licensed
            </span>
          </div>

          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 1,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              maxWidth: 900,
              marginBottom: 20,
            }}
          >
            Meet your <span style={{ fontStyle: "italic", color: gold }}>local</span>{" "}
            providers.
          </h2>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: 20,
              color: inkSoft,
              maxWidth: 620,
              lineHeight: 1.5,
              fontWeight: 300,
              marginBottom: 72,
            }}
          >
            The same team, based in Virginia, for eleven years. No revolving-door
            locum providers. No outsourced call centers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROVIDERS.map((p, i) => (
              <article
                key={p.name}
                style={{
                  background: "#FFFFFF",
                  border: `1px solid ${line}`,
                  padding: 0,
                }}
              >
                {/* Portrait placeholder — editorial frame */}
                <div
                  style={{
                    aspectRatio: "4 / 5",
                    background: `linear-gradient(160deg, ${paperSubtle}, ${lineSoft})`,
                    position: "relative",
                    overflow: "hidden",
                    borderBottom: `1px solid ${line}`,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 24,
                      border: `1px solid ${line}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: inkMuted,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        fontSize: 96,
                        opacity: 0.35,
                        color: gold,
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 14,
                      left: 14,
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: inkMuted,
                      fontWeight: 600,
                    }}
                  >
                    Portrait — {p.name.split("—")[0].trim()}
                  </span>
                </div>
                <div style={{ padding: 28 }}>
                  <h3
                    style={{
                      fontFamily: SERIF,
                      fontSize: 22,
                      fontWeight: 400,
                      color: ink,
                      marginBottom: 6,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: gold,
                      fontWeight: 600,
                      marginBottom: 16,
                    }}
                  >
                    {p.title}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: inkSoft }}>
                    {p.line}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          06. INSIDE OUR CENTERS — image mosaic
      ═══════════════════════════════════════════════════ */}
      <section
        style={{
          background: paperSubtle,
          paddingTop: "clamp(80px, 10vw, 140px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
        }}
      >
        <div style={MAX_W}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "baseline",
              gap: 24,
              paddingBottom: 24,
              borderBottom: `1px solid ${line}`,
              marginBottom: 56,
            }}
          >
            <span style={numeral}>§ 04</span>
            <span style={{ ...eyebrow }}>The Space</span>
            <span style={{ fontSize: 12, color: inkMuted, letterSpacing: "0.1em" }}>
              3 centers · in-person only
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6" style={{ marginBottom: 12 }}>
            <PhotoTile caption="Waiting area — Richmond" tone="warm" />
            <PhotoTile caption="Provider consult room" tone="cool" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PhotoTile caption="On-site lab" tone="cream" />
            <PhotoTile caption="Exam room" tone="warm" />
            <PhotoTile caption="Reception — Virginia Beach" tone="cool" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          07. SYMPTOMS — editorial checklist
      ═══════════════════════════════════════════════════ */}
      <section
        style={{ paddingTop: "clamp(80px, 10vw, 140px)", paddingBottom: "clamp(80px, 10vw, 140px)" }}
      >
        <div style={MAX_W}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-16">
            <div>
              <p style={{ ...eyebrow, marginBottom: 24 }}>§ 05 — Self-Identification</p>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(36px, 5.4vw, 68px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                  marginBottom: 24,
                }}
              >
                If more than <span style={{ fontStyle: "italic", color: gold }}>three</span>{" "}
                feel familiar,
                <br />
                we should talk.
              </h2>
              <p
                style={{
                  fontFamily: SERIF,
                  fontSize: 19,
                  color: inkSoft,
                  fontWeight: 300,
                  lineHeight: 1.55,
                  maxWidth: 460,
                }}
              >
                The ADAM questionnaire — used by physicians to screen for low
                testosterone. Not a diagnosis. A starting point for a real
                conversation.
              </p>
            </div>

            <div>
              <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {SYMPTOMS.map((s, i) => (
                  <li
                    key={s}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "40px 1fr auto",
                      alignItems: "center",
                      padding: "20px 0",
                      borderBottom: `1px solid ${line}`,
                      fontSize: 18,
                      color: ink,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        color: gold,
                        fontSize: 20,
                        fontWeight: 400,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontWeight: 400 }}>{s}</span>
                    <span
                      style={{
                        width: 20,
                        height: 20,
                        border: `1px solid ${ink}`,
                        display: "inline-block",
                      }}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          08. INCLUDED / NOT HERE — comparison
      ═══════════════════════════════════════════════════ */}
      <section
        style={{
          background: ink,
          color: paper,
          paddingTop: "clamp(80px, 10vw, 140px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
        }}
      >
        <div style={MAX_W}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "baseline",
              gap: 24,
              paddingBottom: 24,
              borderBottom: `1px solid rgba(245, 240, 232, 0.15)`,
              marginBottom: 56,
            }}
          >
            <span style={{ ...numeral, color: paper }}>§ 06</span>
            <span style={{ ...eyebrow, color: goldSoft }}>The Details</span>
            <span style={{ fontSize: 12, color: "rgba(245, 240, 232, 0.5)", letterSpacing: "0.1em" }}>
              What we do — and don&rsquo;t
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Included */}
            <div>
              <p style={{ ...eyebrow, color: goldSoft, marginBottom: 16 }}>Everything included</p>
              <h3
                style={{
                  fontFamily: SERIF,
                  fontSize: 40,
                  fontWeight: 400,
                  lineHeight: 1.05,
                  marginBottom: 32,
                  color: paper,
                }}
              >
                Every first visit — no surprises.
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {INCLUDED.map((it) => (
                  <li
                    key={it}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "16px 0",
                      borderBottom: `1px solid rgba(245, 240, 232, 0.15)`,
                      fontSize: 16,
                      color: paper,
                    }}
                  >
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        border: `1px solid ${goldSoft}`,
                        borderRadius: "50%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Check size={12} color={goldSoft} strokeWidth={2.5} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            {/* Not here */}
            <div>
              <p style={{ ...eyebrow, color: "rgba(245, 240, 232, 0.5)", marginBottom: 16 }}>
                Not here
              </p>
              <h3
                style={{
                  fontFamily: SERIF,
                  fontSize: 40,
                  fontWeight: 400,
                  lineHeight: 1.05,
                  marginBottom: 32,
                  color: "rgba(245, 240, 232, 0.72)",
                  fontStyle: "italic",
                }}
              >
                And what we&rsquo;ve chosen to leave out.
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {NOT_HERE.map((it) => (
                  <li
                    key={it}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "16px 0",
                      borderBottom: `1px solid rgba(245, 240, 232, 0.12)`,
                      fontSize: 16,
                      color: "rgba(245, 240, 232, 0.6)",
                    }}
                  >
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        border: `1px solid rgba(245, 240, 232, 0.3)`,
                        borderRadius: "50%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <X size={12} color="rgba(245, 240, 232, 0.5)" strokeWidth={2} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          09. REVIEWS — editorial pull quotes
      ═══════════════════════════════════════════════════ */}
      <section
        id="reviews"
        style={{
          paddingTop: "clamp(80px, 10vw, 140px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
        }}
      >
        <div style={MAX_W}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "baseline",
              gap: 24,
              paddingBottom: 24,
              borderBottom: `1px solid ${line}`,
              marginBottom: 56,
            }}
          >
            <span style={numeral}>§ 07</span>
            <span style={{ ...eyebrow }}>The Members</span>
            <span
              style={{
                fontSize: 12,
                color: inkMuted,
                letterSpacing: "0.1em",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Star size={12} fill={goldSoft} stroke={goldSoft} /> 4.9 · 191 reviews
            </span>
          </div>

          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 1,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              maxWidth: 900,
              marginBottom: 72,
            }}
          >
            In their <span style={{ fontStyle: "italic", color: gold }}>own</span>{" "}
            words.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {REVIEWS.map((r, i) => (
              <article
                key={i}
                style={{
                  background: "#FFFFFF",
                  border: `1px solid ${line}`,
                  padding: 40,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 100,
                    lineHeight: 0.6,
                    color: gold,
                    marginBottom: 16,
                    fontWeight: 300,
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: 21,
                    lineHeight: 1.4,
                    color: ink,
                    fontWeight: 400,
                    marginBottom: 32,
                    flex: 1,
                  }}
                >
                  {r.quote}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 20,
                    borderTop: `1px solid ${line}`,
                  }}
                >
                  <div>
                    <div style={{ fontSize: 14, color: ink, fontWeight: 600 }}>{r.name}</div>
                    <div
                      style={{
                        fontSize: 11,
                        color: inkMuted,
                        letterSpacing: "0.04em",
                        marginTop: 2,
                      }}
                    >
                      {r.meta}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: gold,
                      border: `1px solid ${gold}`,
                      padding: "4px 8px",
                      fontWeight: 600,
                    }}
                  >
                    {r.service}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: "center" }}>
            <a
              href="https://www.google.com/maps/search/Men's+Wellness+Centers+Virginia"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: ink,
                borderBottom: `1px solid ${ink}`,
                paddingBottom: 4,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Read 191 verified reviews on Google
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          10. LOCATIONS
      ═══════════════════════════════════════════════════ */}
      <section
        id="locations"
        style={{
          background: paperSubtle,
          paddingTop: "clamp(80px, 10vw, 140px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
        }}
      >
        <div style={MAX_W}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "baseline",
              gap: 24,
              paddingBottom: 24,
              borderBottom: `1px solid ${line}`,
              marginBottom: 56,
            }}
          >
            <span style={numeral}>§ 08</span>
            <span style={{ ...eyebrow }}>The Places</span>
            <span style={{ fontSize: 12, color: inkMuted, letterSpacing: "0.1em" }}>
              Three centers · statewide
            </span>
          </div>

          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 1,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              maxWidth: 900,
              marginBottom: 72,
            }}
          >
            Pick your <span style={{ fontStyle: "italic", color: gold }}>closest</span>{" "}
            center.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc, i) => (
              <article
                key={loc.city}
                style={{
                  background: "#FFFFFF",
                  border: `1px solid ${line}`,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Editorial "map" — inline SVG */}
                <div
                  style={{
                    aspectRatio: "16 / 10",
                    background: paper,
                    position: "relative",
                    overflow: "hidden",
                    borderBottom: `1px solid ${line}`,
                  }}
                >
                  <MapArtwork n={i} />
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: inkMuted,
                      fontWeight: 600,
                    }}
                  >
                    {loc.region}
                  </div>
                </div>

                <div style={{ padding: 32 }}>
                  <h3
                    style={{
                      fontFamily: SERIF,
                      fontSize: 32,
                      fontWeight: 400,
                      color: ink,
                      marginBottom: 6,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {loc.city}
                  </h3>
                  <p
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: gold,
                      fontWeight: 600,
                      marginBottom: 20,
                    }}
                  >
                    {loc.drive}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      color: inkSoft,
                      fontSize: 15,
                      lineHeight: 1.55,
                      marginBottom: 12,
                    }}
                  >
                    <MapPin size={16} style={{ marginTop: 3, flexShrink: 0 }} color={gold} />
                    <div>
                      {loc.address}
                      <br />
                      {loc.cityState}
                    </div>
                  </div>
                  <a
                    href={`tel:${loc.phone.replace(/\D/g, "")}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      color: ink,
                      fontSize: 15,
                      fontWeight: 500,
                      marginBottom: 24,
                    }}
                  >
                    <Phone size={14} color={gold} /> {loc.phone}
                  </a>
                  <a
                    href="/book"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: ink,
                      color: paper,
                      padding: "16px 20px",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    Book your 60-min visit
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          11. FAQ — editorial accordion
      ═══════════════════════════════════════════════════ */}
      <section
        style={{ paddingTop: "clamp(80px, 10vw, 140px)", paddingBottom: "clamp(80px, 10vw, 140px)" }}
      >
        <div style={{ ...MAX_W, maxWidth: 1080 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              alignItems: "baseline",
              gap: 24,
              paddingBottom: 24,
              borderBottom: `1px solid ${line}`,
              marginBottom: 56,
            }}
          >
            <span style={numeral}>§ 09</span>
            <span style={{ ...eyebrow }}>The Questions</span>
            <span style={{ fontSize: 12, color: inkMuted, letterSpacing: "0.1em" }}>
              Answered plainly
            </span>
          </div>

          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(40px, 6vw, 80px)",
              lineHeight: 1,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              maxWidth: 900,
              marginBottom: 72,
            }}
          >
            Everything you&rsquo;re
            <br />
            <span style={{ fontStyle: "italic", color: gold }}>quietly</span> wondering.
          </h2>

          <div>
            {FAQ.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                style={{
                  borderTop: i === 0 ? `1px solid ${line}` : "none",
                  borderBottom: `1px solid ${line}`,
                  padding: "24px 0",
                }}
              >
                <summary
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    listStyle: "none",
                    gap: 24,
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 20,
                      flex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        fontSize: 20,
                        color: gold,
                        fontWeight: 400,
                        minWidth: 40,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: SERIF,
                        fontSize: 24,
                        fontWeight: 400,
                        color: ink,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {f.q}
                    </span>
                  </span>
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      border: `1px solid ${ink}`,
                      borderRadius: "50%",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Plus size={14} strokeWidth={2} />
                  </span>
                </summary>
                <div
                  style={{
                    paddingLeft: 60,
                    paddingTop: 20,
                    fontSize: 17,
                    lineHeight: 1.65,
                    color: inkSoft,
                    maxWidth: 780,
                  }}
                >
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          12. FINAL CTA (full-bleed dark)
      ═══════════════════════════════════════════════════ */}
      <section
        style={{
          background: `linear-gradient(180deg, ${ink} 0%, #04081A 100%)`,
          color: paper,
          paddingTop: "clamp(96px, 12vw, 160px)",
          paddingBottom: "clamp(96px, 12vw, 160px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative editorial marks */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            fontFamily: SERIF,
            fontSize: 260,
            color: "rgba(176, 130, 72, 0.06)",
            fontStyle: "italic",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          ❋
        </div>
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            fontFamily: SERIF,
            fontSize: 200,
            color: "rgba(176, 130, 72, 0.05)",
            fontStyle: "italic",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          §
        </div>

        <div style={{ ...MAX_W, position: "relative", textAlign: "center" }}>
          <p style={{ ...eyebrow, color: goldSoft, marginBottom: 32 }}>
            § 10 — The Invitation
          </p>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(44px, 8vw, 128px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              fontWeight: 400,
              color: paper,
              maxWidth: 1100,
              margin: "0 auto 40px",
            }}
          >
            Stop accepting
            <br />
            <span style={{ fontStyle: "italic", color: goldSoft }}>&ldquo;normal&rdquo;</span>{" "}
            when you don&rsquo;t feel it.
          </h2>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: 22,
              color: "rgba(245, 240, 232, 0.75)",
              fontWeight: 300,
              maxWidth: 640,
              margin: "0 auto 48px",
              lineHeight: 1.5,
            }}
          >
            A sixty-minute consultation. On-site labs. Same-day results. No
            referral. No insurance drama. No obligation.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 16,
              alignItems: "center",
            }}
          >
            <a
              href="/book"
              style={{
                background: goldSoft,
                color: ink,
                padding: "24px 40px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              Reserve my consultation
              <ArrowUpRight size={16} />
            </a>
            <a
              href="tel:8663444955"
              style={{
                color: paper,
                padding: "24px 32px",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                border: `1px solid rgba(245, 240, 232, 0.3)`,
              }}
            >
              <Phone size={14} /> 866-344-4955
            </a>
          </div>

          <div
            style={{
              marginTop: 80,
              paddingTop: 40,
              borderTop: `1px solid rgba(245, 240, 232, 0.15)`,
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 40,
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "rgba(245, 240, 232, 0.5)",
            }}
          >
            <span>HIPAA compliant</span>
            <span>LegitScript certified</span>
            <span>FSA · HSA accepted</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════ */}
      <footer
        style={{
          background: "#04081A",
          color: "rgba(245, 240, 232, 0.55)",
          padding: "48px 0 40px",
          borderTop: `1px solid rgba(245, 240, 232, 0.08)`,
        }}
      >
        <div
          style={{
            ...MAX_W,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 24,
            fontSize: 12,
            letterSpacing: "0.06em",
          }}
        >
          <span style={{ fontFamily: SERIF, color: paper, fontSize: 18 }}>
            Men&rsquo;s Wellness Centers <span style={{ color: goldSoft }}>·</span>{" "}
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>Est. 2014</span>
          </span>
          <span>
            © 2026 · Testimonials reflect individual experiences · Individual results vary
          </span>
          <span
            style={{
              display: "flex",
              gap: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <a href="/privacy">Privacy</a>
            <a href="/hipaa">HIPAA</a>
            <a href="/terms">Terms</a>
          </span>
        </div>
      </footer>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────
   Sub-components (server-safe, no state)
────────────────────────────────────────────────────────── */

function PhotoTile({
  caption,
  tone,
}: {
  caption: string;
  tone: "warm" | "cool" | "cream";
}) {
  const gradients = {
    warm: `linear-gradient(155deg, #C9A961 0%, #6E5236 55%, #2A2015 100%)`,
    cool: `linear-gradient(155deg, #6B7A94 0%, #313A55 55%, #0F142A 100%)`,
    cream: `linear-gradient(155deg, #F5F0E8 0%, #D9CFBE 60%, #B0A38B 100%)`,
  };
  return (
    <div
      style={{
        aspectRatio: "4 / 3",
        background: gradients[tone],
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${line}`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 20,
          border: `1px solid rgba(245, 240, 232, 0.35)`,
          display: "flex",
          alignItems: "flex-end",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: tone === "cream" ? "#0B1029" : "#F5F0E8",
          }}
        >
          {caption}
        </span>
        <span
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: 40,
            color: tone === "cream" ? "#B08248" : "#C9A961",
            opacity: 0.6,
            lineHeight: 1,
          }}
        >
          ❋
        </span>
      </div>
    </div>
  );
}

function MapArtwork({ n }: { n: number }) {
  // Editorial abstract map — SVG hairlines
  const paths = [
    // Richmond — grid
    "M0 40 L400 40 M0 80 L400 80 M0 130 L400 130 M0 180 L400 180 M60 0 L60 240 M140 0 L140 240 M240 0 L240 240 M320 0 L320 240",
    // Virginia Beach — diagonal
    "M0 40 L400 200 M0 20 L400 180 M0 100 L400 240 M-40 160 L360 -20 M0 220 L400 60",
    // Newport News — waves
    "M0 60 Q100 30 200 60 T400 60 M0 120 Q100 90 200 120 T400 120 M0 180 Q100 150 200 180 T400 180",
  ];
  return (
    <svg
      viewBox="0 0 400 240"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <path
        d={paths[n] ?? paths[0]}
        stroke="#D9CFBE"
        strokeWidth="1"
        fill="none"
      />
      {/* pin */}
      <circle cx="200" cy="120" r="6" fill="#B08248" />
      <circle cx="200" cy="120" r="16" fill="none" stroke="#B08248" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="200" cy="120" r="28" fill="none" stroke="#B08248" strokeOpacity="0.15" strokeWidth="1" />
    </svg>
  );
}
