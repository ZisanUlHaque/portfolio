"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Trophy } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

const engineeringHighlights = [
  { Icon: Code2, title: "Clean Code & Types", desc: "Strict TypeScript, modular components, and maintainable schemas." },
  { Icon: Cpu, title: "Scalable Backends", desc: "PostgreSQL, Prisma ORM, REST microservices, and indexing." },
  { Icon: Terminal, title: "Linux & Docker", desc: "DevOps workflows, containerization, and modern CI/CD deployment." },
  { Icon: Trophy, title: "Hackathon Competitor", desc: "Runner-up awards in high-intensity software development hackathons." },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative border-b border-zinc-200/80 bg-[#faf9f6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Engineering Philosophy"
          title="Bridging thoughtful architecture with production execution."
          subtitle="I focus on writing clean, self-documenting code and designing systems that remain performant and dependable as user loads grow."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main bio card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-9 lg:col-span-2"
          >
            <div className="space-y-4 text-base leading-relaxed text-zinc-600">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-zinc-100 pt-8 sm:grid-cols-4">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-zinc-200/80 bg-zinc-50 p-4 text-center transition-colors hover:border-zinc-300"
                >
                  <div className="font-display text-2xl font-black text-[#09090b]">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Strengths card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-9"
          >
            <div>
              <h3 className="font-display text-lg font-bold text-[#09090b]">
                Core Competencies
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                Key principles I apply in every software project.
              </p>
              <ul className="mt-6 space-y-3.5">
                {engineeringHighlights.map(({ Icon, title, desc }) => (
                  <li
                    key={title}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-100 bg-[#faf9f6] p-3.5 transition-colors hover:border-zinc-300"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-xs">
                      <Icon size={16} />
                    </span>
                    <div>
                      <span className="block text-xs font-bold text-[#09090b]">{title}</span>
                      <span className="text-[11px] text-zinc-500 leading-snug">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-800">
                Availability
              </span>
              <p className="mt-1 text-xs font-semibold text-emerald-950">
                Available for internships, full-time engineering roles, &amp; production contracts.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
