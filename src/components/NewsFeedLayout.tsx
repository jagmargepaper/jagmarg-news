'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { fetchPosts, fetchPostsByCategory, fetchPostsByTag, fetchCategories, fetchCategoriesBySlugs } from '@/lib/api';
import SidebarWidget from '@/components/SidebarWidget';
import CompactArticleCard from './CompactArticleCard';
import CategoryNewsBlock from './CategoryNewsBlock';

export default function NewsFeedLayout({ 
  initialPosts, categoryId, tagId, feedTitle = "Latest News", locale = "hi", categoryParentId 
}: { 
  initialPosts: any[], categoryId?: number, tagId?: number, feedTitle?: string, locale?: string, categoryParentId?: number 
}) {
  // Infinite Scroll States
  const [articles, setArticles] = useState(initialPosts || []);
  
  // Track what we are currently fetching (Current -> Parent -> Global)
  const [fetchLevel, setFetchLevel] = useState<'current' | 'parent' | 'global'>('current');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  // Category States
  const [subCategories, setSubCategories] = useState<any[]>([]);
  const [siblingCategories, setSiblingCategories] = useState<any[]>([]);

  useEffect(() => {
    async function loadCategoryBlocks() {
      try {
        let cats: any[] = [];
        let siblings: any[] = [];

        if (!categoryId) {
          // HOMEPAGE: Fetch curated categories
          const curatedSlugs = [
            'national', 'politics', 'crime', 'business', 'khel', 'entertainment', 
            'lifestyle', 'jagamarga-khasa', 'rajasthan', 'delhi', 'uttar-pradesh'
          ];
          cats = await fetchCategoriesBySlugs(curatedSlugs);
          const orderedCats: any[] = [];
          curatedSlugs.forEach(slug => {
            const match = cats.find((c: any) => c.slug === slug);
            if (match) orderedCats.push(match);
          });
          cats = orderedCats;
        } else {
          // STATE PAGE: Fetch child categories (Districts)
          cats = await fetchCategories(categoryId, 30);
          
          // DISTRICT PAGE: If no children, fetch siblings
          if (cats.length === 0 && categoryParentId && categoryParentId !== 0) {
            siblings = await fetchCategories(categoryParentId, 30);
            siblings = siblings.filter((c: any) => c.id !== categoryId && c.count > 0);
          }
        }

        if (cats && cats.length > 0) {
          const validCats = cats.filter((c: any) => c.slug !== 'uncategorized' && c.count >= 1);
          setSubCategories(validCats);
        }
        
        if (siblings.length > 0) {
          setSiblingCategories(siblings);
        }

      } catch (e) {
        console.error("Failed to fetch category blocks", e);
      }
    }
    loadCategoryBlocks();
  }, [categoryId, categoryParentId]);

  const loadMorePosts = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    try {
      const nextPage = page + 1;
      let newPosts = [];
      
      // Level 1: Current Category
      if (fetchLevel === 'current') {
        if (categoryId) newPosts = await fetchPostsByCategory(categoryId, 24, nextPage);
        else if (tagId) newPosts = await fetchPostsByTag(tagId, 24, nextPage);
        else newPosts = await fetchPosts(24, nextPage);
      } 
      // Level 2: Parent State Fallback
      else if (fetchLevel === 'parent') {
        newPosts = await fetchPostsByCategory(categoryParentId!, 24, nextPage);
      } 
      // Level 3: Global Fallback
      else {
        newPosts = await fetchPosts(24, nextPage);
      }
      
      if (newPosts && newPosts.length > 0) {
        setArticles(prev => {
          // Filter duplicates just in case
          const existingIds = new Set(prev.map((p: any) => p.id));
          const uniquePosts = newPosts.filter((p: any) => !existingIds.has(p.id));
          return [...prev, ...uniquePosts];
        });
        setPage(nextPage);
      } else {
        // We ran out of posts for the current level! Switch to the next logical level.
        if (fetchLevel === 'current' && categoryParentId && categoryParentId !== 0) {
          setFetchLevel('parent');
          setPage(0); // Next call will fetch page 1 of parent
        } else if (fetchLevel === 'current' || fetchLevel === 'parent') {
          setFetchLevel('global');
          setPage(0);
        } else {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error('Failed to fetch more posts:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, isLoading, hasMore, categoryId, tagId, fetchLevel, categoryParentId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          loadMorePosts();
        }
      },
      { threshold: 0.1, rootMargin: '1500px' }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [isLoading, hasMore, loadMorePosts]);

  // Determine current feed header based on fallback level
  let currentFeedTitle = feedTitle;
  if (fetchLevel === 'parent') currentFeedTitle = "More Top News from State";
  if (fetchLevel === 'global') currentFeedTitle = "National & Trending";

  return (
    <section className="w-full bg-[#FAFAFA] dark:bg-[#0A0A0A] py-12 border-t border-gray-200/50 dark:border-gray-800 transition-colors">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* SIBLING DISTRICTS EXPLORE WIDGET */}
        {siblingCategories.length > 0 && (
          <div className="w-full mb-12 bg-white dark:bg-[#111111] p-6 border border-gray-200 dark:border-gray-800 shadow-sm rounded-sm">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Explore More Districts</h3>
              <ArrowRight className="w-5 h-5 text-[#D32F2F]" />
            </div>
            <div className="flex flex-wrap gap-3">
              {siblingCategories.map(cat => (
                <Link 
                  key={cat.id} 
                  href={`/${locale}/india/${cat.slug}`}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#D32F2F] hover:text-white dark:hover:bg-[#D32F2F] text-gray-800 dark:text-gray-200 text-sm font-bold uppercase transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 1. CATEGORY BLOCKS (Top section - FULL 12 COLUMNS) */}
        {subCategories.length > 0 && (
          <div className="w-full flex flex-col mb-12">
            
            {subCategories.map((cat, index) => {
              const layoutType = index % 2 === 0 ? 'FullWidth-A' : 'FullWidth-B';
              const showAdAfter = (index + 1) % 2 === 0 && index !== subCategories.length - 1;

              return (
                <React.Fragment key={`catblock-fw-${cat.id}`}>
                  <CategoryNewsBlock 
                    categoryId={cat.id} 
                    categoryName={cat.name} 
                    categorySlug={cat.slug}
                    layout={layoutType} 
                    locale={locale} 
                    showTrendingBadge={index === 0}
                  />
                  {showAdAfter && (
                    <div className="w-full h-[120px] bg-gray-100 dark:bg-[#1A1A1A] flex flex-col items-center justify-center border border-gray-200 dark:border-gray-800 relative overflow-hidden mb-10">
                      <span className="relative z-10 text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1">Advertisement</span>
                      <span className="relative z-10 text-xs font-black tracking-widest text-gray-300 dark:text-gray-600">728 x 90</span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}

            <div className="w-full h-px bg-gray-300 dark:bg-gray-800 mt-12 mb-2" />
          </div>
        )}

        {/* 2. MIXED INFINITE FEED + RIGHT SIDEBAR (Bottom section) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Feed (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-6 mt-4">
              <div className="w-1.5 h-6 bg-black dark:bg-[#D32F2F]"></div>
              <h2 className="text-2xl font-black text-[#1A1A1A] dark:text-white tracking-tight uppercase">
                {currentFeedTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {articles.map((news: any, index: number) => {
                const showInlineAd = (index + 1) % 6 === 0;
                return (
                  <React.Fragment key={`news-${news.id}-${index}`}>
                    <CompactArticleCard post={news} locale={locale} showExcerpt={false} />
                    {showInlineAd && (
                      <div className="col-span-1 md:col-span-2 w-full h-[120px] bg-gray-100 dark:bg-[#1A1A1A] flex flex-col items-center justify-center border border-gray-200 dark:border-gray-800 relative overflow-hidden my-2">
                        <span className="relative z-10 text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1">Advertisement</span>
                        <span className="relative z-10 text-xs font-black tracking-widest text-gray-300 dark:text-gray-600">728 x 90</span>
                      </div>
                    )}
                  </React.Fragment>
                )
              })}
            </div>
            
            <div ref={loaderRef} className="w-full py-12 flex justify-center items-center">
              {isLoading && (
                <div className="flex items-center gap-3 text-[#1A1A1A] dark:text-white font-black tracking-widest uppercase text-xs bg-white dark:bg-[#111111] px-6 py-3 border border-gray-200 dark:border-gray-800 shadow-sm rounded-full">
                  <Loader2 className="w-4 h-4 animate-spin text-[#D32F2F]" />
                  Loading More News...
                </div>
              )}
              {!hasMore && (
                <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                  No more news available
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-8 hidden lg:flex mt-[80px]">
            {/* Dynamic Sidebar Widgets */}
            {Array.from({ length: Math.max(3, Math.ceil(articles.length / 4)) }).map((_, i) => {
              const startIndex = i * 4;
              const widgetPosts = articles.slice(startIndex, startIndex + 4);
              if (widgetPosts.length === 0 && i > 2) return null;
              
              const postsToUse = widgetPosts.length > 0 ? widgetPosts : articles.slice(0, 4);
              const topics = ['Trending Now', 'Top Stories', 'Business', 'Sports', 'Entertainment', 'Must Read', 'Highlights', 'Local News'];
              const title = topics[i % topics.length];
              const showAd = (i + 1) % 2 === 0;
              const isLast = i === Math.max(3, Math.ceil(articles.length / 4)) - 1;

              return (
                <div key={`sidebar-group-${i}`} className={`w-full flex flex-col gap-8 lg:items-end ${isLast ? 'sticky top-[100px] h-fit pb-8' : ''}`}>
                  <SidebarWidget title={title} posts={postsToUse} />

                  {showAd && (
                    <div className="w-[300px] h-[250px] bg-gray-100 dark:bg-[#1A1A1A] flex flex-col items-center justify-center border border-gray-200 dark:border-gray-800 relative overflow-hidden">
                      <span className="relative z-10 text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1">Advertisement</span>
                      <span className="relative z-10 text-xs font-black tracking-widest text-gray-300 dark:text-gray-600">300 x 250</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
