/* =========================================================
   SMART CLUB — QR JOIN
   Interactive Social Gateway
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const page = document.querySelector(".connect-page");
    const logo = document.querySelector(".connect-logo");
    const header = document.querySelector(".connect-header");
    const buttons = document.querySelectorAll(".social-btn");


    /* =====================================================
       1. PAGE ENTRANCE
       ===================================================== */

    if (page) {
        page.classList.add("page-ready");
    }


    /* =====================================================
       2. STAGGER SOCIAL BUTTONS
       ===================================================== */

    buttons.forEach((button, index) => {

        button.style.opacity = "0";
        button.style.transform = "translateY(18px)";

        setTimeout(() => {

            button.style.transition =
                "opacity .45s ease, transform .45s ease, box-shadow .25s ease, filter .25s ease";

            button.style.opacity = "1";
            button.style.transform = "translateY(0)";

        }, 250 + (index * 100));

    });


    /* =====================================================
       3. LOGO ENTRY
       ===================================================== */

    if (logo) {

        logo.style.opacity = "0";
        logo.style.transform = "scale(.85)";

        setTimeout(() => {

            logo.style.transition =
                "opacity .6s ease, transform .6s cubic-bezier(.2,.8,.2,1)";

            logo.style.opacity = "1";
            logo.style.transform = "scale(1)";

        }, 100);
    }


    /* =====================================================
       4. SUBTLE LOGO PULSE
       ===================================================== */

    if (logo) {

        setInterval(() => {

            logo.animate(
                [
                    {
                        transform: "scale(1)"
                    },
                    {
                        transform: "scale(1.035)"
                    },
                    {
                        transform: "scale(1)"
                    }
                ],
                {
                    duration: 2200,
                    easing: "ease-in-out"
                }
            );

        }, 4500);
    }


    /* =====================================================
       5. RIPPLE EFFECT
       ===================================================== */

    buttons.forEach(button => {

        button.addEventListener("click", function (event) {

            const rect = button.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const ripple = document.createElement("span");

            ripple.classList.add("qr-ripple");

            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });


    /* =====================================================
       6. MOBILE TOUCH FEEDBACK
       ===================================================== */

    buttons.forEach(button => {

        button.addEventListener("touchstart", () => {

            button.style.transform = "scale(.985)";

        }, { passive: true });


        button.addEventListener("touchend", () => {

            button.style.transform = "scale(1)";

        }, { passive: true });

    });


    /* =====================================================
       7. MOUSE PARALLAX — DESKTOP ONLY
       ===================================================== */

    if (window.innerWidth > 768) {

        document.addEventListener("mousemove", (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 4;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 4;

            if (logo) {
                logo.style.transform =
                    `translate(${x}px, ${y}px)`;
            }

        });

    }


    /* =====================================================
       8. SOCIAL PLATFORM IDENTIFICATION
       ===================================================== */

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            const platform =
                button.classList.contains("instagram") ? "Instagram" :
                button.classList.contains("whatsapp") ? "WhatsApp" :
                button.classList.contains("linkedin") ? "LinkedIn" :
                button.classList.contains("tiktok") ? "TikTok" :
                "Social";

            button.setAttribute(
                "data-platform",
                platform
            );

        });

    });


    /* =====================================================
       9. PREVENT ACCIDENTAL DOUBLE CLICKS
       ===================================================== */

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            if (button.dataset.clicked === "true") {
                return;
            }

            button.dataset.clicked = "true";

            setTimeout(() => {
                button.dataset.clicked = "false";
            }, 1000);

        });

    });


    /* =====================================================
       10. PAGE VISIBILITY
       ===================================================== */

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {
            document.title = "See you soon • Smart Club";
        } else {
            document.title = "Connect | Smart Club ENSEM";
        }

    });

});