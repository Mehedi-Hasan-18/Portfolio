import { Download, Home, UserRound, FolderKanban, Phone, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navber = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "about", icon: UserRound },
    { name: "Projects", href: "https://github.com/Mehedi-Hasan-18?tab=repositories", icon: FolderKanban },
    { name: "Contact", href: "contact", icon: Phone },
  ];

  return (
    <>
      <nav className="text-black backdrop-blur-lg border-b border-gray-200/50 shadow-lg sticky top-0 z-50 bg-transparent">
      <div className="md:max-w-7xl md:mx-auto w-11/12 mx-auto">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Mehedi Hasan
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-blue-600 transition-all duration-300 relative"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
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
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>

        </div>
      </div>
    </nav>

      <div className="md:hidden fixed bottom-2 left-1/2 z-[60] w-[calc(100%-0.75rem)] max-w-[20rem] -translate-x-1/2">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-gray-900/90 px-1.5 py-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
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
                    ? "bg-blue-500/20 text-blue-400 shadow-[0_0_0_1px_rgba(59,130,246,0.25)]"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
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
            className="flex flex-1 items-center justify-center rounded-xl p-1.5 text-gray-300 transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            <Download className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navber;
