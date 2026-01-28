'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { styles } from "@/lib/styles";
import { navLinks } from "@/lib/constants";

const logo = "/assets/logo.svg";
const menu = "/assets/menu.svg";
const close = "/assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          aria-label="Home - Saurav Pandey Portfolio"
        >
          <Image 
            src={logo} 
            style={{mixBlendMode:"inherit", borderRadius:"25%"}} 
            alt='Saurav Pandey logo' 
            className='w-[3.5rem] h-9 object-contain' 
            width={56}
            height={36}
            priority
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Saurav &nbsp;
            <span className='sm:block hidden'> | Web Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10' role='navigation' aria-label='Main navigation'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} aria-label={`Navigate to ${nav.title} section`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? 'Close menu' : 'Open menu'}
            aria-expanded={toggle}
            aria-controls='mobile-menu'
            className='w-[28px] h-[28px] cursor-pointer bg-transparent border-0 p-0'
          >
            <Image
              src={toggle ? close : menu}
              alt=''
              className='w-[28px] h-[28px] object-contain'
              width={28}
              height={28}
            />
          </button>

          <div
            id='mobile-menu'
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            role='navigation'
            aria-label='Mobile navigation'
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} aria-label={`Navigate to ${nav.title} section`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
