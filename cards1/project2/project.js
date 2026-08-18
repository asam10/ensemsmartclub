/* ================================================================
   SMART CLUB — DESIGN PROJECT
   CARD-ONLY CINEMATIC REVEAL

   SEQUENCE:
   1. Card appears from the back
   2. Smart core activates
   3. Back circuits lock
   4. Card rotates
   5. Project emblem draws itself
   6. Project title appears
   7. Halo + side nodes activate
   8. Member appears
   9. Name + role reveal
   10. Card becomes interactive
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
   PROJECT HEADER
================================================================ */

const projectHeader =
    document.querySelector(".project-header");

const projectTitle =
    document.querySelector(".project-title");

const projectEmblem =
    document.querySelector(".project-emblem");

const projectSymbol =
    document.querySelector(".project-symbol");

const projectScan =
    document.querySelector(".project-emblem-scan");

const projectHexagon =
    document.querySelector(".project-hexagon");

const projectCircuits =
    document.querySelectorAll(".project-circuit");

const projectCore =
    document.querySelector(".project-core");

const projectCoreDot =
    document.querySelector(".project-core-dot");

const projectTerminals =
    document.querySelectorAll(".project-terminal");


/* ================================================================
   HALO
================================================================ */

const projectHalo =
    document.querySelector(".project-halo");

const haloRings =
    document.querySelectorAll(".leadership-halo-ring");

const haloMarkers =
    document.querySelectorAll(".halo-marker");


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

const portraitFrontGlow =
    document.querySelector(".portrait-front-glow");


/* ================================================================
   SIDE NODES
================================================================ */

const brainNodes =
    document.querySelectorAll(".brain-node");


/* ================================================================
   FRAME
================================================================ */

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


/* ================================================================
   BACK SMART CORE
================================================================ */

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

const coreOrbits =
    document.querySelectorAll(".core-orbit");

const orbitMarkers =
    document.querySelectorAll(".orbit-marker");

const circuits =
    document.querySelectorAll(".circuit");

const backCorners =
    document.querySelectorAll(".energy-corner");


/* ================================================================
   2. COLORS
================================================================ */

const MAGENTA =
    "#d92b9e";

const MAGENTA_LIGHT =
    "#ff82cf";

const PEARL =
    "#fff7fc";

const CHROME =
    "#d9dbe5";


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


function animateElement(
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

    particlesContainer.innerHTML =
        "";


    for (
        let i = 0;
        i < 22;
        i++
    ) {

        const particle =
            document.createElement("span");

        particle.className =
            "particle";


        const size =
            0.7 +
            Math.random() * 1.5;


        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.opacity =
            `${0.10 + Math.random() * 0.30}`;

        particle.style.animationDuration =
            `${10 + Math.random() * 12}s`;

        particle.style.animationDelay =
            `${Math.random() * -18}s`;


        if (
            Math.random() >
            0.22
        ) {

            particle.style.background =
                PEARL;

            particle.style.boxShadow = `
                0 0 3px rgba(255,255,255,.55),
                0 0 7px rgba(255,255,255,.10)
            `;

        } else {

            particle.style.background =
                MAGENTA_LIGHT;

            particle.style.boxShadow = `
                0 0 4px rgba(255,91,190,.32)
            `;
        }


        particlesContainer.appendChild(
            particle
        );
    }
}


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
        0 0 ${3 * intensity}px rgba(255,255,255,.50),
        0 0 ${8 * intensity}px rgba(221,43,158,.18)
    `;


    scene.appendChild(
        trace
    );


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
                    Math.random() * .30
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


                const size =
                    1 +
                    Math.random() * 1.7;


                dust.style.position =
                    "fixed";

                dust.style.pointerEvents =
                    "none";

                dust.style.zIndex =
                    "600";

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
                    0 0 4px rgba(255,255,255,.32),
                    0 0 8px rgba(222,44,161,.14)
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
                    () =>
                        dust.remove(),
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
   10. INITIAL STATE
================================================================ */

function prepareScene() {

    if (!card) {
        return;
    }


    if (cardStage) {

        cardStage.style.opacity =
            "1";

        cardStage.style.visibility =
            "visible";

        cardStage.style.transform =
            "translateY(0) scale(1)";
    }


    card.classList.remove(
        "flipped"
    );


    card.style.transform =
        "rotateY(0deg)";


    isFront =
        false;


    const hiddenFront = [

        projectHeader,
        projectTitle,
        projectHalo,
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
   11. CARD ENTRANCE
================================================================ */

async function cardEntrance() {

    if (!cardStage) {
        return;
    }


    const animation =
        cardStage.animate(

            [
                {
                    opacity: 0,

                    transform: `
                        translateY(26px)
                        scale(.94)
                    `
                },

                {
                    opacity: 1,

                    transform: `
                        translateY(0)
                        scale(1.015)
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


    try {

        await animation.finished;

    } catch (error) {}


    cardStage.style.opacity =
        "1";

    cardStage.style.transform =
        "translateY(0) scale(1)";


    animation.cancel();


    await wait(120);
}


/* ================================================================
   12. ACTIVATE BRAIN CORE
================================================================ */

async function activateSmartCore() {

    animateElement(

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
            duration:
                700,

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


            animateElement(

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

            animateElement(

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


    signalBurst(
        2,
        90
    );


    await wait(
        700
    );
}


/* ================================================================
   13. BACK CIRCUIT LOCK
================================================================ */

async function backLock() {

    coreOrbits.forEach(
        (orbit, index) => {

            animateElement(

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

            animateElement(

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

            animateElement(

                circuit,

                [
                    {
                        opacity:
                            .08
                    },

                    {
                        opacity:
                            .42
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


    backCorners.forEach(
        (corner, index) => {

            animateElement(

                corner,

                [
                    {
                        opacity:
                            .15
                    },

                    {
                        opacity:
                            .8
                    }
                ],

                {
                    duration:
                        300,

                    delay:
                        index * 70,

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


    await wait(
        450
    );
}


/* ================================================================
   14. FLIP CARD
================================================================ */

async function flipCard() {

    smartFlash();

    createSmartDust(
        6
    );


    isFront =
        true;


    card.style.transition =
        "transform 1.45s cubic-bezier(.16,1,.3,1)";


    card.classList.add(
        "flipped"
    );


    card.style.transform =
        "rotateY(180deg)";


    await wait(
        1450
    );
}


/* ================================================================
   15. FRAME REVEAL
================================================================ */

async function revealFrame() {

    framePieces.forEach(
        (piece, index) => {

            animateElement(

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


    animateElement(

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


    await wait(
        300
    );
}


/* ================================================================
   16. PROJECT EMBLEM DRAW
================================================================ */

async function revealProjectEmblem() {

    if (projectHeader) {

        projectHeader.style.opacity =
            "1";
    }


    if (projectEmblem) {

        projectEmblem.style.opacity =
            "1";
    }


    animateElement(

        projectEmblem,

        [
            {
                opacity:
                    0,

                transform:
                    "scale(.58)",

                filter:
                    "brightness(.55)"
            },

            {
                opacity:
                    1,

                transform:
                    "scale(1.08)",

                filter:
                    "brightness(1.35)"
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
                600,

            fill:
                "forwards",

            easing:
                "cubic-bezier(.34,1.56,.64,1)"
        }
    );


    const drawingPaths = [

        projectHexagon,
        ...projectCircuits

    ];


    drawingPaths.forEach(
        (path, index) => {

            if (
                !path ||
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


            animateElement(

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
                        500,

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


    animateElement(

        projectCore,

        [
            {
                opacity:
                    0,

                transform:
                    "scale(.3)"
            },

            {
                opacity:
                    1,

                transform:
                    "scale(1.2)"
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
                420,

            delay:
                420,

            fill:
                "both"
        }
    );


    animateElement(

        projectCoreDot,

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
                350,

            delay:
                560,

            fill:
                "both"
        }
    );


    projectTerminals.forEach(
        (terminal, index) => {

            animateElement(

                terminal,

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
                            "scale(1.45)"
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
                        280,

                    delay:
                        620 +
                        index * 70,

                    fill:
                        "both"
                }
            );
        }
    );


    if (projectScan) {

        animateElement(

            projectScan,

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
                        .2
                }
            ],

            {
                duration:
                    700
            }
        );
    }


    await wait(
        900
    );
}


/* ================================================================
   17. PROJECT TITLE
================================================================ */

async function revealProjectTitle() {

    if (!projectTitle) {
        return;
    }


    projectTitle.style.opacity =
        "1";


    animateElement(

        projectTitle,

        [
            {
                opacity:
                    0,

                transform: `
                    translateX(-50%)
                    translateY(-8px)
                    translateZ(90px)
                    scaleX(1.16)
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


    await wait(
        300
    );
}


/* ================================================================
   18. FRONT SYSTEMS
================================================================ */

async function activateFrontSystems() {

    if (projectHalo) {

        projectHalo.style.opacity =
            "1";
    }


    if (portraitEnergy) {

        portraitEnergy.style.opacity =
            "1";
    }


    haloRings.forEach(
        (ring, index) => {

            animateElement(

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


    haloMarkers.forEach(
        (marker, index) => {

            animateElement(

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
                            .75,

                        transform:
                            "rotate(45deg) scale(1)"
                    }
                ],

                {
                    duration:
                        300,

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

            animateElement(

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


    animateElement(

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


            animateElement(

                node,

                [
                    {
                        opacity:
                            0,

                        transform: `
                            translateZ(75px)
                            scale(.65)
                        `
                    },

                    {
                        opacity:
                            .9,

                        transform: `
                            translateZ(75px)
                            scale(1.08)
                        `
                    },

                    {
                        opacity:
                            .85,

                        transform: `
                            translateZ(75px)
                            scale(1)
                        `
                    }
                ],

                {
                    duration:
                        420,

                    delay:
                        index * 120,

                    fill:
                        "forwards"
                }
            );
        }
    );


    await wait(
        450
    );
}


/* ================================================================
   19. MEMBER REVEAL
================================================================ */

async function revealMember() {

    if (
        !portraitFrame ||
        !memberImage
    ) {
        return;
    }


    portraitFrame.style.opacity =
        "1";


    animateElement(

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


    await wait(
        180
    );


    memberImage.style.opacity =
        "1";


    animateElement(

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


    animateElement(

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


    createSmartDust(
        5
    );


    await wait(
        550
    );
}


/* ================================================================
   20. IDENTITY REVEAL
================================================================ */

async function revealIdentity() {

    if (!identity) {
        return;
    }


    identity.style.opacity =
        "1";


    animateElement(

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


    animateElement(

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
                    "1.7px",

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


    animateElement(

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


    await wait(
        600
    );
}


/* ================================================================
   21. FINAL LOCK
================================================================ */

async function finalLock() {

    premiumCorners.forEach(
        (corner, index) => {

            setTimeout(
                () => {

                    animateElement(

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

            animateElement(

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


    await wait(
        500
    );
}


/* ================================================================
   22. FULL SEQUENCE
================================================================ */

async function startSequence() {

    prepareScene();

    isBusy =
        true;


    await wait(
        180
    );


    await cardEntrance();

    await activateSmartCore();

    await backLock();

    await flipCard();

    await revealFrame();

    await revealProjectEmblem();

    await revealProjectTitle();

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
    () => {

        createParticles();

        startSequence();
    }
);


/* ================================================================
   24. POINTER PARALLAX
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
}


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


        if (projectEmblem) {

            projectEmblem.style.translate = `
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


        if (projectHalo) {

            projectHalo.style.translate = `
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
   26. POINTER RESET
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
   27. AMBIENT PROJECT SIGNAL
================================================================ */

function ambientProjectSignal() {

    if (
        isFront &&
        !isBusy &&
        Math.random() > .62
    ) {

        createSmartTrace(
            .28
        );
    }


    setTimeout(

        ambientProjectSignal,

        5000 +
        Math.random() *
        4500

    );
}


ambientProjectSignal();


/* ================================================================
   28. PROJECT CORE BREATH
================================================================ */

function projectCoreBreath() {

    if (
        isFront &&
        !isBusy &&
        projectCoreDot
    ) {

        animateElement(

            projectCoreDot,

            [
                {
                    opacity:
                        .75,

                    transform:
                        "scale(1)"
                },

                {
                    opacity:
                        1,

                    transform:
                        "scale(1.6)"
                },

                {
                    opacity:
                        .75,

                    transform:
                        "scale(1)"
                }
            ],

            {
                duration:
                    900,

                easing:
                    "ease-in-out"
            }
        );
    }


    setTimeout(

        projectCoreBreath,

        6200 +
        Math.random() *
        4200

    );
}


projectCoreBreath();


/* ================================================================
   29. CLICK TO FLIP
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
                    1450
                );

            } else {

                smartFlash();


                isFront =
                    true;


                card.classList.add(
                    "flipped"
                );


                card.style.transform =
                    "rotateY(180deg)";


                await wait(
                    1450
                );


                createSmartDust(
                    3
                );
            }


            isBusy =
                false;
        }
    );
}


/* ================================================================
   30. RESIZE RESET
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