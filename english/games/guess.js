/* =========================================================
   GAME: GUESS THE WORD
========================================================= */

const GUESS_WORDS = [

    {
        word: "hospital",
        clues: [
            "You can see a doctor here.",
            "People go here when they are sick.",
            "It has doctors and nurses."
        ]
    },

    {
        word: "library",
        clues: [
            "You can find many books here.",
            "People usually read here.",
            "It is usually quiet."
        ]
    },

    {
        word: "teacher",
        clues: [
            "This person works at a school.",
            "This person helps students learn.",
            "This person teaches."
        ]
    },

    {
        word: "airport",
        clues: [
            "People go here before a flight.",
            "You can see many airplanes here.",
            "You travel from here."
        ]
    }

];


window.startGuessGame = function(container) {

    let index = 0;

    let score = 0;


    function renderQuestion() {

        if (index >= GUESS_WORDS.length) {

            container.innerHTML = `

                <div class="game-screen">

                    <div class="game-result">

                        <h3>
                            انتهت اللعبة 🎉
                        </h3>

                        <p>
                            نتيجتك:
                            <strong>
                                ${score} / ${GUESS_WORDS.length}
                            </strong>
                        </p>

                        <button
                            type="button"
                            class="primary-game-button"
                            id="restartGuess"
                        >
                            العب مرة أخرى
                        </button>

                    </div>

                </div>

            `;


            document
                .getElementById("restartGuess")
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
            GUESS_WORDS[index];


        container.innerHTML = `

            <div class="game-screen">

                <div class="game-progress">

                    <span>
                        ${index + 1} / ${GUESS_WORDS.length}
                    </span>

                    <span class="game-score">
                        النقاط: ${score}
                    </span>

                </div>


                <p class="game-subtitle">
                    خمن الكلمة من خلال التلميح.
                </p>


                <div class="game-question">

                    ${current.clues[0]}

                </div>


                <div class="game-options">

                    ${generateOptions(current.word)}

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
                            current.word
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


    function generateOptions(correct) {

        const pool =
            GUESS_WORDS
                .map(item => item.word)
                .filter(word => word !== correct)
                .sort(
                    () => Math.random() - 0.5
                )
                .slice(0, 3);


        return [
            correct,
            ...pool
        ]
        .sort(
            () => Math.random() - 0.5
        )
        .map(
            word => `

                <button
                    type="button"
                    class="game-option"
                    data-answer="${word}"
                    dir="ltr"
                >
                    ${word}
                </button>

            `
        )
        .join("");

    }


    renderQuestion();

};