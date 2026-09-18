import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchPostBySlug, fetchPageBySlug, fetchCategoryBySlug, fetchPostsByCategory, fetchTagBySlug, fetchPostsByTag, getArticleUrl } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import AIQuickSummary from '@/components/AIQuickSummary';
import ArticleAudioPlayer from '@/components/ArticleAudioPlayer';
import ShareButtons from '@/components/ShareButtons';
import InfiniteArticleScroll from '@/components/InfiniteArticleScroll';
import NewsFeedLayout from '@/components/NewsFeedLayout';
import SidebarWidget from '@/components/SidebarWidget';
import PaywalledArticleContent from '@/components/PaywalledArticleContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string[] }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug;
  const lastSlug = slugArray[slugArray.length - 1];

  let post = await fetchPostBySlug(lastSlug);
  if (post) {
    const title = post.title.rendered.replace(/&[^;]+;/g, '');
    return { title: `${title} - Jagmarg News` };
  }
  
  let term = await fetchCategoryBySlug(lastSlug);
  if (!term) term = await fetchTagBySlug(lastSlug);
  
  if (term) {
    return { title: `${term.name} News` };
  }

  return { title: 'Not Found' };
}

export default async function CatchAllIndiaRoute({ params }: { params: Promise<{ locale: string; slug: string[] }> }) {
  const resolvedParams = await params;
  const { locale, slug: slugArray } = resolvedParams;
  const lastSlug = slugArray[slugArray.length - 1];

  // 1. Try resolving as a Post
  const post = await fetchPostBySlug(lastSlug);
  
  if (post) {
    return <PostTemplate post={post} locale={locale} currentSlug={lastSlug} />;
  }

  // 2. Try resolving as a Category (State or District)
  let term = await fetchCategoryBySlug(lastSlug);
  let isTag = false;
  
  if (!term) {
    term = await fetchTagBySlug(lastSlug);
    isTag = true;
  }
  
  if (term) {
    return <CategoryTemplate term={term} locale={locale} isTag={isTag} />;
  }

  notFound();
}

async function PostTemplate({ post, locale, currentSlug }: { post: any, locale: string, currentSlug: string }) {
  const title = post.title.rendered.replace(/&[^;]+;/g, '');
  const content = post.content.rendered;
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const imageUrl = featuredMedia?.source_url;
  const author = post.author_name || post._embedded?.author?.[0]?.name || 'Jagmarg Desk';
  const date = new Date(post.date).toLocaleDateString('hi-IN', {
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });
  
  const category = post._embedded?.['wp:term']?.[0]?.[0];
  
  // Fetch related posts for the right sidebar
  const relatedPosts = category ? await fetchPostsByCategory(category.id, 5, 1) : [];
  // Filter out current post
  const sidebarPosts = relatedPosts.filter((p: any) => p.slug !== currentSlug).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0A0A] pt-12 pb-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          
          {/* LEFT SIDEBAR (Ads & Sharing) - Hidden on Mobile */}
          <div className="hidden lg:flex lg:col-span-2 flex-col gap-6 sticky top-24 h-fit">
            <div className="w-full h-[600px] bg-white dark:bg-[#1A1A1A] flex flex-col items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
              <span className="relative z-10 text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1">Advertisement</span>
              <span className="relative z-10 text-xs font-black tracking-widest text-gray-300 dark:text-gray-600">160 x 600</span>
            </div>
            <div className="bg-white dark:bg-[#111] p-4 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Share</span>
              <ShareButtons title={title} size="small" />
            </div>
          </div>

          {/* CENTER ARTICLE (Main Content) */}
          <div className="lg:col-span-7 flex flex-col">
            <article className="bg-white dark:bg-[#111] p-6 md:p-10 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              
              {/* Breadcrumb / Category */}
              {category && (
                <Link href={`/${locale}/india/${category.slug}`} className="inline-block px-3 py-1 bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-6 hover:bg-[#b71c1c] transition-colors">
                  {category.name}
                </Link>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
                {title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center font-bold text-gray-500">
                    {author.charAt(0)}
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-gray-200">{author}</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <time>{date}</time>
              </div>

              {/* Action Toolbar: AI Summary & Audio */}
              <div className="flex flex-col gap-4 mb-8 w-full max-w-3xl">
                <AIQuickSummary contentSelector=".article-content" locale={locale} />
                <ArticleAudioPlayer contentSelector=".article-content" locale={locale} />
              </div>

              {/* Featured Image */}
              {imageUrl && (
                <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                  <Image src={imageUrl} alt={title} fill className="object-cover" priority />
                </div>
              )}

              {/* Content */}
              <PaywalledArticleContent content={content} postId={post.id} />
              
              {/* Bottom Share Buttons */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Share this article:</h3>
                <ShareButtons url={`/${locale}/india/${category?.slug || 'news'}/${currentSlug}`} title={title} size="large" />
              </div>
            </article>

            {/* INFINITE SCROLL LOADER (Now constrained to center column) */}
            <InfiniteArticleScroll 
              currentSlug={currentSlug} 
              locale={locale} 
              categoryId={category?.id}
              categoryParentId={category?.parent}
            />
          </div>

          {/* RIGHT SIDEBAR (Categories, Top Stories & Ads) */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="w-full h-[250px] bg-white dark:bg-[#1A1A1A] flex flex-col items-center justify-center border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
              <span className="relative z-10 text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1">Advertisement</span>
              <span className="relative z-10 text-xs font-black tracking-widest text-gray-300 dark:text-gray-600">300 x 250</span>
            </div>

            {sidebarPosts.length > 0 && (
              <div className="sticky top-24 h-fit pb-12">
                <SidebarWidget title="Related News" posts={sidebarPosts} />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

async function CategoryTemplate({ term, locale, isTag }: { term: any, locale: string, isTag: boolean }) {
  const posts = isTag 
    ? await fetchPostsByTag(term.id, 20, 1)
    : await fetchPostsByCategory(term.id, 20, 1);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0A0A0A] pt-8">
      {/* State/Category Header */}
      <div className="bg-[#1A1A1A] text-white py-12 px-4 mb-8">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
            {term.name} News
          </h1>
          <div className="w-16 h-1.5 bg-[#D32F2F] mt-4"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 pb-20">
        <NewsFeedLayout 
          initialPosts={posts} 
          locale={locale} 
          feedTitle={`${term.name} News`}
          categoryId={!isTag ? term.id : undefined}
          tagId={isTag ? term.id : undefined}
          categoryParentId={!isTag ? term.parent : undefined}
        />
      </div>
    </main>
  );
}
