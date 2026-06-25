# mwc-next

**Men's Wellness Centers — Next.js Migration Project**

This is the replacement codebase for the current Vite + React app at `book.menswellnesscenters.com`. Migration happens incrementally — marketing pages first, booking flow last.

See [`docs/migration-plan.md`](./docs/migration-plan.md) for the full plan and [`docs/vite-to-next-audit.md`](./docs/vite-to-next-audit.md) for the route/component audit.

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS + CSS custom properties (brand tokens) |
| Hosting | [Vercel](https://vercel.com/) |
| CRM | GoHighLevel (GHL) — via `/api/ghl` proxy route |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Run linter
npm run lint
```

---

## Deployment

```bash
# Deploy to Vercel (production)
npx vercel deploy --prod --token <VERCEL_TOKEN>
```

---

## Migration TODO

### Routing & Pages
- [ ] Audit current Vite routes
- [ ] Map routes into Next App Router
- [ ] Identify client-only components

### Meta & SEO
- [ ] Convert helmet/meta logic to Next metadata API
- [ ] Convert React Router usage to Next routing

### Environment
- [ ] Review Vite env variables and map to Next env conventions
  - `VITE_*` → `NEXT_PUBLIC_*` (client-exposed)
  - Server-only vars: no prefix change needed

### Architecture
- [ ] Define which pages are static vs dynamic
- [ ] Port brand-tokens.css and design system
- [ ] Port /api/ghl.ts proxy to Next API route (`src/app/api/ghl/route.ts`)
- [ ] Port analytics/tracking setup
  - GTM (GTM-5X9DB23T) via `next/script` with `strategy="afterInteractive"`
  - Google Ads (AW-954193072)
  - Analytics guard (PHI sanitization) — **required before booking flow**
- [ ] Port Zustand booking state management
- [ ] Re-implement BookingRouteGuard using cookies or URL params (no React Router state)

### Polish
- [ ] Prepare Vercel deployment settings
- [ ] Verify feature parity with Vite app
- [ ] DNS cutover: book.menswellnesscenters.com → this project

---

## Project Structure

```
src/
├── app/              # Next.js App Router (pages, layouts, API routes)
├── components/       # Shared UI components
├── lib/              # Utilities, GHL client, analytics helpers
├── styles/           # Global CSS, brand tokens
├── content/          # Static content (copy, config)
docs/
├── migration-plan.md
├── vite-to-next-audit.md
```
