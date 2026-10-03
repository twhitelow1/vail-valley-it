import type { Faq, Section } from './services';

export type Industry = {
  slug: string;
  name: string;
  icon: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  card: string;
  sections: Section[];
  needs: string[];
  services: string[];
  faqs: Faq[];
};

export const industries: Industry[] = [
  {
    slug: 'healthcare-it',
    name: 'Healthcare',
    icon: 'heart',
    title: 'Healthcare IT & HIPAA Support | Vail Valley IT',
    description: 'HIPAA-focused IT support for Vail Valley medical, dental, therapy and wellness practices — risk assessments, encryption, backups and managed IT.',
    h1: 'Healthcare IT & HIPAA Support for Vail Valley Practices',
    answer: 'Vail Valley IT provides HIPAA-focused IT support for medical, dental, physical therapy, behavioral health, med-spa and wellness practices across Eagle County. We support your security risk analysis, implement the technical safeguards HIPAA expects, protect patient data with encryption and tested backups, and keep your team working without IT getting in the way of care.',
    card: 'HIPAA safeguards, encrypted devices and tested backups for medical, dental and wellness practices.',
    sections: [
      {
        h2: 'What HIPAA expects from a small practice’s IT',
        html: `<p>The HIPAA Security Rule requires covered entities and business associates to protect electronic protected health information (ePHI) with administrative, physical and technical safeguards. For a small practice, that translates into a documented risk analysis, unique user accounts, multi-factor authentication, encryption on every laptop and phone that touches patient data, audit logging, tested backups, a contingency plan, and business associate agreements with vendors like your IT provider.</p>
<p>Read our full <a href="/compliance/hipaa">HIPAA compliance guide</a>. We handle the technical side and the documentation that proves it, and work alongside your compliance officer or attorney on policy decisions. This is general information, not legal advice.</p>`,
      },
      {
        h2: 'Keeping the front desk and providers moving',
        html: `<p>Security only works if it does not slow down patient care. We tune sign-in so providers are not re-entering passwords all day, keep EHR and practice-management connections stable, make sure the check-in tablets and printers just work, and resolve routine requests like password and MFA resets for verified staff in minutes.</p>`,
      },
    ],
    needs: ['HIPAA security risk analysis support', 'Encrypted laptops, desktops and phones', 'MFA on email and EHR access', 'Secure email for patient communication', 'Immutable, tested backups', 'Business associate agreement with your IT provider'],
    services: ['compliance-cybersecurity', 'it-data-protection', 'email-security-spam-protection', 'managed-it-services'],
    faqs: [
      { q: 'Does a small medical practice need a HIPAA risk assessment?', a: 'Yes. The HIPAA Security Rule requires covered entities of every size to conduct and document a risk analysis of how they protect electronic patient information, and to update it as systems change.' },
      { q: 'Will Vail Valley IT sign a business associate agreement?', a: 'Yes. Because an IT provider may access systems containing patient data, we sign a business associate agreement with healthcare clients.' },
      { q: 'Is Microsoft 365 HIPAA compliant?', a: 'Microsoft 365 can be used in a HIPAA-compliant way when Microsoft’s BAA is in place and the tenant is configured with appropriate safeguards such as MFA, encryption, audit logging and data loss prevention. Compliance depends on configuration and use, not the product alone.' },
    ],
  },
  {
    slug: 'financial-services-it',
    name: 'Financial & Insurance',
    icon: 'bank',
    title: 'IT for Financial & Insurance Firms | Vail Valley IT',
    description: 'IT and FTC Safeguards Rule support for Vail Valley wealth advisors, insurance agencies, accountants, lenders and title companies.',
    h1: 'IT for Financial, Insurance & Accounting Firms in the Vail Valley',
    answer: 'Vail Valley IT supports wealth advisors, family offices, insurance agencies, accountants, tax preparers, mortgage brokers and title companies across Eagle County. We implement the technical controls the FTC Safeguards Rule and industry regulators expect, including MFA, encryption, monitoring and secure email, and help produce the written information security program behind them.',
    card: 'FTC Safeguards Rule controls, secure email and wire-fraud protection for advisors, agencies and accountants.',
    sections: [
      {
        h2: 'The FTC Safeguards Rule in plain language',
        html: `<p>Many non-bank financial businesses, including tax preparers, mortgage brokers, some lenders and certain advisory and insurance-related businesses, must maintain a written information security program under the FTC Safeguards Rule. Core requirements include a designated qualified individual to oversee the program, a written risk assessment, access controls, encryption of customer information, multi-factor authentication, monitoring, staff training, vendor oversight and an incident response plan. Covered businesses must also notify the FTC of certain security events.</p>
<p>Insurance agencies and broker-dealers may have additional state or industry requirements. We help you identify the technical controls that apply and put them in place. See our guides to the <a href="/compliance/glba-ftc-safeguards-rule">FTC Safeguards Rule</a> and <a href="/compliance/sec-regulation-s-p">SEC Regulation S-P</a>. This is general information, not legal advice.</p>`,
      },
      {
        h2: 'Wire fraud and impersonation',
        html: `<p>Financial and title offices are prime targets for business email compromise. We deploy <a href="/email-security-spam-protection">advanced email security</a>, alerts for suspicious sign-ins and forwarding rules, and help set out-of-band verification procedures for any change to payment instructions.</p>
<p>One insurance agency client put it this way: <em>“Todd has helped get our team protected at a level we had no idea existed.”</em></p>`,
      },
    ],
    needs: ['Written information security program support', 'MFA on every system with customer data', 'Encrypted devices and secure file sharing', 'Email security and impersonation protection', 'Monitoring and incident response', 'Vendor and access reviews'],
    services: ['compliance-cybersecurity', 'email-security-spam-protection', 'it-data-protection', 'managed-it-services'],
    faqs: [
      { q: 'Does the FTC Safeguards Rule apply to my small firm?', a: 'It applies to many non-bank financial institutions, including tax preparers, mortgage brokers and certain lenders and advisors, with some reduced requirements for firms that maintain information on fewer than 5,000 consumers. Confirm applicability with your compliance advisor or attorney.' },
      { q: 'What IT controls do financial firms need?', a: 'At minimum: multi-factor authentication, encryption of customer data, access controls, monitoring and logging, tested backups, staff security training, vendor oversight and a written incident response plan.' },
    ],
  },
  {
    slug: 'professional-services-it',
    name: 'Professional Services',
    icon: 'briefcase',
    title: 'IT for Law Firms & Professional Offices | Vail Valley IT',
    description: 'IT support for Vail Valley law firms, architects, engineers, consultants and professional offices — security, collaboration and managed IT.',
    h1: 'IT for Professional Offices in the Vail Valley',
    answer: 'Vail Valley IT supports law firms, architects, engineers, consultants, designers and other professional offices across Eagle County with managed IT, Microsoft 365 security, document protection, large-file collaboration and remote access for partners who split their time between the valley and elsewhere.',
    card: 'Secure documents, smooth collaboration and remote access for law, design and consulting firms.',
    sections: [
      {
        h2: 'Client confidentiality is the product',
        html: `<p>Professional firms trade on trust, and a breached mailbox or lost laptop puts client confidences at risk. We encrypt devices, lock down Microsoft 365, control who can share what externally, and back up document systems so a deleted folder or ransomware event does not cost a client relationship.</p>`,
      },
      {
        h2: 'Built for partners who are not always in the valley',
        html: `<p>Many valley firms have principals who work from Denver, a second home or the road. Secure remote access, cloud file sharing, mobile device management and travel-ready security settings mean they can work from anywhere without opening holes in the firm’s defenses.</p>`,
      },
    ],
    needs: ['Microsoft 365 security hardening', 'Encrypted devices and mobile management', 'Secure external file sharing', 'Large CAD and design file collaboration', 'Remote access for traveling partners'],
    services: ['managed-it-services', 'microsoft-365-email-migration', 'it-data-protection', 'it-consulting-support'],
    faqs: [
      { q: 'How should a small law firm protect client files?', a: 'Encrypt every device, require MFA, restrict external sharing, back up document systems to an immutable copy, and train staff on phishing. Vail Valley IT implements and monitors all of these for professional offices.' },
    ],
  },
  {
    slug: 'hospitality-it',
    name: 'Hospitality',
    icon: 'bed',
    title: 'Hospitality IT for Lodging & Restaurants | Vail Valley IT',
    description: 'IT support for Vail Valley hotels, residence clubs, restaurants and resort businesses — guest Wi-Fi, POS, PCI networks and 24/7 monitoring.',
    h1: 'Hospitality IT for Vail Valley Lodging & Restaurants',
    answer: 'Vail Valley IT supports hotels, residence clubs, condo associations, restaurants and resort businesses from Vail to Beaver Creek with guest and staff Wi-Fi, point-of-sale and property-management system support, PCI-segmented payment networks, and monitoring that catches outages before guests do.',
    card: 'Guest Wi-Fi, POS and PCI-segmented networks, monitored through peak season.',
    sections: [
      {
        h2: 'Peak season has no tolerance for downtime',
        html: `<p>On a holiday weekend, a failed access point or a POS that cannot reach the processor is lost revenue and a bad review. We monitor network gear, internet circuits and critical systems continuously, schedule upgrades for the shoulder seasons, and keep backup internet ready for the days the main line fails.</p>`,
      },
      {
        h2: 'Seasonal staff, done right',
        html: `<p>Hospitality teams can double for winter. Automated onboarding gives every seasonal hire the right accounts and access on day one, and offboarding removes them cleanly in spring, so former employees do not keep logins to email, scheduling or reservation systems.</p>`,
      },
    ],
    needs: ['Guest, staff and payment network segmentation', 'POS and PMS uptime', 'Backup internet with failover', 'Seasonal onboarding and offboarding', 'Camera and access-control networks'],
    services: ['business-network-wifi-support', 'network-wifi-setup', 'managed-it-services', 'voip-phone-systems'],
    faqs: [
      { q: 'How should a hotel or restaurant separate guest Wi-Fi?', a: 'Put guests, staff, payment systems and building systems on separate networks (VLANs) with firewall rules between them, so a guest device can never reach card terminals or management systems.' },
    ],
  },
  {
    slug: 'real-estate-property-management-it',
    name: 'Real Estate & Property Management',
    icon: 'key',
    title: 'IT for Real Estate & Property Management | Vail Valley IT',
    description: 'IT support for Vail Valley brokerages, property managers and HOAs — wire-fraud protection, multi-property networks and managed IT.',
    h1: 'IT for Real Estate & Property Management in the Vail Valley',
    answer: 'Vail Valley IT supports real estate brokerages, rental and property management companies and homeowner associations across Eagle County with wire-fraud protection, secure email, managed devices for agents, and centrally managed networks across the properties you oversee.',
    card: 'Wire-fraud protection, managed agent devices and networks across every property you manage.',
    sections: [
      {
        h2: 'Wire fraud is the number one risk',
        html: `<p>Real estate transactions involve large wire transfers coordinated by email, which makes brokerages, title companies and their clients a constant target. We harden email with authentication and advanced filtering, alert on account takeover signs, and help agents follow a phone-verification rule for any wiring instructions.</p>`,
      },
      {
        h2: 'One partner across every property',
        html: `<p>Property managers juggle internet, Wi-Fi, cameras, smart locks and owner communications across dozens of units. We centralize network management and documentation so problems are visible from one place, and coordinate with on-site vendors.</p>`,
      },
    ],
    needs: ['Email security and wire-fraud prevention', 'Managed agent laptops and phones', 'Multi-property network management', 'Secure transaction document storage'],
    services: ['email-security-spam-protection', 'business-network-wifi-support', 'managed-it-services', 'automation-ai-enablement'],
    faqs: [
      { q: 'How can a brokerage prevent wire fraud?', a: 'Use email authentication and advanced filtering, enable MFA for every agent, monitor for suspicious sign-ins, and require phone verification with a known number before any wire instructions are followed.' },
    ],
  },
  {
    slug: 'construction-trades-it',
    name: 'Construction & Trades',
    icon: 'hardhat',
    title: 'IT for Contractors, Builders & Trades | Vail Valley IT',
    description: 'IT support for Vail Valley contractors, builders and trades — field devices, cloud phones, file sharing, shop Wi-Fi and invoice-fraud protection.',
    h1: 'IT for Contractors & Trades in the Vail Valley',
    answer: 'Vail Valley IT supports general contractors, builders, electricians, plumbers, HVAC and landscaping companies across Eagle County with field-ready devices, cloud phones, file sharing that reaches the job site, shop and yard Wi-Fi, and protection against the invoice and payment fraud that targets the trades.',
    card: 'Field-ready devices, cloud phones, shop Wi-Fi and protection from invoice fraud.',
    sections: [
      {
        h2: 'Office and field, connected',
        html: `<p>Crews need plans, photos, change orders and schedules on their phones and tablets, and the office needs them back without a chain of text messages. We set up cloud file sharing, mobile device management and cloud phones so information flows both ways securely, and devices can be wiped if one goes missing on a job site.</p>`,
      },
      {
        h2: 'Protecting payments and estimates',
        html: `<p>Supplier and subcontractor payments are frequent fraud targets. Email security, domain authentication and a simple verification rule for payment changes stop the most costly attacks. We also back up estimating and accounting data so a lost laptop never means a lost bid.</p>`,
      },
    ],
    needs: ['Rugged, managed field devices', 'Cloud phones that follow crews', 'Job-site file access', 'Shop and yard Wi-Fi', 'Payment-fraud protection'],
    services: ['voip-phone-systems', 'network-wifi-setup', 'email-security-spam-protection', 'automation-ai-enablement'],
    faqs: [
      { q: 'What IT does a small contractor actually need?', a: 'Managed laptops and phones for the office and crews, cloud file sharing, a cloud phone system, email security, and backups for estimating and accounting data. Most contractors also benefit from automated lead follow-up.' },
    ],
  },
];

export const industryBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
