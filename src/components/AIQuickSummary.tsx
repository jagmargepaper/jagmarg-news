"use client";

import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { usePaywall } from '@/context/PaywallContext';

export default function AIQuickSummary({ contentSelector, isPremium = false, locale = 'en' }: { contentSelector?: string, isPremium?: boolean, locale?: string }) {
  const { trackAiSummary } = usePaywall();
  const [summary, setSummary] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateSummary = async () => {
    if (!trackAiSummary()) return;

    setIsLoading(true);
    setError(null);
    try {
      let textToRead = "";
      if (contentSelector) {
        const el = document.querySelector(contentSelector);
        if (el) {
          textToRead = (el as HTMLElement).textContent || ""; 
        }
      }

      textToRead = textToRead.trim();
      if (!textToRead) {
        setError("No content found to summarize.");
        setIsLoading(false);
        return;
      }

      // Truncate text for demo purposes
      if (textToRead.length > 3000) {
        textToRead = textToRead.substring(0, 3000) + "...";
      } 
      
      // Detect language
      let speechLang = 'en'; 
      const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
      if (match) {
        const glang = match[2].split('/')[2]; 
        if (glang) speechLang = glang;
      }

      const response = await fetch('/api/summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToRead, language: speechLang }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate summary");
      }

      const data = await response.json();
      setSummary(data.summary);
    } catch (err) {
      console.error(err);
      setError("AI was unable to generate a summary at this time.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#FFFDF5] border border-[#F4E1A1] rounded-sm p-6 mb-8 relative shadow-sm">
      <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm flex items-center gap-1.5 shadow-md">
        <Sparkles className="w-3 h-3 animate-pulse" /> 
        AI Quick Summary
      </div>
      
      {!summary ? (
        <div className="mt-3 flex flex-col items-center justify-center p-4">
          <p className="text-sm text-gray-500 mb-3 text-center">
            Want to save time? Let our AI read the article and give you 3 quick bullet points.
          </p>
          <button 
            onClick={generateSummary}
            disabled={isLoading}
            className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#D32F2F] text-white text-xs font-bold px-4 py-2 rounded-sm transition-colors disabled:opacity-50"
          >
            <span className={isLoading ? "block" : "hidden"}><Loader2 className="w-4 h-4 animate-spin" /></span>
            <span className={isLoading ? "hidden" : "block"}><Sparkles className="w-4 h-4" /></span>
            
            <span className={isLoading ? "block" : "hidden"}>Generating...</span>
            <span className={isLoading ? "hidden" : "block"}>Generate AI Summary</span>
          </button>
          {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        </div>
      ) : (
        <ul className="space-y-3 mt-3">
          {summary.map((point, index) => (
            <li key={index} className="flex gap-3 text-[15px] text-gray-700 dark:text-gray-300 leading-snug">
              <span className="text-[#D32F2F] font-black shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
