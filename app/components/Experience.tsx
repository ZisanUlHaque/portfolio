"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative border-b border-zinc-200/80 bg-[#faf9f6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Work History"
          title="Industry Experience &amp; Impact"
          subtitle="Real-world engineering roles delivering production software, collaborating in agile teams, and shipping client deliverables."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {profile.experience.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-zinc-100 pb-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#09090b]">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-semibold text-blue-600">{job.company}</p>
                </div>
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1 font-mono text-xs font-semibold text-zinc-600">
                  {job.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-600">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Briefcase size={15} className="mt-1 shrink-0 text-blue-600" />
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
