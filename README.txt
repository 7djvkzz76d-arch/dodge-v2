DODGE V2 — Supabase Leaderboard

The game is a static HTML game. Supabase is connected with the public publishable key.

Already configured in index.html:
- Project URL: https://bzmpmgrzrhkraubosvwp.supabase.co
- Publishable key: sb_publishable_...
- Global leaderboard read
- Score submission UI
- Player nickname + 2-letter country code

ONE Supabase setup step remains:
Run supabase.sql once in the Supabase SQL Editor. This adds the INSERT RLS policy needed for the public game client to submit scores.

Do NOT use or publish a Supabase secret key.
