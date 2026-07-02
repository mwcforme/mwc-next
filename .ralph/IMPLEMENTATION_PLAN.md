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
- [ ] Keyboard operability: all interactive elements reachable; visible focus
      rings on orange CTAs (2px navy outline, offset 2). Skill: accesslint-audit.
- [ ] aria-labels on all icon-only buttons/links; heading levels ascend without
      gaps (one h1). Skill: accesslint-audit.

## P1 — CRO (mobile-first, 390px)
- [ ] Hero at 390px: headline + subhead + primary CTA visible above the fold;
      compress hero spacing if needed. Skill: anthropic-frontend-design.
- [ ] Differentiate the 3 service CTAs: "Reserve Hormone Visit", "Reserve ED
      Visit", "Reserve Weight-Loss Visit". Skill: ui-ux-pro-max.
- [ ] Add tap-to-call phone number to the mobile sticky bar subtext or header
      (fallback Richmond). Skill: ui-ux-pro-max.
- [ ] Trust strip: confirm order/content LegitScript · Physician-Led · Locally
      Owned · Transparent Pricing fits brand; adjust labels. Skill: ui-ux-pro-max.
- [ ] Form confirmation UX: inline success state copy per brand skill after
      submit (before redirect). Skill: mwc-brand-cro-compliance.

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
