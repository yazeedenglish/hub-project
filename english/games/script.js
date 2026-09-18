/* =========================================================
   YAZEED ENGLISH — GAMES HUB
========================================================= */


/* =========================================================
   GAME REGISTRY
========================================================= */

const GAMES = [

    {
        id: "match",
        enabled: true,

        icon: "🧠",

        title: "طابق الكلمات",

        description:
            "طابق الكلمات الإنجليزية مع معانيها العربية واختبر حصيلتك اللغوية.",

        category: "المفردات",

        start: window.startMatchGame
    },


    {
        id: "scramble",
        enabled: true,

        icon: "🔤",

        title: "رتّب الحروف",

        description:
            "أعد ترتيب الحروف لتكوين الكلمة الإنجليزية الصحيحة.",

        category: "المفردات",

        start: window.startScrambleGame
    },


    {
        id: "guess",
        enabled: true,

        icon: "🕵️",

        title: "خمن الكلمة",

        description:
            "استخدم التلميحات لمعرفة الكلمة الإنجليزية قبل انتهاء المحاولات.",

        category: "المفردات",

        start: window.startGuessGame
    },


    {
        id: "mistake",
        enabled: true,

        icon: "🔎",

        title: "اكتشف الخطأ",

        description:
            "ابحث عن الخطأ في الجملة واختر التصحيح المناسب.",

        category: "القواعد",

        start: window.startMistakeGame
    },


    {
        id: "survival",
        enabled: true,

        icon: "🔥",

        title: "تحدي البقاء",

        description:
            "أجب عن الأسئلة المتتالية وحافظ على سلسلة إجاباتك الصحيحة لأطول وقت ممكن.",

        category: "تحدي شامل",

        start: window.startSurvivalGame
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const gamesGrid =
    document.getElementById("gamesGrid");

const gameModal =
    document.getElementById("gameModal");

const gameContent =
    document.getElementById("gameContent");

const gameTitle =
    document.getElementById("gameTitle");

const gameCategory =
    document.getElementById("gameCategory");

const closeGameButton =
    document.getElementById("closeGame");

const themeToggle =
    document.getElementById("themeToggle");


/* =========================================================
   RENDER GAME CARDS
========================================================= */

function renderGames() {

    gamesGrid.innerHTML = "";

    const visibleGames =
        GAMES.filter(game => game.enabled === true);

    visibleGames.forEach((game, index) => {

        const card =
            document.createElement("article");

        card.className = "game-card";

        card.setAttribute(
            "tabindex",
            "0"
        );

        card.setAttribute(
            "role",
            "button"
        );

        card.innerHTML = `

            <div>

                <div class="game-card-top">

                    <div class="game-icon">
                        ${game.icon}
                    </div>

                    <span class="game-number">
                        لعبة ${index + 1}
                    </span>

                </div>

                <h3>
                    ${game.title}
                </h3>

                <p>
                    ${game.description}
                </p>

            </div>


            <div class="game-card-bottom">

                <span class="game-enter">
                    ابدأ اللعب
                </span>

                <span class="game-arrow">
                    ←
                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openGame(game)
        );


        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openGame(game);
                }

            }
        );


        gamesGrid.appendChild(card);

    });

}


/* =========================================================
   OPEN GAME
========================================================= */

function openGame(game) {

    if (
        !game ||
        typeof game.start !== "function"
    ) {
        return;
    }


    gameTitle.textContent =
        game.title;

    gameCategory.textContent =
        game.category;


    gameContent.innerHTML = "";


    gameModal.hidden = false;

    gameModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    game.start(gameContent);

}


/* =========================================================
   CLOSE GAME
========================================================= */

function closeGame() {

    gameModal.hidden = true;

    gameModal.setAttribute(
        "aria-hidden",
        "true"
    );


    gameContent.innerHTML = "";


    document.body.style.overflow =
        "";


    if (
        typeof window.stopCurrentGame === "function"
    ) {

        window.stopCurrentGame();
    }

}


/* =========================================================
   CLOSE EVENTS
========================================================= */

closeGameButton.addEventListener(
    "click",
    closeGame
);


document.querySelector(
    "[data-close-game]"
).addEventListener(
    "click",
    closeGame
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !gameModal.hidden
        ) {

            closeGame();
        }

    }
);


/* =========================================================
   THEME
========================================================= */

const THEME_KEY =
    "yazeed_english_theme";


function applyTheme(theme) {

    document.documentElement.classList.toggle(
        "dark",
        theme === "dark"
    );


    themeToggle.textContent =
        theme === "dark"
            ? "☀️"
            : "🌙";
}


function initializeTheme() {

    const saved =
        localStorage.getItem(THEME_KEY);


    if (saved === "dark" || saved === "light") {

        applyTheme(saved);

        return;
    }


    const prefersDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    applyTheme(
        prefersDark
            ? "dark"
            : "light"
    );
}


themeToggle.addEventListener(
    "click",
    () => {

        const isDark =
            document.documentElement.classList.contains(
                "dark"
            );


        const nextTheme =
            isDark
                ? "light"
                : "dark";


        localStorage.setItem(
            THEME_KEY,
            nextTheme
        );


        applyTheme(nextTheme);
    }
);


/* =========================================================
   INITIALIZE
========================================================= */

initializeTheme();

renderGames();