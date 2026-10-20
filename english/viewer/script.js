/* =========================================================
   YAZEED ENGLISH — القارئ التفاعلي
   PDF.js 4.10.38
========================================================= */

import * as pdfjsLib from
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs";

pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";

const PDF_FILE = "https://file.yazeedenglish.com/en/ebook.pdf";

/* =========================================================
   DOM ELEMENTS
========================================================= */

const readerApp             = document.getElementById("readerApp");
const viewerContainer       = document.getElementById("viewerContainer");
const pdfViewer             = document.getElementById("pdfViewer");
const pageInput             = document.getElementById("pageInput");
const totalPagesElement     = document.getElementById("totalPages");
const previousPageButton    = document.getElementById("previousPage");
const nextPageButton        = document.getElementById("nextPage");
const zoomOutButton         = document.getElementById("zoomOut");
const zoomInButton          = document.getElementById("zoomIn");
const zoomLevelElement      = document.getElementById("zoomLevel");
const statusMessage         = document.getElementById("statusMessage");
const pronunciationStatus   = document.getElementById("pronunciationStatus");
const voiceSelect           = document.getElementById("voiceSelect");
const testVoiceButton       = document.getElementById("testVoiceButton");
const speedRange            = document.getElementById("speedRange");
const speedValue            = document.getElementById("speedValue");
const handTool              = document.getElementById("handTool");
const penTool               = document.getElementById("penTool");
const eraserTool            = document.getElementById("eraserTool");
const pronunciationModal    = document.getElementById("pronunciationModal");
const understoodButton      = document.getElementById("understoodButton");
const contentLoadingOverlay = document.getElementById("contentLoadingOverlay");
const colorDrawer           = document.getElementById("colorDrawer");

/* =========================================================
   STATE
========================================================= */

let pdfDocument = null;
let currentPage = 1;
let scale = 1;
let manuallyZoomed = false;
let voices = [];
let selectedVoice = null;
let speechRate = 0.85;
let activeMode = "hand";
let renderGeneration = 0;
let activeUtterance = null;
let activeDrawing = null;
let annotationStore = {};
let annotationStorageKey = "";
let currentSpeechSentence = [];
let currentDrawColor = "#C94C4C";

/* =========================================================
   AUTOMATIC PDF FIT
========================================================= */

async function calculateFitScale() {
    if (!pdfDocument || !viewerContainer) return 1;

    const page = await pdfDocument.getPage(1);
    const originalViewport = page.getViewport({ scale: 1 });

    // Available width inside the PDF viewing area
    const availableWidth = Math.max(
        200,
        viewerContainer.clientWidth - 24
    );

    // Fit the PDF to the available width
    return Math.max(
        0.25,
        Math.min(1.5, availableWidth / originalViewport.width)
    );
}


/* =========================================================
   OPEN PDF
========================================================= */

async function openPDF(pdfPath) {
    showContentLoading();

    try {
        statusMessage.textContent = "";
        stopSpeech();
        loadAnnotations(pdfPath);

        const response = await fetch(pdfPath, { cache: "no-store" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);

        const loadingTask = pdfjsLib.getDocument({ data });
        pdfDocument = await loadingTask.promise;

       currentPage = 1;
    manuallyZoomed = false;
    scale = await calculateFitScale();

    pageInput.value = "1";
    totalPagesElement.textContent = String(pdfDocument.numPages);
    zoomLevelElement.textContent = `${Math.round(scale * 100)}%`;

        updateNavigation();
        await renderPage(currentPage);

        statusMessage.textContent = "";
        hideContentLoading();
        maybeShowPronunciationNotice();

    } catch (error) {
        console.error("PDF loading error:", error);
        statusMessage.textContent = "تعذر تحميل الملف";
        hideContentLoading();
        pdfViewer.innerHTML = `
            <div class="pdf-error">
                تعذر فتح ملف PDF.
            </div>`;
    }
}

/* =========================================================
   LOADING OVERLAY
========================================================= */

function showContentLoading() {
    if (!contentLoadingOverlay) return;
    contentLoadingOverlay.hidden = false;
    contentLoadingOverlay.classList.add("show");
}

function hideContentLoading() {
    if (!contentLoadingOverlay) return;
    contentLoadingOverlay.hidden = true;
    contentLoadingOverlay.classList.remove("show");
}

/* =========================================================
   RENDER PAGE
========================================================= */

async function renderPage(pageNumber) {
    if (!pdfDocument) return;

    const target = Math.max(1, Math.min(Number(pageNumber) || 1, pdfDocument.numPages));
    const generation = ++renderGeneration;

    try {
        const page = await pdfDocument.getPage(target);
        if (generation !== renderGeneration) return;

        const viewport = page.getViewport({ scale });
        const outputScale = window.devicePixelRatio || 1;

        pdfViewer.innerHTML = "";

        const pageContainer = document.createElement("div");
        pageContainer.className = "pdf-page";
        pageContainer.dataset.pageNumber = String(target);
        pageContainer.style.width = `${viewport.width}px`;
        pageContainer.style.height = `${viewport.height}px`;
        pageContainer.setAttribute("aria-label", `صفحة ${target}`);

        /* CANVAS */
        const canvas = document.createElement("canvas");
        canvas.className = "pdf-canvas";
        const context = canvas.getContext("2d", { alpha: false });
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        await page.render({
            canvasContext: context,
            viewport: page.getViewport({ scale: scale * outputScale })
        }).promise;

        if (generation !== renderGeneration) return;

        /* TEXT LAYER */
        const textLayerDiv = document.createElement("div");
        textLayerDiv.className = "textLayer";
        const textContent = await page.getTextContent();

        if (typeof pdfjsLib.TextLayer !== "function") {
            throw new Error("PDF.js TextLayer غير متوفر.");
        }

        const textLayer = new pdfjsLib.TextLayer({
            textContentSource: textContent,
            container: textLayerDiv,
            viewport
        });
        await textLayer.render();

        if (generation !== renderGeneration) return;

        /* ANNOTATION CANVAS */
        const annotationCanvas = document.createElement("canvas");
        annotationCanvas.className = "annotation-canvas";
        annotationCanvas.width = Math.floor(viewport.width * outputScale);
        annotationCanvas.height = Math.floor(viewport.height * outputScale);
        annotationCanvas.style.width = `${viewport.width}px`;
        annotationCanvas.style.height = `${viewport.height}px`;
        annotationCanvas.dataset.pageNumber = String(target);

        /* LINK LAYER */
        const linkLayer = document.createElement("div");
        linkLayer.className = "pdf-link-layer";
        linkLayer.style.width = `${viewport.width}px`;
        linkLayer.style.height = `${viewport.height}px`;
        await renderPDFLinks(page, linkLayer, viewport);

        pageContainer.appendChild(canvas);
        pageContainer.appendChild(textLayerDiv);
        pageContainer.appendChild(linkLayer);
        pageContainer.appendChild(annotationCanvas);
        pdfViewer.appendChild(pageContainer);

        setupTextInteraction(textLayerDiv, pageContainer, target);
        setupAnnotationCanvas(annotationCanvas, pageContainer, target);
        redrawAnnotations(pageContainer, target);
        applyModeToPage(pageContainer);

        currentPage = target;
        pageInput.value = String(target);
        totalPagesElement.textContent = String(pdfDocument.numPages);
        zoomLevelElement.textContent = `${Math.round(scale * 100)}%`;

        updateNavigation();

    } catch (error) {
        console.error(`تعذر رسم الصفحة ${target}:`, error);
        if (generation !== renderGeneration) return;
        pdfViewer.innerHTML = `<div class="page-error">تعذر رسم الصفحة ${target}</div>`;
    }
}

/* =========================================================
   PDF LINKS
========================================================= */

async function renderPDFLinks(page, linkLayer, viewport) {
    try {
        const annotations = await page.getAnnotations({ intent: "display" });

        annotations.forEach(annotation => {
            if (annotation.subtype !== "Link") return;
            if (!annotation.rect) return;

            const rect = viewport.convertToViewportRectangle(annotation.rect);
            const left = Math.min(rect[0], rect[2]);
            const top = Math.min(rect[1], rect[3]);
            const width = Math.abs(rect[2] - rect[0]);
            const height = Math.abs(rect[3] - rect[1]);

            const link = document.createElement("a");
            link.className = "pdf-link";
            link.style.position = "absolute";
            link.style.left = `${left}px`;
            link.style.top = `${top}px`;
            link.style.width = `${width}px`;
            link.style.height = `${height}px`;
            link.style.cursor = "pointer";

            if (annotation.url) {
                link.href = annotation.url;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
            } else if (annotation.dest) {
                link.href = "#";
                link.addEventListener("click", async event => {
                    event.preventDefault();
                    event.stopPropagation();
                    await navigateToPDFDestination(annotation.dest);
                });
            }

            linkLayer.appendChild(link);
        });
    } catch (error) {
        console.error("PDF link layer error:", error);
    }
}

async function navigateToPDFDestination(destination) {
    try {
        let resolved = destination;
        if (typeof destination === "string") {
            resolved = await pdfDocument.getDestination(destination);
        }
        if (!Array.isArray(resolved)) return;

        const pageRef = resolved[0];
        const pageIndex = await pdfDocument.getPageIndex(pageRef);
        const targetPage = pageIndex + 1;

        if (targetPage < 1 || targetPage > pdfDocument.numPages) return;
        await goToPage(targetPage);
    } catch (error) {
        console.error("تعذر الانتقال إلى رابط PDF الداخلي:", error);
    }
}

/* =========================================================
   NAVIGATION
========================================================= */

function updateNavigation() {
    if (!pdfDocument) {
        previousPageButton.disabled = true;
        nextPageButton.disabled = true;
        return;
    }
    previousPageButton.disabled = currentPage <= 1;
    nextPageButton.disabled = currentPage >= pdfDocument.numPages;
}

async function goToPage(pageNumber) {
    if (!pdfDocument) return;

    const target = Math.max(1, Math.min(Number(pageNumber) || 1, pdfDocument.numPages));

    stopSpeech();
    pageInput.value = String(target);
    currentPage = target;
    updateNavigation();
    viewerContainer.scrollTop = 0;

    await renderPage(target);

    requestAnimationFrame(() => { viewerContainer.scrollTop = 0; });
}

function navigateFromPageInput() {
    if (!pdfDocument) return;

    let requested = parseInt(pageInput.value, 10);
    if (Number.isNaN(requested)) {
        pageInput.value = String(currentPage);
        return;
    }
    requested = Math.max(1, Math.min(requested, pdfDocument.numPages));
    pageInput.value = String(requested);
    goToPage(requested);
}

pageInput.addEventListener("change", navigateFromPageInput);
pageInput.addEventListener("blur", navigateFromPageInput);
pageInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault();
        navigateFromPageInput();
        pageInput.blur();
    }
});

previousPageButton.addEventListener("click", () => {
    if (currentPage > 1) goToPage(currentPage - 1);
});

nextPageButton.addEventListener("click", () => {
    if (pdfDocument && currentPage < pdfDocument.numPages) {
        goToPage(currentPage + 1);
    }
});

/* =========================================================
   ZOOM
========================================================= */

async function rebuildAtCurrentZoom() {
    await renderPage(currentPage);
    zoomLevelElement.textContent = `${Math.round(scale * 100)}%`;
}

zoomInButton.addEventListener("click", async () => {
    if (!pdfDocument) return;

    manuallyZoomed = true;
    scale = Math.min(3, Number((scale + 0.1).toFixed(2)));

    await rebuildAtCurrentZoom();
});

zoomOutButton.addEventListener("click", async () => {
    if (!pdfDocument) return;

    manuallyZoomed = true;
    scale = Math.max(0.25, Number((scale - 0.1).toFixed(2)));

    await rebuildAtCurrentZoom();
});

/* =========================================================
   TEXT HELPERS
========================================================= */

function normalizeText(text) {
    return String(text || "").replace(/\s+/g, " ").trim();
}

function containsEnglish(text) {
    return /[A-Za-z]/.test(text);
}

function setupTextInteraction(textLayer, pageContainer, pageNumber) {
    const spans = Array.from(textLayer.querySelectorAll("span"));

    spans.forEach(span => {
        const text = normalizeText(span.textContent);
        if (!text) return;
        if (!containsEnglish(text)) return;

        span.classList.add("clickable-text");
        span.dataset.speechText = text;
        span.title = "اضغط لسماع النطق";

        span.addEventListener("click", event => {
            event.preventDefault();
            event.stopPropagation();
            if (activeMode !== "hand") return;
            handlePronunciation(pageContainer, span, pageNumber);
        });
    });
}

/* =========================================================
   PRONUNCIATION
========================================================= */

function handlePronunciation(pageContainer, span, pageNumber) {
    clearTemporarySpeechHighlight();
    if (!span) return;

    span.classList.add("speech-highlight");
    currentSpeechSentence = [span];

    const text = normalizeText(span.textContent);
    if (!text) {
        clearTemporarySpeechHighlight();
        return;
    }
    speak(text, clearTemporarySpeechHighlight, pageNumber);
}

function clearTemporarySpeechHighlight() {
    currentSpeechSentence.forEach(span => span.classList.remove("speech-highlight"));
    currentSpeechSentence = [];
}

/* =========================================================
   VOICE PICKER
   Priority: Google UK English Male → Google UK English Female
             → any Google en-GB → Samantha → any en-GB → any en
========================================================= */

function pickPreferredVoice(availableVoices) {
    if (!availableVoices || !availableVoices.length) return null;

    const name = v => (v.name || "").toLowerCase();
    const lang = v => (v.lang || "").toLowerCase();

    let voice = availableVoices.find(v => name(v).includes("google uk english male"));
    if (voice) return voice;

    voice = availableVoices.find(v => name(v).includes("google uk english female"));
    if (voice) return voice;

    voice = availableVoices.find(v => name(v).includes("google") && lang(v).startsWith("en-gb"));
    if (voice) return voice;

    voice = availableVoices.find(v => name(v).includes("samantha"));
    if (voice) return voice;

    voice = availableVoices.find(v => lang(v).startsWith("en-gb"));
    if (voice) return voice;

    voice = availableVoices.find(v => lang(v).startsWith("en"));
    if (voice) return voice;

    return availableVoices[0] || null;
}

/* =========================================================
   SPEECH
========================================================= */

function speak(text, onComplete = null) {
    if (!("speechSynthesis" in window)) {
        pronunciationStatus.textContent = "النطق غير مدعوم في هذا المتصفح.";
        if (typeof onComplete === "function") onComplete();
        return;
    }

    text = normalizeText(text);
    if (!text) {
        if (typeof onComplete === "function") onComplete();
        return;
    }

    stopSpeech();

    activeUtterance = new SpeechSynthesisUtterance(text);
    const utterance = activeUtterance;

    const availableVoices = speechSynthesis.getVoices();
    const chosen = pickPreferredVoice(availableVoices);

    if (chosen) {
        utterance.voice = chosen;
        utterance.lang = chosen.lang;
    } else if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
    } else {
        utterance.lang = "en-GB";
    }

    utterance.rate = speechRate;
    utterance.pitch = 1;

    startSpeechKeepAlive();

    utterance.onstart = () => {
        pronunciationStatus.textContent = `🔊 ${text}`;
    };

    utterance.onend = () => {
        stopSpeechKeepAlive();
        activeUtterance = null;
        pronunciationStatus.textContent = "";
        if (typeof onComplete === "function") onComplete();
    };

    utterance.onerror = error => {
        stopSpeechKeepAlive();
        activeUtterance = null;
        console.error("Speech error:", error);
        pronunciationStatus.textContent = "تعذر تشغيل النطق.";
        if (typeof onComplete === "function") onComplete();
    };

    speechSynthesis.speak(utterance);
}

function stopSpeech() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    stopSpeechKeepAlive();
    activeUtterance = null;
    clearTemporarySpeechHighlight();
}

/* =========================================================
   SPEECH KEEP-ALIVE (iOS / Safari)
========================================================= */

let speechResumeInterval = null;

function startSpeechKeepAlive() {
    stopSpeechKeepAlive();
    speechResumeInterval = setInterval(() => {
        if (speechSynthesis.speaking) speechSynthesis.resume();
        else stopSpeechKeepAlive();
    }, 250);
}

function stopSpeechKeepAlive() {
    if (speechResumeInterval) {
        clearInterval(speechResumeInterval);
        speechResumeInterval = null;
    }
}

/* =========================================================
   VOICES
========================================================= */

function loadVoices() {
    if (!("speechSynthesis" in window)) return;

    voices = speechSynthesis.getVoices();

    const englishVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
    if (englishVoices.length === 0) return;

    voiceSelect.innerHTML = "";
    englishVoices.forEach(voice => {
        const option = document.createElement("option");
        option.value = `${voice.name}|${voice.lang}`;
        option.textContent = `${voice.name} — ${voice.lang}`;
        voiceSelect.appendChild(option);
    });

    const savedVoice = localStorage.getItem("pdfReaderVoice");
    if (savedVoice) {
        const saved = englishVoices.find(v => `${v.name}|${v.lang}` === savedVoice);
        if (saved) {
            selectedVoice = saved;
            voiceSelect.value = savedVoice;
            return;
        }
    }

    selectedVoice = pickPreferredVoice(englishVoices) || englishVoices[0];
    voiceSelect.value = `${selectedVoice.name}|${selectedVoice.lang}`;
}

voiceSelect.addEventListener("change", function () {
    const value = this.value;
    selectedVoice = voices.find(v => `${v.name}|${v.lang}` === value);
    if (selectedVoice) localStorage.setItem("pdfReaderVoice", value);
});

/* =========================================================
   SPEECH SPEED
========================================================= */

function updateSpeed() {
    speedValue.textContent = `${speechRate.toFixed(2)}×`;
}

speedRange.addEventListener("input", function () {
    speechRate = parseFloat(this.value);
    updateSpeed();
    localStorage.setItem("pdfReaderSpeechRate", speechRate);
});

function loadSpeechSettings() {
    const savedRate = localStorage.getItem("pdfReaderSpeechRate");
    if (savedRate) {
        const parsed = parseFloat(savedRate);
        if (!Number.isNaN(parsed) && parsed >= 0.5 && parsed <= 1.5) {
            speechRate = parsed;
        }
    }
    speedRange.value = speechRate;
    updateSpeed();
}

testVoiceButton.addEventListener("click", () => {
    speak("Hello! This is a pronunciation test.");
});

/* =========================================================
   MODES
========================================================= */

function setActiveMode(mode) {
    activeMode = mode;

    [handTool, penTool, eraserTool].forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
    });

    const map = { hand: handTool, pen: penTool, eraser: eraserTool };
    const activeBtn = map[mode];
    if (activeBtn) {
        activeBtn.classList.add("active");
        activeBtn.setAttribute("aria-pressed", "true");
    }

    document.body.dataset.readerMode = mode;
    document.querySelectorAll(".pdf-page").forEach(applyModeToPage);
}

function applyModeToPage(pageContainer) {
    const textLayer = pageContainer.querySelector(".textLayer");
    const annotationCanvas = pageContainer.querySelector(".annotation-canvas");
    if (!textLayer || !annotationCanvas) return;

    const isHand = activeMode === "hand";

    textLayer.style.pointerEvents = isHand ? "auto" : "none";
    annotationCanvas.style.pointerEvents = isHand ? "none" : "auto";

    annotationCanvas.style.cursor =
        activeMode === "pen"    ? "crosshair" :
        activeMode === "eraser" ? "cell"      :
                                  "default";
}

handTool.addEventListener("click", () => {
    setActiveMode("hand");
    colorDrawer?.classList.add("hidden");
});

penTool.addEventListener("click", () => {
    setActiveMode("pen");
    colorDrawer?.classList.toggle("hidden");
});

eraserTool.addEventListener("click", () => {
    setActiveMode("eraser");
    colorDrawer?.classList.add("hidden");
});

/* =========================================================
   ANNOTATION STORAGE
========================================================= */

function getAnnotationStorageKey(pdfPath) {
    const safePath = String(pdfPath).replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 180);
    return "yazeedInteractiveReaderAnnotations:" + safePath;
}

function loadAnnotations(pdfPath) {
    annotationStorageKey = getAnnotationStorageKey(pdfPath);
    try {
        const raw = localStorage.getItem(annotationStorageKey);
        annotationStore = raw ? JSON.parse(raw) : {};
    } catch (error) {
        console.error("تعذر تحميل التحديدات:", error);
        annotationStore = {};
    }
}

function saveAnnotations() {
    try {
        localStorage.setItem(annotationStorageKey, JSON.stringify(annotationStore));
    } catch (error) {
        console.error("تعذر حفظ التحديدات:", error);
        statusMessage.textContent = "تعذر حفظ بعض الرسومات محليًا.";
    }
}

function getPageAnnotations(pageNumber) {
    const key = String(pageNumber);
    if (!annotationStore[key]) {
        annotationStore[key] = { strokes: [], highlights: [] };
    }
    if (!Array.isArray(annotationStore[key].strokes)) annotationStore[key].strokes = [];
    if (!Array.isArray(annotationStore[key].highlights)) annotationStore[key].highlights = [];
    return annotationStore[key];
}

/* =========================================================
   COLOR SWATCHES
========================================================= */

document.querySelectorAll(".color-swatch").forEach(button => {
    button.addEventListener("click", () => {
        currentDrawColor = button.dataset.color;
        document.querySelectorAll(".color-swatch").forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        colorDrawer?.classList.add("hidden");
    });
});

const defaultSwatch = document.querySelector('.color-swatch[data-color="#C94C4C"]');
if (defaultSwatch) defaultSwatch.classList.add("active");

/* =========================================================
   ANNOTATION CANVAS
========================================================= */

function setupAnnotationCanvas(canvas, pageContainer, pageNumber) {
    let drawing = false;

    canvas.addEventListener("pointerdown", event => {
        if (activeMode !== "pen" && activeMode !== "eraser") return;

        event.preventDefault();
        canvas.setPointerCapture(event.pointerId);

        if (activeMode === "pen") {
            drawing = true;
            const point = getNormalizedPoint(event, canvas);
            activeDrawing = {
                pageNumber,
                points: [point],
                width: 4,
                color: currentDrawColor
            };
            redrawAnnotations(pageContainer, pageNumber, activeDrawing);
            return;
        }

        eraseAtPoint(event, canvas, pageContainer, pageNumber);
    });

    canvas.addEventListener("pointermove", event => {
        if (activeMode === "pen" && drawing && activeDrawing) {
            event.preventDefault();
            activeDrawing.points.push(getNormalizedPoint(event, canvas));
            redrawAnnotations(pageContainer, pageNumber, activeDrawing);
        }
    });

    function finishDrawing(event) {
        if (activeMode !== "pen" || !drawing || !activeDrawing) return;

        event.preventDefault();
        drawing = false;
        canvas.releasePointerCapture?.(event.pointerId);

        if (activeDrawing.points.length >= 2) {
            const annotations = getPageAnnotations(pageNumber);
            annotations.strokes.push(activeDrawing);
            saveAnnotations();
        }

        activeDrawing = null;
        redrawAnnotations(pageContainer, pageNumber);
    }

    canvas.addEventListener("pointerup", finishDrawing);
    canvas.addEventListener("pointercancel", finishDrawing);

    canvas.addEventListener("click", event => {
        if (activeMode !== "eraser") return;
        eraseAtPoint(event, canvas, pageContainer, pageNumber);
    });
}

function getNormalizedPoint(event, canvas) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)),
        y: Math.max(0, Math.min(1, (event.clientY - rect.top)  / rect.height))
    };
}

function redrawAnnotations(pageContainer, pageNumber, temporaryStroke = null) {
    const canvas = pageContainer.querySelector(".annotation-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (width <= 0 || height <= 0) return;

    ctx.save();
    ctx.scale(canvas.width / width, canvas.height / height);

    const annotations = getPageAnnotations(pageNumber);

    annotations.highlights.forEach(group => {
        group.forEach(r => {
            ctx.fillStyle = "rgba(250, 204, 21, 0.42)";
            ctx.fillRect(r.x * width, r.y * height, r.width * width, r.height * height);
        });
    });

    annotations.strokes.forEach(stroke => {
        drawStrokeOnContext(ctx, width, height, stroke);
    });

    if (temporaryStroke) {
        drawStrokeOnContext(ctx, width, height, temporaryStroke);
    }

    ctx.restore();
}

function drawStrokeOnContext(ctx, width, height, stroke) {
    if (!stroke?.points?.length) return;

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = stroke.color || "#C94C4C";
    ctx.lineWidth = Number(stroke.width || 4);

    ctx.beginPath();
    stroke.points.forEach((point, index) => {
        const x = point.x * width;
        const y = point.y * height;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.restore();
}

function eraseAtPoint(event, canvas, pageContainer, pageNumber) {
    const point = getNormalizedPoint(event, canvas);
    const annotations = getPageAnnotations(pageNumber);

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const hitRadius = Math.max(8 / Math.max(width, height), 0.006);

    for (let i = annotations.strokes.length - 1; i >= 0; i--) {
        const stroke = annotations.strokes[i];

        if (stroke.points.some(p => distance(p, point) <= hitRadius)) {
            annotations.strokes.splice(i, 1);
            saveAnnotations();
            redrawAnnotations(pageContainer, pageNumber);
            return;
        }

        for (let p = 1; p < stroke.points.length; p++) {
            if (distanceToSegment(point, stroke.points[p - 1], stroke.points[p]) <= hitRadius) {
                annotations.strokes.splice(i, 1);
                saveAnnotations();
                redrawAnnotations(pageContainer, pageNumber);
                return;
            }
        }
    }

    for (let i = annotations.highlights.length - 1; i >= 0; i--) {
        const group = annotations.highlights[i];
        const inside = group.some(r =>
            point.x >= r.x && point.x <= r.x + r.width &&
            point.y >= r.y && point.y <= r.y + r.height
        );
        if (inside) {
            annotations.highlights.splice(i, 1);
            saveAnnotations();
            redrawAnnotations(pageContainer, pageNumber);
            return;
        }
    }
}

function distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

function distanceToSegment(point, a, b) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    if (dx === 0 && dy === 0) return distance(point, a);

    const t = Math.max(0, Math.min(1,
        ((point.x - a.x) * dx + (point.y - a.y) * dy) / (dx * dx + dy * dy)
    ));
    return distance(point, { x: a.x + t * dx, y: a.y + t * dy });
}

/* =========================================================
   FIRST-USE MODAL
========================================================= */

function maybeShowPronunciationNotice() {
    const seen = localStorage.getItem("yazeedPronunciationNoticeSeen");
    if (seen === "true") return;
    if (!pronunciationModal) return;

    pronunciationModal.hidden = false;
    setActiveMode("hand");

    setTimeout(() => understoodButton?.focus(), 50);
}

understoodButton?.addEventListener("click", () => {
    localStorage.setItem("yazeedPronunciationNoticeSeen", "true");
    pronunciationModal.hidden = true;
});

/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener("keydown", event => {
    const active = document.activeElement;
    if (active && (
        active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.tagName === "SELECT"
    )) return;

    if (event.key === "ArrowLeft" && pdfDocument) goToPage(currentPage + 1);
    if (event.key === "ArrowRight" && pdfDocument) goToPage(currentPage - 1);
    if (event.key === "+" || event.key === "=") zoomInButton.click();
    if (event.key === "-") zoomOutButton.click();
});

/* =========================================================
   RESIZE
========================================================= */

let resizeTimer = null;
let lastViewportWidth = window.innerWidth;

window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;

    if (currentWidth === lastViewportWidth) return;
    lastViewportWidth = currentWidth;

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(async () => {
        if (pdfDocument && !readerApp.hidden) {
            const savedScrollTop = viewerContainer.scrollTop;
            const savedScrollLeft = viewerContainer.scrollLeft;

            // Refit automatically unless the user chose a zoom level
            if (!manuallyZoomed) {
                scale = await calculateFitScale();
            }

            await renderPage(currentPage);

            viewerContainer.scrollTop = savedScrollTop;
            viewerContainer.scrollLeft = savedScrollLeft;
        }
    }, 250);
});

window.addEventListener("beforeunload", () => stopSpeech());

/* =========================================================
   UI ADAPTERS
========================================================= */

/* Bottom toolbar nav buttons → original buttons */
document.getElementById("prevVisual")?.addEventListener("click", () => {
    document.getElementById("previousPage").click();
});
document.getElementById("nextVisual")?.addEventListener("click", () => {
    document.getElementById("nextPage").click();
});

/* Speed chip mirrors speedValue */
(function () {
    const speedChip = document.getElementById("speedChip");
    const sv = document.getElementById("speedValue");
    if (!speedChip || !sv) return;
    const sync = () => { speedChip.textContent = sv.textContent; };
    new MutationObserver(sync).observe(sv, { childList: true, characterData: true, subtree: true });
    sync();
})();

/* Voice popover open/close */
(function () {
    const btn = document.getElementById("voiceBtn");
    const panel = document.getElementById("voicePanel");
    if (!btn || !panel) return;

    btn.addEventListener("click", e => {
        e.stopPropagation();
        const open = panel.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.addEventListener("click", e => {
        if (!panel.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
            panel.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
        }
    });
})();

/* Theme toggle */
(function () {
    const btn = document.getElementById("themeBtn");
    const icon = document.getElementById("themeIcon");
    if (!btn || !icon) return;

    const moon = "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z";
    const sun  = "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z";

    const sync = () => {
        const dark = document.documentElement.classList.contains("dark");
        icon.setAttribute("d", dark ? sun : moon);
        btn.setAttribute("aria-label", dark ? "الوضع الفاتح" : "الوضع الداكن");
    };

    sync();
    btn.addEventListener("click", () => {
        const dark = document.documentElement.classList.toggle("dark");
        try { localStorage.setItem("ye-theme", dark ? "dark" : "light"); } catch (e) {}
        sync();
    });
})();

/* Progress bar mirrors page position */
(function () {
    const bar = document.getElementById("progressBar");
    const input = document.getElementById("pageInput");
    const total = document.getElementById("totalPages");
    if (!bar || !input || !total) return;

    const sync = () => {
        const cur = parseInt(input.value, 10) || 1;
        const max = parseInt(total.textContent, 10) || 1;
        const p = Math.max(0, Math.min(1, cur / max));
        bar.style.transform = `scaleX(${p})`;
    };

    new MutationObserver(sync).observe(total, { childList: true, characterData: true, subtree: true });
    input.addEventListener("input", sync);
    input.addEventListener("change", sync);
    sync();
})();

/* =========================================================
   INITIALIZE
========================================================= */

async function initializeReader() {
    if (readerApp) readerApp.hidden = false;

    loadSpeechSettings();
    setActiveMode("hand");

    if ("speechSynthesis" in window) {
        loadVoices();
        speechSynthesis.onvoiceschanged = loadVoices;
    }

    await openPDF(PDF_FILE);
}

initializeReader();