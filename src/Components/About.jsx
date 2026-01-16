import React from "react";


const About = () => {
  return (
    <section className="relative py-16 bg-transparent text-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-900/80 border border-gray-800 rounded-3xl shadow-2xl p-8 md:p-14">
          {/* Profile Image */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <img
              src="src\assets\heroPhotonew_photo.png"
              alt="Mehedi Hasan"
              className="w-40 h-40 md:w-56 md:h-56 object-contain rounded-full border-4 border-blue-600 shadow-lg"
            />
          </div>
          {/* About Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold mb-4 text-white text-center md:text-left">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4 text-center md:text-left">
              Hi, I'm <span className="text-white font-semibold">Mehedi Hasan</span>, a passionate <span className="text-blue-400">full-stack web developer</span> and software enthusiast currently studying <span className="text-blue-400">Diploma in Information Technology</span> at University of Cyberjaya, Malaysia.
            </p>
            <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2 text-base">
              <li>Building modern, responsive web applications</li>
              <li>Solving algorithmic and coding challenges</li>
              <li>Creating content for aspiring students abroad</li>
              <li>Always learning and exploring new technologies</li>
            </ul>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs font-semibold border border-blue-600/30">JavaScript</span>
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs font-semibold border border-blue-600/30">ReactJs</span>
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs font-semibold border border-blue-600/30">Python</span>
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs font-semibold border border-blue-600/30">Django</span>
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs font-semibold border border-blue-600/30">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
