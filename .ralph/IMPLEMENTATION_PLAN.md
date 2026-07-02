# IMPLEMENTATION_PLAN.md — MWC CRO/UI/UX polish

Priority: **P0** correctness/a11y/brand-compliance · **P1** CRO · **P2** UX polish · **P3** perf

Scope note: the primary surface is the homepage `/` (src/app/(landing)/page.tsx,
home.css, ProtoLeadForm). `/trt`, `/lp/trt`, `/what-we-do` are secondary.

## P0 — Test harness (must be first)
- [x] Playwright smoke tests for `/`: renders, hero form visible, mobile 390px
      hero CTA above fold, sticky mobile bar appears on scroll. Plus an axe spec
      (@axe-core/playwright) asserting 0 serious/critical on `/`. Skill: vercel-web-design-guidelines + accesslint.

## P0 — Brand & Compliance sweep
- [x] Audit every visible string on `/` against mwc-brand-cro-compliance
      (em-dashes, "guy", "free", "clinic", "patients", first person, tagline
      casing "Find Your Edge Over Age."). Fix in one pass. Skill: mwc-brand-cro-compliance.
      (Result: one violation, footer tagline casing; all other banned-token hits
      were code comments/image paths, not visible copy.)
- [x] Same sweep for `/trt`, `/lp/trt`, `/what-we-do` shared copy. Skill: mwc-brand-cro-compliance.
      (Result: 16 fixes across 4 files — 12 em-dashes in visible copy/titles/roles
      replaced with periods or commas, 4 "clinic" hits replaced with "center"/
      "practice" ("A real center. Not a shipping label.", "NOT a general
      practice."). No "free"/"patients"/"guy" in visible copy; testimonial
      first-person and TCPA/disclaimer text untouched. FAQ questions voiced as
      the visitor ("Do I need a referral?") left as user-voice convention.)
- [ ] Verify LegitScript badge + required disclosures + working legal links in
      the homepage footer. Skill: mwc-brand-cro-compliance + accesslint-audit.

## P0 — Accessibility (WCAG 2.2 AA)
- [x] Fix every serious/critical axe violation on `/`: contrast, label
      associations, focus visibility, alt text, landmarks. Skill: accesslint-audit.
- [x] Keyboard operability: all interactive elements reachable; visible focus
      rings on orange CTAs (2px navy outline, offset 2). Skill: accesslint-audit.
      (Result: :focus-visible rules in home.css — navy outline on light surfaces,
      white on navy sections (header, on-navy CTAs, FAQ summaries, footer), navy
      again inside the white form card. Scoped `.btn`/`.loc-opt` transition-all to
      background/border/color so focus rings appear instantly instead of fading in.
      Verified live: all interactive elements are real a/button/input/summary;
      keyboard test added to tests/home.spec.ts.)
- [x] aria-labels on all icon-only buttons/links; heading levels ascend without
      gaps (one h1). Skill: accesslint-audit.
      (Result: no icon-only controls exist, so no aria-labels needed; decorative
      FAQ "+" glyph marked aria-hidden. Heading gaps fixed: form-card h3→h2
      (was h1→h3 in hero), ccard h4→h3, footer column h4→h3. Verified live:
      one h1, zero gaps across all 39 headings.)

## P1 — CRO (mobile-first, 390px)
- [x] Hero at 390px: headline + subhead + primary CTA visible above the fold;
      compress hero spacing if needed. Skill: anthropic-frontend-design.
      (Result: already compliant, no compression needed. Measured at 390x844:
      h1 bottom 213px, .sub bottom 323px, hero stars 459px, form-card top 489px
      with heading + name/phone fields above the fold; header BOOK MY VISIT at
      13-51px. 390px Playwright test strengthened to assert h1 AND .sub are
      fully within the 844px viewport.)
- [x] Differentiate the 3 service CTAs: "Reserve Hormone Visit", "Reserve ED
      Visit", "Reserve Weight-Loss Visit". Skill: ui-ux-pro-max.
      (Result: service-card map data now carries a `cta` field per card; labels
      verified at 1440px and 390px. Reserve verb per brand rules.)
- [x] Add tap-to-call phone number to the mobile sticky bar subtext or header
      (fallback Richmond). Skill: ui-ux-pro-max.
      (Result: visible tap-to-call line "(866) 344-4955 · Same-day availability"
      added above the sticky-bar buttons; tel: link, 11px, 24px min tap height,
      navy-light for contrast, generic focus-visible ring applies. Bar stays
      fixed and compact (~95px); footer padding-bottom bumped 96→120px so the
      LegitScript seal clears it. Main line used, Richmond fallback not needed.)
- [x] Trust strip: confirm order/content LegitScript · Physician-Led · Locally
      Owned · Transparent Pricing fits brand; adjust labels. Skill: ui-ux-pro-max.
      (Verification-only: kept numeric proof strip (stronger social proof);
      LegitScript already present. No label changes.)
- [x] Form confirmation UX: inline success state copy per brand skill after
      submit (before redirect). Skill: mwc-brand-cro-compliance.
      (Result: while submitting, button reads "Confirming your visit..." and a
      status line appears below it: "A real Virginia team member will call you
      within one business hour." (.fine at 11px, role=status). Redirect timing
      unchanged, non-blocking.)

## P2 — UX polish
- [x] Motion pass on `/`: entrance fades <= 300ms, respect
      prefers-reduced-motion. Skill: bencium-innovative-ux-designer.
      (Result: CSS-only load entrance on the hero stack, h1/.sub/.pills/
      .form-card fade+rise 12px, 260ms ease-out, staggered 0/60/120/180ms,
      fill-mode both. Keyframes + animation rules live entirely inside
      `@media (prefers-reduced-motion: no-preference)`, verified live:
      reduced-motion computes animation-name none / opacity 1 with zero hidden
      frames. No scroll-triggered animation (unreliable without JS); nothing
      else animates.)
- [x] Section rhythm: consistent vertical spacing scale (48/64/96) in home.css.
      Skill: anthropic-frontend-design.
      (Result: .sec padding normalized 62px→64px desktop, 46px→48px mobile.
      Trust strip intentionally kept compact at 18px; hero-grid untouched.
      Verified via full-page screenshots at 1440 and 390, no breakage.)
- [x] Typographic pass: quote marks, dashes, spacing per typography skill on
      homepage copy. Skill: typography.
      (Result: 13 straight apostrophes in visible copy replaced with U+2019 —
      review quotes, "won't budge" card, provider bios, FAQ answers, midpage
      form subline, plus user-facing metadata title, logo/portrait alt text,
      and map iframe titles. Curly quotes, real middots, and &ldquo;/&rdquo;
      already correct elsewhere; no em-dashes or double spaces found.)
- [ ] Componentize repeated service card into `ServiceCard` with variants
      (hormone|ed|weightloss). Skill: vercel-composition-patterns.
      DEFERRED: refactor-only, no user-visible value; revisit when a second
      consumer appears.
- [x] Soften the "Not telehealth. Not a med spa. Not a general practice."
      repetition across `/`; keep once, replace others with positive claims.
      Skill: mwc-brand-cro-compliance.
      (Result: kept ONE rhetorical negation cluster, the services sec-head
      "Not a general practice. Not a med spa. Not telehealth." right under
      "This is all we do". Hero .sub → "Real physicians at three Virginia
      centers. This is all we do."; providers sec-head "Not a nurse
      practitioner. Not a coordinator." → "Your physician, start to finish.";
      inside-centers "No mail-order. No video calls." → "Everything happens
      under one roof, close to home." NOT_HERE compare list untouched (feature
      list, not rhetoric); single "Not a coordinator." in differentiators card
      left, not a cluster and no longer duplicated by providers copy.)
- [x] Substantiate or soften "Virginia's only specialty men's health practice
      with 3 locations". Skill: mwc-brand-cro-compliance.
      (Result: final CTA → "Virginia's specialty men's health practice with
      3 locations." Superlative "only" removed, rhythm kept.)

## P3 — Perf
- [x] next/image for homepage images with sizes+priority (hero vial priority,
      below-fold lazy). Skill: vercel-react-best-practices.
      (Result: the 4 real `<img>` on `/` converted — header logo + hero vial
      with `priority`, symptoms portrait + footer logo default-lazy. Intrinsic
      dims read from file headers: logo 500×115, vial 1109×1419, portrait
      1024×697. sizes: logo 131px, vial 230px, portrait "(max-width: 860px)
      100vw, 40vw", foot logo 148px. `.vial-wrap` got height:auto since only
      width was styled and next/image adds a height attribute. CSS
      background-image cards (services/ccards) intentionally left as-is.
      Verified on `next start`: optimizer 200s, priority imgs eager, others
      loading=lazy; before/after full-page shots pixel-equivalent at 1440
      and 390 (portrait 495×420 / 346×320, logos 130×30 / 148×34 unchanged).)
- [x] Font loading: confirm next/font subsets/weights are minimal;
      display=swap. Skill: vercel-react-best-practices.
      (Verification-only, no change. All three loaders already
      subsets:["latin"] + display:"swap". Checked every fontWeight/font-weight
      in src/: css has 500/600/700, inline styles have 400/500/600/700 (plus
      800 on trt/lp-trt/what-we-do and 900 on trt2, which render synthetic
      bold since only ≤700 is loaded — adding weights is out of scope).
      Oswald/Montserrat/Inter are each applied at container scope (home.css,
      CROPage, Header/LeadForm/TrustStrip, booking layout) with descendants
      spanning all four loaded weights, so no declared weight has zero
      usages; nothing safe to drop.)
- [x] Lighthouse run recorded to .ralph/artifacts/; fix any easy CLS/LCP wins.
      Skill: vercel-react-best-practices.
      (Recorded .ralph/artifacts/lh-home.json against local `next start`:
      Performance 91, Accessibility 98, Best Practices 100, SEO 100.
      LCP 3.5s (lab throttling + cold local optimizer), CLS 0, FCP 1.1s,
      TBT 50ms, SI 1.1s. CLS 0 < 0.05 threshold → no fix required; the a11y
      98 is landmark-one-main (moderate; the axe serious/critical gate on `/`
      remains 0). No easy LCP win left inside scope — hero images already
      priority + right-sized.)
