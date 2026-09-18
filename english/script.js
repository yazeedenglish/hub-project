/* =========================================================
   YAZEED ENGLISH — ENGLISH HUB
========================================================= */


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