import { useEffect, useState } from "react";
import { Download, Home, UserRound, FolderKanban, Phone, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navber = () => {
  const location = useLocation();
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 80 && y > lastY) {
        setIsShrunk(true);
      } else if (y < lastY) {
        setIsShrunk(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "about", icon: UserRound },
    { name: "Projects", href: "https://github.com/Mehedi-Hasan-18?tab=repositories", icon: FolderKanban },
    { name: "Contact", href: "contact", icon: Phone },
  ];

  return (
    <>
      <nav className="sticky top-3 z-50 hidden w-full px-3 transition-all duration-300 md:block">
        <div
          className={`mx-auto flex items-center justify-between rounded-full border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-lg shadow-black/20 transition-all duration-300 ${
            isShrunk ? "max-w-2xl h-11 px-3 sm:px-4" : "max-w-3xl h-14 px-4 sm:px-6"
          }`}
        >
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className={`font-display font-bold tracking-tight text-white hover:text-accent transition-all duration-300 ${
                isShrunk ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
              }`}
            >
              Mehedi<span className="text-accent">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center rounded-lg text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 ${
                    isShrunk ? "px-2 py-1 text-xs" : "px-3 py-1.5"
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </a>
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
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/95 px-1.5 py-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href === "/"
              ? location.pathname === "/"
              : location.pathname.includes(item.href);

            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex flex-1 items-center justify-center rounded-xl p-1.5 transition-all duration-200 ${
                  isActive
                    ? "bg-accent/10 text-accent shadow-[0_0_0_1px_rgba(201,168,106,0.3)]"
                    : "text-zinc-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1xXeZUpnv1ldzd_Z6kDXDNd-Eg77JSyFV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
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
