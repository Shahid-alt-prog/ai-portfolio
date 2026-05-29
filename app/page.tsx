"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import ChatWindow from "@/components/ChatWindow";
import InputBar from "@/components/InputBar";
import WelcomeScreen from "@/components/WelcomeScreen";
import { streamChat } from "@/lib/gemini";
import { SYSTEM_PROMPT } from "@/lib/system-prompt";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);

  const sendMessage = useCallback(
    async (content: string) => {
      if (showWelcome) setShowWelcome(false);

      const userMsg: Message = { id: crypto.randomUUID(), role: "user", content };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);
      setStreamingContent("");

      try {
        const recentMessages = messages.slice(-20);
        const allMessages = [
          { role: "system" as const, content: SYSTEM_PROMPT },
          ...recentMessages.map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
          { role: "user" as const, content },
        ];

        const stream = await streamChat(allMessages);
        let fullContent = "";
        setIsTyping(false);

        for await (const chunk of stream) {
          const text = chunk.text();
          if (text) {
            fullContent += text;
            setStreamingContent(fullContent);
          }
        }

        setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: fullContent }]);
        setStreamingContent("");
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), role: "assistant", content: msg, isError: true },
        ]);
        setStreamingContent("");
      } finally {
        setIsTyping(false);
      }
    },
    [messages, showWelcome]
  );

  return (
    <div className="flex flex-col h-dvh">
      <Header />

      <div className="flex-1 flex flex-col min-h-0">
        <AnimatePresence mode="wait">
          {showWelcome ? (
            <motion.div key="welcome" exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }} className="flex-1">
              <WelcomeScreen onSuggestion={sendMessage} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex flex-col min-h-0">
              <ChatWindow messages={messages} isTyping={isTyping} streamingContent={streamingContent} />
              <div className="px-4 md:px-0 pb-4 pt-1 max-w-3xl mx-auto w-full">
                <InputBar onSend={sendMessage} disabled={isTyping} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
