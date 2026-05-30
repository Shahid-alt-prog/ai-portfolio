"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
    <div className="relative flex items-end gap-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl px-4 py-3 focus-within:border-[#00F5FF]/20 transition-all duration-300 backdrop-blur-xl group">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-5 bg-[#00F5FF]/0 group-focus-within:bg-[#00F5FF]/40 transition-all duration-300 rounded-full" />

      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask about Shahid's experience..."
        rows={1}
        className="flex-1 bg-transparent text-sm text-white/90 placeholder:text-white/25 resize-none outline-none leading-relaxed"
        style={{ minHeight: "22px", maxHeight: "120px" }}
      />

      <button
        onClick={handleSend}
        disabled={disabled || !input.trim()}
        className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#00F5FF] flex items-center justify-center transition-all duration-200 hover:brightness-110 active:scale-95 disabled:opacity-20 shadow-[0_0_12px_rgba(0,245,255,0.2)]"
      >
        <ArrowUp className="w-4 h-4 text-[#050816]" />
      </button>
    </div>
  );
}
