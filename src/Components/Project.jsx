import React from "react";
import PhiMart from "../assets/PhiMart.png";
import DailyNews from "../assets/Daily News.png";
import tripbooking_public from "../assets/tripbooking_public.png";
import ProjectCard from "./ProjectCard";
import NoImg from "../assets/No Photo Img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Experience from "./Exprience";
import ScrollFloat from "./ScrollFloat";
import AnimatedContent from "./AnimatedContent";

const projects = [
  {
  id: "tripbooking-public",
  title: "tripbooking.ai — AI Hotel Booking Platform",
  image: tripbooking_public,
  description:
    "Worked as a Frontend Developer at tripbooking.ai, developing and maintaining the company's public-facing hotel booking platform. Built responsive and reusable UI components using React, TypeScript, and Tailwind CSS, integrated REST APIs, optimized performance, and collaborated closely with UI/UX designers and backend engineers to deliver a fast, seamless booking experience across desktop and mobile devices.",
  tags: [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "REST API",
    "Responsive Design",
    "Git",
    "Frontend Development",
  ],
  liveUrl: "https://tripbooking.ai",
  codeUrl: "",
},
  {
    id: "phimart",
    title: "PhiMart",
    image: PhiMart,
    description:
      "A full-stack e-commerce platform handling product listings, integrating Django REST APIs with React frontend. Developed secure user authentication system and admin dashboard reducing product management time by 70%. Architected responsive design using Tailwind CSS, achieving 95% mobile compatibility score.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind",
      "Vite",
      "Supabase",
      "Vercel",
      "Django",
      "RESTful API",
    ],
    liveUrl: "https://phiimart.netlify.app/",
    codeUrl: "https://github.com/Mehedi-Hasan-18/PhiMart-Client",
  },
  {
    id: "dailynews",
    title: "Daily News",
    image: DailyNews,
    description:
      "Created a scalable news platform handling news listings, integrating Django REST APIs with React frontend. Architected secure JWT-based authentication system and admin endpoints, achieving 99.9% uptime. Reducing response time by 40%. Architected responsive design using Tailwind CSS, achieving 95% mobile compatibility score..",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind",
      "Vite",
      "Supabase",
      "Vercel",
      "Django",
      "RESTful API",
    ],
    liveUrl: "https://dailyneeews.netlify.app/",
    codeUrl: "https://github.com/Mehedi-Hasan-18/Daily-News-Client",
  },
  
];

const Project = () => {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
    >
      <section id="work" className="md:max-w-7xl md:mx-auto md:px-4 px-6 py-20 md:py-24">
        <div className="text-center mb-14">
          <p className="eyebrow">01 — Experience & Projects</p>
          <div className="text-4xl mt-4 text-center md:text-5xl font-black tracking-tight text-white">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=70%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Professional Experience & Projects
            </ScrollFloat>
          </div>
          <p className="text-zinc-500 text-sm md:text-base mt-4">
            Highlights of my career and key projects showcasing my skills &
            impact.
          </p>
        </div>
        {/* Exprience Section */}
        <Experience />
        {/* Grid layout */}
        <div className="text-4xl text-center md:text-5xl font-black tracking-tight text-white mt-8 mb-3">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=70%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            My Projects
          </ScrollFloat>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, index) => (
            <ProjectCard
              className="w-full"
              key={p.id}
              projectId={p.id}
              index={index}
              {...p}
            />
          ))}
        </div>
      </section>
    </AnimatedContent>
  );
};

export default Project;
