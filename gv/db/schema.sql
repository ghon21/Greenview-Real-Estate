create extension if not exists "pgcrypto";
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  type text not null check (type in ('sell','rent','buy')),
  address text not null, name text not null, phone text not null, email text not null,
  timeframe text, status text not null default 'new'
);
create index if not exists leads_created_idx on leads (created_at desc);
create table if not exists listings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  address text not null, suburb text not null, price_guide text,
  beds int, baths int, cars int,
  status text not null default 'for_sale' check (status in ('for_sale','sold','leased'))
);
