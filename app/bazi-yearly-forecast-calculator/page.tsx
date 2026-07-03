import React from 'react';
import BaziCalculator from '@/components/BaziCalculator';
import RelatedPages from '@/components/RelatedPages';
import { getSoftwareApplicationSchema, getFAQPageSchema } from '@/lib/seo';
import { FAQ_DATA } from '@/lib/data/faq';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: 'BaZi Yearly Forecast Calculator - Solar Year Personal Trends',
  description: 'Calculate your personal yearly forecast based on your Day Master. See how the current solar year elements interact with your natal chart.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi-yearly-forecast-calculator/' },
  openGraph: {
    title: 'BaZi Yearly Forecast Calculator - Solar Year Personal Trends',
    description: 'Calculate your personal yearly forecast based on your Day Master. See how the current solar year elements interact with your natal chart.',
    url: 'https://fourpillarscalculator.com/bazi-yearly-forecast-calculator/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function YearlyForecastCalculatorPage() {
  const applicationSchema = getSoftwareApplicationSchema(
    'BaZi Yearly Forecast Calculator',
    'Calculate and map out how the current solar year energies interact with your Day Master.',
    'https://fourpillarscalculator.com/bazi-yearly-forecast-calculator/'
  );

  const faqSchema = getFAQPageSchema(FAQ_DATA.filter(faq => faq.question.includes('Useful God') || faq.question.includes('forecast')));

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="yearly-forecast-calc-page">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            BaZi Yearly Forecast Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Every year has its own unique elemental dual-signature (Stem and Branch). Input your birth details below to check your Day Master strength and discover how current cycles affect your career, money, and relationships.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="max-w-4xl mx-auto">
          <BaziCalculator mode="full" />
        </div>

        {/* Educational details */}
        <section className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-serif text-slate-100 font-medium flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-amber-500" />
            <span>How Yearly Forecasts Are Computed</span>
          </h2>
          <div className="text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
            <p>
              In BaZi solar astrology, every year is a dynamic column consisting of a Heavenly Stem and an Earthly Branch. This energetic team travels across the sky and interacts directly with the static columns in your birth chart.
            </p>
            <p>
              The forecast checks whether the yearly elements represent your <strong>Useful God (Yong Shen)</strong> or <strong>Favorable Elements</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs text-slate-400">
              <li>If the year brings your <strong>Resource (印)</strong>, you will enjoy a supportive period focused on learning, planning, and academic achievements.</li>
              <li>If the year brings your <strong>Wealth (财)</strong>, it represents financial opportunities, business expansions, or relationship developments (for male Day Masters).</li>
              <li>If the year brings your <strong>Officer (官)</strong>, it brings career responsibility, promotions, or social status breakthroughs.</li>
            </ul>
          </div>
        </section>

        {/* Internal links */}
        <div className="max-w-4xl mx-auto">
          <RelatedPages currentPath="/bazi-yearly-forecast-calculator/" />
        </div>

      </div>
    </>
  );
}
