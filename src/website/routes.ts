export type WebsiteRoute =
  | '/'
  | '/open-app'
  | '/about'
  | '/faq'
  | '/feedback'
  | '/updates'
  | '/acknowledgements'
  | '/contact'
  | '/help'
  | '/privacy'
  | '/terms'
  | '/support'
  | '/app';

export const WEBSITE_ROUTES: readonly WebsiteRoute[] = [
  '/',
  '/open-app',
  '/about',
  '/faq',
  '/feedback',
  '/updates',
  '/acknowledgements',
  '/contact',
  '/help',
  '/privacy',
  '/terms',
  '/support',
  '/app',
] as const;

export function normalizeRoute(pathname: string): WebsiteRoute {
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  if (WEBSITE_ROUTES.includes(cleaned as WebsiteRoute)) {
    return cleaned as WebsiteRoute;
  }
  return '/';
}

export interface NavItem {
  label: string;
  path: WebsiteRoute;
}

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Help', path: '/help' },
  { label: 'Contact', path: '/contact' },
];

export const MOBILE_NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Open App', path: '/open-app' },
  { label: 'About Us', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Help & Support', path: '/help' },
  { label: 'Feedback & Suggestions', path: '/feedback' },
  { label: 'Updates & Announcements', path: '/updates' },
  { label: 'Support the Project', path: '/support' },
  { label: 'Acknowledgements', path: '/acknowledgements' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms & Conditions', path: '/terms' },
];

export const FOOTER_PLATFORM_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Open App', path: '/open-app' },
  { label: 'Help & Support', path: '/help' },
  { label: 'FAQ', path: '/faq' },
];

export const FOOTER_COMMUNITY_LINKS: NavItem[] = [
  { label: 'About Us', path: '/about' },
  { label: 'Updates & Announcements', path: '/updates' },
  { label: 'Feedback & Suggestions', path: '/feedback' },
  { label: 'Support the Project', path: '/support' },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: 'Acknowledgements', path: '/acknowledgements' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms & Conditions', path: '/terms' },
];
