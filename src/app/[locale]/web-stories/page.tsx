import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Play } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Stories | Jagmarg News',
  description: 'Visual news stories, quick updates, and trending topics from Jagmarg News.',
};

const DUMMY_STORIES = [
  { slug: 'story-1', title: 'Top 5 Political Events Today', image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=400&auto=format&fit=crop' },
  { slug: 'story-2', title: 'Cricket World Cup Highlights', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=400&auto=format&fit=crop' },
  { slug: 'story-3', title: 'Stock Market Closing Bell', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&auto=format&fit=crop' },
  { slug: 'story-4', title: 'Weather Alert: Heavy Rain', image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=400&auto=format&fit=crop' },
];

export default async function WebStoriesIndex({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'hi';

  return (
    <main className="min-h-screen bg-[#111] py-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-widest flex items-center gap-3">
          <span className="w-2 h-10 bg-[#D32F2F] inline-block"></span>
          Web Stories
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {DUMMY_STORIES.map((story) => (
            <Link 
              key={story.slug} 
              href={`/${locale}/web-stories/${story.slug}`}
              className="group relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800"
            >
              <Image 
                src={story.image} 
                alt={story.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg leading-tight mb-2 drop-shadow-md">{story.title}</h3>
                <div className="flex items-center gap-2 text-[#D32F2F] text-xs font-black uppercase tracking-widest">
                  <Play className="w-3 h-3 fill-current" />
                  Watch Story
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
