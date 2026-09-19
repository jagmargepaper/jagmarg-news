'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BreakingNewsProps {
  newsItems?: string[];
}

const defaultItems = [
  "Haryana Elections: Election Commission announces new dates for counting across all districts.",
  "Market Hits Record High: Sensex crosses major milestone in early morning trade.",
  "Weather Alert: Red warning issued for heavy rainfall in Chandigarh, Punjab, and Haryana.",
  "Sports Update: Indian contingent secures another Gold in the Asian Athletics Championship.",
];

export default function BreakingNews({ newsItems }: BreakingNewsProps) {
  const [items, setItems] = useState<string[]>(newsItems || defaultItems);

  useEffect(() => {
    // If newsItems is not provided, fetch the latest posts as breaking news
    if (!newsItems || newsItems.length === 0) {
      const fetchHeadlines = async () => {
        try {
          const res = await fetch('https://jagmarg.com/wp-json/wp/v2/posts?per_page=5');
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const titles = data.map(p => p.title.rendered.replace(/&[^;]+;/g, '')).filter(Boolean);
            if (titles.length > 0) setItems(titles);
          }
        } catch (e) {
          console.error("Failed to fetch breaking news", e);
        }
      };
      fetchHeadlines();
    } else {
      setItems(newsItems);
    }
  }, [newsItems]);

  return (
    <div className="w-full bg-[#1A1A1A] flex items-center h-10 overflow-hidden border-b border-gray-800 relative z-40">
      
      {/* STATIC LABEL (Left Side) */}
      <div className="bg-[#D32F2F] text-white font-black uppercase tracking-[0.2em] text-[10px] px-6 h-full flex items-center shrink-0 z-10 relative">
        Breaking News
        {/* Right Pointing Triangle Effect */}
        <div className="absolute top-0 -right-3 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[12px] border-l-[#D32F2F]"></div>
      </div>
      
      {/* SCROLLING TICKER */}
      <div className="flex-1 overflow-hidden relative flex items-center h-full">
        <motion.div 
          className="flex gap-16 whitespace-nowrap px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {/* First Set of News */}
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-200 hover:text-white cursor-pointer transition-colors text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 bg-[#FFC107] rounded-full animate-pulse"></span>
              {item}
            </div>
          ))}
          {/* Duplicated Set for Seamless Infinite Loop */}
          {items.map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3 text-gray-200 hover:text-white cursor-pointer transition-colors text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 bg-[#FFC107] rounded-full animate-pulse"></span>
              {item}
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
