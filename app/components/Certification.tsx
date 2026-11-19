"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Calendar, Building2, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/certifications";

export default function Certifications() {
  const visibleCerts = certifications.slice(0, 3);

  return (
    <section id="certifications" className="section-pad relative border-b border-zinc-200/80 bg-[#faf9f6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements &amp; Honors"
          title="Credentials &amp; Contests"
          subtitle="Hackathons, leadership programs, and competitive programming prelims that pushed my abilities."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {visibleCerts.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all hover:border-[#09090b] sm:p-8"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Award size={22} />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold leading-snug text-[#09090b]">
                  {cert.title}
                </h3>

                <div className="mt-4 flex flex-col gap-2 text-xs font-semibold text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Building2 size={14} className="text-zinc-400" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-zinc-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.credentialUrl && (
                <div className="mt-8 border-t border-zinc-100 pt-5">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition-colors hover:text-blue-700"
                  >
                    View Credential
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {certifications.length > 3 && (
          <div className="mt-12 text-center">
            <Link
              href="/credential"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-bold text-[#09090b] transition-all hover:border-[#09090b]"
            >
              View All Credentials &amp; Certifications
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
