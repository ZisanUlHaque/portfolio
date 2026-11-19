"use client";

import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative border-b border-zinc-200/80 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Arsenal"
          title="Tools &amp; Frameworks Mastered"
          subtitle="Specialized in full-stack TypeScript, high-performance web frameworks, relational databases, and modern cloud deployment."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-8"
            >
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <h3 className="font-display text-xl font-bold text-[#09090b]">
                  {group.category}
                </h3>
                <span className="h-2 w-8 rounded-full bg-blue-600" />
              </div>

              <ul className="mt-6 space-y-5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-semibold text-[#09090b]">{item.name}</span>
                      <span className="font-mono text-xs font-bold text-zinc-500">{item.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-blue-600"
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
