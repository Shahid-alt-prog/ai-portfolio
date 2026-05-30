"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Briefcase, Shield, GraduationCap, Sparkles, Mail, Star } from "lucide-react";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WelcomeScreen({ onSuggestion }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 pb-8 relative overflow-hidden">
      {/* 3D Scene */}
      <Scene3D />

      {/* Background HUD elements */}
      <div className="absolute inset-0 pointer-events-none">
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

        {/* Scan lines */}
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-jarvis-cyan/[0.07] to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-jarvis-cyan/[0.07] to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-jarvis-cyan/[0.04] to-transparent" />
      </div>

      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-4 relative z-10"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-display font-bold text-jarvis-cream tracking-[0.2em] mb-3"
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          J.A.R.V.I.S
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-jarvis-cyan/40" />
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-jarvis-cyan/60"
            />
            <span className="text-[10px] font-mono text-jarvis-cyan tracking-[0.4em]">SHAHID</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="w-1 h-1 rounded-full bg-jarvis-cyan/60"
            />
          </div>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-jarvis-cyan/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-jarvis-dim text-base max-w-md mx-auto leading-relaxed"
        >
          Good evening. I&apos;m Shahid&apos;s personal AI assistant.<br />
          <span className="text-jarvis-muted text-sm">How may I be of service?</span>
        </motion.p>
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
            whileHover={{ scale: 1.05, y: -4, boxShadow: "0 0 30px rgba(0,212,255,0.15)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSuggestion(`Tell me about your ${text.toLowerCase()}`)}
            className="group relative flex flex-col items-center gap-2.5 px-4 py-4 rounded-xl bg-jarvis-surface/40 border border-jarvis-border/30 hover:border-jarvis-cyan/40 hover:bg-jarvis-cyan/[0.06] transition-all duration-300 text-center overflow-hidden backdrop-blur-sm"
          >
            {/* Animated top accent */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-jarvis-cyan/0 group-hover:bg-jarvis-cyan/60 transition-all duration-500"
              style={{ width: "0%" }}
              whileHover={{ width: "60%" }}
            />

            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-jarvis-cyan/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-9 h-9 rounded-lg bg-jarvis-cyan/[0.06] border border-jarvis-cyan/10 group-hover:border-jarvis-cyan/30 group-hover:bg-jarvis-cyan/[0.1] flex items-center justify-center transition-all duration-300">
              <Icon className="w-4 h-4 text-jarvis-muted group-hover:text-jarvis-cyan transition-colors duration-300" />
            </div>
            <span className="text-[12px] font-medium text-jarvis-dim group-hover:text-jarvis-cream transition-colors duration-300">
              {text}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Bottom status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-10 flex items-center gap-4 text-[9px] text-jarvis-muted/60 font-mono tracking-[0.2em] relative z-10"
      >
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          SYS READY
        </motion.span>
        <span className="w-1 h-1 rounded-full bg-jarvis-cyan/20" />
        <span>ALL SYSTEMS NOMINAL</span>
        <span className="w-1 h-1 rounded-full bg-jarvis-cyan/20" />
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
          AWAITING INPUT
        </motion.span>
      </motion.div>
    </div>
  );
}
