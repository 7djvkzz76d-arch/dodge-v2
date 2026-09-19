-- Dodge Leaderboard: allow the public game client to submit scores.
-- Run this once in Supabase SQL Editor.
create policy "Allow public submit"
on public.leaderboard
as permissive
for insert
to public
with check (
  player is not null
  and length(trim(player)) between 1 and 24
  and score is not null
  and score between 0 and 1000000
  and country is not null
  and length(trim(country)) = 2
);
