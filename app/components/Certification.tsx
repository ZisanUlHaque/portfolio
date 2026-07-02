"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar, Building2, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/certifications";

export default function Certifications() {
  const visibleCerts = certifications.slice(0, 3);

  return (
    <section id="certifications" className="section-pad relative">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-72 bg-gradient-to-r from-brand-400/5 via-accent-500/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Certifications"
          title="Credentials & Achievements"
          subtitle="Industry-recognized certifications that validate my expertise."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {visibleCerts.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10">
                  <Award size={18} className="text-brand-400 transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="font-display text-xl font-semibold text-ink-50">
                  {cert.title}
                </h3>

                <div className="mt-3 flex flex-col gap-2 text-sm text-ink-200/70">
                  <div className="flex items-center gap-2">
                    <Building2 size={14} className="flex-shrink-0 text-ink-200/40" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="flex-shrink-0 text-ink-200/40" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-ink-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-400 transition-all hover:gap-3"
                >
                  View Credential
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {certifications.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              href="/credential"
              className="inline-flex items-center gap-3 rounded-lg border border-brand-400/50 px-8 py-3 font-semibold text-brand-300 transition-all hover:bg-brand-400/10"
            >
              View All Credential
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}