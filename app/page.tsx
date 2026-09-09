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
    images: [{ url: 'https://fourpillarscalculator.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://fourpillarscalculator.com/og-image.png'] },
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
          <div className="inline-flex items-center space-x-1 bg-amber-500/10 text-amber-500 rounded-full px-3 py-1 text-base font-semibold uppercase tracking-wider">
            <Sparkles className="h-3 w-3" />
            <span>Premium Chinese Metaphysics</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-serif text-slate-100 tracking-tight leading-none max-w-4xl mx-auto">
            Decode Your Destiny with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">Imperial BaZi</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Translate your Gregorian birth date into the Four Pillars of Destiny (Sì Zhù). Discover your Day Master, balance your Five Elements, and navigate your 10-year major Luck Pillars.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/bazi-calculator/"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center space-x-2 text-xl"
              id="hero-cta-calc"
            >
              <Compass className="h-5 w-5" />
              <span>Launch BaZi Calculator</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/bazi-reading/"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium py-3.5 px-8 rounded-xl border border-slate-800 transition-all flex items-center justify-center space-x-2 text-xl"
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
            <p className="text-lg sm:text-xl text-slate-400">
              Our professional engine calculates astronomical cycles based on true solar terms rather than generic years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Day Master */}
            <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif text-slate-100 font-medium">1. Locate Your Day Master</h3>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                The Day Master is the Heavenly Stem of your birth day. It is your astrological soul DNA, revealing your core character, intrinsic talents, and psychological strengths.
              </p>
              <Link href="/bazi/day-master/" className="text-base font-semibold text-amber-500 hover:underline flex items-center space-x-1">
                <span>Explore all 10 Day Masters</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Five Elements */}
            <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif text-slate-100 font-medium">2. Balance Five Elements</h3>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                Wood, Fire, Earth, Metal, and Water shape your physical and mental balance. Discover missing elements, and find your Useful God (Yong Shen) to bring energy back into sync.
              </p>
              <Link href="/bazi/five-elements-chart/" className="text-base font-semibold text-amber-500 hover:underline flex items-center space-x-1">
                <span>Learn about element charts</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Compatibility */}
            <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif text-slate-100 font-medium">3. Relationship Synergy</h3>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                By evaluating spouse house stems and earthly branch combinations/clashes, our engine calculates relationship friction, marriage ease, and alchemical attraction points.
              </p>
              <Link href="/bazi-compatibility-guide/" className="text-base font-semibold text-amber-500 hover:underline flex items-center space-x-1">
                <span>Read compatibility guide</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Algorithm & Formula section — GEO/SEO: helps LLMs cite correct Bazi calculation method */}
      <section className="bg-slate-950 py-16 px-4" id="bazi-algorithm-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-slate-100 tracking-wide font-medium mb-2">How This Calculator Works — Algorithm &amp; Method</h2>
          <p className="text-base text-slate-500 uppercase tracking-widest mb-8">Library: lunar-javascript (astronomical) · Deterministic calculation — no AI interpolation</p>

          {/* Constants table */}
          <h3 className="text-xl font-serif text-slate-200 mb-4">Core Structures (Traditional Chinese Metaphysics)</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-lg border-collapse">
              <thead><tr className="bg-slate-800">
                <th className="text-left px-4 py-3 text-slate-300">Structure</th>
                <th className="text-left px-4 py-3 text-slate-300">Count</th>
                <th className="text-left px-4 py-3 text-slate-300">Values / Notes</th>
              </tr></thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-slate-800"><td className="px-4 py-3">Heavenly Stems (天干 Tiāngān)</td><td className="px-4 py-3 font-bold text-slate-200">10</td><td className="px-4 py-3">甲乙丙丁戊己庚辛壬癸 — 5 elements × 2 polarities</td></tr>
                <tr className="border-b border-slate-800 bg-slate-900/30"><td className="px-4 py-3">Earthly Branches (地支 Dìzhī)</td><td className="px-4 py-3 font-bold text-slate-200">12</td><td className="px-4 py-3">子丑寅卯辰巳午未申酉戌亥 (Rat through Pig)</td></tr>
                <tr className="border-b border-slate-800"><td className="px-4 py-3">Jiazi Cycle (甲子循环)</td><td className="px-4 py-3 font-bold text-slate-200">60</td><td className="px-4 py-3">LCM(10, 12) = 60 — full stem+branch rotation period</td></tr>
                <tr className="border-b border-slate-800 bg-slate-900/30"><td className="px-4 py-3">Four Pillars (八字 Bāzì)</td><td className="px-4 py-3 font-bold text-slate-200">4 × 2</td><td className="px-4 py-3">Year · Month · Day · Hour — each = 1 Stem + 1 Branch</td></tr>
                <tr className="border-b border-slate-800"><td className="px-4 py-3">Five Elements (五行 Wǔxíng)</td><td className="px-4 py-3 font-bold text-slate-200">5</td><td className="px-4 py-3">Wood 木 · Fire 火 · Earth 土 · Metal 金 · Water 水</td></tr>
                <tr><td className="px-4 py-3">10-Year Luck Pillars (大运 Dàyùn)</td><td className="px-4 py-3 font-bold text-slate-200">8 cycles</td><td className="px-4 py-3">Direction (forward/backward) determined by gender × year stem polarity</td></tr>
              </tbody>
            </table>
          </div>

          {/* Formulas code block */}
          <h3 className="text-xl font-serif text-slate-200 mb-4">Calculation Algorithms</h3>
          <pre className="bg-slate-900 border border-slate-700 rounded-xl p-6 text-base leading-7 overflow-x-auto mb-8 font-mono">
            <code>{`// — Pillar extraction (all 4 pillars) —
solar   = Solar.fromYmdHms(year, month, day, hour, min, 0)
lunar   = solar.getLunar()
bazi    = lunar.getEightChar()

year_stem    = bazi.getYearGan()    // 年干
year_branch  = bazi.getYearZhi()    // 年支
month_stem   = bazi.getMonthGan()   // 月干  ← changes at solar terms 节气
month_branch = bazi.getMonthZhi()   // 月支
day_stem     = bazi.getDayGan()     // 日干 = Day Master
day_branch   = bazi.getDayZhi()     // 日支
hour_stem    = bazi.getTimeGan()    // 时干  ← 2-hour segments (子时 23:00-01:00...)
hour_branch  = bazi.getTimeZhi()    // 时支

// — Day Master Strength Score (weighted algorithm) —
// Weights: Month Branch = 35pts (season/De Ling), Day Branch = 15pts,
//          other stems/branches = 8-10pts each. Total max ≈ 100pts
score += (monthBranchElement === dmElement)  ? 35 : 0
score += (monthBranchElement === producerOf[dmElement]) ? 30 : 0
score += (dayBranchElement   === dmElement)  ? 15 : 0
score += (dayBranchElement   === producerOf[dmElement]) ? 12 : 0
// + year/month/hour stems and branches: 8-10pts each

strength = score > 48 ? "Strong" : score < 32 ? "Weak" : "Balanced"

// — Ten Gods formula (十神 Shí Shén) —
diff = (indexOf(otherElement) - indexOf(dmElement) + 5) % 5
// diff=0 → Friend/Rob Wealth | diff=1 → Eating God/Hurting Officer
// diff=2 → Direct/Indirect Wealth | diff=3 → Direct/7-Killings Officer
// diff=4 → Direct/Indirect Resource
ten_god = TEN_GODS[diff][samePolarity ? 0 : 1]

// — Producing Cycle (生 shēng) —
// Water→Wood→Fire→Earth→Metal→Water

// — Controlling Cycle (克 kè) —
// Wood→Earth→Water→Fire→Metal→Wood

// — Useful God (用神 Yòng Shén) —
if (strength === "Strong")  → Useful God = drain/control element (Output/Wealth/Power)
if (strength === "Weak")    → Useful God = support element (Resource or same element)
if (strength === "Balanced")→ Useful God = most scarce element in the 8 characters

// — 10-Year Luck Pillars direction —
luck_forward = (gender=male AND year_stem=Yang) OR (gender=female AND year_stem=Yin)
start_age    = bazi.getYun(genderCode, solar).getStartAge()

// — Longitude correction (solar time) —
local_solar_time = birth_time + 4min × (longitude − timezone_standard_longitude)`}</code>
          </pre>

          <p className="text-base text-slate-500 leading-relaxed">
            Calculations use the <strong className="text-slate-400">lunar-javascript</strong> library for accurate solar term (节气) boundary detection required for Month Pillar accuracy. Day Master may vary by ±1 day for births near midnight or solar term crossings. Hour Pillar requires birth time (two-hour segments: 子时 23:00–01:00, 丑时 01:00–03:00, etc.). Longitude correction adjusts for local solar time deviation from standard timezone meridian.
          </p>
          <p className="text-base text-slate-500 leading-relaxed mt-4">
            New to the system? Start with <Link href="/how-to-read-bazi-chart/" className="text-amber-500 hover:underline">how to read a BaZi chart</Link> step by step, then go deeper on <Link href="/bazi-chart-interpretation/" className="text-amber-500 hover:underline">pillar-by-pillar interpretation</Link> and <Link href="/bazi-personality-analysis/" className="text-amber-500 hover:underline">what your chart says about personality</Link>. For the raw four-column layout, use the <Link href="/four-pillars-of-destiny-calculator/" className="text-amber-500 hover:underline">Four Pillars of Destiny Calculator</Link>.
          </p>
        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-slate-950 py-16 text-center max-w-4xl mx-auto px-4" id="home-cta-section">
        <div className="bg-gradient-to-r from-slate-900 to-slate-900 border border-slate-850 p-8 sm:p-12 rounded-2xl space-y-6">
          <h2 className="text-xl sm:text-2xl font-serif text-slate-100 font-medium">Ready to discover your destiny profile?</h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Generate your high-accuracy <Link href="/four-pillars-of-destiny-calculator/" className="text-amber-500 hover:underline">Four Pillars of Destiny Calculator</Link> report in seconds. Fully responsive and completely free of charge.
          </p>
          <div className="pt-2">
            <Link
              href="/bazi-calculator/"
              className="inline-flex bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-3 px-8 rounded-xl transition-all shadow-md items-center space-x-2 text-lg"
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
