/* =========================================================
   YAZEED ENGLISH HUB — INTERACTIVE PDF VIEWER
   Requires: PDF.js 3.11.x (loaded in index.html)
========================================================= */
(() => {
    'use strict';

    /* ---------------------------------------------------------
       CONFIG  ←  ضع رابط الملف هنا
    --------------------------------------------------------- */
    const CONFIG = {
        PDF_URL: 'https://file.yazeedenglish.com/en/ebook.pdf',            // ← ضع رابط ملف الـ PDF هنا (يجب أن يكون على نفس النطاق أو يسمح بـ CORS)
        DOC_TITLE: '',          // اختياري: عنوان يظهر تحت اسم المنصة. إن تُرك فارغاً يُستخدم عنوان الملف.
        CACHE_SIZE: 6,          // عدد الصفحات المخزّنة جاهزة للعرض الفوري
        MAX_CANVAS_PIXELS: 6e6, // سقف دقة الرسم لحماية ذاكرة iOS
        ZOOM_STEPS: [1, 1.25, 1.5, 2, 2.5, 3],
        RATE_PRESETS: [0.5, 0.75, 1, 1.25, 1.5, 2],
        AUTOPLAY_OPTIONS: [5, 8, 12, 20],
        PDFJS_VERSION: '3.11.174'
    };

    /* ---------------------------------------------------------
       HELPERS
    --------------------------------------------------------- */
    const $ = (id) => document.getElementById(id);
    const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
    const store = {
        get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
        set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
    };
    const idle = () => new Promise((r) =>
        ('requestIdleCallback' in window) ? requestIdleCallback(() => r(), { timeout: 400 }) : setTimeout(r, 40));
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const els = {};
    [
        'app', 'themeBtn', 'themeIcon', 'brandLogo', 'brandMark', 'docTitle', 'progressBar',
        'workspace', 'thumbs', 'thumbsList', 'thumbsClose', 'thumbsBackdrop', 'thumbsBtn',
        'stage', 'viewport', 'pages', 'sidePrev', 'sideNext', 'slideExit', 'toast',
        'state', 'stateTitle', 'stateDesc', 'stateBar', 'stateRetry', 'stateOpen',
        'toolbar', 'zoomOut', 'zoomIn', 'zoomLabel', 'prevBtn', 'nextBtn', 'pageInput', 'pageTotal',
        'readBtn', 'readIcon', 'stopBtn', 'speedChip', 'voiceBtn', 'autoBtn', 'autoIcon', 'autoSecChip', 'slideBtn',
        'voicePanel', 'panelClose', 'voiceSelect', 'rateRange', 'rateOut', 'rateChips', 'modeSeg',
        'autoNext', 'testVoice', 'announce', 'fileInput'
    ].forEach((id) => { els[id] = $(id); });

    const S = {
        pdf: null,
        total: 0,
        page: 0,         // page currently displayed
        target: 1,       // page the user asked for
        zoom: 1,
        token: 0,
        aspect: 0.7727,
        pages: new Map(),   // page number -> Promise<PDFPageProxy>
        layers: new Map(),  // cache key -> {promise}
        current: null,      // layer currently mounted
        slideshow: false,
        autoplay: false,
        autoSec: 8,
        autoT: 0,
        source: CONFIG.PDF_URL
    };

    let toastT = 0;
    function toast(msg, ms = 2800) {
        els.toast.textContent = msg;
        els.toast.classList.add('show');
        clearTimeout(toastT);
        toastT = setTimeout(() => els.toast.classList.remove('show'), ms);
    }

    /* =========================================================
       THEME
    ========================================================= */
    function applyTheme(dark) {
        document.body.classList.toggle('dark', dark);
        els.themeIcon.setAttribute('href', dark ? '#i-sun' : '#i-moon');
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', dark ? '#15181C' : '#00689b');
    }
    function initTheme() {
        const saved = store.get('ye-theme');
        applyTheme(saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
        els.themeBtn.addEventListener('click', () => {
            const dark = !document.body.classList.contains('dark');
            applyTheme(dark);
            store.set('ye-theme', dark ? 'dark' : 'light');
        });
    }

    /* =========================================================
       STATE SCREEN (loading / error / empty)
    ========================================================= */
    function showState(kind, title, desc) {
        const st = els.state;
        st.className = 'state' + (kind ? ' show ' + kind : '');
        if (title !== undefined) els.stateTitle.textContent = title;
        if (desc !== undefined) els.stateDesc.textContent = desc;
        els.stateRetry.hidden = kind !== 'error' || !S.source || typeof S.source !== 'string';
    }

    /* =========================================================
       TEXT MODEL  (page text -> paragraphs -> sentences)
    ========================================================= */
    const ABBR = /\b(Mr|Mrs|Ms|Dr|Prof|St|Jr|Sr|vs|etc|No|Fig|e\.g|i\.e)\.$/i;

    function buildModel(items) {
        let text = '';
        const map = [];
        let lastReal = null;
        let pendingEOL = false;

        items.forEach((it) => {
            const str = it.str;
            if (str === '') {
                map.push({ str, start: text.length, end: text.length, sent: null });
                if (it.hasEOL) pendingEOL = true;
                return;
            }
            const h = it.height || Math.abs(it.transform[3]) || 10;
            let sep = '';

            if (lastReal) {
                const hp = lastReal.height || Math.abs(lastReal.transform[3]) || 10;
                const dy = Math.abs(lastReal.transform[5] - it.transform[5]);
                const newLine = pendingEOL || dy > Math.min(hp, h) * 0.8;

                if (newLine) {
                    const para = dy > Math.max(hp, h) * 1.9 || Math.abs(h - hp) / Math.max(h, hp) > 0.18;
                    if (para) {
                        sep = '\n\n';
                    } else if (/[A-Za-z]-$/.test(text)) {
                        text = text.slice(0, -1);          // join hyphenated line-break
                        const prev = map[map.length - 1];
                        if (prev) prev.end = Math.max(prev.start, prev.end - 1);
                        sep = '';
                    } else {
                        sep = ' ';
                    }
                } else {
                    const gap = it.transform[4] - (lastReal.transform[4] + (lastReal.width || 0));
                    if (gap > h * 0.15 && !/\s$/.test(text) && !/^\s/.test(str)) sep = ' ';
                }
            }

            pendingEOL = !!it.hasEOL;
            text += sep;
            const start = text.length;
            text += str;
            map.push({ str, start, end: text.length, sent: null });
            lastReal = it;
        });

        /* sentences */
        const sentences = [];
        const pushRange = (s, e) => {
            while (s < e && /\s/.test(text[s])) s++;
            while (e > s && /\s/.test(text[e - 1])) e--;
            if (e <= s) return;
            const t = text.slice(s, e).replace(/\s+/g, ' ').trim();
            if (!/[\p{L}\p{N}]/u.test(t)) return;
            sentences.push({ s, e, text: t, idxs: [] });
        };

        let pStart = 0;
        const paraRe = /\n{2,}/g;
        const paras = [];
        let pm;
        while ((pm = paraRe.exec(text))) { paras.push([pStart, pm.index]); pStart = pm.index + pm[0].length; }
        paras.push([pStart, text.length]);

        paras.forEach(([ps, pe]) => {
            let s = ps;
            const re = /[.!?…]+["'”’)\]]*(?=\s|$)/g;
            const seg = text.slice(ps, pe);
            let m;
            while ((m = re.exec(seg))) {
                const end = ps + m.index + m[0].length;
                if (m[0] === '.' && ABBR.test(text.slice(Math.max(0, end - 8), end))) continue;
                pushRange(s, end);
                s = end;
            }
            if (s < pe) pushRange(s, pe);
        });

        /* item <-> sentence mapping */
        map.forEach((it, i) => {
            if (it.end <= it.start) return;
            for (let si = 0; si < sentences.length; si++) {
                const s = sentences[si];
                if (s.e <= it.start) continue;
                if (s.s >= it.end) break;
                s.idxs.push(i);
                if (it.sent === null) it.sent = si;
            }
        });

        return { text, items: map, sentences };
    }

    /* =========================================================
       PDF LOADING
    ========================================================= */
    function setupPdfJs() {
        if (!window.pdfjsLib) throw new Error('PDF.js not loaded');
        pdfjsLib.GlobalWorkerOptions.workerSrc =
            `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${CONFIG.PDFJS_VERSION}/pdf.worker.min.js`;
    }

    async function openPdf(source) {
        S.source = source;
        showState('loading', 'جارٍ تحميل الملف…', '');
        els.stateBar.style.transform = 'scaleX(0.04)';

        resetViewer();

        const params = typeof source === 'string'
            ? { url: source, isEvalSupported: false }
            : { data: source.data, isEvalSupported: false };

        const task = pdfjsLib.getDocument(params);
        task.onProgress = (p) => {
            if (p.total) els.stateBar.style.transform = `scaleX(${Math.max(0.04, p.loaded / p.total)})`;
        };

        try {
            S.pdf = await task.promise;
        } catch (err) {
            console.error(err);
            const name = err && err.name;
            if (name === 'PasswordException') {
                showState('error', 'الملف محمي بكلمة مرور', 'لا يمكن عرض ملفات PDF المحمية بكلمة مرور.');
            } else if (name === 'InvalidPDFException') {
                showState('error', 'الملف غير صالح', 'تأكد أن الرابط يشير إلى ملف PDF سليم.');
            } else {
                showState('error', 'تعذّر تحميل الملف', 'تحقق من الرابط، وتأكد أن الخادم يسمح بالوصول (CORS) من هذا الموقع.');
            }
            return;
        }

        S.total = S.pdf.numPages;
        els.pageTotal.textContent = S.total;
        els.pageInput.max = S.total;

        S.pdf.getMetadata().then((meta) => {
            const t = CONFIG.DOC_TITLE || (meta && meta.info && meta.info.Title) || '';
            if (t) { els.docTitle.textContent = t; document.title = t + ' | Yazeed English Hub'; }
        }).catch(() => {});

        S.pdf.getPage(1).then((p) => {
            const b = p.getViewport({ scale: 1 });
            S.aspect = b.width / b.height;
        });

        S.target = 1;
        await goTo(1, { instant: true, force: true });
    }

    function resetViewer() {
        stopSpeech();
        S.token++;
        S.pdf = null;
        S.total = 0;
        S.page = 0;
        S.target = 1;
        S.pages.clear();
        S.layers.clear();
        S.current = null;
        els.pages.innerHTML = '';
        els.thumbsList.innerHTML = '';
        thumbsBuilt = false;
        updateNav();
    }

    const getPage = (n) => {
        if (!S.pages.has(n)) S.pages.set(n, S.pdf.getPage(n));
        return S.pages.get(n);
    };

    /* =========================================================
       RENDERING  (fast: cached layers + prefetch)
    ========================================================= */
    function computeFit(w, h) {
        const vp = els.viewport;
        const cs = getComputedStyle(vp);
        const aw = Math.max(120, vp.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight));
        const ah = Math.max(120, vp.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom));
        return Math.max(0.1, Math.min(aw / w, ah / h));
    }

    function evict() {
        const keep = new Set([S.current && S.current.key]);
        for (const key of S.layers.keys()) {
            if (S.layers.size <= CONFIG.CACHE_SIZE) break;
            if (!keep.has(key)) S.layers.delete(key);
        }
    }

    async function buildLayer(num) {
        const page = await getPage(num);
        const b = page.getViewport({ scale: 1 });
        const scale = computeFit(b.width, b.height) * S.zoom;
        const key = num + '|' + scale.toFixed(3);

        const hit = S.layers.get(key);
        if (hit) {              // LRU touch
            S.layers.delete(key);
            S.layers.set(key, hit);
            return hit.promise;
        }
        const rec = { key, promise: null };
        rec.promise = renderLayer(page, b, scale, key).catch((err) => { S.layers.delete(key); throw err; });
        S.layers.set(key, rec);
        evict();
        return rec.promise;
    }

    async function renderLayer(page, b, scale, key) {
        const viewport = page.getViewport({ scale });
        const el = document.createElement('div');
        el.className = 'page-layer';
        el.style.width = viewport.width + 'px';
        el.style.height = viewport.height + 'px';

        const canvas = document.createElement('canvas');
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const area = viewport.width * viewport.height;
        let out = dpr;
        if (area * out * out > CONFIG.MAX_CANVAS_PIXELS) out = Math.max(0.6, Math.sqrt(CONFIG.MAX_CANVAS_PIXELS / area));
        canvas.width = Math.max(1, Math.floor(viewport.width * out));
        canvas.height = Math.max(1, Math.floor(viewport.height * out));
        canvas.style.width = viewport.width + 'px';
        canvas.style.height = viewport.height + 'px';
        el.appendChild(canvas);

        const tl = document.createElement('div');
        tl.className = 'textLayer';
        tl.style.setProperty('--scale-factor', scale);
        el.appendChild(tl);

        const ctx = canvas.getContext('2d', { alpha: false });
        const renderTask = page.render({
            canvasContext: ctx,
            viewport,
            transform: out !== 1 ? [out, 0, 0, out, 0, 0] : undefined,
            background: '#ffffff'
        });

        const divs = [];
        let model = { text: '', items: [], sentences: [] };

        const textWork = (async () => {
            try {
                const tc = await page.getTextContent();
                const items = tc.items.filter((i) => typeof i.str === 'string');
                const tt = pdfjsLib.renderTextLayer({ textContentSource: tc, container: tl, viewport, textDivs: divs });
                await tt.promise;
                model = buildModel(items);
                divs.forEach((d, i) => { d.dataset.i = i; });
            } catch (e) { console.warn('text layer', e); }
        })();

        await Promise.all([renderTask.promise, textWork]);

        return { key, num: page.pageNumber, scale, base: { w: b.width, h: b.height }, w: viewport.width, h: viewport.height, el, divs, model };
    }

    let prefGen = 0;
    function prefetch(from) {
        const gen = ++prefGen;
        if (S.zoom > 1.5) return;
        const order = [from + 1, from - 1, from + 2].filter((n) => n >= 1 && n <= S.total);
        (async () => {
            for (const n of order) {
                if (gen !== prefGen) return;
                await idle();
                if (gen !== prefGen) return;
                try { await buildLayer(n); } catch (e) { /* ignore */ }
            }
        })();
    }

    function mount(layer, dir, opts) {
        const old = S.current;

        /* drop any layers still lingering from interrupted transitions */
        Array.from(els.pages.children).forEach((c) => {
            if (c !== layer.el && (!old || c !== old.el)) {
                c.getAnimations && c.getAnimations().forEach((a) => a.cancel());
                c.remove();
            }
        });

        layer.el.getAnimations && layer.el.getAnimations().forEach((a) => a.cancel());
        layer.el.style.pointerEvents = '';
        layer.el.style.zIndex = '2';

        els.pages.style.width = layer.w + 'px';
        els.pages.style.height = layer.h + 'px';
        if (layer.el.parentNode !== els.pages) els.pages.appendChild(layer.el);

        S.current = layer;

        const dx = (S.zoom > 1 ? 0 : 56) * dir;
        if (old && old !== layer && !opts.instant && !reduceMotion && layer.el.animate) {
            old.el.style.pointerEvents = 'none';
            old.el.style.zIndex = '1';
            const a = old.el.animate(
                [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: `translate3d(${-dx}px,0,0) scale(0.98)` }],
                { duration: 280, easing: 'cubic-bezier(0.4,0,0.2,1)', fill: 'forwards' }
            );
            const done = () => { try { a.cancel(); } catch (e) {} if (old !== S.current) old.el.remove(); };
            a.onfinish = done;
            a.oncancel = () => {};
            layer.el.animate(
                [{ opacity: 0, transform: `translate3d(${dx}px,0,0) scale(0.98)` }, { opacity: 1, transform: 'none' }],
                { duration: 360, easing: 'cubic-bezier(0.22,0.8,0.24,1)' }
            );
        } else if (old && old !== layer) {
            old.el.getAnimations && old.el.getAnimations().forEach((a) => a.cancel());
            old.el.remove();
        }

        /* scroll position */
        const vp = els.viewport;
        requestAnimationFrame(() => {
            const left = Math.max(0, (vp.scrollWidth - vp.clientWidth) / 2);
            const top = opts.center ? Math.max(0, (vp.scrollHeight - vp.clientHeight) / 2) : 0;
            vp.scrollTo({ left, top, behavior: 'auto' });
        });
    }

    async function goTo(n, opts = {}) {
        if (!S.pdf) return;
        const tok = ++S.token;
        const dir = opts.dir || (n >= S.page ? 1 : -1);

        if (!opts.force && S.current && S.current.num === n) { S.target = n; updateNav(); return; }

        let layer;
        try {
            layer = await buildLayer(n);
        } catch (err) {
            if (tok !== S.token) return;
            console.error(err);
            showState('error', 'تعذّر عرض الصفحة', 'حدثت مشكلة أثناء رسم الصفحة.');
            return;
        }
        if (tok !== S.token) return;

        mount(layer, dir, opts);
        S.page = n;
        S.target = n;
        updateNav();
        showState(null);
        if (TTS.job) highlight(TTS.job.units[TTS.job.i]);

        if (!S.hinted) {
            S.hinted = true;
            if (layer.model.sentences.length) toast('اضغط على أي نص في الصفحة لتسمعه', 3600);
        }

        prefetch(n);
        armAuto();
        if (typeof opts.onShown === 'function') opts.onShown();
    }

    function go(n, dir, opts = {}) {
        if (!S.pdf) return;
        n = clamp(Math.round(+n) || 1, 1, S.total);
        if (n === S.target && S.current && S.current.num === n && !opts.force) { updateNav(); return; }
        if (TTS.job && !opts.keepSpeech) stopSpeech();
        S.target = n;
        updateNav();
        goTo(n, Object.assign({ dir: dir || (n > S.page ? 1 : -1) }, opts));
    }

    const next = () => go(S.target + 1, 1);
    const prev = () => go(S.target - 1, -1);

    function updateNav() {
        const n = S.target;
        if (document.activeElement !== els.pageInput) els.pageInput.value = S.total ? n : 1;
        els.pageTotal.textContent = S.total || '–';
        const noPdf = !S.total;
        els.prevBtn.disabled = noPdf || n <= 1;
        els.nextBtn.disabled = noPdf || n >= S.total;
        els.sidePrev.disabled = els.prevBtn.disabled;
        els.sideNext.disabled = els.nextBtn.disabled;
        els.progressBar.style.transform = `scaleX(${S.total ? n / S.total : 0})`;
        els.readBtn.disabled = noPdf;
        els.announce.textContent = S.total ? `الصفحة ${n} من ${S.total}` : '';
        markThumb(n);
    }

    /* ---- resize ---- */
    let resizeT = 0;
    function onResize() {
        if (!S.current || !S.pdf) return;
        const want = computeFit(S.current.base.w, S.current.base.h) * S.zoom;
        if (Math.abs(want / S.current.scale - 1) > 0.04) goTo(S.page, { force: true, instant: true });
    }

    /* ---- zoom ---- */
    function setZoom(z) {
        z = clamp(z, 1, CONFIG.ZOOM_STEPS[CONFIG.ZOOM_STEPS.length - 1]);
        if (z === S.zoom || !S.pdf) return;
        S.zoom = z;
        els.zoomLabel.textContent = Math.round(z * 100) + '%';
        goTo(S.page, { force: true, instant: true, center: true });
    }
    function zoomStep(dirn) {
        const steps = CONFIG.ZOOM_STEPS;
        if (dirn > 0) setZoom(steps.find((s) => s > S.zoom + 0.001) || S.zoom);
        else setZoom([...steps].reverse().find((s) => s < S.zoom - 0.001) || 1);
    }

    /* =========================================================
       THUMBNAILS
    ========================================================= */
    let thumbsBuilt = false;
    let thumbObserver = null;
    let thumbQueue = Promise.resolve();

    function buildThumbs() {
        if (thumbsBuilt || !S.total) return;
        thumbsBuilt = true;
        const frag = document.createDocumentFragment();
        for (let n = 1; n <= S.total; n++) {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'thumb';
            b.dataset.n = n;
            b.setAttribute('aria-label', 'الصفحة ' + n);
            const box = document.createElement('span');
            box.className = 'thumb-box';
            box.style.aspectRatio = String(S.aspect);
            const lab = document.createElement('span');
            lab.textContent = n;
            b.append(box, lab);
            frag.appendChild(b);
        }
        els.thumbsList.appendChild(frag);

        thumbObserver = new IntersectionObserver((entries) => {
            entries.forEach((en) => {
                if (!en.isIntersecting) return;
                thumbObserver.unobserve(en.target);
                thumbQueue = thumbQueue.then(() => renderThumb(en.target)).catch(() => {});
            });
        }, { root: els.thumbsList, rootMargin: '300px' });

        els.thumbsList.querySelectorAll('.thumb').forEach((t) => thumbObserver.observe(t));
        markThumb(S.target);
    }

    async function renderThumb(btn) {
        if (!S.pdf) return;
        const n = +btn.dataset.n;
        const page = await getPage(n);
        const b = page.getViewport({ scale: 1 });
        const w = 150;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const vp = page.getViewport({ scale: (w / b.width) * dpr });
        const c = document.createElement('canvas');
        c.width = Math.floor(vp.width);
        c.height = Math.floor(vp.height);
        await page.render({ canvasContext: c.getContext('2d', { alpha: false }), viewport: vp, background: '#fff' }).promise;
        const box = btn.querySelector('.thumb-box');
        box.style.aspectRatio = `${b.width} / ${b.height}`;
        box.appendChild(c);
    }

    function markThumb(n) {
        if (!thumbsBuilt) return;
        const prevEl = els.thumbsList.querySelector('.thumb[aria-current="true"]');
        if (prevEl) prevEl.removeAttribute('aria-current');
        const el = els.thumbsList.querySelector(`.thumb[data-n="${n}"]`);
        if (el) {
            el.setAttribute('aria-current', 'true');
            if (els.workspace.classList.contains('thumbs-open')) el.scrollIntoView({ block: 'nearest' });
        }
    }

    function toggleThumbs(force) {
        const open = typeof force === 'boolean' ? force : !els.workspace.classList.contains('thumbs-open');
        if (open) buildThumbs();
        els.workspace.classList.toggle('thumbs-open', open);
        els.thumbsBtn.setAttribute('aria-expanded', String(open));
        if (open) markThumb(S.target);
    }

    /* =========================================================
       TEXT-TO-SPEECH
    ========================================================= */
    const synth = window.speechSynthesis;
    const platform = {
        ios: /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1),
        win: /Windows/i.test(navigator.userAgent)
    };

    const TTS = { shown: [], voice: null, rate: 1, mode: 'sentence', autoNext: false, job: null, utter: null, tok: 0 };

    function pickDefaultVoice(list) {
        const en = list.filter((v) => /^en([-_]|$)/i.test(v.lang));
        const by = (fn) => en.find(fn);
        if (platform.win) {
            return by((v) => v.name === 'Google UK English Male')
                || by((v) => /google uk english male/i.test(v.name))
                || by((v) => /google uk english/i.test(v.name))
                || by((v) => /en[-_]gb/i.test(v.lang) && /(ryan|george|male)/i.test(v.name))
                || by((v) => /en[-_]gb/i.test(v.lang))
                || by((v) => /en[-_]us/i.test(v.lang))
                || en[0] || list[0];
        }
        /* iOS (and other Apple platforms) → Samantha en-US */
        return by((v) => v.name === 'Samantha' && /en[-_]us/i.test(v.lang))
            || by((v) => /^Samantha/i.test(v.name))
            || by((v) => /en[-_]us/i.test(v.lang))
            || en[0] || list[0];
    }

    function loadVoices() {
        if (!synth) return false;
        const list = synth.getVoices();
        if (!list || !list.length) return false;

        const en = list.filter((v) => /^en/i.test(v.lang));
        const shown = (en.length ? en : list).slice().sort((a, b) =>
            a.lang.localeCompare(b.lang) || a.name.localeCompare(b.name));
        TTS.shown = shown;

        els.voiceSelect.innerHTML = '';
        shown.forEach((v, i) => els.voiceSelect.add(new Option(`${v.name} — ${v.lang}`, String(i))));

        const savedName = store.get('ye-voice');
        let v = savedName && shown.find((x) => x.name === savedName);
        if (!v) v = pickDefaultVoice(shown);
        setVoice(v, false);
        return true;
    }

    function setVoice(v, persist) {
        TTS.voice = v || null;
        const idx = TTS.shown.indexOf(v);
        if (idx >= 0) els.voiceSelect.value = String(idx);
        if (persist && v) store.set('ye-voice', v.name);
        restartSoon();
    }

    let restartT = 0;
    function restartSoon() {
        clearTimeout(restartT);
        restartT = setTimeout(() => {
            if (TTS.job && !TTS.job.paused) speakChunk(true);
        }, 160);
    }

    const fmtRate = (r) => (+r.toFixed(2)) + '×';

    function setRate(r, persist = true) {
        r = Math.round(clamp(r, 0.5, 2) * 20) / 20;
        TTS.rate = r;
        els.rateRange.value = r;
        els.rateOut.textContent = fmtRate(r);
        els.speedChip.textContent = fmtRate(r);
        els.rateChips.querySelectorAll('button').forEach((b) =>
            b.classList.toggle('active', Math.abs(+b.dataset.rate - r) < 0.001));
        if (persist) store.set('ye-rate', String(r));
        restartSoon();
    }

    function chunkText(t, max = 170) {
        if (t.length <= max) return [t];
        const out = [];
        let cur = '';
        t.split(' ').forEach((w) => {
            if (cur && (cur + ' ' + w).length > max) { out.push(cur); cur = w; }
            else cur = cur ? cur + ' ' + w : w;
            if (cur.length > max * 0.6 && /[,;:]$/.test(cur)) { out.push(cur); cur = ''; }
        });
        if (cur) out.push(cur);
        return out;
    }

    function clearHighlight() {
        els.pages.querySelectorAll('.speaking').forEach((d) => d.classList.remove('speaking'));
    }

    function highlight(u) {
        clearHighlight();
        if (!u || !S.current || S.current.num !== u.page) return;
        let first = null;
        u.idxs.forEach((i) => {
            const d = S.current.divs[i];
            if (d) { d.classList.add('speaking'); if (!first) first = d; }
        });
        if (first && S.zoom > 1) first.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
    }

    function syncSpeechUI() {
        const j = TTS.job;
        const playing = !!j && !j.paused;
        els.readIcon.setAttribute('href', playing ? '#i-pause' : '#i-play');
        const label = playing ? 'إيقاف مؤقت' : (j ? 'متابعة القراءة' : 'قراءة الصفحة (R)');
        els.readBtn.title = label;
        els.readBtn.setAttribute('aria-label', label);
        els.stopBtn.disabled = !j;
    }

    function startJob(units, opts = {}) {
        if (!synth) { toast('متصفحك لا يدعم القراءة الصوتية'); return; }
        if (!units.length) { toast('لا يوجد نص قابل للقراءة هنا'); return; }
        stopSpeech();
        const my = TTS.tok;
        TTS.job = {
            units: units.map((u) => Object.assign({}, u, { chunks: chunkText(u.text) })),
            i: 0, c: 0, paused: false, readPage: !!opts.readPage
        };
        syncSpeechUI();
        setTimeout(() => {
            if (TTS.tok === my && TTS.job) { highlight(TTS.job.units[0]); speakChunk(); }
        }, 70);
    }

    function speakChunk(restart) {
        const j = TTS.job;
        if (!j || j.paused) return;
        const my = ++TTS.tok;
        const run = () => {
            if (TTS.tok !== my || TTS.job !== j || j.paused) return;
            const u = j.units[j.i];
            const ut = new SpeechSynthesisUtterance(u.chunks[j.c]);
            if (TTS.voice) { ut.voice = TTS.voice; ut.lang = TTS.voice.lang; } else { ut.lang = 'en-US'; }
            ut.rate = TTS.rate;
            ut.pitch = 1;
            ut.onend = () => { if (TTS.tok === my) advance(); };
            ut.onerror = (e) => {
                if (TTS.tok !== my) return;
                if (e.error === 'interrupted' || e.error === 'canceled') return;
                toast('تعذّر تشغيل الصوت');
                stopSpeech();
            };
            TTS.utter = ut;     // keep a reference (prevents premature GC in Chrome)
            synth.speak(ut);
        };
        if (restart) { synth.cancel(); setTimeout(run, 60); } else run();
    }

    function advance() {
        const j = TTS.job;
        if (!j) return;
        j.c++;
        if (j.c < j.units[j.i].chunks.length) { speakChunk(); return; }
        j.c = 0;
        j.i++;
        if (j.i < j.units.length) { highlight(j.units[j.i]); speakChunk(); return; }
        finishJob();
    }

    function finishJob() {
        const j = TTS.job;
        const cont = j && j.readPage && TTS.autoNext && S.page < S.total;
        TTS.job = null;
        TTS.tok++;
        clearHighlight();
        syncSpeechUI();
        if (cont) go(S.page + 1, 1, { keepSpeech: true, onShown: () => readPage(true) });
    }

    function stopSpeech() {
        TTS.tok++;
        TTS.job = null;
        if (synth) synth.cancel();
        clearHighlight();
        syncSpeechUI();
    }

    function togglePlay() {
        const j = TTS.job;
        if (!j) { readPage(); return; }
        if (j.paused) { j.paused = false; speakChunk(true); }
        else { j.paused = true; TTS.tok++; synth.cancel(); }
        syncSpeechUI();
    }

    function readPage(auto) {
        const L = S.current;
        if (!L) return;
        const units = L.model.sentences.map((s) => ({ text: s.text, idxs: s.idxs, page: L.num }));
        if (!units.length) {
            if (auto && TTS.autoNext && S.page < S.total) {
                go(S.page + 1, 1, { keepSpeech: true, onShown: () => readPage(true) });
            } else {
                toast('هذه الصفحة لا تحتوي على نص قابل للقراءة');
            }
            return;
        }
        startJob(units, { readPage: true });
    }

    function caretCharIndex(span, x, y) {
        let node = null, off = 0;
        if (document.caretPositionFromPoint) {
            const p = document.caretPositionFromPoint(x, y);
            if (p) { node = p.offsetNode; off = p.offset; }
        } else if (document.caretRangeFromPoint) {
            const r = document.caretRangeFromPoint(x, y);
            if (r) { node = r.startContainer; off = r.startOffset; }
        }
        if (node && node.nodeType === 3 && span.contains(node)) return off;
        return null;
    }

    function wordAt(str, idx) {
        if (idx == null || !str) return null;
        const re = /[\p{L}\p{N}'’-]/u;
        let a = Math.min(idx, str.length - 1);
        let b = a;
        if (!re.test(str[a])) {
            if (a > 0 && re.test(str[a - 1])) { a--; b = a; } else return null;
        }
        while (a > 0 && re.test(str[a - 1])) a--;
        while (b < str.length - 1 && re.test(str[b + 1])) b++;
        const w = str.slice(a, b + 1).replace(/^['’-]+|['’-]+$/g, '');
        return /[\p{L}\p{N}]/u.test(w) ? w : null;
    }

    function onTextClick(e) {
        const span = e.target.closest && e.target.closest('.textLayer span');
        const L = S.current;
        if (!span || !L || !L.el.contains(span)) return;
        const i = +span.dataset.i;
        const it = L.model.items[i];
        if (!it || !it.str.trim()) return;

        const ci = caretCharIndex(span, e.clientX, e.clientY);

        if (TTS.mode === 'word') {
            const w = wordAt(it.str, ci);
            if (w) { startJob([{ text: w, idxs: [i], page: L.num }]); return; }
        }

        let si = it.sent;
        if (ci != null) {
            const abs = it.start + Math.min(ci, Math.max(0, it.end - it.start - 1));
            const found = L.model.sentences.findIndex((s) => abs >= s.s && abs < s.e);
            if (found >= 0) si = found;
        }
        if (si == null) return;
        const s = L.model.sentences[si];
        startJob([{ text: s.text, idxs: s.idxs, page: L.num }]);
    }

    /* =========================================================
       VOICE PANEL
    ========================================================= */
    function openPanel(open) {
        const isOpen = typeof open === 'boolean' ? open : !els.voicePanel.classList.contains('open');
        els.voicePanel.classList.toggle('open', isOpen);
        els.voiceBtn.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) wake();
    }

    function setMode(mode, persist = true) {
        TTS.mode = mode;
        els.modeSeg.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
        if (persist) store.set('ye-mode', mode);
    }

    /* =========================================================
       SLIDESHOW
    ========================================================= */
    let idleT = 0;
    function wake() {
        els.app.classList.remove('idle');
        clearTimeout(idleT);
        if (!S.slideshow) return;
        idleT = setTimeout(() => {
            if (!els.voicePanel.classList.contains('open')) els.app.classList.add('idle');
        }, 2800);
    }

    function enterSlideshow() {
        if (!S.pdf) return;
        S.slideshow = true;
        els.app.classList.add('slideshow');
        openPanel(false);
        toggleThumbs(false);
        if (S.zoom !== 1) { S.zoom = 1; els.zoomLabel.textContent = '100%'; }
        const el = document.documentElement;
        try {
            const fs = el.requestFullscreen || el.webkitRequestFullscreen;
            if (fs) { const r = fs.call(el); if (r && r.catch) r.catch(() => {}); }
        } catch (e) { /* iPhone Safari: CSS-only immersive mode */ }
        wake();
        setTimeout(onResize, 120);
    }

    function exitSlideshow() {
        if (!S.slideshow) return;
        S.slideshow = false;
        setAutoplay(false);
        els.app.classList.remove('slideshow', 'idle');
        clearTimeout(idleT);
        try {
            if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitFullscreenElement && document.webkitExitFullscreen) document.webkitExitFullscreen();
        } catch (e) { /* ignore */ }
        setTimeout(onResize, 120);
    }

    function setAutoplay(on) {
        S.autoplay = on;
        els.autoBtn.setAttribute('aria-pressed', String(on));
        els.autoIcon.setAttribute('href', on ? '#i-pause' : '#i-play');
        armAuto();
    }

    function armAuto() {
        clearTimeout(S.autoT);
        if (!S.autoplay) return;
        S.autoT = setTimeout(function tick() {
            if (!S.autoplay) return;
            if (TTS.job && !TTS.job.paused) { S.autoT = setTimeout(tick, 1000); return; }
            if (S.target >= S.total) { setAutoplay(false); toast('انتهى العرض'); return; }
            next();
        }, S.autoSec * 1000);
    }

    /* =========================================================
       EVENTS
    ========================================================= */
    function bindEvents() {
        /* navigation */
        els.prevBtn.addEventListener('click', prev);
        els.nextBtn.addEventListener('click', next);
        els.sidePrev.addEventListener('click', prev);
        els.sideNext.addEventListener('click', next);

        els.pageInput.addEventListener('focus', () => els.pageInput.select());
        els.pageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { go(els.pageInput.value); els.pageInput.blur(); }
            e.stopPropagation();
        });
        els.pageInput.addEventListener('change', () => go(els.pageInput.value));
        els.pageInput.addEventListener('blur', () => { els.pageInput.value = S.target; });

        /* zoom */
        els.zoomIn.addEventListener('click', () => zoomStep(1));
        els.zoomOut.addEventListener('click', () => zoomStep(-1));
        els.zoomLabel.addEventListener('click', () => setZoom(1));

        /* thumbnails */
        els.thumbsBtn.addEventListener('click', () => toggleThumbs());
        els.thumbsClose.addEventListener('click', () => toggleThumbs(false));
        els.thumbsBackdrop.addEventListener('click', () => toggleThumbs(false));
        els.thumbsList.addEventListener('click', (e) => {
            const t = e.target.closest('.thumb');
            if (!t) return;
            go(+t.dataset.n);
            if (window.matchMedia('(max-width: 899px)').matches) toggleThumbs(false);
        });

        /* speech */
        els.pages.addEventListener('click', onTextClick);
        els.readBtn.addEventListener('click', togglePlay);
        els.stopBtn.addEventListener('click', stopSpeech);
        els.speedChip.addEventListener('click', () => {
            const p = CONFIG.RATE_PRESETS;
            setRate(p.find((x) => x > TTS.rate + 0.001) || p[0]);
        });
        els.voiceBtn.addEventListener('click', () => openPanel());
        els.panelClose.addEventListener('click', () => openPanel(false));
        els.voiceSelect.addEventListener('change', () => setVoice(TTS.shown[+els.voiceSelect.value], true));
        els.rateRange.addEventListener('input', () => setRate(+els.rateRange.value));
        els.modeSeg.addEventListener('click', (e) => {
            const b = e.target.closest('button[data-mode]');
            if (b) setMode(b.dataset.mode);
        });
        els.autoNext.addEventListener('change', () => {
            TTS.autoNext = els.autoNext.checked;
            store.set('ye-autonext', TTS.autoNext ? '1' : '0');
        });
        els.testVoice.addEventListener('click', () =>
            startJob([{ text: 'Hello! Welcome to Yazeed English Hub.', idxs: [], page: -1 }]));

        document.addEventListener('pointerdown', (e) => {
            if (!els.voicePanel.classList.contains('open')) return;
            if (els.voicePanel.contains(e.target) || els.voiceBtn.contains(e.target) || els.speedChip.contains(e.target)) return;
            openPanel(false);
        });

        /* slideshow */
        els.slideBtn.addEventListener('click', () => (S.slideshow ? exitSlideshow() : enterSlideshow()));
        els.slideExit.addEventListener('click', exitSlideshow);
        els.autoBtn.addEventListener('click', () => setAutoplay(!S.autoplay));
        els.autoSecChip.addEventListener('click', () => {
            const o = CONFIG.AUTOPLAY_OPTIONS;
            S.autoSec = o.find((x) => x > S.autoSec) || o[0];
            els.autoSecChip.textContent = S.autoSec + 's';
            armAuto();
        });
        document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement && S.slideshow) exitSlideshow(); });
        document.addEventListener('webkitfullscreenchange', () => { if (!document.webkitFullscreenElement && S.slideshow) exitSlideshow(); });
        ['pointermove', 'pointerdown', 'keydown', 'touchstart'].forEach((ev) =>
            document.addEventListener(ev, wake, { passive: true }));

        /* keyboard */
        document.addEventListener('keydown', (e) => {
            const tag = (e.target.tagName || '').toLowerCase();
            if (tag === 'input' || tag === 'select' || tag === 'textarea') return;
            if (e.ctrlKey || e.metaKey || e.altKey) return;
            const onButton = tag === 'button';
            switch (e.key) {
                case 'ArrowRight': case 'PageDown': e.preventDefault(); next(); break;
                case 'ArrowLeft': case 'PageUp': e.preventDefault(); prev(); break;
                case ' ':
                    if (onButton) return;
                    e.preventDefault(); e.shiftKey ? prev() : next(); break;
                case 'Home': e.preventDefault(); go(1, -1); break;
                case 'End': e.preventDefault(); go(S.total, 1); break;
                case '+': case '=': zoomStep(1); break;
                case '-': case '_': zoomStep(-1); break;
                case 'f': case 'F': S.slideshow ? exitSlideshow() : enterSlideshow(); break;
                case 't': case 'T': toggleThumbs(); break;
                case 'r': case 'R': if (!onButton) togglePlay(); break;
                case 'Escape':
                    if (els.voicePanel.classList.contains('open')) openPanel(false);
                    else if (S.slideshow) exitSlideshow();
                    else if (els.workspace.classList.contains('thumbs-open')) toggleThumbs(false);
                    break;
                default: break;
            }
        });

        /* swipe */
        let sx = 0, sy = 0, st = 0, tracking = false;
        els.viewport.addEventListener('touchstart', (e) => {
            tracking = e.touches.length === 1 && (!window.visualViewport || window.visualViewport.scale <= 1.01);
            if (!tracking) return;
            sx = e.touches[0].clientX; sy = e.touches[0].clientY; st = Date.now();
        }, { passive: true });
        els.viewport.addEventListener('touchend', (e) => {
            if (!tracking) return;
            tracking = false;
            const t = e.changedTouches[0];
            const dx = t.clientX - sx, dy = t.clientY - sy;
            const vp = els.viewport;
            const scrollable = vp.scrollWidth > vp.clientWidth + 2;
            if (scrollable) return;
            if (Date.now() - st < 700 && Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
                dx < 0 ? next() : prev();
            }
        }, { passive: true });

        /* resize */
        new ResizeObserver(() => { clearTimeout(resizeT); resizeT = setTimeout(onResize, 150); }).observe(els.viewport);

        /* state screen */
        els.stateRetry.addEventListener('click', () => { if (typeof S.source === 'string' && S.source) openPdf(S.source); });
        els.stateOpen.addEventListener('click', () => els.fileInput.click());
        els.fileInput.addEventListener('change', async () => {
            const f = els.fileInput.files && els.fileInput.files[0];
            if (!f) return;
            const data = new Uint8Array(await f.arrayBuffer());
            els.docTitle.textContent = f.name.replace(/\.pdf$/i, '');
            openPdf({ data });
            els.fileInput.value = '';
        });

        els.brandLogo.addEventListener('error', () => { els.brandLogo.hidden = true; els.brandMark.hidden = false; });
        if (els.brandLogo.complete && !els.brandLogo.naturalWidth) { els.brandLogo.hidden = true; els.brandMark.hidden = false; }
    }

    /* =========================================================
       INIT
    ========================================================= */
    function init() {
        initTheme();

        /* speech settings */
        CONFIG.RATE_PRESETS.forEach((r) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.dataset.rate = r;
            b.textContent = fmtRate(r);
            b.addEventListener('click', () => setRate(r));
            els.rateChips.appendChild(b);
        });
        const savedRate = parseFloat(store.get('ye-rate'));
        setRate(isNaN(savedRate) ? 1 : savedRate, false);
        setMode(store.get('ye-mode') === 'word' ? 'word' : 'sentence', false);
        TTS.autoNext = store.get('ye-autonext') === '1';
        els.autoNext.checked = TTS.autoNext;
        els.autoSecChip.textContent = S.autoSec + 's';

        if (synth) {
            if (!loadVoices()) {
                let tries = 0;
                const t = setInterval(() => { if (loadVoices() || ++tries > 24) clearInterval(t); }, 250);
            }
            if ('onvoiceschanged' in synth) synth.onvoiceschanged = loadVoices;
        } else {
            els.readBtn.disabled = true;
        }

        bindEvents();
        updateNav();
        syncSpeechUI();

        try { setupPdfJs(); }
        catch (e) {
            showState('error', 'تعذّر تحميل مكتبة العرض', 'تحقق من اتصال الإنترنت ثم أعد تحميل الصفحة.');
            return;
        }

        if (!CONFIG.PDF_URL) {
            showState('empty', 'لم يتم تحديد ملف بعد', 'ضع رابط ملف الـ PDF في CONFIG.PDF_URL داخل script.js.');
            return;
        }
        openPdf(CONFIG.PDF_URL);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();