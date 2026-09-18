"use client";

import React, { useState } from 'react';
import { subscribeUser } from '@/app/actions/subscription';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function SubscribeButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubscribe = async () => {
    setLoading(true);
    // Simulate Razorpay / Cashfree delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    await subscribeUser();
    router.refresh();
  };

  return (
    <button 
      onClick={handleSubscribe}
      disabled={loading}
      className="shrink-0 bg-[#D32F2F] text-white px-8 py-3 rounded-lg font-black tracking-widest uppercase hover:bg-[#B71C1C] transition-colors flex items-center justify-center min-w-[160px]"
    >
      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Pay ₹49 Now'}
    </button>
  );
}
