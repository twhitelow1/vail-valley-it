// Compliance hub: one page per framework at /compliance/<slug>.
// Plain-language summaries of public rules. Not legal advice; reviewed dates shown on page.
// Keep "status" notes current (e.g. HIPAA Security Rule NPRM).
import type { Faq } from './services';

export type Control = { req: string; cite?: string; how: string; link?: string };
export type Framework = {
  slug: string;
  short: string;
  name: string;
  icon: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  card: string;
  appliesTo: string[];
  status?: string; // dated regulatory note
  overview: string; // html
  controls: Control[];
  gaps: string[];
  evidence: string[];
  industries: string[]; // industry slugs
  faqs: Faq[];
};

export const frameworks: Framework[] = [
  {
    slug: 'hipaa',
    short: 'HIPAA',
    name: 'HIPAA Security Rule',
    icon: 'heart',
    title: 'HIPAA Compliance IT Services in the Vail Valley | Vail Valley IT',
    description: 'HIPAA Security Rule compliance for Vail Valley medical, dental and wellness practices — risk analysis, safeguards, training, testing and documentation.',
    h1: 'HIPAA Compliance IT for Vail Valley Practices',
    answer: 'HIPAA compliance for a small practice means protecting electronic patient information (ePHI) with documented administrative, physical and technical safeguards. Vail Valley IT helps Eagle County medical, dental, therapy and wellness practices run the required security risk analysis, put the technical controls in place, train staff, and keep the evidence an OCR investigator or auditor would ask for.',
    card: 'Risk analysis, safeguards, training, testing and documentation for practices handling patient data.',
    appliesTo: [
      'Covered entities: medical, dental, chiropractic, physical therapy, behavioral health, med-spa and other providers that bill electronically',
      'Health plans and clearinghouses',
      'Business associates: vendors that create, receive, maintain or transmit ePHI for a covered entity, including IT providers, billing companies and many software vendors',
    ],
    status: 'In December 2024, HHS proposed the first major update to the HIPAA Security Rule since 2013. The proposal would make several practices explicitly mandatory, including vulnerability scanning at least every six months, penetration testing at least every 12 months, encryption of ePHI, MFA and a written asset inventory. As of this page’s last review, a final rule had not been published. Most of the proposed controls are already expected practice, and we implement them now so the final rule is a formality.',
    overview: `<p>The HIPAA Security Rule (45 CFR Part 164, Subpart C) does not prescribe specific products. It requires you to assess your own risks and implement “reasonable and appropriate” safeguards, then document what you did and why. In practice, OCR investigations most often cite the same failure: no accurate, current risk analysis.</p>
<p>That makes the risk analysis the foundation. Everything else, from encryption and MFA to training and backups, flows from it and should be traceable back to it.</p>`,
    controls: [
      { req: 'Security risk analysis and risk management', cite: '§164.308(a)(1)', how: 'Documented risk analysis of every system touching ePHI, a prioritized remediation plan, and an annual review.', link: '/cybersecurity-risk-assessment' },
      { req: 'Security awareness and training', cite: '§164.308(a)(5)', how: 'Onboarding and recurring training with phishing simulations and completion records for every workforce member.', link: '/security-awareness-training' },
      { req: 'Access control and unique user IDs', cite: '§164.312(a)', how: 'Individual accounts, MFA, least-privilege access and same-day offboarding.', link: '/managed-it-services' },
      { req: 'Audit controls', cite: '§164.312(b)', how: 'Sign-in and activity logging in Microsoft 365 and endpoints, retained and reviewed.', link: '/compliance-cybersecurity' },
      { req: 'Transmission and device security', cite: '§164.312(e), §164.310(d)', how: 'Encrypted email options, full-disk encryption on laptops and phones, and secure disposal of old devices.', link: '/hardware-upgrades' },
      { req: 'Contingency plan and backups', cite: '§164.308(a)(7)', how: 'Immutable, tested backups and a written disaster recovery and emergency mode plan.', link: '/it-data-protection' },
      { req: 'Evaluation and technical testing', cite: '§164.308(a)(8)', how: 'Vulnerability scanning and penetration testing to verify safeguards work as intended.', link: '/penetration-testing-vulnerability-scanning' },
      { req: 'Business associate agreements', cite: '§164.308(b)', how: 'We sign a BAA and help you track BAAs with other vendors that touch ePHI.' },
    ],
    gaps: [
      'A risk analysis that is years old, a generic template, or missing entirely',
      'Staff sharing logins to the EHR or front-desk computer',
      'Laptops and phones with patient data that are not encrypted',
      'No MFA on email, which is where most patient data leaks start',
      'Backups that have never been test-restored',
      'No record that staff completed security training',
    ],
    evidence: ['Current security risk analysis and remediation plan', 'Written policies and procedures', 'Training completion records', 'Vulnerability scan and penetration test reports', 'Backup and restore test logs', 'Signed business associate agreements', 'Incident response plan and breach log'],
    industries: ['healthcare-it'],
    faqs: [
      { q: 'Does a small medical or dental practice need to comply with HIPAA?', a: 'Yes. HIPAA applies to covered entities of every size, including solo and small practices. The Security Rule scales its expectations to your size and resources, but the risk analysis, safeguards and documentation are still required.' },
      { q: 'Is penetration testing required for HIPAA?', a: 'The current rule requires a risk analysis and periodic technical evaluation but does not name penetration testing explicitly. HHS’s proposed update would require penetration testing at least every 12 months and vulnerability scanning at least every six months. Many practices adopt both now because they are the clearest evidence that safeguards work.' },
      { q: 'Is HIPAA security training required every year?', a: 'HIPAA requires a security awareness and training program for the workforce but does not set a specific frequency in the current rule. Annual training plus periodic reminders and phishing tests is the common standard, and it is what auditors and insurers expect to see documented.' },
      { q: 'What happens if a small practice has a HIPAA breach?', a: 'Breaches of unsecured PHI must be reported to affected individuals, to HHS, and in larger cases to the media, within set deadlines. OCR may investigate, and penalties depend on the level of negligence. Encryption can change whether an incident is a reportable breach at all.' },
    ],
  },
  {
    slug: 'glba-ftc-safeguards-rule',
    short: 'GLBA / FTC Safeguards',
    name: 'GLBA & FTC Safeguards Rule',
    icon: 'bank',
    title: 'GLBA & FTC Safeguards Rule Compliance | Vail Valley IT',
    description: 'GLBA and FTC Safeguards Rule compliance for Vail Valley tax preparers, lenders, mortgage brokers, advisors and insurance-related firms.',
    h1: 'GLBA & FTC Safeguards Rule Compliance for Vail Valley Firms',
    answer: 'The Gramm-Leach-Bliley Act (GLBA) requires financial institutions to protect customer information, and for most non-bank financial businesses the FTC Safeguards Rule (16 CFR Part 314) spells out how. It requires a written information security program, a qualified individual to run it, a risk assessment, MFA, encryption, monitoring or testing, staff training and an incident response plan. Vail Valley IT implements those controls and the documentation for Eagle County firms.',
    card: 'Written security program, MFA, encryption, testing and training for non-bank financial businesses.',
    appliesTo: [
      'Tax preparers and accounting firms that prepare returns',
      'Mortgage brokers, lenders and loan servicers',
      'Many financial advisors and investment-related businesses not regulated by a bank regulator',
      'Collection agencies, check cashers and certain auto dealers',
      'Other businesses “significantly engaged” in financial activities',
    ],
    status: 'The FTC’s amended Safeguards Rule took full effect in June 2023. Since May 2024, covered businesses must also notify the FTC within 30 days of discovering a security event involving the unencrypted information of at least 500 consumers.',
    overview: `<p>The Safeguards Rule is unusually specific for a federal rule, which is helpful: it tells you what an examiner expects to find. Tax preparers are a notable group, since the IRS also requires them to maintain a written information security plan.</p>
<p>Firms that maintain customer information on <strong>fewer than 5,000 consumers</strong> are exempt from a few requirements, including the written risk assessment, continuous monitoring or annual penetration testing and vulnerability assessments, the written incident response plan and the annual report to the board. The core program, MFA, encryption and training still apply. Bank-regulated institutions follow parallel interagency guidelines instead.</p>`,
    controls: [
      { req: 'Qualified Individual to oversee the program', cite: '§314.4(a)', how: 'We can serve as or support your designated Qualified Individual, with you retaining responsibility.' },
      { req: 'Written risk assessment', cite: '§314.4(b)', how: 'Documented assessment of risks to customer information and how each is addressed.', link: '/cybersecurity-risk-assessment' },
      { req: 'Access controls, encryption and MFA', cite: '§314.4(c)', how: 'Least-privilege access, encryption in transit and at rest, and MFA for anyone accessing customer information.', link: '/compliance-cybersecurity' },
      { req: 'Continuous monitoring, or annual pen testing plus vulnerability assessments every six months', cite: '§314.4(d)(2)', how: 'Managed monitoring, or scheduled penetration tests and semiannual vulnerability scans with reports.', link: '/penetration-testing-vulnerability-scanning' },
      { req: 'Security awareness training', cite: '§314.4(e)', how: 'Recurring training and phishing simulations with completion records.', link: '/security-awareness-training' },
      { req: 'Service provider oversight', cite: '§314.4(f)', how: 'Vendor inventory, security expectations and periodic review.' },
      { req: 'Written incident response plan', cite: '§314.4(h)', how: 'Plan covering roles, containment, notification (including the FTC 30-day rule) and lessons learned.', link: '/virus-malware-removal' },
      { req: 'Annual report to the board or owner', cite: '§314.4(i)', how: 'Plain-language annual report on the program, risks and recommendations.' },
    ],
    gaps: [
      'No written information security program, or a template nobody follows',
      'MFA on email but not on tax, CRM or document portals',
      'Client documents shared through personal email or unencrypted links',
      'No penetration test or vulnerability scan on record',
      'No designated Qualified Individual',
      'Vendors with access to client data that have never been reviewed',
    ],
    evidence: ['Written information security program (WISP)', 'Risk assessment', 'MFA and encryption configuration records', 'Penetration test and vulnerability scan reports, or monitoring evidence', 'Training records', 'Vendor review records', 'Incident response plan', 'Annual report to the board or owner'],
    industries: ['financial-services-it'],
    faqs: [
      { q: 'Does the FTC Safeguards Rule apply to small accounting and tax firms?', a: 'Yes. Tax preparers are considered financial institutions under GLBA and must comply with the Safeguards Rule. Firms with information on fewer than 5,000 consumers are exempt from a few requirements, but must still maintain a written program, MFA, encryption and training.' },
      { q: 'Does the Safeguards Rule require penetration testing?', a: 'Unless you use continuous monitoring, the rule requires annual penetration testing and vulnerability assessments at least every six months. Firms with fewer than 5,000 consumers are exempt from this specific requirement.' },
      { q: 'What is a WISP?', a: 'A written information security program, the document that describes how your firm protects customer information. Both the FTC Safeguards Rule and the IRS expect tax and financial firms to have one, and it should match how your systems are actually configured.' },
    ],
  },
  {
    slug: 'pci-dss',
    short: 'PCI DSS',
    name: 'PCI DSS',
    icon: 'key',
    title: 'PCI DSS Compliance for Restaurants & Retail | Vail Valley IT',
    description: 'PCI DSS compliance help for Vail Valley restaurants, lodging and retail — network segmentation, scans, SAQ support and secure payment networks.',
    h1: 'PCI DSS Compliance for Vail Valley Merchants',
    answer: 'Any business that accepts credit or debit cards must follow the Payment Card Industry Data Security Standard (PCI DSS). For most valley restaurants, lodging properties and shops that means completing a Self-Assessment Questionnaire each year and keeping payment systems on a protected, segmented network. Vail Valley IT designs those networks and helps with scans, the SAQ and the evidence your processor asks for.',
    card: 'Segmented payment networks, scans and SAQ support for restaurants, lodging and retail.',
    appliesTo: ['Restaurants, bars and cafés', 'Hotels, lodges, condo associations and rental managers that take cards', 'Retail shops, rental shops and outfitters', 'Any business that stores, processes or transmits cardholder data'],
    status: 'PCI DSS v4.0.1 is the current version. Requirements that were “future-dated” in v4.0 became mandatory on March 31, 2025.',
    overview: `<p>PCI DSS is a contractual standard enforced through your card processor and acquiring bank, not a law. Small merchants usually validate with a Self-Assessment Questionnaire (SAQ). Which SAQ applies depends on how you take cards, and that choice drives how much of your network is “in scope.”</p>
<p>The single biggest lever is <strong>segmentation</strong>: keeping card terminals and payment systems separate from guest Wi-Fi, office computers and everything else. Done right, it shrinks your scope, your risk and your paperwork.</p>`,
    controls: [
      { req: 'Network security controls and segmentation', cite: 'Req. 1', how: 'Business firewall with payment systems isolated from guest and office networks.', link: '/business-network-wifi-support' },
      { req: 'Secure configurations', cite: 'Req. 2', how: 'Default passwords changed, unnecessary services disabled, documented configurations.' },
      { req: 'Protect systems from malware and keep them patched', cite: 'Req. 5–6', how: 'Managed endpoint protection and scheduled patching.', link: '/managed-it-services' },
      { req: 'Strong access control and MFA', cite: 'Req. 7–8', how: 'Unique accounts, no shared logins, MFA for administrative and remote access.' },
      { req: 'Vulnerability scans and testing', cite: 'Req. 11', how: 'Internal scans, and quarterly external ASV scans where your SAQ requires them.', link: '/penetration-testing-vulnerability-scanning' },
      { req: 'Security awareness program', cite: 'Req. 12.6', how: 'Annual security awareness training for staff, including phishing and card-skimming awareness.', link: '/security-awareness-training' },
    ],
    gaps: ['Card terminals on the same Wi-Fi as guests or staff phones', 'Default router or POS passwords', 'Shared POS logins among staff', 'No record of quarterly scans', 'An SAQ answered “yes” to controls that are not actually in place'],
    evidence: ['Completed SAQ and attestation of compliance', 'Network diagram showing segmentation', 'Scan reports (internal and ASV where required)', 'Training records', 'Configuration and access records'],
    industries: ['hospitality-it'],
    faqs: [
      { q: 'Does a small restaurant have to be PCI compliant?', a: 'Yes. Every merchant that accepts cards must comply with PCI DSS. Most small merchants validate annually with a Self-Assessment Questionnaire through their processor.' },
      { q: 'How does guest Wi-Fi affect PCI compliance?', a: 'If guest Wi-Fi shares a network with card terminals, the whole network can fall into PCI scope. Proper segmentation keeps guest traffic completely separate and reduces both risk and compliance effort.' },
    ],
  },
  {
    slug: 'sec-regulation-s-p',
    short: 'SEC Reg S-P',
    name: 'SEC Regulation S-P',
    icon: 'briefcase',
    title: 'SEC Regulation S-P Compliance for Advisors | Vail Valley IT',
    description: 'IT support for SEC Regulation S-P for Vail Valley RIAs and broker-dealers — incident response program, 30-day notification and vendor oversight.',
    h1: 'SEC Regulation S-P Compliance for Vail Valley Advisors',
    answer: 'SEC Regulation S-P requires registered investment advisers, broker-dealers and other covered firms to safeguard customer information. Amendments adopted in 2024 added a written incident response program, notification to affected customers within 30 days of a breach of sensitive information, and service provider oversight. Vail Valley IT builds the technical program and documentation for wealth advisors and family offices across the valley.',
    card: 'Incident response program, 30-day notification readiness and vendor oversight for RIAs.',
    appliesTo: ['SEC-registered investment advisers (RIAs)', 'Broker-dealers and funding portals', 'Investment companies and transfer agents'],
    status: 'Larger covered firms had to comply with the 2024 amendments by December 3, 2025, and smaller firms by June 3, 2026. Both deadlines have now passed.',
    overview: `<p>The Vail Valley has a large community of wealth advisors and family offices serving resort homeowners. Many are SEC-registered and now subject to the amended Regulation S-P. State-registered advisers follow Colorado Division of Securities rules instead, which carry their own cybersecurity expectations.</p>
<p>The amendments center on being ready for a breach: detecting it, containing it, deciding whether sensitive customer information was accessed, and notifying customers within 30 days when required.</p>`,
    controls: [
      { req: 'Written policies and procedures to safeguard customer information', how: 'Documented security program matched to your actual configuration.', link: '/compliance-cybersecurity' },
      { req: 'Incident response program', how: 'Written program for detecting, responding to and recovering from unauthorized access.', link: '/virus-malware-removal' },
      { req: 'Customer notification within 30 days', how: 'Logging and forensics readiness so you can determine what was accessed and notify on time.' },
      { req: 'Service provider oversight', how: 'Vendor due diligence and contract terms requiring providers to notify you of breaches within 72 hours.' },
      { req: 'Recordkeeping', how: 'Retained records of policies, incidents and notification decisions.' },
      { req: 'Technical safeguards', how: 'MFA, encryption, email security, monitored endpoints and staff training.', link: '/security-awareness-training' },
    ],
    gaps: ['No written incident response program', 'Logging too limited to determine what an attacker accessed', 'Vendor contracts without breach-notification terms', 'Advisors working from personal devices without management'],
    evidence: ['Written policies and incident response program', 'Vendor inventory and due-diligence records', 'Incident and notification records', 'Training records', 'Security testing reports'],
    industries: ['financial-services-it'],
    faqs: [
      { q: 'Does Regulation S-P apply to small RIAs?', a: 'Yes. The amended rule applies to SEC-registered advisers of all sizes; smaller entities simply had a later compliance date of June 3, 2026.' },
      { q: 'How fast must customers be notified under Reg S-P?', a: 'As soon as practicable, but no later than 30 days after becoming aware that unauthorized access to sensitive customer information occurred or is reasonably likely to have occurred, unless a narrow exception applies.' },
    ],
  },
  {
    slug: 'colorado-privacy-breach-law',
    short: 'Colorado law',
    name: 'Colorado Data Security & Breach Law',
    icon: 'pin',
    title: 'Colorado Data Security & Breach Notification Law | Vail Valley IT',
    description: 'What Colorado’s data security, 30-day breach notification and privacy laws mean for Vail Valley businesses — and the IT controls that satisfy them.',
    h1: 'Colorado Data Security & Breach Notification Law',
    answer: 'Colorado law requires businesses that maintain personal information of Colorado residents to protect it with reasonable security, dispose of it securely, and notify affected residents within 30 days of determining a breach occurred, with notice to the Attorney General when 500 or more residents are affected. Vail Valley IT implements the security, logging and response planning that keep valley businesses on the right side of those rules.',
    card: 'Reasonable security, secure disposal and 30-day breach notification for any Colorado business.',
    appliesTo: ['Any business or government entity that maintains, owns or licenses personal information of Colorado residents', 'Larger data controllers under the Colorado Privacy Act (generally 100,000+ consumers, or 25,000+ with data sales)'],
    overview: `<p>Colorado’s data security law (C.R.S. § 6-1-713 through 6-1-716) applies regardless of industry. It covers personal information such as Social Security numbers, driver’s license numbers, financial account numbers with access codes, online login credentials and certain medical and biometric data.</p>
<p>The 30-day notification window is one of the shortest in the country, which makes preparation essential. Encryption matters too: encrypted data is generally treated differently if the key was not also compromised.</p>`,
    controls: [
      { req: 'Reasonable security procedures and practices', how: 'A documented security baseline: MFA, encryption, patching, monitored endpoints and backups.', link: '/managed-it-services' },
      { req: 'Written disposal policy and secure destruction', how: 'Secure wiping of retired devices and a written data disposal policy.', link: '/hardware-upgrades' },
      { req: 'Vendor security requirements', how: 'Vendors handling personal information required to maintain reasonable security.' },
      { req: 'Breach investigation and 30-day notice', how: 'Logging, incident response planning and support to determine scope quickly.', link: '/emergency-it-support' },
    ],
    gaps: ['Old computers recycled without wiping drives', 'No written disposal policy', 'No plan for who decides whether an incident is a notifiable breach', 'Unencrypted laptops holding customer data'],
    evidence: ['Security policies', 'Data disposal policy and destruction records', 'Incident response plan', 'Vendor agreements'],
    industries: ['healthcare-it', 'financial-services-it', 'professional-services-it', 'hospitality-it', 'real-estate-property-management-it', 'construction-trades-it'],
    faqs: [
      { q: 'How long does a Colorado business have to report a data breach?', a: 'Affected Colorado residents must be notified no later than 30 days after the business determines a security breach occurred. If 500 or more Colorado residents are affected, the Colorado Attorney General must also be notified within 30 days.' },
      { q: 'Does the Colorado Privacy Act apply to small businesses?', a: 'Usually not. The Colorado Privacy Act generally applies to controllers that process data of 100,000 or more Colorado consumers a year, or 25,000 or more while deriving revenue from selling data. The separate data security and breach law applies to businesses of every size.' },
    ],
  },
  {
    slug: 'cyber-insurance-requirements',
    short: 'Cyber insurance',
    name: 'Cyber Insurance Requirements',
    icon: 'shield',
    title: 'Cyber Insurance Requirements | Vail Valley IT',
    description: 'Meet cyber insurance requirements — MFA, EDR, backups, training and testing — and answer your application accurately. Help for Vail Valley businesses.',
    h1: 'Cyber Insurance Requirements for Vail Valley Businesses',
    answer: 'Most cyber insurance carriers now require a baseline of security controls before they will quote or renew a policy: multi-factor authentication, endpoint detection and response, tested offsite backups, patching, email security and security awareness training, and increasingly vulnerability scans. Vail Valley IT puts those controls in place and helps you answer the application accurately, because a wrong answer can put a claim at risk.',
    card: 'MFA, EDR, backups, training and testing in place, and an application you can answer honestly.',
    appliesTo: ['Any business buying or renewing cyber liability insurance', 'Businesses whose clients or contracts require cyber coverage', 'Regulated firms where coverage is part of the risk program'],
    overview: `<p>Insurance applications have become detailed security questionnaires. Questions like “Is MFA required for all remote access and email?” or “Are backups stored offline or immutable?” are not formalities. If a claim investigation finds an answer was inaccurate, coverage can be disputed.</p>
<p>The good news: the controls insurers require are the same ones that stop most attacks, and the same ones HIPAA, the FTC Safeguards Rule and PCI DSS expect.</p>`,
    controls: [
      { req: 'MFA on email, remote access and admin accounts', how: 'Enforced MFA across Microsoft 365, VPN and privileged accounts.', link: '/email-security-spam-protection' },
      { req: 'Endpoint detection and response (EDR)', how: 'Monitored EDR on every computer and server.', link: '/compliance-cybersecurity' },
      { req: 'Offline or immutable backups, tested', how: 'Immutable offsite backups with restore test records.', link: '/it-data-protection' },
      { req: 'Patching and supported systems', how: 'Managed patching and replacement of unsupported devices.', link: '/managed-it-services' },
      { req: 'Security awareness training and phishing tests', how: 'Recurring training with completion and simulation reports.', link: '/security-awareness-training' },
      { req: 'Vulnerability scanning', how: 'External and internal scans with remediation tracking.', link: '/penetration-testing-vulnerability-scanning' },
      { req: 'Incident response plan', how: 'Written plan including your carrier’s notification requirements.', link: '/virus-malware-removal' },
    ],
    gaps: ['Answering “yes” to MFA when it is only on some accounts', 'Backups on a drive connected to the same network', 'No EDR, only basic antivirus', 'No training records to show the carrier'],
    evidence: ['MFA enforcement report', 'EDR deployment report', 'Backup and restore test logs', 'Training completion and phishing reports', 'Vulnerability scan reports', 'Incident response plan'],
    industries: ['healthcare-it', 'financial-services-it', 'professional-services-it', 'hospitality-it', 'real-estate-property-management-it', 'construction-trades-it'],
    faqs: [
      { q: 'What security controls do cyber insurance companies require?', a: 'Commonly MFA on email and remote access, endpoint detection and response, offline or immutable backups, timely patching, email security and security awareness training. Many carriers also ask about vulnerability scanning and an incident response plan.' },
      { q: 'Can my cyber insurance claim be denied?', a: 'Claims can be disputed if application answers about security controls turn out to be inaccurate. Make sure every “yes” on the application reflects what is actually in place, and keep evidence.' },
    ],
  },
];

export const frameworkBySlug = Object.fromEntries(frameworks.map((f) => [f.slug, f]));
