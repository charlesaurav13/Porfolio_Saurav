import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Saurav Pandey | Portfolio',
    short_name: 'Saurav Pandey',
    description: 'Full Stack & ML Engineer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#050816',
    theme_color: '#050816',
    icons: [
      {
        src: '/assets/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
