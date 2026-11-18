const isDashboardArabic = () => localStorage.getItem("gamebox-language") !== "en";
const dashboardText = (english, arabic) => isDashboardArabic() ? arabic : english;
const numberFormatForDashboard = () => new Intl.NumberFormat(isDashboardArabic() ? "ar-EG" : "en-US");
const DASHBOARD_MESSAGES = {
    "سجّل الدخول لعرض الإحصائيات.": "Sign in to view statistics.",
    "استخدم البريد الإلكتروني المعتمد لعرض الإحصائيات.": "Sign in with the approved email to view statistics.",
    "اكتب كلمة مرور جديدة لا تقل عن 8 أحرف.": "Enter a new password with at least 8 characters.",
    "سجّل الدخول بالبريد الإلكتروني المعتمد لعرض الإحصائيات.": "Sign in with the approved email to view statistics.",
    "جارٍ التحقق من بيانات الدخول…": "Checking your sign-in details…",
    "تعذر تسجيل الدخول. تحقق من البريد وكلمة المرور، أو استخدم رابط إعادة التعيين.": "Sign-in failed. Check your email and password, or use the reset link.",
    "اكتب بريد حساب المشرف أولًا لإرسال رابط إعادة التعيين.": "Enter the administrator email first to receive a reset link.",
    "تعذر إرسال رابط إعادة التعيين. راجع إعدادات البريد في Supabase.": "Could not send the reset link. Check email settings in Supabase.",
    "خدمة البريد الافتراضية في Supabase محدودة؛ انتظر قليلًا ثم أعد المحاولة، أو أعدد SMTP مخصصًا لإرسال الرسائل إلى أي بريد.": "Supabase's default email service is limited. Wait before retrying, or configure custom SMTP to send to any address.",
    "أُرسل رابط إعادة التعيين إلى بريد الحساب. افتحه ثم عيّن كلمة المرور الجديدة هنا.": "A reset link was sent to the account email. Open it, then set the new password here.",
    "تعذر حفظ كلمة المرور. تأكد أنها 8 أحرف على الأقل ثم أعد المحاولة.": "Could not save the password. Make sure it has at least 8 characters and try again.",
    "تم تسجيل الخروج من لوحة التحكم.": "You have signed out of the dashboard.",
    "تعذر التحقق من الجلسة. أعد تحميل الصفحة وحاول مجددًا.": "Could not verify the session. Reload the page and try again.",
    "انتهت صلاحية رابط إعادة التعيين أو استُخدم من قبل. اطلب رابطًا جديدًا.": "The reset link has expired or was already used. Request a new link.",
    "انتهت صلاحية رابط إعادة التعيين أو استُخدم من قبل. اطلب رابطًا جديدًا.": "The reset link has expired or was already used. Request a new link.",
    "هذا البريد غير مصرح له بلوحة التحكم، أو لم تُحدّث قاعدة البيانات بعد.": "This email is not authorized for the dashboard, or the database setup is incomplete.",
    "تم تحديث الإحصائيات من قاعدة البيانات.": "Statistics have been refreshed from the database.",
    "تعذر الاتصال بقاعدة البيانات. تأكد من إعداد Supabase في الموقع.": "Could not connect to the database. Check the Supabase site configuration.",
    "جارٍ التحقق من صلاحية الحساب وتحميل الإحصائيات…": "Verifying account access and loading statistics…"
};
let cachedStatsRows = [];
let cachedDailyRows = [];

function getGameName(id) {
    const game = GAMES.find((item) => item.id === id);
    return game ? (isDashboardArabic() ? (game.titleAr || game.title) : game.title) : id;
}

function setStatus(message, isError = false) {
    const status = document.getElementById("dashboardStatus");
    const englishMessage = DASHBOARD_MESSAGES[message] || message;
    status.dataset.en = englishMessage;
    status.dataset.ar = message;
    status.textContent = dashboardText(englishMessage, message);
    status.classList.toggle("is-error", isError);
}

function setResetErrorStatus(error) {
    const code = String(error?.code || "").toLowerCase();
    const detail = String(error?.message || error?.code || "").trim().slice(0, 180);
    const isRateLimited = Number(error?.status) === 429
        || code.includes("over_email_send_rate_limit")
        || code.includes("email_rate_limit_exceeded")
        || /email rate limit exceeded|too many requests/i.test(detail);
    const isUnauthorizedAddress = code.includes("email_address_not_authorized")
        || /email address not authorized/i.test(detail);

    if (isRateLimited || isUnauthorizedAddress) {
        setStatus("خدمة البريد الافتراضية في Supabase محدودة؛ انتظر قليلًا ثم أعد المحاولة، أو أعدد SMTP مخصصًا لإرسال الرسائل إلى أي بريد.", true);
        return;
    }

    const explanation = detail
        ? `تعذر إرسال رابط إعادة التعيين. رسالة Supabase: ${detail}`
        : "تعذر إرسال رابط إعادة التعيين. راجع إعدادات SMTP في Supabase.";
    const englishExplanation = detail
        ? `Could not send the reset link. Supabase says: ${detail}`
        : "Could not send the reset link. Check SMTP settings in Supabase.";
    const status = document.getElementById("dashboardStatus");
    status.dataset.en = englishExplanation;
    status.dataset.ar = explanation;
    status.textContent = dashboardText(englishExplanation, explanation);
    status.classList.add("is-error");
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
        const label = new Intl.DateTimeFormat(isDashboardArabic() ? "ar-EG" : "en-US", {
            day: "numeric",
            month: "short",
            timeZone: "UTC"
        }).format(date);

        const countLabel = dashboardText("clicks", "نقرة");
        return `<g><rect class="chart-bar" x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="7"><title>${label}: ${numberFormatForDashboard().format(value)} ${countLabel}</title></rect><text class="chart-value" x="${x + barWidth / 2}" y="${Math.max(14, y - 7)}" text-anchor="middle">${numberFormatForDashboard().format(value)}</text><text class="chart-label" x="${x + barWidth / 2}" y="${height - 10}" text-anchor="middle">${label}</text></g>`;
    }).join("");
    const grid = [0, 1, 2, 3].map((step) => {
        const y = top + (chartHeight / 3) * step;
        return `<line class="chart-gridline" x1="${left}" y1="${y}" x2="${width - right}" y2="${y}"/>`;
    }).join("");

    host.innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${dashboardText("Clicks recorded during the last seven days", "النقرات المسجلة خلال آخر سبعة أيام")}">${grid}${bars}</svg>`;
}

function renderRanking(rows) {
    const host = document.getElementById("gameRanking");
    const active = rows.filter((row) => Number(row.total_clicks) > 0);
    const max = Math.max(1, ...active.map((row) => Number(row.total_clicks)));
    const format = numberFormatForDashboard();
    document.getElementById("activeGames").textContent = format.format(active.length);
    document.getElementById("gameCountLabel").textContent = `${format.format(rows.length)} ${dashboardText("games", "لعبة")}`;
    document.getElementById("totalClicks").textContent = format.format(rows.reduce((sum, row) => sum + Number(row.total_clicks || 0), 0));
    document.getElementById("todayClicks").textContent = format.format(rows.reduce((sum, row) => sum + Number(row.clicks_today || 0), 0));
    document.getElementById("weekClicks").textContent = format.format(rows.reduce((sum, row) => sum + Number(row.clicks_7d || 0), 0));

    const leader = active[0];
    document.getElementById("topGame").textContent = leader ? getGameName(leader.game_id) : dashboardText("No data yet", "لا توجد بيانات بعد");
    document.getElementById("topGameClicks").textContent = leader ? `${format.format(leader.total_clicks)} ${dashboardText("clicks", "نقرة")}` : dashboardText("Appears after the first download click", "تظهر بعد أول نقرة تنزيل");

    host.innerHTML = active.length ? active.map((row, index) => {
        const count = Number(row.total_clicks) || 0;
        const width = Math.max(2, (count / max) * 100);
        return `<div class="ranking-row"><span class="ranking-name" title="${getGameName(row.game_id)}">${index + 1}. ${getGameName(row.game_id)}</span><span class="ranking-track"><span class="ranking-fill" style="width:${width}%"></span></span><span class="ranking-count">${format.format(count)}</span></div>`;
    }).join("") : `<p class="dashboard-footnote">${dashboardText("No clicks have been recorded yet.", "لا توجد نقرات مسجلة حتى الآن.")}</p>`;
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

    cachedStatsRows = statsResult.data || [];
    cachedDailyRows = dailyResult.data || [];
    renderRanking(cachedStatsRows);
    renderDailyChart(cachedDailyRows);
    document.getElementById("dashboardLogin").hidden = true;
    document.getElementById("dashboardContent").hidden = false;
    setStatus("تم تحديث الإحصائيات من قاعدة البيانات.");
}

document.addEventListener("DOMContentLoaded", async () => {
    const client = window.gameboxSupabase;
    const form = document.getElementById("dashboardLoginForm");
    const button = document.getElementById("dashboardLoginButton");

    document.getElementById("languageToggle")?.addEventListener("click", () => {
        window.setTimeout(() => {
            if (cachedStatsRows.length) renderRanking(cachedStatsRows);
            if (cachedDailyRows.length) renderDailyChart(cachedDailyRows);
        }, 0);
    });

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
        try {
            const redirectTo = new URL("dashboard.html", window.location.href).href;
            const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo });
            if (error) {
                setResetErrorStatus(error);
                return;
            }
            setStatus("أُرسل رابط إعادة التعيين إلى بريد الحساب. افتحه ثم عيّن كلمة المرور الجديدة هنا.");
        } catch (error) {
            setResetErrorStatus(error);
        } finally {
            resetButton.disabled = false;
        }
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
    const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const queryParams = new URLSearchParams(window.location.search);
    const isRecoveryCallback = hashParams.get("type") === "recovery"
        || queryParams.get("type") === "recovery"
        || queryParams.has("code");
    if (isRecoveryCallback && data.session) {
        showPasswordRecovery();
    } else if (isRecoveryCallback) {
        showLogin("انتهت صلاحية رابط إعادة التعيين أو استُخدم من قبل. اطلب رابطًا جديدًا.", true);
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
