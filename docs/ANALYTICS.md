# Analytics & search setup

All IDs live in `src/data/site.ts` → `tracking`. Tags load only on the Vercel **production**
deployment (never previews). Use GTM *or* raw GA4: if `gtmId` is set, the site does not load
gtag.js, so configure GA4 inside GTM to avoid double counting.

**Current setup:** GA4 runs directly via gtag.js (`ga4Id: G-D6EBR1JJ0X`, stream 16042332164); no GTM yet.
`call_click` / `book_click` events and the `first_channel` / `first_source` user properties are sent
automatically. Register `lead_channel`, `lead_source` and `first_channel` as custom dimensions (step 5 below)
and mark `call_click` and `book_click` as key events in GA4. If GTM is added later, move GA4 into it.

## 1. Google Tag Manager + GA4
1. GA4: create a property "Vail Valley IT" → Web data stream for `https://vailvalleyit.com` → copy the
   Measurement ID (`G-…`). Turn on Enhanced measurement.
2. GTM: create a Web container "vailvalleyit.com" → copy the container ID (`GTM-…`).
3. Put `gtmId: 'GTM-…'` in `site.ts` (leave `ga4Id` empty when using GTM).
4. In GTM:
   - **Google tag** with the `G-…` ID, trigger *All Pages*.
   - **Data Layer Variables**: `lead_channel`, `lead_source`, `first_channel`, `first_source`,
     `first_medium`, `first_campaign`, `first_landing_page`, `link_text`, `page_path`.
   - **Custom Event triggers**: `call_click`, `book_click`, `attribution_ready`.
   - **GA4 Event tags**: `call_click` and `book_click` with parameters `lead_channel`, `lead_source`,
     `first_channel`, `link_text`, `page_path`. Mark both as **key events** in GA4.
   - Optional: on `attribution_ready`, set GA4 user properties `first_channel` / `first_source`.
5. GA4 → Admin → Custom definitions: register `lead_channel`, `lead_source`, `first_channel` as
   event-scoped dimensions so they appear in reports.

## 2. AI assistant traffic in GA4
GA4 lumps ChatGPT, Perplexity etc. into *Referral*. Admin → Data display → Channel groups → copy the
default group → add channel **AI Assistants** *above* Referral:
`Source matches regex` `chatgpt\.com|chat\.openai\.com|perplexity|copilot\.microsoft\.com|gemini\.google\.com|claude\.ai|you\.com|meta\.ai`

## 3. Google Search Console
Add a **Domain** property for `vailvalleyit.com` and verify with the DNS **TXT** record (in the
domain's DNS). Then submit `https://vailvalleyit.com/sitemap.xml`. Link Search Console to GA4
(GA4 Admin → Product links). If DNS isn't available, use the HTML-tag method and put the token in
`googleSiteVerification`.

## 4. Bing Webmaster Tools
Sign in → **Import from Google Search Console** (fastest), or add the site and put the token in
`bingSiteVerification`. Submit the same sitemap. Bing powers Copilot and feeds ChatGPT search.
The site already has an IndexNow key (`indexNowKey`).

## 5. Lead source in GoHighLevel
`src/components/Attribution.astro` appends these URL parameters to GHL form/booking iframes and links:
`utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, gbraid, wbraid, msclkid, fbclid,
lead_channel, first_channel, first_source, landing_page, referrer`.
In each GHL form add **hidden fields** whose *Query Key* matches those names, so every contact records
its source. `lead_channel` is one of: `paid_search, paid_social, email, campaign, ai_assistant,
organic_search, organic_social, referral, direct`.

## UTM convention
`utm_source` = platform (`google`, `facebook`, `instagram`, `newsletter`, `chamber`),
`utm_medium` = `cpc`, `paid_social`, `email`, `social`, `qr`, `referral`,
`utm_campaign` = lowercase_with_underscores (e.g. `fall_managed_it`). Tag every link you control
(GBP website link: `?utm_source=google&utm_medium=organic&utm_campaign=gbp`).
