export const siteConfig = {
  name: 'Silvia Ly',
  title: 'Silvia Ly | Houston REALTOR®',
  tagline: 'Helping Houston families find a place to put down roots.',
  description:
    'Silvia Ly is a Texas REALTOR® serving the Houston area — helping families buy, sell, and find a place to put down roots with warmth, patience, and care.',
  url: 'https://YOUR-DOMAIN-HERE.com', // PLACEHOLDER: update before launch
  contact: {
    phone: '<!-- PLACEHOLDER: Add verified phone number before launch -->',
    email: '<!-- PLACEHOLDER: Add verified email before launch -->',
    har: 'https://www.har.com/silvia-ly/agent_SILLY',
    calendar: '<!-- PLACEHOLDER: Add scheduling link (e.g., Calendly) -->',
  },
  social: {
    facebook: '<!-- PLACEHOLDER -->',
    instagram: '<!-- PLACEHOLDER -->',
    linkedin: '<!-- PLACEHOLDER -->',
  },
  brokerage: {
    name: '<!-- PLACEHOLDER: Brokerage Name -->',
    license: '<!-- PLACEHOLDER: TX License # -->',
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
