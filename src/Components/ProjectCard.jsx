import React from "react";

const ProjectCard = ({ title, image, description, tags, liveUrl, codeUrl }) => {
  const handleCard = () =>{
    console.log("hello")
    window.open(liveUrl, "_blank");
  }
  return (
    <div
      onClick={handleCard}
      className="mt-10 w-full group relative flex flex-col justify-between md:h-[520px] rounded-2xl transition-transform hover:-translate-y-1"
      aria-label={title}
    >
      {/* Gradient ring */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/40 to-emerald-500/40 blur opacity-0 transition-opacity hover:border-white/50 hover:shadow-xl pointer-events-none" />

      {/* Card body */}
      <div className="relative rounded-2xl border border-white/50 bg-gray-900/60 backdrop-blur p-5 shadow-lg h-full">
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
          <span className=" text-amber-300 font-bold">
            {title}
          </span>
        </h3>

        {/* Description */}
        <p className="mt-2 text-white/80 text-xs md:text-sm lg:text-sm">{description.slice(0,300)+"..."}</p>

        {/* Tags */}
        <div className="mt-3 text-xs md:text-sm lg:text-sm flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/20 px-2.5 py-1 text-white "
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
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium border border-white/15 text-white/90 hover:bg-white/10 active:scale-95"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
