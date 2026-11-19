import Link from "next/link";
import { ArrowLeft, Download, Mail, Phone, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { skills } from "../data/skills";

export default function ResumePage() {
  const featured = projects.slice(0, 5);

  return (
    <main className="min-h-screen bg-[#faf9f6] py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Bar for web view */}
      <div className="mx-auto max-w-4xl mb-8 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-[#09090b]"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-[#09090b] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-zinc-800"
        >
          <Download size={14} /> Download PDF
        </a>
      </div>

      {/* Resume Document Sheet */}
      <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 shadow-sm print:border-none print:shadow-none print:p-0">
        
        {/* Header */}
        <header className="border-b border-zinc-200 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-black text-[#09090b]">
                {profile.name}
              </h1>
              <p className="mt-1 font-display text-lg font-bold text-blue-600">
                {profile.designation}
              </p>
            </div>
            <div className="text-xs sm:text-right space-y-1 text-zinc-600">
              <div className="flex sm:justify-end items-center gap-2">
                <Mail size={13} className="text-blue-600" />
                <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
              </div>
              <div className="flex sm:justify-end items-center gap-2">
                <Phone size={13} className="text-blue-600" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-2">
                <MapPin size={13} className="text-blue-600" />
                <span>{profile.location}</span>
              </div>
              <div className="flex sm:justify-end items-center gap-3 pt-1">
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="font-semibold text-[#09090b] hover:underline">
                  GitHub
                </a>
                <span>•</span>
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="font-semibold text-blue-600 hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="py-6 border-b border-zinc-200">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            ● Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            Full-Stack Developer and Computer Science undergraduate with hands-on experience designing and delivering scalable web applications, RESTful microservices, and reactive user interfaces. Core expertise in Next.js, React, TypeScript, Node.js, Express, Prisma, and PostgreSQL. Client production experience and hackathon award-winner.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="py-6 border-b border-zinc-200">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
            ● Technical Skills
          </h2>
          <div className="space-y-2 text-sm">
            {skills.map((s) => (
              <div key={s.category} className="flex flex-col sm:flex-row sm:gap-4">
                <span className="w-36 shrink-0 font-bold text-[#09090b]">{s.category}:</span>
                <span className="text-zinc-600">{s.items.map((i) => i.name).join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="py-6 border-b border-zinc-200">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">
            ● Work Experience
          </h2>
          <div className="space-y-6">
            {profile.experience.map((job) => (
              <div key={job.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-display text-base font-bold text-[#09090b]">
                    {job.role} <span className="font-normal text-zinc-500">| {job.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">{job.period}</span>
                </div>
                <ul className="mt-2.5 list-disc list-inside space-y-1.5 text-xs leading-relaxed text-zinc-600">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects */}
        <section className="py-6 border-b border-zinc-200">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">
            ● Featured Engineering Projects
          </h2>
          <div className="space-y-5">
            {featured.map((p) => (
              <div key={p.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-sm font-bold text-[#09090b]">
                      {p.name}
                    </h3>
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline inline-flex items-center gap-0.5">
                        [Live Deployment]
                      </a>
                    )}
                    {p.clientRepoUrl && p.clientRepoUrl !== p.liveUrl && (
                      <a href={p.clientRepoUrl} target="_blank" rel="noreferrer" className="text-xs text-zinc-500 hover:underline inline-flex items-center gap-0.5">
                        [GitHub]
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-1.5 text-[11px] text-zinc-500">
                  <strong className="text-[#09090b]">Tech Stack:</strong> {p.tech.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="py-6 border-b border-zinc-200">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
            ● Education
          </h2>
          <div className="space-y-4">
            {profile.education.map((ed) => (
              <div key={ed.degree} className="flex flex-wrap items-baseline justify-between gap-1">
                <div>
                  <h3 className="font-display text-sm font-bold text-[#09090b]">
                    {ed.degree}
                  </h3>
                  <p className="text-xs text-zinc-600">{ed.school}</p>
                </div>
                <span className="text-xs font-mono text-zinc-500">{ed.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Honors */}
        <section className="pt-6">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
            ● Honors &amp; Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {certifications.map((c) => (
              <div key={c.title} className="rounded-xl border border-zinc-200 bg-[#faf9f6] p-3">
                <div className="font-bold text-[#09090b]">{c.title}</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">{c.issuer} • {c.date}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
