import React from "react";
import cflogo from "../assets/codeforces_logo.webp";
import ytlogo from "../assets/Youtube Logo.png";
import ccclogo from "../assets/CodeChef_Logo.png";
import ScrollFloat from "./ScrollFloat";
import AnimatedContent from "./AnimatedContent";

const ecaItems = [
  {
    title: "CodeChef • 2★ Coder",
    stat: "County Rank: 1150",
    description:
      "Solved a wide range of algorithmic problems regularly, improving speed and accuracy through contests and practice sets.",
    tag: "Competitive Programming",
    emoji: ccclogo,
    href: "https://www.codechef.com/users/mehedi_hasan18",
  },
  {
    title: "Codeforces • 1035 Max Rating",
    stat: "Max Rating: 1035",
    description:
      "Consistently participated in Codeforces rounds, sharpening problem-solving skills under time pressure.",
    tag: "Competitive Programming",
    emoji: cflogo,
    href: "https://codeforces.com/profile/mehedi_hasan_18",
  },
  {
    title: "YouTube Content Creator",
    stat: "1000+ Subscribers",
    description:
      "Produce videos on Education and Study Abroad topics—planning, scripting, filming, and editing to deliver clear, helpful content.",
    tag: "Personal Interest",
    emoji: ytlogo,
    href: "https://www.youtube.com/@meheeeedi_hasan",
  },
];

const ECA = () => {
  return (
    <section className=" text-zinc-100">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <p className="eyebrow">04 — Beyond the Code</p>
          <div className="text-4xl mt-4 text-center md:text-5xl font-black tracking-tight text-white">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Extra-Curricular Activities
            </ScrollFloat>
          </div>
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecaItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href || "#"}
                target={item.href ? "_blank" : "_self"}
                rel={item.href ? "noreferrer" : undefined}
                className="group relative block rounded-2xl border border-white/10 bg-zinc-900/70 p-6
                         transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-lg hover:shadow-black/40"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img
                      className="w-full h-full object-contain rounded-md"
                      src={item.emoji}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                    {item.stat && (
                      <p className="mt-1 text-sm text-gray-300">{item.stat}</p>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-400">{item.description}</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-zinc-400">
                    {item.tag}
                  </span>
                  {item.href && (
                    <span className="text text-accent">View →</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ECA;
