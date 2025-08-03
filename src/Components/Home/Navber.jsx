import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "about" },
    { name: "Projects", href: "https://github.com/Mehedi-Hasan-18?tab=repositories" },
    { name: "Contact", href: "contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className=" text-white backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
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
              href="https://drive.google.com/file/d/1yxUwZVG8SKqqI6Xe3A5hJSTIZd07Imkx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 text-white backdrop-blur-md border-t border-gray-200/50">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-3 rounded-lg text-base font-medium text-white hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="px-3 py-2">
            <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
