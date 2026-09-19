'use client';

import React, { useState, useEffect, useRef } from 'react';
import CategoryNewsBlock from './CategoryNewsBlock';
import { Loader2 } from 'lucide-react';
import { fetchCategories } from '@/lib/api'; // Ensure we can call this from client, or make an API route. Wait, fetchCategories is a server function in api.ts? Actually, it uses fetch, which works on client if WP_API_URL is public.

export default function HomeCategoryFeed({ 
  initialCategories, 
  locale 
}: { 
  initialCategories: any[], 
  locale: string 
}) {
  const [categories, setCategories] = useState<any[]>(initialCategories);
  const [page, setPage] = useState(2); // Since page 1 is initial
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const observerTarget = useRef<HTMLDivElement>(null);

  const fetchMoreCategories = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    
    try {
      // Direct call to WP API from client
      const res = await fetch(`https://jagmarg.com/wp-json/wp/v2/categories?hide_empty=true&per_page=5&page=${page}&orderby=count&order=desc`);
      if (!res.ok) {
        setHasMore(false);
        return;
      }
      
      const newCats = await res.json();
      if (newCats.length === 0) {
        setHasMore(false);
      } else {
        // Filter out "Uncategorized" or already existing ones just in case
        const validCats = newCats.filter((c: any) => c.slug !== 'uncategorized' && !categories.find(exist => exist.id === c.id));
        setCategories(prev => [...prev, ...validCats]);
        setPage(p => p + 1);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          fetchMoreCategories();
        }
      },
      { threshold: 0.1, rootMargin: '800px' }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [isLoading, hasMore, page]);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
      {categories.map((cat, index) => (
        <CategoryNewsBlock 
          key={cat.id} 
          categoryId={cat.id} 
          categoryName={cat.name} 
          categorySlug={cat.slug}
          layout={index % 2 === 0 ? 'FullWidth-A' : 'FullWidth-B'}
          locale={locale}
        />
      ))}
      
      {/* Loading Indicator */}
      {hasMore && (
        <div ref={observerTarget} className="flex justify-center items-center py-12">
          {isLoading && <Loader2 className="w-8 h-8 text-[#D32F2F] animate-spin" />}
        </div>
      )}
      
      {!hasMore && (
        <div className="text-center py-12 text-gray-500 font-bold text-sm tracking-widest uppercase">
          You have reached the end
        </div>
      )}
    </div>
  );
}
