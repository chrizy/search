# Fathom

Premium marketing site for **Fathom** — an AI-powered website knowledge and intelligence platform.

> See what humans and agents ask about your product.

## Stack

- Next.js (App Router)
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

This app deploys to **Cloudflare Workers** via [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

```bash
# Preview in the local Workers runtime
npm run preview

# Deploy to Cloudflare (requires `wrangler login` or a Cloudflare API token)
npm run deploy
```

Config lives in `wrangler.jsonc` (worker name: `search`) and `open-next.config.ts`.

`npm run build` only runs `next build`. Cloudflare needs the OpenNext step that writes `.open-next/` before deploy.

### Cloudflare Workers Builds (dashboard)

In the Worker → **Settings → Build**, set:

| Setting | Value |
| --- | --- |
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx wrangler deploy` |

Alternatively, clear the build command and set **Deploy command** to `npm run deploy` (builds + deploys in one step).

Do **not** use `npm run build` as the Cloudflare build command — that skips OpenNext and causes:

`Could not find compiled Open Next config, did you run the build command?`

### GitHub Actions

A workflow is included at `.github/workflows/deploy.yml`. Add these repository secrets:

- `CLOUDFLARE_API_TOKEN` — Workers edit permission
- `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID

Pushes to `main`/`master` (or manual workflow runs) build with OpenNext and deploy the `search` worker.

## Notes

- Dashboard metrics and question streams are **illustrative demo data**.
- “Add your website” opens a labelled **early-access / demo** onboarding flow (no live crawl).
- The install script URL is a **placeholder** until a product backend is configured.
