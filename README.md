# GAME BOX

A bilingual, static game catalogue published with GitHub Pages. Game pages link directly to official publishers.

## Download click backend

Analytics uses Cloudflare D1 through a deployed Cloudflare Worker. The database is named `gamebox-analytics`; the click table and indexes are installed, and the Worker is bound using `DB`.

The public endpoint is configured in `analytics-config.js`. It records the game ID and date when a visitor clicks an official publisher download button. It does not store visitor identity or confirm that a download completed. The Worker health endpoint is `https://game-box-analytics.nour0112736754.workers.dev/health`.

The private statistics dashboard is served by the same Cloudflare Worker at `/dashboard`. It reads aggregate daily and per-game click counts from D1, with daily dates calculated using Africa/Cairo time. Access requires the `DASHBOARD_PASSWORD` Worker secret. The Worker applies approximate Cloudflare rate limits of 30 click requests/minute and 5 login attempts/minute per client IP; the IP is SHA-256 hashed for the limiter key and is not written to D1. These limits are approximate and per Cloudflare location. The homepage hero video autoplays muted and loops; it is about 33 MB, so it can take time and data to load, especially on mobile.

## Pages
- index.html — home
- all-games.html — browse and filter all games
- categories.html — category browser
- trending.html — curated popular picks
- game-details.html?game=... — game details

More backend details are in `cloudflare/SETUP_AR.md`.

Before publishing a Worker update, use Wrangler 4.36.0 or later, make sure its password secret is set with `npx wrangler secret put DASHBOARD_PASSWORD`, then deploy from the `cloudflare` folder. Configure unique rate-limit namespace IDs for your Cloudflare account if these IDs are already in use. Never put the dashboard password in a website file or ZIP archive.
