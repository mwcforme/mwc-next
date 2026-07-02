| Iter | Task | Files | Δ LOC | Lint | tsc | Build | Playwright | axe serious | Status |
|------|------|-------|------:|------|-----|-------|------------|------------:|--------|
| 0    | baseline | -  | 0     | -    | -   | -     | -          | -           | seed   |
| 1 | Test harness: playwright.config + smoke/axe specs (@axe-core/playwright dev dep) | 3 | +130 | ok | ok | ok | 5/5 | 0 | committed |
| 2 | a11y: contrast fixes (navy-on-orange CTAs, darker fine print, underlined links) + pre-existing lint errors greened | 9 | +40/-25 | 0 err | ok | ok | 5/5 | 0 | committed |
