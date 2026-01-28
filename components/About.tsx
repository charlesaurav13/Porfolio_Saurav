'use client';

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "@/lib/styles";
import { services } from "@/lib/constants";
import { SectionWrapper } from "@/lib/hoc";
import { fadeIn, textVariant } from "@/lib/motion";

const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: any }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
          width={64}
          height={64}
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section aria-labelledby="about-heading">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 id="about-heading" className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a FullStack Developer, my experience spans web design and development. 
        I possess a strong expertise in Frontend Development utilizing ReactJS. 
        On the Backend side, I am proficient in NodeJS and have knowledge of both SQL 
        and NoSQL databases, including MongoDB. Additionally, I have a good understanding 
        of Machine Learning, 
        with the ability to train datasets using various models in Python.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
