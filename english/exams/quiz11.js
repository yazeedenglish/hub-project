/* =========================================================
   QUIZ: 11
========================================================= */

const quiz11 = [

    {
        question: "extra",
        options: [
            "go",
            "goes",
            "going",
            "gone"
        ],
        answer: "goes"
    },

    {
        question: "I have lived here ___ five years.",
        options: [
            "since",
            "for",
            "at",
            "on"
        ],
        answer: "for"
    },

    {
        question: "She ___ watching TV now.",
        options: [
            "is",
            "are",
            "do",
            "has"
        ],
        answer: "is"
    },

    {
        question: "I saw ___ interesting movie yesterday.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        answer: "an"
    },

    {
        question: "Ali is my brother. ___ is older than me.",
        options: [
            "He",
            "She",
            "It",
            "They"
        ],
        answer: "He"
    },

    {
        question: "___ you speak English?",
        options: [
            "Does",
            "Do",
            "Are",
            "Has"
        ],
        answer: "Do"
    },

    {
        question: "They ___ their homework yesterday.",
        options: [
            "finish",
            "finishes",
            "finished",
            "finishing"
        ],
        answer: "finished"
    },

    {
        question: "The keys are ___ the table.",
        options: [
            "on",
            "at",
            "to",
            "for"
        ],
        answer: "on"
    },

    {
        question: "She has ___ her work.",
        options: [
            "finish",
            "finished",
            "finishing",
            "finishes"
        ],
        answer: "finished"
    },

    {
        question: "This bag belongs to me. It is ___.",
        options: [
            "my",
            "mine",
            "me",
            "I"
        ],
        answer: "mine"
    }

];


window.startquiz11Quiz = function(container) {

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
            index >= quiz11.length
        ) {

            finished = true;

            renderResult();

            return;

        }


        const current =
            quiz11[index];


        container.innerHTML = `

            <div class="quiz-screen">

                <div class="quiz-progress">

                    <span>
                        ${index + 1}
                        /
                        ${quiz11.length}
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
                        🧠
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
                        id="restartMixed"
                    >
                        حاول مرة أخرى
                    </button>

                </div>

            </div>

        `;


        container
            .querySelector("#restartMixed")
            .addEventListener(
                "click",
                startGame
            );

    }


    startGame();

};