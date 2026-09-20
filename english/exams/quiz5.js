/* =========================================================
   QUIZ: 5
========================================================= */

const quiz5 = [

    {
        question: "Sarah is my friend. ___ is very kind.",
        options: [
            "He",
            "She",
            "It",
            "They"
        ],
        answer: "She"
    },

    {
        question: "Tom and I are students. ___ study together.",
        options: [
            "We",
            "They",
            "He",
            "Them"
        ],
        answer: "We"
    },

    {
        question: "I saw Ahmed yesterday. I spoke to ___.",
        options: [
            "he",
            "him",
            "his",
            "himself"
        ],
        answer: "him"
    },

    {
        question: "This book belongs to me. It is ___.",
        options: [
            "my",
            "mine",
            "me",
            "I"
        ],
        answer: "mine"
    },

    {
        question: "The children are playing. ___ are happy.",
        options: [
            "He",
            "She",
            "They",
            "It"
        ],
        answer: "They"
    },

    {
        question: "I bought this phone for ___.",
        options: [
            "I",
            "my",
            "me",
            "mine"
        ],
        answer: "me"
    },

    {
        question: "This is ___ car.",
        options: [
            "I",
            "me",
            "my",
            "mine"
        ],
        answer: "my"
    },

    {
        question: "The cat is hungry. ___ wants food.",
        options: [
            "He",
            "She",
            "It",
            "They"
        ],
        answer: "It"
    },

    {
        question: "Those bags belong to Ali and me. They are ___.",
        options: [
            "our",
            "ours",
            "us",
            "we"
        ],
        answer: "ours"
    },

    {
        question: "We prepared the food ___.",
        options: [
            "ourselves",
            "our",
            "us",
            "ours"
        ],
        answer: "ourselves"
    }

];


window.startPronounsQuiz = function(container) {

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
            index >= quiz5.length
        ) {

            finished = true;

            renderResult();

            return;

        }


        const current =
            quiz5[index];


        container.innerHTML = `

            <div class="quiz-screen">

                <div class="quiz-progress">

                    <span>
                        ${index + 1}
                        /
                        ${quiz5.length}
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
                        id="restartPronouns"
                    >
                        حاول مرة أخرى
                    </button>

                </div>

            </div>

        `;


        container
            .querySelector("#restartPronouns")
            .addEventListener(
                "click",
                startGame
            );

    }


    startGame();

};