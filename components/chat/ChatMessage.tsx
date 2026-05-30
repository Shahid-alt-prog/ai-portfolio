"use client";

import { motion } from "framer-motion";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
  isError?: boolean;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
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
        <ul key={key++} className="my-2 space-y-1">
          {listItems.map((item, i) => (
            <li key={i} className="text-[14px] leading-[1.7] flex gap-2">
              <span className="text-[#00F5FF]/40 flex-shrink-0 mt-[8px]">
                <svg width="4" height="4" viewBox="0 0 4 4" fill="currentColor"><circle cx="2" cy="2" r="2" /></svg>
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
        <pre key={key++} className="my-3 rounded-lg bg-black/30 border border-white/[0.05] p-4 overflow-x-auto">
          <code className="text-[13px] font-mono text-[#00F5FF]/70">{codeLines.join("\n")}</code>
        </pre>
      );
      codeLines = [];
      inCodeBlock = false;
    }
  };

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) flushCode();
      else { flushList(); inCodeBlock = true; }
      continue;
    }
    if (inCodeBlock) { codeLines.push(line); continue; }
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      flushList(); inList = true; listItems.push(line.trim().slice(2)); continue;
    }
    if (inList && line.trim() === "") { flushList(); continue; }
    if (inList) { listItems.push(line.trim()); continue; }
    flushList();
    if (line.trim() === "") { elements.push(<div key={key++} className="h-2" />); continue; }
    if (line.trim().startsWith("### ")) { elements.push(<h3 key={key++} className="text-[15px] font-semibold text-white/90 mt-3 mb-1">{line.trim().slice(4)}</h3>); continue; }
    if (line.trim().startsWith("## ")) { elements.push(<h2 key={key++} className="text-[16px] font-semibold text-white/90 mt-3 mb-1">{line.trim().slice(3)}</h2>); continue; }
    if (line.trim().startsWith("# ")) { elements.push(<h1 key={key++} className="text-[17px] font-semibold text-white/90 mt-3 mb-1">{line.trim().slice(2)}</h1>); continue; }
    const numbered = line.trim().match(/^(\d+)\.\s+(.+)/);
    if (numbered) {
      elements.push(<p key={key++} className="text-[14px] leading-[1.7] flex gap-2"><span className="text-[#00F5FF]/40 font-mono text-[12px] mt-[2px]">{numbered[1]}.</span><span dangerouslySetInnerHTML={{ __html: formatInline(numbered[2]) }} /></p>);
      continue;
    }
    elements.push(<p key={key++} className="text-[14px] leading-[1.7]" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />);
  }

  flushList();
  flushCode();
  return elements;
}

export default function ChatMessage({ role, content, isStreaming, isError }: ChatMessageProps) {
  const isUser = role === "user";

  if (isUser) {
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="flex justify-end px-4 md:px-0">
        <div className="max-w-[75%] md:max-w-[65%]">
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl rounded-br-md px-4 py-3">
            <p className="text-[14px] leading-relaxed text-white/80">{content}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="flex gap-3 px-4 md:px-0">
      <div className="flex-shrink-0 mt-1">
        <div className="w-7 h-7 rounded-lg bg-[#00F5FF]/[0.08] border border-white/[0.06] flex items-center justify-center">
          <span className="text-[#00F5FF]/60 font-bold text-[9px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>S</span>
        </div>
      </div>
      <div className="flex-1 min-w-0 max-w-[85%]">
        <p className="text-[10px] font-mono text-white/15 mb-1.5 tracking-wider">SHAHID AI</p>
        <div className={`relative rounded-2xl rounded-bl-md px-5 py-4 bg-white/[0.02] border ${isError ? "border-red-500/20" : "border-white/[0.04]"} backdrop-blur-xl`}>
          <div className="chat-content">
            {renderContent(content)}
            {isStreaming && (
              <span className="inline-block w-[2px] h-[14px] ml-1 bg-[#00F5FF]/60 rounded-full animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
