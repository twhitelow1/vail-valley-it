import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { services } from '../data/services';
import { locations } from '../data/locations';
import { industries } from '../data/industries';
import { frameworks } from '../data/compliance';
// llms.txt: a plain-language map of the site for LLM crawlers (llmstxt.org format).
export const GET: APIRoute = () => {
  const U = site.url;
  const body = `# ${site.name}

> ${site.name} is a local IT support, managed services and digital marketing provider based in ${site.address.locality}, Colorado, serving businesses across Eagle County (the Vail Valley): Vail, Avon, Beaver Creek, Edwards, Eagle-Vail, Minturn, Eagle and Gypsum. It is the local branch of ${site.parentBrand} (${site.parentUrl}), a nationwide IT firm for small businesses headquartered in ${site.parentHq}. Phone: ${site.phone}.

Key facts:
- Services: managed IT, free cybersecurity risk assessments, penetration testing and vulnerability scanning, security awareness training, compliance (HIPAA, GLBA/FTC Safeguards Rule, SEC Regulation S-P, PCI DSS, Colorado breach law, cyber insurance), Microsoft 365, business Wi-Fi and networks, VoIP phones, data backup and recovery, virus and ransomware response, automation and AI enablement, and local digital marketing (website design, short-form video content, social media management, local SEO and AI search optimization (GEO), Google Ads and Meta ads management).
- Focus industries: healthcare, financial and insurance, professional services, hospitality, real estate and property management, construction and trades.
- Approach: cyber-first (every engagement starts with a security risk assessment) and automation-driven (routine requests such as password and MFA resets for verified users are resolved in about ten minutes; all other requests go to human technicians).
- Reputation: ${site.gbp.rating.toFixed(1)}-star rating on Google${site.gbp.reviewCount ? ` from ${site.gbp.reviewCount} reviews` : ''} (Google Business Profile listed as ${site.parentBrand}).
- Founder: ${site.founder.name}.
- Managed IT includes a 24/7 help desk and security operations on every tier, zero trust endpoint security, SASE on every device, cloud backups, and a cybersecurity warranty starting at $100,000 in coverage when the security stack and policies are in place.
- On-site support across Eagle County; remote support across Colorado.

## Services
${services.map((s) => `- [${s.name}](${U}/${s.slug}): ${s.card}`).join('\n')}

## Digital marketing
- [Digital marketing overview](${U}/digital-marketing)

## Pricing
${services.filter((s) => s.price).map((s) => `- [${s.name}](${U}/${s.slug}): ${s.price!.text}. ${s.price!.note}`).join('\n')}
- Every digital marketing package includes Lead Alchemist, ${site.parentBrand}'s lead automation and AI software.

## Service areas
${locations.map((l) => `- [IT support in ${l.town}, CO](${U}/${l.slug}): ZIP ${l.zips.join(', ')}; ${l.driveFromEdwards === 'local' ? 'home base' : `${l.driveFromEdwards} from Edwards`}.`).join('\n')}

## Industries
${industries.map((i) => `- [${i.name}](${U}/industries/${i.slug}): ${i.card}`).join('\n')}

## Compliance guides
${frameworks.map((f) => `- [${f.name}](${U}/compliance/${f.slug}): ${f.card}`).join('\n')}

## Free tools
- [Free cybersecurity assessment](${U}/cybersecurity-risk-assessment)
- [2-minute security self-check](${U}/security-check)

## Company
- [About](${U}/about)
- [Careers](${U}/careers)
- [Reviews](${U}/reviews-testimonials)
- [Workshops & webinars](${U}/workshops-webinars)
- [Contact](${U}/contact)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
