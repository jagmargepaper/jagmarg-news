import { MetadataRoute } from 'next';

export async function generateSitemaps() {
  const wpApiUrl = process.env.NEXT_PUBLIC_WP_API_URL || 'https://jagmarg.com/wp-json/wp/v2';
  let totalPages = 45; // default fallback
  try {
    const res = await fetch(wpApiUrl + '/posts?per_page=100&_fields=id', { next: { revalidate: 3600 } });
    if (res.headers.get('x-wp-totalpages')) {
      totalPages = parseInt(res.headers.get('x-wp-totalpages') as string, 10);
    }
  } catch(e) {}

  const sitemaps = [{ id: 0 }]; // id: 0 will be categories and pages and homepage
  for (let i = 1; i <= totalPages; i++) {
    sitemaps.push({ id: i });
  }
  return sitemaps;
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jagmarg.com';
  const wpApiUrl = process.env.NEXT_PUBLIC_WP_API_URL || 'https://jagmarg.com/wp-json/wp/v2';
  const routes: MetadataRoute.Sitemap = [];

  if (id === 0) {
    routes.push({ url: baseUrl, lastModified: new Date(), changeFrequency: 'always', priority: 1.0 });

    try {
      const catRes = await fetch(wpApiUrl + '/categories?per_page=100&_fields=slug', { next: { revalidate: 86400 } });
      if (catRes.ok) {
        const categories = await catRes.json();
        categories.forEach((cat: any) => {
          routes.push({
            url: baseUrl + '/hi/category/' + cat.slug,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 0.9,
          });
        });
      }

      const pageRes = await fetch(wpApiUrl + '/pages?per_page=50&_fields=slug,modified', { next: { revalidate: 86400 } });
      if (pageRes.ok) {
        const pages = await pageRes.json();
        pages.forEach((page: any) => {
          routes.push({
            url: baseUrl + '/' + page.slug,
            lastModified: new Date(page.modified),
            changeFrequency: 'weekly',
            priority: 0.7,
          });
        });
      }
    } catch (e) {
      console.error(e);
    }
    return routes;
  }

  // If id > 0, fetch posts for that page number
  try {
    const postsRes = await fetch(wpApiUrl + '/posts?per_page=100&page=' + id + '&_fields=slug,modified', { next: { revalidate: 3600 } });
    if (postsRes.ok) {
      const posts = await postsRes.json();
      posts.forEach((post: any) => {
        routes.push({
          url: baseUrl + '/hi/' + post.slug,
          lastModified: new Date(post.modified),
          changeFrequency: 'daily',
          priority: 0.8,
        });
      });
    }
  } catch (e) {
    console.error('Sitemap posts error:', e);
  }

  return routes;
}
