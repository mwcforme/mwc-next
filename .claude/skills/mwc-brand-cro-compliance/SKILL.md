---
name: mwc-brand-cro-compliance
description: HARD brand, copy, and compliance rules for Men's Wellness Centers (mwc-next). Load BEFORE writing or editing any visible copy, color, font, CTA, or imagery on this site. Every visible change must pass these rules; violations are auto-revert. Trigger on any copy edit, new section, CTA change, color/font change, or image swap in this repo.
---

# MWC Brand & CRO Compliance — Hard Rules

Violations of any rule below = auto-revert. No exceptions without explicit
sign-off from Eric.

## Naming & voice
- Always "Men's Wellness Centers". Never "clinic", "patients", "free", "guy/guys".
- **Members**, not patients. "**No-cost consultation**", not "free consult".
- No em-dashes anywhere in visible copy. Use periods or commas.
- No first person "I". Brand voice is direct second person.
- Tagline exact: **"Find Your Edge Over Age."**
- Never rename the brand or retype the wordmark in Oswald; use the existing
  logo asset (`/logos/Text_Logo_white.webp`).

## Consult framing
- The offer is a **60-minute in-person visit at the local center**.
- Never frame as "call", "video", "telehealth", or "15-min".
- Labs: drawn on-site, results same visit (15 minutes).

## Colors (tokens only)
- Warm Off-White `#F5F3F0` surface · Midnight Navy `#0B1029` anchor ·
  Navy Mid `#161B3A` · Navy Line `#1E244A` · Accent Orange `#E8670A` **CTA only** ·
  Body gray `#B0ADA8` (on dark) · Muted `#9CA3AF`.
- No raw hex outside that set; use the tokens in `src/app/globals.css` /
  `home.css` variables.
- Orange on light or on navy. Never orange-on-orange. No teal, no blue gradients.

## Type
- Oswald for headlines, UPPERCASE. Montserrat for body. Never Bebas Neue.
- Load via `next/font` variables (`var(--font-oswald)`, `var(--font-montserrat)`),
  never literal font-family names.

## CTAs
- Verbs: Book / Schedule / Claim / Reserve.
- Mobile-first: at 390px the hero must not push the form/primary CTA below the fold.
- Sticky bottom CTA on mobile is the default pattern (call + book, one thumb-tap).

## Imagery
- No lab coats, stethoscopes, before/after photos, or AI-uncanny imagery.
- Testimonials: initials + city only (HIPAA). Never invent provider names,
  license numbers, or reviews.

## Compliance
- LegitScript badge + required disclosures in the footer:
  "Treatment requires a clinical evaluation and is provided only when medically
  appropriate. Individual results vary."
- SMS/TCPA consent on every lead form: agree-to-SMS language, "Msg and data
  rates may apply. Reply STOP to opt out. Not a condition of service." +
  Privacy Policy link.
- Treatment claims always qualified: "when clinically appropriate" /
  "when medically appropriate".
- Superlatives must be substantiated on-page or softened.
