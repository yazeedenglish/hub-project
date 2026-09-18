/* =========================================================
   GAME: WORD SCRAMBLE
========================================================= */

const SCRAMBLE_WORDS = [

    "apple",
    "school",
    "teacher",
    "window",
    "beautiful",
    "important",
    "morning",
    "computer"

];


window.startScrambleGame = function(container) {

    let index = 0;

    let score = 0;


    function shuffleWord(word) {

        const letters =
            word.split("");

        for (
            let i = letters.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [
                letters[i],
                letters[j]
            ] =
            [
                letters[j],
                letters[i]
            ];

        }

        return letters.join("");
    }


    function renderQuestion() {

        if (index >= SCRAMBLE_WORDS.length) {

            container.innerHTML = `

                <div class="game-screen">

                    <div class="game-result">

                        <h3>
                            انتهى التحدي 🎉
                        </h3>

                        <p>
                            نتيجتك:
                            <strong>
                                ${score} / ${SCRAMBLE_WORDS.length}
                            </strong>
                        </p>

                        <button
                            type="button"
                            class="primary-game-button"
                            id="restartScramble"
                        >
                            العب مرة أخرى
                        </button>

                    </div>

                </div>

            `;


            document
                .getElementById("restartScramble")
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


        const answer =
            SCRAMBLE_WORDS[index];

        let scrambled =
            shuffleWord(answer);


        if (scrambled === answer) {

            scrambled =
                shuffleWord(answer);

        }


        container.innerHTML = `

            <div class="game-screen">

                <div class="game-progress">

                    <span>
                        ${index + 1} / ${SCRAMBLE_WORDS.length}
                    </span>

                    <span class="game-score">
                        النقاط: ${score}
                    </span>

                </div>


                <p class="game-subtitle">
                    رتّب الحروف لتكوين الكلمة الصحيحة.
                </p>


                <div
                    class="scramble-word"
                    dir="ltr"
                >
                    ${scrambled}
                </div>


                <input
                    id="scrambleInput"
                    class="answer-input"
                    type="text"
                    autocomplete="off"
                    placeholder="اكتب الكلمة هنا"
                >


                <br><br>


                <button
                    id="scrambleSubmit"
                    class="primary-game-button"
                    type="button"
                >
                    تحقق
                </button>

            </div>

        `;


        const input =
            document.getElementById(
                "scrambleInput"
            );


        const submit =
            document.getElementById(
                "scrambleSubmit"
            );


        function submitAnswer() {

            const value =
                input.value
                    .trim()
                    .toLowerCase();


            if (!value) {

                input.focus();

                return;
            }


            if (value === answer) {

                score++;

            }


            index++;

            renderQuestion();

        }


        submit.addEventListener(
            "click",
            submitAnswer
        );


        input.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    submitAnswer();

                }

            }
        );


        input.focus();

    }


    renderQuestion();

};