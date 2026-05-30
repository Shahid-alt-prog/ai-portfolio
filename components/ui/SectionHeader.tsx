"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center mb-16"
    >
      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono tracking-[0.2em] uppercase text-[#00F5FF] border border-[#00F5FF]/20 bg-[#00F5FF]/[0.04] mb-4">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto w-16 h-[1px] bg-gradient-to-r from-transparent via-[#00F5FF]/40 to-transparent" />
    </motion.div>
  );
}
