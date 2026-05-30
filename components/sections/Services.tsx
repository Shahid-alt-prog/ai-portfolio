"use client";

import { motion } from "framer-motion";
import { Monitor, AlertTriangle, Cpu, Search, Wifi, Mail, Settings, Globe } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/data";

const iconMap: Record<string, typeof Monitor> = {
  monitor: Monitor, alert: AlertTriangle, cpu: Cpu, search: Search,
  wifi: Wifi, mail: Mail, settings: Settings, remote: Globe,
};

export default function Services() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Capabilities" title="Services" subtitle="Enterprise IT support and automation" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Monitor;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 backdrop-blur-xl ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="w-9 h-9 rounded-lg bg-[#00F5FF]/[0.06] border border-[#00F5FF]/10 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-[#00F5FF]/60" />
                </div>
                <h4 className="text-sm font-semibold text-white/90 mb-1" style={{ fontFamily: "'Space Grotesk'" }}>{s.title}</h4>
                <p className="text-xs text-white/35 leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
