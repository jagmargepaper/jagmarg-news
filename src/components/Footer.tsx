'use client';

import Link from 'next/link';
import { Mail, Smartphone, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function Footer() {
  const params = useParams();
  const locale = (params?.locale as string) || 'hi';

  return (
    <>
      {/* PRE-FOOTER (App Promo) - Dark */}
      <div className="w-full bg-[#111111] py-12 mt-12 border-t-4 border-[#D32F2F]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col gap-2 mb-6 md:mb-0">
            <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-widest">Get The Jagmarg App</h3>
            <p className="text-gray-400 text-sm">Read the e-paper, watch live TV, and get real-time alerts on your phone.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-[#D32F2F] hover:bg-red-700 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest transition-colors rounded-sm">
              <Smartphone className="w-4 h-4" /> App Store
            </button>
            <button className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-black text-white px-6 py-3 font-bold text-xs uppercase tracking-widest transition-colors border border-gray-800 rounded-sm">
              <Smartphone className="w-4 h-4" /> Play Store
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER - White */}
      <footer className="w-full bg-white text-gray-600 pt-16 pb-8 border-t border-gray-200 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* MIDDLE SECTION: Logo & 4-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            
            {/* Brand Column (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Link href={`/${locale}`} className="inline-block">
                <img 
                  src="/logo.png" 
                  alt="Jagmarg News" 
                  className="h-16 md:h-20 w-auto object-contain hover:opacity-90 transition-opacity" 
                />
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                Jagmarg is India's most trusted digital news destination. From hyper-local updates in Haryana and Punjab to global breaking news, we bring you the truth, unfiltered and fast.
              </p>
              
              <div className="flex gap-4 mt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#D32F2F] hover:text-white transition-colors text-gray-800 group">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors text-gray-800 group">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-colors text-gray-800 group">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors text-gray-800 group">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            {/* Links Grid (8 Cols) */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[#1A1A1A] font-black text-xs uppercase tracking-widest mb-2 border-b border-gray-200 pb-2">Top Categories</h4>
                <Link href={`/${locale}/category/national`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">National</Link>
                <Link href={`/${locale}/category/international`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">International</Link>
                <Link href={`/${locale}/category/business`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Business & Tech</Link>
                <Link href={`/${locale}/category/games`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Sports</Link>
                <Link href={`/${locale}/category/entertainment`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Entertainment</Link>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[#1A1A1A] font-black text-xs uppercase tracking-widest mb-2 border-b border-gray-200 pb-2">States</h4>
                <Link href={`/${locale}/state/haryana`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Haryana</Link>
                <Link href={`/${locale}/state/punjab`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Punjab</Link>
                <Link href={`/${locale}/state/chandigarh`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Chandigarh</Link>
                <Link href={`/${locale}/state/delhi`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Delhi NCR</Link>
                <Link href={`/${locale}/state/himachal`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Himachal Pradesh</Link>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[#1A1A1A] font-black text-xs uppercase tracking-widest mb-2 border-b border-gray-200 pb-2">Quick Links</h4>
                <Link href={`/${locale}/epaper`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors flex items-center gap-1">E-Paper <ArrowRight className="w-3 h-3" /></Link>
                <Link href={`/${locale}/live-tv`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Live TV</Link>
                <Link href={`/${locale}/videos`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Jagmarg Reels</Link>
                <Link href={`/${locale}/jagmarg-blog`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Jagmarg Blog</Link>
                <Link href={`/${locale}/category/opinion`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Opinion / Editorial</Link>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-4">
                <h4 className="text-[#1A1A1A] font-black text-xs uppercase tracking-widest mb-2 border-b border-gray-200 pb-2">Corporate</h4>
                <Link href={`/${locale}/about`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">About Us</Link>
                <Link href={`/${locale}/advertise`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Advertise with us</Link>
                <Link href={`/${locale}/careers`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Careers</Link>
                <Link href={`/${locale}/contact`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">Contact Us</Link>
                <Link href={`/${locale}/dmca`} className="text-sm font-medium hover:text-[#D32F2F] transition-colors">DMCA</Link>
              </div>

            </div>
          </div>

          {/* BOTTOM SECTION: Legal & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-4 text-xs font-bold text-gray-400">
            <p>&copy; {new Date().getFullYear()} Jagmarg News Network. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href={`/${locale}/privacy-policy`} className="hover:text-[#1A1A1A] transition-colors">Privacy Policy</Link>
              <Link href={`/${locale}/dmca`} className="hover:text-[#1A1A1A] transition-colors">Terms of Service</Link>
              <Link href={`/${locale}/privacy-policy`} className="hover:text-[#1A1A1A] transition-colors">Cookie Policy</Link>
              <Link href={`/${locale}/complaint-redressal`} className="hover:text-[#1A1A1A] transition-colors">Grievance Redressal</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
