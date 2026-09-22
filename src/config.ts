// Site-wide settings. Edit here; every page reads from this file.
export const site = {
  name: 'Fab Health Informatics',
  shortName: 'FHI',
  legalName: 'Fab Health Informatics, LLC',
  person: 'Fabrício Kury, MD',
  location: 'New York, NY',
  email: 'fhi@kury.dev',
  tagline: 'Health data, made usable.',
  description:
    'Fabrício Kury, MD — physician and health-data scientist. CMS VRDC Data Use Agreements, Medicare claims studies, and OMOP / data-model mapping.',
  links: {
    github: 'https://github.com/fabkury',
    linkedin: 'https://www.linkedin.com/in/fab-kury/',
    scholar: 'https://scholar.google.com/citations?user=MyXCkYkAAAAJ',
  },
  // Cloudflare Web Analytics token. Leave empty to disable analytics entirely.
  cfAnalyticsToken: '',
};

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/services/vrdc-dua/', label: 'VRDC DUAs' },
  { href: '/work/', label: 'Work' },
  { href: '/publications/', label: 'Publications' },
  { href: '/about/', label: 'About' },
];
