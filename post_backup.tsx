import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { fetchPostBySlug, fetchPageBySlug } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import AIQuickSummary from '@/components/AIQuickSummary';
import ArticleAudioPlayer from '@/components/ArticleAudioPlayer';
import ShareButtons from '@/components/ShareButtons';
import InfiniteArticleScroll from '@/components/InfiniteArticleScroll';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  let post = await fetchPostBySlug(resolvedParams.slug);
  
  if (!post) {
    post = await fetchPageBySlug(resolvedParams.slug);
  }

  if (!post) {
    return { title: 'Not Found' };
  }

  const title = post.title.rendered.replace(/&[^;]+;/g, '');
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const imageUrl = featuredMedia?.source_url || '';

  return {
    title: `${title} - Jagmarg News`,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 150),
    openGraph: {
      images: imageUrl ? [imageUrl] : [],
    }
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;

  let post = await fetchPostBySlug(slug);
  let isPage = false;
  
  if (!post) {
    post = await fetchPageBySlug(slug);
    isPage = !!post;
  }
  
  if (!post) {
    notFound();
  }

  const title = post.title.rendered.replace(/&[^;]+;/g, '');
  const content = post.content.rendered;
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const imageUrl = featuredMedia?.source_url;
  const author = post.author_name || post._embedded?.author?.[0]?.name || 'Jagmarg Desk';
  const date = new Date(post.date).toLocaleDateString('hi-IN', {
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });
  
  const category = post._embedded?.['wp:term']?.[0]?.[0];

  return (
    <article className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        
        {/* Breadcrumb / Category */}
        {category && (
          <Link href={`/${locale}/state/${category.slug}`} className="inline-block px-3 py-1 bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-6 hover:bg-[#b71c1c] transition-colors">
            {category.name}
          </Link>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
          {title}
        </h1>

        {/* Meta Info */}
        {!isPage && (
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center font-bold text-gray-500">
                {author.charAt(0)}
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-200">{author}</span>
            </div>
            <span className="hidden sm:inline">â€¢</span>
            <time>{date}</time>
          </div>
        )}

        {/* Action Toolbar: AI Summary & Audio */}
        {!isPage && (
          <div className="flex flex-col gap-4 mb-8 w-full max-w-3xl">
            <AIQuickSummary contentSelector=".article-content" locale={locale} />
            <ArticleAudioPlayer contentSelector=".article-content" locale={locale} />
          </div>
        )}

        {/* Featured Image */}
        {imageUrl && (
          <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill 
              className="object-cover" 
              priority
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="article-content prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-a:text-[#D32F2F] hover:prose-a:text-[#b71c1c]
            prose-img:rounded-xl prose-img:shadow-md
            prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        {/* Share Buttons */}
        {!isPage && (
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Share this article:</h3>
            <ShareButtons title={title} size="large" />
          </div>
        )}

        {/* INFINITE SCROLL LOADER */}
        {!isPage && <InfiniteArticleScroll currentSlug={slug} locale={locale} />}
      </div>
    </article>
  );
}
