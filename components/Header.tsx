"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-6 py-3 border-b border-white/[0.04] bg-[#0a0f1a]/60 backdrop-blur-xl sticky top-0 z-50"
    >
      <div className="flex items-center gap-3">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-jarvis-cyan/15 to-jarvis-teal/10 border border-white/[0.08]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-jarvis-cyan font-display font-bold text-xs">S</span>
          </div>
        </div>
        <div>
          <h1 className="text-sm font-semibold text-white/80 tracking-wide">Shahid</h1>
          <p className="text-[10px] text-white/25 font-mono">AI Portfolio Assistant</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-white/30 font-mono">Online</span>
        </div>
      </div>
    </motion.header>
  );
}
