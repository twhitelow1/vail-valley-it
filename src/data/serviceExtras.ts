// Depth layer for each service page: signs, process, fit, pricing factors, a local
// section, extra FAQs and quick facts. Merged into the page template in [slug].astro.
import type { Faq, Section } from './services';

export type Extra = {
  facts: [string, string][];
  signs: string[];
  process?: { h: string; p: string }[];
  fit: string[];
  pricing: [string, string][];
  local: Section;
  faqs: Faq[];
  review?: string; // reviewer name from site.reviews
};

export const extras: Record<string, Extra> = {
  'managed-it-services': {
    facts: [['Pricing', 'Flat monthly, per user'], ['Monitoring', '24/7'], ['Routine requests', '~10 minutes'], ['Coverage', 'All of Eagle County']],
    signs: [
      'The same computer problems keep coming back every few weeks.',
      'Nobody can say for certain whether last night’s backup worked.',
      'An office manager or owner is spending hours a week being “the IT person.”',
      'Former employees may still have access to email or shared files.',
      'Your cyber-insurance renewal asked questions you could not answer.',
      'IT costs arrive as surprise invoices instead of a predictable line item.',
    ],
    fit: ['Offices with roughly 5 to 50 users', 'Healthcare, financial, insurance and professional firms with sensitive data', 'Owners who want one accountable partner instead of several vendors', 'Businesses with seasonal staffing swings'],
    pricing: [
      ['Number of users and devices', 'Most plans are priced per user, covering their laptop, phone and accounts.'],
      ['Servers and locations', 'On-premise servers, multiple offices or job sites add monitoring and maintenance.'],
      ['Compliance requirements', 'HIPAA or FTC Safeguards documentation and controls add to the security stack.'],
      ['Current state', 'A one-time onboarding fee may apply if systems need cleanup before they can be managed.'],
    ],
    local: { h2: 'Managed IT across the Vail Valley', html: `<p>Our managed clients are spread from Vail to Gypsum, and the plan is the same everywhere: remote monitoring and fixes first, then on-site visits from Edwards when hands-on work is needed. That means <a href="/it-support-avon-co">Avon</a> and <a href="/it-support-edwards-co">Edwards</a> offices typically see a technician within minutes of a scheduled visit, and <a href="/it-support-vail-co">Vail</a>, <a href="/it-support-eagle-co">Eagle</a> and <a href="/it-support-gypsum-co">Gypsum</a> are a short drive down I-70. See examples in our <a href="/case-studies">case studies</a>.</p>` },
    faqs: [
      { q: 'Is there a long-term contract for managed IT?', a: 'Managed IT is provided under a written service agreement with a defined term and scope. The terms, including how either side can end the agreement, are spelled out before you sign.' },
      { q: 'What does a managed IT provider not cover?', a: 'Typically new hardware purchases, large one-time projects such as an office move, and third-party software licenses are quoted separately. Your agreement lists exactly what is included.' },
    ],
    review: 'Jay Van Voorst',
  },
  'it-consulting-support': {
    facts: [['Engagement', 'Project or block hours'], ['Format', 'On site or remote'], ['Deliverable', 'Written roadmap'], ['Based in', 'Edwards, CO']],
    signs: [
      'You have a big technology decision coming and no one to pressure-test it.',
      'A vendor quote looks high, but you cannot tell if it is reasonable.',
      'Your current IT provider is slow, and you want a second opinion before switching.',
      'You are opening, moving or expanding an office.',
      'You are paying for software and subscriptions nobody can fully account for.',
    ],
    process: [
      { h: 'Discovery call', p: 'We learn the decision or problem, your budget and your deadline.' },
      { h: 'Assessment', p: 'We review the systems, contracts and quotes involved, on site or remotely.' },
      { h: 'Recommendation', p: 'You get a written plan with options, costs and trade-offs in plain language.' },
      { h: 'Execution (optional)', p: 'We run the project, manage vendors, or hand the plan to your team.' },
    ],
    fit: ['Businesses not ready for a full managed plan', 'Owners facing a one-time project or decision', 'Companies auditing an outgoing provider', 'Firms with an internal IT person who wants senior backup'],
    pricing: [
      ['Scope', 'A single review is quoted as a fixed fee; open-ended help uses block hours.'],
      ['On site vs. remote', 'Remote work avoids travel time; on-site work is scheduled efficiently by area.'],
      ['Urgency', 'Planned work costs less than emergency, same-day requests.'],
      ['Project size', 'Office moves and migrations are quoted as fixed-price projects.'],
    ],
    local: { h2: 'Consulting for valley-specific decisions', html: `<p>Many of the decisions we help with are shaped by the valley itself: which internet providers can actually serve a building in <a href="/it-support-minturn-co">Minturn</a> or <a href="/it-support-eagle-vail-co">Eagle-Vail</a>, how to staff technology for a winter season, or whether a second-home owner’s business should run from the cloud rather than a server in a closet. Local context changes the recommendation.</p>` },
    faqs: [
      { q: 'How much does IT consulting cost?', a: 'Focused reviews are typically quoted as a fixed fee, while ongoing help is billed in prepaid block hours. You receive the price before work starts.' },
      { q: 'Can a consultation turn into a managed IT plan?', a: 'Yes, and many do, but there is no obligation. The written recommendation is yours to use with any provider.' },
    ],
    review: 'Erin Gross',
  },
  'business-network-wifi-support': {
    facts: [['Platforms', 'UniFi, Meraki & more'], ['Monitoring', 'Outage alerts 24/7'], ['Visits', 'On-site in Eagle County'], ['Focus', 'Offices, retail, lodging']],
    signs: [
      'Wi-Fi drops or slows down at the same time every day.',
      'Some rooms or floors are dead zones.',
      'Card terminals or the POS lose connection on busy nights.',
      'Guests and staff share the same Wi-Fi password.',
      'Nobody knows the login for the firewall or router.',
      'The internet provider says the line is fine, but the office disagrees.',
    ],
    process: [
      { h: 'Measure', p: 'Wi-Fi survey, firewall review and a test of the actual internet circuit.' },
      { h: 'Diagnose', p: 'We pinpoint the cause: coverage, interference, configuration, hardware or the provider.' },
      { h: 'Fix', p: 'Channel planning, added or relocated access points, firewall updates or provider escalation.' },
      { h: 'Monitor', p: 'The network is enrolled in monitoring so the next problem is caught early.' },
    ],
    fit: ['Offices with unreliable Wi-Fi', 'Restaurants, shops and lodging with guest networks', 'Multi-building properties and HOAs', 'Businesses that take card payments'],
    pricing: [
      ['Size of the space', 'More square footage and floors means more access points to tune or add.'],
      ['Existing equipment', 'Business-grade gear can often be reused; consumer routers usually need replacing.'],
      ['Building construction', 'Stone, log and concrete walls common in mountain buildings need denser coverage.'],
      ['Ongoing monitoring', 'Network monitoring can be added on its own or included in managed IT.'],
    ],
    local: { h2: 'Mountain buildings are hard on Wi-Fi', html: `<p>Thick log and stone construction, multi-level condos and older mixed-use buildings in places like <a href="/it-support-vail-co">Vail Village</a> and <a href="/it-support-beaver-creek-co">Beaver Creek</a> block Wi-Fi far more than drywall offices do. In narrow spots like <a href="/it-support-minturn-co">Minturn</a>, internet options can also be limited, which is why we often pair Wi-Fi fixes with a backup internet connection.</p>` },
    faqs: [
      { q: 'Do I need to replace my Wi-Fi equipment?', a: 'Not always. Business-grade access points and firewalls can usually be reconfigured and reused. Consumer routers supplied by internet providers are the most common thing worth replacing.' },
      { q: 'Can you add backup internet so we never go offline?', a: 'Yes. We set up a second connection, such as another wired provider, fixed wireless, cellular or satellite, with automatic failover on the firewall.' },
    ],
    review: 'Jay Van Voorst',
  },
  'microsoft-365-email-migration': {
    facts: [['Downtime', 'None meaningful'], ['Cut-over', 'After hours'], ['Pricing', 'Fixed project price'], ['Security', 'MFA + DMARC included']],
    signs: [
      'Your email is still hosted with GoDaddy, a web host or an old Exchange server.',
      'Staff juggle personal-style accounts for business email.',
      'Mailboxes are full and nobody knows how to archive them.',
      'You are merging two companies or separating from a parent company.',
      'Shared files live on a single desktop or a USB drive.',
    ],
    fit: ['Offices moving off GoDaddy, IMAP or on-premise Exchange', 'Businesses switching from Google Workspace', 'Firms merging or splitting Microsoft tenants', 'Regulated offices that need Business Premium security features'],
    pricing: [
      ['Number of mailboxes', 'The main driver; each mailbox is copied, verified and set up on devices.'],
      ['Source system', 'Tenant-to-tenant and Exchange moves are more involved than IMAP.'],
      ['Files and SharePoint', 'Moving shared drives, OneDrive and Teams content adds time.'],
      ['Licensing', 'Microsoft 365 licenses are billed monthly per user, separate from the migration.'],
    ],
    local: { h2: 'Migrations scheduled around your season', html: `<p>For lodging, retail and restaurants we schedule cut-overs in the shoulder seasons whenever possible, and always after hours. For professional offices in <a href="/it-support-edwards-co">Edwards</a> and <a href="/it-support-avon-co">Avon</a>, a Friday evening switch means staff open Outlook on Monday and keep working.</p>` },
    faqs: [
      { q: 'Which Microsoft 365 plan should a small business choose?', a: 'Business Standard suits most general offices. Business Premium adds device management and advanced security, and is often the right fit for healthcare, financial and other regulated businesses.' },
      { q: 'Will our email addresses change?', a: 'No. Your domain and addresses stay the same; only the system behind them changes.' },
    ],
    review: 'Erin Gross',
  },
  'email-security-spam-protection': {
    facts: [['Protects', 'Phishing, spoofing, BEC'], ['Includes', 'SPF, DKIM, DMARC'], ['Alerts', 'Suspicious sign-ins'], ['Training', 'Phishing simulations']],
    signs: [
      'Staff regularly receive emails pretending to be you or a vendor.',
      'Customers have received fake emails from your domain.',
      'Someone clicked a link and was asked to “re-enter” their password.',
      'Your bookkeeper has been asked by email to change a vendor’s bank details.',
      'You have never checked whether DMARC is set up on your domain.',
    ],
    process: [
      { h: 'Email security review', p: 'We check filtering, domain records, sign-in logs and forwarding rules.' },
      { h: 'Lock down the domain', p: 'SPF, DKIM and DMARC are published and monitored.' },
      { h: 'Add advanced filtering', p: 'Link and attachment inspection plus impersonation protection go live.' },
      { h: 'Train and test', p: 'Short training and simulated phishing build the habit of checking twice.' },
    ],
    fit: ['Any business that moves money by email', 'Real estate, title, construction and financial firms', 'Offices that have already had a compromised mailbox', 'Businesses completing a cyber-insurance application'],
    pricing: [
      ['Number of mailboxes', 'Advanced filtering and training are priced per user.'],
      ['Existing licensing', 'Microsoft 365 Business Premium already includes Defender for Office 365.'],
      ['Domains', 'Each sending domain needs its own SPF, DKIM and DMARC setup.'],
      ['Training frequency', 'Monthly or quarterly phishing simulations.'],
    ],
    local: { h2: 'Why valley businesses are targeted', html: `<p>Resort economies move a lot of money between people who rarely meet face to face: owners who live elsewhere part of the year, property managers, contractors and title companies. That makes payment-change and impersonation emails especially effective here. Contractors in <a href="/it-support-gypsum-co">Gypsum</a> and <a href="/it-support-eagle-vail-co">Eagle-Vail</a> and brokerages in <a href="/it-support-vail-co">Vail</a> are frequent targets.</p>` },
    faqs: [
      { q: 'Why are phishing emails getting through our spam filter?', a: 'Targeted phishing often comes from real, compromised accounts or lookalike domains, so it passes basic spam checks. Advanced filtering inspects links when they are clicked and flags impersonation attempts.' },
      { q: 'How do I stop people spoofing my business email address?', a: 'Publish SPF, DKIM and a DMARC policy for your domain, then move the DMARC policy to quarantine or reject once legitimate mail is confirmed to pass.' },
    ],
    review: 'Tony Martinez',
  },
  'voip-phone-systems': {
    facts: [['Numbers', 'Ported, kept'], ['Works on', 'Desk, laptop, mobile'], ['Setup', 'Network tested first'], ['Changes', 'Handled by us']],
    signs: [
      'You are still paying for traditional phone lines.',
      'Calls only ring at the front desk when the owner is rarely there.',
      'Changing a greeting or adding an extension requires a service call.',
      'Callers complain about choppy audio or dropped calls.',
      'Seasonal staff need extensions for a few months each year.',
    ],
    process: [
      { h: 'Needs review', p: 'Users, call flow, after-hours handling and integrations like Teams or a CRM.' },
      { h: 'Network test', p: 'We confirm the internet connection and firewall can carry clear voice traffic.' },
      { h: 'Port and build', p: 'Numbers are ported and auto-attendants, ring groups and voicemail configured.' },
      { h: 'Go live and train', p: 'Phones are deployed and staff learn the apps in a short session.' },
    ],
    fit: ['Offices replacing traditional phone lines', 'Owners and managers who work from their phones', 'Seasonal businesses adding and removing staff', 'Multi-location businesses that want one phone system'],
    pricing: [
      ['Number of users', 'Hosted VoIP is billed per user, per month.'],
      ['Phones', 'Desk phones are optional; mobile and desktop apps are included with most plans.'],
      ['Features', 'Call recording, texting, CRM or Teams integration can change the plan tier.'],
      ['Network readiness', 'Some offices need a firewall update to prioritize voice traffic.'],
    ],
    local: { h2: 'Phones that follow you around the valley', html: `<p>An owner might start the day at an office in <a href="/it-support-edwards-co">Edwards</a>, check a job in <a href="/it-support-beaver-creek-co">Beaver Creek</a> and finish in <a href="/it-support-eagle-co">Eagle</a>. With a cloud phone system, the business line rings on their mobile app wherever they are, and storm-closure greetings can be updated from the lift line.</p>` },
    faqs: [
      { q: 'Does VoIP work if the internet goes down?', a: 'Calls can automatically forward to mobile phones during an outage, and a backup internet connection keeps desk phones working. Mobile apps also work over cellular data.' },
      { q: 'Can VoIP integrate with Microsoft Teams?', a: 'Yes. Many business phone platforms can ring in Microsoft Teams or provide calling inside Teams, depending on the provider and plan.' },
    ],
    review: 'Anthony Atencio',
  },
  'it-data-protection': {
    facts: [['Approach', '3-2-1 + immutable'], ['Covers', 'PCs, servers, M365'], ['Testing', 'Scheduled restores'], ['Plan', 'Written recovery plan']],
    signs: [
      'Your backup is a USB drive plugged into one computer.',
      'You assume Microsoft 365 or Google backs up your email and files.',
      'Nobody has restored a file from backup in months.',
      'The accounting or practice-management data lives on one desktop.',
      'You do not know how long it would take to recover from ransomware.',
    ],
    process: [
      { h: 'Inventory', p: 'We map where important data lives: devices, servers, cloud apps and line-of-business software.' },
      { h: 'Protect', p: 'Automated backups with offsite and immutable copies are deployed.' },
      { h: 'Test', p: 'Restores are tested on a schedule and reported to you.' },
      { h: 'Plan', p: 'A written recovery plan defines what comes back first and how fast.' },
    ],
    fit: ['Any business that could not work for a week without its data', 'Healthcare and financial offices with retention requirements', 'Businesses with an on-premise server or NAS', 'Companies applying for or renewing cyber insurance'],
    pricing: [
      ['Amount of data', 'Storage volume and how long backups are retained.'],
      ['What is protected', 'Workstations, servers and cloud accounts are priced per item or per user.'],
      ['Recovery speed', 'Faster recovery targets may require local backup appliances.'],
      ['Testing frequency', 'More frequent restore testing adds verification time.'],
    ],
    local: { h2: 'Recovery planning for mountain risks', html: `<p>Power outages during storms, wildfire evacuations and frozen-pipe floods in older buildings are real risks across Eagle County. Cloud-based, offsite backups mean a business in <a href="/it-support-vail-co">Vail</a> can restore from a laptop in <a href="/it-support-eagle-co">Eagle</a> or Denver if the office is unreachable.</p>` },
    faqs: [
      { q: 'What is an immutable backup?', a: 'A backup copy that cannot be changed or deleted for a set period, even by an administrator. It protects your recovery point from ransomware and compromised accounts.' },
      { q: 'How long does it take to recover from a data loss?', a: 'It depends on the amount of data and the backup type. A single file can take minutes; a full server restore can take hours. Your recovery plan sets and tests these targets in advance.' },
    ],
    review: 'Jay Van Voorst',
  },
  'remote-it-consultation': {
    facts: [['Length', '30 or 60 minutes'], ['Format', 'Video + screen share'], ['Deliverable', 'Written next steps'], ['Availability', 'Anywhere in Colorado']],
    signs: [
      'You want an expert opinion before buying hardware or software.',
      'A cyber-insurance questionnaire has questions you do not understand.',
      'You are deciding between two vendors or plans.',
      'You want to start using AI tools but are unsure what is safe.',
    ],
    process: [
      { h: 'Book', p: 'Choose a 30 or 60 minute session and tell us what you want to cover.' },
      { h: 'Prepare', p: 'Send any quotes, questionnaires or screenshots ahead of time.' },
      { h: 'Meet', p: 'We review it together on video and screen share.' },
      { h: 'Follow up', p: 'You receive written next steps and can reply with questions.' },
    ],
    fit: ['Owners making a technology decision', 'Businesses outside Eagle County', 'Second-home owners running a business remotely', 'Teams wanting a quick expert review'],
    pricing: [
      ['Session length', 'Fixed price for 30 or 60 minutes.'],
      ['Preparation', 'Reviewing large documents before the call may add time.'],
      ['Follow-on work', 'Any hands-on work afterward is quoted separately.'],
    ],
    local: { h2: 'Local expertise, without the drive', html: `<p>Remote sessions are popular with valley business owners who split their time between Colorado and elsewhere, and with businesses in <a href="/it-support-gypsum-co">Gypsum</a> or <a href="/it-support-minturn-co">Minturn</a> who would rather not wait for an on-site visit just to ask a question.</p>` },
    faqs: [
      { q: 'How much does a remote IT consultation cost?', a: 'Remote consultations are booked as fixed-price 30 or 60 minute sessions, so you know the cost before the call.' },
    ],
    review: 'Jazzmyn Boykins',
  },
  'remote-tech-support': {
    facts: [['Typical fix', 'Same day'], ['Routine requests', '~10 minutes'], ['Security', 'Verified + encrypted'], ['Coverage', 'Anywhere in Colorado']],
    signs: [
      'Outlook keeps asking for a password or will not sync.',
      'A printer or scanner stopped working.',
      'A computer has become slow or keeps freezing.',
      'Someone is locked out of their account or needs an MFA reset.',
      'You need software installed or updated.',
    ],
    fit: ['Small offices without in-house IT', 'Remote and hybrid employees', 'Businesses outside our on-site area', 'Managed clients needing fast help'],
    pricing: [
      ['Managed clients', 'Remote support is included in managed IT plans.'],
      ['Non-managed clients', 'Billed per incident or from prepaid block hours.'],
      ['After-hours requests', 'Urgent after-hours work may carry a premium.'],
    ],
    local: { h2: 'Why remote support is faster in the mountains', html: `<p>A snowstorm on I-70 or a closed Vail Pass can turn a 20-minute drive into hours. Remote support means a password problem in <a href="/it-support-vail-co">Vail</a> or a printer issue in <a href="/it-support-eagle-co">Eagle</a> gets fixed now, and on-site visits are reserved for work that truly needs hands on hardware.</p>` },
    faqs: [
      { q: 'Can you fix my computer remotely?', a: 'Most software, account, email, printer and performance issues can be fixed remotely. Hardware failures and network cabling need an on-site visit.' },
    ],
    review: 'Jazzmyn Boykins',
  },
  'hardware-upgrades': {
    facts: [['Lifecycle', '4–5 yrs laptops'], ['Setup', 'Pre-configured'], ['Data', 'Migrated for you'], ['Old devices', 'Securely wiped']],
    signs: [
      'Computers are more than four or five years old.',
      'Any business computer still runs Windows 10.',
      'Staff wait on slow machines several times a day.',
      'Repairs are adding up to more than half the cost of a replacement.',
      'Your server or firewall is out of warranty or support.',
    ],
    process: [
      { h: 'Assess', p: 'We inventory devices, warranties and operating systems.' },
      { h: 'Plan & budget', p: 'A rolling refresh plan prioritizes the riskiest devices first.' },
      { h: 'Prepare', p: 'New devices are enrolled, encrypted and loaded with your software.' },
      { h: 'Swap & retire', p: 'We move each user’s data, then securely wipe the old device.' },
    ],
    fit: ['Offices with aging or unsupported computers', 'Businesses replacing a server or firewall', 'Companies onboarding several new hires', 'Regulated offices needing documented data destruction'],
    pricing: [
      ['Device choice', 'Business-grade laptops and desktops vary by performance and warranty.'],
      ['Number of devices', 'Setup and migration time scale with the number of users.'],
      ['Data migration', 'Large or complex user profiles take longer to move.'],
      ['Disposal', 'Secure wiping and recycling are included or quoted per device.'],
    ],
    local: { h2: 'Hardware for valley offices and crews', html: `<p>From rugged tablets for construction crews in <a href="/it-support-gypsum-co">Gypsum</a> to quiet, compact workstations for medical offices in <a href="/it-support-edwards-co">Edwards</a>, we match equipment to the work, and schedule swaps outside your busiest hours or season.</p>` },
    faqs: [
      { q: 'What should we do with computers still running Windows 10?', a: 'Windows 10 reached end of support in October 2025. Upgrade eligible computers to Windows 11 and replace those that cannot run it, prioritizing devices that handle sensitive data.' },
    ],
    review: 'Erin Gross',
  },
  'network-wifi-setup': {
    facts: [['Start', 'When the lease is signed'], ['Includes', 'Design to docs'], ['Pricing', 'Fixed project quote'], ['Networks', 'Guest, staff, payments']],
    signs: [
      'You signed a lease on a new office, store or restaurant.',
      'You are renovating and walls will be open soon.',
      'You are adding a second location.',
      'Your current network was assembled piece by piece over years.',
    ],
    fit: ['New offices, retail and restaurants', 'Lodging and residence properties', 'Renovations and expansions', 'Businesses consolidating multiple locations'],
    pricing: [
      ['Square footage and floors', 'Determines the number of access points and switches.'],
      ['Cable drops', 'Each wired location for a desk, phone, camera or access point.'],
      ['Backup internet', 'A second circuit or wireless failover for critical operations.'],
      ['Building construction', 'Thick or older construction needs more equipment and planning.'],
    ],
    local: { h2: 'New locations from Vail to Gypsum', html: `<p>New business space in the valley ranges from village-core retail in <a href="/it-support-vail-co">Vail</a> to industrial units in <a href="/it-support-gypsum-co">Gypsum</a> and offices along the US-6 corridor in <a href="/it-support-eagle-vail-co">Eagle-Vail</a>. Internet lead times vary a lot by building, so we get involved early to keep opening day on schedule.</p>` },
    faqs: [
      { q: 'Should we use Ubiquiti UniFi or Cisco Meraki?', a: 'Both are solid business platforms. UniFi has lower upfront cost and no required licenses; Meraki has subscription licensing with strong cloud management and support. We recommend based on size, budget and who will manage it.' },
    ],
    review: 'Jay Van Voorst',
  },
  'virus-malware-removal': {
    facts: [['Call', '(970) 446-9440'], ['First step', 'Disconnect the device'], ['Includes', 'Root-cause report'], ['Works with', 'Cyber insurers']],
    signs: [
      'Pop-ups, new toolbars or a browser that redirects on its own.',
      'Files that will not open or have strange extensions.',
      'A ransom note on screen or in folders.',
      'Antivirus disabled without anyone doing it.',
      'Contacts receiving emails you did not send.',
    ],
    process: [
      { h: 'Contain', p: 'Isolate infected devices and disable compromised accounts.' },
      { h: 'Investigate', p: 'Identify the threat, how it got in and what it touched.' },
      { h: 'Eradicate & restore', p: 'Remove the malware and restore clean data from backup.' },
      { h: 'Harden', p: 'Close the gap and add protections so it does not happen again.' },
    ],
    fit: ['Businesses with an active infection or ransom note', 'Offices with a compromised email account', 'Companies needing incident documentation for insurers', 'Anyone who clicked something suspicious'],
    pricing: [
      ['Scope of infection', 'One computer versus several devices, servers or shared drives.'],
      ['Backup availability', 'Clean backups make recovery much faster.'],
      ['Account compromise', 'Email and cloud account cleanup adds investigation time.'],
      ['Urgency', 'After-hours emergency response may carry a premium.'],
    ],
    local: { h2: 'Fast response across Eagle County', html: `<p>When minutes matter, remote containment starts as soon as you call, from <a href="/it-support-vail-co">Vail</a> to <a href="/it-support-gypsum-co">Gypsum</a>. If a device needs hands-on work, we come to you or have it dropped off in <a href="/it-support-edwards-co">Edwards</a>.</p>` },
    faqs: [
      { q: 'Should I pay the ransom?', a: 'Talk to your IT provider and cyber-insurance carrier first. Paying does not guarantee recovery, may fund further attacks and can create legal and insurance complications. Clean backups are the reliable path back.' },
    ],
    review: 'Tony Martinez',
  },
  'compliance-cybersecurity': {
    facts: [['Frameworks', 'HIPAA, FTC, PCI'], ['Starts with', 'Risk assessment'], ['Includes', 'Written policies'], ['Supports', 'Cyber insurance']],
    signs: [
      'You handle patient, financial or card data but have never had a risk assessment.',
      'Your written security policies are missing or years out of date.',
      'Your cyber-insurance carrier asked about MFA, EDR or backups.',
      'A client, partner or grant contract now requires security controls.',
      'You would not know whether you were breached until a customer told you.',
    ],
    process: [
      { h: 'Risk assessment', p: 'We document where sensitive data lives, who can reach it and what is missing.' },
      { h: 'Remediation plan', p: 'Gaps are prioritized by risk and cost, in plain language.' },
      { h: 'Implement controls', p: 'MFA, EDR, encryption, backups, email security and access controls go in.' },
      { h: 'Document & maintain', p: 'Policies, evidence and an annual review keep you audit-ready.' },
    ],
    fit: ['Medical, dental and wellness practices', 'Financial advisors, insurance agencies, tax preparers and lenders', 'Businesses that accept card payments', 'Nonprofits and contractors with security requirements in contracts'],
    pricing: [
      ['Framework', 'HIPAA and FTC Safeguards programs require more documentation than general security.'],
      ['Size', 'Users, devices and locations in scope.'],
      ['Current maturity', 'Starting from scratch takes longer than closing a few gaps.'],
      ['Ongoing management', 'Monitoring and annual reviews can be included in managed IT.'],
    ],
    local: { h2: 'Compliance for valley healthcare and finance', html: `<p>Eagle County has a dense concentration of medical practices around <a href="/it-support-edwards-co">Edwards</a> and <a href="/it-support-vail-co">Vail</a>, and a large community of wealth advisors, insurance agencies and title companies serving resort homeowners. These are the businesses we specialize in. See <a href="/industries/healthcare-it">healthcare IT</a> and <a href="/industries/financial-services-it">financial services IT</a>.</p>` },
    faqs: [
      { q: 'How often should a small business do a security risk assessment?', a: 'At least once a year, and whenever you make a significant change such as new systems, a new office or a security incident. HIPAA also expects the risk analysis to stay current.' },
    ],
    review: 'Tony Martinez',
  },
  'cybersecurity-risk-assessment': {
    facts: [['Cost', 'Free, no obligation'], ['Time', 'About an hour'], ['Format', 'On site or remote'], ['Deliverable', 'Written findings + price']],
    signs: [
      'You are not sure every account has MFA.',
      'A cyber-insurance renewal is coming up.',
      'You handle patient, financial or card data and have never had an assessment.',
      'You are switching IT providers and want a baseline.',
      'You have had a phishing scare or a compromised account.',
    ],
    process: [
      { h: 'Book', p: 'Pick a time. Tell us your team size and any compliance requirements.' },
      { h: 'Review', p: 'About an hour, on site or remote, with read-only access where needed.' },
      { h: 'Findings', p: 'Written report with your risk score and top gaps, in priority order.' },
      { h: 'Plan & price', p: 'A flat price to fix the gaps, if you want us to. No obligation.' },
    ],
    fit: ['Businesses with 5 to 50 users', 'Healthcare, financial, insurance and professional firms', 'Businesses renewing cyber insurance', 'Anyone who has never had a security review'],
    pricing: [
      ['Initial assessment', 'Free, including written findings.'],
      ['Formal compliance risk assessment', 'Fixed-price project scoped to HIPAA or FTC Safeguards requirements.'],
      ['Security testing', 'Vulnerability scans and penetration tests quoted by scope.'],
      ['Remediation', 'Flat monthly managed plan or fixed-price project.'],
    ],
    local: { h2: 'Assessments across Eagle County', html: `<p>We run assessments for practices in <a href="/it-support-edwards-co">Edwards</a> and <a href="/it-support-vail-co">Vail</a>, financial and insurance offices in <a href="/it-support-avon-co">Avon</a> and <a href="/it-support-eagle-co">Eagle</a>, and lodging, retail and trades businesses throughout the valley.</p>` },
    faqs: [
      { q: 'What do I need to prepare for the assessment?', a: 'Nothing complicated: a rough count of users and devices, who manages your email and website, and your cyber-insurance application if you have one.' },
    ],
    review: 'Tony Martinez',
  },
  'penetration-testing-vulnerability-scanning': {
    facts: [['Types', 'External, internal, cloud'], ['Scans', 'Monthly to semiannual'], ['Reports', 'Audit-ready'], ['Retest', 'Included']],
    signs: [
      'Your insurer, auditor or a client asked for a pen test report.',
      'You are covered by the FTC Safeguards Rule and have never been tested.',
      'You take card payments and do not know your scan status.',
      'You recently changed your firewall, network or cloud setup.',
      'You want proof your IT provider’s security actually works.',
    ],
    process: [
      { h: 'Scope', p: 'Agree on targets, timing and rules of engagement in writing.' },
      { h: 'Test', p: 'Scanning and hands-on testing, scheduled to avoid disruption.' },
      { h: 'Report', p: 'Executive summary and severity-ranked technical findings.' },
      { h: 'Fix & retest', p: 'Remediation guidance or hands-on fixes, then a retest.' },
    ],
    fit: ['Firms covered by the FTC Safeguards Rule', 'Healthcare practices preparing for HIPAA testing requirements', 'Merchants with PCI scan obligations', 'Businesses answering insurer or client security questionnaires'],
    pricing: [
      ['External footprint', 'Number of public IP addresses, websites and remote access points.'],
      ['Internal scope', 'Number of computers, servers and network segments.'],
      ['Cloud scope', 'Microsoft 365 or other cloud tenants included.'],
      ['Frequency', 'One-time test vs. recurring scanning program.'],
    ],
    local: { h2: 'Testing for valley businesses', html: `<p>We test financial and insurance offices in <a href="/it-support-edwards-co">Edwards</a> and <a href="/it-support-avon-co">Avon</a>, medical practices across the valley, and payment networks for restaurants and lodging in <a href="/it-support-vail-co">Vail</a> and <a href="/it-support-beaver-creek-co">Beaver Creek</a>.</p>` },
    faqs: [
      { q: 'Can you test if another company manages our IT?', a: 'Yes. Independent testing is a good way to verify your current provider’s work. We coordinate timing with them so alerts are expected.' },
    ],
    review: 'Tony Martinez',
  },
  'security-awareness-training': {
    facts: [['Format', 'Short online lessons'], ['Testing', 'Phishing simulations'], ['Proof', 'Completion records'], ['Satisfies', 'HIPAA, FTC, PCI, insurers']],
    signs: [
      'Your insurer or auditor asked for training records.',
      'Staff have clicked phishing links or bought gift cards for a fake “boss.”',
      'New hires never receive any security training.',
      'You handle patient, financial or card data.',
      'Your last training was a one-time video years ago.',
    ],
    process: [
      { h: 'Baseline phish test', p: 'A first simulation shows where your team stands.' },
      { h: 'Enroll', p: 'Staff are enrolled automatically, with an onboarding course.' },
      { h: 'Train & test', p: 'Short recurring lessons and regular phishing simulations.' },
      { h: 'Report', p: 'Completion and phishing reports, plus an annual summary.' },
    ],
    fit: ['Healthcare practices and business associates', 'Financial, tax and insurance firms', 'Merchants taking card payments', 'Any business renewing cyber insurance'],
    pricing: [
      ['Number of users', 'Training and phishing simulations are priced per user.'],
      ['Frequency', 'Monthly or quarterly lessons and simulations.'],
      ['Managed IT clients', 'Training can be bundled into your plan.'],
    ],
    local: { h2: 'Training for valley teams', html: `<p>From year-round offices in <a href="/it-support-edwards-co">Edwards</a> and <a href="/it-support-eagle-co">Eagle</a> to seasonal crews in <a href="/it-support-vail-co">Vail</a> and <a href="/it-support-beaver-creek-co">Beaver Creek</a>, training is delivered online so staff can complete it anywhere. Prefer in person? See our free <a href="/workshops-webinars">workshops</a>.</p>` },
    faqs: [
      { q: 'Can training be done in Spanish?', a: 'Multilingual training content is commonly available from training platforms; ask during your assessment and we will confirm options for your team.' },
    ],
    review: 'Tony Martinez',
  },
  'emergency-it-support': {
    facts: [['Contract', 'None required'], ['Call', '(970) 446-9440'], ['Billing', 'Per incident'], ['Coverage', 'Eagle County + remote']],
    signs: [
      'The internet, Wi-Fi or phones are down and customers are waiting.',
      'You are locked out of email or Microsoft 365.',
      'A server or critical computer will not start.',
      'You see a ransom note, or someone is sending email as you.',
      'Your previous IT person is unavailable or no longer answers.',
    ],
    process: [
      { h: 'Call', p: 'Tell us what is happening. We confirm who you are and what is at risk.' },
      { h: 'Triage', p: 'We prioritize by impact: outages and security incidents first.' },
      { h: 'Fix', p: 'Remote repair when possible, on-site visit from Edwards when not.' },
      { h: 'Summary', p: 'You get a written summary of the cause, the fix and how to prevent it.' },
    ],
    fit: ['Businesses without an IT provider', 'Offices whose IT person is unavailable', 'Second-opinion help when your current provider is not responding', 'Anyone facing an outage or security incident right now'],
    pricing: [
      ['Time required', 'Billed per incident, or from prepaid block hours at a better rate.'],
      ['Remote vs. on site', 'Remote work avoids travel time; on-site visits include travel within Eagle County.'],
      ['After-hours urgency', 'Evenings, weekends and holidays may carry an emergency rate.'],
      ['Parts and equipment', 'Replacement hardware is quoted and approved before purchase.'],
    ],
    local: { h2: 'Emergency coverage across Eagle County', html: `<p>From village businesses in <a href="/it-support-vail-co">Vail</a> and <a href="/it-support-beaver-creek-co">Beaver Creek</a> to contractors in <a href="/it-support-gypsum-co">Gypsum</a>, remote triage starts as soon as you reach us. <a href="/it-support-avon-co">Avon</a>, <a href="/it-support-edwards-co">Edwards</a> and <a href="/it-support-eagle-vail-co">Eagle-Vail</a> are closest to our base for on-site work.</p>` },
    faqs: [
      { q: 'Do you offer after-hours emergency IT support?', a: 'Urgent after-hours help is available by arrangement. Call (970) 446-9440 and describe the issue; managed clients receive priority.' },
      { q: 'Is it cheaper to have a managed plan than to call for emergencies?', a: 'Often, yes. Businesses that need emergency help more than a few times a year usually spend less, and lose less downtime, on a managed plan that prevents problems.' },
    ],
    review: 'Jazzmyn Boykins',
  },
  'it-projects': {
    facts: [['Pricing', 'Fixed, in writing'], ['Cut-overs', 'After hours'], ['Fallback', 'Old system kept'], ['Handover', 'Full documentation']],
    signs: [
      'Your server is aging and you would rather not replace it.',
      'You are moving offices, opening a location or renovating.',
      'Your network is a mix of consumer gear added over the years.',
      'Some computers cannot run Windows 11.',
      'You are merging with or separating from another company.',
    ],
    process: [
      { h: 'Discovery', p: 'We document what exists today and what the finished project must deliver.' },
      { h: 'Fixed quote & plan', p: 'Scope, price, schedule and rollback steps, approved by you.' },
      { h: 'Execute', p: 'Work is staged in advance and cut over after hours or on a weekend.' },
      { h: 'Verify & hand over', p: 'Testing, user check-ins, a support period and complete documentation.' },
    ],
    fit: ['Businesses retiring an on-premise server', 'Offices relocating or opening new locations', 'Companies upgrading networks or firewalls', 'Firms consolidating systems after a merger'],
    pricing: [
      ['Scope', 'Number of users, devices, sites and systems involved.'],
      ['Existing equipment', 'How much can be reused versus replaced.'],
      ['Data volume', 'Large file shares and mailboxes take longer to move and verify.'],
      ['Scheduling', 'Weekend or overnight cut-overs are planned into the quote.'],
    ],
    local: { h2: 'Projects from Vail to Gypsum', html: `<p>We have planned projects around ski season in <a href="/it-support-vail-co">Vail</a>, build-outs along the US-6 corridor in <a href="/it-support-eagle-vail-co">Eagle-Vail</a> and <a href="/it-support-avon-co">Avon</a>, and network upgrades for shops and yards in <a href="/it-support-gypsum-co">Gypsum</a>. See examples in our <a href="/case-studies">case studies</a>.</p>` },
    faqs: [
      { q: 'Can you take over a project another IT company started?', a: 'Yes. We start by documenting what has been done and what remains, then quote the rest of the work at a fixed price.' },
    ],
    review: 'Jay Van Voorst',
  },
  'automation-ai-enablement': {
    facts: [['Starts with', 'Workflow review'], ['Builds on', 'Tools you already pay for'], ['AI tools', 'Copilot, ChatGPT'], ['Safety', 'Data controls first']],
    signs: [
      'New leads wait hours or days for a first reply.',
      'Staff retype the same information into two or three systems.',
      'Appointment no-shows are costing you money.',
      'Employees are already pasting work into consumer AI tools.',
      'The same internal questions get asked over and over.',
    ],
    process: [
      { h: 'Workflow review', p: 'We map the repetitive tasks and estimate the hours each one costs.' },
      { h: 'Prioritize', p: 'The highest-value, lowest-risk automation is built first.' },
      { h: 'Build & secure', p: 'Automations and AI tools are set up with proper data controls.' },
      { h: 'Train & measure', p: 'Staff are trained and time saved is tracked.' },
    ],
    fit: ['Service businesses with lots of leads and appointments', 'Offices drowning in data entry', 'Teams already experimenting with AI', 'Regulated businesses that need AI with guardrails'],
    pricing: [
      ['Number of workflows', 'Each automation is scoped and quoted individually.'],
      ['Integrations', 'Connecting several apps adds build and testing time.'],
      ['AI licensing', 'Copilot or ChatGPT business licenses are billed per user.'],
      ['Ongoing support', 'Monitoring and updates keep automations working as tools change.'],
    ],
    local: { h2: 'Automation for seasonal and service businesses', html: `<p>Seasonal businesses benefit most: automated onboarding for winter staff, instant replies to booking inquiries, and reminders that cut no-shows. Trades and service companies along the <a href="/it-support-eagle-vail-co">Eagle-Vail</a> corridor and in <a href="/it-support-avon-co">Avon</a> use automation to follow up on every estimate without adding office staff.</p>` },
    faqs: [
      { q: 'What should we automate first?', a: 'Start with the task that repeats most often and has a clear cost, such as lead follow-up, appointment reminders or moving data between two systems. Quick wins build confidence for bigger projects.' },
    ],
    review: 'Anthony Atencio',
  },
};
