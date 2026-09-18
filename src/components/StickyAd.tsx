"use client";

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import AdSlot from './AdSlot';

export default function StickyAd() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show ad after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center bg-transparent pointer-events-none pb-4">
      <div className="relative pointer-events-auto shadow-2xl rounded-sm overflow-hidden bg-white border border-gray-200">
        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute -top-1 -right-1 bg-gray-200 p-0.5 rounded-full z-10"
        >
          <X className="w-3 h-3 text-gray-700" />
        </button>
        <AdSlot size="mobile_banner" id="sticky-bottom" className="my-0" />
      </div>
    </div>
  );
}
