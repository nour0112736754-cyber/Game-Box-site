# Improvements in this package

- Changed the home-page section title to "Editor picks this week" because the list is curated, not a live download ranking.
- Added a four-second same-tab de-duplication window for accidental repeated clicks.
- Added Cloudflare Worker rate-limit bindings: 30 download-click requests/minute and 5 dashboard login attempts/minute per client key. The approximate limiter key is a SHA-256 digest of the client IP; raw IP addresses are not written to D1.
- Added request-size and password-length guards to the dashboard login endpoint.
- Changed login feedback for rate-limited attempts and made rate-limiter outages fail closed.
- Kept the homepage hero video autoplaying, muted, and looping as requested. The 33 MB MP4 loads on the homepage; the archive retains the source video.

## Deployment notes

- Wrangler 4.36.0 or newer is required for the rate-limit bindings.
- The two `namespace_id` values in `cloudflare/wrangler.toml` must be unique within the owner's Cloudflare account. Replace them if already in use.
- Keep `DASHBOARD_PASSWORD` as a Worker Secret. Do not add it to the ZIP or a website file.
- Rate limiting is approximate and local to a Cloudflare location; it reduces simple abuse but does not guarantee strict global limits.
- This archive contains source changes only. The deployed GitHub Pages site and Cloudflare Worker are not updated automatically.
