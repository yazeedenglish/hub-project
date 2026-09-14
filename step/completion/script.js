/* =========================================================
   YAZEED ENGLISH
   STEP COURSE COMPLETION CERTIFICATE
========================================================= */


/* =========================
   ELEMENTS
========================= */

const studentNameInput =
    document.getElementById("studentName");

const errorMessage =
    document.getElementById("errorMessage");

const showAchievementButton =
    document.getElementById("showAchievement");

const introSection =
    document.getElementById("introSection");

const achievementSection =
    document.getElementById("achievementSection");

const displayName =
    document.getElementById("displayName");

const certificateName =
    document.getElementById("certificateName");

const certificateScore =
    document.getElementById("certificateScore");

const certificateDate =
    document.getElementById("certificateDate");

const downloadCertificateButton =
    document.getElementById("downloadCertificate");

const backButton =
    document.getElementById("backButton");


/* =========================
   SHOW CERTIFICATE
========================= */

showAchievementButton.addEventListener(
    "click",
    () => {

        const name =
            studentNameInput.value.trim();


        /* Clear previous error */

        errorMessage.textContent = "";


        /* =========================
           VALIDATE NAME
        ========================= */

        if (!name) {

            errorMessage.textContent =
                "يرجى كتابة الأسم";

            studentNameInput.focus();

            return;
        }

        /* =========================
           NAME
        ========================= */

        displayName.textContent =
            name;

        certificateName.textContent =
            name;

        /* =========================
           DATE
        ========================= */

        const today =
            new Date();

        const date =
            today.toLocaleDateString(
                "en-US",
                {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }
            );

        certificateDate.textContent =
            date;


        /* =========================
           SHOW CERTIFICATE
        ========================= */

        introSection.classList.add(
            "hidden"
        );

        achievementSection.classList.remove(
            "hidden"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================
   DOWNLOAD CERTIFICATE
========================= */

downloadCertificateButton.addEventListener(
    "click",
    async () => {

        if (
            typeof html2canvas ===
            "undefined"
        ) {

            alert(
                "تعذر تجهيز الشهادة. حاول مرة أخرى."
            );

            return;
        }


        const certificate =
            document.getElementById(
                "certificate"
            );


       const canvas =
    await html2canvas(
        certificate,
        {
            scale: 2,

            backgroundColor:
                "#ffffff",

            useCORS: true
        }
    );


        const link =
            document.createElement("a");


        link.download =
            "yazeed-step-certificate.png";


        link.href =
            canvas.toDataURL(
                "image/png"
            );


        link.click();

    }
);


/* =========================
   BACK BUTTON
========================= */

backButton.addEventListener(
    "click",
    () => {

        window.location.href =
            "/step";

    }
);