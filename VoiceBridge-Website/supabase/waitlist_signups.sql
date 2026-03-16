create table if not exists public.waitlist_signups (
  id bigserial primary key,
  name text not null check (char_length(name) between 2 and 80),
  email text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create unique index if not exists waitlist_signups_email_unique
  on public.waitlist_signups (lower(email));
