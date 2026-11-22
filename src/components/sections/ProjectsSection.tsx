import React from "react";
import { FolderGit2, ExternalLink, Check, Bot, ShoppingCart, BarChart3 } from "lucide-react";
import { PROJECTS } from "../../data/portfolioData";
import { GithubIcon } from "../icons/SocialIcons";

interface ProjectsSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00d2ff] mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>FEATURED IMPLEMENTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#ff6b00]">PROJECTS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Real-world systems highlighting AI assistant interfaces, interactive Excel analytics dashboards, and clean frontend architectures.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00d2ff] to-[#ff6b00] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS.map((project, index) => {
            const isBroAI = project.id === "bro-ai-assistant";
            const isDashboard = project.id === "excel-dashboard";

            return (
              <div
                key={project.id}
                className="group relative bg-[#0b0f1a]/85 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#00d2ff]/50 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:shadow-[0_15px_40px_rgba(0,210,255,0.15)]"
              >
                {/* Visual Card Header */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-gradient-to-br from-[#121829] to-[#07090e] border-b border-white/10 p-6 flex items-center justify-center">
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

                  {/* Dynamic Glowing Icon / Badge */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-lg ${
                        isDashboard
                          ? "bg-gradient-to-br from-[#00d2ff]/20 to-[#c084fc]/10 text-[#00d2ff] border border-[#00d2ff]/40 shadow-[#00d2ff]/20"
                          : isBroAI
                          ? "bg-gradient-to-br from-[#00d2ff]/20 to-[#00d2ff]/5 text-[#00d2ff] border border-[#00d2ff]/40 shadow-[#00d2ff]/20"
                          : "bg-gradient-to-br from-[#ff6b00]/20 to-[#ff6b00]/5 text-[#ff6b00] border border-[#ff6b00]/40 shadow-[#ff6b00]/20"
                      }`}
                    >
                      {isDashboard ? (
                        <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-[#00d2ff]" />
                      ) : isBroAI ? (
                        <Bot className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse text-[#00d2ff]" />
                      ) : (
                        <ShoppingCart className="w-8 h-8 sm:w-10 sm:h-10 text-[#ff6b00]" />
                      )}
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Index */}
                  <span className="absolute top-4 right-5 text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white/10 group-hover:text-white/20 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 font-['Space_Grotesk'] group-hover:text-[#00d2ff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#ff6b00] uppercase tracking-wider mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-5 font-light">
                      {project.description}
                    </p>

                    {/* Specific Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-[#00d2ff] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2.5 pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        if (onSelectProject) {
                          onSelectProject(project.id);
                        } else {
                          const contactEl = document.getElementById("contact");
                          if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>{project.actionText || "View Project Details"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href="#contact"
                      title="GitHub Repository / Code"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-white/5 border border-white/10 hover:border-white/20 hover:text-white transition-all cursor-pointer"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span className="hidden sm:inline">Repo</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
