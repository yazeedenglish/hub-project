/* =========================================================
   YAZEED ENGLISH — CUSTOMER ACTIVATION
   FRONTEND ONLY
========================================================= */


/* =========================================================
   ACCESS CODES
========================================================= */

const ACCESS_CODES = {

    step: "111111",

    english: "222222",

    trab6: "333333",

    writing: "444444"

};


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
   SETTINGS
========================================================= */

const ACCESS_STORAGE_KEY =
    "yazeed_current_access";


const ACCESS_DURATION =
    30 * 24 * 60 * 60 * 1000;


/* =========================================================
   ELEMENTS
========================================================= */

const form =
    document.getElementById("accessForm");


const message =
    document.getElementById("message");


const orderNumberInput =
    document.getElementById("orderNumber");


const accessCodeInput =
    document.getElementById("accessCode");


const consentInput =
    document.getElementById("consent");


const consentError =
    document.getElementById("consentError");


/* =========================================================
   FORM SUBMIT
========================================================= */

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const orderNumber =
            orderNumberInput
                .value
                .trim();


        const accessCode =
            accessCodeInput
                .value
                .trim();


        const consent =
            consentInput.checked;


        /* -----------------------------------------
           HIDE OLD ERRORS
        ----------------------------------------- */

        if (consentError) {

            consentError.style.display =
                "none";

        }


        message.textContent = "";


        /* -----------------------------------------
           ORDER NUMBER
           EXACTLY 9 DIGITS
        ----------------------------------------- */

        if (
            !/^\d{9}$/.test(
                orderNumber
            )
        ) {

            message.textContent =
                "رقم الطلب يجب أن يتكون من 9 أرقام.";

            return;
        }


        /* -----------------------------------------
           ACCESS CODE
        ----------------------------------------- */

        if (!accessCode) {

            message.textContent =
                "يرجى إدخال رمز الوصول.";

            return;
        }


        /* -----------------------------------------
           CONSENT
        ----------------------------------------- */

        if (!consent) {

            if (consentError) {

                consentError.style.display =
                    "flex";

            }

            return;
        }


        /* -----------------------------------------
           FIND PRODUCT
        ----------------------------------------- */

        let selectedProduct = null;


        for (
            const product in ACCESS_CODES
        ) {

            if (
                accessCode ===
                ACCESS_CODES[product]
            ) {

                selectedProduct =
                    product;

                break;

            }

        }


        /* -----------------------------------------
           INVALID ACCESS CODE
        ----------------------------------------- */

        if (!selectedProduct) {

            message.textContent =
                "رمز الوصول غير صحيح.";

            return;
        }


        /* -----------------------------------------
           CREATE ACCESS SESSION
        ----------------------------------------- */

        const accessData = {

            orderNumber:
                orderNumber,

            product:
                selectedProduct,

            consentAccepted:
                true,

            activatedAt:
                Date.now(),

            expiresAt:
                Date.now() +
                ACCESS_DURATION

        };


        /* -----------------------------------------
           SAVE SESSION
        ----------------------------------------- */

        localStorage.setItem(

            ACCESS_STORAGE_KEY,

            JSON.stringify(
                accessData
            )

        );


        /* -----------------------------------------
           REDIRECT
        ----------------------------------------- */

        window.location.replace(

            COURSE_URLS[
                selectedProduct
            ]

        );

    }
);