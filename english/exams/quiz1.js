/* =========================================================
   QUIZ: 1
========================================================= */

const quiz1 = [

    {
        question: "She ___ to school every day.",
        options: [
            "go",
            "goes",
            "going",
            "gone"
        ],
        answer: "goes"
    },

    {
        question: "They ___ football yesterday.",
        options: [
            "play",
            "plays",
            "played",
            "playing"
        ],
        answer: "played"
    },

    {
        question: "I ___ dinner right now.",
        options: [
            "cook",
            "cooked",
            "am cooking",
            "have cooked"
        ],
        answer: "am cooking"
    },

    {
        question: "He ___ here since 2020.",
        options: [
            "lives",
            "lived",
            "has lived",
            "is living"
        ],
        answer: "has lived"
    },

    {
        question: "We ___ to London next week.",
        options: [
            "travel",
            "traveled",
            "will travel",
            "traveling"
        ],
        answer: "will travel"
    },

    {
        question: "She ___ her homework before dinner yesterday.",
        options: [
            "finishes",
            "finished",
            "had finished",
            "has finished"
        ],
        answer: "had finished"
    },

    {
        question: "Look! The children ___.",
        options: [
            "run",
            "ran",
            "are running",
            "have run"
        ],
        answer: "are running"
    },

    {
        question: "I ___ this movie three times.",
        options: [
            "see",
            "saw",
            "have seen",
            "am seeing"
        ],
        answer: "have seen"
    },

    {
        question: "When I arrived, they ___.",
        options: [
            "sleep",
            "slept",
            "were sleeping",
            "have slept"
        ],
        answer: "were sleeping"
    },

    {
        question: "He usually ___ coffee in the morning.",
        options: [
            "drink",
            "drinks",
            "drank",
            "is drinking"
        ],
        answer: "drinks"
    }

];


window.startquiz1Quiz = function(container) {

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


    window.stopCurrentQuiz =
        clearTimer;


    window.finishCurrentQuiz =
        function() {

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
            index >= quiz1.length
        ) {

            finished = true;

            renderResult();

            return;

        }


        const current =
            quiz1[index];


        container.innerHTML = `

            <div class="quiz-screen">

                <div class="quiz-progress">

                    <span>
                        ${index + 1}
                        /
                        ${quiz1.length}
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
                            .querySelectorAll(
                                ".quiz-option"
                            )
                            .forEach(
                                option =>
                                    option.disabled = true
                            );


                        const correct =
                            button.dataset.answer ===
                            current.answer;


                        if (correct) {

                            score++;

                            streak++;

                            bestStreak =
                                Math.max(
                                    bestStreak,
                                    streak
                                );


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
                "ممتاز جدًا! أداء رائع 🔥";

        } else if (percentage >= 70) {

            message =
                "أداء رائع! استمر 👏";

        } else if (percentage >= 50) {

            message =
                "جيد! حاول مرة أخرى لتحسن نتيجتك 💪";

        } else {

            message =
                "استمر في التدريب وستتحسن مع الوقت 📚";

        }


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
                        id="restartquiz1"
                    >
                        حاول مرة أخرى
                    </button>

                </div>

            </div>

        `;


        container
            .querySelector("#restartquiz1")
            .addEventListener(
                "click",
                startGame
            );

    }


    startGame();

};