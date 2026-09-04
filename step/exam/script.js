/* =========================================================
   YAZEED ENGLISH — STEP MOCK TEST
   ========================================================= */


/* =========================================================
   LISTENING
   5 AUDIO FILES × 4 QUESTIONS = 20
   ========================================================= */

const listeningData = [

    {
        title: "Listening Passage 1",
        audio: "audio/listening_1.mp3",

        questions: [

            {
                text: "Why is the student calling the office?",
                options: [
                    "To cancel a class",
                    "To ask about registration",
                    "To report a problem",
                    "To request a refund"
                ],
                answer: 1
            },

            {
                text: "When does the meeting begin?",
                options: [
                    "8:00",
                    "8:30",
                    "9:00",
                    "9:30"
                ],
                answer: 2
            },

            {
                text: "What does the woman suggest?",
                options: [
                    "Calling tomorrow",
                    "Sending an email",
                    "Visiting the office",
                    "Talking to the teacher"
                ],
                answer: 2
            },

            {
                text: "What will the student probably do next?",
                options: [
                    "Go home",
                    "Send an email",
                    "Visit the library",
                    "Attend a meeting"
                ],
                answer: 1
            }

        ]
    },


    {
        title: "Listening Passage 2",
        audio: "audio/listening2.mp3",

        questions: [

            {
                text: "What is the conversation mainly about?",
                options: [
                    "A new apartment",
                    "A university course",
                    "A job interview",
                    "A travel plan"
                ],
                answer: 1
            },

            {
                text: "Why does the man need help?",
                options: [
                    "He missed a class",
                    "He lost his book",
                    "He cannot access a website",
                    "He forgot an appointment"
                ],
                answer: 2
            },

            {
                text: "What does the woman recommend?",
                options: [
                    "Restarting the computer",
                    "Contacting technical support",
                    "Buying a new device",
                    "Changing the course"
                ],
                answer: 1
            },

            {
                text: "When will the problem probably be solved?",
                options: [
                    "Today",
                    "Tomorrow",
                    "Next week",
                    "Next month"
                ],
                answer: 0
            }

        ]
    },


    {
        title: "Listening Passage 3",
        audio: "audio/listening3.mp3",

        questions: [

            {
                text: "Where are the speakers most likely talking?",
                options: [
                    "At a restaurant",
                    "At a hospital",
                    "At an airport",
                    "At a bank"
                ],
                answer: 0
            },

            {
                text: "What does the customer want?",
                options: [
                    "A different table",
                    "A vegetarian meal",
                    "A larger drink",
                    "A dessert"
                ],
                answer: 1
            },

            {
                text: "What does the waiter apologize for?",
                options: [
                    "The price",
                    "The delay",
                    "The noise",
                    "The menu"
                ],
                answer: 1
            },

            {
                text: "What will the waiter bring?",
                options: [
                    "A new menu",
                    "A bill",
                    "A vegetarian dish",
                    "A cup of coffee"
                ],
                answer: 2
            }

        ]
    },


    {
        title: "Listening Passage 4",
        audio: "audio/listening4.mp3",

        questions: [

            {
                text: "What is the announcement about?",
                options: [
                    "A school event",
                    "A flight delay",
                    "A weather warning",
                    "A sports game"
                ],
                answer: 1
            },

            {
                text: "How long is the delay?",
                options: [
                    "Thirty minutes",
                    "One hour",
                    "Two hours",
                    "Three hours"
                ],
                answer: 1
            },

            {
                text: "What should passengers do?",
                options: [
                    "Leave the airport",
                    "Change terminals",
                    "Wait near the gate",
                    "Call the airline"
                ],
                answer: 2
            },

            {
                text: "Which information is repeated?",
                options: [
                    "The gate number",
                    "The destination",
                    "The departure time",
                    "The flight number"
                ],
                answer: 3
            }

        ]
    },


    {
        title: "Listening Passage 5",
        audio: "audio/listening5.mp3",

        questions: [

            {
                text: "What are the speakers discussing?",
                options: [
                    "A research project",
                    "A family trip",
                    "A new restaurant",
                    "A sports club"
                ],
                answer: 0
            },

            {
                text: "What problem does the student mention?",
                options: [
                    "Lack of time",
                    "Lack of money",
                    "A missing document",
                    "A difficult teacher"
                ],
                answer: 0
            },

            {
                text: "What solution is suggested?",
                options: [
                    "Working with a partner",
                    "Changing the topic",
                    "Asking for more time",
                    "Dropping the project"
                ],
                answer: 2
            },

            {
                text: "What does the student agree to do?",
                options: [
                    "Call the teacher",
                    "Submit the project today",
                    "Ask for an extension",
                    "Start a new project"
                ],
                answer: 2
            }

        ]
    }

];


/* =========================================================
   READING
   5 PASSAGES × 8 QUESTIONS = 40
   ========================================================= */

const readingData = [

    {
        title: "The Benefits of Reading",

        text: `Reading is one of the most useful activities for people who want to improve their knowledge and language skills. Regular reading can introduce learners to new vocabulary, different writing styles, and ideas from many areas of life.

Researchers have also found that reading regularly can improve concentration. Unlike short online messages, longer texts require readers to stay focused for a longer period.

However, choosing suitable material is important. A text that is far above a learner's level may be frustrating, while a text that is too easy may not provide enough challenge.`,

        questions: [

            {
                text: "What is the main purpose of the passage?",
                options: [
                    "To explain why reading is useful",
                    "To compare books and websites",
                    "To describe a research experiment",
                    "To criticize modern education"
                ],
                answer: 0
            },

            {
                text: "Reading can introduce learners to:",
                options: [
                    "Only new vocabulary",
                    "New vocabulary and ideas",
                    "Only different cultures",
                    "Only academic subjects"
                ],
                answer: 1
            },

            {
                text: "What can longer texts improve?",
                options: [
                    "Memory of numbers",
                    "Physical fitness",
                    "Concentration",
                    "Typing speed"
                ],
                answer: 2
            },

            {
                text: "Why should learners choose suitable materials?",
                options: [
                    "Easy books are always better",
                    "Difficult texts can be frustrating",
                    "Researchers require it",
                    "Schools only allow certain books"
                ],
                answer: 1
            },

            {
                text: "The word 'frustrating' is closest in meaning to:",
                options: [
                    "Confusing and discouraging",
                    "Interesting",
                    "Expensive",
                    "Short"
                ],
                answer: 0
            },

            {
                text: "What can be inferred about very easy texts?",
                options: [
                    "They may not challenge learners enough",
                    "They are impossible to understand",
                    "They improve concentration the most",
                    "They are recommended for everyone"
                ],
                answer: 0
            },

            {
                text: "What is one benefit of regular reading?",
                options: [
                    "It eliminates all mistakes",
                    "It develops knowledge and language skills",
                    "It guarantees high grades",
                    "It replaces conversation"
                ],
                answer: 1
            },

            {
                text: "The passage suggests that reading should be:",
                options: [
                    "Regular and appropriate to the learner",
                    "Only academic",
                    "Very difficult",
                    "Done once a month"
                ],
                answer: 0
            }

        ]
    },


    {
        title: "Urban Green Spaces",

        text: `As cities grow, parks and other green spaces are becoming increasingly important. Trees, gardens, and public parks can provide residents with places to relax and exercise.

Green spaces may have environmental benefits as well. Trees can provide shade on hot days, and plants can help reduce some forms of air pollution. Parks can also create habitats for birds and insects.

Despite these advantages, maintaining urban green spaces can be expensive. City governments must pay for water, workers, equipment, and repairs.`,

        questions: [

            {
                text: "Why are green spaces important in cities?",
                options: [
                    "They increase traffic",
                    "They provide places to relax and exercise",
                    "They reduce the number of buildings",
                    "They eliminate all pollution"
                ],
                answer: 1
            },

            {
                text: "What can trees provide on hot days?",
                options: [
                    "Food",
                    "Transportation",
                    "Shade",
                    "Electricity"
                ],
                answer: 2
            },

            {
                text: "Green spaces can provide habitats for:",
                options: [
                    "Only birds",
                    "Birds and insects",
                    "Only insects",
                    "Farm animals"
                ],
                answer: 1
            },

            {
                text: "What is one challenge mentioned?",
                options: [
                    "Parks are too popular",
                    "Maintenance can be expensive",
                    "Trees grow too quickly",
                    "Cities have too much water"
                ],
                answer: 1
            },

            {
                text: "What does 'maintaining' mean?",
                options: [
                    "Taking care of",
                    "Removing",
                    "Designing",
                    "Selling"
                ],
                answer: 0
            },

            {
                text: "Which is NOT mentioned as a maintenance cost?",
                options: [
                    "Water",
                    "Workers",
                    "Equipment",
                    "Public transportation"
                ],
                answer: 3
            },

            {
                text: "What environmental benefit is mentioned?",
                options: [
                    "Trees can provide shade",
                    "Parks create roads",
                    "Gardens increase traffic",
                    "Trees remove all pollution"
                ],
                answer: 0
            },

            {
                text: "What is the passage mainly about?",
                options: [
                    "The importance and challenges of urban green spaces",
                    "How to build roads",
                    "The history of cities",
                    "Problems with insects"
                ],
                answer: 0
            }

        ]
    },


    {
        title: "Learning a New Language",

        text: `Learning a new language takes time, but regular practice can make the process more manageable. Many learners begin by memorizing individual words. Although vocabulary is important, understanding how words work together is equally valuable.

Listening to the language every day can help learners become familiar with pronunciation and natural speech. Speaking is also important because it gives learners a chance to use new vocabulary actively.

Technology has made language practice easier. Learners can use videos, online dictionaries, language applications, and digital courses. However, technology is most effective when learners use it consistently.`,

        questions: [

            {
                text: "What is the passage mainly about?",
                options: [
                    "Ways to make language learning effective",
                    "The history of language apps",
                    "Why vocabulary is unnecessary",
                    "Problems with modern technology"
                ],
                answer: 0
            },

            {
                text: "What is important besides vocabulary?",
                options: [
                    "Understanding how words work together",
                    "Memorizing every dictionary",
                    "Avoiding speaking",
                    "Studying only grammar"
                ],
                answer: 0
            },

            {
                text: "Daily listening can help with:",
                options: [
                    "Handwriting",
                    "Pronunciation and natural speech",
                    "Mathematics",
                    "Memory of dates"
                ],
                answer: 1
            },

            {
                text: "Why is speaking useful?",
                options: [
                    "It avoids mistakes",
                    "It allows active use of vocabulary",
                    "It replaces listening",
                    "It makes grammar unnecessary"
                ],
                answer: 1
            },

            {
                text: "Mistakes are described as:",
                options: [
                    "A normal part of learning",
                    "A sign of failure",
                    "Always avoidable",
                    "Caused by technology"
                ],
                answer: 0
            },

            {
                text: "Which tool is mentioned?",
                options: [
                    "Digital courses",
                    "Calculators",
                    "Weather maps",
                    "Video games"
                ],
                answer: 0
            },

            {
                text: "Technology is most effective when used:",
                options: [
                    "Once a month",
                    "Only before exams",
                    "Consistently",
                    "Without speaking"
                ],
                answer: 2
            },

            {
                text: "The word 'occasionally' is closest in meaning to:",
                options: [
                    "Regularly",
                    "Sometimes",
                    "Immediately",
                    "Carefully"
                ],
                answer: 1
            }

        ]
    },


    {
        title: "Sleep and Daily Performance",

        text: `Sleep plays an important role in physical and mental performance. People who regularly sleep too little may find it difficult to concentrate, remember information, or maintain a stable mood during the day.

The amount of sleep people need can vary. Age, lifestyle, and individual differences all influence sleep requirements.

Experts often recommend creating a relaxing routine before bedtime. Reducing bright screen use and keeping the bedroom comfortable may make it easier to prepare for sleep.`,

        questions: [

            {
                text: "What is the main idea?",
                options: [
                    "Sleep can affect daily performance",
                    "Everyone needs exactly eight hours",
                    "Screens always prevent sleep",
                    "Sleep is only important for children"
                ],
                answer: 0
            },

            {
                text: "Too little sleep may make it difficult to:",
                options: [
                    "Concentrate",
                    "Walk",
                    "Eat",
                    "Read a clock"
                ],
                answer: 0
            },

            {
                text: "What can influence sleep requirements?",
                options: [
                    "Only age",
                    "Age, lifestyle, and individual differences",
                    "Only lifestyle",
                    "Weather"
                ],
                answer: 1
            },

            {
                text: "What may help prepare someone for sleep?",
                options: [
                    "A relaxing routine",
                    "Bright screens",
                    "Heavy meals",
                    "Working all night"
                ],
                answer: 0
            },

            {
                text: "Healthy habits can:",
                options: [
                    "Guarantee perfect sleep",
                    "Support a consistent routine",
                    "Replace sleep",
                    "Eliminate all tiredness"
                ],
                answer: 1
            },

            {
                text: "Which bedtime habit is mentioned?",
                options: [
                    "Reducing bright screen use",
                    "Drinking more coffee",
                    "Exercising at midnight",
                    "Studying all night"
                ],
                answer: 0
            },

            {
                text: "The word 'requirements' is closest in meaning to:",
                options: [
                    "Needs",
                    "Problems",
                    "Schedules",
                    "Locations"
                ],
                answer: 0
            },

            {
                text: "Why is sleep important according to the passage?",
                options: [
                    "It supports physical and mental performance",
                    "It guarantees success",
                    "It replaces exercise",
                    "It prevents every illness"
                ],
                answer: 0
            }

        ]
    },


    {
        title: "Public Transportation",

        text: `Public transportation allows large numbers of people to travel without each person using a private car. Buses, trains, and metro systems can be especially useful in crowded cities where roads become busy during peak hours.

A reliable transportation system can help people reach schools, workplaces, and public services. For some residents, public transportation may be their main way of traveling.

However, transportation systems require planning and investment. Vehicles must be maintained, routes must be designed carefully, and schedules need to match passenger demand.`,

        questions: [

            {
                text: "What is one advantage of public transportation?",
                options: [
                    "Many people can travel without private cars",
                    "It requires no planning",
                    "It is always free",
                    "It removes every traffic problem"
                ],
                answer: 0
            },

            {
                text: "Where can public transportation be especially useful?",
                options: [
                    "Crowded cities",
                    "Private homes",
                    "Empty fields",
                    "Only airports"
                ],
                answer: 0
            },

            {
                text: "What can a reliable system help people reach?",
                options: [
                    "Schools and workplaces",
                    "Only restaurants",
                    "Only airports",
                    "Only shopping centers"
                ],
                answer: 0
            },

            {
                text: "For some residents, public transportation is:",
                options: [
                    "A luxury",
                    "Their main way of traveling",
                    "Only for tourists",
                    "Too expensive"
                ],
                answer: 1
            },

            {
                text: "What is required to operate a transportation system?",
                options: [
                    "Planning and investment",
                    "Only more roads",
                    "Fewer vehicles",
                    "No schedules"
                ],
                answer: 0
            },

            {
                text: "Schedules should match:",
                options: [
                    "Weather",
                    "Passenger demand",
                    "Building height",
                    "School subjects"
                ],
                answer: 1
            },

            {
                text: "The word 'practical' is closest in meaning to:",
                options: [
                    "Useful",
                    "Expensive",
                    "Unusual",
                    "Temporary"
                ],
                answer: 0
            },

            {
                text: "Which vehicle is NOT mentioned?",
                options: [
                    "Buses",
                    "Trains",
                    "Metro systems",
                    "Airplanes"
                ],
                answer: 3
            }

        ]
    }

];


/* =========================================================
   GRAMMAR
   40 QUESTIONS
   ========================================================= */

const grammarData = [

    ["She _____ to work every day.", ["go", "goes", "going", "gone"], 1],

    ["If I _____ more time, I would learn another language.", ["have", "had", "will have", "having"], 1],

    ["They _____ dinner when I arrived.", ["have", "were having", "are having", "had have"], 1],

    ["This is the _____ book I have ever read.", ["interesting", "more interesting", "most interesting", "interest"], 2],

    ["He has lived here _____ 2019.", ["for", "since", "during", "from"], 1],

    ["There aren't _____ apples in the basket.", ["much", "many", "little", "any much"], 1],

    ["My brother is _____ than me.", ["tall", "taller", "tallest", "more tall"], 1],

    ["The report _____ yesterday.", ["finished", "was finished", "is finish", "has finish"], 1],

    ["I enjoy _____ English podcasts.", ["listen", "listening to", "to listening", "listened"], 1],

    ["You _____ wear a seat belt while driving.", ["must", "might", "could", "would"], 0],

    ["By next year, she _____ her degree.", ["will complete", "will have completed", "completed", "has complete"], 1],

    ["Neither Ali nor Ahmed _____ available.", ["are", "were", "is", "be"], 2],

    ["The woman _____ lives next door is a doctor.", ["which", "who", "where", "whose"], 1],

    ["I haven't seen him _____ Monday.", ["for", "since", "during", "at"], 1],

    ["We need _____ information before deciding.", ["more", "many", "a few", "several"], 0],

    ["He asked me _____ I needed help.", ["whether", "what", "which", "whose"], 0],

    ["The students _____ studying for the exam now.", ["is", "are", "was", "be"], 1],

    ["She is interested _____ learning Spanish.", ["on", "at", "in", "for"], 2],

    ["I _____ my homework before I went out.", ["finish", "finished", "had finished", "have finish"], 2],

    ["There is _____ water in the bottle.", ["a few", "many", "a little", "few"], 2],

    ["If it rains, we _____ at home.", ["stay", "will stay", "stayed", "would stayed"], 1],

    ["He speaks English _____ than his brother.", ["well", "better", "best", "good"], 1],

    ["The meeting starts _____ 9 a.m.", ["in", "on", "at", "by"], 2],

    ["She _____ never been to London.", ["have", "has", "is", "was"], 1],

    ["I am looking forward to _____ you.", ["meet", "meeting", "met", "meets"], 1],

    ["The car _____ by my father last week.", ["bought", "was bought", "is buying", "has buy"], 1],

    ["We have lived here _____ five years.", ["since", "for", "from", "during"], 1],

    ["Would you like _____ coffee?", ["some", "any", "many", "few"], 0],

    ["He is afraid _____ spiders.", ["from", "of", "at", "with"], 1],

    ["She can _____ very fast.", ["runs", "running", "run", "ran"], 2],

    ["I wish I _____ more confident.", ["am", "were", "will be", "have"], 1],

    ["The children _____ already eaten lunch.", ["has", "have", "is", "was"], 1],

    ["This problem is _____ than the previous one.", ["difficult", "more difficult", "most difficult", "difficulty"], 1],

    ["He arrived _____ than expected.", ["early", "earlier", "earliest", "more early"], 1],

    ["The teacher told us _____ quiet.", ["be", "to be", "being", "been"], 1],

    ["I don't have _____ money with me.", ["many", "much", "few", "several"], 1],

    ["She _____ TV when the phone rang.", ["watched", "was watching", "has watched", "watches"], 1],

    ["They decided _____ a new car.", ["buy", "buying", "to buy", "bought"], 2],

    ["The opposite of 'cheap' is _____.", ["small", "expensive", "easy", "slow"], 1],

    ["He has _____ finished the assignment.", ["already", "yet already", "still yet", "ever"], 0]

].map(item => ({
    text: item[0],
    options: item[1],
    answer: item[2]
}));


/* =========================================================
   ELEMENTS
   ========================================================= */

const introPage =
    document.getElementById("introPage");

const testPage =
    document.getElementById("testPage");

const resultPage =
    document.getElementById("resultPage");

const startBtn =
    document.getElementById("startBtn");

const restartBtn =
    document.getElementById("restartBtn");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const finishBtn =
    document.getElementById("finishBtn");

const finishModal = document.getElementById("finishModal");

const finishModalMessage = document.getElementById("finishModalMessage");

const cancelFinishBtn = document.getElementById("cancelFinishBtn");

const confirmFinishBtn = document.getElementById("confirmFinishBtn");  
  

const testContent =
    document.getElementById("testContent");

const questionNavigator =
    document.getElementById("questionNavigator");    

const sectionTitle =
    document.getElementById("sectionTitle");

const timerValue =
    document.getElementById("timerValue");

const timerBox =
    document.getElementById("timerBox");

const progressText =
    document.getElementById("progressText");

const progressPercent =
    document.getElementById("progressPercent");

const progressBar =
    document.getElementById("progressBar");

const themeBtn =
    document.getElementById("themeBtn");

const courseCta =
    document.getElementById("courseCta");

const clapAudio =
    document.getElementById("clapAudio");


/* =========================================================
   EXAM STATE
   ========================================================= */

const TOTAL_TIME =
    2 * 60 * 60;

let remainingSeconds =
    TOTAL_TIME;

let timerInterval =
    null;

let currentSection =
    0;

let currentItem =
    0;

let submitted =
    false;


/*
    0 = Listening
    1 = Reading
    2 = Grammar
*/


let listeningAnswers =
    Array(20).fill(null);

let readingAnswers =
    Array(40).fill(null);

let grammarAnswers =
    Array(40).fill(null);

let flaggedQuestions = Array(100).fill(false);    


/* =========================================================
   TOTAL QUESTIONS
   ========================================================= */

const listeningTotal =
    listeningData.reduce(
        (sum, item) =>
            sum + item.questions.length,
        0
    );

const readingTotal =
    readingData.reduce(
        (sum, item) =>
            sum + item.questions.length,
        0
    );

const grammarTotal =
    grammarData.length;

const totalQuestions =
    listeningTotal +
    readingTotal +
    grammarTotal;


/* =========================================================
   PAGE CONTROL
   ========================================================= */

function showPage(page) {

    introPage.classList.add("hidden");
    testPage.classList.add("hidden");
    resultPage.classList.add("hidden");

    page.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}


/* =========================================================
   START EXAM
   ========================================================= */

function startExam() {

    currentSection = 0;
    currentItem = 0;

    remainingSeconds =
        TOTAL_TIME;

    submitted = false;

    listeningAnswers.fill(null);
    readingAnswers.fill(null);
    grammarAnswers.fill(null);
    flaggedQuestions.fill(false);

    showPage(testPage);

    startTimer();

    renderCurrent();
}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

    clearInterval(timerInterval);

    updateTimer();

    timerInterval =
        setInterval(() => {

            remainingSeconds--;

            if (remainingSeconds <= 0) {

                remainingSeconds = 0;

                updateTimer();

                clearInterval(timerInterval);

                finishExam(true);

                return;
            }

            updateTimer();

        }, 1000);
}


function updateTimer() {

    const hours =
        Math.floor(
            remainingSeconds / 3600
        );

    const minutes =
        Math.floor(
            (remainingSeconds % 3600) / 60
        );

    const seconds =
        remainingSeconds % 60;


    timerValue.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;


    timerBox.classList.toggle(
        "warning",
        remainingSeconds <= 600
    );
}

/* =========================================================
   QUESTION NAVIGATOR
   ========================================================= */

function renderQuestionNavigator() {

    let html = "";


    for (
        let i = 0;
        i < totalQuestions;
        i++
    ) {

        let answered = false;

        /*
            Listening
            الأسئلة 1–20
        */

        if (i < listeningTotal) {

            answered =
                listeningAnswers[i] !== null;

        }


        /*
            Reading
            الأسئلة 21–60
        */

        else if (
            i < listeningTotal + readingTotal
        ) {

            const index =
                i - listeningTotal;

            answered =
                readingAnswers[index] !== null;

        }


        /*
            Grammar
            الأسئلة 61–100
        */

        else {

            const index =
                i -
                listeningTotal -
                readingTotal;

            answered =
                grammarAnswers[index] !== null;

        }


        const current = i + 1 === getQuestionNumber();

const group = getQuestionGroup(i);

const currentIndex = getQuestionNumber() - 1;

const groupClass =
    group.includes(currentIndex)
        ? "group-active"
        : "";

const flaggedClass =
    flaggedQuestions[i]
        ? "flagged"
        : "";


        html += `

            <button
                type="button"
                class="question-number-btn ${current ? "current" : ""} ${answered ? "answered" : ""} ${groupClass} ${flaggedClass}"
                "
                data-global-question="${i + 1}"
            >
                ${i + 1}
            </button>

        `;

    }


    questionNavigator.innerHTML =
        html;


    questionNavigator
        .querySelectorAll(
            ".question-number-btn"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const number =
                        Number(
                            button.dataset
                                .globalQuestion
                        );

                    goToQuestion(
                        number
                    );

                }
            );

        });


    scrollCurrentQuestionIntoView();

}

function getQuestionGroup(index) {

    /*
        LISTENING
        كل 4 أسئلة مرتبطة بنفس المقطع
    */

    if (index < listeningTotal) {

        const passageIndex =
            Math.floor(index / 4);

        const start =
            passageIndex * 4;

        return [
            start,
            start + 1,
            start + 2,
            start + 3
        ];

    }


    /*
        READING
        كل Passage يمثل مجموعة واحدة
    */

    if (
        index <
        listeningTotal + readingTotal
    ) {

        let remaining =
            index - listeningTotal;

        let start =
            listeningTotal;


        for (
            let i = 0;
            i < readingData.length;
            i++
        ) {

            const count =
                readingData[i].questions.length;


            if (
                remaining < count
            ) {

                return Array.from(
                    {
                        length: count
                    },
                    (_, questionIndex) =>
                        start + questionIndex
                );

            }


            remaining -= count;

            start += count;

        }

    }


    /*
        GRAMMAR
        كل سؤال مستقل
    */

    return [index];

}


/* =========================================================
   GO TO QUESTION
   ========================================================= */

function goToQuestion(number) {

    /*
        تحويل رقم السؤال إلى index
        يبدأ من صفر.
    */

    const index =
        number - 1;


    /*
        LISTENING
        الأسئلة 1–20
    */

    if (
        index < listeningTotal
    ) {

        currentSection =
            0;

        currentItem =
            Math.floor(
                index / 4
            );

    }


    /*
        READING
        الأسئلة 21–60
    */

    else if (
        index <
        listeningTotal + readingTotal
    ) {

        currentSection =
            1;


        let remaining =
            index - listeningTotal;


        currentItem =
            0;


        for (
            let i = 0;
            i < readingData.length;
            i++
        ) {

            const passageQuestions =
                readingData[i].questions.length;


            if (
                remaining <
                passageQuestions
            ) {

                currentItem =
                    i;

                break;

            }


            remaining -=
                passageQuestions;

        }

    }


    /*
        GRAMMAR
        الأسئلة 61–100
    */

    else {

        currentSection =
            2;

        currentItem =
            index -
            listeningTotal -
            readingTotal;

    }


    renderCurrent();

}


/* =========================================================
   SCROLL CURRENT QUESTION NUMBER
   ========================================================= */

function scrollCurrentQuestionIntoView() {

    const currentButton =
        questionNavigator.querySelector(
            ".question-number-btn.current"
        );


    if (!currentButton) {
        return;
    }


    currentButton.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
    });

}


/* =========================================================
   RENDER
   ========================================================= */

function renderCurrent() {

    if (currentSection === 0) {

        renderListening();

    } else if (currentSection === 1) {

        renderReading();

    } else {

        renderGrammar();

    }


    updateNavigation();

    updateProgress();

    renderQuestionNavigator();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   QUESTION CARD
   ========================================================= */

function createQuestionCard(question, number, selected) {
    const letters = ["A", "B", "C", "D"];

    const isFlagged = flaggedQuestions[number];

    return `
        <div class="question-card ${isFlagged ? "flagged" : ""}" data-question="${number}">

            <button
                type="button"
                class="question-flag ${isFlagged ? "active" : ""}"
                data-flag-question="${number}"
                aria-label="${isFlagged ? "إلغاء تحديد السؤال" : "تحديد السؤال للمراجعة"}"
                title="${isFlagged ? "إلغاء التحديد" : "تحديد للمراجعة"}"
            >
                <span class="flag-icon">⚑</span>
            </button>

            <div class="question-top">
                <div class="question-number">${number + 1}</div>

                <p class="question-text">${question.text}</p>
            </div>

            <div class="answers">
                ${question.options.map((option, index) => `
                    <button
                        type="button"
                        class="answer-btn ${selected === index ? "selected" : ""}"
                        data-answer="${index}"
                        data-question-index="${number}"
                    >
                        <span class="answer-letter">${letters[index]}</span>
                        ${option}
                    </button>
                `).join("")}
            </div>

        </div>
    `;
}

function attachFlagListeners() {

    document.querySelectorAll(".question-flag").forEach(button => {

        button.addEventListener("click", () => {

            const questionIndex =
                Number(button.dataset.flagQuestion);

            flaggedQuestions[questionIndex] =
                !flaggedQuestions[questionIndex];

            const isFlagged =
                flaggedQuestions[questionIndex];

            button.classList.toggle("active", isFlagged);

            button.setAttribute(
                "aria-label",
                isFlagged
                    ? "إلغاء تحديد السؤال"
                    : "تحديد السؤال للمراجعة"
            );

            button.setAttribute(
                "title",
                isFlagged
                    ? "إلغاء التحديد"
                    : "تحديد للمراجعة"
            );

            const card =
                button.closest(".question-card");

            card.classList.toggle(
                "flagged",
                isFlagged
            );

            renderQuestionNavigator();
        });

    });

}


/* =========================================================
   LISTENING
   ========================================================= */

function renderListening() {

    const passage =
        listeningData[currentItem];

    sectionTitle.textContent =
        "قسم الاستماع";


    let html = `

        <div class="section-intro">

            <h2>
                Listening
            </h2>

            <p>
                استمع إلى المقطع مرة واحدة فقط،
                ثم أجب عن الأسئلة الأربعة.
            </p>

        </div>


        <div class="audio-card">

            <div class="audio-card-header">

                <div class="audio-icon">
                    🎧
                </div>

                <div>

                    <h2>
                        ${passage.title}
                    </h2>

                    <p>
                        المقطع
                        ${currentItem + 1}
                        من
                        ${listeningData.length}
                    </p>

                </div>

            </div>


            <div class="custom-player">

                <button
                    id="playAudioBtn"
                    class="play-btn"
                    type="button"
                >
                    <span class="play-symbol"></span>
                </button>


                <div class="player-main">

                    <div class="time-row">

                        <span id="audioCurrentTime">
                            0:00
                        </span>

                        <span id="audioDuration">
                            0:00
                        </span>

                    </div>


                    <input
                        id="audioProgress"
                        class="audio-progress"
                        type="range"
                        min="0"
                        max="100"
                        value="0"
                        disabled
                    >

                </div>


                <span
                    id="audioStatus"
                    class="player-status"
                >
                    لم يتم التشغيل
                </span>

            </div>


            <div class="player-footer">

                بعد بدء المقطع لن تتمكن من تشغيله مرة أخرى.

            </div>


            <audio
                id="hiddenAudio"
                src="${passage.audio}"
                preload="metadata"
            ></audio>


            <div class="audio-questions">

                ${passage.questions.map(
                    (q, i) =>
                        createQuestionCard(
                            q,
                            currentItem * 4 + i,
                            listeningAnswers[
                                currentItem * 4 + i
                            ]
                        )
                ).join("")}

            </div>

        </div>
    `;


    testContent.innerHTML =
        html;


    setupAudioPlayer();

    attachAnswerListeners(
        "listening"
    );
}


/* =========================================================
   AUDIO PLAYER
   ========================================================= */

function setupAudioPlayer() {

    const audio =
        document.getElementById(
            "hiddenAudio"
        );

    const playBtn =
        document.getElementById(
            "playAudioBtn"
        );

    const progress =
        document.getElementById(
            "audioProgress"
        );

    const currentTime =
        document.getElementById(
            "audioCurrentTime"
        );

    const duration =
        document.getElementById(
            "audioDuration"
        );

    const status =
        document.getElementById(
            "audioStatus"
        );


    let started =
        false;


    function formatTime(seconds) {

        if (
            !Number.isFinite(seconds)
        ) {
            return "0:00";
        }

        const minutes =
            Math.floor(
                seconds / 60
            );

        const secondsPart =
            Math.floor(
                seconds % 60
            );

        return (
            `${minutes}:` +
            `${String(secondsPart).padStart(2, "0")}`
        );
    }


    audio.addEventListener(
        "loadedmetadata",
        () => {

            duration.textContent =
                formatTime(
                    audio.duration
                );

        }
    );


    audio.addEventListener(
        "timeupdate",
        () => {

            currentTime.textContent =
                formatTime(
                    audio.currentTime
                );

            if (audio.duration) {

                progress.value =
                    (
                        audio.currentTime /
                        audio.duration
                    ) * 100;

            }

        }
    );


    audio.addEventListener(
        "play",
        () => {

            status.textContent =
                "يتم التشغيل...";

        }
    );


    audio.addEventListener(
        "ended",
        () => {

            status.textContent =
                "انتهى المقطع — لا يمكن إعادته";

            playBtn.disabled =
                true;

            started =
                true;

        }
    );


    playBtn.addEventListener(
        "click",
        async () => {

            if (started) {
                return;
            }

            started =
                true;

            playBtn.disabled =
                true;

            status.textContent =
                "يتم التشغيل...";


            try {

                await audio.play();

            } catch (error) {

                started =
                    false;

                playBtn.disabled =
                    false;

                status.textContent =
                    "تعذر التشغيل";

            }

        }
    );
}


/* =========================================================
   READING
   ========================================================= */

function renderReading() {

    const passage =
        readingData[currentItem];

    sectionTitle.textContent =
        "قسم القراءة";


    const offset =
        readingData
            .slice(0, currentItem)
            .reduce(
                (sum, item) =>
                    sum + item.questions.length,
                0
            );


    testContent.innerHTML = `

        <div class="section-intro">

            <h2>
                Reading
            </h2>

            <p>
                اقرأ القطعة كاملة ثم أجب عن
                جميع الأسئلة الخاصة بها.
            </p>

        </div>


        <article class="reading-passage">

            <div class="passage-label">
                READING PASSAGE
                ${currentItem + 1}
            </div>

            <h2>
                ${passage.title}
            </h2>

            <div class="passage-text">
                ${passage.text}
            </div>

        </article>


        <div class="reading-questions">

            ${passage.questions.map(
                (q, i) =>
                    createQuestionCard(
                        q,
                        offset + i,
                        readingAnswers[
                            offset + i
                        ]
                    )
            ).join("")}

        </div>

    `;


    attachAnswerListeners(
        "reading"
    );
}


/* =========================================================
   GRAMMAR
   ========================================================= */

function renderGrammar() {

    const question =
        grammarData[currentItem];

    sectionTitle.textContent =
        "قسم القواعد";


    testContent.innerHTML = `

        <div class="section-intro">

            <h2>
                Grammar
            </h2>

            <p>
                اختر الإجابة الأنسب.
                يظهر سؤال واحد في كل شاشة.
            </p>

        </div>


        <div class="grammar-single">

            ${createQuestionCard(
                question,
                currentItem,
                grammarAnswers[
                    currentItem
                ]
            )}

        </div>

    `;


    attachAnswerListeners(
        "grammar"
    );
}


/* =========================================================
   ANSWERS
   ========================================================= */

function attachAnswerListeners(type) {

    document.querySelectorAll(".answer-btn").forEach(button => {

        button.addEventListener("click", () => {

            const questionIndex =
                Number(button.dataset.questionIndex);

            const answer =
                Number(button.dataset.answer);

            if (type === "listening") {
                listeningAnswers[questionIndex] = answer;
            }

            if (type === "reading") {
                readingAnswers[questionIndex] = answer;
            }

            if (type === "grammar") {
                grammarAnswers[questionIndex] = answer;
            }

            const card =
                button.closest(".question-card");

            card.querySelectorAll(".answer-btn")
                .forEach(btn =>
                    btn.classList.remove("selected")
                );

            button.classList.add("selected");
        });

    });

    attachFlagListeners();
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function updateNavigation() {

    const first =
        currentSection === 0 &&
        currentItem === 0;


    previousBtn.disabled =
        first;


    /*
        زر التالي يظل موجودًا في:

        - جميع صفحات الاستماع
        - جميع صفحات القراءة
        - جميع أسئلة القواعد ما عدا السؤال الأخير
    */


    const lastGrammar =
        currentSection === 2 &&
        currentItem ===
            grammarData.length - 1;


    /*
        زر إنهاء الاختبار يظهر فقط
        عند آخر سؤال في قسم القواعد.
    */

    nextBtn.classList.toggle(
        "hidden",
        lastGrammar
    );


    finishBtn.classList.toggle(
        "hidden",
        !lastGrammar
    );
}


/* =========================================================
   PROGRESS
   ========================================================= */

function getQuestionNumber() {

    if (currentSection === 0) {

        return (
            currentItem * 4 + 1
        );

    }


    if (currentSection === 1) {

        return (
            listeningTotal +

            readingData
                .slice(0, currentItem)
                .reduce(
                    (sum, item) =>
                        sum +
                        item.questions.length,
                    0
                ) +

            1
        );

    }


    return (
        listeningTotal +
        readingTotal +
        currentItem +
        1
    );
}


function updateProgress() {

    const number =
        getQuestionNumber();


    const percentage =
        Math.round(
            (
                number /
                totalQuestions
            ) * 100
        );


    if (currentSection === 0) {

        progressText.textContent =
            `الأسئلة ${
                currentItem * 4 + 1
            }–${
                currentItem * 4 + 4
            } من ${
                totalQuestions
            }`;

    } else {

        progressText.textContent =
            `السؤال ${
                number
            } من ${
                totalQuestions
            }`;

    }


    progressPercent.textContent =
        `${percentage}%`;


    progressBar.style.width =
        `${percentage}%`;
}


/* =========================================================
   NEXT
   ========================================================= */

function goNext() {

    if (
        currentSection === 0
    ) {

        if (
            currentItem <
            listeningData.length - 1
        ) {

            currentItem++;

        } else {

            currentSection =
                1;

            currentItem =
                0;

        }

    }

    else if (
        currentSection === 1
    ) {

        if (
            currentItem <
            readingData.length - 1
        ) {

            currentItem++;

        } else {

            currentSection =
                2;

            currentItem =
                0;

        }

    }

    else {

        if (
            currentItem <
            grammarData.length - 1
        ) {

            currentItem++;

        }

    }


    renderCurrent();
}


/* =========================================================
   PREVIOUS
   ========================================================= */

function goPrevious() {

    if (
        currentSection === 0
    ) {

        if (
            currentItem > 0
        ) {

            currentItem--;

        }

    }


    else if (
        currentSection === 1
    ) {

        if (
            currentItem > 0
        ) {

            currentItem--;

        } else {

            currentSection =
                0;

            currentItem =
                listeningData.length - 1;

        }

    }


    else {

        if (
            currentItem > 0
        ) {

            currentItem--;

        } else {

            currentSection =
                1;

            currentItem =
                readingData.length - 1;

        }

    }


    renderCurrent();
}


/* =========================================================
   SCORE
   ========================================================= */

function calculateScore() {

    let listeningScore =
        0;


    listeningData.forEach(
        (passage, passageIndex) => {

            passage.questions.forEach(
                (question, questionIndex) => {

                    const answer =
                        listeningAnswers[
                            passageIndex * 4 +
                            questionIndex
                        ];


                    if (
                        answer ===
                        question.answer
                    ) {

                        listeningScore++;

                    }

                }
            );

        }
    );


    let readingScore =
        0;

    let readingOffset =
        0;


    readingData.forEach(
        passage => {

            passage.questions.forEach(
                (question, index) => {

                    if (
                        readingAnswers[
                            readingOffset + index
                        ] ===
                        question.answer
                    ) {

                        readingScore++;

                    }

                }
            );


            readingOffset +=
                passage.questions.length;

        }
    );


    let grammarScore =
        0;


    grammarData.forEach(
        (question, index) => {

            if (
                grammarAnswers[index] ===
                question.answer
            ) {

                grammarScore++;

            }

        }
    );


    return {

        listeningScore,

        readingScore,

        grammarScore,

        total:
            listeningScore +
            readingScore +
            grammarScore

    };
}


/* =========================================================
   LEVEL
   ========================================================= */

function getLevel(score) {

    if (score <= 20) {

        return {
            name: "ضعيف",

            message:
                "هذه النتيجة تشير إلى أنك تحتاج إلى بناء أساس أقوى في اللغة الإنجليزية."
        };

    }


    if (score <= 40) {

        return {
            name: "يحتاج إلى تحسين",

            message:
                "لديك بعض المهارات الجيدة، ولكن ما زالت هناك جوانب مهمة تحتاج إلى تطوير."
        };

    }


    if (score <= 60) {

        return {
            name: "متوسط",

            message:
                "لديك أساس جيد ويمكنك الوصول إلى مستوى أعلى مع التدريب المنتظم."
        };

    }


    if (score <= 74) {

        return {
            name: "جيد",

            message:
                "أداء جيد. مع المزيد من التدريب يمكنك رفع نتيجتك والوصول إلى مستوى متقدم."
        };

    }


    if (score <= 89) {

        return {
            name: "متقدم",

            message:
                "أداء ممتاز. لديك مستوى قوي في مهارات الاختبار."
        };

    }


    return {

        name:
            "ممتاز",

        message:
            "نتيجة استثنائية! حافظ على مستواك واستمر في التطور."

    };
}

function confirmFinishExam() {

    const unansweredListening =
        listeningAnswers.filter(answer => answer === null).length;

    const unansweredReading =
        readingAnswers.filter(answer => answer === null).length;

    const unansweredGrammar =
        grammarAnswers.filter(answer => answer === null).length;

    const unanswered =
        unansweredListening +
        unansweredReading +
        unansweredGrammar;

    const message =
    unanswered > 0
        ? `لديك <strong>${unanswered} سؤالًا غير مجاب</strong>`
        : `لقد أجبت على جميع الأسئلة.`;

finishModalMessage.innerHTML = message;

finishModal.classList.remove("hidden");
}

cancelFinishBtn.addEventListener(
    "click",
    () => {

        finishModal.classList.add("hidden");

    }
);

confirmFinishBtn.addEventListener(
    "click",
    () => {

        finishModal.classList.add("hidden");

        finishExam(false);

    }
);

/* =========================================================
   FINISH
   ========================================================= */

function finishExam(timeExpired = false) {

    if (submitted) {
        return;
    }


    submitted =
        true;


    clearInterval(
        timerInterval
    );


    const scores =
        calculateScore();


    const level =
        getLevel(
            scores.total
        );


    document.getElementById(
        "finalScore"
    ).textContent =
        scores.total;


    document.getElementById(
        "levelName"
    ).textContent =
        level.name;


    document.getElementById(
        "resultMessage"
    ).textContent =
        timeExpired
            ? "انتهى الوقت وتم إنهاء الاختبار تلقائيًا. " +
              level.message
            : level.message;


    document.getElementById(
        "listeningScore"
    ).textContent =
        `${scores.listeningScore} / ${listeningTotal}`;


    document.getElementById(
        "readingScore"
    ).textContent =
        `${scores.readingScore} / ${readingTotal}`;


    document.getElementById(
        "grammarScore"
    ).textContent =
        `${scores.grammarScore} / ${grammarTotal}`;


    /*
        التسويق حاليًا للدرجات 0–40.
        تستطيع تعديل هذا الشرط لاحقًا.
    */

    courseCta.classList.toggle(
        "hidden",
        scores.total > 40
    );


    showPage(
        resultPage
    );


    /*
        المتفوقون:
        75+
    */

    if (
        scores.total >= 75
    ) {

        setTimeout(
            () => {

                playClapping();

                startConfetti();

            },
            300
        );

    }
}


/* =========================================================
   CLAPPING
   ========================================================= */

function playClapping() {

    clapAudio.currentTime =
        0;

    clapAudio.play().catch(
        () => {
            /*
                بعض المتصفحات تمنع
                الصوت التلقائي.
            */
        }
    );
}


/* =========================================================
   CONFETTI
   ========================================================= */

function startConfetti() {

    const canvas =
        document.getElementById(
            "confettiCanvas"
        );


    const ctx =
        canvas.getContext(
            "2d"
        );


    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;


    const pieces = [];


    for (
        let i = 0;
        i < 180;
        i++
    ) {

        pieces.push({

            x:
                Math.random() *
                canvas.width,

            y:
                -Math.random() *
                canvas.height,

            size:
                5 +
                Math.random() * 8,

            speed:
                2 +
                Math.random() * 4,

            rotation:
                Math.random() *
                Math.PI,

            rotationSpeed:
                -.08 +
                Math.random() * .16,

            drift:
                -1.5 +
                Math.random() * 3

        });

    }


    let frames =
        0;


    function draw() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        pieces.forEach(
            piece => {

                piece.y +=
                    piece.speed;

                piece.x +=
                    piece.drift;

                piece.rotation +=
                    piece.rotationSpeed;


                ctx.save();


                ctx.translate(
                    piece.x,
                    piece.y
                );


                ctx.rotate(
                    piece.rotation
                );


                ctx.fillStyle =
                    [
                        "#00689B",
                        "#16A34A",
                        "#FBBF24",
                        "#DC2626",
                        "#7C3AED"
                    ][
                        Math.floor(
                            Math.random() * 5
                        )
                    ];


                ctx.fillRect(
                    -piece.size / 2,
                    -piece.size / 2,
                    piece.size,
                    piece.size * .65
                );


                ctx.restore();

            }
        );


        frames++;


        if (
            frames < 360
        ) {

            requestAnimationFrame(
                draw
            );

        } else {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

        }

    }


    draw();
}


/* =========================================================
   RESTART
   ========================================================= */

function restartExam() {

    clearInterval(
        timerInterval
    );

    submitted =
        false;

    showPage(
        introPage
    );

}


/* =========================================================
   THEME
   ========================================================= */

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const dark =
            document.body.classList.contains(
                "dark"
            );


        themeBtn.textContent =
            dark
                ? "☀"
                : "☾";


        localStorage.setItem(
            "step-theme",
            dark
                ? "dark"
                : "light"
        );

    }
);


/* Restore theme */

if (
    localStorage.getItem(
        "step-theme"
    ) === "dark"
) {

    document.body.classList.add(
        "dark"
    );

    themeBtn.textContent =
        "☀";
}


/* =========================================================
   BUTTON EVENTS
   ========================================================= */

startBtn.addEventListener(
    "click",
    startExam
);


restartBtn.addEventListener(
    "click",
    restartExam
);


previousBtn.addEventListener(
    "click",
    goPrevious
);


nextBtn.addEventListener(
    "click",
    goNext
);


finishBtn.addEventListener(
    "click",
    () => {

        confirmFinishExam();

    }
);


/* =========================================================
   REFRESH WARNING
   ========================================================= */

window.addEventListener(
    "beforeunload",
    event => {

        if (
            !submitted &&
            !testPage.classList.contains(
                "hidden"
            )
        ) {

            event.preventDefault();

            event.returnValue = "";

        }

    }
);