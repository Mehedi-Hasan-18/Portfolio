import React, { useState } from "react";
import gitLogo from "../assets/github-white-icon.webp";
import fbLogo from "../assets/Facebook_Logo_(2019).png";
import instaLogo from "../assets/instagram.avif";
import LinkedInLogo from "../assets/LinkedIn.png";
import { Coffee } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Mehedi-Hasan-18",
    handle: "Mehedi-Hasan-18",
    img: gitLogo,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mehedi-hasan-85278b2a0/",
    handle: "Mehedi Hasan",
    img: LinkedInLogo,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mehedi.hasan.312630/",
    handle: "Mehedi Hasan",
    img: fbLogo,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/meheeeeedi_hasan/",
    handle: "meheeeeedi_hasan",
    img: instaLogo,
  },
];

const Contact = () => {
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
      "Hi Mehedi,\n\nI came across your portfolio and would love to connect.\n\nBest regards,"
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className=" text-zinc-100">
      <div className="md:max-w-6xl md:mx-auto md:px-6 md:py-12 m-4">
        <header className="text-center mb-12">
          <p className="eyebrow">Say Hello</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mt-4">
            Contact
          </h1>
          <p className="text-zinc-400 mt-4">
            Feel free to reach out—email, phone, or any of my socials.
          </p>
        </header>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Card: Direct Contact */}
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
                    href='https://wa.link/8i0d7s'
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

          {/* Card: Social Profiles */}
          <div className="rounded-2xl border bg-zinc-900/70 border-white/10 p-6 hover:-translate-y-1 hover:border-white/25 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-white">Find me online</h2>
            <p className="text-zinc-400  mt-1">
              Connect with me on these platforms:
            </p>

            <ul className="mt-6 space-y-4">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-950/60 p-4 hover:border-white/30 transition"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg overflow-hidden border border-white/10 flex-shrink-0">
                        <img
                          src={s.img}
                          alt={`${s.name} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-zinc-200">{s.name}</p>
                        <p className="text-sm text-zinc-400 truncate">
                          {s.handle}
                        </p>
                      </div>
                    </div>
                    <span className=" text-accent opacity-0 group-hover:opacity-100 transition">
                      Visit →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Optional: Footer note or CTA */}
        <div className="text-center mt-10">
          <p className="text-zinc-300">
            Let's connect! Drop me a message and we'll plan a <Coffee className="inline-block w-4 h-4 mx-1 text-accent align-[-0.15em]" /> discussion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
