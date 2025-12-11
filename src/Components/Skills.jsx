import React from "react";
import { Code, Server, Database, Wrench, Zap } from "lucide-react";
import reactLogo from "../assets/react.svg";
import githubIcon from "../assets/github-white-icon.webp";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
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
      color: "from-green-500 to-emerald-500",
      skills: ["Python", "Django", "Django REST Framework", "Node.js (basic)"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: ["PostgreSQL", "Firebase", "Supabase"],
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
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
      color: "from-yellow-500 to-amber-500",
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
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          <span className="text-indigo-500">Technical Skills</span>
        </h2>
        <p className="text-white/70 text-sm md:text-base">
          Technologies and competencies I work with
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-gray-900/60 p-6 backdrop-blur
                       transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
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
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3h20l-1.8 20L12 22l-8.2 1L2 3z" fill="#E34F26" />
                          <path d="M17.5 7H6.5l.2 2h10.6l-.3 3.5L12 15l-5-.5" fill="#FFF" opacity="0.9" />
                        </svg>
                      );
                    }

                    if (name.includes("css")) {
                      return (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 3h20l-1.8 20L12 22l-8.2 1L2 3z" fill="#1572B6" />
                          <path d="M7 8h10l-.7 7L12 17l-4.3-1" fill="#fff" opacity="0.9" />
                        </svg>
                      );
                    }

                    if (name.includes("javascript") || name === "js") {
                      return (
                        <div className="w-6 h-6 flex items-center justify-center bg-yellow-300 rounded-sm text-black text-xs font-bold">JS</div>
                      );
                    }

                    if (name.includes("tailwind")) {
                      return (
                        <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-sky-400 to-cyan-400 rounded text-white text-xs font-semibold">TW</div>
                      );
                    }

                    if (name.includes("python")) {
                      return (
                        <div className="w-6 h-6 flex items-center justify-center rounded bg-gradient-to-br from-blue-500 to-yellow-300 text-white text-xs font-semibold">Py</div>
                      );
                    }

                    if (name.includes("django")) {
                      return (
                        <div className="w-6 h-6 flex items-center justify-center rounded bg-green-600 text-white text-xs font-semibold">Dj</div>
                      );
                    }

                    if (name.includes("postgres") || name.includes("postgresql")) {
                      return (
                        <div className="w-6 h-6 flex items-center justify-center rounded bg-purple-600 text-white text-xs font-semibold">PG</div>
                      );
                    }

                    if (name.includes("firebase")) {
                      return (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2l2.9 6.1L21 9l-4.6 3.3L17 20 12 17.3 7 20l.6-7.7L3 9l6.1-.9L12 2z" fill="#FFA000" />
                        </svg>
                      );
                    }

                    if (name.includes("supabase")) {
                      return (
                        <div className="w-6 h-6 flex items-center justify-center rounded bg-emerald-500 text-white text-xs font-semibold">SB</div>
                      );
                    }

                    if (name.includes("vercel")) {
                      return (
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 3L2 21h20L12 3z" fill="#000" />
                        </svg>
                      );
                    }

                    if (name.includes("netlify")) {
                      return (
                        <div className="w-6 h-6 flex items-center justify-center rounded bg-teal-600 text-white text-xs font-semibold">N</div>
                      );
                    }

                    // fallback: small code icon
                    return <Code className="w-5 h-5 text-white/80" />;
                  };

                  return (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/90 text-sm max-w-[180px] min-w-0"
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
    </section>
  );
};

export default Skills;
