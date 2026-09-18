import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchPosts } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: 'Author Archives - Jagmarg News',
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;

  // For now, WP REST API doesn't easily expose users by slug without auth, 
  // so we'll just fetch general posts and show a generic author page.
  // In production, you'd use a custom endpoint or WPGraphQL to get posts by author slug.
  const posts = await fetchPosts(24);
  
  if (!posts || posts.length === 0) {
    notFound();
  }

  // Capitalize slug for display
  const authorName = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');

  return (
    <div className="min-h-screen bg-[#F4F4F4] dark:bg-[#0A0A0A] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Author Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12 bg-white dark:bg-[#1A1A1A] p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center font-black text-4xl text-gray-500 shrink-0">
            {authorName.charAt(0)}
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">{authorName}</h1>
            <p className="text-gray-600 dark:text-gray-400">Journalist / Contributor at Jagmarg News. Covering breaking stories and deep analysis across India.</p>
          </div>
        </div>

        {/* Posts Grid */}
        <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#D32F2F] pl-3">Articles by {authorName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: any) => {
            const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
            const imageUrl = featuredMedia?.source_url || '/placeholder-news.jpg';
            const title = post.title.rendered.replace(/&[^;]+;/g, '');

            return (
              <Link key={post.id} href={`/${locale}/${post.slug}`} className="group flex flex-col bg-white dark:bg-[#1A1A1A] shadow-sm hover:shadow-xl transition-shadow overflow-hidden rounded-lg">
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image 
                    src={imageUrl} 
                    alt={title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-3 group-hover:text-[#D32F2F] transition-colors">
                    {title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
