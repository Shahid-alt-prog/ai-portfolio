"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { strengths } from "@/lib/data";

const icons = ["🔧", "🔍", "⚡", "💬", "🎯", "🚀"];

export default function Strengths() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Qualities" title="Core Strengths" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 backdrop-blur-xl"
            >
              <span className="text-2xl mb-3 block">{icons[i] || "✨"}</span>
              <h4 className="text-sm font-semibold text-white/90 mb-2" style={{ fontFamily: "'Space Grotesk'" }}>{s.title}</h4>
              <p className="text-xs text-white/40 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
