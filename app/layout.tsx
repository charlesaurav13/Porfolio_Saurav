import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saurav - Web Developer & ML Engineer',
  description: 'Portfolio of Saurav - Machine Learning Engineer and Web Developer specializing in React, Node.js, and AI',
  keywords: ['web developer', 'machine learning', 'react', 'nextjs', 'portfolio'],
  authors: [{ name: 'Saurav' }],
  openGraph: {
    title: 'Saurav - Web Developer & ML Engineer',
    description: 'Portfolio of Saurav showcasing web development and machine learning projects',
    type: 'website',
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
