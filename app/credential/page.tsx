import Link from "next/link";
import { ArrowLeft, Award, Calendar, Building2, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { certifications } from "../data/certifications";

export default function CredentialPage() {
  return (
    <main className="relative min-h-screen bg-[#faf9f6]">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#certifications"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-[#09090b]"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>

          <div className="mt-8 border-b border-zinc-200 pb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
              ● Verified Achievements
            </span>
            <h1 className="mt-3 font-display text-4xl font-black text-[#09090b] sm:text-5xl md:text-6xl">
              All Credentials &amp; Honors
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Competitive programming preliminary contests, hackathon honors, leadership certifications, and technical completions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all hover:border-[#09090b] sm:p-8"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Award size={22} />
                  </div>

                  <h2 className="mt-6 font-display text-xl font-bold leading-snug text-[#09090b]">
                    {cert.title}
                  </h2>

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
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
