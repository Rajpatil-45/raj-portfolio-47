import React from "react";
import { User, Target, Compass, BookOpen } from "lucide-react";
import { PERSONAL_INFO, LANGUAGES, AREAS_OF_INTEREST } from "../../data/portfolioData";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00d2ff] mb-3">
            <User className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff6b00]">ME</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d2ff] to-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Statement Card */}
          <div className="lg:col-span-7 bg-[#0b0f1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 relative overflow-hidden group hover:border-[#00d2ff]/40 transition-all duration-300 shadow-xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d2ff]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00d2ff]/10 transition-colors"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#ff6b00]/25">
                <Target className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 font-['Space_Grotesk']">
                BCA Student | Data Analytics & AI/ML
              </h3>

              {/* Exact Resume Quote */}
              <blockquote className="text-lg sm:text-xl text-slate-200 leading-relaxed font-light italic mb-8 border-l-4 border-[#00d2ff] pl-4 py-1">
                "{PERSONAL_INFO.aboutMe}"
              </blockquote>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                Based in <span className="text-white font-medium">{PERSONAL_INFO.location}</span>, I combine analytical rigor with modern software engineering practices. My academic curriculum at KVN Naik College (SPPU) paired with practical hands-on internship experience has fostered a structured approach to problem-solving and rapid data interpretation.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs font-mono text-[#ff6b00] uppercase mb-1">Role Objective</div>
                  <div className="text-sm font-semibold text-white">Data Analyst / AI Developer</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs font-mono text-[#00d2ff] uppercase mb-1">Availability</div>
                  <div className="text-sm font-semibold text-white">Immediate / Full-time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Core Interests Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Areas of Interest */}
            <div className="bg-[#0b0f1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-7 hover:border-[#ff6b00]/40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-5 h-5 text-[#ff6b00]" />
                <h4 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  Areas of Interest
                </h4>
              </div>
              <div className="space-y-3">
                {AREAS_OF_INTEREST.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-all group"
                  >
                    <div className="text-sm font-semibold text-white group-hover:text-[#00d2ff] transition-colors flex items-center justify-between">
                      <span>{item.name}</span>
                      <span className="text-[10px] font-mono text-slate-500">0{index + 1}</span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-[#0b0f1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-7 hover:border-[#00d2ff]/40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-[#00d2ff]" />
                <h4 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  Languages Spoken
                </h4>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-colors"
                  >
                    <div className="text-sm font-bold text-white">{lang.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-1 leading-tight">
                      {lang.name === "Marathi" ? "Native" : "Proficient"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
