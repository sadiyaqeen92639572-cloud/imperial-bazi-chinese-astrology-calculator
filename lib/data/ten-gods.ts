export interface TenGodExplanation {
  code: string;
  name: string;
  chinese: string;
  type: 'Self' | 'Output' | 'Wealth' | 'Power' | 'Resource';
  summary: string;
  personality: string;
  career: string;
  relationships: string;
}

export const TEN_GODS_DATA: Record<string, TenGodExplanation> = {
  'F': {
    code: 'F',
    name: 'Friend (Companion)',
    chinese: '比肩',
    type: 'Self',
    summary: 'Represents the identical element and polarity as the Day Master. It stands for self-confidence, independence, peers, and self-reliance.',
    personality: 'Strong self-esteem, independent, determined, and stubborn. Individuals with strong Friend energy rely on their own hard work, stand firmly on their feet, and are very loyal to friends, but can be highly defensive or ego-centric.',
    career: 'Excellent in solo professions, engineering, entrepreneurship, or competitive fields. They work best when they have full autonomy over their schedule and output.',
    relationships: 'They treat partners as equals, valuing mutual respect and autonomy. However, their stubbornness can lead to quiet standoffs.'
  },
  'RW': {
    code: 'RW',
    name: 'Rob Wealth',
    chinese: '劫财',
    type: 'Self',
    summary: 'Represents the same element as the Day Master but with opposite polarity. It stands for charisma, social agility, competitive drive, and spending habits.',
    personality: 'Highly charismatic, outgoing, and socially adaptable. They are naturally competitive and love to stand out, but can be financially impulsive or struggle with deep internal insecurity.',
    career: 'Excels in sales, public relations, performing arts, marketing, and network building where they can leverage their immense social charms.',
    relationships: 'Passionate and highly communicative. They draw partners easily but must watch for competitiveness or control issues in a long-term partnership.'
  },
  'EG': {
    code: 'EG',
    name: 'Eating God',
    chinese: '食神',
    type: 'Output',
    summary: 'Represents the element produced by the Day Master with the same polarity. It represents elegant self-expression, refined taste, intelligence, and a peaceful life.',
    personality: 'Gentle, artistic, intellectual, and appreciative of comfort, food, and fine arts. They are deep thinkers who express themselves elegantly and prefer harmony over conflict.',
    career: 'Highly successful in creative arts, gourmet cooking, writing, academic research, design, and fields where high quality and depth are prized.',
    relationships: 'Romantic and caring. They seek a soulful connection, placing great value on mutual intellectual and emotional compatibility.'
  },
  'HO': {
    code: 'HO',
    name: 'Hurting Officer',
    chinese: '伤官',
    type: 'Output',
    summary: 'Represents the element produced by the Day Master with opposite polarity. It represents high-octane talent, performance, rebellion against authority, and razor-sharp wit.',
    personality: 'Extremely clever, quick-witted, expressive, and highly competitive. They love the spotlight and possess stellar performing talents, but can be rebellious, critical of authority, and blunt.',
    career: 'Excels in entertainment, litigation law, media, public speaking, creative innovation, and fields where challenging the status quo is highly rewarded.',
    relationships: 'Passionate, demanding, and highly expressive. They need partners who can stimulate them intellectually and appreciate their brilliance without feeling threatened.'
  },
  'IW': {
    code: 'IW',
    name: 'Indirect Wealth',
    chinese: '偏财',
    type: 'Wealth',
    summary: 'Represents the element controlled by the Day Master with the same polarity. It stands for entrepreneurial skill, quick financial gains, risk-taking, and grand vision.',
    personality: 'Adventurous, generous, forward-thinking, and highly opportunistic. They have a brilliant nose for money and business, preferring large strategic investments over daily routine.',
    career: 'Perfect for venture capital, business start-ups, sales, real estate trading, or freelance contracts where they can leverage market shifts.',
    relationships: 'Very generous and exciting partners. However, they may struggle with daily routine or commitment, always looking for the next exciting peak.'
  },
  'DW': {
    code: 'DW',
    name: 'Direct Wealth',
    chinese: '正财',
    type: 'Wealth',
    summary: 'Represents the element controlled by the Day Master with opposite polarity. It stands for steady income, hard work, administrative precision, and physical reality.',
    personality: 'Practical, disciplined, honest, and highly realistic. They believe in earning their living through steady, diligent effort and possess excellent money management skills.',
    career: 'Superb in accounting, banking, database administration, human resources, civil service, or long-term operational management.',
    relationships: 'Extremely loyal, steady, and reliable. They express love by providing physical security, financial stability, and maintaining a comfortable home.'
  },
  '7K': {
    code: '7K',
    name: '7 Killings (Indirect Officer)',
    chinese: '七杀',
    type: 'Power',
    summary: 'Represents the element that controls the Day Master with the same polarity. It stands for raw authority, leadership under stress, resilience, and tactical focus.',
    personality: 'Courageous, highly disciplined, intense, and tactical. They thrive under pressure and can lead teams in extreme crises, but can be highly suspicious, controlling, or aggressive.',
    career: 'Excels in military leadership, surgical medicine, police/law enforcement, crisis management, or competitive high-stakes trading.',
    relationships: 'Intense and deeply protective. They take relationships very seriously but must learn to turn off their tactical defense shield at home.'
  },
  'DO': {
    code: 'DO',
    name: 'Direct Officer',
    chinese: '正官',
    type: 'Power',
    summary: 'Represents the element that controls the Day Master with opposite polarity. It stands for traditional authority, status, discipline, honor, and administrative order.',
    personality: 'Law-abiding, honorable, highly organized, and respectful of rules and tradition. They possess a strong sense of duty, seek high social status, and respect social protocols.',
    career: 'Ideal for political office, corporate executive suites, public institutions, legal judiciary, or traditional administrative structures.',
    relationships: 'Traditional, responsible, and stable. They value public reputation and strive to build a respectable, orderly family life.'
  },
  'IR': {
    code: 'IR',
    name: 'Indirect Resource',
    chinese: '偏印',
    type: 'Resource',
    summary: 'Represents the element that produces the Day Master with the same polarity. It stands for unconventional wisdom, sharp intuition, mystery, and occult/metaphysical interests.',
    personality: 'Introverted, highly intuitive, analytical, and mysterious. They are drawn to hidden truths, occult studies, astrology, or complex sciences, but can be highly suspicious or emotionally detached.',
    career: 'Superb in research, intelligence analysis, metaphysics, occultism, programming, psychology, or niche artistic design.',
    relationships: 'Highly observant and protective of their inner world. They require partners who respect their high need for privacy, silence, and intellectual pursuits.'
  },
  'DR': {
    code: 'DR',
    name: 'Direct Resource',
    chinese: '正印',
    type: 'Resource',
    summary: 'Represents the element that produces the Day Master with opposite polarity. It stands for traditional knowledge, academic degrees, motherly care, and protective support.',
    personality: 'Kind, scholarly, compassionate, and highly academic. They value traditional education, history, culture, and hold a nurturing, protective attitude toward society.',
    career: 'Excellent in academia, lecturing, museum archiving, counseling, healthcare, research, or historical conservation.',
    relationships: 'Nurturing, kind, and deeply supportive. They seek comfortable, peaceful relationships where they can care for their partner and receive gentle affection.'
  }
};
