'use client';

import React from "react";
import dynamic from "next/dynamic";

import { SectionWrapper } from "@/lib/hoc";
import { technologies } from "@/lib/constants";

// Dynamically import BallCanvas to reduce initial bundle size
const BallCanvas = dynamic(
  () => import("./canvas/Ball").then((mod) => mod.default),
  { ssr: false, loading: () => <div className='w-28 h-28' /> }
);

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 cursor-pointer' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
