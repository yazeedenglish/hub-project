/* =========================================================
   YAZEED ENGLISH — STORIES
   Add stories to the array below. Keep each story's files in
   data/, subtitles/, audio/, and optionally images/.
========================================================= */

const stories = [
  {
    id: "the-race",
    title: "The Race",
    arabicTitle: "السباق",
    description: "A short story about friendship, effort, and learning that doing your best matters most.",
    level: "A1",
    duration: "3 دقائق",
    coverEmoji: "🏃",
    image: "https://file.yazeedenglish.com/Stories-images/a783be86-03ed-4043-ab05-b401cab561c2.jfif", // Optional cover image URL. Leave empty to use the emoji.
    dataFile: "data/the-race.json",
    subtitles: "data/the-race-timestamps.json",
    audio: "https://easyenglish.com/wp-content/uploads/2026/10/The-Winner___ElevenLabs_2026-10-14T15_21_12_Harry-Articulate-British-Storyteller_pvc_sp100_s50_sb75_v4.mp3"
  }

];

const $ = (selector, root = document) => root.querySelector(selector);
const storiesGrid = $("#storiesGrid");
const emptyState = $("#emptyState");
const readerSection = $("#readerSection");
const storyContent = $("#storyContent");
const storyAudio = $("#storyAudio");
const audioPlayer = $("#audioPlayer");
const listenToggle = $("#listenToggle");
const themeToggle = $("#themeToggle");
const wordPopover = $("#wordPopover");

let activeStory = null;
let activeStoryData = null;
let wordTranslations = {};
let subtitleCues = [];
let selectedWord = "";
let subtitlesLoaded = false;
let playerWasHidden = false;
let lastClickedWord = null;

const levelLabels = { A1: "مبتدئ", A2: "مبتدئ متقدم", B1: "متوسط", B2: "فوق المتوسط" };


/* ============================================================
   THEME — LUCIDE ICONS
============================================================ */

const YAZEED_ENGLISH_THEME =
  "yazeed_english_theme";


function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}


// ============================================================
// LOAD THEME
// ============================================================

function loadTheme() {
  try {
    const savedTheme =
      localStorage.getItem(YAZEED_ENGLISH_THEME);

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    } else if (savedTheme === "light") {
      document.body.classList.remove("dark");
    }
  } catch (_) {}

  updateThemeButton();
}


// ============================================================
// UPDATE THEME BUTTON
// ============================================================

function updateThemeButton() {
  if (!themeToggle) return;

  const isDark =
    document.body.classList.contains("dark");

  themeToggle.innerHTML = isDark
    ? '<i data-lucide="sun"></i>'
    : '<i data-lucide="moon"></i>';

  themeToggle.setAttribute(
    "aria-label",
    isDark
      ? "تفعيل الوضع الفاتح"
      : "تفعيل الوضع الداكن"
  );

  themeToggle.setAttribute(
    "title",
    isDark
      ? "تفعيل الوضع الفاتح"
      : "تفعيل الوضع الداكن"
  );

  renderIcons();
}


// ============================================================
// THEME TOGGLE
// ============================================================

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark =
      document.body.classList.contains("dark");

    const newTheme =
      isDark ? "light" : "dark";

    document.body.classList.toggle(
      "dark",
      newTheme === "dark"
    );

    try {
      localStorage.setItem(
        YAZEED_ENGLISH_THEME,
        newTheme
      );
    } catch (_) {}

    updateThemeButton();
  });
}


function renderStories() {
  storiesGrid.innerHTML = "";
  emptyState.hidden = stories.length > 0;

  stories.forEach((story, index) => {
    const card = document.createElement("article");
    card.className = "story-card";
    card.style.setProperty("--card-delay", `${Math.min(index * 90, 450)}ms`);

    const cover = document.createElement("div");
    cover.className = "story-cover";
    if (story.image) {
      cover.classList.add("has-image");
      const image = document.createElement("img");
      image.src = story.image;
      image.alt = `غلاف قصة ${story.title}`;
      image.loading = "lazy";
      image.addEventListener("error", () => {
        image.remove();
        cover.classList.remove("has-image");
      });
      cover.appendChild(image);
    }

    const emoji = document.createElement("span");
    emoji.className = "cover-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = story.coverEmoji || "📖";
    cover.appendChild(emoji);

    const level = document.createElement("span");
    level.className = `cover-level level-${story.level}`;
    level.textContent = story.level;
    level.title = levelLabels[story.level] || story.level;
    cover.appendChild(level);

    const body = document.createElement("div");
    body.className = "story-card-body";

    const title = document.createElement("h3");
    title.className = "story-title";
    title.lang = "en";
    title.dir = "ltr";
    title.textContent = story.title;

    const arabicTitle = document.createElement("p");
    arabicTitle.className = "story-arabic-title";
    arabicTitle.textContent = story.arabicTitle || "";

    const description = document.createElement("p");
    description.className = "story-description";
    description.textContent = story.description || "";

    const footer = document.createElement("div");
    footer.className = "story-card-footer";

    const duration = document.createElement("span");
    duration.className = "story-duration";
    duration.innerHTML = '<i data-lucide="clock-3"></i>';
    const durationText = document.createElement("span");
    durationText.textContent = story.duration || "—";
    duration.appendChild(durationText);

    const startButton = document.createElement("button");
    startButton.type = "button";
    startButton.className = "start-reading";
    startButton.innerHTML = 'ابدأ القراءة <i data-lucide="arrow-up-left"></i>';
    startButton.addEventListener("click", () => openStory(story));

    footer.append(duration, startButton);
    body.append(title, arabicTitle, description, footer);
    card.append(cover, body);
    storiesGrid.appendChild(card);
  });

  renderIcons();
}

async function openStory(story) {
  closeWordPopover();
  stopSpeech();
  activeStory = story;
  activeStoryData = null;
  wordTranslations = {};
  subtitleCues = [];
  subtitlesLoaded = false;

  readerSection.hidden = false;
  $("#readerTitle").textContent = story.title;
  $("#readerArabicTitle").textContent = story.arabicTitle || "";
  $("#readerLevel").textContent = story.level;
  $("#readerLevel").className = `reader-level level-${story.level}`;
  $("#readerDuration").textContent = story.duration || "";
  $("#playerStoryTitle").textContent = story.title;
  storyContent.innerHTML = '<p class="story-paragraph">جارٍ تحميل القصة…</p>';
  listenToggle.setAttribute("aria-pressed", "false");
  listenToggle.innerHTML = '<i data-lucide="headphones"></i><span>استمع أثناء القراءة</span>';
  audioPlayer.hidden = true;
  playerWasHidden = false;
  storyAudio.pause();
  storyAudio.removeAttribute("src");
  storyAudio.load();
  $("#audioProgress").value = 0;
  $("#currentTime").textContent = "0:00";
  $("#totalTime").textContent = "0:00";

  readerSection.scrollIntoView({ behavior: "smooth", block: "start" });
  renderIcons();

  try {
    const response = await fetch(story.dataFile);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    activeStoryData = data;
    wordTranslations = data.translations || {};
    renderStoryText(data.paragraphs || []);
  } catch (error) {
    storyContent.innerHTML = '<p class="story-paragraph">تعذّر تحميل بيانات القصة. تأكد من وجود ملف JSON في المسار المحدد، وشغّل الموقع عبر خادم محلي أو الاستضافة بدل فتح الملف مباشرة.</p>';
    console.error("Story data could not be loaded:", error);
  }
}

function renderStoryText(paragraphs) {
  storyContent.innerHTML = "";
  paragraphs.forEach((paragraph, paragraphIndex) => {
    const p = document.createElement("p");
    p.className = "story-paragraph";
    p.dataset.paragraphIndex = String(paragraphIndex);

    const tokens = String(paragraph.text || "").match(/\s+|[^\s]+/g) || [];
    tokens.forEach(token => {
      if (/^\s+$/.test(token)) {
        p.appendChild(document.createTextNode(token));
        return;
      }

      const word = document.createElement("button");
      word.type = "button";
      word.className = "story-word";
      word.textContent = token;
      word.dataset.word = token.replace(/^[^A-Za-z'-]+|[^A-Za-z'-]+$/g, "");
      word.setAttribute("aria-label", `ترجمة ونطق ${word.dataset.word || token}`);
      word.addEventListener("click", event => showWordPopover(word, event));
      p.appendChild(word);
    });

    storyContent.appendChild(p);
  });
}

function normalizeWord(word) {
  return String(word || "").toLowerCase().replace(/^[^a-z'-]+|[^a-z'-]+$/gi, "");
}

function findTranslation(word) {
  const clean = normalizeWord(word);
  if (!clean) return "لا تتوفر ترجمة لهذه الكلمة.";
  const direct = wordTranslations[clean] ?? wordTranslations[word] ?? wordTranslations[clean.replace(/'s$/, "")];
  if (typeof direct === "string") return direct;
  if (direct && typeof direct === "object") return direct.ar || direct.translation || "لا تتوفر ترجمة لهذه الكلمة.";
  return "لم تُضف ترجمة هذه الكلمة بعد.";
}

function showWordPopover(wordElement, event) {
  const word = wordElement.dataset.word || wordElement.textContent;
  if (!normalizeWord(word)) return;
  selectedWord = word;
  lastClickedWord = wordElement;
  $("#popoverWord").textContent = word;
  $("#popoverTranslation").textContent = findTranslation(word);
  wordPopover.hidden = false;

  const rect = wordElement.getBoundingClientRect();
  const popWidth = Math.min(260, window.innerWidth - 28);
  let left = rect.left + rect.width / 2 - popWidth / 2;
  left = Math.max(14, Math.min(left, window.innerWidth - popWidth - 14));

  // Place above the clicked word when possible; otherwise place below it.
  const estimatedHeight = 185;
  let top = rect.top - estimatedHeight - 10;
  if (top < 10) top = Math.min(window.innerHeight - estimatedHeight - 10, rect.bottom + 10);
  wordPopover.style.left = `${left}px`;
  wordPopover.style.top = `${Math.max(10, top)}px`;
  renderIcons();
}

function closeWordPopover() {
  wordPopover.hidden = true;
  lastClickedWord = null;
}

$("#closeWordPopover").addEventListener("click", closeWordPopover);
document.addEventListener("click", event => {
  if (!wordPopover.hidden && !wordPopover.contains(event.target) &&
      !event.target.closest(".story-word")) closeWordPopover();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeWordPopover();
});
window.addEventListener("resize", closeWordPopover);

function chooseEnglishVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  const preferredNames = isIOS
    ? ["Samantha"]
    : ["Google UK English Male", "Google UK English"];
  for (const name of preferredNames) {
    const found = voices.find(voice => voice.name.toLowerCase().includes(name.toLowerCase()));
    if (found) return found;
  }

  return voices.find(voice => /^en-GB$/i.test(voice.lang)) ||
    voices.find(voice => /^en-US$/i.test(voice.lang)) ||
    voices.find(voice => /^en/i.test(voice.lang)) || null;
}

function speakWord(word) {
  if (!("speechSynthesis" in window)) {
    alert("ميزة النطق غير مدعومة في هذا المتصفح.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-GB";
  const voice = chooseEnglishVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || "en-GB";
  }
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

$("#wordSpeakBtn").addEventListener("click", () => speakWord(selectedWord));

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) seconds = 0;
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

async function loadSubtitles(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Timestamps JSON must contain an array.");
    }

    subtitleCues = data
      .map(item => ({
        text: String(item.text || ""),
        start: Number(item.timestamp?.[0]),
        end: Number(item.timestamp?.[1]),
        wordElement: null
      }))
      .filter(item =>
        item.text.trim() &&
        Number.isFinite(item.start) &&
        Number.isFinite(item.end) &&
        item.end > item.start
      )
      .sort((a, b) => a.start - b.start);

    mapTimestampWords();
  } catch (error) {
    subtitleCues = [];
    console.warn("Word timestamps could not be loaded:", error);
  }

  subtitlesLoaded = true;
}

function parseVTT(vttText) {
  const blocks = vttText.replace(/\r/g, "").split(/\n\s*\n/);
  const cues = [];
  for (const block of blocks) {
    const lines = block.split("\n").map(line => line.trim()).filter(Boolean);
    const timeIndex = lines.findIndex(line => line.includes("-->"));
    if (timeIndex < 0) continue;
    const times = lines[timeIndex].split("-->");
    const start = parseVTTTime(times[0].trim());
    const end = parseVTTTime(times[1].trim().split(/\s+/)[0]);
    const text = lines.slice(timeIndex + 1).join(" ").replace(/<[^>]*>/g, "").trim();
    if (Number.isFinite(start) && Number.isFinite(end) && text) cues.push({ start, end, text });
  }
  return cues.sort((a, b) => a.start - b.start);
}

function parseVTTTime(value) {
  const parts = value.replace(",", ".").split(":");
  let seconds = 0;
  if (parts.length === 3) seconds = Number(parts[0]) * 3600 + Number(parts[1]) * 60 + Number(parts[2]);
  else if (parts.length === 2) seconds = Number(parts[0]) * 60 + Number(parts[1]);
  else return NaN;
  return seconds;
}

function normalizeForCompare(text) {
  return String(text || "").toLowerCase().replace(/[^a-z0-9'\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function mapTimestampWords() {
  const allWords = [
    ...storyContent.querySelectorAll(".story-word")
  ];

  let searchFrom = 0;

  subtitleCues.forEach(cue => {
    const target = normalizeForCompare(cue.text);

    if (!target) return;

    for (let i = searchFrom; i < allWords.length; i++) {
      const current = normalizeForCompare(
        allWords[i].dataset.word || allWords[i].textContent
      );

      if (current === target) {
        cue.wordElement = allWords[i];
        searchFrom = i + 1;
        break;
      }
    }
  });
}

function updateTimedHighlight() {
  const time = storyAudio.currentTime;

  storyContent
    .querySelectorAll(".story-word.timestamp-active")
    .forEach(word => {
      word.classList.remove("timestamp-active");
    });

  const cue = subtitleCues.find(
    item => time >= item.start && time < item.end
  );

  if (cue?.wordElement) {
    cue.wordElement.classList.add("timestamp-active");
  }
}

async function enableListening() {
  if (!activeStory) return;
  listenToggle.setAttribute("aria-pressed", "true");
  listenToggle.innerHTML = '<i data-lucide="headphones"></i><span>إخفاء الاستماع</span>';
  audioPlayer.hidden = false;
  playerWasHidden = false;

  if (storyAudio.getAttribute("src") !== activeStory.audio) {
    storyAudio.src = activeStory.audio;
    storyAudio.load();
  }
  if (!subtitlesLoaded) await loadSubtitles(activeStory.subtitles);

  renderIcons();
  // Play only after an explicit user click. Browser policy may still block playback
  // if the audio file is missing or the browser requires another interaction.
  try {
    await storyAudio.play();
    updatePlayButton();
  } catch (error) {
    updatePlayButton();
    console.warn("Audio playback did not start. Check the audio URL/file.", error);
  }
}

function disableListening() {
  listenToggle.setAttribute("aria-pressed", "false");
  listenToggle.innerHTML = '<i data-lucide="headphones"></i><span>استمع أثناء القراءة</span>';
  audioPlayer.hidden = true;
  playerWasHidden = true;
  storyAudio.pause();
  updatePlayButton();
  renderIcons();
}

listenToggle.addEventListener("click", () => {
  if (listenToggle.getAttribute("aria-pressed") === "true") disableListening();
  else enableListening();
});

$("#hidePlayerBtn").addEventListener("click", () => {
  audioPlayer.hidden = true;
  playerWasHidden = true;
  listenToggle.setAttribute("aria-pressed", "false");
  listenToggle.innerHTML = '<i data-lucide="headphones"></i><span>استمع أثناء القراءة</span>';
  renderIcons();
});

$("#closeReader").addEventListener("click", () => {
  storyAudio.pause();
  stopSpeech();
  closeWordPopover();
  readerSection.hidden = true;
  audioPlayer.hidden = true;
  listenToggle.setAttribute("aria-pressed", "false");
  listenToggle.innerHTML = '<i data-lucide="headphones"></i><span>استمع أثناء القراءة</span>';
  document.querySelectorAll(".timestamp-active").forEach(node => node.classList.remove("timestamp-active"));
  $("#storiesHeading").scrollIntoView({ behavior: "smooth", block: "center" });
  renderIcons();
});

function updatePlayButton() {
  const playing = !storyAudio.paused && !storyAudio.ended;
  $("#playPauseBtn").innerHTML = playing ? '<i data-lucide="pause"></i>' : '<i data-lucide="play"></i>';
  $("#playPauseBtn").setAttribute("aria-label", playing ? "إيقاف مؤقت" : "تشغيل");
  renderIcons();
}

$("#playPauseBtn").addEventListener("click", async () => {
  if (!storyAudio.getAttribute("src") && activeStory) storyAudio.src = activeStory.audio;
  if (storyAudio.paused) {
    try { await storyAudio.play(); } catch (error) { console.warn("Could not play audio:", error); }
  } else {
    storyAudio.pause();
  }
  updatePlayButton();
});

$("#rewindBtn").addEventListener("click", () => { storyAudio.currentTime = Math.max(0, storyAudio.currentTime - 10); });
$("#forwardBtn").addEventListener("click", () => {
  const end = Number.isFinite(storyAudio.duration) ? storyAudio.duration : storyAudio.currentTime + 10;
  storyAudio.currentTime = Math.min(end, storyAudio.currentTime + 10);
});
$("#speedSelect").addEventListener("change", event => { storyAudio.playbackRate = Number(event.target.value) || 1; });
$("#audioProgress").addEventListener("input", event => {
  if (Number.isFinite(storyAudio.duration) && storyAudio.duration > 0) {
    storyAudio.currentTime = (Number(event.target.value) / 100) * storyAudio.duration;
  }
});

storyAudio.addEventListener("loadedmetadata", () => {
  $("#totalTime").textContent = formatTime(storyAudio.duration);
});
storyAudio.addEventListener("timeupdate", () => {
  const duration = storyAudio.duration;
  $("#currentTime").textContent = formatTime(storyAudio.currentTime);
  if (Number.isFinite(duration) && duration > 0) $("#audioProgress").value = String(storyAudio.currentTime / duration * 100);
  updateTimedHighlight();
});
storyAudio.addEventListener("play", updatePlayButton);
storyAudio.addEventListener("pause", updatePlayButton);
storyAudio.addEventListener("ended", updatePlayButton);
storyAudio.addEventListener("error", () => {
  console.warn("The story audio could not be loaded. Check the file path:", activeStory?.audio);
});

if ("speechSynthesis" in window) window.speechSynthesis.onvoiceschanged = () => {};

loadTheme();
renderStories();
