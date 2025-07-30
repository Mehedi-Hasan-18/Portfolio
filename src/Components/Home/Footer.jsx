import { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Heart,
  ArrowUp,
  ExternalLink,
  Coffee,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Mehedi-Hasan-18",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mehedi-hasan-85278b2a0/",
      icon: Linkedin,
    },
    { name: "Twitter", href: "https://x.com/MehediHasa48813", icon: Twitter },
    { name: "Email", href: "mailto:mdmehedihasanroby@gmail.com", icon: Mail },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Full-Stack Devlopment", href: "#" },
    { name: "Backend Development", href: "#" },
    { name: "Frontend Devlopment", href: "#" },
  ];

  const handleNewsletter = () => {
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-gray-800  text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Mehedi Hasan
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Crafting digital experiences with passion and precision. Let's
                build something amazing together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                Cyberjaya,Malaysia
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                +60 174142969
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                mdmehedihasanroby@gmail.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    {service.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest updates and insights.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm transition-all duration-300"
              />
              <button
                onClick={handleNewsletter}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0 ">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 " />
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="text-sm mr-2">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center mb-2 sm:mb-0">
              © 2025 Portfolio. Made with
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              and
              <Coffee className="w-4 h-4 mx-1 text-yellow-500" />
              in Cyberjaya.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
