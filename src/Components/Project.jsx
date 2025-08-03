import React from "react";
import PhiMart from "../assets/PhiMart.png";
import DailyNews from "../assets/Daily News.png";
import event_m from '../assets/Event_P.png';
import ProjectCard from "./ProjectCard";
import NoImg from '../assets/No Photo Img.jpg'
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
  {
    title: "Event Management",
    image: event_m,
    description:
      "This is a event management website .Where Admin can Add Participant to a event . Can Remove Them also. And Admin Can Manage all the event at once . Add New event , delete, and also can edit",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Vite","Django",'Render'],
    liveUrl: "https://event-management-4ayd.onrender.com/events/dashboard/",
    codeUrl: "https://github.com/Mehedi-Hasan-18/event_management",
  },
  {
    title: "Task Management",
    image: NoImg,
    description:
      "This is a task management website .Where normal user can Add task, Remove task edit task also can delete task",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Vite","Django",'Render'],
    liveUrl: "#",
    codeUrl: "https://github.com/Mehedi-Hasan-18/task_management",
  },
  {
    title: "Library Management",
    image: NoImg,
    description:
      "Library Management is a Backend Project using Django. In This Web Api i create role based access. Jwt Authentication. Email varication. Functionality of add books, delete books, manage brrow and return information and so on",
    tags: ["Vite","Supabase","Render","Django","RESTful API"],
    liveUrl: "#",
    codeUrl: "https://github.com/Mehedi-Hasan-18/Library-Management-System",
  },
];

const Project = () => {
  return (
    <section className="md:max-w-7xl md:mx-auto md:px-4">
      <h1 className="text-center font-bold mt-15 mb-5 text-4xl text-indigo-500 ">PROJECT</h1>

      {/* Grid layout */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {projects.map((p) => (
          <SwiperSlide className="w-full" key={p.title}>
            <ProjectCard className="w-full" {...p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project;
