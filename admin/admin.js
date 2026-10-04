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

const reasonInput =
    document.getElementById("reason");

const productCheckboxes =
    document.querySelectorAll(
        ".product-checkbox"
    );

const selectAllButton =
    document.getElementById(
        "selectAllButton"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const clearSearchButton =
    document.getElementById(
        "clearSearchButton"
    );

const searchResultCount =
    document.getElementById(
        "searchResultCount"
    );

const blockedCustomersCount =
    document.getElementById(
        "blockedCustomersCount"
    );

const blockedRecordsCount =
    document.getElementById(
        "blockedRecordsCount"
    );

const stepCount =
    document.getElementById(
        "stepCount"
    );

const englishCount =
    document.getElementById(
        "englishCount"
    );


/* =========================================================
   DATA
========================================================= */

let blacklistRecords = [];


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
   SELECT ALL PRODUCTS
========================================================= */

function updateSelectAllButton() {

    const allSelected =
        Array.from(
            productCheckboxes
        ).every(
            function (checkbox) {

                return checkbox.checked;

            }
        );


    if (allSelected) {

        selectAllButton.textContent =
            "إلغاء تحديد الكل";

    } else {

        selectAllButton.textContent =
            "تحديد الكل";

    }

}


selectAllButton.addEventListener(
    "click",
    function () {

        const allSelected =
            Array.from(
                productCheckboxes
            ).every(
                function (checkbox) {

                    return checkbox.checked;

                }
            );


        productCheckboxes.forEach(
            function (checkbox) {

                checkbox.checked =
                    !allSelected;

            }
        );


        updateSelectAllButton();

    }
);


productCheckboxes.forEach(
    function (checkbox) {

        checkbox.addEventListener(
            "change",
            updateSelectAllButton
        );

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

        const reason =
            reasonInput.value.trim();


        const selectedProducts =
            Array.from(
                productCheckboxes
            )
            .filter(
                function (checkbox) {

                    return checkbox.checked;

                }
            )
            .map(
                function (checkbox) {

                    return checkbox.value;

                }
            );


        /* =================================================
           CHECK ORDER NUMBER
        ================================================= */

        if (!/^\d{9}$/.test(orderNumber)) {

            blacklistMessage.textContent =
                "رقم الطلب يجب أن يتكون من 9 أرقام.";

            return;

        }


        /* =================================================
           CHECK PRODUCTS
        ================================================= */

        if (
            selectedProducts.length ===
            0
        ) {

            blacklistMessage.textContent =
                "يرجى اختيار منتج واحد على الأقل.";

            return;

        }


        /* =================================================
           CHECK EXISTING BLACKLIST
        ================================================= */

        const {
            data: existingRecords,
            error: existingError
        } =
            await supabaseClient
                .from("blacklist")
                .select("product")
                .eq(
                    "order_number",
                    orderNumber
                );


        if (existingError) {

            console.error(
                existingError
            );

            blacklistMessage.textContent =
                "حدث خطأ أثناء التحقق من البيانات.";

            return;

        }


        const existingProducts =
            (existingRecords || [])
                .map(
                    function (record) {

                        return record.product;

                    }
                );


        const productsToAdd =
            selectedProducts.filter(
                function (product) {

                    return !existingProducts.includes(
                        product
                    );

                }
            );


        const alreadyBlacklisted =
            selectedProducts.filter(
                function (product) {

                    return existingProducts.includes(
                        product
                    );

                }
            );


        /* =================================================
           NOTHING NEW TO ADD
        ================================================= */

        if (
            productsToAdd.length ===
            0
        ) {

            blacklistMessage.textContent =
                "المنتجات المحددة محظورة بالفعل لهذا الطلب.";

            return;

        }


        /* =================================================
           PREPARE INSERT
        ================================================= */

        const recordsToInsert =
            productsToAdd.map(
                function (product) {

                    return {

                        order_number:
                            orderNumber,

                        product:
                            product,

                        reason:
                            reason || null

                    };

                }
            );


        /* =================================================
           INSERT
        ================================================= */

        const {
            error
        } =
            await supabaseClient
                .from("blacklist")
                .insert(
                    recordsToInsert
                );


        if (error) {

            console.error(
                error
            );

            blacklistMessage.textContent =
                "حدث خطأ أثناء إضافة الإلغاء.";

            return;

        }


        /* =================================================
           SUCCESS MESSAGE
        ================================================= */

        const addedNames =
            productsToAdd
                .map(
                    function (product) {

                        return PRODUCT_NAMES[product];

                    }
                )
                .join("، ");


        if (
            alreadyBlacklisted.length >
            0
        ) {

            blacklistMessage.textContent =
                "تم إلغاء الوصول إلى " +
                addedNames +
                ". بعض المنتجات كانت محظورة بالفعل.";

        } else {

            blacklistMessage.textContent =
                "تم إلغاء الوصول بنجاح إلى " +
                addedNames +
                ".";

        }


        /* =================================================
           RESET FORM
        ================================================= */

        orderNumberInput.value =
            "";

        reasonInput.value =
            "";

        productCheckboxes.forEach(
            function (checkbox) {

                checkbox.checked =
                    false;

            }
        );


        updateSelectAllButton();


        /* =================================================
           RELOAD DATA
        ================================================= */

        await loadBlacklist();

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

        blacklistRecords =
            [];

        updateStatistics();

        tableWrapper.innerHTML =
            `
            <div class="error-box">
                تعذر تحميل البيانات.
            </div>
            `;

        return;

    }


    blacklistRecords =
        data || [];


    updateStatistics();

    renderBlacklist(
        getFilteredRecords()
    );

}


/* =========================================================
   GET FILTERED RECORDS
========================================================= */

function getFilteredRecords() {

    const search =
        searchInput.value.trim();


    if (!search) {

        return blacklistRecords;

    }


    return blacklistRecords.filter(
        function (record) {

            return record.order_number
                .includes(search);

        }
    );

}


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    function () {

        renderBlacklist(
            getFilteredRecords()
        );

    }
);


/* =========================================================
   CLEAR SEARCH
========================================================= */

clearSearchButton.addEventListener(
    "click",
    function () {

        searchInput.value =
            "";

        renderBlacklist(
            getFilteredRecords()
        );

        searchInput.focus();

    }
);


/* =========================================================
   UPDATE SEARCH RESULT COUNT
========================================================= */

function updateSearchResultCount(
    records
) {

    const search =
        searchInput.value.trim();


    if (!search) {

        searchResultCount.textContent =
            "";

        return;

    }


    const uniqueOrders =
        new Set(
            records.map(
                function (record) {

                    return record.order_number;

                }
            )
        );


    searchResultCount.textContent =
        uniqueOrders.size +
        " طلب مطابق";

}


/* =========================================================
   UPDATE STATISTICS
========================================================= */

function updateStatistics() {

    const uniqueOrders =
        new Set(
            blacklistRecords.map(
                function (record) {

                    return record.order_number;

                }
            )
        );


    blockedCustomersCount.textContent =
        uniqueOrders.size;


    blockedRecordsCount.textContent =
        blacklistRecords.length;


    stepCount.textContent =
        blacklistRecords.filter(
            function (record) {

                return record.product ===
                    "step";

            }
        ).length;


    englishCount.textContent =
        blacklistRecords.filter(
            function (record) {

                return record.product ===
                    "english";

            }
        ).length;

}


/* =========================================================
   RENDER BLACKLIST
========================================================= */

function renderBlacklist(records) {

    updateSearchResultCount(
        records
    );


    if (
        records.length ===
        0
    ) {

        const hasSearch =
            searchInput.value.trim()
                .length > 0;


        if (hasSearch) {

            tableWrapper.innerHTML =
                `
                <div class="empty-box">

                    لا توجد نتائج لرقم الطلب
                    <strong>
                        ${escapeHtml(
                            searchInput.value.trim()
                        )}
                    </strong>

                </div>
                `;

        } else {

            tableWrapper.innerHTML =
                `
                <div class="empty-box">
                    لا توجد حالات وصول ملغاة حاليًا.
                </div>
                `;

        }

        return;

    }


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


    records.forEach(
        function (record) {


            const productName =
                PRODUCT_NAMES[
                    record.product
                ] ||
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

        }
    );


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


    await loadBlacklist();

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