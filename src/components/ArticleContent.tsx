"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ArticleContent({ html, isPaywall }: { html: string, isPaywall: boolean }) {
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [reaction, setReaction] = useState<string | null>(null);
  
  const sizeClasses = {
    sm: 'prose-sm',
    base: 'prose-base',
    lg: 'prose-lg'
  };

  const handleReaction = (emoji: string) => {
    if (!reaction) setReaction(emoji);
    // In production, this would fire a POST request to save the reaction
  };

  return (
    <div className="w-full">
      {/* Accessibility: Font Adjuster */}
      <div className="flex items-center justify-end gap-2 mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mr-2">Text Size</span>
        <button 
          onClick={() => setFontSize('sm')} 
          className={`w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium transition-colors ${fontSize === 'sm' ? 'bg-[#D32F2F] text-white border-[#D32F2F] hover:bg-[#b71c1c]' : 'text-gray-700 dark:text-gray-300'}`}
        >
          A-
        </button>
        <button 
          onClick={() => setFontSize('base')} 
          className={`w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-base font-medium transition-colors ${fontSize === 'base' ? 'bg-[#D32F2F] text-white border-[#D32F2F] hover:bg-[#b71c1c]' : 'text-gray-700 dark:text-gray-300'}`}
        >
          A
        </button>
        <button 
          onClick={() => setFontSize('lg')} 
          className={`w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-lg font-medium transition-colors ${fontSize === 'lg' ? 'bg-[#D32F2F] text-white border-[#D32F2F] hover:bg-[#b71c1c]' : 'text-gray-700 dark:text-gray-300'}`}
        >
          A+
        </button>
      </div>
      
      {/* Article Content */}
      <div 
        className={`prose dark:prose-invert max-w-none ${sizeClasses[fontSize]} transition-all duration-300 ${isPaywall ? 'blur-sm select-none pointer-events-none' : ''}`}
        dangerouslySetInnerHTML={{ __html: html }} 
      />
      
      {/* Post-Article Interactive Elements */}
      {!isPaywall && (
        <div className="mt-12 space-y-8">
          
          {/* Emoji Reactions */}
          <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-xl border border-gray-100 dark:border-gray-800 text-center">
            <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">How does this story make you feel?</h4>
            <div className="flex justify-center gap-4 sm:gap-6">
              {[
                { emoji: '👍', label: 'Happy' },
                { emoji: '😲', label: 'Shocked' },
                { emoji: '😢', label: 'Sad' },
                { emoji: '😠', label: 'Angry' }
              ].map((item) => (
                <button
                  key={item.emoji}
                  onClick={() => handleReaction(item.emoji)}
                  disabled={reaction !== null}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
                    reaction === item.emoji 
                      ? 'bg-green-100 dark:bg-green-900/30 scale-110' 
                      : reaction 
                        ? 'opacity-50 cursor-not-allowed grayscale' 
                        : 'hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105'
                  }`}
                >
                  <span className="text-3xl sm:text-4xl">{item.emoji}</span>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{item.label}</span>
                </button>
              ))}
            </div>
            {reaction && <p className="mt-4 text-sm text-green-600 dark:text-green-400 font-medium">Thanks for your feedback!</p>}
          </div>

          {/* WhatsApp Channel Banner */}
          <Link href="https://whatsapp.com/channel/" target="_blank" className="block group">
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-xl p-1 shadow-lg group-hover:shadow-xl transition-shadow">
              <div className="bg-white dark:bg-[#0a0a0a] rounded-lg p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.553 4.184 1.603 6.008L.24 24l6.126-1.606c1.782.95 3.754 1.45 5.8 1.45 6.646 0 12.031-5.385 12.031-12.031C24.197 5.385 18.812 0 12.031 0zM17.5 16.5c-.37.95-1.92 1.68-2.67 1.77-.52.06-1.18.15-3.32-.7-2.61-1.04-4.28-3.7-4.43-3.91-.15-.2-1.06-1.42-1.06-2.71 0-1.29.67-1.93.91-2.18.26-.26.68-.32.92-.32.24 0 .48.01.68.01.2 0 .47-.07.72.52.27.63.92 2.24 1 2.44.08.2.14.43.01.68-.13.26-.2.41-.4.63-.2.21-.42.48-.6.65-.21.21-.43.43-.19.84.24.41 1.07 1.76 2.29 2.85 1.57 1.4 2.89 1.83 3.3 2.04.41.21.65.17.89-.1.24-.28 1.03-1.21 1.3-1.63.28-.41.55-.34.92-.2.37.14 2.34 1.1 2.74 1.3.4.2.67.31.76.48.09.18.09 1.01-.28 1.96z"/></svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#25D366] transition-colors">Join Jagmarg on WhatsApp</h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">Get breaking news and local updates instantly.</p>
                  </div>
                </div>
                <div className="bg-[#25D366] text-white px-4 py-2 rounded-full font-bold text-sm hidden sm:block group-hover:bg-[#128C7E] transition-colors">
                  Follow
                </div>
              </div>
            </div>
          </Link>
          
        </div>
      )}
    </div>
  );
}
