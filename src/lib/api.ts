const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://jagmarg.com/wp-json/wp/v2';

export async function fetchPosts(limit = 10, page = 1) {
  try {
    const res = await fetch(`${WP_API_URL}/posts?per_page=${limit}&page=${page}&_embed`, {
      next: { revalidate: 60 } // Cache for 60 seconds (ISR)
    });
    if (!res.ok) throw new Error('Failed to fetch posts');
    return await res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function fetchCategories(parentId?: number, perPage: number = 20) {
  try {
    let url = `${WP_API_URL}/categories?hide_empty=true&per_page=${perPage}&orderby=count&order=desc`;
    if (parentId !== undefined) {
      url += `&parent=${parentId}`;
    }
    const res = await fetch(url, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) throw new Error('Failed to fetch categories');
    return await res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function fetchCategoriesBySlugs(slugs: string[]) {
  try {
    const slugsStr = slugs.join(',');
    const url = `${WP_API_URL}/categories?slug=${slugsStr}&hide_empty=true&per_page=100`;
    const res = await fetch(url, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) throw new Error('Failed to fetch categories by slugs');
    return await res.json();
  } catch (error) {
    console.error('Error fetching categories by slugs:', error);
    return [];
  }
}

export async function fetchPostBySlug(slug: string) {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 300 }
    });
    if (!res.ok) throw new Error('Failed to fetch post');
    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}

export async function fetchCategoryBySlug(slug: string) {
  try {
    const res = await fetch(`${WP_API_URL}/categories?slug=${slug}`, {
      next: { revalidate: 3600 }
    });
    const cats = await res.json();
    return cats.length > 0 ? cats[0] : null;
  } catch (error) {
    return null;
  }
}

export async function fetchCategoryById(id: number) {
  try {
    const res = await fetch(`${WP_API_URL}/categories/${id}`, {
      next: { revalidate: 3600 }
    });
    const cat = await res.json();
    return cat.id ? cat : null;
  } catch (error) {
    return null;
  }
}

export async function fetchChildCategories(parentId: number) {
  try {
    const res = await fetch(`${WP_API_URL}/categories?parent=${parentId}&hide_empty=false`, {
      next: { revalidate: 3600 }
    });
    return await res.json();
  } catch (error) {
    return [];
  }
}

export async function fetchPostsByCategory(categoryId: number, limit = 15, page = 1) {
  try {
    const res = await fetch(`${WP_API_URL}/posts?categories=${categoryId}&per_page=${limit}&page=${page}&_embed`, {
      next: { revalidate: 300 }
    });
    return await res.json();
  } catch (error) {
    return [];
  }
}

// In WordPress, tags are often used for States/Cities if hierarchical categories aren't configured.
// Or we can query categories for states if they are parent categories. We'll support both via tags for now.
export async function fetchTagBySlug(slug: string) {
  try {
    const res = await fetch(`${WP_API_URL}/tags?slug=${slug}`, {
      next: { revalidate: 3600 }
    });
    const tags = await res.json();
    return tags.length > 0 ? tags[0] : null;
  } catch (error) {
    return null;
  }
}

export async function fetchPostsByTag(tagId: number, limit = 15, page = 1) {
  try {
    const res = await fetch(`${WP_API_URL}/posts?tags=${tagId}&per_page=${limit}&page=${page}&_embed`, {
      next: { revalidate: 300 }
    });
    return await res.json();
  } catch (error) {
    return [];
  }
}
export async function fetchPageBySlug(slug: string) {
  try {
    const res = await fetch(`${WP_API_URL}/pages?slug=${slug}&_embed`, { next: { revalidate: 3600 } });
    const pages = await res.json();
    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    return null;
  }
}
export async function fetchSearchResults(query: string, limit = 15, page = 1) {
  try {
    const res = await fetch(`${WP_API_URL}/posts?search=${encodeURIComponent(query)}&per_page=${limit}&page=${page}&_embed`, {
      next: { revalidate: 60 }
    });
    return await res.json();
  } catch (error) {
    return [];
  }
}

export async function getArticleUrl(post: any, locale: string = 'hi') {
  // Try to find the category slug to build the correct URL
  // If the post has embedded terms (categories), use the first one
  let categorySlug = 'uncategorized';
  
  if (post._embedded && post._embedded['wp:term']) {
    const categories = post._embedded['wp:term'][0];
    if (categories && categories.length > 0) {
      // Find the first category that isn't 'uncategorized' if possible
      const validCat = categories.find((c: any) => c.slug !== 'uncategorized') || categories[0];
      categorySlug = validCat.slug;
    }
  }

  // Next.js Catch-all route format: /[locale]/india/[category]/[post-slug]
  // We use 'india' as the default country base as requested
  return `/${locale}/india/${categorySlug}/${post.slug}`;
}

export async function getLatestYouTubeVideos(channelId: string) {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      next: { revalidate: 3600 }
    });
    
    if (res.ok) {
      const text = await res.text();
      const entries = text.split('<entry>').slice(1);
      
      const videos = entries.map(entry => {
        const idMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
        const titleMatch = entry.match(/<title>(.*?)<\/title>/);
        
        return {
          id: idMatch ? idMatch[1] : '',
          title: titleMatch ? titleMatch[1] : ''
        };
      }).filter(v => v.id);
      
      if (videos.length > 0) return videos;
    }
  } catch (err) {
    console.error('Error fetching youtube:', err);
  }

  // Fallback: If RSS is 404ing (which happens for some channels without standard feeds),
  // we return the actual latest videos hardcoded for Dainik Jagmarg to ensure they display.
  // In production, this can be replaced by a youtube data API call.
  return [
    {
      "id": "qSx7mxg3a5c",
      "title": "🎵 पाकिस्तान की पुलिस अफसर को हरियाणवी गानों का क्रेज!"
    },
    {
      "id": "GVwOPo-wm-s",
      "title": "हरियाणा में छात्र आंदोलन की गूंज तेज!"
    },
    {
      "id": "XLToB41-Xvs",
      "title": "2 साल की उम्र में पोलियो. 26 की उम्र में पति ने छोड़ा. घर बेचकर ट्रेनिंग की…"
    },
    {
      "id": "_kQdL6QK2Vg",
      "title": "धर्मेंद्र प्रधान के इस्तीफा के बाद देखिए दिल्ली से CJP की Press Conference"
    },
    {
      "id": "IX8VsSc1ebw",
      "title": "हरियाणा BJP में फिर छिड़ी अंदरूनी कलह!"
    },
    {
      "id": "eGf4F63xa88",
      "title": "जंतर-मंतर प्रदर्शन में घायल साक्षी पर अस्पताल में कड़ा पहरा क्यों?"
    },
    {
      "id": "O6vXO30DVnw",
      "title": "🚨 पानीपत से हैरान करने वाला मामला!"
    }
  ];
}
