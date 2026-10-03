// JSON-LD builders. Every page references the same Organization @id so Google and
// LLM crawlers resolve one entity: "Vail Valley IT", a DubLow Digital brand in Edwards, CO.
import { site } from '../data/site';
import { services, type Faq, type Service } from '../data/services';
import { locations, type Location } from '../data/locations';

const U = site.url;
export const ORG_ID = `${U}/#organization`;
export const SITE_ID = `${U}/#website`;
export const FOUNDER_ID = `${U}/about#todd-whitelow`;

const eagleCounty = { '@type': 'AdministrativeArea', name: 'Eagle County, Colorado', sameAs: 'https://en.wikipedia.org/wiki/Eagle_County,_Colorado' };

export function areaServed() {
  return [
    eagleCounty,
    ...locations.map((l) => ({
      '@type': 'City',
      name: `${l.town}, CO`,
      geo: { '@type': 'GeoCoordinates', latitude: l.geo.lat, longitude: l.geo.lng },
    })),
  ];
}

export function organization() {
  return {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: site.name,
    alternateName: ['Vail Valley IT Services', 'VailValleyIT'],
    slogan: 'Local IT support, cybersecurity and automation for Vail Valley businesses',
    description: 'Vail Valley IT is the local Eagle County branch of DubLow Digital, a nationwide small-business IT firm headquartered in Edwards, Colorado. It provides managed IT, cybersecurity, compliance, networking, Microsoft 365 and AI automation services to businesses across Eagle County, plus technology-led digital marketing (websites, local SEO and AI search, video, social media and ads).',
    url: `${U}/`,
    logo: `${U}/logo.png`,
    image: `${U}/og-default.png`,
    telephone: site.phoneE164,
    ...(site.email ? { email: site.email } : {}),
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: areaServed(),
    openingHoursSpecification: site.hours.map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
    founder: { '@id': FOUNDER_ID },
    parentOrganization: { '@type': 'Organization', name: site.parentBrand, url: site.parentUrl, description: 'Nationwide IT firm for small businesses, headquartered in Edwards, Colorado.', address: { '@type': 'PostalAddress', addressLocality: 'Edwards', addressRegion: 'CO', addressCountry: 'US' } },
    sameAs: site.sameAs,
    hasMap: site.gbp.mapsUrl,
    knowsAbout: ['Managed IT services', 'Cybersecurity', 'HIPAA compliance', 'FTC Safeguards Rule', 'Microsoft 365', 'Business Wi-Fi networks', 'VoIP phone systems', 'Data backup and disaster recovery', 'Business process automation', 'AI enablement for small business', 'Website design', 'Local SEO', 'Generative engine optimization', 'Google Ads', 'Meta ads', 'Social media management'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT and digital marketing services',
      itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: `${U}/${s.slug}` } })),
    },
  };
}

export function website() {
  return { '@type': 'WebSite', '@id': SITE_ID, url: `${U}/`, name: site.name, publisher: { '@id': ORG_ID }, inLanguage: 'en-US' };
}

export function founder() {
  return {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: site.founder.name,
    jobTitle: 'Founder',
    worksFor: { '@id': ORG_ID },
    homeLocation: { '@type': 'Place', name: 'Vail Valley, Colorado' },
    knowsAbout: ['Managed IT services', 'Cybersecurity', 'Automation', 'Microsoft 365'],
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${U}${it.path === '/' ? '/' : it.path}` })),
  };
}

export function faqPage(faqs: Faq[], path: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${U}${path}#faq`,
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function webPage(path: string, name: string, description: string, type = 'WebPage') {
  return {
    '@type': type,
    '@id': `${U}${path}#webpage`,
    url: `${U}${path}`,
    name,
    description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    dateModified: site.lastReviewed,
    reviewedBy: { '@id': FOUNDER_ID },
    inLanguage: 'en-US',
  };
}

export function serviceSchema(s: Service) {
  return {
    '@type': 'Service',
    '@id': `${U}/${s.slug}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.answer,
    url: `${U}/${s.slug}`,
    provider: { '@id': ORG_ID },
    areaServed: areaServed(),
    audience: { '@type': 'BusinessAudience', audienceType: 'Small and mid-sized businesses' },
  };
}

export function localServiceSchema(l: Location) {
  return {
    '@type': 'Service',
    '@id': `${U}/${l.slug}#service`,
    name: `IT support in ${l.town}, CO`,
    serviceType: 'Managed IT services and IT support',
    description: l.answer,
    url: `${U}/${l.slug}`,
    provider: { '@id': ORG_ID },
    areaServed: {
      '@type': 'City',
      name: `${l.town}, CO`,
      containedInPlace: eagleCounty,
      geo: { '@type': 'GeoCoordinates', latitude: l.geo.lat, longitude: l.geo.lng },
      ...(l.neighborhoods.length ? { containsPlace: l.neighborhoods.map((n) => ({ '@type': 'Place', name: n })) } : {}),
    },
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
