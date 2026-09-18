/* =========================================================
   GAME: FIND THE MISTAKE
========================================================= */

const MISTAKE_QUESTIONS = [

    {
        sentence: "She go to school every day.",
        options: [
            "She go",
            "to school",
            "every day"
        ],
        answer: "She go"
    },

    {
        sentence: "I am study English every day.",
        options: [
            "I am",
            "study English",
            "every day"
        ],
        answer: "I am"
    },

    {
        sentence: "He don't like coffee.",
        options: [
            "He",
            "don't like",
            "coffee"
        ],
        answer: "don't like"
    },

    {
        sentence: "They was very happy.",
        options: [
            "They",
            "was",
            "very happy"
        ],
        answer: "was"
    }

];


window.startMistakeGame = function(container) {

    let index = 0;

    let score = 0;


    function renderQuestion() {

        if (index >= MISTAKE_QUESTIONS.length) {

            container.innerHTML = `

                <div class="game-screen">

                    <div class="game-result">

                        <h3>
                            أحسنت! 🔎
                        </h3>

                        <p>
                            نتيجتك:
                            <strong>
                                ${score} / ${MISTAKE_QUESTIONS.length}
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


            document
                .getElementById("restartMistake")
                .addEventListener(
                    "click",
                    () => {

                        index = 0;
                        score = 0;

                        renderQuestion();

                    }
                );

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

                        if (
                            button.dataset.answer ===
                            current.answer
                        ) {

                            score++;

                            button.classList.add(
                                "correct"
                            );

                        } else {

                            button.classList.add(
                                "wrong"
                            );

                        }


                        container
                            .querySelectorAll(
                                ".game-option"
                            )
                            .forEach(
                                option =>
                                    option.disabled = true
                            );


                        setTimeout(
                            () => {

                                index++;

                                renderQuestion();

                            },
                            650
                        );

                    }
                );

            });

    }


    renderQuestion();

};