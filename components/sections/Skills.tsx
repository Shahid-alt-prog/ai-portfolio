"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  itsm: "#00F5FF",
  systems: "#7B61FF",
  networking: "#00FFB2",
  virtualization: "#00F5FF",
  microsoft: "#7B61FF",
  database: "#00FFB2",
  remote: "#00F5FF",
  ai: "#7B61FF",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Expertise" title="Technical Skills" subtitle="Enterprise technologies and support tools" />

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="group relative"
            >
              <div
                className="px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white/60 hover:text-white/90 transition-all duration-300 cursor-default"
                style={{ borderColor: `${categoryColors[skill.category] || "#00F5FF"}15` }}
              >
                <span className="relative z-10">{skill.name}</span>
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at center, ${categoryColors[skill.category] || "#00F5FF"}08 0%, transparent 70%)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
