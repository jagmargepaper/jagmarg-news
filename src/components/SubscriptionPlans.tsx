'use client';
import React, { useState } from 'react';
import Script from 'next/script';
import { Check, Star, Shield, Zap, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function SubscriptionPlans({ locale }: { locale: string }) {
  const { data: session, update } = useSession();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly Pass',
      price: 29,
      duration: '1 Month',
      popular: false,
      features: ['Ad-free reading experience', 'Access to premium articles', 'Daily E-Paper access', 'Cancel anytime']
    },
    {
      id: 'half_yearly',
      name: 'Pro Pass',
      price: 99,
      duration: '6 Months',
      popular: true,
      features: ['Ad-free reading experience', 'Access to premium articles', 'Daily E-Paper access', 'Priority support', 'Cancel anytime']
    },
    {
      id: 'yearly',
      name: 'Elite Pass',
      price: 149,
      duration: '1 Year',
      popular: false,
      features: ['Ad-free reading experience', 'Access to premium articles', 'Daily E-Paper access', 'Priority support', 'Exclusive offline events', 'Cancel anytime']
    }
  ];

  const handleSubscribe = async (planId: string, amount: number, name: string) => {
    setLoadingPlan(planId);
    try {
      // 1. Create order on our backend
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planId, amount })
      });
      const data = await res.json();

      if (!data.orderId) throw new Error('Failed to create order');

      // 2. Initialize Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: 'INR',
        name: 'Jagmarg News',
        description: `Subscription: ${name}`,
        order_id: data.orderId,
        handler: async function (response: any) {
          // 3. Verify payment on success
          const verifyRes = await fetch('/api/razorpay/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              planType: planId
            })
          });
          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            // Update session dynamically so Header changes immediately!
            await update({
              isPremium: true,
              planType: planId,
              premiumExpiry: new Date(Date.now() + (planId === 'yearly' ? 31536000000 : planId === 'half_yearly' ? 15768000000 : 2592000000)).toISOString()
            });
            setShowSuccessModal(true);
          } else {
            alert('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: '', // Can be filled if user is logged in
          email: '',
          contact: ''
        },
        theme: {
          color: '#D32F2F'
        }
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', function (response: any) {
        alert(`Payment failed: ${response.error.description}`);
      });
      paymentObject.open();

    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        {/* Load Razorpay Script */}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight mb-4">
            Choose Your <span className="text-[#D32F2F]">Premium</span> Plan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get unlimited access to exclusive news, ad-free reading, and daily e-papers. Support independent journalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-[#D32F2F] shadow-lg scale-105 z-10' : 'border-gray-200 mt-4 md:mt-4'
              }`}
            >
              {plan.popular && (
                <div className="bg-[#D32F2F] text-white text-xs font-black uppercase tracking-widest text-center py-2 flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-black text-[#1A1A1A] mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-[#1A1A1A]">₹{plan.price}</span>
                  <span className="text-gray-500 font-medium">/{plan.duration}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <div className="mt-1 bg-green-100 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-green-700" strokeWidth={3} />
                      </div>
                      <span className="font-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <button 
                  onClick={() => handleSubscribe(plan.id, plan.price, plan.name)}
                  disabled={loadingPlan !== null}
                  className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm flex justify-center items-center gap-2 transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-[#D32F2F] text-white hover:bg-red-800 shadow-md hover:shadow-lg' 
                      : 'bg-[#1A1A1A] text-white hover:bg-black shadow-sm hover:shadow-md'
                  }`}
                >
                  {loadingPlan === plan.id ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
                  ) : (
                    <>Subscribe Now <Zap className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center flex items-center justify-center gap-2 text-gray-500 text-sm font-medium">
          <Shield className="w-4 h-4" /> 100% Secure Payments powered by Razorpay
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8" strokeWidth={3} />
            </div>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-2 uppercase tracking-tight">Payment Successful!</h2>
            <p className="text-gray-600 font-medium mb-8">You are now a premium member of Jagmarg News.</p>
            <Link 
              href={`/${locale}/dashboard`}
              className="w-full inline-block bg-[#1A1A1A] hover:bg-black text-white font-black uppercase tracking-widest text-sm py-4 rounded-xl transition-all"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
