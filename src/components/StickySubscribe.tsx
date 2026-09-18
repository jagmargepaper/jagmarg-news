"use client";

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthModal } from '@/context/AuthModalContext';
import { useSession } from 'next-auth/react';

export default function StickySubscribe() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { openLogin } = useAuthModal();
  const { data: session } = useSession();

  const isPremium = (session?.user as any)?.isPremium;

  useEffect(() => {
    // Only show after a slight delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;
  if (isPremium) return null; // HIDE IF USER IS PREMIUM!
  if (pathname.includes('/dashboard') || pathname.includes('/subscribe')) return null;

  const handleSubscribeClick = () => {
    if (session) {
      // User is logged in but not premium, send to subscribe page
      const locale = pathname.split('/')[1] || 'en';
      router.push(`/${locale}/subscribe`);
    } else {
      // User is not logged in, open login modal
      openLogin();
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
      <button 
        onClick={handleSubscribeClick}
        className="group relative flex items-center bg-[#D32F2F] text-white shadow-2xl rounded-l-lg hover:bg-[#1A1A1A] transition-all duration-300"
      >
        <div className="px-1.5 py-3 flex flex-col items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-yellow-300" />
          <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black tracking-wider uppercase mt-1">
            Subscribe @ ₹29
          </span>
        </div>
        
        {/* Hover Expandable details */}
        <div className="absolute right-full top-0 h-full w-0 overflow-hidden group-hover:w-48 bg-[#1A1A1A] transition-all duration-300 flex flex-col justify-center px-0 group-hover:px-4 border-l-4 border-[#D32F2F] whitespace-nowrap rounded-l-lg">
          <p className="text-white text-xs font-bold uppercase tracking-widest">Premium News</p>
          <ul className="text-gray-400 text-[10px] mt-2 space-y-1 text-left">
            <li>✓ Ad-Free Reading</li>
            <li>✓ Audio Articles (TTS)</li>
            <li>✓ AI Quick Summaries</li>
          </ul>
        </div>
      </button>
    </div>
  );
}
