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


function showAccessRemovedModal() {

    if (document.getElementById("yazeedAccessModal")) {
        return;
    }

    const modal =
        document.createElement("div");

    modal.id =
        "yazeedAccessModal";

    modal.innerHTML = `
        <div class="yazeed-access-modal-backdrop">

            <div
                class="yazeed-access-modal-card"
                role="dialog"
                aria-modal="true"
            >

                <div class="yazeed-access-modal-icon">
                    <span>❌</span>
                </div>

                <h2>
                    تم إلغاء الوصول
                </h2>

                <p>
                   تم إلغاء صلاحية الوصول إلى هذا المنتج
                </p>

                <button
                    type="button"
                    id="yazeedAccessModalButton"
                >
                    فهمت
                </button>

            </div>

        </div>
    `;

    const style =
        document.createElement("style");

    style.textContent = `

        #yazeedAccessModal {
            position: fixed;
            inset: 0;
            z-index: 999999;
            font-family: "Tajawal", sans-serif;
        }

        .yazeed-access-modal-backdrop {
            position: absolute;
            inset: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 24px;

            background: rgba(0, 39, 58, 0.55);

            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);

            animation:
                yazeedModalFadeIn
                0.25s ease;
        }

        .yazeed-access-modal-card {
            width: min(100%, 420px);
            box-sizing: border-box;

            padding: 34px 28px 28px;

            text-align: center;
            direction: rtl;

            background: #ffffff;

            border: 1px solid #DCDFD6;
            border-radius: 24px;

            box-shadow:
                0 24px 70px rgba(0, 39, 58, 0.20);

            animation:
                yazeedModalCardIn
                0.3s ease;
        }

        .yazeed-access-modal-icon {
            width: 64px;
            height: 64px;

            margin: 0 auto 20px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background: #eef7fb;
            color: #00689b;

            border: 1px solid #d8edf5;

            font-size: 28px;
            font-weight: 800;
        }

        .yazeed-access-modal-card h2 {
            margin: 0 0 12px;

            color: #00273a;

            font-size: 24px;
            font-weight: 800;
        }

        .yazeed-access-modal-card p {
            margin: 0 auto 26px;

            max-width: 330px;

            color: #6b7280;

            font-size: 15px;
            font-weight: 500;

            line-height: 1.9;
        }

        #yazeedAccessModalButton {
            width: 100%;

            border: none;
            border-radius: 14px;

            padding: 13px 20px;

            background: #00689b;
            color: #ffffff;

            font-family: inherit;

            font-size: 15px;
            font-weight: 700;

            cursor: pointer;

            transition:
                transform 0.2s ease,
                background 0.2s ease,
                box-shadow 0.2s ease;
        }

        #yazeedAccessModalButton:hover {
            background: #00577f;
            transform: translateY(-1px);
        }

        @keyframes yazeedModalFadeIn {

            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }

        }

        @keyframes yazeedModalCardIn {

            from {
                opacity: 0;
                transform:
                    translateY(12px)
                    scale(0.97);
            }

            to {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1);
            }

        }

        @media (max-width: 480px) {

            .yazeed-access-modal-card {
                padding: 30px 22px 22px;
                border-radius: 22px;
            }

            .yazeed-access-modal-card h2 {
                font-size: 22px;
            }

            .yazeed-access-modal-card p {
                font-size: 14px;
            }

        }

    `;

    document.head.appendChild(style);
    document.body.appendChild(modal);

    document
        .getElementById("yazeedAccessModalButton")
        .addEventListener(
            "click",
            function () {

                window.location.href = "/";

            }
        );
}


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

    showAccessRemovedModal();

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