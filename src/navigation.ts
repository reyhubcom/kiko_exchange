import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Exchange',
      links: [
        {
          text: 'Swap',
          href: getPermalink('/swap'),
        },
        {
          text: 'Trade',
          href: getPermalink('/#'),
        },
        {
          text: 'Buy Crypto',
          href: getPermalink('/swap'),
        },
        
      ],
    },
    {
      text: 'Earn',
      links: [
        {
          text: 'Yield',
          href: getPermalink('/#'),
        },
        {
          text: 'Staked',
          href: getPermalink('/#'),
        },
        {
          text: 'Farming',
          href: getPermalink('/#'),
        },
        
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'KIKO Shop', href: 'https://linktr.ee/KIKOStake', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Buy Crypto',
      links: [
        { text: 'Buy Bitcoin [ BTC ]', href: '/swap' },
        { text: 'Buy Ethereum [ ETH ]', href: '/swap' },
        { text: 'Buy Solana [ SOL ]', href: '/swap' },
        { text: 'Buy Monad [ MON ]', href: '/swap' },
        { text: 'Buy Binance [ BNB ]', href: '/swap' },
        { text: 'Buy Avalanche [ AVAX ]', href: '/swap' },
        { text: 'Buy Tron [ TRX ]', href: '/swap' },
      ],
    },
    {
      title: 'Exchange',
      links: [
        { text: 'Exchange Bitcoin [ BTC ]', href: '#' },
        { text: 'Exchange Ethereum [ ETH ]', href: '#' },
        { text: 'Exchange Solana [ SOL ] ', href: '#' },
        { text: 'Exchange Binance [ BNB ]', href: '#' },
        { text: 'Exchange Monad [ MON ]', href: '#' },
        { text: 'Exchange GRAM[ GRAM ]', href: '#' },
        { text: 'Exchange Tron [ TRX ]', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'KIKO Shop', href: 'https://linktr.ee/KIKOStake' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://reyme.xyz"> Rey</a> · 2026 KIKO.Exchange All Rights Reserved.
  `,
};
