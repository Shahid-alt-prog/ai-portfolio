"use client";

import { motion } from "framer-motion";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
  isError?: boolean;
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="my-2 space-y-1.5">
          {listItems.map((item, i) => (
            <li key={i} className="text-[14px] leading-[1.75] flex gap-2.5">
              <span className="text-jarvis-cyan/50 flex-shrink-0 mt-[9px]">
                <svg width="5" height="5" viewBox="0 0 5 5" fill="currentColor"><circle cx="2.5" cy="2.5" r="2.5" /></svg>
              </span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushCode = () => {
    if (codeLines.length > 0) {
      elements.push(
        <div key={key++} className="my-3 rounded-xl overflow-hidden border border-jarvis-border/30">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#0d1117] border-b border-jarvis-border/20">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
            <span className="text-[10px] text-jarvis-muted font-mono ml-2">code</span>
          </div>
          <pre className="bg-[#0d1117] p-4 overflow-x-auto">
            <code className="text-[13px] font-mono text-jarvis-cyanLight/80 leading-relaxed">{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      codeLines = [];
      inCodeBlock = false;
    }
  };

  const escapeHtml = (text: string) =>
    text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const formatInline = (text: string) => {
    const escaped = escapeHtml(text);
    return escaped
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/(\d+)\./g, '<span class="text-jarvis-cyan font-mono text-[13px]">$1.</span>');
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) { flushCode(); } else { flushList(); inCodeBlock = true; }
      continue;
    }
    if (inCodeBlock) { codeLines.push(line); continue; }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      inList = true;
      listItems.push(line.slice(2));
      continue;
    }

    flushList();

    if (line.trim() === "") {
      elements.push(<div key={key++} className="h-2" />);
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-[15px] font-semibold text-jarvis-cream mt-3 mb-1.5">{line.slice(4)}</h3>);
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-base font-semibold text-jarvis-cream mt-3 mb-1.5">{line.slice(3)}</h2>);
      continue;
    }
    if (line.startsWith("# ")) {
      elements.push(<h1 key={key++} className="text-lg font-bold text-jarvis-cream mt-3 mb-1.5">{line.slice(2)}</h1>);
      continue;
    }

    elements.push(
      <p key={key++} className="text-[14px] leading-[1.75] text-jarvis-text" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
    );
  }

  flushList();
  flushCode();

  return elements;
}

export default function MessageBubble({ role, content, isStreaming, isError }: MessageBubbleProps) {
  const isUser = role === "user";

  if (isUser) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="flex justify-end px-4 md:px-0"
      >
        <div className="max-w-[75%] md:max-w-[65%]">
          <div className="relative bg-jarvis-card/80 border border-jarvis-border/30 rounded-2xl rounded-br-md px-4 py-3 overflow-hidden">
            {/* Subtle top accent */}
            <div className="absolute top-0 right-0 w-12 h-[1px] bg-gradient-to-l from-jarvis-cyan/30 to-transparent" />
            <p className="text-[14px] leading-relaxed text-jarvis-cream">{content}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex gap-3 px-4 md:px-0"
    >
      {/* Arc reactor mini */}
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 rounded-full border border-jarvis-cyan/25 animate-spin-slow" />
          <div className="absolute inset-[2px] rounded-full border border-jarvis-cyan/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="absolute inset-[5px] rounded-full bg-jarvis-cyan/10 flex items-center justify-center shadow-[0_0_8px_rgba(0,212,255,0.15)]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-jarvis-cyan">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-0 max-w-[85%]">
        <p className="text-[10px] font-mono text-jarvis-cyan mb-1.5 tracking-[0.2em]">JARVIS</p>
        <div className={`relative glass-card rounded-2xl rounded-bl-md px-5 py-4 overflow-hidden ${isError ? 'border-red-500/40' : ''}`}>
          {/* Top edge glow */}
          <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${isError ? 'via-red-500/30' : 'via-jarvis-cyan/20'} to-transparent`} />
          <div className="chat-content">
            {renderContent(content)}
            {isStreaming && (
              <span className="inline-block w-[3px] h-[16px] ml-1 bg-jarvis-cyan rounded-full animate-pulse shadow-[0_0_6px_rgba(0,212,255,0.4)]" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
