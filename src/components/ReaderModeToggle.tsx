'use client';

import { useState, useEffect } from 'react';
import { BookOpen } from 'lucide-react';

export default function ReaderModeToggle() {
  const [isReaderMode, setIsReaderMode] = useState(false);

  useEffect(() => {
    if (isReaderMode) {
      document.body.classList.add('reader-mode-active');
    } else {
      document.body.classList.remove('reader-mode-active');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('reader-mode-active');
    };
  }, [isReaderMode]);

  return (
    <button 
      onClick={() => setIsReaderMode(!isReaderMode)}
      className={`fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isReaderMode ? 'bg-[#1A1A1A] text-white rotate-12 scale-110' : 'bg-white text-[#1A1A1A] border border-gray-200 hover:bg-gray-50 dark:bg-gray-900 hover:scale-105'}`}
      title={isReaderMode ? "Exit Reader Mode" : "Enter Reader Mode"}
    >
      <BookOpen className="w-6 h-6" />
      
      {/* Global CSS for Reader Mode injected dynamically */}
      {isReaderMode && (
        <style dangerouslySetInnerHTML={{__html: `
          body.reader-mode-active header,
          body.reader-mode-active footer,
          body.reader-mode-active aside,
          body.reader-mode-active .ad-container,
          body.reader-mode-active .related-news,
          body.reader-mode-active .jagmarg-alert-prompt {
            display: none !important;
          }
          
          body.reader-mode-active main {
            background-color: #fdfdfc !important;
            padding-top: 5vh !important;
          }
          
          body.reader-mode-active article {
            max-width: 800px !important;
            margin: 0 auto !important;
            box-shadow: none !important;
            border: none !important;
            background: transparent !important;
          }
          
          body.reader-mode-active .article-prose-content {
            font-size: 22px !important;
            line-height: 1.8 !important;
            font-family: 'Georgia', serif !important;
            color: #111 !important;
          }
          
          body.reader-mode-active h1 {
            font-size: 3rem !important;
            line-height: 1.2 !important;
            text-align: center !important;
            margin-bottom: 2rem !important;
          }
        `}} />
      )}
    </button>
  );
}
