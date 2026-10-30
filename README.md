# DaanSetu India

DaanSetu India (दानसेतु) — "Every Contribution Builds a Better Tomorrow." A community giving and volunteering platform connecting people who want to help with genuine community causes and NGOs in India.

## Tech Stack
- React.js + Vite
- JavaScript (no TypeScript)
- Tailwind CSS (v4)
- React Router
- Supabase (PostgreSQL, Auth, Storage) — optional
- lucide-react

## Features (Current)
- Responsive public website with warm Indian palette
- Home, Explore Causes, Cause Details, Donate (Demo), Volunteer, Donate Items, Share Skills, NGO Directory, About, Contact, Login, Signup
- Role-based dashboard UI placeholders (Volunteer, NGO, Admin)
- Demo data clearly labelled `[DEMO]`
- Filters for city/cause/contribution type/search
- Donation flow is **demo only** — no payments collected, no card/UPI details requested
- Verification labels: Verified / Verification pending / Unverified (only shown accurately)
- NGO directory notes Darpan ID alone doesn't grant verified badge
- Demo mode works without Supabase credentials
- Accessibility considerations (semantic HTML, focus states, reduced motion)

## Project Structure
```
src/
├── components/
│   ├── layout/        # Navbar, Footer, MainLayout
│   ├── opportunities/ # Filters, OpportunityCard
│   └── ui/            # Icon
├── data/              # demoData.js
├── pages/             # Public pages + dashboard pages
├── services/          # supabaseClient.js
├── utils/             # constants.js, helpers.js
└── App.jsx
supabase/
└── schema.sql
.env.example
```

## Setup
1. Install dependencies
```bash
npm install
```
2. Copy env
```bash
cp .env.example .env
```
3. Run dev server
```bash
npm run dev
```

## Demo Mode
If `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are not set, the app runs in **demo mode** using sample data. All forms show demo success messages with no real database writes.

## Supabase Setup (Optional)
1. Create a Supabase project
2. Run `supabase/schema.sql` in SQL Editor
3. Add env vars to `.env`
4. Enable RLS as per schema notes
5. Create private Storage buckets for NGO documents

## Important Notes
- No real donations collected
- No fake receipts or tax certificates
- NGO verification only after admin review
- No service-role keys in frontend
- No scraped/fabricated NGO records
- Foreign donations out of scope for prototype

## Build
```bash
npm run build
```
