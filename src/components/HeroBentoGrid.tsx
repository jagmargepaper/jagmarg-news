import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock } from 'lucide-react';

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('hi-IN', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
};

export default function HeroBentoGrid({ posts, locale }: { posts: any[], locale: string }) {
  if (!posts || posts.length < 4) return null;

  const [hero, topSide, bottomMid, bottomRight] = posts;

  const BentoCard = ({ post, className, isLarge = false }: { post: any, className: string, isLarge?: boolean }) => {
    const imageUrl = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
    
    // Fallback for helper if api.ts isn't imported yet
    const terms = post?._embedded?.['wp:term']?.[0] || [];
    let state = 'news'; let district = 'news';
    if (terms.length > 0) {
      state = terms[0].slug;
      if (terms.length > 1) district = terms[1].slug;
    }
    const link = `/${locale}/india/${state}/${district}/${post?.slug}`;

    // Extract Category Name for the Badge
    let badgeName = 'TRENDING';
    if (terms.length > 0) {
      badgeName = terms[0].name;
    }

    return (
      <Link href={link} className={`group relative overflow-hidden block ${className}`}>
        <div className="absolute inset-0 bg-[#1A1A1A]">
          {imageUrl && (
            <Image 
              src={imageUrl} 
              alt={post?.title?.rendered || "News Image"}
              fill
              priority={isLarge}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col justify-end">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#D32F2F] text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2 py-0.5">
              {badgeName}
            </span>
              <div className="flex flex-wrap items-center gap-2 text-white/70 text-[9px] md:text-[10px] font-bold uppercase">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-1 text-white/50">
                  <span className="w-1 h-1 rounded-full bg-white/40"></span>
                  <span className="capitalize">{post.author_name || post._embedded?.author?.[0]?.name || 'Jagmarg Desk'}</span>
                </div>
              </div>
          </div>
          <h2 
            className={`${isLarge ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'} font-black text-white leading-tight group-hover:text-[#D32F2F] transition-colors line-clamp-3`}
            dangerouslySetInnerHTML={{ __html: post?.title?.rendered || '' }}
          />
        </div>
      </Link>
    );
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 md:px-6 py-6 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 md:gap-4 h-auto md:h-[450px]">
        {/* Main Hero: Takes 2 columns and 2 rows on Desktop */}
        <BentoCard post={hero} isLarge={true} className="md:col-span-2 md:row-span-2 h-[350px] md:h-full rounded-sm" />
        
        {/* Top Side: Takes 2 columns and 1 row */}
        <BentoCard post={topSide} className="md:col-span-2 md:row-span-1 h-[250px] md:h-full rounded-sm" />
        
        {/* Bottom Mid: Takes 1 column and 1 row */}
        <BentoCard post={bottomMid} className="md:col-span-1 md:row-span-1 h-[200px] md:h-full rounded-sm" />
        
        {/* Bottom Right: Takes 1 column and 1 row */}
        <BentoCard post={bottomRight} className="md:col-span-1 md:row-span-1 h-[200px] md:h-full rounded-sm" />
      </div>
    </section>
  );
}

