// import image from "../../assets/Profile Photo.png";
import image from "../../assets/heroPhotonew_photo.png";
import codeforce from "../../assets/codeforces_logo.webp";
import codechef from "../../assets/CodeChef_Logo.png";
import Project from "../Project";
import Skills from "../Skills";
import Education from "../Education";
import ECA from "../ECA";
import { ArrowDown, Download, Github, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import ScrambleText from "../ScrambleText";
import AnimatedContent from "../AnimatedContent";
import ScrollFloat from "../ScrollFloat";
import YouTubeShowcase from "../YouTubeShowcase";

const Home = () => {
  const [copied, setCopied] = useState("");

  const email = "mdmehedihasanroby@gmail.com";
  const phone = "+8801626759496";

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(""), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleMailto = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Hello Mehedi!");
    const body = encodeURIComponent(
      "Hi Mehedi,\n\nI came across your portfolio and would love to connect.\n\nBest regards,",
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/mehedi-hasan-85278b2a0/",
    youtube: "https://youtube.com/@meheeeedi_hasan",
    github: "https://github.com/Mehedi-Hasan-18",
    codeforce: "https://codeforces.com/profile/mehedi_hasan_18",
    codechef: "https://www.codechef.com/users/mehedi_hasan18",
  };

  const stats = [
    { value: "2★", label: "CodeChef" },
    { value: "1500+", label: "YouTube" },
    { value: "1+", label: "Years Building" },
  ];

  return (
    <div className="relative text-zinc-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-7 z-10">
            <p className="eyebrow">
              Software Engineer
            </p>
            <ScrambleText
              text="Mehedi Hasan"
              duration={900}
              className="block font-black text-5xl tracking-tight text-white md:text-7xl"
            />

            <div className="min-h-8 text-xl font-bold md:text-2xl">
              <ScrambleText
                texts={["Software Engineer", "Content Creator", "Problem Solver"]}
                interval={2000}
                duration={650}
                loop
                className="inline-block text-accent"
              />
            </div>

            <p className="leading-relaxed max-w-xl text-sm md:text-base text-zinc-400">
              I'm a problem-solver at heart who loves turning ideas into working
              systems. Whether it's designing backend infrastructure, building
              full-stack features, or integrating AI to enhance functionality
              and efficiency, I focus on creating solutions that are elegant,
              reliable, and built with purpose.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() =>
                  (window.location.href = "mailto:mdmehedihasanroby@mail.com")
                }
                className="px-7 py-3 bg-white text-zinc-950 rounded-lg text-sm font-semibold transition-colors duration-200 hover:bg-accent"
              >
                Get In Touch
              </button>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/file/d/1xXeZUpnv1ldzd_Z6kDXDNd-Eg77JSyFV/view?usp=sharing")
                }
                className="inline-flex items-center px-6 py-3 text-white rounded-lg text-sm font-medium border border-white/15 transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </button>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex flex-col items-center">
              <div
                aria-hidden="true"
                className="absolute -inset-10 -z-10 rounded-full border border-white/5"
              ></div>
              <div
                aria-hidden="true"
                className="absolute inset-5 -z-10 rounded-full border border-accent/20"
              ></div>
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10">
                <div className="relative w-full h-full bg-zinc-900">
                  <img
                    src={image}
                    alt="Mehedi Hasan"
                    className="absolute inset-0 w-full h-full object-contain block"
                  />
                </div>
              </div>
              {/* Social Media Links */}
              <div className="flex justify-center gap-2.5 mt-7">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-zinc-900 hover:bg-accent rounded-full border border-white/10 hover:border-accent transition-colors duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
                </a>

                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-zinc-900 hover:bg-accent rounded-full border border-white/10 hover:border-accent transition-colors duration-300 group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-zinc-900 hover:bg-accent rounded-full border border-white/10 hover:border-accent transition-colors duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
                </a>
                <a
                  href={socialLinks.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-zinc-900 hover:bg-accent rounded-full border border-white/10 hover:border-accent transition-colors duration-300 group"
                  aria-label="CodeChef"
                >
                  <img
                    src={codechef}
                    className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100"
                    alt="CodeChef"
                  />
                </a>
                <a
                  href={socialLinks.codeforce}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-zinc-900 hover:bg-accent rounded-full border border-white/10 hover:border-accent transition-colors duration-300 group"
                  aria-label="Codeforces"
                >
                  <img
                    src={codeforce}
                    className="w-4 h-4 object-contain opacity-80 group-hover:opacity-100"
                    alt="Codeforces"
                  />
                </a>
              </div>

              {/* Stat row */}
              <div className="mt-8 grid w-full max-w-sm grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-6 text-center">
                {stats.map((stat) => (
                  <div key={stat.label} className="px-2">
                    <p className="font-black text-2xl text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div aria-hidden="true" className="mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-zinc-600">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>
      <Project></Project>
      <Skills className="md:mt-5"></Skills>
      <Education></Education>
      <ECA></ECA>
      <YouTubeShowcase channelUrl={socialLinks.youtube} />
      {/* //contact form */}
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
        className="py-20 md:py-24"
      >
        <div className="text-center">
          <p className="eyebrow">05 — Contact</p>
          <div className="text-4xl mt-4 text-center md:text-5xl font-black tracking-tight text-white">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=70%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
            >
              Get in touch
            </ScrollFloat>
          </div>
          <p className="text-zinc-500 text-sm md:text-base mt-4">
            I try to respond within 24–48 hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 pb-5">
          <div></div>
          <div
            className="relative rounded-2xl bg-zinc-900/70 border border-white/10 p-6
                         transition-transform duration-300 hover:-translate-y-1 hover:border-white/25"
          >
            <h2 className="text-xl font-semibold text-white">Get in touch</h2>
            <p className="text-zinc-400 text mt-1">
              I try to respond within 24–48 hours.
            </p>

            <div className="mt-6 space-y-4">
              {/* Email */}
              <div className="flex items-center hover:border-white/30 transition justify-between gap-3 rounded-xl border border-white/10 bg-zinc-950/60 p-4">
                <div className="min-w-0">
                  <p className="font-bold text-zinc-400">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="truncate font-medium text-zinc-200 hover:text-accent transition"
                    title={email}
                  >
                    {email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${email}`}
                    className="rounded-lg border border-white/15 px-3 py-1.5 text-sm hover:border-accent hover:text-accent transition"
                  >
                    Write
                  </a>
                  <button
                    onClick={() => copyToClipboard(email)}
                    className="rounded-lg border border-white/15 px-3 py-1.5 text-sm hover:border-zinc-400 transition"
                    aria-label="Copy email"
                  >
                    {copied === email ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-950/60 p-4 hover:border-white/30 transition">
                <div className="min-w-0 ">
                  <p className="font-bold text-zinc-400">Phone</p>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="truncate font-medium text-zinc-200 hover:text-accent transition"
                    title={phone}
                  >
                    {phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    target="_blank"
                    href="https://wa.link/8i0d7s"
                    className="rounded-lg border border-white/15 px-3 py-1.5 text-sm hover:border-accent hover:text-accent transition"
                  >
                    WhatsAPP
                  </a>
                  <button
                    onClick={() => copyToClipboard(phone)}
                    className="rounded-lg border border-white/15 px-3 py-1.5 text-sm hover:border-zinc-400 transition"
                    aria-label="Copy phone"
                  >
                    {copied === phone ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick mailto button */}
            <form onSubmit={handleMailto} className="mt-6">
              <button
                type="submit"
                className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white hover:bg-accent hover:text-zinc-950 transition border border-white/10"
              >
                Quick Email
              </button>
            </form>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default Home;
