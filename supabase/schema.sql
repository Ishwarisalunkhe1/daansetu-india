-- DaanSetu India - Supabase Schema (Migration)
-- Run in Supabase SQL Editor. Enable RLS on all tables.

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  role text check (role in ('volunteer','ngo','admin')),
  city text,
  interests text,
  created_at timestamptz default now()
);

create table if not exists ngos (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  registration_type text,
  registration_number text,
  pan_reference text,
  darpan_id text,
  website text,
  official_email text,
  address text,
  city text,
  verification_status text default 'pending' check (verification_status in ('pending','approved','rejected')),
  verification_notes text,
  approved_at timestamptz,
  approved_by uuid,
  created_at timestamptz default now()
);

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null
);

create table if not exists opportunities (
  id uuid primary key default gen_random_uuid(),
  ngo_id uuid references ngos(id) on delete cascade,
  title text not null,
  description text,
  category_id uuid references categories(id),
  city text,
  address text,
  event_date date,
  contribution_type text check (contribution_type in ('donate-money','volunteer-time','donate-items','share-skills')),
  required_skills text,
  status text default 'open' check (status in ('open','closed')),
  is_demo boolean default false,
  created_at timestamptz default now()
);

create table if not exists volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  opportunity_id uuid references opportunities(id) on delete cascade,
  volunteer_id uuid references profiles(id) on delete cascade,
  message text,
  status text default 'pending' check (status in ('pending','accepted','rejected')),
  created_at timestamptz default now()
);

create table if not exists donation_intents (
  id uuid primary key default gen_random_uuid(),
  donor_id uuid references profiles(id),
  ngo_id uuid references ngos(id),
  opportunity_id uuid references opportunities(id),
  amount numeric,
  status text default 'pending' check (status in ('pending','completed','cancelled')),
  created_at timestamptz default now()
);

create table if not exists donations (
  id uuid primary key default gen_random_uuid(),
  donation_intent_id uuid references donation_intents(id),
  payment_provider text,
  provider_reference text,
  amount numeric,
  currency text default 'INR',
  payment_status text default 'pending' check (payment_status in ('pending','succeeded','failed','refunded')),
  created_at timestamptz default now()
);

create table if not exists impact_updates (
  id uuid primary key default gen_random_uuid(),
  ngo_id uuid references ngos(id) on delete cascade,
  title text not null,
  description text,
  evidence_url text,
  status text default 'pending' check (status in ('pending','published','rejected')),
  published_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists verification_documents (
  id uuid primary key default gen_random_uuid(),
  ngo_id uuid references ngos(id) on delete cascade,
  document_type text,
  private_storage_path text,
  review_status text default 'pending' check (review_status in ('pending','approved','rejected')),
  reviewed_by uuid,
  reviewed_at timestamptz,
  created_at timestamptz default now()
);

-- Indexes
create index if not exists idx_opportunities_city on opportunities(city);
create index if not exists idx_opportunities_category on opportunities(category_id);
create index if not exists idx_opportunities_ngo on opportunities(ngo_id);
create index if not exists idx_apps_volunteer on volunteer_applications(volunteer_id);
create index if not exists idx_apps_opportunity on volunteer_applications(opportunity_id);
create index if not exists idx_ngos_status on ngos(verification_status);

-- RLS
alter table profiles enable row level security;
alter table ngos enable row level security;
alter table opportunities enable row level security;
alter table volunteer_applications enable row level security;
alter table donation_intents enable row level security;
alter table donations enable row level security;
alter table impact_updates enable row level security;
alter table verification_documents enable row level security;
alter table categories enable row level security;

-- Basic policies (adjust as needed)
create policy "Profiles: users can read/update own" on profiles for all using (auth.uid() = id);
create policy "NGOs: public read approved" on ngos for select using (verification_status = 'approved');
create policy "NGOs: ngo/admin manage" on ngos for all using (auth.uid() is not null);
create policy "Opportunities: public read published/open" on opportunities for select using (status = 'open');
create policy "Opportunities: ngo manage own" on opportunities for all using (auth.uid() is not null);
create policy "Applications: volunteer manage own" on volunteer_applications for all using (auth.uid() = volunteer_id);
create policy "Categories: public read" on categories for select using (true);
create policy "Impact: public read published" on impact_updates for select using (status = 'published');

-- Note: Store documents in private Supabase Storage buckets. Never use public buckets.
-- Never expose service-role keys in frontend code.
