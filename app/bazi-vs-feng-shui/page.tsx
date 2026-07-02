import React from 'react';
import ArticleView from '@/components/ArticleView';
import { getArticleSchema } from '@/lib/seo';

export const metadata = {
  title: 'BaZi vs Feng Shui: Two Branches of Chinese Metaphysics',
  description: 'Understand the key differences between BaZi destiny analysis and Feng Shui spatial energy. Learn when to use each practice effectively.',
  alternates: { canonical: 'https://imperialbazi.com/bazi-vs-feng-shui/' },
  openGraph: {
    title: 'BaZi vs Feng Shui: Two Branches of Chinese Metaphysics',
    description: 'Understand the key differences between BaZi destiny analysis and Feng Shui spatial energy. Learn when to use each practice effectively.',
    url: 'https://imperialbazi.com/bazi-vs-feng-shui/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function BaziVsFengShuiPage() {
  const jsonLd = getArticleSchema(
    'BaZi vs Feng Shui: Two Branches of Chinese Metaphysics',
    'Understand the key differences between BaZi destiny analysis and Feng Shui spatial energy. Learn when to use each practice effectively.',
    'https://imperialbazi.com/bazi-vs-feng-shui/'
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ArticleView slug="bazi-vs-feng-shui" />
    </>
  );
}
