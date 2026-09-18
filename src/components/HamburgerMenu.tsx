"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ArrowRight, User, Moon, Sun, BookOpen, Tv } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useSession } from 'next-auth/react';
import { useAuthModal } from '@/context/AuthModalContext';
import statesData from '@/lib/statesData.json';

const menuCategories = [
  "Home",
  "States",
  "National",
  "World",
  "Jagmarg Khas",
  "Religion",
  "Astrology",
  "Politics",
  "Crime",
  "Business",
  "Sports",
  "Entertainment",
  "Auto",
  "Lifestyle",
  "Web Stories"
];

const getTranslatedUI = (word: string, loc: string) => {
  const dict: Record<string, Record<string, string>> = {
    'Home': { en: 'Home', hi: 'होम', pa: 'ਹੋਮ' },
    'Web Stories': { en: 'Web Stories', hi: 'वेब स्टोरीज', pa: 'ਵੈੱਬ ਸਟੋਰੀਜ਼' },
    'National': { en: 'National', hi: 'राष्ट्रीय', pa: 'ਰਾਸ਼ਟਰੀ' },
    'World': { en: 'World', hi: 'दुनिया', pa: 'ਦੁਨੀਆ' },
    'States': { en: 'States', hi: 'राज्य', pa: 'ਰਾਜ' },
    'State / Cities': { en: 'State / Cities', hi: 'राज्य / शहर', pa: 'ਰਾਜ / ਸ਼ਹਿਰ' },
    'Haryana': { en: 'Haryana', hi: 'हरियाणा', pa: 'ਹਰਿਆਣਾ' },
    'Punjab': { en: 'Punjab', hi: 'पंजाब', pa: 'ਪੰਜਾਬ' },
    'Business': { en: 'Business', hi: 'बिज़नेस', pa: 'ਬਿਜ਼ਨਸ' },
    'Sports': { en: 'Sports', hi: 'खेल', pa: 'ਖੇਡਾਂ' },
    'Entertainment': { en: 'Entertainment', hi: 'मनोरंजन', pa: 'ਮਨੋਰੰਜਨ' },
    'Auto': { en: 'Auto', hi: 'ऑटो', pa: 'ਆਟੋ' },
    'Lifestyle': { en: 'Lifestyle', hi: 'लाइफस्टाइल', pa: 'ਲਾਈਫਸਟਾਈਲ' },
    'Explore Jagmarg': { en: 'Explore Jagmarg', hi: 'जगमार्ग एक्सप्लोर करें', pa: 'ਜਗਮਾਰਗ ਐਕਸਪਲੋਰ ਕਰੋ' }
  };
  return dict[word]?.[loc] || word;
};

const mockCategoryPreviews: Record<string, any[]> = {
  "Haryana": [
    { id: 1, title: "Haryana Assembly Elections: Dates announced", image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=300&h=200" },
    { id: 2, title: "Heavy rainfall alert in Rohtak and Hisar", image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=300&h=200" },
    { id: 3, title: "New IT park approved for Gurugram", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=300&h=200" },
    { id: 4, title: "Sports univ to open soon in Sonipat", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=300&h=200" }
  ],
  "Sports": [
    { id: 1, title: "India wins T20 series against Australia", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=300&h=200" },
    { id: 2, title: "Neeraj Chopra wins gold in Diamond League", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=300&h=200" }
  ]
};

import { useParams } from 'next/navigation';

const getCategoryLink = (cat: string, locale: string) => {
  if (cat === 'Home') return `/${locale}`;
  if (cat === 'Web Stories') return `/${locale}/web-stories`;
  if (cat === 'Jagmarg Khas') return `/${locale}/jagmarg-khas`;
  return `/${locale}/category/${cat.toLowerCase().replace(/\s+/g, '-')}`;
};

export default function HamburgerMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const [activeCategory, setActiveCategory] = useState("Haryana");
  const [expandedState, setExpandedState] = useState<string | null>(null);
  
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const { openLogin } = useAuthModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Default preview items if exact category not mapped
  const previewItems = mockCategoryPreviews[activeCategory] || mockCategoryPreviews["Haryana"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex bg-black/50 backdrop-blur-sm"
        >
          {/* Main Menu Panel (Slide in from Left) */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-[90%] max-w-[1200px] h-full bg-white flex flex-col md:flex-row shadow-2xl relative"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-50"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Left Pane: Categories List & Mobile Dashboard */}
            <div className="w-full md:w-1/3 border-r border-gray-100 dark:border-gray-800 h-full overflow-y-auto pt-16 pb-8 bg-gray-50 dark:bg-[#111111] flex flex-col">
              
              {/* MOBILE ONLY DASHBOARD (Hidden on Desktop) */}
              <div className="flex flex-col md:hidden px-6 mb-8 gap-4">
                {/* Profile / Auth Row */}
                <div className="flex items-center justify-between bg-white dark:bg-[#1A1A1A] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-[#222] rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="flex flex-col">
                      {isLoggedIn ? (
                        <>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">Jasbir Singh</span>
                          <span className="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Premium Member</span>
                        </>
                      ) : (
                        <>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">Guest User</span>
                          <button onClick={openLogin} className="text-xs text-[#D32F2F] font-bold text-left hover:underline">Sign In / Register</button>
                        </>
                      )}
                    </div>
                  </div>
                  {/* Theme Toggle */}
                  <button 
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    className="p-3 bg-gray-50 dark:bg-[#222] rounded-full hover:bg-gray-100 dark:hover:bg-[#333] transition-colors"
                  >
                    {mounted && resolvedTheme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
                  </button>
                </div>

                {/* E-Paper & Live TV Action Row */}
                <div className="grid grid-cols-2 gap-3">
                  <Link href={`/${locale}/epaper`} className="flex flex-col items-center justify-center py-4 bg-[#1A1A1A] text-white rounded-xl shadow-sm active:scale-95 transition-transform">
                    <BookOpen className="w-6 h-6 text-[#D32F2F] mb-1.5" />
                    <span className="text-xs font-black uppercase tracking-wider">E-Paper</span>
                  </Link>
                  <button className="flex flex-col items-center justify-center py-4 bg-[#D32F2F] text-white rounded-xl shadow-sm active:scale-95 transition-transform">
                    <Tv className="w-6 h-6 mb-1.5" />
                    <span className="text-xs font-black uppercase tracking-wider">Live TV</span>
                  </button>
                </div>
              </div>

              {/* Categories Section */}
              <h3 className="px-6 md:px-10 text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 md:mb-6 notranslate">
                {getTranslatedUI('Explore Jagmarg', locale)}
              </h3>
              
              <div className="flex flex-col md:hidden px-4 gap-1">
                {/* 1-COLUMN LIST FOR MOBILE CATEGORIES (Better UX) */}
                {menuCategories.map((cat) => (
                  <div key={cat} className="flex flex-col">
                    {cat === 'States' ? (
                      <>
                        <button
                          onClick={() => setActiveCategory(activeCategory === 'States' ? '' : 'States')}
                          className={`text-left px-4 py-3.5 rounded-xl text-[15px] font-black tracking-tight transition-colors flex items-center justify-between group notranslate border ${activeCategory === 'States' ? 'bg-white dark:bg-[#1A1A1A] text-[#D32F2F] border-gray-200 dark:border-gray-700 shadow-sm' : 'bg-transparent text-[#1A1A1A] dark:text-gray-300 border-transparent hover:bg-gray-100 dark:hover:bg-[#1A1A1A]'}`}
                        >
                          {getTranslatedUI('State / Cities', locale)}
                          <ChevronRight className={`w-5 h-5 text-[#D32F2F] transition-transform ${activeCategory === 'States' ? 'rotate-90' : ''}`} />
                        </button>
                        
                        {/* States Dropdown rendered right below the button */}
                        <AnimatePresence>
                          {activeCategory === 'States' && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-white dark:bg-[#1A1A1A] rounded-xl mt-2 mb-2 shadow-inner border border-gray-100 dark:border-gray-800"
                            >
                              {Object.entries(statesData).map(([state, districts]) => (
                                <div key={state} className="flex flex-col border-t border-gray-100 dark:border-gray-800 first:border-0">
                                  {/* State Toggle Button */}
                                  <button
                                    onClick={() => setExpandedState(expandedState === state ? null : state)}
                                    className="flex items-center justify-between px-5 py-3.5 w-full text-left"
                                  >
                                    <span className="text-[15px] font-black text-gray-800 dark:text-gray-200">{getTranslatedUI(state, locale)}</span>
                                    <ChevronRight className={`w-4 h-4 text-[#D32F2F] transition-transform ${expandedState === state ? 'rotate-90' : ''}`} />
                                  </button>

                                  {/* Cities Dropdown */}
                                  <AnimatePresence>
                                    {expandedState === state && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-gray-50 dark:bg-[#111111]"
                                      >
                                        <div className="px-5 py-3 flex flex-col gap-3 border-t border-gray-100 dark:border-gray-800">
                                          <Link
                                            href={`/${locale}/india/${state.toLowerCase().replace(/\s+/g, '-')}`}
                                            onClick={onClose}
                                            className="text-[14px] font-bold text-[#D32F2F]"
                                          >
                                            {locale === 'en' ? `All ${state} News` : `${getTranslatedUI(state, locale)} की सभी खबरें`}
                                          </Link>
                                          <div className="grid grid-cols-2 gap-3 mt-1">
                                            {(districts as any).map((dist: any) => (
                                              <Link
                                                key={dist.slug}
                                                href={`/${locale}/india/${state.toLowerCase().replace(/\s+/g, '-')}/${dist.slug}`}
                                                onClick={onClose}
                                                className="text-[13px] font-bold text-gray-500 dark:text-gray-400 hover:text-[#D32F2F]"
                                              >
                                                {dist.name}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={getCategoryLink(cat, locale)}
                        onClick={onClose}
                        className="text-left px-4 py-3.5 rounded-xl text-[15px] font-black tracking-tight transition-colors flex items-center justify-between group notranslate border bg-transparent text-[#1A1A1A] dark:text-gray-300 border-transparent hover:bg-gray-100 dark:hover:bg-[#1A1A1A]"
                      >
                        {getTranslatedUI(cat, locale)}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* ORIGINAL LIST FOR DESKTOP */}
              <div className="hidden md:flex flex-col">
                {menuCategories.map((cat) => (
                  <div key={cat} className="flex flex-col">
                    <button
                      onMouseEnter={() => cat !== 'States' && setActiveCategory(cat)}
                      onClick={() => cat === 'States' ? setActiveCategory(activeCategory === 'States' ? '' : 'States') : setActiveCategory(cat)}
                      className={`text-left px-10 py-4 text-2xl font-black tracking-tight transition-colors flex items-center justify-between group notranslate ${activeCategory === cat ? 'bg-white text-[#D32F2F] shadow-sm' : 'text-[#1A1A1A] hover:bg-white'}`}
                    >
                      {cat === 'States' ? getTranslatedUI('State / Cities', locale) : getTranslatedUI(cat, locale)}
                      {cat === 'States' ? (
                        <ChevronRight className={`w-5 h-5 text-[#D32F2F] transition-transform ${activeCategory === 'States' ? 'rotate-90' : ''}`} />
                      ) : (
                        activeCategory === cat && <ChevronRight className="w-5 h-5 text-[#D32F2F]" />
                      )}
                    </button>
                    <AnimatePresence>
                      {cat === 'States' && activeCategory === 'States' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-gray-50"
                        >
                          {Object.entries(statesData).map(([state, districts]) => (
                            <div key={state} className="flex flex-col pl-14 pr-10 border-t border-gray-200 py-3">
                              <Link href={`/${locale}/india/${state.toLowerCase().replace(/\s+/g, '-')}`} onClick={onClose} className="text-lg font-bold text-gray-800 hover:text-[#D32F2F] mb-2">{getTranslatedUI(state, locale)}</Link>
                              <div className="grid grid-cols-2 gap-2 mt-1">
                                {(districts as any).map((dist: any) => (
                                  <Link key={dist.slug} href={`/${locale}/india/${state.toLowerCase().replace(/\s+/g, '-')}/${dist.slug}`} onClick={onClose} className="text-sm text-gray-600 hover:text-[#D32F2F]">{dist.name}</Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Pane: Dynamic Content Preview */}
            <div className="hidden md:block w-2/3 h-full overflow-y-auto p-16 bg-white">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-[#1A1A1A] notranslate">{getTranslatedUI(activeCategory, locale)}</h2>
                <Link 
                  href={
                    activeCategory === 'Haryana' || activeCategory === 'Punjab' 
                    ? `/${locale}/india/${activeCategory.replace(/\s+/g, '-').toLowerCase()}`
                    : `/${locale}/india/${
                        activeCategory === 'Sports' ? 'khel' : 
                        activeCategory.toLowerCase().replace(/\s+/g, '-')
                      }`
                  } 
                  onClick={onClose}
                  className="flex items-center text-xs font-black uppercase tracking-widest text-[#D32F2F] hover:underline"
                >
                  View All <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {previewItems.map((article) => (
                  <Link 
                    key={article.id} 
                    href="/article" 
                    onClick={onClose}
                    className="group flex flex-col gap-3"
                  >
                    <div className="w-full aspect-[3/2] overflow-hidden bg-gray-100 rounded-sm">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#D32F2F] transition-colors leading-snug">
                      {article.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

          </motion.div>
          
          {/* Clickable Backdrop to close */}
          <div className="flex-1" onClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
