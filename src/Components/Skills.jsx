import React from "react";
import { Code, Server, Database, Wrench, Zap } from "lucide-react";
import reactLogo from "../assets/react.svg";
import githubIcon from "../assets/github-white-icon.webp";
import AnimatedContent from "./AnimatedContent";
import ScrollFloat from "./ScrollFloat";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "DaisyUI",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Python", "Django", "Django REST Framework", "Node.js (basic)"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "Firebase", "Supabase"],
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: [
        "Git/GitHub",
        "Vercel",
        "Netlify",
        "CI/CD",
        "JWT Authentication",
        "REST APIs",
      ],
    },
    {
      title: "Core Competencies",
      icon: Zap,
      skills: [
        "Full-Stack Development",
        "API Design",
        "Scalable Architecture",
        "Database Optimization",
        "Performance Tuning",
        "Agile Development",
        "Unit Testing",
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
      <div className="text-center mb-14">
        <p className="eyebrow">02 — Skills</p>
        <div className="text-4xl mt-4 text-center md:text-5xl font-black tracking-tight text-white">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=70%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Technical Skills
          </ScrollFloat>
        </div>
        <p className="text-zinc-500 text-sm md:text-base mt-4">
          Technologies and competencies I work with
        </p>
      </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-zinc-900/70 p-6
                       transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-lg hover:shadow-black/40"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List (logo + name) */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const lower = (skill || "").toLowerCase();

                    const getIcon = (name) => {
                      if (name.includes("react")) {
                        return (
                          <img
                            src={reactLogo}
                            alt="react"
                            className="w-6 h-6 object-contain"
                          />
                        );
                      }

                      if (name.includes("github") || name.includes("git")) {
                        return (
                          <img
                            src={githubIcon}
                            alt="github"
                            className="w-6 h-6 object-contain rounded"
                          />
                        );
                      }

                      if (name.includes("html")) {
                        return (
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 3h20l-1.8 20L12 22l-8.2 1L2 3z"
                              fill="#E34F26"
                            />
                            <path
                              d="M17.5 7H6.5l.2 2h10.6l-.3 3.5L12 15l-5-.5"
                              fill="#FFF"
                              opacity="0.9"
                            />
                          </svg>
                        );
                      }

                      if (name.includes("css")) {
                        return (
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2 3h20l-1.8 20L12 22l-8.2 1L2 3z"
                              fill="#1572B6"
                            />
                            <path
                              d="M7 8h10l-.7 7L12 17l-4.3-1"
                              fill="#fff"
                              opacity="0.9"
                            />
                          </svg>
                        );
                      }

                      if (name.includes("javascript") || name === "js") {
                        return (
                          <div className="w-6 h-6 flex items-center justify-center bg-yellow-300 rounded-sm text-black text-xs font-bold">
                            JS
                          </div>
                        );
                      }

                      if (name.includes("tailwind")) {
                        return (
                          <div className="w-6 h-6 flex items-center justify-center bg-sky-400 text-zinc-950 rounded text-xs font-semibold">
                            TW
                          </div>
                        );
                      }

                      if (name.includes("python")) {
                        return (
                          <div className="w-6 h-6 flex items-center justify-center rounded bg-yellow-400 text-zinc-950 text-xs font-semibold">
                            Py
                          </div>
                        );
                      }

                      if (name.includes("django")) {
                        return (
                          <div className="w-6 h-6 flex items-center justify-center rounded bg-green-600 text-white text-xs font-semibold">
                            Dj
                          </div>
                        );
                      }

                      if (
                        name.includes("postgres") ||
                        name.includes("postgresql")
                      ) {
                        return (
                          <div className="w-6 h-6 flex items-center justify-center rounded bg-purple-600 text-white text-xs font-semibold">
                            PG
                          </div>
                        );
                      }

                      if (name.includes("firebase")) {
                        return (
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2l2.9 6.1L21 9l-4.6 3.3L17 20 12 17.3 7 20l.6-7.7L3 9l6.1-.9L12 2z"
                              fill="#FFA000"
                            />
                          </svg>
                        );
                      }

                      if (name.includes("supabase")) {
                        return (
                          <div className="w-6 h-6 flex items-center justify-center rounded bg-emerald-500 text-white text-xs font-semibold">
                            SB
                          </div>
                        );
                      }

                      if (name.includes("vercel")) {
                        return (
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 3L2 21h20L12 3z" fill="#000" />
                          </svg>
                        );
                      }

                      if (name.includes("netlify")) {
                        return (
                          <div className="w-6 h-6 flex items-center justify-center rounded bg-teal-600 text-white text-xs font-semibold">
                            N
                          </div>
                        );
                      }

                      // fallback: small code icon
                      return <Code className="w-5 h-5 text-white/80" />;
                    };

                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 px-2.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-zinc-300 text-xs max-w-[160px] min-w-0"
                      >
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center overflow-hidden">
                          {getIcon(lower)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="truncate">{skill}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </AnimatedContent>
    </section>
  );
};

export default Skills;
