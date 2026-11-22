import React from "react";
import { Terminal, ArrowUp, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { LinkedinIcon } from "./icons/SocialIcons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#04060a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff6b00] to-[#00d2ff] p-[2px]">
            <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-[#00d2ff]" />
            </div>
          </div>
          <div>
            <div className="font-bold text-white font-['Space_Grotesk'] tracking-wider text-base">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              {PERSONAL_INFO.title}
            </div>
          </div>
        </div>

        {/* Center note */}
        <div className="text-center text-xs text-slate-400 font-mono">
          Designed & Built with Three.js, React & GSAP • © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00d2ff] hover:border-[#00d2ff]/40 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#ff6b00] hover:border-[#ff6b00]/40 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
