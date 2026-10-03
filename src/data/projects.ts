// Case studies. Only facts the client has approved. Set published:true to show.
export type Project = { slug: string; published: boolean; client: string; industry: string; town?: string; challenge: string; work: string[]; result: string; quote?: { text: string; author: string } };
export const projects: Project[] = [
  {
    slug: 'insurance-agency-managed-security',
    published: true,
    client: 'Independent insurance agency',
    industry: 'Financial & Insurance',
    challenge: 'An insurance agency handling sensitive client data needed IT that matched its responsibility to protect it, plus a dependable partner for day-to-day support.',
    work: ['Managed IT under an ongoing service agreement', 'Layered security controls across the team', 'Day-to-day help desk support', 'Website support alongside IT'],
    result: 'The agency moved from basic IT to a managed, security-first environment with one accountable partner.',
    quote: { text: 'Todd has helped get our team protected at a level we had no idea existed.', author: 'Tony Martinez, Google review' },
  },
  // TODO add approved projects: client type, town, challenge, what we did, measurable result.
];
