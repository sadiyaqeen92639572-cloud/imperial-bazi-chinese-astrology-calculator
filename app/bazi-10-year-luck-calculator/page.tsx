import React from 'react';
import BaziCalculator from '@/components/BaziCalculator';
import RelatedPages from '@/components/RelatedPages';
import { getSoftwareApplicationSchema, getFAQPageSchema } from '@/lib/seo';
import { FAQ_DATA } from '@/lib/data/faq';
import { Compass } from 'lucide-react';

export const metadata = {
  title: 'BaZi 10-Year Luck Cycle Calculator - Map Your Lifecycles',
  description: 'Calculate your 10-year major Luck Pillars (Da Yun) in Chinese Solar Astrology. Discover the cosmic weather affecting your lifepath decades.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi-10-year-luck-calculator/' },
  openGraph: {
    title: 'BaZi 10-Year Luck Cycle Calculator - Map Your Lifecycles',
    description: 'Calculate your 10-year major Luck Pillars (Da Yun) in Chinese Solar Astrology. Discover the cosmic weather affecting your lifepath decades.',
    url: 'https://fourpillarscalculator.com/bazi-10-year-luck-calculator/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function LuckCalculatorPage() {
  const applicationSchema = getSoftwareApplicationSchema(
    'BaZi 10-Year Luck Cycle Calculator',
    'Calculate your 10-year major Luck Pillars (Da Yun) and map out the timing of your life waves.',
    'https://fourpillarscalculator.com/bazi-10-year-luck-calculator/'
  );

  const faqSchema = getFAQPageSchema(FAQ_DATA.filter(faq => faq.question.includes('Luck Pillars') || faq.question.includes('forecast')));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="luck-calc-page">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            BaZi 10-Year Luck Cycle Calculator
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Destiny (the birth chart) represents your vehicle, but Luck Pillars (the 10-year major cycles) represent the roads you travel. Use this tool to trace your current and upcoming decade timelines.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="max-w-4xl mx-auto">
          <BaziCalculator mode="luck-only" />
        </div>

        {/* Education */}
        <section className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-serif text-slate-100 font-medium flex items-center space-x-2">
            <Compass className="h-5 w-5 text-amber-500" />
            <span>Understanding Your Decadal Luck (Da Yun)</span>
          </h2>
          <div className="text-sm sm:text-base text-slate-300 space-y-4 leading-relaxed">
            <p>
              In BaZi astrology, your life is segmented into major 10-year shifts called <strong>Da Yun (大运)</strong>. Each decade is governed by a specific Heavenly Stem and Earthly Branch that introduces a dominant element. This element acts like &ldquo;cosmic weather&rdquo; surrounding you.
            </p>
            <p>
              If a decade introduces your <em>Useful God</em> element, you will find opportunities flowing easily, support from secret benefactors, and career expansion. Conversely, if a decade brings unfavourable clashing elements, you may face hurdles that serve as vital lessons for personal spiritual refinement.
            </p>
          </div>
        </section>

        {/* Internal links */}
        <div className="max-w-4xl mx-auto">
          <RelatedPages currentPath="/bazi-10-year-luck-calculator/" />
        </div>

      </div>
    </>
  );
}
