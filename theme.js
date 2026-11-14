(function () {
    const STORAGE_KEY = "gamebox-theme";
    const root = document.documentElement;
    const theme = localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";

    root.dataset.theme = theme;

    function updateButton(button) {
        const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
        const isArabic = root.lang.toLowerCase().startsWith("ar");
        button.textContent = nextTheme === "light" ? "☀" : "☾";
        button.setAttribute("aria-label", nextTheme === "light"
            ? (isArabic ? "التبديل إلى الوضع الفاتح" : "Switch to light mode")
            : (isArabic ? "التبديل إلى الوضع الداكن" : "Switch to dark mode"));
        button.title = button.getAttribute("aria-label");
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.body.dataset.theme = root.dataset.theme;
        document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
            updateButton(button);
            button.addEventListener("click", function () {
                const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
                root.dataset.theme = nextTheme;
                document.body.dataset.theme = nextTheme;
                localStorage.setItem(STORAGE_KEY, nextTheme);
                document.querySelectorAll("[data-theme-toggle]").forEach(updateButton);
            });
        });

        new MutationObserver(function () {
            document.querySelectorAll("[data-theme-toggle]").forEach(updateButton);
        }).observe(root, { attributes: true, attributeFilter: ["lang"] });
    });
})();
