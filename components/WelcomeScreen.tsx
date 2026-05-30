"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Briefcase, Code, GraduationCap, Wrench, Mail, Award } from "lucide-react";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

interface WelcomeScreenProps {
  onSuggestion: (text: string) => void;
}

const suggestions = [
  { icon: Briefcase, text: "Work Experience", query: "Tell me about your work experience" },
  { icon: Code, text: "Technical Skills", query: "What are your technical skills?" },
  { icon: GraduationCap, text: "Education", query: "Tell me about your education" },
  { icon: Wrench, text: "Tools & Platforms", query: "What tools and platforms do you use?" },
  { icon: Mail, text: "Contact", query: "How can I contact you?" },
  { icon: Award, text: "Certifications", query: "What certifications do you have?" },
];

export default function WelcomeScreen({ onSuggestion }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 relative overflow-hidden">
      <Scene3D />

      {/* Radial glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-jarvis-cyan/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full">

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
            <span className="text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">Online — Ready to assist</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight">
            <span className="bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent">
              SHAHID
            </span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-jarvis-cyan/30" />
          <span className="text-jarvis-cyan/70 font-mono text-xs tracking-[0.25em]">TECHNICAL SUPPORT ENGINEER</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-jarvis-cyan/30" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/40 text-center text-base leading-relaxed mb-12 max-w-md"
        >
          Ask me anything about Shahid&apos;s experience, skills, or career.
        </motion.p>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-2.5 w-full"
        >
          {suggestions.map(({ icon: Icon, text, query }, i) => (
            <motion.button
              key={text}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.06 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(0,212,255,0.06)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSuggestion(query)}
              className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/[0.06] hover:border-jarvis-cyan/20 transition-all duration-300 text-left backdrop-blur-sm bg-white/[0.01]"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-jarvis-cyan/20 flex items-center justify-center transition-all duration-300 flex-shrink-0">
                <Icon className="w-3.5 h-3.5 text-white/30 group-hover:text-jarvis-cyan/70 transition-colors" />
              </div>
              <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors">
                {text}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex items-center gap-2"
        >
          <span className="text-[10px] text-white/15 font-mono tracking-wider">Powered by Groq</span>
          <span className="w-0.5 h-0.5 rounded-full bg-white/10" />
          <span className="text-[10px] text-white/15 font-mono tracking-wider">Llama 3.3 70B</span>
        </motion.div>
      </div>
    </div>
  );
}
