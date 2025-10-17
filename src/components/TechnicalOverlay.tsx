"use client";

export default function TechnicalOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-10 w-48 h-48 border border-white/5 animate-spin-slow">
        <div className="absolute top-0 left-0 w-full h-full border-t border-l border-white/10" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/3" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-white/3" />
      </div>

      <div className="absolute bottom-10 right-10 w-64 h-64 border border-white/5 animate-spin-reverse">
        <div className="absolute inset-4 border border-white/3" />
        <div className="absolute inset-8 border border-white/3" />
        <div className="absolute inset-12 border border-white/3" />
      </div>

      <div className="absolute top-1/3 right-20 w-32 h-32 animate-pulse-subtle">
        <svg viewBox="0 0 100 100" className="w-full h-full" aria-label="Technical diagram">
          <title>Technical overlay diagram</title>
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" opacity="0.05" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" opacity="0.08" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="0.5" opacity="0.04" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="white" strokeWidth="0.5" opacity="0.04" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-20 w-40 h-40 animate-float">
        <div className="absolute inset-0 border-l border-t border-white/5" />
        <div className="absolute top-0 left-0 w-4 h-4 border border-white/15" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border border-white/15" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-white/5 to-transparent" />
      </div>

      <div className="absolute top-1/2 left-1/3 flex gap-1 animate-pulse-line">
        <div className="w-1 h-16 bg-white/5" />
        <div className="w-1 h-20 bg-white/8" />
        <div className="w-1 h-12 bg-white/5" />
        <div className="w-1 h-24 bg-white/8" />
        <div className="w-1 h-16 bg-white/5" />
      </div>

      <div className="absolute top-20 right-1/3 text-[8px] font-mono text-white/10 tracking-wider space-y-1">
        <div>X: 00.000</div>
        <div>Y: 00.000</div>
        <div>Z: 00.000</div>
      </div>

      <div className="absolute bottom-20 left-1/3 text-[8px] font-mono text-white/10 tracking-wider">
        <div className="border border-white/5 px-2 py-1">
          REV_PROTOCOL_V2.0
        </div>
      </div>
    </div>
  );
}

