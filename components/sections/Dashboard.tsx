"use client";

import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { dashboardScenarios } from "@/lib/data";

const severityColors = {
  low: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  medium: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
  high: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/20" },
};

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader eyebrow="Operations" title="Incident Resolution Center" subtitle="Real troubleshooting scenarios from enterprise support" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dashboardScenarios.map((scenario, i) => {
            const colors = severityColors[scenario.severity as keyof typeof severityColors] || severityColors.medium;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-xl bg-white/[0.02] border ${colors.border} p-5 backdrop-blur-xl overflow-hidden`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} uppercase`}>
                    {scenario.severity}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[10px] font-mono text-emerald-400/80 uppercase">{scenario.status}</span>
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-white/90 mb-2" style={{ fontFamily: "'Space Grotesk'" }}>{scenario.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{scenario.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F5FF]/10 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
