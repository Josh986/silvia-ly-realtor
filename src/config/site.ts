export const siteConfig = {
  name: 'Silvia Ly',
  title: 'Silvia Ly | Houston REALTOR®',
  tagline: 'Helping Houston families find a place to put down roots.',
  description:
    'Silvia Ly is a Texas REALTOR® serving the Houston area — helping families buy, sell, and find a place to put down roots with warmth, patience, and care.',
  // NOTE: The values below are AI-generated SAMPLES so the site feels complete.
  // ⚠️ VERIFY AND REPLACE every value in this file with Silvia's real details before launch.
  url: 'https://silvialyhomes.com', // SAMPLE — replace with the real domain before launch
  contact: {
    // SAMPLE phone uses the 555-01xx range reserved for fictional use. Replace with the verified number.
    phone: '(281) 555-0147',
    // SAMPLE email — replace with Silvia's real, verified address before launch.
    email: 'hello@silvialyhomes.com',
    har: 'https://www.har.com/silvia-ly/agent_SILLY',
    // SAMPLE scheduling link — replace with the real Calendly/booking URL before launch.
    calendar: 'https://calendly.com/silvialyhomes/home-conversation',
  },
  social: {
    // SAMPLE social links — replace with Silvia's real profile URLs before launch.
    facebook: 'https://www.facebook.com/silvialyhomes',
    instagram: 'https://www.instagram.com/silvialyhomes',
    linkedin: 'https://www.linkedin.com/in/silvialyhomes',
  },
  brokerage: {
    // SAMPLE brokerage details — replace with Silvia's real brokerage name and TREC license number before launch.
    name: 'Rooted Realty Group',
    license: 'TREC License #0000000',
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Meet Silvia', href: '/meet-silvia' },
  { label: 'Roots & New Beginnings', href: '/roots-and-new-beginnings' },
  { label: 'Buy', href: '/buy-a-home' },
  { label: 'Sell', href: '/sell-your-home' },
  { label: 'Neighborhoods', href: '/houston-neighborhoods' },
  { label: 'Plant Notes', href: '/plant-notes' },
  { label: 'Contact', href: '/contact' },
] as const;
