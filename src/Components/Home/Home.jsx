import image from "../../assets/Profile Photo.png";
import Typewriter from "typewriter-effect";
import Project from "../Project";
import Skills from "../Skills";
import Education from "../Education";
import ECA from "../ECA";

const Home = () => {
  return (
    <div className="relative text-white m-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 sm:grid-cols-1 gap-15 px-15">
        {/* Left Side: Text */}
        <div className="col-span-2 flex items-center">
          <h1
            style={{ fontFamily: "'Bebas Neue'," }}
            className="font-bold text-6xl md:text-7xl mt-20"
          >
            Hi, I'm <span className="text-blue-200">MEHEDI HASAN</span> A
            <div>
              <Typewriter
                options={{
                  strings: [
                    '<span class="font-bold text-5xl text-amber-400">Full-Stack Developer</span>',
                    '<span class="font-bold text-6xl text-amber-400"">Problem Solver</span>',
                    '<span class="font-bold text-6xl text-amber-400"">Youtuber</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                  cursor: " ",
                }}
              />
            </div>
          </h1>
        </div>

        {/* Right Side: Image */}
        <div className="col-span-2 h-[400px] flex justify-center">
          <img
            className="max-w-xs md:max-w-sm lg:max-w-md drop-shadow-2xl"
            src={image}
            alt="Mehedi Hasan"
          />
        </div>
      </div>
      <Project></Project>
      <Skills className="mt-5"></Skills>
      <Education></Education>
      <ECA></ECA>
    </div>
  );
};

export default Home;
