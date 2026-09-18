"use client";

import React from 'react';
import { useAuthModal } from '@/context/AuthModalContext';

export default function PaywallSubscribeButton() {
  const { openLogin } = useAuthModal();

  return (
    <button 
      onClick={openLogin}
      className="inline-block bg-[#D32F2F] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#B71C1C] transition-all hover:scale-105 shadow-xl hover:shadow-red-900/20"
    >
      Subscribe Now
    </button>
  );
}
