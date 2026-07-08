import React from 'react';
import { FAQ_DATA } from '@/lib/data/faq';
import RelatedPages from '@/components/RelatedPages';
import { getFAQPageSchema } from '@/lib/seo';
import { HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'BaZi FAQ: Common Chinese Astrology Questions Answered',
  description: 'Find answers to common questions about Chinese Solar Astrology, local solar time adjustments, luck pillars, and relationship matching.',
  alternates: { canonical: 'https://fourpillarscalculator.com/faq/' },
  openGraph: {
    title: 'BaZi FAQ: Common Chinese Astrology Questions Answered',
    description: 'Find answers to common questions about Chinese Solar Astrology, local solar time adjustments, luck pillars, and relationship matching.',
    url: 'https://fourpillarscalculator.com/faq/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function FAQPage() {
  const faqSchema = getFAQPageSchema(FAQ_DATA);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="faq-page">
        {/* Intro */}
        <div className="space-y-4 border-b border-slate-900 pb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-1 bg-amber-500/10 text-amber-500 rounded-full px-2.5 py-1 text-sm font-semibold uppercase tracking-wider">
            <HelpCircle className="h-3 w-3" />
            <span>Support &amp; Learning</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Quick, reliable answers to major questions regarding solar charts, accuracy boundaries, and interpretation techniques in classical metaphysics.
          </p>
        </div>

        {/* List of FAQs */}
        <div className="space-y-6" id="faq-list">
          {FAQ_DATA.map((item, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-850 rounded-xl p-6 space-y-2">
              <h2 className="text-lg sm:text-lg font-serif text-slate-100 font-medium tracking-wide flex items-start space-x-2">
                <HelpCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span>{item.question}</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed pl-7">{item.answer}</p>
            </div>
          ))}
        </div>

        {/* Related */}
        <RelatedPages currentPath="/faq/" />
      </div>
    </>
  );
}
