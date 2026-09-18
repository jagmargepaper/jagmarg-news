import { NextResponse } from 'next/server';

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://jagmarg.com/wp-json/wp/v2';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jagmarg.com';

export async function GET() {
  try {
    const date = new Date();
    date.setHours(date.getHours() - 48);
    const after = date.toISOString();

    const res = await fetch(WP_API_URL + '/posts?after=' + after + '&per_page=100', {
      next: { revalidate: 300 }
    });
    
    if (!res.ok) throw new Error('Failed to fetch');
    const posts = await res.json();

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n';

    posts.forEach((post: any) => {
      const postUrl = SITE_URL + '/hi/' + post.slug;
      const title = post.title.rendered.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const pubDate = new Date(post.date_gmt || post.date).toISOString();

      xml += '  <url>\n';
      xml += '    <loc>' + postUrl + '</loc>\n';
      xml += '    <news:news>\n';
      xml += '      <news:publication>\n';
      xml += '        <news:name>Jagmarg News</news:name>\n';
      xml += '        <news:language>hi</news:language>\n';
      xml += '      </news:publication>\n';
      xml += '      <news:publication_date>' + pubDate + '</news:publication_date>\n';
      xml += '      <news:title>' + title + '</news:title>\n';
      xml += '    </news:news>\n';
      xml += '  </url>\n';
    });

    xml += '</urlset>';

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating Google News sitemap:', error);
    return new NextResponse('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      headers: { 'Content-Type': 'application/xml' }
    });
  }
}
