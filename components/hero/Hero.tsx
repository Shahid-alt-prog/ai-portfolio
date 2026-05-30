"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MessageSquare, ChevronDown } from "lucide-react";
import TypeWriter from "./TypeWriter";
import GlowButton from "@/components/ui/GlowButton";
import { rotatingRoles } from "@/lib/data";

const NeuralNetwork = dynamic(() => import("./NeuralNetwork"), { ssr: false });

export default function Hero() {
  const scrollToChat = () => {
    document.getElementById("chat")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralNetwork />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00F5FF]/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[#7B61FF]/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-[11px] font-mono tracking-[0.2em] uppercase text-white/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB2] animate-pulse" />
            AI-POWERED PORTFOLIO
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent">
            SHAHID
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-[#00F5FF] mb-4 h-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <TypeWriter strings={rotatingRoles} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#94A3B8] text-base md:text-lg max-w-xl mx-auto mb-10"
        >
          Engineering Intelligent IT & AI Systems — Enterprise support, ServiceNow, and AI automation.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <GlowButton onClick={scrollToChat}>
            <span className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Start AI Chat
            </span>
          </GlowButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
