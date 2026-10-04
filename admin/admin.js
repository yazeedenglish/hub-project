/* =========================================================
   YAZEED ENGLISH — ADMIN PANEL
   SUPABASE
========================================================= */


/* =========================================================
   SUPABASE CONFIG
========================================================= */

const SUPABASE_URL =
    "https://ozhhgbbkdyuxtsffcsbb.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_K0fUOxqBNfZ8Eo1--6YJoQ_92xLfygr";


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


/* =========================================================
   ELEMENTS
========================================================= */

const loginScreen =
    document.getElementById("loginScreen");

const adminScreen =
    document.getElementById("adminScreen");

const loginForm =
    document.getElementById("loginForm");

const loginMessage =
    document.getElementById("loginMessage");

const logoutButton =
    document.getElementById("logoutButton");

const blacklistForm =
    document.getElementById("blacklistForm");

const blacklistMessage =
    document.getElementById("blacklistMessage");

const refreshButton =
    document.getElementById("refreshButton");

const tableWrapper =
    document.getElementById("tableWrapper");

const orderNumberInput =
    document.getElementById("orderNumber");

const productInput =
    document.getElementById("product");

const reasonInput =
    document.getElementById("reason");


/* =========================================================
   PRODUCT NAMES
========================================================= */

const PRODUCT_NAMES = {

    step:
        "STEP",

    english:
        "English",

    trab6:
        "Trab6",

    writing:
        "Writing"

};


/* =========================================================
   SHOW LOGIN
========================================================= */

function showLogin() {

    loginScreen.style.display =
        "flex";

    adminScreen.style.display =
        "none";
}


/* =========================================================
   SHOW ADMIN
========================================================= */

function showAdmin() {

    loginScreen.style.display =
        "none";

    adminScreen.style.display =
        "block";

}


/* =========================================================
   CHECK CURRENT SESSION
========================================================= */

async function checkSession() {

    const {
        data
    } =
        await supabaseClient.auth.getSession();


    if (data.session) {

        showAdmin();

        loadBlacklist();

    } else {

        showLogin();

    }

}


/* =========================================================
   LOGIN
========================================================= */

loginForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        loginMessage.textContent =
            "";


        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const password =
            document
                .getElementById("password")
                .value;


        const {
            error
        } =
            await supabaseClient.auth.signInWithPassword({

                email:
                    email,

                password:
                    password

            });


        if (error) {

            loginMessage.textContent =
                "البريد الإلكتروني أو كلمة المرور غير صحيحة.";

            return;
        }


        loginForm.reset();

        showAdmin();

        loadBlacklist();

    }
);


/* =========================================================
   LOGOUT
========================================================= */

logoutButton.addEventListener(
    "click",
    async function () {

        await supabaseClient.auth.signOut();

        showLogin();

    }
);


/* =========================================================
   ADD BLACKLIST
========================================================= */

blacklistForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        blacklistMessage.textContent =
            "";


        const orderNumber =
            orderNumberInput.value.trim();

        const product =
            productInput.value;

        const reason =
            reasonInput.value.trim();


        /* =================================================
           CHECK ORDER NUMBER
        ================================================= */

        if (!/^\d{9}$/.test(orderNumber)) {

            blacklistMessage.textContent =
                "رقم الطلب يجب أن يتكون من 9 أرقام.";

            return;
        }


        /* =================================================
           CHECK PRODUCT
        ================================================= */

        if (!product) {

            blacklistMessage.textContent =
                "يرجى اختيار المنتج.";

            return;
        }


        /* =================================================
           INSERT
        ================================================= */

        const {
            error
        } =
            await supabaseClient
                .from("blacklist")
                .insert({

                    order_number:
                        orderNumber,

                    product:
                        product,

                    reason:
                        reason || null

                });


        if (error) {

            if (
                error.code ===
                "23505"
            ) {

                blacklistMessage.textContent =
                    "هذا المنتج محظور بالفعل لهذا الطلب.";

            } else {

                console.error(
                    error
                );

                blacklistMessage.textContent =
                    "حدث خطأ أثناء إضافة الإلغاء.";

            }

            return;
        }


        blacklistMessage.textContent =
            "تم إلغاء الوصول بنجاح.";


        blacklistForm.reset();


        loadBlacklist();

    }
);


/* =========================================================
   LOAD BLACKLIST
========================================================= */

async function loadBlacklist() {

    tableWrapper.innerHTML =
        `
        <div class="loading">
            جاري تحميل البيانات...
        </div>
        `;


    const {
        data,
        error
    } =
        await supabaseClient
            .from("blacklist")
            .select("*")
            .order(
                "created_at",
                {
                    ascending: false
                }
            );


    if (error) {

        console.error(
            error
        );

        tableWrapper.innerHTML =
            `
            <div class="error-box">
                تعذر تحميل البيانات.
            </div>
            `;

        return;
    }


    if (!data || data.length === 0) {

        tableWrapper.innerHTML =
            `
            <div class="empty-box">
                لا توجد حالات وصول ملغاة حاليًا.
            </div>
            `;

        return;
    }


    renderBlacklist(data);

}


/* =========================================================
   RENDER BLACKLIST
========================================================= */

function renderBlacklist(records) {

    let html = `

        <table>

            <thead>

                <tr>

                    <th>
                        رقم الطلب
                    </th>

                    <th>
                        المنتج
                    </th>

                    <th>
                        السبب
                    </th>

                    <th>
                        التاريخ
                    </th>

                    <th>
                        الإجراء
                    </th>

                </tr>

            </thead>

            <tbody>

    `;


    records.forEach(function (record) {


        const productName =
            PRODUCT_NAMES[record.product] ||
            record.product;


        const date =
            new Date(
                record.created_at
            ).toLocaleString(
                "ar-SA",
                {
                    dateStyle:
                        "medium",
                    timeStyle:
                        "short"
                }
            );


        html += `

            <tr>

                <td class="order-number">
                    ${escapeHtml(
                        record.order_number
                    )}
                </td>

                <td>

                    <span class="product-badge">
                        ${escapeHtml(
                            productName
                        )}
                    </span>

                </td>

                <td>
                    ${escapeHtml(
                        record.reason ||
                        "—"
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        date
                    )}
                </td>

                <td>

                    <button
                        type="button"
                        class="remove-button"
                        data-id="${record.id}"
                    >
                        إلغاء الحظر
                    </button>

                </td>

            </tr>

        `;

    });


    html += `

            </tbody>

        </table>

    `;


    tableWrapper.innerHTML =
        html;


    document
        .querySelectorAll(
            ".remove-button"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        removeBlacklist(
                            button.dataset.id
                        );

                    }
                );

            }
        );

}


/* =========================================================
   REMOVE BLACKLIST
========================================================= */

async function removeBlacklist(id) {

    const confirmed =
        confirm(
            "هل تريد إلغاء حظر هذا المنتج؟"
        );


    if (!confirmed) {
        return;
    }


    const {
        error
    } =
        await supabaseClient
            .from("blacklist")
            .delete()
            .eq(
                "id",
                id
            );


    if (error) {

        console.error(
            error
        );

        alert(
            "حدث خطأ أثناء إلغاء الحظر."
        );

        return;
    }


    loadBlacklist();

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHtml(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   REFRESH
========================================================= */

refreshButton.addEventListener(
    "click",
    function () {

        loadBlacklist();

    }
);


/* =========================================================
   START
========================================================= */

checkSession();