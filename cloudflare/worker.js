const ALLOWED_ORIGINS = new Set([
  "https://nour0112736754-cyber.github.io",
  "http://localhost:8000",
  "http://127.0.0.1:8000"
]);

function corsHeaders(origin) {
  const allowedOrigin = ALLOWED_ORIGINS.has(origin) ? origin : "null";
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(origin), "Content-Type": "application/json; charset=utf-8" }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method === "GET" && url.pathname === "/health") {
      return json({ ok: true, service: "GAME BOX analytics" }, 200, origin);
    }
    if (request.method !== "POST" || url.pathname !== "/api/download") {
      return json({ error: "Not found" }, 404, origin);
    }
    if (!ALLOWED_ORIGINS.has(origin)) {
      return json({ error: "Origin not allowed" }, 403, origin);
    }
    let payload;
    try { payload = await request.json(); }
    catch { return json({ error: "Invalid JSON" }, 400, origin); }

    const gameId = typeof payload?.gameId === "string" ? payload.gameId : "";
    if (!/^[a-z0-9-]{1,80}$/.test(gameId)) {
      return json({ error: "Invalid game id" }, 400, origin);
    }
    try {
      await env.DB.prepare(
        "INSERT INTO game_download_clicks (game_id, click_day) VALUES (?, date('now'))"
      ).bind(gameId).run();
      return json({ ok: true }, 201, origin);
    } catch {
      return json({ error: "Analytics temporarily unavailable" }, 503, origin);
    }
  }
};