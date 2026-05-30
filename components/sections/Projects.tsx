"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Innovation" title="AI Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 backdrop-blur-xl"
            >
              <h4 className="text-base font-semibold text-white/90 mb-2" style={{ fontFamily: "'Space Grotesk'" }}>{p.title}</h4>
              <p className="text-xs text-white/40 mb-3 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#00F5FF]/[0.06] text-[#00F5FF]/60 border border-[#00F5FF]/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
