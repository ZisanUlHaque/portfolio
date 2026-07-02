"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-300">
          <span className="h-px w-6 bg-brand-400/60" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-ink-200/80 text-base md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}