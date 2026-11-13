# GAME BOX

A responsive bilingual game discovery and download guide with a catalog of 50 titles. Built with HTML, CSS, and vanilla JavaScript.

## Run locally

Open `index.html` in a modern browser. Search, category filters, game details, and Arabic/English switching run without a build step or database.

## Pages

- `index.html` — cinematic home page, latest additions, categories, and weekly editorial picks
- `all-games.html` — searchable 50-game library with category filters
- `categories.html` — category shortcuts and current catalog counts
- `trending.html` — editorial weekly picks; the site does not claim to measure live downloads
- `game-details.html?game=<id>` — game overview, requirements guidance, trailer search, and official publisher link

## Images and video

Each new title has an original local SVG fallback illustration in `images/games/`. The home hero plays a short Pexels gaming-setup background clip and keeps a local poster fallback if the remote video cannot load. Clip: https://www.pexels.com/video/stylish-gaming-setup-with-neon-lights-33074485/. Four game pages include verified YouTube trailer embeds; other pages provide a YouTube search link so viewers can select the publisher channel.

## Downloads and requirements

Download buttons lead to publisher websites or launchers. GAME BOX does not host game installers. Requirements and file sizes can change, so the detail page labels unstable or unverified values and directs players to the publisher's current page before installing.
