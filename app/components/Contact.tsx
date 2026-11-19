"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappLink = `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`;

  return (
    <section id="contact" className="dark-section section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Initiate Contact"
          title="Let's build something remarkable together."
          subtitle="Looking for an engineer who writes robust code and ships fast? My inbox is always open for opportunities and conversations."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Direct channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 rounded-3xl border border-zinc-800 bg-[#18181b] p-7 lg:col-span-2"
          >
            <h3 className="font-display text-xl font-bold text-white">
              Direct Inquiries
            </h3>
            <p className="text-sm text-zinc-400">
              Reach out directly through any of these channels. I typically respond within 24 hours.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3.5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Mail size={18} />
                </span>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Email</div>
                  <div className="truncate text-sm font-medium text-zinc-200">{profile.email}</div>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3.5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Phone size={18} />
                </span>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Phone</div>
                  <div className="text-sm font-medium text-zinc-200">{profile.phone}</div>
                </div>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <MessageCircle size={18} />
                </span>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">WhatsApp</div>
                  <div className="text-sm font-medium text-zinc-200">{profile.whatsapp}</div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">Location</div>
                  <div className="text-sm font-medium text-zinc-200">{profile.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl border border-zinc-800 bg-[#18181b] p-7 lg:col-span-3 sm:p-9"
          >
            <h3 className="font-display text-xl font-bold text-white">
              Send a Message
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
              Leave your contact details and message, and I will get back to you promptly.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Your Name
                </span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-blue-500"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Email Address
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-blue-500"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Your Message
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or opportunities..."
                  className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-zinc-500">
                Direct mail: <a className="text-blue-400 hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-500"
              >
                {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
                {sent ? "Message sent" : "Send message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
