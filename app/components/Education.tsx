"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Education"
          title="My academic journey."
          subtitle="A short timeline of my studies and what I focused on."
        />

        <ol className="relative mt-12 border-l border-white/10 pl-6">
          {profile.education.map((ed, i) => (
            <motion.li
              key={ed.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="mb-8 last:mb-0"
            >
              <span className="absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-accent-500 shadow-glow" />
              <div className="glass rounded-2xl p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink-50">
                    {ed.degree}
                  </h3>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-ink-200">
                    {ed.period}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-brand-300">
                  <GraduationCap size={14} /> {ed.school}
                </div>
                <p className="mt-3 text-sm text-ink-200/85">{ed.details}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}