import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DAY_MASTERS_DATA } from '@/lib/data/day-masters';
import { ELEMENTS_MAP, STEMS_MAP } from '@/lib/bazi';
import RelatedPages from '@/components/RelatedPages';
import { getArticleSchema } from '@/lib/seo';
import { Sparkles, Briefcase, Heart, BookOpen, Compass } from 'lucide-react';

interface StemPageProps {
  params: Promise<{ stem: string }>;
}

export async function generateStaticParams() {
  return [
    { stem: 'jia-wood' },
    { stem: 'yi-wood' },
    { stem: 'bing-fire' },
    { stem: 'ding-fire' },
    { stem: 'wu-earth' },
    { stem: 'ji-earth' },
    { stem: 'geng-metal' },
    { stem: 'xin-metal' },
    { stem: 'ren-water' },
    { stem: 'gui-water' },
  ];
}

export async function generateMetadata({ params }: StemPageProps): Promise<Metadata> {
  const { stem } = await params;
  const dm = DAY_MASTERS_DATA[stem];
  if (!dm) {
    return {
      title: 'Day Master Profile Not Found',
    };
  }
  const asciiStem = STEMS_MAP[dm.stem]?.en || dm.stem;
  return {
    title: `${asciiStem} ${dm.element} Day Master: Personality, Career, and Love`,
    description: `Detailed profile of the ${asciiStem} ${dm.element} (${dm.polarity}) Day Master in classical BaZi. Discover psychological traits, optimal careers, and relationship compatibility.`,
    alternates: { canonical: `https://fourpillarscalculator.com/bazi/day-master/${stem}/` },
    openGraph: {
      title: `${asciiStem} ${dm.element} Day Master: Personality, Career, and Love`,
      description: `Detailed profile of the ${asciiStem} ${dm.element} (${dm.polarity}) Day Master in classical BaZi. Discover psychological traits, optimal careers, and relationship compatibility.`,
      url: `https://fourpillarscalculator.com/bazi/day-master/${stem}/`,
      siteName: 'Imperial Bazi',
      type: 'website',
    },
  };
}

export default async function DayMasterDetailPage({ params }: StemPageProps) {
  const { stem } = await params;
  const dm = DAY_MASTERS_DATA[stem];

  if (!dm) {
    notFound();
  }

  const elColor = ELEMENTS_MAP[dm.element]?.color;
  const asciiStem = STEMS_MAP[dm.stem]?.en || dm.stem;
  const url = `https://fourpillarscalculator.com/bazi/day-master/${stem}/`;
  const articleSchema = getArticleSchema(
    `${asciiStem} ${dm.element} Day Master: Complete Astrological Profile`,
    `Detailed profile of the ${asciiStem} ${dm.element} (${dm.polarity}) Day Master in classical BaZi. Discover psychological traits, optimal careers, and relationship compatibility.`,
    url
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id={`day-master-${stem}-page`}>
        
        {/* Core Profile Header Card */}
        <div className="bg-slate-900 border border-slate-850 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl"></div>

          <div className="flex items-center space-x-4 text-center sm:text-left flex-col sm:flex-row">
            <span
              className="w-16 h-16 rounded-2xl flex items-center justify-center font-serif font-bold text-3xl text-white shadow-lg shrink-0"
              style={{ backgroundColor: elColor }}
            >
              {dm.stem}
            </span>
            <div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 mt-2 sm:mt-0">
                <span className="text-base font-semibold px-2.5 py-0.5 bg-amber-500/10 text-amber-500 rounded-full uppercase tracking-wider">
                  {dm.polarity}
                </span>
                <span className="text-slate-500 text-base italic">({dm.name})</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif text-slate-100 font-medium mt-1">
                {dm.stem} {dm.element} Day Master
              </h1>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-300 sm:max-w-md italic leading-relaxed text-center sm:text-right bg-slate-950 p-4 border border-slate-850 rounded-xl shrink-0">
            &ldquo;{dm.summary}&rdquo;
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-8" id="profile-sections">
          
          {/* Section 1: Personality */}
          <div className="bg-slate-900/60 border border-slate-850 rounded-xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-serif text-slate-100 font-medium flex items-center space-x-2 border-b border-slate-850 pb-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span>Personality Archetype &amp; Mindset</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{dm.personality}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-950 border border-slate-850 p-4 rounded-lg space-y-2">
                <span className="text-base font-semibold text-emerald-400 uppercase tracking-wider">Key Strengths</span>
                <ul className="list-disc list-inside text-base text-slate-400 space-y-1">
                  {dm.strengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-950 border border-slate-850 p-4 rounded-lg space-y-2">
                <span className="text-base font-semibold text-amber-400 uppercase tracking-wider">Major Challenges</span>
                <ul className="list-disc list-inside text-base text-slate-400 space-y-1">
                  {dm.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Career */}
          <div className="bg-slate-900/60 border border-slate-850 rounded-xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-serif text-slate-100 font-medium flex items-center space-x-2 border-b border-slate-850 pb-2">
              <Briefcase className="h-5 w-5 text-amber-500" />
              <span>Optimal Career Paths &amp; Work Ethic</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{dm.careerPath}</p>
          </div>

          {/* Section 3: Romance & Chemistry */}
          <div className="bg-slate-900/60 border border-slate-850 rounded-xl p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-serif text-slate-100 font-medium flex items-center space-x-2 border-b border-slate-850 pb-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Romance, Marriage &amp; Partnership Chemistry</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{dm.loveLife}</p>
          </div>

          {/* Section 4: Cosmic Elements and Support */}
          <div className="bg-slate-900/60 border border-slate-850 rounded-xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-serif text-slate-100 font-medium flex items-center space-x-2 border-b border-slate-850 pb-2">
              <BookOpen className="h-5 w-5 text-amber-500" />
              <span>Metaphysical Alliances &amp; Supporting Deities</span>
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              <div>
                <strong className="text-slate-200">Optimal Ten Gods Interactions:</strong>
                <p className="text-slate-400 text-base mt-1">{dm.bestTenGods}</p>
              </div>
              <div>
                <strong className="text-slate-200">Auspicious Compatibility Alliances:</strong>
                <p className="text-slate-400 text-base mt-1">{dm.famousDynamics}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Internal linking */}
        <RelatedPages currentPath={`/bazi/day-master/${stem}/`} />

      </div>
    </>
  );
}
