"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Connect"
          title="Let's Build Intelligent Systems Together"
          subtitle="Open to opportunities in technical support, ITSM, and AI automation"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
            { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
            { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 backdrop-blur-xl text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00F5FF]/[0.06] border border-[#00F5FF]/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-[#00F5FF]/60" />
              </div>
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider mb-1">{label}</p>
              {href ? (
                <a href={href} className="text-sm text-white/70 hover:text-[#00F5FF] transition-colors">{value}</a>
              ) : (
                <p className="text-sm text-white/70">{value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
