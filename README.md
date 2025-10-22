# TribeHub Landing

## Overview

- Marketing site for the TribeHub community-ops platform, built with Next.js 15 and Tailwind CSS 4.
- Focuses on showcasing an in-progress product roadmap, partnership messaging, and early-access CTAs.
- Components are split into self-contained sections (Hero, Features, Roadmap, FAQ, CTA, Footer) for quick iteration.

## Key Highlights

- Modern startup aesthetic powered by a custom OKLCH palette and layered gradients.
- Copy emphasises collaborative roadmap building instead of fully shipped features.
- Responsive layouts use Tailwind utility classes and CSS grid for consistent spacing across breakpoints.
- Mailto-based primary CTAs keep the flow lightweight until dedicated forms are available.

## Getting Started

- `pnpm install` to pull dependencies.
- `pnpm dev` to start Next.js in development mode at <http://localhost:3000>.
- `pnpm build` creates an optimized production build.
- `pnpm start` runs the production server after a successful build.

### Linting

- `pnpm lint` is configured but fails without `eslint` installed (the package is not currently in `package.json`).
- If you want linting, add ESLint (`pnpm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`) and set up a config.

## Project Structure

- `app/` Next.js App Router entry files (`layout.tsx`, `page.tsx`, global styles import).
- `components/` React components split by section plus reusable UI primitives (cards, buttons, accordion, etc.).
- `styles/globals.css` Tailwind base imports and global theme tokens.
- `public/` Static brand assets (favicon, social sharing card).
- `lib/` and `hooks/` house utility helpers and client hooks.

## Design System Notes

- Fonts rely on the Geist family configured via Tailwind theme tokens.
- Colors are defined with OKLCH values for perceptual consistency between light and dark modes.
- Motion feedback is intentionally subtle (hover states, soft shadows) to maintain a confident feel.
- Section padding is tuned for desktop hero impact while keeping scroll depth manageable on mobile.

## Customisation Tips

- Update the mailto links in `components/header.tsx` and `components/cta.tsx` when a waitlist form or scheduling tool is ready.
- Tweak gradients and spotlight elements in `components/hero.tsx` to align with future product visuals.
- Content blocks (`features`, `benefits`, `faq`) are driven by simple arrays—editing copy or adding items is straightforward.

## Deployment

- Ready for Vercel or any Node-compatible host: run `pnpm build` and `pnpm start`.
- Environment variables are not required for the static landing page, but you can integrate analytics or forms as needed.
