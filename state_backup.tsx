import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchCategoryBySlug, fetchPostsByCategory, fetchTagBySlug, fetchPostsByTag } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; stateSlug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  let term = await fetchCategoryBySlug(resolvedParams.stateSlug);
  if (!term) term = await fetchTagBySlug(resolvedParams.stateSlug);
  
  return {
    title: term ? `${term.name} News` : 'State News',
  };
}

export default async function StatePage({ params }: { params: Promise<{ locale: string; stateSlug: string }> }) {
  const resolvedParams = await params;
  const { locale, stateSlug } = resolvedParams;

  let term = await fetchCategoryBySlug(stateSlug);
  let isTag = false;
  
  if (!term) {
    term = await fetchTagBySlug(stateSlug);
    isTag = true;
  }
  
  if (!term) {
    notFound();
  }

  const posts = isTag 
    ? await fetchPostsByTag(term.id, 24)
    : await fetchPostsByCategory(term.id, 24);

  return (
    <div className="min-h-screen bg-[#F4F4F4] dark:bg-[#0A0A0A] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-8 border-b-2 border-red-600 pb-4 inline-block">
          <h1 className="text-4xl font-black uppercase text-[#1A1A1A] dark:text-white flex items-center gap-2">
            <span>{term.name}</span> <span className="text-[#D32F2F]">NEWS</span>
          </h1>
        </header>

        {posts.length === 0 ? (
          <p className="text-gray-500">No news found for this state.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => {
              const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
              const imageUrl = featuredMedia?.source_url || '/placeholder-news.jpg';
              const title = post.title.rendered.replace(/&[^;]+;/g, '');
              const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, '').substring(0, 100) + '...';

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
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-3 group-hover:text-red-600 transition-colors">
                      {title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-auto">
                      {excerpt}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
