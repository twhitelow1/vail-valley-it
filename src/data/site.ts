// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for NAP + brand facts.
// NAP must match the Google Business Profile character-for-character.
// Anything marked TODO needs confirmation before launch.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Vail Valley IT',
  legalName: 'DubLow Consulting LLC', // Vail Valley IT is a DBA of this entity
  parentBrand: 'DubLow Digital',
  parentUrl: 'https://dublowdigital.com',
  parentHq: 'Edwards, Colorado', // DubLow Digital headquarters; nationwide IT firm for small businesses
  tagline: 'Business Technology Partners',
  url: 'https://vailvalleyit.com',
  phone: '(970) 446-9440',
  phoneE164: '+19704469440',
  email: '', // TODO e.g. hello@vailvalleyit.com once mail is live on the domain
  // Service-area business: no street address published (matches a hidden-address GBP).
  address: { locality: 'Edwards', region: 'CO', postalCode: '81632', country: 'US' },
  geo: { lat: 39.645, lng: -106.5942 },
  hours: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' }], // TODO confirm
  // GoHighLevel. Leave blank and every CTA falls back to /contact + phone.
  bookingUrl: '', // TODO GHL calendar URL
  formEmbedUrl: '', // TODO GHL form embed src
  careersFormUrl: '', // TODO GHL application form embed src (add a file-upload field for resumes)
  careersEmail: '', // optional: where resumes go if no form is set, e.g. careers@vailvalleyit.com
  // Tracking (14). Loaded only on the production build, only when an ID is set.
  tracking: {
    ga4Id: 'G-D6EBR1JJ0X', // GA4 stream "Vail Valley IT Website" (16042332164)
    gtmId: '', // optional: use GTM instead of raw GA4 if GHL/ads tags need it
    clarityId: '', // optional Microsoft Clarity heatmaps
    googleSiteVerification: '', // Search Console HTML-tag token (or verify by DNS — preferred)
    bingSiteVerification: '',
  },
  // Security check lead capture: GHL inbound webhook (Automation > Workflow > Inbound Webhook trigger).
  indexNowKey: '238ee261fa58eda40fa48b2649ca8eda', // IndexNow (Bing/Copilot/ChatGPT search): key file lives at /<key>.txt
  quizWebhookUrl: '', // TODO
  // Credentials / memberships with logo files you own the right to use. Drop files in /public/logos/.
  credentials: [] as { name: string; logo?: string; url?: string }[], // e.g. { name: 'Vail Valley Partnership member', logo: '/logos/vvp.svg' }
  founder: { name: 'Todd Whitelow', role: 'Founder', url: '/about' },
  // Referral program thank-you, e.g. 'a $250 Visa gift card' or 'one month of service free'. Empty hides the reward line.
  referralReward: '', // TODO set real referral terms
  gbp: {
    placeId: 'ChIJe5-12u0L_wARt6dTqHKHrWw',
    reviewCount: 0, // TODO real Google review count; 0 hides the number everywhere
    rating: 5.0,
    reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJe5-12u0L_wARt6dTqHKHrWw',
    mapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJe5-12u0L_wARt6dTqHKHrWw',
  },
  reviewWidgetUrl: 'https://reputationhub.site/reputation/widgets/review_widget/w7A0JqmxzOFxwCv4DXQr?widgetId=6ac3c74d9d5cc1986008c208',
  sameAs: ['https://dublowdigital.com', 'https://www.instagram.com/dublowco/'],
  lastReviewed: '2026-10-06',
};

export const bookHref = site.bookingUrl || '/contact#book';
export const telHref = `tel:${site.phoneE164}`;

// Verbatim Google reviews from the DubLow Digital profile. IT-relevant only.
export const reviews = [
  { author: 'Jay Van Voorst', topic: 'Managed IT', text: 'Duplo digital is our IT company that keeps all of our info safe and secure. Todd has done a great job in setting everything up for us, being there for our staff when they have computer issues, and prioritizing our projects. I would highly recommend Dublow Digital for all of your IT needs.' },
  { author: 'Tony Martinez', topic: 'Cybersecurity · Insurance agency', text: 'Todd has helped get our team protected at a level we had no idea existed. As an Insurance Agency, we know the importance of protecting our clients data, Todd has taken that to a new level!' },
  { author: 'Erin Gross', topic: 'Hardware, software & security', text: 'Todd at DubLow Digital is incredibly knowledgeable and helpful. He takes care of all the tech needs for our business - from hardware and software to cybersecurity and now handles our social media marketing. We are so grateful to Todd an his team!' },
  { author: 'Jazzmyn Boykins', topic: 'Support', text: 'This service was amazing! Todd took the time to sit with me and help solve my problem, answering all my questions with patience and clarity. He was friendly, professional, and made the whole experience enjoyable. I truly appreciated the support and would absolutely recommend this service to others!' },
  { author: 'Anthony Atencio', topic: 'Ongoing partnership', text: "I've been working with Todd from DubLow for a few months now and I couldn't be happier. I'm referring him to my dad to work on his business. Todd has the knowledge and tools to help your business succeed!!!" },
  { author: 'Andrew Metzler', topic: 'Troubleshooting', text: 'Todd was a great help and very knowledgeable in solving my self created website problems. Thanks' },
  { author: 'Renee Porter', topic: 'Support', text: 'Amazing work! So professional and knowledgeable' },
];
