import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jagmarg News',
    short_name: 'Jagmarg',
    description: 'Har Khabar Ka Seedha Rasta. India\'s premium national and regional news platform.',
    start_url: '/en',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#D32F2F',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
