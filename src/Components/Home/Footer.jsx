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


  const handleNewsletter = () => {
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-5 border-t border-white/10 text-zinc-200 overflow-hidden">
      <div className="relative md:max-w-7xl w-11/12 mx-auto py-14">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-display text-2xl font-medium text-white mb-4">
                Mehedi Hasan<span className="text-accent">.</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Crafting digital experiences with passion and precision. Let's
                build something amazing together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-accent" />
                Dhaka, Bangladesh
              </div>
              <div className="flex items-center text-zinc-400 text-sm">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                +8801626759496
              </div>
              <div className="flex items-center text-zinc-400 text-sm">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                mdmehedihasanroby@gmail.com
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-6 text-white">
              Stay Updated
            </h4>
            <p className="text-zinc-400 text-sm mb-4">
              Subscribe to get the latest updates and insights.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-zinc-900 border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-white text-sm transition-all duration-300"
              />
              <button
                onClick={handleNewsletter}
                className="w-full bg-white text-zinc-950 py-2 px-4 rounded-lg hover:bg-accent transition-all duration-300 text-sm font-semibold"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

{/* Social Links */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 sm:mb-0 ">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-zinc-400 hover:text-accent transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 " />
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-zinc-400 hover:text-white transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="text-sm mr-2">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <span className="text-zinc-400 text-sm flex items-center mb-2 sm:mb-0">
              © Made with
              <Heart className="w-4 h-4 mx-1 text-accent animate-pulse" />
              and
              <Coffee className="w-4 h-4 mx-1 text-accent" />
              in Dhaka.
            </span>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
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
