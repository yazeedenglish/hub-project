/* =========================================================
   GAME: SURVIVAL
========================================================= */

const SURVIVAL_QUESTIONS = [

    /* =========================================================
       A1 — BEGINNER
       Questions 1–25
    ========================================================= */

    {
        question: "What is the opposite of 'hot'?",
        options: ["Cold", "Fast", "Big", "Tall"],
        answer: "Cold"
    },

    {
        question: "She ___ to school every day",
        options: ["go", "goes", "going", "gone"],
        answer: "goes"
    },

    {
        question: "What does 'happy' mean?",
        options: ["سعيد", "غاضب", "متعب", "جائع"],
        answer: "سعيد"
    },

    {
        question: "I ___ coffee every morning",
        options: ["drink", "drinks", "drinking", "drank"],
        answer: "drink"
    },

    {
        question: "Which word means 'سريع'?",
        options: ["Slow", "Fast", "Weak", "Quiet"],
        answer: "Fast"
    },

    {
        question: "They ___ watching TV now",
        options: ["is", "are", "am", "be"],
        answer: "are"
    },

    {
        question: "What is the opposite of 'big'?",
        options: ["Small", "Long", "Heavy", "Wide"],
        answer: "Small"
    },

    {
        question: "He ___ football every weekend",
        options: ["play", "plays", "playing", "played"],
        answer: "plays"
    },

    {
        question: "What does 'beautiful' mean?",
        options: ["جميل", "قوي", "سريع", "قديم"],
        answer: "جميل"
    },

    {
        question: "We ___ English at school",
        options: ["study", "studies", "studying", "studied"],
        answer: "study"
    },

    {
        question: "Which word means 'كبير'?",
        options: ["Small", "Large", "Short", "Weak"],
        answer: "Large"
    },

    {
        question: "She ___ a new book yesterday",
        options: ["buy", "buys", "bought", "buying"],
        answer: "bought"
    },

    {
        question: "What is the opposite of 'easy'?",
        options: ["Simple", "Hard", "Light", "Soft"],
        answer: "Hard"
    },

    {
        question: "I ___ my homework last night",
        options: ["finish", "finished", "finishes", "finishing"],
        answer: "finished"
    },

    {
        question: "What does 'expensive' mean?",
        options: ["رخيص", "غالي", "قديم", "صغير"],
        answer: "غالي"
    },

    {
        question: "He ___ dinner right now",
        options: ["cooks", "cooked", "is cooking", "cook"],
        answer: "is cooking"
    },

    {
        question: "Which word means 'هادئ'?",
        options: ["Quiet", "Noisy", "Fast", "Angry"],
        answer: "Quiet"
    },

    {
        question: "They ___ to the park yesterday",
        options: ["go", "goes", "went", "going"],
        answer: "went"
    },

    {
        question: "What is the opposite of 'old'?",
        options: ["Young", "Slow", "Late", "Weak"],
        answer: "Young"
    },

    {
        question: "She ___ three brothers",
        options: ["have", "has", "having", "had"],
        answer: "has"
    },

    {
        question: "What does 'strong' mean?",
        options: ["ضعيف", "قوي", "قصير", "هادئ"],
        answer: "قوي"
    },

    {
        question: "I ___ watching a movie now",
        options: ["am", "is", "are", "be"],
        answer: "am"
    },

    {
        question: "Which word means 'ذكي'?",
        options: ["Lazy", "Smart", "Slow", "Weak"],
        answer: "Smart"
    },

    {
        question: "He ___ his room every Saturday",
        options: ["clean", "cleans", "cleaning", "cleaned"],
        answer: "cleans"
    },

    {
        question: "What is the opposite of 'early'?",
        options: ["Fast", "Late", "Soon", "Quick"],
        answer: "Late"
    },


    /* =========================================================
       A2 — ELEMENTARY
       Questions 26–50
    ========================================================= */

    {
        question: "We ___ dinner when our friends arrived",
        options: ["have", "had", "were having", "are having"],
        answer: "were having"
    },

    {
        question: "She has lived here ___ 2022",
        options: ["for", "since", "during", "from"],
        answer: "since"
    },

    {
        question: "There isn't ___ milk in the fridge",
        options: ["some", "many", "any", "few"],
        answer: "any"
    },

    {
        question: "My brother is ___ than me",
        options: ["tall", "taller", "tallest", "more tall"],
        answer: "taller"
    },

    {
        question: "What does 'careful' mean?",
        options: ["حذر", "سريع", "كسول", "غاضب"],
        answer: "حذر"
    },

    {
        question: "You ___ wear a seat belt in a car",
        options: ["should", "might", "couldn't", "would"],
        answer: "should"
    },

    {
        question: "I have ___ finished my work",
        options: ["yet", "already", "still", "ever"],
        answer: "already"
    },

    {
        question: "They ___ to the cinema last Friday",
        options: ["go", "have gone", "went", "are going"],
        answer: "went"
    },

    {
        question: "If it rains, we ___ stay at home",
        options: ["would", "will", "did", "have"],
        answer: "will"
    },

    {
        question: "Which word means 'مزدحم'?",
        options: ["Crowded", "Empty", "Quiet", "Clean"],
        answer: "Crowded"
    },

    {
        question: "She is interested ___ learning Spanish",
        options: ["at", "on", "in", "for"],
        answer: "in"
    },

    {
        question: "I ___ never eaten sushi before",
        options: ["am", "was", "have", "did"],
        answer: "have"
    },

    {
        question: "How ___ apples do you need?",
        options: ["much", "many", "long", "often"],
        answer: "many"
    },

    {
        question: "He went to bed ___ he was tired",
        options: ["because", "but", "although", "so"],
        answer: "because"
    },

    {
        question: "What is the opposite of 'noisy'?",
        options: ["Busy", "Quiet", "Loud", "Fast"],
        answer: "Quiet"
    },

    {
        question: "We have lived in Riyadh ___ three years",
        options: ["since", "from", "for", "during"],
        answer: "for"
    },

    {
        question: "This bag is ___ heavy for me to carry",
        options: ["too", "enough", "very much", "many"],
        answer: "too"
    },

    {
        question: "She ___ dinner before she went to bed",
        options: ["has eaten", "had eaten", "eats", "is eating"],
        answer: "had eaten"
    },

    {
        question: "Which word means 'مفيد'?",
        options: ["Useful", "Useless", "Difficult", "Famous"],
        answer: "Useful"
    },

    {
        question: "You haven't finished your homework, ___?",
        options: ["have you", "haven't you", "did you", "do you"],
        answer: "have you"
    },

    {
        question: "My father ___ to work by car every day",
        options: ["go", "goes", "going", "gone"],
        answer: "goes"
    },

    {
        question: "I was tired, ___ I went to bed early",
        options: ["because", "so", "but", "although"],
        answer: "so"
    },

    {
        question: "What does 'borrow' mean?",
        options: ["يستعير", "يبيع", "يشتري", "يكسر"],
        answer: "يستعير"
    },

    {
        question: "There are ___ people in the room than before",
        options: ["less", "few", "fewer", "little"],
        answer: "fewer"
    },

    {
        question: "She asked me ___ I needed any help",
        options: ["what", "if", "where", "which"],
        answer: "if"
    },


    /* =========================================================
       B1 — INTERMEDIATE
       Questions 51–75
    ========================================================= */

    {
        question: "If I had more free time, I ___ another language",
        options: ["learn", "will learn", "would learn", "have learned"],
        answer: "would learn"
    },

    {
        question: "The new bridge ___ next year",
        options: ["will complete", "will be completed", "completed", "is completing"],
        answer: "will be completed"
    },

    {
        question: "She has been working here ___ she graduated",
        options: ["for", "while", "since", "during"],
        answer: "since"
    },

    {
        question: "He apologized ___ being late",
        options: ["for", "about", "with", "at"],
        answer: "for"
    },

    {
        question: "By the time we arrived, the movie ___",
        options: ["started", "has started", "had started", "was starting"],
        answer: "had started"
    },

    {
        question: "What does 'reliable' mean?",
        options: ["يمكن الاعتماد عليه", "خطير", "مكلف", "ممل"],
        answer: "يمكن الاعتماد عليه"
    },

    {
        question: "She suggested ___ the meeting until Monday",
        options: ["delay", "to delay", "delaying", "delayed"],
        answer: "delaying"
    },

    {
        question: "I wish I ___ more time to study",
        options: ["have", "had", "will have", "am having"],
        answer: "had"
    },

    {
        question: "The teacher told us ___ our phones away",
        options: ["put", "putting", "to put", "puts"],
        answer: "to put"
    },

    {
        question: "Although the test was difficult, most students ___ it",
        options: ["passed", "passing", "have pass", "were pass"],
        answer: "passed"
    },

    {
        question: "Which word is closest in meaning to 'rapid'?",
        options: ["Slow", "Quick", "Weak", "Rare"],
        answer: "Quick"
    },

    {
        question: "If you had studied harder, you ___ the exam",
        options: ["pass", "will pass", "would have passed", "passed"],
        answer: "would have passed"
    },

    {
        question: "The man ___ lives next door is a doctor",
        options: ["which", "where", "who", "what"],
        answer: "who"
    },

    {
        question: "We need to find a solution ___ this problem",
        options: ["to", "for", "at", "on"],
        answer: "to"
    },

    {
        question: "He denied ___ the money",
        options: ["take", "to take", "taking", "took"],
        answer: "taking"
    },

    {
        question: "The company has ___ its prices because of higher costs",
        options: ["raised", "risen", "raising", "rise"],
        answer: "raised"
    },

    {
        question: "What does 'accurate' mean?",
        options: ["دقيق", "سريع", "معقد", "قديم"],
        answer: "دقيق"
    },

    {
        question: "I would rather ___ at home tonight",
        options: ["stay", "staying", "to stay", "stayed"],
        answer: "stay"
    },

    {
        question: "The report must ___ before Friday",
        options: ["finish", "be finished", "finished", "finishing"],
        answer: "be finished"
    },

    {
        question: "She is used to ___ early in the morning",
        options: ["wake", "waking", "woke", "wakes"],
        answer: "waking"
    },

    {
        question: "Despite ___ tired, he continued studying",
        options: ["be", "being", "was", "been"],
        answer: "being"
    },

    {
        question: "The project was delayed ___ a lack of funding",
        options: ["because", "because of", "although", "despite"],
        answer: "because of"
    },

    {
        question: "Which word is closest in meaning to 'essential'?",
        options: ["Optional", "Necessary", "Temporary", "Unusual"],
        answer: "Necessary"
    },

    {
        question: "She asked whether I ___ the report",
        options: ["finish", "finished", "had finished", "am finishing"],
        answer: "had finished"
    },

    {
        question: "The results were different ___ what we expected",
        options: ["from", "than", "with", "by"],
        answer: "from"
    },


    /* =========================================================
       B2 — UPPER-INTERMEDIATE
       Questions 76–100
    ========================================================= */

    {
        question: "Had I known about the problem, I ___ you earlier",
        options: ["would tell", "would have told", "will tell", "told"],
        answer: "would have told"
    },

    {
        question: "The research suggests that regular exercise ___ the risk of disease",
        options: ["reduces", "reduce", "reducing", "has reducing"],
        answer: "reduces"
    },

    {
        question: "No sooner ___ the meeting started than the electricity went out",
        options: ["had", "has", "did", "was"],
        answer: "had"
    },

    {
        question: "The proposal was rejected, ___ several experts had supported it",
        options: ["despite", "although", "because", "therefore"],
        answer: "although"
    },

    {
        question: "What does 'ambiguous' mean?",
        options: ["واضح جدًا", "قابل لأكثر من تفسير", "غير قانوني", "قديم"],
        answer: "قابل لأكثر من تفسير"
    },

    {
        question: "The manager insisted that everyone ___ on time",
        options: ["arrives", "arrived", "arrive", "will arrive"],
        answer: "arrive"
    },

    {
        question: "The issue needs to be dealt ___ immediately",
        options: ["with", "by", "to", "for"],
        answer: "with"
    },

    {
        question: "She would have succeeded if she ___ more confident",
        options: ["is", "was", "had been", "has been"],
        answer: "had been"
    },

    {
        question: "The company is expected ___ a major announcement soon",
        options: ["make", "making", "to make", "made"],
        answer: "to make"
    },

    {
        question: "What does 'substantial' mean in this context?",
        options: ["Very small", "Considerable", "Temporary", "Uncertain"],
        answer: "Considerable"
    },

    {
        question: "The evidence was not sufficient ___ a conclusion",
        options: ["to draw", "drawing", "draw", "drawn"],
        answer: "to draw"
    },

    {
        question: "Were the government ___ the proposal, the project could begin immediately",
        options: ["approve", "to approve", "approved", "approving"],
        answer: "to approve"
    },

    {
        question: "The article raises several questions ___ the effects of technology",
        options: ["regarding", "despite", "unless", "whereas"],
        answer: "regarding"
    },

    {
        question: "He is believed ___ responsible for the decision",
        options: ["be", "being", "to be", "been"],
        answer: "to be"
    },

    {
        question: "What is the closest meaning of 'inevitable'?",
        options: ["Impossible to avoid", "Easy to change", "Difficult to understand", "Likely to disappear"],
        answer: "Impossible to avoid"
    },

    {
        question: "The results were far ___ our expectations",
        options: ["beyond", "between", "under", "along"],
        answer: "beyond"
    },

    {
        question: "Not only ___ the course informative, but it was also enjoyable",
        options: ["was", "were", "did", "has"],
        answer: "was"
    },

    {
        question: "The scientist's findings have yet to ___ independently",
        options: ["verify", "be verified", "verified", "verifying"],
        answer: "be verified"
    },

    {
        question: "What does 'plausible' mean?",
        options: ["Seemingly reasonable", "Completely impossible", "Extremely expensive", "Very obvious"],
        answer: "Seemingly reasonable"
    },

    {
        question: "The policy was introduced with the aim of ___ unemployment",
        options: ["reduce", "reduced", "reducing", "to reducing"],
        answer: "reducing"
    },

    {
        question: "Had the weather been better, the event ___ outdoors",
        options: ["would hold", "would have been held", "will be held", "was held"],
        answer: "would have been held"
    },

    {
        question: "The report highlights the extent ___ which the problem has grown",
        options: ["at", "to", "for", "by"],
        answer: "to"
    },

    {
        question: "It is essential that the data ___ carefully before publication",
        options: ["is checked", "be checked", "was checked", "checking"],
        answer: "be checked"
    },

    {
        question: "What does 'mitigate' mean?",
        options: ["To make something less severe", "To create something new", "To prove something wrong", "To make something permanent"],
        answer: "To make something less severe"
    },

    {
        question: "The decision was made without ___ the potential consequences",
        options: ["consider", "considered", "considering", "to consider"],
        answer: "considering"
    }

];


/* =========================================================
   START SURVIVAL GAME
========================================================= */

window.startSurvivalGame = function(container) {

    let shuffledQuestions = [];

    let score = 0;

    let questionIndex = 0;

    let streak = 0;

    let bestStreak = 0;

    let lives = 3;

    let gameOver = false;

    let questionTimer = null;

    window.survivalGameFinished = false;


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
       X BUTTON
       FIRST CLICK = RESULT
       SECOND CLICK = CLOSE
    ===================================================== */

    window.finishCurrentGame = function() {

        clearGameTimer();

        if (window.survivalGameFinished) {

            closeGame();

            return;

        }

        window.survivalGameFinished = true;

        gameOver = true;

        renderResult();

    };


    /* =====================================================
       START / RESTART
    ===================================================== */

    function startGame() {

    clearGameTimer();

    score = 0;

    questionIndex = 0;

    streak = 0;

    bestStreak = 0;

    lives = 3;

    gameOver = false;

    window.survivalGameFinished = false;


    /* =================================
       SHUFFLE QUESTIONS
    ================================= */

    shuffledQuestions =
        [...SURVIVAL_QUESTIONS]
            .sort(() => Math.random() - 0.5);


    renderQuestion();

}


    /* =====================================================
       RENDER HEARTS
    ===================================================== */

    function renderLives() {

        return "❤️".repeat(lives);

    }


    /* =====================================================
       RENDER QUESTION
    ===================================================== */

    function renderQuestion() {

        clearGameTimer();

        if (
            gameOver ||
            window.survivalGameFinished
        ) {

            renderResult();

            return;

        }


        if (
            questionIndex >=
            SURVIVAL_QUESTIONS.length
        ) {

            gameOver = true;

            window.survivalGameFinished = true;

            renderResult();

            return;

        }


        const current =
            shuffledQuestions[questionIndex];


        container.innerHTML = `

            <div class="game-screen">

                <div class="game-progress">

                    <span class="survival-life">
                        ${renderLives()}
                    </span>

                    <span class="game-streak">
                        🔥 ${streak}
                    </span>

                    <span class="game-score">
                        النقاط: ${score}
                    </span>

                </div>


                <p class="game-subtitle">
                    حافظ على قلوبك لأطول وقت ممكن
                </p>


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

                        if (
                            gameOver ||
                            window.survivalGameFinished
                        ) {
                            return;
                        }


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


                        /* =================================
                           CORRECT ANSWER
                        ================================= */

                        if (correct) {
    score++;
    streak++;

    if (streak > bestStreak) {
        bestStreak = streak;
    }

    button.classList.add("correct");

                            button.classList.add(
                                "success-pop"
                            );


                            questionIndex++;


                            questionTimer =
                                setTimeout(
                                    renderQuestion,
                                    650
                                );

                            return;

                        }


                        /* =================================
                           WRONG ANSWER
                        ================================= */

                        lives--;

                        streak = 0;

                        button.classList.add(
                            "wrong"
                        );


                        /* =================================
                           NO LIVES LEFT
                        ================================= */

                        if (lives <= 0) {

                            lives = 0;

                            gameOver = true;

                            window.survivalGameFinished =
                                true;


                            questionTimer =
                                setTimeout(
                                    renderResult,
                                    750
                                );

                            return;

                        }


                        /* =================================
                           STILL HAS LIVES
                        ================================= */

                        questionIndex++;


                        questionTimer =
                            setTimeout(
                                renderQuestion,
                                750
                            );

                    }
                );

            });

    }


    /* =====================================================
       RESULT
    ===================================================== */

    function renderResult() {

        clearGameTimer();

        const totalQuestions =
            questionIndex;


        let message;


        if (score >= 50) {

    message =
        "أداء استثنائي! 🔥";

} else if (score >= 35) {

    message =
        "سلسلة قوية جدًا! 👏";

} else if (score >= 25) {

    message =
        "أداء رائع! استمر 💪";

} else if (score >= 15) {

    message =
        "أداء جيد! حاول تحسين نتيجتك📚";

} else if (score >= 5) {

    message =
        "بداية جيدة! حاول البقاء لفترة أطول 💪";

} else {

    message =
        "لا بأس! حاول مرة أخرى وابنِ سلسلة أطول 📚";

}


        container.innerHTML = `

            <div class="game-screen">

                <div class="game-result">

                    <div class="result-icon">
                        🔥
                    </div>

                    <h3>
                        انتهى التحدي
                    </h3>

                    <p>
                        ${message}
                    </p>


                    <div class="result-score">

                        <strong>
                            ${score}
                        </strong>

                        <span>
                            إجابة صحيحة
                        </span>

                    </div>


                    <p class="result-percentage">

                        الأسئلة التي تمت الإجابة عليها
                        <strong>
                            ${totalQuestions}
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
                        id="restartSurvival"
                    >
                        حاول مرة أخرى
                    </button>

                </div>

            </div>

        `;


        const restart =
            container.querySelector(
                "#restartSurvival"
            );


        restart.addEventListener(
            "click",
            startGame
        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    startGame();

};