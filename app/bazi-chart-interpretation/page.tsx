import React from 'react';
import ArticleView from '@/components/ArticleView';
import { getArticleSchema } from '@/lib/seo';

export const metadata = {
  title: 'BaZi Chart Interpretation Guide: Pillar by Pillar',
  description: 'Dive deep into your BaZi chart structure. Understand what the Year, Month, Day, and Hour pillars represent in your life and career.',
  alternates: { canonical: 'https://imperialbazi.com/bazi-chart-interpretation/' },
  openGraph: {
    title: 'BaZi Chart Interpretation Guide: Pillar by Pillar',
    description: 'Dive deep into your BaZi chart structure. Understand what the Year, Month, Day, and Hour pillars represent in your life and career.',
    url: 'https://imperialbazi.com/bazi-chart-interpretation/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function BaziChartInterpretationPage() {
  const jsonLd = getArticleSchema(
    'BaZi Chart Interpretation Guide: Pillar by Pillar',
    'Dive deep into your BaZi chart structure. Understand what the Year, Month, Day, and Hour pillars represent in your life and career.',
    'https://imperialbazi.com/bazi-chart-interpretation/'
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleView slug="bazi-chart-interpretation" />
    </>
  );
}
