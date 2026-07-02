export interface GlossaryEntry {
  term: string;
  category: 'Core Concepts' | 'Advanced Systems' | 'Inputs & Math' | 'Adjoining Fields';
  definition: string;
  relevance: string;
}

export const GLOSSARY_DATA: Record<string, GlossaryEntry> = {
  'Four Pillars': {
    term: 'Four Pillars (Sì Zhù)',
    category: 'Core Concepts',
    definition: 'The fundamental four columns of a Chinese astrology birth chart: the Year Pillar, Month Pillar, Day Pillar, and Hour Pillar.',
    relevance: 'Each pillar represents different aspects of life, family lineages, and timing cycles.'
  },
  'Heavenly Stems': {
    term: 'Heavenly Stems (Tiān Gān)',
    category: 'Core Concepts',
    definition: 'A decimal cycle of 10 elements composed of the Five Elements (Wood, Fire, Earth, Metal, Water) in their Yin and Yang aspects.',
    relevance: 'These represent the outer, visible traits of a person or event, manifesting as public behaviors and tendencies.'
  },
  'Earthly Branches': {
    term: 'Earthly Branches (Dì Zhī)',
    category: 'Core Concepts',
    definition: 'A duodecimal cycle of 12 signs representing astronomical periods and animal zodiacs (Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig).',
    relevance: 'Branches contain hidden stems and represent the inner, hidden character, secret thoughts, and solid foundations of a chart.'
  },
  'Day Master': {
    term: 'Day Master (Rì Zhǔ)',
    category: 'Core Concepts',
    definition: 'The Heavenly Stem of the Day Pillar. This character is the central reference point of the entire BaZi chart.',
    relevance: 'It represents the true self, core personality, and basic elemental constitution of the individual.'
  },
  'Ten Gods': {
    term: 'Ten Gods (Shí Shén)',
    category: 'Core Concepts',
    definition: 'A set of 10 relationship archetypes calculated based on the day master\'s element and polarity compared to other stems and branches.',
    relevance: 'They describe human behaviors, relationships, career fortunes, parental ties, and financial wealth.'
  },
  'Five Elements': {
    term: 'Five Elements (Wǔ Xíng)',
    category: 'Core Concepts',
    definition: 'The five universal forces of nature: Wood (emerald), Fire (red), Earth (amber), Metal (gray), and Water (blue).',
    relevance: 'Their balance, producing cycles, and controlling cycles form the core of BaZi harmony and analysis.'
  },
  'Yin and Yang': {
    term: 'Yin and Yang',
    category: 'Core Concepts',
    definition: 'The complementary dual forces of the universe. Yang is active, hot, day, and rigid. Yin is receptive, cool, night, and flexible.',
    relevance: 'Every stem, branch, and pillar has an assigned polarity that determines how its energy behaves.'
  },
  'Luck Pillars': {
    term: 'Luck Pillars (Dà Yùn)',
    category: 'Advanced Systems',
    definition: 'Cycles of 10 years of fortune, calculated from the month pillar and determined by the polarity of the birth year and gender.',
    relevance: 'They represent the environmental shifts and external luck waves that the person will navigate through their life.'
  },
  'Hidden Stems': {
    term: 'Hidden Stems (Cáng Gān)',
    category: 'Advanced Systems',
    definition: 'Heavenly Stems that are "buried" inside Earthly Branches. Every branch has between one and three hidden stems.',
    relevance: 'They represent hidden potential, hidden assets, secret helpers, or quiet challenges in a person\'s life.'
  },
  'Clashes and Combinations': {
    term: 'Clashes and Combinations (Chōng Hé)',
    category: 'Advanced Systems',
    definition: 'Frictional or supportive alignments between branches or stems (e.g. Rabbit and Rooster clash; Rat and Ox combine).',
    relevance: 'They trigger major shifts, changes in residence or career, relationship developments, or emotional friction.'
  },
  'Useful God': {
    term: 'Useful God (Yòng Shén)',
    category: 'Advanced Systems',
    definition: 'The element that is most needed in the chart to bring the Day Master back into a balanced and healthy state.',
    relevance: 'Finding and utilizing your Useful God elements is the key to unlocking wealth, professional success, and peace.'
  },
  'Favorable Elements': {
    term: 'Favorable Elements (Xǐ Shén)',
    category: 'Advanced Systems',
    definition: 'Elements that support the Useful God or help restore balance to the Day Master.',
    relevance: 'Surrounding oneself with these elements (colors, places, careers) brings smooth luck.'
  },
  'Chinese Solar Calendar': {
    term: 'Chinese Solar Calendar (Wàn Nián Lì)',
    category: 'Inputs & Math',
    definition: 'A solar-term based calendar used in BaZi rather than the lunar calendar. The solar year begins on Lichun (around Feb 4th).',
    relevance: 'It is highly accurate and links directly to the position of the Sun relative to the Earth.'
  },
  'Solar Terms': {
    term: 'Solar Terms (Jié Qì)',
    category: 'Inputs & Math',
    definition: '24 points in the eco-calendar that match specific longitudes of the sun, determining the exact boundaries of the 12 solar months.',
    relevance: 'BaZi months start exactly on these solar terms, ensuring absolute alignment with natural seasons.'
  },
  'Feng Shui': {
    term: 'Feng Shui',
    category: 'Adjoining Fields',
    definition: 'The Chinese metaphysical system of spatial arrangement, flow of Qi, and physical environmental alignment.',
    relevance: 'While BaZi analysis reveals your time-based destiny, Feng Shui works with space to support your favorable elements.'
  },
  'Chinese Zodiac': {
    term: 'Chinese Zodiac (Shēng Xiào)',
    category: 'Adjoining Fields',
    definition: 'A 12-year animal cycle matching the Earthly Branch of the birth year.',
    relevance: 'While the public is familiar with the Chinese Zodiac year animal, BaZi provides a far deeper four-column chart.'
  }
};
