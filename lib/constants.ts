// Using string paths for Next.js optimization
const logo = "/assets/logo.svg";
const backend = "/assets/backend.png";
const creator = "/assets/creator.png";
const mobile = "/assets/mobile.png";
const web = "/assets/web.png";
const github = "/assets/github.png";
const menu = "/assets/menu.svg";
const close = "/assets/close.svg";

const css = "/assets/tech/css.png";
const git = "/assets/tech/git.png";
const html = "/assets/tech/html.png";
const javascript = "/assets/tech/javascript.png";
const mongodb = "/assets/tech/mongodb.png";
const nodejs = "/assets/tech/nodejs.png";
const reactjs = "/assets/tech/reactjs.png";
const tailwind = "/assets/tech/tailwind.png";
const blog = "/assets/blog.png";
const unsplash = "/assets/unsplash.png";
const movie = "/assets/movie.png";

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
