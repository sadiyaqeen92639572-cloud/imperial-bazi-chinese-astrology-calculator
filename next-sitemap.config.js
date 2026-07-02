/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://imperialbazi.com',
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
