# Next.js + Tailwind CSS v4 + Framer Motion

## Stack
- **Framework**: Next.js 15 (App Router) with Turbopack
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: JavaScript (JSX components)

## Project Structure
```
app/
  globals.css          # Tailwind v4 base styles (@import "tailwindcss")
  layout.js            # Root layout with Navbar + Footer
  page.js              # Home page with all sections
  components/
    Navbar.jsx
    Hero.jsx
    Destinations.jsx
    Features.jsx
    Reviews.jsx
    CTA.jsx
    Footer.jsx
public/
  images/              # Static image assets (hero.png, mountain.jpg, etc.)
postcss.config.js      # @tailwindcss/postcss only (no autoprefixer)
next.config.js
```

## Running the App
The app runs on port 5000 via `npm run dev` (uses `--turbopack`).

## Notes
- Uses Tailwind CSS v4 with `@import "tailwindcss"` in globals.css
- PostCSS config uses `@tailwindcss/postcss` only — autoprefixer is NOT included (Tailwind v4 handles prefixing internally)
- Dev server uses `--turbopack` to avoid the webpack+Tailwind v4 continuous HMR reload loop
- All page components use `"use client"` directive for Framer Motion animations
- Images served from `public/images/` (not `app/images/`)
