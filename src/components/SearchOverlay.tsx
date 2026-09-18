"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const trendingSearches = [
  "Haryana Assembly Elections",
  "Union Budget 2026 Highlights",
  "Sensex Record High Today",
  "India vs Australia T20",
  "Top 10 EVs in India"
];

const mockResults = [
  {
    id: 1,
    title: "PM Modi inaugurates new semiconductor plant in Gujarat",
    category: "National",
    date: "2 hours ago",
    image: "https://images.unsplash.com/photo-1532375810709-75b1d3166929?auto=format&fit=crop&q=80&w=200&h=150"
  },
  {
    id: 2,
    title: "Haryana Elections: Key candidates to watch out for in Rohtak",
    category: "Politics",
    date: "4 hours ago",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=200&h=150"
  },
  {
    id: 3,
    title: "Markets soar as tech stocks rally globally",
    category: "Business",
    date: "5 hours ago",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=200&h=150"
  }
];

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      // Route to actual search page
      const currentLocale = window.location.pathname.split('/')[1] || 'en';
      const validLocales = ['en', 'hi', 'pa'];
      const locale = validLocales.includes(currentLocale) ? currentLocale : 'en';
      router.push(`/${locale}/search?q=${encodeURIComponent(query)}`); 
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/60 backdrop-blur-md"
        >
          {/* Close Button Area (Click outside to close) */}
          <div className="absolute inset-0 z-0" onClick={onClose} />

          {/* Search Box Container */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-[900px] mx-auto mt-16 lg:mt-24 bg-white dark:bg-gray-900 shadow-2xl rounded-sm overflow-hidden"
          >
            {/* Input Header */}
            <div className="flex items-center p-6 border-b border-gray-100 dark:border-gray-800">
              <Search className="w-8 h-8 text-gray-400 mr-4" />
              <form onSubmit={handleSearch} className="flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search Jagmarg..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full text-2xl md:text-3xl font-black tracking-tight text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-700 bg-transparent border-none outline-none focus:ring-0"
                />
              </form>
              <button 
                onClick={onClose}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors ml-4"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Dynamic Content Area */}
            <div className="p-8 bg-gray-50 min-h-[400px]">
              {query.length === 0 ? (
                // ZERO-STATE: Trending & Recent
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="flex items-center text-xs font-black uppercase tracking-widest text-[#D32F2F] mb-6">
                      <TrendingUp className="w-4 h-4 mr-2" /> Trending Now
                    </h3>
                    <div className="flex flex-col gap-4">
                      {trendingSearches.map((term, i) => (
                        <button 
                          key={i}
                          onClick={() => { setQuery(term); inputRef.current?.focus(); }}
                          className="text-left text-lg font-bold text-gray-700 hover:text-[#D32F2F] transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="flex items-center text-xs font-black uppercase tracking-widest text-gray-500 mb-6">
                      <Clock className="w-4 h-4 mr-2" /> Recent Searches
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 cursor-pointer hover:border-[#D32F2F] hover:text-[#D32F2F] transition-colors">
                        Olympic Medals
                      </span>
                      <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 cursor-pointer hover:border-[#D32F2F] hover:text-[#D32F2F] transition-colors">
                        Stock Market
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                // RICH RESULTS-STATE (Mocked Live Results)
                <div className="animate-in fade-in duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-500">
                      Top Results for "{query}"
                    </h3>
                    <button onClick={handleSearch} className="text-xs font-black uppercase tracking-widest text-[#D32F2F] hover:underline flex items-center">
                      View All Results <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {mockResults.map((article) => (
                      <Link 
                        key={article.id} 
                        href="/article" 
                        onClick={onClose}
                        className="flex items-center gap-6 p-4 bg-white border border-gray-100 hover:border-[#D32F2F] hover:shadow-lg transition-all rounded-sm group"
                      >
                        <div className="w-24 h-16 bg-gray-200 overflow-hidden shrink-0 relative">
                          <Image 
                            src={article.image} 
                            alt={article.title} 
                            fill
                            sizes="96px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#D32F2F]">{article.category}</span>
                            <span className="text-[10px] text-gray-400">{article.date}</span>
                          </div>
                          <h4 className="text-base font-bold text-[#1A1A1A] group-hover:text-[#D32F2F] transition-colors line-clamp-1">
                            {article.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
