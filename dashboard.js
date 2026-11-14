const numberFormat = new Intl.NumberFormat("ar-EG");
const getGameName = (id) => {
    const game = GAMES.find((item) => item.id === id);
    return game ? (game.titleAr || game.title) : id;
};

function setStatus(message, isError = false) {
    const status = document.getElementById("dashboardStatus");
    status.textContent = message;
    status.classList.toggle("is-error", isError);
}

function renderDailyChart(rows) {
    const host = document.getElementById("dailyChart");
    const values = rows || [];
    const max = Math.max(1, ...values.map((row) => Number(row.clicks) || 0));
    const width = 720;
    const height = 250;
    const left = 30;
    const right = 16;
    const top = 22;
    const bottom = 38;
    const chartHeight = height - top - bottom;
    const chartWidth = width - left - right;
    const slot = chartWidth / Math.max(values.length, 1);
    const barWidth = Math.min(44, slot * 0.55);
    const bars = values.map((row, index) => {
        const value = Number(row.clicks) || 0;
        const barHeight = value ? (value / max) * chartHeight : 2;
        const x = left + index * slot + (slot - barWidth) / 2;
        const y = top + chartHeight - barHeight;
        const date = new Date(`${row.day}T00:00:00Z`);
        const label = new Intl.DateTimeFormat("ar-EG", { day: "numeric", month: "short", timeZone: "UTC" }).format(date);
        return `<g><line class="chart-gridline" x1="${left}" y1="${top + index * 0}" x2="${width - right}" y2="${top + index * 0}" opacity="0"/><rect class="chart-bar" x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="7"><title>${label}: ${numberFormat.format(value)} نقرة</title></rect><text class="chart-value" x="${x + barWidth / 2}" y="${Math.max(14, y - 7)}" text-anchor="middle">${numberFormat.format(value)}</text><text class="chart-label" x="${x + barWidth / 2}" y="${height - 10}" text-anchor="middle">${label}</text></g>`;
    }).join("");
    const grid = [0, 1, 2, 3].map((step) => {
        const y = top + (chartHeight / 3) * step;
        return `<line class="chart-gridline" x1="${left}" y1="${y}" x2="${width - right}" y2="${y}"/>`;
    }).join("");
    host.innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="النقرات المسجلة خلال آخر سبعة أيام">${grid}${bars}</svg>`;
}

function renderRanking(rows) {
    const host = document.getElementById("gameRanking");
    const active = rows.filter((row) => Number(row.total_clicks) > 0);
    const max = Math.max(1, ...active.map((row) => Number(row.total_clicks)));
    document.getElementById("activeGames").textContent = numberFormat.format(active.length);
    document.getElementById("gameCountLabel").textContent = `${numberFormat.format(rows.length)} لعبة`;
    document.getElementById("totalClicks").textContent = numberFormat.format(rows.reduce((sum, row) => sum + Number(row.total_clicks || 0), 0));
    document.getElementById("todayClicks").textContent = numberFormat.format(rows.reduce((sum, row) => sum + Number(row.clicks_today || 0), 0));

    const leader = active[0];
    document.getElementById("topGame").textContent = leader ? getGameName(leader.game_id) : "لا توجد بيانات بعد";
    document.getElementById("topGameClicks").textContent = leader ? `${numberFormat.format(leader.total_clicks)} نقرة` : "تظهر بعد أول نقرة تنزيل";

    host.innerHTML = active.length ? active.map((row, index) => {
        const count = Number(row.total_clicks) || 0;
        const width = Math.max(2, (count / max) * 100);
        return `<div class="ranking-row"><span class="ranking-name" title="${getGameName(row.game_id)}">${index + 1}. ${getGameName(row.game_id)}</span><span class="ranking-track"><span class="ranking-fill" style="width:${width}%"></span></span><span class="ranking-count">${numberFormat.format(count)}</span></div>`;
    }).join("") : '<p class="dashboard-footnote">لا توجد نقرات مسجلة حتى الآن.</p>';
}

document.addEventListener("DOMContentLoaded", async () => {
    if (!window.gameboxSupabase) {
        setStatus("تعذر الاتصال بقاعدة البيانات. تأكد من إعداد Supabase في الموقع.", true);
        return;
    }

    const [statsResult, dailyResult] = await Promise.all([
        window.gameboxSupabase.rpc("get_download_dashboard_stats"),
        window.gameboxSupabase.rpc("get_download_daily_stats")
    ]);
    if (statsResult.error || dailyResult.error) {
        setStatus("لوحة الإحصائيات جاهزة، لكن يلزم تشغيل ملف supabase/schema.sql في SQL Editor أولًا.", true);
        return;
    }

    renderRanking(statsResult.data || []);
    renderDailyChart(dailyResult.data || []);
    setStatus("تم تحديث الإحصائيات من قاعدة البيانات.");
});
