import type { APIRoute } from 'astro';
// Production: open to search + AI answer engines (that is the AI-GEO strategy).
// Anything else: blocked, so previews never compete with the real domain.
export const GET: APIRoute = () => {
  const prod = import.meta.env.PUBLIC_SITE_INDEXABLE === 'true';
  const body = prod
    ? `# Vail Valley IT
User-agent: *
Allow: /

# AI answer engines and assistants are explicitly welcome.
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bingbot
Allow: /

Sitemap: https://vailvalleyit.com/sitemap-index.xml
`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
