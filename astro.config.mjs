import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical production origin. All canonicals, OG URLs and schema @ids use this,
// even on preview deployments, so search engines only ever credit vailvalleyit.com.
export default defineConfig({
  site: 'https://vailvalleyit.com',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/thank-you'),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        const u = item.url.replace(/\/$/, '');
        if (u === 'https://vailvalleyit.com') return { ...item, priority: 1.0, changefreq: 'weekly' };
        if (/\/(it-support-|managed-it-services|compliance|cybersecurity-risk-assessment|penetration-testing|security-awareness|automation-ai-enablement|digital-marketing|website-design|short-form-video|social-media-management|seo-ai-search|google-ads|meta-ads)/.test(u)) return { ...item, priority: 0.9 };
        return item;
      },
    }),
  ],
});
