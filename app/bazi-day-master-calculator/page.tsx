import React from 'react';
import BaziCalculator from '@/components/BaziCalculator';
import RelatedPages from '@/components/RelatedPages';
import { getSoftwareApplicationSchema, getFAQPageSchema } from '@/lib/seo';
import { FAQ_DATA } from '@/lib/data/faq';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'BaZi Day Master Calculator - Find Your True Self Element',
  description: 'Calculate your true Day Master (Day Stem) in Chinese Astrology. Find your elemental identity and traits among the 10 Stems.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi-day-master-calculator/' },
  openGraph: {
    title: 'BaZi Day Master Calculator - Find Your True Self Element',
    description: 'Calculate your true Day Master (Day Stem) in Chinese Astrology. Find your elemental identity and traits among the 10 Stems.',
    url: 'https://fourpillarscalculator.com/bazi-day-master-calculator/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function DayMasterCalculatorPage() {
  const applicationSchema = getSoftwareApplicationSchema(
    'BaZi Day Master Calculator',
    'Calculate your primary Day Master (the Day Stem of your Four Pillars birth chart) and discover your personal traits.',
    'https://fourpillarscalculator.com/bazi-day-master-calculator/'
  );

  const faqSchema = getFAQPageSchema(FAQ_DATA.filter(faq => faq.question.includes('Day Master')));

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="day-master-calc-page">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            BaZi Day Master Calculator
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            In Chinese Metaphysics, the Day Master (the Heavenly Stem of your birth day) is considered your core anchor. Find your Day Master element and check how its polarity shapes your personality, strengths, and spiritual alignment.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="max-w-4xl mx-auto">
          <BaziCalculator mode="day-master-only" />
        </div>

        {/* Education */}
        <section className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-serif text-slate-100 font-medium flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span>Why is the Day Master Your True Self?</span>
          </h2>
          <div className="text-base sm:text-lg text-slate-300 space-y-4 leading-relaxed">
            <p>
              While the public is familiar with the 12 Chinese Zodiac animals (based on the birth year), professional astrologers focus primarily on the <strong>Day Master</strong>. The Day Master reflects your true character and internal reactions to environments, whereas the year animal represents your social circle and grandparent roots.
            </p>
            <p>
              There are 10 unique Day Masters in BaZi, formed by combining the 5 Elements (Wood, Fire, Earth, Metal, Water) with Yin and Yang polarities. For example, a <em>Jia Wood</em> Day Master represents a tall, sturdy redwood tree, showing leadership and ambition, while a <em>Yi Wood</em> Day Master is like a flexible creeping vine, representing diplomat skills and rapid adaptability.
            </p>
          </div>
        </section>

        {/* Internal links */}
        <div className="max-w-4xl mx-auto">
          <RelatedPages currentPath="/bazi-day-master-calculator/" />
        </div>

      </div>
    </>
  );
}
