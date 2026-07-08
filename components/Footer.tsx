'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'BaZi Calculators',
      links: [
        { name: 'Core BaZi Calculator', href: '/bazi-calculator/' },
        { name: 'Day Master Calculator', href: '/bazi-day-master-calculator/' },
        { name: '10-Year Luck Cycle', href: '/bazi-10-year-luck-calculator/' },
        { name: 'BaZi Compatibility', href: '/bazi-compatibility-calculator/' },
        { name: 'Four Pillars Calculator', href: '/four-pillars-of-destiny-calculator/' },
        { name: 'Yearly Forecast Tool', href: '/bazi-yearly-forecast-calculator/' },
      ]
    },
    {
      title: 'Astrology Guides',
      links: [
        { name: 'Destiny Reading Guide', href: '/bazi-reading/' },
        { name: 'Chart Interpretation', href: '/bazi-chart-interpretation/' },
        { name: 'How to Read a Chart', href: '/how-to-read-bazi-chart/' },
        { name: 'Personality Analysis', href: '/bazi-personality-analysis/' },
        { name: 'Compatibility Guide', href: '/bazi-compatibility-guide/' },
        { name: 'BaZi vs Chinese Zodiac', href: '/bazi-vs-chinese-zodiac/' },
        { name: 'BaZi vs Feng Shui', href: '/bazi-vs-feng-shui/' },
        { name: 'Yearly Solar Forecast', href: '/bazi-yearly-forecast/' },
      ]
    },
    {
      title: 'Technical Concepts',
      links: [
        { name: 'The 10 Gods (Shi Shen)', href: '/bazi/ten-gods-explained/' },
        { name: 'Symbolic Stars (Shen Sha)', href: '/bazi/symbolic-stars/' },
        { name: 'Five Elements Chart', href: '/bazi/five-elements-chart/' },
        { name: 'Useful God (Yong Shen)', href: '/bazi/useful-god-explained/' },
        { name: '10 Day Master Meanings', href: '/bazi/day-master/' },
        { name: 'Astrology Glossary', href: '/glossary/' },
        { name: 'Frequently Asked Questions', href: '/faq/' },
      ]
    }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-amber-500 font-semibold text-lg">
              <Sparkles className="h-6 w-6" />
              <span className="font-serif tracking-wide text-xl text-slate-100">Imperial BaZi</span>
            </div>
            <p className="text-base text-slate-400 leading-relaxed">
              Professional-grade Chinese astrology destiny analysis (Four Pillars of Destiny) in clear, modern English. Built with high astronomical precision.
            </p>
            <div className="text-sm text-slate-500">
              Disclaimer: BaZi chart interpretations are for educational, psychological reflection, and self-understanding purposes.
            </div>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-slate-200 font-medium text-base tracking-wider uppercase">{section.title}</h3>
              <ul className="space-y-2 text-base">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-amber-400 transition-colors flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3 w-3 ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-500">
          <div>
            &copy; {currentYear} Imperial BaZi. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link href="/faq/" className="hover:text-slate-300">FAQ</Link>
            <Link href="/glossary/" className="hover:text-slate-300">Glossary</Link>
            <Link href="/bazi-calculator/" className="hover:text-slate-300">Calculator</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
