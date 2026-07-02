/**
 * Homepage at `/` — ported from the approved prototype at
 * mwc-deploy.vercel.app/prototype (design source of truth), wired to the
 * real booking funnel via ProtoLeadForm.
 */
import type { Metadata } from "next";
import Image from "next/image";
import { ProtoLeadForm } from "@/components/ProtoLeadForm";
import "./home.css";

export const metadata: Metadata = {
  title: "Men’s Wellness Centers | TRT in Virginia",
  description:
    "Provider-supervised testosterone replacement therapy at 3 Virginia locations. 60-minute in-person visit. Same-day labs. No insurance needed.",
};

/* ── inline icons (ported from prototype SVGs) ── */

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.1 2.2z" />
  </svg>
);

const GoogleG = () => (
  <svg viewBox="0 0 48 48" aria-hidden>
    <path fill="#4285F4" d="M45 24c0-2.4-.2-4.6-.6-6.8H24v13h11.8c-.5 2.7-2.1 5-4.4 6.5v5.4h7.1C43 39.6 45 32.3 45 24z" />
    <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.4l-7.1-5.4c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.9-12.2-9.1H4.5v5.7C8 41.6 15.4 46 24 46z" />
    <path fill="#FBBC05" d="M11.8 28.2c-.4-1.3-.7-2.7-.7-4.2s.3-2.9.7-4.2v-5.7H4.5C3 17.7 2 20.7 2 24s1 6.3 2.5 9.9l7.3-5.7z" />
    <path fill="#EA4335" d="M24 10c3.2 0 6 1.1 8.3 3.2l6.2-6.2C34.9 3.5 29.9 2 24 2 15.4 2 8 6.4 4.5 14.1l7.3 5.7c1.7-5.2 6.5-9.1 12.2-9.8z" />
  </svg>
);

/* ── content ── */

const SYMPTOMS = [
  "Decrease in sex drive (libido)",
  "Feelings of sadness or grumpiness",
  "Less frequent or weaker erections",
  "Lack of energy, strength, or endurance",
  "Tiredness and persistent fatigue",
  "Lack of focus and mental clarity",
  "Increased body fat, especially around midsection",
];

const INCLUDED = [
  "Comprehensive health assessment",
  "Same-day lab results, no waiting",
  "Personalized treatment recommendations",
  "Transparent pricing. No surprise bills.",
  "HIPAA compliant and LegitScript certified",
  "FSA and HSA accepted",
];

const NOT_HERE = [
  "No subscription required",
  "No insurance billing or claims",
  "No referral needed",
  "No 15-minute video calls",
  "No mass-market mail order",
  "No mid-level providers on hormone decisions",
];

const REVIEWS = [
  {
    quote:
      "I went to two GPs who told me my levels were fine. After one visit at Men’s Wellness Centers I had answers and a plan.",
    who: "R.T. · Richmond, VA",
  },
  {
    quote:
      "Same-day labs changed everything. I walked in not knowing what was wrong and left with a real treatment plan the same day.",
    who: "D.M. · Virginia Beach, VA",
  },
  {
    quote:
      "Within 6 weeks I felt like myself again. Energy is back. Focus is back. I only wish I’d found them sooner.",
    who: "J.K. · Newport News, VA",
  },
];

const LOCATIONS = [
  {
    city: "Richmond",
    addr: <>4050 Innslake Dr, Suite 360<br />Glen Allen, VA 23060</>,
    tel: "+18043464636",
    telLabel: "(804) 346-4636",
    mapQuery: "4050 Innslake Dr Suite 360 Glen Allen VA 23060",
  },
  {
    city: "Virginia Beach",
    addr: <>996 First Colonial Road<br />Virginia Beach, VA 23454</>,
    tel: "+17576124428",
    telLabel: "(757) 612-4428",
    mapQuery: "996 First Colonial Road Virginia Beach VA 23454",
  },
  {
    city: "Newport News",
    addr: <>827 Diligence Drive, Suite 206<br />Newport News, VA 23606</>,
    tel: "+17578066263",
    telLabel: "(757) 806-6263",
    mapQuery: "827 Diligence Drive Suite 206 Newport News VA 23606",
  },
];

const FAQS = [
  {
    q: "What does the no-cost consultation include?",
    a: "Your first consultation is no-cost and includes a comprehensive provider-led evaluation: a review of your health history, discussion of your wellness goals, and appropriate laboratory testing. Our programs are designed as all-inclusive plans with no hidden fees. HSA and FSA cards are accepted.",
    open: true,
  },
  {
    q: "How fast will I notice changes?",
    a: "Every man responds differently. Some men notice changes in energy, mood, or focus earlier, while other effects may occur gradually as care is adjusted over time. Your provider will review your labs and health history and discuss realistic expectations at your first visit.",
  },
  {
    q: "Will a provider review my labs with me?",
    a: "Our licensed providers will conduct a comprehensive evaluation that includes reviewing your medical history, discussing your health concerns, and ordering appropriate laboratory testing. All care decisions are made collaboratively between you and your provider, with ongoing monitoring and follow-up included.",
  },
  {
    q: "Do you take insurance?",
    a: "Men’s health and hormone optimization services are typically not covered by most insurance plans. Men’s Wellness Centers offers transparent self-pay pricing. HSA and FSA cards are accepted, and documentation can be provided if you choose to submit claims independently.",
  },
  {
    q: "Do I need a referral?",
    a: "No referral is required. You can schedule directly with Men’s Wellness Centers. Same-day appointments are often available at all three Virginia centers.",
  },
  {
    q: "Is my information private?",
    a: "Yes. Men’s Wellness Centers is a HIPAA-compliant medical practice. All personal and medical information is handled in accordance with applicable privacy regulations.",
  },
];

/* ── page ── */

export default function HomePage() {
  return (
    <div className="proto">
      {/* HEADER */}
      <header className="hdr">
        <div className="wrap hdr-in">
          <span>
            <Image
              src="/logos/Text_Logo_white.webp"
              alt="Men’s Wellness Centers"
              className="logo"
              width={500}
              height={115}
              sizes="131px"
              priority
            />
          </span>
          <div className="hdr-right">
            <a href="tel:+18663444955" className="phone">
              <PhoneIcon /> (866) 344-4955
            </a>
            <a href="tel:+18663444955" className="btn ghost sm">CALL</a>
            <a href="#hero-form" className="btn sm">BOOK MY VISIT</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <Image
          src="/images/trt-vial.webp"
          alt=""
          className="vial-wrap"
          width={1109}
          height={1419}
          sizes="230px"
          priority
        />
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow"><span className="dot" /> Physician-led in Virginia</span>
              <h1>
                Your GP said you&rsquo;re fine. <span className="o">You don&rsquo;t feel fine.</span>
              </h1>
              <p className="sub">
                11 years in Virginia. 10,000+ members seen. A 60-minute in-person visit with
                same-day labs read in 15 minutes. Real physicians at three Virginia centers. This is all we do.
              </p>
              <div className="pills">
                {["No referral needed", "Same-day availability", "FSA and HSA accepted"].map((p) => (
                  <span key={p} className="pill"><CheckIcon /> {p}</span>
                ))}
              </div>
              <div className="hero-cta-row">
                <div className="hero-stars">
                  <span className="stars">★★★★★</span>
                  <span>4.9 &middot; 191+ Google reviews</span>
                </div>
              </div>
            </div>
            <div>
              <ProtoLeadForm formId="hero-form" source="home-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust">
        <div className="wrap trust-grid">
          <div className="t"><div className="big">11</div><div className="small">Years in Virginia</div></div>
          <div className="t"><div className="big">10,000+</div><div className="small">Members seen</div></div>
          <div className="t"><div className="big">4.9★</div><div className="small">191+ Google reviews</div></div>
          <div className="t"><div className="big">LegitScript</div><div className="small">Certified practice</div></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow dark"><span className="dot" /> Why MWC is different</span>
            <h2>This is all we do</h2>
            <p>
              Three services. One focus. Every provider, every visit, every protocol built around
              men&rsquo;s health. Not a general practice. Not a med spa. Not telehealth.
            </p>
          </div>
          <div className="cards3">
            {[
              {
                img: "/images/cro/hero-trt-v4.jpg",
                h: "Get your energy back",
                p: "Physician-led hormone evaluation with same-day labs. Personalized protocols when clinically appropriate.",
                cta: "Reserve Hormone Visit",
              },
              {
                img: "/images/cro/hero-ed-v2.jpg",
                h: "Perform with confidence again",
                p: "An in-person evaluation with a Virginia-licensed provider, same-day. FDA-approved options reviewed when clinically appropriate.",
                cta: "Reserve ED Visit",
              },
              {
                img: "/images/cro/hero-wl-v3.jpg",
                h: "Drop the weight that won’t budge",
                p: "Physician-led, lab-guided weight loss monitored at your local center. GLP-1 medications when clinically appropriate.",
                cta: "Reserve Weight-Loss Visit",
              },
            ].map(({ img, h, p, cta }) => (
              <div key={h} className="card">
                <div className="img" style={{ backgroundImage: `url('${img}')` }} />
                <div className="body">
                  <h3>{h}</h3>
                  <p>{p}</p>
                  <a href="#hero-form" className="btn sm">{cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec on-navy" id="process" style={{ background: "var(--navy)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow dark"><span className="dot" /> The process</span>
            <h2>Here&rsquo;s how it works in one visit</h2>
          </div>
          <div className="steps3">
            {[
              {
                num: "STEP 01",
                h: "Book in under 2 minutes",
                p: "Pick a time at your local Richmond, Newport News, or Virginia Beach center. Confidential. No obligation.",
              },
              {
                num: "STEP 02",
                h: "Your provider prepares before you arrive",
                p: "Your physician sees your intake and history ahead of time, so your first visit is focused on results, not paperwork.",
              },
              {
                num: "STEP 03",
                h: "Leave with your personal plan",
                p: "A 60-minute in-person visit. Same-day labs. A treatment plan reviewed when medically appropriate.",
              },
            ].map(({ num, h, p }) => (
              <div key={num} className="step">
                <div className="num">{num}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <div className="center-cta">
            <a href="#hero-form" className="btn">Book my no-cost consultation</a>
          </div>
        </div>
      </section>

      {/* PROVIDERS */}
      <section className="sec" id="providers">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow dark"><span className="dot" /> Your care team</span>
            <h2>Real Virginia physicians</h2>
            <p>
              Every evaluation, every protocol, every dose adjustment is overseen by a
              Virginia-licensed physician. Your physician, start to finish.
            </p>
          </div>
          <div className="prov3">
            {[
              {
                creds: "MD · Virginia-licensed",
                p: "Board-certified. 10+ years in men’s health and hormone optimization.",
              },
              {
                creds: "DO · Virginia-licensed",
                p: "Specializes in physician-led TRT and metabolic health for men 40+.",
              },
              {
                creds: "MD · Virginia-licensed",
                p: "Men’s sexual health and weight loss. Locally owned since 2014.",
              },
            ].map(({ creds, p }, i) => (
              <div key={i} className="prov">
                <div className="ph">DR</div>
                <h3>Dr. [Provider Name]</h3>
                <div className="creds">{creds}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDE THE CENTERS */}
      <section className="sec on-navy" id="centers" style={{ background: "var(--navy)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow dark"><span className="dot" /> Brick and mortar</span>
            <h2>Inside our Virginia centers</h2>
            <p>
              Three real centers. In-person visits, local providers, and same-day labs.
              Everything happens under one roof, close to home.
            </p>
          </div>
          <div className="center3">
            {[
              {
                img: "/images/cro/doctor-consult.webp",
                h: "Private exam rooms",
                p: "60-minute visits. No timer on the wall.",
              },
              {
                img: "/images/clinic-lab-draw.webp",
                h: "CLIA-certified on-site labs",
                p: "Bloodwork drawn and read in 15 minutes. No third-party lab.",
              },
              {
                img: "/images/man-gym-confident.webp",
                h: "Built for men",
                p: "Every room, every team member, built around what men need.",
              },
            ].map(({ img, h, p }) => (
              <div key={h} className="ccard">
                <div className="img" style={{ backgroundImage: `url('${img}')` }} />
                <div className="body">
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="sec on-navy" id="symptoms" style={{ background: "var(--navy-mid)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow dark"><span className="dot" /> If this sounds familiar</span>
            <h2>Low testosterone has real symptoms</h2>
            <p>
              Your labs might be normal. You still don&rsquo;t feel right. These aren&rsquo;t
              signs of aging you just have to accept.
            </p>
          </div>
          <div className="sym-grid">
            <div className="sym-portrait">
              <Image
                src="/images/patient-trt.webp"
                alt="Men’s Wellness Centers member"
                width={1024}
                height={697}
                sizes="(max-width: 860px) 100vw, 40vw"
              />
            </div>
            <ul className="sym-list">
              {SYMPTOMS.map((s) => (
                <li key={s}><CheckIcon /> {s}</li>
              ))}
            </ul>
          </div>
          <div className="center-cta">
            <a href="#hero-form" className="btn">Book my no-cost consultation</a>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="sec" id="included">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow dark"><span className="dot" /> No hidden costs</span>
            <h2>Everything included. No surprises.</h2>
            <p>
              Your no-cost consultation covers everything you need to understand what&rsquo;s
              going on and what to do about it.
            </p>
          </div>
          <div className="compare">
            <div className="col yes">
              <h3>What&rsquo;s included</h3>
              <ul>
                {INCLUDED.map((item) => (
                  <li key={item}><CheckIcon /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="col no">
              <h3>Not here</h3>
              <ul>
                {NOT_HERE.map((item) => (
                  <li key={item}><XIcon /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="sec on-navy" style={{ background: "var(--navy)" }}>
        <div className="wrap">
          <div className="sec-head">
            <h2>Physician-led. Virginia-local. Built for men.</h2>
          </div>
          <div className="diff3">
            <div className="diff">
              <div className="ic">
                <svg viewBox="0 0 24 24" aria-hidden><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z" /></svg>
              </div>
              <h3>Physician-led</h3>
              <p>Every dose adjustment overseen by a Virginia-licensed physician. Not a coordinator.</p>
            </div>
            <div className="diff">
              <div className="ic">
                <svg viewBox="0 0 24 24" aria-hidden><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
              </div>
              <h3>Virginia-local</h3>
              <p>Three brick-and-mortar centers across Virginia. Locally owned since 2014.</p>
            </div>
            <div className="diff">
              <div className="ic">
                <svg viewBox="0 0 24 24" aria-hidden><path d="M12 2 9 9H2l5.5 4.5L5 21l7-4.5L19 21l-2.5-7.5L22 9h-7z" /></svg>
              </div>
              <h3>Built for men</h3>
              <p>Men&rsquo;s health is our only focus. Every protocol built around what men need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="sec" id="reviews">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow dark"><span className="dot" /> Real members</span>
            <h2>Men just like you are getting their life back</h2>
            <p>4.9 out of 5 across 191+ verified Google reviews.</p>
          </div>
          <div className="rev3">
            {REVIEWS.map(({ quote, who }) => (
              <div key={who} className="rev">
                <div className="gmark">
                  <div className="g"><GoogleG /></div>
                  <span>Google</span>
                </div>
                <div className="stars">★★★★★</div>
                <p>&ldquo;{quote}&rdquo;</p>
                <div className="who">{who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPEAT CTA + FORM */}
      <section className="sec repeat-cta">
        <div className="wrap">
          <div className="proof-line">11 years &middot; 10,000+ members &middot; Locally owned</div>
          <h2 className="on-navy">Done comparing? Most men book here.</h2>
          <p className="on-navy" style={{ color: "var(--body-gray)", marginBottom: 30 }}>
            Three Virginia centers. Physician-led. The opposite of mail-order telehealth.
          </p>
          <ProtoLeadForm
            formId="midpage-form"
            source="home-midpage"
            subline="You’ll hear back within one business hour."
          />
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="sec" id="locations">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow dark"><span className="dot" /> Our centers</span>
            <h2>3 Virginia locations. All taking new members.</h2>
          </div>
          <div className="loc3">
            {LOCATIONS.map(({ city, addr, tel, telLabel, mapQuery }) => (
              <div key={city} className="loccard">
                <div className="map">
                  <iframe
                    title={`Map to Men’s Wellness Centers ${city}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=14&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="body">
                  <h3>{city}</h3>
                  <p className="addr">{addr}</p>
                  <a href={`tel:${tel}`} className="phone"><PhoneIcon />{telLabel}</a>
                  <a href="#hero-form" className="btn sm">Book {city}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec on-navy" id="faq" style={{ background: "var(--navy)" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow dark"><span className="dot" /> Common questions</span>
            <h2>Answers before you even call</h2>
          </div>
          <div className="faq">
            {FAQS.map(({ q, a, open }) => (
              <details key={q} open={open}>
                <summary>{q} <span className="pm" aria-hidden="true">+</span></summary>
                <div className="ans">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sec final">
        <div className="wrap">
          <div className="final-inner">
            <span className="real">Speak to a real Virginia team member, not a chatbot.</span>
            <h2>Stop accepting &ldquo;normal&rdquo; when you don&rsquo;t feel normal.</h2>
            <p>
              Your first visit is no-cost. On-site labs. Same-day results. No referral needed.
              Virginia&rsquo;s specialty men&rsquo;s health practice with 3 locations.
            </p>
            <a href="#hero-form" className="btn light">Book my no-cost consultation</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <Image
                src="/logos/Text_Logo_white.webp"
                alt="Men’s Wellness Centers"
                className="foot-logo"
                width={500}
                height={115}
                sizes="148px"
              />
              <p style={{ fontSize: 12.5, lineHeight: 1.6 }}>
                Locally owned in Virginia since 2014. Physician-led men&rsquo;s health across
                three centers. Find Your Edge Over Age.
              </p>
            </div>
            <div>
              <h3>Services</h3>
              <ul>
                <li><a href="#services">Testosterone therapy</a></li>
                <li><a href="#services">Men&rsquo;s sexual health</a></li>
                <li><a href="#services">Medical weight loss</a></li>
              </ul>
            </div>
            <div>
              <h3>Centers</h3>
              <ul>
                <li><a href="#locations">Richmond</a></li>
                <li><a href="#locations">Virginia Beach</a></li>
                <li><a href="#locations">Newport News</a></li>
              </ul>
            </div>
            <div>
              <h3>Legal</h3>
              <ul>
                <li><a href="https://menswellnesscenters.com/privacy-practices/" target="_blank" rel="noopener noreferrer">Privacy practices</a></li>
                <li><a href="https://menswellnesscenters.com/privacy-practices/" target="_blank" rel="noopener noreferrer">HIPAA notice</a></li>
                <li><a href="https://menswellnesscenters.com/terms-of-service/" target="_blank" rel="noopener noreferrer">Terms of service</a></li>
                <li><a href="https://menswellnesscenters.com/terms-of-service/" target="_blank" rel="noopener noreferrer">Telehealth consent</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <div className="disc">
              Treatment requires a clinical evaluation and is provided only when medically
              appropriate. Individual results vary. Treatment is provided by licensed physicians
              at Men&rsquo;s Wellness Centers. &copy; 2026 Men&rsquo;s Wellness Centers.
            </div>
            <div className="lseal"><span className="ls-dot" /> LEGITSCRIPT CERTIFIED</div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BAR */}
      <div className="mobile-bar">
        <a href="tel:+18663444955" className="bar-phone">(866) 344-4955 &middot; Same-day availability</a>
        <div className="grid">
          <a href="tel:+18663444955" className="btn ghost">Call</a>
          <a href="#hero-form" className="btn">Book my visit</a>
        </div>
      </div>
    </div>
  );
}
