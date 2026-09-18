import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Payment Successful - Jagmarg News',
};

export default async function SuccessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border-t-4 border-green-500">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h1 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tight mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Welcome to Jagmarg Premium. Your subscription is now active. You can enjoy an ad-free experience and premium content.
        </p>
        <Link 
          href={`/${locale}`}
          className="inline-block bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </main>
  );
}
