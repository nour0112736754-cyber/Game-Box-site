(function () {
    "use strict";

    const STORAGE_KEY = "gamebox-theme";
    const root = document.documentElement;

    function getSavedTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
        } catch (_) {
            return "dark";
        }
    }

    function applyTheme(theme) {
        root.dataset.theme = theme;
        if (document.body) document.body.dataset.theme = theme;
    }

    function updateButton(button) {
        const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
        const isArabic = (root.lang || "en").toLowerCase().startsWith("ar");
        button.textContent = nextTheme === "light" ? "☀" : "☾";
        button.setAttribute(
            "aria-label",
            nextTheme === "light"
                ? (isArabic ? "التبديل إلى الوضع الفاتح" : "Switch to light mode")
                : (isArabic ? "التبديل إلى الوضع الداكن" : "Switch to dark mode")
        );
        button.title = button.getAttribute("aria-label");
    }

    applyTheme(getSavedTheme());

    function initializeThemeControls() {
        document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
            updateButton(button);
            button.addEventListener("click", function () {
                const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
                applyTheme(nextTheme);
                try {
                    localStorage.setItem(STORAGE_KEY, nextTheme);
                } catch (_) {
                    // The theme still works for this page if storage is unavailable.
                }
                document.querySelectorAll("[data-theme-toggle]").forEach(updateButton);
            });
        });

        new MutationObserver(function () {
            document.querySelectorAll("[data-theme-toggle]").forEach(updateButton);
        }).observe(root, { attributes: true, attributeFilter: ["lang"] });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeThemeControls, { once: true });
    } else {
        initializeThemeControls();
    }
})();
