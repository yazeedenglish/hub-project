/* =========================================================
   YAZEED ENGLISH
   GAME: MATCH WORDS
========================================================= */


/* =========================================================
   WORD BANK
   Add your 100 words here
========================================================= */

const MATCH_WORDS = [

    { english: "Apple", arabic: "تفاحة" },
    { english: "Book", arabic: "كتاب" },
    { english: "House", arabic: "منزل" },
    { english: "Water", arabic: "ماء" },
    { english: "School", arabic: "مدرسة" },
    { english: "Friend", arabic: "صديق" },
    { english: "Family", arabic: "عائلة" },
    { english: "Morning", arabic: "صباح" },
    { english: "Food", arabic: "طعام" },
    { english: "Window", arabic: "نافذة" },

    { english: "Teacher", arabic: "معلم" },
    { english: "Student", arabic: "طالب" },
    { english: "Happy", arabic: "سعيد" },
    { english: "Strong", arabic: "قوي" },
    { english: "Fast", arabic: "سريع" },
    { english: "Beautiful", arabic: "جميل" },
    { english: "Important", arabic: "مهم" },
    { english: "Question", arabic: "سؤال" },
    { english: "Answer", arabic: "إجابة" },
    { english: "Problem", arabic: "مشكلة" },

    { english: "Improve", arabic: "يحسن" },
    { english: "Choose", arabic: "يختار" },
    { english: "Remember", arabic: "يتذكر" },
    { english: "Understand", arabic: "يفهم" },
    { english: "Practice", arabic: "يتدرب" },
    { english: "Different", arabic: "مختلف" },
    { english: "Possible", arabic: "ممكن" },
    { english: "Experience", arabic: "خبرة" },
    { english: "Knowledge", arabic: "معرفة" },
    { english: "Success", arabic: "نجاح" },

    { english: "Reason", arabic: "سبب" },
    { english: "Example", arabic: "مثال" },
    { english: "Decision", arabic: "قرار" },
    { english: "Purpose", arabic: "هدف" },
    { english: "Result", arabic: "نتيجة" },
    { english: "Develop", arabic: "يطور" },
    { english: "Increase", arabic: "يزيد" },
    { english: "Reduce", arabic: "يقلل" },
    { english: "Prepare", arabic: "يستعد" },
    { english: "Continue", arabic: "يستمر" },

    { english: "Achieve", arabic: "يحقق" },
    { english: "Require", arabic: "يتطلب" },
    { english: "Determine", arabic: "يحدد" },
    { english: "Consider", arabic: "يعتبر" },
    { english: "Maintain", arabic: "يحافظ على" },
    { english: "Approach", arabic: "نهج" },
    { english: "Challenge", arabic: "تحدي" },
    { english: "Opportunity", arabic: "فرصة" },
    { english: "Environment", arabic: "بيئة" },
    { english: "Available", arabic: "متاح" },

    { english: "Essential", arabic: "أساسي" },
    { english: "Significant", arabic: "مهم للغاية" },
    { english: "Consequences", arabic: "عواقب" },
    { english: "Reliable", arabic: "موثوق" },
    { english: "Advantage", arabic: "ميزة" },
    { english: "Influence", arabic: "تأثير" },
    { english: "Specific", arabic: "محدد" },
    { english: "Accurate", arabic: "دقيق" },
    { english: "Effective", arabic: "فعال" },
    { english: "Relevant", arabic: "ذو صلة" },

    { english: "Allow", arabic: "يسمح" },
    { english: "Avoid", arabic: "يتجنب" },
    { english: "Believe", arabic: "يعتقد" },
    { english: "Describe", arabic: "يصف" },
    { english: "Explain", arabic: "يشرح" },
    { english: "Suggest", arabic: "يقترح" },
    { english: "Support", arabic: "يدعم" },
    { english: "Provide", arabic: "يوفر" },
    { english: "Include", arabic: "يشمل" },
    { english: "Create", arabic: "ينشئ" },

    { english: "Compare", arabic: "يقارن" },
    { english: "Identify", arabic: "يحدد" },
    { english: "Mention", arabic: "يذكر" },
    { english: "Accept", arabic: "يقبل" },
    { english: "Refuse", arabic: "يرفض" },
    { english: "Depend", arabic: "يعتمد" },
    { english: "Prevent", arabic: "يمنع" },
    { english: "Protect", arabic: "يحمي" },
    { english: "Establish", arabic: "يؤسس" },
    { english: "Recognize", arabic: "يتعرف على" },

    { english: "Recommend", arabic: "يوصي" },
    { english: "Replace", arabic: "يستبدل" },
    { english: "Discover", arabic: "يكتشف" },
    { english: "Analyze", arabic: "يحلل" },
    { english: "Appropriate", arabic: "مناسب" },
    { english: "Beneficial", arabic: "مفيد" },
    { english: "Complex", arabic: "معقد" },
    { english: "Efficient", arabic: "كفؤ" },
    { english: "Frequent", arabic: "متكرر" },
    { english: "Potential", arabic: "محتمل" },

    { english: "Require", arabic: "يتطلب" },
    { english: "Achieve", arabic: "يحقق" },
    { english: "Analyze", arabic: "يحلل" },
    { english: "Determine", arabic: "يحدد" },
    { english: "Establish", arabic: "يؤسس" },
    { english: "Maintain", arabic: "يحافظ على" },
    { english: "Recommend", arabic: "يوصي" },
    { english: "Significant", arabic: "مهم للغاية" },
    { english: "Advantage", arabic: "ميزة" },
    { english: "Evidence", arabic: "دليل" }

];


/* =========================================================
   SHUFFLE
========================================================= */

function shuffleMatch(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            result[i],
            result[j]
        ] = [
            result[j],
            result[i]
        ];
    }

    return result;
}


/* =========================================================
   START GAME
========================================================= */

window.startMatchGame = function(container) {

    let questions = [];

    let currentIndex = 0;

    let score = 0;

    let streak = 0;

    let answered = false;


    /* =====================================================
       FINISH GAME WITH X
    ===================================================== */

    window.finishCurrentGame = function () {

        if (window.matchGameFinished) {

            closeGame();

            return;
        }

        window.matchGameFinished = true;

        renderResult();

    };


    /* =====================================================
       START / RESTART
    ===================================================== */

    function startGame() {

        window.matchGameFinished = false;

        questions =
            shuffleMatch(MATCH_WORDS);

        currentIndex = 0;

        score = 0;

        streak = 0;

        answered = false;

        renderQuestion();

    }


    /* =====================================================
       RENDER QUESTION
    ===================================================== */

    function renderQuestion() {

        if (
            currentIndex >= questions.length
        ) {

            window.matchGameFinished = true;

            renderResult();

            return;
        }


        const current =
            questions[currentIndex];


        answered = false;


        const wrongAnswers =
            shuffleMatch(

                MATCH_WORDS.filter(
                    word =>
                        word.english !==
                        current.english
                )

            ).slice(0, 3);


        const options =
            shuffleMatch([
                current,
                ...wrongAnswers
            ]);


        container.innerHTML = `

            <div class="game-screen match-screen">

                <div class="game-progress">

                    <span>
                        ${currentIndex + 1} / ${questions.length}
                    </span>

                    <span class="game-score">
                        النقاط: ${score}
                    </span>

                    <span class="game-streak">
                        🔥 ${streak}
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
                                data-answer="${option.english}"
                            >
                                ${option.arabic}
                            </button>

                        `
                    ).join("")}

                </div>


                <div
                    class="match-feedback"
                    aria-live="polite"
                ></div>

            </div>

        `;


        setupAnswers(current);

    }


    /* =====================================================
       ANSWERS
    ===================================================== */

    function setupAnswers(current) {

        const buttons =
            container.querySelectorAll(
                ".game-option"
            );


        buttons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        if (answered) {
                            return;
                        }


                        answered = true;


                        const correct =
                            button.dataset.answer ===
                            current.english;


                        buttons.forEach(
                            option =>
                                option.disabled = true
                        );


                        if (correct) {

                            score++;

                            streak++;


                            button.classList.add(
                                "correct"
                            );


                            const streakElement =
                                container.querySelector(
                                    ".game-streak"
                                );


                            if (streakElement) {

                                streakElement.classList.add(
                                    "streak-active"
                                );

                            }


                            showFeedback(
                                "أحسنت! إجابة صحيحة 🎉",
                                "correct"
                            );


                            playSuccessAnimation(
                                button
                            );


                        } else {

                            streak = 0;


                            button.classList.add(
                                "wrong"
                            );


                            buttons.forEach(
                                option => {

                                    if (
                                        option.dataset.answer ===
                                        current.english
                                    ) {

                                        option.classList.add(
                                            "correct"
                                        );

                                    }

                                }
                            );


                            showFeedback(
                                `الإجابة الصحيحة: ${current.arabic}`,
                                "wrong"
                            );

                        }


                        setTimeout(
                            () => {

                                currentIndex++;

                                renderQuestion();

                            },
                            correct ? 850 : 1100
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       FEEDBACK
    ===================================================== */

    function showFeedback(
        message,
        type
    ) {

        const feedback =
            container.querySelector(
                ".match-feedback"
            );


        if (!feedback) {
            return;
        }


        feedback.textContent =
            message;


        feedback.className =
            `match-feedback ${type}`;

    }


    /* =====================================================
       SUCCESS ANIMATION
    ===================================================== */

    function playSuccessAnimation(button) {

        button.classList.add(
            "success-pop"
        );


        setTimeout(
            () => {

                button.classList.remove(
                    "success-pop"
                );

            },
            700
        );

    }


    /* =====================================================
       RESULT
    ===================================================== */

    function renderResult() {

        const total =
            currentIndex;


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


        const restart =
            container.querySelector(
                "#restartMatch"
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