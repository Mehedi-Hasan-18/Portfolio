import React, { useRef, useState } from "react";
import {
  Boxes,
  Braces,
  Code2,
  Database,
  Gauge,
  GitPullRequest,
  KeyRound,
  Layers,
  Link2,
  MonitorSmartphone,
  Network,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  UsersRound,
} from "lucide-react";
import {
  SiClaude,
  SiCss,
  SiDaisyui,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGithub,
  SiGithubactions,
  SiGithubcopilot,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVitest,
} from "react-icons/si";
import AnimatedContent from "./AnimatedContent";
import ScrollFloat from "./ScrollFloat";

const ZustandMark = ({ className = "" }) => (
  <span className={`font-mono text-[10px] font-bold leading-none ${className}`}>
    Z
  </span>
);

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    blurb: "The languages I use to build products and query data across the stack.",
    skills: [
      { name: "Python", Icon: SiPython },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", detail: "ES6+", Icon: SiJavascript },
      { name: "SQL", Icon: Database },
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
    ],
  },
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    blurb: "Interfaces, state, and styling for fast, responsive product experiences.",
    skills: [
      { name: "React.js", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Zustand", Icon: ZustandMark },
      { name: "Redux Toolkit", Icon: SiRedux },
      { name: "DaisyUI", Icon: SiDaisyui },
    ],
  },
  {
    title: "Backend & Data",
    icon: Database,
    blurb: "APIs, schemas, and data layers designed to stay reliable as they scale.",
    skills: [
      {
        name: "Supabase",
        detail: "Auth · Postgres · Realtime · SQL Migrations",
        Icon: SiSupabase,
      },
      {
        name: "PostgreSQL",
        detail: "Schema Design · Indexing · Query Optimization",
        Icon: SiPostgresql,
      },
      {
        name: "Row Level Security (RLS)",
        detail: "Policies",
        Icon: ShieldCheck,
      },
      { name: "Redis", Icon: SiRedis },
      { name: "Django", Icon: SiDjango },
      { name: "Node.js", detail: "Basics", Icon: SiNodedotjs },
      { name: "Firebase", Icon: SiFirebase },
    ],
  },
  {
    title: "Auth & Security",
    icon: ShieldCheck,
    blurb: "Safe sessions, permissions, and trusted-device flows by default.",
    skills: [
      {
        name: "Supabase Auth",
        detail: "Anonymous Sessions",
        Icon: SiSupabase,
      },
      { name: "JWT Authentication", Icon: KeyRound },
      { name: "Role-Based Access Control", Icon: UsersRound },
      {
        name: "Secure Pairing and Revocation Flows",
        Icon: Link2,
      },
    ],
  },
  {
    title: "APIs",
    icon: Network,
    blurb: "Contract-first APIs that are documented, predictable, and easy to consume.",
    skills: [
      { name: "FastAPI", Icon: SiFastapi },
      { name: "Django REST Framework", Icon: SiDjango },
      { name: "RESTful API Design", Icon: Braces },
      { name: "Swagger/OpenAPI", Icon: SiSwagger },
      { name: "Postman", Icon: SiPostman },
    ],
  },
  {
    title: "Workflow & Testing",
    icon: GitPullRequest,
    blurb: "Shipping with version control, automation, and tests that keep quality high.",
    skills: [
      { name: "Git/GitHub", detail: "PRs · Code Reviews", Icon: SiGithub },
      { name: "CI/CD", detail: "GitHub Actions", Icon: SiGithubactions },
      { name: "Vitest", detail: "Unit Testing", Icon: SiVitest },
      { name: "Docker", detail: "Basics", Icon: SiDocker },
      { name: "Vercel", Icon: SiVercel },
      { name: "Netlify", Icon: SiNetlify },
    ],
  },
  {
    title: "Core Competencies",
    icon: Layers,
    blurb: "How I approach architecture, performance, and delivery end to end.",
    skills: [
      { name: "Full-Stack Development", Icon: Layers },
      { name: "API Design", Icon: Braces },
      { name: "Scalable Architecture", Icon: Boxes },
      { name: "Database Optimization", Icon: Gauge },
      { name: "Performance Tuning", Icon: Rocket },
      { name: "Agile Development", Icon: RefreshCw },
    ],
  },
  {
    title: "AI-Assisted Development",
    icon: Sparkles,
    blurb: "AI tools I use to move faster without sacrificing review or quality.",
    skills: [
      { name: "Claude", Icon: SiClaude },
      { name: "Codex", Icon: SiOpenai },
      { name: "GitHub Copilot", Icon: SiGithubcopilot },
      { name: "OpenCode", Icon: SquareTerminal },
    ],
  },
];

const pad = (index) => String(index + 1).padStart(2, "0");

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const railRef = useRef(null);
  const active = skillCategories[activeIndex];
  const totalSkills = skillCategories.reduce(
    (count, category) => count + category.skills.length,
    0,
  );

  // Move the row so the selected tab sits at the left edge of the rail
  // (fully shifted instead of a partial nudge).
  const selectCategory = (index) => (event) => {
    setActiveIndex(index);

    const rail = railRef.current;
    if (!rail || rail.scrollWidth <= rail.clientWidth) return;

    const tab = event.currentTarget;
    const scrollBehavior = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
      ? "auto"
      : "smooth";

    const railRect = rail.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const tabLeft = tabRect.left - railRect.left + rail.scrollLeft;
    const maxScroll = rail.scrollWidth - rail.clientWidth;

    rail.scrollTo({
      left: Math.max(0, Math.min(tabLeft, maxScroll)),
      behavior: scrollBehavior,
    });
  };

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20"
    >
      <div className="text-center mb-14">
        <p className="eyebrow">02 — Skills</p>
        <div className="text-4xl mt-4 text-center md:text-5xl font-black tracking-tight text-white">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=70%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Technical Skills
          </ScrollFloat>
        </div>
        <p className="text-zinc-500 text-sm md:text-base mt-4">
          {totalSkills} tools and competencies across {skillCategories.length}{" "}
          domains
        </p>
      </div>

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
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60">
          {/* Decorative grid + glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative grid lg:grid-cols-[290px_minmax(0,1fr)]">
            {/* Domain rail */}
            <div className="relative min-w-0 border-b border-white/10 p-4 lg:border-b-0 lg:border-r lg:p-5">
              <p className="mb-3 hidden px-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-600 lg:block">
                Explore the stack
              </p>

              <div
                ref={railRef}
                role="group"
                aria-label="Skill categories"
                className="flex w-full min-w-0 gap-2 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
              >
                {skillCategories.map((category, index) => {
                  const Icon = category.icon;
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={category.title}
                      type="button"
                      aria-pressed={isActive}
                      onClick={selectCategory(index)}
                      className={`group flex shrink-0 items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all duration-200 lg:gap-3 lg:px-3.5 lg:py-3 ${
                        isActive
                          ? "border-accent/30 bg-accent/[0.08] text-white"
                          : "border-transparent text-zinc-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-zinc-100"
                      }`}
                    >
                      <span
                        className={`hidden w-5 font-mono text-[10px] lg:inline ${
                          isActive ? "text-accent" : "text-zinc-600"
                        }`}
                      >
                        {pad(index)}
                      </span>
                      <Icon
                        className={`h-4 w-4 shrink-0 ${
                          isActive ? "text-accent" : "text-zinc-500"
                        }`}
                      />
                      <span className="flex-1 whitespace-nowrap text-[13px] font-medium lg:text-sm">
                        {category.title}
                      </span>
                      <span
                        className={`hidden rounded-md px-1.5 py-0.5 text-[10px] font-semibold lg:inline ${
                          isActive
                            ? "bg-accent/15 text-accent"
                            : "bg-white/5 text-zinc-600"
                        }`}
                      >
                        {category.skills.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Fade that hints there are more domains to scroll to */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-zinc-900/95 to-transparent lg:hidden"
              />

              <div className="mt-6 hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 lg:block">
                <p className="text-3xl font-black leading-none text-white">
                  {totalSkills}
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  skills · {skillCategories.length} domains
                </p>
                <div className="mt-3 h-px bg-white/10" />
                <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                  Backend-first and product-minded. Always adding something new.
                </p>
              </div>
            </div>

            {/* Active domain */}
            <div className="relative min-w-0 min-h-[420px] p-5 sm:p-8 lg:p-10">
              <div
                key={activeIndex}
                aria-live="polite"
                className="skill-panel-enter"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent/80">
                      Domain {pad(activeIndex)}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {active.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-500">
                      {active.blurb}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="hidden select-none text-[64px] font-black leading-none text-white/[0.04] sm:block"
                  >
                    {pad(activeIndex)}
                  </span>
                </div>

                <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {active.skills.map((skill) => {
                    const Icon = skill.Icon;

                    return (
                      <div
                        key={skill.name}
                        className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.06]"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors duration-300 group-hover:border-accent/20 group-hover:bg-accent/10 group-hover:text-accent">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-semibold text-zinc-100">
                            {skill.name}
                          </span>
                          {skill.detail && (
                            <span className="mt-0.5 block text-[11px] leading-snug text-zinc-500">
                              {skill.detail}
                            </span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  <span className="text-accent/70">
                    {active.skills.length} skills
                  </span>
                  <span className="h-1 w-1 rounded-full bg-zinc-700" />
                  <span>Selected domain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default Skills;
