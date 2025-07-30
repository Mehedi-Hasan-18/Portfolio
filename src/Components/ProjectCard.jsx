import React from "react";

const ProjectCard = ({ title, image, description, tags, liveUrl, codeUrl }) => {
  return (
    <article
      className="mt-10 group relative flex flex-col justify-between h-full rounded-2xl transition-transform hover:-translate-y-1"
      aria-label={title}
    >
      {/* Gradient ring */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/40 to-emerald-500/40 blur opacity-0 transition-opacity hover:border-white/50 hover:shadow-xl pointer-events-none" />

      {/* Card body */}
      <div className="relative rounded-2xl border border-white/50 bg-gray-900/60 backdrop-blur p-5 shadow-lg">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-4">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* subtle gradient overlay bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Title */}
        <h3 className="text-xl">
          <span className=" text-amber-300 font-bold">
            {title}
          </span>
        </h3>

        {/* Description */}
        <p className="mt-2 text-white/80">{description}</p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/20 px-2.5 py-1 text-white/80 "
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
              className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium border border-white/15 text-white/90 hover:bg-white/10 active:scale-95"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
