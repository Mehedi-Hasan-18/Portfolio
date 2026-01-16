import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, image, description, tags, liveUrl, codeUrl, projectId }) => {
  const navigate = useNavigate();

  const handleDetailsClick = (e) => {
    e.stopPropagation();
    navigate(`/project/${projectId}`);
  };

  return (
    <div
      className="mt-10 w-full group relative flex flex-col justify-between md:h-[570px] rounded-2xl "
      aria-label={title}
    >

      {/* Card body */}
      <div className="group relative rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur p-5 shadow-lg h-full transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-xl hover:shadow-indigo-500/10">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl aspect-[21/9] mb-4">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-115"
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
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow hover:brightness-110 active:scale-95"
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
              border border-white/15 text-white/90 hover:bg-white/10 active:scale-95"
            >
              Code
            </a>
          )}
          {projectId && (
            <button
              onClick={handleDetailsClick}
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium 
              bg-gradient-to-r from-cyan-700 to-fuchsia-900 shadow border border-white/15 text-white/90 hover:bg-white/10 active:scale-95"
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
