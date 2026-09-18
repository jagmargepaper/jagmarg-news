"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import AIQuickSummary from './AIQuickSummary';
import ArticleAudioPlayer from './ArticleAudioPlayer';
import ShareButtons from './ShareButtons';
import { getArticleUrl } from '@/lib/api';

export default function InfiniteArticleScroll({ 
  currentSlug, locale, categoryId, categoryParentId 
}: { 
  currentSlug: string, locale: string, categoryId?: number, categoryParentId?: number 
}) {
  const [nextArticles, setNextArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  // Endless Loop States
  const [fetchLevel, setFetchLevel] = useState<'current' | 'parent' | 'global'>('current');
  const [page, setPage] = useState(1);
  const observerTarget = useRef<HTMLDivElement>(null);

  const fetchNextArticle = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    
    try {
      const wpUrl = process.env.NEXT_PUBLIC_WP_URL || 'https://jagmarg.com';
      let endpoint = '';
      const targetPage = page + 1;
      
      // Construct endpoint based on level
      if (fetchLevel === 'current' && categoryId) {
        endpoint = `${wpUrl}/wp-json/wp/v2/posts?_embed&per_page=1&page=${targetPage}&categories=${categoryId}&exclude=${currentSlug}`;
      } else if (fetchLevel === 'parent' && categoryParentId) {
        endpoint = `${wpUrl}/wp-json/wp/v2/posts?_embed&per_page=1&page=${targetPage}&categories=${categoryParentId}&exclude=${currentSlug}`;
      } else {
        endpoint = `${wpUrl}/wp-json/wp/v2/posts?_embed&per_page=1&page=${targetPage}&exclude=${currentSlug}`;
      }

      const res = await fetch(endpoint);
      
      if (!res.ok) {
        // Run out of posts at this level
        if (fetchLevel === 'current' && categoryParentId && categoryParentId !== 0) {
          setFetchLevel('parent');
          setPage(0); // Reset page for next fetch
        } else if (fetchLevel === 'current' || fetchLevel === 'parent') {
          setFetchLevel('global');
          setPage(0); // Reset page for global
        } else {
          setHasMore(false);
        }
        setIsLoading(false);
        return;
      }
      
      const data = await res.json();
      
      if (data.length === 0) {
        if (fetchLevel === 'current' && categoryParentId && categoryParentId !== 0) {
          setFetchLevel('parent');
          setPage(0);
        } else if (fetchLevel === 'current' || fetchLevel === 'parent') {
          setFetchLevel('global');
          setPage(0);
        } else {
          setHasMore(false);
        }
      } else {
        setNextArticles(prev => {
          const existingIds = new Set(prev.map(p => p.id));
          const newUnique = data.filter((p: any) => !existingIds.has(p.id));
          return [...prev, ...newUnique];
        });
        setPage(targetPage);
      }
    } catch (error) {
      console.error('Error fetching next article:', error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          fetchNextArticle();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, isLoading, hasMore, fetchLevel, page, categoryId, categoryParentId]);

  // Observer to update URL when scrolling past articles
  useEffect(() => {
    const articleElements = document.querySelectorAll('article[data-slug]');
    
    const urlObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rawSlug = entry.target.getAttribute('data-slug');
            const newUrl = entry.target.getAttribute('data-url');
            
            if (newUrl && window.location.pathname !== newUrl) {
              window.history.pushState(null, '', newUrl);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    articleElements.forEach((el) => urlObserver.observe(el));

    return () => {
      articleElements.forEach((el) => urlObserver.unobserve(el));
    };
  }, [nextArticles, locale]);

  if (nextArticles.length === 0) {
    if (!hasMore) {
      return null;
    }
    return (
      <div ref={observerTarget} className="flex justify-center p-8">
         <Loader2 className="w-8 h-8 animate-spin text-[#D32F2F]" />
      </div>
    );
  }

  return (
    <>
      {nextArticles.map((post) => {
        const title = post.title.rendered.replace(/&[^;]+;/g, '');
        const content = post.content.rendered;
        const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
        const imageUrl = featuredMedia?.source_url;
        const author = post.author_name || post._embedded?.author?.[0]?.name || 'Jagmarg Desk';
        const date = new Date(post.date).toLocaleDateString('hi-IN', {
          day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
        });
        const category = post._embedded?.['wp:term']?.[0]?.[0];
        const articleUrl = getArticleUrl(post, locale);

        return (
          <article key={post.id} data-slug={post.slug} data-url={articleUrl} className="pt-16 pb-16 border-t-4 border-gray-200 dark:border-gray-800 transition-colors">
            {category && (
              <Link href={`/${locale}/india/${category.slug}`} className="inline-block px-3 py-1 bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-6 hover:bg-[#b71c1c] transition-colors">
                {category.name}
              </Link>
            )}

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6 transition-colors">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center font-bold text-gray-500 transition-colors">
                  {author.charAt(0)}
                </div>
                <span className="font-semibold text-gray-900 dark:text-gray-200 transition-colors">{author}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <time>{date}</time>
            </div>

            <div className="flex flex-col gap-4 mb-8 w-full max-w-3xl">
              <AIQuickSummary contentSelector={`#content-${post.id}`} locale={locale} />
              <ArticleAudioPlayer contentSelector={`#content-${post.id}`} locale={locale} />
            </div>

            {imageUrl && (
              <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden shadow-lg">
                <Image src={imageUrl} alt={title} fill className="object-cover" sizes="(max-width: 1200px) 100vw, 800px" />
              </div>
            )}

            <div 
              id={`content-${post.id}`}
              className="prose prose-lg max-w-none text-gray-800 dark:text-gray-300 transition-colors prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-a:text-[#D32F2F] prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 transition-colors">
              <ShareButtons url={articleUrl} title={title} />
            </div>
          </article>
        );
      })}
      
      <div ref={observerTarget} className="flex justify-center p-8 mt-8 border-t-4 border-gray-200 dark:border-gray-800">
        {isLoading && (
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-8 h-8 animate-spin text-[#D32F2F]" />
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-2">Loading next article...</span>
          </div>
        )}
      </div>
    </>
  );
}
