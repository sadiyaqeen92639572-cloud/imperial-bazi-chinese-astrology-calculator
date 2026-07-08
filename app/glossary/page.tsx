import React from 'react';
import { GLOSSARY_DATA } from '@/lib/data/glossary';
import RelatedPages from '@/components/RelatedPages';
import { getDefinedTermSetSchema } from '@/lib/seo';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: 'BaZi and Chinese Astrology Glossary: Core Terms Explained',
  description: 'Search and read definitions for major terms in Chinese metaphysics, including Stems, Branches, Luck Pillars, and Five Elements.',
  alternates: { canonical: 'https://fourpillarscalculator.com/glossary/' },
  openGraph: {
    title: 'BaZi and Chinese Astrology Glossary: Core Terms Explained',
    description: 'Search and read definitions for major terms in Chinese metaphysics, including Stems, Branches, Luck Pillars, and Five Elements.',
    url: 'https://fourpillarscalculator.com/glossary/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function GlossaryPage() {
  const url = 'https://fourpillarscalculator.com/glossary/';
  
  const glossaryList = Object.values(GLOSSARY_DATA).map(item => ({
    term: item.term,
    definition: item.definition
  }));

  const definedTermSetSchema = getDefinedTermSetSchema(
    'BaZi and Chinese Astrology Glossary: Core Terms Explained',
    'Search and read definitions for major terms in Chinese metaphysics, including Stems, Branches, Luck Pillars, and Five Elements.',
    url,
    glossaryList
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="glossary-page">
        {/* Intro */}
        <div className="space-y-4 border-b border-slate-900 pb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-1 bg-amber-500/10 text-amber-500 rounded-full px-2.5 py-1 text-sm font-semibold uppercase tracking-wider">
            <BookOpen className="h-3 w-3" />
            <span>Encyclopedia</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            Chinese Astrology &amp; BaZi Glossary
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            A comprehensive, plain-English reference manual for technical terminology in Chinese Solar Metaphysics, Four Pillars of Destiny, and Yin/Yang cosmology.
          </p>
        </div>

        {/* List of terms */}
        <div className="space-y-6" id="glossary-list">
          {Object.values(GLOSSARY_DATA).map((item) => (
            <div key={item.term} className="bg-slate-900 border border-slate-850 rounded-xl p-6 hover:border-amber-500/20 transition-all space-y-3">
              <div className="flex justify-between items-start gap-2 flex-wrap">
                <h2 className="text-lg font-serif text-amber-500 font-medium tracking-wide">
                  {item.term}
                </h2>
                <span className="text-xs font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-850 text-slate-400">
                  {item.category}
                </span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{item.definition}</p>
              <div className="text-sm text-slate-500 italic pt-1 border-t border-slate-950">
                <strong>Destiny Relevance:</strong> {item.relevance}
              </div>
            </div>
          ))}
        </div>

        {/* Related */}
        <RelatedPages currentPath="/glossary/" />
      </div>
    </>
  );
}
