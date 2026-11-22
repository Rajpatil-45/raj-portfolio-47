import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06080e]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff6b00] to-[#00d2ff] p-[2px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-[#00d2ff] group-hover:text-[#ff6b00] transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider text-white flex items-center gap-1.5 font-['Space_Grotesk']">
              {PERSONAL_INFO.name}
              <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono -mt-0.5">
              DATA ANALYST & AI/ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0c101a]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-lg">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-[#ff6b00]/30 to-[#00d2ff]/30 border border-[#00d2ff]/50 shadow-[0_0_12px_rgba(0,210,255,0.3)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Call to action & status */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070a12]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#ff6b00]/20 to-[#00d2ff]/20 text-[#00d2ff] border border-[#00d2ff]/30 font-semibold"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full text-center py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-[#ff6b00] to-[#00d2ff]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
