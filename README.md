# GAME BOX

A responsive static game catalogue with 20 games, built with HTML, CSS, and vanilla JavaScript.

## Run locally

Open `index.html` in a modern browser. The catalogue, search, category filters, and details pages work without a build step.

## Pages

- `index.html` — home page and search
- `all-games.html` — searchable, filterable catalogue
- `categories.html` — category shortcuts with game counts
- `trending.html` — featured titles
- `game-details.html?game=<id>` — game information and official publisher/store link

Each game card uses a matching wide promotional artwork across the home page, all-games list, trending page, and game details page. Local illustrated SVG covers in `images/games/` act as fallbacks if a remote artwork host is unavailable. Each game details page lists CPU, RAM, storage, operating system, graphics, and download-size information. Values that change with updates are identified as variable; where the publisher does not publish a stable value, the page says to check the official launcher or listing instead of guessing.

Download buttons open official publisher download pages or publisher launchers. GAME BOX does not host installers. Availability, age ratings, and system requirements should be checked on the official destination before installing.
