'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Flame, ImageIcon } from 'lucide-react';
import { fetchPostsByCategory, getArticleUrl } from '@/lib/api';
import CompactArticleCard from './CompactArticleCard';

// Inline Micro Card for Lists (Thumbnail on left, Text on right)
function MicroArticleCard({ post, locale, small = false }: { post: any, locale: string, small?: boolean }) {
  if (!post) return null;
  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const articleUrl = getArticleUrl(post, locale);
  
  return (
    <Link href={articleUrl} className="group flex gap-3 sm:gap-4 items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <div className={`${small ? 'w-[80px]' : 'w-[100px] sm:w-[120px]'} aspect-[4/3] bg-gray-100 relative overflow-hidden shrink-0`}>
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={post.title?.rendered || ''} 
            fill
            sizes={small ? "80px" : "120px"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ImageIcon className="w-5 h-5 text-gray-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className={`font-bold text-[#1A1A1A] leading-snug line-clamp-3 group-hover:text-[#D32F2F] transition-colors ${small ? 'text-xs' : 'text-[15px]'}`}
            dangerouslySetInnerHTML={{ __html: post.title?.rendered || '' }} />
      </div>
    </Link>
  );
}

export default function CategoryNewsBlock({ 
  categoryId, 
  categoryName, 
  categorySlug,
  layout = 'FullWidth-A', 
  locale = 'hi',
  showTrendingBadge = false
}: { 
  categoryId: number, 
  categoryName: string, 
  categorySlug?: string,
  layout?: 'FullWidth-A' | 'FullWidth-B',
  locale?: string,
  showTrendingBadge?: boolean
}) {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasInView, setHasInView] = useState(false);
  const blockRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '400px' }
    );
    if (blockRef.current) observer.observe(blockRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasInView) return;
    
    async function load() {
      try {
        const data = await fetchPostsByCategory(categoryId, 9, 1);
        setPosts(data || []);
      } catch (err) {
        console.error('Failed to load category block', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [categoryId, hasInView]);

  if (!hasInView || loading) {
    return (
      <div ref={blockRef} className="w-full mb-10 pb-8 border-b-2 border-gray-100 last:border-0">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-6 sm:h-8 bg-gray-200"></div>
          <div className="h-8 w-48 bg-gray-200 rounded"></div>
        </div>
        <div className="w-full h-[400px] bg-gray-50 animate-pulse border border-gray-100" />
      </div>
    );
  }

  if (posts.length === 0) return null;

  const viewAllLink = categorySlug ? `/${locale}/india/${categorySlug}` : `/${locale}`;

  return (
    <div ref={blockRef} className={`w-full bg-white dark:bg-[#111111] rounded-sm border-t-4 border-[#1A1A1A] dark:border-gray-700 shadow-sm overflow-hidden mb-12 flex flex-col transition-colors`}>
      
      {/* Category Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-[#FAFAFA] dark:bg-[#1A1A1A] transition-colors">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] dark:text-white tracking-tight uppercase transition-colors">
            {categoryName}
          </h2>
          <span className="text-xs font-bold text-gray-400 mt-1 sm:mt-2">({posts.length}+)</span>
        </div>
        
        <Link href={viewAllLink} className="hidden sm:flex items-center gap-2 text-[#D32F2F] font-bold text-sm tracking-widest uppercase transition-transform group-hover:translate-x-1">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* FULL WIDTH A: Big Image Left (50%), 2-col List Right (50%) with 8 items */}
      {layout === 'FullWidth-A' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Main Big Feature (Left) */}
          <div className="relative">
             {showTrendingBadge && (
                <div className="absolute top-2 left-2 z-20 bg-black text-white text-[10px] font-black tracking-widest uppercase px-2 py-1 flex items-center gap-1 shadow-md">
                   <Flame className="w-3 h-3 text-[#FF3333] animate-pulse" /> Trending
                </div>
             )}
             <CompactArticleCard post={posts[0]} locale={locale} showExcerpt={true} />
          </div>
          {/* Side List Grid (Right) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
             {posts.slice(1, 9).map((post) => (
                <MicroArticleCard key={post.id} post={post} locale={locale} />
             ))}
          </div>
        </div>
      )}

      {/* FULL WIDTH B: Big Image Right, List Left */}
      {layout === 'FullWidth-B' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 order-2 lg:order-1">
             {posts.slice(1, 9).map((post) => (
                <MicroArticleCard key={post.id} post={post} locale={locale} />
             ))}
          </div>
          <div className="relative order-1 lg:order-2">
             <CompactArticleCard post={posts[0]} locale={locale} showExcerpt={true} />
          </div>
        </div>
      )}

    </div>
  );
}
