import React from "react";
import { GraduationCap, Award, School } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "../../data/portfolioData";

export const EducationAndCertsSection: React.FC = () => {
  return (
    <div className="relative z-10 py-24 space-y-24">
      {/* ================= EDUCATION SECTION ================= */}
      <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00d2ff] mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff6b00]">EDUCATION</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d2ff] to-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION.map((edu, idx) => (
            <div
              key={edu.id}
              className="bg-[#0b0f1a]/85 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#00d2ff]/40 transition-all duration-300 relative group overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/5 rounded-full blur-2xl group-hover:bg-[#ff6b00]/10 transition-colors"></div>

              <div className="w-12 h-12 rounded-2xl bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/20 flex items-center justify-center mb-6">
                {idx === 0 ? <GraduationCap className="w-6 h-6" /> : <School className="w-6 h-6" />}
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-[#ff6b00] font-semibold">
                {idx === 0 ? "Undergraduate Degree" : "Higher Secondary"}
              </span>

              <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mt-1 mb-2">
                {edu.degree}
              </h3>

              <div className="text-sm font-semibold text-slate-200 mb-1">
                {edu.institution}
              </div>

              {edu.boardOrUniversity && (
                <div className="text-xs font-mono text-[#00d2ff] mb-4">
                  {edu.boardOrUniversity}
                </div>
              )}

              {edu.description && (
                <p className="text-xs text-slate-400 leading-relaxed pt-4 border-t border-white/10">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CERTIFICATIONS SECTION ================= */}
      <section id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00d2ff] mb-3">
            <Award className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff6b00]">CERTIFICATIONS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Verified credentials in Advanced Analytics, Software Engineering, Cloud Architecture, and Business Intelligence.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d2ff] to-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              className="group bg-[#0b0f1a]/85 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#ff6b00]/50 transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff6b00]/20 to-[#ff6b00]/5 text-[#ff6b00] border border-[#ff6b00]/30 flex items-center justify-center font-bold font-mono">
                    0{index + 1}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                    Verified
                  </span>
                </div>

                <span className="text-xs font-mono text-[#00d2ff] uppercase tracking-wider block mb-1">
                  {cert.category}
                </span>

                <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-3 group-hover:text-[#ff6b00] transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">Issuer:</span>
                <span className="font-semibold text-slate-200">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
