const numberFormat = new Intl.NumberFormat("ar-EG");

function getGameName(id) {
    const game = GAMES.find((item) => item.id === id);
    return game ? (game.titleAr || game.title) : id;
}

function setStatus(message, isError = false) {
    const status = document.getElementById("dashboardStatus");
    status.textContent = message;
    status.classList.toggle("is-error", isError);
}

function showLogin(message, isError = false) {
    document.getElementById("dashboardLogin").hidden = false;
    document.getElementById("dashboardContent").hidden = true;
    document.getElementById("dashboardLoginForm").hidden = false;
    document.getElementById("dashboardNewPasswordForm").hidden = true;
    document.getElementById("dashboardResetButton").hidden = false;
    setStatus(message, isError);
}

function showPasswordRecovery() {
    document.getElementById("dashboardLogin").hidden = false;
    document.getElementById("dashboardContent").hidden = true;
    document.getElementById("dashboardLoginForm").hidden = true;
    document.getElementById("dashboardResetButton").hidden = true;
    document.getElementById("dashboardNewPasswordForm").hidden = false;
    setStatus("اكتب كلمة مرور جديدة لا تقل عن 8 أحرف.");
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
        const label = new Intl.DateTimeFormat("ar-EG", {
            day: "numeric",
            month: "short",
            timeZone: "UTC"
        }).format(date);

        return `<g><rect class="chart-bar" x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="7"><title>${label}: ${numberFormat.format(value)} نقرة</title></rect><text class="chart-value" x="${x + barWidth / 2}" y="${Math.max(14, y - 7)}" text-anchor="middle">${numberFormat.format(value)}</text><text class="chart-label" x="${x + barWidth / 2}" y="${height - 10}" text-anchor="middle">${label}</text></g>`;
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
    document.getElementById("weekClicks").textContent = numberFormat.format(rows.reduce((sum, row) => sum + Number(row.clicks_7d || 0), 0));

    const leader = active[0];
    document.getElementById("topGame").textContent = leader ? getGameName(leader.game_id) : "لا توجد بيانات بعد";
    document.getElementById("topGameClicks").textContent = leader ? `${numberFormat.format(leader.total_clicks)} نقرة` : "تظهر بعد أول نقرة تنزيل";

    host.innerHTML = active.length ? active.map((row, index) => {
        const count = Number(row.total_clicks) || 0;
        const width = Math.max(2, (count / max) * 100);
        return `<div class="ranking-row"><span class="ranking-name" title="${getGameName(row.game_id)}">${index + 1}. ${getGameName(row.game_id)}</span><span class="ranking-track"><span class="ranking-fill" style="width:${width}%"></span></span><span class="ranking-count">${numberFormat.format(count)}</span></div>`;
    }).join("") : '<p class="dashboard-footnote">لا توجد نقرات مسجلة حتى الآن.</p>';
}

async function loadDashboard(session) {
    if (!session?.user?.email) {
        showLogin("سجّل الدخول بالبريد الإلكتروني المعتمد لعرض الإحصائيات.");
        return;
    }

    setStatus("جارٍ التحقق من صلاحية الحساب وتحميل الإحصائيات…");
    const [statsResult, dailyResult] = await Promise.all([
        window.gameboxSupabase.rpc("get_download_dashboard_stats"),
        window.gameboxSupabase.rpc("get_download_daily_stats")
    ]);

    if (statsResult.error || dailyResult.error) {
        await window.gameboxSupabase.auth.signOut();
        showLogin("هذا البريد غير مصرح له بلوحة التحكم، أو لم تُحدّث قاعدة البيانات بعد.", true);
        return;
    }

    renderRanking(statsResult.data || []);
    renderDailyChart(dailyResult.data || []);
    document.getElementById("dashboardLogin").hidden = true;
    document.getElementById("dashboardContent").hidden = false;
    setStatus("تم تحديث الإحصائيات من قاعدة البيانات.");
}

document.addEventListener("DOMContentLoaded", async () => {
    const client = window.gameboxSupabase;
    const form = document.getElementById("dashboardLoginForm");
    const button = document.getElementById("dashboardLoginButton");

    if (!client) {
        showLogin("تعذر الاتصال بقاعدة البيانات. تأكد من إعداد Supabase في الموقع.", true);
        return;
    }

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("dashboardEmail").value.trim().toLowerCase();
        if (!email) return;

        button.disabled = true;
        const password = document.getElementById("dashboardPassword").value;
        setStatus("جارٍ التحقق من بيانات الدخول…");
        const { error } = await client.auth.signInWithPassword({ email, password });
        button.disabled = false;

        if (error) {
            setStatus("تعذر تسجيل الدخول. تحقق من البريد وكلمة المرور، أو استخدم رابط إعادة التعيين.", true);
            return;
        }
        const { data } = await client.auth.getSession();
        if (data.session) await loadDashboard(data.session);
    });

    document.getElementById("dashboardResetButton").addEventListener("click", async () => {
        const email = document.getElementById("dashboardEmail").value.trim().toLowerCase();
        if (!email) {
            setStatus("اكتب بريد حساب المشرف أولًا لإرسال رابط إعادة التعيين.", true);
            document.getElementById("dashboardEmail").focus();
            return;
        }
        const resetButton = document.getElementById("dashboardResetButton");
        resetButton.disabled = true;
        const redirectTo = new URL("dashboard.html", window.location.href).href;
        const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo });
        resetButton.disabled = false;
        if (error) {
            setStatus("تعذر إرسال رابط إعادة التعيين. راجع إعدادات البريد في Supabase.", true);
            return;
        }
        setStatus("أُرسل رابط إعادة التعيين إلى بريد الحساب. افتحه ثم عيّن كلمة المرور الجديدة هنا.");
    });

    document.getElementById("dashboardNewPasswordForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        const password = document.getElementById("dashboardNewPassword").value;
        const saveButton = document.getElementById("dashboardSavePasswordButton");
        saveButton.disabled = true;
        const { data, error } = await client.auth.updateUser({ password });
        saveButton.disabled = false;
        if (error) {
            setStatus("تعذر حفظ كلمة المرور. تأكد أنها 8 أحرف على الأقل ثم أعد المحاولة.", true);
            return;
        }
        window.history.replaceState({}, document.title, window.location.pathname);
        await loadDashboard(data.user ? (await client.auth.getSession()).data.session : null);
    });

    document.getElementById("dashboardSignOut").addEventListener("click", async () => {
        await client.auth.signOut();
        showLogin("تم تسجيل الخروج من لوحة التحكم.");
    });

    const { data, error } = await client.auth.getSession();
    if (error) {
        showLogin("تعذر التحقق من الجلسة. أعد تحميل الصفحة وحاول مجددًا.", true);
        return;
    }
    if (data.session && window.location.hash.includes("type=recovery")) {
        showPasswordRecovery();
    } else if (data.session) {
        await loadDashboard(data.session);
    }

    client.auth.onAuthStateChange((event, session) => {
        if (event === "PASSWORD_RECOVERY") {
            showPasswordRecovery();
        } else if (event === "SIGNED_IN" && session) {
            window.setTimeout(() => loadDashboard(session), 0);
        } else if (event === "SIGNED_OUT") {
            showLogin("سجّل الدخول بالبريد الإلكتروني المعتمد لعرض الإحصائيات.");
        }
    });
});
