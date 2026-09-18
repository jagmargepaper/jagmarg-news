import React from 'react';
import { fetchSearchResults } from '@/lib/api';
import NewsFeedLayout from '@/components/NewsFeedLayout';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>,
  searchParams: Promise<{ q?: string }>
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q || '';
  return { 
    title: query ? `Search results for "${query}" | Jagmarg News` : 'Search | Jagmarg News',
    robots: { index: false, follow: true } // Don't index search results
  };
}

export default async function SearchPage({ params, searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q || '';
  let posts = [];
  
  if (query) {
    posts = await fetchSearchResults(query, 24);
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-gray-900">
      <div className="bg-[#1A1A1A] py-16 px-6 text-center border-b-[6px] border-[#D32F2F]">
        <span className="text-[#D32F2F] font-black uppercase tracking-widest text-sm mb-4 block">Search Results</span>
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider">
          {query ? `"${query}"` : 'Enter a search term'}
        </h1>
        {query && <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Found {posts.length > 0 ? 'matching articles' : 'no articles'} for your search.</p>}
      </div>
      <div className="-mt-12">
        {posts.length > 0 ? (
          <NewsFeedLayout initialPosts={posts} feedTitle="Search Results" />
        ) : (
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-20 text-center dark:text-white">
            <h2 className="text-2xl font-bold text-gray-400">No results found.</h2>
            <p className="mt-2 text-gray-500">Try adjusting your search query.</p>
          </div>
        )}
      </div>
    </main>
  );
}
