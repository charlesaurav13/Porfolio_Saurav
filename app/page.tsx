'use client';

import dynamic from 'next/dynamic';
import { Navbar, Hero, About, Tech, Works, Contact } from '@/components';

// Dynamically import heavy 3D canvas component with no SSR
const StarsCanvas = dynamic(
  () => import('@/components/canvas').then((mod) => mod.StarsCanvas),
  { ssr: false, loading: () => null }
);

export default function Home() {
  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Tech />
      <Works />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
}
