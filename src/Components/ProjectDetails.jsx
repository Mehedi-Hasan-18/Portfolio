import { Link, useParams } from "react-router-dom";
import PhiMart from "../assets/PhiMart.webp";
import PhiMart1 from "../assets/PhiMart1.webp";
import PhiMart2 from "../assets/PhiMart2.webp";
import DailyNews from "../assets/DailyNews.webp";
import DailyNews1 from "../assets/DailyNews1.webp";
import DailyNews2 from "../assets/DailyNews2.webp";
import tripbooking_public from "../assets/tripbooking_public.webp";
import syncme from "../assets/syncme.png";
import Seo from "./Seo";
import { BUILD_DATE, PAGE_SEO } from "../data/site";

const projectsData = {
  phimart: {
    id: "phimart",
    title: "PhiMart",
    summary:
      "PhiMart is an e-commerce platform for online shoppers, built by Mehedi Hasan with a React frontend and Django REST APIs. It brings product listings together with JWT-based authentication and an admin dashboard for product management. Its responsive interface uses Tailwind CSS and connects frontend shopping features to backend services.",
    problem:
      "The project brings product listings, user authentication, and product management together in a responsive e-commerce application.",
    role:
      "Mehedi Hasan developed the React frontend, integrated Django REST APIs, implemented JWT authentication, and built the admin dashboard.",
    outcome:
      "The existing project description reports a 70% reduction in product-management time and a 95% mobile compatibility score.",
    image: PhiMart,
    imageSizes: [[1909, 819], [1917, 876], [1906, 873]],
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
    highlights: [
      "Secure Authentication",
      "Admin Dashboard",
      "Mobile Optimized",
    ],
  },
  dailynews: {
    id: "dailynews",
    title: "Daily News",
    summary:
      "Daily News is a responsive news platform for readers, created by Mehedi Hasan with a React frontend and Django REST APIs. It combines news listings with JWT-based authentication and admin endpoints for content management. The project demonstrates connecting frontend features to backend APIs and organizing a mobile-first reading experience with Tailwind CSS.",
    problem:
      "The project brings news listings, authentication, and content-management endpoints together in a responsive application.",
    role:
      "Mehedi Hasan created the platform and worked on its React frontend, API integration, authentication, and responsive presentation.",
    outcome:
      "The existing project description reports 99.9% uptime, a 40% response-time reduction, and a 95% mobile compatibility score.",
    image: DailyNews,
    imageSizes: [[1908, 862], [1908, 874], [1910, 876]],
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
  // jobtracker: {
  //   id: "jobtracker",
  //   title: "JobTrackr — Full Stack Web App",
  //   image: job_tracker,
  //   shortDescription:
  //     "A Complete Web App to track your all job in one place",
  //   fullDescription:
  //     "With The Help of this Job Tracker Webapp you can manage your job application very smartly with one place. If You don't get any reply within 30 days it's automaticly go to Ghost option. EveryDay 9 am a self reminder email will remind you about your application.",
  //   technologies: [
  //     "Django REST Framework",
  //     "Redis",
  //     "JavaScript",
  //     "React",
  //     "Tailwind",
  //     "JWT Auth",
  //     "Django",
  //     "PostgreSQL",
  //     "Celery",
  //   ],
  //   features: [
  //     "Built REST API with DRF serving 8 endpoints with JWT authentication.",
  //     "Implemented async email reminders using Celery + Upstash Redis.",
  //     "Auto-status system that detects ghosted applications after 30 days.",
  //     "Deployed backend on Render, frontend on Nitlify with CI/CD via GitHub",
  //   ],
  //   images: [job_tracker],
  //   liveUrl: "https://jobtraker.netlify.app/",
  //   codeUrl: "https://github.com/Mehedi-Hasan-18/job_tracker_frontend",
  //   highlights: [
  //     "Track Job Application",
  //     "Auto email Remainder",
  //     "Search and Filter Option",
  //   ],
  // },
  "tripbooking-public": {
  id: "tripbooking-public",
  title: "tripbooking.ai — AI Hotel Booking Platform",
  summary:
    "tripbooking.ai is a public hotel-booking platform for people planning hotel stays. Mehedi Hasan contributed as a Frontend Developer, building responsive and reusable interfaces with React, TypeScript, and Tailwind CSS. His work included REST API integration, performance optimization, and collaboration with designers and backend engineers across desktop and mobile experiences.",
  problem:
    "The public booking experience needs responsive interfaces that present hotel and booking information while connecting to REST APIs.",
  role:
    "Mehedi Hasan worked as a Frontend Developer, building and maintaining reusable UI components, integrating REST APIs, and optimizing performance.",
  outcome:
    "The project description documents responsive interface development, REST API integration, and performance optimization; it provides no measured outcome.",
  // TODO: Add a verified project outcome when a measured result is available.
  image: tripbooking_public,
  imageSizes: [[1902, 887]],
  shortDescription:
    "Contributed to the development of a production AI-powered hotel booking platform as a Frontend Developer.",
  fullDescription:
    "As a Frontend Developer at tripbooking.ai, I worked on the company's public-facing hotel booking platform, developing new features and maintaining existing ones. I built responsive and reusable UI components using React, TypeScript, and Tailwind CSS, integrated REST APIs, optimized application performance, and collaborated closely with UI/UX designers, backend engineers, and product managers to deliver a seamless hotel booking experience across desktop and mobile devices.",
  technologies: [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "REST API",
    "Git",
    "Responsive Design",
    "Frontend Development",
  ],
  features: [
    "Developed and maintained production-ready frontend features for the public booking platform.",
    "Built reusable, responsive UI components using React, TypeScript, and Tailwind CSS.",
    "Integrated REST APIs to display hotel listings, booking information, and dynamic content.",
    "Optimized application performance to improve loading speed and user experience.",
    "Collaborated with UI/UX designers and backend developers to deliver new features.",
    "Participated in code reviews, bug fixes, and continuous improvements within an Agile development team.",
  ],
  images: [tripbooking_public],
  liveUrl: "https://tripbooking.ai",
  codeUrl: "",
  highlights: [
    "Frontend Development",
    "Production Application",
    "Responsive UI",
    "REST API Integration",
    "Performance Optimization",
  ],
},
syncme: {
  id: "syncme",
  title: "SyncMe — Shared Clipboard for All Devices",
  summary:
    "SyncMe is a shared clipboard for people who want to move text between their own phones, laptops, and tablets. Mehedi Hasan built it with React, TypeScript, WebRTC, Supabase, and Yjs. Devices exchange clipboard content peer-to-peer, while Supabase stores workspace and device membership metadata rather than clipboard content.",
  problem:
    "SyncMe addresses the need to share clipboard text across a person's devices without storing that content on a server.",
  role:
    "Mehedi Hasan built the application using React and TypeScript, with WebRTC for peer-to-peer transfers, Yjs for collaborative text merging, and Supabase for workspace management.",
  outcome:
    "The project is designed so clipboard text travels peer-to-peer and is not stored on a server; no measured performance results are listed.",
  image: syncme,
  imageSizes: [[1918, 887]],
  shortDescription:
    "A peer-to-peer shared clipboard that keeps text in sync across phones, laptops, and tablets — with nothing stored on a server.",
  fullDescription:
    "SyncMe gives every device you own one shared clipboard. Instead of emailing links to yourself or pasting snippets into a chat, you can type on your phone and watch the text appear instantly on your laptop. Devices connect directly over encrypted WebRTC, so clipboard content always stays peer-to-peer and is never stored on a server. Supabase holds only membership metadata — workspaces, devices, and hashed pairing codes — while Yjs CRDTs merge simultaneous edits instead of overwriting them. Pairing is secured with short-lived, single-use QR codes approved from a trusted device, and any device can be revoked instantly.",
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "Supabase",
    "PostgreSQL",
    "Row Level Security",
    "Supabase Auth",
    "Realtime",
    "WebRTC",
    "PeerJS",
    "Yjs",
    "Vitest",
    "GitHub Actions",
    "Vercel",
  ],
  features: [
    "Real-time shared clipboard synced peer-to-peer over encrypted WebRTC.",
    "Yjs CRDT text merging so simultaneous edits combine instead of overwriting.",
    "Private workspaces with QR-code device pairing and trusted-device approval.",
    "Short-lived, single-use pairing codes with per-device revocation.",
    "Zero clipboard content on servers — Supabase stores only membership metadata.",
    "Supabase anonymous auth, Postgres, RLS, and Realtime for workspace management.",
    "Responsive Vite + React + TypeScript + Tailwind SPA deployed on Vercel.",
    "Vitest suite covering sync, pairing, and the transfer protocol.",
  ],
  images: [syncme],
  liveUrl: "https://sync-me-theta.vercel.app",
  codeUrl: "https://github.com/Mehedi-Hasan-18/SyncMe",
  highlights: [
    "Peer-to-Peer Sync",
    "Secure Device Pairing",
    "Zero Server Content",
  ],
},
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <main className="min-h-screen pb-5 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <Link
            to="/"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg transition"
          >
            Return to Mehedi Hasan's home page
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
    <Seo page={PAGE_SEO.projects[project.id]} type="article" />
    <main className="min-h-screen pb-5 bg-gray-950">
      <article className="max-w-6xl mx-auto px-6 pt-12 md:px-4">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-indigo-300">
          <Link to="/" className="hover:text-white">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link to="/#work" className="hover:text-white">Projects</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{project.title}</span>
        </nav>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="mb-4 text-sm text-indigo-300">
            Mehedi Hasan · Frontend Software Engineer
          </p>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </header>

        <figure className="mb-12 overflow-hidden rounded-2xl border border-white/10">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            width={project.imageSizes[0][0]}
            height={project.imageSizes[0][1]}
            fetchPriority="high"
            className="w-full h-auto object-cover"
          />
        </figure>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-white">Problem</h2>
          <p className="text-lg leading-relaxed text-white/80">{project.problem}</p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-white">What Mehedi built</h2>
          <p className="text-lg leading-relaxed text-white/80">{project.role}</p>
        </section>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {project.highlights.map((highlight) => (
            <div
              key={highlight}
              className="bg-white/5 border border-white/10 rounded-lg p-4"
            >
              <p className="text-white font-semibold text-center">
                {highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Full Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            About This Project
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            {project.fullDescription}
          </p>
        </section>

        {/* Technologies Used */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Technologies Used
          </h2>
          <ul className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="bg-indigo-500/20 border border-indigo-400/50 text-indigo-300 px-4 py-2 rounded-full text-sm md:text-base hover:bg-indigo-500/30 transition"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-white">Result</h2>
          <p className="text-lg leading-relaxed text-white/80">{project.outcome}</p>
        </section>

        {/* Key Features */}
        <section className="mb-12">
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
        </section>

        {/* Project Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border border-white/10 hover:border-indigo-400/50 transition cursor-pointer h-48 md:h-64"
              >
                <img
                  src={img}
                  alt={`${project.title} project screenshot ${index + 1}`}
                  width={project.imageSizes[index][0]}
                  height={project.imageSizes[index][1]}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Buttons */}
        <nav aria-label="Project links" className="mb-8 flex flex-col gap-4 sm:flex-row">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-indigo-500 py-3 text-center font-semibold text-white transition hover:bg-indigo-600"
            >
              Visit {project.title} live website
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-white/20 bg-gray-800 py-3 text-center font-semibold text-white transition hover:bg-gray-700"
            >
              View {project.title} source code on GitHub
            </a>
          )}
        </nav>
        <p className="mb-20 text-sm text-white/60">
          Last updated: <time dateTime={BUILD_DATE}>{BUILD_DATE}</time>
        </p>
      </article>
    </main>
    </>
  );
};

export default ProjectDetails;
