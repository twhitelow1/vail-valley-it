// One page per town. Neighborhoods inside the Town of Vail (Vail Village, Lionshead,
// West Vail, East Vail) are covered on the Vail page ONLY, per the cannibalization
// note in the SEO strategy. Each page has genuinely local copy — never token-swap.
import type { Faq, Section } from './services';

export type Location = {
  slug: string;
  town: string;
  title: string;
  description: string;
  h1: string;
  answer: string;
  zips: string[];
  exit: string;
  driveFromEdwards: string;
  geo: { lat: number; lng: number };
  neighborhoods: string[];
  sections: Section[];
  businesses: { name: string; note: string }[];
  featured: string[];
  faqs: Faq[];
  nearby: string[];
};

export const locations: Location[] = [
  {
    slug: 'it-support-vail-co',
    town: 'Vail',
    title: 'IT Support Vail, CO | Managed IT & Security | Vail Valley IT',
    description: 'Local IT support in Vail, CO for businesses in Vail Village, Lionshead, West Vail and East Vail — managed IT, cybersecurity and on-site help.',
    h1: 'IT Support in Vail, CO',
    answer: 'Vail Valley IT provides IT support in Vail, CO for businesses in Vail Village, Lionshead Village, West Vail, East Vail and Cascade Village. Our local team handles managed IT, cybersecurity, Wi-Fi, Microsoft 365 and help desk support, with remote fixes in minutes and on-site visits from our Edwards base about 20 minutes down I-70.',
    zips: ['81657', '81658'],
    exit: 'I-70 exits 173 (West Vail) and 176 (Vail Main)',
    driveFromEdwards: 'about 20 minutes',
    geo: { lat: 39.6403, lng: -106.3742 },
    neighborhoods: ['Vail Village', 'Lionshead Village', 'West Vail', 'East Vail', 'Cascade Village', 'Golden Peak', 'Sandstone', 'Intermountain'],
    sections: [
      {
        h2: 'Technology that keeps up with a world-class resort town',
        html: `<p>Vail businesses run at two speeds. From Thanksgiving to April, lodging properties, restaurants and retail shops in Vail Village and Lionshead are at capacity, and every minute a point-of-sale system or guest network is down costs real money. In the shoulder seasons, owners finally have time to fix what broke all winter. We plan around both: maintenance and upgrades land in the slow months, and peak season gets monitoring tight enough that problems are fixed before the front desk notices.</p>
<p>Vail also has a large population of professional offices that never take an off-season: real estate brokerages, property management companies, attorneys, wealth advisors and medical practices clustered around the hospital and the West Vail commercial area. Those offices need the same security and compliance controls as a city firm, with support that can actually get to Bridge Street on a snow day.</p>`,
      },
      {
        h2: 'Neighborhood-by-neighborhood coverage across the Town of Vail',
        html: `<p>We support businesses throughout the Town of Vail, from <strong>East Vail</strong> and <strong>Golden Peak</strong> through <strong>Vail Village</strong> and <strong>Lionshead Village</strong> to <strong>Cascade Village</strong>, <strong>Sandstone</strong>, <strong>Intermountain</strong> and the <strong>West Vail</strong> commercial area along the North Frontage Road. Older buildings in the village core, with thick walls and mixed-use floors, often need more careful Wi-Fi design than newer construction, and we have the experience to plan for it.</p>
<p>Residence clubs, condominium associations and second-home owners with home offices are part of Vail too. We support property managers who need one partner for the networks, cameras and access systems across multiple buildings.</p>`,
      },
    ],
    businesses: [
      { name: 'Lodging & residence clubs', note: 'Guest Wi-Fi, PMS and keycard systems, segmented payment networks' },
      { name: 'Restaurants & retail', note: 'POS reliability, PCI segmentation, peak-season monitoring' },
      { name: 'Real estate & property management', note: 'Wire-fraud protection, multi-property networks' },
      { name: 'Medical & wellness practices', note: 'HIPAA controls, encrypted devices, backups' },
      { name: 'Professional offices', note: 'Microsoft 365 security, remote access for owners who travel' },
    ],
    featured: ['managed-it-services', 'business-network-wifi-support', 'compliance-cybersecurity', 'email-security-spam-protection'],
    faqs: [
      { q: 'Who provides IT support in Vail, CO?', a: 'Vail Valley IT is a local IT provider based in Edwards that supports businesses throughout the Town of Vail, including Vail Village, Lionshead Village, West Vail and East Vail. Call (970) 446-9440.' },
      { q: 'Do you offer on-site IT support in Vail Village and Lionshead?', a: 'Yes. Most issues are resolved remotely within minutes, and on-site visits are available throughout Vail Village, Lionshead and the rest of the Town of Vail from our Edwards base, roughly 20 minutes away.' },
      { q: 'Can you support IT for vacation rentals and second homes in Vail?', a: 'We focus on businesses, including property management companies and residence clubs that manage networks across many units. Owners who run a business from a Vail home office can also be supported under a business plan.' },
      { q: 'How do you handle IT during peak ski season?', a: 'Planned maintenance and upgrades are scheduled for the shoulder seasons. During peak season we tighten monitoring on point-of-sale, reservation and guest network systems so problems are caught and fixed before they affect guests.' },
    ],
    nearby: ['it-support-eagle-vail-co', 'it-support-minturn-co', 'it-support-avon-co'],
  },
  {
    slug: 'it-support-avon-co',
    town: 'Avon',
    title: 'IT Support Avon, CO | Managed IT Services | Vail Valley IT',
    description: 'Local IT support for Avon, CO businesses — managed IT, cybersecurity, Wi-Fi and Microsoft 365 help from Vail Valley IT, about 10 minutes away.',
    h1: 'IT Support in Avon, CO',
    answer: 'Vail Valley IT provides IT support in Avon, CO for offices, shops, contractors and hospitality businesses from the Avon Road corridor and Nottingham Park to the base of Beaver Creek. We deliver managed IT, cybersecurity, network and Wi-Fi support and Microsoft 365 administration, with technicians about 10 minutes away in Edwards.',
    zips: ['81620'],
    exit: 'I-70 exit 167 (Avon)',
    driveFromEdwards: 'about 10 minutes',
    geo: { lat: 39.6314, lng: -106.5222 },
    neighborhoods: ['Avon Road corridor', 'Nottingham Park area', 'Village at Avon', 'Wildridge', 'Mountain Star', 'East Avon business area'],
    sections: [
      {
        h2: 'IT for the valley’s busiest commercial hub',
        html: `<p>Avon sits at the center of the valley’s commercial life. The shopping centers and office buildings along Avon Road and the East Avon business area hold everything from medical and dental practices to accounting firms, title companies, contractors and the property managers who keep Beaver Creek running. Many of those businesses outgrew the "someone’s nephew set up our network" stage years ago, but have never had a real IT partner.</p>
<p>That is the gap we fill. We bring proactive monitoring, current security tools and documented systems to businesses that have been getting by on break-fix calls, and we are close enough that an on-site visit is a short drive, not a half-day trip.</p>`,
      },
      {
        h2: 'Gateway to Beaver Creek, with the IT needs to match',
        html: `<p>A large share of Avon businesses serve Beaver Creek guests and homeowners: ski and bike shops, restaurants, cleaning and maintenance companies, rental management and concierge services. Their staffing changes sharply by season, and their owners often work from a phone. We set up account onboarding and offboarding that keeps up with seasonal hiring, mobile-friendly Microsoft 365 security, and cloud phone systems that ring wherever the owner happens to be.</p>
<p>For businesses in Beaver Creek Village itself, see <a href="/it-support-beaver-creek-co">IT support in Beaver Creek</a>.</p>`,
      },
    ],
    businesses: [
      { name: 'Medical & dental practices', note: 'HIPAA risk assessments, encrypted devices, backups' },
      { name: 'Accounting, title & financial firms', note: 'FTC Safeguards Rule controls, email security' },
      { name: 'Contractors & trades', note: 'Field-friendly devices, cloud file sharing, phones' },
      { name: 'Retail & restaurants', note: 'POS and payment network segmentation' },
      { name: 'Property & rental management', note: 'Multi-site networks, seasonal staff accounts' },
    ],
    featured: ['managed-it-services', 'voip-phone-systems', 'compliance-cybersecurity', 'microsoft-365-email-migration'],
    faqs: [
      { q: 'Is there a local IT company near Avon, CO?', a: 'Yes. Vail Valley IT is based in Edwards, about 10 minutes west of Avon, and supports Avon businesses with managed IT, cybersecurity, networking and Microsoft 365.' },
      { q: 'How quickly can you get on site in Avon?', a: 'Most requests are resolved remotely first. When hands-on work is needed, Avon is one of the closest towns to our Edwards base, so visits are typically scheduled the same or next business day, and sooner for emergencies.' },
      { q: 'Do you support seasonal businesses in Avon?', a: 'Yes. We set up automated onboarding and offboarding for seasonal staff, so accounts are ready on day one and fully closed when the season ends.' },
    ],
    nearby: ['it-support-beaver-creek-co', 'it-support-edwards-co', 'it-support-eagle-vail-co'],
  },
  {
    slug: 'it-support-edwards-co',
    town: 'Edwards',
    title: 'IT Support Edwards, CO | Local Managed IT | Vail Valley IT',
    description: 'Vail Valley IT is based in Edwards, CO. Local managed IT, cybersecurity, compliance and on-site support for Edwards businesses and professional offices.',
    h1: 'IT Support in Edwards, CO',
    answer: 'Vail Valley IT is based in Edwards, CO, and provides IT support to Edwards businesses including medical and professional offices, financial firms, retail and restaurants around Edwards Corner, the Riverwalk and the US-6 corridor. Being local means faster on-site help, and the same managed IT, cybersecurity and compliance services we deliver across Eagle County.',
    zips: ['81632'],
    exit: 'I-70 exit 163 (Edwards)',
    driveFromEdwards: 'local',
    geo: { lat: 39.645, lng: -106.5942 },
    neighborhoods: ['Edwards Corner', 'Riverwalk at Edwards', 'Edwards Business Center area', 'Lake Creek', 'Homestead', 'Singletree', 'Cordillera'],
    sections: [
      {
        h2: 'Your IT provider is already in Edwards',
        html: `<p>Edwards is home base for Vail Valley IT. That matters most when something needs hands on it: a firewall that will not come back after a power blip, a new hire’s workstation, or a network cabinet that needs untangling. For Edwards businesses, on-site help is minutes away, not an hour over a mountain pass.</p>
<p>Edwards has quietly become the valley’s professional center. Medical specialists and the healthcare offices that surround the Vail Health Edwards campus, wealth advisors and family offices, insurance agencies, accountants, attorneys and architects all operate here, alongside the restaurants and shops of Edwards Corner and the Riverwalk. Many handle regulated data, which is where our cyber-first approach earns its keep.</p>`,
      },
      {
        h2: 'Compliance-ready IT for Edwards professional offices',
        html: `<p>For practices handling patient information, we support HIPAA security risk analysis, encryption, access controls and business associate documentation. For financial and insurance offices, we implement the technical safeguards the FTC Safeguards Rule calls for, including multi-factor authentication, encryption and monitoring, and help produce the written information security program. Learn more about our <a href="/compliance-cybersecurity">compliance and cybersecurity services</a>, <a href="/industries/healthcare-it">healthcare IT</a> and <a href="/industries/financial-services-it">financial services IT</a>.</p>`,
      },
    ],
    businesses: [
      { name: 'Medical & specialty practices', note: 'HIPAA safeguards, secure messaging, backups' },
      { name: 'Wealth advisors & family offices', note: 'Privileged access, encrypted devices, travel security' },
      { name: 'Insurance agencies', note: 'FTC Safeguards controls, email security' },
      { name: 'Attorneys, accountants & architects', note: 'Document security, large-file collaboration' },
      { name: 'Restaurants & retail', note: 'POS reliability and PCI network design' },
    ],
    featured: ['compliance-cybersecurity', 'managed-it-services', 'it-data-protection', 'automation-ai-enablement'],
    faqs: [
      { q: 'Is Vail Valley IT located in Edwards, CO?', a: 'Yes. Vail Valley IT, the local IT brand of DubLow Digital, is based in Edwards, Colorado and serves businesses throughout Eagle County.' },
      { q: 'Do you help Edwards medical offices with HIPAA?', a: 'Yes. We support HIPAA security risk analysis, implement technical safeguards like encryption, MFA and backups, and help document policies and business associate relationships.' },
      { q: 'Can you support offices in Cordillera or Singletree?', a: 'Yes. Home offices and businesses in Cordillera, Singletree, Homestead and Lake Creek are all within our Edwards on-site coverage.' },
    ],
    nearby: ['it-support-avon-co', 'it-support-beaver-creek-co', 'it-support-eagle-co'],
  },
  {
    slug: 'it-support-beaver-creek-co',
    town: 'Beaver Creek',
    title: 'IT Support Beaver Creek, CO | Vail Valley IT',
    description: 'IT support for Beaver Creek, CO businesses, lodging properties, residence clubs and HOAs — networks, security and managed IT from Vail Valley IT.',
    h1: 'IT Support in Beaver Creek, CO',
    answer: 'Vail Valley IT provides IT support in Beaver Creek, CO for lodging properties, residence clubs, homeowner associations, retailers, restaurants and the management companies that serve Beaver Creek Village, Bachelor Gulch and Arrowhead. We manage multi-building networks, guest Wi-Fi, security and help desk support, about 15 minutes from our Edwards base.',
    zips: ['81620'],
    exit: 'I-70 exit 167 (Avon), then Village Road',
    driveFromEdwards: 'about 15 minutes',
    geo: { lat: 39.6042, lng: -106.5165 },
    neighborhoods: ['Beaver Creek Village', 'Bachelor Gulch', 'Arrowhead', 'Strawberry Park', 'Highlands'],
    sections: [
      {
        h2: 'Guest expectations are the standard',
        html: `<p>In Beaver Creek, technology is part of the guest experience. A guest who cannot stream, a keycard system that drops offline, or a restaurant that cannot run cards on a holiday weekend is a reputation problem. We design and manage the networks behind those experiences with centralized monitoring, so an access point that fails at 9 p.m. triggers an alert, not a complaint.</p>
<p>Properties here often span many buildings, units and owners. We document every network, separate guest, staff, payment and building-systems traffic, and give management one partner accountable for the whole picture.</p>`,
      },
      {
        h2: 'Residence clubs, HOAs and management companies',
        html: `<p>Homeowner associations and residence clubs in Bachelor Gulch, Arrowhead and the village carry their own IT responsibilities: shared networks, security cameras, access control, owner portals and board email. Management companies need those systems reliable and secured without owning a server room. We support the office staff and the shared infrastructure together, and coordinate with the low-voltage, AV and security vendors already on property.</p>
<p>Businesses headquartered in town are covered under <a href="/it-support-avon-co">IT support in Avon</a>.</p>`,
      },
    ],
    businesses: [
      { name: 'Lodging & residence clubs', note: 'Guest networks, PMS, keycards, 24/7 monitoring' },
      { name: 'HOAs & property managers', note: 'Shared infrastructure, cameras, board email security' },
      { name: 'Restaurants & retail', note: 'Payment network segmentation, POS uptime' },
      { name: 'Ski, bike & rental shops', note: 'Seasonal staff accounts, reliable POS and Wi-Fi' },
    ],
    featured: ['business-network-wifi-support', 'managed-it-services', 'network-wifi-setup', 'it-data-protection'],
    faqs: [
      { q: 'Who provides IT support for hotels and lodging in Beaver Creek?', a: 'Vail Valley IT supports lodging properties, residence clubs and HOAs in Beaver Creek, Bachelor Gulch and Arrowhead with network management, guest Wi-Fi, security and help desk services.' },
      { q: 'Can you manage networks across multiple buildings?', a: 'Yes. We manage multi-building and multi-unit networks from a central platform, with separate guest, staff, payment and building-systems networks and alerts for any failure.' },
      { q: 'Do you work with existing AV and security vendors on property?', a: 'Yes. We coordinate with low-voltage, AV, camera and access-control vendors so there is one accountable partner for the network those systems run on.' },
    ],
    nearby: ['it-support-avon-co', 'it-support-edwards-co', 'it-support-eagle-vail-co'],
  },
  {
    slug: 'it-support-eagle-co',
    town: 'Eagle',
    title: 'IT Support Eagle, CO | Managed IT | Vail Valley IT',
    description: 'Local IT support for Eagle, CO businesses, nonprofits and professional offices — managed IT, cybersecurity, Microsoft 365 and on-site help.',
    h1: 'IT Support in Eagle, CO',
    answer: 'Vail Valley IT provides IT support in Eagle, CO, the Eagle County seat, for professional offices, contractors, nonprofits and the growing number of businesses along Broadway, Chambers Avenue and Eagle Ranch. We offer managed IT, cybersecurity, Microsoft 365 and network support, with on-site help about 20 minutes from our Edwards base.',
    zips: ['81631'],
    exit: 'I-70 exit 147 (Eagle)',
    driveFromEdwards: 'about 20 minutes',
    geo: { lat: 39.6553, lng: -106.8287 },
    neighborhoods: ['Downtown Eagle / Broadway', 'Chambers Avenue', 'Eagle Ranch', 'Brush Creek', 'Eby Creek'],
    sections: [
      {
        h2: 'IT for a county seat that keeps growing',
        html: `<p>Eagle has grown from a quiet county seat into a year-round community where many of the people who work up valley live and, increasingly, run their own businesses. Downtown Broadway and the Chambers Avenue area hold law and title offices that work with the county, engineers and surveyors, insurance agents, nonprofits, and a steady stream of new shops and restaurants. Eagle Ranch adds home-based professionals who need office-grade security at home.</p>
<p>These businesses are often too small for an IT department but handle data that deserves real protection. Managed IT gives them the monitoring, security and help desk of a larger firm at a predictable monthly price.</p>`,
      },
      {
        h2: 'Nonprofits and offices that work with public agencies',
        html: `<p>Organizations that work with county and state agencies, or receive grants, increasingly face security requirements in their contracts: MFA, encryption, documented backups and incident response plans. We help Eagle nonprofits and contractors meet those requirements affordably, and document them so the next grant application or audit is easier. See <a href="/compliance-cybersecurity">compliance & cybersecurity</a>.</p>`,
      },
    ],
    businesses: [
      { name: 'Law, title & professional offices', note: 'Document security, Microsoft 365 hardening' },
      { name: 'Nonprofits', note: 'Grant-required security controls on a lean budget' },
      { name: 'Engineering & construction', note: 'Large-file collaboration, field devices' },
      { name: 'Insurance & financial services', note: 'FTC Safeguards Rule controls' },
      { name: 'Home-based professionals', note: 'Secure home networks and remote access' },
    ],
    featured: ['managed-it-services', 'compliance-cybersecurity', 'microsoft-365-email-migration', 'remote-tech-support'],
    faqs: [
      { q: 'Is there an IT company that serves Eagle, CO?', a: 'Yes. Vail Valley IT serves Eagle, CO businesses and nonprofits with managed IT, cybersecurity and network support, with on-site visits about 20 minutes from our Edwards base.' },
      { q: 'Do you support nonprofits in Eagle County?', a: 'Yes. We help nonprofits put grant- and contract-required security controls in place, such as MFA, encryption and tested backups, and keep the documentation current.' },
      { q: 'Can you secure a home office in Eagle Ranch?', a: 'Yes. Home offices used for business can be covered with business-grade Wi-Fi, firewall settings, device encryption and managed security, the same as a commercial office.' },
    ],
    nearby: ['it-support-gypsum-co', 'it-support-edwards-co', 'it-support-avon-co'],
  },
  {
    slug: 'it-support-gypsum-co',
    town: 'Gypsum',
    title: 'IT Support Gypsum, CO | Business IT Services | Vail Valley IT',
    description: 'IT support for Gypsum, CO businesses — contractors, industrial, aviation-area and warehouse operations. Managed IT, networks, security and phones.',
    h1: 'IT Support in Gypsum, CO',
    answer: 'Vail Valley IT provides IT support in Gypsum, CO for contractors, industrial and warehouse operations, aviation-area businesses near Eagle County Regional Airport, and local offices and shops. We handle managed IT, networks that reach shops and yards, cloud phone systems and cybersecurity, with on-site help about 25 to 30 minutes from Edwards.',
    zips: ['81637'],
    exit: 'I-70 exit 140 (Gypsum)',
    driveFromEdwards: 'about 25–30 minutes',
    geo: { lat: 39.6467, lng: -106.9517 },
    neighborhoods: ['Downtown Gypsum', 'Airport area', 'Cotton Ranch', 'Gypsum industrial and business parks'],
    sections: [
      {
        h2: 'Where the valley builds, stores and ships',
        html: `<p>Gypsum is the working end of the valley. It is where many of the contractors, builders, landscapers, excavators and suppliers who serve Vail and Beaver Creek keep their yards and offices, alongside industrial employers, warehouses and businesses tied to Eagle County Regional Airport. Their IT looks different from a ski-town boutique: shop and yard Wi-Fi, rugged devices for crews, estimating and accounting software, and phones that follow people to job sites.</p>
<p>We design networks that reach the shop floor and the yard, standardize the laptops and tablets crews depend on, and set up cloud phones and file sharing so the office and the field stay in sync.</p>`,
      },
      {
        h2: 'Protecting the money flow',
        html: `<p>Contractors and suppliers move large payments, which makes them a top target for invoice and wire fraud. A spoofed email from a "supplier" with new bank details is one of the most expensive mistakes a small company can make. We put <a href="/email-security-spam-protection">email security</a>, domain authentication and payment-change alerts in place, and help set simple verification rules your bookkeeper can follow.</p>`,
      },
    ],
    businesses: [
      { name: 'Contractors & builders', note: 'Field devices, cloud file sharing, mobile phones' },
      { name: 'Industrial & warehouse', note: 'Shop and yard Wi-Fi, segmented equipment networks' },
      { name: 'Aviation-area businesses', note: 'Reliable connectivity and secure email' },
      { name: 'Local offices & retail', note: 'Managed IT and help desk at a predictable price' },
    ],
    featured: ['network-wifi-setup', 'voip-phone-systems', 'email-security-spam-protection', 'managed-it-services'],
    faqs: [
      { q: 'Do you provide IT support in Gypsum, CO?', a: 'Yes. Vail Valley IT supports Gypsum businesses with managed IT, networks, phones and cybersecurity, with on-site visits about 25 to 30 minutes from our Edwards base and remote help available immediately.' },
      { q: 'Can you extend Wi-Fi to a shop or equipment yard?', a: 'Yes. We design outdoor-rated and point-to-point wireless links to extend business networks to shops, yards and outbuildings, with equipment traffic kept separate from office systems.' },
      { q: 'How do contractors prevent wire fraud?', a: 'Combine email security and domain authentication with a firm rule: any change to payment details is verified by phone using a number already on file, never one from the email.' },
    ],
    nearby: ['it-support-eagle-co', 'it-support-edwards-co', 'it-support-avon-co'],
  },
  {
    slug: 'it-support-minturn-co',
    town: 'Minturn',
    title: 'IT Support Minturn, CO | Small Business IT | Vail Valley IT',
    description: 'IT support for Minturn, CO small businesses, restaurants, galleries and offices — Wi-Fi, internet reliability, security and managed IT.',
    h1: 'IT Support in Minturn, CO',
    answer: 'Vail Valley IT provides IT support in Minturn, CO for restaurants, galleries, shops, outfitters and small offices along Main Street and US-24. We focus on what small Minturn businesses need most: reliable internet and Wi-Fi, payment systems that work on busy nights, simple security and responsive help, about 20 minutes from Edwards.',
    zips: ['81645'],
    exit: 'I-70 exit 171 (Minturn / US-24)',
    driveFromEdwards: 'about 20 minutes',
    geo: { lat: 39.5864, lng: -106.4306 },
    neighborhoods: ['Main Street', 'Old Town', 'Dowd Junction approach', 'South Minturn'],
    sections: [
      {
        h2: 'Small-town businesses, big-season traffic',
        html: `<p>Minturn’s restaurants, galleries, outfitters and shops draw visitors from Vail and Beaver Creek all year, but most are run by a handful of people who do not have time to be the IT department. When the card reader drops or the Wi-Fi stalls on a Saturday night, they need it fixed now and fixed for good.</p>
<p>We keep it simple: a business-grade router and Wi-Fi sized for the building, payment systems on their own network, backups for the few files that really matter, and a number to call that a real local technician answers.</p>`,
      },
      {
        h2: 'Connectivity in a narrow mountain valley',
        html: `<p>Minturn sits in the Eagle River canyon below Battle Mountain, and terrain can limit internet and cellular options in parts of town. A backup internet connection, whether a second wired provider, fixed wireless or a satellite or cellular failover, keeps payments and phones running when the primary line drops. We assess what is realistically available at your address and set up automatic failover. See <a href="/business-network-wifi-support">business network & Wi-Fi support</a>.</p>`,
      },
    ],
    businesses: [
      { name: 'Restaurants & bars', note: 'POS uptime, payment segmentation, failover internet' },
      { name: 'Galleries & retail', note: 'Simple, secure Wi-Fi and card processing' },
      { name: 'Outfitters & guides', note: 'Mobile booking, cloud phones, seasonal staff' },
      { name: 'Small offices', note: 'Managed IT and Microsoft 365 at small-business scale' },
    ],
    featured: ['business-network-wifi-support', 'remote-tech-support', 'it-data-protection', 'voip-phone-systems'],
    faqs: [
      { q: 'Do you offer IT support in Minturn, CO?', a: 'Yes. Vail Valley IT supports Minturn businesses with Wi-Fi, internet failover, payment network security, managed IT and help desk, with on-site help about 20 minutes from Edwards.' },
      { q: 'How can a Minturn business keep card payments working if the internet goes down?', a: 'Add a backup internet connection with automatic failover, such as a second provider, fixed wireless, cellular or satellite, and keep payment terminals on their own protected network.' },
    ],
    nearby: ['it-support-vail-co', 'it-support-eagle-vail-co', 'it-support-avon-co'],
  },
  {
    slug: 'it-support-eagle-vail-co',
    town: 'Eagle-Vail',
    title: 'IT Support Eagle-Vail, CO | Business IT Services | Vail Valley IT',
    description: 'IT support for Eagle-Vail, CO businesses along the US-6 corridor — contractors, trades, offices and light industrial. Managed IT, networks and security.',
    h1: 'IT Support in Eagle-Vail, CO',
    answer: 'Vail Valley IT provides IT support in Eagle-Vail, CO for the contractors, trades, service companies, offices and light-industrial businesses along the US-6 business corridor between Avon and Dowd Junction. We provide managed IT, networks, phones and cybersecurity, with technicians about 15 minutes away in Edwards.',
    zips: ['81620'],
    exit: 'I-70 exit 169 (Eagle-Vail)',
    driveFromEdwards: 'about 15 minutes',
    geo: { lat: 39.6233, lng: -106.4883 },
    neighborhoods: ['US-6 business corridor', 'Eagle-Vail commercial park', 'Stone Creek', 'Eagle-Vail golf course area'],
    sections: [
      {
        h2: 'The valley’s service and trades corridor',
        html: `<p>Eagle-Vail’s commercial strip along US-6 is where much of the valley’s work gets organized: plumbers, electricians, HVAC and cleaning companies, landscapers, auto and equipment shops, design studios and small offices. Their technology needs to work in the office and from a truck, with scheduling, estimates, invoices and photos flowing between the two.</p>
<p>We standardize devices and accounts, connect field staff to shared files and phones, and protect the business email that carries quotes and invoices. Many of these companies have grown fast, and their IT has grown in layers. We clean that up, document it, and keep it running.</p>`,
      },
      {
        h2: 'Automation for service businesses',
        html: `<p>Service companies gain the most from automation: instant replies to new leads, appointment reminders, review requests after a job and data that moves from the scheduling app to accounting without retyping. We build those workflows with tools you already have. See <a href="/automation-ai-enablement">automation & AI enablement</a>.</p>`,
      },
    ],
    businesses: [
      { name: 'Trades & home services', note: 'Field devices, cloud phones, scheduling integrations' },
      { name: 'Contractors & design firms', note: 'Large-file sharing, secure email' },
      { name: 'Auto & equipment shops', note: 'Shop Wi-Fi, POS and parts systems' },
      { name: 'Small offices', note: 'Managed IT and Microsoft 365 security' },
    ],
    featured: ['automation-ai-enablement', 'managed-it-services', 'voip-phone-systems', 'network-wifi-setup'],
    faqs: [
      { q: 'Do you support businesses in Eagle-Vail, CO?', a: 'Yes. Vail Valley IT supports Eagle-Vail businesses along the US-6 corridor with managed IT, networks, phones, cybersecurity and automation, about 15 minutes from our Edwards base.' },
      { q: 'Can you connect field crews to office files and phones?', a: 'Yes. We set up cloud file sharing, mobile device management and cloud phone systems so field staff can reach jobs, photos, documents and calls securely from their phones and tablets.' },
    ],
    nearby: ['it-support-avon-co', 'it-support-vail-co', 'it-support-minturn-co'],
  },
];

export const locationBySlug = Object.fromEntries(locations.map((l) => [l.slug, l]));
