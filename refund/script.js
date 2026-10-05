const form =
    document.getElementById("refundForm");


const orderNumber =
    document.getElementById("orderNumber");


const reason =
    document.getElementById("reason");


const characterCount =
    document.getElementById("characterCount");


const submitButton =
    document.getElementById("submitButton");


const productsError =
    document.getElementById("productsError");


/* -------------------------------- */
/* Order number */
/* -------------------------------- */

orderNumber.addEventListener(
    "input",
    function () {

        this.value =
            this.value
                .replace(/\D/g, "")
                .slice(0, 9);

    }
);


/* -------------------------------- */
/* Character counter */
/* -------------------------------- */

function getCharacterCount(text) {

    return text.trim().length;

}


function updateCharacterCount() {

    const count =
        getCharacterCount(
            reason.value
        );


    characterCount.textContent =
        count + " / 50";


    if (count >= 50) {

        characterCount.classList.add(
            "valid"
        );

    } else {

        characterCount.classList.remove(
            "valid"
        );

    }

}


reason.addEventListener(
    "input",
    updateCharacterCount
);


/* -------------------------------- */
/* Product validation */
/* -------------------------------- */

function getSelectedProducts() {

    return document.querySelectorAll(
        'input[name="المنتجات المراد إرجاعها"]:checked'
    );

}


function validateProducts() {

    const selected =
        getSelectedProducts();


    if (selected.length === 0) {

        productsError.textContent =
            "يرجى اختيار منتج واحد على الأقل.";

        return false;

    }


    productsError.textContent =
        "";

    return true;

}


document
    .querySelectorAll(
        'input[name="المنتجات المراد إرجاعها"]'
    )
    .forEach(function (checkbox) {

        checkbox.addEventListener(
            "change",
            validateProducts
        );

    });


/* -------------------------------- */
/* Form validation */
/* -------------------------------- */

form.addEventListener(
    "submit",
    function (event) {

        const selectedProducts =
            getSelectedProducts();


        const characters =
            getCharacterCount(
                reason.value
            );


        /*
           Product validation
        */

        if (selectedProducts.length === 0) {

            event.preventDefault();

            productsError.textContent =
                "يرجى اختيار منتج واحد على الأقل.";

            document
                .querySelector(".products-grid")
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            return;

        }


        /*
           Character validation
        */

        if (characters < 50) {

            event.preventDefault();

            alert(
                "يرجى كتابة سبب الاسترجاع في 50 حرفًا على الأقل."
            );

            reason.focus();

            return;

        }


        /*
           Order number validation
        */

        if (
            !/^\d{9}$/.test(
                orderNumber.value.trim()
            )
        ) {

            event.preventDefault();

            alert(
                "يرجى إدخال رقم طلب صحيح مكوّن من 9 أرقام."
            );

            orderNumber.focus();

            return;

        }


        /*
           Let Formspree handle
           the actual submission.
        */

        submitButton.disabled = true;

        submitButton.textContent =
            "جارٍ إرسال الطلب...";

    }
);

const refundForm = document.getElementById("refundForm");

const validationPopup =
    document.getElementById("validationPopup");

const validationPopupMessage =
    document.getElementById("validationPopupMessage");

const validationPopupClose =
    document.getElementById("validationPopupClose");


function showValidationPopup(message) {

    validationPopupMessage.textContent = message;

    validationPopup.classList.add("show");

    validationPopup.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeValidationPopup() {

    validationPopup.classList.remove("show");

    validationPopup.setAttribute(
        "aria-hidden",
        "true"
    );

}


validationPopupClose.addEventListener(
    "click",
    closeValidationPopup
);


validationPopup.addEventListener(
    "click",
    function (event) {

        if (
            event.target === validationPopup
        ) {
            closeValidationPopup();
        }

    }
);


refundForm.addEventListener(
    "invalid",
    function (event) {

        event.preventDefault();

    },
    true
);


refundForm.addEventListener(
    "submit",
    function (event) {

        if (!refundForm.checkValidity()) {

            event.preventDefault();

            const invalidField =
                refundForm.querySelector(
                    ":invalid"
                );

            let message =
                "يرجى تعبئة جميع البيانات المطلوبة قبل الإرسال.";

            if (invalidField) {

                if (
                    invalidField.id === "name"
                ) {
                    message =
                        "يرجى كتابة اسمك.";
                }

                else if (
                    invalidField.id === "orderNumber"
                ) {
                    message =
                        "يرجى إدخال رقم الطلب المكوّن من 9 أرقام.";
                }

                else if (
                    invalidField.id === "reason"
                ) {
                    message =
                        "يرجى كتابة سبب الاسترجاع، بحد أدنى 50 حرفًا.";
                }

                else if (
                    invalidField.id === "agreement"
                ) {
                    message =
                        "يرجى الموافقة على الإقرار قبل إرسال الطلب.";
                }

                else if (
                    invalidField.type === "radio"
                ) {
                    message =
                        "يرجى تحديد ما إذا كنت قد بدأت باستخدام المنتج.";
                }

            }

            showValidationPopup(message);

            return;
        }

    }
);


/* -------------------------------- */
/* Initial state */
/* -------------------------------- */

updateCharacterCount();