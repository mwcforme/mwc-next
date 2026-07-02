# AGENTS.md — Ralph loop for mwc-next

## Project
- Next.js (App Router). Prod: https://mwc-next.vercel.app/ · local dev: http://localhost:3000
- Package manager: npm
- This is Men's Wellness Centers. Load the skill **mwc-brand-cro-compliance**
  (repo `.claude/skills/`) FIRST and apply it to every change.

## Installed UI/UX skills (use them, cite which one drove each change)
1. anthropic-frontend-design      — visual polish, hero moments, editorial layout
2. vercel-web-design-guidelines   — 100+ UI/a11y/perf guidelines (checklist source)
3. vercel-react-best-practices    — React/Next.js perf rules
4. vercel-composition-patterns    — component architecture, variants, compound components
5. ui-ux-pro-max                  — design intelligence: palettes, type pairings, UX rules
6. bencium-controlled-ux-designer / bencium-innovative-ux-designer — interaction, motion
7. accesslint-scan / accesslint-audit — WCAG 2.2 audit + fixes
8. design-audit / typography      — visual refinement, typographic correctness

## Environment notes (this sandbox)
- Playwright chromium: launch with `executablePath: '/opt/pw-browsers/chromium'`
  (never `npx playwright install`). Config already set in `playwright.config.ts`.
- Network egress is blocked to vercel.app/google — all verification is against
  `http://localhost:3000` (dev server or `next start`). curl needs `--noproxy '*'`
  for localhost.
- Lighthouse: `CHROME_PATH=/opt/pw-browsers/chromium npx --yes lighthouse ...`
  (advisory gate; record scores, hard-fail only on a11y < 95).

## Backpressure (run in order; ALL must pass to commit)
1. `npm run lint`
2. `npx tsc --noEmit`
3. `npm run build`
4. `npx playwright test --reporter=line` (smoke + axe tests in `tests/`)
   — the axe spec must report 0 serious/critical violations on `/`.
5. Visual sanity at 1440px and 390px (screenshot via the harness script
   `scripts/shot.mjs` if in doubt).

## MWC Hard Rules (violations = auto-revert)
See `.claude/skills/mwc-brand-cro-compliance/SKILL.md` — it is the single
source of truth. Summary: Members not patients; no-cost not free; no em-dashes;
no first person; tagline exact "Find Your Edge Over Age."; color tokens only;
Oswald/Montserrat via next/font; orange = CTA only; 60-minute in-person visit
framing; LegitScript + disclosures in footer; TCPA consent on forms; initials +
city testimonials only; no invented providers/reviews.

## House rules
- One atomic change per iteration. If it touches >3 files or >120 LOC, split it.
- Prefer composition patterns over prop drilling. Extract when a component >150 LOC.
- No new deps without a comment in the commit body justifying it.
- Never edit `next.config.*`, `postcss.config.*`, or design tokens unless the
  task IS the tokens.
- Work on branch `claude/mwc-next-connection-9icplb`. Commit locally; the outer
  loop pushes and merges at milestones. NEVER push to main directly.

## Learnings
<!-- agent appends discovered gotchas here -->
- Un-layered universal CSS resets override Tailwind utilities (cascade layers).
- `LeadForm`/`ProtoLeadForm` ids: `hero-form` anchor is load-bearing for sticky CTAs.
- Full-page screenshots need a scroll pass first (lazy images).
- `/images/cro/hero-trt-v4.jpg` is a screenshot of a UI card with baked-in headline
  text; at `background-size: cover` it renders as a card-within-a-card bug.
  Use `hero-trt-v3.jpg` (same photo, clean). Audit image assets by opening them,
  not by filename.
- home.css now defines an elevation/shape system in `.proto` vars
  (`--shadow-card`, `--shadow-card-hover`, `--shadow-float`, `--card-edge`,
  `--dark-card-bg`, `--dark-card-line`; containers 14px / controls 8px / pills 999).
  New cards should consume these vars, not ad-hoc shadows; keep shadows
  navy-tinted, never pure black on the cream surface.
- Decorative orange dots in eyebrows are hidden via `.proto .eyebrow .dot`
  (taste-skill: dots only for real semantic state). Eyebrow copy itself is
  frozen content; quiet it with CSS, don't delete the spans.
- maps.google.com iframes are blocked in this sandbox; `.locrow .map` has a
  navy gradient fallback so local screenshots look intentional. Maps render in prod.
  Sometimes the blocked iframe paints Chromium's gray error tile over the fallback
  in desktop screenshots; ignore locally, verify maps in prod only.
- Iter 13 layout language: section headers are left-aligned `.sec-head` blocks
  (hairline `border-top` + quiet caps label + display h2 with `text-wrap: balance`).
  Hairline tokens: `--hair-l` on cream, `--hair-d` on navy. New sections should
  join this rail system, not reintroduce centered headers or boxed cards on cream.
- Frozen-copy split trick: "STEP 01" is rendered as `<span class="k">STEP</span>
  <span class="n">01</span>` so the numeral can take display scale while
  textContent stays byte-identical. Reuse for typographic treatment of frozen copy.
- Eyebrow spans are frozen copy on every section; the design absorbs them as the
  rail label layer. Don't delete them and don't re-chrome them into pills.
- `/images/cro/doctor-consult.webp` shows a white coat + stethoscope, which the
  imagery rule bans; it predates the redesign and matches the frozen "Private exam
  rooms" caption, and no compliant replacement exists in `/public/images`. Flagged
  for Eric: needs a compliant exam-room photo.
- axe gotcha: `#6b7280` passes on white but fails (4.36) on the cream `#F5F3F0`
  surface at small sizes. When moving text out of white cards onto cream, bump
  small gray text to `#5b6470` or darker.
