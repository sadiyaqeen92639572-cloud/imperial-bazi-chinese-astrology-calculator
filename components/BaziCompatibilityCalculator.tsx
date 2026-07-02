'use client';

import React, { useState } from 'react';
import { calculateBazi, BaziResult, ELEMENTS_MAP } from '@/lib/bazi';
import { Sparkles, Heart, AlertCircle, Compass, HelpCircle } from 'lucide-react';

export default function BaziCompatibilityCalculator() {
  // Person A inputs
  const [dateA, setDateA] = useState('1994-04-12');
  const [timeA, setTimeA] = useState('14:30');
  const [genderA, setGenderA] = useState<'male' | 'female'>('male');
  
  // Person B inputs
  const [dateB, setDateB] = useState('1997-09-02');
  const [timeB, setTimeB] = useState('09:15');
  const [genderB, setGenderB] = useState<'male' | 'female'>('female');

  const [score, setScore] = useState<number | null>(null);
  const [report, setReport] = useState<{
    dmA: string;
    dmB: string;
    elA: string;
    elB: string;
    dmInteraction: string;
    branchInteraction: string;
    elementBalanceHarmony: string;
    summary: string;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const [yA, mA, dA] = dateA.split('-').map(s => parseInt(s));
      const [hA, minA] = timeA.split(':').map(s => parseInt(s));
      const chartA = calculateBazi(yA, mA, dA, hA, minA, genderA, 1, 2.35);

      const [yB, mB, dB] = dateB.split('-').map(s => parseInt(s));
      const [hB, minB] = timeB.split(':').map(s => parseInt(s));
      const chartB = calculateBazi(yB, mB, dB, hB, minB, genderB, 1, 2.35);

      // Perform compatibility arithmetic
      const stemA = chartA.dayMaster.stem;
      const stemB = chartB.dayMaster.stem;
      const elA = chartA.dayMaster.element;
      const elB = chartB.dayMaster.element;

      let tempScore = 65; // Base average compatibility
      let dmInteraction = '';
      let branchInteraction = '';
      let elementBalanceHarmony = '';
      let summary = '';

      // 1. Check Day Master Combination (The 5 Combinations)
      // Jia-Ji, Yi-Geng, Bing-Xin, Ding-Ren, Wu-Gui
      const combinations: Record<string, string> = {
        '甲': '己', '己': '甲',
        '乙': '庚', '庚': '乙',
        '丙': '辛', '辛': '丙',
        '丁': '壬', '壬': '丁',
        '戊': '癸', '癸': '戊'
      };

      if (combinations[stemA] === stemB) {
        tempScore += 20;
        dmInteraction = `Perfect Alchemical Combination (${chartA.dayMaster.en} and ${chartB.dayMaster.en}). Your Day Masters merge in absolute harmony, creating an instantaneous, deep connection built on intrinsic spiritual chemistry.`;
      } else if (elA === elB) {
        tempScore += 10;
        dmInteraction = `Identical Element Companion (${elA} and ${elB}). You share the same core element, fostering immediate mutual understanding and similar approaches to life. You feel like kindred spirits.`;
      } else {
        // Producing cycle vs controlling cycle
        const produces: Record<string, string> = {
          Wood: 'Fire', Fire: 'Earth', Earth: 'Metal', Metal: 'Water', Water: 'Wood'
        };
        const controls: Record<string, string> = {
          Wood: 'Earth', Earth: 'Water', Water: 'Fire', Fire: 'Metal', Metal: 'Wood'
        };

        if (produces[elA] === elB) {
          tempScore += 12;
          dmInteraction = `Nurturing Production Cycle (${chartA.dayMaster.en} produces ${chartB.dayMaster.en}). Person A's element naturally fuels and nurtures Person B's growth. This relationship is deeply supportive and warm.`;
        } else if (produces[elB] === elA) {
          tempScore += 12;
          dmInteraction = `Nurturing Production Cycle (${chartB.dayMaster.en} produces ${chartA.dayMaster.en}). Person B's element naturally fuels and supports Person A. Person A feels deeply secure and energized in this partnership.`;
        } else if (controls[elA] === elB) {
          tempScore += 5;
          dmInteraction = `Stimulating Control Cycle (${chartA.dayMaster.en} controls ${chartB.dayMaster.en}). While there is dynamic tension, this represents a traditional attraction where one guides and stabilizes the other.`;
        } else if (controls[elB] === elA) {
          tempScore += 5;
          dmInteraction = `Stimulating Control Cycle (${chartB.dayMaster.en} controls ${chartA.dayMaster.en}). This represents deep fascination and friction, with Person B bringing challenge and structural growth to Person A.`;
        } else {
          dmInteraction = `Independent Elements. Your Day Masters have no direct energetic clash or combination. You operate as unique individuals with healthy boundaries, learning from each other's differences.`;
        }
      }

      // Spouse House Branch interactions (Day branches)
      const branchA = chartA.dayPillar.branch;
      const branchB = chartB.dayPillar.branch;

      // 6 combinations: Zi-Chou, Yin-Hai, Mao-Xu, Chen-You, Si-Shen, Wu-Wei
      const branchCombos: Record<string, string> = {
        '子': '丑', '丑': '子',
        '寅': '亥', '亥': '寅',
        '卯': '戌', '戌': '卯',
        '辰': '酉', '酉': '辰',
        '巳': '申', '申': '巳',
        '午': '未', '未': '午'
      };

      // 6 Clashes: Zi-Wu, Chou-Wei, Yin-Shen, Mao-You, Chen-Xu, Si-Hai
      const branchClashes: Record<string, string> = {
        '子': '午', '午': '子',
        '丑': '未', '未': '丑',
        '寅': '申', '申': '寅',
        '卯': '酉', '酉': '卯',
        '辰': '戌', '戌': '辰',
        '巳': '亥', '亥': '巳'
      };

      if (branchCombos[branchA] === branchB) {
        tempScore += 15;
        branchInteraction = `Spouse House Combination (${chartA.dayPillar.branchEn} and ${chartB.dayPillar.branchEn}). Your marital palaces combine beautifully! This predicts high long-term marital stability, shared domestic ideals, and easy cohabitation.`;
      } else if (branchClashes[branchA] === branchB) {
        tempScore -= 15;
        branchInteraction = `Spouse House Clash (${chartA.dayPillar.branchEn} and ${chartB.dayPillar.branchEn}). Your marital palaces are in direct opposition. This indicates relationship friction, contrasting lifestyles, or periods of geographic distance. Communication is crucial to resolve differing expectations.`;
      } else {
        branchInteraction = `Peaceful Spousal Houses. Your day earthly branches exist in a neutral alignment, allowing you to develop a domestic rhythm based on direct action and conscious mutual support rather than default karmic ties.`;
      }

      // Element balance harmony (complementary profiles)
      // If Person A has a lot of Wood and Person B is weak in Wood, it matches!
      let balancingMatches = 0;
      for (const el in chartA.elementCounts) {
        const countA = chartA.elementCounts[el] || 0;
        const countB = chartB.elementCounts[el] || 0;
        // If one has plenty (>2) and the other has little (<1), it represents a perfect balance.
        if ((countA >= 2 && countB <= 1) || (countB >= 2 && countA <= 1)) {
          balancingMatches++;
        }
      }

      if (balancingMatches >= 2) {
        tempScore += 10;
        elementBalanceHarmony = `Excellent Elemental Complementarity. You fill each other's energetic voids. Elements that are scarce in Person A's chart are abundant in Person B's, and vice versa. This creates great structural balance.`;
      } else {
        elementBalanceHarmony = `Symmetric Elemental Profiles. You share similar strengths and weaknesses in your element charts. While you understand each other's emotional phases perfectly, you must watch out for compounding similar anxieties.`;
      }

      // Cap score
      tempScore = Math.min(Math.max(tempScore, 35), 98);
      setScore(tempScore);

      // Generate summary text
      if (tempScore >= 80) {
        summary = `This is a highly auspicious partnership! With a compatibility score of ${tempScore}%, your charts show deep alchemical ties and supportive elemental flow. You naturally bring out the best in each other and can build a highly resilient, long-lasting bond.`;
      } else if (tempScore >= 60) {
        summary = `A healthy, stable compatibility score of ${tempScore}%. You possess many areas of mutual comfort and support, alongside manageable growth friction. This relationship thrives on clear communication, healthy boundaries, and respecting each other's unique styles.`;
      } else {
        summary = `Your compatibility score is ${tempScore}%. This represents a dynamic 'Growth Partnership' filled with intense passion but high friction. Your relationship serves as a major mirror for self-development. Cultivating patience and avoiding control dynamics will turn friction into profound wisdom.`;
      }

      setReport({
        dmA: `${chartA.dayMaster.en} (${chartA.dayMaster.stem})`,
        dmB: `${chartB.dayMaster.en} (${chartB.dayMaster.stem})`,
        elA: chartA.dayMaster.element,
        elB: chartB.dayMaster.element,
        dmInteraction,
        branchInteraction,
        elementBalanceHarmony,
        summary
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full space-y-8" id="compatibility-calculator-root">
      {/* Inputs side-by-side */}
      <form onSubmit={handleCalculate} className="grid grid-cols-1 md:grid-cols-2 gap-6" id="compat-form">
        
        {/* Person A Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <h3 className="text-sm font-serif font-semibold text-slate-100 uppercase tracking-widest">Person A (Self/Partner)</h3>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Birth Date</label>
              <input
                type="date"
                required
                value={dateA}
                onChange={(e) => setDateA(e.target.value)}
                className="w-full bg-slate-950 border border-slate-855 rounded-lg py-2 px-3 text-sm text-slate-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Birth Time</label>
              <input
                type="time"
                required
                value={timeA}
                onChange={(e) => setTimeA(e.target.value)}
                className="w-full bg-slate-950 border border-slate-855 rounded-lg py-2 px-3 text-sm text-slate-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Biological Gender</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setGenderA('male')}
                  className={`py-2 rounded-lg font-medium ${genderA === 'male' ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 border border-slate-800 text-slate-400'}`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGenderA('female')}
                  className={`py-2 rounded-lg font-medium ${genderA === 'female' ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 border border-slate-800 text-slate-400'}`}
                >
                  Female
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Person B Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <h3 className="text-sm font-serif font-semibold text-slate-100 uppercase tracking-widest">Person B (Partner)</h3>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Birth Date</label>
              <input
                type="date"
                required
                value={dateB}
                onChange={(e) => setDateB(e.target.value)}
                className="w-full bg-slate-950 border border-slate-855 rounded-lg py-2 px-3 text-sm text-slate-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Birth Time</label>
              <input
                type="time"
                required
                value={timeB}
                onChange={(e) => setTimeB(e.target.value)}
                className="w-full bg-slate-950 border border-slate-855 rounded-lg py-2 px-3 text-sm text-slate-200 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Biological Gender</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setGenderB('male')}
                  className={`py-2 rounded-lg font-medium ${genderB === 'male' ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 border border-slate-800 text-slate-400'}`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGenderB('female')}
                  className={`py-2 rounded-lg font-medium ${genderB === 'female' ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 border border-slate-800 text-slate-400'}`}
                >
                  Female
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-red-500 text-slate-950 font-semibold py-3 px-6 rounded-xl transition-all shadow-lg hover:brightness-110 flex items-center justify-center space-x-2"
            id="calculate-compatibility-btn"
          >
            <Heart className="h-5 w-5 fill-current" />
            <span>Calculate Compatibility Chemistry</span>
          </button>
        </div>
      </form>

      {/* COMPATIBILITY REPORT RESULT */}
      {score !== null && report && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl animate-fade-in" id="compatibility-report-container">
          {/* Score Circle & Title */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl font-serif text-slate-100 font-medium">BaZi Relationship Chemistry Report</h3>
              <p className="text-xs text-slate-400">A detailed analysis of Day Masters, spouse houses, and element balances.</p>
            </div>

            <div className="relative w-24 h-24 flex flex-col items-center justify-center rounded-full bg-slate-950 border-4 border-amber-500/80 shadow-lg shrink-0">
              <span className="text-2xl font-mono font-bold text-slate-100">{score}%</span>
              <span className="text-[10px] text-amber-500 uppercase font-semibold">Match Score</span>
            </div>
          </div>

          {/* Quick Identities */}
          <div className="grid grid-cols-2 gap-4 text-center bg-slate-950/60 p-4 border border-slate-850 rounded-xl">
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Person A Day Master</div>
              <div className="text-sm font-semibold text-slate-100 mt-0.5" style={{ color: ELEMENTS_MAP[report.elA]?.color }}>
                {report.dmA}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Person B Day Master</div>
              <div className="text-sm font-semibold text-slate-100 mt-0.5" style={{ color: ELEMENTS_MAP[report.elB]?.color }}>
                {report.dmB}
              </div>
            </div>
          </div>

          {/* Analysis Cards */}
          <div className="space-y-4 text-xs sm:text-sm">
            {/* Day master interaction */}
            <div className="bg-slate-950/40 p-4 border border-slate-850 rounded-xl space-y-1">
              <div className="text-amber-500 font-semibold flex items-center space-x-1.5">
                <Compass className="h-4 w-4" />
                <span>Day Master Chemistry</span>
              </div>
              <p className="text-slate-300 leading-relaxed mt-1">{report.dmInteraction}</p>
            </div>

            {/* Branch matching */}
            <div className="bg-slate-950/40 p-4 border border-slate-850 rounded-xl space-y-1">
              <div className="text-amber-500 font-semibold flex items-center space-x-1.5">
                <Heart className="h-4 w-4" />
                <span>Spouse House (Marriage Palace) Harmony</span>
              </div>
              <p className="text-slate-300 leading-relaxed mt-1">{report.branchInteraction}</p>
            </div>

            {/* Element balance */}
            <div className="bg-slate-950/40 p-4 border border-slate-850 rounded-xl space-y-1">
              <div className="text-amber-500 font-semibold flex items-center space-x-1.5">
                <HelpCircle className="h-4 w-4" />
                <span>Elemental Complementarity</span>
              </div>
              <p className="text-slate-300 leading-relaxed mt-1">{report.elementBalanceHarmony}</p>
            </div>
          </div>

          {/* Final Summary Card */}
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 sm:p-6 text-center">
            <h4 className="text-amber-500 font-semibold font-serif text-sm sm:text-base mb-2">The Astrology Verdict</h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{report.summary}</p>
          </div>

        </div>
      )}

    </div>
  );
}
