import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { fetchPageBySlug, fetchPostBySlug, getArticleUrl } from '@/lib/api';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const page = await fetchPageBySlug(resolvedParams.slug);
  
  if (!page) return { title: 'Not Found' };
  
  return {
    title: `${page.title.rendered.replace(/&[^;]+;/g, '')} - Jagmarg`,
  };
}

export default async function GenericSlugPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;

  // If this is actually a news post that still links here somehow, redirect it to new /india/ route
  const post = await fetchPostBySlug(slug);
  if (post) {
    const newUrl = getArticleUrl(post, locale);
    redirect(newUrl);
  }

  // Otherwise, it must be a static WP page
  const page = await fetchPageBySlug(slug);
  if (!page) notFound();

  const title = page.title.rendered.replace(/&[^;]+;/g, '');
  const content = page.content.rendered;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl font-black mb-8">{title}</h1>
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
