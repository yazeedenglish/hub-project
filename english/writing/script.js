/* =========================================================
   THEME
========================================================= */

const THEME_STORAGE_KEY = "yazeed_english_theme";

const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");

    themeToggle.innerHTML = theme === "dark"
        ? '<i data-lucide="sun"></i>'
        : '<i data-lucide="moon"></i>';

    lucide.createIcons();
}

// Get saved theme
let currentTheme = localStorage.getItem(THEME_STORAGE_KEY);

// Use device preference if no valid theme is saved
if (currentTheme !== "dark" && currentTheme !== "light") {
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

// Apply initial theme
applyTheme(currentTheme);

// Toggle theme
themeToggle.addEventListener("click", function () {
    currentTheme = document.body.classList.contains("dark")
        ? "light"
        : "dark";

    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);

    applyTheme(currentTheme);
});
