import React, { useEffect, useRef, useState } from "react";

const SkillBar = ({ name, level }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Animate when the bar enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const width = inView ? `${level}%` : "0%";

  return (
    <div ref={ref} className="w-full">
      {/* Label row */}
      <div className="mb-2 flex items-end justify-between">
        <span className="text-sm md:text-base font-medium tracking-wide text-white/90">
          {name}
        </span>
        {/* <span className="text-xs md:text-sm font-semibold text-white/70">
          {level}%
        </span> */}
      </div>

      {/* Track */}
      <div className="relative h-3 w-full rounded-full bg-white/10">
        {/* Animated fill */}
        <div
          role="progressbar"
          aria-label={name}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={inView ? level : 0}
          className="absolute left-0 top-0 h-full rounded-full transition-[width] duration-1000 ease-out
                     bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500"
          style={{ width }}
        />
        <div/>
      </div>
    </div>
  );
};

export default SkillBar;
