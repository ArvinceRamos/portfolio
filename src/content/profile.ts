export const profile = {
  name: "Arvince Ramos",
  fullName: "Arvince R. Ramos",
  initials: "AR",
  title: "Full Stack Developer",
  location: "Cebu City, Philippines",
  timezone: "GMT+8",
  email: "arvinceramos14@gmail.com",
  github: "https://github.com/ArvinceRamos",
  // TODO: add your LinkedIn profile URL; the link stays hidden while this is empty.
  linkedin: "",
  resume: "/resume.pdf",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arvinceramos.vercel.app",
  availability: "Open to full-time roles",
  description:
    "Arvince Ramos, a junior full stack developer from Cebu, Philippines. I build web apps with Next.js, React, Node.js, FastAPI and Postgres, and I write about what broke along the way.",
  bio: [
    "I finished my BS in Information Technology at the University of Cebu in June 2026. Before that I did a 1,000-hour internship at an IT company in Cebu, where I built their sales tracker.",
    "I learn best by building things that are a bit too big for me. A marketplace with its own ledger, a fitness app with hundreds of tests, an AI trip planner that runs on free services. Each one forced me to read docs I didn't understand yet, break things and fix them.",
    "I'm looking for a team where I can keep doing that, with people who know more than I do.",
  ],
  education: {
    degree: "BS Information Technology",
    school: "University of Cebu, Cebu City",
    year: "June 2026",
  },
  languages: ["English", "Filipino", "Cebuano"],
};

export const aiNote = [
  "I build with AI coding tools, mostly Claude Code. It writes a lot of the first drafts.",
  "My job is the rest: deciding what to build, reading every change, running the tests, debugging when it's wrong (it often is) and rewriting what I don't understand until I do. If something is on this site, I should be able to walk you through it. If I can't, that's a gap I'm working on, and the known issues on each project are honest about where things stand.",
];
