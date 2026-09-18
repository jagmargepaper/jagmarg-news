"use client";

import React from 'react';

type AdSize = 
  | 'leaderboard'     // 728x90 (Desktop Header)
  | 'billboard'       // 970x250 (Desktop Top Large)
  | 'mrec'            // 300x250 (Sidebar / Inline Article)
  | 'halfpage'        // 300x600 (Sidebar Long)
  | 'mobile_banner'   // 320x50 (Mobile Sticky/Header)
  | 'mobile_large'    // 320x100 (Mobile Inline)
  | 'fluid';          // Responsive inline feed ad

interface AdSlotProps {
  id: string; // Ad slot ID from AdSense/AdX
  size: AdSize;
  className?: string;
}

export default function AdSlot({ id, size, className = "" }: AdSlotProps) {
  // Define strict width and height to prevent CLS (Cumulative Layout Shift)
  const sizeClasses = {
    leaderboard: "w-[728px] h-[90px] hidden md:flex",
    billboard: "w-[970px] h-[250px] hidden lg:flex",
    mrec: "w-[300px] h-[250px] flex",
    halfpage: "w-[300px] h-[600px] hidden md:flex",
    mobile_banner: "w-[320px] h-[50px] flex",
    mobile_large: "w-[320px] h-[100px] flex md:hidden",
    fluid: "w-full min-h-[100px] flex" // Adapts to container, but has min-height
  };

  const dimensions = {
    leaderboard: "728 x 90",
    billboard: "970 x 250",
    mrec: "300 x 250",
    halfpage: "300 x 600",
    mobile_banner: "320 x 50",
    mobile_large: "320 x 100",
    fluid: "Fluid / Responsive"
  };

  return (
    <div className={`flex flex-col items-center justify-center my-6 ${className}`}>
      <span className="text-[9px] uppercase tracking-widest text-gray-400 mb-1 font-semibold">
        Advertisement
      </span>
      {/* 
        This wrapper has STRICT dimensions based on the prop. 
        It reserves the space immediately upon rendering, eliminating CLS.
      */}
      <div 
        id={`ad-${id}`}
        className={`bg-gray-100 border border-gray-200 items-center justify-center overflow-hidden ${sizeClasses[size]}`}
      >
        <span className="text-gray-400 font-bold text-sm tracking-widest">
          {dimensions[size]}
        </span>
        {/* AdSense <ins> tag will be injected here via a useEffect in production */}
      </div>
    </div>
  );
}
