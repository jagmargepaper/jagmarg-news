import { Metadata } from 'next';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: 'Subscribe - Jagmarg Premium',
  description: 'Get premium access to Jagmarg News',
};

export default async function SubscribePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const session = await getServerSession(authOptions);
  
  return (
    <main className="min-h-screen bg-[#FAFAFA] pt-12 pb-24">
      {session && session.user && (
        <div className="max-w-6xl mx-auto px-4 mb-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-center gap-2 text-green-800 text-sm font-medium">
            Already logged in as <span className="font-bold">{session.user.email}</span>
          </div>
        </div>
      )}
      <SubscriptionPlans locale={locale} />
    </main>
  );
}
