import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Code,
  Bug,
  Users,
  GitBranch,
} from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      icon: TrendingUp,
      text: "Improved application performance by optimizing React components, reducing page load times and delivering a smoother user experience.",
    },
    {
      icon: Code,
      text: "Developed and maintained scalable frontend features using React.js, TypeScript, Tailwind CSS, and modern JavaScript for hotel booking and CRM platforms.",
    },
    {
      icon: GitBranch,
      text: "Integrated REST APIs and collaborated with backend developers to build responsive, user-friendly interfaces for B2B and customer-facing applications.",
    },
    {
      icon: Users,
      text: "Worked closely with designers, product managers, and engineers in an Agile environment to deliver high-quality features and improve overall user experience.",
    },
  ];

  return (
    <div className="mb-16">
      <div
        className="group  rounded-2xl border border-white/10 bg-zinc-900/70 p-6
                    transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-lg hover:shadow-black/40"
      >
        {/* Header Section */}
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-accent">
              <Briefcase className="w-6 h-6" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Software Engineer (Frontend)
              </h3>

              <p className="text-accent font-medium text-lg mb-3">
                tripbooking.ai
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>May 2026 – Present</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-6"></div>

          {/* Achievements List */}
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-200">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <p className="text-zinc-300 leading-relaxed group-hover:text-white transition-colors duration-200">
                    {achievement.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
