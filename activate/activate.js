/* =========================================================
   YAZEED ENGLISH — CUSTOMER ACTIVATION
   FRONTEND ONLY
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
           CHECK BLACKLIST
        ================================================= */

        if (
            BLACKLISTED_ACCESS[orderNumber] &&
            BLACKLISTED_ACCESS[orderNumber].includes(
                selectedProduct
            )
        ) {

            message.textContent =
                "تم إلغاء صلاحية الوصول الى المنتج";

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
                    "Invalid access data:",
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