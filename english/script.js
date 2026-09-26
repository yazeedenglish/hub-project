/* =========================================================
   YAZEED ENGLISH — ENGLISH HUB
========================================================= */


const ENGLISH_CARDS = {

    book: true,

    exams: true,

    grammar: true,

    writing: false,

    stories: false,

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

const THEME_STORAGE_KEY =
    "yazeed_english_theme";


const themeToggle =
    document.getElementById(
        "themeToggle"
    );


const themeIcon =
    document.getElementById(
        "themeIcon"
    );


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add(
            "dark"
        );

        themeIcon.textContent = "☀️";

    } else {

        document.body.classList.remove(
            "dark"
        );

        themeIcon.textContent = "🌙";

    }

}


function getInitialTheme() {

    const savedTheme =
        localStorage.getItem(
            THEME_STORAGE_KEY
        );


    if (savedTheme) {

        return savedTheme;

    }


    /*
        If the student has never selected
        a theme, follow their device setting.
    */

    if (
        window.matchMedia &&
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches
    ) {

        return "dark";

    }


    return "light";

}


applyTheme(
    getInitialTheme()
);


themeToggle.addEventListener(
    "click",
    () => {

        const isDark =
            document.body.classList.contains(
                "dark"
            );


        const newTheme =
            isDark
                ? "light"
                : "dark";


        applyTheme(
            newTheme
        );


        localStorage.setItem(
            THEME_STORAGE_KEY,
            newTheme
        );

    }
);