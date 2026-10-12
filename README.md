# Arvince Ramos — Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Motion**. Dark theme with a `#01c16a` accent, case-study pages for each project, and a contact form powered by [Resend](https://resend.com).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All text lives in `src/content/`, so you don't need to touch components to update the site:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, email, GitHub/LinkedIn, availability line, bio, stats |
| `projects.ts` | Project cards and case studies (add the RvFit live URL here) |
| `experience.ts` | Work history timeline |
| `skills.ts` | Stack, services and "How I work" steps |

Images live in `public/images/`, and the résumé is `public/resume.pdf`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SITE_URL`: your live URL (used for SEO and link previews)
- `RESEND_API_KEY`: from resend.com (free tier); the contact form shows a friendly fallback without it
- `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`: optional overrides

## Scripts

`npm run dev` · `npm run build` · `npm run start` · `npm run lint`
