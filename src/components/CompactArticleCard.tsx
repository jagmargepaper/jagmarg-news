import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import { getArticleUrl } from '@/lib/api';

export default function CompactArticleCard({ post, locale, showExcerpt = false }: { post: any, locale: string, showExcerpt?: boolean }) {
  if (!post) return null;

  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  
  // Extract Category Name for the Badge
  let badgeName = 'NEWS';
  const terms = post._embedded?.['wp:term']?.[0] || [];
  if (terms.length > 0) {
    // Try to get the first category name
    badgeName = terms[0].name;
  }

  const articleUrl = getArticleUrl(post, locale);

  return (
    <Link href={articleUrl} className="group flex flex-col gap-0">
      {/* Image Container: 16:9 Aspect Ratio for global premium grids */}
      <div className="w-full aspect-video bg-gray-100 relative overflow-hidden flex items-center justify-center mb-3">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={post.title?.rendered || "News Image"} 
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 group-hover:scale-105 transition-transform duration-700">
            <ImageIcon className="w-6 h-6 text-gray-400 mb-1" />
            <span className="text-gray-400 text-[8px] font-black uppercase tracking-widest">Jagmarg</span>
          </div>
        )}
      </div>

      <div className="flex flex-col">
        {/* Editorial Category Tag */}
        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] text-[#D32F2F] mb-1.5 block">
          {badgeName}
        </span>
        
        {/* Headline with NYT-style animated underline on hover */}
        <h3 
          className="text-[14px] md:text-[16px] font-black text-[#1A1A1A] dark:text-white leading-snug line-clamp-3 group-hover:underline decoration-[#D32F2F] decoration-2 underline-offset-2 transition-all"
          dangerouslySetInnerHTML={{ __html: post.title?.rendered || '' }}
        />
        
        {showExcerpt && post.excerpt?.rendered && (
          <div 
            className="text-gray-600 dark:text-gray-400 text-xs mt-2 line-clamp-2 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        )}
      </div>
    </Link>
  );
}
