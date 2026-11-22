import React from "react";
import { Briefcase, Calendar, CheckCircle2, Building } from "lucide-react";
import { INTERNSHIP } from "../../data/portfolioData";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00d2ff] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            INTERNSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff6b00]">EXPERIENCE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Hands-on professional immersion applying analytics algorithms and automated data cleansing pipelines.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d2ff] to-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 border-l-2 border-[#00d2ff]/40 space-y-12">
            {/* Timeline Node */}
            <div className="relative group">
              {/* Glowing Pulse Node on the line */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#05070c] border-2 border-[#00d2ff] flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00] animate-ping" />
              </div>

              <div className="bg-[#0b0f1a]/85 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 hover:border-[#00d2ff]/50 transition-all duration-300 shadow-2xl">
                {/* Header Details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#ff6b00] font-semibold">
                      INTERNSHIP
                    </span>
                    <h3 className="text-2xl font-bold text-white font-['Space_Grotesk'] mt-1">
                      {INTERNSHIP.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-300 text-sm mt-1">
                      <Building className="w-4 h-4 text-[#00d2ff]" />
                      <span className="font-semibold text-white">{INTERNSHIP.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#00d2ff]" />
                    <span>Duration: {INTERNSHIP.duration}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                    Key Deliverables & Responsibilities:
                  </h4>
                  <div className="space-y-4">
                    {INTERNSHIP.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-lg bg-[#00d2ff]/10 text-[#00d2ff] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competencies Acquired */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Core Tools:</span>
                  {["Python", "Pandas", "Matplotlib", "Data Cleaning", "Data Visualization", "Analytical Reporting"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#00d2ff]/10 border border-[#00d2ff]/20 text-[#00d2ff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
