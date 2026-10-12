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
  availability: "Available for remote roles & freelance",
  replyTime: "Replies within 24 hours",
  hours: "Flexible hours to overlap with US, EU and AU teams",
  description:
    "Full stack developer in Cebu, Philippines building web and mobile apps end to end with React, Next.js, React Native, Node.js, Firebase, Supabase and LLM integrations.",
  bio: [
    "I'm a full stack developer and BS Information Technology graduate from the University of Cebu. I like owning a product from the first database table to the last pixel — web, mobile and the API in between.",
    "Lately that means AI features: chatbots, voice assistants and LLM integrations that are useful without burning through an API budget. I led my capstone as project manager while building it solo, and I've shipped work for a remote US client and an IT company in Cebu.",
  ],
  education: {
    degree: "BS Information Technology",
    school: "University of Cebu, Cebu City",
    year: "Graduated June 2026",
  },
  languages: ["English", "Filipino", "Cebuano"],
};

export const stats = [
  { value: "4", label: "Shipped projects" },
  { value: "1", label: "Remote US client" },
  { value: "1,000", label: "OJT hours" },
  { value: "44", label: "Test files + CI" },
];
