// import image from "../../assets/Profile Photo.png";
import image from "../../assets/heroPhotonew_photo.png";
import codeforce from "../../assets/codeforces_logo.webp";
import codechef from "../../assets/CodeChef_Logo.png";
import Project from "../Project";
import Skills from "../Skills";
import Education from "../Education";
import ECA from "../ECA";
import { Download, Github, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [copied, setCopied] = useState("");

  const email = "mdmehedihasanroby@gmail.com";
  const phone = "+60 174142969";

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(""), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleMailto = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Hello Mehedi!");
    const body = encodeURIComponent(
      "Hi Mehedi,\n\nI came across your portfolio and would love to connect.\n\nBest regards,"
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/mehedi-hasan-85278b2a0/",
    youtube: "https://youtube.com/@meheeeedi_hasan",
    github: "https://github.com/Mehedi-Hasan-18",
    codeforce: "https://codeforces.com/profile/mehedi_hasan_18",
    codechef: "https://www.codechef.com/users/mehedi_hasan18",
  };
  return (
    <div className="relative text-white min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Glowing orb effect */}
      {/* <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div> */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-6 z-10">
            <p className="text-gray-400 text-sm md:text-xl">Hi, my name is</p>

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
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 relative">
                  <img
                    src={image}
                    alt="Mehedi Hasan"
                    className="absolute inset-0 w-full h-full object-contain block"
                  />
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
                  <img
                    src={codechef}
                    className="w-6 h-6 text-gray-300 group-hover:text-white"
                  />
                </a>
                <a
                  href={socialLinks.codeforce}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-cyan-500 rounded-lg transition-colors duration-300 group"
                  aria-label="GitHub"
                >
                  <img
                    src={codeforce}
                    className="w-6 h-6 text-gray-300 group-hover:text-white"
                  />
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
      {/* //contact form */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          <span className="text-indigo-500">Get in touch</span>
        </h2>
        <p className="text-white/70 text-sm md:text-base">
          I try to respond within 24–48 hours.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 pb-5">
        <div></div>
        <div
          className="relative rounded-2xl bg-gray-900/70 border border-gray-800 p-6 backdrop-blur
                         transition-transform duration-300 hover:-translate-y-1 hover:border-white/50 hover:shadow-xl "
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 pointer-events-none"></div>
          <h2 className="text-xl font-semibold text-white">Get in touch</h2>
          <p className="text-gray-400 text mt-1">
            I try to respond within 24–48 hours.
          </p>

          <div className="mt-6 space-y-4">
            {/* Email */}
            <div className="flex items-center hover:border-white/50 transition justify-between gap-3 rounded-xl border border-gray-800 bg-gray-950/60 p-4">
              <div className="min-w-0">
                <p className="font-bold text-gray-400">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="truncate font-medium text-gray-200 hover:text-blue-400 transition"
                  title={email}
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="rounded-lg border border-gray-700 px-3 py-1.5 text-sm hover:border-blue-500 hover:text-blue-400 transition"
                >
                  Write
                </a>
                <button
                  onClick={() => copyToClipboard(email)}
                  className="rounded-lg border border-gray-700 px-3 py-1.5 text-sm hover:border-gray-500 transition"
                  aria-label="Copy email"
                >
                  {copied === email ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-800 bg-gray-950/60 p-4 hover:border-white/50 transition">
              <div className="min-w-0 ">
                <p className="font-bold text-gray-400">Phone</p>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="truncate font-medium text-gray-200 hover:text-green-400 transition"
                  title={phone}
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a
                  target="_blank"
                  href="https://wa.link/8i0d7s"
                  className="rounded-lg border border-gray-700 px-3 py-1.5 text-sm hover:border-green-500 hover:text-green-400 transition"
                >
                  WhatsAPP
                </a>
                <button
                  onClick={() => copyToClipboard(phone)}
                  className="rounded-lg border border-gray-700 px-3 py-1.5 text-sm hover:border-gray-500 transition"
                  aria-label="Copy phone"
                >
                  {copied === phone ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>

          {/* Quick mailto button */}
          <form onSubmit={handleMailto} className="mt-6">
            <button
              type="submit"
              className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white hover:bg-white/20 transition border border-gray-700"
            >
              Quick Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
