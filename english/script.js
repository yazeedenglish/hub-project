/* =========================================================
   YAZEED ENGLISH — ENGLISH HUB
========================================================= */


const ENGLISH_CARDS = {

    book: true,

    exams: true,

    grammar: true,

    writing: false,

    stories: true,

    games: true

};

document.addEventListener("DOMContentLoaded", () => {

    if (!ENGLISH_CARDS.book) {
        document.getElementById("book-card")?.remove();
    }

    if (!ENGLISH_CARDS.exams) {
        document.getElementById("exams-card")?.remove();
    }

    if (!ENGLISH_CARDS.grammar) {
        document.getElementById("grammar-card")?.remove();
    }

    if (!ENGLISH_CARDS.writing) {
        document.getElementById("writing-card")?.remove();
    }

    if (!ENGLISH_CARDS.stories) {
        document.getElementById("stories-card")?.remove();
    }

    if (!ENGLISH_CARDS.games) {
        document.getElementById("games-card")?.remove();
    }

});




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
