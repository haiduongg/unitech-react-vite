const FooterRoutes: {
  name: string;
  path?: string;
  links?: { name: string; path: string }[];
}[] = [
  {
    name: 'Get in touch',
    links: [
      { name: 'About us', path: '/about' },
      { name: 'Carrers', path: '/carrers' },
      { name: 'Press Releases', path: '/press-releases' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  {
    name: 'Connections',
    links: [
      { name: 'Facebook', path: '/' },
      { name: 'Instagram', path: '/' },
      { name: 'Youtube', path: '/' },
      { name: 'LinkedIn', path: '/' },
      { name: 'Tiktok', path: '/' },
    ],
  },
  {
    name: 'Earnings',
    links: [
      { name: 'Become an Affiliate', path: '/earnings/become-an-affiliate' },
      {
        name: 'Advertise your product',
        path: '/earnings/advertise-your-product',
      },
      { name: 'Sell on Market', path: '/earnings/sell-on-market' },
    ],
  },
  {
    name: 'Account',
    links: [
      { name: 'Your account', path: '/account/your-account' },
      { name: 'Returns Centre', path: '/account/returns-center' },
      {
        name: '100 % purchase protection',
        path: '/account/100-purchase-protection',
      },
      { name: 'Chat with us', path: '/account/chat-with-us' },
      { name: 'Help', path: '/account/help' },
    ],
  },
];

export { FooterRoutes };
