import React from "react";
import PhiMart from "../assets/PhiMart.png";
import DailyNews from "../assets/Daily News.png";
import job_tracker from "../assets/job_tracker.png";
import ProjectCard from "./ProjectCard";
import NoImg from "../assets/No Photo Img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Experience from "./Exprience";

const projects = [
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
  {
    id: "jobtracker",
    title: "JobTrackr — Full Stack Web App",
<<<<<<< HEAD
    image: job_tracker,
=======
    image: event_m,
>>>>>>> 714bffe18581cc8fce621e31382e5a203bf3d419
    description:
      "Built REST API with DRF serving 8 endpoints with JWT authentication. Implemented async email reminders using Celery + Upstash Redis. Auto-status system that detects ghosted applications after 30 days. Deployed backend on Render, frontend on Vercel with CI/CD via GitHub",
    tags: [
      "Django REST Framework",
      "Redis",
      "JavaScript",
      "React",
      "Tailwind",
      "JWT Auth",
      "Django",
      "PostgreSQL",
      "Celery"
    ],
    liveUrl: "https://jobtraker.netlify.app/",
    codeUrl: "https://github.com/Mehedi-Hasan-18/job_tracker_frontend",
  },
];

const Project = () => {
  return (
    <section className="md:max-w-7xl md:mx-auto md:px-4 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          <span className="text-indigo-500">
            Professional Experience & Projects
          </span>
        </h2>
        <p className="text-white/70 text-sm md:text-base">
          Highlights of my career and key projects showcasing my skills &
          impact.
        </p>
      </div>
      {/* Exprience Section */}
      <Experience />
      {/* Grid layout */}
      <h2 className="text-3xl text-center md:text-4xl font-bold text-white mb-3">
        <span className="text-indigo-500">My Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <ProjectCard className="w-full" key={p.id} projectId={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Project;