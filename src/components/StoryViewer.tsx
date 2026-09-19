"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  text: string;
}

interface StoryViewerProps {
  slides: Slide[];
  locale: string;
}

export default function StoryViewer({ slides, locale }: StoryViewerProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-advance logic
  useEffect(() => {
    const duration = 5000; // 5 seconds per slide
    const interval = 50; // Update progress every 50ms
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      router.push(`/${locale}/web-stories`);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      
      {/* Mobile-sized container */}
      <div className="relative w-full max-w-[400px] h-full sm:h-[90vh] sm:rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
        
        {/* Progress Bars */}
        <div className="absolute top-0 left-0 w-full z-20 flex gap-1 p-2">
          {slides.map((_, index) => (
            <div key={index} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-75 ease-linear"
                style={{ 
                  width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%' 
                }}
              />
            </div>
          ))}
        </div>

        {/* Top Controls */}
        <div className="absolute top-4 left-0 w-full z-20 px-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#D32F2F] flex items-center justify-center font-black text-xs">JN</div>
            <span className="font-bold text-sm drop-shadow-md">Jagmarg News</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-1 hover:bg-white/20 rounded-full transition-colors"><Share2 className="w-5 h-5" /></button>
            <button onClick={() => router.push(`/${locale}/web-stories`)} className="p-1 hover:bg-white/20 rounded-full transition-colors"><X className="w-6 h-6" /></button>
          </div>
        </div>

        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={slides[currentIndex].image} 
            alt={slides[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay for Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />
        </div>

        {/* Tap Zones */}
        <div 
          className="absolute inset-y-0 left-0 w-1/3 z-10 cursor-pointer"
          onClick={handlePrev}
        />
        <div 
          className="absolute inset-y-0 right-0 w-2/3 z-10 cursor-pointer"
          onClick={handleNext}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full z-20 p-6 pointer-events-none">
          <h2 className="text-white text-2xl font-black leading-tight mb-3 drop-shadow-lg">
            {slides[currentIndex].title}
          </h2>
          <p className="text-gray-200 text-sm font-medium drop-shadow-md mb-6">
            {slides[currentIndex].text}
          </p>
          <div className="w-full flex justify-center mb-2">
             <button className="pointer-events-auto bg-white text-black dark:text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors">
               Read Full Article
             </button>
          </div>
        </div>

      </div>

      {/* Desktop side navigation hints */}
      <div className="hidden sm:flex absolute inset-y-0 left-0 w-[calc(50%-200px)] items-center justify-end pr-8">
        <button onClick={handlePrev} className="bg-white/10 hover:bg-white/20 p-4 rounded-full text-white backdrop-blur-sm transition-all">
          <ChevronLeft className="w-8 h-8" />
        </button>
      </div>
      <div className="hidden sm:flex absolute inset-y-0 right-0 w-[calc(50%-200px)] items-center justify-start pl-8">
        <button onClick={handleNext} className="bg-white/10 hover:bg-white/20 p-4 rounded-full text-white backdrop-blur-sm transition-all">
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

    </div>
  );
}
