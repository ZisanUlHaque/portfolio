"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-3xl ${alignment}`}
    >
      {eyebrow && (
        <div className={`mb-3 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider ${dark ? "text-blue-400" : "text-blue-600"}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-blue-400" : "bg-blue-600"}`} />
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display text-3xl font-black tracking-tight sm:text-4xl md:text-5xl ${
          dark ? "text-white" : "text-[#09090b]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
