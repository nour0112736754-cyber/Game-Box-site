# GAME BOX

A responsive bilingual game discovery and download guide with a catalog of 50 titles. Built with HTML, CSS, and vanilla JavaScript.

## Run locally

Open `index.html` in a modern browser. Search, category filters, game details, and Arabic/English switching run without a build step. Supabase provides shared download-click rankings when configured.

## Pages

- `index.html` — cinematic home page, latest additions, categories, and weekly editorial picks
- `all-games.html` — searchable 50-game library with category filters
- `categories.html` — category shortcuts and current catalog counts
- `trending.html` — editorial weekly picks; the site does not claim to measure live downloads
- `game-details.html?game=<id>` — game overview, requirements guidance, trailer search, and official publisher link

## Images and trailers

Each title has local artwork in `images/games/`. The home hero cycles through the three highest-ranked games every 15 seconds, with editorial picks shown until shared download-click data exists. Game trailers open on YouTube.

## Downloads and requirements

Download buttons lead to publisher websites or launchers. GAME BOX does not host game installers. Requirements and file sizes can change, so the detail page labels unstable or unverified values and directs players to the publisher's current page before installing.

## Supabase setup

Follow the Arabic steps in `supabase/SETUP_AR.md`. Anonymous sign-ins must be enabled for shared download-click rankings; this creates a silent guest session and does not add a login screen.
