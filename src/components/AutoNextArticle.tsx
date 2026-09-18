'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function AutoNextArticle({ nextSlug, nextTitle, locale }: { nextSlug: string, nextTitle: string, locale: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setProgress(0); // Reset if they scroll back up
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVisible) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            router.push(`/${locale}/${nextSlug}`);
            return 100;
          }
          return prev + 2; // Takes about 5 seconds (50 steps of 100ms)
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isVisible, nextSlug, locale, router]);

  if (!nextSlug) return null;

  return (
    <div ref={containerRef} className="w-full mt-12 bg-white border border-gray-200 p-8 rounded-xl shadow-sm text-center relative overflow-hidden">
      
      {/* Progress Bar Background */}
      <div 
        className="absolute top-0 left-0 h-1 bg-[#D32F2F] transition-all duration-100 ease-linear"
        style={{ width: progress + '%' }}
      />
      
      <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">Up Next in {Math.ceil((100 - progress) / 20)}s</span>
      <h3 className="text-2xl font-black text-[#1A1A1A] mb-4" dangerouslySetInnerHTML={{ __html: nextTitle }} />
      
      <div className="flex justify-center gap-4">
        <button 
          onClick={() => { setIsVisible(false); setProgress(0); }} 
          className="px-6 py-2 border border-gray-300 text-gray-600 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-gray-50"
        >
          Cancel
        </button>
        <button 
          onClick={() => router.push(`/${locale}/${nextSlug}`)} 
          className="px-6 py-2 bg-[#1A1A1A] text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-black"
        >
          Read Now
        </button>
      </div>
    </div>
  );
}
