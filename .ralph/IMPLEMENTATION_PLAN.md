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
- [ ] Motion pass on `/`: entrance fades <= 300ms, respect
      prefers-reduced-motion. Skill: bencium-innovative-ux-designer.
- [ ] Section rhythm: consistent vertical spacing scale (48/64/96) in home.css.
      Skill: anthropic-frontend-design.
- [ ] Typographic pass: quote marks, dashes, spacing per typography skill on
      homepage copy. Skill: typography.
- [ ] Componentize repeated service card into `ServiceCard` with variants
      (hormone|ed|weightloss). Skill: vercel-composition-patterns.
- [ ] Soften the "Not telehealth. Not a med spa. Not a general practice."
      repetition across `/`; keep once, replace others with positive claims.
      Skill: mwc-brand-cro-compliance.
- [ ] Substantiate or soften "Virginia's only specialty men's health practice
      with 3 locations". Skill: mwc-brand-cro-compliance.

## P3 — Perf
- [ ] next/image for homepage images with sizes+priority (hero vial priority,
      below-fold lazy). Skill: vercel-react-best-practices.
- [ ] Font loading: confirm next/font subsets/weights are minimal;
      display=swap. Skill: vercel-react-best-practices.
- [ ] Lighthouse run recorded to .ralph/artifacts/; fix any easy CLS/LCP wins.
      Skill: vercel-react-best-practices.
