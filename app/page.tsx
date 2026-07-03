import React from 'react';
import Link from 'next/link';
import { Compass, Sparkles, BookOpen, Heart, ArrowRight } from 'lucide-react';
import { getSoftwareApplicationSchema, getFAQPageSchema } from '@/lib/seo';
import { FAQ_DATA } from '@/lib/data/faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imperial BaZi - Free Chinese Astrology Calculator',
  description: 'Free professional-grade BaZi (Four Pillars of Destiny) calculator and astrology interpretation guide in clean, modern English.',
  alternates: { canonical: 'https://fourpillarscalculator.com/' },
  openGraph: {
    title: 'Imperial BaZi - Free Chinese Astrology Calculator',
    description: 'Free professional-grade BaZi (Four Pillars of Destiny) calculator and astrology interpretation guide in clean, modern English.',
    url: 'https://fourpillarscalculator.com/',
    siteName: 'Imperial Bazi',
    type: 'website',
    images: [{ url: 'https://fourpillarscalculator.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://fourpillarscalculator.com/og-image.jpg'] },
};

export default function HomePage() {
  const applicationSchema = getSoftwareApplicationSchema(
    'Imperial BaZi Calculator',
    'Professional-grade Chinese astrology destiny analysis (Four Pillars of Destiny) calculator in clean, modern English.',
    'https://fourpillarscalculator.com'
  );

  const faqSchema = getFAQPageSchema(FAQ_DATA.slice(0, 3));

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative overflow-hidden bg-slate-950 py-20 sm:py-32" id="home-hero-container">
        {/* Decorative Grid and Ambient Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          {/* Tag */}
          <div className="inline-flex items-center space-x-1 bg-amber-500/10 text-amber-500 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3 w-3" />
            <span>Premium Chinese Metaphysics</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-serif text-slate-100 tracking-tight leading-none max-w-4xl mx-auto">
            Decode Your Destiny with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">Imperial BaZi</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Translate your Gregorian birth date into the Four Pillars of Destiny (Sì Zhù). Discover your Day Master, balance your Five Elements, and navigate your 10-year major Luck Pillars.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/bazi-calculator/"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center space-x-2 text-base"
              id="hero-cta-calc"
            >
              <Compass className="h-5 w-5" />
              <span>Launch BaZi Calculator</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/bazi-reading/"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium py-3.5 px-8 rounded-xl border border-slate-800 transition-all flex items-center justify-center space-x-2 text-base"
              id="hero-cta-read"
            >
              <BookOpen className="h-5 w-5 text-slate-400" />
              <span>Read Beginner Guide</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Structured Core Pillars Grid */}
      <section className="bg-slate-900/40 border-y border-slate-900 py-16 sm:py-24" id="home-pillars-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 tracking-wide font-medium">The Core Pillars of Astrology</h2>
            <p className="text-sm sm:text-base text-slate-400">
              Our professional engine calculates astronomical cycles based on true solar terms rather than generic years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Day Master */}
            <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-serif text-slate-100 font-medium">1. Locate Your Day Master</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                The Day Master is the Heavenly Stem of your birth day. It is your astrological soul DNA, revealing your core character, intrinsic talents, and psychological strengths.
              </p>
              <Link href="/bazi/day-master/" className="text-xs font-semibold text-amber-500 hover:underline flex items-center space-x-1">
                <span>Explore all 10 Day Masters</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Five Elements */}
            <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-serif text-slate-100 font-medium">2. Balance Five Elements</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Wood, Fire, Earth, Metal, and Water shape your physical and mental balance. Discover missing elements, and find your Useful God (Yong Shen) to bring energy back into sync.
              </p>
              <Link href="/bazi/five-elements-chart/" className="text-xs font-semibold text-amber-500 hover:underline flex items-center space-x-1">
                <span>Learn about element charts</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Compatibility */}
            <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-serif text-slate-100 font-medium">3. Relationship Synergy</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                By evaluating spouse house stems and earthly branch combinations/clashes, our engine calculates relationship friction, marriage ease, and alchemical attraction points.
              </p>
              <Link href="/bazi-compatibility-guide/" className="text-xs font-semibold text-amber-500 hover:underline flex items-center space-x-1">
                <span>Read compatibility guide</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-slate-950 py-16 text-center max-w-4xl mx-auto px-4" id="home-cta-section">
        <div className="bg-gradient-to-r from-slate-900 to-slate-900 border border-slate-850 p-8 sm:p-12 rounded-2xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-serif text-slate-100 font-medium">Ready to discover your destiny profile?</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Generate your high-accuracy four pillars report in seconds. Fully responsive and completely free of charge.
          </p>
          <div className="pt-2">
            <Link
              href="/bazi-calculator/"
              className="inline-flex bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-3 px-8 rounded-xl transition-all shadow-md items-center space-x-2 text-sm"
              id="cta-bottom"
            >
              <span>Calculate My Chart Now</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
