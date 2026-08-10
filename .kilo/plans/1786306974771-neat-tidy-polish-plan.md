# Website Polish Plan

## Goal
Make the portfolio website more neat and tidy by improving spacing, alignment, and responsive consistency. Do not delete content. Do not touch the hero background image element or its inline styles.

## Current Issues

### 1. Invalid Tailwind class `py-35`
`py-35` is not a valid Tailwind spacing value (valid values: 0, 1, 2, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 36, 40, 48, 52, 56, 64, 72, 80, 96). This class is silently ignored, so the hero section gets `py-0` on large screens.

### 2. Inconsistent section vertical rhythm
| Section | Mobile | 2xl |
|---------|--------|-----|
| Hero | `py-35` (broken) | `py-35` (broken) |
| About | `py-20` | `py-50` |
| Experience | `py-20` | `py-40` |
| Footer | `py-16` | `py-32` |

### 3. Hacky `scale-*` transforms
- `Nav.tsx`: `2xl:scale-180` scales the entire nav, causing blurry text and inconsistent hit targets.
- `About.tsx`: `2xl:scale-150` scales the entire about block similarly.
These should be removed in favor of proper responsive typography and spacing.

### 4. Arbitrary large margins and widths
- `Hero.tsx`: `md:ml-55` (220px) on the intro text block creates an awkwardly large gap on medium screens.
- `Hero.tsx`: `2xl:px-50` (12.5rem = 200px) is much larger than the standard `2xl:px-24` used elsewhere.

### 5. Inconsistent container widths
- About uses `max-w-6xl mx-auto px-6` but lacks the `2xl:max-w-[1800px] 2xl:px-24` expansion used by Experience and Footer.

### 6. Extremely oversized hero typography on 2xl
The "Portfolio — 2025" tagline and name both use `2xl:text-9xl` (8rem = 128px), which dwarfs the rest of the site (`2xl:text-7xl` in Experience/Footer is 4.5rem = 72px). This creates visual imbalance.

## Plan

### Hero.tsx
- Replace `py-35` with `py-20 md:py-32 2xl:py-50` for a proper responsive vertical rhythm.
- Replace `2xl:px-50` with `px-6 lg:px-20 2xl:px-24` to match the standard container expansion pattern.
- Replace `md:ml-55` with `md:ml-auto md:pl-12 lg:pl-20` for a more balanced right-column layout.
- Keep `2xl:text-9xl` on the name "Falah" but reduce the "Portfolio — 2025" tag to `2xl:text-4xl` so it reads as a label, not a headline.
- **Do NOT touch the background image `<div>` or its classes/inline style.**

### About.tsx
- Remove `2xl:scale-150` from the container.
- Replace typography with proper responsive classes:
  - Section tag: add `2xl:text-base`
  - Heading: change to `text-3xl md:text-4xl 2xl:text-6xl`
  - Body text: keep `text-sm md:text-base 2xl:text-xl`
- Add container expansion: `max-w-6xl 2xl:max-w-[1800px] mx-auto px-6 2xl:px-24`
- Change `py-20` to `py-20 md:py-28 2xl:py-50` for consistency.

### Experience.tsx
- Change `py-20 2xl:py-40` to `py-20 md:py-28 2xl:py-50` for consistency.
- Experience card titles: add `2xl:text-3xl` and descriptions `2xl:text-xl` (already mostly there, just verify).

### Footer.tsx
- Change `py-16 2xl:py-32` to `py-20 md:py-28 2xl:py-50` for consistency.
- Social icon sizes already scale properly.

### Nav.tsx
- Remove `2xl:scale-180`.
- Adjust nav padding/font sizes directly:
  - Container: `px-5 py-2 md:px-8 md:py-2.5`
  - Links: `text-sm md:text-base 2xl:text-lg`

### globals.css
- Update `.section-tag` from `font-size: 0.7rem` to `font-size: 0.75rem` (12px) so it reads better on mobile without affecting large-screen overrides.

## Execution Order
1. Nav.tsx
2. About.tsx
3. Experience.tsx
4. Footer.tsx
5. Hero.tsx
6. globals.css

## Validation
- Run `npm run lint` and `npm run typecheck` after edits.
- Visually verify no content was removed and the hero background image still parallaxes correctly.
