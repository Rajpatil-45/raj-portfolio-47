import React from "react";
import { Cpu, Terminal, Database, BarChart3, Wrench, CheckCircle2 } from "lucide-react";
import { TECHNICAL_SKILLS, SOFT_SKILLS } from "../../data/portfolioData";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00d2ff] mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            TECHNICAL & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff6b00]">SOFT SKILLS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            A comprehensive spectrum of programming capabilities, database systems, analytical tools, and professional soft skills.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d2ff] to-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Technical Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TECHNICAL_SKILLS.map((tech) => {
            const isOrange = tech.color === "#ff6b00";
            return (
              <div
                key={tech.category}
                className="group relative bg-[#0b0f1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#00d2ff]/50 transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl hover:shadow-[0_10px_30px_rgba(0,210,255,0.15)]"
              >
                {/* Glow pill */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    isOrange
                      ? "bg-[#ff6b00]/15 text-[#ff6b00] border border-[#ff6b00]/30"
                      : "bg-[#00d2ff]/15 text-[#00d2ff] border border-[#00d2ff]/30"
                  }`}
                >
                  {tech.category === "Programming" && <Terminal className="w-6 h-6" />}
                  {tech.category === "Database" && <Database className="w-6 h-6" />}
                  {tech.category === "Data Analytics" && <BarChart3 className="w-6 h-6" />}
                  {tech.category === "Tools & Collaboration" && <Wrench className="w-6 h-6" />}
                </div>

                <h3 className="text-lg font-bold text-white mb-4 font-['Space_Grotesk']">
                  {tech.category}
                </h3>

                <div className="space-y-2.5">
                  {tech.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                      <span className="text-sm font-medium text-slate-200">{skill}</span>
                      <CheckCircle2
                        className={`w-4 h-4 ${
                          isOrange ? "text-[#ff6b00]" : "text-[#00d2ff]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <div className="bg-[#0b0f1a]/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk']">
                Professional Soft Skills
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Essential interpersonal and cognitive abilities driving team impact
              </p>
            </div>
            <div className="mt-3 sm:mt-0 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#ff6b00]">
              7 Key Attributes
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOFT_SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00d2ff]/30 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-semibold text-white group-hover:text-[#00d2ff] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-slate-300">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
