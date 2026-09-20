/* =========================================================
   QUIZ: 4
========================================================= */

const quiz4 = [

    {
        question: "I saw ___ dog in the park.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        answer: "a"
    },

    {
        question: "She ate ___ apple.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        answer: "an"
    },

    {
        question: "___ sun is very bright today.",
        options: [
            "A",
            "An",
            "The",
            "No article"
        ],
        answer: "The"
    },

    {
        question: "He is ___ teacher.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        answer: "a"
    },

    {
        question: "She wants to buy ___ umbrella.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        answer: "an"
    },

    {
        question: "I visited ___ museum you recommended.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        answer: "the"
    },

    {
        question: "He bought ___ new phone.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        answer: "a"
    },

    {
        question: "She is ___ engineer.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        answer: "an"
    },

    {
        question: "___ Earth moves around the Sun.",
        options: [
            "A",
            "An",
            "The",
            "No article"
        ],
        answer: "The"
    },

    {
        question: "I need ___ pen to write this.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        answer: "a"
    }

];


window.startArticlesQuiz = function(container) {

    let index = 0;
    let score = 0;
    let streak = 0;
    let bestStreak = 0;
    let finished = false;
    let timer = null;


    function clearTimer() {

        if (timer) {

            clearTimeout(timer);

            timer = null;

        }

    }


    window.stopCurrentQuiz = clearTimer;


    window.finishCurrentQuiz = function() {

        clearTimer();

        if (finished) {

            closeQuiz();

            return;

        }

        finished = true;

        renderResult();

    };


    function startGame() {

        clearTimer();

        index = 0;

        score = 0;

        streak = 0;

        bestStreak = 0;

        finished = false;

        renderQuestion();

    }


    function renderQuestion() {

        clearTimer();


        if (
            finished ||
            index >= quiz4.length
        ) {

            finished = true;

            renderResult();

            return;

        }


        const current =
            quiz4[index];


        container.innerHTML = `

            <div class="quiz-screen">

                <div class="quiz-progress">

                    <span>
                        ${index + 1}
                        /
                        ${quiz4.length}
                    </span>

                    <span class="quiz-streak">
                        🔥 ${streak}
                    </span>

                    <span class="quiz-score">
                        النقاط: ${score}
                    </span>

                </div>

                <p class="quiz-subtitle">
         اختر الإجابة الصحيحة
                </p>

                <div
                    class="quiz-question"
                    dir="ltr"
                >
                    ${current.question}
                </div>

                <div class="quiz-options">

                    ${current.options.map(
                        option => `

                            <button
                                type="button"
                                class="quiz-option"
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
            .querySelectorAll(".quiz-option")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        if (finished) {
                            return;
                        }


                        container
                            .querySelectorAll(".quiz-option")
                            .forEach(
                                option =>
                                    option.disabled = true
                            );


                        if (
                            button.dataset.answer ===
                            current.answer
                        ) {

                            score++;

                            streak++;

                            bestStreak =
                                Math.max(
                                    bestStreak,
                                    streak
                                );

                            button.classList.add("correct");

                            button.classList.add("success-pop");

                        } else {

                            streak = 0;

                            button.classList.add("wrong");

                        }


                        index++;


                        timer =
                            setTimeout(
                                renderQuestion,
                                650
                            );

                    }
                );

            });

    }


    function renderResult() {

        clearTimer();


        const total = index;

        const percentage =
            total > 0
                ? Math.round(
                    (score / total) * 100
                )
                : 0;


        container.innerHTML = `

            <div class="quiz-screen">

                <div class="quiz-result">

                    <div class="result-icon">
                        🎉
                    </div>

                    <h3>
                        انتهى الاختبار
                    </h3>

                    <p>
                        نتيجتك النهائية
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
                        النتيجة:
                        <strong>
                            ${percentage}%
                        </strong>
                    </p>

                    <p class="result-percentage">
                        أفضل سلسلة:
                        <strong>
                            🔥 ${bestStreak}
                        </strong>
                    </p>

                    <button
                        type="button"
                        class="primary-quiz-button"
                        id="restartArticles"
                    >
                        حاول مرة أخرى
                    </button>

                </div>

            </div>

        `;


        container
            .querySelector("#restartArticles")
            .addEventListener(
                "click",
                startGame
            );

    }


    startGame();

};