import React from 'react';
import uniImg from '../assets/University.png';

const Education = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-500">Education</h2>
      
      <div className="rounded-2xl border border-white/50 bg-gray-900/60 backdrop-blur p-6 md:p-8 shadow-xl group flex flex-col md:flex-row overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-white/50 hover:shadow-xl">
        
        {/* Left: University Logo */}
        <div className="md:w-1/3 flex items-center justify-center p-6">
          <img src={uniImg} alt="University Logo" className="object-contain" />
        </div>

        {/* Right: Details */}
        <div className="md:w-2/3 p-6 ml-10">
          <h3 className="text-2xl font-semibold text-white">
            Diploma in Information Technology
          </h3>
          <p className="text-white mt-1">University of Cyberjaya • Cyberjaya, Malaysia</p>
          
          <div className="flex items-center gap-4 mt-2 text-sm text-whiite">
            <span>📅 2023 - 2026</span>
          </div>
          
          <ul className="list-disc list-inside text-white mt-4 space-y-1">
            <li>CGPA: 3.8 / 4.0</li>
            <li>Relevant Coursework: Web Development, Data Structures, Database Systems</li>
            <li>Member of IT Club</li>
            <li>Capstone Project: E-commerce Web App with Django & React</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
