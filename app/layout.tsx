import './globals.css';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Saurav Pandey | Full Stack & ML Engineer',
  description: 'Portfolio showcasing projects in React, Next.js, Go, Python, Bitcoin Trading Analysis, and Machine Learning',
  keywords: ['Saurav Pandey', 'Full Stack Developer', 'ML Engineer', 'React', 'Next.js', 'Go', 'Python', 'Bitcoin', 'Trading Analysis', 'Portfolio'],
  authors: [{ name: 'Saurav Pandey' }],
  creator: 'Saurav Pandey',
  publisher: 'Saurav Pandey',
  metadataBase: new URL('https://sauravpandey.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Saurav Pandey | Full Stack & ML Engineer',
    description: 'Portfolio showcasing projects in React, Go, Python, and Machine Learning',
    type: 'website',
    locale: 'en_US',
    siteName: 'Saurav Pandey Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurav Pandey | Full Stack & ML Engineer',
    description: 'Portfolio showcasing projects in React, Go, Python, and Machine Learning',
    creator: '@sauravpandey',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Saurav Pandey',
    jobTitle: 'Full Stack & ML Engineer',
    description: 'Full Stack Developer and Machine Learning Engineer specializing in React, Next.js, Go, Python, and Machine Learning',
    url: 'https://sauravpandey.dev',
    sameAs: [
      'https://github.com/sauravpandey',
      'https://linkedin.com/in/sauravpandey',
    ],
    knowsAbout: ['React', 'Next.js', 'Go', 'Python', 'Machine Learning', 'Bitcoin Trading Analysis', 'Web Development'],
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="theme-color" content="#050816" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="relative z-0 bg-primary">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black">
          Skip to main content
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
