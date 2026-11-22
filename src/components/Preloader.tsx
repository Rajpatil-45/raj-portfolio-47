import React, { useState, useEffect } from "react";
import { Terminal, Sparkles, ArrowRight } from "lucide-react";

interface PreloaderProps {
  onEnter: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsReady(true);
          return 100;
        }
        const diff = Math.floor(Math.random() * 14) + 6;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#04060a] transition-all duration-700 ${
        isExiting ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#00d2ff]/20 via-[#c084fc]/15 to-[#ff6b00]/20 rounded-full blur-[140px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-lg w-full px-6 flex flex-col items-center text-center">
        {/* Terminal Icon & Brand */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff6b00] to-[#00d2ff] p-[2px] mb-8 shadow-[0_0_40px_rgba(0,210,255,0.35)]">
          <div className="w-full h-full bg-[#07090e] rounded-[14px] flex items-center justify-center">
            <Terminal className="w-8 h-8 text-[#00d2ff]" />
          </div>
        </div>

        {!isReady ? (
          /* ================= 1. LOADING STAGE ================= */
          <div className="w-full space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs font-mono tracking-widest text-[#00d2ff] uppercase">
                INITIALIZING PORTFOLIO
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
            </div>

            <div className="text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
              {progress}%
            </div>

            {/* Futuristic Progress Bar */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-[#ff6b00] via-[#00d2ff] to-[#ff6b00] rounded-full transition-all duration-150 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[3px]" />
              </div>
            </div>

            <p className="text-xs font-mono text-slate-400">
              Loading Projects, Analytics Engine & Interactive Experience...
            </p>
          </div>
        ) : (
          /* ================= 2. READY STAGE: "ENTER MY PORTFOLIO" BUTTON ================= */
          <div className="space-y-6 animate-fade-in w-full flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 text-xs font-mono text-[#00d2ff]">
              <Sparkles className="w-3.5 h-3.5 text-[#ff6b00]" />
              <span>SYSTEM READY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight leading-tight">
              WELCOME TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#c084fc] to-[#ff6b00]">
                RAJ PATIL'S PORTFOLIO
              </span>
            </h1>

            <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-sm">
              BCA Student • Data Analytics & AI/ML Specialist
            </p>

            {/* "Enter My Portfolio" CTA Button */}
            <button
              onClick={handleEnter}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#ff6b00] via-[#ff8c00] to-[#00d2ff] hover:shadow-[0_0_35px_rgba(0,210,255,0.6)] transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer shadow-xl mt-4"
            >
              <span>ENTER MY PORTFOLIO</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
