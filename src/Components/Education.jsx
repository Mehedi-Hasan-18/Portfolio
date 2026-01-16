import React from "react";
import uniImg from "../assets/University.png";

const Education = () => {
  return (
    <div className="md:max-w-6xl md:mx-auto md:px-4 py-8 md:py-14 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-500 tracking-tight">Education</h2>

      <div className="group rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-4 md:p-10 shadow-xl flex flex-col md:flex-row items-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-xl hover:shadow-indigo-500/10">
        {/* Left: University Logo */}
        <div className="md:w-1/3 flex items-center justify-center p-0 md:p-8">
          <img
            src={uniImg}
            alt="University Logo"
            className="object-contain w-28 h-28 md:w-40 md:h-40 rounded-b-full shadow-md border border-blue-500/60 "
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-2/3 w-full flex flex-col justify-center md:pl-10 mt-6 md:mt-0">
          <h3 className="md:text-3xl text-2xl font-bold text-white mb-2 text-center md:text-left">Diploma in Information Technology</h3>
          <p className="text-white/90 text-lg md:text-xl mb-1 text-center md:text-left">University of Cyberjaya <span className="text-blue-400">•</span> Cyberjaya, Malaysia</p>
          <p className="text-center md:text-left text-sm mb-2">📅 2023 - 2026</p>

          <ul className="list-disc list-inside text-white/80 mt-4 space-y-2 text-base md:text-lg pl-2 md:pl-4">
            <li><span className="font-semibold">CGPA:</span> 3.8 / 4.0</li>
            <li><span className="font-semibold">Relevant Coursework:</span> Web Development, Data Structures, Database Systems</li>
            <li><span className="font-semibold">Member:</span> IT Club</li>
            <li><span className="font-semibold">Capstone Project:</span> E-commerce Web App with Django & React</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
