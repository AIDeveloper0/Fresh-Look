-- Schema setup for Stripe + Supabase subscriptions (public schema)

-- Map users to Stripe customers
create table if not exists public.stripe_customers (
  user_id uuid primary key references auth.users(id) on delete cascade,
  stripe_customer_id text unique not null
);

alter table public.stripe_customers enable row level security;

-- service role can write
do $$ begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'stripe_customers' and policyname = 'service role write only'
  ) then
    create policy "service role write only"
      on public.stripe_customers for all
      using (auth.role() = 'service_role')
      with check (auth.role() = 'service_role');
  end if;
end $$;

-- owners can read their mapping
do $$ begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'stripe_customers' and policyname = 'owner can read'
  ) then
    create policy "owner can read"
      on public.stripe_customers for select
      using (auth.uid() = user_id);
  end if;
end $$;

-- Store subscription state (optional but recommended)
create table if not exists public.user_subscriptions (
  user_id uuid references auth.users(id) on delete cascade,
  stripe_customer_id text not null,
  stripe_subscription_id text primary key,
  status text not null,
  price_id text not null,
  current_period_end timestamptz,
  created_at timestamptz default now()
);

create index if not exists user_subscriptions_user_id_idx on public.user_subscriptions(user_id);

alter table public.user_subscriptions enable row level security;

do $$ begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'user_subscriptions' and policyname = 'service role write only'
  ) then
    create policy "service role write only"
      on public.user_subscriptions for all
      using (auth.role() = 'service_role')
      with check (auth.role() = 'service_role');
  end if;
end $$;

do $$ begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'user_subscriptions' and policyname = 'owner can read'
  ) then
    create policy "owner can read"
      on public.user_subscriptions for select
      using (auth.uid() = user_id);
  end if;
end $$;

