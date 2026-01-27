'use client';

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import { SectionWrapper } from "@/lib/hoc";
import { technologies } from "@/lib/constants";

// Dynamically import BallCanvas to reduce initial bundle size
const BallCanvas = dynamic(
  () => import("./canvas/Ball").then((mod) => mod.default),
  { 
    ssr: false, 
    loading: () => (
      <div className='w-28 h-28 bg-tertiary rounded-full animate-pulse' />
    )
  }
);

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-28 h-28 cursor-pointer' key={technology.name}>
          <Suspense fallback={<div className='w-28 h-28 bg-tertiary rounded-full animate-pulse' />}>
            <BallCanvas icon={technology.icon} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
