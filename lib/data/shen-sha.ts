export interface ShenShaEntry {
  code: string;
  name: string;
  altNames: string[];
  chinese: string;
  summary: string;
  personality: string;
  howToFind: string;
}

// Shen Sha (神煞) — symbolic/auxiliary stars layered on top of the core Four Pillars
// and Ten Gods analysis. Distinct from the main structural chart, these add flavor
// and specific life themes (romance, scholarship) rather than core personality.
export const SHEN_SHA_DATA: Record<string, ShenShaEntry> = {
  'peach-blossom': {
    code: 'peach-blossom',
    name: 'Peach Blossom Star',
    altNames: ['Tao Hua', 'Flower of Romance'],
    chinese: '桃花',
    summary: 'The Peach Blossom Star (桃花, Tao Hua) — sometimes translated as the Flower of Romance — is the classic BaZi symbolic star for charm, attraction, and romantic or social magnetism. It is derived from the Day or Year Branch and appears in a specific fixed pattern across the twelve branches.',
    personality: 'People with a strong Peach Blossom placement tend to be naturally attractive, socially fluid, and drawn toward the arts, entertainment, or any people-facing role. In a supportive chart this shows up as charisma and popularity; in a chart with conflicting or clashing elements, it can point to romantic complications or a scattered social life.',
    howToFind: 'Peach Blossom is looked up from the Day Branch or Year Branch against a fixed table of four branch groups (each group of three branches shares one Peach Blossom branch). A qualified BaZi reading cross-references this against the rest of the chart before drawing conclusions — a single symbolic star is never read in isolation.',
  },
  'academic-star': {
    code: 'academic-star',
    name: 'Academic Star',
    altNames: ['Wen Chang', 'Scholar Star'],
    chinese: '文昌',
    summary: 'The Academic Star (文昌, Wen Chang) is the symbolic star most associated with intelligence, exam success, and scholarly achievement. Like Peach Blossom, it is derived from a fixed relationship to the Day Stem.',
    personality: 'A well-placed Academic Star favors study, writing, teaching, and any field built on formal qualification or intellectual reputation. It is one of the auxiliary stars most often checked by parents asking about a child\'s exam or study prospects.',
    howToFind: 'Wen Chang is looked up from the Day Stem against a fixed stem-to-branch table. As with all Shen Sha, its presence adds a thematic layer — it does not override the core Day Master and Ten Gods analysis that forms the backbone of a BaZi reading.',
  },
};

export function getShenShaByKey(key: string): ShenShaEntry | undefined {
  return SHEN_SHA_DATA[key];
}
