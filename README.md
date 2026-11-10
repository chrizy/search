# Fathom

Premium marketing site for **Fathom** — an AI-powered website knowledge and intelligence platform.

> See what humans and agents ask about your product.

## Stack

- Next.js (App Router, static export)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Getting started


```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cloudflare deployment

This is a **static site**. `next build` writes HTML/CSS/JS to `out/`, and Wrangler deploys that folder as [Workers static assets](https://developers.cloudflare.com/workers/static-assets/) (no OpenNext, no Worker script).

```bash
# Build + preview locally on the Workers runtime
npm run preview

# Build + deploy (requires `wrangler login` or a Cloudflare API token)
npm run deploy
```

Config lives in `wrangler.jsonc` (worker name: `search`).

### Cloudflare Workers Builds (dashboard)

In the Worker → **Settings → Build**, set:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Build output / assets | handled by `wrangler.jsonc` → `./out` |

Alternatively, clear the build command and set **Deploy command** to `npm run deploy`.

## Notes

- Dashboard metrics and question streams are **illustrative demo data**.
- “Add your website” opens a labelled **early-access / demo** onboarding flow (no live crawl).
- The install script URL is a **placeholder** until a product backend is configured.
