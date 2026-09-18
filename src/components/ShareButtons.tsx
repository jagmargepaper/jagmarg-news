"use client";

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, MessageCircle, Check } from 'lucide-react';

export default function ShareButtons({ title, url, size = "small" }: { title: string, url?: string, size?: "small" | "large" }) {
  const [copied, setCopied] = useState(false);
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleWhatsApp = () => {
    window.open('https://wa.me/?text=' + encodeURIComponent(title + ' ' + currentUrl), '_blank');
  };

  const handleFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl), '_blank');
  };

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const btnClass = size === "large" 
    ? "w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-white" 
    : "w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 transition-transform text-white";
    
  const iconClass = size === "large" ? "w-5 h-5" : "w-4 h-4";

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs uppercase tracking-widest font-bold text-gray-400 mr-2">Share</span>
      <button onClick={handleWhatsApp} className={btnClass + " bg-[#25D366]"} aria-label="Share on WhatsApp">
        <MessageCircle className={iconClass} />
      </button>
      <button onClick={handleFacebook} className={btnClass + " bg-[#1877F2]"} aria-label="Share on Facebook">
        <Share2 className={iconClass} />
      </button>
      <button onClick={handleCopy} className={btnClass + " bg-gray-200 !text-[#1A1A1A]"} aria-label="Copy Link">
        {copied ? <Check className={iconClass} /> : <LinkIcon className={iconClass} />}
      </button>
    </div>
  );
}
