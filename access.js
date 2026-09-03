/* =========================================================
   YAZEED ENGLISH — COURSE ACCESS CHECK
   SUPABASE + BACKGROUND ACCESS CHECK
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

// 60  = 60 minutes
// 120 = 120 minutes
// 5   = 5 minutes

const ACCESS_CHECK_MINUTES = 60;

/*
   Convert minutes to milliseconds
*/
const ACCESS_CHECK_INTERVAL =
    ACCESS_CHECK_MINUTES * 60 * 1000;


/* =========================================================
   SUPABASE
========================================================= */

const SUPABASE_URL =
    "https://mldejpjuluiavdhdumqa.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_4CSu5Xqo99OK5o4EJom_Pg_tvelza_h";


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* =========================================================
   PREVENT MULTIPLE BACKGROUND CHECKS
========================================================= */

let backgroundCheckStarted = false;

let accessCheckInProgress = false;


/* =========================================================
   MAIN ACCESS CHECK
========================================================= */

async function checkCourseAccess(courseKey) {

    /*
       Get saved customer access
    */
    const savedAccess =
        localStorage.getItem(
            "yazeed_current_access"
        );


    /*
       No saved access
    */
    if (!savedAccess) {

        window.location.href =
            "/activate/";

        return false;
    }


    let access;


    /*
       Read saved access safely
    */
    try {

        access =
            JSON.parse(savedAccess);

    } catch (error) {

        console.error(
            "Invalid access data:",
            error
        );

        localStorage.removeItem(
            "yazeed_current_access"
        );

        window.location.href =
            "/activate/";

        return false;
    }


    /*
       Get order number
    */
    const orderNumber =
        access.orderNumber;


    if (!orderNumber) {

        localStorage.removeItem(
            "yazeed_current_access"
        );

        window.location.href =
            "/activate/";

        return false;
    }


    /*
       Prevent overlapping requests
    */
    if (accessCheckInProgress) {
        return true;
    }


    accessCheckInProgress = true;


    try {

        /*
           Securely check this specific order
           through Supabase RPC.
        */
        const {
            data,
            error
        } =
            await supabaseClient.rpc(
                "get_order_access",
                {
                    p_order_number:
                        orderNumber
                }
            );


        /*
           Supabase returned an error
        */
        if (error) {

            console.error(
                "Supabase access check error:",
                error
            );

            /*
               IMPORTANT:

               Do NOT kick the customer out just
               because of a temporary network/
               Supabase problem.

               The customer keeps their current
               access until a successful check
               confirms that it has been revoked.
            */
            return true;
        }


        /*
           Order no longer exists
        */
        if (
            !data ||
            data.length === 0
        ) {

            localStorage.removeItem(
                "yazeed_current_access"
            );

            alert(
                "تعذر العثور على رقم الطلب. يرجى التواصل معنا."
            );

            window.location.href =
                "/activate/";

            return false;
        }


        const order =
            data[0];


        /* =================================================
           ENTIRE ORDER DEACTIVATED
        ================================================= */

        if (
            order.active !== true
        ) {

            localStorage.removeItem(
                "yazeed_current_access"
            );

            alert(
                "هذا الطلب غير نشط حاليًا. يرجى التواصل معنا."
            );

            window.location.href =
                "/activate/";

            return false;
        }


        /* =================================================
           SPECIFIC COURSE DEACTIVATED
        ================================================= */

        if (
            order[courseKey] !== true
        ) {

            /*
               Update saved permissions first
            */
            access.products = {

                step:
                    order.step === true,

                english:
                    order.english === true,

                trab6:
                    order.trab6 === true,

                writing:
                    order.writing === true
            };


            localStorage.setItem(
                "yazeed_current_access",
                JSON.stringify(access)
            );


            alert(
                "تم إلغاء صلاحية الوصول إلى هذه الدورة."
            );


            /*
               Send customer back to HUB
            */
            window.location.href =
                "/";

            return false;
        }


        /* =================================================
           ACCESS STILL VALID
        ================================================= */

        /*
           Refresh local permissions in case
           the admin changed another course.
        */
        access.products = {

            step:
                order.step === true,

            english:
                order.english === true,

            trab6:
                order.trab6 === true,

            writing:
                order.writing === true
        };


        localStorage.setItem(
            "yazeed_current_access",
            JSON.stringify(access)
        );


        return true;


    } catch (error) {

        console.error(
            "Access verification failed:",
            error
        );


        /*
           Fail safely.

           A temporary browser/network problem
           should NOT randomly kick a paying
           customer out of the course.
        */
        return true;


    } finally {

        accessCheckInProgress = false;
    }
}


/* =========================================================
   BACKGROUND CHECK
========================================================= */

function startBackgroundAccessCheck(courseKey) {

    /*
       Prevent accidentally creating
       multiple timers.
    */
    if (backgroundCheckStarted) {
        return;
    }


    backgroundCheckStarted = true;


    console.log(
        "Background access check started.",
        "Interval:",
        ACCESS_CHECK_INTERVAL,
        "ms"
    );


    setInterval(
        async function () {

            console.log(
                "Running background access check..."
            );


            await checkCourseAccess(
                courseKey
            );

        },
        ACCESS_CHECK_INTERVAL
    );
}


/* =========================================================
   AUTOMATICALLY START BACKGROUND CHECK
========================================================= */

function initializeCourseAccess(courseKey) {

    /*
       First check immediately
    */
    checkCourseAccess(
        courseKey
    ).then(function (hasAccess) {

        /*
           Only start the background timer
           if the initial access check succeeded.
        */
        if (hasAccess) {

            startBackgroundAccessCheck(
                courseKey
            );
        }

    });
}