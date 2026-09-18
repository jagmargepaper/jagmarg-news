import Link from 'next/link';
import Image from 'next/image';

// Simulated Web Stories Fetch (In production, fetch from WP 'web-story' CPT)
const dummyStories = [
  { id: 1, link: '#', title: 'Election Results 2026', image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=500&h=800&fit=crop' },
  { id: 2, link: '#', title: 'Cricket Highlights', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&h=800&fit=crop' },
  { id: 3, link: '#', title: 'Stock Market Crash', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=800&fit=crop' },
  { id: 4, link: '#', title: 'Bollywood News', image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&h=800&fit=crop' },
  { id: 5, link: '#', title: 'New iPhone Launch', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=800&fit=crop' },
];

export default async function WebStoriesRow({ locale }: { locale: string }) {
  let stories = [];
  
  try {
    const wpUrl = process.env.NEXT_PUBLIC_WP_URL || 'https://jagmarg.com';
    // The Google Web Stories plugin exposes stories here
    const res = await fetch(`${wpUrl}/wp-json/wp/v2/web-story?_embed&per_page=10`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        stories = data.map((story: any) => {
          const featuredMedia = story._embedded?.['wp:featuredmedia']?.[0];
          const coverImage = featuredMedia?.source_url || story.poster_images?.['story-poster-portrait']?.url || 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=500&h=800&fit=crop';
          return {
            id: story.id,
            link: story.link, // The direct link to the Web Story AMP page
            title: story.title.rendered.replace(/&[^;]+;/g, ''),
            image: coverImage,
          };
        });
      }
    }
  } catch (e) {
    console.error("Failed to fetch web stories", e);
  }

  // If no stories are published yet, use dummy so the UI looks good
  const displayStories = stories.length > 0 ? stories : dummyStories;

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 mb-10 overflow-hidden">
      <div className="flex items-center justify-between mb-4 border-b-2 border-black dark:border-white pb-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#D32F2F] rounded-full animate-pulse" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#1A1A1A] dark:text-white">
            Web Stories
          </h2>
        </div>
      </div>

      {/* Horizontal Scrollable Row */}
      <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {displayStories.map((story: any) => (
          <a 
            key={story.id} 
            href={story.link}
            target={stories.length > 0 ? "_blank" : "_self"}
            className="flex flex-col items-center gap-2 group min-w-[100px] max-w-[100px] snap-start"
          >
            {/* Circular Story Ring */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 group-hover:scale-105 transition-transform duration-300 shadow-md">
              <div className="w-full h-full rounded-full border-2 border-white dark:border-[#0A0A0A] overflow-hidden relative bg-gray-200">
                <Image 
                  src={story.image} 
                  alt={story.title}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xs font-bold text-center leading-tight text-gray-800 dark:text-gray-200 line-clamp-2 group-hover:text-[#D32F2F] transition-colors">
              {story.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
