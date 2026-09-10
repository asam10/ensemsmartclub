/* =========================================================
   SMART CLUB — ENSEM
   FINAL SCRIPT.JS
   Digital Minds. Real Impact.
========================================================= */


/* =========================================================
   1 — MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function () {

        mobileMenu.classList.toggle("open");

        if (mobileMenu.classList.contains("open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    /* Close mobile menu when clicking a link */

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });

}



/* =========================================================
   2 — NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) return;


    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =========================================================
   3 — SMART CLUB FIELD DATA

   IMPORTANT:

   When you add the other videos, ONLY change:

   video: ""

   Example:

   video: "engineering.mp4"
========================================================= */

const fieldData = {


    /* =====================================================
       01 — DIGITALIZATION
    ===================================================== */

    digitalization: {

        number: "01",

        label: "DIGITALIZATION",

        title:
            'From traditional<br>to <span>digital.</span>',

        description:
            "Digitalization is the use of digital technologies to improve existing processes, workflows and services.",

        descriptionTwo:
            "In industry, digitalization can transform manual and paper-based processes into connected systems capable of collecting, storing and using information more efficiently.",

        beforeTitle:
            "Paper Process",

        beforeText:
            "Manual information",

        afterTitle:
            "Digital System",

        afterText:
            "Connected information",

        topics: [
            "DATABASES",
            "DATA",
            "IoT",
            "INDUSTRY 4.0",
            "WEB"
        ],

        videoTitle:
            "Understand Digitalization",

        /* YOUR DIGITALIZATION VIDEO */

        video:
            "digita.mp4",

        color:
            "#00b4d8",

        darkColor:
            "#071722"

    },



    /* =====================================================
       02 — ENGINEERING
    ===================================================== */

    engineering: {

        number: "02",

        label: "ENGINEERING",

        title:
            'Think. Design.<br><span>Build.</span>',

        description:
            "Engineering applies scientific and mathematical knowledge to design, develop and improve solutions for real technical problems.",

        descriptionTwo:
            "At Smart Club, engineering means moving beyond theory. We want students to experiment, design, prototype and transform technical knowledge into real systems.",

        beforeTitle:
            "Technical Problem",

        beforeText:
            "A challenge to solve",

        afterTitle:
            "Engineered Solution",

        afterText:
            "Designed and tested system",

        topics: [
            "ELECTRONICS",
            "MECHANICS",
            "DESIGN",
            "CAD",
            "PROTOTYPING"
        ],

        videoTitle:
            "Discover Engineering",

        /*
           LATER PUT:

           video: "engineering.mp4"
        */

        video: "",

        color:
            "#64748b",

        darkColor:
            "#171a1f"

    },



    /* =====================================================
       03 — AUTOMATION
    ===================================================== */

    automation: {

        number: "03",

        label: "AUTOMATION",

        title:
            'Make systems<br><span>smarter.</span>',

        description:
            "Automation allows machines and industrial processes to operate with reduced human intervention using sensors, controllers and software.",

        descriptionTwo:
            "It connects the physical and digital worlds through PLCs, sensors, control systems, robotics and intelligent industrial technologies.",

        beforeTitle:
            "Manual Control",

        beforeText:
            "Human operation",

        afterTitle:
            "Automated System",

        afterText:
            "Intelligent control",

        topics: [
            "PLC",
            "SENSORS",
            "CONTROL",
            "ROBOTICS",
            "INDUSTRY 4.0"
        ],

        videoTitle:
            "Understand Automation",

        /*
           LATER PUT:

           video: "automation.mp4"
        */

        video: "",

        color:
            "#3b82f6",

        darkColor:
            "#071525"

    },



    /* =====================================================
       04 — INNOVATION
    ===================================================== */

    innovation: {

        number: "04",

        label: "INNOVATION",

        title:
            'Imagine what<br><span>comes next.</span>',

        description:
            "Innovation is about transforming creative ideas into useful technological solutions, products, systems and experiences.",

        descriptionTwo:
            "At Smart Club, innovation connects everything we learn. We want to use technology creatively to solve problems, develop new ideas and create real impact.",

        beforeTitle:
            "Creative Idea",

        beforeText:
            "A new possibility",

        afterTitle:
            "Real Impact",

        afterText:
            "A useful solution",

        topics: [
            "CREATIVITY",
            "AI",
            "PROTOTYPING",
            "PROJECTS",
            "PROBLEM SOLVING"
        ],

        videoTitle:
            "Explore Innovation",

        /*
           LATER PUT:

           video: "innovation.mp4"
        */

        video: "",

        color:
            "#b00045",

        darkColor:
            "#22000d"

    }

};
/* =========================================================
   FRENCH TRANSLATIONS FOR DYNAMIC FIELD CARDS
========================================================= */

const fieldTranslations = {

    fr: {

        digitalization: {

            label: "DIGITALISATION",

            title:
                'Du traditionnel<br>au <span>numérique.</span>',

            description:
                "La digitalisation consiste à utiliser les technologies numériques pour améliorer les processus, les méthodes de travail et les services existants.",

            descriptionTwo:
                "Dans l’industrie, la digitalisation peut transformer les processus manuels et les documents papier en systèmes connectés capables de collecter, stocker et utiliser les informations plus efficacement.",

            beforeTitle:
                "Processus papier",

            beforeText:
                "Informations manuelles",

            afterTitle:
                "Système numérique",

            afterText:
                "Informations connectées",

            topics: [
                "BASES DE DONNÉES",
                "DONNÉES",
                "IoT",
                "INDUSTRIE 4.0",
                "WEB"
            ],

            videoTitle:
                "Comprendre la digitalisation"

        },


        engineering: {

            label:
                "INGÉNIERIE",

            title:
                'Penser. Concevoir.<br><span>Construire.</span>',

            description:
                "L’ingénierie applique les connaissances scientifiques et mathématiques pour concevoir, développer et améliorer des solutions à des problèmes techniques réels.",

            descriptionTwo:
                "Au Smart Club, l’ingénierie signifie aller au-delà de la théorie. Nous voulons permettre aux étudiants d’expérimenter, de concevoir, de réaliser des prototypes et de transformer leurs connaissances techniques en systèmes réels.",

            beforeTitle:
                "Problème technique",

            beforeText:
                "Un défi à résoudre",

            afterTitle:
                "Solution d’ingénierie",

            afterText:
                "Système conçu et testé",

            topics: [
                "ÉLECTRONIQUE",
                "MÉCANIQUE",
                "CONCEPTION",
                "CAO",
                "PROTOTYPAGE"
            ],

            videoTitle:
                "Découvrir l’ingénierie"

        },


        automation: {

            label:
                "AUTOMATISATION",

            title:
                'Rendre les systèmes<br><span>plus intelligents.</span>',

            description:
                "L’automatisation permet aux machines et aux processus industriels de fonctionner avec une intervention humaine réduite grâce aux capteurs, aux contrôleurs et aux logiciels.",

            descriptionTwo:
                "Elle relie les mondes physique et numérique grâce aux automates programmables, aux capteurs, aux systèmes de contrôle, à la robotique et aux technologies industrielles intelligentes.",

            beforeTitle:
                "Contrôle manuel",

            beforeText:
                "Opération humaine",

            afterTitle:
                "Système automatisé",

            afterText:
                "Contrôle intelligent",

            topics: [
                "API",
                "CAPTEURS",
                "CONTRÔLE",
                "ROBOTIQUE",
                "INDUSTRIE 4.0"
            ],

            videoTitle:
                "Comprendre l’automatisation"

        },


        innovation: {

            label:
                "INNOVATION",

            title:
                'Imaginer ce qui<br><span>vient ensuite.</span>',

            description:
                "L’innovation consiste à transformer des idées créatives en solutions technologiques, produits, systèmes et expériences utiles.",

            descriptionTwo:
                "Au Smart Club, l’innovation relie tout ce que nous apprenons. Nous voulons utiliser la technologie de manière créative pour résoudre des problèmes, développer de nouvelles idées et créer un impact réel.",

            beforeTitle:
                "Idée créative",

            beforeText:
                "Une nouvelle possibilité",

            afterTitle:
                "Impact réel",

            afterText:
                "Une solution utile",

            topics: [
                "CRÉATIVITÉ",
                "IA",
                "PROTOTYPAGE",
                "PROJETS",
                "RÉSOLUTION DE PROBLÈMES"
            ],

            videoTitle:
                "Explorer l’innovation"

        }

    }

};


/* =========================================================
   RETURN FIELD DATA IN THE CURRENT LANGUAGE
========================================================= */

function getLocalizedFieldData(fieldName) {

    const language =
        localStorage.getItem("smartClubLanguage") || "en";

    const originalData =
        fieldData[fieldName];

    if (!originalData) {

        return null;

    }

    const translatedData =
        fieldTranslations[language]?.[fieldName] || {};

    return {
        ...originalData,
        ...translatedData
    };

}



/* =========================================================
   4 — GET HTML ELEMENTS
========================================================= */

const fieldCards =
    document.querySelectorAll(".field-card");

const fieldExplorer =
    document.getElementById("fieldExplorer");

const explorerClose =
    document.getElementById("explorerClose");


const explorerNumber =
    document.getElementById("explorerNumber");

const explorerLabel =
    document.getElementById("explorerLabel");

const explorerTitle =
    document.getElementById("explorerTitle");

const explorerDescription =
    document.getElementById("explorerDescription");

const explorerDescriptionTwo =
    document.getElementById("explorerDescriptionTwo");


const beforeTitle =
    document.getElementById("beforeTitle");

const beforeText =
    document.getElementById("beforeText");

const afterTitle =
    document.getElementById("afterTitle");

const afterText =
    document.getElementById("afterText");


const explorerTopics =
    document.getElementById("explorerTopics");


const videoTitle =
    document.getElementById("videoTitle");

const videoNumber =
    document.getElementById("videoNumber");

const fieldVideo =
    document.getElementById("fieldVideo");

const videoContainer =
    document.getElementById("videoContainer");

const videoComingSoon =
    document.getElementById("videoComingSoon");

const videoStatus =
    document.getElementById("videoStatus");



/* =========================================================
   5 — CURRENT FIELD
========================================================= */

let currentField = null;



/* =========================================================
   6 — STOP VIDEO
========================================================= */

function stopVideo() {

    if (!fieldVideo) return;


    fieldVideo.pause();


    try {

        fieldVideo.currentTime = 0;

    } catch (error) {

        /* Video has not loaded yet */

    }

}



/* =========================================================
   7 — LOAD VIDEO
========================================================= */

function loadVideo(videoFile) {

    if (!fieldVideo) return;


    /* Stop previous video */

    fieldVideo.pause();


    /* Change video */

    fieldVideo.src = videoFile;


    /* Tell browser to load it */

    fieldVideo.load();

}



/* =========================================================
   8 — REMOVE VIDEO
========================================================= */

function removeVideo() {

    if (!fieldVideo) return;


    fieldVideo.pause();


    fieldVideo.removeAttribute("src");


    fieldVideo.load();

}



/* =========================================================
   9 — OPEN FIELD
========================================================= */

function openField(fieldName, forceRefresh = false) {


    const data = getLocalizedFieldData(fieldName);


    if (!data || !fieldExplorer) {

        return;

    }



    /* =====================================================
       SAME CARD CLICKED AGAIN
       → CLOSE IT
    ===================================================== */

    if (
    !forceRefresh &&
    currentField === fieldName &&
    fieldExplorer.classList.contains("open")
) {

    closeField();

    return;

}



    /* =====================================================
       STOP PREVIOUS VIDEO
    ===================================================== */

    stopVideo();



    /* =====================================================
       SAVE CURRENT FIELD
    ===================================================== */

    currentField = fieldName;



    /* =====================================================
       FIELD NUMBER
    ===================================================== */

    if (explorerNumber) {

        explorerNumber.textContent =
            data.number + " / SMART FIELD";

    }



    /* =====================================================
       FIELD LABEL
    ===================================================== */

    if (explorerLabel) {

        explorerLabel.textContent =
            data.label;

    }



    /* =====================================================
       FIELD TITLE
    ===================================================== */

    if (explorerTitle) {

        explorerTitle.innerHTML =
            data.title;

    }



    /* =====================================================
       DESCRIPTION
    ===================================================== */

    if (explorerDescription) {

        explorerDescription.textContent =
            data.description;

    }


    if (explorerDescriptionTwo) {

        explorerDescriptionTwo.textContent =
            data.descriptionTwo;

    }



    /* =====================================================
       BEFORE / AFTER
    ===================================================== */

    if (beforeTitle) {

        beforeTitle.textContent =
            data.beforeTitle;

    }


    if (beforeText) {

        beforeText.textContent =
            data.beforeText;

    }


    if (afterTitle) {

        afterTitle.textContent =
            data.afterTitle;

    }


    if (afterText) {

        afterText.textContent =
            data.afterText;

    }



    /* =====================================================
       TOPIC TAGS
    ===================================================== */

    if (explorerTopics) {


        /* Delete old topics */

        explorerTopics.innerHTML = "";


        /* Add new topics */

        data.topics.forEach(function (topic) {


            const topicElement =
                document.createElement("span");


            topicElement.textContent =
                topic;


            explorerTopics.appendChild(
                topicElement
            );

        });

    }



    /* =====================================================
       VIDEO TITLE
    ===================================================== */

    if (videoTitle) {

        videoTitle.textContent =
            data.videoTitle;

    }


    if (videoNumber) {

        videoNumber.textContent =
            data.number;

    }



    /* =====================================================
       FIELD HAS A VIDEO
    ===================================================== */

    if (data.video) {


        /* Load MP4 */

        loadVideo(
            data.video
        );


        /* Show video */

        if (videoContainer) {

            videoContainer.style.display =
                "block";

        }


        /* Hide coming soon */

        if (videoComingSoon) {

            videoComingSoon.style.display =
                "none";

        }


        /* Footer */

        if (videoStatus) {

            videoStatus.textContent =
                "WATCH VIDEO";

        }

    }



    /* =====================================================
       FIELD DOES NOT HAVE A VIDEO
    ===================================================== */

    else {


        /* Remove old video */

        removeVideo();


        /* Hide video */

        if (videoContainer) {

            videoContainer.style.display =
                "none";

        }


        /* Show coming soon */

        if (videoComingSoon) {

            videoComingSoon.style.display =
                "flex";

        }


        /* Footer */

        if (videoStatus) {

            videoStatus.textContent =
                "COMING SOON";

        }

    }



    /* =====================================================
       CHANGE EXPLORER COLOR
    ===================================================== */

    fieldExplorer.style.setProperty(
        "--field-color",
        data.color
    );


    fieldExplorer.style.setProperty(
        "--field-dark",
        data.darkColor
    );



    /* =====================================================
       REMOVE PREVIOUS SELECTED CARD
    ===================================================== */

    fieldCards.forEach(function (card) {

        card.classList.remove(
            "selected"
        );

    });



    /* =====================================================
       SELECT CURRENT CARD
    ===================================================== */

    const selectedCard =
        document.querySelector(
            '.field-card[data-field="' +
            fieldName +
            '"]'
        );


    if (selectedCard) {

        selectedCard.classList.add(
            "selected"
        );

    }



    /* =====================================================
       OPEN EXPLORER
    ===================================================== */

    fieldExplorer.classList.add(
        "open"
    );



    /* =====================================================
       SCROLL TO EXPLORER
    ===================================================== */

    setTimeout(function () {

        fieldExplorer.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, 150);

}



/* =========================================================
   10 — CLOSE FIELD
========================================================= */

function closeField() {


    if (!fieldExplorer) {

        return;

    }



    /* Stop video */

    stopVideo();



    /* Close explorer */

    fieldExplorer.classList.remove(
        "open"
    );



    /* Remove selected card */

    fieldCards.forEach(function (card) {

        card.classList.remove(
            "selected"
        );

    });



    /* Reset current field */

    currentField = null;

}



/* =========================================================
   11 — FIELD CARD CLICK
========================================================= */

fieldCards.forEach(function (card) {


    card.addEventListener(
        "click",
        function () {


            const fieldName =
                card.dataset.field;


            openField(
                fieldName
            );

        }
    );



    /* =====================================================
       KEYBOARD SUPPORT

       ENTER or SPACE opens the card
    ===================================================== */

    card.addEventListener(
        "keydown",
        function (event) {


            if (
                event.key === "Enter" ||
                event.key === " "
            ) {


                event.preventDefault();


                const fieldName =
                    card.dataset.field;


                openField(
                    fieldName
                );

            }

        }
    );

});



/* =========================================================
   12 — X CLOSE BUTTON
========================================================= */

if (explorerClose) {


    explorerClose.addEventListener(
        "click",
        function (event) {


            event.preventDefault();


            event.stopPropagation();


            closeField();

        }
    );

}



/* =========================================================
   13 — ESC KEY CLOSES FIELD
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {


        if (
            event.key === "Escape" &&
            fieldExplorer &&
            fieldExplorer.classList.contains("open")
        ) {

            closeField();

        }

    }
);



/* =========================================================
   14 — SMOOTH INTERNAL LINKS
========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(function (link) {


    link.addEventListener(
        "click",
        function (event) {


            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }



            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {

                return;

            }



            event.preventDefault();



            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});



/* =========================================================
   15 — ACTIVE NAVIGATION WHILE SCROLLING
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );


function updateActiveNavigation() {


    let currentSection = "";


    sections.forEach(function (section) {


        const sectionTop =
            section.offsetTop - 170;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });



    navigationLinks.forEach(
        function (link) {


            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute("href");


            if (
                href === "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);



/* =========================================================
   16 — RUN ACTIVE NAVIGATION ON LOAD
========================================================= */

updateActiveNavigation();



/* =========================================================
   17 — PAUSE VIDEO IF USER CHANGES TAB
========================================================= */

document.addEventListener(
    "visibilitychange",
    function () {


        if (
            document.hidden &&
            fieldVideo &&
            !fieldVideo.paused
        ) {

            fieldVideo.pause();

        }

    }
);



/* =========================================================
   18 — STOP VIDEO BEFORE LEAVING PAGE
========================================================= */

window.addEventListener(
    "beforeunload",
    function () {

        stopVideo();

    }
);



/* =========================================================
   19 — INITIAL VIDEO STATE
========================================================= */

/*
   The explorer starts closed.

   We also remove any video source at page load
   so the browser does not unnecessarily download
   the video before Digitalization is clicked.
*/

if (fieldVideo) {

    fieldVideo.removeAttribute("src");

}

/* =========================================================
   20 — SMART CLUB PROJECT DEVELOPMENT SYSTEM
========================================================= */

const projectSection =
    document.querySelector(".projects-section");

const projectProgress =
    document.getElementById("projectProgress");

const projectPercentage =
    document.getElementById("projectPercentage");


let projectStarted = false;



/* =========================================================
   21 — START PROJECT ANIMATION WHEN SECTION APPEARS
========================================================= */

if (
    projectSection &&
    projectProgress &&
    projectPercentage
) {

    const projectObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting &&
                            !projectStarted
                        ) {

                            projectStarted = true;


                            startProjectLoading();


                            /*
                                Animation only needs
                                to run once
                            */

                            projectObserver.unobserve(
                                projectSection
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.30
            }

        );


    projectObserver.observe(
        projectSection
    );

}



/* =========================================================
   22 — PROJECT PROGRESS ANIMATION
========================================================= */

function startProjectLoading() {


    /*
        Change this number whenever
        the real project progresses.

        Example:

        67 = 67%
        75 = 75%
        90 = 90%

        Don't use 100 until the
        project is actually revealed :)
    */

    const targetProgress = 62;


    let currentProgress = 0;



    /* Reset */

    projectPercentage.textContent =
        "0%";


    projectProgress.style.width =
        "0%";



    /*
        Small delay so the visitor
        can see the animation starting
    */

    setTimeout(
        function () {


            projectProgress.style.width =
                targetProgress + "%";


        },
        300
    );



    /* Percentage counter */

    const counter =
        setInterval(

            function () {


                currentProgress++;


                projectPercentage.textContent =
                    currentProgress + "%";



                /* Stop at target */

                if (
                    currentProgress >=
                    targetProgress
                ) {

                    clearInterval(
                        counter
                    );


                    projectPercentage.textContent =
                        targetProgress + "%";

                }


            },

            45

        );

}



/* =========================================================
   23 — PROJECT TERMINAL TEXT ANIMATION
========================================================= */

const terminalLines =
    document.querySelectorAll(
        ".terminal-lines p"
    );


if (
    projectSection &&
    terminalLines.length > 0
) {


    terminalLines.forEach(
        function (line) {


            line.style.opacity =
                "0";


            line.style.transform =
                "translateX(-10px)";


            line.style.transition =
                "opacity 0.4s ease, transform 0.4s ease";


        }
    );



    const terminalObserver =
        new IntersectionObserver(

            function (entries) {


                entries.forEach(
                    function (entry) {


                        if (
                            entry.isIntersecting
                        ) {


                            terminalLines.forEach(
                                function (
                                    line,
                                    index
                                ) {


                                    setTimeout(
                                        function () {


                                            line.style.opacity =
                                                "1";


                                            line.style.transform =
                                                "translateX(0)";


                                        },

                                        500 +
                                        index * 450

                                    );


                                }
                            );


                            terminalObserver.unobserve(
                                projectSection
                            );

                        }


                    }
                );

            },

            {
                threshold: 0.25
            }

        );


    terminalObserver.observe(
        projectSection
    );

}



/* =========================================================
   24 — RANDOM SYSTEM ACTIVITY
========================================================= */

/*
    Gives the project section a subtle
    "live system" feeling.

    It randomly changes the opacity
    of the small data nodes.
*/

const projectNodes =
    document.querySelectorAll(
        ".data-node"
    );


if (
    projectNodes.length > 0
) {


    setInterval(
        function () {


            projectNodes.forEach(
                function (node) {


                    const randomOpacity =
                        0.35 +
                        Math.random() * 0.65;


                    node.style.opacity =
                        randomOpacity;


                }
            );


        },

        900

    );

}



/* =========================================================
   25 — PROJECT STATUS EFFECT
========================================================= */

const projectStatus =
    document.querySelector(
        ".terminal-status"
    );


if (projectStatus) {


    const statusMessages = [

        "IN DEVELOPMENT",

        "SYSTEM ACTIVE",

        "BUILDING",

        "PROCESSING"

    ];


    let statusIndex = 0;



    setInterval(
        function () {


            statusIndex++;


            if (
                statusIndex >=
                statusMessages.length
            ) {

                statusIndex = 0;

            }


            projectStatus.textContent =
                statusMessages[
                    statusIndex
                ];


        },

        3500

    );

}



/* =========================================================
   26 — PROJECT PROGRESS SAFETY
========================================================= */

/*
    If the visitor leaves the page
    before the animation finishes,
    nothing special needs to happen.

    When they return to the page,
    the animation stays at its
    development percentage.
*/


/* =========================================================
   SMART CLUB — ENSEM

   DIGITAL MINDS.
   REAL IMPACT.

   PROJECT STATUS:
   SOMETHING BIG IS COOKING...
========================================================= */


/* =========================================================
   SMART CLUB — ENSEM

   DIGITAL MINDS.
   REAL IMPACT.
========================================================= */
/* =========================================================
   27 — BILINGUAL SYSTEM EN / FR
========================================================= */

const translations = {

    en: {

        /* NAVBAR */

        home: "Home",
        about: "About Us",
        whatWeDo: "What We Do",
        projects: "Projects",
        events: "Events",
        joinUs: "Join Us",
        joinSmartClub: "Join Smart Club",


        /* HERO */

        heroSmall:
            "ENSEM • ENGINEERING • DIGITALIZATION • INNOVATION",

        heroTitleMain:
            "DIGITAL MINDS.",

        heroTitleAccent:
            "REAL IMPACT.",

        heroDescription:
            "Smart Club is a student community at ENSEM bringing together students passionate about engineering, digitalization, automation and technological innovation.",

        discoverClub:
            "Discover Smart Club →",

        exploreProjects:
            "Explore Projects",

        watchTeaser:
            "Watch Teaser ▶",


        /* ABOUT */

        whoWeAre:
            "WHO WE ARE",

        welcomeTo:
            "Welcome to",

        smartClubDot:
            "Smart Club.",

        aboutSubtitle:
            "Where engineering meets digital innovation.",

        aboutParagraphOne:
            "Smart Club is an ENSEM student community focused on digitalization, engineering, automation and modern technologies.",

        aboutParagraphTwo:
            "We believe that learning becomes more powerful when students transform knowledge into experiments, projects and real technological solutions.",

        aboutParagraphThree:
            "Our goal is to create a community where students can learn together, develop new skills, share ideas and turn those ideas into projects capable of creating real impact.",

        discoverBureau:
            "Discover our Executive Bureau →",

        community:
            "Community",

        ideas:
            "Ideas",

        innovation:
            "Innovation",


        /* WHAT WE DO */

        whatWeDoLabel:
            "WHAT WE DO",

        learnBuild:
            "Learn. Build.",

        innovate:
            "Innovate.",

        activitiesDescription:
            "Explore the fields at the heart of Smart Club. Select a field to understand what it means, discover a practical example and learn through educational content.",

        explore:
            "EXPLORE",

        digitalization:
            "Digitalization",

        engineering:
            "Engineering",

        automation:
            "Automation",

        digitalizationCard:
            "Transform traditional industrial processes through digital technologies, data and intelligent systems.",

        engineeringCard:
            "Turn scientific and technical knowledge into practical engineering solutions.",

        automationCard:
            "Explore industrial automation, control systems, robotics and connected technologies.",

        innovationCard:
            "Transform creative ideas into technological projects capable of creating real impact.",

        discoverEverything:
            "Discover Everything We Do →",


        /* PROJECT SECTION */

        projectLab:
            "SMART CLUB • PROJECT LAB",

        somethingIs:
            "Something is",

        beingBuilt:
            "being built.",

        projectIntro:
            "Ideas are being transformed into something real. We're not ready to reveal everything yet.",

        inDevelopment:
            "IN DEVELOPMENT",

        smartSystem:
            "SMART SYSTEM // ACTIVE",

        project:
            "PROJECT",

        classified:
            "CLASSIFIED",

        projectDescription:
            "Our team is currently developing something at the intersection of engineering, digitalization and innovation.",

        terminalOne:
            "Initializing Smart Club Lab...",

        terminalTwo:
            "Engineering modules connected.",

        terminalThree:
            "Digital systems synchronized.",

        terminalFour:
            "Innovation protocol running...",

        developmentProgress:
            "DEVELOPMENT PROGRESS",

        systemBuild:
            "SYSTEM BUILD",

        processing:
            "PROCESSING",

        confidentialProject:
            "● CONFIDENTIAL PROJECT",

        revealSoon:
            "REVEAL: SOON",

        clickDiscover:
            "CLICK TO DISCOVER",


        /* EVENTS */

        smartEvents:
            "SMART CLUB EVENTS",

        meetLearn:
            "Meet. Learn.",

        create:
            "Create.",

        eventsDescription:
            "Follow our upcoming workshops, formations, conferences, challenges and Smart Club events.",

        coming:
            "COMING",

        soon:
            "SOON",

        firstEvent:
            "FIRST SMART CLUB EVENT",

        journeyBeginning:
            "Our journey is just beginning.",

        eventsText:
            "Workshops, formations, competitions, conferences, engineering challenges and technological events are coming soon.",


        /* JOIN */

        becomePart:
            "BECOME PART OF SMART CLUB",

        yourIdeas:
            "Your ideas can",

        makeImpact:
            "make an impact.",

        joinDescription:
            "Are you an ENSEM student interested in technology, engineering and innovation? Join our community and help us learn, build and innovate together.",

        discoverTeam:
            "Discover the Team",


        /* FOOTER */

        studentClubOf:
            "STUDENT CLUB OF",

        followClub:
            "FOLLOW SMART CLUB",

        footerSlogan:
            "Digital Minds. Real Impact.",
        
        smartExample: "SMART EXAMPLE",
        before: "BEFORE",
        after: "AFTER",
        smartClubLearn: "SMART CLUB • LEARN",
        smartClubLearning: "SMART CLUB LEARNING",
        watchVideo: "WATCH VIDEO",
        comingSoon: "COMING SOON",
        studentClubOf: "STUDENT CLUB OF",

ensemFullName:
    "National Higher School of Electricity and Mechanics",

casablanca:
    "CASABLANCA",

directorEyebrow:
    "WORD FROM THE DIRECTOR",

directorTitle:
    'A word from our <span>Director.</span>',

directorQuote:
    "Smart Club represents the spirit of initiative, innovation and collaboration that we encourage among our engineering students.",

directorName:
    "Director Name",

directorRole:
    "DIRECTOR OF ENSEM",

    },


    fr: {

        /* NAVBAR */

        home: "Accueil",
        about: "À propos",
        whatWeDo: "Nos activités",
        projects: "Projets",
        events: "Événements",
        joinUs: "Nous rejoindre",
        joinSmartClub: "Rejoindre Smart Club",


        /* HERO */

        heroSmall:
            "ENSEM • INGÉNIERIE • DIGITALISATION • INNOVATION",

        heroTitleMain:
            "ESPRITS NUMÉRIQUES.",

        heroTitleAccent:
            "IMPACT RÉEL.",

        heroDescription:
            "Smart Club est une communauté étudiante de l’ENSEM réunissant des étudiants passionnés par l’ingénierie, la digitalisation, l’automatisation et l’innovation technologique.",

        discoverClub:
            "Découvrir Smart Club →",

        exploreProjects:
            "Explorer les projets",

        watchTeaser:
            "Voir le teaser ▶",


        /* ABOUT */

        whoWeAre:
            "QUI SOMMES-NOUS",

        welcomeTo:
            "Bienvenue au",

        smartClubDot:
            "Smart Club.",

        aboutSubtitle:
            "Là où l’ingénierie rencontre l’innovation numérique.",

        aboutParagraphOne:
            "Smart Club est une communauté étudiante de l’ENSEM axée sur la digitalisation, l’ingénierie, l’automatisation et les technologies modernes.",

        aboutParagraphTwo:
            "Nous croyons que l’apprentissage devient plus puissant lorsque les étudiants transforment leurs connaissances en expériences, projets et solutions technologiques concrètes.",

        aboutParagraphThree:
            "Notre objectif est de créer une communauté où les étudiants peuvent apprendre ensemble, développer de nouvelles compétences, partager leurs idées et les transformer en projets capables de créer un impact réel.",

        discoverBureau:
            "Découvrir notre bureau exécutif →",

        community:
            "Communauté",

        ideas:
            "Idées",

        innovation:
            "Innovation",


        /* WHAT WE DO */

        whatWeDoLabel:
            "NOS ACTIVITÉS",

        learnBuild:
            "Apprendre. Construire.",

        innovate:
            "Innover.",

        activitiesDescription:
            "Explorez les domaines au cœur de Smart Club. Sélectionnez un domaine pour comprendre sa signification, découvrir un exemple pratique et apprendre grâce à un contenu éducatif.",

        explore:
            "EXPLORER",

        digitalization:
            "Digitalisation",

        engineering:
            "Ingénierie",

        automation:
            "Automatisation",

        digitalizationCard:
            "Transformer les processus industriels traditionnels grâce aux technologies numériques, aux données et aux systèmes intelligents.",

        engineeringCard:
            "Transformer les connaissances scientifiques et techniques en solutions d’ingénierie pratiques.",

        automationCard:
            "Explorer l’automatisation industrielle, les systèmes de contrôle, la robotique et les technologies connectées.",

        innovationCard:
            "Transformer des idées créatives en projets technologiques capables de créer un impact réel.",

        discoverEverything:
            "Découvrir toutes nos activités →",


        /* PROJECT SECTION */

        projectLab:
            "SMART CLUB • LABORATOIRE DE PROJETS",

        somethingIs:
            "Quelque chose est",

        beingBuilt:
            "en cours de création.",

        projectIntro:
            "Des idées sont en train de devenir réalité. Nous ne sommes pas encore prêts à tout révéler.",

        inDevelopment:
            "EN DÉVELOPPEMENT",

        smartSystem:
            "SYSTÈME INTELLIGENT // ACTIF",

        project:
            "PROJET",

        classified:
            "CONFIDENTIEL",

        projectDescription:
            "Notre équipe développe actuellement un projet à l’intersection de l’ingénierie, de la digitalisation et de l’innovation.",

        terminalOne:
            "Initialisation du laboratoire Smart Club...",

        terminalTwo:
            "Modules d’ingénierie connectés.",

        terminalThree:
            "Systèmes numériques synchronisés.",

        terminalFour:
            "Protocole d’innovation en cours...",

        developmentProgress:
            "PROGRESSION DU DÉVELOPPEMENT",

        systemBuild:
            "CONSTRUCTION DU SYSTÈME",

        processing:
            "TRAITEMENT",

        confidentialProject:
            "● PROJET CONFIDENTIEL",

        revealSoon:
            "RÉVÉLATION : BIENTÔT",

        clickDiscover:
            "CLIQUER POUR DÉCOUVRIR",


        /* EVENTS */

        smartEvents:
            "ÉVÉNEMENTS SMART CLUB",

        meetLearn:
            "Rencontrer. Apprendre.",

        create:
            "Créer.",

        eventsDescription:
            "Suivez nos prochains ateliers, formations, conférences, challenges et événements Smart Club.",

        coming:
            "BIENTÔT",

        soon:
            "DISPONIBLE",

        firstEvent:
            "PREMIER ÉVÉNEMENT SMART CLUB",

        journeyBeginning:
            "Notre aventure ne fait que commencer.",

        eventsText:
            "Ateliers, formations, compétitions, conférences, défis d’ingénierie et événements technologiques arrivent bientôt.",


        /* JOIN */

        becomePart:
            "REJOIGNEZ SMART CLUB",

        yourIdeas:
            "Vos idées peuvent",

        makeImpact:
            "avoir un impact.",

        joinDescription:
            "Vous êtes étudiant à l’ENSEM et intéressé par la technologie, l’ingénierie et l’innovation ? Rejoignez notre communauté pour apprendre, construire et innover ensemble.",

        discoverTeam:
            "Découvrir l’équipe",


        /* FOOTER */

        studentClubOf:
            "CLUB ÉTUDIANT DE",

        followClub:
            "SUIVRE SMART CLUB",

        footerSlogan:
            "Esprits numériques. Impact réel.",
            
        smartExample: "EXEMPLE PRATIQUE",
        before: "AVANT",
        after: "APRÈS",
        smartClubLearn: "SMART CLUB • APPRENDRE",
        smartClubLearning: "APPRENTISSAGE SMART CLUB",
        watchVideo: "VOIR LA VIDÉO",
        comingSoon: "BIENTÔT",
        studentClubOf:
    "CLUB ÉTUDIANT DE",

ensemFullName:
    "École Nationale Supérieure d'Électricité et de Mécanique",

casablanca:
    "CASABLANCA",

directorEyebrow:
    "MOT DU DIRECTEUR",

directorTitle:
    'Un mot de notre <span>Directeur.</span>',

directorQuote:
    "Smart Club représente l'esprit d'initiative, d'innovation et de collaboration que nous encourageons auprès de nos étudiants ingénieurs.",

directorName:
    "Nom du Directeur",

directorRole:
    "DIRECTEUR DE L'ENSEM",

    }

};



function applyLanguage(language) {

    const text = translations[language];

    if (!text) return;


    document.documentElement.lang = language;


    document.querySelectorAll("[data-i18n]").forEach(function (element) {

        const key = element.dataset.i18n;

        if (text[key] !== undefined) {

            element.textContent = text[key];

        }

    });


    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {

        const key = element.dataset.i18nHtml;

        if (text[key] !== undefined) {

            element.innerHTML = text[key];

        }

    });


    localStorage.setItem("smartClubLanguage", language);


    const enButton = document.getElementById("enBtn");
    const frButton = document.getElementById("frBtn");


    if (enButton) {

        enButton.classList.toggle(
            "active",
            language === "en"
        );

    }


    if (frButton) {

        frButton.classList.toggle(
            "active",
            language === "fr"
        );

    }
    /* Refresh the currently opened field card */

if (
    currentField &&
    fieldExplorer &&
    fieldExplorer.classList.contains("open")
) {

    openField(currentField, true);

}


}



const enButton =
    document.getElementById("enBtn");

const frButton =
    document.getElementById("frBtn");


if (enButton) {

    enButton.addEventListener("click", function () {

        applyLanguage("en");

    });

}


if (frButton) {

    frButton.addEventListener("click", function () {

        applyLanguage("fr");

    });

}



const savedLanguage =
    localStorage.getItem("smartClubLanguage") || "en";


applyLanguage(savedLanguage);
/* =========================================================
   SMART CLUB — MAJESTIC MOTION SYSTEM
   Add this at the VERY END of script.js
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       SETTINGS
    ===================================================== */

    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;

    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    const hasFinePointer =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;


    if (reduceMotion) {
        document.documentElement.classList.add(
            "reduced-motion"
        );
    }



    /* =====================================================
       01 — PAGE ENTRANCE
    ===================================================== */

    document.documentElement.classList.add(
        "smart-loading"
    );


    window.addEventListener("load", function () {

        document.documentElement.classList.remove(
            "smart-loading"
        );

        document.documentElement.classList.add(
            "smart-ready"
        );

    });



    /* =====================================================
       02 — PREMIUM SCROLL PROGRESS
    ===================================================== */

    const scrollProgress =
        document.createElement("div");


    scrollProgress.setAttribute(
        "aria-hidden",
        "true"
    );


    Object.assign(
        scrollProgress.style,
        {
            position: "fixed",
            top: "0",
            left: "0",
            width: "0%",
            height: "2px",
            zIndex: "99999",
            pointerEvents: "none",

            background:
                "linear-gradient(90deg," +
                "#d60063 0%," +
                "#ff2d83 45%," +
                "#00d9ff 100%)",

            boxShadow:
                "0 0 16px rgba(214,0,99,.8)," +
                "0 0 28px rgba(0,217,255,.28)",

            transition:
                "width .08s linear"
        }
    );


    document.body.appendChild(
        scrollProgress
    );


    function updateScrollProgress() {

        const scrollable =
            document.documentElement.scrollHeight -
            window.innerHeight;


        const progress =
            scrollable > 0
                ? window.scrollY / scrollable
                : 0;


        scrollProgress.style.width =
            Math.min(
                progress * 100,
                100
            ) + "%";

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        {
            passive: true
        }
    );


    updateScrollProgress();



    /* =====================================================
       03 — CINEMATIC SCROLL REVEAL
    ===================================================== */

    const revealTargets =
        document.querySelectorAll(

            ".section-heading," +

            ".about-text," +
            ".stats," +
            ".stat," +

            ".field-card," +
            ".field-explorer," +

            ".projects-header," +
            ".project-terminal," +

            ".event-container," +

            ".join-label," +
            ".join h2," +
            ".join-description," +
            ".join-buttons," +

            ".footer-brand," +
            ".footer-school," +
            ".footer-social"

        );


    revealTargets.forEach(function (
        element,
        index
    ) {

        element.classList.add(
            "reveal-modern"
        );


        /*
            Small stagger.
            Capped so elements far down the
            document do not get huge delays.
        */

        element.style.transitionDelay =
            Math.min(
                (index % 5) * 70,
                280
            ) + "ms";

    });



    if (!reduceMotion) {

        const revealObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "revealed"
                                    );


                                revealObserver
                                    .unobserve(
                                        entry.target
                                    );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -45px 0px"
                }

            );


        revealTargets.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );

            }
        );

    }

    else {

        revealTargets.forEach(
            function (element) {

                element.classList.add(
                    "revealed"
                );

            }
        );

    }



    /* =====================================================
       04 — MOUSE AURA
       Soft magenta/cyan atmospheric light
    ===================================================== */

    if (
        hasFinePointer &&
        !reduceMotion
    ) {

        const aura =
            document.createElement("div");


        aura.setAttribute(
            "aria-hidden",
            "true"
        );


        Object.assign(
            aura.style,
            {

                position:
                    "fixed",

                width:
                    "520px",

                height:
                    "520px",

                left:
                    "0",

                top:
                    "0",

                zIndex:
                    "0",

                pointerEvents:
                    "none",

                borderRadius:
                    "50%",

                opacity:
                    ".18",

                background:
                    "radial-gradient(" +
                    "circle," +
                    "rgba(214,0,99,.38) 0%," +
                    "rgba(132,45,255,.14) 30%," +
                    "rgba(0,217,255,.07) 48%," +
                    "transparent 72%" +
                    ")",

                filter:
                    "blur(20px)",

                transform:
                    "translate(-50%, -50%)",

                transition:
                    "opacity .4s ease",

                willChange:
                    "left, top"

            }
        );


        document.body.appendChild(
            aura
        );


        let auraX =
            window.innerWidth / 2;

        let auraY =
            window.innerHeight / 2;

        let targetAuraX =
            auraX;

        let targetAuraY =
            auraY;


        document.addEventListener(
            "mousemove",
            function (event) {

                targetAuraX =
                    event.clientX;

                targetAuraY =
                    event.clientY;

            },
            {
                passive: true
            }
        );


        document.addEventListener(
            "mouseleave",
            function () {

                aura.style.opacity =
                    "0";

            }
        );


        document.addEventListener(
            "mouseenter",
            function () {

                aura.style.opacity =
                    ".18";

            }
        );


        function animateAura() {

            auraX +=
                (
                    targetAuraX -
                    auraX
                ) * 0.08;


            auraY +=
                (
                    targetAuraY -
                    auraY
                ) * 0.08;


            aura.style.left =
                auraX + "px";

            aura.style.top =
                auraY + "px";


            requestAnimationFrame(
                animateAura
            );

        }


        animateAura();

    }



    /* =====================================================
       05 — HERO PARTICLE NETWORK
    ===================================================== */

    const hero =
        document.querySelector(
            ".hero"
        );


    if (
        hero &&
        !reduceMotion
    ) {

        const canvas =
            document.createElement(
                "canvas"
            );


        canvas.setAttribute(
            "aria-hidden",
            "true"
        );


        Object.assign(
            canvas.style,
            {

                position:
                    "absolute",

                inset:
                    "0",

                width:
                    "100%",

                height:
                    "100%",

                zIndex:
                    "1",

                pointerEvents:
                    "none",

                opacity:
                    isMobile
                        ? ".35"
                        : ".55"

            }
        );


        hero.insertBefore(
            canvas,
            hero.firstChild
        );


        const ctx =
            canvas.getContext(
                "2d"
            );


        let width = 0;

        let height = 0;

        let particles = [];

        let heroMouseX =
            0;

        let heroMouseY =
            0;

        let heroMouseActive =
            false;



        function resizeParticleCanvas() {

            const rect =
                hero.getBoundingClientRect();


            const dpr =
                Math.min(
                    window.devicePixelRatio ||
                    1,
                    2
                );


            width =
                rect.width;

            height =
                rect.height;


            canvas.width =
                width * dpr;

            canvas.height =
                height * dpr;


            canvas.style.width =
                width + "px";

            canvas.style.height =
                height + "px";


            ctx.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );


            createParticles();

        }



        function createParticles() {

            particles = [];


            const particleCount =
                isMobile
                    ? 28
                    : Math.min(
                        75,
                        Math.floor(
                            width / 18
                        )
                    );


            for (
                let i = 0;
                i < particleCount;
                i++
            ) {

                particles.push({

                    x:
                        Math.random() *
                        width,

                    y:
                        Math.random() *
                        height,

                    vx:
                        (
                            Math.random() -
                            0.5
                        ) * 0.20,

                    vy:
                        (
                            Math.random() -
                            0.5
                        ) * 0.20,

                    radius:
                        Math.random() *
                        1.3 +
                        0.45,

                    type:
                        Math.random() >
                        0.72
                            ? "cyan"
                            : "magenta",

                    phase:
                        Math.random() *
                        Math.PI *
                        2

                });

            }

        }



        hero.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    hero.getBoundingClientRect();


                heroMouseX =
                    event.clientX -
                    rect.left;

                heroMouseY =
                    event.clientY -
                    rect.top;

                heroMouseActive =
                    true;

            }
        );


        hero.addEventListener(
            "mouseleave",
            function () {

                heroMouseActive =
                    false;

            }
        );



        function animateParticles(
            time
        ) {

            ctx.clearRect(
                0,
                0,
                width,
                height
            );


            /*
                CONNECTION LINES
            */

            for (
                let i = 0;
                i < particles.length;
                i++
            ) {

                const first =
                    particles[i];


                for (
                    let j = i + 1;
                    j < particles.length;
                    j++
                ) {

                    const second =
                        particles[j];


                    const dx =
                        first.x -
                        second.x;

                    const dy =
                        first.y -
                        second.y;


                    const distance =
                        Math.sqrt(
                            dx * dx +
                            dy * dy
                        );


                    const maxDistance =
                        isMobile
                            ? 90
                            : 135;


                    if (
                        distance <
                        maxDistance
                    ) {

                        const opacity =
                            (
                                1 -
                                distance /
                                maxDistance
                            ) * 0.12;


                        ctx.beginPath();

                        ctx.moveTo(
                            first.x,
                            first.y
                        );

                        ctx.lineTo(
                            second.x,
                            second.y
                        );


                        ctx.strokeStyle =
                            "rgba(" +
                            "184, 106, 255," +
                            opacity +
                            ")";


                        ctx.lineWidth =
                            0.65;


                        ctx.stroke();

                    }

                }

            }



            /*
                PARTICLES
            */

            particles.forEach(
                function (
                    particle
                ) {

                    particle.x +=
                        particle.vx;

                    particle.y +=
                        particle.vy;


                    /*
                        Mouse gently repels
                        nearby particles.
                    */

                    if (
                        heroMouseActive &&
                        !isMobile
                    ) {

                        const dx =
                            particle.x -
                            heroMouseX;

                        const dy =
                            particle.y -
                            heroMouseY;


                        const distance =
                            Math.sqrt(
                                dx * dx +
                                dy * dy
                            );


                        if (
                            distance <
                            130 &&
                            distance >
                            0
                        ) {

                            particle.x +=
                                (
                                    dx /
                                    distance
                                ) * 0.32;

                            particle.y +=
                                (
                                    dy /
                                    distance
                                ) * 0.32;

                        }

                    }


                    /*
                        Wrap particles
                    */

                    if (
                        particle.x < -5
                    ) {

                        particle.x =
                            width + 5;

                    }


                    if (
                        particle.x >
                        width + 5
                    ) {

                        particle.x =
                            -5;

                    }


                    if (
                        particle.y < -5
                    ) {

                        particle.y =
                            height + 5;

                    }


                    if (
                        particle.y >
                        height + 5
                    ) {

                        particle.y =
                            -5;

                    }



                    const pulse =
                        0.65 +
                        Math.sin(
                            time * 0.001 +
                            particle.phase
                        ) * 0.25;


                    const color =
                        particle.type ===
                        "cyan"

                            ? "0,217,255"

                            : "255,45,131";


                    /*
                        Glow
                    */

                    ctx.beginPath();

                    ctx.arc(
                        particle.x,
                        particle.y,
                        particle.radius *
                        5,
                        0,
                        Math.PI * 2
                    );


                    ctx.fillStyle =
                        "rgba(" +
                        color +
                        "," +
                        0.025 *
                        pulse +
                        ")";


                    ctx.fill();


                    /*
                        Core
                    */

                    ctx.beginPath();

                    ctx.arc(
                        particle.x,
                        particle.y,
                        particle.radius,
                        0,
                        Math.PI * 2
                    );


                    ctx.fillStyle =
                        "rgba(" +
                        color +
                        "," +
                        0.50 *
                        pulse +
                        ")";


                    ctx.fill();

                }
            );


            requestAnimationFrame(
                animateParticles
            );

        }


        resizeParticleCanvas();


        window.addEventListener(
            "resize",
            resizeParticleCanvas
        );


        requestAnimationFrame(
            animateParticles
        );

    }



    /* =====================================================
       06 — HERO DEPTH / PARALLAX
    ===================================================== */

    if (
        hero &&
        hasFinePointer &&
        !reduceMotion
    ) {

        const heroContent =
            hero.querySelector(
                ".hero-content"
            );

        const heroVisual =
            hero.querySelector(
                ".hero-visual"
            );


        let currentX = 0;

        let currentY = 0;

        let desiredX = 0;

        let desiredY = 0;



        hero.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    hero.getBoundingClientRect();


                desiredX =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    0.5;


                desiredY =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    0.5;

            }
        );


        hero.addEventListener(
            "mouseleave",
            function () {

                desiredX = 0;

                desiredY = 0;

            }
        );


        function animateHeroDepth() {

            currentX +=
                (
                    desiredX -
                    currentX
                ) * 0.065;


            currentY +=
                (
                    desiredY -
                    currentY
                ) * 0.065;


            if (heroContent) {

                heroContent.style.transform =
                    "translate3d(" +
                    currentX * -10 +
                    "px," +
                    currentY * -7 +
                    "px,0)";

            }


            if (heroVisual) {

                heroVisual.style.transform =
                    "translate3d(" +
                    currentX * 18 +
                    "px," +
                    currentY * 12 +
                    "px,0)";

            }


            requestAnimationFrame(
                animateHeroDepth
            );

        }


        animateHeroDepth();

    }



    /* =====================================================
       07 — HERO ORBIT REACTION
    ===================================================== */

    const brandOrbit =
        document.querySelector(
            ".brand-orbit"
        );


    if (
        brandOrbit &&
        hasFinePointer &&
        !reduceMotion
    ) {

        const orbitLayers =
            brandOrbit.querySelectorAll(
                ".orbit"
            );


        brandOrbit.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    brandOrbit
                        .getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    0.5;


                orbitLayers.forEach(
                    function (
                        orbit,
                        index
                    ) {

                        const strength =
                            (
                                index + 1
                            ) * 3;


                        orbit.style.transform =
                            "translate3d(" +
                            x * strength +
                            "px," +
                            y * strength +
                            "px,0)";

                    }
                );

            }
        );


        brandOrbit.addEventListener(
            "mouseleave",
            function () {

                orbitLayers.forEach(
                    function (orbit) {

                        orbit.style.transform =
                            "";

                    }
                );

            }
        );

    }



    /* =====================================================
       08 — PREMIUM FIELD CARD 3D TILT
    ===================================================== */

    const majesticCards =
        document.querySelectorAll(
            ".field-card"
        );


    if (
        hasFinePointer &&
        !reduceMotion
    ) {

        majesticCards.forEach(
            function (card) {

                card.style.transformStyle =
                    "preserve-3d";


                card.addEventListener(
                    "mousemove",
                    function (event) {

                        const rect =
                            card
                                .getBoundingClientRect();


                        const mouseX =
                            event.clientX -
                            rect.left;


                        const mouseY =
                            event.clientY -
                            rect.top;


                        const centerX =
                            rect.width / 2;


                        const centerY =
                            rect.height / 2;


                        const rotateY =
                            (
                                mouseX -
                                centerX
                            ) /
                            centerX *
                            3.2;


                        const rotateX =
                            (
                                centerY -
                                mouseY
                            ) /
                            centerY *
                            3.2;


                        card.style.transform =
                            "perspective(1100px)" +
                            " translateY(-7px)" +
                            " rotateX(" +
                            rotateX +
                            "deg)" +
                            " rotateY(" +
                            rotateY +
                            "deg)";


                        /*
                            Position used for glow
                            if CSS uses these vars.
                        */

                        card.style.setProperty(
                            "--mouse-x",
                            mouseX + "px"
                        );


                        card.style.setProperty(
                            "--mouse-y",
                            mouseY + "px"
                        );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        card.style.transform =
                            "";

                    }
                );

            }
        );

    }



    /* =====================================================
       09 — IMAGE DEPTH INSIDE FIELD CARDS
    ===================================================== */

    if (
        hasFinePointer &&
        !reduceMotion
    ) {

        majesticCards.forEach(
            function (card) {

                const image =
                    card.querySelector(
                        ".card-image img"
                    );


                if (!image) return;


                card.addEventListener(
                    "mousemove",
                    function (event) {

                        const rect =
                            card
                                .getBoundingClientRect();


                        const x =
                            (
                                event.clientX -
                                rect.left
                            ) /
                            rect.width -
                            0.5;


                        const y =
                            (
                                event.clientY -
                                rect.top
                            ) /
                            rect.height -
                            0.5;


                        image.style.transform =
                            "scale(1.09)" +
                            " translate(" +
                            x * -8 +
                            "px," +
                            y * -8 +
                            "px)";

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        image.style.transform =
                            "";

                    }
                );

            }
        );

    }



    /* =====================================================
       10 — MAGNETIC BUTTONS
    ===================================================== */

    if (
        hasFinePointer &&
        !reduceMotion
    ) {

        const magneticButtons =
            document.querySelectorAll(

                ".primary-btn," +
                ".secondary-btn," +
                ".join-btn," +
                ".join-main-btn," +
                ".join-outline-btn," +
                ".text-link"

            );


        magneticButtons.forEach(
            function (button) {

                button.addEventListener(
                    "mousemove",
                    function (event) {

                        const rect =
                            button
                                .getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left -
                            rect.width / 2;


                        const y =
                            event.clientY -
                            rect.top -
                            rect.height / 2;


                        button.style.transform =
                            "translate(" +
                            x * 0.10 +
                            "px," +
                            y * 0.15 +
                            "px)";

                    }
                );


                button.addEventListener(
                    "mouseleave",
                    function () {

                        button.style.transform =
                            "";

                    }
                );

            }
        );

    }



    /* =====================================================
       11 — STAT COUNTER ENTRANCE
    ===================================================== */

    const statsBlock =
        document.querySelector(
            ".stats"
        );


    let statsAnimated =
        false;


    if (
        statsBlock &&
        !reduceMotion
    ) {

        const statsObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                !entry.isIntersecting ||
                                statsAnimated
                            ) {

                                return;

                            }


                            statsAnimated =
                                true;


                            animateNumericText(
                                ".stat:nth-child(1) h3",
                                1,
                                "",
                                true
                            );


                            animateNumericText(
                                ".stat:nth-child(3) h3",
                                100,
                                "%",
                                false
                            );


                            statsObserver.disconnect();

                        }
                    );

                },

                {
                    threshold:
                        0.35
                }

            );


        statsObserver.observe(
            statsBlock
        );

    }



    function animateNumericText(
        selector,
        target,
        suffix,
        pad
    ) {

        const element =
            document.querySelector(
                selector
            );


        if (!element) return;


        const duration =
            1200;


        const start =
            performance.now();


        function update(
            now
        ) {

            const elapsed =
                now -
                start;


            const progress =
                Math.min(
                    elapsed /
                    duration,
                    1
                );


            /*
                Smooth ease out
            */

            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            let value =
                Math.round(
                    target *
                    eased
                );


            if (pad) {

                value =
                    String(value)
                        .padStart(
                            2,
                            "0"
                        );

            }


            element.textContent =
                value +
                suffix;


            if (
                progress <
                1
            ) {

                requestAnimationFrame(
                    update
                );

            }

        }


        requestAnimationFrame(
            update
        );

    }



    /* =====================================================
       12 — PROJECT TERMINAL LIGHT SWEEP
    ===================================================== */

    const terminal =
        document.querySelector(
            ".project-terminal"
        );


    if (
        terminal &&
        !reduceMotion
    ) {

        const terminalLight =
            document.createElement(
                "div"
            );


        Object.assign(
            terminalLight.style,
            {

                position:
                    "absolute",

                top:
                    "0",

                left:
                    "-35%",

                width:
                    "30%",

                height:
                    "100%",

                pointerEvents:
                    "none",

                zIndex:
                    "20",

                opacity:
                    "0",

                background:
                    "linear-gradient(" +
                    "90deg," +
                    "transparent," +
                    "rgba(255,45,131,.065)," +
                    "rgba(0,217,255,.035)," +
                    "transparent" +
                    ")",

                transform:
                    "skewX(-15deg)"

            }
        );


        terminal.appendChild(
            terminalLight
        );


        let terminalSweepStarted =
            false;


        const sweepObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting &&
                                !terminalSweepStarted
                            ) {

                                terminalSweepStarted =
                                    true;


                                setInterval(
                                    runTerminalSweep,
                                    5500
                                );


                                setTimeout(
                                    runTerminalSweep,
                                    1200
                                );

                            }

                        }
                    );

                },

                {
                    threshold:
                        0.20
                }

            );


        sweepObserver.observe(
            terminal
        );


        function runTerminalSweep() {

            terminalLight.animate(

                [

                    {
                        left:
                            "-35%",

                        opacity:
                            0
                    },

                    {
                        opacity:
                            1,

                        offset:
                            0.15
                    },

                    {
                        opacity:
                            1,

                        offset:
                            0.75
                    },

                    {
                        left:
                            "120%",

                        opacity:
                            0
                    }

                ],

                {

                    duration:
                        1500,

                    easing:
                        "cubic-bezier(.2,.7,.2,1)"

                }

            );

        }

    }



    /* =====================================================
       13 — PROJECT MACHINE MOUSE DEPTH
    ===================================================== */

    const projectMachine =
        document.querySelector(
            ".project-machine"
        );


    if (
        projectMachine &&
        hasFinePointer &&
        !reduceMotion
    ) {

        const brainCore =
            projectMachine.querySelector(
                ".brain-core"
            );


        const gears =
            projectMachine.querySelectorAll(
                ".gear"
            );


        projectMachine.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    projectMachine
                        .getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    0.5;


                if (brainCore) {

                    brainCore.style.transform =
                        "translate3d(" +
                        x * 9 +
                        "px," +
                        y * 9 +
                        "px,0)" +
                        " scale(1.015)";

                }


                gears.forEach(
                    function (
                        gear,
                        index
                    ) {

                        gear.style.marginLeft =
                            x *
                            (
                                index === 0
                                    ? 10
                                    : -7
                            ) +
                            "px";


                        gear.style.marginTop =
                            y *
                            (
                                index === 0
                                    ? 8
                                    : -5
                            ) +
                            "px";

                    }
                );

            }
        );


        projectMachine.addEventListener(
            "mouseleave",
            function () {

                if (brainCore) {

                    brainCore.style.transform =
                        "";

                }


                gears.forEach(
                    function (gear) {

                        gear.style.marginLeft =
                            "";

                        gear.style.marginTop =
                            "";

                    }
                );

            }
        );

    }



    /* =====================================================
       14 — EVENT CARD PREMIUM POINTER LIGHT
    ===================================================== */

    const eventContainer =
        document.querySelector(
            ".event-container"
        );


    if (
        eventContainer &&
        hasFinePointer &&
        !reduceMotion
    ) {

        eventContainer.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    eventContainer
                        .getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                eventContainer.style.setProperty(
                    "--event-x",
                    x + "px"
                );


                eventContainer.style.setProperty(
                    "--event-y",
                    y + "px"
                );


                const rotateY =
                    (
                        x -
                        rect.width / 2
                    ) /
                    rect.width *
                    2;


                const rotateX =
                    (
                        rect.height / 2 -
                        y
                    ) /
                    rect.height *
                    2;


                eventContainer.style.transform =
                    "perspective(1300px)" +
                    " rotateX(" +
                    rotateX +
                    "deg)" +
                    " rotateY(" +
                    rotateY +
                    "deg)";

            }
        );


        eventContainer.addEventListener(
            "mouseleave",
            function () {

                eventContainer.style.transform =
                    "";

            }
        );

    }



    /* =====================================================
       15 — JOIN SECTION ENERGY RINGS
    ===================================================== */

    const joinSection =
        document.querySelector(
            ".join"
        );


    if (
        joinSection &&
        !reduceMotion
    ) {

        const ringContainer =
            document.createElement(
                "div"
            );


        Object.assign(
            ringContainer.style,
            {

                position:
                    "absolute",

                inset:
                    "0",

                overflow:
                    "hidden",

                pointerEvents:
                    "none",

                zIndex:
                    "1"

            }
        );


        joinSection.prepend(
            ringContainer
        );


        for (
            let i = 0;
            i < 3;
            i++
        ) {

            const ring =
                document.createElement(
                    "div"
                );


            const size =
                300 +
                i * 180;


            Object.assign(
                ring.style,
                {

                    position:
                        "absolute",

                    width:
                        size + "px",

                    height:
                        size + "px",

                    left:
                        "50%",

                    top:
                        "50%",

                    borderRadius:
                        "50%",

                    border:
                        "1px solid rgba(255,255,255," +
                        (
                            0.11 -
                            i * 0.025
                        ) +
                        ")",

                    transform:
                        "translate(-50%,-50%)",

                    boxShadow:
                        i === 0

                            ? "0 0 80px rgba(214,0,99,.12)"

                            : "none"

                }
            );


            ringContainer.appendChild(
                ring
            );


            ring.animate(

                [

                    {
                        transform:
                            "translate(-50%,-50%) scale(.92)",

                        opacity:
                            0.35
                    },

                    {
                        transform:
                            "translate(-50%,-50%) scale(1.05)",

                        opacity:
                            0.9
                    },

                    {
                        transform:
                            "translate(-50%,-50%) scale(.92)",

                        opacity:
                            0.35
                    }

                ],

                {

                    duration:
                        6000 +
                        i * 1700,

                    iterations:
                        Infinity,

                    easing:
                        "ease-in-out",

                    delay:
                        i * -1100

                }

            );

        }

    }



    /* =====================================================
       16 — SECTION NAVBAR INTELLIGENCE
    ===================================================== */

    let lastScrollY =
        window.scrollY;


    if (
        navbar &&
        !isMobile
    ) {

        window.addEventListener(
            "scroll",
            function () {

                const currentY =
                    window.scrollY;


                /*
                    Slight navbar lift when
                    scrolling down deep into page.
                */

                if (
                    currentY >
                    lastScrollY &&
                    currentY >
                    350
                ) {

                    navbar.style.transform =
                        "translateY(-6px)";

                }

                else {

                    navbar.style.transform =
                        "translateY(0)";

                }


                lastScrollY =
                    currentY;

            },
            {
                passive: true
            }
        );

    }



    /* =====================================================
       17 — SECTION AMBIENT PARALLAX
    ===================================================== */

    if (
        !isMobile &&
        !reduceMotion
    ) {

        const ambientSections =
            document.querySelectorAll(

                ".about," +
                ".activities," +
                ".projects-section," +
                ".events," +
                ".join"

            );


        let ticking =
            false;


        function updateAmbientSections() {

            const viewportCenter =
                window.innerHeight / 2;


            ambientSections.forEach(
                function (section) {

                    const rect =
                        section
                            .getBoundingClientRect();


                    const sectionCenter =
                        rect.top +
                        rect.height / 2;


                    const distance =
                        (
                            sectionCenter -
                            viewportCenter
                        ) /
                        window.innerHeight;


                    section.style.setProperty(
                        "--scroll-shift",
                        Math.max(
                            -1,
                            Math.min(
                                1,
                                distance
                            )
                        )
                    );

                }
            );


            ticking =
                false;

        }


        window.addEventListener(
            "scroll",
            function () {

                if (!ticking) {

                    requestAnimationFrame(
                        updateAmbientSections
                    );


                    ticking =
                        true;

                }

            },
            {
                passive: true
            }
        );


        updateAmbientSections();

    }



    /* =====================================================
       18 — INTERACTION SOUNDLESS "PULSE"
       Flash feedback without audio
    ===================================================== */

    const interactiveItems =
        document.querySelectorAll(

            ".primary-btn," +
            ".secondary-btn," +
            ".join-main-btn," +
            ".join-outline-btn," +
            ".field-card"

        );


    interactiveItems.forEach(
        function (item) {

            item.addEventListener(
                "pointerdown",
                function (event) {

                    if (
                        reduceMotion
                    ) {

                        return;

                    }


                    const rect =
                        item
                            .getBoundingClientRect();


                    const ripple =
                        document.createElement(
                            "span"
                        );


                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        ) * 1.4;


                    Object.assign(
                        ripple.style,
                        {

                            width:
                                size + "px",

                            height:
                                size + "px",

                            position:
                                "absolute",

                            left:
                                event.clientX -
                                rect.left -
                                size / 2 +
                                "px",

                            top:
                                event.clientY -
                                rect.top -
                                size / 2 +
                                "px",

                            borderRadius:
                                "50%",

                            pointerEvents:
                                "none",

                            zIndex:
                                "100",

                            opacity:
                                ".24",

                            background:
                                "radial-gradient(" +
                                "circle," +
                                "rgba(255,255,255,.8)," +
                                "rgba(255,45,131,.25) 30%," +
                                "transparent 68%" +
                                ")",

                            transform:
                                "scale(0)",

                            mixBlendMode:
                                "screen"

                        }
                    );


                    const computed =
                        window.getComputedStyle(
                            item
                        );


                    if (
                        computed.position ===
                        "static"
                    ) {

                        item.style.position =
                            "relative";

                    }


                    if (
                        computed.overflow ===
                        "visible"
                    ) {

                        item.style.overflow =
                            "hidden";

                    }


                    item.appendChild(
                        ripple
                    );


                    ripple.animate(

                        [

                            {
                                transform:
                                    "scale(0)",

                                opacity:
                                    ".28"
                            },

                            {
                                transform:
                                    "scale(1)",

                                opacity:
                                    "0"
                            }

                        ],

                        {

                            duration:
                                650,

                            easing:
                                "cubic-bezier(.2,.7,.2,1)"

                        }

                    ).onfinish =
                        function () {

                            ripple.remove();

                        };

                }
            );

        }
    );



    /* =====================================================
       19 — PAGE VISIBILITY PERFORMANCE
    ===================================================== */

    let animationPaused =
        false;


    document.addEventListener(
        "visibilitychange",
        function () {

            animationPaused =
                document.hidden;


            document.documentElement
                .classList
                .toggle(
                    "smart-paused",
                    animationPaused
                );

        }
    );



    /* =====================================================
       20 — SMART CLUB CONSOLE SIGNATURE
    ===================================================== */

    console.log(
        "%c SMART CLUB // ENSEM ",
        "background:#d60063;" +
        "color:white;" +
        "font-weight:bold;" +
        "padding:7px 12px;" +
        "border-radius:4px;"
    );


    console.log(
        "%c DIGITAL MINDS. REAL IMPACT. ",
        "color:#00d9ff;" +
        "font-weight:bold;" +
        "letter-spacing:2px;"
    );


})();
/* =========================================================
   ENSEM + DIRECTOR PREMIUM INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       1. SCROLL REVEAL
    ===================================================== */

    const premiumElements = document.querySelectorAll(
        ".ensem-identity-card, .director-visual, .director-content"
    );

    const premiumObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("premium-visible");

                    premiumObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    premiumElements.forEach(element => {

        element.classList.add("premium-reveal");

        premiumObserver.observe(element);

    });



    /* =====================================================
       2. ENSEM CARD MOUSE GLOW
    ===================================================== */

    const ensemCard =
        document.querySelector(".ensem-identity-card");


    if (ensemCard) {

        ensemCard.addEventListener("mousemove", event => {

            const rect =
                ensemCard.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            ensemCard.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            ensemCard.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        });

    }



    /* =====================================================
       3. DIRECTOR PHOTO PARALLAX
    ===================================================== */

    const directorSection =
        document.querySelector(".director-section");

    const directorPhoto =
        document.querySelector(".director-photo");


    if (
        directorSection &&
        directorPhoto &&
        window.innerWidth > 768
    ) {

        directorSection.addEventListener(
            "mousemove",
            event => {

                const rect =
                    directorSection.getBoundingClientRect();


                const mouseX =
                    (
                        event.clientX -
                        rect.left
                    ) / rect.width - 0.5;


                const mouseY =
                    (
                        event.clientY -
                        rect.top
                    ) / rect.height - 0.5;


                directorPhoto.style.transform =
                    `
                    scale(1.04)
                    translate(
                        ${mouseX * -8}px,
                        ${mouseY * -8}px
                    )
                    `;

            }
        );


        directorSection.addEventListener(
            "mouseleave",
            () => {

                directorPhoto.style.transform =
                    "scale(1) translate(0,0)";

            }
        );

    }



    /* =====================================================
       4. RANDOM NEURON PULSES
    ===================================================== */

    const neurons =
        document.querySelectorAll(
            ".director-neurons .neuron-dot"
        );


    neurons.forEach((neuron, index) => {

        neuron.style.animationDelay =
            `${index * 0.45}s`;

    });



    /* =====================================================
       5. ENSEM LOGO FLOAT
    ===================================================== */

    const ensemLogo =
        document.querySelector(".ensem-symbol img");


    if (ensemLogo) {

        let position = 0;


        function animateEnsemLogo() {

            position += 0.015;

            const movement =
                Math.sin(position) * 4;


            ensemLogo.style.transform =
                `translateY(${movement}px)`;


            requestAnimationFrame(
                animateEnsemLogo
            );

        }


        animateEnsemLogo();

    }

});
/* =========================================================
   SMART CLUB — GLOBAL LIVING NEURAL NETWORK
   INDEX PAGE
   Paste at the VERY END of script.js
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       DEVICE SETTINGS
    ===================================================== */

    const neuralMobile =
        window.matchMedia(
            "(max-width: 768px)"
        ).matches;


    const neuralReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;



    /* =====================================================
       SECTIONS THAT RECEIVE NEURONS
    ===================================================== */

    const neuralSections = [

        document.querySelector(".hero"),

        document.querySelector(".about"),

        document.querySelector(".ensem-identity"),

        document.querySelector(".director-section"),

        document.querySelector(".activities"),

        document.querySelector(".projects-section"),

        document.querySelector(".events"),

        document.querySelector(".join")

    ].filter(Boolean);



    /* =====================================================
       CREATE NETWORK
    ===================================================== */

    function createSmartNeuralNetwork(
        section,
        nodeCount
    ) {

        /* Prevent duplicate network */

        if (
            section.querySelector(
                ".smart-auto-neural"
            )
        ) {

            return;

        }



        const network =
            document.createElement(
                "div"
            );


        network.className =
            "smart-auto-neural";


        network.setAttribute(
            "aria-hidden",
            "true"
        );



        Object.assign(
            network.style,
            {

                position:
                    "absolute",

                inset:
                    "0",

                overflow:
                    "hidden",

                pointerEvents:
                    "none",

                zIndex:
                    "1"

            }
        );



        /*
            Ensure section can contain
            absolute neural layer.
        */

        const sectionStyle =
            getComputedStyle(
                section
            );


        if (
            sectionStyle.position ===
            "static"
        ) {

            section.style.position =
                "relative";

        }



        section.prepend(
            network
        );



        const nodes = [];



        /* =================================================
           CREATE NODES
        ================================================= */

        for (
            let i = 0;
            i < nodeCount;
            i++
        ) {

            const node =
                document.createElement(
                    "span"
                );


            node.className =
                "smart-neural-node";


            const x =
                4 +
                Math.random() *
                92;


            const y =
                6 +
                Math.random() *
                88;



            node.dataset.x =
                x;


            node.dataset.y =
                y;



            Object.assign(
                node.style,
                {

                    width:
                        neuralMobile
                            ? "4px"
                            : "6px",

                    height:
                        neuralMobile
                            ? "4px"
                            : "6px",

                    position:
                        "absolute",

                    left:
                        x + "%",

                    top:
                        y + "%",

                    borderRadius:
                        "50%",

                    opacity:
                        ".55",

                    background:
                        i % 4 === 0
                            ? "#00d9ff"
                            : "#ff2d83",

                    boxShadow:

                        i % 4 === 0

                            ? "0 0 8px #00d9ff," +
                              "0 0 22px rgba(0,217,255,.38)"

                            : "0 0 8px #ff2d83," +
                              "0 0 22px rgba(255,45,131,.40)",

                    animation:
                        neuralReducedMotion

                            ? "none"

                            : "smartNeuronPulse " +
                              (
                                  2 +
                                  Math.random() *
                                  2
                              ) +
                              "s ease-in-out infinite",

                    animationDelay:
                        (
                            -Math.random() *
                            4
                        ) +
                        "s"

                }
            );



            network.appendChild(
                node
            );


            nodes.push(
                node
            );

        }



        /* =================================================
           CONNECT NODES
        ================================================= */

        const connectionCount =
            neuralMobile
                ? Math.min(
                    nodeCount,
                    7
                )
                : Math.min(
                    nodeCount + 4,
                    18
                );



        for (
            let i = 0;
            i < connectionCount;
            i++
        ) {

            const nodeA =
                nodes[
                    Math.floor(
                        Math.random() *
                        nodes.length
                    )
                ];


            let nodeB =
                nodes[
                    Math.floor(
                        Math.random() *
                        nodes.length
                    )
                ];



            if (
                nodeA === nodeB
            ) {

                nodeB =
                    nodes[
                        (
                            nodes.indexOf(nodeA) +
                            1
                        ) %
                        nodes.length
                    ];

            }



            const x1 =
                Number(
                    nodeA.dataset.x
                );


            const y1 =
                Number(
                    nodeA.dataset.y
                );


            const x2 =
                Number(
                    nodeB.dataset.x
                );


            const y2 =
                Number(
                    nodeB.dataset.y
                );



            const dx =
                x2 -
                x1;


            const dy =
                y2 -
                y1;



            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            /*
                Don't draw extremely long
                connections.
            */

            if (
                distance >
                43
            ) {

                continue;

            }



            const angle =
                Math.atan2(
                    dy,
                    dx
                ) *
                180 /
                Math.PI;



            const line =
                document.createElement(
                    "span"
                );


            line.className =
                "smart-neural-line";



            Object.assign(
                line.style,
                {

                    height:
                        "1px",

                    position:
                        "absolute",

                    left:
                        x1 + "%",

                    top:
                        y1 + "%",

                    width:
                        distance + "%",

                    transformOrigin:
                        "left center",

                    transform:
                        "rotate(" +
                        angle +
                        "deg)",

                    opacity:
                        neuralMobile
                            ? ".20"
                            : ".34",

                    background:
                        "linear-gradient(" +
                        "90deg," +
                        "transparent," +
                        "rgba(255,45,131,.45)," +
                        "rgba(139,92,246,.28)," +
                        "rgba(0,217,255,.38)," +
                        "transparent" +
                        ")"

                }
            );



            /* SIGNAL TRAVELLING ON LINE */

            const signal =
                document.createElement(
                    "span"
                );


            Object.assign(
                signal.style,
                {

                    width:
                        "34px",

                    height:
                        "2px",

                    position:
                        "absolute",

                    top:
                        "-1px",

                    left:
                        "-15%",

                    opacity:
                        "0",

                    background:
                        "linear-gradient(" +
                        "90deg," +
                        "transparent," +
                        "#ffffff," +
                        "#ff2d83," +
                        "transparent" +
                        ")",

                    filter:
                        "drop-shadow(" +
                        "0 0 4px " +
                        "rgba(255,45,131,.8)" +
                        ")"

                }
            );



            line.appendChild(
                signal
            );


            network.insertBefore(
                line,
                network.firstChild
            );



            if (
                !neuralReducedMotion
            ) {

                signal.animate(

                    [

                        {
                            left:
                                "-15%",

                            opacity:
                                0
                        },

                        {
                            opacity:
                                .9,

                            offset:
                                .16
                        },

                        {
                            opacity:
                                .9,

                            offset:
                                .72
                        },

                        {
                            left:
                                "110%",

                            opacity:
                                0
                        }

                    ],

                    {

                        duration:
                            3200 +
                            Math.random() *
                            2600,

                        delay:
                            Math.random() *
                            3000,

                        iterations:
                            Infinity,

                        easing:
                            "linear"

                    }

                );

            }

        }



        /* =================================================
           RANDOM NODE FIRING
        ================================================= */

        if (
            !neuralReducedMotion
        ) {

            setInterval(
                function () {

                    const node =
                        nodes[
                            Math.floor(
                                Math.random() *
                                nodes.length
                            )
                        ];


                    if (!node) {

                        return;

                    }



                    node.animate(

                        [

                            {
                                transform:
                                    "scale(1)",

                                opacity:
                                    ".55",

                                filter:
                                    "brightness(1)"
                            },

                            {
                                transform:
                                    "scale(2.4)",

                                opacity:
                                    "1",

                                filter:
                                    "brightness(3)"
                            },

                            {
                                transform:
                                    "scale(1)",

                                opacity:
                                    ".55",

                                filter:
                                    "brightness(1)"
                            }

                        ],

                        {

                            duration:
                                650,

                            easing:
                                "cubic-bezier(.2,.7,.2,1)"

                        }

                    );

                },

                750 +
                Math.random() *
                650

            );

        }

    }



    /* =====================================================
       CREATE NETWORK ON EVERY SECTION
    ===================================================== */

    neuralSections.forEach(
        function (
            section,
            index
        ) {

            let amount;


            if (
                neuralMobile
            ) {

                amount =
                    index === 0
                        ? 7
                        : 5;

            }

            else {

                /*
                    Hero / Projects receive
                    slightly more neural activity.
                */

                if (
                    section.classList.contains(
                        "hero"
                    ) ||
                    section.classList.contains(
                        "projects-section"
                    )
                ) {

                    amount = 12;

                }

                else {

                    amount = 8;

                }

            }



            createSmartNeuralNetwork(
                section,
                amount
            );

        }
    );



    /* =====================================================
       NODE PULSE KEYFRAMES
       Added directly through JS
    ===================================================== */

    if (
        !document.getElementById(
            "smartNeuralAnimations"
        )
    ) {

        const style =
            document.createElement(
                "style"
            );


        style.id =
            "smartNeuralAnimations";


        style.textContent = `

            @keyframes smartNeuronPulse {

                0%,
                100% {
                    opacity: .30;
                    transform: scale(.72);
                }

                50% {
                    opacity: 1;
                    transform: scale(1.35);
                }

            }


            .smart-auto-neural {
                mix-blend-mode: screen;
            }


            .smart-auto-neural ~ * {
                position: relative;
                z-index: 2;
            }


            @media (max-width: 768px) {

                .smart-auto-neural {
                    opacity: .55;
                }

            }

        `;


        document.head.appendChild(
            style
        );

    }



    /* =====================================================
       MOUSE REACTION
       Nearby nodes move slightly toward cursor
    ===================================================== */

    if (
        !neuralMobile &&
        !neuralReducedMotion &&
        window.matchMedia(
            "(hover:hover) and (pointer:fine)"
        ).matches
    ) {

        neuralSections.forEach(
            function (section) {

                const network =
                    section.querySelector(
                        ".smart-auto-neural"
                    );


                if (!network) {

                    return;

                }



                const nodes =
                    network.querySelectorAll(
                        ".smart-neural-node"
                    );



                section.addEventListener(
                    "mousemove",
                    function (event) {

                        const rect =
                            section
                                .getBoundingClientRect();


                        const mouseX =
                            (
                                event.clientX -
                                rect.left
                            ) /
                            rect.width *
                            100;


                        const mouseY =
                            (
                                event.clientY -
                                rect.top
                            ) /
                            rect.height *
                            100;



                        nodes.forEach(
                            function (node) {

                                const nodeX =
                                    Number(
                                        node.dataset.x
                                    );


                                const nodeY =
                                    Number(
                                        node.dataset.y
                                    );


                                const dx =
                                    mouseX -
                                    nodeX;


                                const dy =
                                    mouseY -
                                    nodeY;


                                const distance =
                                    Math.sqrt(
                                        dx * dx +
                                        dy * dy
                                    );



                                if (
                                    distance <
                                    18
                                ) {

                                    node.style.transform =
                                        "translate(" +
                                        dx *
                                        .14 +
                                        "px," +
                                        dy *
                                        .14 +
                                        "px)" +
                                        " scale(1.35)";

                                }

                            }
                        );

                    }
                );



                section.addEventListener(
                    "mouseleave",
                    function () {

                        nodes.forEach(
                            function (node) {

                                node.style.transform =
                                    "";

                            }
                        );

                    }
                );

            }
        );

    }



    console.log(
        "%c SMART CLUB NEURAL NETWORK ONLINE ",
        "background:#d60063;" +
        "color:white;" +
        "font-weight:bold;" +
        "padding:6px 10px;"
    );


})();
/* =========================================================
   SMART CLUB — CLOSE MOBILE MENU ON SCROLL / SWIPE
   ========================================================= */

(() => {
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuBtn || !mobileMenu) return;

    function isMenuOpen() {
        return (
            mobileMenu.classList.contains("active") ||
            mobileMenu.classList.contains("open") ||
            mobileMenu.classList.contains("show")
        );
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove("active", "open", "show");

        menuBtn.classList.remove("active", "open");

        // Return hamburger icon
        menuBtn.textContent = "☰";

        // Accessibility
        menuBtn.setAttribute("aria-expanded", "false");
    }


    /* Close when user starts scrolling */
    window.addEventListener(
        "scroll",
        () => {
            if (isMenuOpen()) {
                closeMobileMenu();
            }
        },
        { passive: true }
    );


    /* Close immediately when finger starts swiping */
    let touchStartY = 0;

    document.addEventListener(
        "touchstart",
        (e) => {
            touchStartY = e.touches[0].clientY;
        },
        { passive: true }
    );

    document.addEventListener(
        "touchmove",
        (e) => {
            if (!isMenuOpen()) return;

            const currentY = e.touches[0].clientY;
            const distance = Math.abs(currentY - touchStartY);

            // Small threshold prevents accidental closing
            if (distance > 8) {
                closeMobileMenu();
            }
        },
        { passive: true }
    );
})();
document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuBtn || !mobileMenu) return;

    function syncMenuIcon() {
        const isOpen =
            mobileMenu.classList.contains("open") ||
            mobileMenu.classList.contains("active");

        menuBtn.classList.toggle("menu-open", isOpen);
    }

    const observer = new MutationObserver(syncMenuIcon);

    observer.observe(mobileMenu, {
        attributes: true,
        attributeFilter: ["class"]
    });

    menuBtn.addEventListener("click", () => {
        requestAnimationFrame(syncMenuIcon);
    });

    syncMenuIcon();
});