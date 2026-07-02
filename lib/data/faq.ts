export interface FAQEntry {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQEntry[] = [
  {
    question: "What is a BaZi chart and what does it reveal?",
    answer: "A BaZi (Four Pillars of Destiny) chart is a sophisticated Chinese astrological mapping system calculated using your birth date, time, and location. It translates standard solar time into four distinct columns representing the Year, Month, Day, and Hour of birth. Each column features a Heavenly Stem and an Earthly Branch, giving eight characters in total. A BaZi reading reveals your true personality, innate strengths and challenges, career potentials, relationship dynamics, and your 10-year major luck cycles (Luck Pillars)."
  },
  {
    question: "What is the difference between BaZi and the general Chinese Zodiac?",
    answer: "The general Chinese Zodiac focuses solely on the animal sign of your birth year (such as the Year of the Dragon). While fun and popular, this only covers 12.5% of your actual astrological layout. BaZi uses 'Four Pillars' (Year, Month, Day, and Hour). It looks at all eight characters, particularly your Day Master (the day stem), providing a highly customized, multi-dimensional profile of your life instead of generic year-based readings."
  },
  {
    question: "Why is the Day Master so important in BaZi?",
    answer: "The Day Master is the Heavenly Stem located in the Day Pillar of your birth chart. In BaZi, the Day Master is considered the 'Anchor' or the 'True Self'. All other stems, branches, elements, and the Ten Gods in your chart are calculated and analyzed in direct relation to your Day Master. Its strength, element, and polarity determine your favorable elements, compatibility, and life cycles."
  },
  {
    question: "What are the '10 Gods' in a BaZi chart?",
    answer: "The 10 Gods (Shi Shen) represent ten distinct psychological profiles and relational archetypes in your life. They are determined by comparing the elements of other characters in your chart to your Day Master. They include Parallel, Rob Wealth, Eating God, Hurting Officer, Direct Wealth, Indirect Wealth, Direct Officer, 7 Killings, Direct Resource, and Indirect Resource. They explain how you handle power, money, parents, self-expression, and competition."
  },
  {
    question: "How do I find my 'Useful God' (Yong Shen)?",
    answer: "Your Useful God (Yong Shen) is the element that is most needed in your chart to restore balance. If your Day Master is too strong, the Useful God will be an element that drains or controls it (such as Output, Wealth, or Power). If your Day Master is weak, your Useful God will be an element that supports it (such as Resource or Parallel). Aligning your actions, colors, career choice, and directions with your Useful God helps you unlock smooth fortune."
  },
  {
    question: "Can I calculate my BaZi chart if I don't know my exact birth time?",
    answer: "Yes! While having an accurate birth hour is necessary to calculate the Hour Pillar (which represents your late life, career fruits, children, and deep inner thoughts), you can still calculate the first three pillars (Year, Month, and Day). The Day Master and the core elements count remain highly accurate and informative even without the birth hour."
  },
  {
    question: "What is Local Solar Time and why does birthplace matter?",
    answer: "Standard clock time is an administrative zone designed for societal convenience. However, natural solar terms depend on the precise position of the Sun. To calculate your accurate Hour Pillar, your standard clock birth time must be adjusted into Local Solar Time based on the longitude of your birth city. Birthplace latitude and longitude coordinates ensure we correct standard zones to reflect true solar positions."
  }
];
