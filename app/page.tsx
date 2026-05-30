import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/Footer";

const ChatBot = dynamic(() => import("@/components/chat/ChatBot"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ChatBot />
      <Footer />
    </main>
  );
}
