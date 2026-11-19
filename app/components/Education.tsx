"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section-pad relative border-b border-zinc-200/80 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education &amp; Foundations"
          subtitle="Computer science coursework and fundamentals supporting my practical engineering skills."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {profile.education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-zinc-100 pb-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#09090b]">
                    {ed.degree}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-2 font-semibold text-blue-600">
                    <GraduationCap size={16} />
                    <span>{ed.school}</span>
                  </div>
                </div>
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1 font-mono text-xs font-semibold text-zinc-600">
                  {ed.period}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-600">
                {ed.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
