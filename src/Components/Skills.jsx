import SkillBar from "./SkillBar";

const Skills = () => {
  const SKILLS = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 82 },
    { name: "Python", level: 85 },
    { name: "Django", level: 72 },
    { name: "RESTful API", level: 80 },
    { name: "PostgreSQL", level: 90 },
    { name: "JWT Authentication", level: 90 },
    { name: "Vercel", level: 90 },
    { name: "Firebase", level: 90 },
  ];
  return (
    <section className="md:max-w-7xl md:mx-auto md:px-4 md:py-12 mt-10">
      <div
        className="group rounded-2xl border border-white/50 bg-gray-900/60 p-6 backdrop-blur
                         transition-transform duration-300 hover:-translate-y-1 hover:border-white/50 hover:shadow-xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          <span className="text-indigo-500">Skills</span>
        </h2>

        <p className="mt-2 text-center text-white/70 text-sm md:text-base">
          Core technologies I use regularly
        </p>

        {/* Bars grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {SKILLS.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
