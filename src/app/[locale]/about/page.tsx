import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Jagmarg News',
  description: 'Learn more about Jagmarg, the leading national Hindi daily newspaper providing authentic news from Haryana, Punjab, Delhi, and across India.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-12 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
          Har Khabar Par <span className="text-[#D32F2F]">Nazar.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Jagmarg (राष्ट्रीय हिन्दी दैनिक) is one of India's most trusted national Hindi news platforms, dedicated to bringing you fearless, unbiased, and lightning-fast journalism.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">📰</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Legacy</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Starting as a premium print e-paper, Jagmarg has evolved into a digital-first platform reaching millions of readers across Haryana, Punjab, and Delhi NCR.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">
              To empower the common man with accurate information. We don't just report the news; we explain how it impacts your daily life and community.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-[#111] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Digital First</h3>
            <p className="text-gray-600 dark:text-gray-400">
              With AI-powered summaries, audio articles, and a lightning-fast web experience, Jagmarg is setting the standard for the future of digital news in India.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 prose prose-lg dark:prose-invert">
        <h2 className="text-3xl font-black text-center mb-8">The Jagmarg Story</h2>
        <p>
          Established with a vision to deliver transparent and impactful journalism, Jagmarg News covers everything from breaking political developments to local hyper-news at the district level. We understand that in a democracy, authentic information is the greatest power.
        </p>
        <p>
          Our dedicated team of reporters works around the clock across North India to ensure that no story goes untold. Whether it is through our daily printed editions, our dynamic E-Paper, or our state-of-the-art Next.js website, Jagmarg remains committed to editorial independence and truth.
        </p>
      </section>
    </div>
  );
}
