import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PhiMart from "../assets/PhiMart.png";
import PhiMart1 from "../assets/PhiMart1.png";
import PhiMart2 from "../assets/PhiMart2.png";
import DailyNews from "../assets/DailyNews.png";
import DailyNews1 from "../assets/DailyNews1.png";
import DailyNews2 from "../assets/DailyNews2.png";
import event_m from "../assets/event_m.png";
import event_m1 from "../assets/event_m1.png";
import event_m2 from "../assets/event_m2.png";

const projectsData = {
  phimart: {
    id: "phimart",
    title: "PhiMart",
    image: PhiMart,
    shortDescription:
      "A full-stack e-commerce platform handling product listings, integrating Django REST APIs with React frontend.",
    fullDescription:
      "PhiMart is a comprehensive e-commerce solution designed to handle modern online shopping requirements. The platform seamlessly integrates Django REST APIs with a React-based frontend, providing a smooth user experience across all devices. We implemented a secure user authentication system with JWT tokens and developed a powerful admin dashboard that reduces product management time by 70%. The responsive design, built using Tailwind CSS, achieves 95% mobile compatibility score and ensures accessibility across all devices.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vite",
      "Supabase",
      "Vercel",
      "Django",
      "RESTful API",
      "JWT Authentication",
    ],
    features: [
      "Full-stack e-commerce platform with product listings",
      "Secure JWT-based user authentication system",
      "Admin dashboard for product management",
      "Shopping cart and checkout functionality",
      "Order tracking and management",
      "Responsive design optimized for mobile",
      "95% mobile compatibility score",
      "70% reduction in product management time",
    ],
    images: [PhiMart, PhiMart1, PhiMart2],
    liveUrl: "https://phiimart.netlify.app/",
    codeUrl: "https://github.com/Mehedi-Hasan-18/PhiMart-Client",
    highlights: ["Secure Authentication", "Admin Dashboard", "Mobile Optimized"],
  },
  dailynews: {
    id: "dailynews",
    title: "Daily News",
    image: DailyNews,
    shortDescription:
      "Created a scalable news platform handling news listings, integrating Django REST APIs with React frontend.",
    fullDescription:
      "Daily News is a scalable news platform built to handle high-traffic news listings and content delivery. The platform integrates Django REST APIs with a modern React frontend, providing a seamless reading experience. We architected a secure JWT-based authentication system and admin endpoints, achieving 99.9% uptime with 40% reduced response time. The responsive design using Tailwind CSS ensures 95% mobile compatibility, making news accessible to users on any device.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vite",
      "Supabase",
      "Vercel",
      "Django",
      "RESTful API",
      "JWT Authentication",
    ],
    features: [
      "Scalable news platform with high-traffic handling",
      "Secure JWT-based authentication and authorization",
      "Admin endpoints for content management",
      "News categorization and filtering",
      "Search functionality across news articles",
      "99.9% uptime achievement",
      "40% response time reduction",
      "Responsive mobile-first design",
    ],
    images: [DailyNews, DailyNews1, DailyNews2],
    liveUrl: "https://dailyneeews.netlify.app/",
    codeUrl: "https://github.com/Mehedi-Hasan-18/Daily-News-Client",
    highlights: ["High Performance", "99.9% Uptime", "JWT Security"],
  },
  eventmanagement: {
    id: "eventmanagement",
    title: "Event Management",
    image: event_m,
    shortDescription:
      "A comprehensive event management website where admins can manage events, add/remove participants, and handle all event operations.",
    fullDescription:
      "Event Management is a comprehensive platform designed to simplify event organization and participant management. Admins have full control over event creation, editing, and deletion. The platform allows seamless participant management with the ability to add or remove attendees from events. Built with modern technologies including React, Tailwind CSS, and Django backend, this application provides an intuitive interface for managing multiple events simultaneously with real-time updates.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vite",
      "Django",
      "Render",
      "PostgreSQL",
    ],
    features: [
      "Complete event management system",
      "Admin dashboard for event operations",
      "Participant management and tracking",
      "Event creation, editing, and deletion",
      "Real-time participant updates",
      "Event categorization",
      "Attendee list and registration",
      "Event scheduling and calendar view",
    ],
    images: [event_m, event_m1, event_m2],
    liveUrl: "https://event-management-4ayd.onrender.com/events/dashboard/",
    codeUrl: "https://github.com/Mehedi-Hasan-18/event_management",
    highlights: ["Full Admin Control", "Participant Tracking", "Real-time Updates"],
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen pb-5 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-5 bg-gray-950">
      {/* Header Section */}
      <div className="pt-20 pb-10">
        <button
          onClick={() => navigate("/")}
          className="ml-6 md:ml-10 mb-6 flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition"
        >
          <span>←</span> Back to Projects
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-4">
        {/* Title Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-white/70 text-lg max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {project.highlights.map((highlight) => (
            <div
              key={highlight}
              className="bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 border border-white/10 rounded-lg p-4"
            >
              <p className="text-white font-semibold text-center">{highlight}</p>
            </div>
          ))}
        </div>

        {/* Full Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">About This Project</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Technologies Used */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-indigo-500/20 border border-indigo-400/50 text-indigo-300 px-4 py-2 rounded-full text-sm md:text-base hover:bg-indigo-500/30 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/60 border border-white/10 rounded-lg p-4 hover:border-indigo-400/50 transition"
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white text-sm font-bold">
                      ✓
                    </span>
                  </div>
                  <p className="text-white">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border border-white/10 hover:border-indigo-400/50 transition cursor-pointer h-48 md:h-64"
              >
                <img
                  src={img}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg text-center transition transform hover:scale-105"
          >
            View Live Project
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg text-center border border-white/20 transition transform hover:scale-105"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
