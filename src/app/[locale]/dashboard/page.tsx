import { Metadata } from 'next';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import { Shield, User as UserIcon, Calendar, Edit3, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'My Dashboard - Jagmarg',
};

export default async function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect(`/${locale}`);
  }

  const isPremium = (session.user as any).isPremium;

  return (
    <main className="min-h-screen bg-[#FAFAFA] pt-12 pb-24">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-black text-[#1A1A1A] uppercase tracking-tight mb-8">My Dashboard</h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {session.user.image ? (
              <img src={session.user.image} alt="Profile" className="w-20 h-20 rounded-full border-4 border-gray-100" />
            ) : (
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                <UserIcon className="w-10 h-10 text-gray-400" />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">{session.user.name}</h2>
              <p className="text-gray-500">{session.user.email}</p>
              
              <div className="mt-2 flex gap-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest ${isPremium ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-600'}`}>
                  {isPremium ? '👑 Premium Member' : '👤 Free Member'}
                </span>
              </div>
            </div>
          </div>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-bold text-sm transition-colors flex items-center gap-2">
            <Edit3 className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        {isPremium ? (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-black uppercase tracking-wider mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#D32F2F]" /> Active Plan
              </h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Current Package</p>
                <p className="text-2xl font-black text-[#1A1A1A] mb-4 capitalize">{(session.user as any).planType || 'Pro Pass'}</p>
                
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Expires On</p>
                <p className="text-lg font-medium text-[#1A1A1A] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" /> 
                  {(session.user as any).premiumExpiry ? new Date((session.user as any).premiumExpiry).toLocaleDateString() : 'Active'}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-black uppercase tracking-wider mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Link href={`/${locale}/epaper`} className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                  <span className="font-bold text-[#1A1A1A]">Read Daily E-Paper</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </Link>
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group text-left">
                  <span className="font-bold text-[#1A1A1A]">Update Contact Number</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-black text-center mb-8">Upgrade to Premium to Unlock Full Access</h3>
            <SubscriptionPlans locale={locale} />
          </div>
        )}
      </div>
    </main>
  );
}
