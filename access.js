/* =========================================================
   YAZEED ENGLISH — FRONTEND COURSE ACCESS
========================================================= */

const ACCESS_CODES = {
    step: "512731",
    english: "705164",
    trab6: "317826",
    writing: "654209"
};

const BLACKLISTED_ACCESS = {
    "123456788": ["step"]
};

const ACCESS_STORAGE_KEY =
    "yazeed_current_access";

const ACCESS_DURATION =
    90 * 24 * 60 * 60 * 1000;

const COURSE_URLS = {
    step: "/step/",
    english: "/english/",
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

function isBlacklisted(orderNumber, courseKey) {

    const blacklistedProducts =
        BLACKLISTED_ACCESS[orderNumber];

    if (!blacklistedProducts) {
        return false;
    }

    return blacklistedProducts.includes(courseKey);
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

    if (
    isBlacklisted(
        access.orderNumber,
        courseKey
    )
) {

    delete access.products[courseKey];

    localStorage.setItem(
        ACCESS_STORAGE_KEY,
        JSON.stringify(access)
    );

    alert(
        "تم إلغاء الوصول إلى هذا المنتج"
    );

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


    /* =====================================================
       CONTINUOUS ACCESS MONITOR

       Re-check access every 5 seconds.
       This detects blacklist changes while
       the customer is already inside the course.
    ====================================================== */

    setInterval(function () {

        checkCourseAccess(courseKey);

    }, 5000);

}