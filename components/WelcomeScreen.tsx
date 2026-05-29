"use client";

import { motion } from "framer-motion";
import { Briefcase, Shield, GraduationCap, Sparkles, Mail, Star } from "lucide-react";

interface WelcomeScreenProps {
  onSuggestion: (text: string) => void;
}

const suggestions = [
  { icon: Briefcase, text: "Work experience" },
  { icon: Shield, text: "Technical skills" },
  { icon: GraduationCap, text: "Education" },
  { icon: Sparkles, text: "Resolution highlights" },
  { icon: Mail, text: "Contact info" },
  { icon: Star, text: "Core strengths" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease: "easeOut" } },
};

export default function WelcomeScreen({ onSuggestion }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 pb-8 relative overflow-hidden">
      {/* Background HUD elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner brackets */}
        <svg className="absolute top-8 left-8 w-16 h-16 text-jarvis-cyan/10" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0 20V0h20M44 0h20v20M64 44v20H44M20 64H0V44" />
        </svg>
        <svg className="absolute top-8 right-8 w-16 h-16 text-jarvis-cyan/10" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0 20V0h20M44 0h20v20M64 44v20H44M20 64H0V44" />
        </svg>
        <svg className="absolute bottom-24 left-8 w-16 h-16 text-jarvis-cyan/10" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0 20V0h20M44 0h20v20M64 44v20H44M20 64H0V44" />
        </svg>
        <svg className="absolute bottom-24 right-8 w-16 h-16 text-jarvis-cyan/10" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0 20V0h20M44 0h20v20M64 44v20H44M20 64H0V44" />
        </svg>

        {/* Horizontal scan lines */}
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-jarvis-cyan/[0.07] to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-jarvis-cyan/[0.07] to-transparent" />

        {/* Vertical accent */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-jarvis-cyan/[0.04] to-transparent" />
      </div>

      {/* Arc reactor - dramatic */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-10"
      >
        <div className="w-40 h-40 relative">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-jarvis-cyan/[0.03] blur-2xl" />

          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-jarvis-cyan/20 animate-spin-slow" />

          {/* Tick marks */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-jarvis-cyan/30"
              style={{ transform: `rotate(${i * 30}deg)`, transformOrigin: "50% 80px" }}
            />
          ))}

          {/* Second ring */}
          <div className="absolute inset-3 rounded-full border border-jarvis-cyan/15 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "10s" }} />

          {/* Third ring - dashed */}
          <div className="absolute inset-6 rounded-full border border-dashed border-jarvis-cyan/10 animate-spin-slow" style={{ animationDuration: "20s" }} />

          {/* Inner ring */}
          <div className="absolute inset-8 rounded-full border border-jarvis-cyan/20" />

          {/* Core */}
          <div className="absolute inset-10 rounded-full bg-gradient-to-br from-jarvis-cyan/20 to-jarvis-teal/10 animate-arc-pulse flex items-center justify-center shadow-[0_0_40px_rgba(0,212,255,0.15),inset_0_0_20px_rgba(0,212,255,0.1)]">
            <span className="text-4xl drop-shadow-[0_0_10px_rgba(0,212,255,0.3)]">👋</span>
          </div>

          {/* Cardinal markers */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-6 h-[2px] bg-jarvis-cyan/50 rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-6 h-[2px] bg-jarvis-cyan/50 rounded-full" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 h-6 w-[2px] bg-jarvis-cyan/50 rounded-full" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 h-6 w-[2px] bg-jarvis-cyan/50 rounded-full" />
        </div>
      </motion.div>

      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mb-4 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold text-jarvis-cream tracking-[0.2em] mb-3">
          J.A.R.V.I.S
        </h1>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-jarvis-cyan/40" />
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-jarvis-cyan/60" />
            <span className="text-[10px] font-mono text-jarvis-cyan tracking-[0.4em]">SHAHID</span>
            <div className="w-1 h-1 rounded-full bg-jarvis-cyan/60" />
          </div>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-jarvis-cyan/40" />
        </div>
        <p className="text-jarvis-dim text-base max-w-md mx-auto leading-relaxed">
          Good evening. I&apos;m Shahid&apos;s personal AI assistant.<br />
          <span className="text-jarvis-muted text-sm">How may I be of service?</span>
        </p>
      </motion.div>

      {/* Suggestion cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-xl w-full mt-6 relative z-10"
      >
        {suggestions.map(({ icon: Icon, text }, i) => (
          <motion.button
            key={text}
            variants={item}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSuggestion(`Tell me about your ${text.toLowerCase()}`)}
            className="group relative flex flex-col items-center gap-2.5 px-4 py-4 rounded-xl bg-jarvis-surface/40 border border-jarvis-border/30 hover:border-jarvis-cyan/30 hover:bg-jarvis-cyan/[0.04] transition-all duration-300 text-center overflow-hidden"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-jarvis-cyan/0 group-hover:bg-jarvis-cyan/50 transition-all duration-300" />

            <div className="w-9 h-9 rounded-lg bg-jarvis-cyan/[0.06] border border-jarvis-cyan/10 group-hover:border-jarvis-cyan/25 flex items-center justify-center transition-all duration-200">
              <Icon className="w-4 h-4 text-jarvis-muted group-hover:text-jarvis-cyan transition-colors duration-200" />
            </div>
            <span className="text-[12px] font-medium text-jarvis-dim group-hover:text-jarvis-cream transition-colors duration-200">
              {text}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Bottom status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-10 flex items-center gap-4 text-[9px] text-jarvis-muted/60 font-mono tracking-[0.2em] relative z-10"
      >
        <span>SYS READY</span>
        <span className="w-1 h-1 rounded-full bg-jarvis-cyan/20" />
        <span>ALL SYSTEMS NOMINAL</span>
        <span className="w-1 h-1 rounded-full bg-jarvis-cyan/20" />
        <span>AWAITING INPUT</span>
      </motion.div>
    </div>
  );
}
