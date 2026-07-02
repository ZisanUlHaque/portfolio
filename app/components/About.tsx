"use client";

import { motion } from "framer-motion";
import { Camera, Code2, Dumbbell, BookOpen } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const interests = [
  { Icon: Code2, label: "Open-source" },
  { Icon: Dumbbell, label: "Badminton" },
  { Icon: Camera, label: "Street photography" },
  { Icon: BookOpen, label: "Sci-fi novels" },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="About Me"
          title="Building modern web experiences with purpose."
          subtitle="I create fast, scalable, and user-focused applications by combining thoughtful design with clean, maintainable code."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-7 lg:col-span-2"
          >
            <div className="space-y-4 text-base leading-relaxed text-ink-200/90">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center"
                >
                  <div className="font-display text-2xl font-semibold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-ink-300">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="glass rounded-3xl p-7"
          >
            <h3 className="font-display text-lg font-semibold text-ink-50">
              Outside of code
            </h3>
            <p className="mt-2 text-sm text-ink-300">
              The things that keep me curious and creative.
            </p>
            <ul className="mt-5 space-y-3">
              {interests.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400/30 to-accent-500/30 text-brand-200">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm text-ink-100">{label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
