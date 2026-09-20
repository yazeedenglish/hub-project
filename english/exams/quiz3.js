/* =========================================================
   QUIZ: 3
========================================================= */

const quiz3 = [

    {
        question: "The book is ___ the table.",
        options: [
            "in",
            "on",
            "at",
            "to"
        ],
        answer: "on"
    },

    {
        question: "She lives ___ Riyadh.",
        options: [
            "at",
            "on",
            "in",
            "to"
        ],
        answer: "in"
    },

    {
        question: "I wake up ___ 7 o'clock.",
        options: [
            "in",
            "on",
            "at",
            "for"
        ],
        answer: "at"
    },

    {
        question: "We have a meeting ___ Monday.",
        options: [
            "at",
            "in",
            "on",
            "for"
        ],
        answer: "on"
    },

    {
        question: "He has lived here ___ 2020.",
        options: [
            "for",
            "since",
            "at",
            "from"
        ],
        answer: "since"
    },

    {
        question: "I have studied English ___ three years.",
        options: [
            "since",
            "for",
            "at",
            "on"
        ],
        answer: "for"
    },

    {
        question: "She went ___ the store.",
        options: [
            "at",
            "to",
            "on",
            "in"
        ],
        answer: "to"
    },

    {
        question: "The children are ___ the classroom.",
        options: [
            "in",
            "on",
            "at",
            "to"
        ],
        answer: "in"
    },

    {
        question: "The meeting starts ___ the morning.",
        options: [
            "at",
            "on",
            "in",
            "to"
        ],
        answer: "in"
    },

    {
        question: "He arrived ___ the airport early.",
        options: [
            "at",
            "in",
            "on",
            "to"
        ],
        answer: "at"
    }

];


window.startPrepositionsQuiz = function(container) {

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
            index >= quiz3.length
        ) {

            finished = true;

            renderResult();

            return;

        }


        const current =
            quiz3[index];


        container.innerHTML = `

            <div class="quiz-screen">

                <div class="quiz-progress">

                    <span>
                        ${index + 1}
                        /
                        ${quiz3.length}
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
                        id="restartPrepositions"
                    >
                        حاول مرة أخرى
                    </button>

                </div>

            </div>

        `;


        container
            .querySelector("#restartPrepositions")
            .addEventListener(
                "click",
                startGame
            );

    }


    startGame();

};