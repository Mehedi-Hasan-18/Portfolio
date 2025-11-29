// import image from "../../assets/Profile Photo.png";
import image from "../../assets/heroPhotonew_photo.png";
import codeforce from"../../assets/codeforces_logo.webp";
import codechef from"../../assets/CodeChef_Logo.png";
import Project from "../Project";
import Skills from "../Skills";
import Education from "../Education";
import ECA from "../ECA";
import { Download, Github, Linkedin, Youtube } from "lucide-react";

const Home = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/mehedi-hasan-85278b2a0/",
    youtube: "https://youtube.com/@meheeeedi_hasan",
    github: "https://github.com/Mehedi-Hasan-18",
    codeforce:"https://codeforces.com/profile/mehedi_hasan_18",
    codechef:"https://www.codechef.com/users/mehedi_hasan18"
  };
  return (
    <div className="relative text-white min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Glowing orb effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-6 z-10">
            <p className="text-gray-400 text-sm md:text-base">Hi, my name is</p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Mehedi Hasan
            </h1>

            <p className="text-blue-400 text-xl md:text-2xl font-semibold">
              Software Engineer
            </p>

            <p className="text-gray-300 leading-relaxed max-w-xl text-sm md:text-base">
              I'm a problem-solver at heart who loves turning ideas into working
              systems. Whether it's designing backend infrastructure, building
              full-stack features, or integrating AI to enhance functionality
              and efficiency, I focus on creating solutions that are elegant,
              reliable, and built with purpose.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() =>
                  (window.location.href = "mailto:mdmehedihasanroby@mail.com")
                }
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200"
              >
                Get In Touch
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/file/d/11hESZw1v2UANoQcjlxOzVJmOvaxPdJcR/view?usp=sharing")
                }
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-colors duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </button>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="flex justify-center lg:justify-end z-10">
            <div className="relative">
              {/* Profile image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center text-6xl">
                  <img className="w-80 h-96" src={image} alt="Mehedi Hasan" />
                </div>
              </div>
              {/* Social Media Links */}
              <div className="flex justify-center gap-4 mt-6">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>

                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-red-600 rounded-lg transition-colors duration-300 group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href={socialLinks.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-fuchsia-300 rounded-lg transition-colors duration-300 group"
                  aria-label="GitHub"
                >
                  <img src={codechef} className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href={socialLinks.codeforce}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-cyan-500 rounded-lg transition-colors duration-300 group"
                  aria-label="GitHub"
                >
                  <img src={codeforce} className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Project></Project>
      <Skills className="md:mt-5"></Skills>
      <Education></Education>
      <ECA></ECA>
    </div>
  );
};

export default Home;
