export type Experience = {
  role: string;
  company: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Freelance Full Stack Developer",
    company: "DapperTails",
    place: "New Jersey, USA · Remote",
    period: "Jul – Aug 2026",
    points: [
      "Built a call-assistant web app (React, Node.js) that staff use during customer calls.",
      "Added breed autocomplete and automatic breed to coat type to price matching.",
      "Still send them price and data updates.",
    ],
  },
  {
    role: "Project Manager and Developer, Capstone",
    company: "TravelMate AI",
    place: "University of Cebu",
    period: "Feb – May 2026",
    points: [
      "Led the capstone and built the whole app myself: an AI chat that plans trips, with maps, weather and reminders.",
      "Later moved it to free services so it could stay online at no cost.",
    ],
  },
  {
    role: "Full Stack Intern (OJT, 1,000 hours)",
    company: "MMB Network and Data Solutions",
    place: "Cebu City",
    period: "Aug 2025 – Jan 2026",
    points: [
      "Proposed and built an internal sales tracker and CRM dashboard with React, Node.js and Firebase.",
      "Login, sales records, a last-contact log per client and monthly sales charts.",
    ],
  },
];
