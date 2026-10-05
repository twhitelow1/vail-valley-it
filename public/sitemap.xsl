<?xml version="1.0" encoding="UTF-8"?>
<!-- Presentation for the XML sitemaps when opened in a browser. Search engines ignore this file. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <xsl:template name="label">
    <xsl:param name="u"/>
    <xsl:choose>
      <xsl:when test="contains($u, 'sitemap-it-services')">IT services</xsl:when>
      <xsl:when test="contains($u, 'sitemap-digital-marketing')">Digital marketing</xsl:when>
      <xsl:when test="contains($u, 'sitemap-service-areas')">Service areas</xsl:when>
      <xsl:when test="contains($u, 'sitemap-industries')">Industries</xsl:when>
      <xsl:when test="contains($u, 'sitemap-compliance')">Compliance guides</xsl:when>
      <xsl:when test="contains($u, 'sitemap-pages')">Company &amp; resources</xsl:when>
      <xsl:otherwise>Sitemap</xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex, follow"/>
        <title>XML Sitemap · Vail Valley IT</title>
        <style>
          :root { --ink:#19143f; --text:#3d395b; --muted:#67638a; --indigo:#3a1f9d; --violet:#4b2bc0; --deep:#1d1960; --line:#e2dff2; --mist:#f6f5fc; }
          * { box-sizing: border-box; }
          body { margin: 0; font: 15px/1.55 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; color: var(--text); background: var(--mist); }
          header { background: linear-gradient(135deg, var(--deep), var(--indigo)); color: #fff; padding: 2.2rem 1rem 2.6rem; }
          .wrap { max-width: 1080px; margin: 0 auto; padding: 0 1rem; }
          .brand { font-weight: 800; letter-spacing: .06em; font-size: .8rem; text-transform: uppercase; color: #8fc1ff; }
          h1 { margin: .3rem 0 .4rem; font-size: 1.9rem; letter-spacing: -.01em; }
          header p { margin: 0; color: #d9d6f5; max-width: 62ch; }
          header a { color: #fff; }
          .stats { display: flex; flex-wrap: wrap; gap: .6rem; margin-top: 1.2rem; }
          .stat { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.18); border-radius: 999px; padding: .3rem .9rem; font-size: .85rem; font-weight: 600; }
          main { margin-top: -1.2rem; padding-bottom: 3rem; }
          .card { background: #fff; border: 1px solid var(--line); border-radius: 16px; box-shadow: 0 8px 24px -16px rgba(25,20,63,.35); overflow: hidden; }
          table { width: 100%; border-collapse: collapse; }
          th { text-align: left; font-size: .72rem; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); background: #faf9ff; padding: .8rem 1rem; border-bottom: 1px solid var(--line); }
          td { padding: .75rem 1rem; border-bottom: 1px solid var(--line); vertical-align: middle; }
          tr:last-child td { border-bottom: 0; }
          tr:hover td { background: #faf9ff; }
          td a { color: var(--ink); font-weight: 600; text-decoration: none; overflow-wrap: break-word; }
          td a:hover { color: var(--violet); text-decoration: underline; }
          .num { white-space: nowrap; color: var(--muted); font-size: .88rem; }
          .pill { display: inline-block; min-width: 2.6rem; text-align: center; padding: .1rem .5rem; border-radius: 999px; font-size: .8rem; font-weight: 700; background: #ecebfa; color: var(--indigo); }
          .pill.hi { background: var(--indigo); color: #fff; }
          .section { display: flex; flex-direction: column; }
          .section small { color: var(--muted); font-weight: 400; }
          footer { text-align: center; color: var(--muted); font-size: .85rem; margin-top: 1.6rem; }
          footer a { color: var(--violet); }
          @media (max-width: 640px) { .hide-sm { display: none; } h1 { font-size: 1.5rem; } }
        </style>
      </head>
      <body>
        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>

  <!-- Index of section sitemaps -->
  <xsl:template match="s:sitemapindex">
    <header><div class="wrap">
      <div class="brand">Vail Valley IT</div>
      <h1>XML Sitemap</h1>
      <p>This is the machine-readable map search engines and AI crawlers use to find every page on vailvalleyit.com. Looking for the human version? See the <a href="/sitemap">site map</a>.</p>
      <div class="stats"><span class="stat"><xsl:value-of select="count(s:sitemap)"/> sections</span></div>
    </div></header>
    <main class="wrap">
      <div class="card"><table>
        <thead><tr><th>Section</th><th class="hide-sm">Last updated</th></tr></thead>
        <tbody>
          <xsl:for-each select="s:sitemap">
            <tr>
              <td><a href="{s:loc}"><span class="section"><xsl:call-template name="label"><xsl:with-param name="u" select="s:loc"/></xsl:call-template><small><xsl:value-of select="s:loc"/></small></span></a></td>
              <td class="num hide-sm"><xsl:value-of select="substring(s:lastmod, 1, 10)"/></td>
            </tr>
          </xsl:for-each>
        </tbody>
      </table></div>
      <footer>© Vail Valley IT · <a href="/">vailvalleyit.com</a></footer>
    </main>
  </xsl:template>

  <!-- A section's URLs -->
  <xsl:template match="s:urlset">
    <header><div class="wrap">
      <div class="brand"><a href="/sitemap-index.xml">← All sections</a></div>
      <h1>
        <xsl:choose>
          <xsl:when test="s:url/s:loc[contains(., '/compliance/')]">Compliance guides</xsl:when>
          <xsl:when test="s:url/s:loc[contains(., '/industries/')]">Industries</xsl:when>
          <xsl:when test="s:url/s:loc[contains(., '/it-support-')]">Service areas</xsl:when>
          <xsl:when test="s:url/s:loc[contains(., '/website-design')]">Digital marketing</xsl:when>
          <xsl:when test="s:url/s:loc[contains(., '/managed-it-services')]">IT services</xsl:when>
          <xsl:otherwise>Company &amp; resources</xsl:otherwise>
        </xsl:choose>
      </h1>
      <p>Pages in this section of vailvalleyit.com, with the priority and update schedule we give search engines.</p>
      <div class="stats"><span class="stat"><xsl:value-of select="count(s:url)"/> pages</span></div>
    </div></header>
    <main class="wrap">
      <div class="card"><table>
        <thead><tr><th>Page</th><th>Priority</th><th class="hide-sm">Updates</th><th class="hide-sm">Last updated</th></tr></thead>
        <tbody>
          <xsl:for-each select="s:url">
            <xsl:sort select="s:priority" order="descending" data-type="number"/>
            <tr>
              <td><a href="{s:loc}"><xsl:value-of select="substring-after(s:loc, 'vailvalleyit.com')"/><xsl:if test="substring-after(s:loc, 'vailvalleyit.com') = '/'"> (home)</xsl:if></a></td>
              <td><span class="pill"><xsl:if test="s:priority &gt;= 0.9"><xsl:attribute name="class">pill hi</xsl:attribute></xsl:if><xsl:value-of select="s:priority"/></span></td>
              <td class="num hide-sm"><xsl:value-of select="s:changefreq"/></td>
              <td class="num hide-sm"><xsl:value-of select="substring(s:lastmod, 1, 10)"/></td>
            </tr>
          </xsl:for-each>
        </tbody>
      </table></div>
      <footer>© Vail Valley IT · <a href="/sitemap">Human-friendly site map</a></footer>
    </main>
  </xsl:template>
</xsl:stylesheet>
