import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/Footer";

const ChatBot = dynamic(() => import("@/components/chat/ChatBot"), { ssr: false });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: false });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: false });
const Dashboard = dynamic(() => import("@/components/sections/Dashboard"), { ssr: false });
const Education = dynamic(() => import("@/components/sections/Education"), { ssr: false });
const Strengths = dynamic(() => import("@/components/sections/Strengths"), { ssr: false });
const Achievements = dynamic(() => import("@/components/sections/Achievements"), { ssr: false });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: false });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ChatBot />
      <Experience />
      <Skills />
      <Dashboard />
      <Education />
      <Strengths />
      <Achievements />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
