import React from 'react';
import ArticleView from '@/components/ArticleView';

export const metadata = {
  title: 'BaZi Yearly Forecast: Navigating the Solar Year',
  description: 'Understand the current solar year astrological trends. Learn how the cosmic transitions affect your personal Day Master and career.',
  alternates: { canonical: 'https://imperialbazi.com/bazi-yearly-forecast/' },
  openGraph: {
    title: 'BaZi Yearly Forecast: Navigating the Solar Year',
    description: 'Understand the current solar year astrological trends. Learn how the cosmic transitions affect your personal Day Master and career.',
    url: 'https://imperialbazi.com/bazi-yearly-forecast/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function BaziYearlyForecastPage() {
  return <ArticleView slug="bazi-yearly-forecast" />;
}
