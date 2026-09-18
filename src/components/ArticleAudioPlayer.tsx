"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Square, Loader2, Download, FastForward, X, Settings2, ChevronUp } from 'lucide-react';
import { usePaywall } from '@/context/PaywallContext';

export default function ArticleAudioPlayer({ articleText, contentSelector, isPremium = false, locale = 'en' }: { articleText?: string, contentSelector?: string, isPremium?: boolean, locale?: string }) {
  const { trackAudioListen } = usePaywall();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [isSpeedDropdownOpen, setIsSpeedDropdownOpen] = useState(false);
  
  // Audio state for Seekbar
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  // Sticky Player State
  const [isSticky, setIsSticky] = useState(false);
  const [showSticky, setShowSticky] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < -50 && downloadUrl && showSticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [downloadUrl, showSticky]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

  const handleSpeedChange = (speed: number) => {
    setPlaybackRate(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
    setIsSpeedDropdownOpen(false);
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time) || time === Infinity) return "00:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const togglePlay = async () => {
    if (!trackAudioListen()) return;

    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    if (!isPlaying && audioRef.current && audioRef.current.src) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => console.error("Playback interrupted:", error));
      }
      setIsPlaying(true);
      return;
    }

    try {
      setIsLoading(true);
      
      let textToRead = articleText || "";
      if (contentSelector) {
        const el = document.querySelector(contentSelector);
        if (el) {
          textToRead = (el as HTMLElement).textContent || ""; 
        }
      }

      textToRead = textToRead.trim();
      if (!textToRead) {
        alert("No text found to read.");
        setIsLoading(false);
        return;
      }

      if (textToRead.length > 500) {
         textToRead = textToRead.substring(0, 500) + "...";
      }

      let speechLang = 'en'; 
      const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
      if (match) {
        const glang = match[2].split('/')[2]; 
        if (glang) speechLang = glang;
      }

      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToRead, language: speechLang }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Failed to load premium audio.");
        setIsLoading(false);
        return;
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      setDownloadUrl(audioUrl);
      
      const newAudio = new Audio(audioUrl);
      newAudio.playbackRate = playbackRate;
      
      // Chrome Infinity Duration Bug Fix for Blob URLs
      newAudio.addEventListener('loadedmetadata', () => {
        if (newAudio.duration === Infinity) {
            newAudio.currentTime = 1e101;
            newAudio.addEventListener('timeupdate', function checkDuration() {
                newAudio.removeEventListener('timeupdate', checkDuration);
                setDuration(newAudio.duration);
                newAudio.currentTime = 0;
            });
        } else {
            setDuration(newAudio.duration);
        }
      });

      newAudio.addEventListener('timeupdate', () => setCurrentTime(newAudio.currentTime));
      newAudio.addEventListener('ended', () => setIsPlaying(false));
      
      const playPromise = newAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => console.error("Initial playback interrupted:", error));
      }
      
      audioRef.current = newAudio;
      setIsPlaying(true);
      setIsLoading(false);

    } catch (error) {
      console.error("Audio generation failed:", error);
      alert("Error generating audio.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div ref={containerRef} className="flex flex-col gap-3 bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-6 shadow-sm">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={togglePlay} 
              disabled={isLoading}
              className="w-12 h-12 rounded-full bg-[#1A1A1A] hover:bg-[#D32F2F] flex items-center justify-center text-white transition-colors shadow-md group disabled:opacity-50 shrink-0"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isPlaying ? (
                <Square className="w-4 h-4" fill="currentColor" />
              ) : (
                <Play className="w-5 h-5 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
              )}
            </button>
            <div>
              <div className="text-sm font-black text-[#1A1A1A]">Listen to this article</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-0.5">
                {isLoading ? "Generating Audio..." : isPlaying ? "Now Playing... 🔊" : "Premium AI Audio"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4 relative">
            {downloadUrl && (
              <a 
                href={downloadUrl} 
                download="jagmarg-news.mp3"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors shrink-0"
                title="Download Podcast"
              >
                <Download className="w-4 h-4" />
              </a>
            )}

            {/* SPEED DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => setIsSpeedDropdownOpen(!isSpeedDropdownOpen)}
                className="px-4 py-1.5 md:px-5 md:py-2 bg-white border border-gray-200 text-[#1A1A1A] text-xs font-black uppercase tracking-widest rounded-full hover:bg-gray-100 transition-colors shadow-sm shrink-0 flex items-center gap-1.5"
              >
                <Settings2 className="w-4 h-4 text-[#D32F2F]" />
                {playbackRate === 1 ? 'Normal' : `${playbackRate}x`}
              </button>

              {isSpeedDropdownOpen && (
                <div className="absolute bottom-full right-0 mb-2 w-36 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-2">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3 py-2 border-b border-gray-100 bg-gray-50">
                    Playback Speed
                  </div>
                  <div className="flex flex-col py-1">
                    {speeds.map((s) => (
                      <button
                        key={s}
                        onClick={() => handleSpeedChange(s)}
                        className={`px-3 py-2 text-left text-xs font-black transition-colors ${playbackRate === s ? 'text-[#D32F2F] bg-red-50' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        {s === 1 ? 'Normal' : `${s}x`}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {downloadUrl && (
          <div className="flex items-center gap-3 w-full mt-2">
            <span className="text-xs font-mono text-[#D32F2F] font-bold shrink-0 w-10 text-right">{formatTime(currentTime)}</span>
            <input 
              type="range" 
              min="0" 
              max={duration || 100} 
              value={currentTime} 
              onChange={handleSeek}
              className="w-full h-1.5 bg-gray-300 rounded-full appearance-none cursor-pointer accent-[#D32F2F] hover:h-2 transition-all"
            />
            <span className="text-xs font-mono text-gray-500 shrink-0 w-10">{formatTime(duration)}</span>
          </div>
        )}
      </div>

      {isSticky && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center gap-4">
            
            <button 
              onClick={togglePlay} 
              className="w-10 h-10 shrink-0 rounded-full bg-[#D32F2F] hover:bg-[#B71C1C] flex items-center justify-center text-white transition-colors shadow-md"
            >
              {isPlaying ? (
                <Square className="w-3 h-3" fill="currentColor" />
              ) : (
                <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
              )}
            </button>

            <div className="flex-1 flex flex-col justify-center min-w-0">
              <div className="text-xs font-black truncate text-[#1A1A1A]">Jagmarg Audio Edition</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-mono text-[#D32F2F] font-bold w-8 text-right">{formatTime(currentTime)}</span>
                <input 
                  type="range" 
                  min="0" 
                  max={duration || 100} 
                  value={currentTime} 
                  onChange={handleSeek}
                  className="flex-1 h-1 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#D32F2F]"
                />
                <span className="text-[10px] font-mono text-gray-500 w-8">{formatTime(duration)}</span>
              </div>
            </div>

            <button 
              onClick={() => setShowSticky(false)}
              className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

          </div>
        </div>
      )}
    </>
  );
}
