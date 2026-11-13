(() => {
    const client = window.gameboxSupabase;
    const form = document.getElementById("authForm");
    const message = document.getElementById("authMessage");
    const forms = document.getElementById("authForms");
    const accountPanel = document.getElementById("accountPanel");
    const accountEmail = document.getElementById("accountEmail");
    const passwordUpdateForm = document.getElementById("passwordUpdateForm");
    const signInTab = document.getElementById("signInTab");
    const signUpTab = document.getElementById("signUpTab");
    let mode = "signin";

    const text = (en, ar) => document.documentElement.lang === "ar" ? ar : en;
    const setMessage = (value, isError = false) => {
        if (!message) return;
        message.textContent = value;
        message.classList.toggle("is-error", isError);
    };

    function updateAccountLink(user) {
        document.querySelectorAll('a[href="login.html"]').forEach((link) => {
            link.textContent = user
                ? text("My account", "حسابي")
                : text("Sign in", "تسجيل الدخول");
            link.dataset.en = user ? "My account" : "Sign in";
            link.dataset.ar = user ? "حسابي" : "تسجيل الدخول";
        });
    }

    function showSession(user) {
        updateAccountLink(user);
        if (!forms || !accountPanel) return;
        forms.hidden = Boolean(user);
        if (passwordUpdateForm) passwordUpdateForm.hidden = true;
        accountPanel.hidden = !user;
        if (accountEmail) accountEmail.textContent = user?.email || "";
    }

    function setMode(nextMode) {
        mode = nextMode;
        const signingUp = mode === "signup";
        if (signInTab) {
            signInTab.classList.toggle("is-active", !signingUp);
            signInTab.setAttribute("aria-selected", String(!signingUp));
        }
        if (signUpTab) {
            signUpTab.classList.toggle("is-active", signingUp);
            signUpTab.setAttribute("aria-selected", String(signingUp));
        }
        const submit = document.getElementById("authSubmit");
        const password = document.getElementById("authPassword");
        if (submit) submit.textContent = signingUp ? text("Create account", "إنشاء حساب") : text("Sign in", "تسجيل الدخول");
        if (password) password.autocomplete = signingUp ? "new-password" : "current-password";
        setMessage("");
    }

    function showSetupNeeded() {
        updateAccountLink(null);
        if (forms) {
            forms.querySelectorAll("input, button").forEach((control) => { control.disabled = true; });
            setMessage(text(
                "Connect your Supabase project first: enter its URL and publishable key in supabase-config.js, then run supabase/schema.sql in the Supabase SQL Editor.",
                "اربط مشروع Supabase أولًا: ضع رابط المشروع والمفتاح العام في ملف supabase-config.js، ثم شغّل supabase/schema.sql في محرر SQL داخل Supabase."
            ), true);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        if (!client) {
            showSetupNeeded();
            return;
        }

        client.auth.getSession().then(({ data, error }) => {
            if (error) setMessage(error.message, true);
            showSession(data?.session?.user || null);
        });

        client.auth.onAuthStateChange((event, session) => {
            if (event === "PASSWORD_RECOVERY" && passwordUpdateForm) {
                forms.hidden = true;
                accountPanel.hidden = true;
                passwordUpdateForm.hidden = false;
                setMessage(text("Choose a new password.", "اكتب كلمة المرور الجديدة."));
                return;
            }
            showSession(session?.user || null);
        });

        signInTab?.addEventListener("click", () => setMode("signin"));
        signUpTab?.addEventListener("click", () => setMode("signup"));

        form?.addEventListener("submit", async (event) => {
            event.preventDefault();
            const email = document.getElementById("authEmail").value.trim();
            const password = document.getElementById("authPassword").value;
            const submit = document.getElementById("authSubmit");
            submit.disabled = true;
            setMessage(text("Please wait…", "لحظة من فضلك…"));

            const result = mode === "signup"
                ? await client.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}${window.location.pathname}` } })
                : await client.auth.signInWithPassword({ email, password });

            submit.disabled = false;
            if (result.error) {
                setMessage(result.error.message, true);
                return;
            }
            if (mode === "signup" && !result.data.session) {
                setMessage(text("Check your email to confirm the new account.", "افتح بريدك الإلكتروني لتأكيد الحساب الجديد."));
            } else {
                setMessage(text("You are signed in.", "تم تسجيل الدخول."));
                showSession(result.data.user || result.data.session?.user || null);
            }
        });

        document.getElementById("resetPassword")?.addEventListener("click", async () => {
            const email = document.getElementById("authEmail").value.trim();
            if (!email) {
                setMessage(text("Enter your email first.", "اكتب بريدك الإلكتروني أولًا."), true);
                return;
            }
            const { error } = await client.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}${window.location.pathname}`
            });
            setMessage(error ? error.message : text("If the address is registered, a reset email is on its way.", "لو البريد مسجل، هتوصلك رسالة لإعادة تعيين كلمة المرور."), Boolean(error));
        });

        document.getElementById("signOutButton")?.addEventListener("click", async () => {
            const { error } = await client.auth.signOut();
            if (error) setMessage(error.message, true);
            else setMessage(text("You have signed out.", "تم تسجيل الخروج."));
        });

        passwordUpdateForm?.addEventListener("submit", async (event) => {
            event.preventDefault();
            const password = document.getElementById("newPassword").value;
            const { error } = await client.auth.updateUser({ password });
            if (error) setMessage(error.message, true);
            else {
                passwordUpdateForm.hidden = true;
                setMessage(text("Password updated. You are signed in.", "تم تحديث كلمة المرور وتسجيل الدخول."));
                const { data } = await client.auth.getSession();
                showSession(data.session?.user || null);
            }
        });
    });
})();
