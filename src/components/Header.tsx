'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Search, Menu, Tv, ChevronDown, User, BookOpen, Moon, Sun, Calendar, MessageCircle, Sparkles, MapPin, ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import SearchOverlay from '@/components/SearchOverlay';
import HamburgerMenu from '@/components/HamburgerMenu';
import AdSlot from '@/components/AdSlot';
import BreakingNews from '@/components/BreakingNews';
import { useAuthModal } from '@/context/AuthModalContext';
import { useSession, signOut } from 'next-auth/react';
import { useTheme } from 'next-themes';

// --- DATA STRUCTURES (Mega Menu & Context) ---
const editions = ['National', 'Haryana', 'Punjab', 'Himachal'];

const stateZones: Record<string, Record<string, string[]>> = {
  'Haryana': {
    'North': ['Panchkula', 'Ambala', 'Yamunanagar', 'Kurukshetra', 'Kaithal', 'Karnal', 'Panipat', 'Sonipat'],
    'West': ['Sirsa', 'Fatehabad', 'Hisar', 'Jind'],
    'South': ['Rohtak', 'Jhajjar', 'Rewari', 'Mahendragarh', 'Gurugram', 'Faridabad', 'Palwal', 'Nuh', 'Bhiwani', 'Charkhi Dadri']
  },
  'Punjab': {
    'Majha': ['Amritsar', 'Tarn Taran', 'Gurdaspur', 'Pathankot'],
    'Doaba': ['Jalandhar', 'Hoshiarpur', 'Kapurthala', 'Nawanshahr'],
    'Malwa': ['Ludhiana', 'Patiala', 'Bathinda', 'Mohali', 'Sangrur', 'Moga', 'Firozpur', 'Faridkot', 'Muktsar', 'Mansa', 'Barnala', 'Fazilka', 'Rupnagar', 'Fatehgarh Sahib']
  },
  'Himachal': {
    'Shimla Zone': ['Shimla', 'Solan', 'Sirmaur', 'Kinnaur'],
    'Kangra Zone': ['Kangra', 'Chamba', 'Una', 'Hamirpur'],
    'Mandi Zone': ['Mandi', 'Kullu', 'Bilaspur', 'Lahaul & Spiti']
  }
};

import statesData from '@/lib/statesData.json';

const mainCategories = [
  { name: 'National', slug: 'national' },
  { name: 'States', slug: 'states', isDropdown: true },
  { name: 'Jagmarg Khas', slug: 'jagamarga-khasa' },
  { name: 'Religion', slug: 'religion' },
  { name: 'Astrology', slug: 'astrology' },
  { name: 'Politics', slug: 'politics' },
  { name: 'Entertainment', slug: 'entertainment' },
  { name: 'Business', slug: 'business' },
  { name: 'Sports', slug: 'games' },
  { name: 'Lifestyle', slug: 'lifestyle' }
];

import TopGadgets from './TopGadgets';

const getTranslatedUI = (word: string, loc: string) => {
  const dict: Record<string, Record<string, string>> = {
    'Home': { en: 'Home', hi: 'होम', pa: 'ਹੋਮ' },
    'Web Stories': { en: 'Web Stories', hi: 'वेब स्टोरीज', pa: 'ਵੈੱਬ ਸਟੋਰੀਜ਼' },
    'E-Paper': { en: 'E-Paper', hi: 'ई-पेपर', pa: 'ਈ-ਪੇਪਰ' },
    'Live TV': { en: 'Live TV', hi: 'लाइव टीवी', pa: 'ਲਾਈਵ ਟੀਵੀ' },
    'State / Cities': { en: 'State / Cities', hi: 'राज्य / शहर', pa: 'ਰਾਜ / ਸ਼ਹਿਰ' },
    'National': { en: 'National', hi: 'राष्ट्रीय', pa: 'ਰਾਸ਼ਟਰੀ' },
    'States': { en: 'States', hi: 'राज्य', pa: 'ਰਾਜ' },
    'Jagmarg Khas': { en: 'Jagmarg Khas', hi: 'जगमार्ग खास', pa: 'ਜਗਮਾਰਗ ਖਾਸ' },
    'Religion': { en: 'Religion', hi: 'धर्म', pa: 'ਧਰਮ' },
    'Astrology': { en: 'Astrology', hi: 'ज्योतिष', pa: 'ਜੋਤਿਸ਼' },
    'Politics': { en: 'Politics', hi: 'राजनीति', pa: 'ਰਾਜਨੀਤੀ' },
    'Crime': { en: 'Crime', hi: 'अपराध', pa: 'ਅਪਰਾਧ' },
    'Business': { en: 'Business', hi: 'व्यापार', pa: 'ਵਪਾਰ' },
    'Sports': { en: 'Sports', hi: 'खेल', pa: 'ਖੇਡਾਂ' },
    'Entertainment': { en: 'Entertainment', hi: 'मनोरंजन', pa: 'ਮਨੋਰੰਜਨ' },
    'Lifestyle': { en: 'Lifestyle', hi: 'लाइफस्टाइल', pa: 'ਲਾਈਫਸਟਾਈਲ' },
    'Education': { en: 'Education', hi: 'शिक्षा', pa: 'ਸਿੱਖਿਆ' },
    'World': { en: 'World', hi: 'दुनिया', pa: 'ਦੁਨੀਆ' },
    'Join Channel': { en: 'Join Channel', hi: 'चैनल से जुड़ें', pa: 'ਚੈਨਲ ਨਾਲ ਜੁੜੋ' },
    'Sign In': { en: 'Sign In', hi: 'साइन इन', pa: 'ਸਾਈਨ ਇਨ' },
    'Sign Out': { en: 'Sign Out', hi: 'साइन आउट', pa: 'ਸਾਈਨ ਆਉਟ' },
    'My Account': { en: 'My Account', hi: 'मेरा खाता', pa: 'ਮੇਰਾ ਖਾਤਾ' },
    'Haryana': { en: 'Haryana', hi: 'हरियाणा', pa: 'ਹਰਿਆਣਾ' },
    'Punjab': { en: 'Punjab', hi: 'पंजाब', pa: 'ਪੰਜਾਬ' },
    'Himachal': { en: 'Himachal', hi: 'हिमाचल', pa: 'ਹਿਮਾਚਲ' }
  };
  return dict[word]?.[loc] || word;
};

const allStatesZones: Record<string, string[]> = {
  'North India': ['Haryana', 'Punjab', 'Himachal', 'Uttarakhand', 'Delhi', 'J&K', 'Chandigarh'],
  'Central & East': ['Uttar Pradesh', 'Madhya Pradesh', 'Bihar', 'Jharkhand', 'Chhattisgarh', 'West Bengal'],
  'West India': ['Gujarat', 'Maharashtra', 'Rajasthan', 'Goa'],
  'South & NE': ['Karnataka', 'Kerala', 'Tamil Nadu', 'Andhra Pradesh', 'Assam', 'Manipur']
};

import { useParams } from 'next/navigation';

const baseCategories = ['Jagmarg Khas', 'Religion', 'Astrology', 'Politics', 'Crime', 'Business', 'Sports', 'Entertainment', 'Lifestyle'];

export default function Header() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  // 1. SMART AUTO-DETECT STATE (Starts at National, user can switch or click Home to reset)
  const [activeEdition, setActiveEdition] = useState('National'); 
  const [isEditionDropdownOpen, setIsEditionDropdownOpen] = useState(false);
  const [isStateMenuHovered, setIsStateMenuHovered] = useState(false);
  const [isAllStatesMenuHovered, setIsAllStatesMenuHovered] = useState(false);
  const [activeHoverState, setActiveHoverState] = useState('Haryana');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [currentDate, setCurrentDate] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Auth state
  const { openLogin } = useAuthModal();
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    await signOut();
    window.location.reload();
  };

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 150);
  });

  // Load Edition from localStorage on mount
  useEffect(() => {
    const savedEdition = localStorage.getItem('jagmarg_edition');
    if (savedEdition) setActiveEdition(savedEdition);
  }, []);

  // Save Edition to localStorage whenever it changes
  const handleEditionChange = (edition: string) => {
    setActiveEdition(edition);
    localStorage.setItem('jagmarg_edition', edition);
  };

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  // Contextual URL Generator
  const getCategoryLink = (cat: string) => {
    const map: Record<string, string> = {
      'Politics': 'politics',
      'Crime': 'crime',
      'Business': 'business',
      'Sports': 'khel', // The slug for sports is 'khel' in WP
      'Entertainment': 'entertainment',
      'Lifestyle': 'lifestyle',
      'Jagmarg Khas': 'jagamarga-khasa',
      'Religion': 'religion',
      'Astrology': 'astrology'
    };
    return `/${locale}/india/${map[cat] || cat.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const getStateLink = (stateName: string) => {
    return `/${locale}/india/${stateName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <>
      <div className={`w-full flex flex-col relative z-50 bg-white dark:bg-[#111111] ${locale === 'hi' ? 'nav-hindi-mode' : ''}`}>
        
        {/* 1. TOP MICRO-BAR */}
        <div className="w-full bg-[#1A1A1A] text-gray-300 py-1.5 border-b border-gray-800 hidden md:block">
          <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
            
            {/* Left: Date & WhatsApp */}
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 text-[#D32F2F]" />
                <span>{currentDate || 'Loading...'}</span>
              </div>
              <div className="w-px h-3 bg-gray-700"></div>
              <a 
                href="https://whatsapp.com/channel/jagmarg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#25D366] text-white px-2 py-0.5 rounded-sm hover:bg-[#1DA851] transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.062-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span>Join Channel</span>
            </a>
            </div>

            {/* Right: Utils & Translation */}
            <div className="flex items-center gap-5">
              {/* Text Size Control */}
              <div className="flex items-center gap-1.5 text-gray-400">
                <span 
                  onClick={() => document.documentElement.style.fontSize = '90%'} 
                  className="cursor-pointer hover:text-white transition-colors text-[9px]"
                  title="Decrease Font Size"
                >A-</span>
                <span 
                  onClick={() => document.documentElement.style.fontSize = '100%'} 
                  className="cursor-pointer hover:text-white transition-colors text-[10px]"
                  title="Default Font Size"
                >A</span>
                <span 
                  onClick={() => document.documentElement.style.fontSize = '110%'} 
                  className="cursor-pointer hover:text-white transition-colors text-[11px]"
                  title="Increase Font Size"
                >A+</span>
              </div>
              <div className="w-px h-3 bg-gray-700"></div>
              
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hover:text-white transition-colors flex items-center gap-1"
                aria-label="Toggle Dark Mode"
              >
                {mounted && theme === 'dark' ? (
                  <Sun className="w-3 h-3 text-yellow-400" />
                ) : (
                  <Moon className="w-3 h-3" />
                )}
              </button>
              <div className="w-px h-3 bg-gray-700"></div>

              {/* Language Switcher */}
              <LanguageSwitcher />
              <div className="w-px h-3 bg-gray-700"></div>
              
              <div className="flex items-center gap-4">
                {isLoggedIn ? (
                  <div className="flex items-center gap-4">
                    {(session?.user as any)?.isPremium && (
                      <button 
                        onClick={() => alert('You are a Premium Member! Check your dashboard for details.')}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase transition-all bg-yellow-400 text-black dark:text-white hover:bg-yellow-300"
                      >
                        👑 Premium
                      </button>
                    )}
                    <Link href={`/${locale}/dashboard`} className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors">
                      {session?.user?.image ? (
                        <img src={session.user.image} alt="Avatar" className="w-5 h-5 rounded-full border border-gray-600" />
                      ) : (
                        <User className="w-3 h-3" />
                      )}
                      <span className="text-xs font-bold">{session?.user?.name?.split(' ')[0] || 'Account'}</span>
                    </Link>
                    <button onClick={handleLogout} className="text-xs text-gray-400 hover:text-white">
                      Sign Out
                    </button>
                    {!(session?.user as any)?.isPremium && (
                      <Link href={`/${locale}/subscribe`} className="hidden sm:flex items-center gap-2 bg-[#D32F2F] text-white px-3 py-1 rounded-sm text-xs font-bold hover:bg-[#b71c1c] transition-colors ml-2 shadow-sm hover:shadow-md">
                        <Shield className="w-3 h-3" />
                        Upgrade
                      </Link>
                    )}
                  </div>
                ) : (
                  <button onClick={openLogin} className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors">
                    <User className="w-3 h-3" />
                    <span className="text-xs font-bold uppercase tracking-wider">Sign In / Sign Up</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2. MAIN BRANDING ROW (Logo Centered) */}
        <div className="w-full bg-white dark:bg-[#111111] border-b border-gray-200 dark:border-gray-800 hidden md:block">
          <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-center">
            
            {/* Center Logo */}
            <div className="flex justify-center">
              <Link href={`/${locale}`} onClick={() => handleEditionChange('National')}>
                  <Image 
                    src="/logo.png" 
                    alt="Jagmarg News Logo" 
                    width={400}
                    height={209}
                    priority
                    className="h-24 md:h-28 lg:h-32 w-auto object-contain cursor-pointer hover:opacity-95 transition-all dark:bg-white/90 dark:p-1.5 dark:rounded-lg" 
                  />
              </Link>
            </div>

          </div>
        </div>

      </div> {/* END NON-STICKY TOP SECTION */}

      {/* STICKY BOTTOM SECTION (Nav + Gadgets + Breaking News) */}
      <div className="w-full bg-white dark:bg-[#0A0A0A] border-b-2 border-[#1A1A1A] dark:border-gray-800 sticky top-0 z-[60] flex flex-col">
        
        {/* 3. CONTEXTUAL NAVIGATION BAR */}
        <div className="w-full">
          <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-between">
            
            <nav className="hidden lg:flex items-center h-full flex-1 min-w-0">
              
              {/* Hamburger & Search */}
              <button onClick={() => setIsMenuOpen(true)} className="h-full flex items-center px-1.5 xl:px-2.5 text-[#1A1A1A] hover:text-[#D32F2F] hover:bg-gray-50 dark:bg-gray-900 transition-colors border-r border-gray-200">
                <Menu className="w-5 h-5" />
              </button>
              <button onClick={() => setIsSearchOpen(true)} className="h-full flex items-center px-1.5 xl:px-2.5 text-[#1A1A1A] hover:text-[#D32F2F] hover:bg-gray-50 dark:bg-gray-900 transition-colors border-r border-gray-200">
                <Search className="w-4 h-4" />
              </button>

              {/* 1. HOME BUTTON (Always goes to Main Page & Resets Edition) */}
              <Link 
                href={`/${locale}`} 
                onClick={() => handleEditionChange('National')}
                className="h-full flex items-center px-1.5 xl:px-2 text-[10px] xl:text-[11px] font-black uppercase text-[#1A1A1A] hover:text-[#D32F2F] hover:bg-gray-50 dark:bg-gray-900 transition-colors border-r border-gray-200 notranslate whitespace-nowrap flex-shrink-0"
              >
                {getTranslatedUI('Home', locale)}
              </Link>

              {/* 2. MORPHING STATE / MEGA MENU */}
              {activeEdition !== 'National' && stateZones[activeEdition] ? (
                <div 
                  className="h-full group relative flex-shrink-0"
                  onMouseEnter={() => setIsStateMenuHovered(true)}
                  onMouseLeave={() => setIsStateMenuHovered(false)}
                >
                  <Link href={`/${locale}/state/${activeEdition.toLowerCase()}`} className="h-full flex items-center px-1.5 xl:px-2 bg-[#D32F2F] text-white text-[10px] xl:text-[11px] font-black uppercase hover:bg-[#B71C1C] transition-colors border-r border-[#B71C1C] notranslate whitespace-nowrap">
                    {getTranslatedUI(activeEdition, locale)}
                    <ChevronDown className="w-4 h-4 ml-1 opacity-80" />
                  </Link>
                  
                  {/* DISTRICT MEGA-MENU (ZONE WISE) */}
                  <AnimatePresence>
                    {isStateMenuHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-0 w-[90vw] max-w-[600px] bg-white border border-gray-200 shadow-2xl z-50 p-6 grid grid-cols-2 gap-8"
                      >
                        {Object.entries(stateZones[activeEdition]).map(([zone, districts]) => (
                          <div key={zone}>
                            <h4 className="text-xs font-black uppercase tracking-wider text-[#D32F2F] mb-3 border-b border-gray-100 pb-2 notranslate">{zone}</h4>
                            <div className="grid grid-cols-2 gap-y-2">
                              {districts.map(dist => (
                                <Link 
                                  key={dist} 
                                  href={`/${locale}/state/${dist.toLowerCase()}`}
                                  className="text-[11px] xl:text-[12px] font-bold text-gray-600 dark:text-gray-400 hover:text-[#D32F2F] hover:translate-x-1 transition-all notranslate whitespace-nowrap"
                                >
                                  {dist}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div 
                  className="h-full group relative flex-shrink-0"
                  onMouseEnter={() => setIsAllStatesMenuHovered(true)}
                  onMouseLeave={() => setIsAllStatesMenuHovered(false)}
                >
                  <div className="h-full flex items-center px-1.5 xl:px-2 text-[10px] xl:text-[11px] font-black uppercase text-[#1A1A1A] hover:text-[#D32F2F] transition-colors border-r border-gray-200 cursor-pointer notranslate whitespace-nowrap">
                    {getTranslatedUI('State / Cities', locale)} <ChevronDown className="w-4 h-4 ml-1 opacity-80" />
                  </div>

                  {/* ALL STATES MEGA-MENU */}
                  <AnimatePresence>
                    {isAllStatesMenuHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-0 w-[600px] bg-white border border-gray-200 shadow-2xl z-50 flex max-h-[70vh] overflow-hidden"
                      >
                        {/* LEFT COLUMN: States */}
                        <div className="w-1/3 border-r border-gray-100 bg-gray-50 dark:bg-gray-900 flex flex-col py-4 overflow-y-auto">
                          <div className="px-5 mb-3 text-xs font-black uppercase text-gray-400">States</div>
                          {Object.keys(statesData).map((state) => (
                            <div 
                              key={state}
                              onMouseEnter={() => setActiveHoverState(state)}
                              className={`px-5 py-2.5 cursor-pointer flex items-center justify-between transition-colors ${
                                activeHoverState === state 
                                ? 'bg-white border-l-4 border-[#D32F2F] text-[#D32F2F] font-bold shadow-sm' 
                                : 'border-l-4 border-transparent text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100'
                              }`}
                            >
                              <Link href={getStateLink(state)} onClick={() => setIsAllStatesMenuHovered(false)}>
                                {getTranslatedUI(state, locale)}
                              </Link>
                              <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />
                            </div>
                          ))}
                        </div>

                        {/* RIGHT COLUMN: Districts */}
                        <div className="w-2/3 p-6 bg-white overflow-y-auto">
                          <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                            <h4 className="text-sm font-black uppercase text-[#1A1A1A]">
                              {getTranslatedUI(activeHoverState, locale)}
                            </h4>
                            <Link 
                              href={getStateLink(activeHoverState)}
                              onClick={() => setIsAllStatesMenuHovered(false)}
                              className="text-xs font-bold text-[#D32F2F] hover:underline"
                            >
                              सभी देखें &rarr;
                            </Link>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                            {(statesData as any)[activeHoverState]?.map((dist: any) => (
                              <Link 
                                key={dist.slug} 
                                href={`/${locale}/india/${activeHoverState.toLowerCase().replace(/\s+/g, '-')}/${dist.slug}`}
                                onClick={() => setIsAllStatesMenuHovered(false)}
                                className="text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:text-[#D32F2F] hover:translate-x-1 transition-transform whitespace-nowrap flex items-center gap-1.5"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#D32F2F]" />
                                {dist.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* SCROLLABLE CATEGORIES CONTAINER */}
              <div className="flex items-center h-full flex-1 overflow-x-auto hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {/* 3. NATIONAL (Always next to State) */}
                <Link 
                  href={`/${locale}/india/national`} 
                  className="h-full flex items-center px-1.5 lg:px-2 text-[10px] lg:text-[11px] font-black uppercase text-[#1A1A1A] hover:text-[#D32F2F] hover:bg-gray-50 dark:bg-gray-900 transition-colors border-r border-gray-200 notranslate whitespace-nowrap flex-shrink-0"
                >
                  {getTranslatedUI('National', locale)}
                </Link>

                {/* 4. Dynamic Category Links */}
                {baseCategories.map((cat) => (
                  <Link 
                    key={cat} 
                    href={getCategoryLink(cat)}
                    className="h-full flex items-center px-1.5 lg:px-2 text-[10px] lg:text-[11px] font-black uppercase text-[#1A1A1A] hover:text-[#D32F2F] hover:bg-gray-50 dark:bg-gray-900 transition-colors border-r border-gray-200 last:border-r-0 notranslate whitespace-nowrap flex-shrink-0"
                  >
                    {getTranslatedUI(cat, locale)}
                  </Link>
                ))}

                <Link href={`/${locale}/web-stories`} className="h-full flex items-center px-1.5 lg:px-2 text-[10px] lg:text-[11px] font-black uppercase text-[#1A1A1A] hover:text-[#D32F2F] hover:bg-gray-50 dark:bg-gray-900 transition-colors notranslate whitespace-nowrap flex-shrink-0">
                  {getTranslatedUI('Web Stories', locale)}
                  <Sparkles className="w-3 h-3 ml-1 text-[#D32F2F] animate-pulse" />
                </Link>
              </div>
            </nav>
            
            <div className="hidden lg:flex items-center gap-2 h-full ml-auto shrink-0 pl-2">
              <Link href={`/${locale}/epaper`} className="bg-[#1A1A1A] text-white px-3 h-8 flex items-center gap-1.5 text-[10px] font-black uppercase hover:bg-[#333] transition-colors rounded-sm shadow-md hover:shadow-lg notranslate whitespace-nowrap">
                <BookOpen className="w-4 h-4 text-[#D32F2F]" />
                {getTranslatedUI('E-Paper', locale)}
              </Link>
              <button className="bg-[#D32F2F] text-white px-3 h-8 flex items-center gap-1.5 text-[10px] font-black uppercase hover:bg-[#B71C1C] transition-colors rounded-sm shadow-md hover:shadow-lg notranslate whitespace-nowrap">
                <Tv className="w-4 h-4" />
                {getTranslatedUI('Live TV', locale)}
              </button>
            </div>
            
            {/* TABLET / ZOOM FALLBACK NAV (Shows on md to lg screens where main nav doesn't fit) */}
            <div className="hidden md:flex lg:hidden items-center justify-between w-full h-full">
              <div className="flex items-center gap-1">
                <button onClick={() => setIsMenuOpen(true)} className="p-2 text-[#1A1A1A] dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
                <button onClick={() => setIsSearchOpen(true)} className="p-2 text-[#1A1A1A] dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* NEW APP-STYLE MOBILE HEADER (Strictly < md screens) */}
            <div className="flex md:hidden items-center justify-between w-full h-full">
              {/* Left: Hamburger & Search */}
              <div className="flex items-center gap-1 -ml-2">
                <button onClick={() => setIsMenuOpen(true)} className="p-2 text-[#1A1A1A] dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
                <button onClick={() => setIsSearchOpen(true)} className="p-2 text-[#1A1A1A] dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              {/* Center: Compact Logo */}
              <Link href={`/${locale}`} onClick={() => handleEditionChange('National')} className="flex-1 flex justify-center">
                <Image 
                  src="/logo.png" 
                  alt="Jagmarg News Logo" 
                  width={200}
                  height={104}
                  priority
                  className="h-10 sm:h-12 w-auto object-contain transition-all dark:bg-white/90 dark:p-1 dark:rounded" 
                />
              </Link>

              {/* Right: Dark Mode & User/Auth */}
              <div className="flex items-center gap-1 -mr-2">
                <button 
                  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                  className="p-2 text-gray-700 dark:text-gray-300 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  {mounted && resolvedTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                
                {isLoggedIn ? (
                  <Link href={`/${locale}/dashboard`} className="p-2 text-[#1A1A1A] dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative">
                    <User className="w-5 h-5" />
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full border border-white dark:border-black" />
                  </Link>
                ) : (
                  <button onClick={() => openLogin()} className="p-2 text-[#1A1A1A] dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <User className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* MOBILE SCROLLABLE CATEGORY PILLS (Strictly < md screens) */}
          <div className="flex md:hidden relative border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0A0A0A] overflow-hidden">
            <div className="flex overflow-x-auto whitespace-nowrap hide-scrollbar items-center py-2.5 px-3 gap-2 w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <Link 
                href={`/${locale}`}
                onClick={() => handleEditionChange('National')}
                className="inline-flex items-center justify-center px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-white bg-[#D32F2F] rounded-full shadow-sm hover:bg-[#b71c1c] transition-colors notranslate shrink-0"
              >
                {getTranslatedUI('Home', locale)}
              </Link>
              
              {baseCategories.map(cat => (
                <Link 
                  key={cat} 
                  href={getCategoryLink(cat)}
                  className="inline-flex items-center justify-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors notranslate shrink-0"
                >
                  {getTranslatedUI(cat, locale)}
                </Link>
              ))}
              <Link 
                href={`/${locale}/web-stories`} 
                className="inline-flex items-center justify-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors gap-1.5 notranslate shrink-0"
              >
                {getTranslatedUI('Web Stories', locale)}
                <Sparkles className="w-3 h-3 text-[#D32F2F] animate-pulse" />
              </Link>
              {/* Extra padding at the end to ensure the last item is fully visible past the gradient */}
              <div className="w-6 shrink-0" />
            </div>
            {/* Swipe Hint Gradient */}
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white dark:from-[#0A0A0A] to-transparent pointer-events-none" />
          </div>

          {/* Sticky Gadgets & Breaking News */}
          <TopGadgets />
          <BreakingNews />
        </div>
      </div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
