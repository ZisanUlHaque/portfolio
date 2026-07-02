export type Skill = { name: string; level: number };
export type SkillGroup = { category: string; items: Skill[]; accent: string };

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    accent: "from-brand-400 to-brand-600",
    items: [
      { name: "Next.js / React", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "Redux / Zustand", level: 78 }
    ]
  },
  {
    category: "Backend",
    accent: "from-accent-400 to-accent-600",
    items: [
      { name: "Node.js / Express", level: 85 },
      { name: "PostgreSQL", level: 76 },
      { name: "MongoDB", level: 80 },
      { name: "Prisma ORM", level: 82 },
      { name: "REST & GraphQL", level: 84 }
    ]
  },
  {
    category: "Tools & DevOps",
    accent: "from-pink-400 to-fuchsia-600",
    items: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 70 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "Figma", level: 82 },
      { name: "Jest / Testing Library", level: 74 }
    ]
  }
];