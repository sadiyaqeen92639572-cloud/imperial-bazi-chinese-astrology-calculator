export interface ElementDetail {
  name: string;
  chinese: string;
  color: string;
  borderColor: string;
  bgLight: string;
  traits: string[];
  generating: string; // What it produces
  controlling: string; // What it controls
  imbalanceStrong: string;
  imbalanceWeak: string;
}

export const FIVE_ELEMENTS_DATA: Record<string, ElementDetail> = {
  'Wood': {
    name: 'Wood',
    chinese: '木',
    color: '#10B981', // emerald
    borderColor: '#059669',
    bgLight: '#ECFDF5',
    traits: ['Growth', 'Kindness', 'Ambition', 'Stubbornness', 'Idealism'],
    generating: 'Wood produces Fire by acting as fuel.',
    controlling: 'Wood controls Earth by planting roots and draining its nutrients.',
    imbalanceStrong: 'An excess of Wood in your chart can make you extremely stubborn, rigid, and resistant to criticism. You may experience stress or anger easily.',
    imbalanceWeak: 'A deficiency of Wood can lead to a lack of ambition, difficulty making long-term decisions, or low self-confidence.'
  },
  'Fire': {
    name: 'Fire',
    chinese: '火',
    color: '#EF4444', // red
    borderColor: '#DC2626',
    bgLight: '#FEF2F2',
    traits: ['Passion', 'Warmth', 'Expressiveness', 'Impatience', 'Volatility'],
    generating: 'Fire produces Earth by burning down to ashes.',
    controlling: 'Fire controls Metal by melting it into liquid.',
    imbalanceStrong: 'An excess of Fire can make you highly impatient, quick-tempered, and prone to rapid emotional burnout or restlessness.',
    imbalanceWeak: 'A lack of Fire can lead to low enthusiasm, feeling emotionally cold or detached, and having low stamina or joy in daily life.'
  },
  'Earth': {
    name: 'Earth',
    chinese: '土',
    color: '#F59E0B', // amber
    borderColor: '#D97706',
    bgLight: '#FEF3C7',
    traits: ['Stability', 'Trust', 'Nurturing', 'Worry', 'Conservatism'],
    generating: 'Earth produces Metal by consolidating minerals.',
    controlling: 'Earth controls Water by absorbing it or acting as a solid dam.',
    imbalanceStrong: 'Too much Earth can cause excessive stagnation, stubbornness, procrastination, and a massive resistance to any form of change.',
    imbalanceWeak: 'A deficiency of Earth can make you feel ungrounded, anxious, easily scattered, and struggling to complete long-term projects.'
  },
  'Metal': {
    name: 'Metal',
    chinese: '金',
    color: '#6B7280', // gray
    borderColor: '#4B5563',
    bgLight: '#F3F4F6',
    traits: ['Justice', 'Precision', 'Decisiveness', 'Coldness', 'Rigidity'],
    generating: 'Metal produces Water by condensing water droplets.',
    controlling: 'Metal controls Wood by chopping trees or pruning branches.',
    imbalanceStrong: 'An excess of Metal can make you overly critical, sharp-tongued, perfectionistic, and emotionally cold or distant.',
    imbalanceWeak: 'A deficiency of Metal can make you indecisive, overly sensitive, or struggling to maintain boundaries and hold discipline.'
  },
  'Water': {
    name: 'Water',
    chinese: '水',
    color: '#3B82F6', // blue
    borderColor: '#2563EB',
    bgLight: '#EFF6FF',
    traits: ['Intelligence', 'Wisdom', 'Adaptability', 'Anxiety', 'Mystery'],
    generating: 'Water produces Wood by irrigating tree roots.',
    controlling: 'Water controls Fire by extinguishing flames.',
    imbalanceStrong: 'An excess of Water can lead to high emotional volatility, deep-seated anxieties, restlessness, and an unpredictable personality.',
    imbalanceWeak: 'A lack of Water can make you struggle with rapid adaptation, lack intuitive depth, or struggle to think strategically in complex scenarios.'
  }
};
export const GENERATING_CYCLE = [
  { parent: 'Wood', child: 'Fire', action: 'produces' },
  { parent: 'Fire', child: 'Earth', action: 'produces' },
  { parent: 'Earth', child: 'Metal', action: 'produces' },
  { parent: 'Metal', child: 'Water', action: 'produces' },
  { parent: 'Water', child: 'Wood', action: 'produces' },
];

export const CONTROLLING_CYCLE = [
  { attacker: 'Wood', defender: 'Earth', action: 'controls' },
  { attacker: 'Earth', defender: 'Water', action: 'controls' },
  { attacker: 'Water', defender: 'Fire', action: 'controls' },
  { attacker: 'Fire', defender: 'Metal', action: 'controls' },
  { attacker: 'Metal', defender: 'Wood', action: 'controls' },
];
