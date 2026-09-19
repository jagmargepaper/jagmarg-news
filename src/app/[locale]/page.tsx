import { Metadata } from 'next';
import Script from 'next/script';
import BreakingNews from '@/components/BreakingNews';
import WebStoriesRow from '@/components/WebStoriesRow';
import EpaperAndVideo from '@/components/EpaperAndVideo';
import HeroBentoGrid from '@/components/HeroBentoGrid';
import AdSlot from '@/components/AdSlot';
import { fetchPosts, fetchCategories, getLatestYouTubeVideos } from '@/lib/api';
import HomeCategoryFeed from '@/components/HomeCategoryFeed';

type Props = {
  params: Promise<{ locale: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'hi';
  const canonicalUrl = locale === 'en' ? '/' : `/${locale}`;
  return {
    alternates: {
      canonical: canonicalUrl,
    }
  };
}

export default async function Home({ params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'hi';
  
  // Fetch posts for the page (Hero & Breaking)
  const posts = await fetchPosts(15);
  const breakingNewsTitles = posts.slice(0, 5).map((p: any) => p.title.rendered.replace(/&[^;]+;/g, '')).filter(Boolean);

  // Fetch initial top 5 categories for the infinite scroll
  const initialCategories = await fetchCategories(undefined, 5);
  const filteredCategories = initialCategories.filter((c: any) => c.slug !== 'uncategorized');

  // Fetch latest YouTube videos for the Video section
  const youtubeVideos = await getLatestYouTubeVideos('UC2KaK9KRELIn6e7LtiTRevw');

  // Generate WebSite Schema for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jagmarg News",
    "alternateName": "Har Khabar Ka Seedha Rasta",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://jagmarg.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "https://jagmarg.com"}/${locale}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": "Jagmarg News",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://jagmarg.com",
    "logo": {
      "@type": "ImageObject",
      "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://jagmarg.com"}/logo.png`,
    }
  };

  return (
    <>
      <Script id="website-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="org-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      
      <main className="min-h-screen bg-[#F4F4F4] dark:bg-[#0A0A0A] pb-24">
        {/* WEB STORIES ROW */}
        <div className="mt-4">
          <WebStoriesRow locale={locale} />
        </div>

        {/* 3. HERO BENTO GRID (Top 4 Posts) */}
        <HeroBentoGrid posts={posts.slice(0, 4)} locale={locale} />
        
        {/* 4. AD BLOCK / BANNER */}
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 mb-8 flex flex-col items-center justify-center">
          <AdSlot size="leaderboard" id="home-middle-desktop" className="hidden md:flex my-0" />
          <AdSlot size="mrec" id="home-middle-mobile" className="flex md:hidden my-0" />
        </div>

        {/* 5. EPAPER AND VIDEO */}
        <EpaperAndVideo videos={youtubeVideos} />

        {/* 6. CATEGORY FEED (INFINITE SCROLL) */}
        <div className="mt-12">
          <HomeCategoryFeed initialCategories={filteredCategories} locale={locale} />
        </div>
      </main>
    </>
  );
}
