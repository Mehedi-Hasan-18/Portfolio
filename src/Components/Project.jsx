import React from "react";
import PhiMart from "../assets/PhiMart.png";
import DailyNews from "../assets/Daily News.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const projects = [
  {
    title: "PhiMart",
    image: PhiMart,
    description:
      "A full-stack e-commerce platform handling product listings, integrating Django REST APIs with React frontend. Developed secure user authentication system and admin dashboard reducing product management time by 70%. Architected responsive design using Tailwind CSS, achieving 95% mobile compatibility score.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Vite","Supabase","Vercel","Django","RESTful API"],
    liveUrl: "https://phiimart.netlify.app/",
    codeUrl: "https://github.com/Mehedi-Hasan-18/PhiMart-Client",
  },
  {
    title: "Daily News",
    image: DailyNews,
    description:
      "Created a scalable news platform handling news listings, integrating Django REST APIs with React frontend. Architected secure JWT-based authentication system and admin endpoints, achieving 99.9% uptime. Reducing response time by 40%. Architected responsive design using Tailwind CSS, achieving 95% mobile compatibility score..",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Vite","Supabase","Vercel","Django","RESTful API"],
    liveUrl: "https://dailyneeews.netlify.app/",
    codeUrl: "https://github.com/Mehedi-Hasan-18/Daily-News-Client",
  },
];

const Project = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <h1 className="text-center font-bold mt-15 mb-5 text-4xl text-indigo-500 ">PROJECT</h1>

      {/* Grid layout */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // 2 slides on tablets+
          1024: { slidesPerView: 2 }, // 2 slides on desktop
        }}
      >
        {projects.map((p) => (
          <SwiperSlide key={p.title}>
            <ProjectCard {...p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project;
