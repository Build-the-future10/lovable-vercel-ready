# The Bu1ld Start

A research × startup hub. Where machine learning research becomes real systems.

## Develop

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

Static SPA output in `dist/`.

## Deploy to Vercel

The repo ships a `vercel.json` configured for a Vite SPA:

- Build command: `bun run build`
- Install command: `bun install`
- Output directory: `dist`
- SPA rewrites: all routes fall back to `/`

Push the repo to GitHub and import it in Vercel — no further configuration is needed. Set the Node version to 20+ in project settings.

## Stack

- TanStack Start + TanStack Router (file-based routing in `src/routes`)
- React 19, Tailwind v4, framer-motion
- shadcn-ui primitives in `src/components/ui`
