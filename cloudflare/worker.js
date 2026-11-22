const ALLOWED_ORIGINS = new Set([
  "https://nour0112736754-cyber.github.io",
  "http://localhost:8000",
  "http://127.0.0.1:8000"
]);
const SESSION_COOKIE = "gb_dashboard_session";
const SESSION_SECONDS = 8 * 60 * 60;
const encoder = new TextEncoder();

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

function securePage(body, extraHeaders = {}) {
  return new Response(body, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
      "X-Frame-Options": "DENY",
      "Content-Security-Policy": "default-src 'none'; connect-src 'self'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
      ...extraHeaders
    }
  });
}

function base64Url(bytes) {
  let binary = "";
  for (const byte of new Uint8Array(bytes)) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function signSession(expiry, password) {
  const key = await crypto.subtle.importKey(
    "raw", encoder.encode(password), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(expiry));
  return `${expiry}.${base64Url(signature)}`;
}

function constantTimeEqual(left, right) {
  const a = encoder.encode(left);
  const b = encoder.encode(right);
  let difference = a.length ^ b.length;
  const length = Math.max(a.length, b.length);
  for (let index = 0; index < length; index++) {
    difference |= (a[index] || 0) ^ (b[index] || 0);
  }
  return difference === 0;
}

function readCookie(request, name) {
  const cookieHeader = request.headers.get("Cookie") || "";
  const prefix = `${name}=`;
  const cookie = cookieHeader.split(";").map((part) => part.trim()).find((part) => part.startsWith(prefix));
  return cookie ? decodeURIComponent(cookie.slice(prefix.length)) : "";
}

async function hasDashboardSession(request, password) {
  const token = readCookie(request, SESSION_COOKIE);
  const [expiry, signature, extra] = token.split(".");
  if (!expiry || !signature || extra || !/^\d+$/.test(expiry) || Number(expiry) < Math.floor(Date.now() / 1000)) {
    return false;
  }
  const expected = await signSession(expiry, password);
  return constantTimeEqual(token, expected);
}

function loginPage(error = false) {
  return `<!doctype html><html lang="ar" dir="rtl" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark light"><title>دخول لوحة الإحصائيات · GAME BOX</title><style>
    :root{font-family:system-ui,"Segoe UI",sans-serif;color-scheme:dark;--bg:#080d1a;--panel:#151d35;--text:#f8fafc;--muted:#a8b3cf;--border:#344363;--accent:#22d3ee;--purple:#8b5cf6}*{box-sizing:border-box}body{margin:0;min-height:100vh;color:var(--text);background:radial-gradient(ellipse at 85% 8%,#38235d 0,transparent 34%),radial-gradient(ellipse at 8% 75%,#0b3040 0,transparent 35%),var(--bg)}:root[data-theme="light"]{color-scheme:light;--bg:#f3f6fc;--panel:#fff;--text:#172033;--muted:#58647b;--border:#c7d2e5;--accent:#007f98;--purple:#7045d8}header{height:74px;padding:12px max(22px,5vw);display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);background:color-mix(in srgb,var(--bg) 90%,transparent)}.brand{color:var(--text);text-decoration:none;font-weight:900;letter-spacing:.04em}.brand span{color:var(--accent)}.actions{display:flex;gap:9px}button,input{font:inherit}.small{border:1px solid var(--border);border-radius:10px;background:var(--panel);color:var(--text);padding:9px 12px;cursor:pointer}.wrap{width:min(680px,92%);margin:clamp(36px,9vh,90px) auto}.eyebrow{color:var(--accent);font-size:13px;font-weight:800;letter-spacing:.15em}h1{font-size:clamp(32px,6vw,48px);margin:.3em 0}.intro{color:var(--muted);line-height:1.8}.card{margin-top:28px;padding:clamp(22px,5vw,34px);border:1px solid var(--border);border-radius:20px;background:var(--panel);box-shadow:0 24px 70px #0002}.card h2{margin:0 0 8px}.card p{color:var(--muted);line-height:1.7}label{display:block;margin:20px 0 8px;font-weight:700}input{width:100%;padding:14px;border:1px solid var(--border);border-radius:12px;background:var(--bg);color:var(--text)}input:focus{outline:2px solid var(--accent);outline-offset:2px}.submit{width:100%;margin-top:15px;border:0;border-radius:12px;padding:14px;color:white;background:var(--purple);font-weight:800;cursor:pointer}.submit:hover{filter:brightness(1.1)}.error{min-height:24px;color:#fb7185}.error[hidden]{display:none}
    </style></head><body><header><a class="brand" href="https://nour0112736754-cyber.github.io/Game-Box-site/" aria-label="GAME BOX">GAME <span>BOX</span></a><div class="actions"><button class="small" id="language" type="button">English</button><button class="small" id="theme" type="button" aria-label="التبديل إلى الوضع الفاتح">☀</button></div></header><main class="wrap"><p class="eyebrow" data-en="PRIVATE ANALYTICS" data-ar="إحصائيات خاصة">إحصائيات خاصة</p><h1 data-en="Download statistics" data-ar="إحصائيات التنزيل">إحصائيات التنزيل</h1><p class="intro" data-en="A clear view of official download clicks, including a dated daily activity chart." data-ar="عرض واضح لنقرات أزرار التنزيل الرسمية، مع رسم يومي يوضح تواريخ النشاط.">عرض واضح لنقرات أزرار التنزيل الرسمية، مع رسم يومي يوضح تواريخ النشاط.</p><section class="card"><h2 data-en="Dashboard sign in" data-ar="دخول لوحة الإحصائيات">دخول لوحة الإحصائيات</h2><p data-en="Enter the dashboard password to view the report." data-ar="أدخل كلمة مرور لوحة الإحصائيات لعرض التقرير.">أدخل كلمة مرور لوحة الإحصائيات لعرض التقرير.</p><form method="post" action="/dashboard/login"><label for="password" data-en="Password" data-ar="كلمة المرور">كلمة المرور</label><input id="password" name="password" type="password" autocomplete="current-password" required><button class="submit" type="submit" data-en="Open dashboard" data-ar="فتح لوحة الإحصائيات">فتح لوحة الإحصائيات</button></form><p class="error"${error ? "" : " hidden"} data-en="The password was not accepted. Please try again." data-ar="كلمة المرور غير صحيحة. حاول مرة أخرى.">${error ? "كلمة المرور غير صحيحة. حاول مرة أخرى." : ""}</p></section></main><script>
    const root=document.documentElement,langButton=document.getElementById('language'),themeButton=document.getElementById('theme');function setLang(lang){root.lang=lang;root.dir=lang==='ar'?'rtl':'ltr';document.querySelectorAll('[data-en][data-ar]').forEach(el=>el.textContent=el.dataset[lang]);langButton.textContent=lang==='ar'?'English':'العربية';try{localStorage.setItem('gamebox-dashboard-language',lang)}catch{}}try{setLang(localStorage.getItem('gamebox-dashboard-language')==='en'?'en':'ar');const saved=localStorage.getItem('gamebox-dashboard-theme');if(saved==='light')root.dataset.theme='light'}catch{}function updateThemeButton(){const light=root.dataset.theme==='light';themeButton.textContent=light?'☾':'☀';themeButton.setAttribute('aria-label',root.lang==='ar'?(light?'التبديل إلى الوضع الداكن':'التبديل إلى الوضع الفاتح'):(light?'Switch to dark mode':'Switch to light mode'))}updateThemeButton();themeButton.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';try{localStorage.setItem('gamebox-dashboard-theme',root.dataset.theme)}catch{}updateThemeButton()});langButton.addEventListener('click',()=>setLang(root.lang==='ar'?'en':'ar'));
    </script></body></html>`;
}

function dashboardPage() {
  return `<!doctype html><html lang="ar" dir="rtl" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark light"><title>إحصائيات GAME BOX</title><style>
    :root{font-family:system-ui,"Segoe UI",sans-serif;color-scheme:dark;--bg:#080d1a;--panel:#151d35;--text:#f8fafc;--muted:#a8b3cf;--border:#344363;--accent:#22d3ee;--purple:#8b5cf6;--shadow:#0005}*{box-sizing:border-box}body{margin:0;min-height:100vh;color:var(--text);background:radial-gradient(ellipse at 85% 8%,#38235d 0,transparent 34%),radial-gradient(ellipse at 8% 75%,#0b3040 0,transparent 35%),var(--bg)}:root[data-theme="light"]{color-scheme:light;--bg:#f3f6fc;--panel:#fff;--text:#172033;--muted:#58647b;--border:#c7d2e5;--accent:#007f98;--purple:#7045d8;--shadow:#26365318}header{min-height:74px;padding:12px max(22px,5vw);display:flex;align-items:center;justify-content:space-between;gap:16px;border-bottom:1px solid var(--border);background:color-mix(in srgb,var(--bg) 90%,transparent)}.brand{color:var(--text);text-decoration:none;font-weight:900;letter-spacing:.04em}.brand span{color:var(--accent)}.actions{display:flex;align-items:center;gap:9px}.small,.refresh,.logout{border:1px solid var(--border);border-radius:10px;background:var(--panel);color:var(--text);padding:9px 12px;font:inherit;cursor:pointer}.wrap{width:min(1240px,92%);margin:auto;padding:48px 0 70px}.eyebrow{color:var(--accent);font-size:13px;font-weight:800;letter-spacing:.15em;margin:0 0 8px}h1{font-size:clamp(32px,5vw,48px);margin:0 0 8px}.intro{color:var(--muted);line-height:1.7}.toolbar{display:flex;flex-wrap:wrap;gap:10px;margin:22px 0}.refresh{background:var(--purple);border-color:var(--purple);color:white;font-weight:700}.status{min-height:24px;color:var(--muted)}.status.error{color:#fb7185}.metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin:20px 0}.card,.panel{min-width:0;padding:22px;border:1px solid var(--border);border-radius:17px;background:var(--panel);box-shadow:0 16px 34px var(--shadow)}.card-label{color:var(--muted)}.metric{display:block;margin-top:8px;color:var(--accent);font-size:clamp(28px,4vw,40px);font-weight:850;overflow-wrap:anywhere}.panel{margin-top:18px}.panel-head{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:18px}.panel-head h2{font-size:23px;margin:0}.panel-head p{margin:0 0 5px;color:var(--accent);font-size:13px;font-weight:800;letter-spacing:.12em}.today{max-width:100%;padding:9px 13px;border:1px solid color-mix(in srgb,var(--accent) 55%,transparent);border-radius:999px;background:color-mix(in srgb,var(--accent) 10%,var(--panel));font-size:14px;font-weight:750;text-align:center}.chart-scroll{overflow-x:auto}.chart{height:320px;min-width:680px}.chart svg{display:block;width:100%;height:100%;overflow:visible}.gridline{stroke:color-mix(in srgb,var(--muted) 24%,transparent);stroke-width:1}.bar{fill:var(--purple)}.bar.today-bar{fill:var(--accent)}.bar:hover{opacity:.78}.value{fill:var(--text);font:700 13px system-ui,sans-serif}.weekday{fill:var(--muted);font:12px system-ui,sans-serif}.date{fill:var(--text);font:700 13px system-ui,sans-serif}.ranking{display:grid;gap:13px}.row{display:grid;grid-template-columns:minmax(130px,250px) 1fr 70px;align-items:center;gap:14px}.game{font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.track{height:12px;border-radius:99px;background:color-mix(in srgb,var(--muted) 18%,transparent);overflow:hidden}.fill{height:100%;display:block;border-radius:inherit;background:linear-gradient(90deg,var(--purple),var(--accent))}.count{color:var(--muted);text-align:end;font-variant-numeric:tabular-nums}.empty{color:var(--muted)}[hidden]{display:none!important}@media(max-width:760px){.wrap{padding-top:32px}.metrics{grid-template-columns:repeat(2,minmax(0,1fr));gap:11px}.card,.panel{padding:17px}.panel-head{align-items:flex-start;flex-direction:column}.today{font-size:13px}.row{grid-template-columns:minmax(85px,145px) 1fr 50px;gap:9px;font-size:14px}}@media(max-width:380px){.metrics{grid-template-columns:1fr}}
    </style></head><body><header><a class="brand" href="https://nour0112736754-cyber.github.io/Game-Box-site/" aria-label="GAME BOX">GAME <span>BOX</span></a><div class="actions"><button class="small" id="language" type="button">English</button><button class="small" id="theme" type="button" aria-label="التبديل إلى الوضع الفاتح">☀</button><button class="logout" id="logout" type="button" data-en="Sign out" data-ar="تسجيل الخروج">تسجيل الخروج</button></div></header><main class="wrap"><p class="eyebrow" data-en="PRIVATE ANALYTICS" data-ar="إحصائيات خاصة">إحصائيات خاصة</p><h1 data-en="Download statistics" data-ar="إحصائيات التنزيل">إحصائيات التنزيل</h1><p class="intro" data-en="Official download button clicks. A click does not confirm that a download finished." data-ar="نقرات أزرار التنزيل الرسمية. النقر لا يؤكد اكتمال تنزيل اللعبة.">نقرات أزرار التنزيل الرسمية. النقر لا يؤكد اكتمال تنزيل اللعبة.</p><div class="toolbar"><button class="refresh" id="refresh" type="button" data-en="Refresh statistics" data-ar="تحديث الإحصائيات">تحديث الإحصائيات</button></div><p class="status" id="status" role="status" aria-live="polite" data-en="Loading statistics…" data-ar="جارٍ تحميل الإحصائيات…">جارٍ تحميل الإحصائيات…</p><section class="metrics"><article class="card"><span class="card-label" data-en="Total clicks" data-ar="إجمالي النقرات">إجمالي النقرات</span><strong class="metric" id="total">—</strong></article><article class="card"><span class="card-label" data-en="Clicks today" data-ar="نقرات اليوم">نقرات اليوم</span><strong class="metric" id="todayCount">—</strong></article><article class="card"><span class="card-label" data-en="Games with clicks" data-ar="ألعاب عليها نقرات">ألعاب عليها نقرات</span><strong class="metric" id="active">—</strong></article><article class="card"><span class="card-label" data-en="Most clicked" data-ar="الأكثر نقرًا">الأكثر نقرًا</span><strong class="metric" id="leader">—</strong></article></section><section class="panel"><div class="panel-head"><div><p data-en="LAST SEVEN DAYS" data-ar="آخر سبعة أيام">آخر سبعة أيام</p><h2 data-en="Daily click activity" data-ar="النقرات اليومية">النقرات اليومية</h2></div><div class="today" id="todaySummary">—</div></div><div class="chart-scroll"><div class="chart" id="chart"></div></div></section><section class="panel"><div class="panel-head"><div><p data-en="GAME RANKING" data-ar="ترتيب الألعاب">ترتيب الألعاب</p><h2 data-en="Most clicked games" data-ar="الألعاب الأكثر نقرًا">الألعاب الأكثر نقرًا</h2></div></div><div class="ranking" id="ranking"></div></section></main><script>
    const root = document.documentElement;
    const langButton = document.getElementById("language");
    const themeButton = document.getElementById("theme");
    const statusBox = document.getElementById("status");
    let report = null;
    const isAr = () => root.lang === "ar";
    const fmt = () => new Intl.NumberFormat(isAr() ? "ar-EG" : "en-US");
    function tx(en, ar) { return isAr() ? ar : en; }
    function setLang(lang) {
      root.lang = lang;
      root.dir = lang === "ar" ? "rtl" : "ltr";
      document.querySelectorAll("[data-en][data-ar]").forEach((el) => { el.textContent = el.dataset[lang]; });
      langButton.textContent = lang === "ar" ? "English" : "العربية";
      if (report) render(report);
      try { localStorage.setItem("gamebox-dashboard-language", lang); } catch (_) {}
    }
    try {
      setLang(localStorage.getItem("gamebox-dashboard-language") === "en" ? "en" : "ar");
      if (localStorage.getItem("gamebox-dashboard-theme") === "light") root.dataset.theme = "light";
    } catch (_) {}
    function updateThemeButton() {
      const light = root.dataset.theme === "light";
      themeButton.textContent = light ? "☾" : "☀";
      themeButton.setAttribute("aria-label", isAr()
        ? (light ? "التبديل إلى الوضع الداكن" : "التبديل إلى الوضع الفاتح")
        : (light ? "Switch to dark mode" : "Switch to light mode"));
    }
    updateThemeButton();
    themeButton.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
      try { localStorage.setItem("gamebox-dashboard-theme", root.dataset.theme); } catch (_) {}
      updateThemeButton();
    });
    langButton.addEventListener("click", () => setLang(isAr() ? "en" : "ar"));
    function pretty(id) {
      return String(id || "").split("-").map((word) => word.length <= 2 ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)).join(" ");
    }
    function setStatus(message, error) {
      statusBox.textContent = message;
      statusBox.classList.toggle("error", Boolean(error));
    }
    function render(data) {
      report = data;
      const number = fmt();
      document.getElementById("total").textContent = number.format(data.totalClicks);
      document.getElementById("todayCount").textContent = number.format(data.todayClicks);
      document.getElementById("active").textContent = number.format(data.activeGames);
      document.getElementById("leader").textContent = data.ranking.length ? pretty(data.ranking[0].gameId) : tx("No data yet", "لا توجد بيانات بعد");
      const date = new Date(data.today + "T00:00:00Z");
      const fullDate = new Intl.DateTimeFormat(isAr() ? "ar-EG" : "en-US", {
        weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
      }).format(date);
      document.getElementById("todaySummary").textContent = isAr()
        ? "اليوم · " + fullDate + " · " + number.format(data.todayClicks) + " نقرة · UTC"
        : "Today · " + fullDate + " · " + number.format(data.todayClicks) + " clicks · UTC";
      const points = data.daily;
      const max = Math.max(1, ...points.map((point) => point.clicks));
      const width = 760, height = 300, left = 34, right = 16, top = 24, bottom = 62;
      const plotHeight = height - top - bottom;
      const plotWidth = width - left - right;
      const slot = plotWidth / Math.max(points.length, 1);
      const barWidth = Math.min(50, slot * 0.54);
      const bars = points.map((point, index) => {
        const dayDate = new Date(point.day + "T00:00:00Z");
        const x = left + index * slot + (slot - barWidth) / 2;
        const barHeight = point.clicks ? (point.clicks / max) * plotHeight : 2;
        const y = top + plotHeight - barHeight;
        const isToday = point.day === data.today;
        const locale = isAr() ? "ar-EG" : "en-US";
        const weekday = new Intl.DateTimeFormat(locale, { weekday: "short", timeZone: "UTC" }).format(dayDate);
        const shortDate = new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short", timeZone: "UTC" }).format(dayDate);
        const exactDate = new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(dayDate);
        const title = exactDate + ": " + number.format(point.clicks) + " " + tx("clicks", "نقرة") + (isToday ? " · " + tx("Today", "اليوم") : "");
        return '<g><rect class="bar' + (isToday ? " today-bar" : "") + '" x="' + x + '" y="' + y + '" width="' + barWidth + '" height="' + barHeight + '" rx="7"><title>' + title + '</title></rect>'
          + '<text class="value" x="' + (x + barWidth / 2) + '" y="' + Math.max(16, y - 8) + '" text-anchor="middle">' + number.format(point.clicks) + '</text>'
          + '<text class="weekday" x="' + (x + barWidth / 2) + '" y="' + (height - 31) + '" text-anchor="middle">' + weekday + '</text>'
          + '<text class="date" x="' + (x + barWidth / 2) + '" y="' + (height - 10) + '" text-anchor="middle">' + shortDate + '</text></g>';
      }).join("");
      const grid = [0, 1, 2, 3].map((step) => {
        const y = top + (plotHeight * step) / 3;
        return '<line class="gridline" x1="' + left + '" y1="' + y + '" x2="' + (width - right) + '" y2="' + y + '"/>';
      }).join("");
      document.getElementById("chart").innerHTML = '<svg viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="'
        + tx("Daily download clicks for the last seven days", "نقرات التنزيل اليومية خلال آخر سبعة أيام") + '">' + grid + bars + '</svg>';
      const ranking = data.ranking;
      const maxRank = Math.max(1, ...ranking.map((item) => item.clicks));
      document.getElementById("ranking").innerHTML = ranking.length
        ? ranking.map((item, index) => '<div class="row"><span class="game" title="' + pretty(item.gameId) + '">' + (index + 1) + ". " + pretty(item.gameId)
          + '</span><span class="track"><span class="fill" style="width:' + Math.max(2, (item.clicks / maxRank) * 100) + '%"></span></span><span class="count">'
          + number.format(item.clicks) + '</span></div>').join("")
        : '<p class="empty">' + tx("No clicks have been recorded yet.", "لا توجد نقرات مسجلة حتى الآن.") + '</p>';
    }
    async function load() {
      const button = document.getElementById("refresh");
      button.disabled = true;
      setStatus(tx("Loading statistics…", "جارٍ تحميل الإحصائيات…"), false);
      try {
        const response = await fetch("/dashboard/data", { credentials: "same-origin", cache: "no-store" });
        if (response.status === 401) { location.replace("/dashboard"); return; }
        if (!response.ok) throw new Error("Request failed");
        const data = await response.json();
        render(data);
        setStatus(tx("Statistics updated.", "تم تحديث الإحصائيات."), false);
      } catch (_) {
        setStatus(tx("Could not load statistics. Refresh and try again.", "تعذر تحميل الإحصائيات. حدّث الصفحة وحاول مرة أخرى."), true);
      } finally { button.disabled = false; }
    }
    document.getElementById("refresh").addEventListener("click", load);
    document.getElementById("logout").addEventListener("click", async () => {
      await fetch("/dashboard/logout", { method: "POST", credentials: "same-origin" });
      location.replace("/dashboard");
    });
    load();</script></body></html>`;
}

function redirect(request, path, headers = {}) {
  return new Response(null, { status: 303, headers: { Location: new URL(path, request.url).href, ...headers } });
}

async function dashboardData(env) {
  const totals = await env.DB.prepare(
    "SELECT COUNT(*) AS total_clicks, COUNT(DISTINCT game_id) AS active_games FROM game_download_clicks"
  ).first();
  const dailyRows = await env.DB.prepare(
    "SELECT click_day AS day, COUNT(*) AS clicks FROM game_download_clicks WHERE click_day >= date('now', '-6 days') GROUP BY click_day ORDER BY click_day"
  ).all();
  const rankingRows = await env.DB.prepare(
    "SELECT game_id, COUNT(*) AS clicks FROM game_download_clicks GROUP BY game_id ORDER BY clicks DESC, game_id ASC LIMIT 10"
  ).all();
  const today = new Date().toISOString().slice(0, 10);
  const dailyMap = new Map((dailyRows.results || []).map((row) => [row.day, Number(row.clicks) || 0]));
  const daily = [];
  const todayUtc = new Date(`${today}T00:00:00Z`);
  for (let offset = 6; offset >= 0; offset--) {
    const date = new Date(todayUtc);
    date.setUTCDate(date.getUTCDate() - offset);
    const day = date.toISOString().slice(0, 10);
    daily.push({ day, clicks: dailyMap.get(day) || 0 });
  }
  const todayClicks = dailyMap.get(today) || 0;
  return {
    today,
    totalClicks: Number(totals?.total_clicks) || 0,
    activeGames: Number(totals?.active_games) || 0,
    todayClicks,
    daily,
    ranking: (rankingRows.results || []).map((row) => ({ gameId: row.game_id, clicks: Number(row.clicks) || 0 }))
  };
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

    if (url.pathname === "/dashboard" || url.pathname === "/dashboard/") {
      if (!env.DASHBOARD_PASSWORD) return securePage("Dashboard password is not configured. Set the DASHBOARD_PASSWORD Worker secret.", { "Content-Type": "text/plain; charset=utf-8" });
      if (request.method !== "GET") return new Response("Method not allowed", { status: 405 });
      const authenticated = await hasDashboardSession(request, env.DASHBOARD_PASSWORD);
      return securePage(authenticated ? dashboardPage() : loginPage());
    }
    if (url.pathname === "/dashboard/login" && request.method === "POST") {
      if (!env.DASHBOARD_PASSWORD) return new Response("Dashboard password is not configured.", { status: 503 });
      let form;
      try { form = await request.formData(); }
      catch { return securePage(loginPage(true), { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" }); }
      const submitted = String(form.get("password") || "");
      if (!constantTimeEqual(submitted, env.DASHBOARD_PASSWORD)) {
        return securePage(loginPage(true), { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
      }
      const expiry = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
      const token = await signSession(expiry, env.DASHBOARD_PASSWORD);
      return redirect(request, "/dashboard", {
        "Set-Cookie": `${SESSION_COOKIE}=${encodeURIComponent(token)}; Max-Age=${SESSION_SECONDS}; Path=/; HttpOnly; Secure; SameSite=Strict`
      });
    }
    if (url.pathname === "/dashboard/logout" && request.method === "POST") {
      return redirect(request, "/dashboard", {
        "Set-Cookie": `${SESSION_COOKIE}=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict`
      });
    }
    if (url.pathname === "/dashboard/data" && request.method === "GET") {
      if (!env.DASHBOARD_PASSWORD || !(await hasDashboardSession(request, env.DASHBOARD_PASSWORD))) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
        });
      }
      try {
        return new Response(JSON.stringify(await dashboardData(env)), {
          headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
        });
      } catch {
        return new Response(JSON.stringify({ error: "Analytics temporarily unavailable" }), {
          status: 503,
          headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }
        });
      }
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
