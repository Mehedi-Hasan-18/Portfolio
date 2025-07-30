import React from "react";
import cflogo from "../assets/codeforces_logo.webp";
import ytlogo from "../assets/Youtube Logo.png";
import ccclogo from "../assets/CodeChef_Logo.png";

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
    <section className=" text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
          Extra‑Curricular Activities
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ecaItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href || "#"}
              target={item.href ? "_blank" : "_self"}
              rel={item.href ? "noreferrer" : undefined}
              className="group relative block rounded-2xl border border-white/50 bg-gray-900/60 p-6 backdrop-blur
                         transition-transform duration-300 hover:-translate-y-1 hover:border-white/50 hover:shadow-xl"
            >
              {/* subtle gradient ring on hover */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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
                <span className="inline-flex items-center rounded-full border border-gray-700 px-2.5 py-0.5 text-xs text-gray-300">
                  {item.tag}
                </span>
                {item.href && (
                  <span className="text text-blue-400">View →</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ECA;
