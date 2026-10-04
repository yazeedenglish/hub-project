/* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_URL =
    "https://ozhhgbbkdyuxtsffcsbb.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_K0fUOxqBNfZ8Eo1--6YJoQ_92xLfygr";

/* =========================================================
   YAZEED ENGLISH — FRONTEND COURSE ACCESS
========================================================= */

const ACCESS_CODES = {
    step: "512731",
    english: "705164",
    trab6: "317826",
    writing: "654209"
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

async function isBlacklisted(orderNumber, courseKey) {

    try {

        const response =
            await fetch(
                SUPABASE_URL +
                "/rest/v1/rpc/is_blacklisted",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",

                        "apikey":
                            SUPABASE_KEY,

                        "Authorization":
                            "Bearer " +
                            SUPABASE_KEY
                    },

                    body: JSON.stringify({
                        p_order_number:
                            orderNumber,

                        p_product:
                            courseKey
                    })
                }
            );


        if (!response.ok) {

            throw new Error(
                "Supabase blacklist check failed"
            );

        }


        return await response.json();

    } catch (error) {

        console.error(
            "Blacklist check error:",
            error
        );

        /*
           If Supabase is temporarily unavailable,
           keep the existing local access working.
        */

        return false;
    }
}


/* =========================================================
   CHECK COURSE ACCESS
========================================================= */

async function checkCourseAccess(courseKey) {

    const access =
        getCurrentAccess();

    if (!access) {

        window.location.href =
            "/activate/";

        return false;
    }

    if (
    await isBlacklisted(
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

async function initializeCourseAccess(courseKey) {

    const hasAccess =
    await checkCourseAccess(courseKey);

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

    setInterval(async function () {

    await checkCourseAccess(courseKey);

}, 5000);

}