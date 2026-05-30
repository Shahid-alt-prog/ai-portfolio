"use client";

import { motion } from "framer-motion";
import { suggestedPrompts } from "@/lib/data";

interface SuggestedPromptsProps {
  onSelect: (prompt: string) => void;
}

export default function SuggestedPrompts({ onSelect }: SuggestedPromptsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {suggestedPrompts.slice(0, 6).map((prompt, i) => (
        <motion.button
          key={prompt}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.02, backgroundColor: "rgba(0,245,255,0.05)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(prompt)}
          className="text-left px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-white/50 hover:text-white/80 hover:border-[#00F5FF]/20 transition-all duration-200"
        >
          {prompt}
        </motion.button>
      ))}
    </div>
  );
}
