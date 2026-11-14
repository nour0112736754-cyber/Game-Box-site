# GAME BOX

A bilingual static game catalogue with publisher links and Supabase click analytics.

## Database setup

See `supabase/SETUP_AR.md`. Run `supabase/schema.sql` in the Supabase SQL Editor to configure aggregate download-click analytics. The site does not create anonymous Auth users.

## Analytics dashboard

Open `dashboard.html` on the deployed site to view total clicks, clicks today, active games, game rankings, and the last seven days of activity.

## Deployment

The site is static and can be published with GitHub Pages. Set the Supabase project URL and browser-safe publishable key in `supabase-config.js`. Never put a service-role key or database password in a browser file.
