/* ================================================================
   SMART CLUB — PRESIDENT CARD
   FINAL MAGENTA / PEARL / CHROME EDITION

   VISUAL PHILOSOPHY

   - Deep plum / black atmosphere
   - Smart Club magenta as accent
   - Pearl white / chrome as premium light
   - No constant pink explosions
   - Smooth cinematic reveal
   - Custom crown + brain + lightning system
   - Controlled ambient animation after reveal
================================================================ */



/* ================================================================
   1. DOM ELEMENTS
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



/* ================================================================
   CARD SIDES
================================================================ */

const cardFront =
    document.querySelector(".card-front");

const cardBack =
    document.querySelector(".card-back");



/* ================================================================
   PRESIDENT
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
   PRESIDENT HEADER / CROWN
================================================================ */

const presidentHeader =
    document.querySelector(".president-header");

const presidentTitle =
    document.querySelector(".president-title");

const presidentEmblem =
    document.querySelector(".president-emblem");

const crownContainer =
    document.querySelector(".crown-container");

const crownIcon =
    document.querySelector(".crown-icon");

const crownJewels =
    document.querySelectorAll(".crown-jewel");

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
   PORTRAIT SYSTEM
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
   LEADERSHIP HALO
================================================================ */

const leadershipHalo =
    document.querySelector(".leadership-halo");

const haloRings =
    document.querySelectorAll(".leadership-halo-ring");

const haloMarkers =
    document.querySelectorAll(".halo-marker");



/* ================================================================
   SIDE SMART NODES
================================================================ */

const brainNodes =
    document.querySelectorAll(".brain-node");

const nodeIcons =
    document.querySelectorAll(".node-icon");

const nodePulses =
    document.querySelectorAll(".node-pulse");



/* ================================================================
   CARD FRAME
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

const leadershipOrnaments =
    document.querySelectorAll(".leadership-ornament");

const movingBorder =
    document.querySelector(".moving-border-light");

const cardShine =
    document.getElementById("cardShine");

const glassReflection =
    document.querySelector(".glass-reflection");

const topArmor =
    document.querySelector(".top-armor");



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
    new Promise(resolve =>
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
   5. AMBIENT PARTICLES
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
            0.7 +
            Math.random() * 1.6;


        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.opacity =
            `${
                0.10 +
                Math.random() * 0.34
            }`;


        particle.style.animationDuration =
            `${
                10 +
                Math.random() * 12
            }s`;


        particle.style.animationDelay =
            `${
                Math.random() * -18
            }s`;


        /*
            Most particles are pearl.

            A few have a subtle magenta tint.
        */

        if (
            Math.random() > 0.22
        ) {

            particle.style.background =
                PEARL;


            particle.style.boxShadow = `

                0 0 3px
                rgba(255,255,255,.65),

                0 0 8px
                rgba(255,255,255,.12)

            `;

        }

        else {

            particle.style.background =
                MAGENTA_SOFT;


            particle.style.boxShadow = `

                0 0 4px
                rgba(255,91,190,.38)

            `;

        }


        particlesContainer.appendChild(
            particle
        );

    }

}


createParticles();



/* ================================================================
   6. SMALL FRAME SIGNAL
================================================================ */

function createSmartTrace(
    intensity = 1
) {

    if (!card) {

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


    /* TOP */

    if (side === 0) {

        x =
            rect.left +
            Math.random() *
            rect.width;

        y =
            rect.top + 7;

        angle =
            90;

    }


    /* RIGHT */

    else if (side === 1) {

        x =
            rect.right - 7;

        y =
            rect.top +
            Math.random() *
            rect.height;

        angle =
            180;

    }


    /* BOTTOM */

    else if (side === 2) {

        x =
            rect.left +
            Math.random() *
            rect.width;

        y =
            rect.bottom - 7;

        angle =
            -90;

    }


    /* LEFT */

    else {

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
        `${
            35 +
            Math.random() * 45
        }px`;

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

        0 0 ${3 * intensity}px
        rgba(255,255,255,.55),

        0 0 ${8 * intensity}px
        rgba(221,43,158,.20)

    `;


    scene.appendChild(
        trace
    );


    trace.animate(

        [

            {

                opacity: 0,

                transform:
                    `
                    rotate(${angle}deg)
                    scaleX(.08)
                    `

            },

            {

                opacity: .9,

                transform:
                    `
                    rotate(${angle}deg)
                    scaleX(1)
                    `,

                offset:
                    .30

            },

            {

                opacity: 0,

                transform:
                    `
                    rotate(${angle}deg)
                    scaleX(.35)
                    `

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
   7. SHORT SIGNAL BURST
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
                    Math.random() * .35
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

    if (!card) {

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
                    Math.random() * 1.8;


                dust.style.width =
                    `${size}px`;

                dust.style.height =
                    `${size}px`;

                dust.style.borderRadius =
                    "50%";


                dust.style.background =

                    Math.random() > .25

                        ? PEARL

                        : MAGENTA_SOFT;


                dust.style.boxShadow = `

                    0 0 4px
                    rgba(255,255,255,.40),

                    0 0 8px
                    rgba(222,44,161,.16)

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

                            opacity: 0,

                            transform:
                                "scale(.2)"

                        },

                        {

                            opacity: .65,

                            transform:
                                "scale(1)",

                            offset:
                                .20

                        },

                        {

                            opacity: 0,

                            transform:
                                `
                                translate(
                                    ${dx}px,
                                    ${dy}px
                                )

                                scale(.2)
                                `

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
   9. REVEAL FLASH
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
                opacity: 0
            },

            {
                opacity: .56,
                offset: .17
            },

            {
                opacity: .10,
                offset: .33
            },

            {
                opacity: .24,
                offset: .42
            },

            {
                opacity: 0
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
   10. PREPARE INTRO
================================================================ */

function prepareIntro() {


    const hiddenElements = [

        presidentHeader,

        presidentEmblem,

        presidentTitle,

        leadershipHalo,

        portraitEnergy,

        portraitFrame,

        identity,

        ...brainNodes,

        ...leadershipOrnaments

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



    /* PRESIDENT */

    if (memberImage) {

        memberImage.style.opacity =
            "0";


        memberImage.style.transform =
            `
            translateY(38px)
            scale(.94)
            `;

    }



    /* IDENTITY */

    if (identity) {

        identity.style.transform = `

            translateX(-50%)

            translateY(20px)

            translateZ(110px)

        `;

    }



    /* CROWN */

    if (presidentEmblem) {

        presidentEmblem.style.transform =
            "scale(.68)";

    }



    /* STAGE */

    if (cardStage) {

        cardStage.style.opacity =
            "0";

    }



    /* BACK SYSTEM QUIET */

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
   11. CARD ENTERS
================================================================ */

async function revealStage() {


    animate(

        cardStage,

        [

            {

                opacity: 0,

                transform:
                    `
                    translateY(30px)
                    scale(.96)
                    `

            },

            {

                opacity: 1,

                transform:
                    `
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
   12. SMART BRAIN CORE ACTIVATION
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



    /*
        DRAW CUSTOM BRAIN SVG
    */

    const brainLines = [

        ...brainPaths,

        ...brainNeuralLines

    ];


    brainLines.forEach(
        (path, index) => {


            if (
                typeof path.getTotalLength
                !== "function"
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



    /*
        NEURAL DOTS
    */

    brainDots.forEach(
        (dot, index) => {

            animate(

                dot,

                [

                    {

                        opacity: 0,

                        transform:
                            "scale(0)"

                    },

                    {

                        opacity: 1,

                        transform:
                            "scale(1.5)"

                    },

                    {

                        opacity: .85,

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
   13. ORBIT SYNCHRONIZATION
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

                        opacity: 0,

                        transform:
                            "scale(0)"

                    },

                    {

                        opacity: 1,

                        transform:
                            "scale(1.35)"

                    },

                    {

                        opacity: .7,

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
   14. CIRCUITS ACTIVATE
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
   15. SMART CORE LOCK
================================================================ */

async function systemLock() {


    animate(

        corePulse,

        [

            {

                opacity: 0,

                transform:
                    "scale(.75)"

            },

            {

                opacity: .65,

                transform:
                    "scale(1)",

                offset:
                    .25

            },

            {

                opacity: 0,

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
   16. BACK BRAND
================================================================ */

async function revealBackBrand() {


    animate(

        backBrand,

        [

            {

                opacity:
                    .12,

                transform:
                    `
                    translateX(-50%)
                    scaleX(.82)
                    `

            },

            {

                opacity:
                    1,

                transform:
                    `
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
   17. CARD FLIP
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
   18. FRONT FRAME APPEARS
================================================================ */

async function revealFrame() {


    framePieces.forEach(
        (piece, index) => {

            animate(

                piece,

                [

                    {

                        opacity: 0,

                        filter:
                            "brightness(.55)"

                    },

                    {

                        opacity: 1,

                        filter:
                            "brightness(1.35)"

                    },

                    {

                        opacity: .82,

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
   19. CROWN REVEAL
================================================================ */

async function revealCrown() {


    if (presidentHeader) {

        presidentHeader.style.opacity =
            "1";

    }


    if (presidentEmblem) {

        presidentEmblem.style.opacity =
            "1";

    }



    animate(

        presidentEmblem,

        [

            {

                opacity: 0,

                transform:
                    "scale(.62)",

                filter:
                    "brightness(.55)"

            },

            {

                opacity: 1,

                transform:
                    "scale(1.07)",

                filter:
                    "brightness(1.25)",

                offset:
                    .72

            },

            {

                opacity: 1,

                transform:
                    "scale(1)",

                filter:
                    "brightness(1)"

            }

        ],

        {

            duration:
                800,

            fill:
                "forwards",

            easing:
                "cubic-bezier(.34,1.56,.64,1)"

        }

    );



    /*
        DRAW THE CROWN SVG
    */

    if (crownIcon) {


        const paths =
            crownIcon.querySelectorAll(
                "path"
            );


        paths.forEach(
            (path, index) => {


                if (
                    typeof path.getTotalLength
                    !== "function"
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
                                .15,

                            filter:
                                "brightness(.7)"

                        },

                        {

                            strokeDashoffset:
                                0,

                            opacity:
                                1,

                            filter:
                                "brightness(1.45)"

                        },

                        {

                            strokeDashoffset:
                                0,

                            opacity:
                                1,

                            filter:
                                "brightness(1)"

                        }

                    ],

                    {

                        duration:
                            850,

                        delay:
                            index * 130,

                        fill:
                            "forwards",

                        easing:
                            "ease-out"

                    }

                );

            }
        );

    }



    /*
        CROWN JEWELS
    */

    crownJewels.forEach(
        (jewel, index) => {

            animate(

                jewel,

                [

                    {

                        opacity: 0,

                        transform:
                            "scale(0)"

                    },

                    {

                        opacity: 1,

                        transform:
                            "scale(1.55)"

                    },

                    {

                        opacity: 1,

                        transform:
                            "scale(1)"

                    }

                ],

                {

                    duration:
                        380,

                    delay:
                        450 +
                        index * 120,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"

                }

            );

        }
    );



    /*
        CROWN RINGS
    */

    emblemRings.forEach(
        (ring, index) => {

            animate(

                ring,

                [

                    {

                        opacity: 0,

                        transform:
                            `
                            translate(-50%,-50%)
                            scale(.65)
                            `

                    },

                    {

                        opacity:
                            .65,

                        transform:
                            `
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

                opacity: 0,

                transform:
                    "scale(.7)"

            },

            {

                opacity:
                    .55,

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
   20. PRESIDENT TITLE
================================================================ */

async function revealPresidentTitle() {


    if (!presidentTitle) {

        return;

    }


    presidentTitle.style.opacity =
        "1";


    animate(

        presidentTitle,

        [

            {

                opacity: 0,

                transform:
                    `
                    translateX(-50%)
                    translateY(-9px)
                    translateZ(90px)
                    scaleX(1.22)
                    `,

                filter:
                    "blur(5px)"

            },

            {

                opacity: 1,

                transform:
                    `
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
   21. LEADERSHIP HALO
================================================================ */

async function activateLeadershipHalo() {


    if (!leadershipHalo) {

        return;

    }


    leadershipHalo.style.opacity =
        "1";


    haloRings.forEach(
        (ring, index) => {

            animate(

                ring,

                [

                    {

                        opacity: 0,

                        transform:
                            `
                            translate(-50%,-50%)
                            scale(.72)
                            `

                    },

                    {

                        opacity:
                            .52,

                        transform:
                            `
                            translate(-50%,-50%)
                            scale(1)
                            `

                    },

                    {

                        opacity:
                            .28,

                        transform:
                            `
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

                        opacity: 0,

                        transform:
                            `
                            rotate(45deg)
                            scale(0)
                            `

                    },

                    {

                        opacity:
                            .65,

                        transform:
                            `
                            rotate(45deg)
                            scale(1.25)
                            `

                    },

                    {

                        opacity:
                            .50,

                        transform:
                            `
                            rotate(45deg)
                            scale(1)
                            `

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
   22. PORTRAIT ENERGY SYSTEM
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

                        opacity: 0,

                        transform:
                            `
                            translate(-50%,-50%)
                            scale(.75)
                            `

                    },

                    {

                        opacity:
                            .48,

                        transform:
                            `
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

                opacity: 0,

                transform:
                    `
                    translate(-50%,-50%)
                    scale(.72)
                    `

            },

            {

                opacity:
                    .58,

                transform:
                    `
                    translate(-50%,-50%)
                    scale(1.04)
                    `

            },

            {

                opacity:
                    .38,

                transform:
                    `
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
   23. CUSTOM BRAIN + LIGHTNING NODES
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

                        transform:
                            `
                            translateY(8px)
                            scale(.7)
                            `

                    },

                    {

                        opacity:
                            1,

                        transform:
                            `
                            translateY(0)
                            scale(1.08)
                            `

                    },

                    {

                        opacity:
                            .85,

                        transform:
                            `
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


    nodeIcons.forEach(
        (icon, index) => {

            animate(

                icon,

                [

                    {

                        opacity: 0,

                        filter:
                            "brightness(.5)"

                    },

                    {

                        opacity: 1,

                        filter:
                            "brightness(1.4)"

                    },

                    {

                        opacity: .9,

                        filter:
                            "brightness(1)"

                    }

                ],

                {

                    duration:
                        500,

                    delay:
                        160 +
                        index * 160,

                    fill:
                        "forwards",

                    easing:
                        "ease-out"

                }

            );

        }
    );


    await wait(
        500
    );

}



/* ================================================================
   24. PORTRAIT FRAME
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

                opacity: 0,

                filter:
                    "blur(4px)",

                transform:
                    `
                    translateX(-50%)
                    translateZ(70px)
                    scale(.96)
                    `

            },

            {

                opacity: 1,

                filter:
                    "blur(0)",

                transform:
                    `
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
   25. PRESIDENT PORTRAIT REVEAL
================================================================ */

async function revealPortrait() {


    if (!memberImage) {

        return;

    }


    memberImage.style.opacity =
        "1";


    animate(

        memberImage,

        [

            {

                opacity: 0,

                transform:
                    `
                    translateY(38px)
                    scale(.94)
                    `,

                filter:
                    `
                    brightness(.58)
                    contrast(1.08)
                    blur(3px)
                    `

            },

            {

                opacity:
                    .48,

                transform:
                    `
                    translateY(15px)
                    scale(.98)
                    `,

                filter:
                    `
                    brightness(.82)
                    contrast(1.06)
                    blur(1px)
                    `,

                offset:
                    .42

            },

            {

                opacity:
                    1,

                transform:
                    `
                    translateY(-3px)
                    scale(1.012)
                    `,

                filter:
                    `
                    brightness(1.04)
                    contrast(1.02)
                    blur(0)
                    `,

                offset:
                    .82

            },

            {

                opacity:
                    1,

                transform:
                    `
                    translateY(0)
                    scale(1)
                    `,

                filter:
                    `
                    brightness(1)
                    contrast(1)
                    blur(0)
                    `

            }

        ],

        {

            duration:
                1150,

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
                    .62
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
        7
    );


    await wait(
        850
    );

}



/* ================================================================
   26. MEMBER IDENTITY
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

                opacity: 0,

                transform:
                    `
                    translateX(-50%)
                    translateY(18px)
                    translateZ(110px)
                    `

            },

            {

                opacity: 1,

                transform:
                    `
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



    /*
        NAME
    */

    animate(

        memberName,

        [

            {

                opacity: 0,

                letterSpacing:
                    "8px",

                filter:
                    "blur(5px)",

                transform:
                    "scaleX(1.06)"

            },

            {

                opacity: 1,

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



    /*
        PRESIDENT ROLE
    */

    animate(

        memberRole,

        [

            {

                opacity: 0,

                letterSpacing:
                    "11px"

            },

            {

                opacity: 1,

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
   27. FOUR CORNERS LOCK
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
   28. RAIL CONFIRMATION
================================================================ */

async function railConfirmation() {


    railLights.forEach(
        (rail, index) => {

            animate(

                rail,

                [

                    {
                        opacity: 0
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
   29. FINAL PRESIDENT LOCK
================================================================ */

async function finalLock() {


    signalBurst(
        2,
        140
    );


    createSmartDust(
        4
    );


    /*
        Crown final acknowledgement
    */

    animate(

        crownIcon,

        [

            {

                filter:
                    `
                    brightness(1)

                    drop-shadow(
                        0 0 3px
                        rgba(255,255,255,.18)
                    )
                    `

            },

            {

                filter:
                    `
                    brightness(1.12)

                    drop-shadow(
                        0 0 5px
                        rgba(255,255,255,.35)
                    )

                    drop-shadow(
                        0 0 10px
                        rgba(223,44,161,.18)
                    )
                    `

            },

            {

                filter:
                    `
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


    await wait(
        600
    );

}



/* ================================================================
   30. COMPLETE CINEMATIC SEQUENCE
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


    /* CARD ENTERS */

    await revealStage();


    await wait(
        250
    );


    /* SMART CLUB BACK SYSTEM */

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



    /* PRESIDENT CARD BUILDS */

    await revealFrame();


    await revealCrown();


    await revealPresidentTitle();


    await activateLeadershipHalo();


    await activatePortraitSystem();


    await activateNodes();


    await revealPortraitFrame();


    await revealPortrait();


    await revealIdentity();


    await cornerLock();


    await railConfirmation();


    await finalLock();



    /* INTERACTION ENABLED */

    isBusy =
        false;

}



/* ================================================================
   31. START WHEN PAGE LOADS
================================================================ */

window.addEventListener(
    "load",
    startSequence
);



/* ================================================================
   32. MOUSE PARALLAX
================================================================ */

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



        /* CARD */

        targetRY =
            (x - .5) * -7;


        targetRX =
            (y - .5) * 5;



        /* PRESIDENT */

        targetPortraitX =
            (x - .5) * 9;


        targetPortraitY =
            (y - .5) * 5;



        /* REFLECTION */

        targetShineX =
            (x - .5) * 55;

    }
);



/* ================================================================
   33. SMOOTH 3D RENDER LOOP
================================================================ */

function renderLoop() {


    currentRX +=
        (
            targetRX -
            currentRX
        ) * .065;


    currentRY +=
        (
            targetRY -
            currentRY
        ) * .065;


    currentPortraitX +=
        (
            targetPortraitX -
            currentPortraitX
        ) * .075;


    currentPortraitY +=
        (
            targetPortraitY -
            currentPortraitY
        ) * .075;


    currentShineX +=
        (
            targetShineX -
            currentShineX
        ) * .06;



    if (
        isFront &&
        !isBusy
    ) {


        /* CARD */

        card.style.transform = `

            rotateY(
                ${180 + currentRY}deg
            )

            rotateX(
                ${currentRX}deg
            )

        `;



        /* PRESIDENT */

        if (memberImage) {

            memberImage.style.transform = `

                translate(
                    ${currentPortraitX}px,
                    ${currentPortraitY}px
                )

                scale(1.01)

            `;

        }



        /* CROWN — OPPOSITE MOTION */

        if (presidentEmblem) {

            presidentEmblem.style.translate = `

                ${currentPortraitX * -.15}px

                ${currentPortraitY * -.18}px

            `;

        }



        /* ENERGY */

        if (portraitEnergy) {

            portraitEnergy.style.translate = `

                ${currentPortraitX * .17}px

                ${currentPortraitY * .15}px

            `;

        }



        /* HALO */

        if (leadershipHalo) {

            leadershipHalo.style.translate = `

                ${currentPortraitX * .07}px

                ${currentPortraitY * .07}px

            `;

        }



        /* SHINE */

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
   34. RESET PARALLAX
================================================================ */

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



/* ================================================================
   35. SUBTLE AMBIENT SIGNAL

   Very important:
   this is deliberately rare.

   We do NOT want a constant neon show.
================================================================ */

function ambientSignal() {


    if (
        isFront &&
        !isBusy &&
        Math.random() > .60
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
   36. CROWN BREATH
================================================================ */

function crownBreath() {


    if (
        isFront &&
        !isBusy &&
        crownIcon
    ) {


        animate(

            crownIcon,

            [

                {

                    filter:
                        `
                        brightness(1)

                        drop-shadow(
                            0 0 3px
                            rgba(255,255,255,.12)
                        )
                        `

                },

                {

                    filter:
                        `
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

                    filter:
                        `
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

        crownBreath,

        7000 +
        Math.random() *
        5000

    );

}


crownBreath();



/* ================================================================
   37. RANDOM NODE RESPONSE
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
   38. CLICK CARD TO FLIP
================================================================ */

card.addEventListener(
    "click",
    async () => {


        if (isBusy) {

            return;

        }


        isBusy =
            true;


        signalBurst(
            2,
            100
        );


        await wait(
            150
        );



        /* FRONT → BACK */

        if (isFront) {


            isFront =
                false;


            card.classList.remove(
                "flipped"
            );


            card.style.transform =
                "rotateY(0deg)";


            await wait(
                1050
            );

        }



        /* BACK → FRONT */

        else {


            smartFlash();


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


            createSmartDust(
                4
            );


            signalBurst(
                2,
                90
            );

        }



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


        isBusy =
            false;

    }
);



/* ================================================================
   39. PHONE / TOUCH PARALLAX
================================================================ */

scene.addEventListener(
    "touchmove",
    event => {


        if (
            !isFront ||
            isBusy
        ) {

            return;

        }


        const touch =
            event.touches[0];


        if (!touch) {

            return;

        }


        const rect =
            scene.getBoundingClientRect();


        const x =
            (
                touch.clientX -
                rect.left
            ) /
            rect.width;


        const y =
            (
                touch.clientY -
                rect.top
            ) /
            rect.height;


        targetRY =
            (x - .5) * -5;


        targetRX =
            (y - .5) * 4;


        targetPortraitX =
            (x - .5) * 6;


        targetPortraitY =
            (y - .5) * 4;

    },

    {
        passive:
            true
    }
);



/* ================================================================
   40. RESIZE SAFETY
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

    }
);