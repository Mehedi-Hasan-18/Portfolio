import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, image, description, tags, liveUrl, codeUrl, projectId, index = 0 }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleDetailsClick = (e) => {
    e.stopPropagation();
    navigate(`/project/${projectId}`);
  };

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`mt-10 w-full group relative flex flex-col justify-between md:h-[570px] rounded-2xl transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      aria-label={title}
    >

      {/* Card body */}
      <div className="group relative rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-5 shadow-lg h-full transition-all duration-300 ease-out hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-indigo-500/20 hover:scale-[1.01]">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl aspect-[21/9] mb-4">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          {/* subtle gradient overlay bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Title */}
        <h3 className="lg:text-xl">
          <span className=" text-white font-bold">
            {title}
          </span>
        </h3>

        {/* Description */}
        <p className="mt-5 mb-5 italic text-white/80 text-xs md:text-sm lg:text-sm">{description.slice(0,150)+"..."}</p>

        {/* Tags */}
        <div className="mt-3 mb-5 text-xs md:text-sm lg:text-sm flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span
              key={t}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/90 text-sm max-w-[180px] min-w-0 px-3 py-2"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()} // prevent parent click
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow transition-transform duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
            >
              Live
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()} // prevent parent click
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium 
              border border-white/15 text-white/90 transition-colors duration-200 hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              Code
            </a>
          )}
          {projectId && (
            <button
              onClick={handleDetailsClick}
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium 
              bg-gradient-to-r from-cyan-700 to-fuchsia-900 shadow border border-white/15 text-white/90 transition-colors duration-200 hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
