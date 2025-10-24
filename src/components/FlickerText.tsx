"use client";

export default function FlickerText() {

  return (
    <div className="absolute top-[18%] left-1/2 -translate-x-1/2 text-center z-20 px-6 max-w-7xl w-full">
      <div className="relative mb-12">
        <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-[0.08em] sm:tracking-[0.1em] font-mono lowercase title-glow">
          <span className="inline-block wave-text">(rev)olve</span>
        </h1>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden opacity-15 pointer-events-none">
          <div
            className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-[0.08em] sm:tracking-[0.1em] font-mono lowercase blur-md"
            aria-hidden="true"
          >
            (rev)olve
          </div>
        </div>
      </div>

      <div className="relative mb-8">
        <p className="text-sm md:text-base lg:text-lg tracking-[0.2em] lowercase font-mono text-white/50">
          boston's most cracked hackathon
        </p>
      </div>

      <div className="flex gap-6 justify-center items-center text-xs md:text-sm font-mono lowercase tracking-wide text-white/30 flex-wrap">
        <div className="blueprint-line">nov 7-9, 2025</div>
        <div className="w-1 h-1 bg-white/20 rounded-full" />
        <div className="blueprint-line">tbd</div>
        <div className="w-1 h-1 bg-white/20 rounded-full" />
        <div className="blueprint-line">48 hours</div>
      </div>

      <a
        href="#apply"
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group"
      >
        <div className="px-6 py-3 border border-white/30 hover:border-white/60 transition-all text-sm font-mono lowercase tracking-wider hover:bg-white/5">
          apply now
        </div>
        <div className="w-[1px] h-6 bg-white/20 group-hover:bg-white/40 transition-colors" />
      </a>
    </div>
  );
}
