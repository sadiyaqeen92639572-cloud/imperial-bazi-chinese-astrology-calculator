import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const appUrl = 'https://fourpillarscalculator.com';

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${appUrl}/sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
