'use client';

import { useEffect, useState } from 'react';
import { usePathname, useParams } from 'next/navigation';
import Script from 'next/script';
import { ChevronDown, Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params?.locale || 'en';
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    // Read the current language from the googtrans cookie on load
    const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
    
    if (match && match[2]) {
      // The cookie format is /auto/en or /auto/hi
      const lang = match[2].split('/')[2]; 
      if (lang) {
        setCurrentLang(lang);
      }
    } else {
      // No translation cookie found. Check if it's their very first visit
      const hasVisited = localStorage.getItem('jagmarg_visited');
      
      if (!hasVisited) {
        // DEFAULT TO HINDI ON FIRST VISIT (Avoid bot loop)
        const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
        if (!isBot) {
          localStorage.setItem('jagmarg_visited', 'true');
          document.cookie = `googtrans=/auto/hi; path=/; domain=${window.location.hostname}`;
          document.cookie = `googtrans=/auto/hi; path=/;`;
          window.location.reload();
          return;
        } else {
          setCurrentLang('hi');
        }
      }
    }
  }, []);

  const switchLanguage = (lang: string) => {
    localStorage.setItem('jagmarg_visited', 'true');
    
    if (lang === 'en') {
      // If original content is Hindi, we must force translation TO English
      document.cookie = `googtrans=/auto/en; path=/; domain=${window.location.hostname}`;
      document.cookie = `googtrans=/auto/en; path=/;`;
    } else {
      // Set the cookie for translation (Format: /auto/target-language)
      document.cookie = `googtrans=/auto/${lang}; path=/; domain=${window.location.hostname}`;
      document.cookie = `googtrans=/auto/${lang}; path=/;`; 
    }
    
    // Navigate to the new locale URL
    const newPathname = pathname.replace(`/${currentLocale}`, `/${lang}`);
    window.location.href = newPathname;
  };

  return (
    <>
      {/* 1. Load Google Translate Engine Silently */}
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'hi',
              autoDisplay: false
            }, 'google_translate_element');
          }
        `}
      </Script>
      <Script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />

      {/* 2. Hidden Google Div (Required for engine to work, but we never show it) */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      {/* 3. Global CSS to completely KILL the Google Top Banner, Widgets, and Popups */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Force body to stay at top, ignoring Google's push */
        body { top: 0 !important; position: static !important; }
        
        /* Hide the top translation banner completely */
        .goog-te-banner-frame { display: none !important; }
        .skiptranslate iframe { display: none !important; }
        
        /* Hide the new floating widget (blue circle G) completely */
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf { display: none !important; }
        .VIpgJd-ZVi9od-ORHb-OEVmcd { display: none !important; }
        .goog-te-gadget-simple { display: none !important; }
        .goog-te-gadget { display: none !important; color: transparent !important; }
        div.skiptranslate { display: none !important; }
        
        /* Hide the tooltip popups when hovering over translated text */
        #goog-gt-tt { display: none !important; }
        .goog-te-balloon-frame { display: none !important; }
        
        /* Remove the weird highlight colors Google adds to text */
        .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
      `}} />

      {/* 4. Our 100% Custom, Premium React Dropdown UI */}
      <div className="relative group flex items-center h-full notranslate">
        <button className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-0.5 rounded-sm transition-colors border border-gray-700 h-[24px]">
          <Globe className="w-3 h-3 text-[#D32F2F]" />
          <span className="text-[10px] font-black uppercase tracking-widest">
            {currentLang === 'hi' ? 'हिन्दी' : currentLang === 'pa' ? 'ਪੰਜਾਬੀ' : 'English'}
          </span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </button>

        {/* Dropdown Menu (Appears on Hover) */}
        <div className="absolute top-[24px] right-0 w-32 bg-[#1A1A1A] border border-gray-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[90]">
          <div className="flex flex-col py-1">
            <button 
              onClick={() => switchLanguage('en')}
              className={`text-left px-4 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-[#D32F2F] hover:text-white transition-colors ${currentLang === 'en' ? 'text-white bg-gray-800' : 'text-gray-400'}`}
            >
              English
            </button>
            <button 
              onClick={() => switchLanguage('hi')}
              className={`text-left px-4 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-[#D32F2F] hover:text-white transition-colors ${currentLang === 'hi' ? 'text-white bg-gray-800' : 'text-gray-400'}`}
            >
              हिन्दी
            </button>
            <button 
              onClick={() => switchLanguage('pa')}
              className={`text-left px-4 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-[#D32F2F] hover:text-white transition-colors ${currentLang === 'pa' ? 'text-white bg-gray-800' : 'text-gray-400'}`}
            >
              ਪੰਜਾਬੀ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
