"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuthModal } from './AuthModalContext';
import { useSession } from 'next-auth/react';

interface PaywallContextType {
  trackAudioListen: () => boolean; 
  trackAiSummary: () => boolean;   
  trackArticleRead: (postId: number) => boolean;
  audioCount: number;
  aiCount: number;
  readPosts: number[];
}

const PaywallContext = createContext<PaywallContextType | undefined>(undefined);

export function PaywallProvider({ children }: { children: ReactNode }) {
  const [audioCount, setAudioCount] = useState(0);
  const [aiCount, setAiCount] = useState(0);
  const [readPosts, setReadPosts] = useState<number[]>([]);
  
  const { openPayment, openLogin } = useAuthModal();
  const { data: session, status } = useSession();
  const isPremium = false; // TODO: Check actual premium status from session when connected to DB

  // Load limits from localStorage on mount
  useEffect(() => {
    const storedAudio = localStorage.getItem('jagmarg_audio_count');
    const storedAi = localStorage.getItem('jagmarg_ai_count');
    const storedReads = localStorage.getItem('jagmarg_read_posts');
    
    if (storedAudio) setAudioCount(parseInt(storedAudio, 10));
    if (storedAi) setAiCount(parseInt(storedAi, 10));
    if (storedReads) {
      try {
        setReadPosts(JSON.parse(storedReads));
      } catch(e) {}
    }
  }, []);

  const trackArticleRead = (postId: number) => {
    if (status === 'authenticated' && isPremium) return true;
    
    // If they already read this post, it's free to read again
    if (readPosts.includes(postId)) return true;

    // Limit to 3 articles
    if (readPosts.length >= 3) {
      if (status !== 'authenticated') openLogin();
      else openPayment();
      return false; // Blocked
    }

    const newReads = [...readPosts, postId];
    setReadPosts(newReads);
    localStorage.setItem('jagmarg_read_posts', JSON.stringify(newReads));
    return true; // Allowed
  };

  const trackAudioListen = () => {
    if (status === 'authenticated' && isPremium) return true;
    
    if (audioCount >= 3) {
      if (status !== 'authenticated') openLogin();
      else openPayment();
      return false;
    }

    const newCount = audioCount + 1;
    setAudioCount(newCount);
    localStorage.setItem('jagmarg_audio_count', newCount.toString());
    return true;
  };

  const trackAiSummary = () => {
    if (status === 'authenticated' && isPremium) return true;
    
    if (aiCount >= 3) {
      if (status !== 'authenticated') openLogin();
      else openPayment();
      return false;
    }

    const newCount = aiCount + 1;
    setAiCount(newCount);
    localStorage.setItem('jagmarg_ai_count', newCount.toString());
    return true;
  };

  return (
    <PaywallContext.Provider value={{ trackAudioListen, trackAiSummary, trackArticleRead, audioCount, aiCount, readPosts }}>
      {children}
    </PaywallContext.Provider>
  );
}

export function usePaywall() {
  const context = useContext(PaywallContext);
  if (context === undefined) {
    throw new Error('usePaywall must be used within a PaywallProvider');
  }
  return context;
}
