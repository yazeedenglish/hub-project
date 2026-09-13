/* =========================================================
   YAZEED ENGLISH — CUSTOMER ACTIVATION
   FRONTEND ONLY
========================================================= */

const ACCESS_CODES = {
    step: "512731",
    english: "705164",
    trab6: "317826",
    writing: "654209"
};

const COURSE_URLS = {
    step: "/step/",
    english: "/course/",
    trab6: "/trab6/",
    writing: "/writing/"
};

const ACCESS_STORAGE_KEY =
    "yazeed_current_access";

const ACCESS_DURATION =
    90 * 24 * 60 * 60 * 1000;


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
            orderNumberInput.value.trim();

        const accessCode =
            accessCodeInput.value.trim();

        const consent =
            consentInput.checked;


        if (consentError) {
            consentError.style.display =
                "none";
        }

        message.textContent = "";


        /* =================================================
           CHECK ORDER NUMBER
        ================================================= */

        if (!/^\d{9}$/.test(orderNumber)) {

            message.textContent =
                "رقم الطلب أو رمز الوصول غير صحيح";

            return;
        }


        /* =================================================
           CHECK ACCESS CODE
        ================================================= */

        if (!accessCode) {

            message.textContent =
                "يرجى إدخال رمز الوصول.";

            return;
        }


        /* =================================================
           CHECK CONSENT
        ================================================= */

        if (!consent) {

            if (consentError) {
                consentError.style.display =
                    "flex";
            }

            return;
        }


        /* =================================================
           FIND PRODUCT FROM ACCESS CODE
        ================================================= */

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


        if (!selectedProduct) {

            message.textContent =
                "رقم الطلب أو رمز الوصول غير صحيح";

            return;
        }


        /* =================================================
           GET EXISTING ACCESS
        ================================================= */

        let accessData = null;

        const savedAccess =
            localStorage.getItem(
                ACCESS_STORAGE_KEY
            );


        if (savedAccess) {

            try {

                accessData =
                    JSON.parse(savedAccess);

            } catch (error) {

                console.error(
                    "Invalid saved access:",
                    error
                );

                accessData = null;
            }
        }


        /* =================================================
           CREATE NEW ACCESS IF NEEDED
        ================================================= */

        if (
            !accessData ||
            accessData.orderNumber !== orderNumber
        ) {

            accessData = {

                orderNumber:
                    orderNumber,

                products: {},

                consentAccepted:
                    true

            };

        }


        /* =================================================
           MAKE SURE PRODUCTS EXISTS
        ================================================= */

        if (!accessData.products) {
            accessData.products = {};
        }


        /* =================================================
           ADD THE NEW COURSE
           WITHOUT REMOVING OTHER COURSES
        ================================================= */

        accessData.products[selectedProduct] = {

            active: true,

            activatedAt:
                Date.now(),

            expiresAt:
                Date.now() +
                ACCESS_DURATION

        };


        accessData.consentAccepted =
            true;


        /* =================================================
           SAVE ALL ACTIVE COURSES
        ================================================= */

        localStorage.setItem(
            ACCESS_STORAGE_KEY,
            JSON.stringify(accessData)
        );


        /* =================================================
           GO TO ACTIVATED COURSE
        ================================================= */

        window.location.replace(
            COURSE_URLS[selectedProduct]
        );

    }
);