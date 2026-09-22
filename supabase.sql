-- Dodge Rush leaderboard security
-- Public clients may READ leaderboard rows.
-- Public clients must NOT INSERT scores directly.
-- Scores must go through score-session -> submit-score -> submit_score_atomic.

revoke all on table public.leaderboard from anon, authenticated;
grant select on table public.leaderboard to anon, authenticated;
grant all on table public.leaderboard to service_role;

drop policy if exists "Allow public submit" on public.leaderboard;
