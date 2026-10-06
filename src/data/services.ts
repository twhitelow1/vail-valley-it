// Service page content. One entry = one URL at vailvalleyit.com/<slug>.
// Keyword map source: VailValleyIT_Sitemap_SEO_Strategy.xlsx (Sheet 2).
// Rules: primary keyword in title, H1 and the first 100 words (the `answer`).
// `answer` is written to be quotable verbatim by AI Overviews / ChatGPT / Perplexity.

export type Faq = { q: string; a: string };
export type Section = { h2: string; html: string };
export const serviceGroups = ['Managed IT', 'Security & Compliance', 'Networks & Communication', 'Support & Projects', 'Automation & AI', 'Digital Marketing'] as const;
export type ServiceGroup = (typeof serviceGroups)[number];
export type Service = {
  slug: string;
  name: string;
  group: ServiceGroup;
  icon: string;
  tier: 1 | 2 | 3;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  answer: string;
  card: string;
  sections: Section[];
  includes: string[];
  faqs: Faq[];
  related: string[];
  // Published starting price. Rendered on the page and as an Offer in the Service schema.
  price?: { amount: number; unit: 'month' | 'hour'; text: string; note: string };
};

export const services: Service[] = [
  {
    slug: 'managed-it-services',
    name: 'Managed IT Services',
    group: 'Managed IT',
    icon: 'headset',
    tier: 1,
    title: 'Managed IT Services in Vail Valley, CO | Vail Valley IT',
    description: 'Proactive managed IT services for Vail Valley businesses — 24/7 monitoring, help desk, and strategic IT planning from a local Eagle County team.',
    h1: 'Managed IT Services in the Vail Valley',
    primaryKeyword: 'managed IT services Vail Valley',
    answer: 'Vail Valley IT provides managed IT services to small and mid-sized businesses across the Vail Valley and Eagle County for a flat monthly fee, with plans starting at $297 a month. That covers 24/7 device and network monitoring, security patching, a 24/7 help desk and security operations, zero trust endpoint security, Microsoft 365 administration, cloud backups, and a technology roadmap reviewed with you every quarter.',
    card: 'Flat-fee monitoring, layered security, 24/7 help desk and planning so your systems run and your team stays productive.',
    sections: [
      {
        h2: 'What a managed IT services company actually does',
        html: `<p>A managed service provider (MSP) takes ownership of your technology the way an in-house IT department would, without the salary. Instead of calling someone after a laptop dies or email stops syncing, you have a team watching your systems around the clock and fixing problems before your staff notices them.</p>
<p>For a typical Eagle County office of five to fifty people, that means every computer, server, firewall, Wi-Fi access point and Microsoft 365 account is enrolled in monitoring. Patches roll out on a schedule. Backups are tested, not assumed. New hires get a ready-to-go laptop and accounts on day one, and departing employees lose access the same afternoon.</p>
<p>It is the opposite of break-fix. Break-fix IT is paid by the hour when something fails, which means your provider earns more when your systems are unstable. Managed IT is paid by the month, so we only do well when your technology stays quiet.</p>`,
      },
      {
        h2: 'Where our approach is different: a security baseline for every client',
        html: `<p>We believe every client needs a baseline of their security risks covered, no matter how small the team or which plan they choose. So instead of selling security as add-ons, we build it into every tier.</p>
<ul>
<li><strong>Zero trust endpoint security.</strong> Advanced endpoint protection uses zero trust principles, so security is layered at the perimeter of each device, not just the office network. Nothing runs or connects just because it is already inside.</li>
<li><strong>Protection that travels with your people.</strong> Much of today’s workforce works remotely, from home, a coffee shop or a hotel. Our security practices go with the device, regardless of the network it connects to.</li>
<li><strong>Secure Access Service Edge (SASE) on every device.</strong> Traffic is encrypted wherever your team works, and backups run to the cloud, including backups of your cloud environments such as Microsoft 365.</li>
<li><strong>A cybersecurity warranty.</strong> Our stack is strong enough that we back it with a warranty, with coverage starting at $100,000 when our security stack and policies are in place. It complements any cyber insurance you already carry.</li>
<li><strong>24/7 help desk and security operations on every tier.</strong> Round-the-clock support and security monitoring are included at every level, so you do not pay extra for what we believe every client needs as AI-driven threats grow stronger.</li>
</ul>
<p>Warranty coverage is subject to the terms of your service agreement.</p>`,
      },
      {
        h2: 'Built for how businesses run in a mountain resort economy',
        html: `<p>Running a business between Vail Pass and Dotsero is different from running one in Denver. Staff counts swing between ski season and mud season. Owners split time between the valley and somewhere else. Seasonal employees need accounts for four months, then need to be locked out cleanly. A snowstorm on I-70 can make an on-site visit a half-day trip.</p>
<p>We design around that. Onboarding and offboarding follow a checklist that runs through automation, so a December hiring rush does not leave stale accounts sitting open in April. Remote management means most fixes happen in minutes without anyone driving. And when hands-on work is needed, a local technician who knows the difference between Edwards and Eagle-Vail shows up.</p>
<p>Many of our managed clients are <a href="/industries/healthcare-it">healthcare practices</a> and <a href="/industries/financial-services-it">financial and insurance offices</a>, where a stolen laptop or an open account is a compliance event, not just an inconvenience. That is why <a href="/compliance-cybersecurity">security and compliance</a> is built into every plan instead of sold as an add-on.</p>`,
      },
      {
        h2: 'Faster resolution through automation, with people where it matters',
        html: `<p>Routine, repeatable requests such as a new user, a password reset or an MFA reset are handled by automation once we have verified the person asking is authorized. That brings those requests down to roughly ten minutes instead of the one to two hours they often take in a human-only queue.</p>
<p>Everything else goes to a real technician, faster, because the automation has already gathered the device details, user history and error logs. You never have to argue with a chatbot to reach a person.</p>`,
      },
      {
        h2: 'How onboarding works',
        html: `<p>Switching to managed IT, or switching providers, follows the same four steps:</p>
<ol>
<li><strong>Goals and a free technology assessment.</strong> We learn where the business is going, then inventory devices, accounts, licenses and backups, and run a security risk assessment.</li>
<li><strong>Written findings and a flat quote.</strong> You see what is at risk, what is wasted and exactly what the monthly price covers.</li>
<li><strong>Onboarding.</strong> Monitoring agents, security tools and documentation go in, usually within two to three weeks, with no disruption to your day.</li>
<li><strong>Quarterly payback reviews.</strong> We meet every quarter to review what we fixed, what we cleaned up or cancelled, what we automated, open risks and the next twelve months of technology spending.</li>
</ol>`,
      },
    ],
    includes: [
      '24/7 monitoring and alerting for computers, servers and network gear',
      'Scheduled Windows, macOS and third-party patching',
      'Today’s best stance against ransomware: a layered security stack including zero trust endpoint security',
      '24/7 help desk and security operations on every tier',
      'Secure Access Service Edge (SASE) encrypting traffic on every device',
      'Cybersecurity warranty with coverage starting at $100,000',
      'Microsoft 365 / Google Workspace administration',
      'Cloud backups of devices and your cloud environments, with regular restore tests',
      'Automated user onboarding and offboarding',
      'Vendor management for internet, phones, printers and line-of-business software',
      'Quarterly technology roadmap and budget planning',
    ],
    faqs: [
      { q: 'How much do managed IT services cost for a small business in Vail?', a: 'Vail Valley IT managed IT plans start at $297 a month, including a secure business email and productivity suite, endpoint protection and a secure AI platform. The final price depends on the number of users and devices, servers, locations and compliance requirements, and is quoted as a flat monthly fee after a free technology assessment.' },
      { q: 'What is the difference between managed IT and break-fix support?', a: 'Break-fix support bills by the hour after something breaks. Managed IT is a flat monthly fee for monitoring, maintenance, security and help desk, which shifts the incentive toward preventing problems rather than billing for them.' },
      { q: 'Do you offer managed IT for businesses with fewer than 10 employees?', a: 'Yes. Most of our clients are offices with roughly 5 to 50 people, and many have about ten users and devices. Small teams often benefit most because nobody on staff has time to be the part-time IT person.' },
      { q: 'Can you work alongside our existing IT person?', a: 'Yes. We often run co-managed IT, where we provide monitoring, security tooling and after-hours coverage while your internal person handles day-to-day requests and local knowledge.' },
      { q: 'What is zero trust endpoint security?', a: 'Zero trust endpoint security treats every device, user and application as untrusted until verified. Protection is layered on each device itself rather than relying only on the office network, so laptops stay protected at home, in a hotel or on public Wi-Fi.' },
      { q: 'What is SASE?', a: 'Secure Access Service Edge (SASE) combines network security and secure connectivity in the cloud. Vail Valley IT uses it on every managed device so traffic is encrypted and protected no matter which network an employee connects to.' },
      { q: 'Does Vail Valley IT offer a cybersecurity warranty?', a: 'Yes. Managed IT clients running our security stack and policies are covered by a cybersecurity warranty starting at $100,000 in coverage, which complements any cyber insurance the business already has. Coverage is subject to the terms of the service agreement.' },
      { q: 'Is 24/7 help desk support included?', a: 'Yes. A 24/7 help desk and security operations are included on every managed IT tier at no extra charge.' },
      { q: 'Who provides managed IT services in the Vail Valley?', a: 'Vail Valley IT is a locally based managed IT provider in Edwards, Colorado, serving Vail, Avon, Beaver Creek, Edwards, Eagle-Vail, Minturn, Eagle and Gypsum. It is the local IT brand of DubLow Digital.' },
    ],
    related: ['compliance-cybersecurity', 'it-data-protection', 'it-consulting-support'],
    price: { amount: 297, unit: 'month', text: 'Plans start at $297/month', note: 'Includes a secure business email and productivity suite, zero trust endpoint protection, a secure AI platform and 24/7 help desk and security operations. Your final flat price depends on users, devices and compliance needs.' },
  },
  {
    slug: 'it-consulting-support',
    name: 'IT Consulting & Support',
    group: 'Support & Projects',
    icon: 'compass',
    tier: 1,
    title: 'IT Consulting & Support Services in Vail, CO | Vail Valley IT',
    description: 'Get expert IT consulting and responsive support for your Vail Valley business — strategic planning, vendor management & on-call help from local techs.',
    h1: 'IT Consulting & Support in Vail, CO',
    primaryKeyword: 'IT consulting Vail CO',
    answer: 'Vail Valley IT offers IT consulting and on-call support in Vail, CO for businesses that need expert help without a full managed contract. We plan technology projects, untangle vendor problems, review security and answer the question every owner eventually asks: what should we actually be spending on IT, and on what?',
    card: 'Strategic planning, vendor management and on-call help from local technicians, project by project.',
    sections: [
      {
        h2: 'When consulting makes more sense than a monthly plan',
        html: `<p>Not every business is ready for <a href="/managed-it-services">managed IT services</a>. You might have a capable office manager who handles the basics, a single big project coming up, or an IT provider you want a second opinion on. Consulting gives you senior-level advice and hands-on help for exactly the hours you need.</p>
<p>Common engagements include opening or moving an office (see <a href="/it-projects">IT projects</a>), replacing an aging server, choosing between Microsoft 365 and Google Workspace, preparing for a cyber-insurance application, consolidating a pile of software subscriptions, and auditing an outgoing provider before you switch.</p>`,
      },
      {
        h2: 'Local vs. national IT consultants in Eagle County',
        html: `<p>Some regional and national firms serve Vail from offices in Denver, Grand Junction or out of state. That works for remote tasks. It does not work well when your Comcast modem is blinking in Avon at 7 a.m. on a powder day and the closest technician is three hours away over Vail Pass.</p>
<p>Vail Valley IT is based in Edwards. We know which buildings in the valley have unreliable last-mile internet, which lodging properties run which reservation systems, and how long it actually takes to get from Gypsum to East Vail in February. That local context shows up in faster, better-informed recommendations.</p>`,
      },
      {
        h2: 'Vendor management: one call instead of five',
        html: `<p>A ten-person office can easily have a dozen technology vendors: internet, phones, copiers, Microsoft licensing, a practice-management or accounting platform, security cameras, a website host. When something breaks, each vendor blames another. We take ownership of those calls, hold vendors to their contracts and give you one number to dial.</p>`,
      },
    ],
    includes: [
      'Technology assessments and written roadmaps',
      'Project planning for office moves, server replacements and cloud migrations',
      'Vendor selection, negotiation and escalation',
      'Second-opinion reviews of current IT providers',
      'Cyber-insurance questionnaire preparation',
      'Block-hour or per-incident on-call support',
    ],
    faqs: [
      { q: 'Who should I call for IT problems in Vail?', a: 'For a business, call a local IT provider that can work remotely and still send a technician on site. Vail Valley IT is based in Edwards and supports businesses throughout Vail, Avon, Beaver Creek, Eagle and the rest of Eagle County at (970) 446-9440.' },
      { q: 'Do you offer hourly IT support without a contract?', a: 'Yes. We offer per-incident and prepaid block-hour support for businesses that are not on a managed plan. Managed clients receive priority response.' },
      { q: 'Can you review our current IT provider?', a: 'Yes. A second-opinion review covers security settings, backup health, licensing, documentation and what you are paying for. You receive a written report whether or not you switch.' },
      { q: 'What is the difference between IT consulting and managed IT?', a: 'Consulting is advice and project work billed as needed. Managed IT is ongoing, flat-fee responsibility for monitoring, maintenance, security and support. Many clients start with consulting and move to managed IT once they see the value.' },
    ],
    related: ['emergency-it-support', 'it-projects', 'managed-it-services'],
  },
  {
    slug: 'business-network-wifi-support',
    name: 'Business Network & Wi-Fi Support',
    group: 'Networks & Communication',
    icon: 'wifi',
    tier: 2,
    title: 'Business Network & Wi-Fi Support in Vail Valley | Vail Valley IT',
    description: 'Reliable business network and Wi-Fi setup, troubleshooting & support for offices, retail and hospitality across Vail, Avon and Edwards, CO.',
    h1: 'Business Network & Wi-Fi Support in Vail, CO',
    primaryKeyword: 'business WiFi setup Vail CO',
    answer: 'Vail Valley IT supports business networks and Wi-Fi in Vail, CO and across Eagle County. We troubleshoot slow or dropping Wi-Fi, fix dead zones, separate guest and staff traffic, manage firewalls and keep your existing network monitored so outages are caught before customers or employees feel them.',
    card: 'Troubleshooting, monitoring and tuning for the office, retail or lodging network you already have.',
    sections: [
      {
        h2: 'Why office Wi-Fi is slow in the valley (and how we fix it)',
        html: `<p>Most slow Wi-Fi we see in Eagle County is not the internet plan. It is a consumer router from the internet provider trying to cover a space it was never designed for, access points stacked on the same channel, a guest network that shares bandwidth with the point-of-sale system, or a firmware bug nobody has patched in three years.</p>
<p>We start with a measurement, not a guess: a site walk with a Wi-Fi analyzer, a look at the firewall logs and a test of the actual circuit coming into the building. Then we fix the cause, whether that is channel planning, an additional access point, a properly configured business firewall, or a conversation with your internet provider backed by real data.</p>`,
      },
      {
        h2: 'Networks for lodging, restaurants and retail',
        html: `<p>Hospitality networks carry a lot: guest Wi-Fi, staff devices, card terminals, reservation and property-management systems, cameras, smart locks and sometimes digital signage. Those need to be segmented so a guest on a phone cannot reach your payment network, which also keeps you on the right side of PCI requirements.</p>
<p>For multi-building properties, condo associations and residence clubs from Beaver Creek to Lionshead, we manage the network centrally so one dashboard shows every access point and switch, and problems are visible before a guest complains at the front desk.</p>`,
      },
      {
        h2: 'Opening a new space instead?',
        html: `<p>If you are building out a new office, store or restaurant rather than fixing an existing one, see <a href="/network-wifi-setup">network & Wi-Fi setup for new offices</a>, which covers design, cabling coordination and installation.</p>`,
      },
    ],
    includes: [
      'Wi-Fi site surveys and dead-zone remediation',
      'Business firewall management and updates',
      'Guest, staff and payment network segmentation (VLANs)',
      'Network monitoring with outage alerts',
      'Internet provider escalation and failover planning',
      'UniFi, Meraki and other business-grade platforms',
    ],
    faqs: [
      { q: 'Why is my office Wi-Fi slow in Vail?', a: 'The most common causes are a consumer-grade router covering too much space, overlapping access point channels, guest traffic sharing bandwidth with business systems, and outdated firmware. A Wi-Fi survey and firewall review usually pinpoints the cause in one visit.' },
      { q: 'What is the best commercial Wi-Fi setup for a mountain lodge or restaurant?', a: 'Use business-grade access points managed from one controller, a business firewall, and separate networks for guests, staff and payment systems. Thick log or stone walls common in mountain buildings usually require more access points placed closer together than a typical office.' },
      { q: 'Can you manage the network we already have?', a: 'Usually, yes. We can take over management of most business-grade equipment. If gear is end-of-life or unsupported we will tell you which pieces matter most to replace first.' },
    ],
    related: ['network-wifi-setup', 'voip-phone-systems', 'managed-it-services'],
  },
  {
    slug: 'microsoft-365-email-migration',
    name: 'Microsoft 365 Email Migration',
    group: 'Support & Projects',
    icon: 'cloud',
    tier: 1,
    title: 'Microsoft 365 Email Migration Services | Vail Valley IT',
    description: 'Seamless Microsoft 365 & email migration for Vail Valley businesses — zero downtime setup, data protection and staff training included.',
    h1: 'Microsoft 365 Email Migration in Vail, CO',
    primaryKeyword: 'Microsoft 365 migration Vail CO',
    answer: 'Vail Valley IT handles Microsoft 365 migration for businesses in Vail, CO and throughout Eagle County. We move email, calendars, contacts and files from GoDaddy, Google Workspace, an old Exchange server or another tenant into Microsoft 365 with no lost mail, then lock the new tenant down with MFA and security settings most migrations skip.',
    card: 'Move email, calendars and files to Microsoft 365 with no lost mail and security configured from day one.',
    sections: [
      {
        h2: 'How to migrate to Microsoft 365 without losing email',
        html: `<p>Email gets lost in migrations when the cut-over is rushed: DNS records change before mailboxes are copied, nobody tests shared mailboxes or delegated calendars, and the old system is cancelled the same week. Our process avoids all three.</p>
<ol>
<li><strong>Inventory.</strong> Every mailbox, alias, shared mailbox, distribution list and calendar delegation is documented.</li>
<li><strong>Pre-stage.</strong> Mail and calendars copy in the background while you keep working in the old system.</li>
<li><strong>Cut-over.</strong> We switch MX and related DNS records after hours, then run a final sync to catch anything that arrived during the change.</li>
<li><strong>Verify and train.</strong> We check every user on Outlook desktop and phone, and show staff what changed.</li>
<li><strong>Retire.</strong> The old system stays read-only for a safety period before it is cancelled.</li>
</ol>
<p>Bundling the migration with other work, such as retiring a file server? See <a href="/it-projects">IT projects & migrations</a>.</p>`,
      },
      {
        h2: 'Security settings most migrations skip',
        html: `<p>A new Microsoft 365 tenant is not secure by default. We enable multi-factor authentication for every account, block legacy authentication, set up SPF, DKIM and DMARC so your domain cannot be easily spoofed, and turn on audit logging. These steps are the same ones cyber-insurance applications ask about, and the same ones that stop the most common business email compromise attacks we see in the valley. Pair the migration with <a href="/email-security-spam-protection">email security & spam protection</a> for advanced phishing filtering.</p>`,
      },
      {
        h2: 'Licensing without the waste',
        html: `<p>Most small businesses are on the wrong Microsoft 365 plan, either overpaying for features nobody uses or missing the security features they need. Business Premium is often the right fit for regulated offices because it includes device management and conditional access. We size licenses user by user so you only pay for what each person needs.</p>`,
      },
    ],
    includes: [
      'Migrations from Google Workspace, GoDaddy, IMAP, Exchange and tenant-to-tenant',
      'Mailbox, calendar, contact, shared mailbox and OneDrive/SharePoint moves',
      'After-hours DNS cut-over with final delta sync',
      'MFA, conditional access and legacy-auth blocking',
      'SPF, DKIM and DMARC configuration',
      'License right-sizing and staff training',
    ],
    faqs: [
      { q: 'How long does a Microsoft 365 migration take for a small business?', a: 'For an office of about 10 to 25 users, planning and pre-staging usually take one to two weeks and the cut-over itself happens over a single evening or weekend. Large mailboxes or file shares add time.' },
      { q: 'How much does an Office 365 migration cost for a small business?', a: 'Cost depends mostly on the number of mailboxes, where they are coming from and whether files are moving too. Vail Valley IT quotes migrations as a fixed project price after a short discovery call, so there are no hourly surprises.' },
      { q: 'Will there be email downtime during the migration?', a: 'No meaningful downtime. Mail is copied in advance and the switch happens after hours, followed by a final sync. Most staff simply open Outlook the next morning and keep working.' },
      { q: 'Can you move us from Google Workspace to Microsoft 365?', a: 'Yes. Gmail, Google Calendar, Contacts and Google Drive can all be moved to Microsoft 365, and we map Google groups and shared drives to their Microsoft equivalents.' },
    ],
    related: ['email-security-spam-protection', 'managed-it-services', 'compliance-cybersecurity'],
  },
  {
    slug: 'email-security-spam-protection',
    name: 'Email Security & Spam Protection',
    group: 'Security & Compliance',
    icon: 'mail-shield',
    tier: 1,
    title: 'Email Security & Spam Protection | Vail Valley IT',
    description: 'Protect your business from phishing, spam and email-based attacks with advanced email security services from Vail Valley IT.',
    h1: 'Email Security & Spam Protection for Vail Valley Businesses',
    primaryKeyword: 'email security services Vail Valley',
    answer: 'Vail Valley IT provides email security services for businesses across the Vail Valley, combining advanced phishing and spam filtering, SPF, DKIM and DMARC authentication, account takeover detection and short staff training. Email is how most attacks on small businesses start, so it is the first place we lock down.',
    card: 'Stop phishing, spoofing and spam before it reaches inboxes, and catch compromised accounts fast.',
    sections: [
      {
        h2: 'How to stop phishing emails at your business',
        html: `<p>Built-in Microsoft 365 and Google filtering catches obvious spam, but targeted phishing gets through: a fake invoice from a vendor you really use, a "DocuSign" link, a message that looks like it came from the owner asking the bookkeeper to buy gift cards. Stopping those takes layers.</p>
<ul>
<li><strong>Advanced filtering</strong> that inspects links and attachments at the moment someone clicks, not just when the email arrives.</li>
<li><strong>Domain authentication</strong> (SPF, DKIM and DMARC) so criminals cannot easily send mail that appears to come from your domain.</li>
<li><strong>Impersonation protection</strong> that flags lookalike domains and display-name tricks.</li>
<li><strong>Account takeover detection</strong> that alerts on impossible-travel sign-ins and suspicious inbox forwarding rules.</li>
<li><strong>Short, regular staff training</strong> with simulated phishing so people recognize the real thing.</li>
</ul>`,
      },
      {
        h2: 'Business email compromise in a small market',
        html: `<p>In a valley where everyone knows everyone, attackers lean on trust. Real estate closings, contractor payments and property-management wire transfers are frequent targets because a single altered bank detail in a reply thread can redirect a large payment. We configure alerts for new forwarding rules and unusual sign-ins, and help you set a simple verbal-verification policy for any payment change.</p>
<p>If a mailbox has already been compromised, call us immediately. We reset access, revoke sessions, remove malicious rules and review what was sent. See <a href="/virus-malware-removal">virus & malware removal</a> for broader incident response.</p>`,
      },
    ],
    includes: [
      'Advanced phishing, malware and spam filtering',
      'SPF, DKIM and DMARC setup and reporting',
      'Impersonation and lookalike-domain protection',
      'Suspicious sign-in and forwarding-rule alerts',
      'Phishing simulations and security awareness training',
      'Compromised mailbox response',
    ],
    faqs: [
      { q: 'What is the best spam filter for Microsoft 365?', a: 'Microsoft Defender for Office 365, included in Microsoft 365 Business Premium, is a strong baseline when configured correctly. Many businesses add a dedicated email security layer for better impersonation detection. The right choice depends on your risk and compliance requirements.' },
      { q: 'What is DMARC and does my small business need it?', a: 'DMARC is a DNS record that tells receiving mail servers what to do with email that claims to be from your domain but fails authentication. Yes, every business should have it. Major mailbox providers now expect it, and it makes your domain much harder to spoof.' },
      { q: 'What should I do if an employee clicked a phishing link?', a: 'Disconnect the device from the network, have the employee change their password from a different device, and call your IT provider right away so sessions can be revoked and the account reviewed for forwarding rules or sent mail.' },
    ],
    related: ['microsoft-365-email-migration', 'compliance-cybersecurity', 'virus-malware-removal'],
  },
  {
    slug: 'voip-phone-systems',
    name: 'VoIP Phone Systems',
    group: 'Networks & Communication',
    icon: 'phone',
    tier: 2,
    title: 'VoIP Phone Systems for Business in Vail, CO | Vail Valley IT',
    description: 'Modern, reliable VoIP phone systems for Vail Valley businesses — easy setup, mobile apps, and local support included.',
    h1: 'VoIP Phone Systems for Vail, CO Businesses',
    primaryKeyword: 'VoIP phone systems Vail CO',
    answer: 'Vail Valley IT installs and supports VoIP phone systems for businesses in Vail, CO and across Eagle County. We port your existing numbers, set up auto-attendants and call routing, connect desk phones and mobile apps, and make sure your network can carry clear calls so your phones work the same in the office, at home or on the hill.',
    card: 'Cloud phone systems with number porting, mobile apps and call quality your network can actually support.',
    sections: [
      {
        h2: 'Why businesses in the valley are moving to cloud phones',
        html: `<p>Traditional phone lines are being retired, and on-premise phone systems are expensive to maintain. A hosted VoIP system replaces both with a monthly per-user subscription. Calls ring on desk phones, laptops and mobile apps at the same time, which matters when owners and managers are rarely sitting at the front desk.</p>
<p>Seasonal businesses benefit most: add extensions for winter staff, remove them in spring, and change after-hours greetings for holidays and storm closures from a phone.</p>`,
      },
      {
        h2: 'Call quality starts with the network',
        html: `<p>Most VoIP complaints are network problems, not phone problems. Choppy calls usually trace back to a busy internet connection without traffic prioritization, or Wi-Fi that drops packets. Before any install we test the connection and configure quality-of-service on the firewall so voice traffic gets priority. That is why phone systems sit next to <a href="/business-network-wifi-support">network & Wi-Fi support</a> in what we do.</p>`,
      },
    ],
    includes: [
      'Hosted VoIP platform selection and setup',
      'Number porting from existing carriers',
      'Auto-attendants, hunt groups and after-hours routing',
      'Desk phones, softphones and mobile apps',
      'Network readiness testing and QoS configuration',
      'Ongoing changes, moves and user support',
    ],
    faqs: [
      { q: 'What is the best VoIP provider for a small office in Vail?', a: 'The best provider depends on whether you need call recording, texting, integration with Microsoft Teams or a CRM, and how many users you have. We recommend a short list based on those needs and handle setup and support so you are not stuck with a vendor help line.' },
      { q: 'How much does a VoIP system cost for a small business?', a: 'Hosted VoIP typically costs a monthly per-user fee plus any desk phones you choose to buy. Many offices reduce phone costs compared with traditional lines, especially once unused lines are removed.' },
      { q: 'Can I keep my existing business phone number?', a: 'Yes. Existing numbers can almost always be ported to a VoIP provider. We manage the port request and schedule the switch to avoid missed calls.' },
    ],
    related: ['business-network-wifi-support', 'network-wifi-setup', 'managed-it-services'],
  },
  {
    slug: 'it-data-protection',
    name: 'IT & Data Protection',
    group: 'Security & Compliance',
    icon: 'database',
    tier: 1,
    title: 'IT & Data Protection Services | Vail Valley IT',
    description: 'Keep your business data safe with backup, disaster recovery and cybersecurity infrastructure built for Vail Valley companies.',
    h1: 'Data Backup & Protection Services in the Vail Valley',
    primaryKeyword: 'data backup and protection services Vail Valley',
    answer: 'Vail Valley IT provides data backup and protection services for businesses in the Vail Valley, including automated backups of computers, servers and Microsoft 365, offsite and immutable copies that ransomware cannot encrypt, regular restore tests, and a written recovery plan that says exactly how long it takes to get you running again.',
    card: 'Automated, tested backups and a written recovery plan, so losing a laptop or a server is an inconvenience, not a crisis.',
    sections: [
      {
        h2: 'What happens if your business loses all its data?',
        html: `<p>For most small businesses, the honest answer is that nobody knows, because the backup has never been tested. We regularly meet offices where the backup drive stopped working months ago, where Microsoft 365 is not backed up at all because staff assumed Microsoft does it, or where the only copy of the accounting file lives on one desktop.</p>
<p>Data protection answers three questions in writing: what is backed up, where the copies live, and how long a full recovery takes. Then we prove it with scheduled restore tests.</p>`,
      },
      {
        h2: 'The 3-2-1 approach, with ransomware in mind',
        html: `<p>We follow the 3-2-1 rule: three copies of important data, on two different types of storage, with one copy offsite. On top of that, at least one copy is immutable, meaning it cannot be changed or deleted for a set period, even by an administrator account. That is what protects you when ransomware or a compromised login tries to destroy backups before encrypting your files.</p>
<p>Microsoft 365 and Google Workspace get their own backup, because their built-in retention is not designed for recovering from a malicious deletion weeks after the fact.</p>`,
      },
      {
        h2: 'Recovery planning for mountain realities',
        html: `<p>Power outages, wildfire evacuations and a burst pipe in a ski-season rental are real risks here. A good recovery plan includes how staff keep working from home or another office, which systems come back first, and who makes which call. For regulated businesses it also documents what HIPAA, the FTC Safeguards Rule or your cyber-insurance carrier requires. See <a href="/compliance-cybersecurity">compliance & cybersecurity</a>.</p>`,
      },
    ],
    includes: [
      'Automated backup of PCs, Macs, servers and NAS devices',
      'Microsoft 365 / Google Workspace backup (mail, OneDrive, SharePoint, Teams)',
      'Immutable, offsite backup copies',
      'Monthly backup reports and scheduled restore tests',
      'Written disaster recovery and business continuity plan',
      'Defined recovery time and recovery point objectives',
    ],
    faqs: [
      { q: 'What is the best backup solution for a small business office?', a: 'A solution that backs up every device and cloud account automatically, keeps an immutable offsite copy, and is tested on a schedule. The brand matters less than whether someone is verifying restores every month.' },
      { q: 'Does Microsoft back up my Microsoft 365 data?', a: 'Microsoft keeps the service running and offers limited retention, but it is not a full backup for recovering from accidental or malicious deletion. A separate Microsoft 365 backup is recommended for most businesses.' },
      { q: 'How often should a small business test its backups?', a: 'At least quarterly for a full test, with automated verification of individual backups daily. Vail Valley IT includes restore tests in every managed data protection plan.' },
    ],
    related: ['compliance-cybersecurity', 'managed-it-services', 'virus-malware-removal'],
  },
  {
    slug: 'remote-it-consultation',
    name: 'Remote IT Consultation',
    group: 'Support & Projects',
    icon: 'video',
    tier: 3,
    title: 'Remote IT Consultation Services | Vail Valley IT',
    description: 'Fast remote IT consultation for Vail Valley businesses — get expert guidance and troubleshooting without waiting for an on-site visit.',
    h1: 'Remote IT Consultation for Vail Valley Businesses',
    primaryKeyword: 'remote IT consultation Vail Valley',
    answer: 'A remote IT consultation from Vail Valley IT is a scheduled video session with a senior technician to plan a project, review your setup, or get a straight answer on a technology decision. It is for advice and planning; if something is broken right now, remote tech support is the faster path.',
    card: 'Book a video session to plan a project, review your setup or get a straight answer on a tech decision.',
    sections: [
      {
        h2: 'Consultation, not a repair ticket',
        html: `<p>Sometimes you do not need someone to fix anything. You need someone to explain your options before you spend money. A remote consultation is a focused 30 or 60 minute video call where we look at your situation together, share our screen, and leave you with clear next steps in writing.</p>
<p>Typical topics include whether to replace or repair a server, which Microsoft 365 plan fits your team, how to answer a cyber-insurance questionnaire, whether a vendor quote is reasonable, and how to start using AI tools without exposing client data.</p>
<p>Need a hands-on fix instead? Go to <a href="/remote-tech-support">remote tech support</a>, or <a href="/emergency-it-support">emergency IT support</a> if something is down right now.</p>`,
      },
      {
        h2: 'Is remote IT help as good as on-site?',
        html: `<p>For planning, reviews and most software and account issues, yes, and it is faster because nobody is driving I-70. On-site work is still the right call for cabling, hardware installs and network problems that need someone to physically trace a line. We will tell you honestly which one your situation needs.</p>`,
      },
    ],
    includes: [
      '30 or 60 minute scheduled video sessions',
      'Screen-share review of your systems or vendor quotes',
      'Written summary with recommended next steps',
      'Follow-up questions by email',
    ],
    faqs: [
      { q: 'Can I get IT help without an on-site visit?', a: 'Yes. Most planning questions and many technical problems can be handled over a secure video call or remote session. Vail Valley IT will tell you up front if a site visit is actually needed.' },
      { q: 'What do I need for a remote IT consultation?', a: 'A computer with a webcam or a phone, and a list of what you want to cover. If we need to look at a specific system, we will send a secure, one-time screen-share link.' },
    ],
    related: ['remote-tech-support', 'it-consulting-support', 'automation-ai-enablement'],
  },
  {
    slug: 'remote-tech-support',
    name: 'Remote Tech Support',
    group: 'Support & Projects',
    icon: 'monitor',
    tier: 3,
    title: 'Remote Tech Support for Business in Vail, CO | Vail Valley IT',
    description: 'Get fast, secure remote tech support for your Vail Valley business — most issues resolved the same day, no site visit required.',
    h1: 'Remote Tech Support for Vail, CO Businesses',
    primaryKeyword: 'remote tech support Vail CO',
    answer: 'Vail Valley IT provides remote tech support for businesses in Vail, CO and across Eagle County. A technician connects securely to the affected computer, with your permission, and fixes problems like Outlook errors, printer issues, slow PCs, software installs and account lockouts, usually the same day and without anyone driving to your office.',
    card: 'A technician connects securely and fixes the problem, usually the same day, no site visit needed.',
    sections: [
      {
        h2: 'How remote tech support works',
        html: `<ol>
<li><strong>Contact us</strong> by phone or email and describe the problem.</li>
<li><strong>Verify.</strong> We confirm who you are before touching any account. This is a security step, not red tape.</li>
<li><strong>Connect.</strong> You approve a secure, encrypted remote session. You can watch everything we do.</li>
<li><strong>Fix and document.</strong> We resolve the issue and note what was done so the next technician has the history.</li>
</ol>
<p>Routine requests like password and MFA resets for verified users run through automation and are typically done in about ten minutes.</p>`,
      },
      {
        h2: 'Is remote support secure?',
        html: `<p>It is when it is done properly. Our sessions are encrypted, require your approval, are logged, and use accounts protected by multi-factor authentication. We never ask you to install a tool someone emailed you. If you get an unexpected call from "tech support" asking to connect to your computer, hang up and call us directly. That is one of the most common scams targeting valley businesses and second-home owners.</p>
<p>Looking for planning advice rather than a fix? See <a href="/remote-it-consultation">remote IT consultation</a>.</p>`,
      },
    ],
    includes: [
      'Secure, encrypted, user-approved remote sessions',
      'Identity verification before any account change',
      'Outlook, Microsoft 365, printer and software issues',
      'Performance cleanup and updates',
      'Ticket history and documentation',
    ],
    faqs: [
      { q: 'How does remote tech support work?', a: 'You contact the help desk, we verify your identity, and you approve a secure remote session. A technician then fixes the problem while you watch, and the work is documented in your ticket history.' },
      { q: 'Is remote tech support secure?', a: 'Yes, when it uses encrypted, logged sessions that require your approval and accounts protected by multi-factor authentication. Never allow remote access to someone who contacted you unexpectedly.' },
      { q: 'Do you provide remote support outside Eagle County?', a: 'Yes. Remote support is available to businesses anywhere in Colorado. On-site work is focused on Eagle County.' },
    ],
    related: ['emergency-it-support', 'remote-it-consultation', 'managed-it-services'],
  },
  {
    slug: 'hardware-upgrades',
    name: 'Hardware Upgrades',
    group: 'Support & Projects',
    icon: 'laptop',
    tier: 3,
    title: 'Business Hardware Upgrades & IT Procurement | Vail Valley IT',
    description: 'Plan and execute hardware upgrades for your Vail Valley business — computers, servers & networking equipment sourced and installed by local techs.',
    h1: 'Business Computer Hardware Upgrades in the Vail Valley',
    primaryKeyword: 'business computer hardware upgrades Vail Valley',
    answer: 'Vail Valley IT plans and delivers business computer hardware upgrades in the Vail Valley. We source business-grade laptops, desktops, servers and network equipment, set them up with your software and security tools before they arrive, move each user’s data, and securely wipe and recycle the old devices.',
    card: 'Business-grade computers, servers and network gear, sourced, set up and installed with old devices securely wiped.',
    sections: [
      {
        h2: 'When should a business upgrade its computers?',
        html: `<p>As a rule of thumb, business laptops and desktops last about four to five years, and servers and firewalls about five to seven. The real triggers are more specific: the device can no longer receive security updates, it does not meet the requirements of the current operating system, repairs cost more than half of a replacement, or staff are losing time every day waiting on it.</p>
<p>Windows 10 reached end of support in October 2025. Any business computers still running it are no longer receiving free security patches and should be upgraded or replaced.</p>`,
      },
      {
        h2: 'Budgeting for a hardware refresh',
        html: `<p>Rather than replacing everything at once, we build a rolling refresh plan that replaces about a quarter of devices each year. That turns a painful capital expense into a predictable line item, keeps every device under warranty, and avoids the year where everything breaks at the same time. It is part of the quarterly roadmap for <a href="/managed-it-services">managed IT clients</a>.</p>`,
      },
      {
        h2: 'Delivered ready to work',
        html: `<p>New devices are enrolled in management, encrypted, loaded with your software and security tools, and tested before they reach a desk. Each user’s files, browser bookmarks and printers move over. Old drives are securely wiped, which matters for any office that has handled patient, client or financial data.</p>`,
      },
    ],
    includes: [
      'Hardware lifecycle planning and rolling refresh budgets',
      'Business-grade device sourcing and warranty management',
      'Pre-configuration with software, encryption and security tools',
      'User data migration and setup',
      'Server and network equipment replacement',
      'Secure data wiping and responsible recycling',
    ],
    faqs: [
      { q: 'When should a business upgrade its computers?', a: 'Typically every four to five years for laptops and desktops, or sooner if a device can no longer receive security updates, cannot run the current operating system, or repairs cost more than half a replacement.' },
      { q: 'How should a small business budget for an IT hardware refresh?', a: 'Replace roughly a quarter of devices each year on a rolling schedule. It keeps costs predictable, keeps devices under warranty and avoids a large one-time replacement.' },
      { q: 'Can you buy computers for us, or do we buy them?', a: 'Either works. We can source business-grade equipment for you or configure devices you purchase, as long as they meet business requirements such as the right operating system edition.' },
    ],
    related: ['it-projects', 'managed-it-services', 'network-wifi-setup'],
  },
  {
    slug: 'network-wifi-setup',
    name: 'Network & Wi-Fi Setup',
    group: 'Networks & Communication',
    icon: 'network',
    tier: 2,
    title: 'Network & Wi-Fi Setup for New Offices | Vail Valley IT',
    description: 'Opening a new location in Vail Valley? We design and install complete network & Wi-Fi setups for offices, retail and hospitality spaces.',
    h1: 'Network & Wi-Fi Setup for New Offices in the Vail Valley',
    primaryKeyword: 'network setup services Vail Valley',
    answer: 'Vail Valley IT provides network setup services for new offices, stores, restaurants and lodging spaces in the Vail Valley. We plan the internet service, design the Wi-Fi layout, coordinate cabling, install the firewall, switches and access points, and hand you a documented network that is ready on opening day.',
    card: 'Design and installation for new offices, stores and restaurants, ready and documented by opening day.',
    sections: [
      {
        h2: 'What you need to set up a new office network',
        html: `<p>A reliable business network has five parts: an internet circuit sized for your team (with a backup connection if downtime is costly), a business firewall, network switches, enough Wi-Fi access points for the space, and structured cabling that connects it all. Getting the order right is what keeps opening day on schedule.</p>
<ol>
<li><strong>Order internet early.</strong> In parts of Eagle County, new business circuits can take weeks to install. We help you choose a provider and place the order as soon as the lease is signed.</li>
<li><strong>Design before drywall.</strong> Access point and cabling locations are planned while walls are still open.</li>
<li><strong>Coordinate the cabling contractor</strong> so drops land where equipment and desks will actually be.</li>
<li><strong>Install and configure</strong> the firewall, switches and Wi-Fi with separate staff, guest and payment networks.</li>
<li><strong>Test and document</strong> coverage, speeds and every login, then hand it over.</li>
</ol>`,
      },
      {
        h2: 'What it costs to wire a new office',
        html: `<p>The biggest variables are square footage, number of cable drops, building construction, and whether you need a backup internet connection. A small office might need a handful of drops and two access points; a restaurant or multi-floor lodge needs far more. We provide a fixed project quote after a walkthrough so the number does not drift.</p>
<p>Already open and having problems? See <a href="/business-network-wifi-support">business network & Wi-Fi support</a>.</p>`,
      },
    ],
    includes: [
      'Internet provider selection and backup connection planning',
      'Wi-Fi design and access point placement',
      'Cabling contractor coordination',
      'Firewall, switch and access point installation',
      'Guest, staff and payment network segmentation',
      'Coverage testing and full network documentation',
    ],
    faqs: [
      { q: 'What do I need to set up a new office network?', a: 'An internet circuit, a business firewall, network switches, Wi-Fi access points and structured cabling. Order internet as early as possible and plan access point and cabling locations before walls are closed.' },
      { q: 'How much does it cost to wire a new office for internet?', a: 'It depends on square footage, the number of cable drops, building construction and whether backup internet is needed. Vail Valley IT provides a fixed quote after a walkthrough.' },
      { q: 'How far in advance should I plan the network for a new location?', a: 'Start as soon as the lease is signed. Internet installation lead times and construction schedules are the most common causes of delayed openings.' },
    ],
    related: ['it-projects', 'business-network-wifi-support', 'voip-phone-systems'],
  },
  {
    slug: 'virus-malware-removal',
    name: 'Virus & Malware Removal',
    group: 'Security & Compliance',
    icon: 'bug',
    tier: 2,
    title: 'Virus & Malware Removal for Business | Vail Valley IT',
    description: 'Fast virus, ransomware and malware removal for Vail Valley businesses — stop the threat, restore your systems, and prevent it from happening again.',
    h1: 'Virus & Malware Removal for Vail Valley Businesses',
    primaryKeyword: 'virus and malware removal Vail Valley business',
    answer: 'If your business computers have a virus or ransomware, call Vail Valley IT at (970) 446-9440. We provide virus and malware removal for Vail Valley businesses: we isolate infected devices, stop the spread, remove the threat, check for stolen credentials, restore clean data from backup, and close the gap that let it in.',
    card: 'Isolate, remove and recover from viruses, ransomware and compromised accounts, then close the gap.',
    sections: [
      {
        h2: 'My business computers have a virus. What do I do right now?',
        html: `<ol>
<li><strong>Disconnect</strong> the affected computer from the network. Unplug the cable and turn off Wi-Fi. Do not shut it down if you can avoid it; evidence in memory can help.</li>
<li><strong>Do not pay</strong> any ransom demand or call a phone number shown in a pop-up.</li>
<li><strong>Change passwords</strong> for email and banking from a different, clean device.</li>
<li><strong>Call us</strong> — no contract needed for <a href="/emergency-it-support">emergency IT support</a>. The sooner we contain it, the less spreads to other machines, shared drives and backups.</li>
<li><strong>Notify your cyber-insurance carrier</strong> if you have one; many require prompt notice and have approved response procedures.</li>
</ol>`,
      },
      {
        h2: 'Signs of a ransomware attack on a small business',
        html: `<p>Ransomware rarely arrives without warning. Watch for files that suddenly will not open or have strange extensions, a ransom note on screen or in folders, antivirus being disabled, unusual sign-ins to email from other countries, new administrator accounts nobody created, and a sudden spike in network activity overnight. Any one of these is worth a call.</p>`,
      },
      {
        h2: 'Removing it is half the job',
        html: `<p>After cleanup we find out how it got in, whether that was a phishing email, an unpatched device, a reused password or remote access left open, and fix it. Most clients then add <a href="/email-security-spam-protection">email security</a>, endpoint detection and response, and <a href="/it-data-protection">immutable backups</a> so a repeat is far less likely.</p>`,
      },
    ],
    includes: [
      'Emergency containment and device isolation',
      'Malware, ransomware and adware removal',
      'Compromised account and credential review',
      'Clean restore from backup',
      'Root-cause report and remediation plan',
      'Coordination with cyber-insurance carriers',
    ],
    faqs: [
      { q: 'My business computers have a virus. What do I do?', a: 'Disconnect the affected computer from the network, do not pay any ransom or call numbers in pop-ups, change critical passwords from a clean device, and call a business IT provider immediately. Vail Valley IT handles business malware response at (970) 446-9440.' },
      { q: 'What are the signs of a ransomware attack on a small business?', a: 'Files that will not open or have unusual extensions, ransom notes, disabled antivirus, unexpected sign-ins or new admin accounts, and unusual overnight network activity.' },
      { q: 'Can you recover files encrypted by ransomware?', a: 'Usually from a clean backup. That is why immutable, offsite backups matter. Paying a ransom does not guarantee recovery and may create legal and insurance complications.' },
    ],
    related: ['emergency-it-support', 'it-data-protection', 'email-security-spam-protection'],
  },
  {
    slug: 'compliance-cybersecurity',
    name: 'Compliance & Cybersecurity',
    group: 'Security & Compliance',
    icon: 'shield',
    tier: 1,
    title: 'Cybersecurity & Compliance Services for Business | Vail Valley IT',
    description: 'Protect your business and meet compliance requirements with cybersecurity infrastructure, risk assessments & policy support from Vail Valley IT.',
    h1: 'Cybersecurity & Compliance Services in the Vail Valley',
    primaryKeyword: 'cybersecurity compliance services Vail Valley',
    answer: 'Vail Valley IT provides cybersecurity and compliance services for businesses in the Vail Valley, with a focus on healthcare practices under HIPAA and financial, insurance and accounting firms under the FTC Safeguards Rule. We run a security risk assessment, fix the gaps, write the policies, and keep the evidence your auditors and cyber-insurance carrier ask for.',
    card: 'Risk assessments, security controls and written policies for HIPAA, FTC Safeguards, PCI and cyber insurance.',
    sections: [
      {
        h2: 'A cyber-first approach, not a security add-on',
        html: `<p>Security is the starting point of every engagement, not an upsell. Before we recommend a laptop or a phone system, we assess how your data is stored, who can reach it, and what would happen if a device was lost or an account was taken over. Every <a href="/managed-it-services">managed IT</a> plan includes endpoint detection and response, multi-factor authentication, patching and backup monitoring by default.</p>`,
      },
      {
        h2: 'What compliance rules apply to a small business in Colorado?',
        html: `<p>It depends on the data you handle:</p>
<ul>
<li><strong>Healthcare</strong> practices and their vendors handling patient information fall under <strong>HIPAA</strong>, which requires a documented security risk analysis, safeguards and business associate agreements. See <a href="/industries/healthcare-it">healthcare IT</a>.</li>
<li><strong>Financial businesses</strong> such as tax preparers, mortgage brokers, wealth advisors and many insurance and lending businesses fall under the <strong>FTC Safeguards Rule</strong>, which requires a written information security program, MFA, encryption and a designated qualified individual. See <a href="/industries/financial-services-it">financial services IT</a>.</li>
<li><strong>Anyone who accepts cards</strong> must follow <strong>PCI DSS</strong>, which matters for restaurants, lodging and retail.</li>
<li><strong>Every Colorado business</strong> holding personal information of Colorado residents has data security and breach notification duties under state law, and may be subject to the Colorado Privacy Act depending on size and activity.</li>
</ul>
<p>Read our plain-language guides to <a href="/compliance/hipaa">HIPAA</a>, <a href="/compliance/glba-ftc-safeguards-rule">GLBA and the FTC Safeguards Rule</a>, <a href="/compliance/sec-regulation-s-p">SEC Regulation S-P</a>, <a href="/compliance/pci-dss">PCI DSS</a>, <a href="/compliance/colorado-privacy-breach-law">Colorado breach law</a> and <a href="/compliance/cyber-insurance-requirements">cyber insurance requirements</a>. This is general information, not legal advice. We work alongside your attorney or compliance advisor on the legal side and handle the technical controls and documentation.</p>`,
      },
      {
        h2: 'Do you need a cybersecurity policy for your small business?',
        html: `<p>If you handle health, financial or card data, yes, and most cyber-insurance applications now ask for one regardless. A practical policy set covers acceptable use, access control, passwords and MFA, device encryption, backups, incident response and vendor management. We write them in plain language your staff can actually follow, then back each policy with a technical control so it is not just paper.</p>`,
      },
    ],
    includes: [
      'Security risk assessments (including HIPAA risk analysis support)',
      'Endpoint detection and response (EDR) and managed antivirus',
      'Multi-factor authentication and conditional access',
      'Device encryption and mobile device management',
      'Written security policies and incident response plan',
      'Security awareness training and phishing simulations',
      'Cyber-insurance questionnaire support',
      'Vendor and business associate tracking',
    ],
    faqs: [
      { q: 'What compliance rules apply to a small business in Colorado?', a: 'It depends on the data. Healthcare businesses follow HIPAA, many financial and insurance businesses follow the FTC Safeguards Rule, businesses that take cards follow PCI DSS, and Colorado law adds data security and breach notification duties for personal information of Colorado residents.' },
      { q: 'Do I need a cybersecurity policy for my small business?', a: 'If you handle health, financial or payment data, yes. Most cyber-insurance carriers also expect written policies for access control, MFA, backups and incident response.' },
      { q: 'What is a security risk assessment?', a: 'A structured review of where sensitive data lives, who can access it, what threats are realistic and which safeguards are missing. HIPAA requires one for covered entities, and it is the first step in every Vail Valley IT engagement.' },
      { q: 'Can you help us qualify for cyber insurance?', a: 'Yes. Carriers commonly require MFA, EDR, tested backups and security training. We implement those controls and help you answer the application accurately.' },
    ],
    related: ['cybersecurity-risk-assessment', 'penetration-testing-vulnerability-scanning', 'security-awareness-training'],
  },
  {
    slug: 'automation-ai-enablement',
    name: 'Automation & AI Enablement',
    group: 'Automation & AI',
    icon: 'bot',
    tier: 1,
    title: 'AI Enablement & Business Automation Services | Vail Valley IT',
    description: 'Put AI and automation to work for your business. Vail Valley IT helps Eagle County companies streamline workflows and adopt AI tools safely.',
    h1: 'AI Enablement & Automation for Vail Valley Small Businesses',
    primaryKeyword: 'AI enablement for small business Vail Valley',
    answer: 'Vail Valley IT provides AI enablement and business process automation for small businesses in the Vail Valley. We find the repetitive work eating your team’s week, automate it with tools you already pay for, and roll out AI assistants like Microsoft Copilot or ChatGPT with the data controls that keep client information private.',
    card: 'Automate repetitive work and adopt AI tools safely, with the data controls that keep client information private.',
    sections: [
      {
        h2: 'How can a small business use AI?',
        html: `<p>The useful starting points are rarely futuristic. They are the hours staff lose every week to copy-and-paste work:</p>
<ul>
<li>Following up with every new lead within minutes, by text and email, day or night.</li>
<li>Sending appointment reminders and rebooking cancellations automatically.</li>
<li>Drafting first replies to common customer emails for a person to review and send.</li>
<li>Summarizing meetings and turning them into tasks.</li>
<li>Moving data between your scheduling, accounting and CRM tools without retyping it.</li>
<li>Answering internal questions from your own policies and procedures.</li>
</ul>`,
      },
      {
        h2: 'We run on it ourselves',
        html: `<p>We are not recommending anything we do not use. Our own help desk uses automation to handle routine requests like new users and password or MFA resets for verified staff in about ten minutes, and to route everything else to the right technician with the details already gathered. The same approach can work for your front desk, scheduling or back office.</p>`,
      },
      {
        h2: 'Is AI automation worth it for a small business?',
        html: `<p>It is when it targets a specific, repeated task with a measurable cost. We start with a short workflow review, estimate the hours each automation would save, and build the highest-value one first. If the numbers do not justify it, we will say so.</p>
<p>Safety comes first. Before staff paste client data into any AI tool, we set up business accounts with data protection terms, sensitivity controls and clear usage rules. For <a href="/compliance-cybersecurity">regulated businesses</a>, that step is not optional.</p>`,
      },
    ],
    includes: [
      'Workflow review and automation roadmap',
      'Lead follow-up, scheduling and reminder automations',
      'Integrations between CRM, accounting, scheduling and Microsoft 365',
      'Microsoft Copilot and ChatGPT business rollout',
      'AI acceptable-use policy and data controls',
      'Staff training on practical, safe AI use',
    ],
    faqs: [
      { q: 'How can a small business use AI?', a: 'Start with repetitive tasks: instant lead follow-up, appointment reminders, drafting replies to common emails, meeting summaries and moving data between business apps. These deliver measurable time savings without major risk.' },
      { q: 'Is AI automation worth it for a small business?', a: 'Yes, when it targets a specific task that repeats often and has a clear cost in staff time. A short workflow review identifies which automations pay back fastest.' },
      { q: 'Is it safe to use ChatGPT or Copilot with client data?', a: 'Only with business accounts that include data protection terms, proper access controls and a written usage policy. Consumer accounts should not be used with confidential or regulated data.' },
      { q: 'Will AI replace our staff or our IT support?', a: 'No. Automation removes the repetitive parts of the job so people can spend time on customers and judgment calls. At Vail Valley IT, automation speeds up routine requests while real technicians handle everything else.' },
    ],
    related: ['managed-it-services', 'compliance-cybersecurity', 'remote-it-consultation'],
  },
  {
    slug: 'cybersecurity-risk-assessment',
    name: 'Cybersecurity Risk Assessment',
    group: 'Security & Compliance',
    icon: 'gauge',
    tier: 1,
    title: 'Free Cybersecurity Risk Assessment in Vail, CO | Vail Valley IT',
    description: 'Book a free cybersecurity risk assessment for your Vail Valley business. Find your gaps, get a written plan and a flat price. HIPAA & FTC-ready reports available.',
    h1: 'Free Cybersecurity Risk Assessment for Vail Valley Businesses',
    primaryKeyword: 'cybersecurity risk assessment Vail',
    answer: 'Vail Valley IT offers a free cybersecurity risk assessment for small and mid-sized businesses in Vail, Avon, Edwards, Eagle and across Eagle County. We review your accounts, devices, email, backups and network, show you the gaps attackers would use first, and give you a written, prioritized plan with a flat price to fix them. Regulated firms can upgrade to a formal written risk assessment for HIPAA or the FTC Safeguards Rule.',
    card: 'Free review of your accounts, devices, email, backups and network, with a written plan and flat price.',
    sections: [
      {
        h2: 'What the free assessment covers',
        html: `<p>In about an hour, on site or remote, we look at the controls that stop the most common attacks on small businesses:</p>
<ul>
<li><strong>Identity:</strong> MFA coverage, admin accounts, former employees with access, password practices.</li>
<li><strong>Email:</strong> phishing filtering, SPF, DKIM and DMARC, suspicious forwarding rules.</li>
<li><strong>Devices:</strong> operating system support, patching, encryption, endpoint protection.</li>
<li><strong>Backups:</strong> what is backed up, where copies live, and whether a restore has ever been tested.</li>
<li><strong>Network:</strong> firewall, Wi-Fi segmentation, remote access and exposed services.</li>
<li><strong>Compliance fit:</strong> which rules apply to you, such as <a href="/compliance/hipaa">HIPAA</a>, the <a href="/compliance/glba-ftc-safeguards-rule">FTC Safeguards Rule</a> or <a href="/compliance/pci-dss">PCI DSS</a>, and what your <a href="/compliance/cyber-insurance-requirements">cyber insurer</a> is likely to ask.</li>
</ul>`,
      },
      {
        h2: 'What you get',
        html: `<p>A short written report with your risk score, the top gaps in priority order, what each one would take to fix, and a flat monthly or project price if you want us to handle it. There is no obligation, and the report is yours to use with any provider.</p>`,
      },
      {
        h2: 'Free assessment vs. formal compliance risk assessment',
        html: `<p>The free assessment is a fast, practical review. Regulated businesses also need a <strong>formal, documented risk assessment</strong>: HIPAA requires a security risk analysis, and the FTC Safeguards Rule requires a written risk assessment for most covered firms. The formal version inventories every system that holds sensitive data, rates each risk, maps it to the rule’s requirements and produces the documentation an auditor or investigator will ask for. It is quoted as a fixed-price project and often paired with <a href="/penetration-testing-vulnerability-scanning">vulnerability scanning and penetration testing</a>.</p>
<p>Want a head start? Take the <a href="/security-check">free 2-minute security check</a> first.</p>`,
      },
    ],
    includes: [
      'Identity and MFA review',
      'Email security and domain authentication check',
      'Device, patching and encryption review',
      'Backup and recovery review',
      'Network, firewall and remote access review',
      'Compliance applicability summary',
      'Written, prioritized findings',
      'Flat-price remediation quote, no obligation',
    ],
    faqs: [
      { q: 'Is the cybersecurity assessment really free?', a: 'Yes. The initial assessment and written findings are free with no obligation. Formal compliance risk assessments, penetration tests and remediation work are quoted separately at a fixed price.' },
      { q: 'How long does a cybersecurity risk assessment take?', a: 'The free assessment takes about an hour of your time, on site or remote, and you receive written findings within a few business days. A formal HIPAA or FTC Safeguards risk assessment typically takes one to three weeks depending on size.' },
      { q: 'What is the difference between a risk assessment and a penetration test?', a: 'A risk assessment reviews your systems, policies and controls to identify and prioritize risks. A penetration test actively attempts to exploit weaknesses to prove what an attacker could actually do. Most compliance programs need both.' },
      { q: 'Do I need a risk assessment for cyber insurance?', a: 'Carriers rarely require a formal assessment, but they ask detailed questions about MFA, backups, EDR and training. An assessment tells you whether your honest answers are “yes,” and what to fix if they are not.' },
    ],
    related: ['penetration-testing-vulnerability-scanning', 'compliance-cybersecurity', 'security-awareness-training'],
  },
  {
    slug: 'penetration-testing-vulnerability-scanning',
    name: 'Penetration Testing & Vulnerability Scanning',
    group: 'Security & Compliance',
    icon: 'bug',
    tier: 1,
    title: 'Penetration Testing & Vulnerability Scanning | Vail Valley IT',
    description: 'Penetration testing and vulnerability scanning for Vail Valley businesses — meet HIPAA, FTC Safeguards, PCI DSS and cyber insurance testing requirements.',
    h1: 'Penetration Testing & Vulnerability Scanning in the Vail Valley',
    primaryKeyword: 'penetration testing Vail Valley',
    answer: 'Vail Valley IT provides vulnerability scanning and penetration testing for small and mid-sized businesses across Eagle County. Scans find known weaknesses such as missing patches, exposed services and misconfigurations; penetration tests prove which of them an attacker could actually exploit. You receive prioritized reports that satisfy the testing requirements in the FTC Safeguards Rule and PCI DSS, the testing proposed for HIPAA, and what cyber insurers increasingly ask for.',
    card: 'Scans and pen tests with compliance-ready reports for HIPAA, FTC Safeguards, PCI and insurers.',
    sections: [
      {
        h2: 'Vulnerability scan vs. penetration test',
        html: `<p>They answer different questions, and most compliance programs need both:</p>
<ul>
<li><strong>Vulnerability scanning</strong> is automated and broad. It checks every reachable system for known weaknesses and is repeated on a schedule, often monthly or quarterly. It answers: <em>what might be wrong?</em></li>
<li><strong>Penetration testing</strong> is human-led and deep. A tester attempts to exploit weaknesses, chain them together and reach sensitive data, the way a real attacker would. It answers: <em>what could an attacker actually do?</em></li>
</ul>
<p>We offer <strong>external</strong> testing of your internet-facing systems (firewall, remote access, websites, email), <strong>internal</strong> testing from inside your network as if a device were compromised, and <strong>Microsoft 365 / cloud</strong> configuration reviews.</p>`,
      },
      {
        h2: 'Which rules require security testing?',
        html: `<div class="tablewrap"><table>
<thead><tr><th scope="col">Requirement</th><th scope="col">What it calls for</th></tr></thead>
<tbody>
<tr><td><a href="/compliance/glba-ftc-safeguards-rule"><strong>FTC Safeguards Rule</strong></a></td><td>Annual penetration testing and vulnerability assessments at least every six months, unless you use continuous monitoring. Firms with fewer than 5,000 consumers are exempt from this item.</td></tr>
<tr><td><a href="/compliance/pci-dss"><strong>PCI DSS</strong></a></td><td>Internal and external vulnerability scans, quarterly external ASV scans where your SAQ requires them, and penetration testing for merchants in scope.</td></tr>
<tr><td><a href="/compliance/hipaa"><strong>HIPAA</strong></a></td><td>Currently: risk analysis and periodic technical evaluation. HHS’s proposed update would require scans every six months and a pen test every 12 months.</td></tr>
<tr><td><a href="/compliance/cyber-insurance-requirements"><strong>Cyber insurance</strong></a></td><td>Many carriers ask about vulnerability scanning and external exposure, and some scan applicants themselves.</td></tr>
</tbody></table></div>
<p>This is a general summary, not legal advice. We confirm which requirements apply during your <a href="/cybersecurity-risk-assessment">free cybersecurity assessment</a>.</p>`,
      },
      {
        h2: 'Reports you can hand to an auditor',
        html: `<p>Every engagement ends with an executive summary in plain language, a technical findings list ranked by severity with evidence, specific remediation steps, and a retest to confirm fixes. Reports are written to be filed as compliance evidence, not just read once. If you are a <a href="/managed-it-services">managed client</a>, we fix what we find; if not, the findings are yours to give any provider.</p>`,
      },
    ],
    includes: [
      'External vulnerability scanning of internet-facing systems',
      'Internal vulnerability scanning of computers, servers and network devices',
      'External and internal penetration testing',
      'Microsoft 365 and cloud configuration review',
      'Wi-Fi and network segmentation testing',
      'Severity-ranked findings with remediation steps',
      'Executive summary for owners, boards and auditors',
      'Retest after remediation',
    ],
    faqs: [
      { q: 'How often should a small business get a penetration test?', a: 'At least annually, and after major changes such as a new office network, firewall or cloud migration. The FTC Safeguards Rule requires annual penetration testing for most covered firms, and HHS has proposed the same for HIPAA.' },
      { q: 'How often should we run vulnerability scans?', a: 'At minimum every six months under the FTC Safeguards Rule, quarterly for external PCI scans where required, and ideally monthly or continuously as part of managed security.' },
      { q: 'Will a penetration test disrupt our business?', a: 'Testing is scoped and scheduled in advance, avoids destructive techniques, and can run after hours. You approve the rules of engagement before anything starts.' },
      { q: 'How much does a penetration test cost for a small business?', a: 'Cost depends on scope: how many external addresses, internal systems and cloud accounts are included. We quote a fixed price after a short scoping call, and recurring scanning can be bundled into managed IT.' },
    ],
    related: ['cybersecurity-risk-assessment', 'compliance-cybersecurity', 'security-awareness-training'],
  },
  {
    slug: 'security-awareness-training',
    name: 'Security Awareness Training',
    group: 'Security & Compliance',
    icon: 'users',
    tier: 1,
    title: 'Security Awareness Training for Employees | Vail Valley IT',
    description: 'Cybersecurity awareness training and phishing simulations for Vail Valley staff — with completion records that satisfy HIPAA, FTC Safeguards, PCI and insurers.',
    h1: 'Security Awareness Training for Vail Valley Teams',
    primaryKeyword: 'security awareness training Vail',
    answer: 'Vail Valley IT provides cybersecurity awareness training for employees at businesses across Eagle County: short online lessons, simulated phishing emails, and completion reports. It is built to change behavior and to check the box auditors and insurers look for, since HIPAA, the FTC Safeguards Rule, PCI DSS and most cyber insurance carriers expect documented security training for every staff member.',
    card: 'Short lessons, phishing simulations and completion records that satisfy auditors and insurers.',
    sections: [
      {
        h2: 'Training that people actually finish',
        html: `<p>Hour-long annual videos get skipped. Our program uses a short onboarding course for new hires, then brief monthly or quarterly lessons of a few minutes each on the threats valley businesses actually see: invoice and wire fraud, fake login pages, gift-card scams, QR-code phishing, MFA fatigue attacks and AI-generated voice and email impersonation.</p>
<p>Simulated phishing emails test what people do in their real inbox. Anyone who clicks gets an immediate, judgment-free micro-lesson. Over time, click rates fall and reporting rates rise, and you can see both in the reports.</p>`,
      },
      {
        h2: 'Checks the compliance box, with proof',
        html: `<p>Security awareness training is an explicit requirement in several rules our clients face:</p>
<ul>
<li><a href="/compliance/hipaa"><strong>HIPAA</strong></a> requires a security awareness and training program for the entire workforce.</li>
<li>The <a href="/compliance/glba-ftc-safeguards-rule"><strong>FTC Safeguards Rule</strong></a> requires security awareness training for staff.</li>
<li><a href="/compliance/pci-dss"><strong>PCI DSS</strong></a> requires a security awareness program, reviewed at least annually.</li>
<li><a href="/compliance/cyber-insurance-requirements"><strong>Cyber insurance</strong></a> applications routinely ask whether staff are trained and phish-tested.</li>
</ul>
<p>You get completion records by employee, phishing simulation results and an annual summary, ready to attach to an audit, an insurance application or your <a href="/cybersecurity-risk-assessment">risk assessment</a>.</p>`,
      },
      {
        h2: 'Built for seasonal teams',
        html: `<p>Mountain businesses onboard waves of seasonal staff. New hires are enrolled automatically when their account is created, complete a short onboarding course in their first week, and are removed when they leave, so your records stay accurate without anyone chasing paperwork.</p>`,
      },
    ],
    includes: [
      'Onboarding security course for new hires',
      'Short monthly or quarterly lessons',
      'Simulated phishing campaigns',
      'Instant micro-training for anyone who clicks',
      'Phish-reporting button for Outlook',
      'Completion records by employee',
      'Annual compliance summary report',
      'Automatic enrollment and removal with staff changes',
    ],
    faqs: [
      { q: 'Is security awareness training required by law?', a: 'For many businesses, yes. HIPAA requires it for covered entities and business associates, the FTC Safeguards Rule requires it for covered financial businesses, and PCI DSS requires it for merchants. Cyber insurers commonly require it as a condition of coverage.' },
      { q: 'How often should employees get security awareness training?', a: 'Onboarding training for every new hire plus recurring training at least annually is the baseline. Short monthly or quarterly lessons with phishing simulations work far better than a single annual session.' },
      { q: 'What is a phishing simulation?', a: 'A safe, realistic test email sent to staff to see who clicks or enters credentials. It measures real-world behavior and turns mistakes into immediate training instead of real incidents.' },
      { q: 'Do you provide proof of training for audits and insurers?', a: 'Yes. You receive completion records by employee, phishing results and an annual summary that can be filed as evidence.' },
    ],
    related: ['email-security-spam-protection', 'cybersecurity-risk-assessment', 'compliance-cybersecurity'],
  },
  {
    slug: 'emergency-it-support',
    name: 'Emergency & On-Demand IT Support',
    group: 'Support & Projects',
    icon: 'alert',
    tier: 1,
    title: 'Emergency & On-Demand IT Support in Vail, CO | Vail Valley IT',
    description: 'No contract needed. Emergency and on-demand IT support for Vail Valley businesses — outages, lockouts, hacked email and urgent fixes. Call (970) 446-9440.',
    h1: 'Emergency & On-Demand IT Support in the Vail Valley',
    primaryKeyword: 'emergency IT support Vail',
    answer: 'Vail Valley IT provides emergency and on-demand IT support for Vail Valley businesses that are not on a managed plan. No contract is required: call (970) 446-9440 when the internet, email, a server or a critical computer is down, someone is locked out, or you think you have been hacked. We fix it remotely when we can and on site across Eagle County when we can’t.',
    card: 'No contract needed. Urgent help for outages, lockouts and hacked accounts: $200 minimum, then $175 per hour.',
    sections: [
      {
        h2: 'IT help when you don’t have an IT provider',
        html: `<p>Most small businesses in the valley do not have an IT company on call until the day they need one. The internet drops an hour before a busy weekend, the office manager is locked out of Microsoft 365, the server that runs scheduling will not boot, or a staff member clicks a link and the screen fills with warnings. That is exactly what on-demand support is for.</p>
<p>You do not need a contract, a monthly plan or an existing relationship. Call, describe what is happening, and a technician starts working on it. Pricing is simple: a $200 minimum, then $175 for each hour after that, and you get a written summary of what was wrong and what was done.</p>`,
      },
      {
        h2: 'What counts as an IT emergency',
        html: `<p>We prioritize anything that stops your business from operating or puts data at risk:</p>
<ul>
<li><strong>Outages:</strong> no internet, no Wi-Fi, phones down, card terminals offline.</li>
<li><strong>Lockouts:</strong> no access to email, Microsoft 365, Google Workspace or a critical application.</li>
<li><strong>Server or computer failure:</strong> a server, NAS or key workstation will not start or is losing data.</li>
<li><strong>Security incidents:</strong> a ransom note, a hacked mailbox, suspicious sign-ins or fraudulent payment requests. See <a href="/virus-malware-removal">virus & malware removal</a> for what to do in the first five minutes.</li>
<li><strong>Time-critical deadlines:</strong> a closing, a payroll run or an event that cannot wait.</li>
</ul>`,
      },
      {
        h2: 'Remote first, on site when it matters',
        html: `<p>Most emergencies can be diagnosed in minutes over a secure <a href="/remote-tech-support">remote session</a>, which matters in a valley where a storm on I-70 can turn a short drive into hours. When the problem is physical, such as a failed firewall, a dead switch or cabling, a technician comes to you from Edwards.</p>
<p>Managed clients receive priority response. If emergencies keep happening, that is usually the signal to look at <a href="/managed-it-services">managed IT services</a>, where monitoring catches most of these problems before they become outages.</p>`,
      },
    ],
    includes: [
      'No contract or monthly plan required',
      'Phone triage and secure remote diagnosis',
      'On-site visits across Eagle County',
      'Internet, Wi-Fi, firewall and phone outage recovery',
      'Microsoft 365 and Google Workspace lockout recovery',
      'Server, NAS and workstation failure response',
      'Hacked email and security incident containment',
      'Written summary and recommendations after every incident',
    ],
    faqs: [
      { q: 'Do I need a contract to get emergency IT support?', a: 'No. Vail Valley IT provides on-demand support to businesses that are not on a managed plan, with no contract required.' },
      { q: 'How much does emergency IT support cost?', a: 'On-demand and emergency IT support from Vail Valley IT is a $200 minimum, then $175 for each hour after that. You receive a written summary of the work when the issue is resolved.' },
      { q: 'Who do I call for emergency IT support in Vail?', a: 'Call Vail Valley IT at (970) 446-9440. We are based in Edwards and support businesses across Vail, Avon, Beaver Creek, Edwards, Eagle-Vail, Minturn, Eagle and Gypsum.' },
      { q: 'How fast can you respond to an IT emergency?', a: 'Remote diagnosis can usually begin as soon as we reach you. On-site timing depends on location and conditions; Avon and Edwards are closest to our base, and Vail and Eagle are about 20 minutes away. Managed clients receive priority.' },
      { q: 'What should I do while I wait?', a: 'If you suspect a hack or ransomware, disconnect the affected computer from the network and do not pay any ransom. For outages, note any error messages and lights on your modem or firewall. Do not repeatedly restart a server that is failing.' },
    ],
    related: ['remote-tech-support', 'virus-malware-removal', 'managed-it-services'],
    price: { amount: 200, unit: 'hour', text: '$200 minimum, then $175/hour', note: 'No contract required. Evenings and weekends are the same $175/hour emergency rate. Every visit ends with a written summary of what was wrong and what was done.' },
  },
  {
    slug: 'it-projects',
    name: 'IT Projects & Migrations',
    group: 'Support & Projects',
    icon: 'route',
    tier: 1,
    title: 'IT Projects, Migrations & Network Upgrades | Vail Valley IT',
    description: 'Fixed-price IT projects for Vail Valley businesses — server and cloud migrations, network upgrades, office moves, Windows 11 rollouts and more.',
    h1: 'IT Projects, Migrations & Upgrades in the Vail Valley',
    primaryKeyword: 'IT project services Vail Valley',
    answer: 'Vail Valley IT plans and delivers IT projects for businesses across the Vail Valley, including server-to-cloud migrations, Microsoft 365 moves, network and firewall upgrades, office relocations, Windows 11 rollouts and phone system cut-overs. Every project gets a fixed written quote, a schedule built around your busy season, after-hours cut-overs and full documentation at the end.',
    card: 'Fixed-price migrations, network upgrades, office moves and rollouts, scheduled around your season.',
    sections: [
      {
        h2: 'IT projects we deliver',
        html: `<p>Projects are one-time pieces of work with a clear start, finish and price. They are available whether or not you are a managed client. Common projects include:</p>
<ul>
<li><strong>Server to cloud migrations:</strong> moving file shares from an aging server to SharePoint and OneDrive, or moving applications to hosted platforms, so you can retire hardware in a closet.</li>
<li><strong>Email and tenant migrations:</strong> <a href="/microsoft-365-email-migration">Microsoft 365 migrations</a>, Google Workspace moves, and tenant consolidation when companies merge or separate.</li>
<li><strong>Network upgrades:</strong> replacing consumer routers and aging firewalls, adding business Wi-Fi, segmenting guest and payment networks, and adding backup internet. See <a href="/network-wifi-setup">network & Wi-Fi setup</a>.</li>
<li><strong>Office moves and new locations:</strong> internet ordering, cabling coordination, equipment move and same-weekend reconnection.</li>
<li><strong>Device rollouts:</strong> Windows 11 upgrades and <a href="/hardware-upgrades">hardware refreshes</a> with data migration and secure disposal.</li>
<li><strong>Phone system cut-overs:</strong> moving to <a href="/voip-phone-systems">cloud VoIP</a> with number porting.</li>
<li><strong>Security projects:</strong> MFA rollouts, device encryption, backup overhauls and <a href="/compliance-cybersecurity">compliance remediation</a>.</li>
</ul>`,
      },
      {
        h2: 'Why projects go wrong, and how we avoid it',
        html: `<p>IT projects usually fail for the same few reasons: nobody inventoried what existed first, the cut-over happened during business hours, the old system was shut off too soon, or nothing was documented afterward. Our process is built around avoiding all four. We document the current state before touching anything, schedule changes after hours or over a weekend, keep the old system available as a fallback until the new one is proven, and hand you documentation you own.</p>`,
      },
      {
        h2: 'Scheduled around the valley’s seasons',
        html: `<p>For lodging, restaurants and retail, we plan major projects for spring and fall shoulder seasons whenever possible. Professional offices typically prefer Friday-evening or weekend cut-overs so staff walk in Monday to a working system. Either way, you approve the schedule before work begins.</p>`,
      },
    ],
    includes: [
      'Discovery and current-state documentation',
      'Fixed-price written quote and scope',
      'Project plan with schedule and rollback steps',
      'After-hours or weekend cut-overs',
      'Vendor and contractor coordination',
      'User communication and short training',
      'Post-project testing and support period',
      'Final documentation and credentials handover',
    ],
    faqs: [
      { q: 'Do I need to be a managed client to hire you for a project?', a: 'No. IT projects are available to any business. Many clients start with a single project, such as a migration or network upgrade, before deciding on ongoing support.' },
      { q: 'How are IT projects priced?', a: 'As a fixed price after a discovery visit or call, based on the scope, number of users and devices, and how much existing equipment can be reused. You approve the quote before work starts.' },
      { q: 'How long does a typical IT project take?', a: 'Small projects like a firewall replacement can be done in a day. Server-to-cloud migrations and office moves for 10 to 25 users typically take two to six weeks from planning to completion, with the actual cut-over over a single evening or weekend.' },
      { q: 'Will there be downtime during a migration?', a: 'We plan cut-overs after hours and keep the old system available as a fallback, so most clients see little or no disruption to business hours.' },
    ],
    related: ['microsoft-365-email-migration', 'network-wifi-setup', 'hardware-upgrades'],
  },
  {
    slug: 'website-design',
    name: 'Website Design',
    group: 'Digital Marketing',
    icon: 'layout',
    tier: 1,
    title: 'Website Design in Vail Valley, CO | Vail Valley IT',
    description: 'Fast, mobile-first website design for Vail Valley businesses — built for local search, AI answers and booking, by a local Eagle County team.',
    h1: 'Website Design for Vail Valley Businesses',
    primaryKeyword: 'website design Vail Valley',
    answer: 'Vail Valley IT designs and builds websites for small businesses across the Vail Valley and Eagle County. Every site is fast on a phone, written to rank for the towns you actually serve, structured so Google and AI assistants can quote it, and connected to the way you take bookings, calls and leads. You own the site, the domain and the content.',
    card: 'Fast, mobile-first websites built to rank locally, get quoted by AI and turn visitors into calls and bookings.',
    sections: [
      {
        h2: 'What a small business website needs to do now',
        html: `<p>A website used to be a brochure. Today it has three jobs: show up when someone nearby searches for what you do, give Google and AI assistants clear facts they can repeat, and make it effortless for a visitor to call, book or ask for a quote from their phone.</p>
<p>Most of the sites we are asked to replace fail at least one of those. They load slowly on mountain cell coverage, list the wrong hours, bury the phone number, or say nothing about which towns they serve. Each of those costs real calls.</p>
<p>We build every site around those three jobs: a page for each core service, clear answers to the questions customers actually ask, structured data (schema) that spells out your business details for search engines, and a call or booking button on every screen.</p>`,
      },
      {
        h2: 'Built by the team that runs your technology',
        html: `<p>Because we also manage IT, your website is not an island. Domains, DNS, business email, SSL certificates, contact forms and tracking are set up correctly the first time, and someone local is accountable when anything changes. No more chasing a freelancer who registered your domain under their own account.</p>
<p>Sites are built on modern, static hosting that is fast, inexpensive to run and hard to hack, with no plugin updates to forget. This site is built exactly that way. When you need a change, you ask and it is done.</p>`,
      },
      {
        h2: 'Designed for how people find Vail Valley businesses',
        html: `<p>Your customers are a mix of locals, second-home owners and visitors who may be searching from Denver, Texas or a hotel room in Beaver Creek. We plan the site so each group finds what it needs: service-area pages for the towns you cover, seasonal hours and offers that are easy to update, and content that answers the questions visitors ask before they arrive.</p>
<p>Every site launches with <a href="/seo-ai-search-optimization">local SEO and AI search</a> foundations in place and analytics that show which pages produce calls and bookings.</p>`,
      },
    ],
    includes: [
      'Lead Alchemist lead automation and AI software (included with every marketing package)',
      'Custom design and mobile-first build',
      'Copywriting for core service and town pages',
      'Local SEO foundations and schema markup',
      'Booking, form and click-to-call integration',
      'Domain, DNS, SSL and business email setup',
      'Fast, secure hosting with no plugins to patch',
      'Google Analytics and Search Console setup',
      'Accessibility basics: contrast, headings, alt text and keyboard navigation',
      'Ongoing edits and updates on request',
    ],
    faqs: [
      { q: 'How long does it take to build a small business website?', a: 'A typical small business site of five to fifteen pages takes about three to six weeks from kickoff to launch. The biggest variable is how quickly content, photos and feedback come back during the project.' },
      { q: 'Do I own my website and domain?', a: 'Yes. The domain is registered in your name and the site content is yours. We manage it for you, but you are never locked in.' },
      { q: 'Will my new website show up on Google?', a: 'A new site is built with the technical foundations Google needs: fast pages, clear titles, a page for each service and town, schema markup and a submitted sitemap. Rankings then depend on competition, reviews and ongoing content, which our SEO and AI search service covers.' },
      { q: 'Can you redesign my existing website instead of starting over?', a: 'Yes. We review your current site first. If the content and structure are sound, a redesign may be enough. If the site is slow, hard to update or poorly structured, a rebuild usually costs less over time.' },
    ],
    related: ['seo-ai-search-optimization', 'google-ads-management', 'short-form-video-content'],
  },
  {
    slug: 'short-form-video-content',
    name: 'Short-Form Video Content',
    group: 'Digital Marketing',
    icon: 'video',
    tier: 1,
    title: 'Short-Form Video Content in Vail Valley, CO | Vail Valley IT',
    description: 'Instagram Reels, TikTok and YouTube Shorts for Vail Valley businesses — planned, filmed on location in Eagle County, edited and posted for you.',
    h1: 'Short-Form Video Content for Vail Valley Businesses',
    primaryKeyword: 'short form video content Vail Valley',
    answer: 'Vail Valley IT produces short-form video for local businesses across the Vail Valley: Instagram Reels, TikTok, YouTube Shorts and Facebook video. We plan the ideas, film on location in Eagle County, edit with captions and music, and deliver ready-to-post clips in batches, so you have a steady stream of video without a camera crew on payroll.',
    card: 'Reels, TikToks and Shorts planned, filmed on location in the valley, edited and ready to post.',
    sections: [
      {
        h2: 'Why short-form video matters for local businesses',
        html: `<p>Short vertical video is now one of the main ways people discover local businesses on Instagram, TikTok, YouTube and Facebook. It is also where visitors plan trips: what to eat in Vail Village, which shop to stop at in Edwards, who to call when the condo heater fails.</p>
<p>Video that shows the real people, place and work behind a business builds trust faster than any photo or ad. It gives your social accounts something worth following, and it gives your ads and website content that does not look like a stock template.</p>`,
      },
      {
        h2: 'How a batch shoot works',
        html: `<p>The most efficient way to produce consistent video is to plan ahead and film in batches. We agree on a month or season of ideas with you, script the hooks, then film several clips in a single visit to your business. That one visit becomes weeks of content.</p>
<p>Clips are edited for each platform with on-screen captions, since most short video is watched with the sound off, along with music, branding and a clear call to action. You review and approve every clip before it is posted.</p>`,
      },
      {
        h2: 'What we film',
        html: `<ul>
<li>Behind-the-scenes and day-in-the-life clips of your team at work</li>
<li>Product, menu, property and project showcases</li>
<li>Quick tips and answers to the questions customers ask most</li>
<li>Customer stories and walk-throughs, with permission</li>
<li>Seasonal openings, events and offers</li>
<li>Recruiting videos for seasonal hiring</li>
</ul>
<p>Video pairs naturally with <a href="/social-media-management">social media management</a> and gives <a href="/meta-ads-management">Meta ads</a> far stronger creative than still images.</p>`,
      },
    ],
    includes: [
      'Lead Alchemist lead automation and AI software (included with every marketing package)',
      'Content planning and hook-first scripting',
      'On-location filming in Eagle County',
      'Vertical editing with captions, music and branding',
      'Versions sized for Reels, TikTok, Shorts and Facebook',
      'Monthly or seasonal batch shoot days',
      'Approval before anything is posted',
      'Raw footage and final files you keep',
      'Optional posting through social media management',
    ],
    faqs: [
      { q: 'How many videos do we get from one shoot?', a: 'It depends on the plan and the business, but a well-planned half-day shoot commonly produces several finished short videos. We agree on the number of finished clips in the quote before filming.' },
      { q: 'Do my employees have to be on camera?', a: 'No. Many effective videos show hands, products, places and finished work with voiceover or on-screen text. When staff are willing to appear, the results are usually stronger, and we coach them through it.' },
      { q: 'Which platform should a local business post short videos on?', a: 'Instagram Reels and Facebook reach the widest local audience for most Vail Valley businesses. TikTok and YouTube Shorts add reach with younger and visitor audiences. Because the same vertical clip works on all of them, we usually format each video for several platforms.' },
      { q: 'Can we use the videos in ads?', a: 'Yes. You own the finished videos and can use them in ads, on your website and anywhere else. Short videos usually make stronger ad creative than still photos.' },
    ],
    related: ['social-media-management', 'meta-ads-management', 'website-design'],
  },
  {
    slug: 'social-media-management',
    name: 'Social Media Management',
    group: 'Digital Marketing',
    icon: 'share',
    tier: 1,
    title: 'Social Media Management in Vail Valley, CO | Vail Valley IT',
    description: 'Social media management for Vail Valley businesses: seasonal content calendars, design, scheduling and reporting, plus Lead Alchemist lead automation.',
    h1: 'Social Media Management for Vail Valley Businesses',
    primaryKeyword: 'social media management Vail Valley',
    answer: 'Vail Valley IT manages social media for small businesses across the Vail Valley and Eagle County. We build a content calendar around your seasons, create and schedule posts on Instagram, Facebook, TikTok, LinkedIn and Google Business Profile, and report each month on what is growing your audience and bringing in customers. Like every marketing package, it includes Lead Alchemist, our lead automation and AI software.',
    card: 'Content calendars, design, scheduling and monthly reporting run around your seasons, plus Lead Alchemist lead automation.',
    sections: [
      {
        h2: 'What social media management includes',
        html: `<p>Most owners know they should post more. The problem is time: coming up with ideas, taking photos, writing captions and posting at the right time. Social media management takes the content work off your plate.</p>
<p>We start with your goals, whether that is bookings, walk-ins, calls, hiring or brand awareness, and build a monthly calendar that supports them. You approve the plan, and we create and schedule the posts. Your team stays the voice in comments and direct messages, and Lead Alchemist, our lead automation and AI software, helps make sure new leads are captured and followed up.</p>`,
      },
      {
        h2: 'Planned around the Vail Valley calendar',
        html: `<p>Business in the valley moves with the seasons. Opening day, the holidays, spring break, mud season, summer events and fall all bring different customers and different messages. Your content calendar follows that rhythm, so you are promoting the right thing at the right time instead of reacting at the last minute.</p>
<p>We also plan for the slow weeks. Mud season is a good time to build your local following, recognize staff and tell the story of your business, so the audience is there when visitors return.</p>`,
      },
      {
        h2: 'Content that looks like your business',
        html: `<p>Generic stock photos and recycled quotes do not build trust. We use your real people, place and work wherever possible, combining photos you send, images we take on visits and <a href="/short-form-video-content">short-form video</a> filmed on location.</p>
<p>When a post performs well, it can be boosted or turned into a <a href="/meta-ads-management">Meta ad</a> aimed at people in the valley or planning a trip here.</p>`,
      },
    ],
    includes: [
      'Lead Alchemist lead automation and AI software (included with every marketing package)',
      'Monthly content calendar built around your seasons',
      'Post design, captions and hashtags',
      'Scheduling on Instagram, Facebook, TikTok and LinkedIn',
      'Google Business Profile posts',
      'Account setup, cleanup and branding',
      'Monthly performance report',
    ],
    faqs: [
      { q: 'How often should a small business post on social media?', a: 'Consistency matters more than volume. For most local businesses, a few quality posts a week on one or two main platforms, plus timely replies to comments and messages, outperforms daily posting that cannot be sustained.' },
      { q: 'Which social media platforms should a local business be on?', a: 'Facebook and Instagram reach the broadest local and visitor audience for most Vail Valley businesses. LinkedIn suits professional services and B2B. TikTok fits businesses with visual products or a younger audience. Google Business Profile posts are worth doing for every local business.' },
      { q: 'Do I approve posts before they go live?', a: 'Yes. You approve the monthly calendar and can review posts before they are scheduled.' },
      { q: 'Do you answer comments and direct messages?', a: 'No. Social media management covers planning, content creation, scheduling and reporting. Your team answers comments and messages, so customers hear from the people they will actually work with. Lead Alchemist, included with every marketing package, helps capture and follow up with new leads.' },
      { q: 'Will social media management bring in customers?', a: 'Organic social media builds awareness and trust over time, and it supports reviews, referrals and ads. For faster, measurable lead flow, we usually pair it with Meta or Google ads.' },
    ],
    related: ['short-form-video-content', 'meta-ads-management', 'seo-ai-search-optimization'],
  },
  {
    slug: 'seo-ai-search-optimization',
    name: 'SEO & AI Search (AEO)',
    group: 'Digital Marketing',
    icon: 'search',
    tier: 1,
    title: 'Local SEO & AI Search (AEO) in Vail Valley, CO | Vail Valley IT',
    description: 'Local SEO and AI search optimization for Vail Valley businesses — rank in Google Maps and get recommended by ChatGPT, Gemini, Perplexity and AI Overviews.',
    h1: 'Local SEO & AI Search Optimization in the Vail Valley',
    primaryKeyword: 'local SEO Vail Valley',
    answer: 'Vail Valley IT provides local SEO and answer engine optimization (AEO, also called GEO) for businesses in the Vail Valley, with plans starting at $999 a month. We optimize your Google Business Profile, website and listings so you rank in Google Maps and local results for the towns you serve, and we structure your content so AI assistants like ChatGPT, Gemini, Perplexity and Google AI Overviews can find, trust and recommend your business.',
    card: 'Rank in Google Maps and local results, and get recommended when customers ask ChatGPT and other AI assistants.',
    sections: [
      {
        h2: 'What is GEO, and how is it different from SEO?',
        html: `<p>Search engine optimization (SEO) is the work of ranking in Google’s results and Maps. Generative engine optimization (GEO) is the newer work of being named in the answers AI assistants write, such as ChatGPT, Gemini, Perplexity, Microsoft Copilot and Google’s AI Overviews.</p>
<p>The two overlap heavily. AI assistants lean on the same signals Google does: a clear, consistent business profile, a website that states facts plainly, reviews, and mentions on other trusted sites. GEO adds a focus on writing content that answers questions directly, marking it up with structured data, and making sure your business facts are identical everywhere they appear.</p>`,
      },
      {
        h2: 'Local SEO for a resort-town market',
        html: `<p>Vail Valley search is unusual. A large share of searches come from visitors and second-home owners, many of them searching before they arrive or from a phone in the village. Searches are also very town-specific: someone in Edwards may not drive to Vail for a service, and someone in Gypsum searches differently from someone in Beaver Creek.</p>
<p>We build your local presence around that: a fully optimized Google Business Profile, a page for each town you actually serve, consistent name, address and phone details across directories, and a steady plan for earning and responding to reviews.</p>`,
      },
      {
        h2: 'We built this site the same way',
        html: `<p>The site you are reading was built for local SEO and AI search from the start: one page per service and per town, plain-language answers at the top of every page, structured data describing the business and its services, and a machine-readable summary for AI crawlers. We apply the same methods to your website, or <a href="/website-design">build you a new one</a> if your current site cannot support them.</p>`,
      },
    ],
    includes: [
      'Lead Alchemist lead automation and AI software (included with every marketing package)',
      'Google Business Profile optimization and posting',
      'Local keyword and competitor research by town',
      'On-page SEO for service and town pages',
      'Schema markup (structured data) for your business and services',
      'AI search readiness: answer-first content, llms.txt and entity consistency',
      'Directory and citation cleanup for consistent name, address and phone',
      'Review generation and response plan',
      'Technical SEO: speed, indexing, sitemaps and Search Console',
      'Monthly ranking, traffic and lead reporting',
    ],
    faqs: [
      { q: 'How long does local SEO take to work?', a: 'Improvements to a Google Business Profile and on-page fixes can show results within weeks. Competitive rankings usually build over three to six months or longer, depending on the market, your reviews and how much content you have.' },
      { q: 'How do I get my business recommended by ChatGPT and other AI tools?', a: 'AI assistants recommend businesses they can clearly identify and trust. That means consistent business details everywhere, a website that answers common questions directly, structured data, strong reviews and mentions on other reputable sites. GEO work focuses on each of those signals.' },
      { q: 'What is the most important local SEO factor?', a: 'For most local businesses, a complete and active Google Business Profile with steady, genuine reviews has the biggest impact on Maps rankings, followed by a website with a clear page for each service and town you serve.' },
      { q: 'How much does SEO and AEO cost?', a: 'Vail Valley IT AEO plans start at $999 a month, covering local SEO, Google Business Profile and AI search optimization. Every plan includes Lead Alchemist, our lead automation and AI software. Larger markets, more towns and more content move the price up.' },
      { q: 'Do you guarantee first-page rankings?', a: 'No honest provider can guarantee rankings, because Google and AI tools control their own results. We commit to the work, report on it transparently every month and focus on the rankings and leads that matter to your business.' },
    ],
    related: ['website-design', 'google-ads-management', 'social-media-management'],
    price: { amount: 999, unit: 'month', text: 'AEO plans start at $999/month', note: 'Includes Lead Alchemist, our lead automation and AI software.' },
  },
  {
    slug: 'google-ads-management',
    name: 'Google Ads Management',
    group: 'Digital Marketing',
    icon: 'target',
    tier: 1,
    title: 'Google Ads Management in Vail Valley, CO | Vail Valley IT',
    description: 'Google Ads management for Vail Valley businesses — search, Maps and Local Services ads targeted to Eagle County and visitors planning a trip, with call tracking.',
    h1: 'Google Ads Management for Vail Valley Businesses',
    primaryKeyword: 'Google Ads management Vail Valley',
    answer: 'Vail Valley IT manages Google Ads for local businesses across the Vail Valley and Eagle County. We build search, Maps and Local Services campaigns targeted to the towns you serve and to visitors planning a trip, track every call, form and booking, and adjust spending every week so your budget goes to the searches that produce customers. Management starts at $899 a month.',
    card: 'Search, Maps and Local Services ads aimed at the valley and incoming visitors, with every call and lead tracked.',
    sections: [
      {
        h2: 'Why Google Ads works for local service businesses',
        html: `<p>Google Ads put your business at the top of the page at the moment someone searches for what you do. Unlike most advertising, you reach people who already have the need: “plumber in Avon,” “dinner reservations Vail,” “property manager Edwards.” You pay when someone clicks or, with Local Services Ads, when a lead contacts you.</p>
<p>The catch is waste. Poorly run accounts spend heavily on irrelevant searches, people far outside your service area and clicks that never turn into calls. Most of the value of management is in stopping that waste.</p>`,
      },
      {
        h2: 'Targeting the valley and the people coming to it',
        html: `<p>Vail Valley businesses often have two audiences: locals and visitors. We build campaigns for each. Local campaigns target the specific towns you serve, so a Gypsum business is not paying for clicks from Vail Pass. Visitor campaigns reach people searching from the Front Range and further afield who are planning a stay, timed to your seasons.</p>
<p>Budgets follow the calendar too. Spending rises ahead of your busy season and drops in the shoulder seasons, instead of running flat all year.</p>`,
      },
      {
        h2: 'Tracking that shows what you are actually getting',
        html: `<p>Clicks are not customers. Every account we manage tracks the actions that matter: phone calls from ads, form submissions, bookings and directions requests. Because we also handle <a href="/website-design">websites</a> and IT, conversion tracking is set up correctly on your site and forms, not guessed at.</p>
<p>Each month you get a plain-language report: what you spent, how many leads it produced, what each lead cost and what we are changing next.</p>`,
      },
    ],
    includes: [
      'Lead Alchemist lead automation and AI software (included with every marketing package)',
      'Account audit, setup or rebuild',
      'Search and Google Maps campaigns',
      'Local Services Ads setup and verification where eligible',
      'Town-level and visitor-market geo-targeting',
      'Keyword research and negative keyword management',
      'Ad copy and landing page recommendations',
      'Call, form and booking conversion tracking',
      'Seasonal budget planning',
      'Weekly optimization and monthly reporting',
    ],
    faqs: [
      { q: 'How much should a small business spend on Google Ads?', a: 'It depends on your industry, competition and service area. Local service keywords in the Vail Valley vary widely in cost. We recommend a starting budget after reviewing keyword costs for your business, then adjust based on the cost per lead.' },
      { q: 'What are Google Local Services Ads?', a: 'Local Services Ads appear at the very top of some searches with a “Google Screened” or “Google Guaranteed” badge. You pay per lead rather than per click. They are available for certain service categories and require background and license checks.' },
      { q: 'How much does Google Ads management cost?', a: 'Google Ads management from Vail Valley IT starts at $899 a month, and includes Lead Alchemist, our lead automation and AI software. Your ad budget is separate and paid directly to Google.' },
      { q: 'Is the ad budget included in management fees?', a: 'No. Your ad spend is paid directly to Google from your own account, so you always see exactly what was spent. Management is a separate flat fee.' },
      { q: 'Who owns the Google Ads account?', a: 'You do. The account is set up under your business, with us given management access. If you ever leave, the account, history and data stay with you.' },
    ],
    related: ['seo-ai-search-optimization', 'meta-ads-management', 'website-design'],
    price: { amount: 899, unit: 'month', text: 'Management starts at $899/month', note: 'Ad spend is separate and paid directly to Google from your own account. Includes Lead Alchemist, our lead automation and AI software.' },
  },
  {
    slug: 'meta-ads-management',
    name: 'Meta Ads Management',
    group: 'Digital Marketing',
    icon: 'megaphone',
    tier: 1,
    title: 'Facebook & Instagram Ads in Vail Valley, CO | Vail Valley IT',
    description: 'Facebook and Instagram ads for Vail Valley businesses — local and visitor targeting, video creative, lead forms and retargeting, managed by a local team.',
    h1: 'Facebook & Instagram Ads for Vail Valley Businesses',
    primaryKeyword: 'Facebook ads Vail Valley',
    answer: 'Vail Valley IT manages Meta ads, meaning Facebook and Instagram advertising, for businesses across the Vail Valley. We target locals by town and visitors by where they live and travel, create scroll-stopping video and image ads, set up lead forms and retargeting, and track results back to calls, bookings and sales so you know what your ad spend is returning. Management starts at $1,499 a month.',
    card: 'Facebook and Instagram campaigns with local and visitor targeting, video creative and results you can track.',
    sections: [
      {
        h2: 'When Meta ads make sense',
        html: `<p>Google Ads reach people who are already searching. Meta ads reach people before they search, while they scroll Facebook and Instagram. That makes them ideal for creating demand: promoting a new menu, an event, a seasonal offer, a listing or an opening, and for staying in front of people who have already visited your website.</p>
<p>They also work well for hiring. Many valley businesses use Instagram and Facebook ads to recruit seasonal staff ahead of winter and summer.</p>`,
      },
      {
        h2: 'Reaching locals and visitors',
        html: `<p>We target locals by the towns and radius you serve, and visitors by where they live, their interests and travel behavior, so your ads reach people planning a trip to the mountains, not just people already here. Retargeting brings back people who visited your website or engaged with your posts.</p>
<p>Some ad types have rules. Housing, employment, credit and financial services ads fall under Meta’s Special Ad Categories, which limit targeting by age, gender and ZIP code. If you are in real estate, property management, lending or hiring, we set up campaigns that comply from the start.</p>`,
      },
      {
        h2: 'Creative that earns attention',
        html: `<p>On Meta, the ad itself does most of the targeting work. Strong, authentic creative, especially <a href="/short-form-video-content">short vertical video</a> filmed in the valley, consistently outperforms polished stock imagery. We produce and test multiple versions and shift budget to what works.</p>
<p>Every campaign is connected to tracking on your <a href="/website-design">website</a> and booking tools, so results are measured in leads and sales, not just likes.</p>`,
      },
    ],
    includes: [
      'Lead Alchemist lead automation and AI software (included with every marketing package)',
      'Meta Business account and Pixel setup or cleanup',
      'Campaign strategy and audience planning',
      'Local radius and visitor-market targeting',
      'Image and short-form video ad creative',
      'Lead form and landing page setup',
      'Website and engagement retargeting',
      'Special Ad Category compliance for housing, employment and credit',
      'Conversion tracking with the Meta Pixel and Conversions API',
      'Ongoing testing, optimization and monthly reporting',
    ],
    faqs: [
      { q: 'Are Facebook ads worth it for a small local business?', a: 'Yes, when the offer is clear and the creative is strong. Meta ads are an affordable way to reach a defined local or visitor audience, promote events and offers, recruit staff and retarget website visitors. Results depend on tracking and on testing creative.' },
      { q: 'Should I advertise on Facebook or Instagram?', a: 'Usually both. Meta ads run across Facebook and Instagram from one campaign, and the system shifts budget toward whichever placement performs better for your goal.' },
      { q: 'Can I target tourists planning a trip to Vail?', a: 'Yes. Meta allows targeting by where people live, their interests and travel-related behavior, so campaigns can reach people in your key visitor markets before and during their trip, subject to Meta’s targeting rules.' },
      { q: 'How much does Meta ads management cost?', a: 'Facebook and Instagram ads management from Vail Valley IT starts at $1,499 a month, and includes Lead Alchemist, our lead automation and AI software. Your ad budget is separate and paid directly to Meta.' },
      { q: 'Is ad spend included in the management fee?', a: 'No. Ad spend is billed by Meta directly to your own ad account, so you always see exactly what was spent. Management is a separate flat fee.' },
    ],
    related: ['short-form-video-content', 'social-media-management', 'google-ads-management'],
    price: { amount: 1499, unit: 'month', text: 'Management starts at $1,499/month', note: 'Ad spend is separate and paid directly to Meta from your own account. Includes Lead Alchemist, our lead automation and AI software.' },
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
// Six featured services shown on the homepage grid (mirrors the approved mockup).
export const featuredServices = ['managed-it-services', 'compliance-cybersecurity', 'microsoft-365-email-migration', 'it-data-protection', 'automation-ai-enablement', 'remote-tech-support'];
