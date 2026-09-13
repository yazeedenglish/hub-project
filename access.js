/* =========================================================
   YAZEED ENGLISH — FRONTEND COURSE ACCESS
========================================================= */


/* =========================================================
   ACCESS CODES
   غيّر الأكواد هنا إلى أكوادك الحقيقية
========================================================= */

const ACCESS_CODES = {

    step: "111111",

    english: "222222",

    trab6: "333333",

    writing: "444444"

};


/* =========================================================
   SETTINGS
========================================================= */

const ACCESS_STORAGE_KEY =
    "yazeed_current_access";


const ACCESS_DURATION =
    30 * 24 * 60 * 60 * 1000;


/* =========================================================
   COURSE URLS
========================================================= */

const COURSE_URLS = {

    step: "/step/",

    english: "/course/",

    trab6: "/trab6/",

    writing: "/writing/"

};


/* =========================================================
   CHECK COURSE ACCESS
========================================================= */

function checkCourseAccess(courseKey) {

    const savedAccess =
        localStorage.getItem(
            ACCESS_STORAGE_KEY
        );


    /* -----------------------------------------
       NO ACCESS
    ----------------------------------------- */

    if (!savedAccess) {

        window.location.href =
            "/activate/";

        return false;
    }


    let access;


    /* -----------------------------------------
       READ ACCESS
    ----------------------------------------- */

    try {

        access =
            JSON.parse(savedAccess);

    } catch (error) {

        console.error(
            "Invalid access data:",
            error
        );

        localStorage.removeItem(
            ACCESS_STORAGE_KEY
        );

        window.location.href =
            "/activate/";

        return false;
    }


    /* -----------------------------------------
       CHECK PRODUCT
    ----------------------------------------- */

    if (
        access.product !== courseKey
    ) {

        window.location.href =
            "/activate/";

        return false;
    }


    /* -----------------------------------------
       CHECK EXPIRATION
    ----------------------------------------- */

    if (
        !access.expiresAt ||
        Date.now() > access.expiresAt
    ) {

        localStorage.removeItem(
            ACCESS_STORAGE_KEY
        );

        alert(
            "انتهت صلاحية الوصول. يرجى التفعيل مرة أخرى."
        );

        window.location.href =
            "/activate/";

        return false;
    }


    /* -----------------------------------------
       ACCESS VALID
    ----------------------------------------- */

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


    /*
       Course access is valid.
       The page can continue loading normally.
    */

    console.log(
        "Course access granted:",
        courseKey
    );
}


/* =========================================================
   GET CURRENT ACCESS
========================================================= */

function getCurrentAccess() {

    const savedAccess =
        localStorage.getItem(
            ACCESS_STORAGE_KEY
        );


    if (!savedAccess) {
        return null;
    }


    try {

        return JSON.parse(
            savedAccess
        );

    } catch (error) {

        return null;

    }
}