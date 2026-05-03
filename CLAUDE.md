# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server on http://localhost:3000
npm run build    # production build
npm run lint     # ESLint check
```

## Stack

- **Next.js 15** with App Router, TypeScript, React 19
- **Tailwind CSS v3** with custom theme (see `tailwind.config.ts`)
- **next/font** — Inter (sans) and Playfair Display (serif) loaded via `--font-inter` and `--font-playfair` CSS variables
- **next/image** — Unsplash domain is allowlisted in `next.config.ts`
- Deploy target: **Vercel** (zero-config, auto-detects Next.js)

## Design System

Custom Tailwind colours:
- `navy` / `navy-800` / `navy-700` — primary dark background (#0F1B2D)
- `gold` / `gold-light` / `gold-dark` — accent (#C8A96E)
- `cream` — section backgrounds (#F8F5F0)

Font classes: `font-serif` → Playfair Display, `font-sans` → Inter.

## Architecture

```
app/          # Next.js App Router pages (layout.tsx wraps all pages with Navbar + Footer)
components/   # Shared UI — Hero, Services, AboutSnippet, Testimonials, CTABanner, Navbar, Footer
public/       # Static assets (add Vanessa's headshot here as vanessa.jpg)
```

The home page (`app/page.tsx`) composes: Hero → Services → AboutSnippet → Testimonials → CTABanner.  
Each inner page (`/about`, `/selling`, `/renting`, `/properties`, `/contact`) follows the same shell but has its own header section + page body + `<CTABanner />`.

## Client Details

- **Business**: VanWhite Property Group — boutique real estate, Sydney inner eastern suburbs
- **Agent**: Vanessa White, Director
- **Phone**: 0418 619 166 | **Email**: vanessa@vwpg.com.au
- **Office**: 71 Victoria St, Potts Point NSW 2011
- **Suburbs**: Potts Point, Elizabeth Bay, Woolloomooloo, Rushcutters Bay, Darlinghurst

## To-Do Before Launch

- Replace hero Unsplash image with a licensed or owned Sydney/property photo
- Add Vanessa's headshot to `public/vanessa.jpg` and update `app/about/page.tsx`
- Wire up the contact form to a real backend (e.g. Resend, Formspree, or a Next.js API route)
- Add real property listings (consider integrating Domain or REA API, or a CMS)
- Add Google Analytics / Vercel Analytics
- Update the map placeholder in `/contact` with an embedded Google Map iframe
