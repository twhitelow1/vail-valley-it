// Add real, confirmed events here. Event schema is only emitted for dated entries,
// so nothing fake is ever published. Dates in ISO format with Mountain offset.
export type Event = {
  title: string;
  kind: 'chamber' | 'webinar';
  start: string; // '2026-11-12T08:00:00-07:00'
  end: string;
  venue?: string; // in-person only
  address?: string;
  url?: string; // registration link
  description: string;
};
export const events: Event[] = [];

export const workshopTopics = [
  { h: 'Cybersecurity basics every owner should know', p: 'The handful of controls that stop most attacks on small businesses: MFA, backups, email security and staff habits.' },
  { h: 'Spotting phishing and wire fraud', p: 'Real examples of invoice, payment-change and impersonation scams aimed at valley businesses, and the one-call rule that stops them.' },
  { h: 'Practical AI for small business', p: 'Where AI saves real hours today, which tools are safe for client data, and how to write an AI use policy.' },
  { h: 'Cyber insurance: what carriers ask for', p: 'Walk through a typical application, what each question means and what to put in place before renewal.' },
  { h: 'HIPAA and FTC Safeguards in plain language', p: 'What regulated healthcare and financial offices need to have documented and running.' },
  { h: 'Getting ready for ski season', p: 'Seasonal staff onboarding, guest Wi-Fi, POS reliability and backup internet before the busiest months.' },
];
