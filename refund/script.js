const FORMSPREE_ENDPOINT =
    "https://formspree.io/f/meaoyybk";


const form =
    document.getElementById("refundForm");

const nameInput =
    document.getElementById("name");

const orderNumberInput =
    document.getElementById("orderNumber");

const reasonInput =
    document.getElementById("reason");

const wordCount =
    document.getElementById("wordCount");

const agreement =
    document.getElementById("agreement");

const submitButton =
    document.getElementById("submitButton");

const successModal =
    document.getElementById("successModal");

const closeModal =
    document.getElementById("closeModal");


/* -------------------------------- */
/* Word counter */
/* -------------------------------- */

function getWordCount(text) {

    return text
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .length;

}


function updateWordCount() {

    const count =
        getWordCount(
            reasonInput.value
        );

    wordCount.textContent =
        count + " / 50";

    if (count >= 50) {

        wordCount.style.color =
            "#00689b";

    } else {

        wordCount.style.color =
            "#6b7280";

    }

}


reasonInput.addEventListener(
    "input",
    updateWordCount
);


/* -------------------------------- */
/* Order number */
/* -------------------------------- */

orderNumberInput.addEventListener(
    "input",
    function () {

        this.value =
            this.value
                .replace(/\D/g, "")
                .slice(0, 9);

    }
);


/* -------------------------------- */
/* Products */
/* -------------------------------- */

function getSelectedProducts() {

    return Array.from(
        document.querySelectorAll(
            'input[name="products"]:checked'
        )
    ).map(function (input) {

        return input.value;

    });

}


/* -------------------------------- */
/* Validation */
/* -------------------------------- */

function showError(message) {

    alert(message);

}


function validateForm() {

    const name =
        nameInput.value.trim();

    const orderNumber =
        orderNumberInput.value.trim();

    const reason =
        reasonInput.value.trim();

    const products =
        getSelectedProducts();

    const usageStatus =
        document.querySelector(
            'input[name="usage_status"]:checked'
        );

    const words =
        getWordCount(reason);


    if (!name) {

        showError(
            "يرجى كتابة الاسم."
        );

        nameInput.focus();

        return false;
    }


    if (!/^\d{9}$/.test(orderNumber)) {

        showError(
            "يرجى إدخال رقم طلب صحيح مكوّن من 9 أرقام."
        );

        orderNumberInput.focus();

        return false;
    }


    if (products.length === 0) {

        showError(
            "يرجى اختيار منتج واحد على الأقل."
        );

        return false;
    }


    if (words < 50) {

        showError(
            "يرجى كتابة سبب الاسترجاع في 50 كلمة على الأقل."
        );

        reasonInput.focus();

        return false;
    }


    if (!usageStatus) {

        showError(
            "يرجى تحديد ما إذا كنت قد بدأت باستخدام المنتج."
        );

        return false;
    }


    if (!agreement.checked) {

        showError(
            "يرجى الإقرار بأن المعلومات المقدمة صحيحة."
        );

        return false;
    }


    return true;

}


/* -------------------------------- */
/* Submit */
/* -------------------------------- */

form.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        if (!validateForm()) {
            return;
        }


        submitButton.disabled = true;

        submitButton.textContent =
            "جارٍ إرسال الطلب...";


        const products =
            getSelectedProducts();

        const usageStatus =
            document.querySelector(
                'input[name="usage_status"]:checked'
            );


        const formData =
            new FormData();


        formData.append(
            "name",
            nameInput.value.trim()
        );


        formData.append(
            "order_number",
            orderNumberInput.value.trim()
        );


        formData.append(
            "products",
            products.join("، ")
        );


        formData.append(
            "reason",
            reasonInput.value.trim()
        );


        formData.append(
            "usage_status",
            usageStatus.value
        );


        formData.append(
            "agreement",
            "أقر بأن المعلومات المقدمة صحيحة"
        );


        formData.append(
            "_subject",
            "طلب استرجاع جديد - Yazeed English"
        );


        try {

            const response =
                await fetch(
                    FORMSPREE_ENDPOINT,
                    {
                        method: "POST",

                        body: formData,

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "Submission failed"
                );

            }


            form.reset();

            updateWordCount();

            successModal.classList.add(
                "show"
            );

            successModal.setAttribute(
                "aria-hidden",
                "false"
            );

        }

        catch (error) {

            console.error(
                "Refund submission error:",
                error
            );

            showError(
                "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى."
            );

        }

        finally {

            submitButton.disabled = false;

            submitButton.textContent =
                "إرسال طلب الاسترجاع";

        }

    }
);


/* -------------------------------- */
/* Success modal */
/* -------------------------------- */

closeModal.addEventListener(
    "click",
    function () {

        successModal.classList.remove(
            "show"
        );

        successModal.setAttribute(
            "aria-hidden",
            "true"
        );

        window.location.href = "/";

    }
);


/* Close by clicking backdrop */

document
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        function () {

            successModal.classList.remove(
                "show"
            );

            successModal.setAttribute(
                "aria-hidden",
                "true"
            );

        }
    );


updateWordCount();