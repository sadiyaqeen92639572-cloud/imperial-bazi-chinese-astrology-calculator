import React from 'react';
import Link from 'next/link';
import { DAY_MASTERS_DATA } from '@/lib/data/day-masters';
import { ELEMENTS_MAP, STEMS_MAP } from '@/lib/bazi';
import RelatedPages from '@/components/RelatedPages';
import { getCollectionPageSchema } from '@/lib/seo';
import { Sparkles, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'The 10 Day Masters of Chinese Astrology: Deep Profiles',
  description: 'Explore deep profiles for the 10 Day Masters (Heavenly Stems) in Chinese astrology — Jia Wood, Yi Wood, Bing Fire, Ding Fire, and more.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi/day-master/' },
  openGraph: {
    title: 'The 10 Day Masters of Chinese Astrology: Deep Profiles',
    description: 'Explore deep profiles for the 10 Day Masters (Heavenly Stems) in Chinese astrology — Jia Wood, Yi Wood, Bing Fire, Ding Fire, and more.',
    url: 'https://fourpillarscalculator.com/bazi/day-master/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function DayMastersHubPage() {
  const url = 'https://fourpillarscalculator.com/bazi/day-master/';
  const collectionSchema = getCollectionPageSchema(
    'The 10 Day Masters of Chinese Astrology',
    'Explore deep profiles for the 10 Day Masters (Heavenly Stems) in Chinese astrology.',
    url,
    Object.keys(DAY_MASTERS_DATA).map(slug => {
      const dm = DAY_MASTERS_DATA[slug];
      const asciiStem = STEMS_MAP[dm.stem]?.en || dm.stem;
      return {
        name: `${asciiStem} ${dm.element} Day Master`,
        url: `${url}${slug}/`,
        description: dm.summary
      };
    })
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="day-masters-hub">
        {/* Intro */}
        <div className="space-y-4 border-b border-slate-900 pb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-1 bg-amber-500/10 text-amber-500 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3 w-3" />
            <span>Core Identity Profiles</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            The 10 Day Masters (Heavenly Stems)
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            In classical BaZi, the Day Master is the self-element located on the Day of your birth. Click any profile below to explore their specific career, personality, relationship compatibility, and growth patterns.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" id="day-masters-hub-grid">
          {Object.entries(DAY_MASTERS_DATA).map(([slug, dm]) => {
            const elColor = ELEMENTS_MAP[dm.element]?.color;

            return (
              <Link
                key={slug}
                href={`/bazi/day-master/${slug}/`}
                className="group bg-slate-900 border border-slate-850 hover:border-amber-500/40 rounded-xl p-5 flex flex-col justify-between transition-all hover:shadow-lg"
              >
                <div>
                  <div className="flex justify-between items-center">
                    <span
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-lg text-white"
                      style={{ backgroundColor: elColor }}
                    >
                      {dm.stem}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{dm.polarity}</span>
                  </div>

                  <h2 className="text-base font-serif font-semibold text-slate-200 mt-4 group-hover:text-amber-400 transition-colors">
                    {dm.stem} {dm.element}
                  </h2>
                  <p className="text-xs text-slate-500 italic mt-0.5">({dm.name})</p>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed line-clamp-3">
                    {dm.summary}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-amber-500/95 group-hover:text-amber-400">
                  <span>Read full trait guide</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Related */}
        <RelatedPages currentPath="/bazi/day-master/" />
      </div>
    </>
  );
}
