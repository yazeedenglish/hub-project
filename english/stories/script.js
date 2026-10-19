
/* =========================================================
   YAZEED ENGLISH - STORIES
========================================================= */


/* =========================================================
   1. STORIES DATA

   لإضافة قصة جديدة:
   - أضف بياناتها هنا.
   - أنشئ مجلدًا مستقلًا لها داخل assets/stories/.
   - ضع الصورة والصوت داخل مجلدها.
========================================================= */

const stories = [

    {
        id: "the-lost-puppy",

        level: "beginner",

        title: "الجرو الضائع",
        englishTitle: "The Lost Puppy",

        description:
            "قصة لطيفة عن طفل يجد جروًا ضائعًا ويحاول مساعدته في العودة إلى صاحبه.",

        emoji: "",

        // اترك image فارغًا لاستخدام الإيموجي.
        // لاستبداله بصورة، اكتب مسار الصورة داخل مجلد القصة.
        image: "https://file.yazeedenglish.com/english.png",

        duration: "3 دقائق",

        // ضع مسار ملف الصوت الخاص بالقصة
        audio: "https://easyenglish.com/wp-content/uploads/2026/10/The-Winner___ElevenLabs_2026-10-14T15_21_12_Harry-Articulate-British-Storyteller_pvc_sp100_s50_sb75_v4.mp3",

        subtitles: "subtitles/the-winner.vtt",

        paragraphs: [
            "One sunny morning, a young boy named Adam walked to the park.",

            "Near a big tree, he saw a small brown puppy. The puppy looked sad and hungry.",

            '"Hello, little friend," Adam said gently. "Are you lost?"',

            "The puppy wagged its tail and followed Adam. Adam gave it some water and looked for its owner.",

            "Soon, a little girl ran toward them. Her name was Lily. She was looking for her puppy, Max.",

            '"Max!" Lily shouted happily. The puppy ran to her and jumped into her arms.',

            '"Thank you for helping my puppy," Lily said. Adam smiled. He was happy because he had helped a new friend.'
        ],

        translations: {
            "sunny": "مشمس",
            "morning": "الصباح",
            "young": "صغير السن",
            "boy": "ولد",
            "walked": "مشى",
            "park": "حديقة",
            "near": "بالقرب من",
            "tree": "شجرة",
            "small": "صغير",
            "brown": "بني",
            "puppy": "جرو",
            "looked": "بدا / نظر",
            "sad": "حزين",
            "hungry": "جائع",
            "hello": "مرحبًا",
            "little": "صغير",
            "friend": "صديق",
            "said": "قال",
            "gently": "بلطف",
            "lost": "ضائع",
            "wagged": "حرّك (ذيله)",
            "tail": "ذيل",
            "followed": "تبع",
            "gave": "أعطى",
            "water": "ماء",
            "look": "ابحث / انظر",
            "owner": "المالك / صاحب الشيء",
            "soon": "بعد قليل",
            "girl": "فتاة",
            "ran": "ركض",
            "toward": "نحو",
            "them": "هم / إياهم",
            "name": "اسم",
            "looking": "يبحث",
            "max": "ماكس (اسم)",
            "shouted": "صرخت",
            "happily": "بسعادة",
            "her": "لها / خاصتها",
            "jumped": "قفز",
            "arms": "ذراعان",
            "thank": "أشكر",
            "helping": "مساعدة",
            "smiled": "ابتسم",
            "happy": "سعيد",
            "because": "لأن",
            "helped": "ساعد"
        },

        questions: [
            {
                question: "Where did Adam go one sunny morning?",
                options: [
                    "To the park",
                    "To school",
                    "To the shop"
                ],
                answer: 0,
                explanation: "ذهب آدم إلى الحديقة في صباح مشمس."
            },
            {
                question: "What did Adam find near the tree?",
                options: [
                    "A small brown puppy",
                    "A little bird",
                    "A red ball"
                ],
                answer: 0,
                explanation: "وجد آدم جروًا صغيرًا بني اللون بالقرب من الشجرة."
            },
            {
                question: "What did Adam give the puppy?",
                options: [
                    "Some milk",
                    "Some water",
                    "A toy"
                ],
                answer: 1,
                explanation: "أعطى آدم الجرو بعض الماء."
            },
            {
                question: "How did Adam feel at the end?",
                options: [
                    "Angry",
                    "Tired",
                    "Happy"
                ],
                answer: 2,
                explanation: "شعر آدم بالسعادة لأنه ساعد صديقه الجديد."
            }
        ]
    }

];


/* =========================================================
   2. LEVELS
========================================================= */

const levels = [
    {
        id: "beginner",
        name: "المستوى المبتدئ",
        range: "A1 – A2",
        icon: "🌱",
        description: "ابدأ رحلتك مع قصص قصيرة وكلمات سهلة."
    },
    {
        id: "intermediate",
        name: "المستوى المتوسط",
        range: "B1 – B2",
        icon: "🚀",
        description: "طوّر مفرداتك وافهم قصصًا أكثر تنوعًا."
    },
    {
        id: "advanced",
        name: "المستوى المتقدم",
        range: "C1 – C2",
        icon: "🏆",
        description: "تحدَّ نفسك بقصص غنية بالتعبيرات والمعاني."
    }
];


/* =========================================================
   3. ELEMENTS
========================================================= */

const levelsContainer = document.getElementById("levelsContainer");

const storyReader = document.getElementById("storyReader");
const backToStories = document.getElementById("backToStories");

const readerLevel = document.getElementById("readerLevel");
const readerBadge = document.getElementById("readerBadge");
const readerTitle = document.getElementById("readerTitle");
const readerDescription = document.getElementById("readerDescription");
const readerCover = document.getElementById("readerCover");

const modeSelection = document.getElementById("modeSelection");
const readModeBtn = document.getElementById("readModeBtn");
const listenModeBtn = document.getElementById("listenModeBtn");

const audioSection = document.getElementById("audioSection");
const storyAudio = document.getElementById("storyAudio");
const playPauseBtn = document.getElementById("playPauseBtn");
const rewindBtn = document.getElementById("rewindBtn");
const forwardBtn = document.getElementById("forwardBtn");
const audioProgress = document.getElementById("audioProgress");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");
const playbackSpeed = document.getElementById("playbackSpeed");
const audioMessage = document.getElementById("audioMessage");

const readingSection = document.getElementById("readingSection");
const storyText = document.getElementById("storyText");
const playReadingAudio = document.getElementById("playReadingAudio");

const wordTranslation = document.getElementById("wordTranslation");
const translatedWord = document.getElementById("translatedWord");
const translatedMeaning = document.getElementById("translatedMeaning");
const closeTranslation = document.getElementById("closeTranslation");

const completionSection = document.getElementById("completionSection");
const startQuizBtn = document.getElementById("startQuizBtn");

const quizSection = document.getElementById("quizSection");
const quizProgress = document.getElementById("quizProgress");
const quizProgressBar = document.getElementById("quizProgressBar");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");

const quizResult = document.getElementById("quizResult");
const quizScore = document.getElementById("quizScore");
const retryQuizBtn = document.getElementById("retryQuizBtn");
const finishStoryBtn = document.getElementById("finishStoryBtn");

const themeToggle = document.getElementById("themeToggle");


/* =========================================================
   4. STATE
========================================================= */

let currentStory = null;
let currentLevel = null;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let questionAnswered = false;
let selectedWordButton = null;

let currentCues = [];
let activeCueIndex = -1;

function parseVttTime(value) {
    const parts = value.split(":");
    const last = parts.pop();
    const seconds = Number(last);

    if (parts.length === 2) {
        return Number(parts[0]) * 3600 +
               Number(parts[1]) * 60 +
               seconds;
    }

    if (parts.length === 1) {
        return Number(parts[0]) * 60 + seconds;
    }

    return seconds;
}

async function loadSubtitleCues(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Could not load subtitle file");
    }

    const content = await response.text();

    const blocks = content
        .replace(/\r/g, "")
        .trim()
        .split(/\n\s*\n/);

    return blocks.map(block => {
        const lines = block.split("\n");

        const timeIndex = lines.findIndex(line =>
            line.includes("-->")
        );

        if (timeIndex === -1) return null;

        const times = lines[timeIndex]
            .split("-->")
            .map(part => part.trim().split(/\s+/)[0]);

        const text = lines
            .slice(timeIndex + 1)
            .join(" ")
            .replace(/<[^>]*>/g, "")
            .trim();

        if (!text || times.length !== 2) return null;

        return {
            start: parseVttTime(times[0]),
            end: parseVttTime(times[1]),
            text
        };
    }).filter(Boolean);
}

function updateActiveSubtitle() {
    if (!currentStory || !currentStory.subtitles) return;

    const time = storyAudio.currentTime;

    const index = currentCues.findIndex(cue =>
        time >= cue.start && time < cue.end
    );

    if (index === activeCueIndex) return;

    storyText.querySelectorAll(".story-paragraph.is-speaking")
        .forEach(element => {
            element.classList.remove("is-speaking");
        });

    activeCueIndex = index;

    if (index === -1) return;

    const activeElement = storyText.querySelector(
        `[data-cue-index="${index}"]`
    );

    if (activeElement) {
        activeElement.classList.add("is-speaking");

        if (!readingSection.hidden) {
            activeElement.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    }
}

/* =========================================================
   5. THEME
========================================================= */

function applyTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark", isDark);

    themeToggle.textContent = isDark ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"
    );
}

function initializeTheme() {
    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem("theme");
    } catch (error) {
        savedTheme = null;
    }

    if (savedTheme !== "dark" && savedTheme !== "light") {
        savedTheme = document.body.classList.contains("dark")
            ? "dark"
            : "light";
    }

    applyTheme(savedTheme);
}

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark")
        ? "light"
        : "dark";

    applyTheme(nextTheme);

    try {
        localStorage.setItem("theme", nextTheme);
    } catch (error) {
        // يعمل تبديل المظهر حتى لو تعذر حفظ التفضيل.
    }
});

initializeTheme();


/* =========================================================
   6. HELPERS
========================================================= */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

function getLevel(levelId) {
    return levels.find(level => level.id === levelId);
}

function getStoriesForLevel(levelId) {
    return stories.filter(story => story.level === levelId);
}

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(remainingSeconds).padStart(2, "0")
    );
}

function setCover(element, story) {
    element.replaceChildren();

    if (story.image) {
        const image = document.createElement("img");

        image.src = story.image;
        image.alt = story.title;
        image.loading = "lazy";

        image.addEventListener("error", () => {
            element.replaceChildren();

            const emoji = document.createElement("span");
            emoji.className = "story-cover-emoji";
            emoji.textContent = story.emoji || "📖";

            element.appendChild(emoji);
        }, { once: true });

        element.appendChild(image);
        return;
    }

    const emoji = document.createElement("span");

    emoji.className = "story-cover-emoji";
    emoji.textContent = story.emoji || "📖";

    element.appendChild(emoji);
}


/* =========================================================
   7. RENDER LEVELS AND STORIES
========================================================= */

function renderLevels() {
    levelsContainer.replaceChildren();

    const sortedStories = [...stories].sort((a, b) => {
        const levelOrder = {
            beginner: 1,
            intermediate: 2,
            advanced: 3
        };

        return levelOrder[a.level] - levelOrder[b.level];
    });

    const list = document.createElement("div");
    list.className = "stories-list";

    sortedStories.forEach(story => {
        list.appendChild(createStoryCard(story));
    });

    levelsContainer.appendChild(list);
}


function createStoryCard(story) {
    const level = getLevel(story.level);

    const card = document.createElement("article");
    card.className = "story-card";

    const cover = document.createElement("div");
    cover.className = "story-cover";

    setCover(cover, story);

    const body = document.createElement("div");
    body.className = "story-card-body";

    const meta = document.createElement("div");
    meta.className = "story-card-meta";

    const tag = document.createElement("span");
tag.className = "story-tag";
tag.textContent = level ? level.range : "";

const levelColors = {
    beginner: {
        color: "#007DB5",
        background: "#E7F5FC"
    },
    intermediate: {
        color: "#7954D8",
        background: "#F0EAFF"
    },
    advanced: {
        color: "#E47A25",
        background: "#FFF0E2"
    }
};

const badgeColors = levelColors[story.level];

if (badgeColors) {
    tag.style.color = badgeColors.color;
    tag.style.backgroundColor = badgeColors.background;
}

    meta.appendChild(tag);

    const title = document.createElement("h3");
    title.textContent = story.title;

    const englishTitle = document.createElement("span");
    englishTitle.className = "story-english-title";
    englishTitle.dir = "ltr";
    englishTitle.textContent = story.englishTitle;

    title.appendChild(englishTitle);

    const description = document.createElement("p");
    description.textContent = story.description;

    const footer = document.createElement("div");
    footer.className = "story-card-footer";

    const duration = document.createElement("span");
    duration.className = "story-duration";
    duration.textContent = `⏱ ${story.duration}`;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "primary-btn story-start-btn";
    button.textContent = "ابدأ القراءة ←";

    button.addEventListener("click", () => {
        openStory(story);
    });

    footer.append(duration, button);
    body.append(meta, title, description, footer);
    card.append(cover, body);

    return card;
}


/* =========================================================
   8. OPEN STORY
========================================================= */

function openStory(story) {
    currentStory = story;
    currentLevel = getLevel(story.level);

    stopAudio();
    resetReader();

    readerTitle.textContent = story.title;
    readerDescription.textContent = story.description;
    readerLevel.textContent = currentLevel
        ? currentLevel.name
        : "";

    readerBadge.textContent = story.englishTitle;

    setCover(readerCover, story);

    storyReader.hidden = false;

    storyReader.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function resetReader() {
    modeSelection.hidden = false;

    audioSection.hidden = true;
    readingSection.hidden = true;
    completionSection.hidden = true;
    quizSection.hidden = true;

    wordTranslation.hidden = true;

    storyText.replaceChildren();

    quizOptions.replaceChildren();

    quizFeedback.hidden = true;
    nextQuestionBtn.hidden = true;
    quizResult.hidden = true;

    playPauseBtn.textContent = "▶";
    playReadingAudio.textContent = "▶ استمع أثناء القراءة";

    selectedWordButton = null;

    currentQuestionIndex = 0;
    correctAnswers = 0;
    questionAnswered = false;
}


/* =========================================================
   9. READING MODE
========================================================= */

async function renderStoryText() {
    storyText.replaceChildren();
    currentCues = [];
    activeCueIndex = -1;

    let paragraphs = currentStory.paragraphs || [];

    if (currentStory.subtitles) {
        try {
            currentCues = await loadSubtitleCues(
                currentStory.subtitles
            );

            paragraphs = currentCues.map(cue => cue.text);
        } catch (error) {
            console.error("Subtitle loading failed:", error);

            audioMessage.textContent =
                "تعذر تحميل ملف الترجمة. تحقق من مساره.";

            return;
        }
    }

    paragraphs.forEach((paragraph, index) => {
        const paragraphElement = document.createElement("p");
        paragraphElement.className = "story-paragraph";

        if (currentStory.subtitles) {
            paragraphElement.dataset.cueIndex = index;
        }

        const tokens = paragraph.match(
            /[A-Za-z]+(?:['’][A-Za-z]+)*|[^A-Za-z]+/g
        ) || [];

        tokens.forEach(token => {
            if (/^[A-Za-z]+(?:['’][A-Za-z]+)*$/.test(token)) {
                const button = document.createElement("button");

                button.type = "button";
                button.className = "story-word";
                button.textContent = token;
                button.lang = "en";

                button.addEventListener("click", () => {
                    showWordTranslation(token, button);
                });

                paragraphElement.appendChild(button);
            } else {
                paragraphElement.appendChild(
                    document.createTextNode(token)
                );
            }
        });

        storyText.appendChild(paragraphElement);
    });

    updateActiveSubtitle();
}


readModeBtn.addEventListener("click", async () => {
    if (!currentStory) return;

    modeSelection.hidden = true;
    readingSection.hidden = false;
    audioSection.hidden = true;

    await renderStoryText();
});


function showWordTranslation(word, button) {
    const normalizedWord = word
        .toLowerCase()
        .replace(/[’]/g, "'");

    const translations = currentStory.translations || {};

    const meaning = translations[normalizedWord];

    if (selectedWordButton) {
        selectedWordButton.classList.remove("selected");
    }

    selectedWordButton = button;
    button.classList.add("selected");

    translatedWord.textContent = word;

    translatedMeaning.textContent = meaning
        ? meaning
        : "لم تتم إضافة ترجمة لهذه الكلمة بعد.";

    wordTranslation.hidden = false;
}


closeTranslation.addEventListener("click", () => {
    wordTranslation.hidden = true;

    if (selectedWordButton) {
        selectedWordButton.classList.remove("selected");
        selectedWordButton = null;
    }
});


/* =========================================================
   10. LISTENING MODE
========================================================= */

listenModeBtn.addEventListener("click", () => {
    if (!currentStory) return;

    modeSelection.hidden = true;
    audioSection.hidden = false;
    readingSection.hidden = true;

    loadStoryAudio();

    audioMessage.textContent =
        "يمكنك تغيير سرعة التشغيل والتقديم أو الرجوع 5 ثوانٍ.";
});


function loadStoryAudio() {
    stopAudio();

    storyAudio.removeAttribute("src");

    storyAudio.src = currentStory.audio;
    storyAudio.load();

    audioProgress.value = 0;
    currentTimeDisplay.textContent = "00:00";
    durationDisplay.textContent = "00:00";

    playPauseBtn.textContent = "▶";

    audioMessage.textContent =
        "اضغط تشغيل لبدء الاستماع.";
}


async function playAudio() {
    if (!currentStory) return;

    if (!storyAudio.getAttribute("src")) {
        loadStoryAudio();
    }

    try {
        await storyAudio.play();
        playPauseBtn.textContent = "Ⅱ";
    } catch (error) {
        audioMessage.textContent =
            "تعذّر تشغيل الصوت. تأكد من إضافة ملف audio.mp3 إلى مجلد القصة.";
    }
}


function pauseAudio() {
    storyAudio.pause();
    playPauseBtn.textContent = "▶";
}


function stopAudio() {
    if (!storyAudio) return;

    storyAudio.pause();

    try {
        storyAudio.currentTime = 0;
    } catch (error) {
        // لا حاجة إلى إجراء إضافي.
    }

    playPauseBtn.textContent = "▶";
}


playPauseBtn.addEventListener("click", () => {
    if (storyAudio.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});


rewindBtn.addEventListener("click", () => {
    if (Number.isFinite(storyAudio.duration)) {
        storyAudio.currentTime = Math.max(
            0,
            storyAudio.currentTime - 5
        );
    }
});


forwardBtn.addEventListener("click", () => {
    if (Number.isFinite(storyAudio.duration)) {
        storyAudio.currentTime = Math.min(
            storyAudio.duration,
            storyAudio.currentTime + 5
        );
    }
});


playbackSpeed.addEventListener("change", () => {
    storyAudio.playbackRate = Number(playbackSpeed.value);
});


storyAudio.addEventListener("loadedmetadata", () => {
    durationDisplay.textContent = formatTime(storyAudio.duration);
});


storyAudio.addEventListener("timeupdate", () => {
    currentTimeDisplay.textContent =
        formatTime(storyAudio.currentTime);

    if (Number.isFinite(storyAudio.duration) &&
        storyAudio.duration > 0) {
        audioProgress.value =
            (storyAudio.currentTime / storyAudio.duration) * 100;
    }

    updateActiveSubtitle();
});


audioProgress.addEventListener("input", () => {
    if (Number.isFinite(storyAudio.duration) && storyAudio.duration > 0) {
        storyAudio.currentTime =
            (Number(audioProgress.value) / 100) * storyAudio.duration;
    }
});


storyAudio.addEventListener("play", () => {
    playPauseBtn.textContent = "Ⅱ";
});


storyAudio.addEventListener("pause", () => {
    playPauseBtn.textContent = "▶";
});


storyAudio.addEventListener("ended", () => {
    playPauseBtn.textContent = "▶";
    showCompletion();
});


storyAudio.addEventListener("error", () => {
    audioMessage.textContent =
        "لم يتم العثور على ملف الصوت. أضف تسجيل Narakeet إلى مجلد القصة وتأكد من صحة المسار.";
});


/* تشغيل الصوت أثناء القراءة */

playReadingAudio.addEventListener("click", () => {
    if (!currentStory) return;

    if (!storyAudio.getAttribute("src")) {
        loadStoryAudio();
    }

    audioSection.hidden = false;

    playAudio();
});


/* =========================================================
   11. STORY COMPLETION
========================================================= */

function showCompletion() {
    completionSection.hidden = false;

    completionSection.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


startQuizBtn.addEventListener("click", () => {
    if (!currentStory) return;

    completionSection.hidden = true;
    readingSection.hidden = true;
    audioSection.hidden = true;

    quizSection.hidden = false;

    startQuiz();
});


/* =========================================================
   12. QUIZ
========================================================= */

function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;

    quizResult.hidden = true;
    quizFeedback.hidden = true;

    renderQuestion();
}


function renderQuestion() {
    const questions = currentStory.questions;

    questionAnswered = false;

    quizFeedback.hidden = true;
    nextQuestionBtn.hidden = true;
    quizOptions.replaceChildren();

    const question = questions[currentQuestionIndex];

    quizProgress.textContent =
        `السؤال ${currentQuestionIndex + 1} من ${questions.length}`;

    quizProgressBar.style.width =
        `${(currentQuestionIndex / questions.length) * 100}%`;

    quizQuestion.textContent = question.question;

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "quiz-option";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = ["A", "B", "C"][index];

        const text = document.createElement("span");
        text.textContent = option;

        button.append(letter, text);

        button.addEventListener("click", () => {
            answerQuestion(index);
        });

        quizOptions.appendChild(button);
    });
}


function answerQuestion(selectedIndex) {
    if (questionAnswered) return;

    questionAnswered = true;

    const question = currentStory.questions[currentQuestionIndex];
    const buttons = quizOptions.querySelectorAll(".quiz-option");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.answer) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && index !== question.answer) {
            button.classList.add("incorrect");
        }
    });

    if (selectedIndex === question.answer) {
        correctAnswers++;

        quizFeedback.textContent =
            `إجابة صحيحة! ${question.explanation}`;
    } else {
        quizFeedback.textContent =
            `ليست الإجابة الصحيحة. ${question.explanation}`;
    }

    quizFeedback.hidden = false;

    nextQuestionBtn.textContent =
        currentQuestionIndex === currentStory.questions.length - 1
            ? "عرض النتيجة"
            : "السؤال التالي";

    nextQuestionBtn.hidden = false;
}


nextQuestionBtn.addEventListener("click", () => {
    if (!questionAnswered) return;

    currentQuestionIndex++;

    if (currentQuestionIndex < currentStory.questions.length) {
        renderQuestion();
    } else {
        showQuizResult();
    }
});


function showQuizResult() {
    quizQuestion.hidden = true;
    quizOptions.hidden = true;
    quizFeedback.hidden = true;
    nextQuestionBtn.hidden = true;

    quizProgress.textContent = "اكتمل الاختبار";
    quizProgressBar.style.width = "100%";

    const total = currentStory.questions.length;
    const percentage = Math.round((correctAnswers / total) * 100);

    quizScore.textContent =
        `أجبت بشكل صحيح عن ${correctAnswers} من ${total} أسئلة (${percentage}%).`;

    quizResult.hidden = false;
}


retryQuizBtn.addEventListener("click", () => {
    quizQuestion.hidden = false;
    quizOptions.hidden = false;

    startQuiz();
});


/* =========================================================
   13. NAVIGATION
========================================================= */

function returnToStories() {
    stopAudio();

    storyReader.hidden = true;

    currentStory = null;
    currentLevel = null;

    renderLevels();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


backToStories.addEventListener("click", returnToStories);

finishStoryBtn.addEventListener("click", returnToStories);


/* =========================================================
   14. INITIALIZE
========================================================= */

renderLevels();
