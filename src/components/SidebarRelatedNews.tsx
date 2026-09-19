import React from 'react';
import { fetchPostsByCategory } from '@/lib/api';
import SidebarWidget from '@/components/SidebarWidget';

export default async function SidebarRelatedNews({ categoryId, currentSlug }: { categoryId?: number, currentSlug: string }) {
  if (!categoryId) return null;

  // Fetch related posts for the right sidebar
  const relatedPosts = await fetchPostsByCategory(categoryId, 5, 1);
  
  // Filter out current post
  const sidebarPosts = relatedPosts.filter((p: any) => p.slug !== currentSlug).slice(0, 4);

  if (sidebarPosts.length === 0) return null;

  return (
    <div className="sticky top-24 h-fit pb-12">
      <SidebarWidget title="Related News" posts={sidebarPosts} />
    </div>
  );
}
