import React from "react";


const About = () => {
  return (
    <section className="text-gray-200 relative">
      <div className="md:max-w-5xl md:mx-auto md:px-6 md:py-12 m-3">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">About Me</h2>

        <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-8 shadow-lg">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi, I'm{" "}
            <span className="text-white font-semibold">Mehedi Hasan</span>, a
            passionate full-stack web developer and software enthusiast
            currently studying Diploma in Information Technology at University
            of Cyberjaya,Malaysia. I enjoy building modern web applications, solving
            algorithmic problems, and creating content for aspiring students
            abroad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
