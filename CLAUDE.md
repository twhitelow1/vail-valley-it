# Vail Valley IT — vailvalleyit.com

Local IT and digital marketing site for **Vail Valley IT**, a DubLow Digital brand (owner: Todd Whitelow).
Astro 7 static site (Node ≥ 22), deployed on Vercel. Built for local SEO and AI answer engines (GEO).

## Commands
- `npm run dev` — dev server on http://localhost:4321
- `npm run build` — static build to `dist/` (62 pages). Run this before every push; it is the only check.
- `npm run build && python3 tools/preview_bundle.py dist preview.html` — single-file clickable preview

## Architecture
Pages are data-driven. Edit content in `src/data/`, not in page templates:
- `site.ts` — single source of truth for NAP, hours, GHL links, tracking IDs, reviews. NAP must match the Google Business Profile character-for-character.
- `services.ts` + `serviceExtras.ts` → service pages, rendered by `src/pages/[slug].astro`. `serviceGroups` drives nav and `/services`; the `Digital Marketing` group gets marketing CTAs (free marketing review) instead of the cybersecurity assessment, and has its own hub at `/digital-marketing`
- `locations.ts` → town pages (`/it-support-<town>-co`), also via `[slug].astro`
- `industries.ts` → `src/pages/industries/[slug].astro`
- `compliance.ts` → `src/pages/compliance/[slug].astro`
- `events.ts` → workshops/webinars (Event schema only emits for dated events)
- `projects.ts` → case studies
- `src/lib/schema.ts` — JSON-LD builders; `src/layouts/Base.astro` — head, meta, tracking
- `llms.txt.ts`, `robots.txt.ts` — generated endpoints
- `src/components/Attribution.astro` — first-party lead source tracking (UTMs, click IDs, organic/AI/social) passed to GTM and GHL forms. Analytics setup steps: `docs/ANALYTICS.md`

## Rules
- Canonicals, OG URLs and schema `@id`s always use `https://vailvalleyit.com`, even on previews.
- Indexing is gated by `PUBLIC_SITE_INDEXABLE=true` (production only). Never set it on previews.
- URLs: no trailing slash, `build.format: 'file'`, Vercel `cleanUrls`. Add redirects in `vercel.json` when renaming a slug.
- Reviews in `site.ts` are verbatim Google reviews — never edit or invent them. No fabricated stats, clients or case studies.
- Open launch items are marked `TODO` in `src/data/site.ts`, `projects.ts` and `privacy-policy.astro`.

## Workflow
Develop on a `claude/*` branch, verify `npm run build` passes, push, open a draft PR. Vercel builds a preview per PR.
