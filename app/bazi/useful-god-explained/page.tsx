import React from 'react';
import RelatedPages from '@/components/RelatedPages';
import { getArticleSchema } from '@/lib/seo';
import { Compass, Sparkles, Check, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Useful God in BaZi: What It Means and How to Find It',
  description: 'Understand the Useful God (Yong Shen) concept in BaZi and how it determines your favorable and unfavorable elements to unlock smooth fortune.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi/useful-god-explained/' },
  openGraph: {
    title: 'Useful God in BaZi: What It Means and How to Find It',
    description: 'Understand the Useful God (Yong Shen) concept in BaZi and how it determines your favorable and unfavorable elements to unlock smooth fortune.',
    url: 'https://fourpillarscalculator.com/bazi/useful-god-explained/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function UsefulGodExplainedPage() {
  const url = 'https://fourpillarscalculator.com/bazi/useful-god-explained/';
  const articleSchema = getArticleSchema(
    'Useful God in BaZi: What It Means and How to Find It',
    'Understand the Useful God (Yong Shen) concept in BaZi and how it determines your favorable and unfavorable elements to unlock smooth fortune.',
    url
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="useful-god-page">
        {/* Intro */}
        <div className="space-y-4 border-b border-slate-900 pb-8">
          <div className="inline-flex items-center space-x-1 bg-amber-500/10 text-amber-500 rounded-full px-2.5 py-1 text-sm font-semibold uppercase tracking-wider">
            <Sparkles className="h-3 w-3" />
            <span>Core Core Astrology Principles</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            Useful God (Yong Shen) in BaZi
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            The Useful God (Yong Shen) is the single most critical concept in destiny decoding. It represents the key balancing element your chart needs to find perfect flow, health, and smooth career fortune.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-lg font-serif text-slate-100 font-medium tracking-wide flex items-center space-x-2">
              <Compass className="h-5 w-5 text-amber-500" />
              <span>1. What is the Useful God (Yong Shen)?</span>
            </h2>
            <p>
              In BaZi, absolute perfection in balance is extremely rare. Almost every birth chart has a tilt: some charts are dry with heavy Fire; some are cold with massive Water; some possess heavy Metal. The <strong>Useful God (Yong Shen, 用神)</strong> is the specific element that acts like a catalyst to neutralize excess or strengthen voids.
            </p>
            <p>
              By surrounding yourself with your Useful God element—through colors, geographical locations, career orientations, and daily activities—you help align your life path with the natural currents of the cosmos.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-serif text-slate-100 font-medium tracking-wide flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span>2. Chart Strength Determines the Useful God</span>
            </h2>
            <p>
              How we identify the Useful God depends strictly on the strength of your Day Master:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-slate-900 border border-slate-850 p-4 rounded-xl space-y-1.5">
                <strong className="text-emerald-400 text-sm uppercase tracking-widest">If Day Master is Strong:</strong>
                <p className="text-sm text-slate-400">
                  Your chart has too much fuel (Resource) or identical self elements. The Useful God will be an element that <strong>releases, drains, or controls</strong> this excess energy (usually Output, Wealth, or Power).
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-850 p-4 rounded-xl space-y-1.5">
                <strong className="text-red-400 text-sm uppercase tracking-widest">If Day Master is Weak:</strong>
                <p className="text-sm text-slate-400">
                  Your chart lacks supporting pillars, making it easily drained by heavy career duties, desires, or outputs. The Useful God will be an element that <strong>nourishes and supports</strong> you (usually Resource or Parallel).
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-serif text-slate-100 font-medium tracking-wide flex items-center space-x-2">
              <Check className="h-5 w-5 text-emerald-400" />
              <span>3. Favorable vs. Unfavorable Elements</span>
            </h2>
            <p>
              Once the Useful God is established, your element charts are split into:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-400">
              <li><strong>Favorable Elements (Xi Shen):</strong> These support your Useful God. For example, if your Useful God is Wood, Water is highly favorable because it produces and feeds Wood.</li>
              <li><strong>Unfavorable Elements (Ji Shen):</strong> These clash with your Useful God or push your chart further into imbalance. For example, heavy Metal clashes with a Wood Useful God.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-serif text-slate-100 font-medium tracking-wide flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <span>4. Why This Concept Matters for Forecasting</span>
            </h2>
            <p>
              Luck cycles and transit years introduce external elements. When a year brings your Useful God element, your personal &ldquo;luck weather&rdquo; is excellent, bringing easy financial deals, happy partnerships, and stable health. Knowing your Useful God is like carrying an umbrella before a storm—it tells you when to act boldly and when to stay protective.
            </p>
          </div>
        </div>

        {/* Related */}
        <RelatedPages currentPath="/bazi/useful-god-explained/" />
      </div>
    </>
  );
}
