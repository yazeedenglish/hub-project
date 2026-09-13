/* =========================================================
   YAZEED ENGLISH — FRONTEND COURSE ACCESS
========================================================= */

const ACCESS_CODES = {
    step: "111111",
    english: "222222",
    trab6: "381625",
    writing: "927461"
};

const ACCESS_STORAGE_KEY =
    "yazeed_current_access";

const ACCESS_DURATION =
    30 * 24 * 60 * 60 * 1000;

const COURSE_URLS = {
    step: "/step/",
    english: "/course/",
    trab6: "/trab6/",
    writing: "/writing/"
};


/* =========================================================
   GET SAVED ACCESS
========================================================= */

function getCurrentAccess() {

    const savedAccess =
        localStorage.getItem(ACCESS_STORAGE_KEY);

    if (!savedAccess) {
        return null;
    }

    try {

        const access =
            JSON.parse(savedAccess);

        /*
           Migrate old single-product format
           to the new multi-product format.
        */

        if (
            access.product &&
            !access.products
        ) {

            const oldProduct =
                access.product;

            access.products = {};

            access.products[oldProduct] = {
                active: true,
                expiresAt:
                    access.expiresAt ||
                    Date.now() + ACCESS_DURATION
            };

            delete access.product;
            delete access.expiresAt;

            localStorage.setItem(
                ACCESS_STORAGE_KEY,
                JSON.stringify(access)
            );
        }

        if (!access.products) {
            access.products = {};
        }

        return access;

    } catch (error) {

        console.error(
            "Invalid access data:",
            error
        );

        localStorage.removeItem(
            ACCESS_STORAGE_KEY
        );

        return null;
    }
}


/* =========================================================
   CHECK COURSE ACCESS
========================================================= */

function checkCourseAccess(courseKey) {

    const access =
        getCurrentAccess();

    if (!access) {

        window.location.href =
            "/activate/";

        return false;
    }

    const product =
        access.products?.[courseKey];

    if (
        !product ||
        product.active !== true
    ) {

        window.location.href =
            "/activate/";

        return false;
    }

    if (
        !product.expiresAt ||
        Date.now() > product.expiresAt
    ) {

        /*
           Remove only the expired course.
           Other active courses remain untouched.
        */

        delete access.products[courseKey];

        localStorage.setItem(
            ACCESS_STORAGE_KEY,
            JSON.stringify(access)
        );

        alert(
            "انتهت صلاحية الوصول إلى هذه الدورة. يرجى التفعيل مرة أخرى."
        );

        window.location.href =
            "/activate/";

        return false;
    }

    return true;
}


/* =========================================================
   INITIALIZE COURSE ACCESS
========================================================= */

function initializeCourseAccess(courseKey) {

    const hasAccess =
        checkCourseAccess(courseKey);

    if (!hasAccess) {
        return;
    }

    console.log(
        "Course access granted:",
        courseKey
    );
}