"use client";

import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#00F5FF]/20 to-[#7B61FF]/20 border border-white/[0.06] flex items-center justify-center">
            <span className="text-[#00F5FF] font-bold text-[8px]" style={{ fontFamily: "'Space Grotesk'" }}>S</span>
          </div>
          <span className="text-xs text-white/30 font-mono">{personalInfo.name}</span>
        </div>
        <p className="text-[10px] text-white/15 font-mono">
          Powered by Groq &middot; Llama 3.3 70B &middot; Built with Next.js
        </p>
      </div>
    </footer>
  );
}
