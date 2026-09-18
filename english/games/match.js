/* =========================================================
   GAME: MATCH WORDS
========================================================= */

const MATCH_WORDS = [

    {
        english: "Apple",
        arabic: "تفاحة"
    },

    {
        english: "Book",
        arabic: "كتاب"
    },

    {
        english: "House",
        arabic: "منزل"
    },

    {
        english: "Teacher",
        arabic: "معلم"
    },

    {
        english: "Beautiful",
        arabic: "جميل"
    },

    {
        english: "Important",
        arabic: "مهم"
    }

];


window.startMatchGame = function(container) {

    let index = 0;

    let score = 0;


    function renderQuestion() {

        if (index >= MATCH_WORDS.length) {

            renderResult();

            return;
        }


        const current =
            MATCH_WORDS[index];


        const otherWords =
            MATCH_WORDS
                .filter(
                    word =>
                        word.arabic !== current.arabic
                )
                .sort(
                    () => Math.random() - 0.5
                )
                .slice(0, 3);


        const options = [
            current,
            ...otherWords
        ].sort(
            () => Math.random() - 0.5
        );


        container.innerHTML = `

            <div class="game-screen">

                <div class="game-progress">

                    <span>
                        ${index + 1} / ${MATCH_WORDS.length}
                    </span>

                    <span class="game-score">
                        النقاط: ${score}
                    </span>

                </div>


                <p class="game-subtitle">
                    ما معنى الكلمة التالية؟
                </p>


                <div class="game-question">
                    ${current.english}
                </div>


                <div class="game-options">

                    ${options.map(
                        option => `

                            <button
                                type="button"
                                class="game-option"
                                data-answer="${option.arabic}"
                            >
                                ${option.arabic}
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
                            current.arabic;


                        if (correct) {

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


    function renderResult() {

        container.innerHTML = `

            <div class="game-screen">

                <div class="game-result">

                    <h3>
                        أحسنت! 🎉
                    </h3>

                    <p>
                        حصلت على
                        <strong>${score}</strong>
                        من
                        <strong>${MATCH_WORDS.length}</strong>
                        إجابات صحيحة.
                    </p>

                    <button
                        type="button"
                        class="primary-game-button"
                        id="restartMatch"
                    >
                        العب مرة أخرى
                    </button>

                </div>

            </div>

        `;


        document
            .getElementById("restartMatch")
            .addEventListener(
                "click",
                () => {

                    index = 0;
                    score = 0;

                    renderQuestion();

                }
            );

    }


    renderQuestion();

};