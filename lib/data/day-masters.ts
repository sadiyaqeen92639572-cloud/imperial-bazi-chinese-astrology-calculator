import dayMastersJson from './day-masters.json';

export interface DayMasterMeaning {
  slug: string; // jia-wood, yi-wood, etc.
  stem: string; // 甲, 乙, etc.
  name: string; // Jia Wood, Yi Wood, etc.
  pinyin?: string;
  polarity: 'Yang' | 'Yin';
  element: 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';
  summary: string;
  personality: string;
  strengths: string[];
  challenges: string[];
  bestTenGods: string;
  famousDynamics: string;
  careerPath: string;
  loveLife: string;
}

export const DAY_MASTERS_DATA = dayMastersJson as Record<string, DayMasterMeaning>;
