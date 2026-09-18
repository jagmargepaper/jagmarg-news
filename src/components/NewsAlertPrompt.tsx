'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';

import { getToken } from 'firebase/messaging';
import { messaging } from '@/lib/firebase';

export default function NewsAlertPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const fetchExistingToken = async () => {
      if ('Notification' in window && Notification.permission === 'granted') {
        try {
          const msg = await messaging;
          if (msg) {
            // Explicitly register service worker to prevent Next.js dev mode 10s timeout bug
            const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
            const token = await getToken(msg, { 
              vapidKey: 'BGIlWDbhfA00cR0glVfAg4Dnwffnyx9ihGhC_EM9WW36tTcUueoiV5bVEfkaI42mz9gNvB2Ty3u0P2qApuCO8Ms',
              serviceWorkerRegistration: registration
            });
            console.log("[FCM] Subscription Token generated:", token);
          }
        } catch (error) {
          console.error("Token Error:", error);
        }
      }
    };
    fetchExistingToken();

    if (!('Notification' in window)) return;
    if (Notification.permission !== 'default') return;

    const dismissed = localStorage.getItem('jagmarg_alert_dismissed');
    if (dismissed) return;

    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleAllow = async () => {
    setShowPrompt(false);
    
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const msg = await messaging;
        if (msg) {
          const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
          const token = await getToken(msg, { 
            vapidKey: 'BGIlWDbhfA00cR0glVfAg4Dnwffnyx9ihGhC_EM9WW36tTcUueoiV5bVEfkaI42mz9gNvB2Ty3u0P2qApuCO8Ms',
            serviceWorkerRegistration: registration
          });
          
          console.log("🔥 [FCM] Subscription Token generated:", token);
          // TODO: Send this token to the backend to save in the database
          localStorage.setItem('jagmarg_fcm_token', token);
          
          new Notification("Jagmarg News - Alerts Active!", {
            body: "Aapko ab sabse pehle Breaking News alerts milenge.",
            icon: "/logo.png"
          });
        }
      }
    } catch (error) {
      console.error("FCM Token Error:", error);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Remember that they said no, so we don't annoy them on every page load
    localStorage.setItem('jagmarg_alert_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-6 z-[9999] w-80 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden"
        >
          {/* Top Red Bar */}
          <div className="h-1 w-full bg-[#D32F2F]"></div>
          
          <div className="p-5 relative">
            {/* Close Button */}
            <button 
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <Bell className="w-5 h-5 text-[#D32F2F] animate-pulse" />
              </div>
              
              <div className="flex-1 pr-2">
                <h3 className="font-bold text-[#1A1A1A] text-sm mb-1 notranslate">
                  Jagmarg News Alerts
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Sabse pehle breaking news aur latest updates pane ke liye notifications allow karein.
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <button 
                onClick={handleDismiss}
                className="flex-1 px-4 py-2 text-xs font-bold text-gray-500 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
              >
                Later
              </button>
              <button 
                onClick={handleAllow}
                className="flex-1 px-4 py-2 text-xs font-bold text-white bg-[#D32F2F] hover:bg-[#B71C1C] rounded-lg transition-colors shadow-md shadow-red-500/20"
              >
                Allow
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
