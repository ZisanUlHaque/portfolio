# Premium Portfolio

A premium, animated personal portfolio built with **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✅ Requirements coverage

| # | Requirement | Where |
|---|---|---|
| 1 | Fully responsive navigation bar | `app/components/Navbar.tsx` |
| 2 | Designation + professional photo in hero | `app/components/Hero.tsx` |
| 3 | Resume download button (in hero) | `Hero.tsx` → `/resume.pdf` |
| 4 | Social links (GitHub, LinkedIn, Twitter, Facebook) | `Hero.tsx`, `Footer.tsx` |
| 5 | About Me section with journey, work, hobbies | `app/components/About.tsx` |
| 6 | Categorized, visually-appealing skills (Frontend / Backend / Tools) | `app/components/Skills.tsx` |
| 7 | Educational qualification | `app/components/Education.tsx` |
| 8 | Experience | `app/components/Experience.tsx` |
| 9 | ≥3 project cards with detail pages (stack, description, live + repo, challenges, improvements) | `app/components/Projects.tsx`, `app/projects/[slug]/page.tsx` |
| 10 | Contact info (email, phone, WhatsApp) | `app/components/Contact.tsx` |
| 11 | Footer | `app/components/Footer.tsx` |
| 12 | Responsive + clean UI, polished color scheme | `app/globals.css`, `tailwind.config.ts` |

## 🧰 Tech

- **Next.js 14** App Router + RSC
- **TypeScript** (strict)
- **Tailwind CSS** (custom theme)
- **Framer Motion** (entrance + micro-interactions)
- **lucide-react** icons

## 🚀 Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## ☁️ Deploy

The fastest path is **Vercel** (zero config for Next.js):

```bash
npm i -g vercel
vercel        # first run: link + deploy preview
vercel --prod # production deploy
```

Or push to a GitHub repo and import on https://vercel.com/new — the live URL is
what you submit.

## ✏️ Customize

- All personal content lives in `app/data/profile.ts`, `app/data/skills.ts`,
  `app/data/projects.ts`.
- Drop your real photo at `public/profile.svg` (or swap to `.jpg` and update
  `profile.photo`).
- Drop your real resume at `public/resume.pdf` so the hero button downloads it.
- Update social URLs in `profile.ts`.