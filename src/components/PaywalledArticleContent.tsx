"use client";

import React, { useEffect, useState, useRef } from 'react';
import { usePaywall } from '@/context/PaywallContext';
import { Lock } from 'lucide-react';
import { useAuthModal } from '@/context/AuthModalContext';
import { useSession } from 'next-auth/react';

export default function PaywalledArticleContent({ 
  content, 
  postId, 
  id 
}: { 
  content: string, 
  postId: number,
  id?: string
}) {
  const { trackArticleRead } = usePaywall();
  const { openPayment, openLogin } = useAuthModal();
  const { status } = useSession();
  const [isBlocked, setIsBlocked] = useState(false);
  
  // Use a ref to ensure we only track once on mount
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!hasTracked.current) {
      hasTracked.current = true;
      // Delay tracking slightly to avoid strict mode double-firing immediately and blocking falsely
      setTimeout(() => {
        const canRead = trackArticleRead(postId);
        if (!canRead) {
          setIsBlocked(true);
        }
      }, 100);
    }
  }, [postId, trackArticleRead]);

  if (isBlocked) {
    return (
      <div id={id} className="relative mt-4">
        {/* Blurred Content */}
        <div 
          className="article-content prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-p:text-gray-800 dark:prose-p:text-gray-200 blur-[6px] select-none opacity-40 pointer-events-none
            h-[400px] overflow-hidden"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        {/* Paywall Overlay */}
        <div className="absolute inset-0 flex flex-col items-center pt-8 bg-gradient-to-t from-white via-white/95 dark:from-[#111] dark:via-[#111]/95 to-transparent">
          <div className="bg-white dark:bg-[#1A1A1A] p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 text-center max-w-md w-full mx-4 mt-12 relative z-10">
            <div className="w-16 h-16 bg-[#FCE4E4] dark:bg-[#D32F2F]/20 text-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tight">
              Padhne Ki Limit Khatam
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium text-sm">
              Aapne apni 3 free news ki limit poori kar li hai. Aage padhne aur saari premium features ka fayda uthane ke liye aaj hi subscribe karein.
            </p>
            
            <button 
              onClick={() => status === 'authenticated' ? openPayment() : openLogin()}
              className="w-full bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold uppercase tracking-widest text-sm py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {status === 'authenticated' ? 'Subscribe Now' : 'Login to Subscribe'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Normal Content
  return (
    <div 
      id={id}
      className="article-content prose prose-lg dark:prose-invert max-w-none 
        prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
        prose-a:text-[#D32F2F] hover:prose-a:text-[#b71c1c]
        prose-img:rounded-xl prose-img:shadow-md
        prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-p:leading-relaxed transition-colors"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
