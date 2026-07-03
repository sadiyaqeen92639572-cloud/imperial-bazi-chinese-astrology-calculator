import React from 'react';
import BaziCompatibilityCalculator from '@/components/BaziCompatibilityCalculator';
import RelatedPages from '@/components/RelatedPages';
import { getSoftwareApplicationSchema, getFAQPageSchema } from '@/lib/seo';
import { FAQ_DATA } from '@/lib/data/faq';
import { Heart } from 'lucide-react';

export const metadata = {
  title: 'BaZi Compatibility Calculator - Marriage & Relationship Chemistry',
  description: 'Calculate detailed relationship and marriage compatibility between two BaZi birth charts. Discover Day Master matching, spouse house combinations, and clashes.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi-compatibility-calculator/' },
  openGraph: {
    title: 'BaZi Compatibility Calculator - Marriage & Relationship Chemistry',
    description: 'Calculate detailed relationship and marriage compatibility between two BaZi birth charts. Discover Day Master matching, spouse house combinations, and clashes.',
    url: 'https://fourpillarscalculator.com/bazi-compatibility-calculator/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function CompatibilityCalculatorPage() {
  const applicationSchema = getSoftwareApplicationSchema(
    'BaZi Compatibility Calculator',
    'Calculate and evaluate relationship chemistry and compatibility between two BaZi solar astrology charts.',
    'https://fourpillarscalculator.com/bazi-compatibility-calculator/'
  );

  const faqSchema = getFAQPageSchema(FAQ_DATA.filter(faq => faq.question.includes('marriage') || faq.question.includes('relationship') || faq.question.includes('Zodiac')));

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="compatibility-calc-page">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            BaZi Relationship Compatibility Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Enter birth details for two partners to evaluate their alchemical energetic harmony. Our calculator cross-checks Day Master elements, Spouse House earthly branches, and complementary elements counts to produce a detailed compatibility report.
          </p>
        </div>

        {/* Main Calculator */}
        <div className="max-w-4xl mx-auto">
          <BaziCompatibilityCalculator />
        </div>

        {/* Educational details */}
        <section className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-serif text-slate-100 font-medium flex items-center space-x-2">
            <Heart className="h-5 w-5 text-red-500 fill-current" />
            <span>How is Metaphysical Relationship Compatibility Measured?</span>
          </h2>
          <div className="text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
            <p>
              In traditional BaZi compatibility (He Hun, 合婚), a successful union doesn&apos;t mean two people are identical. Rather, they should possess complementary energies. For example, if Person A has an dry, hot chart with heavy Fire and lacks Water, they are naturally supported by Person B whose chart is cool and has abundant Water.
            </p>
            <p>
              Additionally, we evaluate the <strong>Spouse House</strong>, which is the Earthly Branch located in your birth day column. If your Spouse House branches combine (e.g., Rat and Ox), the daily domestic rhythm is exceptionally peaceful. If they are in a clash (e.g., Rabbit and Rooster), it indicates a dynamic growth relationship where patience and open communication must be actively nurtured.
            </p>
          </div>
        </section>

        {/* Internal links */}
        <div className="max-w-4xl mx-auto">
          <RelatedPages currentPath="/bazi-compatibility-calculator/" />
        </div>

      </div>
    </>
  );
}
