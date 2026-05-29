"use client";

import { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
}

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
  streamingContent: string;
}

export default function ChatWindow({ messages, isTyping, streamingContent }: ChatWindowProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingContent, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto relative">
      {/* Subtle side accents */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-jarvis-cyan/[0.06] via-transparent to-jarvis-cyan/[0.06] hidden md:block" />
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-jarvis-cyan/[0.06] via-transparent to-jarvis-cyan/[0.06] hidden md:block" />

      <div className="max-w-3xl mx-auto py-6 space-y-6">
        {/* Session header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 px-4 md:px-0 pb-4"
        >
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-jarvis-border/30 to-transparent" />
          <div className="flex items-center gap-2 px-3">
            <span className="w-1.5 h-1.5 rounded-full bg-jarvis-cyan animate-pulse shadow-[0_0_4px_rgba(0,212,255,0.4)]" />
            <span className="text-[9px] font-mono text-jarvis-muted tracking-[0.2em]">
              SESSION {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase()}
            </span>
            <span className="text-jarvis-border/30">|</span>
            <span className="text-[9px] font-mono text-jarvis-muted/50 tracking-wider">{messages.length} msgs</span>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-jarvis-border/30 to-transparent" />
        </motion.div>

        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} role={msg.role} content={msg.content} isError={msg.isError} />
          ))}
          {streamingContent && !isTyping && (
            <MessageBubble key="streaming" role="assistant" content={streamingContent} isStreaming />
          )}
          {isTyping && <TypingIndicator key="typing" />}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
