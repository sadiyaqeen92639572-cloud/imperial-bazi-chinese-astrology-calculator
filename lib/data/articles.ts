export interface ArticleContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  sections: Array<{ heading: string; content: string }>;
  relatedSlugs: string[];
  schemaType: 'Article' | 'HowTo' | 'CollectionPage';
}

export const ARTICLES_DATA: Record<string, ArticleContent> = {
  'bazi-reading': {
    slug: 'bazi-reading',
    title: 'Free BaZi Reading and Chart Interpretation',
    metaTitle: 'Free BaZi Reading and Chart Interpretation',
    metaDesc: 'Get a free BaZi reading: Four Pillars, Day Master, Five Elements, Ten Gods, and Luck Pillars explained in plain English.',
    h1: 'BaZi Reading & Destiny Analysis',
    sections: [
      {
        heading: 'What a BaZi Reading Covers',
        content: 'A comprehensive BaZi reading decodes the energetic footprint left at the exact millisecond of your birth. This includes your core elemental balance, your Day Master, your Ten Gods distribution, your Hidden Stems, and your Luck Pillars. These components reveal your life path, financial potential, career aptitude, and health patterns.'
      },
      {
        heading: 'How to Read Your Chart: Quick Overview',
        content: 'Your BaZi chart contains eight characters arranged in four columns (Year, Month, Day, and Hour). The top row contains the Heavenly Stems (visible, public traits) and the bottom row contains the Earthly Branches (private, foundational potentials). To read your chart, locate your Day Master, determine its strength, find your Useful God, and observe your 10-year luck waves.'
      },
      {
        heading: 'Day Master and Five Elements Balance',
        content: 'The Day Master (Day Stem) represents you. The other characters support, drain, or control you. A healthy chart is one where Wood, Fire, Earth, Metal, and Water flow smoothly. Understanding your element counts is the key to understanding your psychological balance.'
      },
      {
        heading: 'Ten Gods Explained in Plain English',
        content: 'The Ten Gods are the relational mirrors of your Day Master. They depict your relations with money (Direct/Indirect Wealth), power (Direct Officer/7 Killings), creativity (Eating God/Hurting Officer), knowledge (Direct/Indirect Resource), and peers (Friend/Rob Wealth). Knowing which Gods dominate your chart helps explain your natural behaviors.'
      },
      {
        heading: 'Luck Pillars and Yearly Timing',
        content: 'Destiny is not static. Your Luck Pillars show the major 10-year cycles of your life. Combined with the yearly astronomical transitions, these pillars reveal when you should actively expand, when you should consolidate, and when you should invest in self-cultivation.'
      }
    ],
    relatedSlugs: ['how-to-read-bazi-chart', 'bazi-chart-interpretation', 'bazi-personality-analysis', 'bazi-calculator'],
    schemaType: 'Article'
  },
  'bazi-chart-interpretation': {
    slug: 'bazi-chart-interpretation',
    title: 'BaZi Chart Interpretation Guide: Pillar by Pillar',
    metaTitle: 'BaZi Chart Interpretation Guide: Pillar by Pillar',
    metaDesc: 'Dive deep into your BaZi chart structure. Understand what the Year, Month, Day, and Hour pillars represent in your life and career.',
    h1: 'BaZi Chart Interpretation',
    sections: [
      {
        heading: 'The Year Pillar: Root and Ancestors',
        content: 'The Year Pillar represents your heritage, grandparent lineage, and early childhood (ages 1 to 15). It also governs your public reputation, social circles, and how the external world perceives you upon first contact.'
      },
      {
        heading: 'The Month Pillar: Career and Parents',
        content: 'The Month Pillar is the most powerful column in terms of element weights. It represents your parents, upbringing, career environment, and young adulthood (ages 16 to 30). It determines your career capabilities and social drives.'
      },
      {
        heading: 'The Day Pillar: Spouse House and True Self',
        content: 'The Day Pillar represents you and your immediate partner. The Day Stem is you (the Day Master), and the Day Branch is your Spouse House. It governs your core adult years (ages 31 to 45), your physical body, and deep personal relationships.'
      },
      {
        heading: 'The Hour Pillar: Inner Mind and Later Life',
        content: 'The Hour Pillar represents your late life (ages 46+), your children, sub-ordinates, your secret thoughts, creative outputs, and your investment fruits. It holds the key to your subconscious mind and long-term achievements.'
      }
    ],
    relatedSlugs: ['bazi-reading', 'how-to-read-bazi-chart', 'bazi-personality-analysis', 'bazi-calculator'],
    schemaType: 'Article'
  },
  'how-to-read-bazi-chart': {
    slug: 'how-to-read-bazi-chart',
    title: 'How to Read a BaZi Chart (Step-by-Step Tutorial)',
    metaTitle: 'How to Read a BaZi Chart (Step-by-Step Tutorial)',
    metaDesc: 'A sequential, beginner-friendly tutorial on reading a Chinese astrology BaZi chart. Learn to identify stems, branches, and elements.',
    h1: 'How to Read a BaZi Chart',
    sections: [
      {
        heading: 'Step 1: Identify Your Day Master',
        content: 'Locate the Heavenly Stem at the top of the Day Pillar. This character is your central anchor (the Day Master) and represents your core essence. Read its traits and discover its native element.'
      },
      {
        heading: 'Step 2: Calculate the Five Elements Count',
        content: 'Count the occurrences of Wood, Fire, Earth, Metal, and Water across your four stems and four branches. Note which element is missing or overwhelmingly abundant.'
      },
      {
        heading: 'Step 3: Determine Your Chart Strength',
        content: 'Check if your Day Master is born in season (if the Month Branch is the same element or produces your Day Master). Combine this with other supportive elements to see if your chart is Strong, Weak, or Balanced.'
      },
      {
        heading: 'Step 4: Pinpoint Your Useful God',
        content: 'Choose the balancing element (Useful God) that supports your Weak Day Master or drains/controls your Strong Day Master. This element is your guide to luck.'
      }
    ],
    relatedSlugs: ['bazi-reading', 'bazi-chart-interpretation', 'bazi-calculator'],
    schemaType: 'HowTo'
  },
  'bazi-personality-analysis': {
    slug: 'bazi-personality-analysis',
    title: 'BaZi Personality Analysis: Your Astrological DNA',
    metaTitle: 'BaZi Personality Analysis: Your Astrological DNA',
    metaDesc: 'Discover how BaZi decodes your personality, psychological traits, strengths, and shadow qualities through the lens of Chinese astrology.',
    h1: 'BaZi Personality Analysis',
    sections: [
      {
        heading: 'Inherent Personality vs. Environmental Shifts',
        content: 'Your birth chart contains your static astrological DNA. It shows who you are at your core. While external years bring different energies, your primary reactions remain anchored in your Day Master.'
      },
      {
        heading: 'The Role of Yin and Yang Polarities',
        content: 'Yang personalities are active, external, highly expressive, and direct. Yin personalities are internal, reflective, deeply strategic, diplomatic, and value comfort and security. Your ratio of Yin to Yang characters defines your core temperament.'
      }
    ],
    relatedSlugs: ['bazi-reading', 'bazi-day-master-calculator', 'bazi-calculator'],
    schemaType: 'Article'
  },
  'bazi-compatibility-guide': {
    slug: 'bazi-compatibility-guide',
    title: 'BaZi Compatibility Guide: Marriage, Relationships, and Birth Charts',
    metaTitle: 'BaZi Compatibility Guide: Marriage, Relationships, and Birth Charts',
    metaDesc: 'Understand BaZi compatibility for marriage and relationships using Day Master elements, Earthly Branch combinations, and clashes.',
    h1: 'BaZi Compatibility Guide',
    sections: [
      {
        heading: 'How BaZi Compatibility Works',
        content: 'BaZi compatibility is not about choosing identical elements. True harmony comes from balance. A person with an excess of Fire in their chart is naturally compatible with a person who has plenty of Water or Earth to cool and utilize that heat.'
      },
      {
        heading: 'Day Master Element Interactions',
        content: 'Different Day Masters interact in specific cycles. Wood individuals naturally support Fire partners, while Earth partners find stability with Metal partners. Discover the alchemical reactions between the ten stems.'
      },
      {
        heading: 'Earthly Branch Clashes and Combinations',
        content: 'The Spouse House is located in the Day Earthly Branch. If your partner\'s Day Branch combines with yours (e.g., Rat and Ox), the attraction is strong and enduring. If they clash (e.g., Tiger and Monkey), it indicates potential adjustments and growth friction.'
      }
    ],
    relatedSlugs: ['bazi-compatibility-calculator', 'bazi-vs-chinese-zodiac', 'bazi-calculator'],
    schemaType: 'Article'
  },
  'bazi-vs-chinese-zodiac': {
    slug: 'bazi-vs-chinese-zodiac',
    title: 'BaZi vs. Chinese Zodiac: Why Your Birth Chart Matters More',
    metaTitle: 'BaZi vs. Chinese Zodiac: Why Your Birth Chart Matters More',
    metaDesc: 'Discover why a comprehensive BaZi reading is far more accurate than simple Chinese Zodiac animal readings. Explore the 8 characters.',
    h1: 'BaZi vs. Chinese Zodiac',
    sections: [
      {
        heading: 'The 1-Character Limit of the Chinese Zodiac',
        content: 'The popular Chinese Zodiac only evaluates the Earthly Branch of your birth year. It assumes everyone born in the same year shares identical fortunes. This represents only a fraction of your astrological truth.'
      },
      {
        heading: 'BaZi: The Multi-Dimensional Four Pillars',
        content: 'BaZi integrates four columns of time (Year, Month, Day, and Hour), producing eight characters. It evaluates your Day Master, monthly seasons, and 10-year luck shifts, offering a personalized blueprint of exceptional depth.'
      }
    ],
    relatedSlugs: ['bazi-vs-feng-shui', 'bazi-personality-analysis', 'bazi-reading', 'bazi-calculator'],
    schemaType: 'Article'
  },
  'bazi-vs-feng-shui': {
    slug: 'bazi-vs-feng-shui',
    title: 'BaZi vs. Feng Shui: Time vs. Space in Metaphysics',
    metaTitle: 'BaZi vs. Feng Shui: Time vs. Space in Metaphysics',
    metaDesc: 'Compare BaZi (destiny and timing) with Feng Shui (spatial arrangement and earth luck). See how they work together for success.',
    h1: 'BaZi vs. Feng Shui',
    sections: [
      {
        heading: 'BaZi: Your Time Destiny',
        content: 'BaZi represents your Heaven Luck (Tien). It is the cosmic imprint of timing at birth. It shows your character, cycles, and potential directions. You cannot change your birth chart, but you can navigate it with wisdom.'
      },
      {
        heading: 'Feng Shui: Your Space Environment',
        content: 'Feng Shui represents your Earth Luck (Di). It is the energy flow of your physical environment. By arranging your home, office, and bed to match your favorable BaZi elements, you can support your health and career.'
      }
    ],
    relatedSlugs: ['bazi-vs-chinese-zodiac', 'bazi-yearly-forecast', 'bazi-reading', 'bazi-calculator'],
    schemaType: 'Article'
  },
  'bazi-yearly-forecast': {
    slug: 'bazi-yearly-forecast',
    title: 'BaZi Yearly Forecast: Navigating the Solar Year',
    metaTitle: 'BaZi Yearly Forecast: Navigating the Solar Year',
    metaDesc: 'Understand the current solar year astrological trends. Learn how the cosmic transitions affect your personal Day Master and career.',
    h1: 'BaZi Yearly Forecast',
    sections: [
      {
        heading: 'The Yearly Stem and Branch Transition',
        content: 'Every year brings a unique duo of a Heavenly Stem and an Earthly Branch. This energetic frequency interacts with the four pillars in your birth chart, causing certain elements to strengthen or trigger clashes.'
      },
      {
        heading: 'Forecasting for Your Day Master',
        content: 'How the yearly energy affects you depends on your Day Master. A Wood Year brings support to a weak Wood Day Master but might trigger competition or financial drain for a strong Wood Day Master. Identify your cycles.'
      }
    ],
    relatedSlugs: ['bazi-yearly-forecast-calculator', 'useful-god-explained', 'bazi-calculator'],
    schemaType: 'Article'
  }
};
