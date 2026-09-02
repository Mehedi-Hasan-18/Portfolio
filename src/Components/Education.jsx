import React from "react";
import { Calendar } from "lucide-react";
import uniImg from "../assets/University.png";
import AnimatedContent from "./AnimatedContent";
import ScrollFloat from "./ScrollFloat";

const Education = () => {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0}
    >
      <div className="md:max-w-6xl md:mx-auto md:px-4 py-16 md:py-20 px-6">
        <div className="text-center mb-12">
          <p className="eyebrow">03 — Education</p>
          <div className="text-4xl mt-4 text-center md:text-5xl font-black tracking-tight text-white">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=70%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Education
            </ScrollFloat>
          </div>
        </div>

        <div className="group rounded-2xl border border-white/10 bg-zinc-900/70 p-4 md:p-10 flex flex-col md:flex-row items-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-lg hover:shadow-black/40">
          {/* Left: University Logo */}
          <div className="md:w-1/3 flex items-center justify-center p-0 md:p-8">
            <img
              src={uniImg}
              alt="University Logo"
              className="object-contain w-28 h-28 md:w-40 md:h-40 rounded-b-full shadow-md border border-white/15 "
            />
          </div>

          {/* Right: Details */}
          <div className="md:w-2/3 w-full flex flex-col justify-center md:pl-10 mt-6 md:mt-0">
            <h3 className="md:text-3xl text-2xl font-semibold text-white mb-2 text-center md:text-left">
              Diploma in Information Technology
            </h3>
            <p className="text-zinc-300 text-lg md:text-xl mb-1 text-center md:text-left">
              University of Dhaka <span className="text-accent">•</span>{" "}
              Dhaka, Bangladesh
            </p>
            <p className="text-center md:text-left text-sm mb-2 text-zinc-500 flex items-center gap-1.5 justify-center md:justify-start">
              <Calendar className="w-4 h-4" />
              2023 - 2026
            </p>

            <ul className="list-disc list-inside text-zinc-300 mt-4 space-y-2 text-base md:text-lg pl-2 md:pl-4">
              <li>
                <span className="font-semibold">CGPA:</span> 3.8 / 4.0
              </li>
              <li>
                <span className="font-semibold">Relevant Coursework:</span> Web
                Development, Data Structures, Database Systems
              </li>
              <li>
                <span className="font-semibold">Member:</span> IT Club
              </li>
              <li>
                <span className="font-semibold">Capstone Project:</span>{" "}
                E-commerce Web App with Django & React
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default Education;
