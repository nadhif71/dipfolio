# Plan: Make Website Neat and Tidy Across All Platforms

## Context
Next.js 16 (App Router) + Tailwind CSS v4 portfolio site. Fix visual/UX issues without adding/deleting elements and without changing the hero background image (`/src/pic4.webp`) in `page.tsx`.

## Issues Found

### 1. Typo in `page.tsx` (line 52)
`<Hero />s` renders a stray "s" character on the page.

**Fix:** Remove the trailing `s`.

### 2. AutoSlider width conflict (`AutoSlider.tsx` line 34)
The slider has `max-w-4xl` but its parent in `About.tsx` constrains it to `max-w-lg`. This causes the slider to overflow its container.

**Fix:** Change `max-w-4xl` to `max-w-full` so it respects the parent's width constraint.

### 3. Nav overflow on very small screens (`Nav.tsx` line 10)
`w-[90%] max-w-fit` with `whitespace-nowrap` links risks overflow on small screens. The fixed pill nav should gracefully handle narrow viewports.

**Fix:** Add responsive padding/gap/font-size adjustments for `xs`/`sm` breakpoints (e.g., `px-3 py-1.5 text-[10px] gap-2 sm:gap-4 sm:text-xs md:text-sm`). Ensure the nav doesn't overflow.

### 4. Body font conflict (`globals.css` lines 23-27)
`body` sets `font-family: Arial, Helvetica, sans-serif` but the app uses Geist Sans via `next/font/google` (set in `layout.tsx`). This overrides the intended font.

**Fix:** Change `body` font-family to use the Geist Sans variable: `font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif`.

### 5. Hero mobile spacing — remove flex-1 and min-h causing empty space gap
On mobile (base + sm breakpoints), the hero has `min-h-[75vh]` forcing it to 75% viewport height. Combined with `flex-1` on the left (name) column and `items-center`, the name column expands to fill the tall section, pushing the Introduction down with a large empty space between them. This looks like a gap but it's actually the flex item stretching.

**Fix:** Remove `flex-1` from the left column on mobile so both columns shrink to their content size, and remove `min-h-[75vh]` on mobile so the section fits its content. Keep the tall hero on desktop.
- Container: change `min-h-[75vh] lg:min-h-[85vh]` → `md:min-h-[75vh] lg:min-h-[85vh]`
- Left column: change `flex-1` → `w-full` (remove flex grow on mobile)

On tablet (`md`) and desktop (`lg+`), the existing `min-h` and layout remain unchanged.

### 6. Hero name "F" separated on mobile S (`Hero.tsx` line 29)
On very small screens (~320px width), the name "Falah" uses `text-5xl` (48px) with `break-words`, causing the "F" to break onto its own line and appear separated from the rest of the name.

**Fix:** Add a smaller base font size for the name on very small screens. Change `text-5xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-9xl` → `text-4xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-9xl`. Apply this to both `<h1>` elements (lines 29 and 32).

### 7. About section bio text too large on mobile (`About.tsx` line 13)
The bio paragraph uses `text-base` (16px) on mobile, which can feel oversized on small screens. The user wants it a bit smaller on mobile.

**Fix:** Change `text-base md:text-lg lg:text-xl` → `text-sm md:text-base lg:text-lg` so mobile gets 14px, tablet stays 16px, desktop stays 18px.

### 8. About section side margins too tight on mobile (`About.tsx` line 9)
The About section uses `px-6` (24px horizontal padding) on mobile. The user wants a bit more side margin on mobile so the content feels less cramped and more compact.

**Fix:** Change `px-6` → `px-8` on the About container (line 9) for mobile, then `md:px-12 lg:px-20` for larger screens.

### 9. Experience role descriptions truncated (`Experience.tsx` line 44)
The role descriptions have `line-clamp-2`, which limits them to 2 lines and truncates with ellipsis. The user wants all role descriptions fully visible without truncation.

**Fix:** Remove `line-clamp-2` from the description `<p>` tag on line 44. Keep `line-clamp-1` on the title since titles should remain single-line.

## Files to Modify
- `app/page.tsx` — fix typo `<Hero />s`
- `app/components/AutoSlider.tsx` — fix `max-w-4xl` → `max-w-full`
- `app/sections/nav/Nav.tsx` — improve small-screen responsiveness
- `app/globals.css` — fix body font-family
- `app/sections/hero/Hero.tsx` — remove flex-1 and mobile min-h; reduce name font size on mobile S
- `app/sections/about/About.tsx` — reduce bio text size on mobile; increase side padding on mobile
- `app/sections/experience/Experience.tsx` — remove line-clamp on role descriptions so they are fully visible

## Constraints
- Do NOT add or remove any HTML elements/components.
- Do NOT change the hero background image (`/src/pic4.webp`) in `page.tsx`.
- Do NOT introduce new dependencies.
- Keep all existing Tailwind utility classes and CSS animations intact.

## Validation
- Run `pnpm build` to ensure no build errors.
- Visually inspect on mobile (< 640px), tablet (640-1024px), and desktop (> 1024px).
- Confirm no stray "s" text appears.
- Confirm slider fits within About section on all screen sizes.
- Confirm nav links are accessible on all screen sizes without overflow.
- Confirm About bio text is smaller on mobile.
- Confirm Experience role descriptions are fully visible with no truncation.
- Confirm "Falah" name stays on one line on mobile S (~320px width).
- Confirm About section has more side margin on mobile.
