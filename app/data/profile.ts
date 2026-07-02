export const profile = {
  name: "Md. Zisan Ul Haque",
  designation: "Full-Stack Web Developer",
  tagline:
    "I design and build premium, performance-focused web experiences with modern JavaScript.",
  location: "Bogura, Bangladesh",
  email: "mdzisanulhaque989@gmail.com",
  phone: "+880 1787015981",
  whatsapp: "+8801700000000",
  photo: "/profile.png",
  initials: "ZUH",
  socials: {
    github: "https://github.com/ZisanUlHaque",
    linkedin: "https://www.linkedin.com/in/zisan-ul-haque/",
    twitter: "https://x.com/_Zisan_03",
  },
about: [
  "Hi, I'm Zisan Ul Haque — a Full-Stack Developer and Computer Science student passionate about building modern web applications that are fast, scalable, and user-focused. I enjoy turning ideas into products that deliver real value.",
  "I primarily work with Next.js, React, TypeScript, Node.js, Express.js, Prisma, and PostgreSQL. From designing responsive interfaces to developing secure backend APIs, I love crafting clean, maintainable, and high-performance solutions.",
  "Beyond development, I'm constantly learning new technologies, participating in hackathons. I believe great software comes from continuous learning, collaboration, and attention to detail.",
  "I'm currently looking for paid internships, remote opportunities, and exciting full-stack projects where I can contribute, grow, and build impactful digital experiences."
],

stats: [
  { label: "Projects Built", value: "15+" },
  { label: "Technologies", value: "10+" },
  { label: "Hackathons", value: "5+" },
  { label: "Open to Work", value: "2026" }
],
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      school: "Pundra University of Science & Technology",
      period: "2024 — Present",
      details:
          "Building a strong foundation in computer science through coursework in algorithms, data structures, database systems, software engineering, and modern web development."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Police Lines School and College, Bogura",
      period: "2019 — 2022",
      details: "Science major with a deep curiosity for mathematics and physics."
    }
  ],
  experience: [
    {
      role: "MERN Stack Developer (Intern)",
      company: "360DMMC",
      period: "Jan 2026 — Jun 2026",
bullets: [
  "Developed and maintained full-stack features using the MERN stack, delivering responsive and user-friendly interfaces.",
  "Designed and integrated REST APIs, optimized database operations, and ensured seamless frontend–backend communication.",
  "Collaborated in an Agile development environment, using Git for version control and contributing to production-ready applications."
]
    },
  ]
};

export type Profile = typeof profile;