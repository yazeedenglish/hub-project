
/* =========================================================
   YAZEED ENGLISH - STORIES
========================================================= */

const stories = [
    {
        id: "the-race",
        level: "beginner",
        image: "https://file.yazeedenglish.com/english.png",
        emoji: "🐶",
        duration: "3 دقائق",
        dataFile: "data/the-race.json",
        subtitles: "data/the-race.vtt",

        // Replace this with the correct recording for this story.
        audio: "https://easyenglish.com/wp-content/uploads/2026/10/The-Winner___ElevenLabs_2026-10-14T15_21_12_Harry-Articulate-British-Storyteller_pvc_sp100_s50_sb75_v4.mp3"
    },

     {
        id: "the-race",
        level: "intermediate",
        image: "https://file.yazeedenglish.com/english.png",
        emoji: "🐶",
        duration: "3 دقائق",
        dataFile: "data/the-race.json",
        subtitles: "data/the-race.vtt",

        // Replace this with the correct recording for this story.
        audio: "https://easyenglish.com/wp-content/uploads/2026/10/The-Winner___ElevenLabs_2026-10-14T15_21_12_Harry-Articulate-British-Storyteller_pvc_sp100_s50_sb75_v4.mp3"
    },

    {
        id: "the-race",
        level: "intermediate",
        image: "https://file.yazeedenglish.com/Stories-images/a783be86-03ed-4043-ab05-b401cab561c2.jfif",
        emoji: "🐶",
        duration: "3 دقائق",
        dataFile: "data/the-race.json",
        subtitles: "data/the-race.vtt",

        // Replace this with the correct recording for this story.
        audio: "https://easyenglish.com/wp-content/uploads/2026/10/The-Winner___ElevenLabs_2026-10-14T15_21_12_Harry-Articulate-British-Storyteller_pvc_sp100_s50_sb75_v4.mp3"
    },

    {
        id: "the-race",
        level: "advanced",
        image: "https://file.yazeedenglish.com/english.png",
        emoji: "🐶",
        duration: "3 دقائق",
        dataFile: "data/the-race.json",
        subtitles: "data/the-race.vtt",

        // Replace this with the correct recording for this story.
        audio: "https://easyenglish.com/wp-content/uploads/2026/10/The-Winner___ElevenLabs_2026-10-14T15_21_12_Harry-Articulate-British-Storyteller_pvc_sp100_s50_sb75_v4.mp3"
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
let currentStoryContent = null;
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

async function loadStoryContent(story) {
    if (story.content) return story.content;

    const response = await fetch(story.dataFile);

    if (!response.ok) {
        throw new Error("تعذر تحميل ملف القصة: " + story.dataFile);
    }

    const content = await response.json();

    story.content = content;
    return content;
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


async function renderLevels() {
    levelsContainer.replaceChildren();

    const loadingMessage = document.createElement("p");
    loadingMessage.textContent = "جارٍ تحميل القصص...";
    levelsContainer.appendChild(loadingMessage);

    const levelOrder = {
        beginner: 1,
        intermediate: 2,
        advanced: 3
    };

    const sortedStories = [...stories].sort((a, b) =>
        (levelOrder[a.level] || 99) - (levelOrder[b.level] || 99)
    );

    const results = await Promise.allSettled(
        sortedStories.map(story => loadStoryContent(story))
    );

    levelsContainer.replaceChildren();

    const list = document.createElement("div");
    list.className = "stories-list";

    sortedStories.forEach((story, index) => {
        if (results[index].status === "fulfilled") {
            list.appendChild(createStoryCard(story));
        } else {
            console.error(results[index].reason);
        }
    });

    if (!list.children.length) {
        levelsContainer.textContent =
            "تعذر تحميل القصص. تحقق من ملفات JSON.";
        return;
    }

    levelsContainer.appendChild(list);
}



function createStoryCard(story) {
     const level = getLevel(story.level);
    const content = story.content;

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
    title.textContent = content.title;

    const englishTitle = document.createElement("span");
    englishTitle.className = "story-english-title";
    englishTitle.dir = "ltr";
    englishTitle.textContent = content.englishTitle;

    title.appendChild(englishTitle);

    const description = document.createElement("p");
    description.textContent = content.description || "";

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


async function openStory(story) {
    try {
        currentStory = story;
        currentStoryContent = await loadStoryContent(story);
        currentLevel = getLevel(story.level);

        resetReader();

        readerTitle.textContent = currentStoryContent.title || "";
        readerDescription.textContent =
            currentStoryContent.description || "";

        readerLevel.textContent = currentLevel
            ? currentLevel.name
            : "";

        readerBadge.textContent =
            currentStoryContent.englishTitle || "";

        setCover(readerCover, story);

        // إخفاء خيارات القراءة والاستماع
        modeSelection.hidden = true;

        // إظهار مشغل الصوت المخصص أعلى النص
        audioSection.hidden = true;
        readingSection.hidden = false;

        // منع ظهور مشغل HTML الأصلي كواجهة ثانية
        storyAudio.controls = false;
        storyAudio.hidden = true;

        // تحميل ملف الصوت للقصة الحالية دون تشغيله تلقائيًا
loadStoryAudio();

// تحميل التوقيتات الخاصة بالنص
currentCues = [];
activeCueIndex = -1;

if (currentStory.subtitles) {
    try {
        currentCues = await loadSubtitleCues(currentStory.subtitles);
    } catch (error) {
        console.error("Subtitle loading failed:", error);
    }
}

// عرض نص القصة
storyText.hidden = false;
await renderStoryText();

        storyReader.hidden = false;

        storyReader.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    } catch (error) {
        console.error("Story loading failed:", error);
        alert("تعذر تحميل القصة. تحقق من ملف JSON ومساره.");
    }
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

    updatePlayPauseIcon(false);
    playReadingAudio.textContent = "استمع أثناء القراءة";

    selectedWordButton = null;

    currentQuestionIndex = 0;
    correctAnswers = 0;
    questionAnswered = false;

    quizQuestion.hidden = false;
quizOptions.hidden = false;

if (storyAudio) {
    storyAudio.controls = false;
    storyAudio.hidden = true;
}
}


/* =========================================================
   9. READING MODE
========================================================= */

async function renderStoryText() {
    if (!currentStoryContent) return;

    storyText.replaceChildren();

    // Use timestamped subtitle text when available
    if (currentCues.length > 0) {
        currentCues.forEach((cue, index) => {
            const paragraphElement = document.createElement("p");

            paragraphElement.className = "story-paragraph";
            paragraphElement.dataset.cueIndex = index;

            const tokens = cue.text.match(
                /[A-Za-z]+(?:['’][A-Za-z]+)*|[^A-Za-z]+/g
            ) || [];

            tokens.forEach(token => {
                if (/^[A-Za-z]+(?:['’][A-Za-z]+)*$/.test(token)) {
                    const button = document.createElement("button");

                    button.type = "button";
                    button.className = "story-word";
                    button.textContent = token;
                    button.lang = "en";
                    button.setAttribute(
                        "aria-label",
                        `معنى كلمة ${token}`
                    );

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

        return;
    }

    // Fall back to the original JSON paragraphs
    const paragraphs = currentStoryContent.paragraphs || [];

    paragraphs.forEach(paragraph => {
        const paragraphElement = document.createElement("p");
        paragraphElement.className = "story-paragraph";

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
                button.setAttribute(
                    "aria-label",
                    `معنى كلمة ${token}`
                );

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
}


function showWordTranslation(word, button) {
    const normalize = value =>
        String(value)
            .toLowerCase()
            .replace(/[’‘]/g, "'");

    const translations = currentStoryContent?.translations || {};
    const normalizedWord = normalize(word);

    const meaningKey = Object.keys(translations).find(
        key => normalize(key) === normalizedWord
    );

    const meaning = meaningKey
        ? translations[meaningKey]
        : "لم تتم إضافة ترجمة لهذه الكلمة بعد.";

    if (selectedWordButton) {
        selectedWordButton.classList.remove("selected");
    }

    selectedWordButton = button;
    button.classList.add("selected");

    translatedWord.textContent = word;
    translatedMeaning.textContent = meaning;

    addWordSpeaker();

    wordSpeechMessage.hidden = true;
    if (wordTranslation.parentElement !== document.body) {
    document.body.appendChild(wordTranslation);
}

wordTranslation.hidden = false;

requestAnimationFrame(positionWordTranslation);

    // انتظر ظهور النافذة وحساب أبعادها الفعلية
    requestAnimationFrame(positionWordTranslation);
}

function positionWordTranslation() {
    if (
        wordTranslation.hidden ||
        !selectedWordButton ||
        !selectedWordButton.isConnected
    ) {
        return;
    }

    const wordRect = selectedWordButton.getBoundingClientRect();
    const popupRect = wordTranslation.getBoundingClientRect();

    const margin = 12;
    const gap = 8;

    const popupWidth = Math.min(
        230,
        window.innerWidth - margin * 2
    );

    wordTranslation.style.width = `${popupWidth}px`;
    wordTranslation.style.maxWidth =
        `calc(100vw - ${margin * 2}px)`;

    // أعد حساب الارتفاع بعد ضبط العرض
    const popupHeight = wordTranslation.offsetHeight;
    const availableAbove = wordRect.top - margin;
    const availableBelow =
        window.innerHeight - wordRect.bottom - margin;

    let top;

    if (
        availableAbove >= popupHeight + gap ||
        availableAbove >= availableBelow
    ) {
        top = wordRect.top - popupHeight - gap;
    } else {
        top = wordRect.bottom + gap;
    }

    // منع خروج النافذة من الشاشة
    top = Math.max(
        margin,
        Math.min(top, window.innerHeight - popupHeight - margin)
    );

    let left = wordRect.left +
        wordRect.width / 2 -
        popupWidth / 2;

    left = Math.max(
        margin,
        Math.min(left, window.innerWidth - popupWidth - margin)
    );

    wordTranslation.style.position = "fixed";
    wordTranslation.style.left = `${left}px`;
    wordTranslation.style.top = `${top}px`;
    wordTranslation.style.right = "auto";
    wordTranslation.style.bottom = "auto";
    wordTranslation.style.margin = "0";
    wordTranslation.style.transform = "none";
    wordTranslation.style.zIndex = "9999";
}



const wordSpeakerButton = document.getElementById("wordSpeakerBtn");
const wordSpeechMessage = document.getElementById("wordSpeechMessage");

function isIOSDevice() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" &&
         navigator.maxTouchPoints > 1);
}

function addWordSpeaker() {
    if (!wordSpeakerButton || !wordSpeechMessage) return;

    wordSpeakerButton.onclick = speakSelectedWord;

    if (window.lucide) {
        window.lucide.createIcons();
    }
}

async function speakSelectedWord() {
    if (!selectedWordButton) return;

    if (
        !("speechSynthesis" in window) ||
        !("SpeechSynthesisUtterance" in window)
    ) {
        wordSpeechMessage.textContent =
            "النطق غير مدعوم في هذا المتصفح.";
        wordSpeechMessage.hidden = false;
        return;
    }

    const word = selectedWordButton.textContent;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    utterance.pitch = 1;

    let voices = window.speechSynthesis.getVoices();

    if (!voices.length) {
        await new Promise(resolve => {
            const timeout = setTimeout(resolve, 1000);

            window.speechSynthesis.addEventListener(
                "voiceschanged",
                () => {
                    clearTimeout(timeout);
                    resolve();
                },
                { once: true }
            );
        });

        voices = window.speechSynthesis.getVoices();
    }

    if (isIOSDevice()) {
        const samantha = voices.find(voice =>
            voice.name.toLowerCase().includes("samantha") &&
            voice.lang.toLowerCase().startsWith("en")
        );

        if (!samantha) {
            wordSpeechMessage.textContent =
                "صوت Samantha غير متاح حاليًا. تحقق من أصوات الإنجليزية في إعدادات النطق بجهازك.";
            wordSpeechMessage.hidden = false;
            return;
        }

        utterance.voice = samantha;
    } else {
        const englishVoice = voices.find(voice =>
            voice.lang.toLowerCase().startsWith("en-us")
        ) || voices.find(voice =>
            voice.lang.toLowerCase().startsWith("en")
        );

        if (englishVoice) {
            utterance.voice = englishVoice;
        }
    }

    wordSpeechMessage.hidden = true;
    window.speechSynthesis.speak(utterance);
}


closeTranslation.addEventListener("click", () => {
    wordTranslation.hidden = true;

    if (selectedWordButton) {
        selectedWordButton.classList.remove("selected");
        selectedWordButton = null;
    }

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }
});

window.addEventListener("scroll", positionWordTranslation, true);
window.addEventListener("resize", positionWordTranslation);


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


function updatePlayPauseIcon(isPlaying) {
    playPauseBtn.innerHTML = isPlaying
        ? '<i data-lucide="pause"></i>'
        : '<i data-lucide="play"></i>';

    if (window.lucide) {
        window.lucide.createIcons();
    }
}


function loadStoryAudio() {
    stopAudio();

    storyAudio.removeAttribute("src");

    storyAudio.src = currentStory.audio;
    storyAudio.load();

    audioProgress.value = 0;
    currentTimeDisplay.textContent = "00:00";
    durationDisplay.textContent = "00:00";

    updatePlayPauseIcon(false);

    audioMessage.textContent = "";

    // Reset subtitle highlighting
    activeCueIndex = -1;

    storyText.querySelectorAll(".story-paragraph.is-speaking")
        .forEach(element => element.classList.remove("is-speaking"));
}


async function playAudio() {
    if (!currentStory) return;

    if (!storyAudio.getAttribute("src")) {
        loadStoryAudio();
    }

    try {
        await storyAudio.play();
        updatePlayPauseIcon(true);
    } catch (error) {
        audioMessage.textContent =
            "تعذّر تشغيل الصوت. تأكد من إضافة ملف audio.mp3 إلى مجلد القصة.";
    }
}


function pauseAudio() {
    storyAudio.pause();
    updatePlayPauseIcon(false);
}


function stopAudio() {
    if (!storyAudio) return;

    storyAudio.pause();

    try {
        storyAudio.currentTime = 0;
    } catch (error) {
        // لا حاجة إلى إجراء إضافي.
    }

    updatePlayPauseIcon(false);
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
        storyAudio.currentTime = Math.min(
            storyAudio.duration,
            storyAudio.currentTime + 5
        );
    }
});

forwardBtn.addEventListener("click", () => {
    if (Number.isFinite(storyAudio.duration)) {
        storyAudio.currentTime = Math.max(
            0,
            storyAudio.currentTime - 5
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
    updatePlayPauseIcon(true);
});


storyAudio.addEventListener("pause", () => {
    updatePlayPauseIcon(false);
});


storyAudio.addEventListener("ended", () => {
    updatePlayPauseIcon(false);
    showCompletion();
});


storyAudio.addEventListener("error", () => {
    audioMessage.textContent =
        "لم يتم العثور على ملف الصوت. أضف تسجيل Narakeet إلى مجلد القصة وتأكد من صحة المسار.";
});


/* تشغيل وإخفاء الصوت أثناء القراءة */

playReadingAudio.addEventListener("click", () => {
    if (!currentStory) return;

    const isHidden = audioSection.hidden;

    if (isHidden) {
        audioSection.hidden = false;
        playReadingAudio.textContent = "إخفاء الاستماع";

        if (!storyAudio.getAttribute("src")) {
            loadStoryAudio();
        }
    } else {
        stopAudio();
        audioSection.hidden = true;
        playReadingAudio.textContent = "▶ استمع أثناء القراءة";
    }
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
    const questions = currentStoryContent.questions;

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

    const question = currentStoryContent.questions[currentQuestionIndex];
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
        currentQuestionIndex === currentStoryContent.questions.length - 1
            ? "عرض النتيجة"
            : "السؤال التالي";

    nextQuestionBtn.hidden = false;
}


nextQuestionBtn.addEventListener("click", () => {
    if (!questionAnswered) return;

    currentQuestionIndex++;

    if (currentQuestionIndex < currentStoryContent.questions.length) {
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

    const total = currentStoryContent.questions.length;
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
    currentStoryContent = null;
    currentLevel = null;

    wordTranslation.hidden = true;

if (selectedWordButton) {
    selectedWordButton.classList.remove("selected");
    selectedWordButton = null;
}

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

if (window.lucide) {
    window.lucide.createIcons();
}