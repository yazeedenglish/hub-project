/* =========================================================
   YAZEED ENGLISH — EXAMS
========================================================= */


/* =========================================================
   QUIZ REGISTRY
========================================================= */

const QUIZZES = [

    {
        id: "quiz1",

        enabled: true,

        icon: "🔤",

        title: "500 كلمة",

        description:
            "اختبر معرفتك في أهم الكلمات الانجليزية ومعانيها",

        category: "Quiz",

        start: window.startquiz1Quiz
    },


    {
        id: "quiz2",

        enabled: true,

        icon: "📚",

        title: "500 جملة",

        description:
            "اختبر معرفتك في أهم الجمل الانجليزية ومعانيها",

        category: "Quiz",

        start: window.startquiz2Quiz
    },


    {
        id: "quiz3",

        enabled: true,

        icon: "🍔",

        title: "المطعم",

        description:
            "اختبر معرفتك في أهم الكلمات والعبارات في المطاعم",

        category: "Quiz",

        start: window.startPrepositionsQuiz
    },


    {
        id: "quiz4",

        enabled: true,

        icon: "☕",

        title: "المقهى",

        description:
            "اختبر معرفتك في أهم الكلمات والعبارات في المقهى",

        category: "Quiz",

        start: window.startArticlesQuiz
    },


    {
        id: "quiz5",

        enabled: true,

        icon: "🛒",

        title: "البقالة",

        description:
            "اختبر معرفتك في أهم الكلمات والعبارات في الأسواق",

        category: "Quiz",

        start: window.startPronounsQuiz
    },


    {
        id: "quiz6",

        enabled: true,

        icon: "🏥",

        title: "المستشفى",

        description:
            "اختبر معرفتك في أهم الكلمات والعبارات في المستشفيات",

        category: "Quiz",

        start: window.startMixedQuiz
    },

    {
        id: "quiz7",

        enabled: true,

        icon: "🛍️",

        title: "السوق",

        description:
            "Quiz يجمع مجموعة متنوعة من أهم قواعد اللغة الإنجليزية.",

        category: "Quiz",

        start: window.startquiz7Quiz
    },

        {
        id: "quiz8",

        enabled: true,

        icon: "💻",

        title: "العمل",

        description:
            "اختبر معرفتك في أهم الكلمات والعبارات في بيئة العمل",

        category: "Quiz",

        start: window.startquiz8Quiz
    },

            {
        id: "quiz9",

        enabled: true,

        icon: "🛫",

        title: "المطار",

        description:
            "اختبر معرفتك في أهم الكلمات والعبارات في المطارات",

        category: "Quiz",

        start: window.startquiz9Quiz
    },

                {
        id: "quiz10",

        enabled: true,

        icon: "🧳",

        title: "السفر",

        description:
            "اختبر معرفتك في أهم الكلمات والعبارات أثناء السفر",

        category: "Quiz",

        start: window.startquiz10Quiz
    },

                    {
        id: "quiz11",

        enabled: false,

        icon: "h",

        title: "extra",

        description:
            "Quiz يجمع مجموعة متنوعة من أهم قواعد اللغة الإنجليزية.",

        category: "Quiz",

        start: window.startquiz11Quiz
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const quizGrid =
    document.getElementById("quizGrid");

const quizModal =
    document.getElementById("quizModal");

const quizContent =
    document.getElementById("quizContent");

const quizTitle =
    document.getElementById("quizTitle");

const quizCategory =
    document.getElementById("quizCategory");

const closeQuizButton =
    document.getElementById("closeQuiz");

const themeToggle =
    document.getElementById("themeToggle");


/* =========================================================
   RENDER QUIZZES
========================================================= */

function renderQuizzes() {

    quizGrid.innerHTML = "";


    const visibleQuizzes =
        QUIZZES.filter(
            quiz =>
                quiz.enabled === true
        );


    visibleQuizzes.forEach(
        (quiz, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "quiz-card";


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

                    <div class="quiz-card-top">

                        <div class="quiz-icon">

                            ${quiz.icon}

                        </div>

                        <span class="quiz-number">

                            اختبار ${index + 1}

                        </span>

                    </div>


                    <h3>
                        ${quiz.title}
                    </h3>


                    <p>
                        ${quiz.description}
                    </p>

                </div>


                <div class="quiz-card-bottom">

                    <span class="quiz-enter">

                        ابدأ الاختبار

                    </span>


                    <span class="quiz-arrow">

                        ←

                    </span>

                </div>

            `;


            card.addEventListener(
                "click",
                () => openQuiz(quiz)
            );


            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openQuiz(quiz);

                    }

                }
            );


            quizGrid.appendChild(card);

        }
    );

}


/* =========================================================
   OPEN QUIZ
========================================================= */

function openQuiz(quiz) {

    if (
        !quiz ||
        typeof quiz.start !== "function"
    ) {

        return;

    }


    quizTitle.textContent =
        quiz.title;


    quizCategory.textContent =
        quiz.category;


    quizContent.innerHTML = "";


    quizModal.hidden = false;


    quizModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    quiz.start(
        quizContent
    );

}


/* =========================================================
   CLOSE QUIZ
========================================================= */

function closeQuiz() {

    quizModal.hidden = true;


    quizModal.setAttribute(
        "aria-hidden",
        "true"
    );


    quizContent.innerHTML = "";


    document.body.style.overflow =
        "";


    if (
        typeof window.stopCurrentQuiz ===
        "function"
    ) {

        window.stopCurrentQuiz();

    }

}


/* =========================================================
   X BUTTON
========================================================= */

closeQuizButton.addEventListener(
    "click",
    () => {

        if (
            typeof window.finishCurrentQuiz ===
            "function"
        ) {

            window.finishCurrentQuiz();

            return;

        }


        closeQuiz();

    }
);


/* =========================================================
   BACKDROP
========================================================= */

document
    .querySelector("[data-close-quiz]")
    .addEventListener(
        "click",
        () => {

            if (
                typeof window.finishCurrentQuiz ===
                "function"
            ) {

                window.finishCurrentQuiz();

                return;

            }


            closeQuiz();

        }
    );


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !quizModal.hidden
        ) {

            if (
                typeof window.finishCurrentQuiz ===
                "function"
            ) {

                window.finishCurrentQuiz();

            } else {

                closeQuiz();

            }

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
        localStorage.getItem(
            THEME_KEY
        );


    if (
        saved === "dark" ||
        saved === "light"
    ) {

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
            document.documentElement
                .classList
                .contains("dark");


        const nextTheme =
            isDark
                ? "light"
                : "dark";


        localStorage.setItem(
            THEME_KEY,
            nextTheme
        );


        applyTheme(
            nextTheme
        );

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

initializeTheme();

renderQuizzes();