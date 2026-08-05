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
        className="group  rounded-2xl border border-white/10 bg-gray-900/60 p-6 backdrop-blur
                    transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-xl hover:shadow-indigo-500/10"
      >
        {/* Header Section */}
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl shadow-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Software Engineer (Frontend)
              </h3>

              <p className="text-indigo-400 font-semibold text-lg mb-3">
                tripbooking.ai
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-white/60">
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
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mb-6"></div>

          {/* Achievements List */}
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors duration-200">
                      <Icon className="w-4 h-4 text-indigo-400" />
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-200">
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
