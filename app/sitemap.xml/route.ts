import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// Per-route last-meaningful-content date (YYYY-MM-DD). Bump a route's date
// only when that page's content or internal links actually change — a blanket
// "today" on every URL is a signal Google learns to discount.
const ROUTE_LASTMOD: Record<string, string> = {
  '': '2026-09-09',
  'bazi-calculator/': '2026-09-09',
  'bazi-reading/': '2026-08-28',
  'bazi-chart-interpretation/': '2026-08-28',
  'how-to-read-bazi-chart/': '2026-08-28',
  'bazi-personality-analysis/': '2026-08-28',
  'bazi-day-master-calculator/': '2026-07-08',
  'bazi-10-year-luck-calculator/': '2026-07-08',
  'bazi-compatibility-calculator/': '2026-07-08',
  'bazi-compatibility-guide/': '2026-09-09',
  'bazi-vs-chinese-zodiac/': '2026-08-28',
  'bazi-vs-feng-shui/': '2026-08-28',
  'four-pillars-of-destiny-calculator/': '2026-07-08',
  'bazi-yearly-forecast/': '2026-08-28',
  'bazi-yearly-forecast-calculator/': '2026-07-08',
  'bazi/ten-gods-explained/': '2026-07-08',
  'bazi/symbolic-stars/': '2026-07-08',
  'bazi/five-elements-chart/': '2026-07-08',
  'bazi/useful-god-explained/': '2026-07-08',
  'bazi/day-master/': '2026-07-08',
  'glossary/': '2026-07-08',
  'faq/': '2026-07-08',
};

const STEM_LASTMOD = '2026-07-08';

const STATIC_ROUTES = Object.keys(ROUTE_LASTMOD);

const STEM_SLUGS = [
  'jia-wood',
  'yi-wood',
  'bing-fire',
  'ding-fire',
  'wu-earth',
  'ji-earth',
  'geng-metal',
  'xin-metal',
  'ren-water',
  'gui-water',
];

export async function GET(req: NextRequest) {
  const appUrl = 'https://fourpillarscalculator.com';

  const xmlUrls = [
    ...STATIC_ROUTES.map(route => `
  <url>
    <loc>${appUrl}/${route}</loc>
    <lastmod>${ROUTE_LASTMOD[route]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '' || route === 'bazi-calculator/' ? '1.0' : '0.8'}</priority>
  </url>`),
    ...STEM_SLUGS.map(slug => `
  <url>
    <loc>${appUrl}/bazi/day-master/${slug}/</loc>
    <lastmod>${STEM_LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`)
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls.join('')}
</urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
