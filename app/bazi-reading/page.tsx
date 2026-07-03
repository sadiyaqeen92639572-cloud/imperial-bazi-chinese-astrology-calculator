import React from 'react';
import ArticleView from '@/components/ArticleView';
import { getArticleSchema } from '@/lib/seo';

export const metadata = {
  title: 'BaZi Reading: What to Expect and How to Prepare',
  description: 'Everything you need to know before getting your first BaZi reading. Learn to read and interpret a professional Chinese astrology chart.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi-reading/' },
  openGraph: {
    title: 'BaZi Reading: What to Expect and How to Prepare',
    description: 'Everything you need to know before getting your first BaZi reading. Learn to read and interpret a professional Chinese astrology chart.',
    url: 'https://fourpillarscalculator.com/bazi-reading/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function BaziReadingPage() {
  const jsonLd = getArticleSchema(
    'BaZi Reading: What to Expect and How to Prepare',
    'Everything you need to know before getting your first BaZi reading. Learn to read and interpret a professional Chinese astrology chart.',
    'https://fourpillarscalculator.com/bazi-reading/'
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleView slug="bazi-reading" />
    </>
  );
}
