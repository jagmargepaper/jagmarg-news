import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Image as ImageIcon } from 'lucide-react';

const SidebarWidget = ({ title, posts, categorySlug, locale = 'hi' }: { title: string, posts: any[], categorySlug?: string, locale?: string }) => {
  if (!posts || posts.length === 0) return null;
  
  // Helper inside component to avoid breaking if api.ts is not imported properly in caller
  const getArticleLink = (post: any) => {
    const terms = post?._embedded?.['wp:term']?.[0] || [];
    let state = 'news'; let district = 'news';
    if (terms.length > 0) {
      state = terms[0].slug;
      if (terms.length > 1) district = terms[1].slug;
    }
    return `/${locale}/india/${state}/${district}/${post?.slug}`;
  };

  return (
    <div className="bg-white p-5 border border-gray-200 shadow-sm lg:ml-auto lg:w-[300px] w-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1.5 h-5 bg-[#D32F2F]"></div>
        <h3 className="text-lg font-black uppercase tracking-tight text-[#1A1A1A]">{title}</h3>
      </div>
      <div className="flex flex-col gap-4 mb-5">
        {posts.map((post: any, idx: number) => {
          const imgUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          return (
            <Link key={`widget-${post.id}-${idx}`} href={getArticleLink(post)} className="group flex gap-3 items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0">
              {imgUrl ? (
                <div className="w-[60px] h-[60px] shrink-0 bg-gray-100 relative overflow-hidden">
                  <Image src={imgUrl} alt="Thumb" fill sizes="60px" className="object-cover group-hover:scale-110 transition-transform" />
                </div>
              ) : (
                <div className="w-[60px] h-[60px] shrink-0 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                  <ImageIcon className="w-4 h-4 text-gray-300" />
                </div>
              )}
              <h4 
                className="text-xs font-bold leading-snug text-[#1A1A1A] group-hover:text-[#D32F2F] transition-colors line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.title?.rendered || '' }}
              />
            </Link>
          );
        })}
      </div>
      {categorySlug && (
        <Link href={`/${locale}/india/${categorySlug}`} className="block w-full py-2.5 text-center text-xs font-bold uppercase tracking-widest text-[#D32F2F] border border-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-colors">
          More {title}
        </Link>
      )}
    </div>
  );
};

export default SidebarWidget;
