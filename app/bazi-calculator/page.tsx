import React from 'react';
import BaziCalculator from '@/components/BaziCalculator';
import RelatedPages from '@/components/RelatedPages';
import { getSoftwareApplicationSchema, getFAQPageSchema } from '@/lib/seo';
import { FAQ_DATA } from '@/lib/data/faq';
import { Compass, BookOpen, Clock } from 'lucide-react';

export const metadata = {
  title: 'Free BaZi Calculator - Accurate Four Pillars of Destiny Chart',
  description: 'Calculate your accurate Chinese astrology BaZi chart (also known as Paht Chee). Enter date, time, and birthplace longitude to find your Day Master, element balance, and 10-year luck pillars.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi-calculator/' },
  openGraph: {
    title: 'Free BaZi Calculator - Accurate Four Pillars of Destiny Chart',
    description: 'Calculate your accurate Chinese astrology BaZi chart (also known as Paht Chee). Enter date, time, and birthplace longitude to find your Day Master, element balance, and 10-year luck pillars.',
    url: 'https://fourpillarscalculator.com/bazi-calculator/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function BaziCalculatorPage() {
  const applicationSchema = getSoftwareApplicationSchema(
    'Imperial BaZi Destiny Calculator',
    'Calculate your four pillars of destiny chart, find your Day Master strength, count elements balance, and map out your ten-year luck cycles.',
    'https://fourpillarscalculator.com/bazi-calculator/'
  );

  const faqSchema = getFAQPageSchema(FAQ_DATA.slice(0, 4));

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="calculator-page-root">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            Free Professional BaZi Calculator
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            Generate your accurate Chinese Solar Astrology birth chart — known as BaZi (八字) or, in Cantonese and Hokkien communities, Paht Chee. Our engine automatically calculates local solar offsets based on birthplace longitude, ensuring correct Hour Pillars and calendar boundaries.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="max-w-4xl mx-auto">
          <BaziCalculator mode="full" />
        </div>

        {/* Technical Explanations beneath the calculator */}
        <section className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-6" id="calculator-guide-text">
          <h2 className="text-xl font-serif text-slate-200 tracking-wide">How the BaZi Calculation Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base sm:text-lg text-slate-300">
            <div className="space-y-2">
              <h3 className="font-semibold text-amber-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Local Solar Time Adjustment
              </h3>
              <p className="leading-relaxed text-slate-400 text-base">
                Clock zones are artificial. True BaZi depends on the position of the physical Sun. If you provide your birthplace longitude, our engine adjusts standard clock time into true solar time. This ensures you get the real Hour Pillar, which changes exactly every 120 minutes.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-amber-500 flex items-center">
                <Compass className="h-4 w-4 mr-1" />
                Finding Your Useful God
              </h3>
              <p className="leading-relaxed text-slate-400 text-base">
                By assessing whether your Day Master element is supported by the birth season (the month earthly branch) and other supportive stems, our system computes your chart strength. It then recommends the specific elements that help you restore energetic stability and flow.
              </p>
            </div>
          </div>
        </section>

        {/* Internal linking */}
        <div className="max-w-4xl mx-auto">
          <RelatedPages currentPath="/bazi-calculator/" />
        </div>

      </div>
    </>
  );
}
