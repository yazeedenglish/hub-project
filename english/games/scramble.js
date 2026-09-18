/* =========================================================
   GAME: WORD SCRAMBLE
========================================================= */

const SCRAMBLE_WORDS = [

    "apple",
    "school",
    "teacher",
    "window",
    "morning",
    "computer",
    "garden",
    "family",
    "friend",
    "house",
    "water",
    "important",
    "beautiful",
    "language",
    "student",
    "holiday",
    "country",
    "weather",
    "library",
    "journey",
    "problem",
    "answer",
    "picture",
    "market",
    "hospital",
    "exercise",
    "healthy",
    "different",
    "possible",
    "careful",
    "message",
    "remember",
    "question",
    "together",
    "popular",
    "future",
    "success",
    "practice",
    "improve",
    "decide",
    "discover",
    "experience",
    "knowledge",
    "education",
    "environment",
    "technology",
    "challenge",
    "necessary",
    "solution",
    "opportunity"

];


/* =========================================================
   START WORD SCRAMBLE GAME
========================================================= */

window.startScrambleGame = function(container) {

    let questions = [];

    let index = 0;

    let score = 0;

    let streak = 0;

    let bestStreak = 0;

    let selectedLetters = [];

    let hintCount = 0;

    let gameOver = false;

    let questionTimer = null;

    window.scrambleGameFinished = false;


    /* =====================================================
       CLEAR TIMER
    ===================================================== */

    function clearGameTimer() {

        if (questionTimer) {

            clearTimeout(questionTimer);

            questionTimer = null;

        }

    }


    /* =====================================================
       SHUFFLE ARRAY
    ===================================================== */

    function shuffleArray(array) {

        const shuffled = [...array];

        for (
            let i = shuffled.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [
                shuffled[i],
                shuffled[j]
            ] =
            [
                shuffled[j],
                shuffled[i]
            ];

        }

        return shuffled;

    }


    /* =====================================================
       SHUFFLE WORD
    ===================================================== */

    function shuffleWord(word) {

        let shuffled;

        do {

            shuffled =
                shuffleArray(
                    word.split("")
                );

        } while (
            shuffled.join("") === word &&
            word.length > 1
        );

        return shuffled;

    }


    /* =====================================================
       X BUTTON
    ===================================================== */

    window.finishCurrentGame = function() {

        clearGameTimer();

        if (window.scrambleGameFinished) {

            closeGame();

            return;

        }

        window.scrambleGameFinished = true;

        gameOver = true;

        renderResult();

    };


    /* =====================================================
       START / RESTART
    ===================================================== */

    function startGame() {

        clearGameTimer();

        index = 0;

        score = 0;

        streak = 0;

        bestStreak = 0;

        selectedLetters = [];

        hintCount = 0;

        gameOver = false;

        window.scrambleGameFinished = false;


        questions =
            shuffleArray(
                SCRAMBLE_WORDS
            );


        renderQuestion();

    }


    /* =====================================================
       RENDER QUESTION
    ===================================================== */

    function renderQuestion() {

        clearGameTimer();


        if (
            gameOver ||
            window.scrambleGameFinished
        ) {

            renderResult();

            return;

        }


        if (
            index >=
            questions.length
        ) {

            gameOver = true;

            window.scrambleGameFinished = true;

            renderResult();

            return;

        }


        selectedLetters = [];

        hintCount = 0;


        const answer =
            questions[index];


        const scrambledLetters =
            shuffleWord(answer);


        container.innerHTML = `

            <div class="game-screen scramble-screen">

                <div class="game-progress">

                    <span>
                        ${index + 1} / ${questions.length}
                    </span>

                    <span class="game-streak">
                        🔥 ${streak}
                    </span>

                    <span class="game-score">
                        النقاط: ${score}
                    </span>

                </div>


                <p class="scramble-hint">
                    اضغط على الحروف بالترتيب لتكوين الكلمة الصحيحة
                </p>


                <!-- ANSWER -->

                <div
                    id="scrambleAnswer"
                    class="scramble-answer"
                    dir="ltr"
                >

                    <span class="scramble-placeholder">

                    </span>

                </div>


                <!-- SCRAMBLED LETTERS -->

                <div
                    id="scrambleLetters"
                    class="scramble-letters"
                    dir="ltr"
                >

                    ${scrambledLetters
                        .map(
                            (letter, letterIndex) => `

                                <button
                                    type="button"
                                    class="scramble-letter"
                                    data-letter="${letter}"
                                    data-index="${letterIndex}"
                                >
                                    ${letter.toUpperCase()}
                                </button>

                            `
                        )
                        .join("")}

                </div>


                <!-- ACTIONS -->

                <div class="scramble-actions">

                    <button
                        id="scrambleReset"
                        class="secondary-game-button"
                        type="button"
                    >
                        إعادة المحاولة
                    </button>


                    <button
                        id="scrambleHint"
                        class="hint-game-button"
                        type="button"
                    >
                        💡 تلميح <span>0 / 3</span>
                    </button>


                    <button
                        id="scrambleReveal"
                        class="secondary-game-button"
                        type="button"
                    >
                        لا أعرف الكلمة
                    </button>

                </div>

            </div>

        `;


        const letterButtons =
            container.querySelectorAll(
                ".scramble-letter"
            );


        const answerArea =
            container.querySelector(
                "#scrambleAnswer"
            );


        const resetButton =
            container.querySelector(
                "#scrambleReset"
            );


        const hintButton =
            container.querySelector(
                "#scrambleHint"
            );


        const revealButton =
            container.querySelector(
                "#scrambleReveal"
            );


        /* =================================================
           UPDATE BUTTONS
        ================================================= */

        function updateActionButtons() {

            const completed =
                selectedLetters.length ===
                answer.length;


            resetButton.disabled =
                selectedLetters.length === 0;


            hintButton.disabled =
                hintCount >= 3 ||
                completed;


            hintButton.innerHTML =
                `💡 تلميح <span>${hintCount} / 3</span>`;

        }


        /* =================================================
           RENDER ANSWER
        ================================================= */

        function renderAnswer() {

            if (
                selectedLetters.length === 0
            ) {

                answerArea.innerHTML = `

                    <span class="scramble-placeholder">
                        اضغط على الحروف بالترتيب
                    </span>

                `;

                updateActionButtons();

                return;

            }


            answerArea.innerHTML =
                selectedLetters
                    .map(
                        (item, position) => `

                            <button
                                type="button"
                                class="scramble-selected-letter ${
                                    item.hinted
                                        ? "hint-letter"
                                        : ""
                                }"
                                data-position="${position}"
                                ${
                                    item.hinted
                                        ? "disabled"
                                        : ""
                                }
                                title="${
                                    item.hinted
                                        ? "حرف تم كشفه بالتلميح"
                                        : "اضغط لإزالة الحرف"
                                }"
                            >
                                ${item.letter.toUpperCase()}
                            </button>

                        `
                    )
                    .join("");


            const selectedButtons =
                answerArea.querySelectorAll(
                    ".scramble-selected-letter"
                );


            selectedButtons.forEach(
                button => {

                    /*
                        Hint letters are locked.
                    */

                    if (
                        button.disabled
                    ) {

                        return;

                    }


                    button.addEventListener(
                        "click",
                        () => {

                            if (gameOver) {
                                return;
                            }


                            const position =
                                Number(
                                    button.dataset.position
                                );


                            const removed =
                                selectedLetters[
                                    position
                                ];


                            /*
                                Safety check:
                                hinted letters cannot be removed.
                            */

                            if (
                                !removed ||
                                removed.hinted
                            ) {

                                return;

                            }


                            selectedLetters.splice(
                                position,
                                1
                            );


                            const originalButton =
                                container.querySelector(
                                    `.scramble-letter[data-index="${removed.sourceIndex}"]`
                                );


                            if (originalButton) {

                                originalButton.disabled =
                                    false;

                                originalButton.classList.remove(
                                    "letter-selected"
                                );

                            }


                            renderAnswer();

                        }
                    );

                }
            );


            updateActionButtons();

        }


        /* =================================================
           LETTER CLICK
        ================================================= */

        letterButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        if (
                            gameOver ||
                            button.disabled
                        ) {

                            return;

                        }


                        if (
                            selectedLetters.length >=
                            answer.length
                        ) {

                            return;

                        }


                        const letter =
                            button.dataset.letter;


                        const sourceIndex =
                            button.dataset.index;


                        selectedLetters.push({

                            letter:
                                letter,

                            sourceIndex:
                                sourceIndex,

                            hinted:
                                false

                        });


                        button.disabled = true;

                        button.classList.add(
                            "letter-selected"
                        );


                        renderAnswer();


                        /* Auto check when complete */

                        if (
                            selectedLetters.length ===
                            answer.length
                        ) {

                            checkAnswer();

                        }

                    }
                );

            }
        );


        /* =================================================
           RESET
        ================================================= */

        function resetAnswer() {

            if (gameOver) {
                return;
            }


            /*
                Keep letters revealed by hints.
                Remove only manually selected letters.
            */

            selectedLetters =
                selectedLetters.filter(
                    item => item.hinted
                );


            /*
                Reset all original letter buttons.
            */

            letterButtons.forEach(
                button => {

                    const sourceIndex =
                        button.dataset.index;


                    const isStillUsed =
                        selectedLetters.some(
                            item =>
                                String(
                                    item.sourceIndex
                                ) ===
                                String(
                                    sourceIndex
                                )
                        );


                    if (isStillUsed) {

                        button.disabled =
                            true;

                        button.classList.add(
                            "letter-selected"
                        );

                    } else {

                        button.disabled =
                            false;

                        button.classList.remove(
                            "letter-selected"
                        );

                    }

                }
            );


            answerArea.classList.remove(
                "scramble-shake"
            );


            renderAnswer();

        }


        resetButton.addEventListener(
            "click",
            resetAnswer
        );


        /* =================================================
           HINT
        ================================================= */

        function useHint() {

            if (gameOver) {
                return;
            }


            if (hintCount >= 3) {
                return;
            }


            /*
                Find the FIRST wrong position.

                Example:

                Correct:
                A P P L E

                User:
                A P X L E

                Hint will replace X with P.
            */

            let wrongPosition = -1;


            for (
                let i = 0;
                i < selectedLetters.length;
                i++
            ) {

                if (
                    selectedLetters[i].letter
                        .toLowerCase() !==
                    answer[i].toLowerCase()
                ) {

                    wrongPosition = i;

                    break;

                }

            }


            /* =================================================
               CASE 1:
               There is a wrong letter.

               Replace it with the correct letter.
            ================================================= */

            if (
                wrongPosition !== -1
            ) {

                const wrongLetter =
                    selectedLetters[
                        wrongPosition
                    ];


                /*
                    Release the wrong source button.
                */

                const wrongButton =
                    container.querySelector(
                        `.scramble-letter[data-index="${wrongLetter.sourceIndex}"]`
                    );


                if (wrongButton) {

                    wrongButton.disabled =
                        false;

                    wrongButton.classList.remove(
                        "letter-selected"
                    );

                }


                /*
                    Find the correct unused letter.

                    This also correctly handles
                    duplicate letters.
                */

                let correctButton = null;


                for (
                    let i = 0;
                    i < letterButtons.length;
                    i++
                ) {

                    const button =
                        letterButtons[i];


                    if (
                        !button.disabled &&
                        button.dataset.letter
                            .toLowerCase() ===
                        answer[
                            wrongPosition
                        ].toLowerCase()
                    ) {

                        correctButton =
                            button;

                        break;

                    }

                }


                /*
                    Safety check.
                */

                if (!correctButton) {
                    return;
                }


                /*
                    Replace the WRONG letter
                    with the CORRECT letter
                    in the SAME position.
                */

                selectedLetters[
                    wrongPosition
                ] = {

                    letter:
                        answer[
                            wrongPosition
                        ],

                    sourceIndex:
                        correctButton.dataset.index,

                    hinted:
                        true

                };


                /*
                    Disable the correct source button.
                */

                correctButton.disabled =
                    true;

                correctButton.classList.add(
                    "letter-selected"
                );


                hintCount++;


                renderAnswer();

                updateActionButtons();


                /*
                    Highlight the exact letter
                    that was revealed.
                */

                const selectedButtons =
                    answerArea.querySelectorAll(
                        ".scramble-selected-letter"
                    );


                const hintLetter =
                    selectedButtons[
                        wrongPosition
                    ];


                if (hintLetter) {

                    hintLetter.classList.remove(
                        "hint-letter"
                    );

                    void hintLetter.offsetWidth;

                    hintLetter.classList.add(
                        "hint-letter"
                    );

                }


                /*
                    Check automatically if complete.
                */

                if (
                    selectedLetters.length ===
                    answer.length
                ) {

                    checkAnswer();

                }


                return;

            }


            /* =================================================
               CASE 2:
               No wrong letters.

               Add the NEXT correct letter.
            ================================================= */

            const nextPosition =
                selectedLetters.length;


            /*
                If the word is already complete,
                do nothing.
            */

            if (
                nextPosition >=
                answer.length
            ) {

                return;

            }


            /*
                Find an unused source letter
                matching the next correct letter.
            */

            let correctButton = null;


            for (
                let i = 0;
                i < letterButtons.length;
                i++
            ) {

                const button =
                    letterButtons[i];


                if (
                    !button.disabled &&
                    button.dataset.letter
                        .toLowerCase() ===
                    answer[
                        nextPosition
                    ].toLowerCase()
                ) {

                    correctButton =
                        button;

                    break;

                }

            }


            /*
                Safety check.
            */

            if (!correctButton) {
                return;
            }


            /*
                Add the correct letter
                as a permanent hint.
            */

            selectedLetters.push({

                letter:
                    answer[
                        nextPosition
                    ],

                sourceIndex:
                    correctButton.dataset.index,

                hinted:
                    true

            });


            correctButton.disabled =
                true;

            correctButton.classList.add(
                "letter-selected"
            );


            hintCount++;


            renderAnswer();

            updateActionButtons();


            /*
                Animate the newly revealed letter.
            */

            const selectedButtons =
                answerArea.querySelectorAll(
                    ".scramble-selected-letter"
                );


            const hintLetter =
                selectedButtons[
                    nextPosition
                ];


            if (hintLetter) {

                hintLetter.classList.remove(
                    "hint-letter"
                );

                void hintLetter.offsetWidth;

                hintLetter.classList.add(
                    "hint-letter"
                );

            }


            /*
                Check automatically if complete.
            */

            if (
                selectedLetters.length ===
                answer.length
            ) {

                checkAnswer();

            }

        }


        hintButton.addEventListener(
            "click",
            useHint
        );


        /* =================================================
           CHECK ANSWER
        ================================================= */

        function checkAnswer() {

            if (gameOver) {
                return;
            }


            const currentAnswer =
                selectedLetters
                    .map(
                        item =>
                            item.letter
                    )
                    .join("");


            /* =================================================
               CORRECT
            ================================================= */

            if (
                currentAnswer ===
                answer
            ) {

                score++;

                streak++;


                if (
                    streak >
                    bestStreak
                ) {

                    bestStreak =
                        streak;

                }


                gameOver = true;


                answerArea.classList.add(
                    "scramble-correct"
                );


                letterButtons.forEach(
                    button => {

                        button.disabled = true;

                    }
                );


                resetButton.disabled = true;

                hintButton.disabled = true;

                revealButton.disabled = true;


                questionTimer =
                    setTimeout(
                        () => {

                            gameOver = false;

                            index++;

                            renderQuestion();

                        },
                        800
                    );


                return;

            }


            /* =================================================
               WRONG
            ================================================= */

            streak = 0;


            answerArea.classList.remove(
                "scramble-shake"
            );


            void answerArea.offsetWidth;


            answerArea.classList.add(
                "scramble-shake"
            );


            /*
                Do NOT remove the answer.

                The player can now:

                1. Press RESET
                2. Press HINT
                3. Remove individual letters
            */

            setTimeout(
                () => {

                    if (!gameOver) {

                        answerArea.classList.remove(
                            "scramble-shake"
                        );

                    }

                },
                500
            );

        }


        /* =================================================
           REVEAL ANSWER
        ================================================= */

        function revealAnswer() {

            if (gameOver) {
                return;
            }


            gameOver = true;

            streak = 0;


            letterButtons.forEach(
                button => {

                    button.disabled = true;

                }
            );


            resetButton.disabled = true;

            hintButton.disabled = true;

            revealButton.disabled = true;


            answerArea.innerHTML =
                answer
                    .split("")
                    .map(
                        (letter, position) => `

                            <span
                                class="scramble-reveal-letter"
                                style="animation-delay: ${position * 60}ms"
                            >
                                ${letter.toUpperCase()}
                            </span>

                        `
                    )
                    .join("");


            answerArea.classList.add(
                "scramble-revealed"
            );


            questionTimer =
                setTimeout(
                    () => {

                        gameOver = false;

                        index++;

                        renderQuestion();

                    },
                    1300
                );

        }


        revealButton.addEventListener(
            "click",
            revealAnswer
        );


        updateActionButtons();

    }


    /* =========================================================
       RESULT
    ========================================================= */

    function renderResult() {

        clearGameTimer();


        const total =
            questions.length;


        const percentage =
            total > 0
                ? Math.round(
                    (score / total) * 100
                )
                : 0;


        let message;


        if (
            percentage >= 90
        ) {

            message =
                "ممتاز جدًا! أداء رائع 🔥";

        } else if (
            percentage >= 70
        ) {

            message =
                "أداء رائع! استمر 👏";

        } else if (
            percentage >= 50
        ) {

            message =
                "أداء جيد! حاول تحسين نتيجتك 💪";

        } else {

            message =
                "استمر في التدريب وستتحسن مع الوقت 📚";

        }


        window.scrambleGameFinished = true;


        container.innerHTML = `

            <div class="game-screen">

                <div class="game-result">

                    <div class="result-icon">
                        🎉
                    </div>


                    <h3>
                        انتهت اللعبة
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

                        نسبة الإجابات الصحيحة:

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
                        class="primary-game-button"
                        id="restartScramble"
                    >
                        العب مرة أخرى
                    </button>

                </div>

            </div>

        `;


        const restart =
            container.querySelector(
                "#restartScramble"
            );


        restart.addEventListener(
            "click",
            startGame
        );

    }


    /* =========================================================
       INITIALIZE
    ========================================================= */

    startGame();

};