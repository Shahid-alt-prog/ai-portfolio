"use client";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-3 border-b border-jarvis-border/30 bg-jarvis-bg/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center gap-3">
        {/* Arc reactor */}
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border border-jarvis-cyan/30 animate-spin-slow" />
          <div className="absolute inset-[3px] rounded-full border border-jarvis-cyan/15 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "8s" }} />
          <div className="absolute inset-[7px] rounded-full bg-jarvis-cyan/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.15)]">
            <span className="text-jarvis-cyan font-display font-bold text-[10px]">S</span>
          </div>
        </div>
        <div>
          <h1 className="text-sm font-display font-semibold text-jarvis-cream tracking-[0.15em] uppercase">
            J.A.R.V.I.S
          </h1>
          <p className="text-[9px] text-jarvis-muted font-mono tracking-wider">SHAHID &middot; TECHNICAL SUPPORT ENGINEER</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full border border-jarvis-cyan/15 bg-jarvis-cyan/[0.03]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
          <span className="text-[9px] text-emerald-400 font-mono font-medium tracking-widest">ONLINE</span>
        </div>
      </div>
    </header>
  );
}
