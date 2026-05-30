"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="Academic" title="Education" />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#7B61FF]/10 border border-[#7B61FF]/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#7B61FF]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white/90 mb-1" style={{ fontFamily: "'Space Grotesk'" }}>{edu.degree}</h3>
                  <p className="text-sm text-white/40 mb-1">{edu.institution}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#00F5FF]/60">{edu.duration}</span>
                    <span className="text-xs font-mono text-[#00FFB2]/60">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
