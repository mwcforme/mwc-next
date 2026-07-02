# mwc-next

Next.js (App Router) landing pages + booking funnel for Men's Wellness Centers.
Replaces the legacy Vite app at book.menswellnesscenters.com. Deployed on Vercel;
`main` auto-deploys to production (mwc-next.vercel.app).

## Deploy workflow — standing instruction from Eric

Deploy without asking. When a change is done and verified:
push the branch → open a PR → **merge it to `main` immediately**. Do not wait
for confirmation. Production is the only target that matters; preview URLs are
behind Vercel SSO anyway.

**Never push directly to `main`.** A direct push once shipped a page importing
a component that didn't exist; `next build` failed silently on Vercel and
blocked every production deploy while prod kept serving a stale build.

**Always run `npm run build` locally before pushing.** It catches
module-not-found and type errors that dev mode tolerates.

## Architecture

- `src/app/(landing)/` — marketing pages: `/` (CROPage), `/trt`, `/lp/trt`,
  `/what-we-do`, `/trt2` (design exploration)
- `src/app/(booking)/` — funnel: `/qualify` → `/duration` → `/schedule` → `/confirmed`
- `src/app/api/` — `qualify` (lead upsert to GoHighLevel), `slots`, `book`
- Lead capture: `LeadForm` posts to `/api/qualify`, writes sessionStorage via
  `bookingStore`, then routes into the funnel. CTAs elsewhere open the
  lead-form modal (`FormModalProvider` in the landing layout / `CtaButton`).

## Design system (paid-lander pages)

- Tokens live in `src/app/globals.css` under `@theme`: navy `#0B1029`,
  navy-mid `#161B3A`, warm off-white surface, accent orange `#E8670A`.
  Use `bg-navy` / `bg-surface` utilities and `var(--color-*)`.
- Oswald for headlines (uppercase), Montserrat for body — via `next/font`
  CSS variables (`var(--font-oswald)`); never literal font-family names.
- **Orange is reserved for CTAs only** (brand rule).
- Paid landers (`/trt`, `/lp/trt`, `/what-we-do`) are `noindex` and use
  `<Header exitLinks={false} />` — no exit paths for paid traffic.
- Do not invent provider names, license numbers, or reviews. Testimonials are
  initials + city only (HIPAA).

## Gotchas

- globals.css must not contain un-layered universal resets (`* { padding: 0 }`
  overrides Tailwind utilities via cascade layers).
- `LeadForm` renders `id="hero-form"` only when `formId="hero"` — sticky CTAs
  and anchor links depend on it.
- This sandbox's network policy blocks `*.vercel.app` / `vercel.com`; verify
  pages locally (dev server + Playwright at 1440px and 390px) before pushing.
