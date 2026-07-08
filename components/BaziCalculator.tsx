'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { calculateBazi, BaziResult, ELEMENTS_MAP, getTenGod, STEMS_MAP } from '@/lib/bazi';
import { DAY_MASTERS_DATA } from '@/lib/data/day-masters';
import { Sparkles, Calendar, Clock, MapPin, Compass, AlertCircle, Info, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const baziFormSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Please select a valid date (YYYY-MM-DD).'),
  time: z.string().optional(),
  unknownTime: z.boolean().default(false),
  gender: z.enum(['male', 'female']),
  timezone: z.number().min(-12).max(14, 'Timezone must be between -12 and +14 hours.'),
  longitude: z.number().min(-180).max(180, 'Longitude must be between -180 and +180 degrees.').optional()
});

interface BaziCalculatorProps {
  initialGender?: 'male' | 'female';
  mode?: 'full' | 'day-master-only' | 'luck-only' | 'forecast';
}

export default function BaziCalculator({ initialGender = 'female', mode = 'full' }: BaziCalculatorProps) {
  const [date, setDate] = useState('1995-08-18');
  const [time, setTime] = useState('08:30');
  const [unknownTime, setUnknownTime] = useState(false);
  const [gender, setGender] = useState<'male' | 'female'>(initialGender);
  const [timezone, setTimezone] = useState(1); // Default Central Europe
  const [longitude, setLongitude] = useState<string>('2.35'); // Default Paris
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [result, setResult] = useState<BaziResult | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors([]);

    const parsedLong = longitude ? parseFloat(longitude) : undefined;
    
    // Validate with Zod
    const validation = baziFormSchema.safeParse({
      date,
      time: unknownTime ? undefined : time,
      unknownTime,
      gender,
      timezone,
      longitude: parsedLong
    });

    if (!validation.success) {
      const errors = validation.error.issues.map(err => err.message);
      setFormErrors(errors);
      return;
    }

    const [yearStr, monthStr, dayStr] = date.split('-');
    const y = parseInt(yearStr);
    const m = parseInt(monthStr);
    const d = parseInt(dayStr);

    let hr: number | null = null;
    let min: number | null = null;
    if (!unknownTime && time) {
      const [hStr, minStr] = time.split(':');
      hr = parseInt(hStr);
      min = parseInt(minStr);
    }

    try {
      const computed = calculateBazi(y, m, d, hr, min, gender, timezone, parsedLong);
      setResult(computed);
    } catch (err) {
      setFormErrors(['An unexpected calculation error occurred. Please verify your dates and try again.']);
      console.error(err);
    }
  };

  // Helper for finding the slug of Day Master matching current results
  const getDayMasterSlug = (stem: string) => {
    for (const slug in DAY_MASTERS_DATA) {
      if (DAY_MASTERS_DATA[slug].stem === stem) {
        return slug;
      }
    }
    return '';
  };

  return (
    <div className="w-full space-y-8" id="bazi-calculator-root">
      {/* Input Form Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl" id="calculator-form-container">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-amber-500/10 p-2 rounded-lg">
            <Compass className="h-6 w-6 text-amber-500" />
          </div>
          <div>
            <h2 className="text-xl font-serif text-slate-100 font-medium">Enter Birth Details</h2>
            <p className="text-base text-slate-400">Provide date, clock time, and birthplace coordinates for maximum solar accuracy.</p>
          </div>
        </div>

        <form onSubmit={handleCalculate} className="space-y-6" id="bazi-calc-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Birth Date */}
            <div>
              <label className="block text-lg font-medium text-slate-300 mb-2 flex items-center">
                <Calendar className="h-4 w-4 mr-1.5 text-amber-500" />
                Birth Date (Gregorian)
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/50 rounded-lg py-2.5 px-4 text-slate-200 outline-none transition-colors"
                id="birth-date-input"
              />
            </div>

            {/* Birth Time */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-lg font-medium text-slate-300 flex items-center">
                  <Clock className="h-4 w-4 mr-1.5 text-amber-500" />
                  Birth Time (Clock)
                </label>
                <label className="flex items-center text-base text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={unknownTime}
                    onChange={(e) => setUnknownTime(e.target.checked)}
                    className="mr-1.5 accent-amber-500"
                    id="unknown-time-checkbox"
                  />
                  Hour Unknown
                </label>
              </div>
              <input
                type="time"
                disabled={unknownTime}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/50 disabled:opacity-40 rounded-lg py-2.5 px-4 text-slate-200 outline-none transition-colors"
                id="birth-time-input"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-lg font-medium text-slate-300 mb-2">Biological Gender</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2.5 rounded-lg text-lg font-medium transition-colors ${
                    gender === 'female'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800/40'
                  }`}
                  id="gender-female-btn"
                >
                  Female (Yin/Yang rule)
                </button>
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2.5 rounded-lg text-lg font-medium transition-colors ${
                    gender === 'male'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800/40'
                  }`}
                  id="gender-male-btn"
                >
                  Male (Yin/Yang rule)
                </button>
              </div>
              <p className="text-base text-slate-500 mt-1">Required to compute correct 10-year Luck Pillar movement direction.</p>
            </div>

            {/* Timezone offset */}
            <div>
              <label className="block text-lg font-medium text-slate-300 mb-2">Timezone (UTC Offset Hours)</label>
              <input
                type="number"
                step="0.5"
                min="-12"
                max="14"
                value={timezone}
                onChange={(e) => setTimezone(parseFloat(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/50 rounded-lg py-2.5 px-4 text-slate-200 outline-none transition-colors"
                id="timezone-input"
              />
              <p className="text-base text-slate-500 mt-1">E.g., EST = -5, GMT = 0, CET = +1, Singapore = +8.</p>
            </div>

            {/* Longitude (optional) */}
            <div className="md:col-span-2">
              <label className="block text-lg font-medium text-slate-300 mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-1.5 text-amber-500" />
                Birthplace Longitude (Optional - for solar time correction)
              </label>
              <input
                type="number"
                step="0.0001"
                min="-180"
                max="180"
                placeholder="E.g. 2.3522 (Paris) or -74.0060 (New York)"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/50 rounded-lg py-2.5 px-4 text-slate-200 outline-none transition-colors"
                id="longitude-input"
              />
              <p className="text-base text-slate-500 mt-1">
                Converts standard clock time to Local Solar Time. This prevents boundary hour shifts between different cities in the same timezone.
              </p>
            </div>
          </div>

          {/* Validation Errors */}
          {formErrors.length > 0 && (
            <div className="bg-red-900/20 border border-red-800/40 rounded-lg p-4 flex items-start space-x-2 text-red-400 text-lg">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <div className="space-y-1">
                {formErrors.map((err, idx) => (
                  <p key={idx}>{err}</p>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center space-x-2"
            id="calculate-bazi-btn"
          >
            <Sparkles className="h-5 w-5" />
            <span>Generate Destiny Chart</span>
          </button>
        </form>
      </div>

      {/* Results Rendering */}
      {result && (
        <div className="space-y-10 animate-fade-in" id="bazi-results-section">
          
          {/* Header Card / Identity Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-base font-semibold px-2.5 py-1 bg-amber-500/10 text-amber-500 rounded-full uppercase tracking-wider">
                  {result.gender}
                </span>
                <span className="text-slate-400 text-base">Birth Data:</span>
              </div>
              <h3 className="text-xl font-serif text-slate-100 font-medium mt-1">{result.solarDateStr}</h3>
              <p className="text-base text-slate-400 mt-1">{result.lunarDateStr}</p>
            </div>
            
            {/* Day Master Quick Stats */}
            <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-4 flex items-center space-x-4">
              <div
                className="w-12 h-12 rounded-lg flex flex-col items-center justify-center text-white font-serif font-bold border"
                style={{
                  backgroundColor: ELEMENTS_MAP[result.dayMaster.element]?.color,
                  borderColor: ELEMENTS_MAP[result.dayMaster.element]?.color + '80'
                }}
              >
                <span className="text-xl">{result.dayMaster.stem}</span>
                <span className="text-sm leading-none opacity-80">{result.dayMaster.en}</span>
              </div>
              <div>
                <div className="text-sm text-slate-500 uppercase tracking-widest">Day Master</div>
                <div className="text-slate-200 font-medium text-lg">
                  {result.dayMaster.polarity} {result.dayMaster.element}
                </div>
                <div className="text-base">
                  Strength: <span className={`font-semibold ${
                    result.dayMaster.strength === 'Strong' ? 'text-emerald-400' :
                    result.dayMaster.strength === 'Weak' ? 'text-red-400' : 'text-amber-400'
                  }`}>{result.dayMaster.strength} ({result.dayMaster.strengthScore} pts)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Calculator Sections depending on requested Display Mode */}
          {mode !== 'luck-only' && (
            <>
              {/* THE FOUR PILLARS SCROLL (The famous Temple scroll structure) */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Compass className="h-5 w-5 text-amber-500" />
                  <h3 className="text-xl font-serif text-slate-100 tracking-wide font-medium">The Four Pillars of Destiny (Sì Zhù)</h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" id="four-pillars-scroll-grid">
                  {/* Array of pillars to render */}
                  {[
                    { title: 'Year Pillar', desc: 'Ancestors / Roots (Ages 1-15)', pillar: result.yearPillar },
                    { title: 'Month Pillar', desc: 'Parents / Career (Ages 16-30)', pillar: result.monthPillar },
                    { title: 'Day Pillar', desc: 'Self / Spouse (Ages 31-45)', pillar: result.dayPillar },
                    { title: 'Hour Pillar', desc: 'Children / Outer (Ages 46+)', pillar: result.hourPillar, isHour: true }
                  ].map((col, idx) => {
                    if (col.isHour && !col.pillar) {
                      return (
                        <div key={idx} className="bg-slate-900/40 border border-slate-800/40 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[340px]">
                          <div className="text-base text-slate-500 uppercase tracking-widest">{col.title}</div>
                          <div className="text-lg text-slate-600 mt-2 text-center">Hour not provided</div>
                        </div>
                      );
                    }

                    const pillar = col.pillar!;
                    const stemColor = ELEMENTS_MAP[pillar.stemElement]?.color;
                    const branchColor = ELEMENTS_MAP[pillar.branchElement]?.color;

                    return (
                      <div
                        key={idx}
                        className={`bg-slate-900 border rounded-2xl p-4 sm:p-6 text-center space-y-6 flex flex-col justify-between ${
                          idx === 2 ? 'border-amber-500 shadow-amber-500/5 shadow-xl' : 'border-slate-800'
                        }`}
                      >
                        {/* Title */}
                        <div>
                          <div className="text-base font-semibold uppercase tracking-widest text-slate-400">{col.title}</div>
                          <div className="text-sm text-slate-500 italic mt-0.5">{col.desc}</div>
                        </div>

                        {/* Heavenly Stem Box */}
                        <div className="bg-slate-950 border border-slate-850 rounded-xl p-3 space-y-1 relative group">
                          {pillar.tenGodStem && (
                            <span className="absolute top-1 left-2 text-sm font-bold text-slate-500 uppercase tracking-wider">
                              {pillar.tenGodStem.code}
                            </span>
                          )}
                          <div className="text-3xl font-bold font-serif" style={{ color: stemColor }}>
                            {pillar.stem}
                          </div>
                          <div className="text-base font-medium text-slate-200">{pillar.stemEn}</div>
                          <div className="text-sm text-slate-500 flex items-center justify-center space-x-1">
                            <span>{pillar.stemPolarity}</span>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stemColor }}></span>
                            <span>{pillar.stemElement}</span>
                          </div>
                          {pillar.tenGodStem && (
                            <div className="text-sm font-medium text-amber-500/90 mt-1">
                              {pillar.tenGodStem.en} ({pillar.tenGodStem.zh})
                            </div>
                          )}
                        </div>

                        {/* Earthly Branch Box */}
                        <div className="bg-slate-950 border border-slate-850 rounded-xl p-3 space-y-1 relative group">
                          {pillar.tenGodBranchMain && (
                            <span className="absolute top-1 left-2 text-sm font-bold text-slate-500 uppercase tracking-wider">
                              {pillar.tenGodBranchMain.code}
                            </span>
                          )}
                          <div className="text-3xl font-bold font-serif" style={{ color: branchColor }}>
                            {pillar.branch}
                          </div>
                          <div className="text-base font-medium text-slate-200">
                            {pillar.branchEn} ({pillar.animal})
                          </div>
                          <div className="text-sm text-slate-500 flex items-center justify-center space-x-1">
                            <span>{pillar.branchPolarity}</span>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: branchColor }}></span>
                            <span>{pillar.branchElement}</span>
                          </div>
                          {pillar.tenGodBranchMain && (
                            <div className="text-sm font-medium text-amber-500/90 mt-1">
                              {pillar.tenGodBranchMain.en}
                            </div>
                          )}
                        </div>

                        {/* Hidden Stems Section */}
                        <div className="border-t border-slate-850 pt-3">
                          <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Hidden Stems</div>
                          <div className="space-y-1 text-left">
                            {pillar.hiddenStems.map((hs, hidx) => (
                              <div key={hidx} className="flex justify-between items-center text-base py-0.5 border-b border-slate-950 last:border-0">
                                <span className="font-serif font-medium text-slate-200" style={{ color: ELEMENTS_MAP[hs.element]?.color }}>
                                  {hs.stem} ({hs.en})
                                </span>
                                <span className="text-slate-500 text-sm truncate max-w-[120px]">{hs.tenGod}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Link to Day Master Page */}
              <div className="bg-slate-900 border border-amber-500/20 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-slate-200 font-medium text-lg font-serif">Read More About Your Day Master</h4>
                    <p className="text-base text-slate-400 mt-1">
                      Your Day Master is <span className="text-amber-500 font-semibold">{result.dayMaster.en} {result.dayMaster.element}</span>. Read the dedicated chapter on traits, careers, and love.
                    </p>
                  </div>
                </div>
                <Link
                  href={`/bazi/day-master/${getDayMasterSlug(result.dayMaster.stem)}/`}
                  className="bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-slate-950 text-base font-semibold py-2 px-4 rounded-lg border border-amber-500/20 transition-all flex items-center space-x-1 shrink-0"
                >
                  <span>Open detailed interpretation</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              {/* FIVE ELEMENTS BALANCE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Visual counts */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-serif text-slate-100 font-medium">Five Elements Balance Chart</h3>
                    <p className="text-base text-slate-400">Total active counts of Wood, Fire, Earth, Metal, and Water characters.</p>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(result.elementCounts).map(([el, count]) => {
                      const percentage = result.elementPercentages[el] || 0;
                      const info = ELEMENTS_MAP[el] || { en: el, zh: '', color: '#fff' };

                      return (
                        <div key={el} className="space-y-1">
                          <div className="flex justify-between text-base font-medium">
                            <span className="flex items-center space-x-1.5 text-slate-300">
                              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: info.color }}></span>
                              <span>{info.en} ({info.zh})</span>
                            </span>
                            <span className="text-slate-400">{count} occurrences ({percentage}%)</span>
                          </div>
                          <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-850">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${percentage}%`,
                                backgroundColor: info.color
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Useful God analysis */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif text-slate-100 font-medium flex items-center space-x-1.5">
                      <span>Useful God (Yong Shen)</span>
                      <span className="text-sm font-semibold bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded uppercase">
                        {result.usefulGod.element}
                      </span>
                    </h3>
                    <p className="text-base text-slate-400">Your optimal balancing element determined by Day Master strength.</p>
                  </div>

                  <p className="text-base text-slate-300 leading-relaxed bg-slate-950 p-4 border border-slate-850 rounded-xl">
                    {result.usefulGod.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-base">
                    <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-3">
                      <div className="text-emerald-400 font-semibold mb-1">Favorable Elements</div>
                      <div className="flex flex-wrap gap-1">
                        {result.usefulGod.favorableElements.map(el => (
                          <span key={el} className="bg-emerald-900/40 text-emerald-300 px-1.5 py-0.5 rounded text-sm">
                            {el}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-red-950/20 border border-red-900/30 rounded-lg p-3">
                      <div className="text-red-400 font-semibold mb-1">Unfavorable Elements</div>
                      <div className="flex flex-wrap gap-1">
                        {result.usefulGod.unfavorableElements.length > 0 ? (
                          result.usefulGod.unfavorableElements.map(el => (
                            <span key={el} className="bg-red-900/40 text-red-300 px-1.5 py-0.5 rounded text-sm">
                              {el}
                            </span>
                          ))
                        ) : (
                          <span className="text-slate-500 italic text-sm">None strictly</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </>
          )}

          {/* LUCK PILLARS SECTION */}
          {mode !== 'day-master-only' && result.luckPillars.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Compass className="h-5 w-5 text-amber-500" />
                <h3 className="text-xl font-serif text-slate-100 tracking-wide font-medium">10-Year Major Luck Pillars (Da Yun)</h3>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg overflow-x-auto">
                <table className="w-full text-left text-lg border-collapse min-w-[700px]">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-medium text-base">
                      <th className="py-3 px-4">Cycle</th>
                      <th className="py-3 px-4">Start Age</th>
                      <th className="py-3 px-4">Start Year</th>
                      <th className="py-3 px-4">Luck Stem</th>
                      <th className="py-3 px-4">Luck Branch</th>
                      <th className="py-3 px-4">Ten God (Stem)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.luckPillars.map((lp, idx) => {
                      const stemColor = ELEMENTS_MAP[lp.stemElement]?.color;
                      const branchColor = ELEMENTS_MAP[lp.branchElement]?.color;

                      return (
                        <tr key={idx} className="border-b border-slate-850/60 last:border-0 hover:bg-slate-850/20 text-slate-200">
                          <td className="py-3.5 px-4 font-medium text-amber-500">Pillar {idx + 1}</td>
                          <td className="py-3.5 px-4 font-mono text-base">{lp.startAge} years old</td>
                          <td className="py-3.5 px-4 font-mono text-base">{lp.startYear}</td>
                          <td className="py-3.5 px-4">
                            <span className="font-serif font-bold mr-1" style={{ color: stemColor }}>
                              {lp.stem}
                            </span>
                            <span className="text-base text-slate-400">{lp.stemEn} ({lp.stemElement})</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-serif font-bold mr-1" style={{ color: branchColor }}>
                              {lp.branch}
                            </span>
                            <span className="text-base text-slate-400">{lp.branchEn} ({lp.animal})</span>
                          </td>
                          <td className="py-3.5 px-4 text-base font-semibold text-slate-300">
                            {lp.tenGodStem.en} ({lp.tenGodStem.zh})
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
