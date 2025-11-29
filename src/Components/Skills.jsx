import React from "react";
import { Code, Server, Database, Wrench, Zap } from "lucide-react";

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
          <span className="text-indigo-500">Skills Technical</span>
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

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 border border-white/10 
                             rounded-lg text-white/80 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
