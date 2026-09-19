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

export function getArticleUrl(article: any, locale: string) {
  if (!article) return `/${locale}`;
  
  const terms = article._embedded && article._embedded['wp:term'] ? article._embedded['wp:term'][0] : [];
  let categorySlug = 'news';
  
  if (terms && terms.length > 0) {
    // WordPress usually includes parent ID. Parent = 0 means it's a top-level category (e.g. State)
    const parentCategory = terms.find((t: any) => t.parent === 0);
    if (parentCategory) {
      categorySlug = parentCategory.slug;
    } else {
      // Fallback: use the last term, or first if only one
      categorySlug = terms[terms.length - 1].slug;
    }
  }
  
  return `/${locale}/india/${categorySlug}/${article.slug}`;
}
