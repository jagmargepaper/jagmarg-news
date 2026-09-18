import Link from 'next/link';
import { Home, Compass, TrendingUp, Search } from 'lucide-react';
import './globals.css';

export default function NotFound() {
  return (
    <html lang="hi">
      <body className="min-h-screen bg-[#F4F4F4] dark:bg-[#0A0A0A] flex flex-col font-sans text-gray-900 dark:text-gray-100">
        
        {/* Minimal Header */}
        <header className="w-full bg-white dark:bg-[#111] shadow-sm py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#D32F2F] rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              JN
            </div>
            <span className="font-black text-2xl tracking-tight">Jagmarg<span className="text-[#D32F2F]">.</span></span>
          </Link>
          <Link href="/search" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <Search className="w-5 h-5" />
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-2xl w-full">
            <div className="relative inline-block mb-6">
              <h1 className="text-[120px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 drop-shadow-sm">404</h1>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-4 bg-white/20 dark:bg-black/20 backdrop-blur-sm -rotate-6"></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
              Page Not Found / Khabar Nahi Mili
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
              Lagta hai ye khabar purani ho gayi hai ya link badal gaya hai. Lekin desh aur duniya ki nayi khabrein abhi bhi jari hain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <Link 
                href="/" 
                className="group flex items-center justify-center gap-3 px-6 py-4 bg-[#D32F2F] text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/20 active:scale-95"
              >
                <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                <span>Homepage Par Jayein</span>
              </Link>
              
              <Link 
                href="/" 
                className="group flex items-center justify-center gap-3 px-6 py-4 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-[#222] border border-gray-200 dark:border-gray-800 transition-all shadow-sm active:scale-95"
              >
                <TrendingUp className="w-5 h-5 text-[#D32F2F] group-hover:scale-110 transition-transform" />
                <span>Trending News</span>
              </Link>
            </div>
          </div>
        </main>
        
        {/* Footer Minimal */}
        <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
          © {new Date().getFullYear()} Jagmarg News. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
