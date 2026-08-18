/* ============================================================================

    ███████╗███╗   ███╗ █████╗ ██████╗ ████████╗
    ██╔════╝████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝
    ███████╗██╔████╔██║███████║██████╔╝   ██║
    ╚════██║██║╚██╔╝██║██╔══██║██╔══██╗   ██║
    ███████║██║ ╚═╝ ██║██║  ██║██║  ██║   ██║
    ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝

                    SMART CLUB
               BUREAU SELECTION ENGINE

    --------------------------------------------------------------------------

    EXPERIENCE FLOW

        BOOT
          ↓
        ARENA INITIALIZATION
          ↓
        IDLE ORBIT
          ↓
        PLAYER PRESSES "START SELECTION"
          ↓
        SYSTEM WAKE-UP
          ↓
        ORBIT ACCELERATION
          ↓
        HIGH-SPEED ROTATION
          ↓
        CANDIDATE PASSES
          ↓
        CONTROLLED DECELERATION
          ↓
        PRESIDENT LOCK
          ↓
        OTHER CARDS RETREAT
          ↓
        PRESIDENT COMES TO FRONT
          ↓
        UNAVAILABLE
          ↓
        FINAL IDLE

    --------------------------------------------------------------------------

    IMPORTANT DESIGN RULES

    • No glitch effects.
    • No random winner.
    • President is the selected card.
    • No member identity is revealed.
    • Same Smart Club magenta / pearl / deep plum universe.
    • Cards stay visually identical.
    • Different roles receive only subtle micro-character.
    • Selection movement should feel expensive and intentional.
    • No chaotic neon.
    • No arcade rainbow.
    • No unnecessary screen transitions.

============================================================================ */


(() => {

    "use strict";


/* ============================================================================
   ============================================================================
   01. CONSTANTS
   ============================================================================
   ============================================================================ */


    const TAU =
        Math.PI * 2;


    const HALF_PI =
        Math.PI / 2;


    const DEG =
        Math.PI / 180;



/* ============================================================================
   02. BUREAU CONFIGURATION
============================================================================ */


    const BUREAU = [

        {
            index: 0,
            role: "PRESIDENT",
            key: "president"
        },

        {
            index: 1,
            role: "VICE PRESIDENT",
            key: "vice-president"
        },

        {
            index: 2,
            role: "TREASURER",
            key: "treasurer"
        },

        {
            index: 3,
            role: "MEDIA",
            key: "media"
        },

        {
            index: 4,
            role: "LOGISTICS",
            key: "logistics"
        },

        {
            index: 5,
            role: "FORMATION",
            key: "formation"
        },

        {
            index: 6,
            role: "DESIGN PROJECT",
            key: "design-project"
        },

        {
            index: 7,
            role: "SPONSORING",
            key: "sponsoring"
        }

    ];


    const CARD_COUNT =
        BUREAU.length;


    const PRESIDENT_INDEX =
        0;



/* ============================================================================
   03. SMART CLUB COLORS
============================================================================ */


    const COLORS = {

        black:
            "#020104",

        softBlack:
            "#050208",

        deepPlum:
            "#15051c",

        imperial:
            "#5f075b",

        royal:
            "#8c0a78",

        magenta:
            "#d92b9e",

        pink:
            "#ff70c7",

        champagne:
            "#ffd8f2",

        pearl:
            "#fff7fc",

        chrome:
            "#d9dbe5"

    };



/* ============================================================================
   04. GAME STATES
============================================================================ */


    const GAME_STATE = {

        BOOT:
            "BOOT",

        IDLE:
            "IDLE",

        PREPARING:
            "PREPARING",

        ACCELERATING:
            "ACCELERATING",

        FULL_SPEED:
            "FULL_SPEED",

        DECELERATING:
            "DECELERATING",

        LOCKING:
            "LOCKING",

        REVEALING:
            "REVEALING",

        WINNER:
            "WINNER"

    };


    let gameState =
        GAME_STATE.BOOT;



/* ============================================================================
   ============================================================================
   05. DOM
   ============================================================================
   ============================================================================ */


    const scene =
        document.getElementById(
            "selectionScene"
        )
        ||
        document.querySelector(
            ".selection-scene"
        )
        ||
        document.querySelector(
            ".scene"
        );


    const arena =
        document.getElementById(
            "selectionArena"
        )
        ||
        document.querySelector(
            ".selection-arena"
        );


    const cardsOrbit =
        document.getElementById(
            "cardsOrbit"
        )
        ||
        document.querySelector(
            ".cards-orbit"
        );


    const startButton =
        document.getElementById(
            "startSelectionButton"
        )
        ||
        document.querySelector(
            ".start-selection-button"
        );


    const selectionStatus =
        document.getElementById(
            "selectionStatus"
        )
        ||
        document.querySelector(
            ".selection-status"
        )
        ||
        document.querySelector(
            ".game-status"
        );


    const particlesContainer =
        document.getElementById(
            "particles"
        );


/* ============================================================================
   06. FIND ALL CARDS
============================================================================ */


    let slots =
        Array.from(
            document.querySelectorAll(
                ".orbit-card-slot"
            )
        );


    let cards =
        Array.from(
            document.querySelectorAll(
                ".bureau-card"
            )
        );


/*
    Fallback:

    If the HTML contains bureau cards but they are not
    wrapped inside .orbit-card-slot, JavaScript creates
    those wrappers automatically.
*/


    if (
        slots.length === 0 &&
        cards.length > 0 &&
        cardsOrbit
    ) {

        cards.forEach(
            card => {

                const slot =
                    document.createElement(
                        "div"
                    );


                slot.className =
                    "orbit-card-slot";


                card.parentNode.insertBefore(
                    slot,
                    card
                );


                slot.appendChild(
                    card
                );

            }
        );


        slots =
            Array.from(
                document.querySelectorAll(
                    ".orbit-card-slot"
                )
            );

    }


/*
    If .bureau-card is absent,
    find card-wrapper inside each slot.
*/


    if (
        cards.length === 0 &&
        slots.length
    ) {

        cards =
            slots.map(
                slot =>
                    slot.querySelector(
                        ".card-wrapper"
                    )
            );

    }



/* ============================================================================
   07. GAME VALIDATION
============================================================================ */


    function validateStructure() {

        const warnings =
            [];


        if (!scene) {

            warnings.push(
                "selectionScene / .selection-scene missing"
            );

        }


        if (!arena) {

            warnings.push(
                "selectionArena / .selection-arena missing"
            );

        }


        if (!cardsOrbit) {

            warnings.push(
                "cardsOrbit / .cards-orbit missing"
            );

        }


        if (!startButton) {

            warnings.push(
                "startSelectionButton missing"
            );

        }


        if (
            slots.length !==
            CARD_COUNT
        ) {

            warnings.push(

                `Expected ${CARD_COUNT} card slots but found ${slots.length}.`

            );

        }


        if (
            warnings.length
        ) {

            console.warn(

                "[SMART CLUB] Structure warnings:",

                warnings

            );

        }

    }



/* ============================================================================
   ============================================================================
   08. UTILITY FUNCTIONS
   ============================================================================
   ============================================================================ */


    const wait =
        milliseconds =>

            new Promise(
                resolve =>

                    setTimeout(
                        resolve,
                        milliseconds
                    )
            );



    function clamp(
        value,
        minimum,
        maximum
    ) {

        return Math.min(
            Math.max(
                value,
                minimum
            ),
            maximum
        );

    }



    function lerp(
        from,
        to,
        amount
    ) {

        return (
            from +
            (
                to -
                from
            ) *
            amount
        );

    }



    function inverseLerp(
        minimum,
        maximum,
        value
    ) {

        if (
            minimum ===
            maximum
        ) {

            return 0;

        }


        return clamp(

            (
                value -
                minimum
            )
            /
            (
                maximum -
                minimum
            ),

            0,

            1

        );

    }



    function remap(
        value,
        inputMin,
        inputMax,
        outputMin,
        outputMax
    ) {

        return lerp(

            outputMin,

            outputMax,

            inverseLerp(
                inputMin,
                inputMax,
                value
            )

        );

    }



    function normalizeAngle(
        angle
    ) {

        return (

            (
                angle %
                TAU
            )

            +

            TAU

        ) % TAU;

    }



    function shortestAngleDistance(
        a,
        b
    ) {

        let difference =
            (
                b -
                a
                +
                Math.PI
            )
            %
            TAU
            -
            Math.PI;


        if (
            difference <
            -Math.PI
        ) {

            difference +=
                TAU;

        }


        return difference;

    }



    function random(
        minimum,
        maximum
    ) {

        return (

            minimum +

            Math.random() *
            (
                maximum -
                minimum
            )

        );

    }



    function randomInt(
        minimum,
        maximum
    ) {

        return Math.floor(

            random(
                minimum,
                maximum + 1
            )

        );

    }



    function choose(
        array
    ) {

        return array[
            Math.floor(
                Math.random() *
                array.length
            )
        ];

    }



/* ============================================================================
   ============================================================================
   09. EASING LIBRARY
   ============================================================================
   ============================================================================ */


    const Ease = {


        linear(t) {

            return t;

        },


        inQuad(t) {

            return (
                t *
                t
            );

        },


        outQuad(t) {

            return (
                1 -
                (
                    1 -
                    t
                )
                *
                (
                    1 -
                    t
                )
            );

        },


        inOutQuad(t) {

            return (

                t < 0.5

                    ?

                    2 *
                    t *
                    t

                    :

                    1 -
                    Math.pow(
                        -2 * t + 2,
                        2
                    )
                    /
                    2

            );

        },


        inCubic(t) {

            return (
                t *
                t *
                t
            );

        },


        outCubic(t) {

            return (
                1 -
                Math.pow(
                    1 -
                    t,
                    3
                )
            );

        },


        inOutCubic(t) {

            return (

                t < 0.5

                    ?

                    4 *
                    t *
                    t *
                    t

                    :

                    1 -
                    Math.pow(
                        -2 * t + 2,
                        3
                    )
                    /
                    2

            );

        },


        outQuart(t) {

            return (

                1 -

                Math.pow(
                    1 -
                    t,
                    4
                )

            );

        },


        outQuint(t) {

            return (

                1 -

                Math.pow(
                    1 -
                    t,
                    5
                )

            );

        },


        inQuint(t) {

            return (

                t *
                t *
                t *
                t *
                t

            );

        },


        smooth(t) {

            return (

                t *
                t *
                (
                    3 -
                    2 *
                    t
                )

            );

        },


        smoother(t) {

            return (

                t *
                t *
                t *
                (
                    t *
                    (
                        t *
                        6 -
                        15
                    )
                    +
                    10
                )

            );

        },


        outBack(t) {

            const c1 =
                1.70158;


            const c3 =
                c1 +
                1;


            return (

                1 +

                c3 *
                Math.pow(
                    t -
                    1,
                    3
                )

                +

                c1 *
                Math.pow(
                    t -
                    1,
                    2
                )

            );

        }

    };



/* ============================================================================
   ============================================================================
   10. GLOBAL ENGINE VALUES
   ============================================================================
   ============================================================================ */


/*
    Wheel rotation.
*/


    let wheelAngle =
        -0.37;


    let wheelVelocity =
        0.000055;


    let targetWheelVelocity =
        0.000055;


/*
    Used for render delta.
*/


    let previousFrameTime =
        performance.now();


/*
    Selection.
*/


    let selectionStarted =
        false;


    let selectionFinished =
        false;


    let currentCandidate =
        -1;


    let previousCandidate =
        -1;


/*
    Pointer depth.
*/


    let pointerTargetX =
        0;


    let pointerTargetY =
        0;


    let pointerCurrentX =
        0;


    let pointerCurrentY =
        0;


/*
    Ambient time.
*/


    let engineTime =
        0;


/*
    Animation intensity.
*/


    let arenaEnergy =
        0.25;


    let targetArenaEnergy =
        0.25;


/*
    Winner depth.
*/


    let winnerParallaxX =
        0;


    let winnerParallaxY =
        0;


    let winnerTargetX =
        0;


    let winnerTargetY =
        0;


/*
    Frame throttling.
*/


    let frameCounter =
        0;



/* ============================================================================
   ============================================================================
   11. CARD METADATA
   ============================================================================
   ============================================================================ */


    const cardState =
        slots.map(
            (
                slot,
                index
            ) => ({

                index,

                angle:
                    0,

                depth:
                    0,

                x:
                    0,

                y:
                    0,

                scale:
                    1,

                opacity:
                    1,

                brightness:
                    1,

                blur:
                    0,

                z:
                    0,

                role:
                    BUREAU[index]
                        ?.role
                        ||
                        `CARD ${index + 1}`,

                pulse:
                    0,

                pulseTarget:
                    0,

                candidate:
                    false,

                selected:
                    false

            })
        );



/* ============================================================================
   ============================================================================
   12. PREPARE CARD CONTENT
   ============================================================================
   ============================================================================ */


    function prepareCardContent() {

        cards.forEach(
            (
                card,
                index
            ) => {


                if (!card) {

                    return;

                }


                const info =
                    BUREAU[index];


                if (!info) {

                    return;

                }


                card.dataset.index =
                    index;


                card.dataset.role =
                    info.role;


                card.dataset.key =
                    info.key;



                /*
                    Main top title.
                */

                const title =
                    card.querySelector(
                        ".title-text"
                    );


                if (title) {

                    title.textContent =
                        info.role;

                }



                /*
                    Footer role.
                */

                const memberRole =
                    card.querySelector(
                        ".member-role"
                    );


                if (memberRole) {

                    memberRole.textContent =
                        info.role;

                }



                /*
                    Remove real names.
                */

                const memberName =
                    card.querySelector(
                        ".member-name"
                    );


                if (memberName) {

                    memberName.textContent =
                        "";

                }



                /*
                    Hide actual photos.
                */

                const image =
                    card.querySelector(
                        ".member-image"
                    );


                if (image) {

                    image.style.opacity =
                        "0";


                    image.style.visibility =
                        "hidden";


                    image.style.pointerEvents =
                        "none";

                }



                /*
                    Remove old single-card
                    flipped state if present.
                */

                card.classList.remove(
                    "flipped"
                );


            }
        );

    }



/* ============================================================================
   ============================================================================
   13. BUILD EXTRA GAME ENVIRONMENT
   ============================================================================
   ============================================================================ */


    function createElement(
        tag,
        className,
        parent
    ) {

        const element =
            document.createElement(
                tag
            );


        if (className) {

            element.className =
                className;

        }


        if (parent) {

            parent.appendChild(
                element
            );

        }


        return element;

    }



/* ============================================================================
   14. ENSURE GAME HEADER
============================================================================ */


    function ensureGameHeader() {

        if (!scene) {

            return;

        }


        let header =
            scene.querySelector(
                ".game-header"
            );


        if (header) {

            return;

        }


        header =
            createElement(
                "header",
                "game-header",
                scene
            );


        const left =
            createElement(
                "span",
                "game-brand-line game-brand-line-left",
                header
            );


        const heading =
            createElement(
                "div",
                "game-heading",
                header
            );


        const kicker =
            createElement(
                "span",
                "game-kicker",
                heading
            );


        kicker.textContent =
            "SMART CLUB";


        const title =
            createElement(
                "h1",
                "game-title",
                heading
            );


        title.textContent =
            "BUREAU SELECTION";


        if (!selectionStatus) {

            const status =
                createElement(
                    "div",
                    "game-status",
                    heading
                );


            status.id =
                "selectionStatus";


            status.textContent =
                "READY";

        }


        const right =
            createElement(
                "span",
                "game-brand-line game-brand-line-right",
                header
            );

    }



/* ============================================================================
   15. ENSURE ORBIT TRACKS
============================================================================ */


    function ensureOrbitTracks() {

        if (!arena) {

            return;

        }


        if (
            arena.querySelector(
                ".orbit-track-main"
            )
        ) {

            return;

        }


        createElement(
            "div",
            "orbit-track orbit-track-outer",
            arena
        );


        createElement(
            "div",
            "orbit-track orbit-track-main",
            arena
        );


        createElement(
            "div",
            "orbit-track orbit-track-inner",
            arena
        );

    }



/* ============================================================================
   16. ENSURE CENTRAL CORE
============================================================================ */


    function ensureSelectionCore() {

        if (!arena) {

            return;

        }


        if (
            arena.querySelector(
                ".selection-core"
            )
        ) {

            return;

        }


        const core =
            createElement(
                "div",
                "selection-core",
                arena
            );


        createElement(
            "div",
            "selection-core-glow",
            core
        );


        createElement(
            "div",
            "selection-core-ring core-ring-a",
            core
        );


        createElement(
            "div",
            "selection-core-ring core-ring-b",
            core
        );


        createElement(
            "div",
            "selection-core-ring core-ring-c",
            core
        );


        createElement(
            "div",
            "selection-core-point",
            core
        );

    }



/* ============================================================================
   17. ENHANCE START BUTTON
============================================================================ */


    function enhanceStartButton() {

        if (!startButton) {

            return;

        }


        if (
            !startButton.querySelector(
                ".start-button-aura"
            )
        ) {

            createElement(
                "span",
                "start-button-aura",
                startButton
            );

        }


        if (
            !startButton.querySelector(
                ".start-button-orbit-one"
            )
        ) {

            createElement(
                "span",
                "start-button-orbit start-button-orbit-one",
                startButton
            );

        }


        if (
            !startButton.querySelector(
                ".start-button-orbit-two"
            )
        ) {

            createElement(
                "span",
                "start-button-orbit start-button-orbit-two",
                startButton
            );

        }


        if (
            !startButton.querySelector(
                ".start-button-inner-ring"
            )
        ) {

            createElement(
                "span",
                "start-button-inner-ring",
                startButton
            );

        }



        let content =
            startButton.querySelector(
                ".start-button-content"
            );


        if (!content) {

            const existingText =
                startButton.textContent.trim();


            startButton.textContent =
                "";


            content =
                createElement(
                    "span",
                    "start-button-content",
                    startButton
                );


            const small =
                createElement(
                    "small",
                    "",
                    content
                );


            small.textContent =
                "SMART CLUB";


            const strong =
                createElement(
                    "strong",
                    "",
                    content
                );


            strong.textContent =
                existingText
                ||
                "START SELECTION";

        }

    }



/* ============================================================================
   ============================================================================
   18. AMBIENT PARTICLES
   ============================================================================
   ============================================================================ */


    function createAmbientParticles() {

        if (!particlesContainer) {

            return;

        }


        particlesContainer.innerHTML =
            "";


        const lowPower =
            window.innerWidth < 500;


        const amount =
            lowPower
                ? 20
                : 32;


        for (
            let i = 0;
            i < amount;
            i++
        ) {


            const particle =
                document.createElement(
                    "span"
                );


            particle.className =
                "particle";


            const size =
                random(
                    0.65,
                    2
                );


            particle.style.width =
                `${size}px`;


            particle.style.height =
                `${size}px`;


            particle.style.left =
                `${
                    random(
                        2,
                        98
                    )
                }%`;


            particle.style.top =
                `${
                    random(
                        0,
                        100
                    )
                }%`;


            particle.style.opacity =
                random(
                    0.12,
                    0.46
                );


            particle.style.animationDuration =
                `${
                    random(
                        11,
                        24
                    )
                }s`;


            particle.style.animationDelay =
                `${
                    -random(
                        0,
                        20
                    )
                }s`;


            const magentaParticle =
                Math.random() <
                0.28;


            particle.style.background =
                magentaParticle

                    ?

                    COLORS.pink

                    :

                    COLORS.pearl;


            particle.style.boxShadow =

                magentaParticle

                    ?

                    `
                    0 0 4px
                    rgba(255,112,199,.44),

                    0 0 10px
                    rgba(217,43,158,.18)
                    `

                    :

                    `
                    0 0 3px
                    rgba(255,255,255,.45),

                    0 0 8px
                    rgba(255,255,255,.08)
                    `;


            particlesContainer.appendChild(
                particle
            );

        }

    }



/* ============================================================================
   ============================================================================
   19. DYNAMIC DUST PARTICLES
   ============================================================================
   ============================================================================ */


    function createDustBurst(
        x,
        y,
        amount = 8,
        radius = 70
    ) {

        if (!scene) {

            return;

        }


        for (
            let i = 0;
            i < amount;
            i++
        ) {


            const dust =
                document.createElement(
                    "span"
                );


            dust.className =
                "selection-dust";


            dust.style.position =
                "fixed";


            dust.style.left =
                `${x}px`;


            dust.style.top =
                `${y}px`;


            dust.style.width =
                `${random(1, 2.5)}px`;


            dust.style.height =
                dust.style.width;


            dust.style.borderRadius =
                "50%";


            dust.style.pointerEvents =
                "none";


            dust.style.zIndex =
                "999";


            const pink =
                Math.random() <
                0.45;


            dust.style.background =
                pink
                    ? COLORS.pink
                    : COLORS.pearl;


            dust.style.boxShadow =

                pink

                    ?

                    `
                    0 0 5px
                    rgba(255,112,199,.55)
                    `

                    :

                    `
                    0 0 4px
                    rgba(255,255,255,.50)
                    `;


            document.body.appendChild(
                dust
            );


            const angle =
                random(
                    0,
                    TAU
                );


            const distance =
                random(
                    radius * 0.3,
                    radius
                );


            const dx =
                Math.cos(
                    angle
                )
                *
                distance;


            const dy =
                Math.sin(
                    angle
                )
                *
                distance;


            dust.animate(

                [

                    {

                        opacity:
                            0,

                        transform:
                            `
                            translate(
                                0px,
                                0px
                            )
                            scale(.2)
                            `

                    },

                    {

                        opacity:
                            random(
                                .5,
                                .95
                            ),

                        transform:
                            `
                            translate(
                                ${
                                    dx * .25
                                }px,
                                ${
                                    dy * .25
                                }px
                            )
                            scale(1)
                            `,

                        offset:
                            .20

                    },

                    {

                        opacity:
                            0,

                        transform:
                            `
                            translate(
                                ${dx}px,
                                ${dy}px
                            )
                            scale(.1)
                            `

                    }

                ],

                {

                    duration:
                        random(
                            600,
                            1100
                        ),

                    easing:
                        "ease-out"

                }

            );


            setTimeout(
                () =>
                    dust.remove(),
                1250
            );

        }

    }



/* ============================================================================
   ============================================================================
   20. CARD GEOMETRY
   ============================================================================
   ============================================================================ */


function calculateOrbitGeometry(
    state,
    rect
) {

    const width =
        rect.width;


    const height =
        rect.height;


    const isDesktop =
        window.innerWidth >= 900;


    const energetic =
        gameState === GAME_STATE.ACCELERATING
        ||
        gameState === GAME_STATE.FULL_SPEED
        ||
        gameState === GAME_STATE.DECELERATING;


    const energyExpansion =
        energetic
            ? arenaEnergy * 0.018
            : 0;


    return {

        centerX:
            width * 0.5,

        centerY:
            height * (
                isDesktop
                    ? 0.49
                    : 0.49
            ),

        radiusX:
            isDesktop

                ?

                Math.min(
                    width * (
                        0.355 +
                        energyExpansion
                    ),
                    710
                )

                :

                width * (
                    0.395 +
                    energyExpansion
                ),

        radiusY:
            isDesktop

                ?

                Math.min(
                    height * (
                        0.205 +
                        energyExpansion * .30
                    ),
                    185
                )

                :

                height * (
                    0.205 +
                    energyExpansion * .35
                )

    };

}


/* ============================================================================
   ============================================================================
   21. ORBIT CARD RENDERER
   ============================================================================
   ============================================================================ */


    function renderCard(
        slot,
        card,
        state,
        geometry
    ) {


        if (
            !slot ||
            !card
        ) {

            return;

        }


        const index =
            state.index;


        const cardAngle =
            wheelAngle
            +
            index
            *
            (
                TAU /
                CARD_COUNT
            );


        state.angle =
            cardAngle;


        const cos =
            Math.cos(
                cardAngle
            );


        const sin =
            Math.sin(
                cardAngle
            );



        /*
            FRONT DEPTH

            sin = +1 → card is closest.

            sin = -1 → card is farthest.
        */


        const depth =
            (
                sin +
                1
            )
            *
            0.5;


        state.depth =
            depth;



        /*
            Horizontal location.
        */


        const x =
            geometry.centerX
            +
            cos *
            geometry.radiusX;



        /*
            Vertical elliptical path.
        */


        const y =
            geometry.centerY
            +
            sin *
            geometry.radiusY;



        /*
            Scale.
        */


        const isDesktop =
    window.innerWidth >= 900;


let scale =
    isDesktop

        ?

        lerp(
            0.22,
            0.43,
            depth
        )

        :

        lerp(
            0.155,
            0.305,
            depth
        );


        /*
            Candidate gets tiny expansion.
        */


        state.pulse =
            lerp(
                state.pulse,
                state.pulseTarget,
                0.075
            );


        scale +=
            state.pulse *
            0.012;



        /*
            Perspective Z.
        */


        const z =
            lerp(
                -320,
                250,
                depth
            );


        state.z =
            z;



        /*
            Cards rotate subtly toward center.
        */


        let rotateY =
            cos *
            -24;


        let rotateX =
            (
                depth -
                .5
            )
            *
            -1.8;


        let rotateZ =
            cos *
            -1.65;



        /*
            Pointer parallax.
        */


        rotateY +=
            pointerCurrentX *
            (
                1.6 +
                depth *
                1.4
            );


        rotateX +=
            pointerCurrentY *
            1.15;



        /*
            Front cards are bright.
        */


        let brightness =
            lerp(
                .48,
                1.08,
                depth
            );


        brightness +=
            state.pulse *
            .12;



        /*
            Back cards lose saturation.
        */


        const saturation =
            lerp(
                .68,
                1.05,
                depth
            );



        /*
            Gentle blur at rear.
        */


        let blur =
            lerp(
                .6,
                0,
                depth
            );


        if (
            gameState ===
            GAME_STATE.FULL_SPEED
        ) {

            blur +=
                (
                    1 -
                    depth
                )
                *
                .25;

        }



        /*
            Opacity.
        */


        let opacity =
            lerp(
                .34,
                1,
                depth
            );



        /*
            During high speed, rear cards disappear
            slightly more into darkness.
        */


        if (
            gameState ===
            GAME_STATE.FULL_SPEED
        ) {

            opacity *=
                lerp(
                    .75,
                    1,
                    depth
                );

        }



        /*
            Save calculated values.
        */


        state.x =
            x;


        state.y =
            y;


        state.scale =
            scale;


        state.opacity =
            opacity;


        state.brightness =
            brightness;


        state.blur =
            blur;



        /*
            Apply.
        */


        slot.style.left =
            `${x}px`;


        slot.style.top =
            `${y}px`;


        slot.style.opacity =
            opacity;


        slot.style.zIndex =
            String(
                Math.round(
                    20 +
                    depth *
                    120
                )
            );


        slot.style.filter = `

            brightness(
                ${brightness}
            )

            saturate(
                ${saturation}
            )

            blur(
                ${blur}px
            )

        `;


        slot.style.transform = `

            translate(
                -50%,
                -50%
            )

            translateZ(
                ${z}px
            )

            rotateX(
                ${rotateX}deg
            )

            rotateY(
                ${rotateY}deg
            )

            rotateZ(
                ${rotateZ}deg
            )

            scale(
                ${scale}
            )

        `;



        /*
            Dynamic card glow.
        */


        const glowStrength =
            lerp(
                .03,
                .24,
                depth
            )
            +
            state.pulse *
            .28;


        card.style.filter = `

            drop-shadow(
                0 0
                ${
                    lerp(
                        4,
                        13,
                        depth
                    )
                }px
                rgba(
                    217,
                    43,
                    158,
                    ${glowStrength}
                )
            )

        `;


        /*
            Front rail response.
        */


        updateCardMicroLighting(
            card,
            depth,
            state
        );

    }



/* ============================================================================
   ============================================================================
   22. CARD MICRO LIGHTING
   ============================================================================
   ============================================================================ */


    function updateCardMicroLighting(
        card,
        depth,
        state
    ) {


        const shine =
            card.querySelector(
                ".card-shine"
            );


        const reflection =
            card.querySelector(
                ".glass-reflection"
            );


        const emblemGlow =
            card.querySelector(
                ".emblem-glow"
            );


        const portraitCore =
            card.querySelector(
                ".portrait-core-light"
            );


        const title =
            card.querySelector(
                ".title-text"
            );


        if (shine) {

            shine.style.opacity =
                lerp(
                    .13,
                    .48,
                    depth
                )
                +
                state.pulse *
                .12;


            shine.style.marginLeft =
                `${
                    pointerCurrentX *
                    12 *
                    depth
                }px`;

        }


        if (reflection) {

            reflection.style.opacity =
                lerp(
                    .08,
                    .38,
                    depth
                );

        }


        if (emblemGlow) {

            emblemGlow.style.opacity =
                lerp(
                    .15,
                    .60,
                    depth
                )
                +
                state.pulse *
                .22;

        }


        if (portraitCore) {

            portraitCore.style.opacity =
                lerp(
                    .12,
                    .50,
                    depth
                );

        }


        if (title) {

            const titleGlow =
                lerp(
                    .06,
                    .30,
                    depth
                )
                +
                state.pulse *
                .34;


            title.style.textShadow = `

                0 0 7px
                rgba(
                    255,
                    112,
                    199,
                    ${titleGlow}
                )

            `;

        }

    }



/* ============================================================================
   ============================================================================
   23. RENDER ENTIRE ORBIT
   ============================================================================
   ============================================================================ */


    function renderOrbit() {


        if (
            !arena
            ||
            selectionFinished
        ) {

            return;

        }


        const rect =
            arena.getBoundingClientRect();


        const geometry =
            calculateOrbitGeometry(
                gameState,
                rect
            );


        let nearestIndex =
            -1;


        let strongestDepth =
            -Infinity;


        slots.forEach(
            (
                slot,
                index
            ) => {


                const card =
                    cards[index];


                const state =
                    cardState[index];


                if (
                    !slot ||
                    !card ||
                    !state
                ) {

                    return;

                }


                renderCard(
                    slot,
                    card,
                    state,
                    geometry
                );


                if (
                    state.depth >
                    strongestDepth
                ) {

                    strongestDepth =
                        state.depth;


                    nearestIndex =
                        index;

                }


            }
        );



        /*
            Candidate detection.
        */


        if (
            nearestIndex !==
            currentCandidate
            &&
            strongestDepth >
            .965
        ) {

            previousCandidate =
                currentCandidate;


            currentCandidate =
                nearestIndex;


            onCandidateChanged(
                currentCandidate,
                previousCandidate
            );

        }

    }



/* ============================================================================
   ============================================================================
   24. CANDIDATE CHANGE SYSTEM
   ============================================================================
   ============================================================================ */


    function onCandidateChanged(
        index,
        previous
    ) {


        if (
            previous >=
            0
        ) {

            const oldState =
                cardState[previous];


            if (oldState) {

                oldState.pulseTarget =
                    0;

            }

        }


        const state =
            cardState[index];


        if (state) {

            state.pulseTarget =
                gameState ===
                GAME_STATE.IDLE
                    ? .25
                    : .75;

        }



        if (
            gameState ===
            GAME_STATE.DECELERATING
            ||
            gameState ===
            GAME_STATE.LOCKING
        ) {

            candidatePassEffect(
                index
            );

        }

    }



/* ============================================================================
   25. CANDIDATE PASS EFFECT
============================================================================ */


    function candidatePassEffect(
        index
    ) {


        const slot =
            slots[index];


        const card =
            cards[index];


        if (
            !slot ||
            !card
        ) {

            return;

        }


        const title =
            card.querySelector(
                ".title-text"
            );


        const crown =
            card.querySelector(
                ".crown-icon"
            );


        const rails =
            card.querySelectorAll(
                ".light-rail span"
            );


        card.animate(

            [

                {

                    filter:
                        `
                        brightness(1)
                        drop-shadow(
                            0 0 0
                            rgba(255,112,199,0)
                        )
                        `

                },

                {

                    filter:
                        `
                        brightness(1.20)

                        drop-shadow(
                            0 0 8px
                            rgba(255,247,252,.18)
                        )

                        drop-shadow(
                            0 0 24px
                            rgba(255,112,199,.35)
                        )
                        `,

                    offset:
                        .38

                },

                {

                    filter:
                        `
                        brightness(1.04)

                        drop-shadow(
                            0 0 9px
                            rgba(217,43,158,.12)
                        )
                        `

                }

            ],

            {

                duration:
                    430,

                easing:
                    "ease-out"

            }

        );


        if (title) {

            title.animate(

                [

                    {

                        filter:
                            "brightness(1)"

                    },

                    {

                        filter:
                            "brightness(1.45)"

                    },

                    {

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

        }


        if (crown) {

            crown.animate(

                [

                    {

                        transform:
                            "translateY(0)"

                    },

                    {

                        transform:
                            "translateY(-2px)"

                    },

                    {

                        transform:
                            "translateY(0)"

                    }

                ],

                {

                    duration:
                        380,

                    easing:
                        "ease-out"

                }

            );

        }


        rails.forEach(
            (
                rail,
                railIndex
            ) => {


                rail.animate(

                    [

                        {

                            opacity:
                                .15

                        },

                        {

                            opacity:
                                .95

                        },

                        {

                            opacity:
                                .30

                        }

                    ],

                    {

                        duration:
                            360,

                        delay:
                            railIndex *
                            45,

                        easing:
                            "ease-out"

                    }

                );

            }
        );

    }



/* ============================================================================
   ============================================================================
   26. ROLE-SPECIFIC AMBIENT PERSONALITY
   ============================================================================
   ============================================================================ */


/*
    The cards remain visually identical.

    These are only tiny animation variations
    that give each bureau cell personality.
*/


    function activateRolePersonalities() {


        cards.forEach(
            (
                card,
                index
            ) => {


                if (!card) {

                    return;

                }


                const halo =
                    card.querySelector(
                        ".leadership-halo"
                    );


                const emblem =
                    card.querySelector(
                        ".president-emblem"
                    );


                const portraitRings =
                    card.querySelectorAll(
                        ".portrait-ring"
                    );


                switch (
                    BUREAU[index]
                        ?.key
                ) {


                    case "president":

                        if (emblem) {

                            emblem.style.animationDuration =
                                "4.2s";

                        }

                        break;



                    case "vice-president":

                        portraitRings.forEach(
                            (
                                ring,
                                ringIndex
                            ) => {

                                ring.style.animationDelay =
                                    `${
                                        ringIndex *
                                        -.7
                                    }s`;

                            }
                        );

                        break;



                    case "treasurer":

                        if (halo) {

                            halo.style.animationTimingFunction =
                                "linear";

                        }

                        break;



                    case "media":

                        card.querySelectorAll(
                            ".light-rail span"
                        )
                        .forEach(
                            rail => {

                                rail.style.animationDuration =
                                    "3.4s";

                            }
                        );

                        break;



                    case "logistics":

                        card.querySelectorAll(
                            ".premium-corner"
                        )
                        .forEach(
                            corner => {

                                corner.style.opacity =
                                    ".9";

                            }
                        );

                        break;



                    case "formation":

                        portraitRings.forEach(
                            ring => {

                                ring.style.opacity =
                                    ".75";

                            }
                        );

                        break;



                    case "design-project":

                        if (halo) {

                            halo.style.transform +=
                                " rotate(7deg)";

                        }

                        break;



                    case "sponsoring":

                        card.querySelectorAll(
                            ".glass-reflection"
                        )
                        .forEach(
                            reflection => {

                                reflection.style.opacity =
                                    ".5";

                            }
                        );

                        break;

                }

            }
        );

    }



/* ============================================================================
   ============================================================================
   27. ARENA ENERGY ENGINE
   ============================================================================
   ============================================================================ */


    function updateArenaEnergy() {


        arenaEnergy =
            lerp(
                arenaEnergy,
                targetArenaEnergy,
                .045
            );


        const core =
            scene
                ?.querySelector(
                    ".selection-core"
                );


        const glow =
            scene
                ?.querySelector(
                    ".selection-core-glow"
                );


        const tracks =
            scene
                ?.querySelectorAll(
                    ".orbit-track"
                );


        if (core) {

            core.style.filter = `

                brightness(
                    ${
                        0.8 +
                        arenaEnergy *
                        .65
                    }
                )

            `;

        }


        if (glow) {

            glow.style.opacity =
                clamp(
                    .32 +
                    arenaEnergy *
                    .68,
                    0,
                    1
                );

        }


        tracks
            ?.forEach(
                (
                    track,
                    index
                ) => {

                    track.style.opacity =
                        clamp(

                            .25
                            +
                            arenaEnergy *
                            (
                                .38 -
                                index *
                                .07
                            ),

                            .15,

                            .85

                        );

                }
            );

    }



/* ============================================================================
   ============================================================================
   28. ENGINE LOOP
   ============================================================================
   ============================================================================ */


    function engineLoop(
        currentTime
    ) {


        const delta =
            Math.min(

                currentTime -
                previousFrameTime,

                34

            );


        previousFrameTime =
            currentTime;


        engineTime +=
            delta;


        frameCounter ++;



        /*
            Pointer smoothing.
        */


        pointerCurrentX =
            lerp(
                pointerCurrentX,
                pointerTargetX,
                .055
            );


        pointerCurrentY =
            lerp(
                pointerCurrentY,
                pointerTargetY,
                .055
            );



        /*
            Wheel physics.
        */


        if (
            gameState ===
            GAME_STATE.IDLE
        ) {

            wheelVelocity =
                lerp(
                    wheelVelocity,
                    targetWheelVelocity,
                    .02
                );


            wheelAngle +=
                wheelVelocity *
                delta;

        }



        else if (
            gameState ===
            GAME_STATE.ACCELERATING
            ||
            gameState ===
            GAME_STATE.FULL_SPEED
        ) {

            wheelVelocity =
                lerp(
                    wheelVelocity,
                    targetWheelVelocity,
                    .035
                );


            wheelAngle +=
                wheelVelocity *
                delta;

        }



        /*
            Ambient energy.
        */


        updateArenaEnergy();



        /*
            Card orbit.
        */


        if (
            !selectionFinished
        ) {

            renderOrbit();

        }



        /*
            Winner parallax.
        */


        if (
            gameState ===
            GAME_STATE.WINNER
        ) {

            renderWinnerParallax();

        }


        requestAnimationFrame(
            engineLoop
        );

    }



/* ============================================================================
   ============================================================================
   29. STATUS TEXT
   ============================================================================
   ============================================================================ */


    function getStatusElement() {

        return (

            document.getElementById(
                "selectionStatus"
            )

            ||

            document.querySelector(
                ".game-status"
            )

            ||

            document.querySelector(
                ".selection-status"
            )

        );

    }


    function setStatus(
        text,
        animated = true
    ) {


        const status =
            getStatusElement();


        if (!status) {

            return;

        }


        if (!animated) {

            status.textContent =
                text;


            return;

        }


        status.animate(

            [

                {

                    opacity:
                        1,

                    transform:
                        "translateY(0)"

                },

                {

                    opacity:
                        0,

                    transform:
                        "translateY(-3px)"

                }

            ],

            {

                duration:
                    180,

                fill:
                    "forwards",

                easing:
                    "ease-in"

            }

        );


        setTimeout(
            () => {


                status.textContent =
                    text;


                status.animate(

                    [

                        {

                            opacity:
                                0,

                            transform:
                                "translateY(4px)",

                            letterSpacing:
                                "8px"

                        },

                        {

                            opacity:
                                1,

                            transform:
                                "translateY(0)",

                            letterSpacing:
                                "5px"

                        }

                    ],

                    {

                        duration:
                            420,

                        fill:
                            "forwards",

                        easing:
                            "cubic-bezier(.16,1,.3,1)"

                    }

                );

            },

            185
        );

    }



/* ============================================================================
   ============================================================================
   30. START BUTTON INTERACTION
   ============================================================================
   ============================================================================ */


    function buttonPressAnimation() {


        if (!startButton) {

            return;

        }


        startButton.animate(

            [

                {

                    transform:
                        "scale(1)",

                    filter:
                        "brightness(1)"

                },

                {

                    transform:
                        "scale(.91)",

                    filter:
                        "brightness(1.35)",

                    offset:
                        .23

                },

                {

                    transform:
                        "scale(1.06)",

                    filter:
                        "brightness(1.15)",

                    offset:
                        .63

                },

                {

                    transform:
                        "scale(1)",

                    filter:
                        "brightness(1)"

                }

            ],

            {

                duration:
                    580,

                easing:
                    "cubic-bezier(.16,1,.3,1)"

            }

        );



        const rect =
            startButton
                .getBoundingClientRect();


        createDustBurst(

            rect.left +
            rect.width /
            2,

            rect.top +
            rect.height /
            2,

            13,

            88

        );

    }



/* ============================================================================
   ============================================================================
   31. PRE-SELECTION WAKE-UP
   ============================================================================
   ============================================================================ */


    async function prepareSelection() {


        gameState =
            GAME_STATE.PREPARING;


        targetArenaEnergy =
            .75;


        scene
            ?.classList.add(
                "is-spinning"
            );


        buttonPressAnimation();


        setStatus(
            "INITIALIZING"
        );


        await wait(
            430
        );



        /*
            All cards acknowledge start.
        */


        cards.forEach(
            (
                card,
                index
            ) => {


                setTimeout(
                    () => {


                        if (!card) {

                            return;

                        }


                        card.animate(

                            [

                                {

                                    filter:
                                        "brightness(1)"

                                },

                                {

                                    filter:
                                        `
                                        brightness(1.12)

                                        drop-shadow(
                                            0 0 10px
                                            rgba(217,43,158,.22)
                                        )
                                        `

                                },

                                {

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

                    },

                    index *
                    58
                );

            }
        );


        await wait(
            600
        );


        setStatus(
            "SELECTION STARTED"
        );


        await wait(
            250
        );

    }



/* ============================================================================
   ============================================================================
   32. ACCELERATION
   ============================================================================
   ============================================================================ */


    async function accelerateSelection() {


        gameState =
            GAME_STATE.ACCELERATING;


        targetArenaEnergy =
            1;


        const startSpeed =
            wheelVelocity;


        const maximumSpeed =
            0.0058;


        const duration =
            1750;


        const startTime =
            performance.now();


        await new Promise(
            resolve => {


                function frame(
                    now
                ) {


                    const progress =
                        clamp(

                            (
                                now -
                                startTime
                            )
                            /
                            duration,

                            0,

                            1

                        );


                    const eased =
                        Ease.inCubic(
                            progress
                        );


                    targetWheelVelocity =
                        lerp(
                            startSpeed,
                            maximumSpeed,
                            eased
                        );


                    /*
                        Slight arena tension.
                    */


                    targetArenaEnergy =
                        lerp(
                            .75,
                            1,
                            Ease.outCubic(
                                progress
                            )
                        );


                    if (
                        progress <
                        1
                    ) {

                        requestAnimationFrame(
                            frame
                        );

                    }

                    else {

                        wheelVelocity =
                            maximumSpeed;


                        targetWheelVelocity =
                            maximumSpeed;


                        resolve();

                    }

                }


                requestAnimationFrame(
                    frame
                );

            }
        );

    }



/* ============================================================================
   ============================================================================
   33. FULL SPEED ORBIT
   ============================================================================
   ============================================================================ */


    async function fullSpeedSelection() {


        gameState =
            GAME_STATE.FULL_SPEED;


        setStatus(
            "SELECTING"
        );


        const duration =
            2350;


        const start =
            performance.now();


        const baseSpeed =
            0.0058;


        await new Promise(
            resolve => {


                function frame(
                    now
                ) {


                    const elapsed =
                        now -
                        start;


                    const progress =
                        clamp(
                            elapsed /
                            duration,
                            0,
                            1
                        );


                    /*
                        Imperfect velocity.

                        This makes it feel more physical
                        than a CSS infinite rotation.
                    */


                    const waveOne =
                        Math.sin(
                            elapsed *
                            .0055
                        )
                        *
                        .00019;


                    const waveTwo =
                        Math.sin(
                            elapsed *
                            .013
                        )
                        *
                        .00008;


                    targetWheelVelocity =
                        baseSpeed
                        +
                        waveOne
                        +
                        waveTwo;


                    targetArenaEnergy =
                        .93
                        +
                        Math.sin(
                            elapsed *
                            .004
                        )
                        *
                        .06;


                    if (
                        progress <
                        1
                    ) {

                        requestAnimationFrame(
                            frame
                        );

                    }

                    else {

                        resolve();

                    }

                }


                requestAnimationFrame(
                    frame
                );

            }
        );

    }



/* ============================================================================
   ============================================================================
   34. PREPARE DECELERATION
   ============================================================================
   ============================================================================ */


    async function prepareDeceleration() {


        setStatus(
            "FINALIZING"
        );


        await wait(
            350
        );


        gameState =
            GAME_STATE.DECELERATING;


        targetArenaEnergy =
            .70;

    }



/* ============================================================================
   ============================================================================
   35. MATHEMATICAL PRESIDENT TARGET
   ============================================================================
   ============================================================================ */


    function calculatePresidentLandingAngle() {


        /*
            Front position = PI / 2.

            PRESIDENT = index 0.

            Therefore wheelAngle must finish
            at PI / 2 modulo TAU.
        */


        const targetNormalized =
            HALF_PI;


        const currentNormalized =
            normalizeAngle(
                wheelAngle
            );


        let difference =
            targetNormalized -
            currentNormalized;


        if (
            difference <
            0
        ) {

            difference +=
                TAU;

        }


        /*
            Additional rotations.

            Three full revolutions make the
            slow-down feel substantial.
        */


        const extraRevolutions =
            3;


        return (

            wheelAngle
            +
            extraRevolutions *
            TAU
            +
            difference

        );

    }



/* ============================================================================
   ============================================================================
   36. CONTROLLED DECELERATION
   ============================================================================
   ============================================================================ */


    async function decelerateToPresident() {


        gameState =
            GAME_STATE.DECELERATING;


        const initialAngle =
            wheelAngle;


        const finalAngle =
            calculatePresidentLandingAngle();


        const duration =
            4400;


        const start =
            performance.now();


        /*
            Engine must stop automatic integration.
        */


        wheelVelocity =
            0;


        targetWheelVelocity =
            0;


        await new Promise(
            resolve => {


                function frame(
                    now
                ) {


                    const progress =
                        clamp(

                            (
                                now -
                                start
                            )
                            /
                            duration,

                            0,

                            1

                        );


                    /*
                        Quintic curve.

                        High speed early.
                        Very slow, elegant ending.
                    */


                    const eased =
                        Ease.outQuint(
                            progress
                        );


                    wheelAngle =
                        lerp(
                            initialAngle,
                            finalAngle,
                            eased
                        );


                    targetArenaEnergy =
                        lerp(
                            .70,
                            .34,
                            Ease.smooth(
                                progress
                            )
                        );


                    /*
                        Last 22%:
                        enter locking state.
                    */


                    if (
                        progress >
                        .78
                        &&
                        gameState !==
                        GAME_STATE.LOCKING
                    ) {

                        gameState =
                            GAME_STATE.LOCKING;


                        setStatus(
                            "LOCKING"
                        );

                    }


                    if (
                        progress <
                        1
                    ) {

                        requestAnimationFrame(
                            frame
                        );

                    }

                    else {

                        wheelAngle =
                            finalAngle;


                        resolve();

                    }

                }


                requestAnimationFrame(
                    frame
                );

            }
        );

    }



/* ============================================================================
   ============================================================================
   37. PRESIDENT CONFIRMATION
   ============================================================================
   ============================================================================ */


    async function confirmPresident() {


        gameState =
            GAME_STATE.LOCKING;


        const slot =
            slots[
                PRESIDENT_INDEX
            ];


        const card =
            cards[
                PRESIDENT_INDEX
            ];


        const state =
            cardState[
                PRESIDENT_INDEX
            ];


        if (
            !slot ||
            !card
        ) {

            return;

        }


        state.selected =
            true;


        state.pulseTarget =
            1;


        setStatus(
            "PRESIDENT SELECTED"
        );


        targetArenaEnergy =
            .65;



        /*
            Full card acknowledgment.
        */


        card.animate(

            [

                {

                    filter:
                        `
                        brightness(1)

                        drop-shadow(
                            0 0 8px
                            rgba(217,43,158,.14)
                        )
                        `

                },

                {

                    filter:
                        `
                        brightness(1.30)

                        drop-shadow(
                            0 0 10px
                            rgba(255,247,252,.30)
                        )

                        drop-shadow(
                            0 0 32px
                            rgba(255,112,199,.40)
                        )
                        `,

                    offset:
                        .42

                },

                {

                    filter:
                        `
                        brightness(1.08)

                        drop-shadow(
                            0 0 23px
                            rgba(217,43,158,.20)
                        )
                        `

                }

            ],

            {

                duration:
                    1050,

                fill:
                    "forwards",

                easing:
                    "ease-out"

            }

        );



        /*
            Crown.
        */


        const crown =
            card.querySelector(
                ".crown-icon"
            );


        if (crown) {

            crown.animate(

                [

                    {

                        transform:
                            `
                            translateY(0)
                            scale(1)
                            `

                    },

                    {

                        transform:
                            `
                            translateY(-5px)
                            scale(1.10)
                            `,

                        filter:
                            `
                            brightness(1.45)

                            drop-shadow(
                                0 0 8px
                                rgba(255,247,252,.45)
                            )

                            drop-shadow(
                                0 0 20px
                                rgba(255,112,199,.36)
                            )
                            `,

                        offset:
                            .50

                    },

                    {

                        transform:
                            `
                            translateY(0)
                            scale(1)
                            `,

                        filter:
                            ""

                    }

                ],

                {

                    duration:
                        900,

                    easing:
                        "cubic-bezier(.16,1,.3,1)"

                }

            );

        }



        /*
            Crown rings.
        */


        card.querySelectorAll(
            ".emblem-ring"
        )
        .forEach(
            (
                ring,
                index
            ) => {


                ring.animate(

                    [

                        {

                            opacity:
                                .35,

                            transform:
                                `
                                translate(
                                    -50%,
                                    -50%
                                )
                                scale(.9)
                                `

                        },

                        {

                            opacity:
                                .90,

                            transform:
                                `
                                translate(
                                    -50%,
                                    -50%
                                )
                                scale(1.12)
                                `

                        },

                        {

                            opacity:
                                .45,

                            transform:
                                `
                                translate(
                                    -50%,
                                    -50%
                                )
                                scale(1)
                                `

                        }

                    ],

                    {

                        duration:
                            850,

                        delay:
                            index *
                            80,

                        easing:
                            "ease-out"

                    }

                );

            }
        );



        /*
            Rails.
        */


        card.querySelectorAll(
            ".light-rail span"
        )
        .forEach(
            (
                rail,
                index
            ) => {


                rail.animate(

                    [

                        {

                            opacity:
                                .20

                        },

                        {

                            opacity:
                                1

                        },

                        {

                            opacity:
                                .35

                        }

                    ],

                    {

                        duration:
                            620,

                        delay:
                            index *
                            120,

                        easing:
                            "ease-out"

                    }

                );

            }
        );



        /*
            Small dust.
        */


        const rect =
            slot.getBoundingClientRect();


        createDustBurst(

            rect.left +
            rect.width /
            2,

            rect.top +
            rect.height /
            2,

            14,

            100

        );


        await wait(
            1100
        );

    }



/* ============================================================================
   ============================================================================
   38. RETREAT OTHER CARDS
   ============================================================================
   ============================================================================ */


    async function retreatOtherCards() {


        gameState =
            GAME_STATE.REVEALING;


        selectionFinished =
            true;


        scene
            ?.classList.add(
                "has-winner"
            );


        const presidentSlot =
            slots[
                PRESIDENT_INDEX
            ];


        slots.forEach(
            (
                slot,
                index
            ) => {


                if (
                    index ===
                    PRESIDENT_INDEX
                ) {

                    return;

                }


                const state =
                    cardState[index];


                if (!state) {

                    return;

                }


                const direction =
                    Math.cos(
                        state.angle
                    )
                    >=
                    0

                        ?

                        1

                        :

                        -1;


                const vertical =
                    Math.sin(
                        state.angle
                    );


                slot.style.transition = `

                    opacity
                    900ms
                    cubic-bezier(.16,1,.3,1),

                    filter
                    900ms
                    ease,

                    transform
                    1100ms
                    cubic-bezier(.16,1,.3,1)

                `;


                const extraDelay =
                    (
                        index *
                        45
                    );


                setTimeout(
                    () => {


                        slot.style.opacity =
                            "0";


                        slot.style.filter =
                            `
                            brightness(.25)
                            saturate(.55)
                            blur(3px)
                            `;


                        slot.style.transform = `

                            translate(
                                -50%,
                                -50%
                            )

                            translateX(
                                ${
                                    direction *
                                    random(
                                        100,
                                        180
                                    )
                                }px
                            )

                            translateY(
                                ${
                                    -40
                                    +
                                    vertical *
                                    25
                                }px
                            )

                            translateZ(
                                -650px
                            )

                            rotateY(
                                ${
                                    direction *
                                    random(
                                        28,
                                        48
                                    )
                                }deg
                            )

                            rotateZ(
                                ${
                                    direction *
                                    random(
                                        4,
                                        8
                                    )
                                }deg
                            )

                            scale(
                                .10
                            )

                        `;

                    },

                    extraDelay
                );

            }
        );


        targetArenaEnergy =
            .26;


        await wait(
            1050
        );



        /*
            President prepares for front movement.
        */


        if (presidentSlot) {

            presidentSlot.style.transition =
                "none";

        }

    }



/* ============================================================================
   ============================================================================
   39. BRING PRESIDENT FORWARD
   ============================================================================
   ============================================================================ */


async function bringPresidentForward() {

    const slot =
        slots[
            PRESIDENT_INDEX
        ];


    const card =
        cards[
            PRESIDENT_INDEX
        ];


    if (
        !slot ||
        !card
    ) {

        return;

    }


    /*
        ============================================================
        IMPORTANT

        We no longer let a fill:"forwards" animation permanently
        control the selected card.

        The animation brings President toward the middle.

        Then we CANCEL that animation and let
        .is-selected become the only final transform.
        ============================================================
    */


    const currentRect =
        slot.getBoundingClientRect();


    const arenaRect =
        arena.getBoundingClientRect();


    const currentCenterX =
        currentRect.left +
        currentRect.width / 2;


    const currentCenterY =
        currentRect.top +
        currentRect.height / 2;


    const targetCenterX =
        arenaRect.left +
        arenaRect.width / 2;


    /*
        Slightly above exact center looks better
        because the card is vertically tall.
    */

    const targetCenterY =
        arenaRect.top +
        arenaRect.height * 0.49;


    const deltaX =
        targetCenterX -
        currentCenterX;


    const deltaY =
        targetCenterY -
        currentCenterY;



    /*
        Save the ACTUAL current transform before we animate.
    */

    const computed =
        window.getComputedStyle(
            slot
        );


    const currentTransform =
        computed.transform === "none"

            ?

            `
            translate(
                -50%,
                -50%
            )
            `

            :

            computed.transform;



    slot.style.zIndex =
        "800";



    /*
        ============================================================
        PHASE 1
        President gently separates from the wheel
        ============================================================
    */


    const moveAnimation =
        slot.animate(

            [

                {

                    transform:
                        currentTransform,

                    opacity:
                        1,

                    filter:
                        `
                        brightness(1.08)
                        saturate(1.04)
                        `

                },


                {

                    transform:
                        `
                        translate(
                            -50%,
                            -50%
                        )

                        translateX(
                            ${deltaX * .35}px
                        )

                        translateY(
                            ${deltaY * .35}px
                        )

                        translateZ(
                            25px
                        )

                        rotateX(
                            0deg
                        )

                        rotateY(
                            0deg
                        )

                        rotateZ(
                            0deg
                        )

                        scale(
                            .43
                        )
                        `,

                    opacity:
                        1,

                    filter:
                        `
                        brightness(1.10)
                        saturate(1.05)
                        `,

                    offset:
                        .45

                },


                {

                    transform:
                        `
                        translate(
                            -50%,
                            -50%
                        )

                        translateX(
                            ${deltaX}px
                        )

                        translateY(
                            ${deltaY}px
                        )

                        translateZ(
                            40px
                        )

                        rotateX(
                            0deg
                        )

                        rotateY(
                            0deg
                        )

                        rotateZ(
                            0deg
                        )

                        scale(
                            .50
                        )
                        `,

                    opacity:
                        1,

                    filter:
                        `
                        brightness(1.08)
                        saturate(1.04)
                        `

                }

            ],

            {

                duration:
                    1250,

                easing:
                    "cubic-bezier(.16,1,.3,1)",

                /*
                    CRITICAL:
                    no fill:"forwards"
                */

                fill:
                    "none"

            }

        );



    /*
        Wait for the animation itself.
    */

    try {

        await moveAnimation.finished;

    }

    catch (error) {

        /*
            Safe fallback if browser cancels animation.
        */

    }



    /*
        ============================================================
        CRITICAL RESET

        Remove EVERYTHING created by orbit JS before the winner
        class takes control.
        ============================================================
    */


    moveAnimation.cancel();


    slot.getAnimations().forEach(
        animation => {

            animation.cancel();

        }
    );



    /*
        Remove all inline geometry left by renderCard().
    */

    slot.style.removeProperty(
        "left"
    );


    slot.style.removeProperty(
        "top"
    );


    slot.style.removeProperty(
        "transform"
    );


    slot.style.removeProperty(
        "filter"
    );


    slot.style.removeProperty(
        "opacity"
    );


    slot.style.removeProperty(
        "scale"
    );


    slot.style.removeProperty(
        "translate"
    );


    slot.style.removeProperty(
        "rotate"
    );


    /*
        Remove animation if your old CSS gave the cards
        the floating animation.
    */

    slot.style.animation =
        "none";



    /*
        Force the browser to acknowledge the clean state.
    */

    void slot.offsetWidth;



    /*
        ============================================================
        FINAL STATE

        CSS now has FULL control.
        ============================================================
    */


    slot.classList.add(
        "is-selected"
    );



    /*
        Make absolutely sure President's inner card is not carrying
        an old transform from the previous single-card project.
    */

    card.style.removeProperty(
        "translate"
    );


    card.style.removeProperty(
        "scale"
    );


    card.style.removeProperty(
        "rotate"
    );


    card.style.transform =
        "rotateX(0deg) rotateY(0deg)";



    /*
        Small settling movement.
        Notice that we animate the INNER card now,
        not the slot.

        Therefore it cannot fight .is-selected.
    */

    card.animate(

        [

            {

                transform:
                    `
                    rotateX(0deg)
                    rotateY(0deg)
                    scale(.96)
                    `

            },

            {

                transform:
                    `
                    rotateX(0deg)
                    rotateY(0deg)
                    scale(1.025)
                    `,

                offset:
                    .68

            },

            {

                transform:
                    `
                    rotateX(0deg)
                    rotateY(0deg)
                    scale(1)
                    `

            }

        ],

        {

            duration:
                700,

            easing:
                "cubic-bezier(.16,1,.3,1)"

        }

    );


    await wait(
        750
    );

}



/* ============================================================================
   ============================================================================
   40. PREPARE PRESIDENT UNKNOWN IDENTITY
   ============================================================================
   ============================================================================ */


    function prepareUnavailableIdentity() {


        const card =
            cards[
                PRESIDENT_INDEX
            ];


        if (!card) {

            return;

        }


        const title =
            card.querySelector(
                ".title-text"
            );


        const role =
            card.querySelector(
                ".member-role"
            );


        const name =
            card.querySelector(
                ".member-name"
            );


        if (title) {

            title.textContent =
                "PRESIDENT";

        }


        if (role) {

            role.textContent =
                "PRESIDENT";

        }


        if (name) {

            name.textContent =
                "UNAVAILABLE";


            name.style.opacity =
                "0";


            name.style.filter =
                "blur(5px)";


            name.style.letterSpacing =
                "11px";

        }


        card.classList.add(
            "is-unavailable"
        );

    }



/* ============================================================================
   ============================================================================
   41. UNAVAILABLE REVEAL
   ============================================================================
   ============================================================================ */


    async function revealUnavailable() {


        const card =
            cards[
                PRESIDENT_INDEX
            ];


        if (!card) {

            return;

        }


        prepareUnavailableIdentity();


        setStatus(
            "UNAVAILABLE"
        );


        const portrait =
            card.querySelector(
                ".portrait-frame"
            );


        const imageContainer =
            card.querySelector(
                ".member-image-container"
            );


        const identity =
            card.querySelector(
                ".identity"
            );


        const name =
            card.querySelector(
                ".member-name"
            );


        const role =
            card.querySelector(
                ".member-role"
            );



        /*
            Portrait gets a dark premium lock.
        */


        if (portrait) {

            portrait.animate(

                [

                    {

                        filter:
                            `
                            brightness(1)
                            saturate(1)
                            `

                    },

                    {

                        filter:
                            `
                            brightness(.70)
                            saturate(.78)
                            contrast(1.05)
                            `

                    }

                ],

                {

                    duration:
                        950,

                    easing:
                        "ease-out",

                    fill:
                        "forwards"

                }

            );

        }



        /*
            Unknown figure.
        */


        if (imageContainer) {

            imageContainer.animate(

                [

                    {

                        opacity:
                            .94

                    },

                    {

                        opacity:
                            .72

                    },

                    {

                        opacity:
                            .86

                    }

                ],

                {

                    duration:
                        1250,

                    easing:
                        "ease-in-out",

                    fill:
                        "forwards"

                }

            );

        }


        await wait(
            350
        );



        /*
            Identity rises.
        */


        if (identity) {

            identity.animate(

                [

                    {

                        opacity:
                            .55,

                        transform:
                            `
                            translateX(-50%)
                            translateY(8px)
                            translateZ(110px)
                            `

                    },

                    {

                        opacity:
                            1,

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
                        850,

                    easing:
                        "cubic-bezier(.16,1,.3,1)",

                    fill:
                        "forwards"

                }

            );

        }



        /*
            UNAVAILABLE.
        */


        if (name) {

            name.animate(

                [

                    {

                        opacity:
                            0,

                        letterSpacing:
                            "13px",

                        transform:
                            "translateY(8px)",

                        filter:
                            "blur(6px)"

                    },

                    {

                        opacity:
                            .55,

                        letterSpacing:
                            "7px",

                        transform:
                            "translateY(2px)",

                        filter:
                            "blur(1px)",

                        offset:
                            .68

                    },

                    {

                        opacity:
                            1,

                        letterSpacing:
                            "5px",

                        transform:
                            "translateY(0)",

                        filter:
                            "blur(0)"

                    }

                ],

                {

                    duration:
                        1100,

                    easing:
                        "cubic-bezier(.16,1,.3,1)",

                    fill:
                        "forwards"

                }

            );

        }



        /*
            PRESIDENT footer role.
        */


        if (role) {

            role.animate(

                [

                    {

                        opacity:
                            .35,

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
                        900,

                    delay:
                        300,

                    easing:
                        "ease-out",

                    fill:
                        "both"

                }

            );

        }


        await wait(
            1000
        );



        /*
            Last crown pulse.
        */


        const crown =
            card.querySelector(
                ".crown-icon"
            );


        if (crown) {

            crown.animate(

                [

                    {

                        filter:
                            "brightness(1)"

                    },

                    {

                        filter:
                            `
                            brightness(1.16)

                            drop-shadow(
                                0 0 5px
                                rgba(255,247,252,.25)
                            )

                            drop-shadow(
                                0 0 11px
                                rgba(255,112,199,.20)
                            )
                            `

                    },

                    {

                        filter:
                            "brightness(1)"

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


        await wait(
            650
        );

    }



/* ============================================================================
   ============================================================================
   42. FINAL WINNER MODE
   ============================================================================
   ============================================================================ */


    function enterWinnerMode() {


        gameState =
            GAME_STATE.WINNER;


        selectionFinished =
            true;


        targetArenaEnergy =
            .16;


        scene
            ?.classList.remove(
                "is-spinning"
            );


        scene
            ?.classList.add(
                "has-winner"
            );


        startButton
            ?.setAttribute(
                "disabled",
                "true"
            );


        setStatus(
            "UNAVAILABLE",
            false
        );

    }



/* ============================================================================
   ============================================================================
   43. WINNER AMBIENT BREATHING
   ============================================================================
   ============================================================================ */


    function startWinnerAmbient() {


        const card =
            cards[
                PRESIDENT_INDEX
            ];


        if (!card) {

            return;

        }


        function breathe() {


            if (
                gameState !==
                GAME_STATE.WINNER
            ) {

                return;

            }


            card.animate(

                [

                    {

                        filter:
                            `
                            brightness(1)

                            drop-shadow(
                                0 0 15px
                                rgba(217,43,158,.12)
                            )
                            `

                    },

                    {

                        filter:
                            `
                            brightness(1.035)

                            drop-shadow(
                                0 0 23px
                                rgba(255,112,199,.19)
                            )
                            `

                    },

                    {

                        filter:
                            `
                            brightness(1)

                            drop-shadow(
                                0 0 15px
                                rgba(217,43,158,.12)
                            )
                            `

                    }

                ],

                {

                    duration:
                        4600,

                    easing:
                        "ease-in-out"

                }

            );


            setTimeout(
                breathe,
                4900
            );

        }


        breathe();

    }



/* ============================================================================
   ============================================================================
   44. WINNER PARALLAX
   ============================================================================
   ============================================================================ */


    function renderWinnerParallax() {


        const card =
            cards[
                PRESIDENT_INDEX
            ];


        if (!card) {

            return;

        }


        winnerParallaxX =
            lerp(
                winnerParallaxX,
                winnerTargetX,
                .06
            );


        winnerParallaxY =
            lerp(
                winnerParallaxY,
                winnerTargetY,
                .06
            );


        card.style.transform = `

            rotateX(
                ${
                    winnerParallaxY *
                    -3.3
                }deg
            )

            rotateY(
                ${
                    winnerParallaxX *
                    5
                }deg
            )

        `;



        const shine =
            card.querySelector(
                ".card-shine"
            );


        if (shine) {

            shine.style.marginLeft =
                `${
                    winnerParallaxX *
                    42
                }px`;

        }



        const portraitEnergy =
            card.querySelector(
                ".portrait-energy"
            );


        if (portraitEnergy) {

            portraitEnergy.style.translate = `

                ${
                    winnerParallaxX *
                    3
                }px

                ${
                    winnerParallaxY *
                    2
                }px

            `;

        }



        const emblem =
            card.querySelector(
                ".president-emblem"
            );


        if (emblem) {

            emblem.style.translate = `

                ${
                    winnerParallaxX *
                    -2.5
                }px

                ${
                    winnerParallaxY *
                    -1.5
                }px

            `;

        }

    }



/* ============================================================================
   ============================================================================
   45. POINTER SYSTEM
   ============================================================================
   ============================================================================ */


    function setupPointerSystem() {


        if (!scene) {

            return;

        }


        scene.addEventListener(
            "pointermove",
            event => {


                const rect =
                    scene.getBoundingClientRect();


                const normalizedX =
                    (
                        event.clientX -
                        rect.left
                    )
                    /
                    rect.width;


                const normalizedY =
                    (
                        event.clientY -
                        rect.top
                    )
                    /
                    rect.height;


                pointerTargetX =
                    (
                        normalizedX -
                        .5
                    )
                    *
                    2;


                pointerTargetY =
                    (
                        normalizedY -
                        .5
                    )
                    *
                    2;


                if (
                    gameState ===
                    GAME_STATE.WINNER
                ) {

                    winnerTargetX =
                        pointerTargetX;


                    winnerTargetY =
                        pointerTargetY;

                }

            }
        );


        scene.addEventListener(
            "pointerleave",
            () => {


                pointerTargetX =
                    0;


                pointerTargetY =
                    0;


                winnerTargetX =
                    0;


                winnerTargetY =
                    0;

            }
        );

    }



/* ============================================================================
   ============================================================================
   46. IDLE CARD HOVER
   ============================================================================
   ============================================================================ */


    function setupIdleCardHover() {


        slots.forEach(
            (
                slot,
                index
            ) => {


                slot.addEventListener(
                    "pointerenter",
                    () => {


                        if (
                            gameState !==
                            GAME_STATE.IDLE
                        ) {

                            return;

                        }


                        cardState[index]
                            .pulseTarget =
                            .55;

                    }
                );


                slot.addEventListener(
                    "pointerleave",
                    () => {


                        if (
                            gameState !==
                            GAME_STATE.IDLE
                        ) {

                            return;

                        }


                        cardState[index]
                            .pulseTarget =
                            0;

                    }
                );

            }
        );

    }



/* ============================================================================
   ============================================================================
   47. AMBIENT RANDOM CARD RESPONSE
   ============================================================================
   ============================================================================ */


    function scheduleAmbientCardResponse() {


        const nextDelay =
            random(
                4500,
                8000
            );


        setTimeout(
            () => {


                if (
                    gameState ===
                    GAME_STATE.IDLE
                ) {


                    const index =
                        randomInt(
                            0,
                            CARD_COUNT - 1
                        );


                    const card =
                        cards[index];


                    if (card) {

                        const node =
                            choose(

                                Array.from(
                                    card.querySelectorAll(
                                        ".brain-node"
                                    )
                                )

                            );


                        if (node) {

                            node.animate(

                                [

                                    {

                                        filter:
                                            "brightness(1)"

                                    },

                                    {

                                        filter:
                                            `
                                            brightness(1.22)

                                            drop-shadow(
                                                0 0 7px
                                                rgba(255,112,199,.18)
                                            )
                                            `

                                    },

                                    {

                                        filter:
                                            "brightness(1)"

                                    }

                                ],

                                {

                                    duration:
                                        750,

                                    easing:
                                        "ease-in-out"

                                }

                            );

                        }

                    }

                }


                scheduleAmbientCardResponse();

            },

            nextDelay
        );

    }



/* ============================================================================
   ============================================================================
   48. AMBIENT CROWN RESPONSE
   ============================================================================
   ============================================================================ */


    function scheduleCrownResponse() {


        setTimeout(
            () => {


                if (
                    gameState ===
                    GAME_STATE.IDLE
                ) {


                    const index =
                        randomInt(
                            0,
                            CARD_COUNT - 1
                        );


                    const crown =
                        cards[index]
                            ?.querySelector(
                                ".crown-icon"
                            );


                    if (crown) {

                        crown.animate(

                            [

                                {

                                    filter:
                                        "brightness(1)"

                                },

                                {

                                    filter:
                                        `
                                        brightness(1.08)

                                        drop-shadow(
                                            0 0 5px
                                            rgba(255,112,199,.16)
                                        )
                                        `

                                },

                                {

                                    filter:
                                        "brightness(1)"

                                }

                            ],

                            {

                                duration:
                                    1200,

                                easing:
                                    "ease-in-out"

                            }

                        );

                    }

                }


                scheduleCrownResponse();

            },

            random(
                7000,
                12000
            )
        );

    }



/* ============================================================================
   ============================================================================
   49. IDLE ORBIT BREATHING
   ============================================================================
   ============================================================================ */


    function scheduleIdleBreathing() {


        setTimeout(
            () => {


                if (
                    gameState ===
                    GAME_STATE.IDLE
                ) {

                    targetArenaEnergy =
                        random(
                            .20,
                            .34
                        );

                }


                scheduleIdleBreathing();

            },

            random(
                3200,
                5200
            )
        );

    }



/* ============================================================================
   ============================================================================
   50. START SELECTION MASTER SEQUENCE
   ============================================================================
   ============================================================================ */


    async function startSelection() {


        if (
            selectionStarted
        ) {

            return;

        }


        selectionStarted =
            true;


        if (startButton) {

            startButton.disabled =
                true;

        }



        /*
            1 — PREPARE
        */


        await prepareSelection();



        /*
            2 — ACCELERATE
        */


        await accelerateSelection();



        /*
            3 — FULL SPEED
        */


        await fullSpeedSelection();



        /*
            4 — PREPARE SLOWDOWN
        */


        await prepareDeceleration();



        /*
            5 — LONG DECELERATION
        */


        await decelerateToPresident();



        /*
            6 — PRESIDENT CONFIRMATION
        */


        await confirmPresident();



        /*
            7 — REMOVE OTHER CARDS
        */


        await retreatOtherCards();



        /*
            8 — PRESIDENT COMES FORWARD
        */


        await bringPresidentForward();



        /*
            9 — UNAVAILABLE
        */


        await revealUnavailable();



        /*
            10 — FINAL
        */


        enterWinnerMode();


        startWinnerAmbient();

    }



/* ============================================================================
   ============================================================================
   51. BUTTON EVENT
   ============================================================================
   ============================================================================ */


    function setupStartButton() {


        if (!startButton) {

            return;

        }


        startButton.addEventListener(
            "click",
            startSelection
        );


        startButton.addEventListener(
            "pointerenter",
            () => {


                if (
                    selectionStarted
                ) {

                    return;

                }


                targetArenaEnergy =
                    .40;

            }
        );


        startButton.addEventListener(
            "pointerleave",
            () => {


                if (
                    selectionStarted
                ) {

                    return;

                }


                targetArenaEnergy =
                    .25;

            }
        );

    }



/* ============================================================================
   ============================================================================
   52. KEYBOARD ACCESSIBILITY
   ============================================================================
   ============================================================================ */


    function setupKeyboardControl() {


        window.addEventListener(
            "keydown",
            event => {


                if (
                    selectionStarted
                ) {

                    return;

                }


                if (
                    event.code ===
                    "Space"
                    ||
                    event.code ===
                    "Enter"
                ) {


                    const active =
                        document.activeElement;


                    if (
                        active ===
                        startButton
                        ||
                        active ===
                        document.body
                    ) {

                        event.preventDefault();


                        startSelection();

                    }

                }

            }
        );

    }



/* ============================================================================
   ============================================================================
   53. DISABLE CARD DRAG
   ============================================================================
   ============================================================================ */


    function disableDragging() {


        cards.forEach(
            card => {


                if (!card) {

                    return;

                }


                card.setAttribute(
                    "draggable",
                    "false"
                );


                card.addEventListener(
                    "dragstart",
                    event =>

                        event.preventDefault()
                );

            }
        );

    }



/* ============================================================================
   ============================================================================
   54. PRELOAD INITIAL CARD APPEARANCE
   ============================================================================
   ============================================================================ */


    function hideCardsBeforeIntro() {


        cards.forEach(
            card => {


                if (!card) {

                    return;

                }


                card.style.opacity =
                    "0";


                card.style.transform =
                    `
                    translateY(16px)
                    scale(.95)
                    `;

            }
        );


        if (startButton) {

            startButton.style.opacity =
                "0";

        }

    }



/* ============================================================================
   ============================================================================
   55. CARD ENTRANCE
   ============================================================================
   ============================================================================ */


    async function revealCards() {


        cards.forEach(
            (
                card,
                index
            ) => {


                if (!card) {

                    return;

                }


                card.animate(

                    [

                        {

                            opacity:
                                0,

                            transform:
                                `
                                translateY(18px)
                                scale(.94)
                                `,

                            filter:
                                `
                                brightness(.48)
                                blur(2px)
                                `

                        },

                        {

                            opacity:
                                .52,

                            transform:
                                `
                                translateY(5px)
                                scale(.985)
                                `,

                            filter:
                                `
                                brightness(.82)
                                blur(.3px)
                                `,

                            offset:
                                .66

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
                                blur(0)
                                `

                        }

                    ],

                    {

                        duration:
                            950,

                        delay:
                            100 +
                            index *
                            75,

                        fill:
                            "forwards",

                        easing:
                            "cubic-bezier(.16,1,.3,1)"

                    }

                );

            }
        );


        await wait(
            950
        );

    }



/* ============================================================================
   ============================================================================
   56. BUTTON ENTRANCE
   ============================================================================
   ============================================================================ */


    function revealStartButton() {


        if (!startButton) {

            return;

        }


        startButton.animate(

            [

                {

                    opacity:
                        0,

                    transform:
                        `
                        translateY(20px)
                        scale(.82)
                        `

                },

                {

                    opacity:
                        1,

                    transform:
                        `
                        translateY(-3px)
                        scale(1.03)
                        `,

                    offset:
                        .78

                },

                {

                    opacity:
                        1,

                    transform:
                        `
                        translateY(0)
                        scale(1)
                        `

                }

            ],

            {

                duration:
                    1000,

                fill:
                    "forwards",

                easing:
                    "cubic-bezier(.16,1,.3,1)"

            }

        );

    }



/* ============================================================================
   ============================================================================
   57. ORBIT TRACK ENTRANCE
   ============================================================================
   ============================================================================ */


    function revealOrbitTracks() {


        const tracks =
            scene
                ?.querySelectorAll(
                    ".orbit-track"
                );


        tracks
            ?.forEach(
                (
                    track,
                    index
                ) => {


                    track.animate(

                        [

                            {

                                opacity:
                                    0,

                                transform:
                                    `
                                    translate(
                                        -50%,
                                        -50%
                                    )
                                    rotateX(64deg)
                                    scale(.78)
                                    `

                            },

                            {

                                opacity:
                                    .65,

                                transform:
                                    `
                                    translate(
                                        -50%,
                                        -50%
                                    )
                                    rotateX(64deg)
                                    scale(1)
                                    `

                            }

                        ],

                        {

                            duration:
                                1200,

                            delay:
                                index *
                                110,

                            fill:
                                "forwards",

                            easing:
                                "cubic-bezier(.16,1,.3,1)"

                        }

                    );

                }
            );

    }



/* ============================================================================
   ============================================================================
   58. CORE ENTRANCE
   ============================================================================
   ============================================================================ */


    function revealSelectionCore() {


        const core =
            scene
                ?.querySelector(
                    ".selection-core"
                );


        if (!core) {

            return;

        }


        core.animate(

            [

                {

                    opacity:
                        0,

                    transform:
                        `
                        translate(
                            -50%,
                            -50%
                        )
                        translateZ(-120px)
                        scale(.55)
                        `

                },

                {

                    opacity:
                        .8,

                    transform:
                        `
                        translate(
                            -50%,
                            -50%
                        )
                        translateZ(-120px)
                        scale(1.08)
                        `,

                    offset:
                        .76

                },

                {

                    opacity:
                        1,

                    transform:
                        `
                        translate(
                            -50%,
                            -50%
                        )
                        translateZ(-120px)
                        scale(1)
                        `

                }

            ],

            {

                duration:
                    1300,

                fill:
                    "forwards",

                easing:
                    "cubic-bezier(.16,1,.3,1)"

            }

        );

    }



/* ============================================================================
   ============================================================================
   59. INITIAL PAGE INTRO
   ============================================================================
   ============================================================================ */


    async function introSequence() {


        gameState =
            GAME_STATE.BOOT;


        setStatus(
            "INITIALIZING",
            false
        );


        revealOrbitTracks();


        revealSelectionCore();


        await wait(
            250
        );


        await revealCards();


        revealStartButton();


        await wait(
            400
        );


        setStatus(
            "READY"
        );


        targetArenaEnergy =
            .25;


        targetWheelVelocity =
            .000055;


        wheelVelocity =
            .000055;


        gameState =
            GAME_STATE.IDLE;

    }



/* ============================================================================
   ============================================================================
   60. RESIZE
   ============================================================================
   ============================================================================ */


    function setupResize() {


        let resizeTimeout;


        window.addEventListener(
            "resize",
            () => {


                clearTimeout(
                    resizeTimeout
                );


                resizeTimeout =
                    setTimeout(
                        () => {


                            if (
                                !selectionFinished
                            ) {

                                renderOrbit();

                            }

                        },

                        80
                    );

            }
        );

    }



/* ============================================================================
   ============================================================================
   61. PAGE VISIBILITY
   ============================================================================
   ============================================================================ */


    function setupVisibilityHandling() {


        document.addEventListener(
            "visibilitychange",
            () => {


                previousFrameTime =
                    performance.now();


                if (
                    document.hidden
                ) {

                    return;

                }


                /*
                    Avoid massive delta jumps when
                    returning to browser tab.
                */


                previousFrameTime =
                    performance.now();

            }
        );

    }



/* ============================================================================
   ============================================================================
   62. REDUCED MOTION SUPPORT
   ============================================================================
   ============================================================================ */


    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    function applyMotionPreference() {


        if (
            prefersReducedMotion.matches
        ) {

            wheelVelocity =
                .000025;


            targetWheelVelocity =
                .000025;

        }

    }



/* ============================================================================
   ============================================================================
   63. MOBILE PERFORMANCE MODE
   ============================================================================
   ============================================================================ */


    function applyPerformanceMode() {


        const lowWidth =
            window.innerWidth <
            450;


        const lowMemory =
            navigator.deviceMemory
            &&
            navigator.deviceMemory <=
            4;


        if (
            lowWidth
            ||
            lowMemory
        ) {

            scene
                ?.classList.add(
                    "performance-mode"
                );


            cards.forEach(
                card => {


                    const noise =
                        card
                            ?.querySelector(
                                ".card-noise"
                            );


                    if (noise) {

                        noise.style.opacity =
                            ".06";

                    }

                }
            );

        }

    }



/* ============================================================================
   ============================================================================
   64. PRESIDENT FINAL MICRO-DETAILS
   ============================================================================
   ============================================================================ */


    function activateFinalPresidentDetails() {


        const card =
            cards[
                PRESIDENT_INDEX
            ];


        if (!card) {

            return;

        }


        /*
            Side nodes breathe independently.
        */


        const nodes =
            card.querySelectorAll(
                ".brain-node"
            );


        nodes.forEach(
            (
                node,
                index
            ) => {


                function breatheNode() {


                    if (
                        gameState !==
                        GAME_STATE.WINNER
                    ) {

                        return;

                    }


                    node.animate(

                        [

                            {

                                filter:
                                    "brightness(1)"

                            },

                            {

                                filter:
                                    `
                                    brightness(1.10)

                                    drop-shadow(
                                        0 0 5px
                                        rgba(255,112,199,.15)
                                    )
                                    `

                            },

                            {

                                filter:
                                    "brightness(1)"

                            }

                        ],

                        {

                            duration:
                                1600,

                            easing:
                                "ease-in-out"

                        }

                    );


                    setTimeout(

                        breatheNode,

                        4800
                        +
                        index *
                        800
                        +
                        random(
                            0,
                            1800
                        )

                    );

                }


                setTimeout(

                    breatheNode,

                    1600 +
                    index *
                    700

                );

            }
        );



        /*
            Rare crown response.
        */


        const crown =
            card.querySelector(
                ".crown-icon"
            );


        if (crown) {


            function crownAmbient() {


                if (
                    gameState !==
                    GAME_STATE.WINNER
                ) {

                    return;

                }


                crown.animate(

                    [

                        {

                            filter:
                                "brightness(1)"

                        },

                        {

                            filter:
                                `
                                brightness(1.07)

                                drop-shadow(
                                    0 0 4px
                                    rgba(255,247,252,.17)
                                )

                                drop-shadow(
                                    0 0 8px
                                    rgba(255,112,199,.11)
                                )
                                `

                        },

                        {

                            filter:
                                "brightness(1)"

                        }

                    ],

                    {

                        duration:
                            1400,

                        easing:
                            "ease-in-out"

                    }

                );


                setTimeout(

                    crownAmbient,

                    random(
                        7000,
                        11000
                    )

                );

            }


            setTimeout(
                crownAmbient,
                5000
            );

        }

    }



/* ============================================================================
   ============================================================================
   65. FINALIZE WINNER SEQUENCE
   ============================================================================
   ============================================================================ */


    function finalizeWinner() {


        enterWinnerMode();


        startWinnerAmbient();


        activateFinalPresidentDetails();

    }



/* ============================================================================
   ============================================================================
   66. PATCH MASTER SEQUENCE FINALIZATION
   ============================================================================
   ============================================================================ */


/*
    Wrapper allows final details to activate
    after startSelection completes.
*/


    async function runSelectionExperience() {


        if (
            selectionStarted
        ) {

            return;

        }


        selectionStarted =
            true;


        if (startButton) {

            startButton.disabled =
                true;

        }


        await prepareSelection();


        await accelerateSelection();


        await fullSpeedSelection();


        await prepareDeceleration();


        await decelerateToPresident();


        await confirmPresident();


        await retreatOtherCards();


        await bringPresidentForward();


        await revealUnavailable();


        finalizeWinner();

    }



/* ============================================================================
   ============================================================================
   67. REBIND START BUTTON TO MASTER EXPERIENCE
   ============================================================================
   ============================================================================ */


    function bindMasterButton() {


        if (!startButton) {

            return;

        }


        /*
            Clone button.

            This safely clears accidental listeners
            from old JavaScript if the browser hot-reloaded.
        */


        startButton.addEventListener(
            "click",
            event => {


                event.preventDefault();


                runSelectionExperience();

            },
            {
                once: true
            }
        );

    }



/* ============================================================================
   ============================================================================
   68. INITIAL CARD Z-INDEX SAFETY
   ============================================================================
   ============================================================================ */


    function prepareSlots() {


        slots.forEach(
            (
                slot,
                index
            ) => {


                if (!slot) {

                    return;

                }


                slot.dataset.index =
                    index;


                slot.dataset.role =
                    BUREAU[index]
                        ?.role
                        ||
                        "";


                slot.style.transition =
                    "none";


                slot.style.willChange =
                    `
                    transform,
                    left,
                    top,
                    opacity,
                    filter
                    `;

            }
        );

    }



/* ============================================================================
   ============================================================================
   69. PREVENT CARD CLICK FLIP
   ============================================================================
   ============================================================================ */


    function disableOldFlipBehavior() {


        cards.forEach(
            card => {


                if (!card) {

                    return;

                }


                card.onclick =
                    null;


                card.style.cursor =
                    "default";


                card.addEventListener(
                    "click",
                    event => {


                        /*
                            Do not allow old single-card
                            click-to-flip behavior.
                        */


                        if (
                            event.target.closest(
                                ".start-selection-button"
                            )
                        ) {

                            return;

                        }


                        event.stopPropagation();

                    },
                    true
                );

            }
        );

    }



/* ============================================================================
   ============================================================================
   70. REMOVE OLD INLINE TRANSFORMS
   ============================================================================
   ============================================================================ */


    function cleanOldCardState() {


        cards.forEach(
            card => {


                if (!card) {

                    return;

                }


                card.classList.remove(
                    "flipped"
                );


                card.style.removeProperty(
                    "rotate"
                );


                card.style.removeProperty(
                    "translate"
                );


                /*
                    Game controls wrapper.
                    Card internals remain untouched.
                */


                card.style.transform =
                    "";

            }
        );

    }



/* ============================================================================
   ============================================================================
   71. INITIAL CANDIDATE RESET
   ============================================================================
   ============================================================================ */


    function resetCandidateSystem() {


        currentCandidate =
            -1;


        previousCandidate =
            -1;


        cardState.forEach(
            state => {


                state.pulse =
                    0;


                state.pulseTarget =
                    0;


                state.selected =
                    false;


                state.candidate =
                    false;

            }
        );

    }



/* ============================================================================
   ============================================================================
   72. SMART CLUB INITIALIZATION
   ============================================================================
   ============================================================================ */


    async function initializeSmartClubSelection() {


        console.log(

            "%c SMART CLUB — BUREAU SELECTION ",

            `
            background:#15051c;
            color:#ff70c7;
            padding:8px 12px;
            font-weight:bold;
            letter-spacing:2px;
            `

        );


        validateStructure();


        prepareSlots();


        cleanOldCardState();


        prepareCardContent();


        resetCandidateSystem();


        ensureGameHeader();


        ensureOrbitTracks();


        ensureSelectionCore();


        enhanceStartButton();


        createAmbientParticles();


        activateRolePersonalities();


        disableDragging();


        disableOldFlipBehavior();


        setupPointerSystem();


        setupIdleCardHover();


        setupKeyboardControl();


        setupResize();


        setupVisibilityHandling();


        applyMotionPreference();


        applyPerformanceMode();


        scheduleAmbientCardResponse();


        scheduleCrownResponse();


        scheduleIdleBreathing();


        hideCardsBeforeIntro();


        /*
            Start render engine before intro.
        */


        previousFrameTime =
            performance.now();


        requestAnimationFrame(
            engineLoop
        );


        /*
            Run intro.
        */


        await introSequence();


        /*
            Start Selection.
        */


        bindMasterButton();

    }



/* ============================================================================
   ============================================================================
   73. PAGE START
   ============================================================================
   ============================================================================ */


    if (
        document.readyState ===
        "complete"
        ||
        document.readyState ===
        "interactive"
    ) {


        setTimeout(
            initializeSmartClubSelection,
            0
        );

    }


    else {


        window.addEventListener(
            "DOMContentLoaded",
            initializeSmartClubSelection,
            {
                once: true
            }
        );

    }



/* ============================================================================
   ============================================================================
   END OF SMART CLUB BUREAU SELECTION ENGINE
   ============================================================================
   ============================================================================ */


})();