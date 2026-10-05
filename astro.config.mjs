import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { copyFile } from 'node:fs/promises';
import { services } from './src/data/services.ts';
import { site } from './src/data/site.ts';

const SITE = 'https://vailvalleyit.com';
// Midnight UTC on the review date: a lastmod in the future makes Google reject the sitemap.
const lastmod = new Date(site.lastReviewed + 'T00:00:00Z');
const path = (url) => url.replace(SITE, '').replace(/\/$/, '') || '/';
const marketing = new Set(services.filter((s) => s.group === 'Digital Marketing').map((s) => '/' + s.slug));
const itServices = new Map(services.filter((s) => s.group !== 'Digital Marketing').map((s) => ['/' + s.slug, s.tier]));

// Priority reflects business value, not page count: money pages first, legal last.
function priorityFor(p) {
  if (p === '/') return 1.0;
  if (['/managed-it-services', '/services', '/digital-marketing', '/service-areas', '/contact'].includes(p)) return 0.9;
  if (itServices.has(p)) return itServices.get(p) === 1 ? 0.9 : itServices.get(p) === 2 ? 0.8 : 0.7;
  if (marketing.has(p) || p.startsWith('/it-support-')) return 0.8;
  if (p.startsWith('/industries') || p.startsWith('/compliance') || p === '/security-check' || p === '/about') return 0.7;
  if (p === '/privacy-policy') return 0.2;
  return 0.5;
}
const pick = (test) => (item) => (test(path(item.url)) ? item : undefined);

// Canonical production origin. All canonicals, OG URLs and schema @ids use this,
// even on preview deployments, so search engines only ever credit vailvalleyit.com.
export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/thank-you'),
      xslURL: '/sitemap.xsl',
      namespaces: { news: false, xhtml: false, image: false, video: false },
      lastmod,
      serialize(item) {
        const p = path(item.url);
        return { ...item, lastmod, priority: priorityFor(p), changefreq: p === '/' ? 'weekly' : p === '/privacy-policy' ? 'yearly' : 'monthly' };
      },
      // Split into one sitemap per section: sitemap-<name>-0.xml (anything unmatched goes to "pages").
      chunks: {
        'it-services': pick((p) => p === '/services' || itServices.has(p)),
        'digital-marketing': pick((p) => p === '/digital-marketing' || marketing.has(p)),
        'service-areas': pick((p) => p === '/service-areas' || p.startsWith('/it-support-')),
        industries: pick((p) => p.startsWith('/industries')),
        compliance: pick((p) => p.startsWith('/compliance/') || p === '/compliance'),
      },
    }),
    // Also publish the index at /sitemap.xml, the address most tools (and people) try first.
    {
      name: 'sitemap-xml-alias',
      hooks: { 'astro:build:done': async ({ dir }) => { await copyFile(new URL('sitemap-index.xml', dir), new URL('sitemap.xml', dir)); } },
    },
  ],
});
