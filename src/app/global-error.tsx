'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RotateCcw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Jagmarg Error Boundary caught:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-[#F4F4F4] dark:bg-[#0A0A0A] flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#D32F2F]"></div>

            <h1 className="text-6xl font-black text-gray-200 dark:text-gray-800 dark:text-gray-200 tracking-tighter mb-4">500</h1>
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] dark:text-white mb-4 uppercase tracking-widest">
              Server Me Kuch Gadbad Hai
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Technical samasya ke karan ye page load nahi ho paya. Humari tech team isay theek kar rahi hai.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => reset()}
                className="w-full sm:w-auto px-8 py-4 bg-[#D32F2F] text-white font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Dobaara Try Karein
              </button>
              <Link 
                href="/" 
                className="w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 dark:text-white font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Homepage
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
