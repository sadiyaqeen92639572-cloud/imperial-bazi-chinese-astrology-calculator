'use client';

import React from 'react';
import { ARTICLES_DATA } from '@/lib/data/articles';
import { getArticleSchema, getHowToSchema } from '@/lib/seo';
import RelatedPages from './RelatedPages';
import { BookOpen } from 'lucide-react';

interface ArticleViewProps {
  slug: string;
}

export default function ArticleView({ slug }: ArticleViewProps) {
  const article = ARTICLES_DATA[slug];

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center text-slate-400">
        Article not found.
      </div>
    );
  }

  // Schema generation
  const appUrl = 'https://imperialbazi.com';
  const url = `${appUrl}/${slug}/`;
  const schema = article.schemaType === 'HowTo'
    ? getHowToSchema(
        article.title,
        article.metaDesc,
        url,
        article.sections.map(s => ({ name: s.heading, text: s.content }))
      )
    : getArticleSchema(article.title, article.metaDesc, url);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id={`article-${slug}`}>
        {/* Header */}
        <div className="space-y-4 border-b border-slate-900 pb-8">
          <div className="inline-flex items-center space-x-1 bg-amber-500/10 text-amber-500 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="h-3 w-3" />
            <span>Astrology Library</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-slate-100 tracking-tight font-medium">
            {article.h1}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl">
            {article.metaDesc}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-slate-300 leading-relaxed text-sm sm:text-base" id="article-body">
          {article.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-serif text-slate-100 font-medium tracking-wide">
                {idx + 1}. {section.heading}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Internal Linking */}
        <div className="pt-6 border-t border-slate-900">
          <RelatedPages currentPath={`/${slug}/`} />
        </div>
      </article>
    </>
  );
}
