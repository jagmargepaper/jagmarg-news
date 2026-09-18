'use client';

import { ArrowRight, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

export default function EpaperAndVideo() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const youtubeVideos = [
    { id: 'dQw4w9WgXcQ', title: 'Jagmarg Exclusive: CM Meeting Highlights' },
    { id: 'jNQXAC9IVRw', title: 'Special Report: Upcoming Elections 2026' },
    { id: 'tPEE9ZwTmy0', title: 'Daily News Briefing - Top 10 Stories' },
    { id: 'dQw4w9WgXcQ', title: 'Live Debate at Prime Time' },
    { id: 'jNQXAC9IVRw', title: 'Weather Forecast & Updates' },
    { id: 'tPEE9ZwTmy0', title: 'Sports Highlights of the Day' }
  ];

  const epapers = [
    { 
      name: 'Chandigarh', 
      link: 'https://epaper.jagmarg.com/edition/Chandigarh/39766', 
      color: 'bg-[#0070AC]',
      image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&q=80'
    },
    { 
      name: 'Haryana', 
      link: 'https://epaper.jagmarg.com/edition/Haryana/39765', 
      color: 'bg-[#D32F2F]',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80'
    }
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center">
      <div className="w-full bg-[#111111] border-y-4 border-[#D32F2F]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-12 justify-between">
          
          {/* LEFT: E-PAPER */}
          <div className="w-full lg:w-[35%] flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-white font-black text-2xl uppercase tracking-widest border-l-4 border-[#D32F2F] pl-4">
                Today's E-Paper
              </h2>
            </div>
            
            <div className="flex gap-4 h-[400px]">
              {epapers.map((paper, idx) => (
                <a 
                  key={idx} 
                  href={paper.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative group cursor-pointer w-1/2 flex flex-col rounded-md overflow-hidden shadow-2xl border-2 border-gray-800 hover:border-white transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={paper.image} 
                      alt={paper.name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    
                    <div className="absolute top-4 left-0 right-0 text-center">
                      <span className="bg-white text-black px-4 py-1 font-black text-xl tracking-tighter uppercase shadow-md">
                        जग मार्ग
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className={`${paper.color} w-full text-center py-2 rounded-sm shadow-lg`}>
                        <span className="text-white font-bold tracking-widest uppercase text-sm">{paper.name}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: YOUTUBE VIDEOS */}
          <div className="w-full lg:w-[65%] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <PlayCircle className="w-8 h-8 text-[#FF0000]" />
                <h2 className="text-white font-black text-2xl uppercase tracking-widest border-l-4 border-white pl-4 truncate max-w-[200px] sm:max-w-none">
                  Jagmarg Videos
                </h2>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <a href="https://youtube.com/@jagmargnews?si=Ot4CSh4QQO-x2HaV" target="_blank" rel="noopener noreferrer" className="hidden sm:flex text-gray-400 hover:text-white items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors mr-2">
                  Subscribe <ArrowRight className="w-3 h-3" />
                </a>
                <button onClick={scrollLeft} className="p-2 rounded-full bg-gray-800 hover:bg-[#D32F2F] text-white transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={scrollRight} className="p-2 rounded-full bg-gray-800 hover:bg-[#D32F2F] text-white transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div 
              ref={scrollContainerRef}
              className="grid grid-rows-2 grid-flow-col gap-6 overflow-x-auto snap-x scrollbar-hide h-[400px]"
              style={{ gridAutoColumns: 'calc(50% - 12px)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {youtubeVideos.map((video, idx) => (
                <div key={idx} className="flex flex-col gap-2 group h-full snap-start">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-gray-900 border-2 border-transparent group-hover:border-[#D32F2F] group-hover:shadow-[0_0_15px_rgba(211,47,47,0.5)] transition-all duration-300 relative transform group-hover:scale-[1.02]">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 w-full h-full pointer-events-auto"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
