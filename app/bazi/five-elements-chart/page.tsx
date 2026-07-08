import React from 'react';
import { FIVE_ELEMENTS_DATA, GENERATING_CYCLE, CONTROLLING_CYCLE } from '@/lib/data/five-elements';
import RelatedPages from '@/components/RelatedPages';
import { getArticleSchema } from '@/lib/seo';
import { Compass, Sparkles, RefreshCw, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'BaZi Five Elements Chart and Balance Explained',
  description: 'See how Wood, Fire, Earth, Metal, and Water interact in your BaZi chart, and what element imbalances mean for your personality.',
  alternates: { canonical: 'https://fourpillarscalculator.com/bazi/five-elements-chart/' },
  openGraph: {
    title: 'BaZi Five Elements Chart and Balance Explained',
    description: 'See how Wood, Fire, Earth, Metal, and Water interact in your BaZi chart, and what element imbalances mean for your personality.',
    url: 'https://fourpillarscalculator.com/bazi/five-elements-chart/',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
};

export default function FiveElementsChartPage() {
  const url = 'https://fourpillarscalculator.com/bazi/five-elements-chart/';
  const articleSchema = getArticleSchema(
    'BaZi Five Elements Chart and Balance Explained',
    'See how Wood, Fire, Earth, Metal, and Water interact in your BaZi chart, and what element imbalances mean for your personality.',
    url
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="five-elements-chart-page">
        {/* Intro */}
        <div className="space-y-4 border-b border-slate-900 pb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-1 bg-amber-500/10 text-amber-500 rounded-full px-2.5 py-1 text-sm font-semibold uppercase tracking-wider">
            <Compass className="h-3 w-3" />
            <span>Cosmological Science</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            Five Elements Chart and Balance (Wǔ Xíng)
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Every human and natural phenomenon is shaped by the interactive dances of the Five Elements: Wood, Fire, Earth, Metal, and Water. In BaZi, evaluating their ratio reveals your physiological constitution and destiny timing.
          </p>
        </div>

        {/* Detailed 5 Elements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="five-elements-grid">
          {Object.values(FIVE_ELEMENTS_DATA).map((el) => (
            <div
              key={el.name}
              className="border rounded-2xl p-6 sm:p-8 space-y-4 shadow-md flex flex-col justify-between"
              style={{
                backgroundColor: '#0f172a', // deep slate
                borderColor: el.color + '30',
              }}
            >
              <div>
                <div className="flex justify-between items-center">
                  <span
                    className="text-lg font-serif font-bold text-white px-3 py-1 rounded"
                    style={{ backgroundColor: el.color }}
                  >
                    {el.name} ({el.chinese})
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {el.traits.map(t => (
                    <span key={t} className="bg-slate-950 text-slate-300 text-xs sm:text-sm px-2.5 py-1 rounded-full border border-slate-850">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mt-6 text-sm sm:text-base text-slate-300">
                  <div className="flex items-start space-x-2">
                    <RefreshCw className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">The Cycles:</strong>
                      <p className="text-sm text-slate-400 mt-0.5">{el.generating}</p>
                      <p className="text-sm text-slate-400">{el.controlling}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">Imbalance Analysis:</strong>
                      <p className="text-sm text-slate-400 mt-0.5"><span className="text-red-400">If Strong:</span> {el.imbalanceStrong}</p>
                      <p className="text-sm text-slate-400"><span className="text-amber-400">If Weak:</span> {el.imbalanceWeak}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Generating and Controlling Cycles visual blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="cycles-explanation-cards">
          <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-serif text-slate-100 font-medium mb-4 flex items-center space-x-2">
              <RefreshCw className="h-5 w-5 text-emerald-400" />
              <span>The Generating Cycle (Mother-Son relationship)</span>
            </h3>
            <div className="space-y-2 text-sm sm:text-base">
              {GENERATING_CYCLE.map((cycle, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-slate-850 last:border-0">
                  <span className="font-semibold text-slate-200">{cycle.parent}</span>
                  <span className="text-slate-500 italic text-sm">{cycle.action}</span>
                  <span className="font-semibold text-slate-200">{cycle.child}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-serif text-slate-100 font-medium mb-4 flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <span>The Controlling Cycle (Conqueror relationship)</span>
            </h3>
            <div className="space-y-2 text-sm sm:text-base">
              {CONTROLLING_CYCLE.map((cycle, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-slate-850 last:border-0">
                  <span className="font-semibold text-slate-200">{cycle.attacker}</span>
                  <span className="text-slate-500 italic text-sm">{cycle.action}</span>
                  <span className="font-semibold text-slate-200">{cycle.defender}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        <RelatedPages currentPath="/bazi/five-elements-chart/" />
      </div>
    </>
  );
}
