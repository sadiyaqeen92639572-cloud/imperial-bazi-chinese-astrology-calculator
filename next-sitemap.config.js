/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fourpillarscalculator.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/*',
      },
    ],
  },
};
