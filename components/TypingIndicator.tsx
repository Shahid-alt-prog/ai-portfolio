"use client";

import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex gap-3 px-4 md:px-0"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 rounded-full border border-jarvis-cyan/25 animate-spin-slow" />
          <div className="absolute inset-[5px] rounded-full bg-jarvis-cyan/10 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-jarvis-cyan">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[10px] font-mono text-jarvis-cyan mb-1.5 tracking-[0.2em]">JARVIS</p>
        <div className="glass-card rounded-2xl rounded-bl-md px-5 py-4 flex items-center gap-2.5">
          <span className="text-jarvis-cyan/40 text-[11px] font-mono tracking-wider">processing</span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-jarvis-cyan"
                animate={{ opacity: [0.15, 1, 0.15], scale: [0.7, 1, 0.7] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
