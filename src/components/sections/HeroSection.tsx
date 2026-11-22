import React from "react";
import { ArrowRight, Download, MapPin, Code2, Database, Brain } from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";

interface HeroProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <div className="relative z-10 w-full min-h-[90vh] flex flex-col justify-center pt-24 pb-12">
      <div className="max-w-2xl">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hover:border-[#00d2ff]/40 transition-colors">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00d2ff] animate-pulse"></span>
          <span className="text-xs font-mono tracking-wider uppercase text-slate-300">
            Available for Opportunities
          </span>
          <span className="text-[10px] text-slate-500">•</span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#ff6b00]" /> {PERSONAL_INFO.location}
          </span>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 font-['Space_Grotesk'] leading-[1.08]">
          HELLO, I'M <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00d2ff] to-[#ff6b00] drop-shadow-[0_0_35px_rgba(0,210,255,0.3)]">
            {PERSONAL_INFO.name}
          </span>
        </h1>

        {/* Professional Title */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-[2px] w-8 bg-[#ff6b00]"></div>
          <h2 className="text-sm sm:text-base font-mono font-semibold tracking-widest text-[#00d2ff] uppercase">
            {PERSONAL_INFO.title}
          </h2>
        </div>

        {/* Short introduction */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-light">
          Motivated BCA student passionate about transforming raw datasets into actionable intelligence,
          architecting AI-driven interactive systems, and crafting performant web technologies.
        </p>

        {/* Highlight Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1322] border border-white/10 text-xs text-slate-300 font-mono">
            <Database className="w-3.5 h-3.5 text-[#00d2ff]" />
            <span>Data Analytics</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1322] border border-white/10 text-xs text-slate-300 font-mono">
            <Brain className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>Artificial Intelligence</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0e1322] border border-white/10 text-xs text-slate-300 font-mono">
            <Code2 className="w-3.5 h-3.5 text-[#00d2ff]" />
            <span>Python & Web</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="/resume.pdf"
            download="RAJ_PATIL_RESUME.pdf"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#00d2ff]/50 hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 text-[#00d2ff]" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Live Metrics preview */}
        <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10 max-w-lg">
          <div>
            <div className="text-2xl font-extrabold text-white font-['Space_Grotesk']">6+</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Mos Industry Exp</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-[#00d2ff] font-['Space_Grotesk']">4</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Certifications</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-[#ff6b00] font-['Space_Grotesk']">100%</div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">Commitment</div>
          </div>
        </div>
      </div>
    </div>
  );
};
