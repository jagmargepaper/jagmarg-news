'use client';

import { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';

export default function PushNotificationPrompt() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show if they haven't explicitly closed it before
    const hasSeenPrompt = localStorage.getItem('jagmarg_push_prompt_seen');
    if (!hasSeenPrompt) {
      // Show prompt after 10 seconds of browsing
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('jagmarg_push_prompt_seen', 'true');
  };

  const handleAllow = () => {
    // Placeholder for actual Firebase FCM / OneSignal logic
    console.log("User allowed push notifications. Initializing Service Worker...");
    
    // Simulate native browser prompt triggering
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log("Permission granted.");
        }
      });
    }

    setIsVisible(false);
    localStorage.setItem('jagmarg_push_prompt_seen', 'true');
    // TODO: Subscribe to OneSignal / FCM backend
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] bg-white dark:bg-[#1A1A1A] rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800 p-6 z-[9999] animate-in slide-in-from-bottom-5">
      <button 
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center shrink-0">
          <Bell className="w-6 h-6 text-[#D32F2F]" />
        </div>
        <div>
          <h3 className="text-lg font-black text-[#1A1A1A] dark:text-white leading-tight mb-2">
            Breaking News Alerts
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Kya aap sabse pehle taaza khabrein paana chahte hain? Notifications allow karein!
          </p>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleClose}
              className="px-4 py-2 text-sm font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              Nahi, Shukriya
            </button>
            <button 
              onClick={handleAllow}
              className="px-4 py-2 text-sm font-bold bg-[#D32F2F] text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Allow Karein
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
