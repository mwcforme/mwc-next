# MWC: Vite → Next.js Migration Plan

## Overview
This repo (`mwc-next`) is the replacement codebase for the current Vite + React app at `book.menswellnesscenters.com`. Migration happens incrementally — marketing pages first, booking flow last.

## Phases

### Phase 1: Marketing & Landing Pages
- Convert TRT, ED, Weight Loss landing pages to Next.js Server Components
- Static generation (SSG) for all landing pages — fastest possible TTFB
- Port brand tokens, design system CSS, shared UI components
- Wire up /api/qualify endpoint (GHL contact upsert)
- SEO: metadata API replaces react-helmet, JSON-LD via generateMetadata

### Phase 2: Reusable UI / Component Library
- Port shared components: LeadForm, LocationSelector, CTAButton, FloatInput, TCPADisclaimer
- Port design tokens (brand-tokens.css, cro-tokens.css)
- Establish client vs server component boundaries
- Port analytics hooks (GTM, Meta Pixel, Clarity)

### Phase 3: Booking Flow
- Convert multi-step booking funnel (qualify → location → schedule → confirm)
- Port GHL calendar integration (slot fetch, appointment booking)
- Client components for interactive flows (date/time pickers, form state)
- Port booking state management (localStorage-based)

### Phase 4: Cutover
- Verify feature parity with Vite app
- DNS cutover: book.menswellnesscenters.com → mwc-next Vercel project
- Retire mwc-v2 Vite project
- Monitor for regressions

## Architecture Decisions
- **Server Components by default** — only use 'use client' where interactivity requires it
- **Static generation for landing pages** — `generateStaticParams` + ISR where needed
- **API routes for server-side work** — GHL proxy, lead submission, no client-side API keys
- **Tailwind + CSS custom properties** — port existing brand-tokens.css as-is
- **No new dependencies** without justification (same house rule as mwc-v2)
