/* ================================================================
   SMART CLUB — DESIGN CARD
   FINAL CINEMATIC JS
   MAGENTA / PEARL / CHROME EDITION
================================================================ */


/* ================================================================
   1. DOM
================================================================ */

const scene =
    document.getElementById("scene");

const cardStage =
    document.querySelector(".card-stage");

const card =
    document.getElementById("card");

const flash =
    document.getElementById("flash");

const particlesContainer =
    document.getElementById("particles");

const cardFront =
    document.querySelector(".card-front");

const cardBack =
    document.querySelector(".card-back");


/* ================================================================
   MEMBER
================================================================ */

const memberImage =
    document.getElementById("memberImage");

const memberName =
    document.querySelector(".member-name");

const memberRole =
    document.querySelector(".member-role");

const identity =
    document.querySelector(".identity");


/* ================================================================
   DESIGN SYSTEM
================================================================ */

const designHeader =
    document.querySelector(".design-header") ||
    document.querySelector(".media-header") ||
    document.querySelector(".president-header");


const designTitle =
    document.querySelector(".design-title") ||
    document.querySelector(".media-title") ||
    document.querySelector(".president-title");


const designEmblem =
    document.querySelector(".design-emblem") ||
    document.querySelector(".media-emblem") ||
    document.querySelector(".president-emblem");


const designContainer =
    document.querySelector(".design-container") ||
    document.querySelector(".camera-container");


const designIcon =
    document.querySelector(".design-icon") ||
    document.querySelector(".camera-icon");


const designNib =
    document.querySelector(".design-nib");


const designNibDetails =
    document.querySelectorAll(".design-nib-detail");


const designNibCenter =
    document.querySelector(".design-nib-center");


const designFocusRing =
    document.querySelector(".design-focus-ring") ||
    document.querySelector(".camera-focus-ring");


const designFlashPoint =
    document.querySelector(".design-flash-point") ||
    document.querySelector(".camera-flash-point");


const designFlashOverlay =
    document.getElementById("designFlash") ||
    document.querySelector(".design-flash");


const emblemGlow =
    document.querySelector(".emblem-glow");


const emblemRings =
    document.querySelectorAll(".emblem-ring");


/* ================================================================
   BACK SMART CORE
================================================================ */

const brainEmblem =
    document.querySelector(".brain-emblem");

const brainIcon =
    document.querySelector(".brain-icon");

const brainPaths =
    document.querySelectorAll(".brain-path");

const brainNeuralLines =
    document.querySelectorAll(
        ".brain-center, .brain-neural"
    );

const brainDots =
    document.querySelectorAll(".brain-node-dot");

const backCore =
    document.querySelector(".back-core");

const corePulse =
    document.querySelector(".core-pulse");

const coreOrbits =
    document.querySelectorAll(".core-orbit");

const orbitMarkers =
    document.querySelectorAll(".orbit-marker");

const backBrand =
    document.querySelector(".back-brand");

const circuits =
    document.querySelectorAll(".circuit");

const backCorners =
    document.querySelectorAll(".energy-corner");


/* ================================================================
   PORTRAIT
================================================================ */

const portraitFrame =
    document.querySelector(".portrait-frame");

const portraitEnergy =
    document.querySelector(".portrait-energy");

const portraitCoreLight =
    document.querySelector(".portrait-core-light");

const portraitRings =
    document.querySelectorAll(".portrait-ring");

const portraitRays =
    document.querySelector(".portrait-rays");

const portraitBacklight =
    document.querySelector(".portrait-backlight");

const portraitFrontGlow =
    document.querySelector(".portrait-front-glow");

const portraitVignette =
    document.querySelector(".portrait-vignette");


/* ================================================================
   DESIGN HALO
================================================================ */

const designHalo =
    document.querySelector(".design-halo") ||
    document.querySelector(".media-halo") ||
    document.querySelector(".leadership-halo");


const haloRings =
    document.querySelectorAll(
        ".design-halo .leadership-halo-ring, .leadership-halo-ring"
    );


const haloMarkers =
    document.querySelectorAll(".halo-marker");


/* ================================================================
   SMART NODES
================================================================ */

const brainNodes =
    document.querySelectorAll(".brain-node");

const nodeIcons =
    document.querySelectorAll(".node-icon");

const nodePulses =
    document.querySelectorAll(".node-pulse");


/* ================================================================
   FRAME
================================================================ */

const premiumCorners =
    document.querySelectorAll(".premium-corner");

const framePieces =
    document.querySelectorAll(
        ".frame-top, .frame-right, .frame-bottom, .frame-left"
    );

const innerFrame =
    document.querySelector(".inner-premium-frame");

const railLights =
    document.querySelectorAll(".light-rail span");

const lightRails =
    document.querySelectorAll(".light-rail");

const ornaments =
    document.querySelectorAll(".leadership-ornament");

const movingBorder =
    document.querySelector(".moving-border-light");

const cardShine =
    document.getElementById("cardShine");

const glassReflection =
    document.querySelector(".glass-reflection");


/* ================================================================
   BACKGROUND
================================================================ */

const backgroundRings =
    document.querySelectorAll(".background-energy-ring");

const sceneOrbits =
    document.querySelectorAll(".scene-orbit");

const sceneLights =
    document.querySelectorAll(".scene-light");


/* ================================================================
   2. COLORS
================================================================ */

const MAGENTA =
    "#d92b9e";

const MAGENTA_BRIGHT =
    "#ff45b4";

const MAGENTA_SOFT =
    "#ff82cf";

const PEARL =
    "#fff7fc";

const CHROME =
    "#d9dbe5";

const PLUM =
    "#6f0e60";

const DEEP_PLUM =
    "#250629";


/* ================================================================
   3. STATE
================================================================ */

let isFront =
    false;

let isBusy =
    true;


let targetRX =
    0;

let targetRY =
    0;


let currentRX =
    0;

let currentRY =
    0;


let targetPortraitX =
    0;

let targetPortraitY =
    0;


let currentPortraitX =
    0;

let currentPortraitY =
    0;


let targetShineX =
    0;

let currentShineX =
    0;


/* ================================================================
   4. HELPERS
================================================================ */

const wait = ms =>
    new Promise(
        resolve =>
            setTimeout(resolve, ms)
    );


function animate(
    element,
    frames,
    options
) {

    if (!element) {
        return null;
    }


    return element.animate(
        frames,
        options
    );
}


/* ================================================================
   5. PARTICLES
================================================================ */

function createParticles() {

    if (!particlesContainer) {
        return;
    }


    const amount =
        24;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.className =
            "particle";


        const size =
            .7 +
            Math.random() *
            1.6;


        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.opacity =
            `${.10 + Math.random() * .34}`;

        particle.style.animationDuration =
            `${10 + Math.random() * 12}s`;

        particle.style.animationDelay =
            `${Math.random() * -18}s`;


        if (
            Math.random() >
            .22
        ) {

            particle.style.background =
                PEARL;


            particle.style.boxShadow = `
                0 0 3px rgba(255,255,255,.65),
                0 0 8px rgba(255,255,255,.12)
            `;

        } else {

            particle.style.background =
                MAGENTA_SOFT;


            particle.style.boxShadow = `
                0 0 4px rgba(255,91,190,.38)
            `;
        }


        particlesContainer.appendChild(
            particle
        );
    }
}


createParticles();


/* ================================================================
   6. SMART TRACE
================================================================ */

function createSmartTrace(
    intensity = 1
) {

    if (
        !card ||
        !scene
    ) {

        return;
    }


    const trace =
        document.createElement("div");


    const rect =
        card.getBoundingClientRect();


    trace.style.position =
        "fixed";

    trace.style.pointerEvents =
        "none";

    trace.style.zIndex =
        "500";


    const side =
        Math.floor(
            Math.random() * 4
        );


    let x;
    let y;
    let angle;


    if (side === 0) {

        x =
            rect.left +
            Math.random() *
            rect.width;

        y =
            rect.top + 7;

        angle =
            90;

    } else if (side === 1) {

        x =
            rect.right - 7;


        y =
            rect.top +
            Math.random() *
            rect.height;


        angle =
            180;

    } else if (side === 2) {

        x =
            rect.left +
            Math.random() *
            rect.width;


        y =
            rect.bottom - 7;


        angle =
            -90;

    } else {

        x =
            rect.left + 7;


        y =
            rect.top +
            Math.random() *
            rect.height;


        angle =
            0;
    }


    trace.style.left =
        `${x}px`;

    trace.style.top =
        `${y}px`;

    trace.style.width =
        `${35 + Math.random() * 45}px`;

    trace.style.height =
        "1px";

    trace.style.transformOrigin =
        "left center";


    trace.style.background = `
        linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.25),
            rgba(255,255,255,.95),
            rgba(255,82,185,.50),
            transparent
        )
    `;


    trace.style.boxShadow = `
        0 0 ${3 * intensity}px rgba(255,255,255,.55),
        0 0 ${8 * intensity}px rgba(221,43,158,.20)
    `;


    scene.appendChild(
        trace
    );


    trace.animate(

        [
            {
                opacity:
                    0,

                transform:
                    `rotate(${angle}deg) scaleX(.08)`
            },

            {
                opacity:
                    .9,

                transform:
                    `rotate(${angle}deg) scaleX(1)`,

                offset:
                    .30
            },

            {
                opacity:
                    0,

                transform:
                    `rotate(${angle}deg) scaleX(.35)`
            }
        ],

        {
            duration:
                350,

            easing:
                "ease-out"
        }
    );


    setTimeout(
        () =>
            trace.remove(),
        430
    );
}


/* ================================================================
   7. SIGNAL BURST
================================================================ */

function signalBurst(
    count = 4,
    delay = 90
) {

    for (
        let i = 0;
        i < count;
        i++
    ) {

        setTimeout(
            () => {

                createSmartTrace(
                    .6 +
                    Math.random() *
                    .35
                );
            },

            i * delay
        );
    }
}


/* ================================================================
   8. SMART DUST
================================================================ */

function createSmartDust(
    amount = 8
) {

    if (
        !card ||
        !scene
    ) {

        return;
    }


    const rect =
        card.getBoundingClientRect();


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            () => {

                const dust =
                    document.createElement(
                        "span"
                    );


                dust.style.position =
                    "fixed";

                dust.style.pointerEvents =
                    "none";

                dust.style.zIndex =
                    "600";


                const size =
                    1 +
                    Math.random() *
                    1.8;


                dust.style.width =
                    `${size}px`;

                dust.style.height =
                    `${size}px`;

                dust.style.borderRadius =
                    "50%";


                dust.style.background =
                    Math.random() >
                    .25
                        ? PEARL
                        : MAGENTA_SOFT;


                dust.style.boxShadow = `
                    0 0 4px rgba(255,255,255,.40),
                    0 0 8px rgba(222,44,161,.16)
                `;


                dust.style.left =
                    `${
                        rect.left +
                        Math.random() *
                        rect.width
                    }px`;


                dust.style.top =
                    `${
                        rect.top +
                        Math.random() *
                        rect.height
                    }px`;


                scene.appendChild(
                    dust
                );


                const dx =
                    (
                        Math.random() -
                        .5
                    ) * 65;


                const dy =
                    (
                        Math.random() -
                        .5
                    ) * 85;


                dust.animate(

                    [
                        {
                            opacity:
                                0,

                            transform:
                                "scale(.2)"
                        },

                        {
                            opacity:
                                .65,

                            transform:
                                "scale(1)",

                            offset:
                                .20
                        },

                        {
                            opacity:
                                0,

                            transform:
                                `translate(${dx}px, ${dy}px) scale(.2)`
                        }
                    ],

                    {
                        duration:
                            650 +
                            Math.random() *
                            450,

                        easing:
                            "ease-out"
                    }
                );


                setTimeout(
                    () =>
                        dust.remove(),
                    1200
                );

            },

            i * 40
        );
    }
}


/* ================================================================
   9. GENERAL FLASH
================================================================ */

function smartFlash() {

    if (!flash) {
        return;
    }


    flash.style.background = `
        radial-gradient(
            circle at center,
            rgba(255,255,255,.95) 0%,
            rgba(255,227,246,.38) 12%,
            rgba(236,65,177,.15) 29%,
            rgba(93,9,78,.05) 45%,
            transparent 68%
        )
    `;


    flash.animate(

        [
            {
                opacity:
                    0
            },

            {
                opacity:
                    .56,

                offset:
                    .17
            },

            {
                opacity:
                    .10,

                offset:
                    .33
            },

            {
                opacity:
                    .24,

                offset:
                    .42
            },

            {
                opacity:
                    0
            }
        ],

        {
            duration:
                520,

            easing:
                "ease-out"
        }
    );
}


/* ================================================================
   10. DESIGN FLASH
================================================================ */

function designSystemFlash() {

    if (designFlashOverlay) {

        designFlashOverlay.classList.remove(
            "active"
        );


        void designFlashOverlay.offsetWidth;


        designFlashOverlay.classList.add(
            "active"
        );


        setTimeout(
            () => {

                designFlashOverlay.classList.remove(
                    "active"
                );

            },

            520
        );
    }


    if (flash) {

        flash.animate(

            [
                {
                    opacity:
                        0
                },

                {
                    opacity:
                        .72,

                    offset:
                        .08
                },

                {
                    opacity:
                        .08,

                    offset:
                        .20
                },

                {
                    opacity:
                        .34,

                    offset:
                        .28
                },

                {
                    opacity:
                        0
                }
            ],

            {
                duration:
                    460,

                easing:
                    "ease-out"
            }
        );
    }
}


/* ================================================================
   11. PREPARE
================================================================ */

function prepareIntro() {

    const hiddenElements = [

        designHeader,
        designEmblem,
        designTitle,
        designHalo,

        portraitEnergy,
        portraitFrame,
        identity,

        ...brainNodes,
        ...ornaments
    ];


    hiddenElements.forEach(
        element => {

            if (!element) {
                return;
            }


            element.style.opacity =
                "0";
        }
    );


    if (memberImage) {

        memberImage.style.opacity =
            "0";


        memberImage.style.transform = `
            translateY(38px)
            scale(.94)
        `;
    }


    if (identity) {

        identity.style.transform = `
            translateX(-50%)
            translateY(20px)
            translateZ(110px)
        `;
    }


    if (designEmblem) {

        designEmblem.style.transform =
            "scale(.68)";
    }


    if (cardStage) {

        cardStage.style.opacity =
            "0";
    }


    coreOrbits.forEach(
        orbit => {

            orbit.style.opacity =
                ".12";
        }
    );


    circuits.forEach(
        circuit => {

            circuit.style.opacity =
                ".08";
        }
    );


    backCorners.forEach(
        corner => {

            corner.style.opacity =
                ".14";
        }
    );


    orbitMarkers.forEach(
        marker => {

            marker.style.opacity =
                "0";
        }
    );
}


/* ================================================================
   12. CARD ENTER
================================================================ */

async function revealStage() {

    animate(

        cardStage,

        [
            {
                opacity:
                    0,

                transform: `
                    translateY(30px)
                    scale(.96)
                `
            },

            {
                opacity:
                    1,

                transform: `
                    translateY(0)
                    scale(1)
                `
            }
        ],

        {
            duration:
                1050,

            fill:
                "forwards",

            easing:
                "cubic-bezier(.16,1,.3,1)"
        }
    );


    await wait(
        900
    );
}


/* ================================================================
   13. BACK BRAIN ACTIVATION
================================================================ */

async function activateSmartCore() {

    animate(

        brainEmblem,

        [
            {
                filter:
                    "brightness(.42)",

                transform:
                    "scale(.88)",

                opacity:
                    .45
            },

            {
                filter:
                    "brightness(.80)",

                transform:
                    "scale(.97)",

                opacity:
                    .8,

                offset:
                    .55
            },

            {
                filter:
                    "brightness(1)",

                transform:
                    "scale(1)",

                opacity:
                    1
            }
        ],

        {
            duration:
                1150,

            fill:
                "forwards",

            easing:
                "ease-out"
        }
    );


    const brainLines = [

        ...brainPaths,
        ...brainNeuralLines

    ];


    brainLines.forEach(
        (path, index) => {

            if (
                typeof path.getTotalLength !==
                "function"
            ) {

                return;
            }


            const length =
                path.getTotalLength();


            path.style.strokeDasharray =
                `${length}`;


            path.style.strokeDashoffset =
                `${length}`;


            animate(

                path,

                [
                    {
                        strokeDashoffset:
                            length,

                        opacity:
                            .18
                    },

                    {
                        strokeDashoffset:
                            0,

                        opacity:
                            1
                    }
                ],

                {
                    duration:
                        900,

                    delay:
                        120 +
                        index * 100,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"
                }
            );
        }
    );


    brainDots.forEach(
        (dot, index) => {

            animate(

                dot,

                [
                    {
                        opacity:
                            0,

                        transform:
                            "scale(0)"
                    },

                    {
                        opacity:
                            1,

                        transform:
                            "scale(1.5)"
                    },

                    {
                        opacity:
                            .85,

                        transform:
                            "scale(1)"
                    }
                ],

                {
                    duration:
                        400,

                    delay:
                        650 +
                        index * 110,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"
                }
            );
        }
    );


    await wait(
        650
    );
}


/* ================================================================
   14. ORBITS
================================================================ */

async function synchronizeOrbits() {

    coreOrbits.forEach(
        (orbit, index) => {

            animate(

                orbit,

                [
                    {
                        opacity:
                            .12,

                        filter:
                            "brightness(.65)"
                    },

                    {
                        opacity:
                            .58,

                        filter:
                            "brightness(1.1)"
                    }
                ],

                {
                    duration:
                        700,

                    delay:
                        index * 160,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"
                }
            );
        }
    );


    orbitMarkers.forEach(
        (marker, index) => {

            animate(

                marker,

                [
                    {
                        opacity:
                            0,

                        transform:
                            "scale(0)"
                    },

                    {
                        opacity:
                            1,

                        transform:
                            "scale(1.35)"
                    },

                    {
                        opacity:
                            .7,

                        transform:
                            "scale(1)"
                    }
                ],

                {
                    duration:
                        400,

                    delay:
                        220 +
                        index * 130,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"
                }
            );
        }
    );


    await wait(
        600
    );
}


/* ================================================================
   15. CIRCUITS
================================================================ */

async function activateCircuits() {

    circuits.forEach(
        (circuit, index) => {

            animate(

                circuit,

                [
                    {
                        opacity:
                            .08,

                        filter:
                            "brightness(.65)"
                    },

                    {
                        opacity:
                            .5,

                        filter:
                            "brightness(1.25)"
                    },

                    {
                        opacity:
                            .32,

                        filter:
                            "brightness(1)"
                    }
                ],

                {
                    duration:
                        550,

                    delay:
                        index * 110,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"
                }
            );
        }
    );


    backCorners.forEach(
        (corner, index) => {

            animate(

                corner,

                [
                    {
                        opacity:
                            .12,

                        filter:
                            "brightness(.7)"
                    },

                    {
                        opacity:
                            1,

                        filter:
                            "brightness(1.65)"
                    },

                    {
                        opacity:
                            .55,

                        filter:
                            "brightness(1)"
                    }
                ],

                {
                    duration:
                        400,

                    delay:
                        150 +
                        index * 100,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"
                }
            );
        }
    );


    signalBurst(
        3,
        130
    );


    await wait(
        650
    );
}


/* ================================================================
   16. BACK SYSTEM LOCK
================================================================ */

async function systemLock() {

    animate(

        corePulse,

        [
            {
                opacity:
                    0,

                transform:
                    "scale(.75)"
            },

            {
                opacity:
                    .65,

                transform:
                    "scale(1)",

                offset:
                    .25
            },

            {
                opacity:
                    0,

                transform:
                    "scale(2)"
            }
        ],

        {
            duration:
                850,

            easing:
                "ease-out"
        }
    );


    backgroundRings.forEach(
        (ring, index) => {

            animate(

                ring,

                [
                    {
                        opacity:
                            .18
                    },

                    {
                        opacity:
                            .5
                    },

                    {
                        opacity:
                            .20
                    }
                ],

                {
                    duration:
                        850,

                    delay:
                        index * 100,

                    easing:
                        "ease-in-out"
                }
            );
        }
    );


    await wait(
        250
    );


    createSmartDust(
        6
    );


    signalBurst(
        4,
        75
    );


    await wait(
        550
    );
}


/* ================================================================
   17. BACK BRAND
================================================================ */

async function revealBackBrand() {

    animate(

        backBrand,

        [
            {
                opacity:
                    .12,

                transform: `
                    translateX(-50%)
                    scaleX(.82)
                `
            },

            {
                opacity:
                    1,

                transform: `
                    translateX(-50%)
                    scaleX(1)
                `
            }
        ],

        {
            duration:
                650,

            fill:
                "forwards",

            easing:
                "cubic-bezier(.16,1,.3,1)"
        }
    );


    await wait(
        450
    );
}


/* ================================================================
   18. FLIP
================================================================ */

async function flipToFront() {

    smartFlash();


    createSmartDust(
        9
    );


    await wait(
        100
    );


    isFront =
        true;


    card.classList.add(
        "flipped"
    );


    card.style.transform =
        "rotateY(180deg)";


    await wait(
        1050
    );
}


/* ================================================================
   19. FRONT FRAME
================================================================ */

async function revealFrame() {

    framePieces.forEach(
        (piece, index) => {

            animate(

                piece,

                [
                    {
                        opacity:
                            0,

                        filter:
                            "brightness(.55)"
                    },

                    {
                        opacity:
                            1,

                        filter:
                            "brightness(1.35)"
                    },

                    {
                        opacity:
                            .82,

                        filter:
                            "brightness(1)"
                    }
                ],

                {
                    duration:
                        500,

                    delay:
                        index * 70,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"
                }
            );
        }
    );


    animate(

        innerFrame,

        [
            {
                opacity:
                    .12
            },

            {
                opacity:
                    .78
            }
        ],

        {
            duration:
                650,

            fill:
                "forwards",

            easing:
                "ease-out"
        }
    );


    await wait(
        400
    );
}


/* ================================================================
   20. DESIGN EMBLEM MATERIALIZES
================================================================ */

async function revealDesignEmblem() {

    if (designHeader) {

        designHeader.style.opacity =
            "1";
    }


    if (designEmblem) {

        designEmblem.style.opacity =
            "1";
    }


    animate(

        designEmblem,

        [
            {
                opacity:
                    0,

                transform:
                    "scale(.55)",

                filter:
                    "brightness(.5) blur(4px)"
            },

            {
                opacity:
                    1,

                transform:
                    "scale(1.10)",

                filter:
                    "brightness(1.35) blur(0)",

                offset:
                    .72
            },

            {
                opacity:
                    1,

                transform:
                    "scale(1)",

                filter:
                    "brightness(1)"
            }
        ],

        {
            duration:
                850,

            fill:
                "forwards",

            easing:
                "cubic-bezier(.34,1.56,.64,1)"
        }
    );


    /* DRAW DESIGN SVG */

    if (designIcon) {

        const pieces =
            designIcon.querySelectorAll(
                "path, rect, circle, line"
            );


        pieces.forEach(
            (piece, index) => {

                if (
                    typeof piece.getTotalLength !==
                    "function"
                ) {

                    return;
                }


                const length =
                    piece.getTotalLength();


                piece.style.strokeDasharray =
                    `${length}`;


                piece.style.strokeDashoffset =
                    `${length}`;


                animate(

                    piece,

                    [
                        {
                            strokeDashoffset:
                                length,

                            opacity:
                                .12
                        },

                        {
                            strokeDashoffset:
                                0,

                            opacity:
                                1
                        }
                    ],

                    {
                        duration:
                            720,

                        delay:
                            index * 80,

                        fill:
                            "forwards",

                        easing:
                            "ease-out"
                    }
                );
            }
        );
    }


    emblemRings.forEach(
        (ring, index) => {

            animate(

                ring,

                [
                    {
                        opacity:
                            0,

                        transform: `
                            translate(-50%,-50%)
                            scale(.65)
                        `
                    },

                    {
                        opacity:
                            .65,

                        transform: `
                            translate(-50%,-50%)
                            scale(1)
                        `
                    }
                ],

                {
                    duration:
                        600,

                    delay:
                        index * 110,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"
                }
            );
        }
    );


    animate(

        emblemGlow,

        [
            {
                opacity:
                    0,

                transform:
                    "scale(.7)"
            },

            {
                opacity:
                    .58,

                transform:
                    "scale(1.08)"
            },

            {
                opacity:
                    .30,

                transform:
                    "scale(1)"
            }
        ],

        {
            duration:
                800,

            fill:
                "forwards",

            easing:
                "ease-out"
        }
    );


    createSmartDust(
        5
    );


    await wait(
        800
    );
}


/* ================================================================
   21. DESIGN TITLE
================================================================ */

async function revealDesignTitle() {

    if (!designTitle) {
        return;
    }


    designTitle.style.opacity =
        "1";


    animate(

        designTitle,

        [
            {
                opacity:
                    0,

                transform: `
                    translateX(-50%)
                    translateY(-9px)
                    translateZ(90px)
                    scaleX(1.22)
                `,

                filter:
                    "blur(5px)"
            },

            {
                opacity:
                    1,

                transform: `
                    translateX(-50%)
                    translateY(0)
                    translateZ(90px)
                    scaleX(1)
                `,

                filter:
                    "blur(0)"
            }
        ],

        {
            duration:
                700,

            fill:
                "forwards",

            easing:
                "cubic-bezier(.16,1,.3,1)"
        }
    );


    await wait(
        400
    );
}


/* ================================================================
   22. DESIGN HALO
================================================================ */

async function activateDesignHalo() {

    if (!designHalo) {
        return;
    }


    designHalo.style.opacity =
        "1";


    haloRings.forEach(
        (ring, index) => {

            animate(

                ring,

                [
                    {
                        opacity:
                            0,

                        transform: `
                            translate(-50%,-50%)
                            scale(.72)
                        `
                    },

                    {
                        opacity:
                            .52,

                        transform: `
                            translate(-50%,-50%)
                            scale(1)
                        `
                    },

                    {
                        opacity:
                            .28,

                        transform: `
                            translate(-50%,-50%)
                            scale(1)
                        `
                    }
                ],

                {
                    duration:
                        800,

                    delay:
                        index * 120,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"
                }
            );
        }
    );


    haloMarkers.forEach(
        (marker, index) => {

            animate(

                marker,

                [
                    {
                        opacity:
                            0,

                        transform:
                            "rotate(45deg) scale(0)"
                    },

                    {
                        opacity:
                            .65,

                        transform:
                            "rotate(45deg) scale(1.25)"
                    },

                    {
                        opacity:
                            .50,

                        transform:
                            "rotate(45deg) scale(1)"
                    }
                ],

                {
                    duration:
                        380,

                    delay:
                        260 +
                        index * 100,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"
                }
            );
        }
    );


    await wait(
        550
    );
}


/* ================================================================
   23. DESIGN TOOL ACTIVATION
================================================================ */

async function designToolActivation() {

    if (!designContainer) {
        return;
    }


    animate(

        designFocusRing,

        [
            {
                opacity:
                    .25,

                transform:
                    "translate(-50%,-50%) rotate(0deg) scale(1.2)"
            },

            {
                opacity:
                    1,

                transform:
                    "translate(-50%,-50%) rotate(180deg) scale(.86)"
            },

            {
                opacity:
                    .70,

                transform:
                    "translate(-50%,-50%) rotate(360deg) scale(1)"
            }
        ],

        {
            duration:
                900,

            easing:
                "cubic-bezier(.2,.8,.2,1)"
        }
    );


    animate(

        designNib,

        [
            {
                filter:
                    "brightness(.75)",

                transformOrigin:
                    "center",

                transform:
                    "scale(.92)"
            },

            {
                filter:
                    "brightness(1.45)",

                transform:
                    "scale(1.08)"
            },

            {
                filter:
                    "brightness(1)",

                transform:
                    "scale(1)"
            }
        ],

        {
            duration:
                850,

            easing:
                "ease-out"
        }
    );


    designNibDetails.forEach(
        (detail, index) => {

            animate(

                detail,

                [
                    {
                        opacity:
                            .15
                    },

                    {
                        opacity:
                            1,

                        filter:
                            "brightness(1.5)"
                    },

                    {
                        opacity:
                            1,

                        filter:
                            "brightness(1)"
                    }
                ],

                {
                    duration:
                        550,

                    delay:
                        index * 100,

                    fill:
                        "forwards"
                }
            );
        }
    );


    animate(

        designNibCenter,

        [
            {
                opacity:
                    .25,

                transformOrigin:
                    "center",

                transform:
                    "scale(.5)"
            },

            {
                opacity:
                    1,

                transform:
                    "scale(1.7)"
            },

            {
                opacity:
                    1,

                transform:
                    "scale(1)"
            }
        ],

        {
            duration:
                650,

            delay:
                250,

            fill:
                "both",

            easing:
                "ease-out"
        }
    );


    animate(

        designFlashPoint,

        [
            {
                opacity:
                    .3,

                transform:
                    "scale(.6)"
            },

            {
                opacity:
                    1,

                transform:
                    "scale(2)"
            },

            {
                opacity:
                    .7,

                transform:
                    "scale(1)"
            }
        ],

        {
            duration:
                650,

            easing:
                "ease-out"
        }
    );


    animate(

        designHalo,

        [
            {
                filter:
                    "brightness(.85)"
            },

            {
                filter:
                    "brightness(1.35)"
            },

            {
                filter:
                    "brightness(1)"
            }
        ],

        {
            duration:
                850,

            easing:
                "ease-out"
        }
    );


    signalBurst(
        3,
        100
    );


    await wait(
        900
    );
}


/* ================================================================
   24. PORTRAIT ENERGY
================================================================ */

async function activatePortraitSystem() {

    if (portraitEnergy) {

        portraitEnergy.style.opacity =
            "1";
    }


    portraitRings.forEach(
        (ring, index) => {

            animate(

                ring,

                [
                    {
                        opacity:
                            0,

                        transform: `
                            translate(-50%,-50%)
                            scale(.75)
                        `
                    },

                    {
                        opacity:
                            .48,

                        transform: `
                            translate(-50%,-50%)
                            scale(1)
                        `
                    }
                ],

                {
                    duration:
                        700,

                    delay:
                        index * 120,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"
                }
            );
        }
    );


    animate(

        portraitCoreLight,

        [
            {
                opacity:
                    0,

                transform: `
                    translate(-50%,-50%)
                    scale(.72)
                `
            },

            {
                opacity:
                    .58,

                transform: `
                    translate(-50%,-50%)
                    scale(1.04)
                `
            },

            {
                opacity:
                    .38,

                transform: `
                    translate(-50%,-50%)
                    scale(1)
                `
            }
        ],

        {
            duration:
                900,

            fill:
                "forwards",

            easing:
                "ease-out"
        }
    );


    await wait(
        380
    );
}


/* ================================================================
   25. SIDE NODES
================================================================ */

async function activateNodes() {

    brainNodes.forEach(
        (node, index) => {

            node.style.opacity =
                "1";


            animate(

                node,

                [
                    {
                        opacity:
                            0,

                        transform: `
                            translateY(8px)
                            scale(.7)
                        `
                    },

                    {
                        opacity:
                            1,

                        transform: `
                            translateY(0)
                            scale(1.08)
                        `
                    },

                    {
                        opacity:
                            .85,

                        transform: `
                            translateY(0)
                            scale(1)
                        `
                    }
                ],

                {
                    duration:
                        550,

                    delay:
                        index * 160,

                    fill:
                        "forwards",

                    easing:
                        "cubic-bezier(.34,1.56,.64,1)"
                }
            );
        }
    );


    await wait(
        500
    );
}


/* ================================================================
   26. PORTRAIT FRAME
================================================================ */

async function revealPortraitFrame() {

    if (!portraitFrame) {
        return;
    }


    portraitFrame.style.opacity =
        "1";


    animate(

        portraitFrame,

        [
            {
                opacity:
                    0,

                filter:
                    "blur(4px)",

                transform: `
                    translateX(-50%)
                    translateZ(70px)
                    scale(.96)
                `
            },

            {
                opacity:
                    1,

                filter:
                    "blur(0)",

                transform: `
                    translateX(-50%)
                    translateZ(70px)
                    scale(1)
                `
            }
        ],

        {
            duration:
                650,

            fill:
                "forwards",

            easing:
                "ease-out"
        }
    );


    await wait(
        300
    );
}


/* ================================================================
   27. DESIGN LOCK → MEMBER REVEAL
================================================================ */

async function revealPortrait() {

    if (!memberImage) {
        return;
    }


    /*
        DESIGN SYMBOL ACTIVATES
        ↓
        VECTOR SYSTEM LOCKS
        ↓
        FLASH
        ↓
        MEMBER REVEAL
    */


    await designToolActivation();


    designSystemFlash();


    await wait(
        90
    );


    memberImage.style.opacity =
        "1";


    animate(

        memberImage,

        [
            {
                opacity:
                    0,

                transform: `
                    translateY(26px)
                    scale(.965)
                `,

                filter: `
                    brightness(1.65)
                    contrast(.92)
                    blur(5px)
                `
            },

            {
                opacity:
                    .72,

                transform: `
                    translateY(8px)
                    scale(.99)
                `,

                filter: `
                    brightness(1.20)
                    contrast(1)
                    blur(1px)
                `,

                offset:
                    .34
            },

            {
                opacity:
                    1,

                transform: `
                    translateY(-3px)
                    scale(1.012)
                `,

                filter: `
                    brightness(1.04)
                    contrast(1.02)
                    blur(0)
                `,

                offset:
                    .78
            },

            {
                opacity:
                    1,

                transform: `
                    translateY(0)
                    scale(1)
                `,

                filter: `
                    brightness(1)
                    contrast(1)
                    blur(0)
                `
            }
        ],

        {
            duration:
                1050,

            fill:
                "forwards",

            easing:
                "cubic-bezier(.16,1,.3,1)"
        }
    );


    animate(

        portraitFrontGlow,

        [
            {
                opacity:
                    0
            },

            {
                opacity:
                    .72
            },

            {
                opacity:
                    .38
            }
        ],

        {
            duration:
                800,

            fill:
                "forwards",

            easing:
                "ease-out"
        }
    );


    createSmartDust(
        8
    );


    signalBurst(
        2,
        100
    );


    await wait(
        850
    );
}


/* ================================================================
   28. IDENTITY
================================================================ */

async function revealIdentity() {

    if (!identity) {
        return;
    }


    identity.style.opacity =
        "1";


    animate(

        identity,

        [
            {
                opacity:
                    0,

                transform: `
                    translateX(-50%)
                    translateY(18px)
                    translateZ(110px)
                `
            },

            {
                opacity:
                    1,

                transform: `
                    translateX(-50%)
                    translateY(0)
                    translateZ(110px)
                `
            }
        ],

        {
            duration:
                650,

            fill:
                "forwards",

            easing:
                "cubic-bezier(.16,1,.3,1)"
        }
    );


    animate(

        memberName,

        [
            {
                opacity:
                    0,

                letterSpacing:
                    "8px",

                filter:
                    "blur(5px)",

                transform:
                    "scaleX(1.06)"
            },

            {
                opacity:
                    1,

                letterSpacing:
                    "2.2px",

                filter:
                    "blur(0)",

                transform:
                    "scaleX(1)"
            }
        ],

        {
            duration:
                850,

            delay:
                150,

            fill:
                "both",

            easing:
                "cubic-bezier(.16,1,.3,1)"
        }
    );


    animate(

        memberRole,

        [
            {
                opacity:
                    0,

                letterSpacing:
                    "11px"
            },

            {
                opacity:
                    1,

                letterSpacing:
                    "7px"
            }
        ],

        {
            duration:
                600,

            delay:
                500,

            fill:
                "both",

            easing:
                "ease-out"
        }
    );


    await wait(
        850
    );
}


/* ================================================================
   29. CORNER LOCK
================================================================ */

async function cornerLock() {

    premiumCorners.forEach(
        (corner, index) => {

            setTimeout(
                () => {

                    animate(

                        corner,

                        [
                            {
                                opacity:
                                    .25,

                                filter:
                                    "brightness(.75)"
                            },

                            {
                                opacity:
                                    1,

                                filter:
                                    "brightness(1.7)"
                            },

                            {
                                opacity:
                                    .8,

                                filter:
                                    "brightness(1)"
                            }
                        ],

                        {
                            duration:
                                420,

                            easing:
                                "ease-out"
                        }
                    );


                    createSmartTrace(
                        .45
                    );

                },

                index * 150
            );
        }
    );


    await wait(
        800
    );
}


/* ================================================================
   30. RAIL CONFIRMATION
================================================================ */

async function railConfirmation() {

    railLights.forEach(
        (rail, index) => {

            animate(

                rail,

                [
                    {
                        opacity:
                            0
                    },

                    {
                        opacity:
                            .85
                    },

                    {
                        opacity:
                            .35
                    }
                ],

                {
                    duration:
                        600,

                    delay:
                        index * 160,

                    easing:
                        "ease-out"
                }
            );
        }
    );


    await wait(
        550
    );
}


/* ================================================================
   31. FINAL DESIGN LOCK
================================================================ */

async function finalDesignLock() {

    signalBurst(
        2,
        140
    );


    createSmartDust(
        4
    );


    animate(

        designIcon,

        [
            {
                filter: `
                    brightness(1)
                    drop-shadow(
                        0 0 3px
                        rgba(255,255,255,.18)
                    )
                `
            },

            {
                filter: `
                    brightness(1.16)

                    drop-shadow(
                        0 0 5px
                        rgba(255,255,255,.35)
                    )

                    drop-shadow(
                        0 0 11px
                        rgba(223,44,161,.22)
                    )
                `
            },

            {
                filter: `
                    brightness(1)

                    drop-shadow(
                        0 0 3px
                        rgba(255,255,255,.18)
                    )
                `
            }
        ],

        {
            duration:
                800,

            easing:
                "ease-in-out"
        }
    );


    animate(

        designNibCenter,

        [
            {
                transformOrigin:
                    "center",

                transform:
                    "scale(1)"
            },

            {
                transform:
                    "scale(1.7)"
            },

            {
                transform:
                    "scale(1)"
            }
        ],

        {
            duration:
                650,

            easing:
                "ease-out"
        }
    );


    await wait(
        600
    );
}


/* ================================================================
   32. COMPLETE SEQUENCE
================================================================ */

async function startSequence() {

    prepareIntro();


    isBusy =
        true;

    isFront =
        false;


    await wait(
        250
    );


    /* CARD ENTER */

    await revealStage();


    await wait(
        250
    );


    /* SMART CLUB BACK */

    await activateSmartCore();

    await synchronizeOrbits();

    await activateCircuits();

    await systemLock();

    await revealBackBrand();


    await wait(
        220
    );


    /* FLIP */

    await flipToFront();


    /* DESIGN FRONT */

    await revealFrame();

    await revealDesignEmblem();

    await revealDesignTitle();

    await activateDesignHalo();

    await activatePortraitSystem();

    await activateNodes();

    await revealPortraitFrame();


    /*
        DESIGN SPECIAL MOMENT

        pen / vector activation
        ↓
        focus lock
        ↓
        flash
        ↓
        member
    */


    await revealPortrait();

    await revealIdentity();

    await cornerLock();

    await railConfirmation();

    await finalDesignLock();


    isBusy =
        false;
}


/* ================================================================
   33. START
================================================================ */

window.addEventListener(
    "load",
    startSequence
);


/* ================================================================
   34. POINTER PARALLAX
================================================================ */

if (scene) {

    scene.addEventListener(
        "pointermove",
        event => {

            if (
                !isFront ||
                isBusy
            ) {

                return;
            }


            const rect =
                scene.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width;


            const y =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height;


            targetRY =
                (x - .5) *
                -7;


            targetRX =
                (y - .5) *
                5;


            targetPortraitX =
                (x - .5) *
                9;


            targetPortraitY =
                (y - .5) *
                5;


            targetShineX =
                (x - .5) *
                55;
        }
    );
}


/* ================================================================
   35. SMOOTH 3D LOOP
================================================================ */

function renderLoop() {

    currentRX +=
        (
            targetRX -
            currentRX
        ) *
        .065;


    currentRY +=
        (
            targetRY -
            currentRY
        ) *
        .065;


    currentPortraitX +=
        (
            targetPortraitX -
            currentPortraitX
        ) *
        .075;


    currentPortraitY +=
        (
            targetPortraitY -
            currentPortraitY
        ) *
        .075;


    currentShineX +=
        (
            targetShineX -
            currentShineX
        ) *
        .06;


    if (
        isFront &&
        !isBusy &&
        card
    ) {

        card.style.transform = `

            rotateY(
                ${180 + currentRY}deg
            )

            rotateX(
                ${currentRX}deg
            )

        `;


        if (memberImage) {

            memberImage.style.transform = `

                translate(
                    ${currentPortraitX}px,
                    ${currentPortraitY}px
                )

                scale(1.01)

            `;
        }


        /*
            DESIGN EMBLEM MOVES
            OPPOSITE TO PORTRAIT
        */

        if (designEmblem) {

            designEmblem.style.translate = `

                ${currentPortraitX * -.15}px

                ${currentPortraitY * -.18}px

            `;
        }


        if (portraitEnergy) {

            portraitEnergy.style.translate = `

                ${currentPortraitX * .17}px

                ${currentPortraitY * .15}px

            `;
        }


        if (designHalo) {

            designHalo.style.translate = `

                ${currentPortraitX * .07}px

                ${currentPortraitY * .07}px

            `;
        }


        if (cardShine) {

            cardShine.style.marginLeft =
                `${currentShineX}px`;
        }
    }


    requestAnimationFrame(
        renderLoop
    );
}


renderLoop();


/* ================================================================
   36. RESET PARALLAX
================================================================ */

if (scene) {

    scene.addEventListener(
        "pointerleave",
        () => {

            targetRX =
                0;

            targetRY =
                0;


            targetPortraitX =
                0;

            targetPortraitY =
                0;


            targetShineX =
                0;
        }
    );
}


/* ================================================================
   37. AMBIENT SIGNAL
================================================================ */

function ambientSignal() {

    if (
        isFront &&
        !isBusy &&
        Math.random() >
        .60
    ) {

        createSmartTrace(
            .30
        );
    }


    setTimeout(

        ambientSignal,

        5000 +
        Math.random() *
        4500

    );
}


ambientSignal();


/* ================================================================
   38. DESIGN EMBLEM BREATH
================================================================ */

function designBreath() {

    if (
        isFront &&
        !isBusy &&
        designIcon
    ) {

        animate(

            designIcon,

            [
                {
                    filter: `
                        brightness(1)
                        drop-shadow(
                            0 0 3px
                            rgba(255,255,255,.12)
                        )
                    `
                },

                {
                    filter: `
                        brightness(1.08)

                        drop-shadow(
                            0 0 5px
                            rgba(255,255,255,.25)
                        )

                        drop-shadow(
                            0 0 8px
                            rgba(222,43,160,.12)
                        )
                    `
                },

                {
                    filter: `
                        brightness(1)

                        drop-shadow(
                            0 0 3px
                            rgba(255,255,255,.12)
                        )
                    `
                }
            ],

            {
                duration:
                    1100,

                easing:
                    "ease-in-out"
            }
        );
    }


    setTimeout(

        designBreath,

        7000 +
        Math.random() *
        5000

    );
}


designBreath();


/* ================================================================
   39. RANDOM DESIGN FOCUS
================================================================ */

function randomDesignFocus() {

    if (
        isFront &&
        !isBusy &&
        designContainer &&
        Math.random() >
        .50
    ) {

        animate(

            designFocusRing,

            [
                {
                    opacity:
                        .35,

                    transform:
                        "translate(-50%,-50%) rotate(0deg) scale(1)"
                },

                {
                    opacity:
                        1,

                    transform:
                        "translate(-50%,-50%) rotate(180deg) scale(.86)"
                },

                {
                    opacity:
                        .68,

                    transform:
                        "translate(-50%,-50%) rotate(360deg) scale(1)"
                }
            ],

            {
                duration:
                    900,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        );


        animate(

            designNibCenter,

            [
                {
                    transformOrigin:
                        "center",

                    transform:
                        "scale(1)"
                },

                {
                    transform:
                        "scale(1.45)"
                },

                {
                    transform:
                        "scale(1)"
                }
            ],

            {
                duration:
                    700,

                easing:
                    "ease-in-out"
            }
        );


        signalBurst(
            2,
            100
        );
    }


    setTimeout(

        randomDesignFocus,

        8500 +
        Math.random() *
        6500

    );
}


randomDesignFocus();


/* ================================================================
   40. RANDOM NODE RESPONSE
================================================================ */

function nodeResponse() {

    if (
        isFront &&
        !isBusy &&
        brainNodes.length
    ) {

        const node =
            brainNodes[
                Math.floor(
                    Math.random() *
                    brainNodes.length
                )
            ];


        animate(

            node,

            [
                {
                    filter:
                        "brightness(1)"
                },

                {
                    filter:
                        "brightness(1.18)"
                },

                {
                    filter:
                        "brightness(1)"
                }
            ],

            {
                duration:
                    600,

                easing:
                    "ease-in-out"
            }
        );
    }


    setTimeout(

        nodeResponse,

        6500 +
        Math.random() *
        5000

    );
}


nodeResponse();


/* ================================================================
   41. CLICK CARD — MANUAL FLIP
================================================================ */

if (card) {

    card.addEventListener(
        "click",
        async () => {

            if (isBusy) {

                return;
            }


            isBusy =
                true;


            /*
                RESET PARALLAX BEFORE FLIP
            */

            targetRX =
                0;

            targetRY =
                0;

            currentRX =
                0;

            currentRY =
                0;


            if (isFront) {

                isFront =
                    false;


                card.classList.remove(
                    "flipped"
                );


                card.style.transform =
                    "rotateY(0deg)";


                await wait(
                    1000
                );

            } else {

                smartFlash();


                await wait(
                    80
                );


                isFront =
                    true;


                card.classList.add(
                    "flipped"
                );


                card.style.transform =
                    "rotateY(180deg)";


                await wait(
                    1000
                );


                /*
                    SYMBOL REACTIVATES WHEN
                    RETURNING TO DESIGN FRONT
                */

                await designToolActivation();
            }


            isBusy =
                false;
        }
    );
}


/* ================================================================
   42. CLICK DESIGN EMBLEM
================================================================ */

if (designContainer) {

    designContainer.addEventListener(
        "pointerdown",
        event => {

            if (
                !isFront ||
                isBusy
            ) {

                return;
            }


            event.stopPropagation();


            animate(

                designFocusRing,

                [
                    {
                        opacity:
                            .4,

                        transform:
                            "translate(-50%,-50%) scale(1.2) rotate(0deg)"
                    },

                    {
                        opacity:
                            1,

                        transform:
                            "translate(-50%,-50%) scale(.85) rotate(180deg)"
                    },

                    {
                        opacity:
                            .7,

                        transform:
                            "translate(-50%,-50%) scale(1) rotate(360deg)"
                    }
                ],

                {
                    duration:
                        750,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)"
                }
            );


            animate(

                designNibCenter,

                [
                    {
                        transformOrigin:
                            "center",

                        transform:
                            "scale(.7)"
                    },

                    {
                        transform:
                            "scale(1.8)"
                    },

                    {
                        transform:
                            "scale(1)"
                    }
                ],

                {
                    duration:
                        650,

                    easing:
                        "ease-out"
                }
            );


            createSmartDust(
                4
            );


            signalBurst(
                2,
                80
            );
        }
    );
}


/* ================================================================
   43. DOUBLE CLICK EMBLEM
================================================================ */

if (designContainer) {

    designContainer.addEventListener(
        "dblclick",
        event => {

            event.stopPropagation();


            if (
                !isFront ||
                isBusy
            ) {

                return;
            }


            designSystemFlash();


            createSmartDust(
                6
            );


            signalBurst(
                3,
                70
            );


            animate(

                designIcon,

                [
                    {
                        transform:
                            "scale(1)"
                    },

                    {
                        transform:
                            "scale(1.08)"
                    },

                    {
                        transform:
                            "scale(1)"
                    }
                ],

                {
                    duration:
                        650,

                    easing:
                        "ease-out"
                }
            );
        }
    );
}


/* ================================================================
   44. GLASS REFLECTION RESPONSE
================================================================ */

if (
    glassReflection &&
    scene
) {

    scene.addEventListener(
        "pointermove",
        event => {

            if (
                !isFront ||
                isBusy
            ) {

                return;
            }


            const rect =
                scene.getBoundingClientRect();


            const normalizedX =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width;


            glassReflection.style.opacity =
                `${
                    .25 +
                    Math.abs(
                        normalizedX -
                        .5
                    ) *
                    .35
                }`;
        }
    );
}


/* ================================================================
   45. VISIBILITY RESET
================================================================ */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            targetRX =
                0;

            targetRY =
                0;


            targetPortraitX =
                0;

            targetPortraitY =
                0;


            targetShineX =
                0;
        }
    }
);


/* ================================================================
   46. RESIZE RESET
================================================================ */

window.addEventListener(
    "resize",
    () => {

        targetRX =
            0;

        targetRY =
            0;


        currentRX =
            0;

        currentRY =
            0;


        targetPortraitX =
            0;

        targetPortraitY =
            0;


        currentPortraitX =
            0;

        currentPortraitY =
            0;


        targetShineX =
            0;

        currentShineX =
            0;
    }
);


/* ================================================================
   SMART CLUB — DESIGN SYSTEM READY
================================================================ */