import { Solar } from 'lunar-javascript';

export interface ElementInfo {
  en: string;
  zh: string;
  color: string;
}

export const ELEMENTS_MAP: Record<string, ElementInfo> = {
  Wood: { en: 'Wood', zh: '木', color: '#10B981' }, // emerald
  Fire: { en: 'Fire', zh: '火', color: '#EF4444' }, // red
  Earth: { en: 'Earth', zh: '土', color: '#F59E0B' }, // amber
  Metal: { en: 'Metal', zh: '金', color: '#6B7280' }, // gray/silver
  Water: { en: 'Water', zh: '水', color: '#3B82F6' }, // blue
};

export const STEMS_MAP: Record<string, { en: string; pinyin: string; element: string; polarity: 'Yang' | 'Yin' }> = {
  '甲': { en: 'Jia', pinyin: 'Jiǎ', element: 'Wood', polarity: 'Yang' },
  '乙': { en: 'Yi', pinyin: 'Yǐ', element: 'Wood', polarity: 'Yin' },
  '丙': { en: 'Bing', pinyin: 'Bǐng', element: 'Fire', polarity: 'Yang' },
  '丁': { en: 'Ding', pinyin: 'Dīng', element: 'Fire', polarity: 'Yin' },
  '戊': { en: 'Wu', pinyin: 'Wù', element: 'Earth', polarity: 'Yang' },
  '己': { en: 'Ji', pinyin: 'Jǐ', element: 'Earth', polarity: 'Yin' },
  '庚': { en: 'Geng', pinyin: 'Gēng', element: 'Metal', polarity: 'Yang' },
  '辛': { en: 'Xin', pinyin: 'Xīn', element: 'Metal', polarity: 'Yin' },
  '壬': { en: 'Ren', pinyin: 'Rén', element: 'Water', polarity: 'Yang' },
  '癸': { en: 'Gui', pinyin: 'Guǐ', element: 'Water', polarity: 'Yin' },
};

export const BRANCHES_MAP: Record<string, { en: string; pinyin: string; element: string; polarity: 'Yang' | 'Yin'; animal: string; hiddenStems: string[] }> = {
  '子': { en: 'Zi', pinyin: 'Zǐ', element: 'Water', polarity: 'Yang', animal: 'Rat', hiddenStems: ['癸'] },
  '丑': { en: 'Chou', pinyin: 'Chǒu', element: 'Earth', polarity: 'Yin', animal: 'Ox', hiddenStems: ['己', '癸', '辛'] },
  '寅': { en: 'Yin', pinyin: 'Yín', element: 'Wood', polarity: 'Yang', animal: 'Tiger', hiddenStems: ['甲', '丙', '戊'] },
  '卯': { en: 'Mao', pinyin: 'Mǎo', element: 'Wood', polarity: 'Yin', animal: 'Rabbit', hiddenStems: ['乙'] },
  '辰': { en: 'Chen', pinyin: 'Chén', element: 'Earth', polarity: 'Yang', animal: 'Dragon', hiddenStems: ['戊', '乙', '癸'] },
  '巳': { en: 'Si', pinyin: 'Sì', element: 'Fire', polarity: 'Yin', animal: 'Snake', hiddenStems: ['丙', '庚', '戊'] },
  '午': { en: 'Wu', pinyin: 'Wǔ', element: 'Fire', polarity: 'Yang', animal: 'Horse', hiddenStems: ['丁', '己'] },
  '未': { en: 'Wei', pinyin: 'Wèi', element: 'Earth', polarity: 'Yin', animal: 'Goat', hiddenStems: ['己', '丁', '乙'] },
  '申': { en: 'Shen', pinyin: 'Shēn', element: 'Metal', polarity: 'Yang', animal: 'Monkey', hiddenStems: ['庚', '壬', '戊'] },
  '酉': { en: 'You', pinyin: 'Yǒu', element: 'Metal', polarity: 'Yin', animal: 'Rooster', hiddenStems: ['辛'] },
  '戌': { en: 'Xu', pinyin: 'Xū', element: 'Earth', polarity: 'Yang', animal: 'Dog', hiddenStems: ['戊', '辛', '丁'] },
  '亥': { en: 'Hai', pinyin: 'Hài', element: 'Water', polarity: 'Yin', animal: 'Pig', hiddenStems: ['壬', '甲'] },
};

export interface PillarDetail {
  stem: string;
  stemEn: string;
  stemPinyin: string;
  stemElement: string;
  stemPolarity: 'Yang' | 'Yin';
  branch: string;
  branchEn: string;
  branchPinyin: string;
  branchElement: string;
  branchPolarity: 'Yang' | 'Yin';
  animal: string;
  hiddenStems: Array<{ stem: string; en: string; element: string; polarity: 'Yang' | 'Yin'; tenGod: string; tenGodZh: string }>;
  tenGodStem?: { en: string; zh: string; code: string };
  tenGodBranchMain?: { en: string; zh: string; code: string };
}

export interface LuckPillarDetail {
  startYear: number;
  startAge: number;
  stem: string;
  stemEn: string;
  stemElement: string;
  stemPolarity: 'Yang' | 'Yin';
  branch: string;
  branchEn: string;
  branchElement: string;
  branchPolarity: 'Yang' | 'Yin';
  animal: string;
  tenGodStem: { en: string; zh: string; code: string };
}

export interface BaziResult {
  solarDateStr: string;
  lunarDateStr: string;
  gender: 'male' | 'female';
  yearPillar: PillarDetail;
  monthPillar: PillarDetail;
  dayPillar: PillarDetail;
  hourPillar: PillarDetail | null;
  dayMaster: {
    stem: string;
    en: string;
    pinyin: string;
    element: string;
    polarity: 'Yang' | 'Yin';
    strength: 'Strong' | 'Weak' | 'Balanced';
    strengthScore: number;
  };
  elementCounts: Record<string, number>;
  elementPercentages: Record<string, number>;
  usefulGod: {
    element: string;
    description: string;
    favorableElements: string[];
    unfavorableElements: string[];
  };
  luckPillars: LuckPillarDetail[];
}

export function getTenGod(dayMasterStem: string, otherStem: string) {
  const dm = STEMS_MAP[dayMasterStem];
  const other = STEMS_MAP[otherStem];
  if (!dm || !other) return { en: 'Day Master', zh: '日主', code: 'DM' };

  const dmElement = dm.element;
  const otherElement = other.element;
  const samePolarity = dm.polarity === other.polarity;

  const elementsOrder = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  const dmIdx = elementsOrder.indexOf(dmElement);
  const otherIdx = elementsOrder.indexOf(otherElement);

  const diff = (otherIdx - dmIdx + 5) % 5;

  switch (diff) {
    case 0:
      if (samePolarity) {
        return { en: 'Friend (Companion)', zh: '比肩', code: 'F' };
      } else {
        return { en: 'Rob Wealth', zh: '劫财', code: 'RW' };
      }
    case 1:
      if (samePolarity) {
        return { en: 'Eating God', zh: '食神', code: 'EG' };
      } else {
        return { en: 'Hurting Officer', zh: '伤官', code: 'HO' };
      }
    case 2:
      if (samePolarity) {
        return { en: 'Indirect Wealth', zh: '偏财', code: 'IW' };
      } else {
        return { en: 'Direct Wealth', zh: '正财', code: 'DW' };
      }
    case 3:
      if (samePolarity) {
        return { en: '7 Killings (Indirect Officer)', zh: '七杀', code: '7K' };
      } else {
        return { en: 'Direct Officer', zh: '正官', code: 'DO' };
      }
    case 4:
      if (samePolarity) {
        return { en: 'Indirect Resource', zh: '偏印', code: 'IR' };
      } else {
        return { en: 'Direct Resource', zh: '正印', code: 'DR' };
      }
    default:
      return { en: 'Unknown', zh: '未知', code: '?' };
  }
}

export function calculateBazi(
  year: number,
  month: number,
  day: number,
  hour: number | null,
  minute: number | null,
  gender: 'male' | 'female',
  timezoneOffset?: number,
  longitude?: number
): BaziResult {
  // 1. Adjust solar time based on longitude if available
  let birthDate = new Date(year, month - 1, day, hour ?? 12, minute ?? 0);
  if (longitude !== undefined && timezoneOffset !== undefined) {
    const standardLongitude = timezoneOffset * 15;
    const diffMinutes = 4 * (longitude - standardLongitude);
    birthDate = new Date(birthDate.getTime() + diffMinutes * 60 * 1000);
  }

  // Create Lunar Object
  const solar = Solar.fromYmdHms(
    birthDate.getFullYear(),
    birthDate.getMonth() + 1,
    birthDate.getDate(),
    birthDate.getHours(),
    birthDate.getMinutes(),
    birthDate.getSeconds()
  );
  const lunar = solar.getLunar();
  const bazi = lunar.getEightChar();

  // Retrieve stems and branches
  const yStem = bazi.getYearGan();
  const yBranch = bazi.getYearZhi();
  const mStem = bazi.getMonthGan();
  const mBranch = bazi.getMonthZhi();
  const dStem = bazi.getDayGan();
  const dBranch = bazi.getDayZhi();

  const hStem = hour !== null ? bazi.getTimeGan() : '';
  const hBranch = hour !== null ? bazi.getTimeZhi() : '';

  const dmStem = dStem; // Day Master is the Day Stem
  const dmInfo = STEMS_MAP[dmStem] || { en: 'Unknown', pinyin: '', element: 'Wood', polarity: 'Yang' };

  // Helper to make Pillar Detail
  const makePillarDetail = (stem: string, branch: string, isHour = false): PillarDetail => {
    const sMap = STEMS_MAP[stem] || { en: '?', pinyin: '?', element: '?', polarity: 'Yang' as const };
    const bMap = BRANCHES_MAP[branch] || { en: '?', pinyin: '?', element: '?', polarity: 'Yang' as const, animal: '?', hiddenStems: [] };

    const hiddenStemsMapped = bMap.hiddenStems.map(hs => {
      const hsMap = STEMS_MAP[hs] || { en: '?', element: '?', polarity: 'Yang' as const };
      const tg = getTenGod(dmStem, hs);
      return {
        stem: hs,
        en: hsMap.en,
        element: hsMap.element,
        polarity: hsMap.polarity,
        tenGod: tg.en,
        tenGodZh: tg.zh,
      };
    });

    const tenGodStem = !isHour || stem ? getTenGod(dmStem, stem) : undefined;
    const tenGodBranchMain = branch && bMap.hiddenStems.length > 0 ? getTenGod(dmStem, bMap.hiddenStems[0]) : undefined;

    return {
      stem,
      stemEn: sMap.en,
      stemPinyin: sMap.pinyin,
      stemElement: sMap.element,
      stemPolarity: sMap.polarity,
      branch,
      branchEn: bMap.en,
      branchPinyin: bMap.pinyin,
      branchElement: bMap.element,
      branchPolarity: bMap.polarity,
      animal: bMap.animal,
      hiddenStems: hiddenStemsMapped,
      tenGodStem,
      tenGodBranchMain,
    };
  };

  const yearPillar = makePillarDetail(yStem, yBranch);
  const monthPillar = makePillarDetail(mStem, mBranch);
  const dayPillar = makePillarDetail(dStem, dBranch);
  const hourPillar = hour !== null ? makePillarDetail(hStem, hBranch, true) : null;

  // Day Master Strength score calculation
  // Let's count support elements in the 8 characters: Stems & Branches
  // Day Master element is dmInfo.element
  const producingElements: Record<string, string> = {
    Wood: 'Water', // Water produces Wood
    Fire: 'Wood',  // Wood produces Fire
    Earth: 'Fire',  // Fire produces Earth
    Metal: 'Earth', // Earth produces Metal
    Water: 'Metal', // Metal produces Water
  };

  const sameEl = dmInfo.element;
  const supportEl = producingElements[dmInfo.element];

  // Weight map: Month branch has the highest weight in determining season!
  // Let's give:
  // Month Branch: 40 points
  // Day Branch: 15 points
  // Hour Branch (if exists): 10 points
  // Year Branch: 10 points
  // Hour Stem (if exists): 10 points
  // Month Stem: 10 points
  // Year Stem: 10 points
  // Total max support score is out of 100 approx.
  let strengthScore = 0;
  
  // Year Stem
  if (yearPillar.stemElement === sameEl) strengthScore += 10;
  else if (yearPillar.stemElement === supportEl) strengthScore += 8;

  // Year Branch
  if (yearPillar.branchElement === sameEl) strengthScore += 10;
  else if (yearPillar.branchElement === supportEl) strengthScore += 8;

  // Month Stem
  if (monthPillar.stemElement === sameEl) strengthScore += 10;
  else if (monthPillar.stemElement === supportEl) strengthScore += 8;

  // Month Branch (The season / De Ling)
  if (monthPillar.branchElement === sameEl) strengthScore += 35;
  else if (monthPillar.branchElement === supportEl) strengthScore += 30;

  // Day Branch (The partner house / spouse house)
  if (dayPillar.branchElement === sameEl) strengthScore += 15;
  else if (dayPillar.branchElement === supportEl) strengthScore += 12;

  // Hour Pillar
  if (hourPillar) {
    if (hourPillar.stemElement === sameEl) strengthScore += 10;
    else if (hourPillar.stemElement === supportEl) strengthScore += 8;

    if (hourPillar.branchElement === sameEl) strengthScore += 10;
    else if (hourPillar.branchElement === supportEl) strengthScore += 8;
  }

  // Determine strength category
  // An average supported chart is around 35-55 points.
  let strength: 'Strong' | 'Weak' | 'Balanced' = 'Balanced';
  if (strengthScore > 48) {
    strength = 'Strong';
  } else if (strengthScore < 32) {
    strength = 'Weak';
  } else {
    strength = 'Balanced';
  }

  // 5. Element Counts
  const elementCounts: Record<string, number> = {
    Wood: 0,
    Fire: 0,
    Earth: 0,
    Metal: 0,
    Water: 0,
  };

  const addCount = (el: string, isBranch = false) => {
    if (elementCounts[el] !== undefined) {
      elementCounts[el] += isBranch ? 1 : 1; // can adjust weights if needed, but simple count is 1
    }
  };

  addCount(yearPillar.stemElement);
  addCount(yearPillar.branchElement, true);
  addCount(monthPillar.stemElement);
  addCount(monthPillar.branchElement, true);
  addCount(dayPillar.stemElement);
  addCount(dayPillar.branchElement, true);

  if (hourPillar) {
    addCount(hourPillar.stemElement);
    addCount(hourPillar.branchElement, true);
  }

  const totalChars = hourPillar ? 8 : 6;
  const elementPercentages: Record<string, number> = {};
  for (const el in elementCounts) {
    elementPercentages[el] = Math.round((elementCounts[el] / totalChars) * 100);
  }

  // 6. Useful God (Yong Shen) calculation
  const allElements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  
  // Favorable and unfavorable elements based on DM strength
  let favorableElements: string[] = [];
  let unfavorableElements: string[] = [];
  let usefulGodEl = '';
  let usefulGodDesc = '';

  if (strength === 'Strong') {
    // Needs draining/controlling: Output, Wealth, Power
    // Output (produced by DM), Wealth (controlled by DM), Power (controls DM)
    const dmIndex = allElements.indexOf(dmInfo.element);
    const outputEl = allElements[(dmIndex + 1) % 5];
    const wealthEl = allElements[(dmIndex + 2) % 5];
    const powerEl = allElements[(dmIndex + 3) % 5];
    const resourceEl = allElements[(dmIndex + 4) % 5]; // produces DM

    favorableElements = [outputEl, wealthEl, powerEl];
    unfavorableElements = [dmInfo.element, resourceEl];
    
    // Choose the weakest favorable element in the chart as the primary Useful God
    usefulGodEl = favorableElements.reduce((weakest, el) => {
      return elementCounts[el] < elementCounts[weakest] ? el : weakest;
    }, favorableElements[0]);

    usefulGodDesc = `Since your Day Master (${dmInfo.en} ${dmInfo.element}) is Strong, your chart benefits from elements that release, exhaust, or control its excessive energy. Your Useful God (Yong Shen) is likely ${usefulGodEl}. Favorable activities, careers, and periods associated with ${usefulGodEl} will help restore perfect harmony.`;
  } else if (strength === 'Weak') {
    // Needs support: Resource, Parallel
    const dmIndex = allElements.indexOf(dmInfo.element);
    const resourceEl = allElements[(dmIndex + 4) % 5];
    
    favorableElements = [dmInfo.element, resourceEl];
    // Unfavorable: Output, Wealth, Power
    const outputEl = allElements[(dmIndex + 1) % 5];
    const wealthEl = allElements[(dmIndex + 2) % 5];
    const powerEl = allElements[(dmIndex + 3) % 5];
    unfavorableElements = [outputEl, wealthEl, powerEl];

    // Useful God is either DM's own element or Resource. Let's pick the one that has lower presence or is most needed.
    usefulGodEl = elementCounts[resourceEl] < elementCounts[dmInfo.element] ? resourceEl : dmInfo.element;
    
    usefulGodDesc = `Since your Day Master (${dmInfo.en} ${dmInfo.element}) is Weak, your chart needs strengthening and support. Your Useful God (Yong Shen) is ${usefulGodEl}, which serves as a vital supportive pillar. Aligning yourself with the colors, careers, directions, and cycles of ${usefulGodEl} will bring you stability and wealth.`;
  } else {
    // Balanced: Find the most scarce element in the chart to complete the circle
    usefulGodEl = allElements.reduce((scarce, el) => {
      return elementCounts[el] < elementCounts[scarce] ? el : scarce;
    }, allElements[0]);
    
    favorableElements = [usefulGodEl];
    unfavorableElements = []; // None strictly unfavorable, or elements that are already too abundant
    const mostAbundant = allElements.reduce((abundant, el) => {
      return elementCounts[el] > elementCounts[abundant] ? el : abundant;
    }, allElements[0]);
    if (elementCounts[mostAbundant] > 2) {
      unfavorableElements.push(mostAbundant);
    }

    usefulGodDesc = `Your chart is beautifully Balanced! To maintain this rare equilibrium, your Useful God (Yong Shen) is ${usefulGodEl}, which is the element that is least represented in your primary chart. Surrounding yourself with ${usefulGodEl} ensures smooth energy flow across all cycles.`;
  }

  const usefulGod = {
    element: usefulGodEl,
    description: usefulGodDesc,
    favorableElements,
    unfavorableElements,
  };

  // 7. Luck Pillars
  // gender input: 'male' | 'female' -> translated to 1 (male) or 0 (female)
  const gCode = gender === 'male' ? 1 : 0;
  const luckPillars: LuckPillarDetail[] = [];

  try {
    const rawYun = bazi.getYun(gCode, solar);
    const rawDaYuns = rawYun.getDaYun();
    // Limit to first 8 DaYun cycles (80 years)
    for (let i = 0; i < Math.min(rawDaYuns.length, 8); i++) {
      const dy = rawDaYuns[i];
      const startAge = dy.getStartAge();
      const startYear = dy.getStartYear();
      const ganZhi: string = dy.getGanZhi() || '';
      const dyStem = ganZhi.charAt(0) || '?';
      const dyBranch = ganZhi.charAt(1) || '?';

      const stemMap = STEMS_MAP[dyStem] || { en: '?', element: '?', polarity: 'Yang' as const };
      const branchMap = BRANCHES_MAP[dyBranch] || { en: '?', element: '?', polarity: 'Yang' as const, animal: '?' };
      const tenGodStem = getTenGod(dmStem, dyStem);

      luckPillars.push({
        startAge,
        startYear,
        stem: dyStem,
        stemEn: stemMap.en,
        stemElement: stemMap.element,
        stemPolarity: stemMap.polarity,
        branch: dyBranch,
        branchEn: branchMap.en,
        branchElement: branchMap.element,
        branchPolarity: branchMap.polarity,
        animal: branchMap.animal,
        tenGodStem,
      });
    }
  } catch (err) {
    console.error('Error calculating Luck Pillars:', err);
  }

  // Strings
  const solarDateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${hour !== null ? String(hour).padStart(2, '0') : ''}:${minute !== null ? String(minute).padStart(2, '0') : ''}`;
  const lunarDateStr = `Year of the ${lunar.getYearShengXiao()} (${lunar.getYearInGanZhi()}), Month ${lunar.getMonthInChinese()}, Day ${lunar.getDayInChinese()}`;

  return {
    solarDateStr,
    lunarDateStr,
    gender,
    yearPillar,
    monthPillar,
    dayPillar,
    hourPillar,
    dayMaster: {
      stem: dmStem,
      en: dmInfo.en,
      pinyin: dmInfo.pinyin,
      element: dmInfo.element,
      polarity: dmInfo.polarity,
      strength,
      strengthScore,
    },
    elementCounts,
    elementPercentages,
    usefulGod,
    luckPillars,
  };
}
