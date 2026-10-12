export type Project = {
  slug: string;
  title: string;
  client: string;
  period: string;
  year: string;
  role: string;
  category: string;
  summary: string;
  outcome: string;
  tags: string[];
  image?: { src: string; alt: string };
  isPrivate?: boolean;
  links: { live?: string; code?: string };
  caseStudy: {
    problem: string;
    built: string[];
    decisions: string[];
    results: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "rvfit",
    title: "RvFit",
    client: "Personal product",
    period: "Oct 2026 – Present",
    year: "2026",
    role: "Solo full stack developer",
    category: "Web app · Health & fitness",
    summary:
      "A fitness web app that turns calorie and macro targets into meal plans, workouts and progress tracking.",
    outcome: "44 Vitest test files and a GitHub Actions CI pipeline from day one.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vitest", "GitHub Actions"],
    image: {
      src: "/images/projects/rvfit.webp",
      alt: "RvFit landing page with a daily calorie and macro progress preview",
    },
    links: {
      // TODO: paste the RvFit staging/live URL here to show the "Live" button.
      live: "",
      code: "https://github.com/ArvinceRamos/RvFit",
    },
    caseStudy: {
      problem:
        "Getting started with fitness usually means juggling a calorie calculator, a meal spreadsheet and a separate workout app. RvFit puts those steps in one place, in order: set a target, plan meals, train, and track the trend.",
      built: [
        "Calorie and macro calculator that sets protein, carb, fat and fiber targets.",
        "Meal planner backed by a library of about 180 foods.",
        "Workout plans and progress tracking over time.",
        "Auth and PostgreSQL on Supabase, with row-level security on user data.",
      ],
      decisions: [
        "Row-level security in PostgreSQL so every user can only read and write their own records.",
        "TypeScript end to end, with tests written alongside each feature instead of after.",
        "A CI pipeline that typechecks, lints, tests and builds before anything reaches staging on Vercel.",
      ],
      results: [
        "44 Vitest test files covering the app's core logic.",
        "Automated GitHub Actions pipeline: typecheck → lint → test → build.",
        "Staging environment running on Vercel.",
      ],
    },
  },
  {
    slug: "travelmate-ai",
    title: "TravelMate AI",
    client: "Capstone · University of Cebu",
    period: "Feb – May 2026",
    year: "2026",
    role: "Project manager & sole developer",
    category: "Web + mobile · AI assistant",
    summary:
      "An AI voice travel assistant for web and mobile that builds itineraries and handles routing, weather and reminders.",
    outcome: "Moved to Gemini, local Ollama and OpenStreetMap so the whole app runs on free tiers.",
    tags: ["React", "React Native", "Expo", "Node.js", "Firebase", "OpenAI", "Gemini", "Ollama"],
    image: {
      src: "/images/projects/travelmate.webp",
      alt: "TravelMate AI home screen with suggested trip prompts and a voice-enabled chat box",
    },
    links: {
      code: "https://github.com/ArvinceRamos/travelmate-ai",
    },
    caseStudy: {
      problem:
        "Planning a trip means jumping between search, maps, weather apps and notes. The capstone goal was one assistant you can simply talk to — it builds the itinerary and helps you follow it.",
      built: [
        "Web app in React and a mobile app in React Native (Expo).",
        "REST API on Node.js/Express running as Firebase Cloud Functions, with Firestore, Auth and Cloud Messaging.",
        "Chatbot on the OpenAI API, with Serper and Geoapify for place data and Google Maps Platform (Places, Geocoding, Routes) as a fallback.",
        "Voice mode with free speech-to-text and text-to-speech, plus itineraries, routing, weather and reminders.",
      ],
      decisions: [
        "Cut API costs by switching to Gemini, a local Ollama model and free OpenStreetMap services.",
        "Per-user Firestore rules, server-side token checks, rate limiting and sanitized AI output to protect user data.",
        "Ran the project as PM — scope, timeline and demos — while building every layer myself.",
      ],
      results: [
        "Delivered both web and mobile apps with a working voice mode.",
        "Running costs brought down to free tiers.",
        "Itineraries, routes, weather and reminders in one assistant.",
      ],
    },
  },
  {
    slug: "dappertails",
    title: "DapperTails Call Assistant",
    client: "DapperTails · New Jersey, USA (remote)",
    period: "Jul – Aug 2026",
    year: "2026",
    role: "Freelance full stack developer",
    category: "Client work · Business web app",
    summary:
      "A call-assistant web app that helps a mobile pet-grooming business take notes, look up breeds and quote prices during live calls.",
    outcome: "Automatic breed → coat type → price matching replaced manual price lookups.",
    tags: ["React", "Node.js", "REST API", "Database"],
    image: {
      src: "/images/projects/dappertails.webp",
      alt: "DapperTails instant grooming quote page with a live price summary (customer details blurred)",
    },
    links: {},
    caseStudy: {
      problem:
        "Staff were answering customer calls while looking up breeds and prices by hand — slow, and easy to misspell a breed or misquote a price mid-conversation.",
      built: [
        "A web app for real-time notes and lookups during customer phone calls.",
        "Autocomplete search for dog breeds, so names are always spelled right.",
        "Automatic matching from breed to coat type to the company's price.",
        "Client profiles, call history and pet notes stored in a database.",
        "An instant quote page with a live price breakdown.",
      ],
      decisions: [
        "Autocomplete instead of free text, to remove spelling errors and speed up entry mid-call.",
        "Prices driven by data rather than hard-coded, so updates are quick to roll out.",
        "Kept the interface focused on what staff need while still on the phone.",
      ],
      results: [
        "No more manual price lookups during calls.",
        "Faster, error-free breed entry.",
        "Ongoing support with price and data updates for the client.",
      ],
    },
  },
  {
    slug: "sales-crm",
    title: "Sales Tracker & CRM",
    client: "MMB Network and Data Solutions · Cebu City",
    period: "Aug 2025 – Jan 2026",
    year: "2025",
    role: "Full stack engineer (OJT, 1,000 hours)",
    category: "Internship · Internal dashboard",
    summary:
      "An internal sales tracker and CRM dashboard I proposed and built for a system integrator and IT solutions provider.",
    outcome: "Month-by-month trend charts show management rising or falling sales at a glance.",
    tags: ["React", "Node.js", "Firebase", "Vercel"],
    isPrivate: true,
    links: {},
    caseStudy: {
      problem:
        "The team needed one place to log sales, see when each client was last contacted, and tell quickly whether sales were going up or down.",
      built: [
        "Secure login for staff.",
        "Sales transaction records and a last-contact log for each client.",
        "Month-by-month sales trend charts for management.",
        "Deployed on Vercel for internal use only.",
      ],
      decisions: [
        "Proposed the tool myself after seeing how sales data was being tracked.",
        "Restricted access to logged-in staff to protect private sales data.",
        "Designed the charts around one question: are sales rising or falling?",
      ],
      results: [
        "In use internally by logged-in staff.",
        "Sales trends visible at a glance instead of rebuilt by hand.",
        "Completed as part of a 1,000-hour OJT.",
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
