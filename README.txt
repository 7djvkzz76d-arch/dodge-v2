DODGE V2 — FINAL

This package is the final GitHub Pages build.

Files:
- index.html — complete game + Supabase leaderboard connection
- manifest.json — PWA metadata
- sw.js — lightweight service worker without stale-page caching
- supabase.sql — INSERT RLS policy for public score submission

Supabase project is already configured in index.html with the public publishable key.
Do not replace it with a secret key.

If the Supabase INSERT policy has already been created, no SQL action is needed.
