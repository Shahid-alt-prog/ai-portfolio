"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedPrompts from "./SuggestedPrompts";
import SectionHeader from "@/components/ui/SectionHeader";
import { streamChat } from "@/lib/groq";
import { SYSTEM_PROMPT } from "@/lib/system-prompt";
import type { Message } from "@/types";

const STORAGE_KEY = "shahid-ai-chat";

function loadMessages(): Message[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveMessages(messages: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch {}
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(loadMessages());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveMessages(messages);
  }, [messages, hydrated]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingContent, isTyping]);

  const sendMessage = useCallback(
    async (content: string) => {
      const userMsg: Message = { id: crypto.randomUUID(), role: "user", content };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);
      setStreamingContent("");

      try {
        const recent = messages.slice(-20);
        const allMessages = [
          ...recent.map((m) => ({ role: m.role, content: m.content })),
          { role: "user" as const, content },
        ];

        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "system", content: SYSTEM_PROMPT }, ...allMessages],
            temperature: 0.7,
            max_tokens: 1024,
            stream: true,
          }),
        });

        if (!res.ok) {
          const body = await res.json().catch(() => null);
          throw new Error(body?.error?.message || "Failed to get response");
        }

        const reader = res.body?.getReader();
        if (!reader) throw new Error("No reader");

        const decoder = new TextDecoder();
        let fullContent = "";
        setIsTyping(false);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter((l) => l.startsWith("data: "));
          for (const line of lines) {
            const data = line.slice(6);
            if (data === "[DONE]") continue;
            try {
              const parsed = JSON.parse(data);
              const text = parsed.choices?.[0]?.delta?.content || "";
              if (text) { fullContent += text; setStreamingContent(fullContent); }
            } catch {}
          }
        }

        setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: fullContent }]);
        setStreamingContent("");
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Something went wrong.";
        setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: msg, isError: true }]);
        setStreamingContent("");
      } finally {
        setIsTyping(false);
      }
    },
    [messages]
  );

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <section id="chat" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="AI Recruiter Assistant"
          title="Ask About Shahid"
          subtitle="Powered by Groq — Get instant answers about experience, skills, and technical expertise"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.04]">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#00F5FF]/60" />
              <span className="text-xs font-mono text-white/30">SHAHID AI</span>
            </div>
            {messages.length > 0 && (
              <button onClick={clearChat} className="text-[10px] font-mono text-white/20 hover:text-white/40 transition-colors">
                CLEAR
              </button>
            )}
          </div>

          {/* Messages */}
          <div className="h-[400px] md:h-[500px] overflow-y-auto py-4 space-y-4">
            {!hydrated ? (
              <div className="flex items-center justify-center h-full text-white/20 text-sm">Loading...</div>
            ) : messages.length === 0 ? (
              <div className="px-4 py-8">
                <SuggestedPrompts onSelect={sendMessage} />
              </div>
            ) : (
              <AnimatePresence>
                {messages.map((msg) => (
                  <ChatMessage key={msg.id} role={msg.role} content={msg.content} isError={msg.isError} />
                ))}
                {streamingContent && !isTyping && (
                  <ChatMessage key="streaming" role="assistant" content={streamingContent} isStreaming />
                )}
                {isTyping && (
                  <motion.div key="typing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex gap-3 px-4 md:px-0">
                    <div className="w-7 h-7 rounded-lg bg-[#00F5FF]/[0.08] border border-white/[0.06] flex items-center justify-center">
                      <span className="text-[#00F5FF]/60 font-bold text-[9px]" style={{ fontFamily: "'Space Grotesk'" }}>S</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-white/20 text-[11px] font-mono">thinking</span>
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.span
                            key={i}
                            className="w-1 h-1 rounded-full bg-[#00F5FF]/60"
                            animate={{ opacity: [0.15, 1, 0.15], scale: [0.7, 1, 0.7] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-4 pb-4 pt-2 border-t border-white/[0.04]">
            <ChatInput onSend={sendMessage} disabled={isTyping} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
