export type Experience = {
  role: string;
  company: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "RvFit",
    place: "Personal project",
    period: "Oct 2026 — Present",
    points: [
      "Building a fitness web app with Next.js, TypeScript, Tailwind CSS and Supabase (Auth, PostgreSQL, row-level security).",
      "Calorie and macro calculator, meal planner (~180 foods), workout plans and progress tracking.",
      "44 Vitest test files and a GitHub Actions CI pipeline; staging on Vercel.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "DapperTails",
    place: "New Jersey, USA · Remote",
    period: "Jul — Aug 2026",
    points: [
      "Built a call-assistant web app (React, Node.js) for real-time notes and lookups during customer calls.",
      "Breed autocomplete and automatic breed → coat type → price matching, replacing manual lookups.",
      "Client profiles, call history and pet notes in a database, with ongoing price and data updates.",
    ],
  },
  {
    role: "Project Manager & Full Stack Developer",
    company: "TravelMate AI Capstone",
    place: "University of Cebu",
    period: "Feb — May 2026",
    points: [
      "Led the capstone and solely built an AI voice travel assistant for web (React) and mobile (React Native, Expo).",
      "REST API on Node.js/Express with Firebase Cloud Functions, Firestore, Auth and Cloud Messaging.",
      "Cut API costs with Gemini, local Ollama and OpenStreetMap so the app runs on free tiers.",
    ],
  },
  {
    role: "Full Stack Engineer (OJT, 1,000 hours)",
    company: "MMB Network and Data Solutions",
    place: "Cebu City",
    period: "Aug 2025 — Jan 2026",
    points: [
      "Proposed and built an internal sales tracker and CRM dashboard with React, Node.js and Firebase.",
      "Secure login, sales transactions, a last-contact log per client and monthly sales trend charts.",
      "Deployed on Vercel for logged-in staff only, protecting private sales data.",
    ],
  },
];
