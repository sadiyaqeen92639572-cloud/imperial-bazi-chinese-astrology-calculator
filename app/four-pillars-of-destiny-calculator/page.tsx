import React from 'react';
import BaziCalculator from '@/components/BaziCalculator';
import RelatedPages from '@/components/RelatedPages';
import { getSoftwareApplicationSchema, getFAQPageSchema } from '@/lib/seo';
import { FAQ_DATA } from '@/lib/data/faq';
import { Compass } from 'lucide-react';

export const metadata = {
  title: 'Four Pillars of Destiny Calculator - Chinese Astrology Birth Chart',
  description: 'Generate your complete Four Pillars of Destiny (Sì Zhù) Chinese Astrology birth chart. Decode Year, Month, Day, and Hour columns with full hidden stems and deities.',
  alternates: { canonical: 'https://imperialbazi.com/four-pillars-of-destiny-calculator/' },
  openGraph: {
    title: 'Four Pillars of Destiny Calculator - Chinese Astrology Birth Chart',
    description: 'Generate your complete Four Pillars of Destiny (Sì Zhù) Chinese Astrology birth chart. Decode Year, Month, Day, and Hour columns with full hidden stems and deities.',
    url: 'https://imperialbazi.com/four-pillars-of-destiny-calculator/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function FourPillarsCalculatorPage() {
  const applicationSchema = getSoftwareApplicationSchema(
    'Four Pillars of Destiny Calculator',
    'Calculate your four pillars of destiny chart, find stems and branches, and identify hidden elements.',
    'https://imperialbazi.com/four-pillars-of-destiny-calculator/'
  );

  const faqSchema = getFAQPageSchema(FAQ_DATA.slice(0, 3));

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="four-pillars-calc-page">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            Four Pillars of Destiny Calculator (Sì Zhù)
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            The Four Pillars of Destiny is a classic Chinese philosophical and cosmological system that maps the solar terms at your birth into four time-columns. Map out your life path and check your element balance today.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="max-w-4xl mx-auto">
          <BaziCalculator mode="full" />
        </div>

        {/* Educational details */}
        <section className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-serif text-slate-100 font-medium flex items-center space-x-2">
            <Compass className="h-5 w-5 text-amber-500" />
            <span>The History of the Four Pillars</span>
          </h2>
          <div className="text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
            <p>
              The system of the Four Pillars of Destiny was founded during the Tang Dynasty (618–907 AD) by master Li Xu-Zhong, who initially calculated charts using only the Year, Month, and Day pillars. Later, during the Song Dynasty, master Xu Zi-Ping refined the system by incorporating the <strong>Hour Pillar</strong> and establishing the <strong>Day Master</strong> as the true center of the person.
            </p>
            <p>
              Today, this system is celebrated for its deep psychological accuracy and has been integrated into career coaching, personal counseling, and life-planning strategies worldwide.
            </p>
          </div>
        </section>

        {/* Internal links */}
        <div className="max-w-4xl mx-auto">
          <RelatedPages currentPath="/bazi-calculator/" />
        </div>

      </div>
    </>
  );
}
