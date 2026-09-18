/* =========================================================
   GAME: SURVIVAL
========================================================= */

const SURVIVAL_QUESTIONS = [

    {
        question: "What is the opposite of 'hot'?",
        options: [
            "Cold",
            "Fast",
            "Big",
            "Tall"
        ],
        answer: "Cold"
    },

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
        question: "What does 'happy' mean?",
        options: [
            "سعيد",
            "غاضب",
            "متعب",
            "جائع"
        ],
        answer: "سعيد"
    },

    {
        question: "I ___ coffee every morning.",
        options: [
            "drink",
            "drinks",
            "drinking",
            "drank"
        ],
        answer: "drink"
    },

    {
        question: "Which word means 'سريع'?",
        options: [
            "Slow",
            "Fast",
            "Weak",
            "Quiet"
        ],
        answer: "Fast"
    },

    {
        question: "They ___ watching TV now.",
        options: [
            "is",
            "are",
            "am",
            "be"
        ],
        answer: "are"
    }

];


window.startSurvivalGame = function(container) {

    let score = 0;

    let questionIndex = 0;


    function renderQuestion() {

        if (
            questionIndex >=
            SURVIVAL_QUESTIONS.length
        ) {

            questionIndex = 0;

        }


        const current =
            SURVIVAL_QUESTIONS[questionIndex];


        container.innerHTML = `

            <div class="game-screen">

                <div class="game-progress">

                    <span class="survival-life">
                        ❤️ محاولة واحدة
                    </span>

                    <span class="game-score">
                        النقاط: ${score}
                    </span>

                </div>


                <p class="game-subtitle">
                    أجب بشكل صحيح واستمر في التحدي.
                </p>


                <div class="survival-streak">
                    🔥
                    <span>${score}</span>
                </div>


                <div
                    class="game-question"
                    dir="ltr"
                >
                    ${current.question}
                </div>


                <div class="game-options">

                    ${current.options.map(
                        option => `

                            <button
                                type="button"
                                class="game-option"
                                data-answer="${option}"
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

                            button.classList.add(
                                "correct"
                            );


                            questionIndex++;


                            setTimeout(
                                renderQuestion,
                                500
                            );

                            return;
                        }


                        button.classList.add(
                            "wrong"
                        );


                        setTimeout(
                            renderGameOver,
                            650
                        );

                    }
                );

            });

    }


    function renderGameOver() {

        container.innerHTML = `

            <div class="game-screen">

                <div class="game-result">

                    <h3>
                        انتهى التحدي 🔥
                    </h3>

                    <p>
                        حافظت على سلسلة من
                        <strong>
                            ${score}
                        </strong>
                        إجابات صحيحة.
                    </p>

                    <button
                        type="button"
                        class="primary-game-button"
                        id="restartSurvival"
                    >
                        حاول مرة أخرى
                    </button>

                </div>

            </div>

        `;


        document
            .getElementById("restartSurvival")
            .addEventListener(
                "click",
                () => {

                    score = 0;
                    questionIndex = 0;

                    renderQuestion();

                }
            );

    }


    renderQuestion();

};