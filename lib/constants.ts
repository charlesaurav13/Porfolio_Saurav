import logo from "@/public/assets/logo.svg";
import backend from "@/public/assets/backend.png";
import creator from "@/public/assets/creator.png";
import mobile from "@/public/assets/mobile.png";
import web from "@/public/assets/web.png";
import github from "@/public/assets/github.png";
import menu from "@/public/assets/menu.svg";
import close from "@/public/assets/close.svg";

import css from "@/public/assets/tech/css.png";
import git from "@/public/assets/tech/git.png";
import html from "@/public/assets/tech/html.png";
import javascript from "@/public/assets/tech/javascript.png";
import mongodb from "@/public/assets/tech/mongodb.png";
import nodejs from "@/public/assets/tech/nodejs.png";
import reactjs from "@/public/assets/tech/reactjs.png";
import tailwind from "@/public/assets/tech/tailwind.png";
import blog from "@/public/assets/blog.png";
import unsplash from "@/public/assets/unsplash.png";
import movie from "@/public/assets/movie.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "ML Engineer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Project Leader",
    icon: creator,
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

export const projects = [
  {
    name: "Blog Website",
    description:
      "This is a blog website where you can edit,delete posts and see others posts with login and register functionalities.This project is made with ReactJS for the Front-end Development and NodeJS as a Backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/charlesaurav13/Blog_Website",
  },
  {
    name: "Movie Website",
    description:
      "This project is developed using ReactJS and it uses IMDB API to fetch the latest movies to display to the user ans also provide with search bar implementaion to get different genres like action,comedy,horror,Sci-fi etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://moviewebsite13.netlify.app/",
  },
  {
    name: "Unsplash Website",
    description:
      "A Dynamic Website developed using ReactJS to fetch data from Unsplash API and display it to users for interactive exploration. Enjoy fresh and new images with every refresh, making the experience truly captivating.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "UnsplashAPI",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: unsplash,
    source_code_link: "https://image-gallery-two-pi.vercel.app/",
  },
];
