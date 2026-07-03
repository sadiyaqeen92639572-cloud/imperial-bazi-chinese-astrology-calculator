import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const STATIC_ROUTES = [
  '',
  'bazi-calculator/',
  'bazi-reading/',
  'bazi-chart-interpretation/',
  'how-to-read-bazi-chart/',
  'bazi-personality-analysis/',
  'bazi-day-master-calculator/',
  'bazi-10-year-luck-calculator/',
  'bazi-compatibility-calculator/',
  'bazi-compatibility-guide/',
  'bazi-vs-chinese-zodiac/',
  'bazi-vs-feng-shui/',
  'four-pillars-of-destiny-calculator/',
  'bazi-yearly-forecast/',
  'bazi-yearly-forecast-calculator/',
  'bazi/ten-gods-explained/',
  'bazi/five-elements-chart/',
  'bazi/useful-god-explained/',
  'bazi/day-master/',
  'glossary/',
  'faq/',
];

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
    <lastmod>2026-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '' || route === 'bazi-calculator/' ? '1.0' : '0.8'}</priority>
  </url>`),
    ...STEM_SLUGS.map(slug => `
  <url>
    <loc>${appUrl}/bazi/day-master/${slug}/</loc>
    <lastmod>2026-07-01</lastmod>
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
