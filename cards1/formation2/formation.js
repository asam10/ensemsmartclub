/* ================================================================
   SMART CLUB — FORMATION
   CARD-ONLY CINEMATIC REVEAL

   SEQUENCE:
   1. Card appears from the back
   2. Smart core activates
   3. Card flips
   4. Formation emblem appears
   5. Formation title appears
   6. Halo + card systems activate
   7. Member photo appears
   8. Name + role reveal
   9. Card stays interactive
================================================================ */


/* ================================================================
   1. DOM
================================================================ */

const scene =
    document.getElementById("scene");

const cardStage =
    document.getElementById("cardStage");

const card =
    document.getElementById("card");

const flash =
    document.getElementById("flash");

const particlesContainer =
    document.getElementById("particles");


/* MEMBER */

const memberImage =
    document.getElementById("memberImage");

const memberName =
    document.querySelector(".member-name");

const memberRole =
    document.querySelector(".member-role");

const identity =
    document.querySelector(".identity");


/* FORMATION HEADER */

const formationHeader =
    document.querySelector(".formation-header");

const formationTitle =
    document.querySelector(".formation-title");

const formationEmblem =
    document.querySelector(".formation-emblem");

const formationBookIcon =
    document.querySelector(".formation-book-icon");

const formationSpark =
    document.querySelector(".formation-spark");

const formationEmblemPulse =
    document.querySelector(".formation-emblem-pulse");

const emblemGlow =
    document.querySelector(".emblem-glow");

const emblemRings =
    document.querySelectorAll(".emblem-ring");


/* HALO */

const formationHalo =
    document.querySelector(".formation-halo");

const haloRings =
    document.querySelectorAll(".leadership-halo-ring");

const haloMarkers =
    document.querySelectorAll(".halo-marker");


/* PORTRAIT */

const portraitFrame =
    document.querySelector(".portrait-frame");

const portraitEnergy =
    document.querySelector(".portrait-energy");

const portraitCoreLight =
    document.querySelector(".portrait-core-light");

const portraitRings =
    document.querySelectorAll(".portrait-ring");

const portraitFrontGlow =
    document.querySelector(".portrait-front-glow");


/* SIDE NODES */

const brainNodes =
    document.querySelectorAll(".brain-node");

const nodeIcons =
    document.querySelectorAll(".node-icon");


/* FRAME */

const framePieces =
    document.querySelectorAll(
        ".frame-top, .frame-right, .frame-bottom, .frame-left"
    );

const innerFrame =
    document.querySelector(".inner-premium-frame");

const premiumCorners =
    document.querySelectorAll(".premium-corner");

const railLights =
    document.querySelectorAll(".light-rail span");

const ornaments =
    document.querySelectorAll(".leadership-ornament");

const cardShine =
    document.getElementById("cardShine");


/* BACK CORE */

const brainEmblem =
    document.querySelector(".brain-emblem");

const brainPaths =
    document.querySelectorAll(".brain-path");

const brainNeuralLines =
    document.querySelectorAll(
        ".brain-center, .brain-neural"
    );

const brainDots =
    document.querySelectorAll(".brain-node-dot");

const corePulse =
    document.querySelector(".core-pulse");

const coreOrbits =
    document.querySelectorAll(".core-orbit");

const orbitMarkers =
    document.querySelectorAll(".orbit-marker");

const circuits =
    document.querySelectorAll(".circuit");

const backCorners =
    document.querySelectorAll(".energy-corner");

const backBrand =
    document.querySelector(".back-brand");


/* ================================================================
   2. COLORS
================================================================ */

const MAGENTA =
    "#d92b9e";

const MAGENTA_LIGHT =
    "#ff82cf";

const PEARL =
    "#fff7fc";


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
   5. PARTICLES
================================================================ */

function createParticles() {

    if (!particlesContainer) {
        return;
    }

    const amount = 22;


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
            Math.random() * 1.5;

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.opacity =
            `${.10 + Math.random() * .30}`;

        particle.style.animationDuration =
            `${10 + Math.random() * 12}s`;

        particle.style.animationDelay =
            `${Math.random() * -18}s`;


        if (Math.random() > .22) {

            particle.style.background =
                PEARL;

            particle.style.boxShadow = `
                0 0 3px
                rgba(255,255,255,.55),

                0 0 7px
                rgba(255,255,255,.10)
            `;

        } else {

            particle.style.background =
                MAGENTA_LIGHT;

            particle.style.boxShadow = `
                0 0 4px
                rgba(255,91,190,.32)
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

    if (!card || !scene) {
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
        `${35 + Math.random() * 42}px`;

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
        rgba(255,255,255,.50),

        0 0 ${8 * intensity}px
        rgba(221,43,158,.18)
    `;


    scene.appendChild(trace);


    trace.animate(

        [
            {
                opacity: 0,

                transform: `
                    rotate(${angle}deg)
                    scaleX(.08)
                `
            },

            {
                opacity: .9,

                transform: `
                    rotate(${angle}deg)
                    scaleX(1)
                `,

                offset: .30
            },

            {
                opacity: 0,

                transform: `
                    rotate(${angle}deg)
                    scaleX(.35)
                `
            }
        ],

        {
            duration: 350,
            easing: "ease-out"
        }
    );


    setTimeout(
        () => trace.remove(),
        430
    );
}


/* ================================================================
   7. SIGNAL BURST
================================================================ */

function signalBurst(
    count = 4,
    delay = 80
) {

    for (
        let i = 0;
        i < count;
        i++
    ) {

        setTimeout(
            () => {

                createSmartTrace(
                    .55 +
                    Math.random() *
                    .30
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
    amount = 7
) {

    if (!card || !scene) {
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
                    1.7;

                dust.style.width =
                    `${size}px`;

                dust.style.height =
                    `${size}px`;

                dust.style.borderRadius =
                    "50%";

                dust.style.background =
                    Math.random() > .25
                        ? PEARL
                        : MAGENTA_LIGHT;

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

                dust.style.boxShadow = `
                    0 0 4px
                    rgba(255,255,255,.32),

                    0 0 8px
                    rgba(222,44,161,.14)
                `;

                scene.appendChild(
                    dust
                );


                const dx =
                    (
                        Math.random() -
                        .5
                    ) * 60;

                const dy =
                    (
                        Math.random() -
                        .5
                    ) * 80;


                dust.animate(

                    [
                        {
                            opacity: 0,

                            transform:
                                "scale(.2)"
                        },

                        {
                            opacity: .6,

                            transform:
                                "scale(1)",

                            offset: .20
                        },

                        {
                            opacity: 0,

                            transform: `
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
                            400,

                        easing:
                            "ease-out"
                    }
                );


                setTimeout(
                    () => dust.remove(),
                    1100
                );

            },

            i * 35
        );
    }
}


/* ================================================================
   9. FLASH
================================================================ */

function smartFlash() {

    if (!flash) {
        return;
    }


    flash.animate(

        [
            {
                opacity: 0
            },

            {
                opacity: .55,
                offset: .16
            },

            {
                opacity: .10,
                offset: .33
            },

            {
                opacity: .22,
                offset: .42
            },

            {
                opacity: 0
            }
        ],

        {
            duration: 500,
            easing: "ease-out"
        }
    );
}


/* ================================================================
   10. PREPARE CARD-ONLY SCENE
================================================================ */

function prepareScene() {

    /* CARD IS VISIBLE IMMEDIATELY */

    if (cardStage) {

        cardStage.style.opacity =
            "1";

        cardStage.style.transform =
            "translateY(0) scale(1)";
    }


    /* START ON BACK */

    card.classList.remove(
        "flipped"
    );

    card.style.transform =
        "rotateY(0deg)";

    isFront =
        false;


    /* HIDE FRONT DETAILS UNTIL FLIP */

    const hiddenFront = [

        formationHeader,
        formationTitle,
        formationHalo,
        portraitEnergy,
        portraitFrame,
        identity,

        ...brainNodes,
        ...ornaments

    ];


    hiddenFront.forEach(
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
            translateY(35px)
            scale(.94)
        `;
    }


    if (identity) {

        identity.style.transform = `
            translateX(-50%)
            translateY(18px)
            translateZ(110px)
        `;
    }


    /* QUIET BACK CORE */

    coreOrbits.forEach(
        orbit => {

            orbit.style.opacity =
                ".12";
        }
    );


    orbitMarkers.forEach(
        marker => {

            marker.style.opacity =
                "0";
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
}


/* ================================================================
   CARD ENTRANCE
   IMPORTANT:
   Animate the STAGE, not the card itself.
   Otherwise it blocks rotateY().
================================================================ */

async function cardEntrance() {

    if (!cardStage) {
        return;
    }


    const entranceAnimation =
        cardStage.animate(

            [
                {
                    opacity: 0,

                    transform: `
                        translateY(24px)
                        scale(.94)
                    `
                },

                {
                    opacity: 1,

                    transform: `
                        translateY(0)
                        scale(1.02)
                    `,

                    offset: .72
                },

                {
                    opacity: 1,

                    transform: `
                        translateY(0)
                        scale(1)
                    `
                }
            ],

            {
                duration: 650,

                easing:
                    "cubic-bezier(.16,1,.3,1)",

                fill:
                    "forwards"
            }

        );


    await entranceAnimation.finished;


    /* Lock final stage state */

    cardStage.style.opacity =
        "1";

    cardStage.style.transform =
        "translateY(0) scale(1)";


    /* Remove animation so nothing interferes */

    entranceAnimation.cancel();


    await wait(100);
}


/* ================================================================
   12. ACTIVATE BACK SMART CORE
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
                    "brightness(.85)",

                transform:
                    "scale(.97)",

                opacity:
                    .8
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
            duration: 700,
            fill: "forwards",
            easing: "ease-out"
        }
    );


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
                            .15
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
                        550,

                    delay:
                        index * 65,

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
                            "scale(1.4)"
                    },

                    {
                        opacity:
                            .8,

                        transform:
                            "scale(1)"
                    }
                ],

                {
                    duration:
                        280,

                    delay:
                        300 +
                        index * 70,

                    fill:
                        "forwards"
                }
            );
        }
    );


    await wait(550);
}


/* ================================================================
   13. BACK LOCK
================================================================ */

async function backLock() {

    coreOrbits.forEach(
        (orbit, index) => {

            animate(

                orbit,

                [
                    {
                        opacity:
                            .12
                    },

                    {
                        opacity:
                            .55
                    }
                ],

                {
                    duration:
                        350,

                    delay:
                        index * 70,

                    fill:
                        "forwards"
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
                            .8,

                        transform:
                            "scale(1)"
                    }
                ],

                {
                    duration:
                        280,

                    delay:
                        index * 80,

                    fill:
                        "forwards"
                }
            );
        }
    );


    circuits.forEach(
        (circuit, index) => {

            animate(

                circuit,

                [
                    {
                        opacity:
                            .08
                    },

                    {
                        opacity:
                            .40
                    }
                ],

                {
                    duration:
                        320,

                    delay:
                        index * 55,

                    fill:
                        "forwards"
                }
            );
        }
    );


    signalBurst(
        3,
        70
    );


    await wait(380);
}


/* ================================================================
   14. FLIP CARD
================================================================ */

async function flipCard() {

    smartFlash();

    createSmartDust(6);

    isFront =
        true;


    /* Reset any transform left by another animation */

    card.style.transition =
        "transform 1.45s cubic-bezier(.16,1,.3,1)";


    card.style.transform =
        "rotateY(180deg)";


    card.classList.add(
        "flipped"
    );


    await wait(1450);
}

/* ================================================================
   15. REVEAL FRAME
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
                            "brightness(.6)"
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
                        350,

                    delay:
                        index * 55,

                    fill:
                        "forwards"
                }
            );
        }
    );


    animate(

        innerFrame,

        [
            {
                opacity:
                    .1
            },

            {
                opacity:
                    .75
            }
        ],

        {
            duration:
                450,

            fill:
                "forwards"
        }
    );


    await wait(300);
}


/* ================================================================
   16. FORMATION EMBLEM
================================================================ */

async function revealFormationEmblem() {

    if (formationHeader) {

        formationHeader.style.opacity =
            "1";
    }


    if (formationEmblem) {

        formationEmblem.style.opacity =
            "1";
    }


    animate(

        formationEmblem,

        [
            {
                opacity: 0,

                transform:
                    "scale(.60)",

                filter:
                    "brightness(.55)"
            },

            {
                opacity: 1,

                transform:
                    "scale(1.08)",

                filter:
                    "brightness(1.3)"
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
            duration: 600,
            fill: "forwards",
            easing:
                "cubic-bezier(.34,1.56,.64,1)"
        }
    );


    if (formationBookIcon) {

        const paths =
            formationBookIcon
                .querySelectorAll(
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
                            450,

                        delay:
                            index * 65,

                        fill:
                            "forwards"
                    }
                );
            }
        );
    }


    if (formationSpark) {

        animate(

            formationSpark,

            [
                {
                    opacity:
                        .2,

                    transformOrigin:
                        "center",

                    transform:
                        "scale(.6)"
                },

                {
                    opacity:
                        1,

                    transformOrigin:
                        "center",

                    transform:
                        "scale(1.3)"
                },

                {
                    opacity:
                        1,

                    transformOrigin:
                        "center",

                    transform:
                        "scale(1)"
                }
            ],

            {
                duration:
                    500,

                delay:
                    250,

                fill:
                    "forwards"
            }
        );
    }


    await wait(450);
}


/* ================================================================
   17. FORMATION TITLE
================================================================ */

async function revealFormationTitle() {

    if (!formationTitle) {
        return;
    }


    formationTitle.style.opacity =
        "1";


    animate(

        formationTitle,

        [
            {
                opacity:
                    0,

                transform: `
                    translateX(-50%)
                    translateY(-8px)
                    translateZ(90px)
                    scaleX(1.2)
                `,

                filter:
                    "blur(4px)"
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
                500,

            fill:
                "forwards",

            easing:
                "cubic-bezier(.16,1,.3,1)"
        }
    );


    await wait(300);
}


/* ================================================================
   18. FRONT SYSTEMS
================================================================ */

async function activateFrontSystems() {

    if (formationHalo) {

        formationHalo.style.opacity =
            "1";
    }


    if (portraitEnergy) {

        portraitEnergy.style.opacity =
            "1";
    }


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
                            scale(.74)
                        `
                    },

                    {
                        opacity:
                            .45,

                        transform: `
                            translate(-50%,-50%)
                            scale(1)
                        `
                    }
                ],

                {
                    duration:
                        450,

                    delay:
                        index * 80,

                    fill:
                        "forwards"
                }
            );
        }
    );


    portraitRings.forEach(
        (ring, index) => {

            animate(

                ring,

                [
                    {
                        opacity:
                            0
                    },

                    {
                        opacity:
                            .45
                    }
                ],

                {
                    duration:
                        400,

                    delay:
                        index * 80,

                    fill:
                        "forwards"
                }
            );
        }
    );


    animate(

        portraitCoreLight,

        [
            {
                opacity:
                    0
            },

            {
                opacity:
                    .48
            }
        ],

        {
            duration:
                450,

            fill:
                "forwards"
        }
    );


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
                            "scale(.7)"
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
                        350,

                    delay:
                        index * 100,

                    fill:
                        "forwards"
                }
            );
        }
    );


    await wait(350);
}


/* ================================================================
   19. MEMBER REVEAL
================================================================ */

async function revealMember() {

    if (!portraitFrame || !memberImage) {
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
                    "blur(4px)"
            },

            {
                opacity:
                    1,

                filter:
                    "blur(0)"
            }
        ],

        {
            duration:
                400,

            fill:
                "forwards"
        }
    );


    await wait(200);


    memberImage.style.opacity =
        "1";


    animate(

        memberImage,

        [
            {
                opacity:
                    0,

                transform: `
                    translateY(32px)
                    scale(.94)
                `,

                filter: `
                    brightness(.6)
                    blur(3px)
                `
            },

            {
                opacity:
                    .65,

                transform: `
                    translateY(10px)
                    scale(.98)
                `,

                filter: `
                    brightness(.85)
                    blur(1px)
                `
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
                    blur(0)
                `
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


    animate(

        portraitFrontGlow,

        [
            {
                opacity:
                    0
            },

            {
                opacity:
                    .55
            },

            {
                opacity:
                    .35
            }
        ],

        {
            duration:
                550,

            fill:
                "forwards"
        }
    );


    createSmartDust(5);


    await wait(550);
}


/* ================================================================
   20. IDENTITY
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
                    translateY(16px)
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
                450,

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
                    "7px",

                filter:
                    "blur(4px)"
            },

            {
                opacity:
                    1,

                letterSpacing:
                    "2px",

                filter:
                    "blur(0)"
            }
        ],

        {
            duration:
                550,

            delay:
                100,

            fill:
                "both"
        }
    );


    animate(

        memberRole,

        [
            {
                opacity:
                    0,

                letterSpacing:
                    "10px"
            },

            {
                opacity:
                    1,

                letterSpacing:
                    "5px"
            }
        ],

        {
            duration:
                450,

            delay:
                300,

            fill:
                "both"
        }
    );


    await wait(600);
}


/* ================================================================
   21. FINAL LOCK
================================================================ */

async function finalLock() {

    premiumCorners.forEach(
        (corner, index) => {

            setTimeout(
                () => {

                    animate(

                        corner,

                        [
                            {
                                opacity:
                                    .30,

                                filter:
                                    "brightness(.7)"
                            },

                            {
                                opacity:
                                    1,

                                filter:
                                    "brightness(1.6)"
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
                                300
                        }
                    );

                },

                index * 90
            );
        }
    );


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
                            .8
                    },

                    {
                        opacity:
                            .35
                    }
                ],

                {
                    duration:
                        400,

                    delay:
                        index * 100
                }
            );
        }
    );


    signalBurst(
        2,
        100
    );


    createSmartDust(
        4
    );


    await wait(500);
}


/* ================================================================
   22. CARD-ONLY SEQUENCE
================================================================ */

async function startSequence() {

    prepareScene();

    isBusy =
        true;


    await wait(180);

    await cardEntrance();

    await activateSmartCore();

    await backLock();

    await flipCard();

    await revealFrame();

    await revealFormationEmblem();

    await revealFormationTitle();

    await activateFrontSystems();

    await revealMember();

    await revealIdentity();

    await finalLock();


    isBusy =
        false;
}


/* ================================================================
   23. START
================================================================ */

window.addEventListener(
    "load",
    startSequence
);


/* ================================================================
   24. POINTER PARALLAX
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


        targetRY =
            (x - .5) * -7;

        targetRX =
            (y - .5) * 5;

        targetPortraitX =
            (x - .5) * 8;

        targetPortraitY =
            (y - .5) * 5;

        targetShineX =
            (x - .5) * 55;
    }
);


/* ================================================================
   25. SMOOTH 3D LOOP
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


        if (formationEmblem) {

            formationEmblem.style.translate = `
                ${currentPortraitX * -.14}px
                ${currentPortraitY * -.16}px
            `;
        }


        if (portraitEnergy) {

            portraitEnergy.style.translate = `
                ${currentPortraitX * .16}px
                ${currentPortraitY * .14}px
            `;
        }


        if (formationHalo) {

            formationHalo.style.translate = `
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
   26. RESET POINTER
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
   27. AMBIENT FORMATION SIGNAL
================================================================ */

function ambientFormationSignal() {

    if (
        isFront &&
        !isBusy &&
        Math.random() > .62
    ) {

        createSmartTrace(.28);
    }


    setTimeout(

        ambientFormationSignal,

        5000 +
        Math.random() * 4500

    );
}


ambientFormationSignal();


/* ================================================================
   28. BOOK BREATH
================================================================ */

function formationBookBreath() {

    if (
        isFront &&
        !isBusy &&
        formationBookIcon
    ) {

        animate(

            formationBookIcon,

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
                        brightness(1.10)

                        drop-shadow(
                            0 0 5px
                            rgba(255,255,255,.24)
                        )

                        drop-shadow(
                            0 0 8px
                            rgba(222,43,160,.14)
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
                    1000,

                easing:
                    "ease-in-out"
            }
        );
    }


    setTimeout(

        formationBookBreath,

        7000 +
        Math.random() * 5000

    );
}


formationBookBreath();


/* ================================================================
   29. SPARK PULSE
================================================================ */

function sparkPulse() {

    if (
        isFront &&
        !isBusy &&
        formationSpark
    ) {

        animate(

            formationSpark,

            [
                {
                    opacity:
                        .75,

                    transformOrigin:
                        "center",

                    transform:
                        "scale(1)"
                },

                {
                    opacity:
                        1,

                    transformOrigin:
                        "center",

                    transform:
                        "scale(1.22)"
                },

                {
                    opacity:
                        .75,

                    transformOrigin:
                        "center",

                    transform:
                        "scale(1)"
                }
            ],

            {
                duration:
                    850,

                easing:
                    "ease-in-out"
            }
        );
    }


    setTimeout(

        sparkPulse,

        5500 +
        Math.random() * 4500

    );
}


sparkPulse();


/* ================================================================
   30. CLICK TO FLIP
================================================================ */

card.addEventListener(
    "click",
    async () => {

        if (isBusy) {
            return;
        }


        isBusy =
            true;


        if (isFront) {

            isFront =
                false;

            card.classList.remove(
                "flipped"
            );

            card.style.transform =
                "rotateY(0deg)";

            await wait(900);

        } else {

            smartFlash();

            isFront =
                true;

            card.classList.add(
                "flipped"
            );

            card.style.transform =
                "rotateY(180deg)";

            await wait(900);

            createSmartDust(3);
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
   31. RESIZE RESET
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