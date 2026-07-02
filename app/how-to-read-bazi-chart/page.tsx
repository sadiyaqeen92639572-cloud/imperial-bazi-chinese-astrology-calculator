import React from 'react';
import ArticleView from '@/components/ArticleView';
import { getHowToSchema } from '@/lib/seo';

export const metadata = {
  title: 'How to Read a BaZi Chart (Step-by-Step Tutorial)',
  description: 'A sequential, beginner-friendly tutorial on reading a Chinese astrology BaZi chart. Learn to identify stems, branches, and elements.',
  alternates: { canonical: 'https://imperialbazi.com/how-to-read-bazi-chart/' },
  openGraph: {
    title: 'How to Read a BaZi Chart (Step-by-Step Tutorial)',
    description: 'A sequential, beginner-friendly tutorial on reading a Chinese astrology BaZi chart. Learn to identify stems, branches, and elements.',
    url: 'https://imperialbazi.com/how-to-read-bazi-chart/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function HowToReadBaziChartPage() {
  const jsonLd = getHowToSchema(
    'How to Read a BaZi Chart (Step-by-Step Tutorial)',
    'A sequential, beginner-friendly tutorial on reading a Chinese astrology BaZi chart. Learn to identify stems, branches, and elements.',
    'https://imperialbazi.com/how-to-read-bazi-chart/',
    [
      { name: 'Get your BaZi chart', text: 'Use the Imperial BaZi Calculator to generate your Four Pillars of Destiny chart.' },
      { name: 'Identify your Day Master', text: 'Find the Heavenly Stem in the Day Pillar — this is your Day Master and core identity.' },
      { name: 'Read the elements', text: 'Count and balance the five elements (Wood, Fire, Earth, Metal, Water) across all pillars.' },
      { name: 'Interpret the pillars', text: 'Year = ancestors, Month = career/parents, Day = self/spouse, Hour = children/future.' },
    ]
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleView slug="how-to-read-bazi-chart" />
    </>
  );
}
