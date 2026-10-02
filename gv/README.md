# Greenview Real Estate website

Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, PostgreSQL

## Run locally
1. `npm install`
2. Copy `.env.example` to `.env.local` and set `DATABASE_URL`
3. `psql "$DATABASE_URL" -f db/schema.sql`
4. `npm run dev` and open http://localhost:3000

## What is wired up
- `POST /api/leads` validates with Zod, ignores bots via a honeypot field, saves to the `leads` table and can forward to `LEAD_WEBHOOK_URL`.
- The listings section reads the `listings` table and shows labelled placeholders when the table is empty.
- JSON-LD `RealEstateAgent` markup is in `app/layout.tsx`.

## Before launch
- Replace gradient placeholders with real photos (use `next/image`) of the team, SOLD boards and listings.
- Replace the review excerpts with a live Google reviews feed.
- Connect listings to your agency software feed (Rex, VaultRE, Agentbox or similar).
- Add rate limiting on `/api/leads`, privacy policy, terms and licence details.
- Deploy to Vercel with a hosted Postgres (Neon or Supabase).
