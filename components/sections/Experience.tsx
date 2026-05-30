"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Career" title="Professional Experience" subtitle="Enterprise IT support at global scale" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00F5FF]/20 via-[#00F5FF]/10 to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-12"
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00F5FF] shadow-[0_0_12px_rgba(0,245,255,0.4)] z-10" />

              <div className={`ml-12 md:ml-0 ${i % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"}`}>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-[#00F5FF]" />
                    <span className="text-xs font-mono text-[#00F5FF]/60">{exp.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "'Space Grotesk'" }}>{exp.role}</h3>
                  <p className="text-sm text-white/40 mb-3">{exp.company} — {exp.client}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.slice(0, 6).map((r, j) => (
                      <li key={j} className="flex gap-2 text-sm text-white/50">
                        <span className="text-[#00F5FF]/30 mt-1.5 flex-shrink-0">
                          <svg width="4" height="4" viewBox="0 0 4 4" fill="currentColor"><circle cx="2" cy="2" r="2" /></svg>
                        </span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
