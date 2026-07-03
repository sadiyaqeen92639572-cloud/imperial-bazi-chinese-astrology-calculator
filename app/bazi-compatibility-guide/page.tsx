import React from 'react';
import ArticleView from '@/components/ArticleView';
import { getArticleSchema } from '@/lib/seo';

export const metadata = {
  title: 'BaZi Compatibility Guide: How to Assess Relationships',
  description: 'Learn to use BaZi to assess romantic, professional, and family compatibility. A practical Chinese astrology guide to interpersonal dynamics.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi-compatibility-guide/' },
  openGraph: {
    title: 'BaZi Compatibility Guide: How to Assess Relationships',
    description: 'Learn to use BaZi to assess romantic, professional, and family compatibility. A practical Chinese astrology guide to interpersonal dynamics.',
    url: 'https://fourpillarscalculator.com/bazi-compatibility-guide/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function BaziCompatibilityGuidePage() {
  const jsonLd = getArticleSchema(
    'BaZi Compatibility Guide: How to Assess Relationships',
    'Learn to use BaZi to assess romantic, professional, and family compatibility. A practical Chinese astrology guide to interpersonal dynamics.',
    'https://fourpillarscalculator.com/bazi-compatibility-guide/'
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleView slug="bazi-compatibility-guide" />
    </>
  );
}
