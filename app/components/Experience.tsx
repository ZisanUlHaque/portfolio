"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked recently."
          subtitle="Hands-on engineering roles that shaped how I build today."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {profile.experience.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-50">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-brand-300">{job.company}</p>
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-ink-200">
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-ink-200/85">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <Briefcase size={14} className="mt-1 shrink-0 text-brand-300" />
                    <span>{b}</span>
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