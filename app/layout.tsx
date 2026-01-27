import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saurav Pandey | Full Stack & ML Engineer',
  description: 'Portfolio showcasing projects in React, Next.js, Go, Python, Bitcoin Trading Analysis, and Machine Learning',
  keywords: ['Saurav Pandey', 'Full Stack Developer', 'ML Engineer', 'React', 'Next.js', 'Go', 'Python', 'Bitcoin', 'Trading Analysis', 'Portfolio'],
  authors: [{ name: 'Saurav Pandey' }],
  openGraph: {
    title: 'Saurav Pandey | Full Stack & ML Engineer',
    description: 'Portfolio showcasing projects in React, Go, Python, and Machine Learning',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="relative z-0 bg-primary">
        {children}
      </body>
    </html>
  );
}
