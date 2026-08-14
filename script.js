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
        comingSoon: "COMING SOON"

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