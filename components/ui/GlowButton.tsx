"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function GlowButton({ children, onClick, variant = "primary", className = "" }: GlowButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
        isPrimary
          ? "bg-[#00F5FF] text-[#050816] shadow-[0_0_20px_rgba(0,245,255,0.25)] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]"
          : "bg-white/[0.04] text-white/80 border border-white/[0.08] hover:border-[#00F5FF]/30 hover:bg-[#00F5FF]/[0.05]"
      } ${className}`}
    >
      {children}
    </motion.button>
  );
}
