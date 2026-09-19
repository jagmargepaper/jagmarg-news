"use client";

import React, { useState } from 'react';
import { useAuthModal } from '@/context/AuthModalContext';
import { X, Sparkles, Loader2, Mail } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { loginUser } from '@/app/actions/auth';
import { subscribeUser } from '@/app/actions/subscription';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function AuthModal() {
  const { view, closeModal, openPayment } = useAuthModal();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('149');
  const router = useRouter();

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('payment') === 'true') {
        openPayment();
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  }, [openPayment]);

  if (view === 'HIDDEN') return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay for login/OTP
    await new Promise(res => setTimeout(res, 1200));
    await loginUser(email || 'user@example.com');
    setLoading(false);
    
    // As per user requirement: Instant jump to Payment after Signup/Login
    openPayment();
    router.refresh(); // Refresh header state
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    // Since NextAuth redirects, we pass the callbackUrl so we know to open payment on return
    await signIn('google', { callbackUrl: `${window.location.pathname}?payment=true` });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    
    // 1. Load Razorpay script
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      setLoading(false);
      return;
    }

    try {
      // 2. Create order on backend
      const orderResponse = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: 'Premium', amount: parseInt(selectedPlan) }),
      });
      
      const orderData = await orderResponse.json();
      
      if (!orderData.orderId) {
        throw new Error('Server failed to create order');
      }

      // 3. Open Razorpay Checkout Modal
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use public key from env
        amount: orderData.amount,
        currency: 'INR',
        name: 'Jagmarg News',
        description: 'Premium Ad-Free Subscription',
        image: '/logo.png',
        order_id: orderData.orderId,
        handler: function (response: any) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          closeModal();
        },
        prefill: {
          name: 'Jagmarg Reader',
          email: email || 'reader@jagmarg.com',
          contact: '9999999999'
        },
        theme: {
          color: '#D32F2F'
        }
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', function (response: any) {
        alert(`Payment Failed: ${response.error.description}`);
      });
      
      paymentObject.open();
    } catch (error) {
      console.error(error);
      alert('Could not initiate payment. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {view === 'LOGIN' && (
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-[#1A1A1A] mb-2">Sign in to Jagmarg</h2>
              <p className="text-gray-500 text-sm">Create an account to unlock unlimited reading and premium features.</p>
            </div>

            <button 
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 dark:text-gray-300 font-bold py-3 px-4 rounded-lg hover:bg-gray-50 dark:bg-gray-900 transition-colors mb-6 shadow-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-xs font-bold text-gray-400 uppercase">OR EMAIL</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all"
                  />
                </div>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#1A1A1A] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#D32F2F] transition-colors flex items-center justify-center h-12"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Continue'}
              </button>
            </form>
          </div>
        )}

        {view === 'PAYMENT' && (
          <div>
            <div className="bg-[#1A1A1A] p-6 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D32F2F]"></div>
              <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h2 className="text-xl font-black mb-1">Upgrade to Premium</h2>
              <p className="text-gray-400 text-xs">Unlock ad-free news & exclusive content.</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-3 mb-6">
                
                {/* Plan 1 */}
                <label className="flex items-center justify-between bg-white border-2 border-gray-100 hover:border-[#D32F2F] p-4 rounded-xl cursor-pointer transition-all has-[:checked]:border-[#D32F2F] has-[:checked]:bg-red-50">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="plan" value="29" className="w-4 h-4 text-[#D32F2F] accent-[#D32F2F]" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 leading-none">Monthly</h4>
                      <span className="text-[10px] text-gray-500 font-medium">Billed monthly</span>
                    </div>
                  </div>
                  <span className="text-lg font-black text-gray-900 dark:text-gray-100">₹29</span>
                </label>

                {/* Plan 2 */}
                <label className="flex items-center justify-between bg-white border-2 border-gray-100 hover:border-[#D32F2F] p-4 rounded-xl cursor-pointer transition-all has-[:checked]:border-[#D32F2F] has-[:checked]:bg-red-50">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="plan" value="99" className="w-4 h-4 text-[#D32F2F] accent-[#D32F2F]" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-gray-100 leading-none">6 Months</h4>
                      <span className="text-[10px] text-gray-500 font-medium">Billed semi-annually</span>
                    </div>
                  </div>
                  <span className="text-lg font-black text-gray-900 dark:text-gray-100">₹99</span>
                </label>

                {/* Plan 3 */}
                <label className="relative flex items-center justify-between bg-white border-2 border-[#D32F2F] p-4 rounded-xl cursor-pointer transition-all bg-red-50">
                  <div className="absolute -top-2.5 left-4 bg-[#D32F2F] text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm">
                    Best Value
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="plan" value="149" defaultChecked className="w-4 h-4 text-[#D32F2F] accent-[#D32F2F]" />
                    <div>
                      <h4 className="font-bold text-[#D32F2F] leading-none">1 Year</h4>
                      <span className="text-[10px] text-[#D32F2F] font-medium">Billed annually</span>
                    </div>
                  </div>
                  <span className="text-xl font-black text-[#D32F2F]">₹149</span>
                </label>

              </div>

              <button 
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-[#D32F2F] text-white font-black uppercase tracking-widest py-3.5 px-4 rounded-xl hover:bg-[#B71C1C] transition-all hover:scale-[1.02] shadow-lg flex items-center justify-center h-12"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Proceed to Payment'}
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-4 uppercase font-bold tracking-widest">Secured by Razorpay</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
