'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { X, Mail, MessageCircle, CheckCircle2, Loader2, Send } from 'lucide-react';

export default function SubscriptionPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'email'>('whatsapp');
  
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Track Scroll Depth
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Check if user already subscribed or dismissed
    const isSubscribed = localStorage.getItem('jagmarg_subscribed');
    const dismissedAt = localStorage.getItem('jagmarg_popup_dismissed_at');
    
    if (isSubscribed) {
      setHasDismissed(true);
      return;
    }

    if (dismissedAt) {
      const dismissTime = parseInt(dismissedAt, 10);
      const daysSinceDismiss = (Date.now() - dismissTime) / (1000 * 60 * 60 * 24);
      // Wait 7 days before showing again if dismissed
      if (daysSinceDismiss < 7) {
        setHasDismissed(true);
      }
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Show popup if scrolled more than 40% and hasn't been dismissed
    if (latest > 0.4 && !hasDismissed && !showPopup) {
      setShowPopup(true);
    }
  });

  const handleDismiss = () => {
    setShowPopup(false);
    setHasDismissed(true);
    localStorage.setItem('jagmarg_popup_dismissed_at', Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: activeTab, value: inputValue }),
      });

      if (res.ok) {
        setStatus('success');
        localStorage.setItem('jagmarg_subscribed', 'true');
        
        // Auto close after 3 seconds on success
        setTimeout(() => {
          setShowPopup(false);
          setHasDismissed(true);
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-[9999] w-[350px] max-w-[calc(100vw-48px)] bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] rounded-2xl border border-gray-100 overflow-hidden font-sans"
        >
          {/* Top Decorative Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#D32F2F] to-orange-500"></div>
          
          <div className="p-6 relative">
            <button 
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 p-1.5 rounded-full transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6 mt-2">
              <h3 className="font-black text-[#1A1A1A] text-xl tracking-tight mb-2">Get Breaking News!</h3>
              <p className="text-sm text-gray-500 font-medium">Subscribe to Jagmarg updates straight to your inbox or phone.</p>
            </div>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-6 text-center"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Subscribed!</h4>
                <p className="text-xs text-gray-500 mt-1">Thank you for joining Jagmarg News.</p>
              </motion.div>
            ) : (
              <>
                {/* Tabs */}
                <div className="flex bg-gray-100 p-1 rounded-lg mb-5">
                  <button 
                    type="button"
                    onClick={() => { setActiveTab('whatsapp'); setInputValue(''); }}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-md transition-all ${activeTab === 'whatsapp' ? 'bg-white text-[#25D366] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setActiveTab('email'); setInputValue(''); }}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-md transition-all ${activeTab === 'email' ? 'bg-white text-[#D32F2F] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    <Mail className="w-4 h-4" /> Email
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="relative">
                    <input 
                      type={activeTab === 'email' ? 'email' : 'tel'}
                      required
                      placeholder={activeTab === 'email' ? 'your@email.com' : '+91 9876543210'}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#D32F2F] focus:border-[#D32F2F] block p-3 pr-10 outline-none transition-all"
                    />
                  </div>
                  
                  {status === 'error' && (
                    <span className="text-xs text-red-500 font-medium">Something went wrong. Please try again.</span>
                  )}

                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 mt-1"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Subscribe Now <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
                
                <p className="text-[10px] text-gray-400 text-center mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
