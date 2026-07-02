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
    // Hook this up to your backend / Formspree / Resend when ready.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappLink = `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`;

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let's build something great together."
          subtitle="Have a project, a role, or just want to say hi? I'd love to hear from you."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass space-y-4 rounded-3xl p-7 lg:col-span-2"
          >
            <h3 className="font-display text-lg font-semibold text-ink-50">
              Reach me directly
            </h3>
            <p className="text-sm text-ink-300">
              I usually reply within 24 hours.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.07]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/30 to-accent-500/30 text-brand-200">
                <Mail size={18} />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-300">Email</div>
                <div className="text-sm text-ink-100">{profile.email}</div>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.07]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/30 to-accent-500/30 text-brand-200">
                <Phone size={18} />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-300">Phone</div>
                <div className="text-sm text-ink-100">{profile.phone}</div>
              </div>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.07]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/30 to-accent-500/30 text-brand-200">
                <MessageCircle size={18} />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-300">WhatsApp</div>
                <div className="text-sm text-ink-100">{profile.whatsapp}</div>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/30 to-accent-500/30 text-brand-200">
                <MapPin size={18} />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-300">Location</div>
                <div className="text-sm text-ink-100">{profile.location}</div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="glass rounded-3xl p-7 lg:col-span-3"
          >
            <h3 className="font-display text-lg font-semibold text-ink-50">
              Send a message
            </h3>
            <p className="mt-1 text-sm text-ink-300">
              Tell me about your idea, timeline, and budget.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-wider text-ink-300">
                  Your name
                </span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-100 outline-none placeholder:text-ink-400 focus:border-brand-400/60"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs uppercase tracking-wider text-ink-300">
                  Email
                </span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-100 outline-none placeholder:text-ink-400 focus:border-brand-400/60"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1 block text-xs uppercase tracking-wider text-ink-300">
                  Message
                </span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="I'd love to talk about…"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink-100 outline-none placeholder:text-ink-400 focus:border-brand-400/60"
                />
              </label>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-ink-300">
                Or email me directly at{" "}
                <a className="text-brand-300 hover:underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                .
              </p>
              <button type="submit" className="btn-primary">
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