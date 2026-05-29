"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface InputBarProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function InputBar({ onSend, disabled }: InputBarProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "0";
      el.style.height = Math.min(el.scrollHeight, 120) + "px";
    }
  }, [input]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
    >
      <div className="relative flex items-end gap-3 bg-jarvis-surface/60 border border-jarvis-border/30 rounded-2xl px-4 py-3 focus-within:border-jarvis-cyan/30 transition-all duration-300 backdrop-blur-xl group">
        {/* Left accent */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-5 bg-jarvis-cyan/0 group-focus-within:bg-jarvis-cyan/50 transition-all duration-300 rounded-full shadow-[0_0_8px_rgba(0,212,255,0.3)]" />

        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Ask J.A.R.V.I.S anything..."
          rows={1}
          className="flex-1 bg-transparent text-sm text-jarvis-cream placeholder:text-jarvis-muted/70 resize-none outline-none leading-relaxed"
          style={{ minHeight: "22px", maxHeight: "120px" }}
        />
        <button
          onClick={handleSend}
          disabled={disabled || !input.trim()}
          className="flex-shrink-0 w-9 h-9 rounded-xl bg-jarvis-cyan flex items-center justify-center transition-all duration-200 hover:bg-jarvis-cyanLight active:scale-95 disabled:opacity-15 disabled:hover:bg-jarvis-cyan shadow-[0_0_15px_rgba(0,212,255,0.25)] hover:shadow-[0_0_25px_rgba(0,212,255,0.4)]"
        >
          <ArrowUp className="w-4 h-4 text-jarvis-bg" />
        </button>
      </div>
      <p className="text-center text-[10px] text-jarvis-muted/50 mt-2.5 font-mono tracking-wider">
        J.A.R.V.I.S MAY PRODUCE INACCURATE INFORMATION
      </p>
    </motion.div>
  );
}
