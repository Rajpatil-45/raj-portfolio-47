import React from "react";

export const Hero3DScene: React.FC<{ scrollProgress: number }> = () => {
  return (
    <div className="w-full h-full min-h-[500px] relative select-none flex items-center justify-center">
      {/* Signature purple-violet cyber radial glow behind Raj Patil's photo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-gradient-to-tr from-[#9333ea]/35 via-[#c084fc]/25 to-[#ff6b00]/20 rounded-full blur-[90px] pointer-events-none" />

      {/* RAJ PATIL PERMANENT PHOTO CARD (NO 3D CHARACTER OVERLAY) */}
      <div className="relative z-20 flex flex-col items-center justify-center animate-fade-in">
        {/* Glowing Futuristic Cyber Frame */}
        <div className="relative group">
          {/* Cybernetic Rotating Glow Ring */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#00d2ff] via-[#c084fc] to-[#ff6b00] opacity-75 blur-xl group-hover:opacity-100 transition-opacity animate-pulse" />

          {/* Outer Border Ring */}
          <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 rounded-full p-1.5 bg-gradient-to-b from-white/30 via-white/10 to-transparent backdrop-blur-md">
            {/* Image Container */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative bg-[#070a14]">
              <img
                src="/raj-patil.jpg"
                alt="Raj Patil - BCA Student | Data Analytics & AI/ML"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />

              {/* High-tech overlay gloss */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070c]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Hello I am Raj Patil Sub-badge */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-mono text-white mb-1 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
            <span className="tracking-wider font-semibold">HELLO, I AM RAJ PATIL</span>
          </div>
          <span className="text-xs text-slate-400 font-mono mt-1">
            BCA Student • Data Analytics & AI/ML
          </span>
        </div>
      </div>
    </div>
  );
};
