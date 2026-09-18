import React from 'react';
import CompactArticleCard from './CompactArticleCard';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { getArticleUrl } from '@/lib/api';

type Props = {
  title: string;
  posts: any[];
  locale: string;
  layout?: 'grid' | 'list' | 'mixed';
};

export default function CategorizedSection({ title, posts, locale, layout = 'grid' }: Props) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="w-full mb-12">
      {/* Section Header with Accent Line */}
      <div className="flex items-center justify-between mb-6 border-b-[1px] border-gray-200 dark:border-gray-800 pb-2">
        <h2 className="text-xl md:text-2xl font-black text-[#1A1A1A] dark:text-white uppercase tracking-wider relative pb-2">
          {title}
          <span className="absolute bottom-[-10px] left-0 w-full h-[3px] bg-[#D32F2F]"></span>
        </h2>
        <button className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#D32F2F] transition-colors">
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Grid Layout (e.g., 4 columns) */}
      {layout === 'grid' && (
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 gap-4 md:gap-6 pb-4 md:pb-0 scrollbar-hide">
          {posts.map((post) => (
            <article key={post.id} className="min-w-[280px] md:min-w-0 snap-start shrink-0">
              <CompactArticleCard post={post} locale={locale} />
            </article>
          ))}
        </div>
      )}

      {/* Mixed Layout (1 Big on left, 3 small stacked on right) */}
      {layout === 'mixed' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <article className="md:col-span-2">
             <CompactArticleCard post={posts[0]} locale={locale} showExcerpt={true} />
          </article>
          <div className="md:col-span-2 flex flex-col justify-between gap-4">
             {posts.slice(1, 4).map((post) => (
               <article key={post.id} className="grid grid-cols-3 gap-4 border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0 last:pb-0">
                 <div className="col-span-1">
                    <CompactArticleCard post={post} locale={locale} />
                 </div>
                 <div className="col-span-2 flex flex-col justify-center">
                    <Link href={getArticleUrl(post, locale)} className="group">
                      <h3 
                        className="text-sm md:text-base font-bold text-[#1A1A1A] dark:text-white leading-snug group-hover:text-[#D32F2F] line-clamp-3 group-hover:underline decoration-[#D32F2F] decoration-2 underline-offset-2 transition-all"
                        dangerouslySetInnerHTML={{ __html: post.title?.rendered || '' }}
                      />
                    </Link>
                 </div>
               </article>
             ))}
          </div>
        </div>
      )}
    </section>
  );
}
