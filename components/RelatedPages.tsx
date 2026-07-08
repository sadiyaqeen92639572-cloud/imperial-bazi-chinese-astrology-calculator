'use client';

import React from 'react';
import Link from 'next/link';
import { Link2, ArrowRight } from 'lucide-react';

export interface LinkItem {
  name: string;
  href: string;
  desc: string;
}

const PAGES_LINKS_MAP: Record<string, LinkItem[]> = {
  '/bazi-calculator/': [
    { name: 'Destiny Reading Guide', href: '/bazi-reading/', desc: 'A quick overview of your Day Master, elements, and luck pillars.' },
    { name: 'Day Master Calculator', href: '/bazi-day-master-calculator/', desc: 'Find your primary Heavenly Stem element and true nature.' },
    { name: '10 Day Masters Meanings', href: '/bazi/day-master/', desc: 'Discover details for each of the ten unique day master stems.' },
    { name: 'Ten Gods Explained', href: '/bazi/ten-gods-explained/', desc: 'Learn the ten deity profiles governing life, career, and relationships.' },
    { name: 'Five Elements Balance', href: '/bazi/five-elements-chart/', desc: 'Count Wood, Fire, Earth, Metal, and Water occurrences in your chart.' },
    { name: '10-Year Luck Calculator', href: '/bazi-10-year-luck-calculator/', desc: 'Trace your major decade life-cycles and timing.' },
    { name: 'Relationship Compatibility', href: '/bazi-compatibility-calculator/', desc: 'Check chemical harmony between two charts.' },
  ],
  '/bazi-reading/': [
    { name: 'How to Read a Chart', href: '/how-to-read-bazi-chart/', desc: 'A step-by-step sequential tutorial for absolute beginners.' },
    { name: 'Pillar Interpretation Guide', href: '/bazi-chart-interpretation/', desc: 'What Year, Month, Day, and Hour pillars represent.' },
    { name: 'Personality Analysis', href: '/bazi-personality-analysis/', desc: 'Unpack the psychological DNA and tendencies behind your stems.' },
    { name: 'Ten Gods (Deities)', href: '/bazi/ten-gods-explained/', desc: 'How money, power, resources, and peers relate to you.' },
    { name: 'Five Elements Balance', href: '/bazi/five-elements-chart/', desc: 'See how Wood, Fire, Earth, Metal, and Water shape your charts.' },
    { name: 'Astrology Glossary', href: '/glossary/', desc: 'Standard definitions for major Chinese metaphysics terms.' },
  ],
  '/bazi-day-master-calculator/': [
    { name: '10 Day Masters Hub', href: '/bazi/day-master/', desc: 'Browse the personalities of all ten Heavenly Stems.' },
    { name: 'Personality Analysis', href: '/bazi-personality-analysis/', desc: 'Unpack your psychological profile from your birth date.' },
    { name: 'Ten Gods Explained', href: '/bazi/ten-gods-explained/', desc: 'Learn about Friend, Rob Wealth, Direct Wealth, and other deities.' },
    { name: 'Astrology Glossary', href: '/glossary/', desc: 'Look up definitions for stems, branches, and elements.' },
  ],
  'day-master-stem': [
    { name: '10 Day Masters Hub', href: '/bazi/day-master/', desc: 'Return to the main Day Master list.' },
    { name: 'The Ten Gods Explained', href: '/bazi/ten-gods-explained/', desc: 'Learn how other elements act as guides in your life.' },
    { name: 'Compatibility Guide', href: '/bazi-compatibility-guide/', desc: 'Read how your Day Master elements interact in marriage and love.' },
    { name: 'BaZi Calculator', href: '/bazi-calculator/', desc: 'Calculate your complete four pillars chart.' },
  ],
  '/bazi/ten-gods-explained/': [
    { name: 'Five Elements Chart', href: '/bazi/five-elements-chart/', desc: 'How Wood, Fire, Earth, Metal, and Water interact.' },
    { name: 'Symbolic Stars (Shen Sha)', href: '/bazi/symbolic-stars/', desc: 'Peach Blossom, Academic Star, and other auxiliary chart stars.' },
    { name: 'Chart Interpretation', href: '/bazi-chart-interpretation/', desc: 'Pillar by pillar analysis of your natal chart.' },
    { name: 'Core BaZi Calculator', href: '/bazi-calculator/', desc: 'Input your birth details to generate your full chart.' },
    { name: 'Astrology Glossary', href: '/glossary/', desc: 'A complete definitions bank of astrological concepts.' },
  ],
  '/bazi/five-elements-chart/': [
    { name: 'The Ten Gods Explained', href: '/bazi/ten-gods-explained/', desc: 'Discover the ten energetic deities relating to your self.' },
    { name: 'Chart Interpretation', href: '/bazi-chart-interpretation/', desc: 'Decode what each pillar reveals about your history.' },
    { name: 'Core BaZi Calculator', href: '/bazi-calculator/', desc: 'Generate your free astrology chart instantly.' },
    { name: 'Astrology Glossary', href: '/glossary/', desc: 'Definitions bank for all four pillars terms.' },
  ],
  '/bazi/useful-god-explained/': [
    { name: 'Five Elements Chart', href: '/bazi/five-elements-chart/', desc: 'Learn how to count and balance Wood, Fire, Earth, Metal, and Water.' },
    { name: 'Yearly Solar Forecast', href: '/bazi-yearly-forecast/', desc: 'Read your annual astrological forecasts.' },
    { name: 'Chart Interpretation', href: '/bazi-chart-interpretation/', desc: 'Pillar-by-pillar guide to interpreting natal placements.' },
  ],
  '/bazi/symbolic-stars/': [
    { name: 'The Ten Gods Explained', href: '/bazi/ten-gods-explained/', desc: 'The core relational deities behind money, power, and creativity.' },
    { name: '10 Day Masters Hub', href: '/bazi/day-master/', desc: 'Find your Day Master — sometimes called your "life star."' },
    { name: 'Core BaZi Calculator', href: '/bazi-calculator/', desc: 'Generate your full chart to see your own symbolic stars.' },
  ],
  '/bazi-compatibility-calculator/': [
    { name: 'Compatibility Guide', href: '/bazi-compatibility-guide/', desc: 'Detailed reference on how elements match for marriage and love.' },
    { name: 'BaZi vs Chinese Zodiac', href: '/bazi-vs-chinese-zodiac/', desc: 'Why four pillars are far more accurate than simple animal years.' },
    { name: 'Astrology Glossary', href: '/glossary/', desc: 'Definitions for stems, branches, and compatibility rules.' },
  ],
  '/bazi-yearly-forecast/': [
    { name: 'Yearly Forecast Calculator', href: '/bazi-yearly-forecast-calculator/', desc: 'Test how current year stems interact with your Day Master.' },
    { name: 'Useful God (Yong Shen)', href: '/bazi/useful-god-explained/', desc: 'Find your balancing element to see if the year is favorable.' },
    { name: '10-Year Luck Cycle', href: '/bazi-10-year-luck-calculator/', desc: 'Calculate your major life tides.' },
  ],
  '/bazi-yearly-forecast-calculator/': [
    { name: 'Yearly Solar Forecast', href: '/bazi-yearly-forecast/', desc: 'Read our comprehensive solar year forecast.' },
    { name: 'Useful God Explained', href: '/bazi/useful-god-explained/', desc: 'Understand the concept of Yong Shen in forecasting.' },
    { name: '10-Year Luck Cycle', href: '/bazi-10-year-luck-calculator/', desc: 'Look up your ten-year luck pillars.' },
  ]
};

interface RelatedPagesProps {
  currentPath: string;
}

export default function RelatedPages({ currentPath }: RelatedPagesProps) {
  // If this is a stem page, let's use the special 'day-master-stem' list
  let listKey = currentPath;
  if (currentPath.startsWith('/bazi/day-master/') && currentPath !== '/bazi/day-master/') {
    listKey = 'day-master-stem';
  }

  const links = PAGES_LINKS_MAP[listKey] || PAGES_LINKS_MAP['/bazi-calculator/'];

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 mt-12" id="related-pages-section">
      <div className="flex items-center space-x-2 mb-6">
        <Link2 className="h-5 w-5 text-amber-500" />
        <h2 className="text-xl font-serif text-slate-100 tracking-wide font-medium">Related Content &amp; Tools</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="related-links-grid">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex flex-col justify-between p-4 bg-slate-950 border border-slate-850 hover:border-amber-500/50 rounded-lg hover:shadow-lg transition-all"
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-100 group-hover:text-amber-400 transition-colors flex items-center justify-between">
                <span>{link.name}</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-amber-400 transform group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-base text-slate-400 mt-2 leading-relaxed">{link.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
