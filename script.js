/* =========================================================
   YAZEED ENGLISH HUB
========================================================= */

const STORE_URL = "https://yazeedenglish.com";

/* =========================================================
   COURSES
========================================================= */

const COURSES = {

    step: {
        key: "step",

        title: "دورة اختبار ستيب",

        description:
            "تعلّم أهم المهارات والاستراتيجيات للوصول الى درجة أحلامك",

        url: "/step",

        purchaseUrl:
            "https://yazeedenglish.com/ar/%D9%83%D8%AA%D8%A7%D8%A8-%D8%A7%D8%AE%D8%AA%D8%A8%D8%A7%D8%B1-%D8%B3%D8%AA%D9%8A%D8%A8-step/p788306677",

        image:
            "images/step.png",

        fallback:
            "STEP"
    },


    english: {
        key: "english",

        title: "دليل الانجليزية الشامل",

        description:
            "رحلتك من الصفر الى الاحتراف في اللغة الانجليزية",

        url: "/course",

        purchaseUrl:
            "https://yazeedenglish.com/ar/%D9%83%D8%AA%D8%A7%D8%A8-%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9-%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84/p295866233",

        image:
            "images/english.png",

        fallback:
            "EN"
    },


    trab6: {
        key: "trab6",

        title: "ترابط الكلمات",

        description:
            "طريقة مبتكرة وممتعة لحفظ الكلمات الانجليزية",

        url: "/trab6",

        purchaseUrl:
            "https://yazeedenglish.com/ar/%D9%83%D8%AA%D8%A7%D8%A8-%D8%AA%D8%B1%D8%A7%D8%A8%D8%B7-%D8%A7%D9%84%D9%83%D9%84%D9%85%D8%A7%D8%AA/p331712928",

        image:
            "images/trab6.png",

        fallback:
            "ترابط الكلمات"
    },


    writing: {
        key: "writing",

        title: "تعليم الكتابة بخط اليد",

        description:
            "تعلّم مهارة الكتابة الإنجليزية بخط اليد بأسلوب سهل وعملي",

        url: "/writing",

        purchaseUrl:
            STORE_URL,

        image:
            "images/writing.png",

        fallback:
            "قريبًا"
    }

};

/* =========================================================
   IMAGE
========================================================= */

function createCourseImage(course) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "course-image-wrap";


    const image =
        document.createElement("img");

    image.className =
        "course-image";

    image.src =
        course.image;

    image.alt =
        course.title;

    image.loading =
        "lazy";


    image.onerror =
        () => {

            wrapper.innerHTML = "";

            const fallback =
                document.createElement(
                    "div"
                );

            fallback.className =
                "course-image-placeholder";

            fallback.textContent =
                course.fallback;

            wrapper.appendChild(
                fallback
            );

        };


    wrapper.appendChild(
        image
    );


    return wrapper;

}

function renderCourses() {

    const courseGrid =
        document.getElementById("courseGrid");

    courseGrid.innerHTML = "";

    /* -----------------------------------------
       GET SAVED ACCESS
    ----------------------------------------- */

    const savedAccess =
        localStorage.getItem(
            "yazeed_current_access"
        );

    let access = null;

    if (savedAccess) {

        try {
            access =
                JSON.parse(savedAccess);

        } catch (error) {

            console.error(
                "Invalid access data:",
                error
            );

            localStorage.removeItem(
                "yazeed_current_access"
            );
        }
    }

    /* -----------------------------------------
       RENDER COURSES
    ----------------------------------------- */

    Object.values(COURSES).forEach(
        function (course, index) {

            const isActive =
                access &&
                access.products &&
                access.products[course.key] === true;

            const card =
                document.createElement("article");

            card.className =
                "course-card";

            card.style.animationDelay =
                `${index * 70}ms`;

            /* -----------------------------------------
               IMAGE
            ----------------------------------------- */

            const imageWrap =
                createCourseImage(course);

            /* -----------------------------------------
               LOCK
            ----------------------------------------- */

            if (!isActive) {

                const overlay =
                    document.createElement("div");

                overlay.className =
                    "course-lock-overlay";

                const lock =
                    document.createElement("div");

                lock.className =
                    "course-lock";

                lock.textContent =
                    "🔒";

                overlay.appendChild(lock);

                imageWrap.appendChild(
                    overlay
                );
            }

            /* -----------------------------------------
               BODY
            ----------------------------------------- */

            const body =
                document.createElement("div");

            body.className =
                "course-body";

            const status =
                document.createElement("div");

            status.className =
                "course-status";

            const title =
                document.createElement("h3");

            title.textContent =
                course.title;

            const description =
                document.createElement("p");

            description.textContent =
                course.description;

            const actions =
                document.createElement("div");

            actions.className =
                "course-actions";

            /* -----------------------------------------
               ACTIVE COURSE
            ----------------------------------------- */

            if (isActive) {

                status.classList.add(
                    "active"
                );

                status.innerHTML =
                    "✓ <span>الوصول مفعّل</span>";

                const enter =
                    document.createElement("a");

                enter.className =
                    "course-btn primary";

                enter.href =
                    course.url;

                enter.textContent =
                    "دخول";

                actions.appendChild(
                    enter
                );

            }

            /* -----------------------------------------
               LOCKED COURSE
            ----------------------------------------- */

            else {

                status.innerHTML =
                    "🔒 <span>غير مفعّلة</span>";

                const activate =
                    document.createElement("a");

                activate.className =
                    "course-btn secondary";

                activate.href =
                    "/activate/";

                activate.textContent =
                    "تفعيل الوصول";

                const purchase =
                    document.createElement("a");

                purchase.className =
                    "course-btn primary";

                purchase.href =
                    course.purchaseUrl;

                purchase.target =
                    "_blank";

                purchase.rel =
                    "noopener noreferrer";

                purchase.innerHTML =
                    "اشتر الآن <span>↗</span>";

                actions.appendChild(
                    activate
                );

                actions.appendChild(
                    purchase
                );
            }

            /* -----------------------------------------
               APPEND
            ----------------------------------------- */

            body.appendChild(status);

            body.appendChild(title);

            body.appendChild(description);

            body.appendChild(actions);

            card.appendChild(imageWrap);

            card.appendChild(body);

            courseGrid.appendChild(card);
        }
    );
}

/* =========================================================
   THEME
========================================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


function applyTheme() {

    const theme =
        localStorage.getItem(
            "theme"
        );


    if (
        theme ===
        "dark"
    ) {

        document.body.classList.add(
            "dark"
        );

        themeToggle.textContent =
            "☀️";

    } else {

        document.body.classList.remove(
            "dark"
        );

        themeToggle.textContent =
            "🌙";

    }

}


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const isDark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "theme",
            isDark
                ? "dark"
                : "light"
        );


        themeToggle.textContent =
            isDark
                ? "☀️"
                : "🌙";

    }
);


/* =========================================================
   START
========================================================= */

applyTheme();

renderCourses();


window.addEventListener(
    "pageshow",
    renderCourses
);