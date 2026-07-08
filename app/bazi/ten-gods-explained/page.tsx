import React from 'react';
import { TEN_GODS_DATA } from '@/lib/data/ten-gods';
import RelatedPages from '@/components/RelatedPages';
import { getArticleSchema, getFAQPageSchema } from '@/lib/seo';
import { Shield, Coins, Sparkles, BookOpen, GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'The 10 Gods in BaZi Explained (Simple Guide)',
  description: 'Learn the Ten Gods (Shi Shen) in BaZi — Friend, Rob Wealth, Eating God, Hurting Officer, and more — explained clearly without complex jargon.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi/ten-gods-explained/' },
  openGraph: {
    title: 'The 10 Gods in BaZi Explained (Simple Guide)',
    description: 'Learn the Ten Gods (Shi Shen) in BaZi — Friend, Rob Wealth, Eating God, Hurting Officer, and more — explained clearly without complex jargon.',
    url: 'https://fourpillarscalculator.com/bazi/ten-gods-explained/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function TenGodsExplainedPage() {
  const url = 'https://fourpillarscalculator.com/bazi/ten-gods-explained/';
  const articleSchema = getArticleSchema(
    'The 10 Gods in BaZi Explained (Simple Guide)',
    'Learn the Ten Gods (Shi Shen) in BaZi — Friend, Rob Wealth, Eating God, Hurting Officer, and more — explained clearly without complex jargon.',
    url
  );

  const faqs = Object.values(TEN_GODS_DATA).slice(0, 3).map(tg => ({
    question: `What does the ${tg.name} (${tg.chinese}) mean in BaZi?`,
    answer: `${tg.summary} Personality wise: ${tg.personality} Best careers: ${tg.career}`
  }));
  const faqSchema = getFAQPageSchema(faqs);

  const iconsMap: Record<string, any> = {
    Self: Shield,
    Output: Sparkles,
    Wealth: Coins,
    Power: GraduationCap,
    Resource: BookOpen
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="ten-gods-explained-page">
        {/* Intro */}
        <div className="space-y-4 border-b border-slate-900 pb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-1 bg-amber-500/10 text-amber-500 rounded-full px-2.5 py-1 text-sm font-semibold uppercase tracking-wider">
            <GraduationCap className="h-3 w-3" />
            <span>Advanced BaZi Concepts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            The 10 Gods (Shi Shen) in BaZi Explained
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            The Ten Gods represent ten distinct behavioral archetypes and relational mirrors in Chinese metaphysics. They describe your outer personality, wealth creation mechanisms, leadership style, and subconscious drives.
          </p>
        </div>

        {/* Detailed 10 Gods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="ten-gods-grid">
          {Object.values(TEN_GODS_DATA).map((tg) => {
            const IconComp = iconsMap[tg.type] || Sparkles;

            return (
              <div key={tg.code} className="bg-slate-900 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-4 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-bold bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded uppercase">
                      {tg.type} God
                    </span>
                    <span className="text-sm text-slate-500 font-mono">Code: {tg.code}</span>
                  </div>

                  <h2 className="text-xl font-serif text-slate-100 font-medium tracking-wide mt-2 flex items-center space-x-2">
                    <IconComp className="h-5 w-5 text-amber-500 shrink-0" />
                    <span>{tg.name}</span>
                    <span className="text-amber-500/60 font-serif font-bold text-base ml-1">({tg.chinese})</span>
                  </h2>

                  <p className="text-sm text-slate-400 mt-2 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850">
                    {tg.summary}
                  </p>

                  <div className="space-y-2 mt-4 text-sm text-slate-300">
                    <div>
                      <strong className="text-slate-400">Personality &amp; Mindset:</strong>
                      <p className="text-slate-400 text-sm mt-0.5">{tg.personality}</p>
                    </div>
                    <div>
                      <strong className="text-slate-400">Career &amp; Growth:</strong>
                      <p className="text-slate-400 text-sm mt-0.5">{tg.career}</p>
                    </div>
                    <div>
                      <strong className="text-slate-400">Relationship Style:</strong>
                      <p className="text-slate-400 text-sm mt-0.5">{tg.relationships}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Related */}
        <RelatedPages currentPath="/bazi/ten-gods-explained/" />
      </div>
    </>
  );
}
