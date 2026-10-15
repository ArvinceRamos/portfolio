export type Project = {
  slug: string;
  title: string;
  tagline: string;
  kind: string;
  period: string;
  year: string;
  role: string;
  status: string;
  highlights: string[];
  tags: string[];
  image: { src: string; alt: string };
  links: { live?: string; code?: string };
  caseStudy: {
    why: string;
    what: string[];
    how: string[];
    hard: { title: string; body: string }[];
    ai: string;
    issues: string[];
  };
};

export type OtherWork = {
  title: string;
  org: string;
  period: string;
  role: string;
  summary: string;
  points: string[];
  tags: string[];
  image?: { src: string; alt: string };
  isPrivate?: boolean;
};

export const projects: Project[] = [
  {
    slug: "marketplace",
    title: "Marketplace",
    tagline:
      "A buy-and-sell site for the Philippines with listings, chat, offers and a checkout that runs in test mode.",
    kind: "Personal project",
    period: "Oct 2026",
    year: "2026",
    role: "Solo developer",
    status: "Live · test mode, no real money",
    highlights: [
      "23 Postgres tables, all with row-level security",
      "About 300 tests written (212 backend, 97 frontend)",
      "Payments and couriers are simulated",
    ],
    tags: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Supabase", "Docker"],
    image: {
      src: "/images/projects/marketplace.webp",
      alt: "Marketplace home page with category filters and a recently listed item",
    },
    links: {
      live: "https://marketplace-rust-six.vercel.app/",
      code: "https://github.com/ArvinceRamos/marketplace",
    },
    caseStudy: {
      why: "I wanted to build something with money rules in it, where a small bug could cost someone. A marketplace has listings, chat, offers, orders, refunds and disputes, and each of those has edge cases. I used the public features of Carousell PH as a guide. No code, branding or content was copied.",
      what: [
        "Sellers list new or secondhand items with photos.",
        "Buyers search, filter, follow sellers, chat and make offers.",
        "A test-mode checkout with a wallet, courier tracking, cash on delivery and a 6-digit handover code for meetups. No real money moves.",
        "Reviews, disputes and a 14-day refund fallback.",
        "An admin side with a reports queue, hidden listings, restricted users and an audit log.",
      ],
      how: [
        "The frontend is Next.js 16 with React 19. The API is FastAPI on Python 3.13, talking to Supabase Postgres through SQLAlchemy (async) and asyncpg.",
        "The browser signs in with Supabase Auth. The API checks the JWT itself: only allowed algorithms, plus aud, iss and exp. The user ID comes only from the verified token, never from the request body.",
        "Each request runs in one database transaction under the caller's role (signed-in user, guest or webhook). The API's own database user has no table rights, so Postgres row-level security still blocks access if my Python code has a bug.",
        "Money and order logic lives in about 60 SECURITY DEFINER SQL functions. Amounts are stored as whole centavos.",
        "Uploaded photos are checked, resized to WebP and stripped of EXIF data, so a phone's GPS tag can't leak where a seller lives.",
        "The API ships as a Docker image that runs as a non-root user.",
      ],
      hard: [
        {
          title: "Keeping the ledger honest",
          body: "Every peso that moves has to come from somewhere. The ledger is append-only, and a deferred trigger checks that each transaction adds up to zero before it commits. If it doesn't balance, Postgres rejects the whole thing.",
        },
        {
          title: "Webhooks that could be faked or replayed",
          body: "The fake payment and courier providers send signed webhooks. The API checks an HMAC over a timestamp with a constant-time compare, rejects anything older than 5 minutes and ignores event IDs it has already seen. A real provider could plug in behind the same interface later.",
        },
        {
          title: "Auditing my own app",
          body: "Near the end I went through the app looking for ways to cheat it: money loopholes and permission holes. I wrote the findings down, fixed them in the next phase and added a test for each fix. One item, fake reviews from several accounts, is only partly fixed.",
        },
      ],
      ai: "I built this over 15 phases with Claude Code. I planned each phase, reviewed the changes and ran the tests. The repo has a CLAUDE.md file with the rules I gave it.",
      issues: [
        "Payments and couriers are simulated. This is not a real payment system.",
        "Order timers only run when someone opens a page. There is no background worker yet.",
        "Rate limits live in memory and reset when the API restarts.",
        "Chat polls every 10 seconds instead of using realtime. No email or push notifications.",
        "The Content Security Policy still allows inline scripts.",
        "It runs on free plans: no database backups, and the API can be slow on the first request after it has been idle.",
        "The git history doesn't show the 15 phases. All 18 commits have almost the same timestamp.",
      ],
    },
  },
  {
    slug: "rvfit",
    title: "RvFit",
    tagline:
      "A fitness app for beginners. Get a calorie and macro estimate, plan meals, follow a workout plan and track your weight.",
    kind: "Personal project",
    period: "Oct 2026",
    year: "2026",
    role: "Solo developer",
    status: "Live",
    highlights: [
      "667 unit tests passing",
      "12 Postgres tables, all with row-level security",
      "CI runs on every push",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vitest", "three.js"],
    image: {
      src: "/images/projects/rvfit.webp",
      alt: "RvFit landing page with a daily calorie and macro preview",
    },
    links: {
      live: "https://rv-fit.vercel.app/",
      code: "https://github.com/ArvinceRamos/RvFit",
    },
    caseStudy: {
      why: "I wanted a project where the details matter: numbers people act on, personal data that has to stay private, and enough logic that I needed real tests. A beginner fitness app had all of that.",
      what: [
        "Anyone can enter age, weight, height, activity and goal to get a calorie and macro estimate, before signing up.",
        "After a free sign-up the estimate is kept, and you can plan meals from a food catalog built from USDA FoodData Central (about 180 foods).",
        "Tick off meals as you eat them.",
        "Follow a beginner workout plan with exercise swaps and prompts to progress.",
        "Log workouts and weigh-ins and see them on a dashboard.",
        "A check-in compares your weight trend with your target and suggests small changes.",
        "You can delete your account and all your data yourself.",
      ],
      how: [
        "Next.js 16 App Router. Server components and server actions talk to Supabase.",
        "Every user table has row-level security (auth.uid() = user_id). The anon role can't read user data.",
        "Saves that touch several rows go through Postgres functions like save_meal_plan and save_workout_log, so they succeed or fail as one.",
        "The service-role key is server-only and used in one place: deleting your own account.",
        "The calculator, meal planner, progression and check-in are plain TypeScript modules, which made them easy to test.",
        "GitHub Actions runs typecheck, lint, tests and build on every push.",
      ],
      hard: [
        {
          title: "A check-in that can't push people too far",
          body: "The check-in only looks at weigh-ins logged after your current target was set. It won't suggest going below a calorie floor (1,500 kcal for men, 1,200 for women), and if there isn't enough data it says so instead of guessing. It suggests changes but never changes your target on its own.",
        },
        {
          title: "Keeping a guest's estimate after sign-up",
          body: "You can use the calculator before you have an account. When you sign up, that draft is saved to your profile. The first version could save stale or duplicate drafts, and fixing that handoff took a few tries.",
        },
        {
          title: "Locking down the database",
          body: "I did a security pass that removed the anon role's default table grants and added checks to existing tables. I used NOT VALID constraints so old rows wouldn't break the migration, while new rows still get checked.",
        },
      ],
      ai: "Built with a lot of help from Claude Code. I wrote what each part should do, reviewed the changes and ran the tests. I'm still going through parts of it until I can explain all of it without notes.",
      issues: [
        "No end-to-end tests. The 667 tests are unit tests.",
        "No app-level rate limiting.",
        "The Privacy and Terms pages are still drafts.",
        "The calorie numbers are estimates from standard formulas, not medical advice. The formula settings are marked as placeholders until someone qualified reviews them.",
      ],
    },
  },
  {
    slug: "travelmate-ai",
    title: "TravelMate AI",
    tagline:
      "Chat with an AI to get a day-by-day travel itinerary, then see it on a map with routes and weather.",
    kind: "Capstone · University of Cebu",
    period: "Feb – May 2026",
    year: "2026",
    role: "Project manager and only developer",
    status: "Live",
    highlights: [
      "One interface for 4 AI providers",
      "Runs on free services only",
      "67 tests (39 backend, 28 web)",
    ],
    tags: ["React", "Vite", "Node.js", "Express", "Firebase", "Gemini", "Leaflet"],
    image: {
      src: "/images/projects/travelmate.webp",
      alt: "TravelMate AI home screen with suggested trip ideas and a chat box with a microphone button",
    },
    links: {
      live: "https://travelmate-ai-psi.vercel.app/",
      code: "https://github.com/ArvinceRamos/travelmate-ai",
    },
    caseStudy: {
      why: "This was my capstone at the University of Cebu. I was the project manager and the only developer. The idea: instead of jumping between search, maps and weather apps, you tell the assistant where you want to go and it builds the plan.",
      what: [
        "Chat with the assistant. It asks a few questions first (dates, who's going, budget), then writes a day-by-day itinerary.",
        "Save the itinerary and see the stops on an interactive map with routes and weather.",
        "Get reminders for timed stops.",
        "Talk to it and have it read answers out loud, using the browser's Web Speech API.",
        "Sign in with email or Google.",
      ],
      how: [
        "React 18 and Vite on the frontend, with Leaflet for maps. AI replies are rendered as Markdown and cleaned with DOMPurify.",
        "An Express API that runs as a Vercel serverless function. I first wrote it for Firebase Cloud Functions.",
        "Firebase Auth, plus Firestore rules so you can only read your own itineraries and chats.",
        "One provider layer for Gemini, OpenAI, Groq and a local Ollama model, with a fallback model, retries and friendly error messages. It runs on Gemini's free tier now.",
        "Places, routes and weather come from free services: Photon, Nominatim, Overpass, OSRM and Open-Meteo.",
        "An external cron job calls a secret-protected endpoint to create reminders.",
      ],
      hard: [
        {
          title: "Getting the cost to zero",
          body: "Earlier versions used paid APIs. To keep it running after the capstone I moved everything to free services, which meant following their rules too. Nominatim allows one request per second, so requests go through a queue that spaces them out, and results are cached.",
        },
        {
          title: "Getting structured data out of a chat",
          body: "The AI writes text, but the app needs stops with times and places. I ask each provider for JSON that matches a schema. That works differently for each one: Gemini needs its own schema format and Groq has limits on JSON mode. Then the reply is parsed into stops before saving.",
        },
        {
          title: "Small security details",
          body: "The cron endpoint compares its secret with a constant-time check. The rate limiter uses the user ID when there is one and sends a Retry-After header. Reminders can only be created with a fixed set of fields, and users can mark them read or done but not delete them.",
        },
      ],
      ai: "I used AI coding tools a lot here too, and it shows in places: one service file grew to more than 25,000 lines. Cleaning that up is next.",
      issues: [
        "Push notifications are probably broken. The code calls sendMulticast, which doesn't exist in firebase-admin 13.",
        "llm.service.js is about 25,600 lines and has dead code in it.",
        "The chat endpoint lets guests through, and the map and weather routes have no auth or rate limit.",
        "Rate limiting is in memory, per serverless instance.",
        "The Firestore rule for updating an itinerary doesn't lock the owner field.",
        "Tests only cover parsers, providers and the rate limiter. No UI, rules or end-to-end tests, and no CI.",
        "It depends on free public services and free AI quotas that can change.",
      ],
    },
  },
];

export const otherWork: OtherWork[] = [
  {
    title: "Call assistant for DapperTails",
    org: "DapperTails · Mobile pet grooming, New Jersey (remote)",
    period: "Jul – Aug 2026",
    role: "Freelance",
    summary: "A web app the staff use while they're on the phone with customers.",
    points: [
      "Notes and lookups in real time during a call.",
      "Breed search with autocomplete, so names are spelled right and entry is faster.",
      "Each breed is matched to its coat type and the company's price, so nobody looks prices up by hand.",
      "Client profiles, call history and pet notes saved in a database. I still send them price and data updates.",
    ],
    tags: ["React", "Node.js"],
    image: {
      src: "/images/projects/dappertails.webp",
      alt: "DapperTails grooming quote page (customer details blurred)",
    },
  },
  {
    title: "Sales tracker for MMB",
    org: "MMB Network and Data Solutions · Cebu City",
    period: "Aug 2025 – Jan 2026",
    role: "Internship, 1,000 hours",
    summary: "An internal tool I proposed and built during my internship at an IT solutions company.",
    points: [
      "Secure login, sales transactions and a last-contact log for each client.",
      "Month-by-month sales charts so management can see if sales are going up or down.",
      "Deployed on Vercel for logged-in staff only, to keep sales data private.",
    ],
    tags: ["React", "Node.js", "Firebase", "Vercel"],
    isPrivate: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
