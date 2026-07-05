import React from 'react';
import { SHEN_SHA_DATA } from '@/lib/data/shen-sha';
import RelatedPages from '@/components/RelatedPages';
import { getArticleSchema, getFAQPageSchema } from '@/lib/seo';
import { Sparkles, GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'BaZi Symbolic Stars: Peach Blossom, Academic Star & Shen Sha Explained',
  description: 'Understand BaZi Shen Sha symbolic stars — Peach Blossom (Flower of Romance), Academic Star (Wen Chang), the Year Pillar, and what your "life star" means.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi/symbolic-stars/' },
  openGraph: {
    title: 'BaZi Symbolic Stars: Peach Blossom, Academic Star & Shen Sha Explained',
    description: 'Understand BaZi Shen Sha symbolic stars — Peach Blossom (Flower of Romance), Academic Star (Wen Chang), the Year Pillar, and what your "life star" means.',
    url: 'https://fourpillarscalculator.com/bazi/symbolic-stars/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

const ICONS: Record<string, any> = { 'peach-blossom': Sparkles, 'academic-star': GraduationCap };

export default function SymbolicStarsPage() {
  const url = 'https://fourpillarscalculator.com/bazi/symbolic-stars/';
  const articleSchema = getArticleSchema(
    'BaZi Symbolic Stars: Peach Blossom, Academic Star & Shen Sha Explained',
    'Understand BaZi Shen Sha symbolic stars — Peach Blossom, Academic Star, the Year Pillar, and the "life star" concept.',
    url
  );

  const stars = Object.values(SHEN_SHA_DATA);
  const faqs = [
    ...stars.map(s => ({
      question: `What is the ${s.name} (${s.chinese}) in BaZi?`,
      answer: `${s.summary} ${s.howToFind}`,
    })),
    {
      question: 'What is the Year Pillar in a BaZi chart?',
      answer: 'The Year Pillar (年柱) is the first of the Four Pillars, built from your birth year\'s Heavenly Stem and Earthly Branch. It traditionally represents ancestry, family background, early childhood (roughly birth to age 15), and your public-facing social image. It also carries your Chinese zodiac animal sign.',
    },
    {
      question: 'What does "life star" mean in BaZi?',
      answer: '"Life star" is an informal term some readers use for the Day Master (the Day Stem) — the core element that anchors the entire chart and is treated as "you" in a BaZi reading. It is not a separate Shen Sha; see our Day Master guide for the full breakdown of all ten possible Day Master types.',
    },
  ];
  const faqSchema = getFAQPageSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10" id="symbolic-stars-page-root">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            BaZi Symbolic Stars (Shen Sha)
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Beyond the core Four Pillars and Ten Gods, classical BaZi layers in a set of symbolic stars
            (神煞 Shen Sha) that add specific life themes — romance, scholarship, and more — on top of your
            main chart structure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stars.map(star => {
            const Icon = ICONS[star.code] || Sparkles;
            return (
              <div key={star.code} className="bg-slate-900/60 border border-slate-850 rounded-2xl p-6 space-y-3">
                <div className="flex items-center space-x-2 text-amber-500">
                  <Icon className="h-5 w-5" />
                  <h2 className="text-lg font-serif text-slate-100">
                    {star.name} <span className="text-slate-500 text-sm">({star.chinese})</span>
                  </h2>
                </div>
                <p className="text-xs text-slate-500">Also known as: {star.altNames.join(', ')}</p>
                <p className="text-sm text-slate-300">{star.summary}</p>
                <p className="text-sm text-slate-400">{star.personality}</p>
                <p className="text-xs text-slate-500 pt-2 border-t border-slate-850">{star.howToFind}</p>
              </div>
            );
          })}
        </div>

        <section className="bg-slate-900/60 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-serif text-slate-200 tracking-wide">The Year Pillar</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            The Year Pillar (年柱) is the first of the Four Pillars, built from your birth year&apos;s Heavenly Stem
            and Earthly Branch. It traditionally represents ancestry, family background, and early childhood
            (roughly birth to age 15), and carries your Chinese zodiac animal sign.
          </p>
          <h2 className="text-xl font-serif text-slate-200 tracking-wide pt-2">What Is a &quot;Life Star&quot;?</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            &quot;Life star&quot; is an informal term some readers use for the Day Master (the Day Stem) — the core
            element that anchors the entire chart. It is not a distinct Shen Sha; see the Day Master guide below
            for the complete profile of all ten Day Master types.
          </p>
        </section>

        <div className="pt-6 border-t border-slate-900">
          <RelatedPages currentPath="/bazi/symbolic-stars/" />
        </div>
      </div>
    </>
  );
}
