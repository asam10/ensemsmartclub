/* =========================================================
   SMART CLUB — THE ARRIVAL
   FINAL TEASER.JS
   Approx duration: 58 seconds
========================================================= */


/* =========================================================
   1 — ELEMENTS
========================================================= */

const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");

const signalScene = document.getElementById("signalScene");
const ideaScene = document.getElementById("ideaScene");
const technologyScene = document.getElementById("technologyScene");
const curtainScene = document.getElementById("curtainScene");
const awakeningScene = document.getElementById("awakeningScene");
const statementScene = document.getElementById("statementScene");
const revealScene = document.getElementById("revealScene");
const interruptionScene = document.getElementById("interruptionScene");
const finalScene = document.getElementById("finalScene");
const blackoutScene = document.getElementById("blackoutScene");

const signalLine = document.getElementById("signalLine");
const signalText = document.getElementById("signalText");

const screenFlash = document.getElementById("screenFlash");
const glitchFlash = document.getElementById("glitchFlash");

const scanPercentage = document.getElementById("scanPercentage");
const scanProgressFill = document.getElementById("scanProgressFill");

const backgroundMusic = document.getElementById("backgroundMusic");
const impactSound = document.getElementById("impactSound");

const scenes = document.querySelectorAll(".scene");


/* =========================================================
   2 — FINAL MESSAGE
========================================================= */

const finalMessageSmall =
    document.querySelector(".final-message-small");

const finalMessageMain =
    document.querySelector(".final-message-main");

const finalMessageSmart =
    document.querySelector(".final-message-smart");

const finalMessageComing =
    document.querySelector(".final-message-coming");

const finalMessageDate =
    document.querySelector(".final-message-date");


const finalMessageParts = [
    finalMessageSmall,
    finalMessageMain,
    finalMessageSmart,
    finalMessageComing,
    finalMessageDate
].filter(Boolean);


/* =========================================================
   3 — SCENE TRANSITION
========================================================= */

function showScene(nextScene) {

    if (!nextScene) return;


    const currentScene =
        document.querySelector(".scene.active");


    if (
        currentScene &&
        currentScene !== nextScene
    ) {

        currentScene.classList.add("leaving");
        currentScene.classList.remove("active");


        setTimeout(function () {

            currentScene.classList.remove("leaving");

            nextScene.classList.add("active");

        }, 150);

    }

    else {

        nextScene.classList.add("active");

    }
}


/* =========================================================
   4 — SMOOTH TEXT CHANGE
========================================================= */

function changeText(element, newText) {

    if (!element) return;


    element.classList.add("text-out");


    setTimeout(function () {

        element.textContent = newText;

        element.classList.remove("text-out");
        element.classList.remove("text-in");

        void element.offsetWidth;

        element.classList.add("text-in");

    }, 160);
}


/* =========================================================
   5 — MAGENTA SIGNAL FLASH

   IMPORTANT:
   No white/pink strong flash anymore.
========================================================= */

function flash() {

    if (!screenFlash) return;


    screenFlash.classList.remove("fire");

    void screenFlash.offsetWidth;

    screenFlash.classList.add("fire");
}


/* =========================================================
   6 — GLITCH
========================================================= */

function glitch() {

    if (!glitchFlash) return;


    glitchFlash.classList.remove("fire");

    void glitchFlash.offsetWidth;

    glitchFlash.classList.add("fire");
}


/* =========================================================
   7 — RESET FINAL MESSAGE

   Prevents SMART from appearing for one frame.
========================================================= */

function resetFinalMessage() {

    finalMessageParts.forEach(function (element) {

        element.classList.remove("show");

    });
}


/* =========================================================
   8 — FINAL MESSAGE REVEAL
========================================================= */

function revealFinalMessage() {


    /* Intro */

    setTimeout(function () {

        if (finalMessageSmall) {
            finalMessageSmall.classList.add("show");
        }

    }, 450);


    /* SOMETHING */

    setTimeout(function () {

        if (finalMessageMain) {
            finalMessageMain.classList.add("show");
        }

    }, 1250);


    /* SMART */

    setTimeout(function () {

        if (finalMessageSmart) {
            finalMessageSmart.classList.add("show");
        }

        flash();

    }, 2300);


    /* IS COMING SOON */

    setTimeout(function () {

        if (finalMessageComing) {
            finalMessageComing.classList.add("show");
        }

        glitch();

    }, 3400);


    /* DATE */

    setTimeout(function () {

        if (finalMessageDate) {
            finalMessageDate.classList.add("show");
        }

    }, 4400);
}


/* =========================================================
   9 — START BUTTON
========================================================= */

if (startButton) {

    startButton.addEventListener(
        "click",
        function () {


            /* Hide start screen */

            if (startScreen) {
                startScreen.classList.add("hide");
            }


            /* ================= MUSIC ================= */

            if (backgroundMusic) {

                backgroundMusic.volume = 0.45;

                backgroundMusic
                    .play()
                    .catch(function () {});

            }


            /* ================= FULLSCREEN ================= */

            if (
                document.documentElement.requestFullscreen
            ) {

                document.documentElement
                    .requestFullscreen()
                    .catch(function () {});

            }


            /* ================= START ================= */

            setTimeout(function () {

                if (startScreen) {
                    startScreen.style.display = "none";
                }

                startTeaser();

            }, 750);

        }
    );
}


/* =========================================================
   10 — MAIN TIMELINE
   Approx. 58 seconds
========================================================= */

function startTeaser() {


    /* =====================================================
       00:00 — 00:07
       THE SIGNAL

       Slow cinematic beginning.
    ===================================================== */

    showScene(signalScene);


    /* First flash */

    setTimeout(function () {

        flash();

    }, 800);


    /* Signal line */

    setTimeout(function () {

        if (signalLine) {
            signalLine.style.width = "100%";
        }

    }, 1600);


    /* Second flash */

    setTimeout(function () {

        flash();

    }, 2400);


    /* SIGNAL DETECTED */

    setTimeout(function () {

        changeText(
            signalText,
            "SIGNAL DETECTED"
        );

    }, 3400);


    /* Third flash */

    setTimeout(function () {

        flash();

    }, 4300);


    /* SOURCE UNKNOWN */

    setTimeout(function () {

        changeText(
            signalText,
            "SOURCE UNKNOWN"
        );

        setTimeout(function () {

            glitch();

        }, 300);

    }, 5400);


    /* Final signal */

    setTimeout(function () {

        flash();

    }, 6400);



    /* =====================================================
       00:07 — 00:13
       THE IDEA
    ===================================================== */

    setTimeout(function () {

        showScene(ideaScene);

    }, 7000);


    setTimeout(function () {

        glitch();

    }, 10400);



    /* =====================================================
       00:13 — 00:23
       TECHNOLOGY MONTAGE
    ===================================================== */

    setTimeout(function () {

        showScene(technologyScene);


        setTimeout(function () {

            runTechnologyMontage();

        }, 200);

    }, 13000);



    /* =====================================================
       00:23 — 00:31
       HIDDEN OBJECT / CURTAIN
    ===================================================== */

    setTimeout(function () {

        showScene(curtainScene);


        setTimeout(function () {

            runCurtainLights();

        }, 200);

    }, 23000);



    /* =====================================================
       00:31 — 00:37
       AWAKENING
    ===================================================== */

    setTimeout(function () {

        flash();

        showScene(awakeningScene);

    }, 31000);


    setTimeout(function () {

        glitch();

    }, 33700);


    setTimeout(function () {

        flash();

    }, 35600);



    /* =====================================================
       00:37 — 00:42
       NOT JUST ANOTHER CLUB
    ===================================================== */

    setTimeout(function () {

        playImpact();

        showScene(statementScene);

    }, 37000);


    setTimeout(function () {

        glitch();

    }, 39800);



    /* =====================================================
       00:42 — 00:48
       SCANNING / ALMOST REVEAL
    ===================================================== */

    setTimeout(function () {

        flash();

        showScene(revealScene);


        setTimeout(function () {

            startScan();

        }, 200);

    }, 42000);


    setTimeout(function () {

        flash();

    }, 43800);


    setTimeout(function () {

        glitch();

    }, 45500);


    /* Normal magenta flash — NOT strong white flash */

    setTimeout(function () {

        flash();

    }, 47000);



    /* =====================================================
       00:48 — 00:50
       ACCESS DENIED
    ===================================================== */

    setTimeout(function () {

        playImpact();

        glitch();

        showScene(interruptionScene);

    }, 48000);



    /* =====================================================
       00:50 — 00:57
       SOMETHING SMART IS COMING SOON
    ===================================================== */

    setTimeout(function () {


        /*
           Hide final words BEFORE scene appears.
           This fixes the SMART one-frame bug.
        */

        resetFinalMessage();


        showScene(finalScene);


        /*
           Wait until scene transition is finished.
        */

        setTimeout(function () {

            revealFinalMessage();

        }, 300);


    }, 50000);



    /* =====================================================
       00:57.5
       BLACKOUT
    ===================================================== */

    setTimeout(function () {

        showScene(blackoutScene);

        fadeMusic();

    }, 57500);
}


/* =========================================================
   11 — TECHNOLOGY MONTAGE
========================================================= */

function runTechnologyMontage() {


    const shots = [

        document.getElementById("techEngineering"),

        document.getElementById("techCode"),

        document.getElementById("techAutomation"),

        document.getElementById("techData"),

        document.getElementById("techNeural")

    ].filter(Boolean);


    /* Reset */

    shots.forEach(function (shot) {

        shot.classList.remove("show");

    });


    /* ================= SHOW SHOT ================= */

    function showShot(index) {

        if (!shots[index]) return;


        /*
           Completely hide previous shot.
        */

        shots.forEach(function (shot) {

            shot.classList.remove("show");

        });


        /*
           Tiny black cinematic gap.

           This prevents old writing from
           remaining visible behind the next shot.
        */

        setTimeout(function () {

            shots[index].classList.add("show");

            glitch();

        }, 100);
    }


    /* ENGINEERING */

    showShot(0);


    /* DIGITALIZATION */

    setTimeout(function () {

        showShot(1);

    }, 1850);


    /* AUTOMATION */

    setTimeout(function () {

        showShot(2);

    }, 3700);


    /* DATA */

    setTimeout(function () {

        showShot(3);

    }, 5550);


    /* INTELLIGENCE */

    setTimeout(function () {

        showShot(4);

    }, 7400);


    /* Exit */

    setTimeout(function () {

        flash();

    }, 9100);
}


/* =========================================================
   12 — CURTAIN LIGHTS
========================================================= */

function runCurtainLights() {

    if (!curtainScene) return;


    curtainScene.classList.remove(
        "flash-left",
        "flash-right"
    );


    /* ================= LEFT SIGNAL ================= */

    setTimeout(function () {

        curtainScene.classList.add(
            "flash-left"
        );

        flash();

    }, 600);


    setTimeout(function () {

        curtainScene.classList.remove(
            "flash-left"
        );

    }, 1300);



    /* ================= RIGHT SIGNAL ================= */

    setTimeout(function () {

        curtainScene.classList.add(
            "flash-right"
        );

    }, 2500);


    setTimeout(function () {

        curtainScene.classList.remove(
            "flash-right"
        );

    }, 3200);



    /* ================= INTERRUPTION ================= */

    setTimeout(function () {

        glitch();

    }, 4000);



    /* ================= FINAL MAGENTA SIGNAL ================= */

    setTimeout(function () {

        curtainScene.classList.add(
            "flash-left"
        );

        flash();

    }, 5300);


    setTimeout(function () {

        curtainScene.classList.remove(
            "flash-left"
        );

    }, 6100);
}


/* =========================================================
   13 — SCANNING SYSTEM
========================================================= */

function startScan() {

    if (
        !scanPercentage ||
        !scanProgressFill
    ) {
        return;
    }


    let value = 0;


    scanPercentage.textContent = "0%";

    scanProgressFill.style.width = "0%";


    const interval =
        setInterval(function () {


            value +=
                Math.floor(
                    Math.random() * 5
                ) + 1;


            /* ================= 97% ================= */

            if (value >= 97) {

                value = 97;

                clearInterval(interval);


                scanProgressFill.style.width =
                    "97%";


                scanPercentage.textContent =
                    "97%";


                /*
                   Hold 97% briefly.
                */

                setTimeout(function () {

                    scanPercentage.textContent =
                        "LOCKED";

                    glitch();

                }, 300);


                return;
            }


            scanPercentage.textContent =
                value + "%";


            scanProgressFill.style.width =
                value + "%";


        }, 120);
}


/* =========================================================
   14 — IMPACT SOUND
========================================================= */

function playImpact() {

    if (!impactSound) return;


    impactSound.currentTime = 0;

    impactSound.volume = 0.7;


    impactSound
        .play()
        .catch(function () {});
}


/* =========================================================
   15 — MUSIC FADE
========================================================= */

function fadeMusic() {

    if (
        !backgroundMusic ||
        backgroundMusic.paused
    ) {
        return;
    }


    const fade =
        setInterval(function () {


            if (
                backgroundMusic.volume > 0.05
            ) {

                backgroundMusic.volume =
                    Math.max(
                        0,
                        backgroundMusic.volume - 0.05
                    );

            }

            else {

                clearInterval(fade);

                backgroundMusic.pause();

                backgroundMusic.volume = 0;

            }

        }, 100);
}


/* =========================================================
   16 — INITIAL STATE

   IMPORTANT:
   Hide final words immediately.

   This prevents SMART from flashing before
   its real reveal.
========================================================= */

resetFinalMessage();


/* =========================================================
   SMART CLUB — ENSEM

   DIGITAL MINDS.
   REAL IMPACT.

   SOMETHING SMART
   IS COMING SOON.
========================================================= */