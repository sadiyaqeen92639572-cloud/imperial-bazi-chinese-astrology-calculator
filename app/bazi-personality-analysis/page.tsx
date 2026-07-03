import React from 'react';
import ArticleView from '@/components/ArticleView';

export const metadata = {
  title: 'BaZi Personality Analysis: Your Astrological DNA',
  description: 'Discover how BaZi decodes your personality, psychological traits, strengths, and shadow qualities through the lens of Chinese astrology.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi-personality-analysis/' },
  openGraph: {
    title: 'BaZi Personality Analysis: Your Astrological DNA',
    description: 'Discover how BaZi decodes your personality, psychological traits, strengths, and shadow qualities through the lens of Chinese astrology.',
    url: 'https://fourpillarscalculator.com/bazi-personality-analysis/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function BaziPersonalityAnalysisPage() {
  return <ArticleView slug="bazi-personality-analysis" />;
}
