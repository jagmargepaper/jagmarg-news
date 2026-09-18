import { Metadata } from 'next';
import { Newspaper, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'E-Paper | Jagmarg News',
  description: 'Read the digital edition of Jagmarg Newspaper. Experience our daily printed edition online.',
};

export default async function EPaperPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full p-8 md:p-16 rounded-2xl shadow-xl text-center border border-gray-100">
        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <Newspaper className="w-12 h-12 text-[#D32F2F]" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          E-Paper Coming <span className="text-[#D32F2F]">Soon</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
          We are upgrading our digital reading experience. Our new high-resolution, interactive E-Paper will be available here shortly. Stay tuned!
        </p>
        
        <Link 
          href={`/${locale}`}
          className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:shadow-lg"
        >
          Read Latest News <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
