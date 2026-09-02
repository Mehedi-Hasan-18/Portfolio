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
      <div className="group relative rounded-2xl border border-white/10 bg-zinc-900/70 p-5 shadow-lg h-full transition-all duration-300 ease-out hover:-translate-y-2 hover:border-accent/30 hover:shadow-2xl hover:shadow-black/40 hover:scale-[1.01]">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl aspect-[21/9] mb-4">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            width={840}
            height={360}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Title */}
        <h3 className="lg:text-xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 mb-4 leading-relaxed text-zinc-400 text-xs md:text-sm lg:text-sm">{description.slice(0,150)+"..."}</p>

        {/* Tags */}
        <div className="mt-2 mb-5 flex flex-wrap gap-1.5">
          {tags?.map((t) => (
            <span
              key={t}
              className="bg-white/5 border border-white/10 rounded-md text-zinc-300 text-xs px-2.5 py-1"
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
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-semibold bg-accent text-zinc-950 transition-colors duration-200 hover:bg-accent/90 active:scale-95"
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
              border border-white/15 text-zinc-200 transition-colors duration-200 hover:border-accent hover:text-accent active:scale-95"
            >
              Code
            </a>
          )}
          {projectId && (
            <button
              onClick={handleDetailsClick}
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium 
              border border-white/15 text-zinc-200 transition-colors duration-200 hover:border-accent hover:text-accent active:scale-95"
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
