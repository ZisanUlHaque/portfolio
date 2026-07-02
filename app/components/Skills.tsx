"use client";

import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-72 bg-gradient-to-r from-accent-500/10 via-brand-400/10 to-transparent blur-3xl" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title="A toolbox sharpened over 2+ years."
          subtitle="Categorized into frontend, backend, and the tools I rely on daily."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-ink-50">
                  {group.category}
                </h3>
                <span
                  className={`h-2 w-12 rounded-full bg-gradient-to-r ${group.accent}`}
                />
              </div>
              <ul className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-ink-100">{item.name}</span>
                      <span className="text-xs text-ink-300">{item.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}