/* =========================================================
   GAME: FIND THE MISTAKE
========================================================= */

const MISTAKE_QUESTIONS = [

    /* =====================================================
       A1 — BASIC
    ===================================================== */

    {
        sentence: "She go to school every day",
        options: [
            "She",
            "go",
            "to school",
            "every day"
        ],
        answer: "go"
    },

    {
        sentence: "He are my best friend",
        options: [
            "He",
            "are",
            "my best",
            "friend"
        ],
        answer: "are"
    },

    {
        sentence: "They is very happy today",
        options: [
            "They",
            "is",
            "very happy",
            "today"
        ],
        answer: "is"
    },

    {
        sentence: "I has a new computer",
        options: [
            "I",
            "has",
            "a new",
            "computer"
        ],
        answer: "has"
    },

    {
        sentence: "We was at home yesterday",
        options: [
            "We",
            "was",
            "at home",
            "yesterday"
        ],
        answer: "was"
    },

    {
        sentence: "She don't like coffee",
        options: [
            "She",
            "don't like",
            "coffee",
            "today"
        ],
        answer: "don't like"
    },

    {
        sentence: "He have two brothers",
        options: [
            "He",
            "have",
            "two",
            "brothers"
        ],
        answer: "have"
    },

    {
        sentence: "There is three books on the table",
        options: [
            "There is",
            "three books",
            "on the",
            "table"
        ],
        answer: "There is"
    },

    {
        sentence: "My sister are a teacher",
        options: [
            "My sister",
            "are",
            "a",
            "teacher"
        ],
        answer: "are"
    },

    {
        sentence: "I went to the shop yesterday and buy some milk",
        options: [
            "went to",
            "the shop",
            "yesterday",
            "buy"
        ],
        answer: "buy"
    },

    {
        sentence: "He can speaks English very well",
        options: [
            "He",
            "can speaks",
            "English",
            "very well"
        ],
        answer: "can speaks"
    },

    {
        sentence: "She is play tennis every weekend",
        options: [
            "She",
            "is play",
            "tennis",
            "every weekend"
        ],
        answer: "is play"
    },

    {
        sentence: "We have a meeting on Monday morning",
        options: [
            "We",
            "have",
            "a meeting",
            "on Monday morning"
        ],
        answer: "on Monday morning"
    },


    /* =====================================================
       A2 — ELEMENTARY
    ===================================================== */

    {
        sentence: "I have lived here since five years",
        options: [
            "I have lived",
            "here",
            "since",
            "five years"
        ],
        answer: "since"
    },

    {
        sentence: "She is married with a doctor",
        options: [
            "She",
            "is married",
            "with",
            "a doctor"
        ],
        answer: "with"
    },

    {
        sentence: "He is good in mathematics",
        options: [
            "He",
            "is good",
            "in",
            "mathematics"
        ],
        answer: "in"
    },

    {
        sentence: "I am interested on learning Spanish",
        options: [
            "I am",
            "interested",
            "on",
            "learning Spanish"
        ],
        answer: "on"
    },

    {
        sentence: "She arrived to the airport at noon",
        options: [
            "She",
            "arrived",
            "to the airport",
            "at noon"
        ],
        answer: "to the airport"
    },

    {
        sentence: "We discussed about the problem yesterday",
        options: [
            "We",
            "discussed about",
            "the problem",
            "yesterday"
        ],
        answer: "discussed about"
    },

    {
        sentence: "He didn't went to work yesterday",
        options: [
            "He",
            "didn't went",
            "to work",
            "yesterday"
        ],
        answer: "didn't went"
    },

    {
        sentence: "She has finished her homework yesterday",
        options: [
            "She",
            "has finished",
            "her homework",
            "yesterday"
        ],
        answer: "has finished"
    },

    {
        sentence: "There are a lot of information online",
        options: [
            "There are",
            "a lot of",
            "information",
            "online"
        ],
        answer: "There are"
    },

    {
        sentence: "I need an advice about this problem",
        options: [
            "I need",
            "an advice",
            "about this",
            "problem"
        ],
        answer: "an advice"
    },

    {
        sentence: "She made me to laugh yesterday",
        options: [
            "She",
            "made me",
            "to laugh",
            "yesterday"
        ],
        answer: "to laugh"
    },

    {
        sentence: "He is afraid from dogs",
        options: [
            "He",
            "is afraid",
            "from",
            "dogs"
        ],
        answer: "from"
    },

    {
        sentence: "I look forward to meet you tomorrow",
        options: [
            "I look",
            "forward to",
            "meet",
            "you tomorrow"
        ],
        answer: "meet"
    },


    /* =====================================================
       B1 — INTERMEDIATE
    ===================================================== */

    {
        sentence: "If I will have enough money, I will buy a car",
        options: [
            "If",
            "I will have",
            "enough money",
            "I will buy"
        ],
        answer: "I will have"
    },

    {
        sentence: "She has been working here since three years",
        options: [
            "She has been",
            "working here",
            "since",
            "three years"
        ],
        answer: "since"
    },

    {
        sentence: "The book was wrote by a famous author",
        options: [
            "The book",
            "was wrote",
            "by a famous",
            "author"
        ],
        answer: "was wrote"
    },

    {
        sentence: "He suggested to take the train",
        options: [
            "He",
            "suggested",
            "to take",
            "the train"
        ],
        answer: "to take"
    },

    {
        sentence: "I wish I can speak French fluently",
        options: [
            "I wish",
            "I can speak",
            "French",
            "fluently"
        ],
        answer: "I can speak"
    },

    {
        sentence: "She told me that she will arrive later",
        options: [
            "She told me",
            "that she will",
            "arrive",
            "later"
        ],
        answer: "that she will"
    },

    {
        sentence: "Neither of the students were ready for the exam",
        options: [
            "Neither",
            "of the students",
            "were",
            "ready for the exam"
        ],
        answer: "were"
    },

    {
        sentence: "The news are very surprising",
        options: [
            "The news",
            "are",
            "very",
            "surprising"
        ],
        answer: "are"
    },

    {
        sentence: "She explained me how the machine works",
        options: [
            "She",
            "explained me",
            "how the machine",
            "works"
        ],
        answer: "explained me"
    },

    {
        sentence: "He depends of his parents for financial support",
        options: [
            "He depends",
            "of",
            "his parents",
            "for financial support"
        ],
        answer: "of"
    },

    {
        sentence: "I am used to wake up early now",
        options: [
            "I am",
            "used to",
            "wake up",
            "early now"
        ],
        answer: "wake up"
    },

    {
        sentence: "The manager asked me where was I going",
        options: [
            "The manager",
            "asked me",
            "where was I",
            "going"
        ],
        answer: "where was I"
    },

    {
        sentence: "Despite of the rain, we continued walking",
        options: [
            "Despite of",
            "the rain",
            "we continued",
            "walking"
        ],
        answer: "Despite of"
    },


    /* =====================================================
       B2 — UPPER INTERMEDIATE
    ===================================================== */

    {
        sentence: "Had I known about the problem, I would tell you earlier",
        options: [
            "Had I known",
            "about the problem",
            "I would tell",
            "you earlier"
        ],
        answer: "I would tell"
    },

    {
        sentence: "It is essential that he attends the meeting tomorrow",
        options: [
            "It is",
            "essential",
            "that he attends",
            "the meeting tomorrow"
        ],
        answer: "that he attends"
    },

    {
        sentence: "No sooner had we arrived when the meeting started",
        options: [
            "No sooner",
            "had we arrived",
            "when",
            "the meeting started"
        ],
        answer: "when"
    },

    {
        sentence: "The company is expected launching a new product next month",
        options: [
            "The company",
            "is expected",
            "launching",
            "a new product next month"
        ],
        answer: "launching"
    },

    {
        sentence: "She denied to have taken the documents",
        options: [
            "She",
            "denied",
            "to have taken",
            "the documents"
        ],
        answer: "to have taken"
    },

    {
        sentence: "The project, which was completed last year, have received several awards",
        options: [
            "The project",
            "which was completed last year",
            "have received",
            "several awards"
        ],
        answer: "have received"
    },

    {
        sentence: "Rarely we see such impressive results",
        options: [
            "Rarely",
            "we see",
            "such impressive",
            "results"
        ],
        answer: "we see"
    },

    {
        sentence: "The students were accused of cheating on the exam",
        options: [
            "The students",
            "were accused",
            "of cheating",
            "on the exam"
        ],
        answer: "on the exam"
    },

    {
        sentence: "He would rather to stay at home tonight",
        options: [
            "He",
            "would rather",
            "to stay",
            "at home tonight"
        ],
        answer: "to stay"
    },

    {
        sentence: "The research suggests that climate change could affects food production",
        options: [
            "The research",
            "suggests that",
            "could affects",
            "food production"
        ],
        answer: "could affects"
    },

    {
        sentence: "Not only he forgot the meeting, but he also arrived late",
        options: [
            "Not only",
            "he forgot",
            "the meeting",
            "but he also arrived late"
        ],
        answer: "he forgot"
    }
];


window.startMistakeGame = function(container) {

    let index = 0;

    let score = 0;

    let streak = 0;

    window.mistakeGameFinished = false;


    /* =====================================================
       X BUTTON — FIRST CLICK RESULT / SECOND CLICK CLOSE
    ===================================================== */

    window.finishCurrentGame = function() {

        if (window.mistakeGameFinished) {

            closeGame();

            return;
        }

        window.mistakeGameFinished = true;

        renderResult();

    };


    /* =====================================================
       START / RESTART
    ===================================================== */

    function startGame() {

        index = 0;

        score = 0;

        streak = 0;

        window.mistakeGameFinished = false;

        renderQuestion();

    }


    /* =====================================================
       RENDER QUESTION
    ===================================================== */

    function renderQuestion() {

        if (
            index >=
            MISTAKE_QUESTIONS.length
        ) {

            renderResult();

            return;
        }


        const current =
            MISTAKE_QUESTIONS[index];


        container.innerHTML = `

            <div class="game-screen">

                <div class="game-progress">

                    <span>
                        ${index + 1} / ${MISTAKE_QUESTIONS.length}
                    </span>

                    <span class="game-streak">
                        🔥 ${streak}
                    </span>

                    <span class="game-score">
                        النقاط: ${score}
                    </span>

                </div>


                <p class="game-subtitle">
                    أي جزء من الجملة يحتوي على الخطأ؟
                </p>


                <div
                    class="game-question"
                    dir="ltr"
                >
                    ${current.sentence}
                </div>


                <div class="game-options">

                    ${current.options.map(
                        option => `

                            <button
                                type="button"
                                class="game-option"
                                data-answer="${option}"
                                dir="ltr"
                            >
                                ${option}
                            </button>

                        `
                    ).join("")}

                </div>

            </div>

        `;


        container
            .querySelectorAll(".game-option")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const correct =
                            button.dataset.answer ===
                            current.answer;


                        container
                            .querySelectorAll(
                                ".game-option"
                            )
                            .forEach(
                                option =>
                                    option.disabled = true
                            );


                        if (correct) {

                            score++;

                            streak++;

                            button.classList.add(
                                "correct"
                            );

                            button.classList.add(
                                "success-pop"
                            );

                        } else {

                            streak = 0;

                            button.classList.add(
                                "wrong"
                            );

                        }


                        setTimeout(
                            () => {

                                index++;

                                renderQuestion();

                            },
                            correct ? 650 : 750
                        );

                    }
                );

            });

    }


    /* =====================================================
       RESULT
    ===================================================== */

    function renderResult() {

        const total =
            index;


        const percentage =
            total > 0
                ? Math.round(
                    (score / total) * 100
                )
                : 0;


        let message;


        if (percentage >= 90) {

            message =
                "ممتاز جدًا! دقتك رائعة 🔥";

        } else if (percentage >= 70) {

            message =
                "أداء رائع! استمر 👏";

        } else if (percentage >= 50) {

            message =
                "جيد! واصل التدريب 💪";

        } else {

            message =
                "استمر في التدريب وستتحسن مع الوقت 📚";

        }


        container.innerHTML = `

            <div class="game-screen">

                <div class="game-result">

                    <div class="result-icon">
                        🔎
                    </div>

                    <h3>
                        انتهت اللعبة
                    </h3>

                    <p>
                        ${message}
                    </p>

                    <div class="result-score">

                        <strong>
                            ${score}
                        </strong>

                        <span>
                            من ${total}
                        </span>

                    </div>

                    <p class="result-percentage">
                        نسبة الإجابات الصحيحة:
                        <strong>
                            ${percentage}%
                        </strong>
                    </p>

                    <button
                        type="button"
                        class="primary-game-button"
                        id="restartMistake"
                    >
                        العب مرة أخرى
                    </button>

                </div>

            </div>

        `;


        const restart =
            container.querySelector(
                "#restartMistake"
            );


        restart.addEventListener(
            "click",
            startGame
        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    startGame();

};