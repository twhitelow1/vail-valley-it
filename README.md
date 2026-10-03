# vailvalleyit.com

Local IT services site for **Vail Valley IT**, a DubLow Digital brand. Astro static site, built for local SEO and AI answer engines (GEO).

## Run locally
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Deploy (Vercel)
Import the repo in Vercel. Framework: Astro (auto-detected). No env vars needed for a demo.

| Env var | Value | When |
|---|---|---|
| `PUBLIC_SITE_INDEXABLE` | `true` | **Only** on Production once vailvalleyit.com is connected. Unset = `noindex` + `Disallow: /` everywhere. |

Canonicals always point to `https://vailvalleyit.com`, so demo URLs never compete in search.

## Where to edit
- `src/data/site.ts` — phone, hours, GHL booking/form links, GA4/Clarity IDs, quiz webhook, credential logos (all TODOs live here)
- `src/data/services.ts` + `src/data/serviceExtras.ts` — service pages
- `src/data/locations.ts` — town pages
- `src/data/industries.ts` — industry pages
- `src/data/events.ts` — workshop/webinar dates (Event schema only emits for dated events)
- `src/data/projects.ts` — case studies

## Preview bundle
`npm run build && python3 tools/preview_bundle.py dist preview.html` makes a single clickable HTML file of the whole site.
