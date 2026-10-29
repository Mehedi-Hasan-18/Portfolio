import { useEffect, useState } from "react";
import { Download, Home, FolderKanban, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navber = () => {
  const location = useLocation();
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let travel = 0;
    let frame = 0;

    const evaluate = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY;
      lastY = y;

      // Always return to the full pill when near the top.
      if (y <= 24) {
        travel = 0;
        setIsShrunk(false);
        return;
      }

      // Ignore tiny jitter from trackpads/momentum so the pill
      // doesn't rapidly toggle between states while scrolling.
      if (Math.abs(delta) < 4) return;

      travel += delta;

      if (travel > 32 && y > 96) {
        setIsShrunk(true);
        travel = 0;
      } else if (travel < -32) {
        setIsShrunk(false);
        travel = 0;
      }
    };

    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(evaluate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/#work", icon: FolderKanban },
    { name: "About", href: "/about", icon: Home },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <>
      <nav className="sticky top-3 z-50 hidden w-full px-3 md:block">
        <div
          className={`nav-pill mx-auto flex items-center justify-between rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-lg shadow-black/20 ${
            isShrunk ? "max-w-2xl h-11 px-3 sm:px-4" : "max-w-3xl h-14 px-4 sm:px-6"
          }`}
        >
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`font-display font-bold tracking-tight text-white hover:text-accent transition-all duration-300 ${
                isShrunk ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
              }`}
            >
              Mehedi<span className="text-accent">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group relative flex items-center rounded-lg text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 ${
                    isShrunk ? "px-2 py-1 text-xs" : "px-3 py-1.5"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="https://drive.google.com/file/d/1xXeZUpnv1ldzd_Z6kDXDNd-Eg77JSyFV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center rounded-full text-white text-sm font-medium border border-white/15 hover:border-accent hover:text-accent transition-all duration-300 ${
                isShrunk ? "px-3 py-1" : "px-4 py-1.5"
              }`}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>
        </div>
      </nav>

      <div className="md:hidden fixed bottom-[max(0.5rem,env(safe-area-inset-bottom))] left-1/2 z-[60] w-[calc(100%-0.75rem)] max-w-[20rem] -translate-x-1/2">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/95 px-1.5 py-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl transform-gpu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href === "/"
              ? location.pathname === "/"
              : location.pathname.includes(item.href);

            return (
              <Link
                key={item.name}
                to={item.href}
                aria-label={item.name}
                className={`flex flex-1 items-center justify-center rounded-xl p-1.5 transition-all duration-200 ${
                  isActive
                    ? "bg-accent/10 text-accent shadow-[0_0_0_1px_rgba(201,168,106,0.3)]"
                    : "text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1xXeZUpnv1ldzd_Z6kDXDNd-Eg77JSyFV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Mehedi Hasan's resume"
            className="flex flex-1 items-center justify-center rounded-xl p-1.5 text-zinc-400 transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            <Download className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navber;
