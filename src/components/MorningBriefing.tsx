'use client';

import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function MorningBriefing() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // TODO: Connect to Brevo API / WordPress Mailster
    console.log("Subscribing email to Morning Briefing:", email);
    
    // Simulate API Call
    setTimeout(() => {
      setSubscribed(true);
      setEmail('');
    }, 800);
  };

  return (
    <section className="bg-[#1A1A1A] py-16 px-4">
      <div className="max-w-4xl mx-auto bg-[#222] rounded-2xl p-8 md:p-12 shadow-2xl border border-[#333] relative overflow-hidden">
        
        {/* Accent graphics */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D32F2F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl lg:text-4xl xl:whitespace-nowrap font-black text-white mb-4 tracking-tight leading-tight">
              Jagmarg <span className="text-[#D32F2F]">Morning Briefing</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Din ki shuruat karein 5 sabse badi aur zaroori khabron ke sath. 
              Seedhe aapke inbox mein, bina kisi spam ke.
            </p>
          </div>

          <div className="w-full md:w-[400px]">
            {subscribed ? (
              <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl flex items-center gap-4 animate-in fade-in">
                <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-lg">Subscription Successful!</h4>
                  <p className="text-gray-400 text-sm">Aapko kal subah pehli brief mil jayegi.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-500" />
                  </div>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Aapka email address..." 
                    className="w-full pl-12 pr-4 py-4 bg-[#111] border border-[#444] text-white rounded-xl focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-[#D32F2F] text-white font-black text-lg uppercase tracking-wider rounded-xl hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(211,47,47,0.3)] hover:shadow-[0_0_30px_rgba(211,47,47,0.5)]"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
