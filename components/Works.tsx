'use client';

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "@/lib/styles";
import { SectionWrapper } from "@/lib/hoc";
import { projects } from "@/lib/constants";
import { fadeIn, textVariant } from "@/lib/motion";

const github = "/assets/github.png";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: Array<{ name: string; color: string }>;
  image: any;
  source_code_link: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <Image
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            priority={index < 2}
            quality={85}
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              aria-label={`View source code for ${name}`}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-0 p-0'
            >
              <Image
                src={github}
                alt=''
                className='w-1/2 h-1/2 object-contain'
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section aria-labelledby="projects-heading">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 id="projects-heading" className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects demonstrate my skills and 
          experience through tangible examples of my work in real-world scenarios. 
          Each project is briefly described and accompanied by links to code repositories 
          and live demos, showcasing my ability to tackle complex challenges, proficiency in working 
          with various technologies, and effective project management.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "work");
