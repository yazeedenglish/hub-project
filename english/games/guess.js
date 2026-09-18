/* =========================================================
   GAME: GUESS THE WORD
========================================================= */

const GUESS_WORDS = [

    {
        word: "hospital",
        clues: [
            "You can see a doctor here",
            "People go here when they are sick",
            "It has doctors and nurses",
            "Patients receive medical care here"
        ]
    },

    {
        word: "library",
        clues: [
            "You can find many books here",
            "People usually read here",
            "It is usually quiet",
            "You can borrow books from here"
        ]
    },

    {
        word: "teacher",
        clues: [
            "This person works at a school",
            "This person helps students learn",
            "This person teaches lessons",
            "Students listen to this person"
        ]
    },

    {
        word: "airport",
        clues: [
            "People go here before a flight",
            "You can see many airplanes here",
            "You travel from here",
            "You can check in for a flight here"
        ]
    },

    {
        word: "restaurant",
        clues: [
            "People go here to eat",
            "You can order food here",
            "A waiter may serve you here",
            "You can find a menu here"
        ]
    },

    {
        word: "school",
        clues: [
            "Children go here to learn",
            "Teachers work here",
            "Students attend classes here",
            "You can find classrooms here"
        ]
    },

    {
        word: "supermarket",
        clues: [
            "You can buy food here",
            "People use carts here",
            "You can find many products here",
            "You pay for your items here"
        ]
    },

    {
        word: "classroom",
        clues: [
            "Students have lessons here",
            "A teacher usually works here",
            "You can find desks here",
            "It is part of a school"
        ]
    },

    {
        word: "kitchen",
        clues: [
            "People prepare food here",
            "You can find a refrigerator here",
            "You may cook here",
            "It is usually inside a house"
        ]
    },

    {
        word: "bedroom",
        clues: [
            "People sleep here",
            "You can find a bed here",
            "It is usually a private room",
            "People may keep clothes here"
        ]
    },

    {
        word: "garden",
        clues: [
            "You can see plants here",
            "People may grow flowers here",
            "It can be outside a house",
            "You may see trees here"
        ]
    },

    {
        word: "office",
        clues: [
            "People often work here",
            "You may find computers here",
            "Employees may have desks here",
            "Meetings can happen here"
        ]
    },

    {
        word: "museum",
        clues: [
            "You can see historical objects here",
            "People visit this place to learn",
            "It may contain famous paintings",
            "You can see exhibitions here"
        ]
    },

    {
        word: "pharmacy",
        clues: [
            "You can buy medicine here",
            "A pharmacist works here",
            "It is often near a hospital",
            "People come here for health products"
        ]
    },

    {
        word: "hotel",
        clues: [
            "Travelers can stay here",
            "You can book a room here",
            "Guests sleep here",
            "You may receive a key at the front desk"
        ]
    },

    {
        word: "station",
        clues: [
            "People wait for transportation here",
            "You may catch a train here",
            "Passengers come here to travel",
            "It can have platforms"
        ]
    },

    {
        word: "market",
        clues: [
            "People buy and sell things here",
            "You can find different products here",
            "Sellers offer goods here",
            "It can be very busy"
        ]
    },

    {
        word: "park",
        clues: [
            "People go here to relax",
            "You can see grass and trees here",
            "Children may play here",
            "It is usually an outdoor place"
        ]
    },

    {
        word: "beach",
        clues: [
            "You can see the sea here",
            "People often swim here",
            "You can find sand here",
            "People may relax here in summer"
        ]
    },

    {
        word: "bridge",
        clues: [
            "It helps people cross something",
            "Cars can travel across it",
            "It can go over a river",
            "It connects two places"
        ]
    },

    {
        word: "mountain",
        clues: [
            "It is much higher than a hill",
            "People may climb it",
            "You can find it in nature",
            "Its top can be very high"
        ]
    },

    {
        word: "river",
        clues: [
            "Water flows through it",
            "It can pass through a city",
            "It may lead to the sea",
            "People can build bridges over it"
        ]
    },

    {
        word: "forest",
        clues: [
            "You can find many trees here",
            "Animals may live here",
            "It is a natural area",
            "It can be very large"
        ]
    },

    {
        word: "weather",
        clues: [
            "It describes conditions outside",
            "It can be hot or cold",
            "Rain is part of it",
            "People often check it before going outside"
        ]
    },

    {
        word: "computer",
        clues: [
            "You can use it to work",
            "It has a screen",
            "You can type on it",
            "It can connect to the internet"
        ]
    },

    {
        word: "telephone",
        clues: [
            "You can use it to call someone",
            "It can receive messages",
            "Many people carry one every day",
            "You can use it to communicate"
        ]
    },

    {
        word: "bicycle",
        clues: [
            "It has two wheels",
            "You move it by using pedals",
            "People use it for transportation",
            "It does not need fuel"
        ]
    },

    {
        word: "bus",
        clues: [
            "Many people can travel in it",
            "It usually follows a route",
            "Passengers pay for transportation",
            "It can stop at different places"
        ]
    },

    {
        word: "train",
        clues: [
            "It travels on tracks",
            "Many passengers can ride it",
            "It can travel between cities",
            "It usually has several cars"
        ]
    },

    {
        word: "airplane",
        clues: [
            "It can fly through the sky",
            "Passengers can travel in it",
            "It takes off from an airport",
            "It can travel long distances quickly"
        ]
    },

    {
        word: "breakfast",
        clues: [
            "You usually eat it in the morning",
            "It is the first meal of the day",
            "People may eat eggs during it",
            "It can include bread and fruit"
        ]
    },

    {
        word: "sandwich",
        clues: [
            "It is made with bread",
            "It can contain cheese",
            "People often eat it for lunch",
            "It can contain meat and vegetables"
        ]
    },

    {
        word: "water",
        clues: [
            "People need it to survive",
            "It has no color when it is pure",
            "You can drink it",
            "It can become ice when very cold"
        ]
    },

    {
        word: "umbrella",
        clues: [
            "People use it when it rains",
            "It helps keep you dry",
            "You can carry it in your hand",
            "It opens above your head"
        ]
    },

    {
        word: "clothing",
        clues: [
            "People wear it on their bodies",
            "It can include shirts and pants",
            "It protects you from the weather",
            "You can buy it in a clothing store"
        ]
    },

    {
        word: "birthday",
        clues: [
            "It happens once every year",
            "People may receive presents",
            "A cake is often involved",
            "People celebrate it with friends or family"
        ]
    },

    {
        word: "holiday",
        clues: [
            "People often have time away from work",
            "Students may have a break during it",
            "People may travel during it",
            "It can last several days"
        ]
    },

    {
        word: "family",
        clues: [
            "These people are related to you",
            "Parents and children can be part of it",
            "You may live with some of them",
            "They can support each other"
        ]
    },

    {
        word: "friend",
        clues: [
            "This person knows you well",
            "You may spend time together",
            "You can talk about your problems with this person",
            "You usually enjoy being with this person"
        ]
    },

    {
        word: "student",
        clues: [
            "This person goes to school",
            "This person studies different subjects",
            "This person may have homework",
            "This person learns from teachers"
        ]
    },

    {
        word: "doctor",
        clues: [
            "This person treats sick people",
            "This person works in healthcare",
            "You may visit this person when you are ill",
            "This person can examine patients"
        ]
    },

    {
        word: "nurse",
        clues: [
            "This person works with patients",
            "This person may work in a hospital",
            "This person helps provide medical care",
            "This person may check a patient's condition"
        ]
    },

    {
        word: "police",
        clues: [
            "They help protect people",
            "They respond to certain emergencies",
            "They work to enforce laws",
            "You may see them in a police station"
        ]
    },

    {
        word: "engineer",
        clues: [
            "This person designs and builds things",
            "This person may work with technology",
            "This person uses science and mathematics",
            "This person can design structures or systems"
        ]
    },

    {
        word: "photograph",
        clues: [
            "It captures an image",
            "You can take one with a camera",
            "It can show people or places",
            "You can keep it on your phone"
        ]
    },

    {
        word: "question",
        clues: [
            "You ask it when you want information",
            "It can end with a question mark",
            "A teacher may ask one in class",
            "It usually needs an answer"
        ]
    },

    {
        word: "answer",
        clues: [
            "You give it after a question",
            "It provides information",
            "A teacher may check it",
            "It can be correct or incorrect"
        ]
    },

    {
        word: "problem",
        clues: [
            "It is something that needs to be solved",
            "It can be difficult",
            "People look for solutions to it",
            "Students may find one in a test"
        ]
    },

    {
        word: "solution",
        clues: [
            "It helps solve a problem",
            "You look for it when something goes wrong",
            "It can be an answer to a problem",
            "Finding one can make a situation easier"
        ]
    },

    {
        word: "education",
        clues: [
            "It helps people gain knowledge",
            "Schools provide it",
            "Students receive it through learning",
            "It can continue throughout life"
        ]
    }

];


/* =========================================================
   SHUFFLE
========================================================= */

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            shuffled[i],
            shuffled[j]
        ] = [
            shuffled[j],
            shuffled[i]
        ];

    }

    return shuffled;
}


window.startGuessGame = function(container) {

    let questions = [];

    let index = 0;

    let score = 0;

    let streak = 0;

    window.guessGameFinished = false;


    /* =====================================================
       X BUTTON — FIRST CLICK RESULT / SECOND CLICK CLOSE
    ===================================================== */

    window.finishCurrentGame = function() {

        if (window.guessGameFinished) {

            closeGame();

            return;
        }

        window.guessGameFinished = true;

        renderResult();

    };


    /* =====================================================
       START / RESTART
    ===================================================== */

    function startGame() {

        questions = shuffleArray(GUESS_WORDS);

        index = 0;

        score = 0;

        streak = 0;

        window.guessGameFinished = false;

        renderQuestion();

    }


    /* =====================================================
       RENDER QUESTION
    ===================================================== */

    function renderQuestion() {

        if (
            index >=
            questions.length
        ) {

            renderResult();

            return;
        }


        const current =
            questions[index];


        container.innerHTML = `

            <div class="game-screen">

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

                        const correct =
                            button.dataset.answer ===
                            current.word;


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

                            streak++;

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


                        setTimeout(
                            () => {

                                index++;

                                renderQuestion();

                            },
                            correct ? 650 : 750
                        );

                    }
                );

            });

    }


    /* =====================================================
       GENERATE OPTIONS
    ===================================================== */

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


    /* =====================================================
       RESULT
    ===================================================== */

    function renderResult() {

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
                "ممتاز جدًا! تخمين رائع 🔥";

        } else if (percentage >= 70) {

            message =
                "أداء رائع! استمر 👏";

        } else if (percentage >= 50) {

            message =
                "جيد! حاول تحسين نتيجتك 💪";

        } else {

            message =
                "استمر في التدريب وستتحسن مع الوقت 📚";

        }


        container.innerHTML = `

            <div class="game-screen">

                <div class="game-result">

                    <div class="result-icon">
                        🕵️
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
                        id="restartGuess"
                    >
                        العب مرة أخرى
                    </button>

                </div>

            </div>

        `;


        const restart =
            container.querySelector(
                "#restartGuess"
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