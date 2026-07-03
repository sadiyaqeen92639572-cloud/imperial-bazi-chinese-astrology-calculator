import React from 'react';
import ArticleView from '@/components/ArticleView';
import { getArticleSchema } from '@/lib/seo';

export const metadata = {
  title: 'BaZi vs Chinese Zodiac: Key Differences Explained',
  description: 'BaZi and the Chinese Zodiac are not the same thing. This guide breaks down what each system measures and which is more accurate for destiny analysis.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi-vs-chinese-zodiac/' },
  openGraph: {
    title: 'BaZi vs Chinese Zodiac: Key Differences Explained',
    description: 'BaZi and the Chinese Zodiac are not the same thing. This guide breaks down what each system measures and which is more accurate for destiny analysis.',
    url: 'https://fourpillarscalculator.com/bazi-vs-chinese-zodiac/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function BaziVsChineseZodiacPage() {
  const jsonLd = getArticleSchema(
    'BaZi vs Chinese Zodiac: Key Differences Explained',
    'BaZi and the Chinese Zodiac are not the same thing. This guide breaks down what each system measures and which is more accurate for destiny analysis.',
    'https://fourpillarscalculator.com/bazi-vs-chinese-zodiac/'
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleView slug="bazi-vs-chinese-zodiac" />
    </>
  );
}
