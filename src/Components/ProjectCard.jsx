import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  tagline,
  description,
  image,
  imageSize,
  liveUrl,
  codeUrl,
  projectId,
  index = 0,
}) => {
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

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`mb-5 w-full break-inside-avoid transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      aria-label={title}
    >
      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-2xl hover:shadow-black/40">
        {/* Image keeps its natural ratio so each card takes the height it needs */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            width={imageSize[0]}
            height={imageSize[1]}
            className="block h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="line-clamp-2 text-base font-bold leading-snug text-white sm:text-lg">
            {title}
          </h3>

          <p className="mt-1.5 line-clamp-1 text-sm text-zinc-400">
            {tagline || description}
          </p>

          <div className="mt-4 flex items-center gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-zinc-950 transition-colors duration-200 hover:bg-accent/90 active:scale-95"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
            )}
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors duration-200 hover:border-accent hover:text-accent active:scale-95"
              >
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
            )}
            {projectId && (
              <Link
                to={`/project/${projectId}`}
                aria-label={`Read about ${title}`}
                className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors duration-200 hover:border-accent hover:text-accent active:scale-95"
              >
                Details
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
